import fs from 'node:fs/promises';
import path from 'node:path';

const CONFIG_PATH = process.env.CONFIG_PATH || 'config/remuneracao-instituicoes.json';
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const MODELO_OPENAI = process.env.MODELO_OPENAI || 'gpt-5.4-mini';
const GRUPO_ATUALIZACAO = String(process.env.GRUPO_ATUALIZACAO || 'pendentes').trim().toLowerCase();
const INSTITUICAO_ID = String(process.env.INSTITUICAO_ID || '').trim().toLowerCase();
const QUANTIDADE = Math.max(1, Number(process.env.QUANTIDADE || 1));
const SEARCH_CONTEXT_SIZE = process.env.SEARCH_CONTEXT_SIZE || 'high';
const DELAY_ENTRE_INSTITUICOES_MS = Number(process.env.DELAY_ENTRE_INSTITUICOES_MS || (MODELO_OPENAI === 'gpt-5.5' ? 75000 : 8000));
const DATA_DIR = process.env.DATA_DIR || 'data/remuneracao';
const HOJE = new Date().toISOString().slice(0, 10);

const respostaNaoLocalizada = 'Não localizado nas fontes consultadas.';
const camposObrigatorios = [
  'instituicao_id','instituicao_nome','sigla','uf','tema','status','titulo','resumo','linhas','fonte_principal','fontes','ultima_pesquisa','classe_atualizacao','score_publicacao','modelo_openai','atualizado_pela_openai','precisa_revisao_humana','alertas'
];

const linhaSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['cargo','badge','remuneracao','beneficios','total','classe','criterio','benefDesc','fonteNome','fonteUrl','valorPendente'],
  properties: {
    cargo: { type: 'string' },
    badge: { type: 'string' },
    remuneracao: { type: 'number' },
    beneficios: { type: 'number' },
    total: { type: 'number' },
    classe: { type: 'string' },
    criterio: { type: 'string' },
    benefDesc: { type: 'string' },
    fonteNome: { type: 'string' },
    fonteUrl: { type: 'string' },
    valorPendente: { type: 'boolean' }
  }
};

const schema = {
  type: 'object',
  additionalProperties: false,
  required: camposObrigatorios,
  properties: {
    instituicao_id: { type: 'string' },
    instituicao_nome: { type: 'string' },
    sigla: { type: 'string' },
    uf: { type: 'string' },
    tema: { type: 'string' },
    status: { type: 'string' },
    titulo: { type: 'string' },
    resumo: { type: 'string' },
    linhas: { type: 'array', items: linhaSchema },
    fonte_principal: { type: 'string' },
    fontes: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['titulo','url','tipo','data_consulta'],
        properties: {
          titulo: { type: 'string' },
          url: { type: 'string' },
          tipo: { type: 'string' },
          data_consulta: { type: 'string' }
        }
      }
    },
    ultima_pesquisa: { type: 'string' },
    classe_atualizacao: { type: 'string' },
    score_publicacao: { type: 'number' },
    modelo_openai: { type: 'string' },
    atualizado_pela_openai: { type: 'boolean' },
    precisa_revisao_humana: { type: 'boolean' },
    alertas: { type: 'array', items: { type: 'string' } }
  }
};

function dormir(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
function normalizar(v) { return String(v ?? '').trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, ' '); }
function moedaBR(v) { return Number(v || 0).toLocaleString('pt-BR', { style:'currency', currency:'BRL' }); }
function valorNumerico(v) { const n = Number(v); return Number.isFinite(n) && n > 0 ? n : 0; }
function textoRuim(v) { const t = normalizar(v); if (!t) return true; return ['nao localizado nas fontes consultadas','nao encontrado','nao informado','dados em atualizacao','sem informacao','sem dados','indisponivel','pesquisa inicial pendente'].some(p => t.includes(p)); }
function textoGenerico(v) {
  const t = normalizar(v);
  if (!t || textoRuim(v)) return true;
  const proibidos = ['ver edital','conferir edital','consultar edital','olhar edital','conforme edital','depende do edital','varia por edital','acompanhar site','acompanhar pagina','deve ser conferido','consultar portal','quando previsto','quando aplicavel','nao detalhado','sem detalhamento'];
  return proibidos.some(p => t.includes(p));
}
function limparCampo(v) {
  let s = String(v ?? '').trim();
  s = s.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '$1');
  s = s.replace(/https?:\/\/\S+/g, '');
  s = s.replace(/\[[^\]]*\]/g, '');
  s = s.replace(/utm_source=[^\s)]+/g, '');
  s = s.replace(/\s+([.,;:])/g, '$1').replace(/\s{2,}/g, ' ').replace(/\(\s*\)/g, '').trim();
  if (!s || textoGenerico(s)) return respostaNaoLocalizada;
  return s;
}
function linhaUtil(linha) {
  if (!linha || typeof linha !== 'object') return false;
  if (textoGenerico(linha.cargo) || textoRuim(linha.cargo)) return false;
  return valorNumerico(linha.remuneracao) > 0 || valorNumerico(linha.total) > 0;
}
function avaliar(dados) {
  if (!dados || !Array.isArray(dados.linhas)) return { score:0, classe:'pendente', qualidade:'pendente', linhasComValor:0, linhas:0, genericas:0 };
  const linhas = dados.linhas.filter(linhaUtil);
  const genericas = linhas.filter(l => textoGenerico(l.criterio) || textoGenerico(l.benefDesc)).length;
  const fontes = Array.isArray(dados.fontes) ? dados.fontes.filter(f => /^https?:\/\//i.test(String(f.url || ''))).length : 0;
  let score = 100;
  if (linhas.length === 0) score = 0;
  else {
    if (linhas.length < 3) score -= 35;
    else if (linhas.length < 6) score -= 18;
    if (fontes === 0) score -= 18;
    score -= Math.min(35, genericas * 8);
  }
  score = Math.max(0, Math.min(100, Math.round(score)));
  const status = normalizar(dados.status);
  const pendente = status.includes('pendente') || linhas.length === 0 || score < 45;
  const fraca = !pendente && (score < 78 || linhas.length < 5 || genericas > 0);
  const classe = pendente ? 'pendente' : fraca ? 'fraca' : 'forte';
  return { score, classe, qualidade: classe, linhasComValor: linhas.length, linhas: dados.linhas.length, genericas };
}
async function lerJson(caminho, fallback=null) { try { return JSON.parse(await fs.readFile(caminho, 'utf8')); } catch { return fallback; } }
async function carregarConfig() { const cfg = await lerJson(CONFIG_PATH, []); if (!Array.isArray(cfg)) throw new Error(`${CONFIG_PATH} precisa ser uma lista.`); return cfg; }
function consultasSugeridas(item) {
  return [...new Set([...(item.consultas_sugeridas || []), `${item.sigla} remuneração tabela salarial ${item.uf}`, `${item.nome} salário cargo carreira 2026`, `${item.sigla} subsídio vencimento bruto oficial`, `${item.sigla} lei remuneração carreira segurança pública`, `${item.sigla} portal transparência remuneração cargo`])].slice(0, 10);
}
async function selecionarInstituicoes(config) {
  const avaliadas = [];
  for (const item of config) {
    const atual = await lerJson(item.arquivo_saida || path.join(DATA_DIR, `${item.id}.json`));
    avaliadas.push({ item, atual, avaliacao: avaliar(atual) });
  }
  if (GRUPO_ATUALIZACAO === 'instituicao') {
    const alvo = avaliadas.find(x => x.item.id === INSTITUICAO_ID);
    if (!alvo) throw new Error(`Instituição "${INSTITUICAO_ID}" não encontrada no config.`);
    return [alvo];
  }
  const filtros = {
    pendentes: x => x.avaliacao.classe === 'pendente',
    fracas: x => x.avaliacao.classe === 'fraca',
    fortes: x => x.avaliacao.classe === 'forte',
    todas: () => true
  };
  const filtro = filtros[GRUPO_ATUALIZACAO] || filtros.pendentes;
  return avaliadas.filter(filtro).sort((a,b) => a.avaliacao.score - b.avaliacao.score || a.item.id.localeCompare(b.item.id)).slice(0, QUANTIDADE);
}
function extrairTextoResposta(payload) {
  if (payload.output_text) return payload.output_text;
  const textos = [];
  for (const item of payload.output || []) for (const c of item.content || []) if (typeof c.text === 'string') textos.push(c.text);
  return textos.join('\n').trim();
}
function normalizarLinha(linha, item, fonteDefault) {
  const rem = valorNumerico(linha.remuneracao || linha.remuneracao_bruta || linha.total);
  const beneficios = valorNumerico(linha.beneficios);
  const total = valorNumerico(linha.total) || rem + beneficios;
  return {
    cargo: limparCampo(linha.cargo),
    badge: limparCampo(linha.badge || item.sigla),
    remuneracao: rem,
    beneficios,
    total: total || rem,
    classe: limparCampo(linha.classe || 'Carreira de segurança pública'),
    criterio: limparCampo(linha.criterio || 'Valor bruto mensal localizado em fonte pública.'),
    benefDesc: limparCampo(linha.benefDesc || linha.beneficios_nao_somados || 'Benefícios, indenizações, descontos e parcelas eventuais não foram somados ao bruto.'),
    fonteKey: item.id,
    fonteNome: limparCampo(linha.fonteNome || fonteDefault?.titulo || `Fonte de remuneração ${item.sigla}`),
    fonteUrl: /^https?:\/\//i.test(String(linha.fonteUrl || '')) ? String(linha.fonteUrl) : (fonteDefault?.url || item.site_principal || '#'),
    valorPendente: rem <= 0
  };
}
function normalizarResposta(dados, item, atual) {
  const out = { ...dados };
  out.instituicao_id = item.id;
  out.instituicao_nome = item.nome;
  out.sigla = item.sigla;
  out.uf = item.uf;
  out.tema = 'remuneracao';
  out.ultima_pesquisa = HOJE;
  out.fontes = Array.isArray(out.fontes) ? out.fontes.filter(f => f && /^https?:\/\//i.test(String(f.url || ''))) : [];
  if (!out.fontes.length && item.site_principal) out.fontes = [{ titulo:`Fonte principal ${item.sigla}`, url:item.site_principal, tipo:'fonte cadastrada', data_consulta:HOJE }];
  const fonteDefault = out.fontes[0] || null;
  out.fonte_principal = out.fonte_principal && /^https?:\/\//i.test(String(out.fonte_principal)) ? out.fonte_principal : (fonteDefault?.url || item.site_principal || '');
  out.titulo = limparCampo(out.titulo || `Remuneração bruta da ${item.sigla}`);
  out.resumo = limparCampo(out.resumo || `Tabela de remuneração bruta da ${item.sigla}.`);
  const linhasGeradas = Array.isArray(out.linhas) ? out.linhas.map(l => normalizarLinha(l, item, fonteDefault)).filter(linhaUtil) : [];
  const linhasAtuais = Array.isArray(atual?.linhas) ? atual.linhas.filter(linhaUtil) : [];
  out.linhas = linhasGeradas.length ? linhasGeradas : linhasAtuais;
  out.alertas = Array.isArray(out.alertas) ? out.alertas.map(String).filter(Boolean) : [];
  const av = avaliar(out);
  out.status = av.classe === 'forte' ? 'Atualização forte' : av.classe === 'fraca' ? 'Atualização fraca' : 'Pesquisa pendente';
  out.classe_atualizacao = av.classe;
  out.score_publicacao = av.score;
  out.modelo_openai = MODELO_OPENAI;
  out.atualizado_pela_openai = true;
  out.precisa_revisao_humana = av.classe !== 'forte';
  out.alertas = [...new Set([...out.alertas, `Classificação automática: ${out.status} (${av.score}/100).`])];
  return out;
}
async function chamarOpenAI(item, atual) {
  if (!OPENAI_API_KEY) throw new Error('Defina OPENAI_API_KEY nos Secrets do GitHub.');
  const prompt = `Você é o pesquisador editorial do Universo Seg Pub. Você vai atualizar a página de REMUNERAÇÃO da instituição abaixo.

INSTITUIÇÃO:
- ID: ${item.id}
- Sigla: ${item.sigla}
- Nome: ${item.nome}
- UF: ${item.uf}

OBJETIVO:
Entregar uma tabela útil de remuneração bruta mensal por cargo, posto, graduação, classe, padrão ou referência. O usuário final quer resposta direta: cargo e valor em reais.

PESQUISE NA INTERNET:
Use fonte oficial, portal da transparência, tabela salarial, lei de subsídio, diário oficial, edital recente ou página governamental. Sites jornalísticos podem servir como pista, mas tente confirmar em fonte oficial.

CONSULTAS SUGERIDAS:
${consultasSugeridas(item).map((q,i)=>`${i+1}. ${q}`).join('\n')}

FONTES CADASTRADAS:
${(item.fontes_base || []).map((u,i)=>`${i+1}. ${u}`).join('\n') || 'Nenhuma fonte cadastrada.'}

DADOS ATUAIS, para preservar apenas se forem melhores que a nova pesquisa:
${JSON.stringify(atual || {}, null, 2)}

REGRAS ABSOLUTAS:
- Proibido escrever nos campos visíveis: "ver edital", "consultar edital", "conferir edital", "conforme edital", "depende do edital", "consultar portal", "quando aplicável".
- Proibido colocar URL, markdown, domínio, fonte entre colchetes, utm_source, comentário técnico ou justificativa de pesquisa nos campos visíveis.
- Cada linha precisa ter cargo e valor numérico em reais. Se não houver valor, omita a linha.
- Para beneficios/adicionais, seja claro: diga o que NÃO foi somado e evite inflar o total.
- Critério precisa ser curto e profissional: exemplo "Subsídio bruto mensal da classe inicial".
- O campo fontes deve conter os links usados.
- Se não conseguir montar tabela útil, retorne linhas vazias e alerta claro.

FORMATO DAS LINHAS:
- cargo: nome do cargo/posto/classe.
- badge: sigla curta, até 12 caracteres.
- remuneracao: número, sem R$, sem texto.
- beneficios: número, use 0 quando não somado.
- total: número, geralmente igual à remuneração quando benefícios não forem somados.
- classe: grupo da carreira.
- criterio: frase curta explicando o valor.
- benefDesc: frase curta sobre benefícios não somados.
- fonteNome e fonteUrl: fonte usada para aquela linha.
- valorPendente: false quando houver valor.

Retorne somente JSON válido no schema pedido.`;

  const body = {
    model: MODELO_OPENAI,
    input: [
      { role:'system', content:'Você é um pesquisador editorial rigoroso de remuneração pública. Entrega tabela final para usuário leigo, sem comentários técnicos e sem mandar o usuário procurar em edital.' },
      { role:'user', content:prompt }
    ],
    tools: [{ type:'web_search', search_context_size: SEARCH_CONTEXT_SIZE }],
    text: { format: { type:'json_schema', name:'remuneracao_instituicao', strict:true, schema } }
  };

  for (let tentativa=1; tentativa<=4; tentativa++) {
    const resposta = await fetch('https://api.openai.com/v1/responses', { method:'POST', headers:{ Authorization:`Bearer ${OPENAI_API_KEY}`, 'Content-Type':'application/json' }, body:JSON.stringify(body) });
    if (resposta.ok) return await resposta.json();
    const erro = await resposta.text();
    if (resposta.status === 429 && tentativa < 4) {
      const espera = tentativa * 45000;
      console.warn(`Rate limit em ${item.id}. Aguardando ${Math.round(espera/1000)}s e tentando novamente...`);
      await dormir(espera);
      continue;
    }
    throw new Error(`Erro OpenAI para ${item.id}: HTTP ${resposta.status} - ${erro}`);
  }
}
async function processar({ item, atual, avaliacao }) {
  console.log(`\n=== ${item.sigla} (${item.id}) — antes: ${avaliacao.classe} ${avaliacao.score}/100 ===`);
  const payload = await chamarOpenAI(item, atual);
  const texto = extrairTextoResposta(payload);
  if (!texto) throw new Error(`OpenAI não retornou JSON para ${item.id}.`);
  let gerado;
  try { gerado = JSON.parse(texto); } catch { throw new Error(`Resposta da OpenAI não é JSON válido para ${item.id}: ${texto.slice(0,500)}`); }
  const final = normalizarResposta(gerado, item, atual);
  await fs.mkdir(path.dirname(item.arquivo_saida), { recursive:true });
  await fs.writeFile(item.arquivo_saida, JSON.stringify(final, null, 2)+'\n', 'utf8');
  const avDepois = avaliar(final);
  await fs.writeFile(item.arquivo_monitoramento || path.join(DATA_DIR, `${item.id}-monitor.json`), JSON.stringify({ atualizado_em:HOJE, instituicao_id:item.id, grupo_atualizacao:GRUPO_ATUALIZACAO, modelo:MODELO_OPENAI, usou_openai:true, usou_web_search_openai:true, antes:{classe:avaliacao.classe, score:avaliacao.score}, depois:{classe:avDepois.classe, score:avDepois.score}, linhas:avDepois.linhasComValor, usage:payload.usage || null }, null, 2)+'\n', 'utf8');
  console.log(`✅ ${item.sigla}: salvo como ${avDepois.classe} (${avDepois.score}/100), ${avDepois.linhasComValor} linhas úteis.`);
}

const config = await carregarConfig();
const selecionadas = await selecionarInstituicoes(config);
console.log('Motor simplificado de remuneração');
console.log(`Grupo: ${GRUPO_ATUALIZACAO}`);
console.log(`Instituição específica: ${INSTITUICAO_ID || '-'}`);
console.log(`Quantidade: ${QUANTIDADE}`);
console.log(`Modelo: ${MODELO_OPENAI}`);
console.log(`Selecionadas: ${selecionadas.map(x=>x.item.id).join(', ') || 'nenhuma'}`);
if (selecionadas.length === 0) {
  console.log('Nenhuma instituição encontrada para esse grupo.');
  process.exit(0);
}
for (let i=0; i<selecionadas.length; i++) {
  await processar(selecionadas[i]);
  if (i < selecionadas.length - 1) await dormir(DELAY_ENTRE_INSTITUICOES_MS);
}
console.log('\nExecução finalizada.');
