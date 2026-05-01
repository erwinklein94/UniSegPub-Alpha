/* =======================================================
   JavaScript de inicialização extraído do index.html
   Inclui analytics, tema inicial e funções necessárias antes do carregamento das imagens.
   ======================================================= */

window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XHR4TCCF9D');


window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-18121830612');


gtag('event', 'conversion', {'send_to': 'AW-18121830612/GtZCCJSGh6McENThlMFD'});


const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);


function carregarImagemProduto(img) {
        const base = img.dataset.imgBase || img.getAttribute('src');
        const extensoes = ['png', 'jpg', 'jpeg', 'webp'];
        const tentativaAtual = Number(img.dataset.tentativa || 0);

        if (base && tentativaAtual < extensoes.length) {
          img.dataset.tentativa = tentativaAtual + 1;
          img.src = `${base}.${extensoes[tentativaAtual]}`;
          return;
        }

        img.style.display = 'none';
        const container = img.closest('.produto-imagem');
        if (container) {
          container.classList.add('img-indisponivel');
        }
      }