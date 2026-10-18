/* Identifica a página e a posição da divulgação sem trocar o Hotlink do afiliado. */
(function (root) {
  'use strict';
  const paginas = {
    index: 'home', remuneracao: 'rem', concursos: 'conc', produtos: 'vitr',
    'comparar-carreiras': 'comp', 'guia-instituicoes': 'guia',
    'acoes-judiciais': 'acoes', 'associacoes-sindicatos': 'assoc',
    'poderes-deveres': 'poder', 'base-legal': 'legal', brasoes: 'bras',
    noticias: 'not', direitos: 'dir'
  };
  function campanha(href, pathname, posicao) {
    let url;
    try { url = new URL(href); } catch { return href; }
    if (url.protocol !== 'https:' || url.hostname !== 'go.hotmart.com') return href;
    // Códigos já escolhidos pelo administrador continuam intactos.
    if ([...url.searchParams.keys()].some(k => k.toLowerCase() === 'src')) return href;
    const pagina = (pathname.split('/').pop() || 'index').replace(/\.html$/, '');
    const produto = url.pathname.replace(/^\//, '').toLowerCase();
    if (!/^[a-z0-9]{1,14}$/.test(produto)) return href;
    const lugar = /^(lat|mob|vitr|out)[1-9]?$/.test(posicao) ? posicao : 'out';
    // A Hotmart aceita até 30 caracteres e reserva o underline para uso interno.
    const codigo = ['usp', paginas[pagina] || 'site', lugar, produto].join('|');
    if (codigo.length > 30) return href;
    url.searchParams.set('src', codigo);
    return url.href;
  }
  root.UNISEGPUB_CAMPANHAS = Object.freeze({ campanha });
  if (!root.document) return;
  function atualizar() {
    const contadores = { lat: 0, mob: 0, vitr: 0, out: 0 };
    root.document.querySelectorAll('a[href*="go.hotmart.com/"]').forEach(link => {
      if (root.UNISEGPUB_LINKS_PRODUTOS && !root.UNISEGPUB_LINKS_PRODUTOS.permitido(link.href)) {
        (link.closest('.produto-card, .usp-affiliate-card, .usp-affiliate-mobile-insert') || link).remove();
        return;
      }
      const tipo = link.closest('.usp-affiliate-mobile-card') ? 'mob'
        : link.closest('.usp-affiliate-card') ? 'lat'
        : link.classList.contains('produto-card') ? 'vitr' : 'out';
      const indice = ++contadores[tipo];
      const posicao = tipo + (indice <= 9 ? indice : '');
      const href = campanha(link.getAttribute('href'), root.location.pathname, posicao);
      if (href !== link.getAttribute('href')) link.setAttribute('href', href);
    });
  }
  function iniciar() {
    atualizar();
    let agendado = false;
    new root.MutationObserver(() => {
      if (agendado) return;
      agendado = true;
      root.requestAnimationFrame(() => { agendado = false; atualizar(); });
    }).observe(root.document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['href'] });
  }
  if (root.document.readyState === 'loading') root.document.addEventListener('DOMContentLoaded', iniciar, { once: true });
  else iniciar();
})(typeof window === 'undefined' ? globalThis : window);
