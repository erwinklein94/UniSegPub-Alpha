/* ============================================================
   Universo Segurança Pública — Página Base Legal
   Pesquisa local por palavra-chave, sem depender de instituição selecionada.
   ============================================================ */

(function () {
  const estadoBaseLegal = {
    termo: '',
    categoria: 'todas'
  };

  function normalizarBaseLegal(texto) {
    return String(texto || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();
  }

  function escapeBaseLegal(texto) {
    return String(texto ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function scoreBaseLegal(item, termoNormalizado) {
    if (!termoNormalizado) return 1;

    const camposFortes = [
      item.titulo,
      item.lei,
      item.apelido,
      item.enquadramento
    ].map(normalizarBaseLegal);

    const assuntos = (item.assuntos || []).map(normalizarBaseLegal);
    let score = 0;

    camposFortes.forEach(campo => {
      if (campo === termoNormalizado) score += 10;
      else if (campo.includes(termoNormalizado)) score += 5;
    });

    assuntos.forEach(assunto => {
      if (assunto === termoNormalizado) score += 8;
      else if (assunto.includes(termoNormalizado)) score += 4;
    });

    const geral = normalizarBaseLegal([
      item.categoria,
      item.titulo,
      item.lei,
      item.apelido,
      item.enquadramento,
      item.atualizacao,
      ...(item.assuntos || [])
    ].join(' '));

    if (!score && termoNormalizado.split(/\s+/).every(parte => geral.includes(parte))) score += 2;

    return score;
  }

  function getCategoriasBaseLegal() {
    const itens = Array.isArray(window.BASE_LEGAL_ITENS) ? window.BASE_LEGAL_ITENS : [];
    return [...new Set(itens.map(item => item.categoria).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'pt-BR'));
  }

  function filtrarBaseLegal() {
    const itens = Array.isArray(window.BASE_LEGAL_ITENS) ? window.BASE_LEGAL_ITENS : [];
    const termo = normalizarBaseLegal(estadoBaseLegal.termo);
    const categoria = estadoBaseLegal.categoria;

    return itens
      .map(item => ({ item, score: scoreBaseLegal(item, termo) }))
      .filter(({ item, score }) => {
        const categoriaOk = categoria === 'todas' || item.categoria === categoria;
        const termoOk = !termo || score > 0;
        return categoriaOk && termoOk;
      })
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return String(a.item.titulo || '').localeCompare(String(b.item.titulo || ''), 'pt-BR');
      })
      .map(({ item }) => item);
  }

  function renderCategoriasBaseLegal() {
    const container = document.getElementById('base-legal-categorias');
    if (!container) return;

    const categorias = getCategoriasBaseLegal();
    container.innerHTML = [
      `<button class="base-legal-chip is-active" data-base-legal-categoria="todas" type="button">Todas</button>`,
      ...categorias.map(cat => `<button class="base-legal-chip" data-base-legal-categoria="${escapeBaseLegal(cat)}" type="button">${escapeBaseLegal(cat)}</button>`)
    ].join('');
  }

  function itemBaseLegalHtml(item) {
    const assuntos = (item.assuntos || []).slice(0, 7);
    const href = /^https?:\/\//i.test(String(item.fonteUrl || '')) ? item.fonteUrl : '#';

    return `
      <article class="base-legal-card">
        <header class="base-legal-card-head">
          <div>
            <span class="base-legal-categoria">${escapeBaseLegal(item.categoria)}</span>
            <h3>${escapeBaseLegal(item.titulo)}</h3>
            <strong>${escapeBaseLegal(item.lei)}</strong>
          </div>
          <a class="base-legal-fonte-btn" href="${escapeBaseLegal(href)}" target="_blank" rel="noopener noreferrer">Fonte oficial</a>
        </header>
        <dl class="base-legal-detalhes">
          <div>
            <dt>Enquadramento rápido</dt>
            <dd>${escapeBaseLegal(item.enquadramento)}</dd>
          </div>
          <div>
            <dt>Atualização</dt>
            <dd>${escapeBaseLegal(item.atualizacao)}</dd>
          </div>
          <div>
            <dt>Fonte</dt>
            <dd>${escapeBaseLegal(item.fonteNome)}</dd>
          </div>
        </dl>
        <div class="base-legal-tags" aria-label="Palavras-chave desta lei">
          ${assuntos.map(tag => `<span>${escapeBaseLegal(tag)}</span>`).join('')}
        </div>
      </article>
    `;
  }

  function renderBaseLegal() {
    const lista = document.getElementById('base-legal-resultados');
    const contador = document.getElementById('base-legal-contador');
    const vazio = document.getElementById('base-legal-vazio');
    const sugestao = document.getElementById('base-legal-sugestao');
    if (!lista || !contador) return;

    const resultados = filtrarBaseLegal();
    contador.textContent = `${resultados.length} resultado${resultados.length === 1 ? '' : 's'}`;

    if (sugestao) {
      sugestao.textContent = estadoBaseLegal.termo
        ? `Busca atual: “${estadoBaseLegal.termo}”.`
        : 'Experimente: homicídio, flagrante, arma, drogas, Maria da Penha, trânsito, incêndio, abuso de autoridade.';
    }

    if (!resultados.length) {
      lista.innerHTML = '';
      if (vazio) vazio.hidden = false;
      return;
    }

    if (vazio) vazio.hidden = true;
    lista.innerHTML = resultados.map(itemBaseLegalHtml).join('');
  }

  function preencherExemploBaseLegal(termo) {
    const input = document.getElementById('base-legal-busca');
    if (input) {
      input.value = termo;
      input.focus();
    }
    estadoBaseLegal.termo = termo;
    renderBaseLegal();
  }

  function inicializarBaseLegal() {
    const input = document.getElementById('base-legal-busca');
    const limpar = document.getElementById('base-legal-limpar');
    const categorias = document.getElementById('base-legal-categorias');
    const exemplos = document.getElementById('base-legal-exemplos');

    if (!document.getElementById('base-legal-resultados')) return;

    renderCategoriasBaseLegal();

    if (input && !input.dataset.baseLegalBind) {
      input.dataset.baseLegalBind = 'true';
      input.addEventListener('input', event => {
        estadoBaseLegal.termo = event.currentTarget.value;
        renderBaseLegal();
      });
    }

    if (limpar && !limpar.dataset.baseLegalBind) {
      limpar.dataset.baseLegalBind = 'true';
      limpar.addEventListener('click', () => {
        estadoBaseLegal.termo = '';
        estadoBaseLegal.categoria = 'todas';
        if (input) input.value = '';
        document.querySelectorAll('[data-base-legal-categoria]').forEach(btn => {
          btn.classList.toggle('is-active', btn.dataset.baseLegalCategoria === 'todas');
        });
        renderBaseLegal();
      });
    }

    if (categorias && !categorias.dataset.baseLegalBind) {
      categorias.dataset.baseLegalBind = 'true';
      categorias.addEventListener('click', event => {
        const botao = event.target.closest('[data-base-legal-categoria]');
        if (!botao) return;
        estadoBaseLegal.categoria = botao.dataset.baseLegalCategoria || 'todas';
        categorias.querySelectorAll('[data-base-legal-categoria]').forEach(btn => {
          btn.classList.toggle('is-active', btn === botao);
        });
        renderBaseLegal();
      });
    }

    if (exemplos && !exemplos.dataset.baseLegalBind) {
      exemplos.dataset.baseLegalBind = 'true';
      exemplos.addEventListener('click', event => {
        const botao = event.target.closest('[data-base-legal-exemplo]');
        if (!botao) return;
        preencherExemploBaseLegal(botao.dataset.baseLegalExemplo || '');
      });
    }

    renderBaseLegal();
  }

  window.inicializarBaseLegal = inicializarBaseLegal;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarBaseLegal, { once: true });
  } else {
    inicializarBaseLegal();
  }
})();
