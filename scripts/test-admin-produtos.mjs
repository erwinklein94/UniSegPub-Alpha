import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {ganho,legendaGanho,listar,linkSeguro} from '../js/pages/admin-produtos-modelo.js';
test('comissão desconhecida não vira zero; comissão em reais tem prioridade sobre percentual',()=>{
  assert.equal(ganho(),null);assert.equal(ganho({preco:298}),null);
  assert.equal(ganho({comissao:0}),0);
  assert.equal(ganho({preco:298,percentual:50,comissao:134}),134);
  assert.match(legendaGanho({comissao:134,tipo:'maxima'}),/^Até/);
  assert.match(legendaGanho({preco:298,percentual:50,tipo:'fixa'}),/^Estimativa/);
  assert.equal(ganho({preco:19.99,percentual:15}),3);
});
test('comissão pertence à categoria e ao Hotlink exatos e só categorias conhecidas são listadas',()=>{
  const p={titulo:'Curso',href:'https://go.hotmart.com/ABC'};
  const resultado=listar({cursosGerais:[p],cursosPmesp:[p],outra:[p]},[{categoria:'cursosGerais',href:p.href,comissao:134}]);
  assert.equal(resultado.length,2);assert.equal(ganho(resultado[0].comissao),134);assert.equal(ganho(resultado[1].comissao),null);
  assert.equal(linkSeguro('javascript:alert(1)'),false);assert.equal(linkSeguro('https://user:pass@example.com'),false);
  assert.equal(linkSeguro('img/../secreto',true),false);assert.equal(linkSeguro('img/capa.webp',true),true);
});
test('publicidade mistura categorias, prioriza destaque e exclui pausados, bloqueados e duplicatas',()=>{
  const contexto={};vm.runInNewContext(fs.readFileSync('js/services/anuncios-produtos.js','utf8'),contexto);
  const p=(href,extra={})=>({href,titulo:href,imagem:{src:'img/capa.webp'},...extra});
  const catalogo={cursosGerais:[p('pausado',{ativo:false,destaque:true}),p('bloqueado',{destaque:true}),p('hiper',{destaque:true})],livrosEbooks:[p('livro'),p('hiper')],produtosFisicos:[p('mochila')]};
  const selecionados=contexto.UNISEGPUB_ANUNCIOS.selecionar(catalogo,'/index.html',href=>href!=='bloqueado');
  assert.equal(selecionados.length,3);assert.equal(selecionados[0].href,'hiper');
  assert.equal(new Set(selecionados.map(p=>p.href)).size,3);
  assert.deepEqual([...selecionados.map(p=>p.href)],['hiper','livro','mochila']);
  assert.equal(contexto.UNISEGPUB_ANUNCIOS.selecionar({cursosGerais:[p('a',{ativo:false})]},'/',()=>true).length,0);
});
