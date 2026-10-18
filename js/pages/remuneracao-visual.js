/* Conteúdo permanece visível sem JavaScript e com movimento reduzido. */
(() => {
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) { target.classList.add('remu-revelado'); observer.unobserve(target); }
    });
  }, { threshold: .04, rootMargin: '0px 0px -20px 0px' }) : null;
  const register = () => {
    if (motion.matches || !observer) return;
    document.querySelectorAll('.usp-remu-stats, .remu-section-head, #lista-remuneracao tr, .remu-guia-card, .remu-fonte-nota, .usp-remu-warning .usp-container').forEach(node => {
      if (node.classList.contains('remu-revelar') || node.getBoundingClientRect().top < innerHeight - 30) return;
      node.classList.add('remu-revelar'); observer.observe(node);
    });
  };
  document.addEventListener('remuneracao:renderizada', () => {
    // Descartar referências às linhas substituídas por filtros e paginação.
    observer?.disconnect();
    document.querySelectorAll('.remu-revelar:not(.remu-revelado)').forEach(node => {
      if (motion.matches || node.getBoundingClientRect().top < innerHeight - 30) node.classList.add('remu-revelado');
      else observer?.observe(node);
    });
    register();
  });
  document.addEventListener('focusin', event => {
    const target = event.target.closest('.remu-revelar');
    if (target) { target.classList.add('remu-revelado'); observer?.unobserve(target); }
  });
  motion.addEventListener('change', () => {
    if (motion.matches) { document.querySelectorAll('.remu-revelar').forEach(node => node.classList.add('remu-revelado')); observer?.disconnect(); }
    else register();
  });
  const progress = document.createElement('div');
  progress.className = 'remu-progresso'; progress.setAttribute('aria-hidden', 'true'); document.body.append(progress);
  let scheduled = false;
  const update = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0})`;
    scheduled = false;
  };
  addEventListener('scroll', () => { if (!scheduled) { scheduled = true; requestAnimationFrame(update); } }, { passive: true });
  addEventListener('resize', update);
  register(); update();
})();
