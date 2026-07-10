/* Dados do portal — carrega os conjuntos de dados (antes embutidos em js/data/*.js)
   da tabela datasets do Supabase, com cache local de 6 horas.
   Define cada chave como global (window[chave]) e sinaliza:
   - promessa: window.DADOS_PORTAL_PROMESSA (módulos que escrevem nos dados devem aguardá-la)
   - evento:   dados-portal:pronto (módulos com render inicial devem reagir) */
(function () {
  'use strict';

  var SUPABASE_URL = 'https://yilpmghvcvfceowwuopc.supabase.co';
  var SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_2Yj2IfqpQugBSDJr9ByV7w_5KNCPeKa';
  var CACHE_KEY = 'usp_datasets_v1';
  var CACHE_TTL = 6 * 60 * 60 * 1000;

  function aplicar(mapa) {
    Object.keys(mapa).forEach(function (chave) { window[chave] = mapa[chave]; });
    window.DADOS_PORTAL_PRONTO = true;
    document.dispatchEvent(new CustomEvent('dados-portal:pronto'));
  }

  function lerCache() {
    try {
      var bruto = localStorage.getItem(CACHE_KEY);
      if (!bruto) return null;
      var cache = JSON.parse(bruto);
      if (!cache || !cache.mapa || !cache.expira || Date.now() > cache.expira) return null;
      return cache.mapa;
    } catch (erro) { return null; }
  }

  function gravarCache(mapa) {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({ expira: Date.now() + CACHE_TTL, mapa: mapa }));
    } catch (erro) { /* quota cheia: segue sem cache */ }
  }

  async function buscar() {
    var doCache = lerCache();
    if (doCache) { aplicar(doCache); return; }

    try {
      var resposta = await fetch(SUPABASE_URL + '/rest/v1/datasets?select=chave,conteudo&limit=300', {
        headers: {
          apikey: SUPABASE_PUBLISHABLE_KEY,
          Authorization: 'Bearer ' + SUPABASE_PUBLISHABLE_KEY,
          Accept: 'application/json'
        }
      });
      if (!resposta.ok) throw new Error('HTTP ' + resposta.status);
      var linhas = await resposta.json();
      var mapa = {};
      (Array.isArray(linhas) ? linhas : []).forEach(function (linha) {
        if (linha && linha.chave) mapa[linha.chave] = linha.conteudo;
      });
      if (!Object.keys(mapa).length) throw new Error('datasets vazios');
      gravarCache(mapa);
      aplicar(mapa);
    } catch (erro) {
      console.warn('Dados do portal indisponíveis no momento.', erro);
      document.dispatchEvent(new CustomEvent('dados-portal:erro'));
    }
  }

  window.DADOS_PORTAL_PROMESSA = buscar();
})();
