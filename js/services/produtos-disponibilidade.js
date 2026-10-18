/* Revisão de 18/10/2026: produtos que a loja confirmou como inexistentes.
   O filtro também vale para cópias antigas do catálogo no banco ou no cache. */
(function () {
  'use strict';
  const removidos = new Set([
    'https://s.shopee.com.br/901i8h9IK5',
    'https://s.shopee.com.br/2qR7lnxjWo',
    'https://s.shopee.com.br/9pasKuSzle',
    'https://s.shopee.com.br/9KebjbAPje',
    'https://s.shopee.com.br/9Uy1w73uSI',
    'https://s.shopee.com.br/qg3cYrOLn',
    'https://s.shopee.com.br/9pasLS6Sfs'
  ]);

  function permitido(href) {
    try {
      const url = new URL(String(href || ''));
      if (!/^https?:$/.test(url.protocol)) return false;
      if (/SEU_LINK_AFILIADO_AQUI/i.test(url.pathname)) return false;
      const chave = url.origin + url.pathname.replace(/\/+$/, '');
      return !removidos.has(chave);
    } catch (_) {
      return false;
    }
  }

  window.UNISEGPUB_LINKS_PRODUTOS = Object.freeze({ permitido });
})();
