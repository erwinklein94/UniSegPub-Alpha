import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';
import { CORES, FONTES, TEXTOS } from '../config';
import { Eyebrow, Palavras } from '../components/base';
import { entre, semente, useEntrada } from '../anim';
import { useLayout } from '../layout';
import { Chevron } from '../components/icones';

export const UFS = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA',
  'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',
];

export const Gancho: React.FC<{ duracao: number }> = ({ duracao }) => {
  const frame = useCurrentFrame();
  const { W, H, vertical, seguro } = useLayout();
  const tamanho = vertical ? 132 : 132;

  // Seletor de UF que "gira" rápido e para
  const giro = Math.min(26, Math.floor(Math.max(0, frame - 22) / 2.2));
  const ufAtual = UFS[(giro + 12) % UFS.length];
  const chip = useEntrada(18);
  const parou = frame - 22 > 26 * 2.2;

  return (
    <AbsoluteFill>
      {/* Siglas de UF ao fundo, discretas */}
      {UFS.map((uf, i) => {
        const x = semente(i + 1) * W;
        const y0 = semente(i + 40) * H;
        const y = y0 - frame * (0.6 + semente(i + 80) * 0.8);
        const op = entre(frame, i * 0.6, i * 0.6 + 10, 0, 0.04 + semente(i + 3) * 0.05);
        return (
          <div
            key={uf}
            style={{
              position: 'absolute',
              left: x,
              top: y,
              fontFamily: FONTES.mono,
              fontWeight: 700,
              fontSize: vertical ? 54 : 44,
              color: CORES.texto,
              opacity: op,
            }}
          >
            {uf}
          </div>
        );
      })}

      <div
        style={{
          position: 'absolute',
          left: seguro.left,
          top: seguro.top,
          width: seguro.width,
          height: seguro.height,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: vertical ? 64 : 48,
        }}
      >
        <Eyebrow texto={TEXTOS.eyebrow} tamanho={vertical ? 24 : 22} />
        <Palavras texto={TEXTOS.gancho} tamanho={tamanho} passo={1.5} atraso={-16} maxWidth={vertical ? seguro.width : 1450} />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 22,
            opacity: chip,
            transform: `translateY(${(1 - chip) * 30}px)`,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 18,
              padding: vertical ? '20px 30px' : '16px 26px',
              border: `2px solid ${parou ? CORES.texto : CORES.linhaForte}`,
              borderRadius: 10,
              fontFamily: FONTES.mono,
              fontWeight: 700,
              fontSize: vertical ? 44 : 36,
              color: CORES.texto,
              letterSpacing: '0.08em',
            }}
          >
            <span style={{ color: CORES.textoSuave, fontSize: '0.6em', letterSpacing: '0.3em' }}>UF</span>
            <span style={{ minWidth: '1.6em' }}>{ufAtual}</span>
            <Chevron tamanho={vertical ? 40 : 32} cor={CORES.textoSuave} />
          </div>
          <span
            style={{
              fontFamily: FONTES.sans,
              fontWeight: 500,
              fontSize: vertical ? 34 : 30,
              color: CORES.textoSuave,
            }}
          >
            {TEXTOS.ganchoApoio}
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
