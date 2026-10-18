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
    'https://s.shopee.com.br/9pasLS6Sfs',
    // Vendas suspensas confirmadas no painel de afiliações em 18/10/2026.
    'https://go.hotmart.com/Y105563100L',
    'https://go.hotmart.com/E105806080J',
    'https://go.hotmart.com/D105805984A',
    'https://go.hotmart.com/A105560326I',
    'https://go.hotmart.com/E105806281W',
    'https://go.hotmart.com/A105672755T',
    // O Hotlink do guia de matemática redirecionou para Página não encontrada.
    'https://go.hotmart.com/R105806688Q',
    // Novas suspensões confirmadas no painel Hotmart em 18/10/2026.
    'https://go.hotmart.com/F105805837A',
    'https://go.hotmart.com/J105560541A',
    'https://go.hotmart.com/K105562484Y'
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
