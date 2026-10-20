import { somarDias, escapar } from './admin-analytics.js';
export function preencherDias(linhas, inicio, fim) {
  const mapa = new Map(linhas.map(l => [l.date, l]));
  const dias = [];
  for (let dia = inicio; dia <= fim; dia = somarDias(dia, 1)) dias.push({ date: dia.replaceAll('-', ''), activeUsers: 0, sessions: 0, screenPageViews: 0, ...mapa.get(dia.replaceAll('-', '')) });
  return dias;
}
export function graficoDiario(linhas, metrica, titulo, largura = 920) {
  if (!linhas.length) return '<p class="ga-vazio">Nenhum dado disponível.</p>';
  const max = Math.max(1, ...linhas.map(l => l[metrica] || 0));
  const direita = largura - 36, amplitude = direita - 64;
  const x = i => 64 + (linhas.length === 1 ? amplitude / 2 : i * amplitude / (linhas.length - 1));
  const y = v => 240 - v * 200 / max;
  const grade = Array.from({ length: 5 }, (_, i) => { const v = max * i / 4; return `<line x1="64" y1="${y(v)}" x2="${direita}" y2="${y(v)}" stroke="var(--grade)"/><text x="55" y="${y(v) + 4}" text-anchor="end">${Math.round(v).toLocaleString('pt-BR')}</text>`; }).join('');
  const dia = v => v.slice(6, 8) + '/' + v.slice(4, 6);
  const pontos = linhas.map((l, i) => `${x(i)},${y(l[metrica] || 0)}`).join(' ');
  const marcas = [...new Set([0, Math.floor((linhas.length - 1) / 2), linhas.length - 1])].map(i => `<text x="${x(i)}" y="270" text-anchor="middle">${dia(linhas[i].date)}</text>`).join('');
  return `<svg viewBox="0 0 ${largura} 290" role="img" aria-label="${escapar(titulo)} por dia"><g fill="var(--tinta-3)" font-size="12">${grade}${marcas}</g><polyline points="${pontos}" fill="none" stroke="var(--serie-1)" stroke-width="3" stroke-linejoin="round"/>${linhas.map((l, i) => `<circle cx="${x(i)}" cy="${y(l[metrica] || 0)}" r="3" fill="var(--serie-1)"><title>${dia(l.date)}: ${Number(l[metrica] || 0).toLocaleString('pt-BR')}</title></circle>`).join('')}</svg>`;
}
