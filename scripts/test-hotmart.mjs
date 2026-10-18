import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizarEvento, resumirVendas, comissaoAfiliado } from '../supabase/functions/hotmart-integration/modelo.js';
import { criarHandler } from '../supabase/functions/hotmart-integration/handler.js';
const agora=Date.now();
const evento=(props={})=>({id:'evt-1',version:'2.0.0',event:'PURCHASE_APPROVED',creation_date:agora,data:{product:{id:123,name:'Curso teste'},purchase:{transaction:'HP123',approved_date:agora},buyer:{email:'nao-guardar@example.com',document:'123'},commissions:[{source:'PRODUCER',value:400,currency_value:'BRL'},{source:'AFFILIATE',value:50,currency_value:'BRL'}],affiliates:[{affiliate_code:'teste'}]},...props});
const configuracao={SUPABASE_URL:'https://projeto.supabase.co',SUPABASE_SERVICE_ROLE_KEY:'segredo-servidor',HOTMART_HOTTOK:'segredo-hotmart'};
const req=(rota,options={})=>new Request('https://projeto.supabase.co/functions/v1/hotmart-integration/'+rota,options);
const webhook=(body=evento(),hottok='segredo-hotmart')=>req('webhook',{method:'POST',headers:{'X-HOTMART-HOTTOK':hottok,'Content-Type':'application/json'},body:JSON.stringify(body)});
const autorizado=(url)=>{
  if(url.includes('/auth/v1/user'))return Response.json({id:'admin-id',email_confirmed_at:'2026-01-01'});
  if(url.includes('hotmart_admins?'))return Response.json([{user_id:'admin-id'}]);
  throw new Error('Chamada inesperada: '+url);
};
test('normalização preserva apenas dados mínimos e comissão de afiliado, sem preço/PII/segredos',()=>{
  const e=normalizarEvento(evento());assert.equal(e.comissao,50);assert.equal(e.moeda,'BRL');
  assert.ok(!JSON.stringify(e).includes('nao-guardar'));assert.ok(!('buyer'in e));assert.ok(!('hottok'in e));assert.ok(!('preco'in e));
});
test('comissão ausente, inválida ou ambígua fica desconhecida; moedas permanecem distintas',()=>{
  assert.deepEqual(comissaoAfiliado([{source:'PRODUCER',value:100,currency_value:'BRL'}]),{comissao:null,moeda:null});
  for(const value of [-1,NaN,Infinity,'50'])assert.equal(comissaoAfiliado([{source:'AFFILIATE',value,currency_value:'BRL'}]).comissao,null);
  assert.equal(comissaoAfiliado([{source:'AFFILIATE',value:50,currency_value:'BRL'}],[{},{}]).comissao,null);
});
test('estado mais recente evita duplicações e reembolsos posteriores cancelam a comissão no período de aprovação',()=>{
  const aprovado={transacao:'HP1',produto:'Curso',ocorrido_em:'2026-10-01T12:00:00Z',aprovado_em:'2026-10-01T12:00:00Z',comissao:40,moeda:'BRL',status:'APPROVED'};
  const reembolso={...aprovado,status:'REFUNDED',aprovado_em:null,ocorrido_em:'2026-11-01T12:00:00Z'};
  const s=resumirVendas([reembolso,aprovado,aprovado],'2026-10-01','2026-10-31');
  assert.equal(s.transacoes,1);assert.equal(s.estornadas,1);assert.equal(s.aprovadas,0);assert.deepEqual(s.comissoes,{});
  const outro={...aprovado,transacao:'HP2',moeda:'USD',comissao:2};
  assert.deepEqual(resumirVendas([aprovado,outro],'2026-10-01','2026-10-31').comissoes,{BRL:40,USD:2});
});
test('eventos fora de ordem, empate terminal e dia em Brasília não distorcem o período',()=>{
  const a={transacao:'HP1',ocorrido_em:'2026-10-02T01:00:00Z',status:'APPROVED',comissao:20,moeda:'BRL'};
  assert.equal(resumirVendas([a],'2026-10-01','2026-10-01').aprovadas,1);
  assert.equal(resumirVendas([a,{...a,status:'REFUNDED'}],'2026-10-01','2026-10-01').aprovadas,0);
});
test('Hottok ausente/incorreto e servidor não configurado nunca escrevem',async()=>{
  let writes=0;const h=criarHandler({env:n=>configuracao[n],fetch:async()=>{writes++;return new Response(null,{status:201});}});
  assert.equal((await h(webhook(evento(),'errado'))).status,401);assert.equal((await h(webhook(evento(),''))).status,401);assert.equal(writes,0);
  const falta=criarHandler({env:n=>n==='HOTMART_HOTTOK'?undefined:configuracao[n],fetch:async()=>{throw Error();}});
  assert.equal((await falta(webhook())).status,503);
});
test('persistência é idempotente e não confirma recebimento quando o banco falha',async()=>{
  let destino,body;
  const h=criarHandler({env:n=>configuracao[n],fetch:async(url,o)=>{destino=url;body=JSON.parse(o.body);assert.match(o.headers.Prefer,/ignore-duplicates/);return new Response(null,{status:201});}});
  assert.equal((await h(webhook())).status,200);assert.match(destino,/on_conflict=evento_id/);assert.equal(body.comissao,50);
  const falha=criarHandler({env:n=>configuracao[n],fetch:async()=>new Response(null,{status:500})});assert.equal((await falha(webhook())).status,503);
});
test('payload inválido, versão antiga, JSON grande e evento não suportado são tratados',async()=>{
  const h=criarHandler({env:n=>configuracao[n],fetch:async()=>{throw Error('Não deveria escrever');}});
  assert.equal((await h(webhook({...evento(),version:'1.0.0'}))).status,400);
  assert.equal((await h(webhook({...evento(),creation_date:agora+86400000}))).status,400);
  assert.equal((await h(webhook({id:'evt-1',version:'2.0.0',event:'UNKNOWN'}))).status,200);
  assert.equal((await h(webhook({...evento(),enche:'x'.repeat(300000)}))).status,413);
});
test('admin precisa de JWT validado no Auth e UUID autorizado; origem externa bloqueada',async()=>{
  const h=criarHandler({env:n=>configuracao[n],fetch:autorizado});
  assert.equal((await h(req('status'))).status,401);
  assert.equal((await h(req('status',{headers:{Origin:'https://outro.example',Authorization:'Bearer valido'}}))).status,403);
  const negado=criarHandler({env:n=>configuracao[n],fetch:async url=>url.includes('auth/')?Response.json({id:'intruso',email_confirmed_at:'x'}):Response.json([])});
  assert.equal((await negado(req('status',{headers:{Authorization:'Bearer valido'}}))).status,403);
});
test('status revela apenas indicadores de configuração, sem credenciais',async()=>{
  const h=criarHandler({env:n=>configuracao[n],fetch:async url=>url.includes('hotmart_eventos?')?Response.json([]):autorizado(url)});
  const r=await h(req('status',{headers:{Authorization:'Bearer valido',Origin:'https://universosegpub.com.br'}}));const d=await r.json();
  assert.equal(r.status,200);assert.equal(d.webhookConfigurado,true);assert.equal(d.apiConfigurada,false);assert.equal(d.ultimoEvento,null);assert.ok(!JSON.stringify(d).includes('segredo'));
});
test('resumo lê todas as páginas de eventos e recusa datas inválidas',async()=>{
  let pages=0;const h=criarHandler({env:n=>configuracao[n],fetch:async url=>{
    if(url.includes('hotmart_eventos?')){pages++;return Response.json(pages===1?Array.from({length:1000},(_,i)=>({transacao:'HP'+i,ocorrido_em:'2026-10-10T12:00:00Z',status:'APPROVED',comissao:1,moeda:'BRL'})):[]);}return autorizado(url);
  }});
  const header={Authorization:'Bearer valido'};
  const d=await (await h(req('resumo?inicio=2026-10-01&fim=2026-10-31',{headers:header}))).json();assert.equal(d.aprovadas,1000);assert.equal(d.comissoes.BRL,1000);assert.equal(d.linhas.length,100);assert.equal(pages,2);
  assert.equal((await h(req('resumo?inicio=2026-99-01&fim=2026-10-31',{headers:header}))).status,400);
});
test('API usa credenciais somente no servidor, commission_as AFFILIATE, cursor e resposta mínima',async()=>{
  const e={...configuracao,HOTMART_CLIENT_ID:'client',HOTMART_CLIENT_SECRET:'secret'};let urlApi;
  const h=criarHandler({env:n=>e[n],fetch:async(url,o)=>{
    if(url.includes('oauth/token'))return Response.json({access_token:'token-nao-vazar',expires_in:3600});
    if(url.includes('sales/commissions')){urlApi=url;assert.equal(o.headers.Authorization,'Bearer token-nao-vazar');return Response.json({items:[{transaction:'HP1',product:{name:'Curso'},commissions:[{source:'AFFILIATE',commission:{value:12,currency_value:'BRL'},user:{name:'privado'}}]}],page_info:{next_page_token:'pagina2'}});}
    return autorizado(url);
  }});
  const r=await h(req('comissoes?inicio=2026-10-01&fim=2026-10-31&cursor=pagina1',{headers:{Authorization:'Bearer valido'}}));const d=await r.json();assert.equal(d.itens[0].comissao,12);assert.equal(d.proximaPagina,'pagina2');assert.match(urlApi,/commission_as=AFFILIATE/);assert.match(urlApi,/page_token=pagina1/);assert.ok(!JSON.stringify(d).includes('privado'));assert.ok(!JSON.stringify(d).includes('token-nao-vazar'));
});
