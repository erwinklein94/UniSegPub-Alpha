import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { criarHandler, autorizacao, filtrosOfertas, normalizarOferta, urlProduto } from '../supabase/functions/shopee-integration/handler.js';
const agora = 1792526400000;
const oferta = { itemId: 22497773735, shopId: 1345043704, productName: 'Mochila', imageUrl: 'https://down-br.img.susercontent.com/a.webp', sales: 70000, ratingStar: '4.8', priceMin: '107.98', priceMax: '120.00', commissionRate: '0.08', commission: '8.64', shopName: 'Loja' };
const respostaOfertas = { data: { productOfferV2: { nodes: [oferta], pageInfo: { page: 1, limit: 20, hasNextPage: true } } } };
function fixture(opcoes = {}) {
  const chamadas = [], env = { SUPABASE_URL: 'https://supabase.test', SUPABASE_SERVICE_ROLE_KEY: 'server-key', SHOPEE_APP_ID: '123456', SHOPEE_APP_SECRET: 'private-secret', ...opcoes.env };
  const handler = criarHandler({ env: nome => env[nome], agora: () => agora, fetch: async (url, init) => {
    chamadas.push({ url, init });
    if (url.includes('/auth/v1/user')) return Response.json(opcoes.usuario ?? { id: 'admin-id', email_confirmed_at: '2026-01-01', user_metadata: {} }, { status: opcoes.authStatus || 200 });
    if (url.includes('/hotmart_admins?')) return Response.json(opcoes.membros ?? [{ user_id: 'admin-id' }], { status: opcoes.membrosStatus || 200 });
    if (opcoes.falhar) throw Error('private-secret erro upstream');
    return Response.json(opcoes.resposta ?? respostaOfertas, { status: opcoes.status || 200 });
  } });
  const consultar = async (rota = 'ofertas?busca=mochila&ordem=2&pagina=1', init = {}) => {
    const r = await handler(new Request('https://server.test/shopee-integration/' + rota, { ...init, headers: { Authorization: 'Bearer token-admin', Origin: 'https://universosegpub.com.br', ...init.headers } }));
    return { r, dados: r.status === 204 ? null : await r.json() };
  };
  return { handler, consultar, chamadas };
}
test('SHA256 assina AppID, timestamp, corpo exato e Secret, sem HMAC', async () => {
  const corpo = JSON.stringify({ query: '{productOfferV2(keyword:"ação"){nodes{itemId}}}' });
  const timestamp = Math.floor(agora / 1000), esperado = createHash('sha256').update('123456' + timestamp + corpo + 'private-secret').digest('hex');
  assert.equal(await autorizacao('123456', 'private-secret', corpo, agora), `SHA256 Credential=123456, Timestamp=${timestamp}, Signature=${esperado}`);
});
test('só consulta Shopee após validar sessão e allowlist, nunca por metadata', async () => {
  for (const opcoes of [{ authStatus: 401 }, { usuario: { id: 'admin-id' } }, { membros: [] }, { membros: [], usuario: { id: 'admin-id', email_confirmed_at: 'sim', user_metadata: { role: 'admin' } } }]) {
    const f = fixture(opcoes), { r } = await f.consultar();
    assert.ok([401, 403].includes(r.status)); assert.ok(f.chamadas.every(c => !c.url.includes('shopee')));
  }
  const f = fixture({ membrosStatus: 500 }); assert.equal((await f.consultar()).r.status, 503);
});
test('rejeita origem, rotas e métodos indevidos e aceita preflight sem consultar dados', async () => {
  const f = fixture();
  assert.equal((await f.consultar('ofertas', { headers: { Origin: 'https://evil.test' } })).r.status, 403);
  assert.equal((await f.consultar('graphql')).r.status, 404);
  assert.equal((await f.consultar('ofertas', { method: 'POST' })).r.status, 405);
  assert.equal((await f.consultar('conexao', { headers: { Authorization: '' } })).r.status, 401);
  const { r } = await f.consultar('conexao', { method: 'OPTIONS' }); assert.equal(r.status, 204);
  assert.equal(r.headers.get('access-control-allow-origin'), 'https://universosegpub.com.br'); assert.equal(f.chamadas.length, 0);
});
test('sem credenciais responde pendência e não faz chamada fictícia à Shopee', async () => {
  const f = fixture({ env: { SHOPEE_APP_SECRET: '' } }); const { r, dados } = await f.consultar('conexao');
  assert.equal(r.status, 503); assert.equal(dados.codigo, 'CONFIGURACAO_PENDENTE'); assert.equal(f.chamadas.length, 2);
});
test('pesquisa assinada preserva limites, ordenação e valores sem expor segredos', async () => {
  const f = fixture(); const { r, dados } = await f.consultar();
  assert.equal(r.status, 200); assert.equal(r.headers.get('cache-control'), 'no-store');
  assert.equal(dados.itens[0].percentual, 8); assert.equal(dados.itens[0].tipo, 'maxima'); assert.equal(dados.itens[0].vendas, 70000);
  assert.equal(dados.itens[0].produto, 'https://shopee.com.br/product/1345043704/22497773735'); assert.equal(dados.temProxima, true);
  const c = f.chamadas.at(-1); assert.equal(c.url, 'https://open-api.affiliate.shopee.com.br/graphql');
  assert.match(JSON.parse(c.init.body).query, /sortType:2,page:1,limit:20/);
  assert.equal(c.init.headers.Authorization, await autorizacao('123456', 'private-secret', c.init.body, agora));
  assert.equal(c.init.redirect, 'error'); assert.ok(!JSON.stringify(dados).includes('private-secret'));
});
test('conexão exige consulta real bem sucedida e não apenas presença de Secrets', async () => {
  const f = fixture(); const { dados } = await f.consultar('conexao');
  assert.equal(dados.conectado, true); assert.equal(f.chamadas.length, 3); assert.match(f.chamadas.at(-1).init.body, /limit:1/);
});
test('valida busca, páginas e ordenação e escapa texto para não injetar GraphQL', async () => {
  for (const params of ['', '?busca=x&pagina=0', '?busca=x&pagina=101', '?busca=x&ordem=99', '?busca=' + 'a'.repeat(101), '?busca=%00']) assert.throws(() => filtrosOfertas(new URL('https://test/ofertas' + params)));
  const palavra = 'x"){evil{secret}}#'; const f = fixture();
  await f.consultar('ofertas?' + new URLSearchParams({ busca: palavra }));
  assert.ok(JSON.parse(f.chamadas.at(-1).init.body).query.includes('keyword:' + JSON.stringify(palavra) + ',sortType:2'));
});
test('gera link somente para produto oficial, com subId e link curto validado', async () => {
  const f = fixture({ resposta: { data: { generateShortLink: { shortLink: 'https://shope.ee/AbCd123' } } } });
  const { r, dados } = await f.consultar('link', { method: 'POST', body: JSON.stringify({ produto: 'https://shopee.com.br/product/123/456' }) });
  assert.equal(r.status, 200); assert.equal(dados.href, 'https://shope.ee/AbCd123');
  assert.match(JSON.parse(f.chamadas.at(-1).init.body).query, /generateShortLink\(input:\{originUrl:"https:\/\/shopee.com.br\/product\/123\/456",subIds:\["universosegpub"\]/);
});
test('não permite proxy arbitrário, URLs falsas ou resposta de link maliciosa', async () => {
  for (const url of ['https://evil.test/product/1/2', 'https://shopee.com.br.evil.test/product/1/2', 'http://shopee.com.br/product/1/2', 'https://x@shopee.com.br/product/1/2', 'https://shopee.com.br/product/1/2?url=evil', 'https://shopee.com.br:8080/product/1/2']) assert.throws(() => urlProduto(url));
  const f = fixture(); assert.equal((await f.consultar('link', { method: 'POST', body: 'x'.repeat(4097) })).r.status, 400); assert.equal(f.chamadas.length, 2);
  const g = fixture({ resposta: { data: { generateShortLink: { shortLink: 'https://evil.test/key' } } } });
  assert.equal((await g.consultar('link', { method: 'POST', body: JSON.stringify({ produto: 'https://shopee.com.br/product/1/2' }) })).r.status, 503);
});
test('erros GraphQL HTTP 200, inclusive parciais, não confirmam sucesso nem vazam mensagens', async () => {
  for (const [code, status] of [[10020, 502], [10030, 429], [10035, 502], [10010, 502]]) {
    const f = fixture({ resposta: { ...respostaOfertas, errors: [{ message: 'private-secret', extensions: { code } }] } }); const { r, dados } = await f.consultar();
    assert.equal(r.status, status); assert.equal(dados.itens, undefined); assert.ok(!JSON.stringify(dados).includes('private-secret'));
  }
  assert.equal((await fixture({ status: 429 }).consultar()).r.status, 429);
  assert.equal((await fixture({ falhar: true }).consultar()).r.status, 503);
});
test('respostas inválidas não corrompem identificadores nem inventam valores', async () => {
  for (const patch of [{ itemId: Number.MAX_SAFE_INTEGER + 1 }, { imageUrl: 'javascript:alert(1)' }, { commissionRate: '80' }, { sales: -1 }, { ratingStar: '6' }]) assert.throws(() => normalizarOferta({ ...oferta, ...patch }));
  assert.equal(normalizarOferta({ ...oferta, commission: null, sales: null }).comissao, null);
  assert.equal((await fixture({ resposta: {} }).consultar()).r.status, 503);
});
