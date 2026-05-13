/* ============================================================
   UniSegPub — Renderização da vitrine de produtos
   Cria os cards da aba Produtos a partir de js/data/produtos-data.js.
   Também controla o filtro próprio da aba Produtos por instituição/UF.
   ============================================================ */
(function () {
  'use strict';

  const AVISO_AFILIADO_PADRAO = 'Exposição do produto em formato de afiliado.';
  const CATEGORIAS_PRODUTOS_JSON = {
    livrosEbooks: 'js/data/produtos-livros-ebooks.json'
  };

  const FILTRO_PRODUTOS_SELECT_ID = 'produtos_instituicao';
  const FILTRO_PRODUTOS_STATUS_ID = 'produtos-filtro-status';
  const INSTITUICOES_FEDERAIS = new Set(['pf', 'prf']);
  const UFS_VALIDAS = new Set([
    'ac', 'al', 'am', 'ap', 'ba', 'ce', 'df', 'es', 'go', 'ma', 'mg', 'ms', 'mt',
    'pa', 'pb', 'pe', 'pi', 'pr', 'rj', 'rn', 'ro', 'rr', 'rs', 'sc', 'se', 'sp', 'to'
  ]);

  const REGRAS_CLASSIFICACAO_PRODUTOS = [
    {
      instituicoes: ['prf'],
      ufs: ['br'],
      termos: ['policia rodoviaria federal', 'prf']
    },
    {
      instituicoes: ['pf'],
      ufs: ['br'],
      termos: ['policia federal', 'pf']
    },
    {
      instituicoes: ['pmesp'],
      ufs: ['sp'],
      termos: ['pmesp', 'pm sp', 'policia militar sp', 'policia militar de sao paulo', 'padrao policia militar sp']
    },
    {
      instituicoes: ['pcsp'],
      ufs: ['sp'],
      termos: ['pcsp', 'policia civil de sao paulo']
    },
    {
      instituicoes: ['pmto'],
      ufs: ['to'],
      termos: ['pmto', 'policia militar de tocantins', 'policia militar do tocantins', 'tocantins']
    },
    {
      instituicoes: ['pmerj'],
      ufs: ['rj'],
      termos: ['pmerj', 'pm rj', 'pmrj', 'policia militar do rio de janeiro', 'policia militar do estado do rio de janeiro']
    },
    {
      instituicoes: ['bmrj'],
      ufs: ['rj'],
      termos: ['cbmerj', 'cbm rj', 'bombeiro rj', 'corpo de bombeiros militar do rio de janeiro', 'corpo de bombeiros militar do estado do rio de janeiro']
    },
    {
      instituicoes: ['pcal'],
      ufs: ['al'],
      termos: ['pcal', 'pc al', 'policia civil de alagoas']
    },
    {
      instituicoes: ['pcmg'],
      ufs: ['mg'],
      termos: ['pcmg', 'pc mg', 'policia civil de minas gerais']
    },
    {
      instituicoes: ['ppdf'],
      ufs: ['df'],
      termos: ['ppdf', 'policia penal do distrito federal', 'policia penal df']
    },
    {
      instituicoes: ['pcdf'],
      ufs: ['df'],
      termos: ['pcdf', 'pc df', 'policia civil do distrito federal']
    }
  ];

  let filtroProdutosAtual = '';

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

  function normalizarTexto(texto) {
    return String(texto || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[()\[\]{}.,;:|/\\_+\-–—]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function getTextoProduto(produto) {
    const partes = [
      produto?.titulo,
      produto?.descricao,
      Array.isArray(produto?.meta) ? produto.meta.join(' ') : '',
      Array.isArray(produto?.badges) ? produto.badges.join(' ') : '',
      produto?.imagem?.alt
    ];
    return normalizarTexto(partes.filter(Boolean).join(' '));
  }

  function termoExiste(texto, termo) {
    const termoNormalizado = normalizarTexto(termo);
    if (!termoNormalizado) return false;
    if (/^[a-z]{2,6}$/.test(termoNormalizado)) {
      return new RegExp(`(^|\\s)${termoNormalizado}(\\s|$)`).test(texto);
    }
    return texto.includes(termoNormalizado);
  }

  function normalizarListaFiltro(valor) {
    if (!valor) return [];
    if (Array.isArray(valor)) return valor.map(item => String(item || '').toLowerCase()).filter(Boolean);
    return String(valor).split(',').map(item => item.trim().toLowerCase()).filter(Boolean);
  }

  function normalizarFiltroProdutoExplicito(produto) {
    const filtro = produto?.filtro || produto?.filter || null;
    if (!filtro) return null;

    const geral = filtro.geral === true || filtro.escopo === 'geral' || filtro.scope === 'general';
    const instituicoes = normalizarListaFiltro(filtro.instituicoes || filtro.insts || filtro.inst);
    const ufs = normalizarListaFiltro(filtro.ufs || filtro.uf);

    return {
      geral: geral || (!instituicoes.length && !ufs.length),
      instituicoes,
      ufs
    };
  }

  function classificarProduto(produto) {
    const filtroExplicito = normalizarFiltroProdutoExplicito(produto);
    if (filtroExplicito) return filtroExplicito;

    const texto = getTextoProduto(produto);
    const instituicoes = new Set();
    const ufs = new Set();

    REGRAS_CLASSIFICACAO_PRODUTOS.forEach(regra => {
      if (!regra.termos.some(termo => termoExiste(texto, termo))) return;
      (regra.instituicoes || []).forEach(inst => instituicoes.add(inst));
      (regra.ufs || []).forEach(uf => ufs.add(uf));
    });

    return {
      geral: instituicoes.size === 0 && ufs.size === 0,
      instituicoes: Array.from(instituicoes),
      ufs: Array.from(ufs)
    };
  }

  function getUfInstituicao(inst) {
    const valor = String(inst || '').toLowerCase().trim();
    if (!valor) return '';
    if (INSTITUICOES_FEDERAIS.has(valor)) return 'br';

    const uf = valor.slice(-2);
    return UFS_VALIDAS.has(uf) ? uf : '';
  }

  function produtoCombinaComFiltro(produto, instSelecionada) {
    const inst = String(instSelecionada || '').toLowerCase().trim();
    if (!inst) return true;

    const filtroProduto = classificarProduto(produto);
    if (filtroProduto.geral) return true;

    const instituicoesProduto = filtroProduto.instituicoes || [];
    const ufsProduto = filtroProduto.ufs || [];
    if (instituicoesProduto.includes(inst)) return true;

    const ufSelecionada = getUfInstituicao(inst);
    if (!ufSelecionada || ufSelecionada === 'br') return false;

    return ufsProduto.includes(ufSelecionada);
  }

  function getProdutosFiltrados(produtos) {
    return produtos.filter(produto => produtoCombinaComFiltro(produto, filtroProdutosAtual));
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

    const filtroProduto = classificarProduto(produto);
    card.dataset.produtoEscopo = filtroProduto.geral ? 'geral' : 'institucional';
    if (filtroProduto.instituicoes?.length) card.dataset.produtoInstituicoes = filtroProduto.instituicoes.join(',');
    if (filtroProduto.ufs?.length) card.dataset.produtoUfs = filtroProduto.ufs.join(',');

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

  function garantirOpcoesFederaisFiltro(select) {
    if (!select) return;

    const opcoesFederais = [
      ['pf', 'PF - Polícia Federal'],
      ['prf', 'PRF - Polícia Rodoviária Federal']
    ];

    const grupoExistente = Array.from(select.querySelectorAll('optgroup'))
      .find(grupo => /federal/i.test(grupo.label || ''));
    const grupoFederal = grupoExistente || document.createElement('optgroup');
    grupoFederal.label = grupoFederal.label || 'Instituições Federais';

    opcoesFederais.forEach(([valor, label]) => {
      if (Array.from(select.options || []).some(option => option.value === valor)) return;
      const option = document.createElement('option');
      option.value = valor;
      option.textContent = label;
      grupoFederal.appendChild(option);
    });

    if (!grupoExistente && grupoFederal.children.length) {
      const referencia = select.children && select.children.length > 1 ? select.children[1] : null;
      select.insertBefore(grupoFederal, referencia);
    }
  }

  function getLabelFiltroAtual() {
    const select = document.getElementById(FILTRO_PRODUTOS_SELECT_ID);
    if (!select || !filtroProdutosAtual) return '';
    const option = Array.from(select.options || []).find(opt => opt.value === filtroProdutosAtual);
    return option ? option.textContent.trim() : filtroProdutosAtual.toUpperCase();
  }

  function atualizarStatusFiltro(totalVisivel) {
    const status = document.getElementById(FILTRO_PRODUTOS_STATUS_ID);
    if (!status) return;

    if (!filtroProdutosAtual) {
      status.textContent = `Mostrando todos os produtos da vitrine (${totalVisivel}).`;
      return;
    }

    const label = getLabelFiltroAtual();
    const uf = getUfInstituicao(filtroProdutosAtual);
    const criterio = uf === 'br'
      ? 'produtos gerais e produtos específicos dessa instituição federal'
      : `produtos gerais e produtos compatíveis com ${uf ? uf.toUpperCase() : 'a instituição selecionada'}`;

    status.textContent = `Filtro ativo: ${label}. Exibindo ${totalVisivel} item(ns): ${criterio}.`;
  }

  function renderProdutos() {
    const base = window.UNISEGPUB_PRODUTOS;
    if (!base) return;

    let totalVisivel = 0;

    document.querySelectorAll('[data-produtos-categoria]').forEach(container => {
      const categoria = container.getAttribute('data-produtos-categoria');
      const produtos = base[categoria];
      if (!Array.isArray(produtos)) return;

      const produtosFiltrados = getProdutosFiltrados(produtos);
      totalVisivel += produtosFiltrados.length;
      container.hidden = !!filtroProdutosAtual && produtosFiltrados.length === 0;
      container.replaceChildren(...produtosFiltrados.map(createProductCard));
    });

    atualizarStatusFiltro(totalVisivel);
  }

  function montarSelectFiltroProdutos() {
    const select = document.getElementById(FILTRO_PRODUTOS_SELECT_ID);
    if (!select || select.dataset.filtroProdutosInicializado === 'true') return;

    const montarSelect = window.montarSelectInstituicoes || (typeof montarSelectInstituicoes === 'function' ? montarSelectInstituicoes : null);
    if (typeof montarSelect === 'function') {
      montarSelect(select);
    } else if (!select.options || select.options.length <= 1) {
      [
        ['pf', 'PF - Polícia Federal'],
        ['prf', 'PRF - Polícia Rodoviária Federal'],
        ['pmesp', 'PMESP - Polícia Militar de São Paulo'],
        ['pcsp', 'PCSP - Polícia Civil de São Paulo'],
        ['pmerj', 'PMERJ - Polícia Militar do Rio de Janeiro'],
        ['bmrj', 'CBMERJ - Corpo de Bombeiros Militar do Rio de Janeiro'],
        ['pcal', 'PCAL - Polícia Civil de Alagoas'],
        ['pcmg', 'PCMG - Polícia Civil de Minas Gerais'],
        ['ppdf', 'PPDF - Polícia Penal do Distrito Federal'],
        ['pcdf', 'PCDF - Polícia Civil do Distrito Federal'],
        ['pmto', 'PMTO - Polícia Militar do Tocantins']
      ].forEach(([valor, label]) => {
        const option = document.createElement('option');
        option.value = valor;
        option.textContent = label;
        select.appendChild(option);
      });
    }

    garantirOpcoesFederaisFiltro(select);

    const primeiraOpcao = select.options && select.options[0];
    if (primeiraOpcao) {
      primeiraOpcao.disabled = false;
      primeiraOpcao.selected = true;
      primeiraOpcao.value = '';
      primeiraOpcao.textContent = 'Todos os produtos';
    }

    filtroProdutosAtual = select.value || '';
    select.dataset.filtroProdutosInicializado = 'true';
    select.addEventListener('change', event => {
      filtroProdutosAtual = event.currentTarget.value || '';
      renderProdutos();
    });
  }

  function iniciarProdutos() {
    montarSelectFiltroProdutos();
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
