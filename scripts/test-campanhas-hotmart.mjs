import test from 'node:test';
import assert from 'node:assert/strict';
import '../js/services/campanhas-hotmart.js';
const { campanha } = globalThis.UNISEGPUB_CAMPANHAS;
test('preserva afiliado, oferta, fragmento e identifica página, posição e produto', () => {
  const url = new URL(campanha('https://go.hotmart.com/C105562969M?dp=1&off=abc#oferta', '/remuneracao.html', 'lat1'));
  assert.equal(url.pathname, '/C105562969M'); assert.equal(url.searchParams.get('dp'), '1');
  assert.equal(url.searchParams.get('off'), 'abc'); assert.equal(url.hash, '#oferta');
  assert.equal(url.searchParams.get('src'), 'usp|rem|lat1|c105562969m');
  assert.ok(url.searchParams.get('src').length <= 30);
});
test('página e posição distinguem campanhas e a aplicação é idempotente', () => {
  const link = 'https://go.hotmart.com/C105562969M';
  const a = campanha(link, '/produtos', 'vitr1'), b = campanha(link, '/concursos.html', 'mob1');
  assert.notEqual(a, b); assert.equal(campanha(a, '/produtos', 'vitr1'), a);
  assert.equal(campanha(link + '?SRC=anterior', '/', 'out'), link + '?SRC=anterior');
});
test('não altera outras plataformas, links inválidos ou domínios parecidos', () => {
  for (const link of ['https://s.shopee.com.br/abc', 'https://go.hotmart.com.evil.test/ABC', 'javascript:alert(1)', 'https://pay.hotmart.com/ABC', 'inválido']) assert.equal(campanha(link, '/', 'out'), link);
});
