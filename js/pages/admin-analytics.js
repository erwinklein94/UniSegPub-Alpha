/* Cálculos compartilhados pelo painel e pelos testes. Nenhum acesso ao DOM. */
export const FUSO = 'America/Sao_Paulo';
export const DIAS_SEMANA = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
const DIA_MS = 86400000;
const formatoDia = new Intl.DateTimeFormat('en-CA', { timeZone: FUSO, year: 'numeric', month: '2-digit', day: '2-digit' });
const formatoHora = new Intl.DateTimeFormat('en-GB', { timeZone: FUSO, hour: '2-digit', hourCycle: 'h23' });

export function diaSP(data = new Date()) {
  const partes = Object.fromEntries(formatoDia.formatToParts(new Date(data)).map(p => [p.type, p.value]));
  return `${partes.year}-${partes.month}-${partes.day}`;
}

export function somarDias(iso, quantidade) {
  return new Date(Date.parse(iso + 'T12:00:00Z') + quantidade * DIA_MS).toISOString().slice(0, 10);
}

export function criarPeriodo(inicio, fim, hoje = diaSP()) {
  const valido = iso => /^\d{4}-\d{2}-\d{2}$/.test(iso) && Number.isFinite(Date.parse(iso + 'T12:00:00Z')) && somarDias(iso, 0) === iso;
  if (!valido(inicio) || !valido(fim)) throw new Error('Informe as duas datas do período.');
  if (inicio > fim) throw new Error('A data inicial deve ser anterior ou igual à data final.');
  if (fim > hoje) throw new Error('Escolha uma data final até hoje.');
  const dias = Math.round((Date.parse(fim) - Date.parse(inicio)) / DIA_MS) + 1;
  if (dias > 366) throw new Error('Selecione um intervalo de até 366 dias.');
  if (inicio < '1971-01-01') throw new Error('Selecione uma data a partir de 1971.');
  return { inicio, fim, dias, anteriorInicio: somarDias(inicio, -dias), anteriorFim: somarDias(inicio, -1) };
}

/* Converte meia-noite civil de Brasília para UTC, inclusive para datas históricas. */
export function inicioDiaSP(iso) {
  const utc = Date.parse(iso + 'T00:00:00Z');
  const formato = new Intl.DateTimeFormat('en-US', { timeZone: FUSO, timeZoneName: 'longOffset' });
  let instante = utc;
  for (let i = 0; i < 3; i++) {
    const zona = formato.formatToParts(new Date(instante)).find(p => p.type === 'timeZoneName').value;
    const partes = zona.match(/GMT([+-])(\d{2}):(\d{2})/);
    const minutos = partes ? (Number(partes[2]) * 60 + Number(partes[3])) * (partes[1] === '+' ? 1 : -1) : 0;
    const proximo = utc - minutos * 60000;
    if (instante === proximo) break;
    instante = proximo;
  }
  return new Date(instante).toISOString();
}

export function classificarOrigem(referencia) {
  if (!referencia || !referencia.trim()) return 'Direto / digitado';
  let host;
  try { host = new URL(referencia).hostname.toLowerCase().replace(/^www\./, ''); } catch { return 'Outros'; }
  const dominio = nome => host === nome || host.endsWith('.' + nome);
  if (dominio('google.com') || dominio('google.com.br') || dominio('google.pt')) return 'Google';
  if (dominio('instagram.com')) return 'Instagram';
  if (dominio('facebook.com') || dominio('fb.watch')) return 'Facebook';
  if (dominio('bing.com')) return 'Bing';
  if (dominio('youtube.com') || dominio('youtu.be')) return 'YouTube';
  if (dominio('whatsapp.com') || dominio('wa.me')) return 'WhatsApp';
  if (dominio('t.co') || dominio('twitter.com') || dominio('x.com')) return 'X / Twitter';
  if (dominio('universosegpub.com.br')) return 'Navegação interna';
  if (host === 'localhost' || host === '127.0.0.1' || host === '[::1]') return 'Testes locais';
  return host || 'Outros';
}

export function agregarAcessos(registros, inicio, fim) {
  const dias = new Map();
  for (let dia = inicio; dia <= fim; dia = somarDias(dia, 1)) dias.set(dia, { dia, total: 0, sessoes: new Set() });
  const sessoes = new Set(), paginas = new Map(), primeiras = new Map();
  const horas = Array(24).fill(0), semana = Array(7).fill(0);
  let total = 0, comSessao = 0;
  for (const registro of registros) {
    const data = new Date(registro.criado_em);
    if (!Number.isFinite(data.getTime())) continue;
    const dia = diaSP(data);
    if (!dias.has(dia)) continue;
    total++;
    dias.get(dia).total++;
    horas[Number(formatoHora.format(data))]++;
    semana[new Date(dia + 'T12:00:00Z').getUTCDay()]++;
    const pagina = String(registro.pagina || '(sem página)');
    if (!paginas.has(pagina)) paginas.set(pagina, { pagina, total: 0, sessoes: new Set() });
    paginas.get(pagina).total++;
    const sessao = String(registro.sessao || '').trim();
    if (sessao) {
      comSessao++;
      sessoes.add(sessao);
      dias.get(dia).sessoes.add(sessao);
      paginas.get(pagina).sessoes.add(sessao);
      const primeira = primeiras.get(sessao);
      if (!primeira || data.getTime() < primeira.instante || (data.getTime() === primeira.instante && BigInt(registro.id || 0) < BigInt(primeira.id || 0))) {
        primeiras.set(sessao, { instante: data.getTime(), id: registro.id, origem: classificarOrigem(registro.referencia) });
      }
    }
  }
  const origens = new Map();
  for (const { origem } of primeiras.values()) origens.set(origem, (origens.get(origem) || 0) + 1);
  const listaDias = [...dias.values()].map(d => ({ dia: d.dia, total: d.total, visitantes: d.sessoes.size }));
  const pico = listaDias.reduce((maior, dia) => dia.total > (maior?.total || 0) ? dia : maior, null);
  return {
    total, visitantes: sessoes.size, profundidade: sessoes.size ? comSessao / sessoes.size : 0,
    media: total / listaDias.length, dias: listaDias, horas, semana, pico,
    paginas: [...paginas.values()].map(p => ({ pagina: p.pagina, total: p.total, visitantes: p.sessoes.size })).sort((a, b) => b.total - a.total || a.pagina.localeCompare(b.pagina)),
    origens: [...origens].map(([origem, sessoes]) => ({ origem, sessoes })).sort((a, b) => b.sessoes - a.sessoes || a.origem.localeCompare(b.origem))
  };
}

/* Lê todas as páginas da API: o limite do servidor pode ser menor que o solicitado. */
export async function carregarRegistros(requisitar, periodo, agora = new Date(), progresso = () => {}) {
  const parametros = new URLSearchParams({ select: 'id,pagina,sessao,referencia,criado_em', order: 'criado_em.asc,id.asc', limit: '1000' });
  parametros.append('criado_em', 'gte.' + inicioDiaSP(periodo.anteriorInicio));
  parametros.append('criado_em', 'lt.' + new Date(Math.min(Date.parse(inicioDiaSP(somarDias(periodo.fim, 1))), agora.getTime())).toISOString());
  const registros = [];
  let esperado = null;
  while (true) {
    parametros.set('offset', String(registros.length));
    const resposta = await requisitar('acessos?' + parametros, registros.length === 0 ? { Prefer: 'count=exact' } : {});
    const lote = await resposta.json();
    if (!Array.isArray(lote)) throw new Error('Resposta inválida ao consultar os acessos.');
    if (esperado === null) {
      const total = resposta.headers.get('content-range')?.split('/')[1];
      if (total && /^\d+$/.test(total)) esperado = Number(total);
    }
    if (lote.length === 0) {
      if (esperado !== null && registros.length < esperado) throw new Error('A consulta retornou dados incompletos. Atualize o painel.');
      break;
    }
    registros.push(...lote);
    progresso(registros.length);
    if (esperado !== null && registros.length >= esperado) break;
  }
  return registros;
}

export const TITULOS_PAGINAS = {
  'index.html': 'Página inicial', 'remuneracao.html': 'Remuneração', 'concursos.html': 'Concursos',
  'direitos.html': 'Direitos e vantagens', 'brasoes.html': 'Brasões e história', 'guia-instituicoes.html': 'Guia de instituições',
  'acoes-judiciais.html': 'Ações judiciais', 'comparar-carreiras.html': 'Comparar carreiras', 'produtos.html': 'Livros e materiais',
  'noticias.html': 'Notícias', 'base-legal.html': 'Base legal', 'poderes-deveres.html': 'Poderes e deveres',
  'associacoes-sindicatos.html': 'Associações e sindicatos', 'anuncie.html': 'Anuncie no portal'
};
export const tituloPagina = pagina => TITULOS_PAGINAS[pagina] || pagina;
export const escapar = texto => String(texto).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* Evita fórmulas ao abrir textos de origem externa em planilhas. */
export function celulaCSV(valor) {
  let texto = String(valor ?? '');
  if (/^[\s]*[=+@-]/.test(texto) || /^[\t\r\n]/.test(texto)) texto = "'" + texto;
  return '"' + texto.replace(/"/g, '""') + '"';
}

export function gerarCSV(dados, anterior, periodo) {
  const linhas = [
    ['Universo Segurança Pública — audiência'], ['Período', periodo.inicio, periodo.fim],
    ['Comparação', periodo.anteriorInicio, periodo.anteriorFim], ['Fuso', FUSO], [],
    ['Indicador', 'Período selecionado', 'Período anterior'],
    ['Acessos', dados.total, anterior.total], ['Sessões únicas', dados.visitantes, anterior.visitantes],
    ['Páginas por sessão identificada', dados.profundidade, anterior.profundidade],
    ['Média diária', dados.media, anterior.media], ['Páginas distintas', dados.paginas.length, anterior.paginas.length], [],
    ['Dia', 'Sessões diárias', 'Acessos'], ...dados.dias.map(d => [d.dia, d.visitantes, d.total]), [],
    ['Página', 'Sessões', 'Acessos', 'Participação (%)'], ...dados.paginas.map(p => [p.pagina, p.visitantes, p.total, dados.total ? 100 * p.total / dados.total : 0]), [],
    ['Origem observada no período', 'Sessões'], ...dados.origens.map(o => [o.origem, o.sessoes]), [],
    ['Hora de Brasília', 'Acessos'], ...dados.horas.map((v, i) => [i + ':00', v]), [],
    ['Dia da semana', 'Acessos'], ...dados.semana.map((v, i) => [DIAS_SEMANA[i], v])
  ];
  return '\uFEFF' + linhas.map(linha => linha.map(v => celulaCSV(typeof v === 'number' ? String(v).replace('.', ',') : v)).join(';')).join('\r\n');
}
