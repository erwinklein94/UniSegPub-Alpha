import { normalizarEvento, resumirVendas, comissaoAfiliado } from './modelo.js';
const ORIGENS = new Set(['https://universosegpub.com.br','https://www.universosegpub.com.br']);
const json = (data,status=200,headers={}) => new Response(JSON.stringify(data),{status,headers:{'Content-Type':'application/json','Cache-Control':'no-store',...headers}});
async function segredoIgual(a,b) {
  if (!a || !b) return false;
  const dig = async s => new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s)));
  const [x,y] = await Promise.all([dig(a),dig(b)]); let d=0; for(let i=0;i<x.length;i++)d|=x[i]^y[i]; return d===0;
}
async function corpoLimitado(req) {
  if (Number(req.headers.get('content-length') || 0)>262144) throw new Error('limite');
  const reader=req.body?.getReader(); if(!reader)throw new Error('json');
  const chunks=[];let length=0;
  while(true){const {done,value}=await reader.read();if(done)break;length+=value.length;if(length>262144){await reader.cancel();throw new Error('limite');}chunks.push(value);}
  const total=new Uint8Array(length);let offset=0;for(const c of chunks){total.set(c,offset);offset+=c.length;}return JSON.parse(new TextDecoder().decode(total));
}
export function criarHandler({env,fetch:request}) {
  let tokenHotmart=null, tokenValidoAte=0;
  const chamar = (url,opcoes={}) => request(url,{...opcoes,signal:AbortSignal.timeout(15000)});
  return async req => {
    const origin=req.headers.get('origin');
    if(origin&&!ORIGENS.has(origin))return json({erro:'Origem não autorizada.'},403);
    const cors=origin?{'Access-Control-Allow-Origin':origin,'Access-Control-Allow-Headers':'authorization, apikey, content-type','Access-Control-Allow-Methods':'GET, POST, OPTIONS','Vary':'Origin'}:{};
    const responder=(data,status=200)=>json(data,status,cors);
    if(req.method==='OPTIONS')return new Response(null,{status:204,headers:cors});
    const path=new URL(req.url).pathname.split('/').filter(Boolean).pop();
    const base=env('SUPABASE_URL'), key=env('SUPABASE_SERVICE_ROLE_KEY');
    if(!base||!key)return responder({erro:'Servidor ainda não configurado.'},503);
    const serviceHeaders={apikey:key,Authorization:'Bearer '+key};
    try {
      if(path==='webhook') {
        if(req.method!=='POST')return responder({erro:'Use POST.'},405);
        if(!env('HOTMART_HOTTOK'))return responder({erro:'Webhook ainda não ativado.'},503);
        if(!await segredoIgual(req.headers.get('X-HOTMART-HOTTOK'),env('HOTMART_HOTTOK')))return responder({erro:'Não autorizado.'},401);
        if(!req.headers.get('content-type')?.includes('application/json'))return responder({erro:'Envie JSON.'},415);
        let evento;
        try{evento=normalizarEvento(await corpoLimitado(req));}catch(e){return responder({erro:e.message==='limite'?'Corpo excede o limite.':'Evento inválido.'},e.message==='limite'?413:400);}
        if(!evento)return responder({recebido:true,ignorado:true});
        const saved=await chamar(base+'/rest/v1/hotmart_eventos?on_conflict=evento_id',{method:'POST',headers:{...serviceHeaders,'Content-Type':'application/json',Prefer:'resolution=ignore-duplicates,return=minimal'},body:JSON.stringify(evento)});
        if(!saved.ok)return responder({erro:'Não foi possível persistir o evento. Tente novamente.'},503);
        return responder({recebido:true});
      }
      if(req.method!=='GET')return responder({erro:'Método não permitido.'},405);
      const auth=req.headers.get('authorization')||'';
      if(!auth.startsWith('Bearer '))return responder({erro:'Entre no admin.'},401);
      const usuario=await chamar(base+'/auth/v1/user',{headers:{apikey:key,Authorization:auth}});
      if(!usuario.ok)return responder({erro:'Sessão inválida.'},401);
      const u=await usuario.json();
      if(!u.id||!u.email_confirmed_at)return responder({erro:'Administrador não autorizado.'},403);
      const membros=await chamar(base+'/rest/v1/hotmart_admins?select=user_id&user_id=eq.'+encodeURIComponent(u.id),{headers:{apikey:key,Authorization:auth}});
      if(!membros.ok||!(await membros.json()).length)return responder({erro:'Administrador não autorizado.'},403);
      if(path==='status') {
        const latest=await chamar(base+'/rest/v1/hotmart_eventos?select=recebido_em&order=recebido_em.desc&limit=1',{headers:serviceHeaders});
        if(!latest.ok)return responder({erro:'Estrutura do banco ainda não instalada.'},503);
        const rows=await latest.json();
        return responder({webhookConfigurado:Boolean(env('HOTMART_HOTTOK')),apiConfigurada:Boolean(env('HOTMART_CLIENT_ID')&&env('HOTMART_CLIENT_SECRET')),ultimoEvento:rows[0]?.recebido_em||null});
      }
      const url=new URL(req.url),inicio=url.searchParams.get('inicio'),fim=url.searchParams.get('fim');
      const valido=d=>/^\d{4}-\d{2}-\d{2}$/.test(d||'')&&Number.isFinite(Date.parse(d+'T12:00:00Z'))&&new Date(d+'T12:00:00Z').toISOString().slice(0,10)===d;
      if(!valido(inicio)||!valido(fim)||inicio>fim||Date.parse(fim)-Date.parse(inicio)>366*86400000)return responder({erro:'Período inválido (máximo 367 dias).'},400);
      if(path==='resumo') {
        // Considerar o estado mais recente de cada transação antes de filtrar
        // a aprovação: um reembolso posterior não conserva comissão aprovada.
        const rows=[];let offset=0;
        while(true){const result=await chamar(base+'/rest/v1/hotmart_eventos?select=evento_id,transacao,produto,produto_id,status,ocorrido_em,aprovado_em,comissao,moeda&order=ocorrido_em.asc,evento_id.asc&limit=1000&offset='+offset,{headers:serviceHeaders});if(!result.ok)return responder({erro:'Falha ao ler eventos.'},503);const batch=await result.json();rows.push(...batch);if(batch.length<1000)break;offset+=1000;if(offset>=50000)return responder({erro:'Volume exige consolidação no servidor; resumo não exibido para evitar totais incompletos.'},422);}
        const resumo=resumirVendas(rows,inicio,fim);
        return responder({...resumo,linhas:resumo.linhas.slice(0,100),origem:'webhook',historicoCompleto:false});
      }
      if(path==='comissoes') {
        if(!env('HOTMART_CLIENT_ID')||!env('HOTMART_CLIENT_SECRET'))return responder({erro:'Credenciais da API ainda não configuradas.'},503);
        if(!tokenHotmart||Date.now()>=tokenValidoAte){
          const basic=env('HOTMART_BASIC')||btoa(env('HOTMART_CLIENT_ID')+':'+env('HOTMART_CLIENT_SECRET'));
          const token=await chamar('https://api-sec-vlc.hotmart.com/security/oauth/token',{method:'POST',headers:{Authorization:'Basic '+basic.replace(/^Basic\s+/i,''),'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams({grant_type:'client_credentials',client_id:env('HOTMART_CLIENT_ID'),client_secret:env('HOTMART_CLIENT_SECRET')})});
          if(!token.ok)return responder({erro:'A Hotmart não autorizou as credenciais da API.'},502);
          const t=await token.json();if(!t.access_token)return responder({erro:'Resposta de autenticação inválida.'},502);tokenHotmart=t.access_token;tokenValidoAte=Date.now()+Math.max(0,Number(t.expires_in||0)-60)*1000;
        }
        const q=new URLSearchParams({commission_as:'AFFILIATE',start_date:String(Date.parse(inicio+'T00:00:00-03:00')),end_date:String(Date.parse(fim+'T23:59:59.999-03:00')),max_results:'50'});
        const cursor=url.searchParams.get('cursor');if(cursor){if(cursor.length>2000)return responder({erro:'Cursor inválido.'},400);q.set('page_token',cursor);}
        const api=await chamar('https://developers.hotmart.com/payments/api/v1/sales/commissions?'+q,{headers:{Authorization:'Bearer '+tokenHotmart}});
        if(api.status===401){tokenHotmart=null;return responder({erro:'Autenticação Hotmart expirada; tente novamente.'},502);}
        if(api.status===403)return responder({erro:'A Hotmart não liberou esta consulta para a conta/credencial.'},403);
        if(!api.ok)return responder({erro:'Consulta Hotmart indisponível. Tente novamente.'},502);
        const data=await api.json();
        return responder({itens:(data.items||[]).map(item=>({transacao:String(item.transaction||''),produto:String(item.product?.name||''),...comissaoAfiliado(item.commissions)})),proximaPagina:data.page_info?.next_page_token||null,nota:'Consulta da API filtrada como afiliado; por padrão a Hotmart retorna APPROVED e COMPLETE. Não representa saldo disponível para saque.'});
      }
      return responder({erro:'Rota não encontrada.'},404);
    } catch { return responder({erro:'Serviço temporariamente indisponível. Nenhum dado foi confirmado; tente novamente.'},503); }
  };
}
