import {categorias,dinheiro,ganho,legendaGanho,listar,linkSeguro} from './admin-produtos-modelo.js';
const URL_BASE='https://luggjibketdxztvsgzgo.supabase.co';
const CHAVE='sb_publishable_onaOo8uMyySc3KWf6D6Jfg_OMT6wqcX';
const SESSAO='usp_admin_sessao_luggjibketdxztvsgzgo';
const $=s=>document.querySelector(s);
let catalogo={},comissoes=[],versao=null,selecionado=null,carregando=false;
function sessao(){try{const s=JSON.parse(sessionStorage.getItem(SESSAO));return s?.token&&s.email==='erwinklein1994@gmail.com'&&Date.now()<s.expira-30000?s:null;}catch{return null;}}
function mensagem(texto,erro=false){$('#estado-produtos').textContent=texto;$('#estado-produtos').classList.toggle('login-erro',erro);}
function sair(){sessionStorage.removeItem(SESSAO);catalogo={};comissoes=[];$('#linhas-produtos').replaceChildren();$('#editor-produto').hidden=true;$('#tela-dashboard').hidden=true;$('#tela-login').hidden=false;}
async function api(caminho,opcoes={}){
  const s=sessao();if(!s){sair();throw Error('Sua sessão expirou. Entre novamente.');}
  const r=await fetch(URL_BASE+'/rest/v1/'+caminho,{...opcoes,cache:'no-store',headers:{apikey:CHAVE,Authorization:'Bearer '+s.token,'Content-Type':'application/json',...opcoes.headers}});
  if(r.status===401){sair();throw Error('Sessão expirada. Entre novamente.');}
  if(!r.ok){let e={};try{e=await r.json();}catch{}throw Error(r.status===403?'Acesso restrito ao administrador.':e.message||'Não foi possível salvar/consultar. Tente novamente.');}
  return r.json();
}
async function carregar(){
  if(carregando)return;carregando=true;$('#atualizar-produtos').disabled=true;$('#novo-produto').disabled=true;mensagem('Carregando catálogo e comissões…');
  try{
    const [dados,privados]=await Promise.all([api('datasets?chave=eq.UNISEGPUB_PRODUTOS&select=conteudo,updated_at'),api('produtos_comissoes?select=*&limit=5000')]);
    if(!dados[0])throw Error('Catálogo não encontrado.');
    catalogo=dados[0].conteudo;versao=dados[0].updated_at;comissoes=privados;renderizar();mensagem('Catálogo atualizado. Comissões são previsões, não vendas recebidas.');$('#novo-produto').disabled=false;
  }catch(e){mensagem(e.message,true);}finally{carregando=false;$('#atualizar-produtos').disabled=false;}
}
function bloqueado(p){return !window.UNISEGPUB_LINKS_PRODUTOS?.permitido(p.href);}
function situacao(p){return bloqueado(p)?'Link indisponível':p.ativo===false?'Pausado':'Publicado';}
function celula(tr,texto){const td=document.createElement('td');td.textContent=texto;tr.append(td);return td;}
function renderizar(){
  const todos=listar(catalogo,comissoes);const busca=$('#busca-produto').value.toLocaleLowerCase('pt-BR');
  const itens=todos.filter(i=>(!$('#categoria-filtro').value||i.categoria===$('#categoria-filtro').value)&&`${i.produto.titulo} ${i.produto.href}`.toLocaleLowerCase('pt-BR').includes(busca)&&(!$('#status-filtro').value||situacao(i.produto)===$('#status-filtro').value));
  $('#total-produtos').textContent=todos.filter(i=>situacao(i.produto)==='Publicado').length;
  $('#com-comissao').textContent=todos.filter(i=>ganho(i.comissao)!=null).length;
  $('#sem-comissao').textContent=todos.filter(i=>ganho(i.comissao)==null).length;
  const corpo=$('#linhas-produtos');corpo.replaceChildren();const quantidade=Number($('#quantidade-vendas').value)||1;
  for(const item of itens){const {produto:p,comissao:c}=item;const tr=document.createElement('tr');
    celula(tr,p.titulo);celula(tr,categorias[item.categoria]);celula(tr,situacao(p));
    const td=celula(tr,'');if(linkSeguro(p.href)){const a=document.createElement('a');a.href=p.href;a.target='_blank';a.rel='noopener noreferrer';a.textContent=p.href;td.append(a);}else td.textContent=p.href||'Sem link';
    celula(tr,dinheiro(c?.preco));celula(tr,c?.percentual==null?'—':Number(c.percentual)+'%');celula(tr,legendaGanho(c));
    celula(tr,ganho(c)==null?'Não informado':`${c.comissao==null||c.tipo==='estimada'?'Estimativa: ':c.tipo==='maxima'?'Até ':''}${dinheiro(ganho(c)*quantidade)}`);
    celula(tr,c?.conferido_em?c.conferido_em.split('-').reverse().join('/'):'Não conferido');
    const acao=celula(tr,'');const b=document.createElement('button');b.type='button';b.className='btn-suave';b.textContent='Editar';b.setAttribute('aria-label','Editar '+p.titulo);b.onclick=()=>editar(item);acao.append(b);corpo.append(tr);
  }
  $('#resultado-produtos').textContent=itens.length+' anúncio(s) encontrado(s).';$('#vazio-produtos').hidden=itens.length>0;
}
function editar(item=null){
  selecionado=item;$('#form-produto').reset();$('#categoria-produto').disabled=!!item;
  const p=item?.produto||{},c=item?.comissao||{};
  $('#editor-titulo').textContent=item?'Editar anúncio':'Novo anúncio';
  for(const [id,valor] of Object.entries({'categoria-produto':item?.categoria||'cursosGerais','titulo-produto':p.titulo||'','descricao-produto':p.descricao||'','href-produto':p.href||'','imagem-produto':p.imagem?.src||'','preco-produto':c.preco??'','comissao-produto':c.comissao??'','percentual-produto':c.percentual??'','tipo-comissao':c.tipo||'maxima','data-comissao':c.conferido_em||'','fonte-comissao':c.fonte||'','notas-comissao':c.observacoes||''}))$('#'+id).value=valor;
  $('#ativo-produto').checked=p.ativo!==false;$('#destaque-produto').checked=!!p.destaque;
  $('#erro-editor').textContent='';$('#editor-produto').hidden=false;$('#editor-produto').scrollIntoView({behavior:'smooth',block:'start'});$('#titulo-produto').focus({preventScroll:true});
}
$('#form-produto').addEventListener('submit',async e=>{
  e.preventDefault();if(!$('#form-produto').reportValidity())return;
  const p={titulo:$('#titulo-produto').value.trim(),descricao:$('#descricao-produto').value.trim(),href:$('#href-produto').value.trim(),imagem:$('#imagem-produto').value.trim(),ativo:$('#ativo-produto').checked,destaque:$('#destaque-produto').checked};
  if(!linkSeguro(p.href)||!linkSeguro(p.imagem,true)){$('#erro-editor').textContent='Use um link HTTPS e uma imagem HTTPS ou em img/.';return;}
  if(p.ativo&&bloqueado(p)){$('#erro-editor').textContent='Este link foi confirmado como indisponível. Atualize o link ou pause o anúncio.';return;}
  const c={};for(const [campo,id] of Object.entries({preco:'preco-produto',comissao:'comissao-produto',percentual:'percentual-produto',tipo:'tipo-comissao',conferido_em:'data-comissao',fonte:'fonte-comissao',observacoes:'notas-comissao'}))c[campo]=$('#'+id).value||null;
  $('#salvar-produto').disabled=true;$('#erro-editor').textContent='';
  try{await api('rpc/admin_salvar_produto',{method:'POST',body:JSON.stringify({p_categoria:$('#categoria-produto').value,p_href_original:selecionado?.produto.href||'',p_produto:p,p_comissao:c,p_versao:versao})});
    $('#editor-produto').hidden=true;await carregar();mensagem('Anúncio salvo. O site recebe a alteração ao abrir ou recarregar as páginas.');
  }catch(e){$('#erro-editor').textContent=e.message;}finally{$('#salvar-produto').disabled=false;}
});
$('#form-login').addEventListener('submit',async e=>{e.preventDefault();$('#login-botao').disabled=true;$('#login-erro').textContent='';try{
  const r=await fetch(URL_BASE+'/auth/v1/token?grant_type=password',{method:'POST',headers:{apikey:CHAVE,'Content-Type':'application/json'},body:JSON.stringify({email:$('#login-email').value.trim(),password:$('#login-senha').value})});const d=await r.json();
  if(!r.ok||d.user?.email!=='erwinklein1994@gmail.com')throw Error('Confira seu e-mail e senha de administrador.');
  sessionStorage.setItem(SESSAO,JSON.stringify({token:d.access_token,expira:Date.now()+d.expires_in*1000,email:d.user.email}));$('#login-senha').value='';abrir();
}catch(e){$('#login-erro').textContent=e.message;}finally{$('#login-botao').disabled=false;}});
function abrir(){$('#tela-login').hidden=true;$('#tela-dashboard').hidden=false;try{localStorage.setItem('usp_nao_contar','1');}catch{}carregar();}
$('#botao-sair').onclick=sair;
$('#botao-tema').onclick=()=>{const t=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=t;try{localStorage.setItem('theme',t);}catch{}};
$('#atualizar-produtos').onclick=()=>{if(!$('#editor-produto').hidden){mensagem('Feche o editor antes de atualizar, para preservar as alterações em andamento.',true);return;}carregar();};
$('#novo-produto').onclick=()=>editar();$('#cancelar-produto').onclick=()=>{$('#editor-produto').hidden=true;selecionado=null;};
for(const id of ['busca-produto','categoria-filtro','status-filtro','quantidade-vendas'])$('#'+id).addEventListener('input',renderizar);
if(sessao())abrir();
