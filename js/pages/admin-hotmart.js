import { escapar } from './admin-analytics.js';
const ENDPOINT='https://luggjibketdxztvsgzgo.supabase.co/functions/v1/hotmart-integration';
const CHAVE='sb_publishable_onaOo8uMyySc3KWf6D6Jfg_OMT6wqcX';
const dinheiro=(valor,moeda)=>Number(valor).toLocaleString('pt-BR',{style:'currency',currency:moeda});
export function criarPainelHotmart(obterSessao) {
  const $=id=>document.getElementById(id);
  let controller,version=0,periodo=null,cursor=null;
  const limparDados=()=>{for(const id of ['hotmart-vendas','hotmart-comissao','hotmart-estornos'])$(id).textContent='—';$('hotmart-linhas').replaceChildren();$('hotmart-api-resultado').textContent='';$('hotmart-api-mais').hidden=true;cursor=null;};
  const consultar=async(rota,signal)=>{
    const s=obterSessao();if(!s)throw new Error('Entre novamente no admin.');
    const r=await fetch(ENDPOINT+'/'+rota,{headers:{apikey:CHAVE,Authorization:'Bearer '+s.token},cache:'no-store',signal});
    if(r.status===404)throw new Error('A integração ainda não foi instalada no servidor. Os números ficarão indisponíveis até a ativação.');
    let dados;try{dados=await r.json();}catch{throw new Error('O servidor não respondeu em JSON. Verifique a instalação.');}
    if(!r.ok)throw new Error(dados.erro||(r.status===403?'Sua conta ainda não foi autorizada para a integração.':'Falha ao consultar Hotmart.'));
    return dados;
  };
  async function atualizar(p) {
    periodo={...p};controller?.abort();controller=new AbortController();const signal=controller.signal;const atual=++version;
    limparDados();$('hotmart-status').textContent='Conferindo conexão…';$('hotmart-nota').textContent='';$('hotmart-api').disabled=true;
    try {
      const status=await consultar('status',signal);if(atual!==version)return;
      $('hotmart-api').disabled=!status.apiConfigurada;
      $('hotmart-status').textContent=status.webhookConfigurado?(status.ultimoEvento?'Recebendo eventos':'Servidor preparado · aguardando primeiro evento'):'Webhook ainda não ativado';
      if(!status.webhookConfigurado){$('hotmart-nota').textContent='Falta configurar o Hottok no servidor e ativar o Webhook na Hotmart.';return;}
      const resumo=await consultar('resumo?'+new URLSearchParams({inicio:p.inicio,fim:p.fim}),signal);if(atual!==version)return;
      $('hotmart-vendas').textContent=resumo.aprovadas;
      $('hotmart-comissao').textContent=Object.entries(resumo.comissoes).map(([moeda,valor])=>dinheiro(valor,moeda)).join(' · ')||'Sem comissão informada';
      $('hotmart-estornos').textContent=resumo.estornadas;
      $('hotmart-nota').textContent=`${p.inicio.split('-').reverse().join('/')} a ${p.fim.split('-').reverse().join('/')} · ${resumo.transacoes} transações observadas. ${resumo.semComissao} aprovadas sem comissão identificada. `+(status.ultimoEvento?'Último evento recebido em '+new Date(status.ultimoEvento).toLocaleString('pt-BR',{timeZone:'America/Sao_Paulo'})+'.':'Nenhum evento recebido ainda.');
      $('hotmart-linhas').innerHTML=resumo.linhas.map(e=>`<tr><td>${escapar(e.produto)}</td><td>${escapar(e.status)}</td><td>${e.comissao===null?'Não informada':escapar(dinheiro(e.comissao,e.moeda))}</td><td>${escapar(new Date(e.ocorrido_em).toLocaleDateString('pt-BR',{timeZone:'America/Sao_Paulo'}))}</td></tr>`).join('');
    }catch(e){if(e.name==='AbortError'||atual!==version)return;limparDados();$('hotmart-status').textContent='Conexão pendente';$('hotmart-nota').textContent=e instanceof TypeError?'Não foi possível acessar a integração. Ela pode estar aguardando instalação ou a conexão com o servidor falhou.':e.message;}
  }
  async function consultarAPI(mais=false){
    if(!periodo)return;
    const atual=version,signal=controller?.signal;
    $('hotmart-api').disabled=true;$('hotmart-api-mais').disabled=true;
    if(!mais){cursor=null;$('hotmart-api-resultado').textContent='Consultando as comissões autorizadas pela Hotmart…';}
    try{
      const q=new URLSearchParams({inicio:periodo.inicio,fim:periodo.fim});if(mais&&cursor)q.set('cursor',cursor);
      const data=await consultar('comissoes?'+q,signal);if(atual!==version)return;
      const texto=data.itens.map(i=>`${i.produto}: ${i.comissao===null?'comissão não identificada':dinheiro(i.comissao,i.moeda)}`).join('\n');
      $('hotmart-api-resultado').textContent=(mais?$('hotmart-api-resultado').textContent+'\n':'')+(texto||'Nenhum registro retornado para este período.')+'\n'+data.nota;
      cursor=data.proximaPagina;$('hotmart-api-mais').hidden=!cursor;
    }catch(e){if(e.name==='AbortError'||atual!==version)return;$('hotmart-api-resultado').textContent=e.message;$('hotmart-api-mais').hidden=true;}
    finally{if(atual===version){$('hotmart-api').disabled=false;$('hotmart-api-mais').disabled=false;}}
  }
  $('hotmart-atualizar').addEventListener('click',()=>periodo&&atualizar(periodo));
  $('hotmart-api').addEventListener('click',()=>consultarAPI());
  $('hotmart-api-mais').addEventListener('click',()=>consultarAPI(true));
  $('hotmart-copiar').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(ENDPOINT+'/webhook');$('hotmart-copia-status').textContent='Endereço copiado. Use somente após a instalação e validação do servidor.';}catch{$('hotmart-copia-status').textContent='Copie manualmente o endereço exibido.';}});
  return {atualizar,limpar(){controller?.abort();version++;periodo=null;limparDados();$('hotmart-status').textContent='Conexão pendente';$('hotmart-nota').textContent='';$('hotmart-api').disabled=true;}};
}
