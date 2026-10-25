import { normalizar } from './comparador-modelo.js';
const $=s=>document.querySelector(s),busca=$('#guia-busca'),esfera=$('#guia-esfera'),cobertura=$('#guia-cobertura');
const itens=[...document.querySelectorAll('[data-guia-item]')],artigos=[...document.querySelectorAll('[data-guia-artigo]')],grupos=[...document.querySelectorAll('[data-guia-grupo]')];
const ufs=new Set(itens.map(i=>i.dataset.uf.toLowerCase()));const params=new URLSearchParams(location.search);
busca.value=params.get('q')||'';if(['federal','estadual'].includes(params.get('esfera')))esfera.value=params.get('esfera');if(params.get('conteudo')==='artigo')cobertura.value='artigo';
for(const g of grupos)g.dataset.abertoInicial=String(g.open);
function filtrar(){
 const q=normalizar(busca.value),termos=q.split(/\s+/).filter(Boolean),uf=ufs.has(q)?q:null;
 const mostrar=i=>(!esfera.value||i.dataset.esfera===esfera.value)&&(!cobertura.value||i.dataset.artigo==='sim')&&(uf?i.dataset.uf.toLowerCase()===uf:termos.every(t=>normalizar(i.dataset.busca).includes(t)));
 for(const i of [...itens,...artigos])i.hidden=!mostrar(i);
 const total=itens.filter(i=>!i.hidden).length,totalArtigos=artigos.filter(i=>!i.hidden).length,ativo=Boolean(q||esfera.value||cobertura.value);
 for(const g of grupos){const visiveis=[...g.querySelectorAll('[data-guia-item]')].filter(i=>!i.hidden).length;g.hidden=!visiveis;g.open=ativo?Boolean(visiveis):g.dataset.abertoInicial==='true';g.querySelector('.guia-grupo-contagem').textContent=`${visiveis} ${visiveis===1?'instituição':'instituições'}`;}
 $('#guia-status').textContent=`${total} ${total===1?'instituição encontrada':'instituições encontradas'} · ${totalArtigos} ${totalArtigos===1?'artigo disponível':'artigos disponíveis'}.`;
 $('#guia-artigos-status').textContent=`${totalArtigos} de ${artigos.length} artigos para estes filtros.`;$('#guia-vazio').hidden=total>0;$('#guia-artigos-vazio').hidden=totalArtigos>0;
 const p=new URLSearchParams(location.search);for(const [key,value] of [['q',busca.value.trim()],['esfera',esfera.value],['conteudo',cobertura.value]]){if(value)p.set(key,value);else p.delete(key);}history.replaceState(null,'',location.pathname+(p.size?'?'+p.toString():'')+location.hash);
}
$('#guia-form').addEventListener('submit',e=>{e.preventDefault();filtrar();});busca.addEventListener('input',filtrar);esfera.addEventListener('change',filtrar);cobertura.addEventListener('change',filtrar);
$('#guia-limpar').addEventListener('click',()=>{busca.value='';esfera.value='';cobertura.value='';filtrar();busca.focus();});
const headerSearch=$('#site-search');if(headerSearch){headerSearch.value=busca.value;headerSearch.form.addEventListener('submit',e=>{e.preventDefault();busca.value=headerSearch.value;filtrar();$('#guias-publicados').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'});});}
filtrar();
const motion=matchMedia('(prefers-reduced-motion:reduce)'),alvos=[...document.querySelectorAll('.guia-artigo,.guia-estado,.guia-metodo-grid article')];let observer;
if(!motion.matches&&'IntersectionObserver' in window){observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('guia-revelado');observer.unobserve(e.target);}}),{threshold:.04});for(const a of alvos){if(a.getBoundingClientRect().top<innerHeight)continue;a.classList.add('guia-revelar');observer.observe(a);}}
motion.addEventListener('change',e=>{if(e.matches){alvos.forEach(a=>a.classList.add('guia-revelado'));observer?.disconnect();}});document.addEventListener('focusin',e=>{const a=e.target.closest('.guia-revelar');if(a)a.classList.add('guia-revelado');});
const progress=document.createElement('div');progress.className='guia-progresso';progress.setAttribute('aria-hidden','true');document.body.prepend(progress);const links=[...document.querySelectorAll('.guia-onepage a')];let scheduled=false;
function scroll(){scheduled=false;const max=document.documentElement.scrollHeight-innerHeight;progress.style.transform=`scaleX(${max>0?Math.min(1,Math.max(0,scrollY/max)):0})`;let current=links[0];for(const a of links)if($(a.getAttribute('href')).getBoundingClientRect().top<innerHeight*.45)current=a;for(const a of links){if(a===current)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');}}
addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(scroll);}},{passive:true});addEventListener('resize',scroll);scroll();
