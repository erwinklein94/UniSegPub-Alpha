import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const codigo = fs.readFileSync(new URL('../js/ui/analytics.js', import.meta.url), 'utf8');
function ambiente(hostname = 'universosegpub.com.br', pathname = '/produtos.html', consentimento = true) {
  const eventos = {}, scripts = [];
  const autorizacao = { analytics: consentimento };
  const requisicoes = [];
  const window = { location: { hostname, pathname, origin: 'https://' + hostname },
    USPConsent: { get: () => autorizacao },
    addEventListener: (nome, callback) => { eventos[nome] = callback; },
    localStorage: { getItem: () => null }, sessionStorage: { getItem: () => null, setItem: () => {} },
    crypto: { randomUUID: () => 'sessao-de-teste' },
    fetch: (...args) => { requisicoes.push(args); return Promise.resolve(); }, document: {
    referrer: 'https://origem.example/pagina?email=nao-transmitir#segredo',
    querySelector: () => null, createElement: () => ({}), head: { append: s => scripts.push(s) },
    addEventListener: (nome, callback) => { eventos[nome] = callback; }
  } };
  const context = vm.createContext({ window, URL });
  vm.runInContext(codigo, context);
  const dados = () => Array.from(window.dataLayer || [], e => Array.from(e));
  function clicar(href, tipo = 'click', button = 0) {
    const card = { querySelector: () => ({ textContent: 'Produto da vitrine' }) };
    const link = { href, closest: seletor => seletor === '.produto-card' || seletor.includes(',') ? card : null };
    eventos[tipo]?.({ type: tipo, button, target: { closest: () => link } });
  }
  return { window, context, scripts, eventos, dados, clicar, autorizacao, requisicoes };
}

test('sem consentimento não carrega GA4, não registra acessos e não mede cliques', () => {
  const a = ambiente('universosegpub.com.br', '/produtos.html', false);
  a.clicar('https://go.hotmart.com/ABC123');
  assert.equal(a.scripts.length, 0);
  assert.equal(a.requisicoes.length, 0);
  assert.equal(a.dados().filter(e => e[0] === 'event' || e[0] === 'config').length, 0);
  a.autorizacao.analytics = true;
  a.eventos['usp:consent-change']();
  a.eventos['usp:consent-change']();
  assert.equal(a.scripts.length, 1);
  assert.equal(a.requisicoes.length, 1);
  assert.equal(JSON.stringify(a.dados()).includes('nao-transmitir'), false);
  const registro = JSON.parse(a.requisicoes[0][1].body);
  assert.equal(registro.referencia, 'https://origem.example');
  a.autorizacao.analytics = false;
  a.clicar('https://go.hotmart.com/ABC123');
  assert.equal(a.dados().filter(e => e[0] === 'event').length, 0);
});
test('inicia uma única coleta e não registra conversões de venda na abertura', () => {
  const a = ambiente();
  vm.runInContext(codigo, a.context);
  assert.equal(a.scripts.length, 1);
  assert.equal(a.dados().filter(e => e[0] === 'config').length, 1);
  assert.equal(a.dados().filter(e => e[0] === 'event').length, 0);
});
test('clique identifica produto do catálogo, origem e vitrine sem preço ou receita', () => {
  const a = ambiente();
  a.window.UNISEGPUB_PRODUTOS = { cursosGerais: [{ href: 'https://go.hotmart.com/ABC123', titulo: 'Curso', comissao: 100 }] };
  a.clicar('https://go.hotmart.com/ABC123?src=campanha&email=nao-transmitir');
  const evento = a.dados().find(e => e[1] === 'select_item');
  assert.ok(evento);
  assert.equal(evento[2].send_to, 'G-M2ZJSB081C');
  assert.equal(evento[2].item_list_name, '/produtos.html:vitrine');
  assert.equal(evento[2].items[0].item_id, 'hotmart:ABC123');
  assert.equal(evento[2].items[0].item_name, 'Curso');
  assert.equal(evento[2].items[0].item_category, 'cursosGerais');
  assert.equal(evento[2].items[0].affiliation, 'Hotmart');
  assert.equal('value' in evento[2], false);
  assert.equal(JSON.stringify(evento).includes('nao-transmitir'), false);
  assert.equal(JSON.stringify(evento).includes('comissao'), false);
});
test('aceita botão do meio, ignora clique direito e domínios falsos', () => {
  const a = ambiente();
  for (const href of ['https://s.shopee.com.br.evil.test/ABC', 'http://s.shopee.com.br/ABC', 'https://u:p@s.shopee.com.br/ABC']) a.clicar(href);
  a.clicar('https://s.shopee.com.br/ABC', 'auxclick', 2);
  assert.equal(a.dados().filter(e => e[0] === 'event').length, 0);
  a.clicar('https://s.shopee.com.br/ABC', 'auxclick', 1);
  assert.equal(a.dados().filter(e => e[1] === 'select_item').length, 1);
  a.clicar('https://shope.ee/LinkAPI?sub_id=nao-transmitir');
  const ultimo = a.dados().filter(e => e[1] === 'select_item').at(-1);
  assert.equal(ultimo[2].items[0].affiliation, 'Shopee');
  assert.equal(ultimo[2].items[0].item_id, 'shopee:LinkAPI');
  assert.equal(JSON.stringify(ultimo).includes('nao-transmitir'), false);
});
test('ignora catálogo pausado, admin e ambientes de teste', () => {
  const a = ambiente();
  a.window.UNISEGPUB_PRODUTOS = { produtosFisicos: [{ href: 'https://s.shopee.com.br/ABC', ativo: false }] };
  a.clicar('https://s.shopee.com.br/ABC');
  assert.equal(a.dados().filter(e => e[0] === 'event').length, 0);
  for (const [host, path] of [['localhost', '/'], ['universosegpub.com.br', '/admin.html'], ['universosegpub.com.br', '/admin-produtos.html']]) {
    const b = ambiente(host, path);
    assert.equal(b.scripts.length, 0);
    assert.equal(b.dados().length, 0);
  }
});
