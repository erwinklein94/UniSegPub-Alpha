const EVENTOS = {
  PURCHASE_APPROVED: 'APPROVED', PURCHASE_COMPLETE: 'COMPLETE',
  PURCHASE_REFUNDED: 'REFUNDED', PURCHASE_CHARGEBACK: 'CHARGEBACK',
  PURCHASE_CANCELED: 'CANCELLED', PURCHASE_CANCELLED: 'CANCELLED',
  PURCHASE_EXPIRED: 'EXPIRED', PURCHASE_BILLET_PRINTED: 'PRINTED_BILLET',
  PURCHASE_DELAYED: 'OVERDUE', PURCHASE_PROTEST: 'PROTESTED',
  PURCHASE_PARTIALLY_REFUNDED: 'PARTIALLY_REFUNDED'
};
const prioridade = { CHARGEBACK: 6, REFUNDED: 5, PARTIALLY_REFUNDED: 4, CANCELLED: 3, COMPLETE: 2, APPROVED: 1 };
export function comissaoAfiliado(comissoes, afiliados = []) {
  const partes = (Array.isArray(comissoes) ? comissoes : []).filter(c => c.source === 'AFFILIATE');
  if (partes.length !== 1 || afiliados.length > 1) return { comissao: null, moeda: null };
  const parte = partes[0].commission || partes[0];
  if (typeof parte.value !== 'number' || !Number.isFinite(parte.value) || parte.value < 0 || !/^[A-Z]{3}$/.test(parte.currency_value || '')) return { comissao: null, moeda: null };
  return { comissao: parte.value, moeda: parte.currency_value };
}
export function normalizarEvento(payload, agora = Date.now()) {
  if (payload?.version !== '2.0.0' || typeof payload.id !== 'string' || !/^[\w-]{1,160}$/.test(payload.id)) throw new Error('Evento v2 inválido.');
  if (!EVENTOS[payload.event]) return null;
  const p = payload.data?.purchase;
  const data = payload.data;
  if (!p || !/^[\w-]{1,100}$/.test(p.transaction || '') || !Number.isFinite(payload.creation_date) || payload.creation_date < 946684800000 || payload.creation_date > agora + 300000) throw new Error('Transação ou data inválida.');
  const aprovado = Number.isFinite(p.approved_date) && p.approved_date > 946684800000 && p.approved_date <= agora + 300000 ? new Date(p.approved_date).toISOString() : null;
  // Nunca persistir payload bruto, Hottok, dados do comprador ou do produtor.
  return {
    evento_id: payload.id, evento: payload.event, transacao: p.transaction,
    ocorrido_em: new Date(payload.creation_date).toISOString(), aprovado_em: aprovado,
    produto_id: String(data.product?.id || '').slice(0,80),
    produto: String(data.product?.name || 'Produto não identificado').slice(0,240),
    status: EVENTOS[payload.event],
    // Marcadores combinados do teste oficial observado na ativação, sem inferir pelo nome isolado.
    teste: p.transaction === 'HP16015479281022' && Number(data.product?.id) === 0 && data.product?.name === 'Produto test postback2',
    ...comissaoAfiliado(data.commissions, data.affiliates || [])
  };
}
export function resumirVendas(eventos, inicio, fim) {
  eventos = eventos.filter(e => e.teste !== true);
  const ultimas = new Map();
  for (const e of eventos) {
    const anterior = ultimas.get(e.transacao);
    if (!anterior || Date.parse(e.ocorrido_em) > Date.parse(anterior.ocorrido_em) || (e.ocorrido_em === anterior.ocorrido_em && (prioridade[e.status] || 0) > (prioridade[anterior.status] || 0))) ultimas.set(e.transacao,e);
  }
  const aprovacoes = new Map();
  for (const e of eventos) if (e.aprovado_em && (!aprovacoes.has(e.transacao) || e.aprovado_em < aprovacoes.get(e.transacao))) aprovacoes.set(e.transacao,e.aprovado_em);
  const linhas = [...ultimas.values()].map(e => ({...e, aprovado_em: aprovacoes.get(e.transacao) || e.aprovado_em})).filter(e => {
    const data = (e.aprovado_em || e.ocorrido_em);
    const dia = new Intl.DateTimeFormat('sv-SE',{timeZone:'America/Sao_Paulo',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date(data));
    return dia >= inicio && dia <= fim;
  });
  const ativas = linhas.filter(e => ['APPROVED','COMPLETE'].includes(e.status));
  const comissoes = {};
  ativas.forEach(e => { if (e.comissao !== null && e.moeda) comissoes[e.moeda] = (comissoes[e.moeda] || 0) + Number(e.comissao); });
  for (const moeda of Object.keys(comissoes)) comissoes[moeda] = Number(comissoes[moeda].toFixed(4));
  return { transacoes: linhas.length, aprovadas: ativas.length, comissoes,
    semComissao: ativas.filter(e => e.comissao === null).length,
    estornadas: linhas.filter(e => ['REFUNDED','CHARGEBACK','PARTIALLY_REFUNDED'].includes(e.status)).length,
    linhas: linhas.sort((a,b)=>Date.parse(b.ocorrido_em)-Date.parse(a.ocorrido_em)) };
}
