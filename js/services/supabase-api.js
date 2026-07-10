/* Cliente REST do Supabase — leitura pública dos dados do portal.
   Usa apenas a chave publishable (somente leitura via RLS). */
(function () {
  'use strict';

  const SUPABASE_URL = 'https://yilpmghvcvfceowwuopc.supabase.co';
  const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_2Yj2IfqpQugBSDJr9ByV7w_5KNCPeKa';

  async function rest(caminho) {
    const resposta = await fetch(SUPABASE_URL + '/rest/v1/' + caminho, {
      headers: {
        apikey: SUPABASE_PUBLISHABLE_KEY,
        Authorization: 'Bearer ' + SUPABASE_PUBLISHABLE_KEY,
        Accept: 'application/json'
      }
    });
    if (!resposta.ok) throw new Error('Supabase HTTP ' + resposta.status);
    return resposta.json();
  }

  /* Lista de configuração das instituições (coluna jsonb da tabela instituicoes). */
  async function configInstituicoes(coluna) {
    const linhas = await rest('instituicoes?select=' + coluna + '&limit=300');
    const itens = (Array.isArray(linhas) ? linhas : [])
      .map(linha => linha && linha[coluna])
      .filter(item => item && typeof item === 'object' && item.id);
    return itens.length ? itens : null;
  }

  /* JSON original de uma instituição (coluna raw). */
  async function rawPorInstituicao(tabela, id) {
    const linhas = await rest(tabela + '?select=raw&instituicao_id=eq.' + encodeURIComponent(id));
    const linha = Array.isArray(linhas) ? linhas[0] : null;
    return linha && linha.raw && typeof linha.raw === 'object' ? linha.raw : null;
  }

  /* Todos os JSONs originais de uma tabela, mapeados por instituicao_id. */
  async function rawTodos(tabela) {
    const linhas = await rest(tabela + '?select=instituicao_id,raw&limit=300');
    if (!Array.isArray(linhas) || !linhas.length) return null;
    const mapa = {};
    linhas.forEach(linha => {
      if (linha && linha.instituicao_id && linha.raw && typeof linha.raw === 'object') {
        mapa[String(linha.instituicao_id).toLowerCase()] = linha.raw;
      }
    });
    return Object.keys(mapa).length ? mapa : null;
  }

  window.SUPABASE_API = {
    url: SUPABASE_URL,
    key: SUPABASE_PUBLISHABLE_KEY,
    rest,
    configInstituicoes,
    rawPorInstituicao,
    rawTodos
  };
}());
