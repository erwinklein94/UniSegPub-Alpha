import { normalizar } from './comparador-modelo.js';
const busca=document.querySelector('#guia-busca'),esfera=document.querySelector('#guia-esfera');
const itens=[...document.querySelectorAll('[data-guia-item]')];
busca.value=new URLSearchParams(location.search).get('q')||'';
function filtrar(){
 const termos=normalizar(busca.value).split(/\s+/).filter(Boolean);let total=0;
 for(const i of itens){const mostrar=(!esfera.value||i.dataset.esfera===esfera.value)&&termos.every(t=>normalizar(i.dataset.busca).includes(t));i.hidden=!mostrar;if(mostrar)total++;}
 document.querySelector('#guia-status').textContent=`${total} de ${itens.length} instituições encontradas.`;
 document.querySelector('#guia-vazio').hidden=total>0;
 const p=new URLSearchParams(location.search);if(busca.value.trim())p.set('q',busca.value.trim());else p.delete('q');
 history.replaceState(null,'',location.pathname+(p.size?'?'+p.toString():''));
}
document.querySelector('#guia-form').addEventListener('submit',e=>{e.preventDefault();filtrar();});
busca.addEventListener('input',filtrar);esfera.addEventListener('change',filtrar);
document.querySelector('#guia-limpar').addEventListener('click',()=>{busca.value='';esfera.value='';filtrar();busca.focus();});
filtrar();
