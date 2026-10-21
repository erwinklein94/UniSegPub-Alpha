import { Easing, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

/** Spring curto: entra rápido, com leve assentamento. */
export const SPRING_CURTO = { damping: 16, stiffness: 210, mass: 0.55 } as const;
export const SPRING_SECO = { damping: 200, stiffness: 260, mass: 0.6 } as const;

export const useEntrada = (atraso = 0, config: typeof SPRING_CURTO | typeof SPRING_SECO = SPRING_CURTO) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return spring({ frame: frame - atraso, fps, config });
};

/** Saída no fim da cena (1 → 0) durante os últimos `quadros`. */
export const useSaida = (duracao: number, quadros = 6) => {
  const frame = useCurrentFrame();
  return interpolate(frame, [duracao - quadros, duracao], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
};

/** Contador com ease-out. */
export const contar = (frame: number, inicio: number, dur: number, alvo: number) =>
  Math.round(
    interpolate(frame, [inicio, inicio + dur], [0, alvo], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.out(Easing.cubic),
    }),
  );

export const entre = (frame: number, a: number, b: number, de = 0, ate = 1, easing = Easing.out(Easing.cubic)) =>
  interpolate(frame, [a, b], [de, ate], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing });

/** Aleatório determinístico (mesmo valor em todo render). */
export const semente = (n: number) => {
  const x = Math.sin(n * 9301 + 49297) * 233280;
  return x - Math.floor(x);
};
