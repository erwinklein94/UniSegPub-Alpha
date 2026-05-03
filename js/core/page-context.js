/* ============================================================
   UniSegPub — Contexto MPA (Multi Page Application)
   Mantém compatibilidade com o JS legado da versão em abas,
   mas agora cada seção principal é uma página HTML real.
   ============================================================ */
(function () {
  const PAGE_URLS = {
    principal: 'index.html',
    remuneracao: 'remuneracao.html',
    direitos: 'direitos.html',
    poderes: 'poderes-deveres.html',
    brasoes: 'brasoes.html',
    concursos: 'concursos.html',
    comparar: 'comparar-carreiras.html',
    produtos: 'produtos.html',
    acoes: 'acoes-judiciais.html',
    associacoes: 'associacoes-sindicatos.html',
    parceiros: 'anuncie.html'
  };

  const PAGE_NAMES = {
    principal: 'Principal',
    remuneracao: 'Remuneração Tabelada',
    direitos: 'Direitos e Vantagens',
    poderes: 'Poderes e Deveres',
    brasoes: 'Brasões e história',
    concursos: 'Concursos',
    comparar: 'Comparar Carreiras',
    produtos: 'Produtos',
    acoes: 'Ações Judiciais',
    associacoes: 'Associações e Sindicatos',
    parceiros: 'Parceiros - Anuncie aqui!'
  };



  const AD_AREA_LABELS = {
    home_topo: 'Topo da página principal',
    home_meio_consultas: 'Meio da página principal, após consultas principais',
    home_meio_produtos: 'Página principal, antes de conteúdos e produtos',
    menu_lateral: 'Menu lateral',
    remuneracao_antes_tabela: 'Página de remuneração, antes da tabela',
    direitos_entre_formulario_parecer: 'Página de direitos, entre formulário e parecer',
    concursos_antes_lista: 'Página de concursos, antes da lista',
    comparador_antes_resultado: 'Página de comparação, antes dos resultados',
    produtos_topo: 'Topo da página de produtos',
    acoes_antes_lista: 'Página de ações judiciais, antes da lista',
    associacoes_antes_lista: 'Página de associações, antes da lista',
    rodape_geral: 'Antes do rodapé'
  };

  window.UNISEGPUB_PAGE_URLS = Object.assign({}, PAGE_URLS);
  window.UNISEGPUB_PAGE_NAMES = Object.assign({}, PAGE_NAMES);

  function getCurrentPage() {
    return document.body?.dataset?.page || 'principal';
  }

  function setActivePage(page) {
    document.querySelectorAll('.page-section').forEach(section => {
      section.classList.toggle('active', section.id === `page-${page}`);
    });

    document.querySelectorAll('.sidebar-nav a').forEach(link => {
      const active = link.id === `menu-${page}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }

  function fillAdContactFormFromUrl() {
    const page = getCurrentPage();
    if (page !== 'parceiros') return;

    const params = new URLSearchParams(window.location.search);
    const area = params.get('area') || '';
    if (!area) return;

    const areaNome = AD_AREA_LABELS[area] || 'Espaço de anúncio do portal';
    const assunto = document.getElementById('contato_assunto');
    const mensagem = document.getElementById('contato_mensagem');

    if (assunto) assunto.value = 'Parceria Comercial / Anúncio';
    if (mensagem && !mensagem.value.trim()) {
      mensagem.value = `Olá, tenho interesse em anunciar no Universo Segurança Pública.\n\nÁrea de interesse: ${areaNome}.\n\nGostaria de receber informações sobre disponibilidade, valores, formatos e próximos passos.`;
      if (typeof window.atualizarContador === 'function') window.atualizarContador();
    }
  }

  function initPageSpecificContent(page) {
    if (typeof window.atualizarVisibilidadeResumoInstitucional === 'function') {
      window.atualizarVisibilidadeResumoInstitucional(page);
    }

    if (typeof window.atualizarHeaderDesc === 'function') {
      window.atualizarHeaderDesc(PAGE_NAMES[page] || PAGE_NAMES.principal);
    }

    const institutionalPages = ['remuneracao', 'direitos', 'poderes', 'brasoes', 'concursos', 'acoes', 'associacoes'];
    if (institutionalPages.includes(page) && typeof window.prepararPaginaComSelecaoInstituicao === 'function') {
      window.prepararPaginaComSelecaoInstituicao(page);
    }

    if (page === 'comparar' && typeof window.inicializarComparadorCarreiras === 'function') {
      window.inicializarComparadorCarreiras();
    }

    fillAdContactFormFromUrl();
  }

  document.addEventListener('DOMContentLoaded', () => {
    const page = getCurrentPage();
    setActivePage(page);
    initPageSpecificContent(page);
  });
})();
