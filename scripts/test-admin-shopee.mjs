import test from 'node:test';
import assert from 'node:assert/strict';
import { lerSelecaoShopee, chaveShopee } from '../js/pages/admin-shopee-modelo.js';
const item = { titulo: 'Produto de teste', href: 'https://s.shopee.com.br/Ab123xyz?sub_id=portal', imagem: 'https://example.test/imagem.jpg', fonte: 'https://affiliate.shopee.com.br/offer/product_offer/123', conferido_em: '2026-10-20', preco: 100, percentual: 5 };
const ler = i => lerSelecaoShopee(JSON.stringify(i), '2026-10-20');
test('preserva afiliação e prepara sem publicar nem inventar comissão', () => {
  const [p] = ler({ ...item, ativo: true, destaque: true, tipo: 'fixa' });
  assert.equal(p.href, item.href); assert.equal(p.ativo, false); assert.equal(p.destaque, false);
  assert.equal(p.tipo, 'estimada'); assert.equal(p.comissao, null); assert.equal(p.categoria, 'produtosFisicos');
});
test('bloqueia produto sem afiliação, domínios falsos, credenciais e protocolos executáveis', () => {
  for (const href of ['https://shopee.com.br/product/1/2', 'https://s.shopee.com.br.evil.test/Ab123xyz', 'https://x@s.shopee.com.br/Ab123xyz', 'http://s.shopee.com.br/Ab123xyz', 'javascript:alert(1)', 'https://s.shopee.com.br/Ab123xyz#token']) assert.throws(() => ler({ ...item, href }));
});
test('valida fonte, data, valores e categoria da seleção', () => {
  for (const patch of [{ fonte: 'https://evil.test' }, { conferido_em: '2026-02-30' }, { conferido_em: '2026-10-21' }, { preco: 'R$ 20' }, { percentual: 101 }, { comissao: -1 }, { titulo: '' }, { imagem: 'javascript:alert(1)' }, { categoria: 'invalida' }]) assert.throws(() => ler({ ...item, ...patch }));
});
test('detecta repetição entre campanhas e limita quantidade e tamanho', () => {
  assert.equal(chaveShopee(item.href), chaveShopee('https://s.shopee.com.br/Ab123xyz/?sub_id=outro'));
  assert.throws(() => ler([item, { ...item, href: 'https://s.shopee.com.br/Ab123xyz' }]));
  assert.throws(() => ler([])); assert.throws(() => ler(Array(21).fill(item)));
  assert.throws(() => lerSelecaoShopee('não é json', '2026-10-20'));
  assert.throws(() => lerSelecaoShopee('x'.repeat(150001), '2026-10-20'));
});
