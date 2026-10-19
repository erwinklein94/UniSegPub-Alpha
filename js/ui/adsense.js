/* Anúncios automáticos: aprovação e ativação são feitas no painel do AdSense. */
(function (root) {
  'use strict';
  if (root.__uspAdSense) return;
  root.__uspAdSense = true;
  const doc = root.document;
  if (!/^(www\.)?universosegpub\.com\.br$/.test(root.location.hostname)) return;
  if (doc.querySelector('meta[name="usp-adsense"]')?.content !== 'auto') return;
  if ([...doc.querySelectorAll('meta[name="robots"]')].some(meta => /\bnoindex\b/i.test(meta.content))) return;
  if (doc.querySelector('meta[http-equiv="refresh"]')) return;
  if (/^\/(?:admin[^/]*|404|privacidade|cookies|termos|sobre|contato|produtos|anuncie|parceiros|relatorio-concursos)(?:\.html|\/|$)/.test(root.location.pathname)) return;
  function start() {
    if (!root.USPConsent?.get().advertising || doc.querySelector('script[data-usp-adsense]')) return;
    root.adsbygoogle = root.adsbygoogle || [];
    root.adsbygoogle.requestNonPersonalizedAds = 1;
    const script = doc.createElement('script');
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4280112532471663';
    script.setAttribute('data-usp-adsense', '');
    script.setAttribute('data-privacy-treatments', 'disablePersonalization');
    doc.head.appendChild(script);
  }
  root.addEventListener('usp:consent-change', start);
  start();
})(window);
