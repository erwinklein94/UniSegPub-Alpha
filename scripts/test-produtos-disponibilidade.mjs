import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const audit=JSON.parse(fs.readFileSync('data/produtos/auditoria-links-2026-10-18.json','utf8'));
const window={};
vm.runInNewContext(fs.readFileSync('js/services/produtos-disponibilidade.js','utf8'),{window,URL});
const {permitido}=window.UNISEGPUB_LINKS_PRODUTOS;

test('todos os sete produtos confirmados como removidos são bloqueados, inclusive no cache antigo',()=>{
  const removidos=audit.links.filter(l=>l.situacao==='removido_do_site'&&!l.url_afiliado.includes('SEU_LINK'));
  assert.equal(removidos.length,7);
  for(const l of removidos){
    assert.equal(permitido(l.url_afiliado),false,l.produto);
    assert.equal(permitido(l.url_afiliado+'?utm_source=cache_antigo'),false);
    assert.equal(permitido(l.url_afiliado+'/'),false);
  }
});
test('destinos acessíveis e verificações inconclusivas continuam disponíveis sem alterar afiliado',()=>{
  const preservados=audit.links.filter(l=>l.situacao!=='removido_do_site');
  assert.equal(preservados.length,63);
  assert.equal(preservados.filter(l=>l.situacao==='inconclusivo_preservado').length,5);
  for(const l of preservados)assert.equal(permitido(l.url_afiliado),true,l.produto);
});
test('links vazios, exemplos de afiliado e protocolos executáveis não viram anúncio',()=>{
  for(const href of ['',null,'#','javascript:alert(1)','data:text/html,x','https://go.hotmart.com/SEU_LINK_AFILIADO_AQUI'])assert.equal(permitido(href),false);
});
test('blocos publicados sem link real foram retirados do guia e dos nove artigos',()=>{
  const arquivos=fs.readdirSync('artigos').filter(f=>f.endsWith('.html')).map(f=>'artigos/'+f).concat('guia-instituicoes.html');
  for(const file of arquivos){
    const src=fs.readFileSync(file,'utf8');
    assert.ok(!/<a\b[^>]+SEU_LINK_AFILIADO_AQUI/.test(src),file);
  }
});
test('o filtro é carregado antes dos renderizadores em todas as vitrines dinâmicas',()=>{
  for(const file of ['produtos.html','base-legal.html','poderes-deveres.html','partials/pages/produtos/post-main.html']){
    const src=fs.readFileSync(file,'utf8');
    assert.ok(src.indexOf('js/services/produtos-disponibilidade.js')>=0,file);
    assert.ok(src.indexOf('js/services/produtos-disponibilidade.js')<src.search(/js\/pages\/produtos-(render|laterais)\.js/),file);
  }
});
