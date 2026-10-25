import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { INSTITUICOES_INICIO, instituicaoDaEscolha, filtrarInstituicoes, situacaoInicio } from '../js/pages/inicio-modelo.js';
const dados = JSON.parse(fs.readFileSync('data/inicio/concursos.json', 'utf8'));
const p = { ...dados.itens[0], revisadoEm: dados.revisadoEm };

test('os 110 atalhos apontam para instituições existentes, inclusive as siglas excepcionais', () => {
  assert.equal(INSTITUICOES_INICIO.length, 110);
  assert.equal(new Set(INSTITUICOES_INICIO.map(i => i.id)).size, 110);
  for (const i of INSTITUICOES_INICIO) assert.ok(fs.existsSync(`data/remuneracao/${i.id}.json`), i.id);
  for (const [tipo, uf, id] of [['pc', 'MG', 'pcmg'], ['pc', 'RJ', 'pcerj'], ['pm', 'SP', 'pmesp'], ['pm', 'RJ', 'pmerj'], ['pc', 'DF', 'pcdf'], ['pf', '', 'pf'], ['prf', '', 'prf']]) assert.equal(instituicaoDaEscolha(tipo, uf), id);
  for (const [tipo, uf] of [['', ''], ['pc', ''], ['pc', 'ZZ'], ['gm', 'SP']]) assert.equal(instituicaoDaEscolha(tipo, uf), null);
});

test('a busca encontra siglas e nomes sem acento e sem depender da aba atual', () => {
  assert.deepEqual(filtrarInstituicoes('pcmg').map(i => i.id), ['pcmg']);
  assert.deepEqual(filtrarInstituicoes('policia civil minas gerais').map(i => i.id), ['pcmg']);
  assert.deepEqual(filtrarInstituicoes('policia federal').map(i => i.id), ['pf']);
  assert.equal(filtrarInstituicoes('', 'federais').length, 2);
  assert.equal(filtrarInstituicoes('', 'bm').length, 27);
  assert.deepEqual(filtrarInstituicoes('SP').map(i => i.id), ['pmesp', 'pcsp', 'ppsp', 'bmsp']);
  assert.equal(filtrarInstituicoes('<img src=x onerror=alert(1)>').length, 0);
});

test('a data e o horário do edital controlam inscrições futuras, abertas e encerradas', () => {
  assert.equal(situacaoInicio(p, '2026-10-14T23:59:59-03:00').chave, 'previsto');
  assert.equal(situacaoInicio(p, '2026-10-18T10:00:00-03:00').chave, 'aberto');
  const atualizado = { ...p, revisadoEm: '2026-12-16' };
  assert.equal(situacaoInicio(atualizado, '2026-12-16T18:00:00-03:00').chave, 'aberto');
  assert.equal(situacaoInicio(atualizado, '2026-12-16T18:00:01-03:00').chave, 'encerrado');
});

test('a home não conserva inscrições abertas sem uma revisão recente ou sem cronograma', () => {
  assert.equal(situacaoInicio({ ...p, revisadoEm: '2026-10-18' }, '2026-11-03T12:00:00-03:00').chave, 'revisar');
  assert.equal(situacaoInicio({ ...p, fim: null }, '2026-10-18').chave, 'revisar');
  assert.equal(situacaoInicio({ ...p, inicio: 'inválido' }, '2026-10-18').chave, 'revisar');
  assert.equal(situacaoInicio({ ...dados.itens[3], revisadoEm: dados.revisadoEm }, '2026-10-18').grupo, 'preparacao');
});

test('as cinco notícias e o radar têm fonte, imagem local e dados editoriais rastreáveis', () => {
  assert.equal(dados.itens.length, 5);
  const html = fs.readFileSync('index.html', 'utf8');
  for (const item of dados.itens) {
    assert.ok(fs.existsSync(item.imagem), item.imagem);
    assert.equal(new URL(item.fonte).protocol, 'https:');
    assert.ok(item.publicadoEm <= dados.revisadoEm);
    assert.equal(html.split(`data-inicio-item="${item.id}"`).length - 1, 2);
    assert.ok(html.includes(item.imagem));
    assert.ok(html.includes(item.fonte));
  }
  assert.ok(!html.includes('R$ 23.692'));
  assert.ok(!html.includes('usp-img-placeholder'));
  assert.ok(!html.includes('1,2 milhão+'));
});
