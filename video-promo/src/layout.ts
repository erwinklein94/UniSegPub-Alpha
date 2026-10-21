import { useVideoConfig } from 'remotion';

/**
 * Áreas seguras:
 * - 10% em todas as bordas;
 * - no vertical, nada importante nos 15% inferiores (UI das redes).
 */
export const useLayout = () => {
  const { width: W, height: H } = useVideoConfig();
  const vertical = H > W;
  const margemX = Math.round(W * 0.1);
  const topo = Math.round(H * 0.1);
  const base = Math.round(H * (vertical ? 0.15 : 0.1));
  return {
    W,
    H,
    vertical,
    seguro: {
      left: margemX,
      right: margemX,
      top: topo,
      bottom: base,
      width: W - margemX * 2,
      height: H - topo - base,
    },
  };
};
