/*
  Ampliação dos brasões do cabeçalho.
  - Mantém a imagem do brasão grande no cabeçalho.
  - Ao clicar, abre uma visualização ampliada da imagem atual.
  - Fecha pelo botão, clique fora da imagem ou tecla ESC.
*/
(function () {
  'use strict';

  const HEADER_BRASAO_SELECTOR = '#header-active-flag';
  const LIGHTBOX_ID = 'brasao-lightbox';

  let ultimoFocoAntesDoLightbox = null;

  function getImagemCabecalho() {
    return document.querySelector(HEADER_BRASAO_SELECTOR);
  }

  function prepararImagemCabecalho() {
    const img = getImagemCabecalho();
    if (!img) return;

    const moldura = img.closest('.current-flag-frame');
    if (moldura) {
      // O brasão agora é interativo, então não deve ficar escondido da acessibilidade.
      moldura.removeAttribute('aria-hidden');
      moldura.classList.add('brasao-header-clickable');
    }

    img.setAttribute('role', 'button');
    img.setAttribute('tabindex', '0');
    img.setAttribute('aria-label', 'Ampliar imagem do brasão no cabeçalho');
    img.setAttribute('title', 'Clique para ampliar o brasão');
  }

  function garantirLightbox() {
    let lightbox = document.getElementById(LIGHTBOX_ID);
    if (lightbox) return lightbox;

    lightbox = document.createElement('div');
    lightbox.id = LIGHTBOX_ID;
    lightbox.className = 'brasao-lightbox';
    lightbox.setAttribute('aria-hidden', 'true');
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Imagem ampliada do brasão');

    lightbox.innerHTML = [
      '<div class="brasao-lightbox__backdrop" data-brasao-fechar="true"></div>',
      '<div class="brasao-lightbox__content" role="document">',
      '  <button type="button" class="brasao-lightbox__close" data-brasao-fechar="true" aria-label="Fechar imagem ampliada">×</button>',
      '  <img class="brasao-lightbox__img" alt="Imagem ampliada do brasão">',
      '  <p class="brasao-lightbox__caption">Clique fora da imagem, use ESC ou o botão × para fechar.</p>',
      '</div>'
    ].join('');

    document.body.appendChild(lightbox);
    return lightbox;
  }

  function abrirLightbox(imgOrigem) {
    if (!imgOrigem || !imgOrigem.currentSrc && !imgOrigem.src) return;

    const lightbox = garantirLightbox();
    const imgAmpliada = lightbox.querySelector('.brasao-lightbox__img');
    const botaoFechar = lightbox.querySelector('.brasao-lightbox__close');

    imgAmpliada.src = imgOrigem.currentSrc || imgOrigem.src;
    imgAmpliada.alt = imgOrigem.alt || 'Imagem ampliada do brasão';

    ultimoFocoAntesDoLightbox = document.activeElement;
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('brasao-lightbox-open');

    if (botaoFechar) botaoFechar.focus({ preventScroll: true });
  }

  function fecharLightbox() {
    const lightbox = document.getElementById(LIGHTBOX_ID);
    if (!lightbox || !lightbox.classList.contains('is-open')) return;

    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('brasao-lightbox-open');

    if (ultimoFocoAntesDoLightbox && typeof ultimoFocoAntesDoLightbox.focus === 'function') {
      ultimoFocoAntesDoLightbox.focus({ preventScroll: true });
    }
  }

  function iniciar() {
    prepararImagemCabecalho();
    garantirLightbox();

    document.addEventListener('click', function (event) {
      const imgCabecalho = event.target.closest(HEADER_BRASAO_SELECTOR);
      if (imgCabecalho) {
        event.preventDefault();
        abrirLightbox(imgCabecalho);
        return;
      }

      if (event.target.closest('[data-brasao-fechar="true"]')) {
        event.preventDefault();
        fecharLightbox();
      }
    });

    document.addEventListener('keydown', function (event) {
      const imgCabecalho = event.target.closest && event.target.closest(HEADER_BRASAO_SELECTOR);
      if (imgCabecalho && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault();
        abrirLightbox(imgCabecalho);
        return;
      }

      if (event.key === 'Escape') fecharLightbox();
    });

    const img = getImagemCabecalho();
    if (img) {
      const observer = new MutationObserver(prepararImagemCabecalho);
      observer.observe(img, { attributes: true, attributeFilter: ['src', 'alt', 'class'] });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar, { once: true });
  } else {
    iniciar();
  }
}());
