export const normalizar = valor => String(valor || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
export const tipoValor = linha => ({ subsidio:'Subsídio', soldo:'Somente soldo', vencimento_base:'Vencimento básico', remuneracao:'Composição de referência' })[linha?.tipo_valor] || 'Valor de referência';
export function filtrarInstituicoes(itens, busca = '', esfera = '', uf = '') {
  const termos = normalizar(busca).split(/\s+/).filter(Boolean);
  return itens.filter(i => (!esfera || (i.uf === 'BR' ? 'federal' : 'estadual') === esfera) &&
    (!uf || i.uf === uf) && termos.every(t => normalizar(`${i.id} ${i.sigla} ${i.nome} ${i.uf} ${i.estado}`).includes(t)));
}
export function referenciaLinha(dados, linha, hoje = new Date().toISOString().slice(0, 10)) {
  if (!linha) return { confirmada:false, valor:null, status:'Escolha o cargo e a classe', periodo:'' };
  const data = linha.vigencia_inicio || linha.referencia_data || '';
  const fonte = fonteSegura(linha.fonteUrl);
  const confirmada = dados?.revisao_dados?.situacao === 'conferida' && linha.verificacao === 'fonte_oficial' &&
    !linha.valorPendente && Number.isFinite(linha.remuneracao) && linha.remuneracao > 0 && /^\d{4}-\d{2}-\d{2}$/.test(data) && data <= hoje && Boolean(fonte);
  return { confirmada, valor:confirmada ? linha.remuneracao : null,
    status:confirmada ? 'Referência conferida' : data > hoje ? 'Vigência futura — confira a fonte' : 'Vigência a confirmar',
    periodo:data, tipo:tipoValor(linha), fonte };
}
export function fonteSegura(valor) {
  try { const u=new URL(valor); return /^https?:$/.test(u.protocol) && !u.username && !u.password ? u.href : ''; } catch { return ''; }
}
export function selecaoDaURL(valor, itens) {
  const validos=new Set(itens.map(i=>i.id));
  return [...new Set(String(valor || '').split(','))].filter(id=>validos.has(id)).slice(0,4);
}
