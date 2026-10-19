/* Preferências locais. A mensagem europeia certificada é configurada no AdSense. */
(function (root) {
  'use strict';
  if (root.USPConsent) return;
  const doc = root.document;
  const KEY = 'usp_consent_v2', VERSION = 2, VALIDITY = 180 * 86400000;
  const denied = () => ({ analytics: false, advertising: false });
  function read() {
    try {
      const value = JSON.parse(root.localStorage.getItem(KEY));
      if (value?.version === VERSION && typeof value.analytics === 'boolean' &&
          typeof value.advertising === 'boolean' && Number.isFinite(value.savedAt) &&
          value.savedAt <= Date.now() && Date.now() - value.savedAt < VALIDITY) return value;
    } catch { /* Sem armazenamento: mantém as categorias opcionais desligadas. */ }
    return null;
  }
  let saved = read(), state = saved || denied(), notice, previousFocus;
  root.dataLayer = root.dataLayer || [];
  root.gtag = root.gtag || function () { root.dataLayer.push(arguments); };
  root.gtag('consent', 'default', {
    analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied',
    ad_personalization: 'denied', functionality_storage: 'granted', security_storage: 'granted'
  });
  function signal() {
    root.gtag('consent', 'update', {
      analytics_storage: state.analytics ? 'granted' : 'denied',
      ad_storage: state.advertising ? 'granted' : 'denied',
      ad_user_data: 'denied', ad_personalization: 'denied'
    });
    root.dispatchEvent(new root.CustomEvent('usp:consent-change', { detail: { ...state } }));
  }
  function clean() {
    try { root.sessionStorage.removeItem('usp_sessao'); } catch { /* Pode estar bloqueado. */ }
    const host = root.location.hostname;
    const domains = ['', host, '.' + host, '.' + host.split('.').slice(-3).join('.')];
    for (const part of doc.cookie.split(';')) {
      const name = part.split('=')[0].trim();
      if (!/^_(ga|gid|gat|gcl)(_|$)/.test(name)) continue;
      for (const domain of domains) {
        doc.cookie = name + '=; Max-Age=0; path=/' + (domain ? '; domain=' + domain : '') + '; SameSite=Lax';
      }
    }
  }
  function dismiss() {
    if (notice) { notice.remove(); notice = null; }
    previousFocus?.focus?.();
  }
  function save(choices) {
    const old = state;
    state = { version: VERSION, analytics: choices.analytics === true,
      advertising: choices.advertising === true, savedAt: Date.now() };
    saved = state;
    try { root.localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* Vale nesta página. */ }
    signal(); dismiss();
    if ((old.analytics && !state.analytics) || (old.advertising && !state.advertising)) {
      clean();
      // Encerra também scripts e iframes já autorizados nesta página.
      root.location.reload();
    }
  }
  function open(details = false) {
    if (notice) { notice.querySelector('details').open = details; return; }
    previousFocus = doc.activeElement;
    notice = doc.createElement('section');
    notice.className = 'usp-consent';
    notice.setAttribute('role', 'region');
    notice.setAttribute('aria-label', 'Preferências de cookies');
    notice.innerHTML = '<h2>Você escolhe os cookies</h2>' +
      '<p>Usamos armazenamento necessário para o funcionamento do portal. Com sua autorização, medimos a audiência e carregamos anúncios do Google sem personalização. Você pode recusar e continuar navegando.</p>' +
      '<p><a href="/privacidade.html">Privacidade</a> · <a href="/cookies.html">Política de Cookies</a></p>' +
      '<details><summary>Personalizar preferências</summary><div class="usp-consent__options">' +
      '<label><input type="checkbox" checked disabled> Necessários — tema, preferências e funcionamento</label>' +
      '<label><input type="checkbox" name="analytics"> Análise — estatísticas do portal e Google Analytics</label>' +
      '<label><input type="checkbox" name="advertising"> Publicidade — anúncios e cookies do Google AdSense</label>' +
      '<button type="button" data-choice="save">Salvar minhas escolhas</button></div></details>' +
      '<div class="usp-consent__actions"><button type="button" data-choice="reject">Recusar opcionais</button>' +
      '<button type="button" data-choice="accept">Aceitar opcionais</button></div>';
    notice.querySelector('[name="analytics"]').checked = state.analytics;
    notice.querySelector('[name="advertising"]').checked = state.advertising;
    notice.querySelector('details').open = details;
    notice.querySelector('[data-choice="reject"]').addEventListener('click', () => save(denied()));
    notice.querySelector('[data-choice="accept"]').addEventListener('click', () => save({ analytics: true, advertising: true }));
    notice.querySelector('[data-choice="save"]').addEventListener('click', () => save({
      analytics: notice.querySelector('[name="analytics"]').checked,
      advertising: notice.querySelector('[name="advertising"]').checked
    }));
    doc.body.appendChild(notice);
    if (details) notice.querySelector('summary').focus();
  }
  root.USPConsent = Object.freeze({ get: () => ({ ...state }), open: () => open(true) });
  if (saved) signal();
  root.addEventListener('storage', event => {
    if (event.key !== KEY && event.key !== null) return;
    const old = state;
    saved = read(); state = saved || denied(); signal();
    if ((old.analytics && !state.analytics) || (old.advertising && !state.advertising)) {
      clean(); root.location.reload();
    }
  });
  function ready() {
    doc.addEventListener('click', event => {
      if (event.target.closest?.('[data-cookie-preferences]')) { event.preventDefault(); open(true); }
    });
    const target = doc.querySelector('footer nav, footer') || doc.body;
    if (!target.querySelector('[data-cookie-preferences]')) {
      const button = doc.createElement('button');
      button.type = 'button'; button.className = 'usp-cookie-preferences';
      button.setAttribute('data-cookie-preferences', ''); button.textContent = 'Preferências de cookies';
      target.appendChild(button);
    }
    if (!saved) open();
  }
  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', ready, { once: true });
  else ready();
})(window);
