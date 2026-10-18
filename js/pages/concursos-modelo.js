import { normalizarBusca, situacaoInicio } from './inicio-modelo.js';

export function estadoConcurso(item, revisadoEm, agora = new Date()) {
  return situacaoInicio({ ...item, revisadoEm }, agora);
}

export function filtrarConcursos(itens, filtros, revisadoEm, agora = new Date()) {
  const termos = normalizarBusca(filtros.busca).split(/\s+/).filter(Boolean);
  return itens.filter(item => {
    const texto = normalizarBusca(`${item.instituicao} ${item.nome} ${item.cargos} ${item.uf} ${item.banca}`);
    return (!filtros.uf || item.uf === filtros.uf)
      && (!filtros.tipo || item.tipo === filtros.tipo)
      && (!filtros.inst || item.inst === filtros.inst)
      && (!filtros.situacao || estadoConcurso(item, revisadoEm, agora).grupo === filtros.situacao)
      && termos.every(termo => texto.includes(termo));
  });
}

export function resumoConcursos(itens, revisadoEm, agora = new Date()) {
  const abertas = itens.filter(item => estadoConcurso(item, revisadoEm, agora).grupo === 'abertas');
  return {
    total: itens.length,
    abertas: abertas.length,
    vagas: abertas.reduce((total, item) => total + (Number(String(item.vagas).replaceAll('.', '')) || 0), 0),
    andamento: itens.filter(item => estadoConcurso(item, revisadoEm, agora).grupo === 'andamento').length
  };
}
