/* Módulo organizado por responsabilidade — Contato, anúncios, contador e inicialização.
   Mantém a ordem original para preservar compatibilidade. */

/* === ESPAÇOS DE ANÚNCIO / LINK PARA PARCEIROS =============== */
/* ============================================================ */
/* BLOCO 15.13A — Direciona interessados em anúncios para o formulário */
const ANUNCIO_AREAS_LABELS = {
  home_topo: 'Topo da página principal',
  home_meio_consultas: 'Meio da página principal, após consultas principais',
  home_meio_produtos: 'Página principal, antes de conteúdos e produtos',
  menu_lateral: 'Menu lateral',
  remuneracao_antes_tabela: 'Aba Remuneração, antes da tabela',
  direitos_entre_formulario_parecer: 'Aba Direitos, entre formulário e parecer',
  concursos_antes_lista: 'Aba Concursos, antes da lista',
  comparador_antes_resultado: 'Aba Comparar Carreiras, antes dos resultados',
  produtos_topo: 'Topo da aba Produtos',
  acoes_antes_lista: 'Aba Ações Judiciais, antes da lista',
  associacoes_antes_lista: 'Aba Associações, antes da lista',
  rodape_geral: 'Antes do rodapé'
};

function abrirContatoAnuncio(area = '') {
  const areaNome = ANUNCIO_AREAS_LABELS[area] || 'Espaço de anúncio do portal';
  const paginaAtual = document.body?.dataset?.page || '';

  if (paginaAtual && paginaAtual !== 'parceiros') {
    const destino = (window.UNISEGPUB_PAGE_URLS && window.UNISEGPUB_PAGE_URLS.parceiros) || 'anuncie.html';
    const query = area ? `?area=${encodeURIComponent(area)}` : '';
    window.location.href = `${destino}${query}`;
    return;
  }

  if (!paginaAtual && typeof switchPage === 'function') {
    switchPage('parceiros');
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, '', '#parceiros');
    }
  }

  window.setTimeout(() => {
    const assunto = document.getElementById('contato_assunto');
    const mensagem = document.getElementById('contato_mensagem');
    const nome = document.getElementById('contato_nome');
    const form = document.querySelector('#page-parceiros form');

    if (assunto) assunto.value = 'Parceria Comercial / Anúncio';

    if (mensagem && !mensagem.value.trim()) {
      mensagem.value = `Olá, tenho interesse em anunciar no Universo Segurança Pública.\n\nÁrea de interesse: ${areaNome}.\n\nGostaria de receber informações sobre disponibilidade, valores, formatos e próximos passos.`;
      atualizarContador();
    }

    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    if (nome) {
      try {
        nome.focus({ preventScroll: true });
      } catch (e) {
        nome.focus();
      }
    }
  }, 0);
}

/* ============================================================ */
/* === CONTADOR DE CARACTERES (CONTATO) ======================= */
/* ============================================================ */
/* BLOCO 15.14 — Formulário de contato e contador de caracteres */
function atualizarContador() {
  const txt = document.getElementById('contato_mensagem');
  const cnt = document.getElementById('char-counter');
  if (!txt || !cnt) return;
  const len = txt.value.length;
  cnt.textContent = `${len} / 2000 caracteres`;
  cnt.classList.toggle('over', len > 1900);
}

/* ============================================================ */
/* === ENVIO DE CONTATO ======================================= */
/* ============================================================ */
function enviarEmailContato(event) {
  event.preventDefault();
  const nome = document.getElementById('contato_nome').value.trim();
  const email = document.getElementById('contato_email').value.trim();
  const assunto = document.getElementById('contato_assunto').value;
  const msg = document.getElementById('contato_mensagem').value.trim();

  if (!nome || !email || !assunto || !msg) {
    mostrarToast('Preencha todos os campos!', 'error');
    return;
  }
  if (msg.length < 10) {
    mostrarToast('Mensagem muito curta (mínimo 10 caracteres).', 'error');
    return;
  }
  const corpo = encodeURIComponent(`Nome: ${nome}\nE-mail: ${email}\n\nMensagem:\n${msg}\n\n---\nEnviado via Universo Segurança Pública`);
  const sub = encodeURIComponent(`[CONTATO] ${assunto}`);
  window.location.href = `mailto:universosegpub@gmail.com?subject=${sub}&body=${corpo}`;
  setTimeout(() => mostrarToast('E-mail aberto no seu cliente! Resposta em até 48h.'), 300);
}

/* ============================================================ */
/* === EVENT LISTENERS / INICIALIZAÇÃO ======================== */
/* ============================================================ */
/* BLOCO 15.15 — Inicialização, eventos automáticos e atalhos de teclado */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  aplicarEstruturaEstadosFaltantesNoHtml();

  // Monta os seletores internos das abas institucionais, sem escolher PMESP automaticamente.
  if (typeof montarSeletoresConsultaInstituicao === 'function') montarSeletoresConsultaInstituicao();

  // Aplica o cabeçalho inicial do portal; a instituição específica só entra após escolha do usuário.
  aplicarHeaderInicialPortal();
  if (typeof prepararSelectInstituicaoHome === 'function') prepararSelectInstituicaoHome();
  if (typeof limparConsultaInstitucionalInicial === 'function') limparConsultaInstitucionalInicial();

  // Direitos: atualizar quando muda cargo/situação/tempo.
  ['cargo_dir', 'situacao_dir', 'tempo_dir'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', analisarDireitos);
  });

  // Acessibilidade: ESC fecha o menu.
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const sb = document.getElementById('sidebar');
      if (sb && sb.classList.contains('active')) toggleMenu();
    }
  });
});
