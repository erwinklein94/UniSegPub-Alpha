(() => {
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    entries.forEach(({target,isIntersecting}) => { if(isIntersecting){target.classList.add('brasoes-revelado');observer.unobserve(target);} });
  },{threshold:.04,rootMargin:'0px 0px -20px 0px'}) : null;
  function register(){
    observer?.disconnect();
    const cards=[...document.querySelectorAll('[data-brasoes-card][data-inst]')];
    if(cards.length){
      document.querySelector('#brasoes-carregando')?.remove();
      for(const [id,total] of [['acervo',cards.length],['federal',cards.filter(c=>c.dataset.esfera==='federal').length],['estadual',cards.filter(c=>c.dataset.esfera==='estadual').length]]) document.querySelector('#brasoes-total-'+id).textContent=total;
    }
    if(!observer||motion.matches)return;
    document.querySelectorAll('.usp-brasoes-stats, .usp-section__head, .brasoes-conteudo-card, .usp-brasoes-method-grid article, .brasoes-historia-card, .brasoes-resumo-item, .usp-brasoes-warning .usp-container').forEach(node=>{
      if(node.closest('[hidden]'))return;
      if(node.getBoundingClientRect().top<innerHeight-30){if(node.classList.contains('brasoes-revelar'))node.classList.add('brasoes-revelado');return;}
      if(node.classList.contains('brasoes-revelado'))return;
      node.classList.add('brasoes-revelar');observer.observe(node);
    });
  }
  document.addEventListener('brasoes:renderizada',register);
  document.addEventListener('cards-estaticos:pronto',register);
  const detail=document.querySelector('#brasoes_historia_resultado');
  if(detail)new MutationObserver(register).observe(detail,{childList:true,subtree:true});
  document.addEventListener('focusin',event=>{const node=event.target.closest('.brasoes-revelar');if(node){node.classList.add('brasoes-revelado');observer?.unobserve(node);}});
  motion.addEventListener('change',()=>{if(motion.matches){document.querySelectorAll('.brasoes-revelar').forEach(n=>n.classList.add('brasoes-revelado'));observer?.disconnect();}else register();});
  const bar=document.createElement('div');bar.className='brasoes-progresso';bar.setAttribute('aria-hidden','true');document.body.append(bar);
  let scheduled=false;
  function progress(){const max=document.documentElement.scrollHeight-innerHeight;bar.style.transform=`scaleX(${max>0?Math.min(1,Math.max(0,scrollY/max)):0})`;let current;const links=[...document.querySelectorAll('.brasoes-onepage a')];links.forEach(a=>{const section=document.querySelector(a.getAttribute('href'));if(section&&!section.hidden&&section.getBoundingClientRect().top<innerHeight*.45)current=a;});links.forEach(a=>{if(a===current)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});scheduled=false;}
  addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(progress);}},{passive:true});addEventListener('resize',progress);
  register();progress();
})();
