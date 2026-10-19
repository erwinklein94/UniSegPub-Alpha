import { filtrarInstituicoes, referenciaLinha, fonteSegura, selecaoDaURL } from './comparador-modelo.js';
const $=s=>document.querySelector(s);
const itens=JSON.parse($('#comparador-config').textContent);
const porId=new Map(itens.map(i=>[i.id,i]));
const escolhidas=new Set(selecaoDaURL(new URLSearchParams(location.search).get('inst'),itens));
const cargos=new Map(), cache=new Map();
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const moeda=v=>Number(v).toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
const data=v=>/^\d{4}-\d{2}-\d{2}$/.test(v||'') ? v.split('-').reverse().join('/') : 'não informada';
let versao=0;
async function carregar(id) {
  if(!cache.has(id)) cache.set(id,fetch(`data/remuneracao/${id}.json?v=20261019editorial1`).then(async r=>{
    if(!r.ok)throw Error('Falha ao carregar');
    const d=await r.json();
    if(d.instituicao_id!==id||!Array.isArray(d.linhas))throw Error('Dados incompatíveis');
    return d;
  }).catch(e=>{cache.delete(id);throw e;}));
  return cache.get(id);
}
function filtrar() {
  const visiveis=new Set(filtrarInstituicoes(itens,$('#comparador-busca').value,$('#comparador-esfera').value,$('#comparador-uf').value).map(i=>i.id));
  document.querySelectorAll('[data-comparador-item]').forEach(el=>{el.hidden=!visiveis.has(el.dataset.comparadorItem);});
  document.querySelectorAll('[data-comparador-grupo]').forEach(el=>{el.hidden=![...el.querySelectorAll('[data-comparador-item]')].some(i=>!i.hidden);});
  $('#comparador-lista-status').textContent=`${visiveis.size} de ${itens.length} instituições encontradas. ${escolhidas.size} selecionadas, incluindo as ocultas pelo filtro.`;
}
function cartao(i,d) {
  const indice=cargos.has(i.id)?cargos.get(i.id):-1, linha=d.linhas[indice];
  const ref=referenciaLinha(d,linha), fonte=fonteSegura(linha?.fonteUrl||d.fonte_principal);
  return `<article class="cmp-card"><p class="cmp-tag">${esc(i.sigla)} · ${esc(i.uf==='BR'?'Federal':i.uf)}</p><h3>${esc(i.nome)}</h3>
    <label for="cargo-${esc(i.id)}">Cargo e classe para esta comparação</label>
    <select id="cargo-${esc(i.id)}" data-cargo="${esc(i.id)}"><option value="">Escolha um cargo e uma classe</option>${d.linhas.map((l,n)=>`<option value="${n}" ${indice===n?'selected':''}>${esc(l.cargo)}</option>`).join('')}</select>
    <p class="cmp-status ${ref.confirmada?'cmp-status--ok':''}">${esc(ref.status)}</p>
    ${linha?`<div class="cmp-valor">${ref.confirmada?moeda(ref.valor):'Valor atual não confirmado'}</div><p><strong>${esc(ref.tipo)}</strong>${ref.periodo?` · ${linha.vigencia_inicio?'Vigência':'Referência'}: ${data(ref.periodo)}`:''}</p><p>${esc(linha.criterio)}</p><p>${esc(linha.benefDesc)}</p>
      ${!ref.confirmada?`<details><summary>Consultar o registro de referência</summary><p>${moeda(linha.remuneracao)} — registro cuja vigência atual precisa ser confirmada. Este valor não é apresentado como salário atual validado.</p></details>`:''}`:'<p>Selecione o cargo em cada instituição. A menor referência pode ser de formação e não corresponde necessariamente ao ingresso no cargo efetivo.</p>'}
    <p class="cmp-nota">${esc(d.revisao_dados?.nota||'Revisão documental pendente.')} Revisão registrada: ${data(d.revisao_dados?.data)}.</p>
    <div class="cmp-links"><a href="remuneracao.html?inst=${esc(i.id)}">Tabela e detalhes da instituição →</a>${fonte?`<a href="${esc(fonte)}" target="_blank" rel="noopener noreferrer">${esc(linha?.fonteNome||'Documento de referência')} ↗</a>`:''}<a href="concursos.html?inst=${esc(i.id)}">Consultar concursos →</a></div>
  </article>`;
}
async function renderizar() {
  const atual=++versao;
  $('#comparador-contador-selecao').textContent=`${escolhidas.size} selecionadas · limite de 4`;
  document.querySelectorAll('[data-comparador-check]').forEach(c=>{c.checked=escolhidas.has(c.value);});
  filtrar();
  const params=new URLSearchParams(location.search);
  if(escolhidas.size)params.set('inst',[...escolhidas].join(','));else params.delete('inst');
  const query=params.toString();history.replaceState(null,'',location.pathname+(query?'?'+query:'')+location.hash);
  if(!escolhidas.size){$('#comparador-estado').textContent='';$('#comparador-cards').innerHTML='<p class="cmp-vazio">Selecione de duas a quatro instituições e escolha um cargo em cada uma. Você também pode consultar uma instituição individualmente.</p>';return;}
  $('#comparador-estado').textContent='Carregando as tabelas selecionadas…';
  const resultados=await Promise.allSettled([...escolhidas].map(async id=>({i:porId.get(id),d:await carregar(id)})));
  if(atual!==versao)return;
  const foco=document.activeElement?.id;
  $('#comparador-cards').innerHTML=resultados.map((r,n)=>r.status==='fulfilled'?cartao(r.value.i,r.value.d):
    `<article class="cmp-card"><h3>${esc(porId.get([...escolhidas][n]).sigla)}</h3><p>Não foi possível carregar esta tabela. Os demais resultados continuam disponíveis.</p><button type="button" data-repetir>Tentar novamente</button></article>`).join('');
  $('#comparador-estado').textContent=resultados.some(r=>r.status==='rejected')?'Uma tabela não carregou. Use Tentar novamente.':'Tabelas carregadas. Confira o cargo, a composição e a vigência antes de comparar.';
  if(foco?.startsWith('cargo-'))document.getElementById(foco)?.focus({preventScroll:true});
}
$('#comparador-selecao').addEventListener('change',e=>{
  const c=e.target.closest('[data-comparador-check]');if(!c)return;
  if(c.checked&&escolhidas.size===4){c.checked=false;$('#comparador-estado').textContent='Compare até quatro instituições por vez. Desmarque uma para adicionar outra.';return;}
  if(c.checked)escolhidas.add(c.value);else{escolhidas.delete(c.value);cargos.delete(c.value);}renderizar();
});
$('#comparador-cards').addEventListener('change',e=>{const s=e.target.closest('[data-cargo]');if(!s)return;if(s.value==='')cargos.delete(s.dataset.cargo);else cargos.set(s.dataset.cargo,Number(s.value));renderizar();});
$('#comparador-cards').addEventListener('click',e=>{if(e.target.closest('[data-repetir]'))renderizar();});
$('#comparador-limpar').addEventListener('click',()=>{escolhidas.clear();cargos.clear();renderizar();});
for(const id of ['comparador-busca','comparador-esfera','comparador-uf'])$('#'+id).addEventListener(id==='comparador-busca'?'input':'change',filtrar);
renderizar();
