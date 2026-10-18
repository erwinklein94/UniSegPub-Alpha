import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { destinoPesquisaRemuneracao } from './lib/remuneracao-publicacao.mjs';

const ler = p => JSON.parse(fs.readFileSync(p, 'utf8'));
const config = ler('config/remuneracao-instituicoes.json');
const dados = Object.fromEntries(config.map(i => [i.id, ler(i.arquivo_saida)]));
const audit = ler('data/remuneracao/_auditoria-2026-10-18.json');

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
