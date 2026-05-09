(function () {
  'use strict';

  var STORAGE_KEY = 'uniseg_cookie_notice_v1';

  function hasStorageConsent() {
    try {
      return window.localStorage && window.localStorage.getItem(STORAGE_KEY) === 'ok';
    } catch (error) {
      return false;
    }
  }

  function saveConsent() {
    try {
      window.localStorage.setItem(STORAGE_KEY, 'ok');
    } catch (error) {
      // Navegação privada ou bloqueio de armazenamento: apenas fecha o aviso nesta sessão.
    }
  }

  function createCookieNotice() {
    if (hasStorageConsent() || document.querySelector('.cookie-notice')) return;

    var notice = document.createElement('section');
    notice.className = 'cookie-notice';
    notice.setAttribute('role', 'region');
    notice.setAttribute('aria-label', 'Aviso sobre cookies');

    notice.innerHTML = '' +
      '<p><strong>Cookies e privacidade:</strong> usamos cookies e tecnologias similares para melhorar o site, medir audiência, exibir anúncios e manter recursos de navegação. Leia nossa <a href="privacidade.html">Política de Privacidade</a> e a <a href="cookies.html">Política de Cookies</a>.</p>' +
      '<div class="cookie-notice__actions">' +
      '<a class="cookie-notice__link" href="cookies.html">Ver detalhes</a>' +
      '<button type="button" class="cookie-notice__accept">Entendi</button>' +
      '</div>';

    var button = notice.querySelector('.cookie-notice__accept');
    button.addEventListener('click', function () {
      saveConsent();
      notice.remove();
    });

    document.body.appendChild(notice);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createCookieNotice);
  } else {
    createCookieNotice();
  }
})();
