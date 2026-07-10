/* Cards de conteúdo por instituição — injetados a partir da tabela
   cards_estaticos do Supabase (HTML antes embutido nas páginas).
   Expõe window.CARDS_ESTATICOS_PROMESSA para módulos que criam/atualizam cards. */
(function () {
  'use strict';

  var SUPABASE_URL = 'https://yilpmghvcvfceowwuopc.supabase.co';
  var SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_2Yj2IfqpQugBSDJr9ByV7w_5KNCPeKa';

  var PAGINAS = [
    { pagina: 'acoes-judiciais', containerId: 'acoes-conteudo-lista', esferaId: 'acoes-filtro-esfera' },
    { pagina: 'associacoes-sindicatos', containerId: 'associacoes-conteudo-lista', esferaId: 'associacoes-filtro-esfera' },
    { pagina: 'brasoes', containerId: 'brasoes-conteudo-lista', esferaId: 'brasoes-filtro-esfera' },
    { pagina: 'direitos', containerId: 'direitos-conteudo-lista', esferaId: 'direitos-filtro-esfera' },
    { pagina: 'poderes-deveres', containerId: 'poderes-conteudo-lista', esferaId: 'poderes-filtro-esfera' },
    { pagina: 'concursos', containerId: 'concursos-conteudo-lista', esferaId: '' }
  ];

  function configDaPagina() {
    for (var i = 0; i < PAGINAS.length; i++) {
      if (document.getElementById(PAGINAS[i].containerId)) return PAGINAS[i];
    }
    return null;
  }

  async function injetar() {
    var config = configDaPagina();
    if (!config) return;

    var container = document.getElementById(config.containerId);
    try {
      var resposta = await fetch(SUPABASE_URL + '/rest/v1/cards_estaticos?select=instituicao_id,html&pagina=eq.' + config.pagina + '&order=ordem.asc&limit=300', {
        headers: {
          apikey: SUPABASE_PUBLISHABLE_KEY,
          Authorization: 'Bearer ' + SUPABASE_PUBLISHABLE_KEY,
          Accept: 'application/json'
        }
      });
      if (!resposta.ok) throw new Error('HTTP ' + resposta.status);
      var linhas = await resposta.json();
      if (!Array.isArray(linhas) || !linhas.length) return;

      var htmls = [];
      linhas.forEach(function (linha) {
        if (!linha || !linha.html || !linha.instituicao_id) return;
        var id = String(linha.instituicao_id).toLowerCase();
        if (container.querySelector('[data-inst="' + id + '"]')) return;
        htmls.push(linha.html);
      });
      if (htmls.length) container.insertAdjacentHTML('afterbegin', htmls.join('\n'));

      /* Reprocessa filtros/paginação da página. */
      if (config.esferaId) {
        var esfera = document.getElementById(config.esferaId);
        if (esfera) esfera.dispatchEvent(new Event('change', { bubbles: true }));
      }
      document.dispatchEvent(new CustomEvent('cards-estaticos:pronto', { detail: { pagina: config.pagina, total: htmls.length } }));
    } catch (erro) {
      console.warn('Cards da página indisponíveis no momento.', erro);
      document.dispatchEvent(new CustomEvent('cards-estaticos:erro'));
    }
  }

  function iniciar() {
    window.CARDS_ESTATICOS_PROMESSA = injetar();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar, { once: true });
  else iniciar();
}());
