import test from 'node:test';
import assert from 'node:assert/strict';
import { agregarAcessos, criarPeriodo, carregarRegistros, diaSP, inicioDiaSP, somarDias, classificarOrigem, gerarCSV, escapar } from '../js/pages/admin-analytics.js';

const registros = [
  { id: 1, criado_em: '2026-10-10T15:00:00Z', pagina: 'index.html', sessao: 'antiga', referencia: '' },
  { id: 2, criado_em: '2026-10-12T02:59:59Z', pagina: 'index.html', sessao: 'anterior', referencia: '' },
  { id: 3, criado_em: '2026-10-12T03:00:00Z', pagina: 'index.html', sessao: 'a', referencia: 'https://www.google.com.br/search?q=portal' },
  { id: 4, criado_em: '2026-10-12T16:00:00Z', pagina: 'concursos.html', sessao: 'a', referencia: 'https://universosegpub.com.br/' },
  { id: 5, criado_em: '2026-10-14T03:05:00Z', pagina: 'concursos.html', sessao: 'a', referencia: 'https://universosegpub.com.br/' },
  { id: 6, criado_em: '2026-10-16T22:00:00Z', pagina: 'remuneracao.html', sessao: 'b', referencia: 'https://l.instagram.com/' },
  { id: 7, criado_em: '2026-10-18T02:59:59Z', pagina: 'index.html', sessao: null, referencia: null },
  { id: 8, criado_em: '2026-10-19T03:00:00Z', pagina: 'fora.html', sessao: 'fora', referencia: '' }
];

test('datas civis usam Brasília mesmo se o computador estiver em outro fuso', () => {
  assert.equal(diaSP('2026-10-18T02:59:59Z'), '2026-10-17');
  assert.equal(diaSP('2026-10-18T03:00:00Z'), '2026-10-18');
  assert.equal(inicioDiaSP('2026-10-18'), '2026-10-18T03:00:00.000Z');
  assert.equal(inicioDiaSP('2018-12-01'), '2018-12-01T02:00:00.000Z');
  assert.equal(inicioDiaSP('2018-11-04'), '2018-11-04T03:00:00.000Z');
  assert.equal(somarDias('2024-03-01', -1), '2024-02-29');
  assert.equal(somarDias('2026-01-01', -1), '2025-12-31');
});

test('intervalo é inclusivo, com comparação anterior de igual duração', () => {
  assert.deepEqual(criarPeriodo('2026-10-12', '2026-10-18', '2026-10-18'), {
    inicio: '2026-10-12', fim: '2026-10-18', dias: 7, anteriorInicio: '2026-10-05', anteriorFim: '2026-10-11'
  });
  assert.equal(criarPeriodo('2026-10-18', '2026-10-18', '2026-10-18').dias, 1);
  for (const [inicio, fim] of [['2026-10-19', '2026-10-18'], ['2026-10-18', '2026-10-19'], ['', '2026-10-18'], ['2026-02-30', '2026-10-18'], ['2024-01-01', '2026-10-18']]) {
    assert.throws(() => criarPeriodo(inicio, fim, '2026-10-18'));
  }
});

test('todos os recortes e métricas mudam juntos; sessões são distintas em todo o período', () => {
  const d = agregarAcessos(registros.slice().reverse(), '2026-10-12', '2026-10-18');
  assert.equal(d.total, 5);
  assert.equal(d.visitantes, 2); // A mesma sessão em dois dias não soma duas vezes.
  assert.equal(d.profundidade, 2); // 4 acessos identificados / 2 sessões.
  assert.equal(d.media, 5 / 7); // Não divide só pelos dias com acesso.
  assert.equal(d.dias.length, 7);
  assert.equal(d.dias[1].total, 0);
  assert.equal(d.dias.reduce((s, l) => s + l.visitantes, 0), 3);
  assert.deepEqual(d.pico, { dia: '2026-10-12', total: 2, visitantes: 1 });
  assert.equal(d.horas[0], 2);
  assert.equal(d.horas[23], 1);
  assert.equal(d.semana[1], 2);
  assert.equal(d.horas.reduce((a, b) => a + b), 5);
  assert.equal(d.semana.reduce((a, b) => a + b), 5);
  assert.deepEqual(d.origens, [{ origem: 'Google', sessoes: 1 }, { origem: 'Instagram', sessoes: 1 }]);
  assert.equal(d.paginas.length, 3);
  assert.equal(d.paginas.reduce((s, p) => s + p.total, 0), 5);
  assert.equal(d.paginas.find(p => p.pagina === 'concursos.html').visitantes, 1);
  const curto = agregarAcessos(registros, '2026-10-16', '2026-10-18');
  assert.equal(curto.total, 2);
  assert.equal(curto.visitantes, 1);
  assert.equal(curto.paginas.length, 2);
  assert.deepEqual(curto.origens, [{ origem: 'Instagram', sessoes: 1 }]);
  assert.equal(curto.horas[0], 0);
});

test('período vazio zera todos os indicadores e preserva os dias sem dados', () => {
  const d = agregarAcessos(registros, '2026-10-18', '2026-10-18');
  assert.equal(d.total, 0);
  assert.equal(d.visitantes, 0);
  assert.equal(d.media, 0);
  assert.equal(d.profundidade, 0);
  assert.equal(d.pico, null);
  assert.deepEqual(d.origens, []);
  assert.deepEqual(d.paginas, []);
  assert.equal(d.dias.length, 1);
});

test('origem usa o primeiro acesso observado na janela e ignora URLs que imitam domínio', () => {
  const d = agregarAcessos(registros, '2026-10-14', '2026-10-14');
  assert.deepEqual(d.origens, [{ origem: 'Navegação interna', sessoes: 1 }]);
  assert.equal(classificarOrigem('https://google.com.evil.example/'), 'google.com.evil.example');
  assert.equal(classificarOrigem('https://example.com/?google.com'), 'example.com');
  assert.equal(classificarOrigem('<svg onload=alert(1)>'), 'Outros');
  assert.equal(classificarOrigem('https://www.facebook.com/post'), 'Facebook');
});

test('paginação não trunca em 1000 registros nem quando o servidor impõe um limite menor', async () => {
  const todos = Array.from({ length: 2307 }, (_, id) => ({ id }));
  const chamadas = [];
  const requisitar = async (caminho, headers) => {
    const url = new URL('https://example.com/' + caminho);
    const offset = Number(url.searchParams.get('offset'));
    const lote = todos.slice(offset, offset + 400);
    chamadas.push({ url, headers });
    return new Response(JSON.stringify(lote), { headers: { 'Content-Range': `${offset}-${offset + lote.length - 1}/${headers.Prefer ? todos.length : '*'}` } });
  };
  const resultado = await carregarRegistros(requisitar, criarPeriodo('2026-10-12', '2026-10-18', '2026-10-18'), new Date('2026-10-18T15:00:00Z'));
  assert.equal(resultado.length, 2307);
  assert.equal(chamadas.length, 6);
  assert.deepEqual(chamadas.map(c => Number(c.url.searchParams.get('offset'))), [0, 400, 800, 1200, 1600, 2000]);
  assert.deepEqual(chamadas[0].url.searchParams.getAll('criado_em'), ['gte.2026-10-05T03:00:00.000Z', 'lt.2026-10-18T15:00:00.000Z']);
  assert.equal(chamadas[1].headers.Prefer, undefined);
});

test('paginação sem total declarado continua até lote vazio; falha de consulta não vira zero', async () => {
  let chamada = 0;
  const periodo = criarPeriodo('2026-10-12', '2026-10-18', '2026-10-18');
  const resultado = await carregarRegistros(async () => new Response(JSON.stringify(++chamada < 3 ? [{ id: chamada }] : [])), periodo);
  assert.equal(resultado.length, 2);
  assert.equal(chamada, 3);
  await assert.rejects(carregarRegistros(async () => { throw new Error('HTTP 500'); }, periodo), /HTTP 500/);
  let n = 0;
  await assert.rejects(carregarRegistros(async () => new Response(JSON.stringify(n++ ? [] : [{ id: 1 }]), { headers: { 'Content-Range': '0-0/10' } }), periodo), /incompletos/);
});

test('exportação contém todo o recorte e neutraliza HTML e fórmulas nos dados externos', () => {
  const d = agregarAcessos([...registros, { id: 9, criado_em: '2026-10-12T12:00:00Z', pagina: '=HYPERLINK("evil")', sessao: '', referencia: '' }], '2026-10-12', '2026-10-18');
  const csv = gerarCSV(d, agregarAcessos(registros, '2026-10-05', '2026-10-11'), criarPeriodo('2026-10-12', '2026-10-18', '2026-10-18'));
  assert.ok(csv.startsWith('\uFEFF'));
  assert.ok(csv.includes('"2026-10-12";"2026-10-18"'));
  assert.ok(csv.includes('"Acessos";"6";"2"'));
  assert.ok(csv.includes('"\'=HYPERLINK(""evil"")"'));
  assert.ok(csv.includes('"Hora de Brasília"'));
  assert.equal(escapar('<img src=x onerror="alert(1)">'), '&lt;img src=x onerror=&quot;alert(1)&quot;&gt;');
});
