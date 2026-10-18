import test from 'node:test';
import assert from 'node:assert/strict';
import { simularAdSense } from '../js/pages/admin-adsense.js';
import { agregarAcessos } from '../js/pages/admin-analytics.js';

const base = { acessos: 10000, dias: 7, rpm: 8, percentualMonetizado: 50, ctr: 1.2 };

test('usa RPM de página sobre a parcela monetizada, com média e projeção sem arredondar antes', () => {
  const s = simularAdSense(base);
  assert.equal(s.paginas, 5000);
  assert.equal(s.receita, 40);
  assert.equal(s.diaria, 40 / 7);
  assert.equal(s.projecao30, 40 / 7 * 30);
  assert.equal(s.cliques, 60);
});

test('usa os acessos do recorte real, não sessões únicas ou os acessos de outro período', () => {
  const registros = [
    { id: 1, criado_em: '2026-10-17T15:00:00Z', sessao: 'mesma', pagina: 'index.html' },
    { id: 2, criado_em: '2026-10-18T15:00:00Z', sessao: 'mesma', pagina: 'index.html' },
    { id: 3, criado_em: '2026-10-18T16:00:00Z', sessao: 'mesma', pagina: 'remuneracao.html' }
  ];
  const hoje = agregarAcessos(registros, '2026-10-18', '2026-10-18');
  const doisDias = agregarAcessos(registros, '2026-10-17', '2026-10-18');
  assert.equal(hoje.visitantes, 1);
  assert.equal(simularAdSense({ ...base, acessos: hoje.total, dias: 1, percentualMonetizado: 100, rpm: 10 }).receita, .02);
  assert.equal(simularAdSense({ ...base, acessos: doisDias.total, dias: 2, percentualMonetizado: 100, rpm: 10 }).receita, .03);
});

test('CTR altera apenas os cliques hipotéticos e nunca duplica a receita do RPM', () => {
  const zero = simularAdSense({ ...base, ctr: 0 });
  const alto = simularAdSense({ ...base, ctr: 10 });
  assert.equal(zero.receita, alto.receita);
  assert.equal(zero.cliques, 0);
  assert.equal(alto.cliques, 500);
});

test('tráfego vazio ou nenhuma página monetizada zera todos os resultados', () => {
  for (const p of [{ acessos: 0 }, { percentualMonetizado: 0 }]) {
    for (const valor of Object.values(simularAdSense({ ...base, ...p }))) assert.equal(valor, 0);
  }
  assert.equal(simularAdSense({ ...base, rpm: 0 }).receita, 0);
});

test('campos incompletos, negativos e percentuais impossíveis não produzem um ganho enganoso', () => {
  for (const p of [{ rpm: NaN }, { rpm: '' }, { rpm: Infinity }, { rpm: -1 }, { percentualMonetizado: 101 }, { percentualMonetizado: -1 }, { ctr: 101 }, { ctr: -1 }, { dias: 0 }, { dias: 1.5 }, { acessos: -1 }, { acessos: 1.5 }, { rpm: Number.MAX_VALUE }]) {
    assert.throws(() => simularAdSense({ ...base, ...p }), JSON.stringify(p));
  }
});
