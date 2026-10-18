import { normalizarBusca, UFS_INICIO } from './inicio-modelo.js';
import { estadoConcurso, filtrarConcursos, resumoConcursos } from './concursos-modelo.js';

const dados = JSON.parse(document.querySelector('#concursos-dados').textContent);
const $ = seletor => document.querySelector(seletor);
const $$ = seletor => [...document.querySelectorAll(seletor)];
const form = $('#concurso-filtros');
const cards = new Map($$('[data-concurso]').map(card => [card.dataset.concurso, card]));
const campos = { busca: '#concurso-busca', uf: '#concurso-uf', tipo: '#concurso-tipo', inst: '#concursos_instituicao', situacao: '#concurso-situacao' };
const motion = matchMedia('(prefers-reduced-motion: reduce)');
const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
  entries.forEach(({ target, isIntersecting }) => {
    if (isIntersecting) { target.classList.add('concurso-revelado'); observer.unobserve(target); }
  });
}, { threshold: .04, rootMargin: '0px 0px -20px 0px' }) : null;

function revelar() {
  if (!observer || motion.matches) return;
  $$('.concurso-stats, .concurso-section-head, .concurso-card, .concurso-guia-grid article, .concurso-faq details, .concurso-transparencia .usp-container').forEach(node => {
    if (node.closest('[hidden]')) return;
    if (node.getBoundingClientRect().top < innerHeight - 30) {
      if (node.classList.contains('concurso-revelar')) node.classList.add('concurso-revelado');
      return;
    }
    if (node.classList.contains('concurso-revelado')) return;
    node.classList.add('concurso-revelar'); observer.observe(node);
  });
}

function atualizar() {
  const agora = new Date();
  const filtros = Object.fromEntries(Object.entries(campos).map(([nome,id]) => [nome,$(id).value]));
  const visiveis = filtrarConcursos(dados.itens, filtros, dados.revisadoEm, agora);
  const ids = new Set(visiveis.map(item => item.id));
  for (const item of dados.itens) {
    const card = cards.get(item.id);
    const estado = estadoConcurso(item, dados.revisadoEm, agora);
    card.hidden = !ids.has(item.id);
    card.dataset.grupo = estado.grupo;
    const badge = card.querySelector('[data-status]');
    badge.textContent = estado.texto;
    badge.className = 'concurso-status concurso-status--' + estado.chave;
    card.querySelector('[data-prazo]').textContent = estado.chave === 'encerrado' ? item.prazo + ' · prazo encerrado' : item.prazo;
    const cta = card.querySelector('.concurso-card-links .usp-btn');
    cta.firstChild.textContent = estado.grupo === 'abertas' ? 'Edital e inscrições ' : 'Acompanhar na fonte ';
    const host = $(`[data-grid="${estado.grupo}"]`);
    if (card.parentElement !== host) host.append(card);
  }
  const resumo = resumoConcursos(visiveis, dados.revisadoEm, agora);
  for (const [id,valor] of Object.entries({total:resumo.total,abertas:resumo.abertas,vagas:resumo.vagas,andamento:resumo.andamento})) $('#concurso-' + id).textContent = valor.toLocaleString('pt-BR');
  $('#concurso-resultado').textContent = `${visiveis.length} ${visiveis.length === 1 ? 'concurso encontrado' : 'concursos encontrados'} nesta seleção editorial · revisão de ${dados.revisadoEm.split('-').reverse().join('/')}.`;
  $('#concurso-vazio').hidden = visiveis.length > 0;
  $$('[data-secao]').forEach(secao => {
    const quantidade = visiveis.filter(item => estadoConcurso(item, dados.revisadoEm, agora).grupo === secao.dataset.secao).length;
    secao.hidden = quantidade === 0;
  });
  const desatualizado = agora.getTime() - Date.parse(dados.revisadoEm + 'T23:59:59-03:00') > 14 * 86400000;
  $('#concurso-atualidade').hidden = !desatualizado;
  $('#concurso-atualidade').textContent = 'Esta seleção está há mais de 14 dias sem revisão editorial. Confirme novos editais, prorrogações e etapas diretamente nas fontes. Nenhum registro antigo é destacado como inscrição aberta sem nova conferência.';
  const abertasGeral = resumoConcursos(dados.itens,dados.revisadoEm,agora).abertas;
  $('#concurso-hero-status').textContent = abertasGeral ? `${abertasGeral} concursos com inscrições no período.` : 'Acompanhe editais e próximas etapas.';
  revelar(); atualizarProgresso();
}

const params = new URLSearchParams(location.search);
if (params.has('inst') && [...$('#concursos_instituicao').options].some(opt => opt.value === params.get('inst'))) $('#concursos_instituicao').value = params.get('inst');
if (params.has('q')) $('#concurso-busca').value = params.get('q');
form.addEventListener('submit', event => event.preventDefault());
form.addEventListener('input', atualizar);
form.addEventListener('change', atualizar);
form.addEventListener('reset', () => requestAnimationFrame(atualizar));

$('#concurso-diretorio-busca').addEventListener('input', event => {
  const q = normalizarBusca(event.target.value);
  const buscaUf = UFS_INICIO.some(([uf]) => uf.toLowerCase() === q);
  let total = 0;
  $$('.concurso-diretorio-uf').forEach(uf => {
    let locais = 0;
    [...uf.querySelectorAll('[data-diretorio-inst]')].forEach(item => {
      item.hidden = buscaUf ? normalizarBusca(uf.querySelector('summary').textContent) !== q : !normalizarBusca(item.dataset.diretorioInst + ' ' + item.querySelector('h3').textContent + ' ' + uf.querySelector('summary').textContent).includes(q);
      if (!item.hidden) { locais++; total++; }
    });
    uf.hidden = locais === 0;
    uf.open = Boolean(q) && locais > 0;
  });
  $('#concurso-diretorio-status').textContent = total ? `${total} instituições no diretório para esta busca.` : 'Nenhuma instituição encontrada. Tente a sigla ou a UF.';
});

document.addEventListener('focusin', event => {
  const target = event.target.closest('.concurso-revelar');
  if (target) { target.classList.add('concurso-revelado'); observer?.unobserve(target); }
});
motion.addEventListener('change', () => {
  if (motion.matches) { $$('.concurso-revelar').forEach(node => node.classList.add('concurso-revelado')); observer?.disconnect(); }
  else revelar();
});
const progress = document.createElement('div');
progress.className = 'concurso-progresso'; progress.setAttribute('aria-hidden','true'); document.body.append(progress);
let scheduled = false;
function atualizarProgresso() {
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? Math.min(1,Math.max(0,scrollY/max)) : 0})`;
  const anchors = $$('.concurso-onepage a');
  let current;
  anchors.forEach(a => { const section = $(a.getAttribute('href')); if (section && !section.hidden && section.getBoundingClientRect().top < innerHeight * .45) current = a; });
  anchors.forEach(a => { if (a === current) a.setAttribute('aria-current','location'); else a.removeAttribute('aria-current'); });
  scheduled = false;
}
addEventListener('scroll', () => { if (!scheduled) { scheduled = true; requestAnimationFrame(atualizarProgresso); } }, { passive:true });
addEventListener('resize', atualizarProgresso);
document.addEventListener('toggle', atualizarProgresso, true);
document.addEventListener('visibilitychange', () => { if (!document.hidden) atualizar(); });
setInterval(atualizar, 60000);
atualizar();
