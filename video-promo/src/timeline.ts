import { FPS, TIMELINE_30S, TIMELINE_BUMPER, noRitmo } from './config';

export type Formato = 'vertical' | 'horizontal' | 'bumper';

export const DIMENSOES: Record<Formato, { width: number; height: number }> = {
  vertical: { width: 1080, height: 1920 },
  horizontal: { width: 1920, height: 1080 },
  bumper: { width: 1080, height: 1920 },
};

export type Cena = { id: CenaId; inicio: number; duracao: number };
export type CenaId = 'gancho' | 'problema' | 'solucao' | 'confianca' | 'cta';

/** Monta a lista de cenas (em quadros, já encaixadas no ritmo). */
export const montarCenas = (formato: Formato): Cena[] => {
  const tl: Record<string, number> = formato === 'bumper' ? TIMELINE_BUMPER : TIMELINE_30S;
  const cenas: Cena[] = [];
  let acumulado = 0;
  for (const [id, segundos] of Object.entries(tl)) {
    const inicio = noRitmo(acumulado);
    acumulado += segundos;
    const fim = noRitmo(acumulado);
    cenas.push({ id: id as CenaId, inicio, duracao: fim - inicio });
  }
  return cenas;
};

export const duracaoTotal = (formato: Formato) => {
  const cenas = montarCenas(formato);
  const ultima = cenas[cenas.length - 1];
  return ultima.inicio + ultima.duracao;
};

/** Início (relativo à cena Solução) de cada uma das 4 telas do celular. */
export const telasSolucao = (): { inicio: number; duracao: number }[] => {
  const n = 4;
  const passo = TIMELINE_30S.solucao / n;
  const base = TIMELINE_30S.gancho + TIMELINE_30S.problema;
  const inicioCena = noRitmo(base);
  return Array.from({ length: n }, (_, i) => {
    const a = noRitmo(base + passo * i) - inicioCena;
    const b = noRitmo(base + passo * (i + 1)) - inicioCena;
    return { inicio: a, duracao: b - a };
  });
};

export const segundos = (s: number) => Math.round(s * FPS);
