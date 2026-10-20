import { diaSP, somarDias, criarPeriodo, escapar } from './admin-analytics.js';
import { preencherDias, graficoDiario } from './admin-google-analytics-modelo.js';
const BASE = 'https://luggjibketdxztvsgzgo.supabase.co';
const CHAVE = 'sb_publishable_onaOo8uMyySc3KWf6D6Jfg_OMT6wqcX';
const SESSAO = 'usp_admin_sessao_luggjibketdxztvsgzgo';
const $ = s => document.querySelector(s);
const fmt = n => Number(n || 0).toLocaleString('pt-BR');
const data = d => d.split('-').reverse().join('/');
let resultado = null, controlador = null, versao = 0;
function sessao() { try { const s = JSON.parse(sessionStorage.getItem(SESSAO)); return s?.token && s.email === 'erwinklein1994@gmail.com' && Date.now() < s.expira - 30000 ? s : null; } catch { return null; } }
function exigirLogin() {
  controlador?.abort(); versao++; resultado = null;
  $('#ga-resultados').hidden = true; $('#ga-config').hidden = true;
  $('#ga-dashboard').hidden = true; $('#ga-login').hidden = false;
  for (const id of ['ga-diario', 'ga-dias-linhas', 'ga-canais', 'ga-paises', 'ga-paginas-linhas']) $('#' + id).replaceChildren();
}
function mensagem(texto, erro = false) { $('#ga-status').textContent = texto; $('#ga-status').classList.toggle('login-erro', erro); }
function periodoRapido(dias) {
  $('#ga-inicio').value = somarDias(diaSP(), 1 - dias); $('#ga-fim').value = diaSP();
  document.querySelectorAll('[data-ga-dias]').forEach(b => b.setAttribute('aria-pressed', String(Number(b.dataset.gaDias) === dias)));
}
function filtros() {
  criarPeriodo($('#ga-inicio').value, $('#ga-fim').value);
  return Object.fromEntries(['inicio', 'fim', 'dispositivo', 'pais', 'canal', 'pagina'].map(id => [id, $('#ga-' + id).value.trim()]));
}
function barras(id, linhas, dimensao, metrica) {
  const max = Math.max(1, ...linhas.map(l => l[metrica]));
  $(id).innerHTML = linhas.length ? linhas.map(l => `<div><div class="ga-barra-topo"><span>${escapar(l[dimensao] || '(não definido)')}</span><strong>${fmt(l[metrica])}</strong></div><div class="ga-trilho"><span style="width:${Math.max(0, Math.min(100, l[metrica] / max * 100))}%"></span></div></div>`).join('') : '<p class="ga-vazio">Nenhum dado para estes filtros.</p>';
}
function atualizarGrafico() {
  if (!resultado) return;
  const select = $('#ga-metrica');
  $('#ga-diario').innerHTML = graficoDiario(resultado.dias, select.value, select.selectedOptions[0].textContent, window.innerWidth < 600 ? 420 : 920);
}
function renderizar(r) {
  resultado = { ...r, dias: preencherDias(r.diario.linhas, r.filtros.inicio, r.filtros.fim) };
  const resumo = r.resumo.linhas[0] || {};
  for (const [id, metrica] of [['usuarios', 'activeUsers'], ['sessoes', 'sessions'], ['views', 'screenPageViews'], ['eventos', 'eventCount']]) $('#ga-' + id).textContent = fmt(resumo[metrica]);
  $('#ga-engajamento').textContent = Number(resumo.engagementRate || 0).toLocaleString('pt-BR', { style: 'percent', maximumFractionDigits: 1 });
  atualizarGrafico();
  $('#ga-dias-linhas').innerHTML = resultado.dias.map(l => `<tr><td>${l.date.slice(6, 8)}/${l.date.slice(4, 6)}/${l.date.slice(0, 4)}</td><td>${fmt(l.activeUsers)}</td><td>${fmt(l.sessions)}</td><td>${fmt(l.screenPageViews)}</td></tr>`).join('');
  barras('#ga-canais', r.canais.linhas, 'sessionDefaultChannelGroup', 'sessions');
  barras('#ga-paises', r.paises.linhas, 'country', 'activeUsers');
  $('#ga-paginas-linhas').innerHTML = r.paginas.linhas.length ? r.paginas.linhas.map(l => `<tr><td>${escapar(l.pagePath)}</td><td>${fmt(l.screenPageViews)}</td><td>${fmt(l.activeUsers)}</td></tr>`).join('') : '<tr><td colspan="3">Nenhuma página para estes filtros.</td></tr>';
  $('#ga-paginas-nota').textContent = `Exibindo ${r.paginas.linhas.length} de ${fmt(r.paginas.totalLinhas)} páginas, ordenadas por visualizações.`;
  const f = r.filtros, rotulos = [f.dispositivo, f.pais, f.canal, f.pagina && 'página contém ' + f.pagina].filter(Boolean);
  $('#ga-contexto').textContent = `${data(f.inicio)} a ${data(f.fim)} · ${rotulos.join(' · ') || 'Todos os dispositivos, países, canais e páginas'} · Propriedade ${r.propriedade}`;
  const metas = [r.resumo, r.diario, r.paginas, r.canais, r.paises].map(d => d.metadata);
  const avisos = [];
  if (metas.some(m => m.subjectToThresholding)) avisos.push('O Google aplicou limites de privacidade a parte dos dados.');
  if (metas.some(m => m.dataLossFromOtherRow)) avisos.push('Parte dos dados foi agrupada em “(other)” pelo Google.');
  if (metas.some(m => m.samplingMetadatas?.length)) avisos.push('Parte dos relatórios utiliza amostragem do Google.');
  $('#ga-qualidade').textContent = avisos.join(' ');
  $('#ga-ultima').textContent = 'Consultado em ' + new Date(r.consultadoEm).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }) + ' (Brasília)';
  $('#ga-resultados').hidden = false;
}
async function atualizar(evento) {
  evento?.preventDefault();
  const s = sessao(); if (!s) { exigirLogin(); return; }
  let f; try { f = filtros(); } catch (e) { mensagem(e.message, true); return; }
  controlador?.abort(); controlador = new AbortController(); const atual = ++versao;
  $('#ga-atualizar').disabled = true; $('#ga-atualizar').textContent = 'Consultando…';
  $('#ga-resultados').hidden = true; $('#ga-config').hidden = true;
  mensagem('Consultando os relatórios do Google Analytics…');
  try {
    const r = await fetch(BASE + '/functions/v1/google-analytics?' + new URLSearchParams(f), { headers: { apikey: CHAVE, Authorization: 'Bearer ' + s.token }, signal: controlador.signal, cache: 'no-store' });
    const dados = await r.json();
    if (atual !== versao) return;
    if (r.status === 401) { sessionStorage.removeItem(SESSAO); exigirLogin(); return; }
    if (!r.ok) { $('#ga-config').hidden = dados.codigo !== 'CONFIGURACAO_PENDENTE'; throw Error(dados.erro || 'Não foi possível consultar o Google Analytics.'); }
    if (!sessao()) { exigirLogin(); return; }
    renderizar(dados);
    mensagem(dados.resumo.linhas.length ? 'Dados atualizados com os relatórios disponíveis no Google Analytics.' : 'Consulta concluída. Nenhum dado encontrado para estes filtros.');
  } catch (e) { if (atual === versao && e.name !== 'AbortError') mensagem(e.message === 'Failed to fetch' ? 'Não foi possível acessar a integração. Confira a conexão e a publicação da função no servidor.' : e.message, true); }
  finally { if (atual === versao) { $('#ga-atualizar').disabled = false; $('#ga-atualizar').textContent = '↻ Atualizar dados'; } }
}
$('#ga-form').addEventListener('submit', atualizar);
$('#ga-metrica').addEventListener('change', atualizarGrafico);
window.addEventListener('resize', atualizarGrafico);
document.querySelectorAll('[data-ga-dias]').forEach(b => b.addEventListener('click', () => periodoRapido(Number(b.dataset.gaDias))));
for (const id of ['inicio', 'fim']) $('#ga-' + id).addEventListener('input', () => document.querySelectorAll('[data-ga-dias]').forEach(b => b.setAttribute('aria-pressed', 'false')));
$('#ga-limpar').addEventListener('click', () => { periodoRapido(30); for (const id of ['dispositivo', 'pais', 'canal', 'pagina']) $('#ga-' + id).value = ''; });
$('#ga-sair').addEventListener('click', () => { sessionStorage.removeItem(SESSAO); exigirLogin(); });
function tema(t) { document.documentElement.dataset.theme = t; document.documentElement.style.colorScheme = t; }
$('#ga-tema').addEventListener('click', () => { const t = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'; tema(t); try { localStorage.setItem('theme', t); } catch {} });
try { tema(localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'); } catch {}
periodoRapido(30); $('#ga-inicio').max = $('#ga-fim').max = diaSP();
if (sessao()) $('#ga-dashboard').hidden = false; else exigirLogin();
document.addEventListener('visibilitychange', () => { if (!document.hidden && !sessao()) exigirLogin(); });
