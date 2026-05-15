/* ============================================================
   UniSegPub — Produtos relacionados à instituição pesquisada
   Desktop: produtos/cursos relacionados nas laterais.
   Mobile: produtos unitários intercalados entre os cards.
   ============================================================ */
(function () {
  'use strict';

  const STORAGE_CONTEXTO_INST = 'unisegpub_produtos_contexto_inst_v2';
  const MOBILE_MAX_WIDTH = 760;

  const PAGINAS_COM_VITRINE = new Set([
    'principal',
    'noticias',
    'guia',
    'remuneracao',
    'direitos',
    'poderes',
    'baselegal',
    'concursos',
    'comparar',
    'brasoes',
    'acoes',
    'associacoes',
    'parceiros'
  ]);

  const LARGURA_CENTRAL_POR_PAGINA = {
    principal: 1120,
    noticias: 1120,
    guia: 1120,
    poderes: 1120,
    baselegal: 1120,
    comparar: 1120,
    brasoes: 1120,
    parceiros: 800,
    remuneracao: 920,
    direitos: 800,
    concursos: 800,
    acoes: 800,
    associacoes: 800
  };

  const INSTITUICOES_FEDERAIS = new Set(['pf', 'prf']);
  const UFS_VALIDAS = new Set([
    'ac', 'al', 'am', 'ap', 'ba', 'ce', 'df', 'es', 'go', 'ma', 'mg', 'ms', 'mt',
    'pa', 'pb', 'pe', 'pi', 'pr', 'rj', 'rn', 'ro', 'rr', 'rs', 'sc', 'se', 'sp', 'to'
  ]);

  const REGRAS_CLASSIFICACAO_PRODUTOS = [
    { instituicoes: ['pf'], ufs: ['br'], termos: ['policia federal', 'delegado de policia federal', 'agente pf', 'escrivao pf', 'papiloscopista pf', 'concurso da pf', ' pf '] },
    { instituicoes: ['prf'], ufs: ['br'], termos: ['policia rodoviaria federal', 'policial rodoviario federal', 'concurso da prf', ' prf '] },
    { instituicoes: ['pmesp'], ufs: ['sp'], termos: ['pmesp', 'pm sp', 'policia militar sp', 'policia militar de sao paulo', 'policia militar do estado de sao paulo', 'padrao policia militar sp', 'soldado 2 classe'] },
    { instituicoes: ['bmsp'], ufs: ['sp'], termos: ['bmsp', 'cbmsp', 'bombeiros sp', 'corpo de bombeiros da pmesp', 'corpo de bombeiros militar de sao paulo'] },
    { instituicoes: ['pcsp'], ufs: ['sp'], termos: ['pcsp', 'pc sp', 'policia civil de sao paulo', 'policia civil do estado de sao paulo'] },
    { instituicoes: ['ppsp'], ufs: ['sp'], termos: ['ppsp', 'policia penal de sao paulo', 'policia penal do estado de sao paulo'] },
    { instituicoes: ['pmto'], ufs: ['to'], termos: ['pmto', 'pm to', 'policia militar de tocantins', 'policia militar do tocantins'] },
    { instituicoes: ['pmerj'], ufs: ['rj'], termos: ['pmerj', 'pm rj', 'pmrj', 'policia militar do rio de janeiro', 'policia militar do estado do rio de janeiro'] },
    { instituicoes: ['bmrj'], ufs: ['rj'], termos: ['cbmerj', 'cbm rj', 'bombeiro rj', 'bombeiros rj', 'corpo de bombeiros militar do rio de janeiro', 'corpo de bombeiros militar do estado do rio de janeiro'] },
    { instituicoes: ['pcerj'], ufs: ['rj'], termos: ['pcerj', 'pc rj', 'pcrj', 'policia civil do rio de janeiro', 'policia civil do estado do rio de janeiro'] },
    { instituicoes: ['pprj'], ufs: ['rj'], termos: ['pprj', 'policia penal do rio de janeiro', 'policia penal do estado do rio de janeiro'] },
    { instituicoes: ['pcal'], ufs: ['al'], termos: ['pcal', 'pc al', 'policia civil de alagoas'] },
    { instituicoes: ['pcmg'], ufs: ['mg'], termos: ['pcmg', 'pc mg', 'policia civil de minas gerais'] },
    { instituicoes: ['ppdf'], ufs: ['df'], termos: ['ppdf', 'policia penal do distrito federal', 'policia penal df'] },
    { instituicoes: ['pcdf'], ufs: ['df'], termos: ['pcdf', 'pc df', 'policia civil do distrito federal'] }
  ];

  const PRODUTOS_FALLBACK = [
    {
      titulo: 'Mochila Militar Tática Impermeável 50 L',
      href: 'https://s.shopee.com.br/901i8h9IK5',
      imagem: { src: 'img/SHOPEE/mochilaimpermeavel50l.webp', alt: 'Mochila Militar Tática Impermeável 50 L' }
    },
    {
      titulo: 'Mochila Coban Tática Militar 24 L',
      href: 'https://s.shopee.com.br/8V5RQXr16n',
      imagem: { src: 'img/SHOPEE/mochilacoban.webp', alt: 'Mochila Coban Tática Militar 24 L' }
    },
    {
      titulo: 'Barra fixa para porta',
      href: 'https://s.shopee.com.br/9fHIyi0uae',
      imagem: { src: 'img/SHOPEE/barrafixa02.webp', alt: 'Barra fixa para porta' }
    },
    {
      titulo: 'Bota Acero Couro Colt Padrão Polícia Militar SP',
      href: 'https://s.shopee.com.br/1qYSZj5bki',
      imagem: { src: 'img/SHOPEE/botaacero.webp', alt: 'Bota Acero Couro Colt Padrão Polícia Militar SP' }
    }
  ];

  let contextoInstituicao = '';
  let renderAgendado = false;

  function normalizarTexto(texto) {
    return String(texto || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[()\[\]{},.;:|/\\_+\-–—]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function normalizarInst(valor) {
    return normalizarTexto(valor).replace(/\s+/g, '');
  }

  function textoCurto(texto, limite) {
    const normalizado = String(texto || '').replace(/\s+/g, ' ').trim();
    if (normalizado.length <= limite) return normalizado;
    return `${normalizado.slice(0, limite - 1).trim()}…`;
  }

  function getTextoProduto(produto) {
    const partes = [
      produto && produto.__grupoProduto,
      produto && produto.titulo,
      produto && produto.descricao,
      Array.isArray(produto && produto.meta) ? produto.meta.join(' ') : '',
      Array.isArray(produto && produto.badges) ? produto.badges.join(' ') : '',
      produto && produto.imagem && produto.imagem.alt,
      produto && produto.ariaLabel
    ];
    return ` ${normalizarTexto(partes.filter(Boolean).join(' '))} `;
  }

  function termoExiste(texto, termo) {
    const termoNormalizado = normalizarTexto(termo);
    if (!termoNormalizado) return false;
    if (/^[a-z]{2,6}$/.test(termoNormalizado.trim())) {
      return new RegExp(`(^|\\s)${termoNormalizado.trim()}(\\s|$)`).test(texto);
    }
    return texto.includes(termoNormalizado);
  }

  function normalizarListaFiltro(valor) {
    if (!valor) return [];
    if (Array.isArray(valor)) return valor.map(item => normalizarInst(item)).filter(Boolean);
    return String(valor).split(',').map(item => normalizarInst(item)).filter(Boolean);
  }

  function normalizarFiltroProdutoExplicito(produto) {
    const filtro = produto && (produto.filtro || produto.filter);
    if (!filtro) return null;

    const instituicoes = normalizarListaFiltro(filtro.instituicoes || filtro.insts || filtro.inst);
    const ufs = normalizarListaFiltro(filtro.ufs || filtro.uf);
    const geral = filtro.geral === true || filtro.escopo === 'geral' || filtro.scope === 'general';

    return {
      geral: geral || (!instituicoes.length && !ufs.length),
      instituicoes,
      ufs
    };
  }

  function instDoGrupoProduto(grupo) {
    const normalizado = normalizarInst(grupo);
    const matchCursos = normalizado.match(/^cursos([a-z0-9]+)$/);
    if (!matchCursos) return '';
    const possivelInst = matchCursos[1];
    return possivelInst && possivelInst !== 'gerais' ? possivelInst : '';
  }

  function classificarProduto(produto) {
    const filtroExplicito = normalizarFiltroProdutoExplicito(produto);
    if (filtroExplicito) return filtroExplicito;

    const texto = getTextoProduto(produto);
    const instituicoes = new Set();
    const ufs = new Set();
    const instGrupo = instDoGrupoProduto(produto && produto.__grupoProduto);

    if (instGrupo) {
      instituicoes.add(instGrupo);
      const ufGrupo = getUfInstituicao(instGrupo);
      if (ufGrupo) ufs.add(ufGrupo);
    }

    REGRAS_CLASSIFICACAO_PRODUTOS.forEach(regra => {
      if (!regra.termos.some(termo => termoExiste(texto, termo))) return;
      (regra.instituicoes || []).forEach(inst => instituicoes.add(normalizarInst(inst)));
      (regra.ufs || []).forEach(uf => ufs.add(normalizarInst(uf)));
    });

    return {
      geral: instituicoes.size === 0 && ufs.size === 0,
      instituicoes: Array.from(instituicoes),
      ufs: Array.from(ufs)
    };
  }

  function getUfInstituicao(inst) {
    const valor = normalizarInst(inst);
    if (!valor) return '';
    if (INSTITUICOES_FEDERAIS.has(valor)) return 'br';
    const uf = valor.slice(-2);
    return UFS_VALIDAS.has(uf) ? uf : '';
  }

  function scoreProduto(produto, instSelecionada) {
    const inst = normalizarInst(instSelecionada);
    if (!inst) return 100;

    const filtroProduto = classificarProduto(produto);
    const ufSelecionada = getUfInstituicao(inst);
    const instituicoes = filtroProduto.instituicoes || [];
    const ufs = filtroProduto.ufs || [];

    if (instituicoes.includes(inst)) return 1000;
    if (ufSelecionada && ufSelecionada !== 'br' && ufs.includes(ufSelecionada)) return 700;
    if (filtroProduto.geral) return 250;
    return 0;
  }

  function produtoValido(produto) {
    return produto && produto.titulo && produto.href && produto.imagem && produto.imagem.src;
  }

  function deduplicarProdutos(produtos) {
    const vistos = new Set();
    return produtos.filter(produto => {
      const chave = `${produto.href || ''}|${produto.titulo || ''}`.toLowerCase();
      if (vistos.has(chave)) return false;
      vistos.add(chave);
      return true;
    });
  }

  function coletarProdutos() {
    const base = window.UNISEGPUB_PRODUTOS || {};
    const produtos = Object.keys(base)
      .map(chave => Array.isArray(base[chave])
        ? base[chave].map((produto, index) => Object.assign({ __grupoProduto: chave, __ordemProduto: index }, produto))
        : [])
      .flat()
      .filter(produtoValido);

    return produtos.length ? deduplicarProdutos(produtos) : PRODUTOS_FALLBACK;
  }

  function getProdutosRelacionados(inst) {
    const todos = coletarProdutos();
    const instNormalizada = normalizarInst(inst);
    if (!instNormalizada) return todos;

    const avaliados = todos
      .map((produto, index) => ({ produto, index, score: scoreProduto(produto, instNormalizada) }))
      .filter(item => item.score > 0)
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return a.index - b.index;
      })
      .map(item => item.produto);

    return avaliados.length ? avaliados : todos;
  }

  function getInfoInstituicao(inst) {
    const normalizada = normalizarInst(inst);
    try {
      if (typeof HEADER_INSTITUICOES_INFO !== 'undefined' && HEADER_INSTITUICOES_INFO[normalizada]) {
        return HEADER_INSTITUICOES_INFO[normalizada];
      }
    } catch (erro) {
      /* silencioso */
    }
    return window.HEADER_INSTITUICOES_INFO && window.HEADER_INSTITUICOES_INFO[normalizada]
      ? window.HEADER_INSTITUICOES_INFO[normalizada]
      : null;
  }

  function valorPareceInstituicao(valor) {
    const inst = normalizarInst(valor);
    if (!inst || inst === 'portal' || inst === 'todas' || inst === 'todos') return false;
    if (getInfoInstituicao(inst)) return true;
    if (INSTITUICOES_FEDERAIS.has(inst)) return true;
    return /^[a-z]{4,6}$/.test(inst) && UFS_VALIDAS.has(inst.slice(-2));
  }

  function lerContextoSalvo() {
    try {
      const salvo = localStorage.getItem(STORAGE_CONTEXTO_INST);
      return valorPareceInstituicao(salvo) ? normalizarInst(salvo) : '';
    } catch (erro) {
      return '';
    }
  }

  function salvarContexto(inst) {
    try {
      if (inst) localStorage.setItem(STORAGE_CONTEXTO_INST, inst);
    } catch (erro) {
      /* silencioso */
    }
  }

  function getContextoBody() {
    const instBody = document.body && document.body.dataset ? document.body.dataset.inst : '';
    return valorPareceInstituicao(instBody) ? normalizarInst(instBody) : '';
  }

  function getContextoCurrInst() {
    try {
      const atual = typeof currInst !== 'undefined' ? currInst : window.currInst;
      return valorPareceInstituicao(atual) ? normalizarInst(atual) : '';
    } catch (erro) {
      return '';
    }
  }

  function seletorEhInstituicao(select) {
    if (!(select instanceof HTMLSelectElement)) return false;
    const id = normalizarTexto(select.id || '');
    const name = normalizarTexto(select.name || '');
    const label = select.labels && select.labels.length ? normalizarTexto(Array.from(select.labels).map(item => item.textContent).join(' ')) : '';
    return id.includes('instituicao') ||
      name.includes('instituicao') ||
      label.includes('instituicao') ||
      select.hasAttribute('data-consulta-instituicao') ||
      select.id === 'instituicao';
  }

  function prioridadeSelectInstituicao(select) {
    const id = normalizarTexto(select.id || '');
    if (id && id !== 'instituicao' && id !== 'instituicao header' && id !== 'instituicao home') return 0;
    if (id === 'instituicao') return 1;
    if (id === 'instituicao home') return 2;
    if (id === 'instituicao header') return 3;
    return 4;
  }

  function getContextoSelects() {
    const seletores = Array.from(document.querySelectorAll('select'))
      .filter(seletorEhInstituicao)
      .sort((a, b) => prioridadeSelectInstituicao(a) - prioridadeSelectInstituicao(b));

    const selecionado = seletores
      .map(select => select.value)
      .find(valorPareceInstituicao);

    return selecionado ? normalizarInst(selecionado) : '';
  }

  function getInstituicaoAtiva() {
    return contextoInstituicao || getContextoSelects() || getContextoBody() || lerContextoSalvo() || getContextoCurrInst();
  }

  function setContextoInstituicao(inst) {
    const normalizada = normalizarInst(inst);
    if (!valorPareceInstituicao(normalizada)) return false;
    contextoInstituicao = normalizada;
    window.__UNISEGPUB_PRODUTOS_CONTEXT_INST = normalizada;
    salvarContexto(normalizada);
    return true;
  }

  function getNomeInstituicao(inst) {
    const normalizada = normalizarInst(inst);
    const info = getInfoInstituicao(normalizada);
    if (info && info.titulo) return info.titulo;
    if (normalizada) return normalizada.toUpperCase();
    return '';
  }

  function criarLink(classe, href, texto, externo) {
    const link = document.createElement('a');
    link.className = classe;
    link.href = href;
    link.textContent = texto;
    if (externo) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer sponsored';
    }
    return link;
  }

  function criarImagemProduto(produto, classe) {
    const imagemWrap = document.createElement('a');
    imagemWrap.className = classe;
    imagemWrap.href = produto.href;
    imagemWrap.target = '_blank';
    imagemWrap.rel = 'noopener noreferrer sponsored';
    imagemWrap.setAttribute('aria-label', `Ver na loja ${produto.titulo || 'produto'}`);

    const imagem = document.createElement('img');
    imagem.src = produto.imagem && produto.imagem.src ? produto.imagem.src : '';
    imagem.alt = produto.imagem && produto.imagem.alt ? produto.imagem.alt : produto.titulo || 'Produto';
    imagem.loading = 'lazy';
    imagem.decoding = 'async';
    imagem.addEventListener('load', agendarRecalculoEspacamentoProdutos, { once: true });
    imagem.addEventListener('error', function () {
      imagemWrap.classList.add('is-missing-image');
      imagem.remove();
    }, { once: true });
    imagemWrap.appendChild(imagem);
    return imagemWrap;
  }

  function criarCardProdutoDesktop(produto) {
    const card = document.createElement('article');
    card.className = 'usp-affiliate-card';

    card.appendChild(criarImagemProduto(produto, 'usp-affiliate-card__media'));

    const titulo = document.createElement('h3');
    titulo.textContent = textoCurto(produto.titulo, 58);
    card.appendChild(titulo);

    const aviso = document.createElement('small');
    aviso.className = 'usp-affiliate-card__note';
    aviso.textContent = 'Produto relacionado.';
    card.appendChild(aviso);

    card.appendChild(criarLink('usp-affiliate-card__store', produto.href, produto.cta || 'Ver na loja', true));
    card.appendChild(criarLink('usp-affiliate-card__more', 'produtos.html', 'Ver mais produtos', false));

    return card;
  }

  function criarCardProdutoMobile(produto, indice, inst) {
    const wrapper = document.createElement('div');
    wrapper.className = 'usp-affiliate-mobile-insert';
    wrapper.setAttribute('data-affiliate-mobile-product', 'true');

    const card = document.createElement('article');
    card.className = 'usp-affiliate-mobile-card';
    card.setAttribute('aria-label', `Produto relacionado ${indice + 1}`);

    card.appendChild(criarImagemProduto(produto, 'usp-affiliate-mobile-card__media'));

    const conteudo = document.createElement('div');
    conteudo.className = 'usp-affiliate-mobile-card__content';

    const label = document.createElement('span');
    label.className = 'usp-affiliate-mobile-card__label';
    const nomeInst = getNomeInstituicao(inst);
    label.textContent = nomeInst ? `Produto para ${nomeInst}` : 'Produto recomendado';
    conteudo.appendChild(label);

    const titulo = document.createElement('h3');
    titulo.textContent = textoCurto(produto.titulo, 82);
    conteudo.appendChild(titulo);

    const descricao = document.createElement('p');
    descricao.textContent = textoCurto(produto.descricao || 'Item indicado na vitrine de produtos do site.', 116);
    conteudo.appendChild(descricao);

    const acoes = document.createElement('div');
    acoes.className = 'usp-affiliate-mobile-card__actions';
    acoes.appendChild(criarLink('usp-affiliate-mobile-card__store', produto.href, produto.cta || 'Ver na loja', true));
    acoes.appendChild(criarLink('usp-affiliate-mobile-card__more', 'produtos.html', 'Mais produtos', false));
    conteudo.appendChild(acoes);

    card.appendChild(conteudo);
    wrapper.appendChild(card);
    return wrapper;
  }

  function dividirProdutosLaterais(produtos) {
    const esquerda = [];
    const direita = [];
    produtos.forEach((produto, index) => {
      (index % 2 === 0 ? esquerda : direita).push(produto);
    });
    return { esquerda, direita };
  }

  function criarRail(lado, produtos, inst) {
    const rail = document.createElement('aside');
    rail.className = `usp-affiliate-rail usp-affiliate-rail--${lado}`;
    rail.setAttribute('aria-label', lado === 'left' ? 'Produtos relacionados à esquerda' : 'Produtos relacionados à direita');

    const inner = document.createElement('div');
    inner.className = 'usp-affiliate-rail__inner';

    const titulo = document.createElement('div');
    titulo.className = 'usp-affiliate-rail__title';
    const nomeInst = getNomeInstituicao(inst);
    titulo.textContent = nomeInst ? `Produtos ${nomeInst}` : 'Produtos';
    inner.appendChild(titulo);

    produtos.forEach(function (produto) {
      inner.appendChild(criarCardProdutoDesktop(produto));
    });

    rail.appendChild(inner);
    return rail;
  }

  function ajustarLarguraCentral(shell, pagina) {
    const maximo = LARGURA_CENTRAL_POR_PAGINA[pagina] || 1120;
    const larguraDisponivel = Math.max(0, window.innerWidth - 28);
    shell.style.setProperty('--usp-affiliate-main-width', `${Math.min(maximo, larguraDisponivel)}px`);
  }

  function getPaginaAtual() {
    return document.body && document.body.dataset ? document.body.dataset.page : '';
  }

  function getMainAtual() {
    return document.querySelector('main.page-section.active[role="main"]') ||
      document.querySelector('main.page-section.active') ||
      document.querySelector('main[role="main"]') ||
      document.querySelector('main');
  }

  function garantirShell(main, pagina) {
    const existente = main.closest('.usp-affiliate-side-shell');
    if (existente) {
      ajustarLarguraCentral(existente, pagina);
      return existente;
    }

    if (!main.parentNode) return null;
    const shell = document.createElement('div');
    shell.className = 'usp-affiliate-side-shell';
    shell.setAttribute('data-affiliate-products', 'true');
    main.parentNode.insertBefore(shell, main);
    shell.appendChild(main);
    ajustarLarguraCentral(shell, pagina);
    return shell;
  }

  function limparRails(shell) {
    if (!shell) return;
    shell.querySelectorAll(':scope > .usp-affiliate-rail').forEach(rail => rail.remove());
  }

  function limparProdutosMobile(main) {
    const raiz = main || document;
    raiz.querySelectorAll('.usp-affiliate-mobile-insert').forEach(item => item.remove());
  }

  function elementoVisivel(elemento) {
    if (!elemento || elemento.hidden) return false;
    if (elemento.closest('[hidden]')) return false;
    return Boolean(elemento.offsetParent || elemento.getClientRects().length);
  }

  function getAlvosMobile(main) {
    const seletoresPrioritarios = [
      '[data-concurso-card]',
      '[data-noticia-card]',
      '[data-acoes-card]',
      '[data-associacoes-card]',
      '[data-brasoes-card]',
      '.principal-card',
      '.concursos-conteudo-card',
      '.noticias-card',
      '.acoes-conteudo-card',
      '.associacoes-conteudo-card',
      '.brasoes-conteudo-card',
      '.guia-artigo-card',
      '.guia-card',
      '.comparador-card',
      '.card'
    ];

    const ignorar = [
      '.usp-affiliate-mobile-insert',
      '.usp-affiliate-mobile-card',
      '.header-institution-card',
      '.sidebar-product-card',
      '.ad-slot',
      '.consulta-instituicao-card',
      '.concursos-detalhe-card',
      '.page-intro',
      '.principal-nota'
    ].join(',');

    const vistos = new Set();
    const alvos = [];
    seletoresPrioritarios.forEach(selector => {
      main.querySelectorAll(selector).forEach(el => {
        if (vistos.has(el) || el.matches(ignorar) || el.closest(ignorar)) return;
        if (!elementoVisivel(el)) return;
        vistos.add(el);
        alvos.push(el);
      });
    });

    return alvos;
  }



  function getShellAtual() {
    return document.querySelector('.usp-affiliate-side-shell');
  }

  function aplicarEspacamentoProdutoCards(raiz) {
    const escopo = raiz || document;

    escopo.querySelectorAll('.usp-affiliate-rail__inner .usp-affiliate-card').forEach(function (card) {
      const altura = Math.ceil(card.getBoundingClientRect().height || card.offsetHeight || 140);
      card.style.setProperty('--usp-affiliate-self-gap', `${altura}px`);
    });

    escopo.querySelectorAll('.usp-affiliate-mobile-insert').forEach(function (wrapper) {
      const card = wrapper.querySelector('.usp-affiliate-mobile-card');
      const altura = Math.ceil((card && card.getBoundingClientRect().height) || wrapper.offsetHeight || 140);
      wrapper.style.setProperty('--usp-affiliate-mobile-self-gap', `${altura}px`);
    });
  }

  function ajustarAlturaShellProdutos(shell) {
    if (!shell) return;
    shell.style.minHeight = '';

    if (window.innerWidth < 1360) return;

    let maiorAltura = 0;
    shell.querySelectorAll(':scope > .usp-affiliate-rail').forEach(function (rail) {
      const inner = rail.querySelector('.usp-affiliate-rail__inner');
      if (!inner) return;
      maiorAltura = Math.max(maiorAltura, Math.ceil(inner.getBoundingClientRect().height || inner.scrollHeight || 0));
    });

    if (maiorAltura > 0) {
      const alturaAtual = Math.ceil(shell.getBoundingClientRect().height || shell.offsetHeight || 0);
      shell.style.minHeight = `${Math.max(alturaAtual, maiorAltura + 96)}px`;
    }
  }

  function recalcularEspacamentoProdutos() {
    const shell = getShellAtual();
    aplicarEspacamentoProdutoCards(document);
    ajustarAlturaShellProdutos(shell);
  }

  function agendarRecalculoEspacamentoProdutos() {
    window.requestAnimationFrame(function () {
      recalcularEspacamentoProdutos();
      window.setTimeout(recalcularEspacamentoProdutos, 220);
    });
  }

  function renderDesktop(shell, produtos, inst) {
    limparRails(shell);
    if (!shell || !produtos.length) return;

    const main = shell.querySelector('main');
    if (!main) return;

    const { esquerda, direita } = dividirProdutosLaterais(produtos);
    if (esquerda.length) shell.insertBefore(criarRail('left', esquerda, inst), main);
    if (direita.length) shell.appendChild(criarRail('right', direita, inst));
    agendarRecalculoEspacamentoProdutos();
  }

  function renderMobile(main, produtos, inst) {
    limparProdutosMobile(main);
    if (!main || !produtos.length || window.innerWidth > MOBILE_MAX_WIDTH) return;

    const alvos = getAlvosMobile(main);
    if (alvos.length < 2) return;

    const maximo = Math.min(produtos.length, Math.max(1, Math.floor(alvos.length / 2)));
    let inseridos = 0;

    for (let i = 1; i < alvos.length && inseridos < maximo; i += 2) {
      const alvo = alvos[i];
      const produto = produtos[inseridos];
      if (!alvo || !produto) continue;
      alvo.insertAdjacentElement('afterend', criarCardProdutoMobile(produto, inseridos, inst));
      inseridos += 1;
    }

    agendarRecalculoEspacamentoProdutos();
  }

  function renderVitrines() {
    renderAgendado = false;

    const pagina = getPaginaAtual();
    if (!PAGINAS_COM_VITRINE.has(pagina)) return;
    if (pagina === 'produtos') return;

    const main = getMainAtual();
    if (!main || !main.parentNode) return;

    const inst = getInstituicaoAtiva();
    if (inst) setContextoInstituicao(inst);
    const produtos = getProdutosRelacionados(inst);
    const shell = garantirShell(main, pagina);
    if (!shell) return;

    document.body.setAttribute('data-produtos-contexto', inst || 'geral');
    renderDesktop(shell, produtos, inst);
    renderMobile(main, produtos, inst);
  }

  function agendarRender() {
    if (renderAgendado) return;
    renderAgendado = true;
    window.setTimeout(renderVitrines, 0);
  }

  function capturarContextoDeSelect(alvo) {
    if (!seletorEhInstituicao(alvo)) return;
    if (setContextoInstituicao(alvo.value)) agendarRender();
  }

  function iniciarProdutosRelacionados() {
    const contextoInicial = getContextoSelects() || getContextoBody() || lerContextoSalvo() || getContextoCurrInst();
    if (contextoInicial) setContextoInstituicao(contextoInicial);

    renderVitrines();

    window.addEventListener('resize', agendarRender, { passive: true });

    document.addEventListener('change', function (event) {
      capturarContextoDeSelect(event.target);
      agendarRender();
    });

    document.addEventListener('click', function () {
      agendarRender();
    });

    const observer = new MutationObserver(function (mutations) {
      const mudouInstBody = mutations.some(mutation => mutation.type === 'attributes' && mutation.attributeName === 'data-inst');
      if (!mudouInstBody) return;
      const instBody = getContextoBody();
      if (instBody) setContextoInstituicao(instBody);
      agendarRender();
    });

    if (document.body) {
      observer.observe(document.body, { attributes: true, attributeFilter: ['data-inst'] });
    }

    window.atualizarProdutosRelacionadosInstituicao = agendarRender;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciarProdutosRelacionados, { once: true });
  } else {
    iniciarProdutosRelacionados();
  }
})();
