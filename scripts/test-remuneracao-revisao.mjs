import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { destinoPesquisaRemuneracao } from './lib/remuneracao-publicacao.mjs';

const ler = p => JSON.parse(fs.readFileSync(p, 'utf8'));
const config = ler('config/remuneracao-instituicoes.json');
const dados = Object.fromEntries(config.map(i => [i.id, ler(i.arquivo_saida)]));
const audit = ler('data/remuneracao/_auditoria-2026-10-20.json');

test('todas as instituições têm revisão, fonte e somas consistentes', () => {
  assert.equal(config.length, 110);
  assert.equal(new Set(config.map(i => i.id)).size, 110);
  for (const item of config) {
    const d = dados[item.id];
    assert.equal(d.instituicao_id, item.id);
    assert.ok(['conferida', 'a_confirmar'].includes(d.revisao_dados.situacao), item.id);
    assert.ok(d.revisao_dados.nota.length > 30, item.id);
    for (const l of d.linhas) {
      assert.ok(Number.isFinite(l.remuneracao) && l.remuneracao > 0, `${item.id}: ${l.cargo}`);
      assert.ok(Math.abs(l.total - l.remuneracao - l.beneficios) < .011, `${item.id}: soma`);
      assert.match(l.fonteUrl, /^https?:\/\//);
      if (d.revisao_dados.situacao === 'conferida') {
        assert.equal(l.verificacao, 'fonte_oficial');
        assert.ok(l.vigencia_inicio || l.referencia_data, item.id);
        assert.ok(!l.vigencia_inicio || l.vigencia_inicio <= audit.resumo.data, item.id);
        assert.ok(['subsidio', 'soldo', 'vencimento_base', 'remuneracao'].includes(l.tipo_valor));
      } else {
        assert.equal(l.verificacao, 'vigencia_a_confirmar');
        assert.equal(d.precisa_revisao_humana, true);
      }
    }
  }
  assert.equal(audit.instituicoes.length, config.length);
  assert.equal(audit.resumo.conferidas, Object.values(dados).filter(d => d.revisao_dados.situacao === 'conferida').length);
  assert.equal(audit.resumo.linhas_depois, Object.values(dados).reduce((s,d) => s+d.linhas.length, 0));
});

test('valores críticos e etapas de 2026 permanecem vinculados à referência correta', () => {
  const valor = (id, cargo) => dados[id].linhas.find(l => l.cargo === cargo)?.remuneracao;
  assert.equal(valor('pf', 'Agente de Polícia Federal — Terceira classe'), 14710.10);
  assert.equal(valor('pprs', 'Policial Penal — 1ª classe'), 6305.76);
  assert.equal(valor('pprs', 'Analista da Polícia Penal — 1ª classe'), 9745.26);
  assert.equal(valor('pmrr', 'SOLDADO/1'), 5128.32);
  assert.equal(valor('pmpr', 'Soldado de 1ª Classe — classe I'), 6856.06);
  assert.equal(valor('ppap', 'Policial Penal — 3ª classe, padrão I (PP01)'), 6025.92);
  assert.equal(valor('pmam', 'SOLDADO'), 5725.66); // novembro ainda não vigente
  assert.equal(valor('pmsc', 'Soldado de 3ª Classe'), 7290);
  assert.equal(valor('ppsc', 'Policial Penal — classe V'), 10969.02);
  assert.equal(valor('ppsc', 'Policial Penal — classe VII'), 15181.43);
  assert.ok(dados.pcsp.linhas.every(l => l.tipo_valor === 'vencimento_base'));
  assert.ok(dados.pmdf.linhas.every(l => l.tipo_valor === 'soldo'));
  assert.equal(dados.pcap.linhas.length, 22);
  assert.equal(dados.pcdf.linhas.length, 20);
});

test('primeiro lote de 30 preserva composição, colunas e referências oficiais', () => {
  const valor=(id,cargo)=>dados[id].linhas.find(l=>l.cargo===cargo)?.remuneracao;
  assert.equal(audit.resumo.novas_tabelas_conferidas,60);
  assert.equal(audit.resumo.conferidas,110);
  assert.equal(audit.resumo.a_confirmar,0);
  assert.equal(valor('pcsp','Escrivão de Polícia de 3ª Classe'),3395.52);
  assert.equal(valor('pcpr','Delegado de Polícia — nível I'),26000);
  assert.equal(valor('pppr','Policial Penal — classe XII'),4776.42);
  assert.equal(valor('pmce','Soldado'),6187.96);
  assert.equal(valor('ppce','Policial Penal — referência 1'),3615.03);
  assert.ok(dados.ppce.linhas.every(l=>l.tipo_valor==='vencimento_base'));
  assert.equal(valor('pmto','SOLDADO — referência A'),7497.33); // matriz posterior de maio/2026
  assert.equal(valor('pcro','Delegado de Polícia — Especial'),39000);
  assert.equal(valor('ppro','Policial Penal — Agente'),3105);
  assert.equal(valor('pmma','Soldado'),6149.08); // antecipação: não reaplicar julho/2026
  assert.equal(valor('pcgo','Delegado de Polícia — Especial — padrão II'),49442.66);
  assert.equal(valor('pmpe','SOLDADO'),5617.92);
  assert.equal(dados.pppe.linhas.length,80);
  assert.equal(dados.pcpe.linhas.length,161);
  assert.equal(dados.pmrn.linhas.find(l=>l.cargo==='SOLDADO — nível I').remuneracao,4695.49);
  assert.ok(dados.pcrn.linhas.every(l=>l.referencia_data==='2026-04-01'&&!l.vigencia_inicio));
  assert.ok(dados.bmrj.linhas.every(l=>l.tipo_valor==='soldo'&&l.beneficios===0));
  for(const id of ['pcpr','pcgo','pcal'])assert.ok(new Set(dados[id].linhas.map(l=>l.fonteUrl)).size>=2,id);
});

test('complemento preserva matrizes completas, enquadramentos e etapas históricas', () => {
  for (const [id, quantidade] of Object.entries({ppal:28,pcam:31,pmba:50,bmba:50,pcba:28,ppba:21,pmms:154,bmms:154,pcms:378,ppto:63,pcto:362,pmac:22,bmac:22,pcac:30,ppac:30,pmes:199,bmes:199,ppes:60,pces:120,pmmt:38,bmmt:38,pcmt:85,ppmt:48,pmrs:11,bmrs:11,pcrs:8,ppma:11,pcma:136,pprr:12,pcrr:29})) {
    assert.equal(dados[id].linhas.length, quantidade, id);
    assert.equal(new Set(dados[id].linhas.map(l=>l.cargo)).size, quantidade, id);
  }
  assert.equal(dados.ppto.linhas.find(l=>l.classe==='3ª-A').remuneracao,5734.75);
  assert.equal(dados.pmmt.linhas.find(l=>l.cargo.startsWith('SOLDADO LC')&&l.classe==='N-001').remuneracao,6327.91);
  assert.equal(dados.ppmt.linhas.find(l=>l.classe==='A-001').remuneracao,5155.94);
  assert.equal(dados.pces.linhas.find(l=>l.cargo==='Delegado de Polícia — 3ª, referência 1').remuneracao,18202.42);
  assert.ok(dados.pcam.linhas.every(l=>l.vigencia_inicio==='2025-12-01'));
  for (const id of ['pmac','bmac','pcac','ppac']) assert.ok(dados[id].linhas.every(l=>l.referencia_data==='2022-04-01'&&!l.vigencia_inicio),id);
  assert.equal(dados.pcms.linhas.filter(l=>l.cargo.startsWith('Delegado')).length,35);
  assert.ok(dados.pcms.linhas.every(l=>!l.cargo.includes('DAP')));
  assert.equal(dados.pmrs.linhas.find(l=>l.cargo.startsWith('Soldado de Primeira Classe')).remuneracao,6429.95);
  assert.equal(dados.pcrs.linhas.find(l=>l.cargo==='Delegado de Polícia — referência inicial da relação RHE').remuneracao,24268.20);
  assert.match(dados.pcrs.revisao_dados.nota,/não constitui matriz das classes intermediárias/);
  assert.equal(dados.ppma.linhas.find(l=>l.classe==='A-1').remuneracao,8638.77);
  assert.equal(dados.pcma.linhas.find(l=>l.cargo==='Delegado de Polícia — classe 3ª').remuneracao,22820.23);
  assert.match(dados.pcma.fontes[0].tipo,/reprodução de diário oficial/);
  assert.equal(dados.pprr.linhas.find(l=>l.classe==='A-1').remuneracao,6073.71);
  assert.ok(dados.pcrr.linhas.every(l=>!l.cargo.startsWith('Escrivão')));
  assert.equal(dados.pcrr.linhas.filter(l=>l.cargo.startsWith('Oficial Investigador')).length,10);
});

test('nova pesquisa automática preserva dados publicados e segue para candidata', () => {
  const item = { id: 'pf', arquivo_saida: 'data/remuneracao/pf.json' };
  assert.match(destinoPesquisaRemuneracao(item, dados.pf).replaceAll('\\', '/'), /candidatas\/pf.json$/);
  assert.match(destinoPesquisaRemuneracao(item, dados.pcsp).replaceAll('\\', '/'), /candidatas\/pf.json$/);
  assert.equal(destinoPesquisaRemuneracao(item, {}), item.arquivo_saida);
});

test('JSON publicado prevalece sobre cópia antiga do banco, inclusive tabela vazia', async () => {
  const source = fs.readFileSync('js/pages/remuneracao-automacao.js', 'utf8');
  for (const linhas of [dados.pf.linhas, []]) {
    let chamadasBanco = 0;
    const doc = { readyState: 'loading', addEventListener() {}, dispatchEvent() {} };
    const window = { SUPABASE_API: { rawPorInstituicao: async () => { chamadasBanco++; return {}; } } };
    vm.runInNewContext(source, { window, document: doc, console, Date, Set, Map,
      CustomEvent: class {}, fetch: async () => ({ ok: true, json: async () => ({ ...dados.pf, linhas }) }) });
    assert.equal(await window.carregarRemuneracaoInstituicao('pf'), true);
    assert.equal(chamadasBanco, 0);
    assert.equal(window.REMUNERACAO_AUTOMATIZADA.pf.linhas.length, linhas.length);
  }
});

test('falha temporária no carregamento permite tentar novamente', async () => {
  let tentativas = 0;
  const window = {};
  vm.runInNewContext(fs.readFileSync('js/pages/remuneracao-automacao.js','utf8'), {
    window, document: { readyState:'loading', addEventListener(){}, dispatchEvent(){} }, console, Date, Set, Map,
    CustomEvent: class {}, fetch: async () => ({ ok: ++tentativas > 1, json: async () => dados.pf })
  });
  assert.equal(await window.carregarRemuneracaoInstituicao('pf'), false);
  assert.equal(await window.carregarRemuneracaoInstituicao('pf'), true);
});
