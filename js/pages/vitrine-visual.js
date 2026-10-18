(() => {
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    entries.forEach(({target,isIntersecting}) => { if (isIntersecting) { target.classList.add('vitrine-revelado'); observer.unobserve(target); } });
  },{threshold:.04,rootMargin:'0px 0px -20px 0px'}) : null;
  function register() {
    observer?.disconnect();
    if (!observer || motion.matches) return;
    document.querySelectorAll('.usp-produtos-section .usp-section__head, .produto-card').forEach(node => {
      if (node.closest('[hidden]')) return;
      if (node.getBoundingClientRect().top < innerHeight-30) { if (node.classList.contains('vitrine-revelar')) node.classList.add('vitrine-revelado'); return; }
      if (node.classList.contains('vitrine-revelado')) return;
      node.classList.add('vitrine-revelar'); observer.observe(node);
    });
  }
  document.addEventListener('vitrine:renderizada',register);
  document.addEventListener('focusin',event => { const node=event.target.closest('.vitrine-revelar'); if(node){node.classList.add('vitrine-revelado');observer?.unobserve(node);} });
  motion.addEventListener('change',()=>{if(motion.matches){document.querySelectorAll('.vitrine-revelar').forEach(node=>node.classList.add('vitrine-revelado'));observer?.disconnect();}else register();});
  register();
})();
