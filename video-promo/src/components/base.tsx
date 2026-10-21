import React from 'react';
import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { CORES, FONTES } from '../config';
import { SPRING_CURTO, entre } from '../anim';
import { useLayout } from '../layout';
import { SetaDireita } from './icones';

// ─── Fundo navy com grade fina ─────────────────────────────────────────
export const Fundo: React.FC<{ grade?: boolean }> = ({ grade = true }) => {
  const frame = useCurrentFrame();
  const { W, H } = useLayout();
  const passo = Math.round(Math.min(W, H) / 9);
  const deriva = (frame * 0.25) % passo;
  return (
    <AbsoluteFill style={{ backgroundColor: CORES.navy }}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse 90% 60% at 50% 18%, ${CORES.navy2} 0%, ${CORES.navy} 70%)`,
        }}
      />
      {grade && (
        <AbsoluteFill
          style={{
            backgroundImage: `linear-gradient(${CORES.linha} 1px, transparent 1px), linear-gradient(90deg, ${CORES.linha} 1px, transparent 1px)`,
            backgroundSize: `${passo}px ${passo}px`,
            backgroundPosition: `0 ${deriva}px`,
            opacity: 0.35,
            maskImage: 'radial-gradient(ellipse 80% 70% at 50% 45%, black 30%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 45%, black 30%, transparent 100%)',
          }}
        />
      )}
    </AbsoluteFill>
  );
};

// ─── Eyebrow mono (ex.: "CONSULTA GRATUITA · FONTES PÚBLICAS") ─────────
export const Eyebrow: React.FC<{ texto: string; tamanho?: number; atraso?: number; cor?: string; style?: React.CSSProperties }> = ({
  texto,
  tamanho = 26,
  atraso = 0,
  cor = CORES.textoSuave,
  style,
}) => {
  const frame = useCurrentFrame();
  const largura = entre(frame, atraso - 6, atraso + 6, 0, tamanho * 1.6);
  const op = entre(frame, atraso - 4, atraso + 6);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: tamanho * 0.6,
        fontFamily: FONTES.mono,
        fontWeight: 700,
        fontSize: tamanho,
        letterSpacing: '0.22em',
        whiteSpace: 'nowrap',
        textTransform: 'uppercase',
        color: cor,
        ...style,
      }}
    >
      <span style={{ width: largura, height: 2, background: CORES.linhaForte, flex: '0 0 auto' }} />
      <span style={{ opacity: op, transform: `translateX(${(1 - op) * -10}px)` }}>{texto}</span>
    </div>
  );
};

// ─── Título com entrada palavra a palavra ──────────────────────────────
type PalavrasProps = {
  texto: string;
  tamanho: number;
  atraso?: number;
  passo?: number;
  cor?: string;
  peso?: number;
  alinhamento?: 'left' | 'center';
  altura?: number;
  /** Palavras (exatas) que recebem marca-texto dourado */
  destaque?: string[];
  /** Palavras exibidas em cor apagada */
  apagadas?: string[];
  maxWidth?: number;
};

export const Palavras: React.FC<PalavrasProps> = ({
  texto,
  tamanho,
  atraso = 0,
  passo = 3,
  cor = CORES.texto,
  peso = 800,
  alinhamento = 'left',
  altura = 1.02,
  destaque = [],
  apagadas = [],
  maxWidth,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const palavras = texto.split(' ');
  return (
    <div
      style={{
        fontFamily: FONTES.sans,
        fontWeight: peso,
        fontSize: tamanho,
        lineHeight: altura,
        letterSpacing: '-0.045em',
        color: cor,
        textAlign: alinhamento,
        maxWidth,
        textWrap: 'balance',
      }}
    >
      {palavras.map((p, i) => {
        const s = spring({ frame: frame - atraso - i * passo, fps, config: SPRING_CURTO });
        const y = interpolate(s, [0, 1], [tamanho * 0.55, 0]);
        const ehDestaque = destaque.includes(p);
        return (
          <React.Fragment key={i}>
            <span
              style={{
                display: 'inline-block',
                opacity: Math.min(1, s * 1.4),
                transform: `translateY(${y}px)`,
                color: apagadas.includes(p) ? CORES.textoApagado : undefined,
              }}
            >
              {ehDestaque ? <MarcaTexto atraso={atraso + i * passo + 6}>{p}</MarcaTexto> : p}
            </span>{' '}
          </React.Fragment>
        );
      })}
    </div>
  );
};

// ─── Marca-texto dourado (como o <mark> do site) ───────────────────────
export const MarcaTexto: React.FC<{ children: React.ReactNode; atraso?: number }> = ({ children, atraso = 0 }) => {
  const frame = useCurrentFrame();
  const w = entre(frame, atraso, atraso + 10);
  return (
    <span style={{ position: 'relative', display: 'inline-block', padding: '0 0.06em', isolation: 'isolate' }}>
      <span
        style={{
          position: 'absolute',
          left: 0,
          bottom: '0.06em',
          height: '0.26em',
          width: `${w * 100}%`,
          background: CORES.ouro,
          opacity: 0.9,
          zIndex: -1,
        }}
      />
      {children}
    </span>
  );
};


// ─── Logo (o arquivo tem fundo escuro: recortado em círculo) ───────────
export const Logo: React.FC<{ tamanho: number; anel?: boolean }> = ({ tamanho, anel = true }) => (
  <div
    style={{
      width: tamanho,
      height: tamanho,
      borderRadius: '50%',
      overflow: 'hidden',
      boxShadow: anel ? `0 0 0 ${Math.max(1, tamanho * 0.012)}px ${CORES.linhaForte}` : undefined,
      background: '#0d0d0d',
      flex: '0 0 auto',
    }}
  >
    <Img src={staticFile('logo.webp')} style={{ width: '100%', height: '100%', transform: 'scale(1.06)' }} />
  </div>
);

// ─── Botão dourado (CTA) ───────────────────────────────────────────────
export const BotaoOuro: React.FC<{ texto: string; tamanho: number; style?: React.CSSProperties }> = ({
  texto,
  tamanho,
  style,
}) => (
  <div
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: tamanho * 0.5,
      padding: `${tamanho * 0.62}px ${tamanho * 1.15}px`,
      borderRadius: tamanho * 0.16,
      background: CORES.ouro,
      border: `1px solid ${CORES.ouro}`,
      color: CORES.siteTinta,
      fontFamily: FONTES.sans,
      fontWeight: 800,
      fontSize: tamanho,
      letterSpacing: '-0.02em',
      ...style,
    }}
  >
    {texto} <SetaDireita tamanho={tamanho * 1.05} espessura={2.6} />
  </div>
);
