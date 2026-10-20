import { lerSelecaoShopee, chaveShopee } from './admin-shopee-modelo.js';
import { diaSP } from './admin-analytics.js';
import { dinheiro } from './admin-produtos-modelo.js';
export function montarSelecaoShopee({ listarAtuais, revisar, preparar }) {
  const $ = id => document.getElementById(id);
  $('shopee-importar').addEventListener('click', () => {
    try {
      const itens = lerSelecaoShopee($('shopee-selecao').value, diaSP());
      const lista = $('shopee-lista'); lista.replaceChildren();
      for (const item of itens) {
        const card = document.createElement('article'); card.className = 'shopee-item';
        const nome = document.createElement('h3'); nome.textContent = item.titulo;
        const resumo = document.createElement('p'); resumo.textContent = `${dinheiro(item.preco)} · Comissão: ${dinheiro(item.comissao)}${item.percentual == null ? '' : ' · ' + item.percentual + '%'} · Conferido em ${item.conferido_em.split('-').reverse().join('/')}`;
        const link = document.createElement('a'); link.href = item.href; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.textContent = 'Conferir link de afiliado ↗';
        const acao = document.createElement('button'); acao.type = 'button'; acao.className = 'btn-suave'; acao.textContent = 'Revisar anúncio';
        acao.addEventListener('click', () => {
          try {
            const existente = listarAtuais().find(atual => chaveShopee(atual.produto.href) === chaveShopee(item.href));
            if (existente) { revisar(existente); $('shopee-estado').textContent = 'Este link já está cadastrado. Abri o anúncio existente para evitar duplicação.'; }
            else { preparar(item); $('shopee-estado').textContent = 'Anúncio preparado no editor, com publicação desmarcada. Revise e salve para cadastrar.'; }
          } catch (e) { $('shopee-estado').textContent = e.message; }
        });
        card.append(nome, resumo, link, acao); lista.append(card);
      }
      $('shopee-estado').textContent = itens.length + ' produto(s) pronto(s) para revisão. Nenhum anúncio foi salvo ou publicado.';
    } catch (e) { $('shopee-lista').replaceChildren(); $('shopee-estado').textContent = e.message; }
  });
}
