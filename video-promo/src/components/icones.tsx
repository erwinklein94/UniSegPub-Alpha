import React from 'react';

/**
 * Ícones em SVG (setas, check, áreas do portal). As fontes web não trazem
 * esses glifos, então desenhamos em vetor para renderizar igual em
 * qualquer máquina.
 */
type P = { tamanho?: number; cor?: string; espessura?: number; style?: React.CSSProperties };

const base = (t: number, style?: React.CSSProperties): React.SVGProps<SVGSVGElement> => ({
  width: t,
  height: t,
  viewBox: '0 0 24 24',
  fill: 'none',
  style: { display: 'inline-block', flex: '0 0 auto', verticalAlign: '-0.12em', ...style },
});

export const SetaDireita: React.FC<P> = ({ tamanho = 20, cor = 'currentColor', espessura = 2.4, style }) => (
  <svg {...base(tamanho, style)}>
    <path d="M4 12h15m-6-6 6 6-6 6" stroke={cor} strokeWidth={espessura} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const SetaDiagonal: React.FC<P> = ({ tamanho = 20, cor = 'currentColor', espessura = 2.4, style }) => (
  <svg {...base(tamanho, style)}>
    <path d="M7 17 17 7M9 7h8v8" stroke={cor} strokeWidth={espessura} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Chevron: React.FC<P> = ({ tamanho = 20, cor = 'currentColor', espessura = 2.2, style }) => (
  <svg {...base(tamanho, style)}>
    <path d="m6 9 6 6 6-6" stroke={cor} strokeWidth={espessura} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Check: React.FC<P> = ({ tamanho = 20, cor = 'currentColor', espessura = 2.6, style }) => (
  <svg {...base(tamanho, style)}>
    <path d="m5 12.5 4.5 4.5L19 7.5" stroke={cor} strokeWidth={espessura} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Menu: React.FC<P> = ({ tamanho = 20, cor = 'currentColor', espessura = 2, style }) => (
  <svg {...base(tamanho, style)}>
    <path d="M4 7h16M4 12h16M4 17h16" stroke={cor} strokeWidth={espessura} strokeLinecap="round" />
  </svg>
);

// Ícones das áreas (traço fino, estilo editorial)
const linha = (cor: string, e: number) => ({ stroke: cor, strokeWidth: e, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const });

export const IconeArea: React.FC<P & { area: string }> = ({ area, tamanho = 20, cor = 'currentColor', espessura = 1.7, style }) => {
  const l = linha(cor, espessura);
  const desenhos: Record<string, React.ReactNode> = {
    remuneracao: (
      <>
        <rect x="3.5" y="5" width="17" height="14" rx="1.5" {...l} />
        <path d="M3.5 9.5h17M7.5 14h4" {...l} />
      </>
    ),
    concursos: (
      <>
        <path d="M7 3.5h7.5L19 8v12.5H7z" {...l} />
        <path d="M14.5 3.5V8H19M10 12.5h6M10 16h4" {...l} />
      </>
    ),
    direitos: (
      <>
        <path d="M12 4v16M6 20h12M5 8h14" {...l} />
        <path d="M5 8 2.5 14h5zM19 8l-2.5 6h5z" {...l} />
      </>
    ),
    acoes: (
      <>
        <path d="m14 4 6 6M11 7l6 6M12.5 5.5l-4 4M15.5 8.5 4 20" {...l} />
      </>
    ),
    brasoes: (
      <>
        <path d="M12 3.5 19 6v6c0 4.2-3 7.2-7 8.5C8 19.2 5 16.2 5 12V6z" {...l} />
      </>
    ),
    associacoes: (
      <>
        <circle cx="9" cy="9" r="3" {...l} />
        <circle cx="16.5" cy="10" r="2.4" {...l} />
        <path d="M3.5 19c.6-3 2.8-4.7 5.5-4.7s4.9 1.7 5.5 4.7M14.5 14.6c2.6-.4 4.9.9 5.8 4.4" {...l} />
      </>
    ),
  };
  return <svg {...base(tamanho, style)}>{desenhos[area]}</svg>;
};
