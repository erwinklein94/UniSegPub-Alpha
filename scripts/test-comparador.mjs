import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { filtrarInstituicoes, referenciaLinha, fonteSegura, selecaoDaURL } from '../js/pages/comparador-modelo.js';
const config=JSON.parse(fs.readFileSync('config/remuneracao-instituicoes.json','utf8'));
const dados=id=>JSON.parse(fs.readFileSync(config.find(i=>i.id===id).arquivo_saida,'utf8'));
test('cobertura real: 110 instituições, DF correto, 27 UFs e duas federais',()=>{
 const html=fs.readFileSync('comparar-carreiras.html','utf8');
 const itens=JSON.parse(html.match(/id="comparador-config">([\s\S]*?)<\/script>/)[1]);
 assert.equal(itens.length,110);assert.equal(new Set(itens.map(i=>i.id)).size,110);
 assert.equal(itens.find(i=>i.id==='pcdf').uf,'DF');
 assert.equal(itens.filter(i=>i.uf==='BR').length,2);
 for(const uf of new Set(itens.filter(i=>i.uf!=='BR').map(i=>i.uf)))assert.equal(itens.filter(i=>i.uf===uf).length,4);
 assert.equal((html.match(/data-comparador-check/g)||[]).length,110);
 assert.doesNotMatch(html, /src="[^"]*(?:header-estados|concursos-comparador|dados-portal|services\/remuneracao)\.js/);
});
test('busca combina nome sem acentos, sigla, esfera e UF sem perder a cobertura',()=>{
 assert.equal(filtrarInstituicoes(config,'pcdf')[0].uf,'DF');
 assert.equal(filtrarInstituicoes(config,'policia civil','','MG')[0].id,'pcmg');
 assert.equal(filtrarInstituicoes(config,'','federal').length,2);
 assert.equal(filtrarInstituicoes(config,'','estadual','DF').length,4);
});
test('comparação exige cargo explícito, fonte, vigência e conferência; pendências não viram valores atuais',()=>{
 const pf=dados('pf'),r=referenciaLinha(pf,pf.linhas[0],'2026-10-19');
 assert.equal(r.valor,pf.linhas[0].remuneracao);assert.equal(r.confirmada,true);
 assert.equal(referenciaLinha(pf,null).valor,null);
 for(const id of ['pcam','ppal']){const d=dados(id);assert.equal(referenciaLinha(d,d.linhas[0]).valor,null);}
 for(const id of ['bmrj','pprj']){const d=dados(id);assert.equal(referenciaLinha(d,d.linhas[0],'2026-10-20').valor,d.linhas[0].remuneracao);}
 for(const patch of [{valorPendente:true},{verificacao:'vigencia_a_confirmar'},{vigencia_inicio:'2099-01-01'},
  {vigencia_inicio:''},{remuneracao:NaN},{remuneracao:-1},{fonteUrl:'javascript:alert(1)'}])assert.equal(referenciaLinha(pf,{...pf.linhas[0],...patch},'2026-10-19').valor,null);
});
test('URLs externas rejeitam código e credenciais; seleção compartilhada é válida, única e limitada',()=>{
 assert.equal(fonteSegura('javascript:alert(1)'),'');assert.equal(fonteSegura('https://u:p@example.com'),'');
 assert.equal(fonteSegura('https://www.gov.br/'),'https://www.gov.br/');
 assert.deepEqual(selecaoDaURL('pcdf,pcdf,pf,falso,prf,pmesp,pcmg',config),['pcdf','pf','prf','pmesp']);
});
test('módulos legados carregam sem datasets e não acessam dados antes da prontidão',()=>{
 const handlers={};const document={addEventListener:(n,fn)=>(handlers[n]||=[]).push(fn),dispatchEvent(){},querySelector:()=>null};
 const window={};
 const contexto=vm.createContext({window,document,console,Set,Map,CustomEvent:class{},URL,localStorage:{getItem:()=>null}});
 for(const path of ['js/data/portal-config.js','js/data/bases-conteudo.js','js/ui/navegacao-ui.js','js/services/remuneracao.js','js/data/header-brasoes-config.js','js/ui/header-estados.js'])vm.runInContext(fs.readFileSync(path,'utf8'),contexto,{filename:path});
 assert.ok(handlers['dados-portal:pronto'].length>=3);
 assert.equal(vm.runInContext('getTabelaCargosRemuneracao("pf").length',contexto),0);
 assert.equal(vm.runInContext('getEstadoDaInstituicao("pcdf")',contexto),'df');
});
test('guias e diretório são estáticos, vinculados às referências e honestos sobre pendências',()=>{
 const guia=fs.readFileSync('guia-instituicoes.html','utf8');
 assert.equal((guia.match(/data-guia-item/g)||[]).length,110);
 for(const path of fs.readdirSync('artigos').filter(p=>p.startsWith('salario-'))){
  const html=fs.readFileSync('artigos/'+path,'utf8');
  assert.match(html,/Reorganização editorial desta página: 19\/10\/2026/);
  assert.match(html,/metodologia\.html/);assert.doesNotMatch(html,/FAQPage/);
 }
 const bmrj=fs.readFileSync('artigos/salario-cbmerj-2026.html','utf8');
 assert.doesNotMatch(bmrj,/<details><summary>Ver os \d+ registros com vigência a confirmar/);
 assert.equal((bmrj.match(/data-linha-referencia/g)||[]).length,15);
 assert.match(bmrj,/somente soldo/);
});
