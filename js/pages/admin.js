import { FUSO, DIAS_SEMANA, diaSP, somarDias, criarPeriodo, agregarAcessos, carregarRegistros, tituloPagina, escapar, gerarCSV } from './admin-analytics.js';
import { simularAdSense } from './admin-adsense.js';

const SUPABASE_URL = 'https://yilpmghvcvfceowwuopc.supabase.co';
const CHAVE = 'sb_publishable_2Yj2IfqpQugBSDJr9ByV7w_5KNCPeKa';
const ADMIN_EMAIL = 'erwinklein1994@gmail.com';
const SESSAO_KEY = 'usp_admin_sessao';
const $ = seletor => document.querySelector(seletor);
const fmt = n => Number(n || 0).toLocaleString('pt-BR');
const decimal = n => Number(n || 0).toLocaleString('pt-BR', { maximumFractionDigits: 1 });
const fmtDia = iso => iso.split('-').reverse().join('/');
const cores = ['var(--serie-1)', 'var(--serie-2)', '#9975db', '#d99b32', '#d96887', '#5496b7', '#8a9a63', '#a57959'];
let periodo = criarPeriodo(somarDias(diaSP(), -29), diaSP());
let dadosAtuais = null, dadosAnteriores = null;
let controle = null, versao = 0, paginaRanking = 0, ordemCrescente = false;

function sessaoSalva() {
  try {
    const s = JSON.parse(sessionStorage.getItem(SESSAO_KEY));
    return s?.token && s.email === ADMIN_EMAIL && Date.now() < s.expira - 30000 ? s : null;
  } catch { return null; }
}

function sair(mensagem = '') {
  controle?.abort();
  versao++;
  sessionStorage.removeItem(SESSAO_KEY);
  dadosAtuais = dadosAnteriores = null;
  $('#tela-dashboard').hidden = true;
  $('#tela-login').hidden = false;
  $('#login-senha').value = '';
  $('#login-erro').textContent = mensagem;
}

async function api(caminho, headers, signal) {
  const s = sessaoSalva();
  if (!s) { sair('Sua sessão expirou. Entre novamente.'); throw new Error('Sessão expirada.'); }
  const resposta = await fetch(SUPABASE_URL + '/rest/v1/' + caminho, {
    headers: { apikey: CHAVE, Authorization: 'Bearer ' + s.token, Accept: 'application/json', ...headers }, signal, cache: 'no-store'
  });
  if (resposta.status === 401) { sair('Sua sessão expirou. Entre novamente.'); throw new Error('Sessão expirada.'); }
  if (!resposta.ok) throw new Error(resposta.status === 403 ? 'Sua conta não tem permissão para consultar os acessos.' : 'Falha na consulta dos acessos (HTTP ' + resposta.status + '). Tente novamente.');
  return resposta;
}

$('#form-login').addEventListener('submit', async evento => {
  evento.preventDefault();
  $('#login-erro').textContent = '';
  $('#login-botao').disabled = true;
  try {
    const resposta = await fetch(SUPABASE_URL + '/auth/v1/token?grant_type=password', {
      method: 'POST', headers: { apikey: CHAVE, 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: $('#login-email').value.trim(), password: $('#login-senha').value })
    });
    const dados = await resposta.json();
    if (!resposta.ok) throw new Error('Não foi possível entrar. Verifique seu e-mail e sua senha.');
    if (dados.user?.email !== ADMIN_EMAIL) throw new Error('Acesso restrito ao administrador.');
    sessionStorage.setItem(SESSAO_KEY, JSON.stringify({ token: dados.access_token, expira: Date.now() + (dados.expires_in || 3600) * 1000, email: dados.user.email }));
    try { localStorage.setItem('usp_nao_contar', '1'); } catch { /* Armazenamento opcional. */ }
    $('#login-senha').value = '';
    abrirPainel();
  } catch (e) {
    $('#login-erro').textContent = e.message || 'Não foi possível conectar. Tente novamente.';
  } finally { $('#login-botao').disabled = false; }
});
$('#botao-sair').addEventListener('click', () => sair());
$('#botao-tema').addEventListener('click', () => {
  const tema = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = tema;
  document.documentElement.style.colorScheme = tema;
  try { localStorage.setItem('theme', tema); } catch { /* Tema continua funcional. */ }
});

function sincronizarFiltro(rapido = null) {
  $('#data-inicio').value = periodo.inicio;
  $('#data-fim').value = periodo.fim;
  $('#data-inicio').max = $('#data-fim').max = diaSP();
  document.querySelectorAll('[data-periodo]').forEach(b => b.setAttribute('aria-pressed', String(Number(b.dataset.periodo) === rapido)));
  $('#periodo-legenda').textContent = `${fmtDia(periodo.inicio)} a ${fmtDia(periodo.fim)} · ${periodo.dias} ${periodo.dias === 1 ? 'dia' : 'dias'}${periodo.fim === diaSP() ? ' · hoje parcial' : ''}`;
  $('#erro-periodo').hidden = true;
}

document.querySelectorAll('[data-periodo]').forEach(botao => botao.addEventListener('click', () => {
  const dias = Number(botao.dataset.periodo);
  periodo = criarPeriodo(somarDias(diaSP(), 1 - dias), diaSP());
  sincronizarFiltro(dias);
  atualizar();
}));
$('#form-periodo').addEventListener('submit', evento => {
  evento.preventDefault();
  try {
    periodo = criarPeriodo($('#data-inicio').value, $('#data-fim').value);
    sincronizarFiltro();
    atualizar();
  } catch (e) {
    $('#erro-periodo').textContent = e.message;
    $('#erro-periodo').hidden = false;
  }
});
$('#botao-atualizar').addEventListener('click', () => atualizar());
$('#botao-tentar').addEventListener('click', () => atualizar());

async function atualizar() {
  controle?.abort();
  controle = new AbortController();
  const { signal } = controle;
  const minhaVersao = ++versao;
  const selecionado = { ...periodo };
  dadosAtuais = dadosAnteriores = null;
  $('#conteudo-painel').hidden = true;
  $('#conteudo-painel').setAttribute('aria-busy', 'true');
  $('#erro-painel').hidden = true;
  $('#estado-painel').hidden = false;
  $('#estado-painel').textContent = 'Carregando os dados do período…';
  $('#botao-exportar').disabled = true;
  $('#ultima-atualizacao').textContent = '';
  try {
    const agora = new Date();
    const registros = await carregarRegistros((caminho, headers) => api(caminho, headers, signal), selecionado, agora, quantidade => {
      if (minhaVersao === versao) $('#estado-painel').textContent = `Consultando acessos e comparação… ${fmt(quantidade)} registros carregados.`;
    });
    if (signal.aborted || minhaVersao !== versao) return;
    dadosAtuais = agregarAcessos(registros, selecionado.inicio, selecionado.fim);
    dadosAnteriores = agregarAcessos(registros, selecionado.anteriorInicio, selecionado.anteriorFim);
    renderizar();
    $('#conteudo-painel').hidden = false;
    // Em telas pequenas, começa nos dias mais recentes do gráfico rolável.
    $('#grafico-dias .grafico-scroll')?.scrollTo({ left: 100000 });
    $('#conteudo-painel').setAttribute('aria-busy', 'false');
    $('#botao-exportar').disabled = false;
    $('#ultima-atualizacao').textContent = 'Atualizado em ' + new Date().toLocaleString('pt-BR', { timeZone: FUSO });
    $('#estado-painel').textContent = `Período atualizado: ${fmt(dadosAtuais.total)} acessos e ${fmt(dadosAtuais.visitantes)} sessões.`;
  } catch (e) {
    if (signal.aborted || minhaVersao !== versao) return;
    $('#erro-detalhe').textContent = e.message || 'Verifique sua conexão e tente novamente.';
    $('#erro-painel').hidden = false;
  } finally {
    if (minhaVersao === versao) $('#estado-painel').hidden = true;
  }
}

function variacao(id, atual, anterior) {
  const elemento = $(id);
  elemento.className = 'variacao';
  elemento.title = 'Período anterior: ' + decimal(anterior);
  if (!anterior) { elemento.textContent = atual ? 'Sem base anterior' : 'Sem variação'; return; }
  const delta = (atual - anterior) / anterior * 100;
  elemento.classList.toggle('positiva', delta > 0);
  elemento.classList.toggle('negativa', delta < 0);
  elemento.textContent = `${delta > 0 ? '↗ +' : delta < 0 ? '↘ ' : ''}${decimal(delta)}% vs. anterior`;
}

function sparkline(id, valores) {
  const max = Math.max(...valores, 1);
  const pontos = valores.map((valor, i) => `${valores.length === 1 ? 38 : i / (valores.length - 1) * 76},${28 - valor / max * 24}`);
  $(id).innerHTML = `<svg viewBox="0 0 76 30"><polyline points="${pontos.join(' ')}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>${valores.length === 1 ? `<circle cx="38" cy="${28 - valores[0] / max * 24}" r="2" fill="currentColor"/>` : ''}</svg>`;
}

function renderizar() {
  const d = dadosAtuais, a = dadosAnteriores;
  $('#tile-total').textContent = fmt(d.total);
  $('#tile-visitantes').textContent = fmt(d.visitantes);
  $('#tile-profundidade').textContent = decimal(d.profundidade);
  $('#tile-media').textContent = decimal(d.media);
  $('#tile-paginas').textContent = fmt(d.paginas.length);
  $('#tile-pico').textContent = d.pico ? fmt(d.pico.total) + ' acessos' : '—';
  $('#tile-pico-dia').textContent = d.pico ? fmtDia(d.pico.dia) : 'Sem acessos no período';
  $('#tile-origem').textContent = d.origens[0]?.origem || '—';
  $('#tile-origem-detalhe').textContent = d.visitantes ? decimal(d.origens[0].sessoes / d.visitantes * 100) + '% das sessões' : 'Sem sessões identificadas';
  const horaPico = d.horas.indexOf(Math.max(...d.horas));
  $('#tile-hora').textContent = d.total ? `${String(horaPico).padStart(2, '0')}h – ${String(horaPico + 1).padStart(2, '0')}h` : '—';
  $('#tile-hora-detalhe').textContent = d.total ? fmt(d.horas[horaPico]) + ' acessos no período' : 'Sem acessos no período';
  $('#comparacao-legenda').textContent = `Comparação: ${fmtDia(periodo.anteriorInicio)} a ${fmtDia(periodo.anteriorFim)}`;
  for (const [id, chave] of [['total', 'total'], ['visitantes', 'visitantes'], ['profundidade', 'profundidade'], ['media', 'media']]) variacao('#delta-' + id, d[chave], a[chave]);
  sparkline('#spark-total', d.dias.map(l => l.total));
  sparkline('#spark-visitantes', d.dias.map(l => l.visitantes));
  $('#subtitulo-dias').textContent = `${fmtDia(periodo.inicio)} a ${fmtDia(periodo.fim)} · ${fmt(d.total)} acessos em ${periodo.dias} ${periodo.dias === 1 ? 'dia' : 'dias'}`;
  grafico('#grafico-dias', d.dias.map(l => l.dia.slice(8) + '/' + l.dia.slice(5, 7)), d.dias.map(l => l.total), d.dias.map(l => l.visitantes), 'Acessos e sessões diárias', i => `${fmtDia(d.dias[i].dia)}: ${fmt(d.dias[i].total)} acessos · ${fmt(d.dias[i].visitantes)} sessões`, true);
  $('#tabela-dias').innerHTML = d.dias.slice().reverse().map(l => `<tr><td>${fmtDia(l.dia)}</td><td>${fmt(l.visitantes)}</td><td>${fmt(l.total)}</td></tr>`).join('');
  grafico('#grafico-horas', d.horas.map((_, i) => i + 'h'), d.horas, null, 'Acessos por hora de Brasília', i => `${i}h: ${fmt(d.horas[i])} acessos`);
  $('#tabela-horas').innerHTML = d.horas.map((v, i) => `<tr><td>${String(i).padStart(2, '0')}:00</td><td>${fmt(v)}</td></tr>`).join('');
  const ordem = [1, 2, 3, 4, 5, 6, 0];
  grafico('#grafico-semana', ordem.map(i => DIAS_SEMANA[i].slice(0, 3)), ordem.map(i => d.semana[i]), null, 'Acessos por dia da semana', i => `${DIAS_SEMANA[ordem[i]]}: ${fmt(d.semana[ordem[i]])} acessos`);
  $('#tabela-semana').innerHTML = ordem.map(i => `<tr><td>${DIAS_SEMANA[i]}</td><td>${fmt(d.semana[i])}</td></tr>`).join('');
  desenharOrigens(d);
  paginaRanking = 0;
  renderizarPaginas();
  renderizarSimulador();
}

/* SVG sem dependências, com acesso por mouse, toque e teclado. */
function grafico(id, rotulos, valores, linha, titulo, descrever, largo = false) {
  const alvo = $(id);
  if (!valores.some(v => v > 0)) { alvo.innerHTML = '<p class="sem-dados">Nenhum acesso registrado no período selecionado.</p>'; return; }
  const largura = largo ? 1120 : 540, altura = largo ? 260 : 215;
  const esquerda = 44, topo = 18, fundo = 28, util = largura - esquerda - 12, alturaUtil = altura - topo - fundo;
  const maximo = Math.max(...valores, ...(linha || []), 1);
  const unidade = 10 ** Math.floor(Math.log10(maximo));
  const teto = Math.max(4, Math.ceil(maximo / unidade) * unidade);
  const passo = util / valores.length, barra = Math.max(1, Math.min(largo ? 34 : 25, passo * .65));
  const y = valor => topo + alturaUtil - valor / teto * alturaUtil;
  const partes = [`<div class="grafico-scroll"><svg viewBox="0 0 ${largura} ${altura}" role="group" aria-label="${escapar(titulo)}">`];
  const passosGrade = Math.min(4, teto);
  for (let i = 0; i <= passosGrade; i++) {
    const valor = Math.round(teto * i / passosGrade);
    partes.push(`<line x1="${esquerda}" x2="${largura - 12}" y1="${y(valor)}" y2="${y(valor)}" stroke="var(--grade)" stroke-dasharray="3 4"/><text x="${esquerda - 10}" y="${y(valor) + 4}" text-anchor="end" font-size="10" fill="var(--tinta-3)">${fmt(valor)}</text>`);
  }
  const intervalo = Math.ceil(valores.length / 12);
  valores.forEach((v, i) => {
    const x = esquerda + i * passo + passo / 2;
    partes.push(`<rect x="${x - barra / 2}" y="${y(v)}" width="${barra}" height="${Math.max(0, y(0) - y(v))}" rx="3" fill="var(--serie-1)" fill-opacity="${v === maximo ? '1' : '.72'}"/>`);
    if (i % intervalo === 0 || i === valores.length - 1) partes.push(`<text x="${x}" y="${altura - 8}" text-anchor="middle" font-size="10" fill="var(--tinta-3)">${escapar(rotulos[i])}</text>`);
  });
  if (linha) {
    const pontos = linha.map((v, i) => `${esquerda + i * passo + passo / 2},${y(v)}`);
    partes.push(`<polyline points="${pontos.join(' ')}" fill="none" stroke="var(--serie-2)" stroke-width="2.5" stroke-linejoin="round"/>`);
    linha.forEach((v, i) => partes.push(`<circle cx="${esquerda + i * passo + passo / 2}" cy="${y(v)}" r="${valores.length > 90 ? 1.5 : 3}" fill="var(--serie-2)" stroke="var(--superficie)" stroke-width="1.5"/>`));
  }
  valores.forEach((_, i) => partes.push(`<rect tabindex="0" role="img" aria-label="${escapar(descrever(i))}" data-indice="${i}" x="${esquerda + i * passo}" y="0" width="${passo}" height="${altura - fundo}" fill="transparent"/>`));
  partes.push('</svg></div><div class="dica" hidden></div>');
  alvo.innerHTML = partes.join('');
  const dica = alvo.querySelector('.dica');
  const mostrar = hit => {
    dica.textContent = descrever(Number(hit.dataset.indice));
    dica.hidden = false;
    const caixa = alvo.getBoundingClientRect(), ponto = hit.getBoundingClientRect();
    dica.style.left = Math.max(0, Math.min(ponto.left - caixa.left + ponto.width / 2 - dica.offsetWidth / 2, caixa.width - dica.offsetWidth)) + 'px';
    dica.style.top = '0px';
  };
  alvo.querySelectorAll('[data-indice]').forEach(hit => {
    hit.addEventListener('pointerenter', () => mostrar(hit));
    hit.addEventListener('focus', () => mostrar(hit));
    hit.addEventListener('click', () => mostrar(hit));
    hit.addEventListener('pointerleave', () => { dica.hidden = true; });
    hit.addEventListener('blur', () => { dica.hidden = true; });
    hit.addEventListener('keydown', evento => { if (evento.key === 'Escape') dica.hidden = true; });
  });
}

function desenharOrigens(d) {
  $('#rosca-total').textContent = fmt(d.visitantes);
  $('#origens-total').textContent = `${d.origens.length} ${d.origens.length === 1 ? 'origem' : 'origens'}`;
  let acumulado = 0;
  const fatias = d.origens.map((o, i) => {
    const inicio = acumulado;
    acumulado += o.sessoes / d.visitantes * 100;
    return `${cores[i % cores.length]} ${inicio}% ${acumulado}%`;
  });
  $('#grafico-origens').style.background = fatias.length ? `conic-gradient(${fatias.join(',')})` : 'var(--grade)';
  $('#grafico-origens').setAttribute('aria-label', `${fmt(d.visitantes)} sessões; ` + (d.origens.map(o => `${o.origem}: ${fmt(o.sessoes)}`).join('; ') || 'nenhuma origem no período'));
  $('#lista-origens').innerHTML = d.origens.length ? d.origens.map((o, i) => `<div class="origem-linha"><span class="nome-origem"><i class="cor-origem" style="background:${cores[i % cores.length]}" aria-hidden="true"></i>${escapar(o.origem)}</span><strong>${fmt(o.sessoes)}</strong><span>${decimal(o.sessoes / d.visitantes * 100)}%</span></div>`).join('') : '<p class="sem-dados">Nenhuma sessão identificada no período.</p>';
}

function renderizarPaginas() {
  if (!dadosAtuais) return;
  const busca = $('#busca-pagina').value.trim().toLocaleLowerCase('pt-BR');
  const lista = dadosAtuais.paginas.filter(p => `${tituloPagina(p.pagina)} ${p.pagina}`.toLocaleLowerCase('pt-BR').includes(busca));
  if (ordemCrescente) lista.reverse();
  const quantidade = 10, totalPaginas = Math.max(1, Math.ceil(lista.length / quantidade));
  paginaRanking = Math.max(0, Math.min(paginaRanking, totalPaginas - 1));
  const inicio = paginaRanking * quantidade;
  $('#tabela-paginas').innerHTML = lista.slice(inicio, inicio + quantidade).map((p, i) => {
    const percentual = p.total / dadosAtuais.total * 100;
    return `<tr><td>${inicio + i + 1}</td><td><strong>${escapar(tituloPagina(p.pagina))}</strong>${tituloPagina(p.pagina) !== p.pagina ? `<small>${escapar(p.pagina)}</small>` : ''}<small class="participacao-mobile">${decimal(percentual)}% dos acessos</small></td><td><strong>${fmt(p.total)}</strong></td><td>${fmt(p.visitantes)}</td><td><div class="participacao"><span class="barra-participacao" aria-hidden="true"><i style="width:${percentual}%"></i></span>${decimal(percentual)}%</div></td></tr>`;
  }).join('') || `<tr><td colspan="5" class="sem-dados">${busca ? 'Nenhuma página encontrada para esta busca.' : 'Nenhuma página acessada no período.'}</td></tr>`;
  $('#paginas-contagem').textContent = lista.length ? `${inicio + 1}–${Math.min(inicio + quantidade, lista.length)} de ${fmt(lista.length)} páginas${busca ? ' encontradas' : ''}` : '0 páginas';
  $('#paginas-paginacao').textContent = `${paginaRanking + 1} / ${totalPaginas}`;
  $('#paginas-anterior').disabled = paginaRanking === 0;
  $('#paginas-proxima').disabled = paginaRanking + 1 >= totalPaginas;
}

const moeda = n => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

function renderizarSimulador() {
  if (!dadosAtuais) return;
  $('#adsense-base').textContent = `${fmt(dadosAtuais.total)} acessos registrados · ${fmtDia(periodo.inicio)} a ${fmtDia(periodo.fim)} · ${periodo.dias} ${periodo.dias === 1 ? 'dia' : 'dias'}`;
  const parametros = {
    acessos: dadosAtuais.total, dias: periodo.dias,
    rpm: $('#adsense-rpm').valueAsNumber,
    percentualMonetizado: $('#adsense-percentual').valueAsNumber,
    ctr: $('#adsense-ctr').valueAsNumber
  };
  try {
    const s = simularAdSense(parametros);
    $('#adsense-receita').textContent = moeda(s.receita);
    $('#adsense-diaria').textContent = moeda(s.diaria);
    $('#adsense-projecao').textContent = moeda(s.projecao30);
    $('#adsense-paginas').textContent = decimal(s.paginas);
    $('#adsense-cliques').textContent = decimal(s.cliques);
    $('#adsense-formula').textContent = `${decimal(s.paginas)} páginas × ${moeda(parametros.rpm)} ÷ 1.000`;
    $('#adsense-cenarios').innerHTML = [2, 5, 10].map(rpm => {
      const cenario = simularAdSense({ ...parametros, rpm });
      return `<tr><td>${moeda(rpm)}</td><td>${moeda(cenario.receita)}</td><td>${moeda(cenario.projecao30)}</td></tr>`;
    }).join('');
    $('#adsense-erro').hidden = true;
  } catch (e) {
    for (const id of ['receita', 'diaria', 'projecao', 'paginas', 'cliques']) $('#adsense-' + id).textContent = '—';
    $('#adsense-formula').textContent = '';
    $('#adsense-cenarios').replaceChildren();
    $('#adsense-erro').textContent = e.message;
    $('#adsense-erro').hidden = false;
  }
  for (const input of $('#form-adsense').querySelectorAll('input')) {
    input.setAttribute('aria-invalid', String(!input.validity.valid));
  }
}
$('#form-adsense').addEventListener('input', renderizarSimulador);
$('#form-adsense').addEventListener('submit', evento => { evento.preventDefault(); renderizarSimulador(); });
$('#busca-pagina').addEventListener('input', () => { paginaRanking = 0; renderizarPaginas(); });
$('#ordenar-acessos').addEventListener('click', () => {
  ordemCrescente = !ordemCrescente;
  $('#th-acessos').setAttribute('aria-sort', ordemCrescente ? 'ascending' : 'descending');
  $('#ordenar-acessos').textContent = ordemCrescente ? 'Acessos ↑' : 'Acessos ↓';
  paginaRanking = 0;
  renderizarPaginas();
});
$('#paginas-anterior').addEventListener('click', () => { paginaRanking--; renderizarPaginas(); });
$('#paginas-proxima').addEventListener('click', () => { paginaRanking++; renderizarPaginas(); });
$('#botao-exportar').addEventListener('click', () => {
  if (!dadosAtuais || !dadosAnteriores) return;
  const url = URL.createObjectURL(new Blob([gerarCSV(dadosAtuais, dadosAnteriores, periodo)], { type: 'text/csv;charset=utf-8;' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = `audiencia-${periodo.inicio}-a-${periodo.fim}.csv`;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});

function abrirPainel() {
  try { localStorage.setItem('usp_nao_contar', '1'); } catch { /* Preserva exclusão do administrador quando possível. */ }
  $('#tela-login').hidden = true;
  $('#tela-dashboard').hidden = false;
  sincronizarFiltro(30);
  atualizar();
}
if (sessaoSalva()) abrirPainel();
