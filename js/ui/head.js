/* =======================================================
   JavaScript de inicialização extraído do index.html
   Inclui analytics, tema inicial e funções necessárias antes do carregamento das imagens.
   ======================================================= */

window.dataLayer = window.dataLayer || [];
window.gtag = window.gtag || function gtag(){
  window.dataLayer.push(arguments);
};

window.gtag('js', new Date());
window.gtag('config', 'G-XHR4TCCF9D');
window.gtag('config', 'AW-18121830612');
window.gtag('event', 'conversion', {'send_to': 'AW-18121830612/GtZCCJSGh6McENThlMFD'});

let savedTheme = 'light';
try {
  const storedTheme = localStorage.getItem('theme');
  savedTheme = storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : 'light';
} catch (e) {
  savedTheme = 'light';
}
document.documentElement.setAttribute('data-theme', savedTheme);
document.documentElement.style.colorScheme = savedTheme;

/* Registro de acesso no Supabase (contagem própria do portal, sem dados pessoais). */
(function () {
  try {
    const SUPABASE_URL = 'https://yilpmghvcvfceowwuopc.supabase.co';
    const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_2Yj2IfqpQugBSDJr9ByV7w_5KNCPeKa';

    const pagina = (location.pathname.replace(/^\//, '') || 'index.html').slice(0, 200);
    if (pagina.indexOf('admin') === 0) return;

    /* Não conta ambiente local (testes) nem o navegador do administrador. */
    if (/^(localhost|127\.|192\.168\.|10\.)/.test(location.hostname)) return;
    try { if (localStorage.getItem('usp_nao_contar') === '1') return; } catch (e) { /* segue */ }

    let sessao = '';
    try {
      sessao = sessionStorage.getItem('usp_sessao') || '';
      if (!sessao) {
        sessao = (window.crypto && crypto.randomUUID) ? crypto.randomUUID() : (Date.now().toString(36) + Math.random().toString(36).slice(2));
        sessionStorage.setItem('usp_sessao', sessao);
      }
    } catch (e) { sessao = ''; }

    fetch(SUPABASE_URL + '/rest/v1/acessos', {
      method: 'POST',
      headers: {
        apikey: SUPABASE_PUBLISHABLE_KEY,
        Authorization: 'Bearer ' + SUPABASE_PUBLISHABLE_KEY,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal'
      },
      body: JSON.stringify({
        pagina: pagina,
        sessao: sessao.slice(0, 64),
        referencia: document.referrer ? String(document.referrer).slice(0, 300) : null
      }),
      keepalive: true
    }).catch(function () {});
  } catch (e) { /* nunca interfere na página */ }
})();

function carregarImagemProduto(img) {
  if (!img) return;

  const original = img.dataset.imgBase || img.getAttribute('src') || '';
  const base = String(original).replace(/\.(webp|png|jpe?g)$/i, '');
  const extensoes = ['webp'];
  let tentativaAtual = Number(img.dataset.tentativa || 0);
  const srcAtual = String(img.getAttribute('src') || '');

  while (tentativaAtual < extensoes.length) {
    const proxima = `${base}.${extensoes[tentativaAtual]}`;
    tentativaAtual += 1;
    img.dataset.tentativa = String(tentativaAtual);

    if (!srcAtual.endsWith(proxima)) {
      img.src = proxima;
      return;
    }
  }

  const fallback = img.dataset.imgFallback || '';
  if (fallback && img.dataset.fallbackTentado !== 'true') {
    img.dataset.fallbackTentado = 'true';
    img.src = fallback;
    return;
  }

  img.style.display = 'none';
  const container = img.closest('.produto-imagem, .taf-produto-imagem, .partner-image-slot');
  if (container) container.classList.add('img-indisponivel');

  const card = img.closest('.produto-card, .taf-produto-card');
  if (card) card.classList.add('img-indisponivel');
}
