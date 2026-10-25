import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { estadoConcurso, filtrarConcursos, resumoConcursos } from '../js/pages/concursos-modelo.js';
const dados = JSON.parse(fs.readFileSync('data/concursos/destaques.json','utf8'));
const agora = '2026-10-18T12:00:00-03:00';

test('contadores refletem inscrições reais e não incluem vagas de fases posteriores', () => {
  assert.deepEqual(resumoConcursos(dados.itens,dados.revisadoEm,agora),{total:10,abertas:4,vagas:3377,andamento:5});
  const pe=filtrarConcursos(dados.itens,{uf:'PE'},dados.revisadoEm,agora);
  assert.equal(resumoConcursos(pe,dados.revisadoEm,agora).vagas,3205);
});
test('PMAL encerrada em 16/10 e CBMAL aberta até 26/10', () => {
  const pmal=dados.itens.find(i=>i.inst==='pmal');
  const bmal=dados.itens.find(i=>i.inst==='bmal');
  assert.equal(estadoConcurso(pmal,dados.revisadoEm,agora).grupo,'andamento');
  assert.equal(estadoConcurso(bmal,dados.revisadoEm,agora).grupo,'abertas');
  assert.equal(estadoConcurso(bmal,dados.revisadoEm,'2026-10-26T18:00:01-03:00').chave,'encerrado');
  assert.equal(estadoConcurso(bmal,dados.revisadoEm,'2026-10-26T17:59:59-03:00').grupo,'abertas');
});
test('dados antigos não continuam como inscrições abertas e futuras não antecipam abertura', () => {
  assert.equal(resumoConcursos(dados.itens,'2026-10-18','2026-11-03T12:00:00-03:00').abertas,0);
  assert.equal(estadoConcurso(dados.itens[0],dados.revisadoEm,'2026-10-14T12:00:00-03:00').chave,'previsto');
});
test('filtros combinam instituição, UF, carreira, situação e busca sem acentos', () => {
  assert.equal(filtrarConcursos(dados.itens,{busca:'policia cebraspe',uf:'PE',tipo:'civil',situacao:'abertas'},dados.revisadoEm,agora).length,1);
  assert.equal(filtrarConcursos(dados.itens,{inst:'pf'},dados.revisadoEm,agora)[0].id,'pf-2025');
  assert.equal(filtrarConcursos(dados.itens,{busca:'xyznenhum'},dados.revisadoEm,agora).length,0);
});
test('todos os destaques têm fonte, imagem, campos e cronogramas válidos', () => {
  const ids=new Set();
  for(const item of dados.itens) {
    assert.ok(!ids.has(item.id)); ids.add(item.id);
    for(const campo of ['nome','cargos','vagas','salario','requisitos','etapa','documento','banca','prazo']) assert.ok(item[campo]?.length>0,item.id+' '+campo);
    for(const url of [item.fonte,item.fonteConfirmacao,...(item.fontesComplementares||[])].filter(Boolean)) assert.match(url,/^https:\/\//);
    assert.ok(fs.existsSync(item.imagem),item.imagem);
    if(item.situacao==='inscricoes') assert.ok(Date.parse(item.fim)>Date.parse(item.inicio));
  }
  const html=fs.readFileSync('concursos.html','utf8');
  assert.equal((html.match(/data-concurso="/g)||[]).length,10);
  assert.equal((html.match(/data-diretorio-inst="/g)||[]).length,110);
  assert.ok(!html.includes('concursos-automacao.js'));
});
