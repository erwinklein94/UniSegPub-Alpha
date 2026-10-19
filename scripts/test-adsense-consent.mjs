import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const privacy = fs.readFileSync(new URL('../js/ui/cookie-consent.js', import.meta.url), 'utf8');
const ads = fs.readFileSync(new URL('../js/ui/adsense.js', import.meta.url), 'utf8');
function environment({ stored = null, blocked = false, hostname = 'universosegpub.com.br', pathname = '/', mode = 'auto', robots = [], redirect = false } = {}) {
  const listeners = {}, scripts = [];
  const storage = new Map(stored ? [['usp_consent_v2', JSON.stringify(stored)]] : [['uniseg_cookie_notice_v1', 'ok']]);
  let reloads = 0;
  const doc = { readyState: 'loading', cookie: '', addEventListener() {},
    querySelector(selector) {
      if (selector === 'meta[name="usp-adsense"]') return { content: mode };
      if (selector === 'meta[http-equiv="refresh"]') return redirect ? {} : null;
      return scripts.find(s => s.attributes['data-usp-adsense'] !== undefined) || null;
    }, querySelectorAll() { return robots.map(content => ({ content })); },
    createElement() { return { attributes: {}, setAttribute(k, v) { this.attributes[k] = v; } }; },
    head: { appendChild(s) { scripts.push(s); } }
  };
  const window = { document: doc, location: { hostname, pathname, reload() { reloads++; } },
    CustomEvent: class { constructor(type, options) { this.type = type; this.detail = options.detail; } },
    sessionStorage: { removeItem() {} },
    localStorage: { getItem(k) { if (blocked) throw Error('blocked'); return storage.get(k) || null; } },
    addEventListener(name, callback) { (listeners[name] ||= []).push(callback); },
    dispatchEvent(event) { for (const callback of listeners[event.type] || []) callback(event); }
  };
  const context = vm.createContext({ window, Date });
  vm.runInContext(privacy, context);
  vm.runInContext(ads, context);
  return { window, context, scripts, storage, get reloads() { return reloads; } };
}
const stored = (analytics = true, advertising = true) => ({ version: 2, savedAt: Date.now(), analytics, advertising });

test('o antigo Entendi não autoriza anúncios nem análise; padrão Google é negado', () => {
  const a = environment();
  assert.equal(a.window.USPConsent.get().advertising, false);
  assert.equal(a.window.USPConsent.get().analytics, false);
  assert.equal(a.scripts.length, 0);
  assert.equal(a.window.dataLayer[0][0], 'consent');
  assert.equal(a.window.dataLayer[0][1], 'default');
  assert.equal(a.window.dataLayer[0][2].ad_storage, 'denied');
});

test('preferências inválidas, futuras, expiradas ou storage bloqueado mantêm tags desligadas', () => {
  for (const options of [{ blocked: true }, { stored: { ...stored(), version: 1 } },
    { stored: { ...stored(), advertising: 'true' } }, { stored: { ...stored(), savedAt: Date.now() + 60000 } },
    { stored: { ...stored(), savedAt: Date.now() - 181 * 86400000 } }]) {
    const a = environment(options);
    assert.equal(a.scripts.length, 0);
    assert.equal(a.window.USPConsent.get().advertising, false);
  }
});

test('análise e publicidade têm permissões independentes', () => {
  assert.equal(environment({ stored: stored(true, false) }).scripts.length, 0);
  const a = environment({ stored: stored(false, true) });
  assert.equal(a.scripts.length, 1);
  assert.equal(a.window.USPConsent.get().analytics, false);
  assert.equal(a.window.adsbygoogle.requestNonPersonalizedAds, 1);
  assert.equal(a.scripts[0].attributes['data-privacy-treatments'], 'disablePersonalization');
  assert.match(a.scripts[0].src, /client=ca-pub-4280112532471663$/);
});

test('consentimento e script repetidos não duplicam a integração', () => {
  const a = environment({ stored: stored() });
  vm.runInContext(ads, a.context);
  a.window.dispatchEvent({ type: 'usp:consent-change' });
  assert.equal(a.scripts.length, 1);
});

test('não solicita anúncios em localhost, áreas administrativas, erro, políticas ou páginas comerciais', () => {
  for (const pathname of ['/404.html','/admin.html','/admin-produtos.html','/cookies.html','/termos.html',
    '/privacidade.html','/produtos.html','/anuncie.html','/sobre.html','/contato.html','/parceiros.html','/relatorio-concursos.html']) {
    assert.equal(environment({ stored: stored(), pathname }).scripts.length, 0, pathname);
  }
  assert.equal(environment({ stored: stored(), hostname: 'localhost' }).scripts.length, 0);
  assert.equal(environment({ stored: stored(), mode: 'off' }).scripts.length, 0);
  assert.equal(environment({ stored: stored(), robots: ['noindex, follow','index, follow'] }).scripts.length, 0);
  assert.equal(environment({ stored: stored(), redirect: true }).scripts.length, 0);
});

test('revogar em outra aba limpa a sessão e recarrega para encerrar scripts anteriores', () => {
  const a = environment({ stored: stored() });
  a.storage.set('usp_consent_v2', JSON.stringify(stored(false, false)));
  a.window.dispatchEvent({ type: 'storage', key: 'usp_consent_v2' });
  assert.equal(a.window.USPConsent.get().advertising, false);
  assert.equal(a.reloads, 1);
});

test('HTML público tem verificação estática, carregamento condicionado e nenhum slot de exemplo', () => {
  const root = new URL('../', import.meta.url);
  const pages = ['.', 'artigos', 'novidades'].flatMap(dir => fs.readdirSync(new URL(dir + '/', root))
    .filter(p => p.endsWith('.html')).map(p => new URL(dir + '/' + p, root)));
  for (const path of pages) {
    if (/\/(admin[^/]*|relatorio-concursos)\.html$/.test(path.pathname)) continue;
    const html = fs.readFileSync(path, 'utf8');
    assert.doesNotMatch(html, /<script[^>]*src=["']https:\/\/(?:pagead2\.googlesyndication|www\.googletagmanager)/, path.pathname);
    assert.doesNotMatch(html, /SUBSTITUIR_SLOT|data-ad-slot|adsbygoogle\s*=/, path.pathname);
    assert.match(html, /name="google-adsense-account" content="ca-pub-4280112532471663"/, path.pathname);
    assert.equal((html.match(/src="[^"\n]*cookie-consent\.js/g) || []).length, 1, path.pathname);
    assert.ok(html.indexOf('cookie-consent.js') < html.indexOf('analytics.js'), path.pathname);
    if (!/http-equiv="refresh"/i.test(html)) {
      assert.match(html, /<footer\b/, path.pathname);
      assert.match(html, /href="\/?(?:\.\.\/)?sobre\.html"/, path.pathname);
      assert.match(html, /href="\/?(?:\.\.\/)?privacidade\.html"/, path.pathname);
    }
  }
  assert.equal(fs.readFileSync(new URL('../ads.txt', import.meta.url), 'utf8').trim(),
    'google.com, pub-4280112532471663, DIRECT, f08c47fec0942fa0');
  const sitemap = fs.readFileSync(new URL('../sitemap.xml', import.meta.url), 'utf8');
  assert.doesNotMatch(sitemap, /\/(?:noticias|relatorio-concursos|admin[^<]*)\.html/);
  assert.match(sitemap, /\/sobre\.html/);
  assert.match(sitemap, /\/contato\.html/);
});
