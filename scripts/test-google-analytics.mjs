import test from 'node:test';
import assert from 'node:assert/strict';
import { criarHandler, validarFiltros, criarRelatorios, normalizarRelatorio } from '../supabase/functions/google-analytics/handler.js';
import { preencherDias, graficoDiario } from '../js/pages/admin-google-analytics-modelo.js';

const url = query => new URL('https://example.test/google-analytics?' + query);
const query = 'inicio=2026-10-01&fim=2026-10-20';
const req = (auth = true, origin = 'https://universosegpub.com.br', qs = query) => new Request(url(qs), { headers: { ...(auth ? { Authorization: 'Bearer usuario' } : {}), Origin: origin } });
const json = (body, status = 200) => new Response(JSON.stringify(body), { status });
const valores = { SUPABASE_URL: 'https://project.test', SUPABASE_SERVICE_ROLE_KEY: 'server-only' };
function ambiente({ membro = true, autenticado = true, extras = {}, google = null } = {}) {
  const chamadas = [];
  const fetch = async (url, options) => {
    chamadas.push({ url, options });
    if (url.endsWith('/auth/v1/user')) return json({ id: 'admin-id', email_confirmed_at: '2026-01-01' }, autenticado ? 200 : 401);
    if (url.includes('/hotmart_admins?')) return json(membro ? [{ user_id: 'admin-id' }] : []);
    if (google) return google(url, options);
    throw Error('Consulta externa inesperada');
  };
  return { handler: criarHandler({ env: n => ({ ...valores, ...extras })[n], fetch }), chamadas };
}
test('bloqueia origem externa, ausência de sessão, sessão inválida e não administrador antes do Google', async () => {
  const a = ambiente();
  assert.equal((await a.handler(req(true, 'https://evil.test'))).status, 403);
  assert.equal((await a.handler(req(false))).status, 401);
  assert.equal(a.chamadas.length, 0);
  const b = ambiente({ autenticado: false }); assert.equal((await b.handler(req())).status, 401);
  const c = ambiente({ membro: false }); assert.equal((await c.handler(req())).status, 403);
  assert.ok(c.chamadas.every(c => c.url.startsWith('https://project.test/')));
});
test('datas impossíveis, futuras, invertidas, intervalos excessivos e dispositivos inválidos são rejeitados', () => {
  for (const q of ['inicio=2026-02-30&fim=2026-03-01', 'inicio=2026-10-21&fim=2026-10-21', 'inicio=2026-10-20&fim=2026-10-01', 'inicio=2025-01-01&fim=2026-10-20', query + '&dispositivo=outro']) assert.throws(() => validarFiltros(url(q), '2026-10-20'));
  assert.equal(validarFiltros(url(query), '2026-10-20').inicio, '2026-10-01');
});
test('sem credencial retorna configuração pendente, nunca números simulados', async () => {
  const a = ambiente(); const r = await a.handler(req());
  assert.equal(r.status, 503); assert.equal((await r.json()).codigo, 'CONFIGURACAO_PENDENTE');
  assert.equal(a.chamadas.length, 2);
});
test('todos os cinco relatórios aplicam os filtros no Google; ranking tem limite explícito', () => {
  const f = validarFiltros(url(query + '&dispositivo=mobile&pais=Brazil&canal=Organic+Search&pagina=%2Fsalario'), '2026-10-20');
  const r = criarRelatorios(f); assert.equal(r.length, 5);
  for (const report of r) {
    assert.equal(report.dimensionFilter.andGroup.expressions.length, 5);
    assert.equal(report.dateRanges[0].endDate, '2026-10-20');
  }
  assert.equal(r[2].limit, '50');
});
test('normaliza ausência de linhas e preenche lacunas do gráfico sem somar usuários', () => {
  assert.deepEqual(normalizarRelatorio({ metricHeaders: [{ name: 'activeUsers' }] }).linhas, []);
  const dias = preencherDias([{ date: '20261002', activeUsers: 5, sessions: 8, screenPageViews: 12 }], '2026-10-01', '2026-10-03');
  assert.deepEqual(dias.map(d => d.activeUsers), [0, 5, 0]);
  const svg = graficoDiario(dias, 'activeUsers', '<script>');
  assert.ok(!svg.includes('<script>')); assert.ok(!svg.includes('NaN'));
  assert.ok(!graficoDiario([dias[0]], 'sessions', 'Sessões').includes('NaN'));
});
test('fluxo assina credencial, consulta Google a cada atualização e não expõe segredos', async () => {
  const chaves = await crypto.subtle.generateKey({ name: 'RSASSA-PKCS1-v1_5', modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: 'SHA-256' }, true, ['sign', 'verify']);
  const pem = '-----BEGIN PRIVATE KEY-----\n' + Buffer.from(await crypto.subtle.exportKey('pkcs8', chaves.privateKey)).toString('base64') + '\n-----END PRIVATE KEY-----';
  let oauth = 0, relatorios = 0;
  const a = ambiente({ extras: { GOOGLE_SERVICE_ACCOUNT_JSON: JSON.stringify({ client_email: 'service@example.test', private_key: pem }) }, google: async (url, options) => {
    if (url.includes('oauth2.googleapis.com')) {
      oauth++; const jwt = options.body.get('assertion').split('.');
      const claims = JSON.parse(Buffer.from(jwt[1], 'base64url'));
      assert.equal(claims.scope, 'https://www.googleapis.com/auth/analytics.readonly');
      assert.ok(await crypto.subtle.verify('RSASSA-PKCS1-v1_5', chaves.publicKey, Buffer.from(jwt[2], 'base64url'), new TextEncoder().encode(jwt[0] + '.' + jwt[1])));
      return json({ access_token: 'google-secret-token', expires_in: 3600 });
    }
    relatorios++; assert.ok(url.endsWith('/properties/534532275:batchRunReports'));
    const queries = JSON.parse(options.body).requests;
    return json({ reports: queries.map(q => ({ dimensionHeaders: q.dimensions, metricHeaders: q.metrics, rows: [], rowCount: 0, metadata: { timeZone: 'America/Sao_Paulo' } })) });
  } });
  for (let i = 0; i < 2; i++) {
    const r = await a.handler(req()); assert.equal(r.status, 200);
    assert.equal(r.headers.get('cache-control'), 'no-store');
    const body = await r.text(); assert.ok(body.includes('Google Analytics Data API'));
    assert.ok(!body.includes('google-secret-token')); assert.ok(!body.includes('PRIVATE KEY')); assert.ok(!body.includes('server-only'));
  }
  assert.equal(oauth, 1); assert.equal(relatorios, 2);
});
