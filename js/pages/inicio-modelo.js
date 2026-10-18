export const UFS_INICIO = [
  ['AC', 'Acre'], ['AL', 'Alagoas'], ['AP', 'Amapá'], ['AM', 'Amazonas'], ['BA', 'Bahia'], ['CE', 'Ceará'], ['DF', 'Distrito Federal'], ['ES', 'Espírito Santo'], ['GO', 'Goiás'],
  ['MA', 'Maranhão'], ['MT', 'Mato Grosso'], ['MS', 'Mato Grosso do Sul'], ['MG', 'Minas Gerais'], ['PA', 'Pará'], ['PB', 'Paraíba'], ['PR', 'Paraná'], ['PE', 'Pernambuco'],
  ['PI', 'Piauí'], ['RJ', 'Rio de Janeiro'], ['RN', 'Rio Grande do Norte'], ['RS', 'Rio Grande do Sul'], ['RO', 'Rondônia'], ['RR', 'Roraima'], ['SC', 'Santa Catarina'], ['SP', 'São Paulo'], ['SE', 'Sergipe'], ['TO', 'Tocantins']
];
const TIPOS = { pm: 'Polícia Militar', pc: 'Polícia Civil', pp: 'Polícia Penal', bm: 'Bombeiros' };
export function instituicaoDaEscolha(tipo, uf) {
  if (tipo === 'pf' || tipo === 'prf') return tipo;
  if (!TIPOS[tipo] || !UFS_INICIO.some(([sigla]) => sigla === uf)) return null;
  return ({ 'pm-SP': 'pmesp', 'pm-RJ': 'pmerj', 'pc-RJ': 'pcerj' })[`${tipo}-${uf}`] || tipo + uf.toLowerCase();
}
export const INSTITUICOES_INICIO = [
  { id: 'pf', tipo: 'federais', uf: 'BR', sigla: 'PF', nome: 'Polícia Federal', estado: 'Brasil' },
  { id: 'prf', tipo: 'federais', uf: 'BR', sigla: 'PRF', nome: 'Polícia Rodoviária Federal', estado: 'Brasil' },
  ...Object.entries(TIPOS).flatMap(([tipo, nome]) => UFS_INICIO.map(([uf, estado]) => {
    const id = instituicaoDaEscolha(tipo, uf);
    return { id, tipo, uf, sigla: id.toUpperCase(), nome: `${nome} · ${estado}`, estado };
  }))
];
export function normalizarBusca(texto) {
  return String(texto || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}
export function filtrarInstituicoes(busca, tipo = 'federais') {
  const q = normalizarBusca(busca);
  if (q && UFS_INICIO.some(([uf]) => uf.toLowerCase() === q)) return INSTITUICOES_INICIO.filter(i => i.uf.toLowerCase() === q);
  const exatas = q ? INSTITUICOES_INICIO.filter(i => i.id === q || normalizarBusca(i.nome).includes(q)) : [];
  if (exatas.length) return exatas;
  return INSTITUICOES_INICIO.filter(i => {
    if (!q) return i.tipo === tipo;
    const texto = normalizarBusca(`${i.sigla} ${i.nome} ${i.uf} ${i.estado}`);
    return q.split(/\s+/).every(termo => texto.includes(termo));
  });
}
export function situacaoInicio(item, agora = new Date()) {
  const instante = new Date(agora).getTime();
  const fim = item.fim ? Date.parse(item.fim) : null;
  const inicio = item.inicio ? Date.parse(item.inicio) : null;
  const revisao = Date.parse(item.revisadoEm + 'T23:59:59-03:00');
  if (item.situacao === 'inscricoes' && fim !== null && instante > fim) return { chave: 'encerrado', grupo: 'andamento', texto: 'Prazo informado encerrado' };
  if (Number.isFinite(revisao) && instante - revisao > 14 * 86400000) return { chave: 'revisar', grupo: 'andamento', texto: 'Atualização a conferir' };
  if (item.situacao === 'inscricoes') {
    if (!Number.isFinite(fim) || !Number.isFinite(inicio)) return { chave: 'revisar', grupo: 'andamento', texto: 'Cronograma a conferir' };
    if (instante < inicio) return { chave: 'previsto', grupo: 'preparacao', texto: 'Inscrições em breve' };
    return { chave: 'aberto', grupo: 'abertas', texto: 'Inscrições abertas' };
  }
  if (item.situacao === 'preparacao') return { chave: 'previsto', grupo: 'preparacao', texto: 'Preparação · comunicado oficial' };
  return { chave: 'andamento', grupo: 'andamento', texto: 'Em andamento' };
}
