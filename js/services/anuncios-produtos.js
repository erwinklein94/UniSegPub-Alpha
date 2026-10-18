/* Publicidade do próprio catálogo: sem comissão privada e sem produtos pausados. */
(function(root){
  'use strict';
  function selecionar(catalogo,pagina,permitido){
    const validos=Object.entries(catalogo||{}).filter(([,v])=>Array.isArray(v))
      .flatMap(([categoria,itens])=>itens.map(p=>({...p,categoria})))
      .filter(p=>p.ativo!==false&&p.titulo&&p.imagem?.src&&permitido(p.href));
    const escolhidos=[],vistos=new Set();
    function incluir(p){if(!p||vistos.has(p.href))return;vistos.add(p.href);escolhidos.push(p);}
    validos.filter(p=>p.destaque).slice(0,1).forEach(incluir);
    const indice=[...pagina].reduce((n,c)=>n+c.charCodeAt(0),0);
    for(const tipo of ['cursos','livros','produtos']){
      const candidatos=validos.filter(p=>p.categoria.startsWith(tipo)&&!vistos.has(p.href));
      if(escolhidos.some(p=>p.categoria.startsWith(tipo)))continue;
      incluir(candidatos.length?candidatos[indice%candidatos.length]:null);
    }
    validos.forEach(p=>{if(escolhidos.length<3)incluir(p);});
    return escolhidos.slice(0,3);
  }
  root.UNISEGPUB_ANUNCIOS=Object.freeze({selecionar});
  if(!root.document)return;
  let assinatura='';
  function renderizar(){
    const main=document.querySelector('main');if(!main)return;
    const base=root.UNISEGPUB_PRODUTOS;if(!base)return;
    const produtos=selecionar(base,root.location.pathname,href=>root.UNISEGPUB_LINKS_PRODUTOS?.permitido(href));
    const nova=JSON.stringify(produtos);if(nova===assinatura)return;assinatura=nova;
    document.querySelectorAll('[data-anuncios-catalogo]').forEach(e=>e.remove());
    const alvos=[...main.children].filter(e=>e.tagName==='SECTION'&&!e.hidden);
    produtos.forEach((p,i)=>{
      const faixa=document.createElement('aside');faixa.className='usp-anuncio';faixa.dataset.anunciosCatalogo='true';faixa.setAttribute('aria-label','Publicidade de produto afiliado');
      const imagem=document.createElement('img');imagem.src=p.imagem.src;imagem.alt=p.imagem.alt||p.titulo;imagem.width=100;imagem.height=100;imagem.loading='lazy';imagem.decoding='async';
      imagem.addEventListener('error',()=>{imagem.hidden=true;},{once:true});
      const conteudo=document.createElement('div');const rotulo=document.createElement('small');rotulo.textContent='PUBLICIDADE · LINK DE AFILIADO';
      const titulo=document.createElement('h2');titulo.textContent=p.titulo;
      const descricao=document.createElement('p');descricao.textContent=p.descricao||'Confira este produto e as condições na loja.';
      const aviso=document.createElement('small');aviso.textContent='Podemos receber comissão pela compra. Confira preço e condições com o vendedor.';
      conteudo.append(rotulo,titulo,descricao,aviso);
      const link=document.createElement('a');link.href=p.href;link.target='_blank';link.rel='sponsored noopener noreferrer';link.className='usp-anuncio__link';link.textContent=p.cta||'Conhecer o produto';link.setAttribute('aria-label','Conhecer '+p.titulo);
      if(root.UNISEGPUB_CAMPANHAS)link.href=root.UNISEGPUB_CAMPANHAS.campanha(link.href,root.location.pathname,'out'+(i+1));
      faixa.append(imagem,conteudo,link);
      const alvo=alvos[Math.min(1+i*2,alvos.length-1)];
      if(alvo)alvo.insertAdjacentElement('afterend',faixa);else main.append(faixa);
    });
  }
  document.addEventListener('dados-portal:pronto',renderizar);
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',renderizar,{once:true});else renderizar();
})(typeof window==='undefined'?globalThis:window);
