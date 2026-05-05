/* ============================================================
   UniSegPub — Renderização da vitrine de produtos
   Cria os cards da aba Produtos a partir de js/data/produtos-data.js.
   ============================================================ */
(function () {
  'use strict';

  const AVISO_AFILIADO_PADRAO = 'Exposição do produto em formato de afiliado.';
  const CATEGORIAS_PRODUTOS_JSON = {
    livrosEbooks: 'js/data/produtos-livros-ebooks.json'
  };


  function setAttr(element, name, value) {
    if (value === undefined || value === null || value === '') return;
    element.setAttribute(name, String(value));
  }

  function applyAttributes(element, attrs) {
    if (!attrs) return;
    Object.entries(attrs).forEach(([name, value]) => setAttr(element, name, value));
  }

  function createElement(tagName, classNames, text) {
    const element = document.createElement(tagName);
    if (Array.isArray(classNames) && classNames.length) {
      element.className = classNames.join(' ');
    } else if (typeof classNames === 'string' && classNames) {
      element.className = classNames;
    }
    if (text !== undefined && text !== null) element.textContent = text;
    return element;
  }

  function createProductCard(produto) {
    const card = document.createElement('a');
    card.className = Array.isArray(produto.classes) && produto.classes.length
      ? produto.classes.join(' ')
      : 'curso-card produto-card';

    setAttr(card, 'href', produto.href);
    setAttr(card, 'aria-label', produto.ariaLabel || `Ver na loja: ${produto.titulo || 'produto'}`);
    setAttr(card, 'rel', produto.rel || 'noopener noreferrer');
    setAttr(card, 'target', produto.target || '_blank');
    applyAttributes(card, produto.dataAttrs);

    const imagemConfig = produto.imagem || {};
    const imagemWrap = createElement('div', imagemConfig.wrapClasses || ['produto-imagem']);
    imagemWrap.setAttribute('aria-hidden', 'true');

    const imagem = document.createElement('img');
    setAttr(imagem, 'alt', imagemConfig.alt || produto.titulo || 'Produto');
    setAttr(imagem, 'src', imagemConfig.src);
    setAttr(imagem, 'decoding', imagemConfig.decoding || 'async');
    setAttr(imagem, 'loading', imagemConfig.loading || 'lazy');
    applyAttributes(imagem, imagemConfig.dataAttrs);
    imagemWrap.appendChild(imagem);
    card.appendChild(imagemWrap);

    if (produto.adLabel) {
      card.appendChild(createElement('span', 'ad-label', produto.adLabel));
    }

    if (Array.isArray(produto.badges)) {
      produto.badges.forEach(badge => {
        if (badge) card.appendChild(createElement('span', 'curso-badge', badge));
      });
    }

    card.appendChild(createElement('h3', '', produto.titulo || 'Produto'));

    const descricao = document.createElement('p');
    descricao.appendChild(document.createTextNode(produto.descricao || ''));
    const avisoAfiliado = produto.avisoAfiliado || AVISO_AFILIADO_PADRAO;
    if (avisoAfiliado) {
      descricao.appendChild(document.createTextNode(' '));
      descricao.appendChild(createElement('span', 'descricao-afiliado', avisoAfiliado));
    }
    card.appendChild(descricao);

    if (Array.isArray(produto.meta) && produto.meta.length) {
      const meta = createElement('div', 'curso-meta');
      setAttr(meta, 'aria-label', produto.metaAriaLabel || 'Destaques do produto');
      produto.meta.forEach(item => {
        if (item) meta.appendChild(createElement('span', '', item));
      });
      card.appendChild(meta);
    }

    card.appendChild(createElement('span', 'curso-cta', produto.cta || 'Ver na loja'));
    return card;
  }


  function normalizarCategoriaJson(categoria, payload) {
    if (Array.isArray(payload)) return payload;
    if (payload && Array.isArray(payload[categoria])) return payload[categoria];
    return null;
  }

  function aplicarFallbackCategoriasJson() {
    const base = window.UNISEGPUB_PRODUTOS;
    const fallback = window.UNISEGPUB_PRODUTOS_JSON_FALLBACKS || {};
    if (!base) return;

    Object.keys(CATEGORIAS_PRODUTOS_JSON).forEach(categoria => {
      if (!Array.isArray(base[categoria]) && Array.isArray(fallback[categoria])) {
        base[categoria] = fallback[categoria];
      }
    });
  }

  async function carregarCategoriasJson() {
    const base = window.UNISEGPUB_PRODUTOS;
    const fallback = window.UNISEGPUB_PRODUTOS_JSON_FALLBACKS || {};
    if (!base || typeof fetch !== 'function') return;

    await Promise.all(Object.entries(CATEGORIAS_PRODUTOS_JSON).map(async ([categoria, url]) => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const payload = await response.json();
        const produtos = normalizarCategoriaJson(categoria, payload);
        if (!Array.isArray(produtos)) throw new Error('Formato de dados inválido');
        base[categoria] = produtos;
      } catch (error) {
        if (Array.isArray(fallback[categoria])) {
          base[categoria] = fallback[categoria];
        }
        if (window.console && typeof window.console.warn === 'function') {
          window.console.warn(`UniSegPub: usando fallback para ${categoria}.`, error);
        }
      }
    }));
  }

  function renderProdutos() {
    const base = window.UNISEGPUB_PRODUTOS;
    if (!base) return;

    document.querySelectorAll('[data-produtos-categoria]').forEach(container => {
      const categoria = container.getAttribute('data-produtos-categoria');
      const produtos = base[categoria];
      if (!Array.isArray(produtos)) return;

      container.replaceChildren(...produtos.map(createProductCard));
    });
  }

  function iniciarProdutos() {
    aplicarFallbackCategoriasJson();
    renderProdutos();

    carregarCategoriasJson().then(() => {
      renderProdutos();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciarProdutos, { once: true });
  } else {
    iniciarProdutos();
  }
})();
