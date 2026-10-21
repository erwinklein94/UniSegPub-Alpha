/* Medição pública: seleção de produtos é interesse, nunca venda ou receita. */
(function (root) {
  'use strict';
  if (root.__uspAnalytics || !root.document) return;
  if (!/^(www\.)?universosegpub\.com\.br$/.test(root.location.hostname) || /^\/admin(?:[./-]|$)/.test(root.location.pathname)) return;
  root.__uspAnalytics = true;
  const doc = root.document, destino = 'G-M2ZJSB081C';
  root.dataLayer = root.dataLayer || [];
  root.gtag = root.gtag || function () { root.dataLayer.push(arguments); };
  if (!root.__uspGoogleIniciado) {
    root.gtag('js', new Date());
    root.__uspGoogleIniciado = true;
  }
  let iniciado = false;
  function iniciar() {
    if (iniciado || !root.USPConsent?.get().analytics) return;
    iniciado = true;
    // A URL permanece limpa; a campanha conhecida usa somente rótulos controlados.
    root.gtag('config', destino, {
      page_location: root.location.origin + root.location.pathname,
      ...campanha(),
      page_referrer: referencia(), allow_google_signals: false, allow_ad_personalization_signals: false
    });
    if (!doc.querySelector('script[src^="https://www.googletagmanager.com/gtag/js"]')) {
      const script = doc.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=' + destino;
      doc.head.append(script);
    }
    registrarAcesso();
  }
  function campanha() {
    try {
      const parametros = new URL(root.location.origin + root.location.pathname + (root.location.search || '')).searchParams;
      if (parametros.get('utm_source') !== 'google' || parametros.get('utm_medium') !== 'cpc' || parametros.get('utm_campaign') !== 'usp_home_100_202610') return {};
      const dados = { campaign_source: 'google', campaign_medium: 'cpc', campaign_name: 'usp_home_100_202610' };
      const grupo = parametros.get('utm_content');
      if (['salarios', 'concursos', 'portal'].includes(grupo)) dados.campaign_content = grupo;
      return dados;
    } catch { return {}; }
  }
  function referencia() {
    try { return new URL(doc.referrer).origin; } catch { return ''; }
  }
  function registrarAcesso() {
    try {
      if (root.localStorage.getItem('usp_nao_contar') === '1') return;
      let sessao = root.sessionStorage.getItem('usp_sessao');
      if (!sessao) {
        sessao = root.crypto.randomUUID();
        root.sessionStorage.setItem('usp_sessao', sessao);
      }
      const chave = 'sb_publishable_onaOo8uMyySc3KWf6D6Jfg_OMT6wqcX';
      root.fetch('https://luggjibketdxztvsgzgo.supabase.co/rest/v1/acessos', {
        method: 'POST', headers: { apikey: chave, Authorization: 'Bearer ' + chave,
          'Content-Type': 'application/json', Prefer: 'return=minimal' },
        body: JSON.stringify({ pagina: (root.location.pathname.replace(/^\//, '') || 'index.html').slice(0, 200),
          sessao: String(sessao).slice(0, 64), referencia: referencia() || null }), keepalive: true
      }).catch(function () {});
    } catch { /* A coleta opcional nunca interfere na página. */ }
  }
  root.addEventListener('usp:consent-change', iniciar);
  iniciar();
  function identidade(href) {
    try {
      const url = new URL(href);
      const plataforma = { 'go.hotmart.com': 'Hotmart', 's.shopee.com.br': 'Shopee', 'shope.ee': 'Shopee' }[url.hostname];
      if (!plataforma || url.protocol !== 'https:' || url.username || url.password || !/^\/[a-zA-Z0-9]+\/?$/.test(url.pathname)) return null;
      return { id: plataforma.toLowerCase() + ':' + url.pathname.replace(/\//g, ''), plataforma };
    } catch { return null; }
  }
  function selecionar(event) {
    if (!root.USPConsent?.get().analytics) return;
    if ((event.type === 'click' && event.button !== 0) || (event.type === 'auxclick' && event.button !== 1)) return;
    try {
      const link = event.target?.closest?.('a[href]');
      const produto = link && identidade(link.href);
      if (!produto) return;
      if (root.UNISEGPUB_LINKS_PRODUTOS && !root.UNISEGPUB_LINKS_PRODUTOS.permitido(link.href)) return;
      let titulo, categoria;
      for (const [grupo, itens] of Object.entries(root.UNISEGPUB_PRODUTOS || {})) {
        if (!Array.isArray(itens)) continue;
        const item = itens.find(p => identidade(p.href)?.id === produto.id);
        if (item) { if (item.ativo === false) return; titulo = item.titulo; categoria = grupo; break; }
      }
      const card = link.closest('.usp-anuncio, .produto-card, .usp-product, .usp-affiliate-card, .usp-affiliate-mobile-card');
      titulo = titulo || card?.querySelector('h2,h3')?.textContent || card?.querySelector('img[alt]')?.alt || produto.id;
      const posicao = link.closest('.usp-anuncio') ? 'anuncio_conteudo'
        : link.closest('.usp-affiliate-mobile-card') ? 'anuncio_mobile'
        : link.closest('.usp-affiliate-card') ? 'anuncio_lateral'
        : link.closest('.usp-product') ? 'vitrine_inicio'
        : link.closest('.produto-card') ? 'vitrine' : 'link_produto';
      const lista = root.location.pathname + ':' + posicao;
      root.gtag('event', 'select_item', {
        send_to: destino,
        item_list_id: lista.slice(0, 100),
        item_list_name: lista.slice(0, 100),
        items: [{ item_id: produto.id, item_name: String(titulo).trim().slice(0, 100),
          affiliation: produto.plataforma, item_category: categoria || 'afiliado', quantity: 1 }]
      });
    } catch { /* A medição nunca impede a abertura do produto. */ }
  }
  doc.addEventListener('click', selecionar, true);
  doc.addEventListener('auxclick', selecionar, true);
})(window);
