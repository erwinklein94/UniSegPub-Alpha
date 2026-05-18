import fs from 'node:fs/promises';
import path from 'node:path';

const CONFIG_PATH = process.env.CONFIG_PATH || 'config/remuneracao-instituicoes.json';
const DATA_DIR = process.env.DATA_DIR || 'data/remuneracao';
const HOJE = new Date().toISOString().slice(0, 10);

function normalizar(v) { return String(v ?? '').trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, ' '); }
function valorNumerico(v) { const n = Number(v); return Number.isFinite(n) && n > 0 ? n : 0; }
function textoRuim(v) { const t = normalizar(v); if (!t) return true; return ['nao localizado','nao encontrado','nao informado','dados em atualizacao','pesquisa pendente'].some(p => t.includes(p)); }
function textoGenerico(v) { const t = normalizar(v); if (!t || textoRuim(v)) return true; return ['ver edital','conferir edital','consultar edital','conforme edital','depende do edital','consultar portal','quando aplicavel'].some(p => t.includes(p)); }
function linhaUtil(linha) { return linha && !textoRuim(linha.cargo) && !textoGenerico(linha.cargo) && (valorNumerico(linha.remuneracao) > 0 || valorNumerico(linha.total) > 0); }
function avaliar(dados) {
  if (!dados || !Array.isArray(dados.linhas)) return { score:0, classe:'pendente', linhasComValor:0, genericas:0, fontes:0 };
  const linhas = dados.linhas.filter(linhaUtil);
  const genericas = linhas.filter(l => textoGenerico(l.criterio) || textoGenerico(l.benefDesc)).length;
  const fontes = Array.isArray(dados.fontes) ? dados.fontes.filter(f => /^https?:\/\//i.test(String(f.url || ''))).length : 0;
  let score = 100;
  if (!linhas.length) score = 0;
  else {
    if (linhas.length < 3) score -= 35;
    else if (linhas.length < 6) score -= 18;
    if (!fontes) score -= 18;
    score -= Math.min(35, genericas * 8);
  }
  score = Math.max(0, Math.min(100, Math.round(score)));
  const pendente = !linhas.length || score < 45 || normalizar(dados.status).includes('pendente');
  const fraca = !pendente && (score < 78 || linhas.length < 5 || genericas > 0);
  const classe = pendente ? 'pendente' : fraca ? 'fraca' : 'forte';
  return { score, classe, linhasComValor:linhas.length, genericas, fontes };
}
async function lerJson(caminho, fallback=null) { try { return JSON.parse(await fs.readFile(caminho, 'utf8')); } catch { return fallback; } }
const config = await lerJson(CONFIG_PATH, []);
const fila = [];
for (const item of config) {
  const arquivo = item.arquivo_saida || path.join(DATA_DIR, `${item.id}.json`);
  const dados = await lerJson(arquivo);
  const monitor = await lerJson(item.arquivo_monitoramento || path.join(DATA_DIR, `${item.id}-monitor.json`));
  const av = avaliar(dados);
  const acao = av.classe === 'pendente' ? 'pendentes' : av.classe === 'fraca' ? 'fracas' : 'fortes';
  fila.push({
    id:item.id, sigla:item.sigla, nome:item.nome, uf:item.uf, acao, classe:av.classe, score:av.score,
    linhas_com_valor:av.linhasComValor, fontes:av.fontes, linhas_genericas:av.genericas,
    ultima_pesquisa:dados?.ultima_pesquisa || null,
    monitor: monitor ? { atualizado_em:monitor.atualizado_em, modelo:monitor.modelo, usou_openai:monitor.usou_openai, depois:monitor.depois } : null,
    workflow_sugerido: av.classe === 'forte' ? null : { grupo_atualizacao:acao, instituicao:item.id, quantidade:'1', modelo_openai: av.classe === 'pendente' ? 'gpt-5.4-mini' : 'gpt-5.4' }
  });
}
const grupos = {
  pendentes: fila.filter(x => x.acao === 'pendentes'),
  fracas: fila.filter(x => x.acao === 'fracas'),
  fortes: fila.filter(x => x.acao === 'fortes')
};
const relatorio = {
  gerado_em: HOJE,
  resumo: { total:fila.length, pendentes:grupos.pendentes.length, fracas:grupos.fracas.length, fortes:grupos.fortes.length },
  fila_acoes: fila.sort((a,b) => a.score - b.score || a.id.localeCompare(b.id)),
  grupos
};
await fs.mkdir(DATA_DIR, { recursive:true });
await fs.writeFile(path.join(DATA_DIR, '_relatorio-qualidade.json'), JSON.stringify(relatorio, null, 2)+'\n', 'utf8');
await fs.mkdir('docs', { recursive:true });
const linhas = [
  '# Relatório de Qualidade — Remuneração', '',
  `Gerado em: ${HOJE}`, '',
  `- Total: ${relatorio.resumo.total}`,
  `- Pendentes: ${relatorio.resumo.pendentes}`,
  `- Fracas: ${relatorio.resumo.fracas}`,
  `- Fortes: ${relatorio.resumo.fortes}`,
  '',
  '| Ação | ID | Sigla | Score | Linhas úteis | Observação |',
  '|---|---|---:|---:|---:|---|',
  ...relatorio.fila_acoes.map(x => `| ${x.acao} | ${x.id} | ${x.sigla} | ${x.score} | ${x.linhas_com_valor} | ${x.acao === 'fortes' ? 'OK' : 'Rodar atualização de remuneração'} |`)
];
await fs.writeFile('docs/RELATORIO-REMUNERACAO.md', linhas.join('\n')+'\n', 'utf8');
console.log(`Relatório de remuneração gerado: ${relatorio.resumo.total} instituições.`);
