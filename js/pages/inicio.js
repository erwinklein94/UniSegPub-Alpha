import { INSTITUICOES_INICIO, instituicaoDaEscolha, filtrarInstituicoes, situacaoInicio } from './inicio-modelo.js';

const $ = s => document.querySelector(s);
let tipoAtual = 'federais';
let buscaAtual = '';
const grid = $('#uf-grid');
const busca = $('#site-search');
const botoesInstituicoes = [...document.querySelectorAll('[data-tab]')];

function renderizarInstituicoes() {
  const lista = filtrarInstituicoes(buscaAtual, tipoAtual);
  grid.replaceChildren(...lista.map(i => {
    const link = document.createElement('a');
    link.className = 'usp-uf-card';
    link.href = 'remuneracao.html?inst=' + encodeURIComponent(i.id);
    const sigla = document.createElement('strong');
    sigla.textContent = i.sigla;
    const nome = document.createElement('span');
    nome.textContent = i.nome;
    link.append(sigla, nome);
    return link;
  }));
  $('#institutions-resumo').textContent = buscaAtual
    ? `${lista.length} ${lista.length === 1 ? 'instituição encontrada' : 'instituições encontradas'} para “${buscaAtual}”.`
    : `${lista.length} instituições · clique para consultar a remuneração.`;
  if (!lista.length) {
    const aviso = document.createElement('p');
    aviso.className = 'inicio-sem-resultados';
    aviso.textContent = 'Nenhuma instituição encontrada. Tente uma sigla, um estado ou o nome da carreira.';
    grid.append(aviso);
  }
}
botoesInstituicoes.forEach(botao => botao.addEventListener('click', () => {
  tipoAtual = botao.dataset.tab;
  buscaAtual = '';
  busca.value = '';
  botoesInstituicoes.forEach(b => {
    b.classList.toggle('is-active', b === botao);
    b.setAttribute('aria-pressed', String(b === botao));
  });
  renderizarInstituicoes();
}));
busca.form.addEventListener('submit', evento => {
  evento.preventDefault();
  buscaAtual = busca.value.trim();
  renderizarInstituicoes();
  const titulo = $('#institutions-title');
  titulo.tabIndex = -1;
  titulo.focus({ preventScroll: true });
  titulo.scrollIntoView({ block: 'start', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
});
busca.addEventListener('input', () => {
  if (!busca.value) { buscaAtual = ''; renderizarInstituicoes(); }
});
document.addEventListener('keydown', evento => {
  if ((evento.metaKey || evento.ctrlKey) && evento.key.toLowerCase() === 'k') { evento.preventDefault(); busca.focus(); }
});
renderizarInstituicoes();

const tipo = $('#quick-type'), uf = $('#quick-uf'), aviso = $('#quick-status');
function atualizarEscolha() {
  uf.disabled = !tipo.value || tipo.value === 'pf' || tipo.value === 'prf';
  if (uf.disabled) uf.value = '';
  const id = instituicaoDaEscolha(tipo.value, uf.value);
  $('#quick-load').disabled = !id;
  aviso.classList.remove('is-error');
  aviso.textContent = id ? `Consultar: ${INSTITUICOES_INICIO.find(i => i.id === id).nome}.` : 'Selecione a carreira e, quando necessário, a UF.';
}
tipo.addEventListener('change', atualizarEscolha);
uf.addEventListener('change', atualizarEscolha);
atualizarEscolha();
$('#inicio-consulta').addEventListener('submit', evento => {
  evento.preventDefault();
  const id = instituicaoDaEscolha(tipo.value, uf.value);
  if (!id) {
    aviso.textContent = tipo.value ? 'Selecione o estado para abrir a instituição correta.' : 'Selecione a instituição ou carreira que deseja consultar.';
    aviso.classList.add('is-error');
    (tipo.value ? uf : tipo).focus();
    return;
  }
  location.assign('remuneracao.html?inst=' + encodeURIComponent(id));
});

const cards = [...document.querySelectorAll('#inicio-noticias [data-inicio-item]')];
const itens = [...document.querySelectorAll('[data-inicio-item]')];
const filtros = [...document.querySelectorAll('[data-inicio-filtro]')];
let filtroAtual = 'todos';

function filtrarNoticias() {
  for (const item of itens) item.hidden = filtroAtual !== 'todos' && item.dataset.grupo !== filtroAtual;
  const total = cards.filter(c => !c.hidden).length;
  $('#inicio-filtro-resumo').textContent = total ? `${total} ${total === 1 ? 'atualização em destaque' : 'atualizações em destaque'}.` : 'Nenhum destaque nesta situação. Consulte os outros filtros e as fontes oficiais.';
}
function atualizarSituacoes() {
  for (const item of itens) {
    const estado = situacaoInicio(item.dataset);
    item.dataset.grupo = estado.grupo;
    const badge = item.querySelector('[data-inicio-status]');
    badge.textContent = estado.texto;
    badge.className = 'inicio-status inicio-status--' + estado.chave;
    item.querySelectorAll('[data-inicio-prazo]').forEach(p => {
      if (!p.dataset.prazoOriginal) p.dataset.prazoOriginal = p.textContent;
      p.textContent = estado.chave === 'encerrado' ? 'Prazo informado encerrado · confira retificações' : p.dataset.prazoOriginal;
    });
  }
  const abertas = cards.filter(c => c.dataset.grupo === 'abertas').length;
  document.querySelectorAll('[data-inicio-abertas]').forEach(e => { e.textContent = abertas; });
  $('#inicio-revisao-aviso').hidden = !cards.some(c => c.querySelector('.inicio-status--revisar'));
  filtrarNoticias();
}
filtros.forEach(botao => botao.addEventListener('click', () => {
  filtroAtual = botao.dataset.inicioFiltro;
  filtros.forEach(b => b.setAttribute('aria-pressed', String(b === botao)));
  filtrarNoticias();
}));
atualizarSituacoes();
setInterval(atualizarSituacoes, 60000);
document.addEventListener('visibilitychange', () => { if (!document.hidden) atualizarSituacoes(); });

// Efeito onepage exclusivo da home. O HTML permanece visível sem JavaScript.
function iniciarRolagemSuave() {
  const movimentoReduzido = matchMedia('(prefers-reduced-motion: reduce)');
  const alvos = [...document.querySelectorAll('.usp-section__head, .inicio-noticia, .inicio-radar .usp-table-wrap, .usp-consulta-card, .usp-institution-panel, .usp-compare__grid > div, .usp-product, .usp-stats')];
  let observador;
  if (!movimentoReduzido.matches && 'IntersectionObserver' in window) {
    observador = new IntersectionObserver(entradas => {
      entradas.forEach(entrada => {
        if (!entrada.isIntersecting) return;
        entrada.target.classList.add('inicio-revelado');
        observador.unobserve(entrada.target);
      });
    }, { threshold: .06, rootMargin: '0px 0px -24px 0px' });
    alvos.forEach((alvo, i) => {
      if (alvo.getBoundingClientRect().top < innerHeight - 30) return;
      alvo.classList.add('inicio-revelar');
      alvo.style.setProperty('--inicio-atraso', `${i % 3 * 55}ms`);
      observador.observe(alvo);
    });
  }
  movimentoReduzido.addEventListener?.('change', evento => {
    if (!evento.matches) return;
    alvos.forEach(alvo => alvo.classList.add('inicio-revelado'));
    observador?.disconnect();
  });
  // Elementos focados precisam aparecer imediatamente para navegação por teclado.
  document.addEventListener('focusin', evento => {
    const alvo = evento.target.closest('.inicio-revelar');
    if (alvo) { alvo.classList.add('inicio-revelado'); observador?.unobserve(alvo); }
  });
  const progresso = document.createElement('div');
  progresso.className = 'inicio-progresso';
  progresso.setAttribute('aria-hidden', 'true');
  document.body.prepend(progresso);
  const links = [...document.querySelectorAll('.inicio-onepage a')];
  const secoes = links.map(link => document.querySelector(link.getAttribute('href')));
  let agendado = false;
  function atualizarRolagem() {
    agendado = false;
    const altura = document.documentElement.scrollHeight - innerHeight;
    progresso.style.transform = `scaleX(${altura > 0 ? Math.min(1, Math.max(0, scrollY / altura)) : 0})`;
    let ativo = 0;
    secoes.forEach((secao, i) => { if (secao.getBoundingClientRect().top <= innerHeight * .45) ativo = i; });
    links.forEach((link, i) => { if (i === ativo) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); });
  }
  function agendarRolagem() {
    if (!agendado) { agendado = true; requestAnimationFrame(atualizarRolagem); }
  }
  addEventListener('scroll', agendarRolagem, { passive: true });
  addEventListener('resize', agendarRolagem);
  atualizarRolagem();
}
iniciarRolagemSuave();
