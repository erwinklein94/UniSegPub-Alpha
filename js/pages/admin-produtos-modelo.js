export const categorias = {produtosFisicos:'Equipamentos',cursosGerais:'Cursos gerais',cursosPmesp:'Cursos PMESP',cursosPcsp:'Cursos PCSP',livrosEbooks:'Livros e digitais'};
export const dinheiro = valor => valor == null ? 'Não informado' : Number(valor).toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
export function ganho(comissao) {
  if (!comissao) return null;
  if (comissao.comissao != null) return Number(comissao.comissao);
  if (comissao.preco != null && comissao.percentual != null) return Math.round(Number(comissao.preco)*Number(comissao.percentual))/100;
  return null;
}
export function legendaGanho(c) {
  const valor=ganho(c);
  if(valor==null) return 'Não informado';
  return `${c?.comissao == null ? 'Estimativa: ' : c.tipo==='maxima' ? 'Até ' : c.tipo==='estimada' ? 'Estimativa: ' : ''}${dinheiro(valor)}`;
}
export function listar(catalogo,comissoes) {
  return Object.keys(categorias).flatMap(categoria=>(catalogo[categoria]||[]).map(produto=>({categoria,produto,comissao:comissoes.find(c=>c.categoria===categoria&&c.href===produto.href)})));
}
export function linkSeguro(valor,imagem=false) {
  if(imagem && /^img\/[\w./ -]+$/.test(valor) && !valor.includes('..')) return true;
  try {const u=new URL(valor);return u.protocol==='https:' && !u.username && !u.password;} catch{return false;}
}
export const chaveSimulacao = item => JSON.stringify([item.categoria,item.produto.href]);
export function somarSimulacao(itens,quantidades) {
  let centavos=0,vendas=0,semComissao=0,produtos=0;
  for(const item of itens){
    const q=Number(quantidades[chaveSimulacao(item)]||0);
    if(!Number.isInteger(q)||q<1||q>100000)continue;
    vendas+=q;produtos++;
    const valor=ganho(item.comissao);
    if(valor==null)semComissao+=q;
    else centavos+=Math.round(valor*100)*q;
  }
  return {total:centavos/100,vendas,semComissao,produtos};
}
