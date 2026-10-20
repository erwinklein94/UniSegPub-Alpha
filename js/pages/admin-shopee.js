import { lerSelecaoShopee, chaveShopee } from './admin-shopee-modelo.js?v=20261020api1';
import { diaSP } from './admin-analytics.js';
import { dinheiro } from './admin-produtos-modelo.js';
export function montarSelecaoShopee({ listarAtuais, revisar, preparar, sessao, aoExpirar }) {
  const $ = id => document.getElementById(id);
  let ocupado = false, pagina = 1, consulta = null, geracao = 0, controle;
  const estado = texto => { $('shopee-estado').textContent = texto; };
  const botoes = () => $('shopee-titulo').closest('section').querySelectorAll('button');
  function editar(item) {
    const existente = listarAtuais().find(atual => chaveShopee(atual.produto.href) && chaveShopee(atual.produto.href) === chaveShopee(item.href));
    if (existente) { revisar(existente); estado('Este link já está cadastrado. Abri o anúncio existente para evitar duplicação.'); }
    else { preparar(item); estado('Anúncio preparado no editor, com publicação desmarcada. Revise e salve para cadastrar.'); }
  }
  async function chamar(rota, opcoes = {}) {
    const s = sessao();
    if (!s) { aoExpirar(); throw Error('Sua sessão expirou. Entre novamente.'); }
    const r = await fetch('https://luggjibketdxztvsgzgo.supabase.co/functions/v1/shopee-integration/' + rota, {
      ...opcoes, signal: controle.signal, cache: 'no-store', headers: { apikey: 'sb_publishable_onaOo8uMyySc3KWf6D6Jfg_OMT6wqcX', Authorization: 'Bearer ' + s.token, 'Content-Type': 'application/json' }
    });
    const dados = await r.json();
    if (r.status === 401) aoExpirar();
    if (!r.ok) throw Error(dados.erro || 'Não foi possível consultar a Shopee. Tente novamente.');
    return dados;
  }
  async function executar(tarefa) {
    if (ocupado) return;
    ocupado = true; controle = new AbortController(); const atual = geracao;
    for (const b of botoes()) b.disabled = true;
    try { await tarefa(); }
    catch (e) { if (atual === geracao) estado(e.name === 'AbortError' ? 'Consulta interrompida.' : e.message); }
    finally { if (atual === geracao) { ocupado = false; for (const b of botoes()) b.disabled = false; atualizarPaginacao(); } }
  }
  let temProxima = false;
  function atualizarPaginacao() {
    $('shopee-anterior').disabled = ocupado || pagina <= 1;
    $('shopee-proxima').disabled = ocupado || !temProxima;
  }
  function jaCadastrado(item) {
    return listarAtuais().find(atual => {
      try { const fonte = new URL(atual.comissao?.fonte); return fonte.href === item.produto || (fonte.hostname === 'affiliate.shopee.com.br' && fonte.pathname === '/offer/product_offer/' + item.itemId); } catch { return false; }
    });
  }
  async function buscar(numero, filtros = consulta) {
    estado('Consultando ofertas na Shopee…');
    const atual = geracao;
    const dados = await chamar('ofertas?' + new URLSearchParams({ ...filtros, pagina: numero }));
    if (atual !== geracao) return;
    consulta = filtros; pagina = dados.pagina; temProxima = dados.temProxima;
    $('shopee-paginacao').hidden = false; $('shopee-pagina').textContent = 'Página ' + pagina;
    const lista = $('shopee-lista'); lista.replaceChildren();
    for (const item of dados.itens) {
      const card = document.createElement('article'); card.className = 'shopee-item';
      const img = document.createElement('img'); img.src = item.imagem; img.alt = ''; img.loading = 'lazy'; img.referrerPolicy = 'no-referrer';
      const nome = document.createElement('h3'); nome.textContent = item.titulo;
      const resumo = document.createElement('p'); resumo.textContent = `${dinheiro(item.preco)}${item.precoMax != null && item.precoMax !== item.preco ? ' a ' + dinheiro(item.precoMax) : ''} · ${item.vendas == null ? 'Vendas não informadas' : item.vendas.toLocaleString('pt-BR') + ' vendas (total informado pela Shopee)'} · Avaliação: ${item.avaliacao ?? 'não informada'}`;
      const comissao = document.createElement('p'); comissao.textContent = `Comissão máxima: ${dinheiro(item.comissao)}${item.percentual == null ? '' : ' · ' + item.percentual + '%'}. Confirme as condições para divulgação no site.`;
      const link = document.createElement('a'); link.href = item.produto; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.textContent = 'Conferir produto na Shopee ↗';
      const b = document.createElement('button'); b.type = 'button'; b.className = 'btn-suave'; b.textContent = 'Selecionar e revisar';
      // Mantém o primeiro link gerado para não criar outro ao reabrir o mesmo resultado.
      let href;
      b.onclick = () => executar(async () => {
        const existente = jaCadastrado(item);
        if (existente) { revisar(existente); estado('Produto já cadastrado. Abri o anúncio existente e preservei seu link de afiliado.'); return; }
        estado('Gerando link de afiliado na Shopee…');
        const atual = geracao;
        href ||= (await chamar('link', { method: 'POST', body: JSON.stringify({ produto: item.produto }) })).href;
        if (atual !== geracao) return;
        editar({ ...item, href, fonte: item.produto, categoria: 'produtosFisicos', conferido_em: diaSP(), descricao: '', observacoes: 'Comissão máxima retornada pela API Shopee; não confirma a taxa do canal externo/Redes sociais. Confira condições, preço e disponibilidade antes de publicar.' });
      });
      card.append(img, nome, resumo, comissao, link, b); lista.append(card);
    }
    estado(`${dados.itens.length} oferta(s). Consulta em ${new Date(dados.consultadoEm).toLocaleString('pt-BR')}. Nenhum anúncio foi salvo. Preços e comissões podem mudar.`);
  }
  $('shopee-verificar').onclick = () => executar(async () => {
    estado('Verificando a conexão com uma consulta à Shopee…'); const atual = geracao;
    const d = await chamar('conexao'); if (atual === geracao) estado(d.mensagem);
  });
  $('shopee-busca-form').onsubmit = e => {
    e.preventDefault(); if (ocupado || !$('shopee-busca-form').reportValidity()) return;
    const filtros = { busca: $('shopee-busca').value.trim(), ordem: $('shopee-ordem').value };
    executar(() => buscar(1, filtros));
  };
  for (const b of document.querySelectorAll('[data-shopee-busca]')) b.onclick = () => { $('shopee-busca').value = b.dataset.shopeeBusca; $('shopee-ordem').value = '2'; $('shopee-busca-form').requestSubmit(); };
  $('shopee-anterior').onclick = () => executar(() => buscar(pagina - 1));
  $('shopee-proxima').onclick = () => executar(() => buscar(pagina + 1));
  $('shopee-importar').addEventListener('click', () => {
    try {
      const itens = lerSelecaoShopee($('shopee-selecao').value, diaSP());
      $('shopee-paginacao').hidden = true; temProxima = false;
      const lista = $('shopee-lista'); lista.replaceChildren();
      for (const item of itens) {
        const card = document.createElement('article'); card.className = 'shopee-item';
        const nome = document.createElement('h3'); nome.textContent = item.titulo;
        const resumo = document.createElement('p'); resumo.textContent = `${dinheiro(item.preco)} · Comissão: ${dinheiro(item.comissao)}${item.percentual == null ? '' : ' · ' + item.percentual + '%'} · Conferido em ${item.conferido_em.split('-').reverse().join('/')}`;
        const link = document.createElement('a'); link.href = item.href; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.textContent = 'Conferir link de afiliado ↗';
        const acao = document.createElement('button'); acao.type = 'button'; acao.className = 'btn-suave'; acao.textContent = 'Revisar anúncio';
        acao.addEventListener('click', () => {
          try {
            editar(item);
          } catch (e) { $('shopee-estado').textContent = e.message; }
        });
        card.append(nome, resumo, link, acao); lista.append(card);
      }
      $('shopee-estado').textContent = itens.length + ' produto(s) pronto(s) para revisão. Nenhum anúncio foi salvo ou publicado.';
    } catch (e) { $('shopee-lista').replaceChildren(); $('shopee-estado').textContent = e.message; }
  });
  return { limpar() { geracao++; controle?.abort(); ocupado = false; consulta = null; pagina = 1; temProxima = false; $('shopee-lista').replaceChildren(); $('shopee-paginacao').hidden = true; for (const b of botoes()) b.disabled = false; atualizarPaginacao(); } };
}
