/* =======================================================
   Eventos centralizados.
   Remove a dependência de onclick/onchange/oninput inline no HTML.
   Este arquivo deve ser carregado depois dos dados, serviços e páginas.
   ======================================================= */

(function () {
  function safeCall(fnName, args = []) {
    const fn = window[fnName];
    if (typeof fn === 'function') return fn.apply(window, args);
    console.warn(`[UniSegPub] Função não encontrada: ${fnName}`);
    return undefined;
  }

  function bindClick(selector, handler) {
    document.querySelectorAll(selector).forEach(el => {
      el.addEventListener('click', handler);
    });
  }

  function bindChange(selector, handler) {
    document.querySelectorAll(selector).forEach(el => {
      el.addEventListener('change', handler);
    });
  }

  function bindInput(selector, handler) {
    document.querySelectorAll(selector).forEach(el => {
      el.addEventListener('input', handler);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    bindClick('.menu-btn, #menuOverlay, .close-btn', () => safeCall('toggleMenu'));
    bindClick('#theme-toggle-header', () => safeCall('toggleTheme'));

    bindChange('#instituicao, #instituicao_header', event => {
      safeCall('mudarInstituicao', [event.currentTarget.value]);
    });

    bindClick('.branch-option[data-branch]', event => {
      safeCall('selecionarRamo', [event.currentTarget.dataset.branch]);
    });

    bindClick('.state-flag[data-estado]', event => {
      safeCall('selecionarEstado', [event.currentTarget.dataset.estado]);
    });

    bindClick('.sidebar-nav a[href^="#"]', event => {
      const link = event.currentTarget;
      const page = (link.getAttribute('href') || '').replace('#', '');
      if (!page) return;

      event.preventDefault();

      if (page === 'principal') {
        safeCall('abrirPaginaInicial');
        return;
      }

      safeCall('switchPage', [page]);
    });

    bindClick('[data-page]', event => {
      const page = event.currentTarget.dataset.page;
      if (!page) return;
      safeCall('switchPage', [page]);
    });

    document.querySelectorAll('[data-page]').forEach(el => {
      el.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          safeCall('switchPage', [event.currentTarget.dataset.page]);
        }
      });
    });

    bindClick('.ad-slot .ad-placeholder-link', event => {
      const area = event.currentTarget.closest('[data-ad-area]')?.dataset.adArea;
      if (!area) return;
      event.preventDefault();
      safeCall('abrirContatoAnuncio', [area]);
    });

    bindInput('#idade_dir, #renda_dir', () => safeCall('analisarDireitos'));
    bindChange('#idade_dir, #renda_dir, #sexo_dir, #ingresso_dir, #dependente_dir, #local_especial_dir, #requisitos_apos_dir', () => safeCall('analisarDireitos'));

    bindClick('[data-action="comparador-estado-atual"]', () => safeCall('comparadorSelecionarEstadoAtual'));
    bindClick('[data-action="comparador-todas"]', () => safeCall('comparadorSelecionarTodas'));
    bindClick('[data-action="comparador-limpar"]', () => safeCall('comparadorLimparSelecao'));
    bindClick('#comparador-toggle-lista', () => safeCall('toggleComparadorLista'));

    document.addEventListener('change', event => {
      const alvo = event.target;
      if (alvo && alvo.matches('#comparador-selecao input[type="checkbox"]')) {
        safeCall('carregarComparadorCarreiras');
      }
    });

    bindInput('#contato_mensagem', () => safeCall('atualizarContador'));

    const contatoForm = document.querySelector('form[data-form="contato"]');
    if (contatoForm) {
      contatoForm.addEventListener('submit', event => safeCall('enviarEmailContato', [event]));
    }
  });

  document.addEventListener('error', event => {
    const img = event.target;
    if (!(img instanceof HTMLImageElement)) return;

    if (img.matches('.produto-imagem img[data-img-base], .taf-produto-imagem img[data-img-base]')) {
      safeCall('carregarImagemProduto', [img]);
      return;
    }

    if (img.dataset.hideOnError === 'true') {
      img.style.display = 'none';
      const container = img.closest('.produto-imagem, .taf-produto-imagem, .partner-image-slot');
      if (container) container.classList.add('img-indisponivel');
    }
  }, true);
})();
