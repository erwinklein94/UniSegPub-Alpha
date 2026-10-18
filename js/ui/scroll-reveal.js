/* Entrada suave das informações; o conteúdo permanece disponível sem JavaScript. */
(() => {
  const pagina=location.pathname.split('/').pop().replace(/\.html$/,'');
  if(['','index','remuneracao','concursos','brasoes'].includes(pagina))return; // Efeitos próprios já existentes.
  const motion=matchMedia('(prefers-reduced-motion: reduce)');
  if(!('IntersectionObserver' in window)||motion.matches)return;
  const estilo=document.createElement('style');
  estilo.textContent=`.usp-revelar{opacity:0;transform:translateY(22px);transition:opacity .65s ease,transform .65s cubic-bezier(.2,.65,.3,1)}.usp-revelar.usp-revelado{opacity:1;transform:none}@media(prefers-reduced-motion:reduce){.usp-revelar{opacity:1!important;transform:none!important;transition:none!important}}@media print{.usp-revelar{opacity:1!important;transform:none!important}}`;
  document.head.append(estilo);
  const observer=new IntersectionObserver(entradas=>entradas.forEach(e=>{if(e.isIntersecting){e.target.classList.add('usp-revelado');observer.unobserve(e.target);}}),{threshold:0,rootMargin:'0px 0px -24px 0px'});
  let agendado=false;
  function registrar(){
    agendado=false;if(motion.matches)return;
    document.querySelectorAll('main section,main article,main .cartao,main .produto-card,main .card,main .usp-anuncio').forEach(el=>{
      if(el.classList.contains('usp-revelar')||el.closest('[hidden]')||el.querySelector('section,article,.cartao,.produto-card,.card')||!el.getClientRects().length)return;
      if(el.getBoundingClientRect().top<innerHeight-30)return;
      el.classList.add('usp-revelar');observer.observe(el);
    });
  }
  function agendar(){if(!agendado){agendado=true;requestAnimationFrame(registrar);}}
  function iniciar(){registrar();new MutationObserver(agendar).observe(document.body,{childList:true,subtree:true});}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',iniciar,{once:true});else iniciar();
  document.addEventListener('focusin',e=>{const el=e.target.closest('.usp-revelar');if(el){el.classList.add('usp-revelado');observer.unobserve(el);}});
  motion.addEventListener?.('change',()=>{if(motion.matches){document.querySelectorAll('.usp-revelar').forEach(el=>el.classList.add('usp-revelado'));observer.disconnect();}else agendar();});
})();
