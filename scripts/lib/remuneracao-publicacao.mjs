import path from 'node:path';

// Pesquisa automática não substitui uma tabela que já passou pela auditoria editorial.
export function destinoPesquisaRemuneracao(item, atual, dataDir = 'data/remuneracao') {
  return atual?.revisao_dados
    ? path.join(dataDir, 'candidatas', `${item.id}.json`)
    : item.arquivo_saida;
}
