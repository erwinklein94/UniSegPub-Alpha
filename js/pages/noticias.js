(function () {
  'use strict';
  var PAGE_SIZE = 4;
  var currentPage = 1;
  var currentTipo = '';
  var currentInst = '';

  function qs(sel, root) { return (root || document).querySelector(sel); }
  function qsa(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function getCards() {
    return qsa('[data-noticia-card]');
  }

  function getFilteredCards() {
    return getCards().filter(function (card) {
      var esfera = card.getAttribute('data-noticia-esfera') || '';
      var inst = card.getAttribute('data-noticia-inst') || '';
      if (currentTipo && esfera !== currentTipo) return false;
      if (currentInst && inst !== currentInst) return false;
      return true;
    });
  }

  function syncInstitutionOptions() {
    var tipoSelect = qs('#noticias_tipo');
    var instSelect = qs('#noticias_instituicao');
    if (!tipoSelect || !instSelect) return;
    var tipo = tipoSelect.value || '';
    qsa('option[data-esfera]', instSelect).forEach(function (opt) {
      var optEsfera = opt.getAttribute('data-esfera') || '';
      opt.hidden = !!tipo && optEsfera !== tipo;
      if (opt.hidden && instSelect.value === opt.value) {
        instSelect.value = '';
      }
    });
  }

  function render() {
    var cards = getCards();
    var filtered = getFilteredCards();
    var empty = qs('#noticias-empty-state');
    var totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    if (currentPage > totalPages) currentPage = totalPages;
    var start = (currentPage - 1) * PAGE_SIZE;
    var end = start + PAGE_SIZE;
    cards.forEach(function (card) {
      card.hidden = true;
    });
    filtered.slice(start, end).forEach(function (card) {
      card.hidden = false;
    });
    if (empty) empty.hidden = filtered.length !== 0;
    renderPagination(totalPages, filtered.length);
  }

  function renderPagination(totalPages, totalItems) {
    var nav = qs('#noticias-pagination');
    if (!nav) return;
    nav.innerHTML = '';
    if (!totalItems) return;

    var prev = document.createElement('button');
    prev.type = 'button';
    prev.textContent = 'Anterior';
    prev.disabled = currentPage <= 1;
    prev.addEventListener('click', function () {
      if (currentPage > 1) {
        currentPage -= 1;
        render();
        scrollToList();
      }
    });
    nav.appendChild(prev);

    for (var i = 1; i <= totalPages; i += 1) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = String(i);
      btn.setAttribute('aria-label', 'Página ' + i + ' das notícias');
      if (i === currentPage) {
        btn.className = 'is-active';
        btn.setAttribute('aria-current', 'page');
      }
      (function (page) {
        btn.addEventListener('click', function () {
          currentPage = page;
          render();
          scrollToList();
        });
      })(i);
      nav.appendChild(btn);
    }

    var next = document.createElement('button');
    next.type = 'button';
    next.textContent = 'Próxima';
    next.disabled = currentPage >= totalPages;
    next.addEventListener('click', function () {
      if (currentPage < totalPages) {
        currentPage += 1;
        render();
        scrollToList();
      }
    });
    nav.appendChild(next);
  }

  function scrollToList() {
    var list = qs('#noticias-lista');
    if (!list) return;
    list.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function clearFilters() {
    var tipoSelect = qs('#noticias_tipo');
    var instSelect = qs('#noticias_instituicao');
    if (tipoSelect) tipoSelect.value = '';
    if (instSelect) instSelect.value = '';
    currentTipo = '';
    currentInst = '';
    currentPage = 1;
    syncInstitutionOptions();
    render();
  }

  document.addEventListener('DOMContentLoaded', function () {
    var tipoSelect = qs('#noticias_tipo');
    var instSelect = qs('#noticias_instituicao');
    var clearBtn = qs('[data-noticias-limpar]');
    if (tipoSelect) {
      tipoSelect.addEventListener('change', function () {
        currentTipo = tipoSelect.value || '';
        syncInstitutionOptions();
        currentInst = instSelect ? (instSelect.value || '') : '';
        currentPage = 1;
        render();
      });
    }
    if (instSelect) {
      instSelect.addEventListener('change', function () {
        currentInst = instSelect.value || '';
        currentPage = 1;
        render();
      });
    }
    if (clearBtn) clearBtn.addEventListener('click', clearFilters);
    syncInstitutionOptions();
    render();
  });
})();
