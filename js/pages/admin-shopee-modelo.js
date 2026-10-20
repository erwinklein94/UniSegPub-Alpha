/* Seleções do portal oficial: não acessa cookies nem APIs privadas da Shopee. */
export function chaveShopee(href) {
  try { const u = new URL(href); if (u.protocol !== 'https:' || u.hostname !== 's.shopee.com.br' || u.username || u.password || !/^\/[a-zA-Z0-9]+\/?$/.test(u.pathname) || u.hash) return null; return u.origin + u.pathname.replace(/\/$/, ''); } catch { return null; }
}
const texto = (v, max, nome, obrigatorio = false) => {
  if (v == null && !obrigatorio) return '';
  if (typeof v !== 'string' || v.trim().length > max || (obrigatorio && !v.trim())) throw Error('Confira o campo ' + nome + '.');
  return v.trim();
};
const numero = (v, max, nome) => {
  if (v == null || v === '') return null;
  if (typeof v !== 'number' || !Number.isFinite(v) || v < 0 || v > max) throw Error(nome + ' deve ser um número válido, sem R$ ou %.');
  return v;
};
export function lerSelecaoShopee(conteudo, hoje) {
  if (typeof conteudo !== 'string' || conteudo.length > 150000) throw Error('A seleção excede o limite de 150 mil caracteres.');
  let dados; try { dados = JSON.parse(conteudo); } catch { throw Error('A seleção não está em JSON válido. Cole os dados preparados pelo assistente.'); }
  const lista = Array.isArray(dados) ? dados : [dados];
  if (!lista.length || lista.length > 20) throw Error('Importe entre 1 e 20 produtos por seleção.');
  const vistos = new Set();
  return lista.map((item, i) => {
    if (!item || typeof item !== 'object' || Array.isArray(item)) throw Error('Produto ' + (i + 1) + ' inválido.');
    const titulo = texto(item.titulo, 200, 'nome', true), href = texto(item.href, 2048, 'link de afiliado', true);
    const chave = chaveShopee(href);
    if (!chave) throw Error('Use um link de afiliado HTTPS gerado pela Shopee em s.shopee.com.br. Um endereço comum de produto não comprova afiliação.');
    if (vistos.has(chave)) throw Error('Há links repetidos na seleção. Mantenha cada produto apenas uma vez.');
    vistos.add(chave);
    const imagem = texto(item.imagem, 2048, 'imagem', true);
    try { const u = new URL(imagem); if (u.protocol !== 'https:' || u.username || u.password) throw Error(); } catch { throw Error('A imagem deve usar uma URL HTTPS válida.'); }
    const fonte = texto(item.fonte, 1000, 'fonte', true);
    try { const u = new URL(fonte); if (u.protocol !== 'https:' || !['affiliate.shopee.com.br', 'shopee.com.br', 'www.shopee.com.br'].includes(u.hostname) || u.username || u.password) throw Error(); } catch { throw Error('Informe a página oficial da Shopee usada como fonte.'); }
    const conferido = texto(item.conferido_em, 10, 'data da conferência', true);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(conferido) || !Number.isFinite(Date.parse(conferido)) || new Date(conferido).toISOString().slice(0, 10) !== conferido || conferido > hoje) throw Error('Informe uma data de conferência válida, até hoje.');
    const categoria = item.categoria || 'produtosFisicos';
    if (!['produtosFisicos', 'livrosEbooks'].includes(categoria)) throw Error('Escolha Equipamentos ou Livros e digitais para a seleção Shopee.');
    return { titulo, href, imagem, fonte, categoria, conferido_em: conferido, descricao: texto(item.descricao, 2000, 'descrição'), preco: numero(item.preco, 9999999999.99, 'Preço'), percentual: numero(item.percentual, 100, 'Comissão percentual'), comissao: numero(item.comissao, 9999999999.99, 'Comissão em reais'), tipo: 'estimada', ativo: false, destaque: false };
  });
}
