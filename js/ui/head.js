/* =======================================================
   JavaScript de inicialização extraído do index.html
   Tema inicial e funções necessárias antes do carregamento das imagens.
   ======================================================= */

let savedTheme = 'light';
try {
  const storedTheme = localStorage.getItem('theme');
  savedTheme = storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : 'light';
} catch (e) {
  savedTheme = 'light';
}
document.documentElement.setAttribute('data-theme', savedTheme);
document.documentElement.style.colorScheme = savedTheme;

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
(function(){
  const arquivo=document.currentScript?.src;
  if(!arquivo)return;
  const script=document.createElement('script');
  script.src=new URL('scroll-reveal.js?v=20261018geral1',arquivo).href;
  script.defer=true;document.head.append(script);
})();
/* Notícias temporariamente fora da navegação pública. Conteúdo preservado. */
(function(){
  const estilo=document.createElement('style');
  estilo.textContent='a[href="noticias.html"],a[href="/noticias"],a[href="/noticias.html"],a[href="https://universosegpub.com.br/noticias.html"]{display:none!important}';
  document.head.append(estilo);
  function ocultarNoticias(){document.querySelectorAll('a[href]').forEach(a=>{
    try{const u=new URL(a.href,location.href);if(u.origin===location.origin&&/^\/noticias(?:\.html)?\/?$/.test(u.pathname))a.remove();}catch{}
  });}
  document.addEventListener('DOMContentLoaded',()=>{ocultarNoticias();new MutationObserver(ocultarar=>{if(ocultarar.some(m=>m.addedNodes.length))ocultarNoticias();}).observe(document.body,{childList:true,subtree:true});},{once:true});
})();
