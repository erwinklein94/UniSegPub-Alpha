import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { CORES, FONTES, TEXTOS, meioTempo } from '../config';
import { Eyebrow, Palavras } from '../components/base';
import { Check, SetaDiagonal } from '../components/icones';
import { entre } from '../anim';
import { useLayout } from '../layout';

export const Confianca: React.FC<{ duracao: number }> = ({ duracao }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { W, vertical, seguro } = useLayout();
  const saida = entre(frame, duracao - 8, duracao, 0, 1);

  const selo = spring({ frame: frame - 16, fps, config: { damping: 11, stiffness: 200, mass: 0.6 } });
  // Pulso no ritmo (a cada 2 meios-tempos = 1 batida)
  const batida = meioTempo * 2;
  const fase = frame > 24 ? ((frame - 24) % batida) / batida : 0;
  const pulso = 1 + Math.exp(-fase * 6) * 0.045 * (frame > 24 ? 1 : 0);

  const t = vertical ? 64 : 56; // tamanho do texto do selo

  const Selo = (
    <div style={{ position: 'relative', display: 'grid', placeItems: 'center', transform: `scale(${selo * pulso})`, opacity: Math.min(1, selo * 1.4) }}>
      {[0, 1].map((k) => {
        const fk = frame > 24 ? (((frame - 24 + k * batida * 0.5) % (batida * 2)) / (batida * 2)) : 0;
        return (
          <div
            key={k}
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: t * 0.5,
              border: `2px solid ${CORES.texto}`,
              opacity: frame > 24 ? (1 - fk) * 0.45 : 0,
              transform: `scale(${1 + fk * 0.35}, ${1 + fk * 0.9})`,
            }}
          />
        );
      })}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: t * 0.35,
          padding: `${t * 0.42}px ${t * 0.7}px`,
          borderRadius: t * 0.5,
          border: `2px solid ${CORES.texto}`,
          background: CORES.navy2,
          fontFamily: FONTES.sans,
          fontWeight: 700,
          fontSize: t,
          letterSpacing: '-0.02em',
          color: CORES.texto,
          whiteSpace: 'nowrap',
        }}
      >
        <span style={{ display: 'grid', placeItems: 'center', width: t * 0.9, height: t * 0.9, borderRadius: 99, background: '#e7f5ed' }}>
          <Check tamanho={t * 0.6} cor="#166849" espessura={3} />
        </span>
        {TEXTOS.confiancaSelo}
        <SetaDiagonal tamanho={t * 0.85} espessura={2.4} />
      </div>
    </div>
  );

  const Fontes = (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: vertical ? 'center' : 'flex-start', maxWidth: vertical ? seguro.width : 820 }}>
      {TEXTOS.confiancaFontes.map((nome, i) => {
        const s = spring({ frame: frame - 40 - i * 6, fps, config: { damping: 14, stiffness: 220, mass: 0.5 } });
        return (
          <div
            key={nome}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: vertical ? '14px 22px' : '12px 16px',
              border: `1px solid ${CORES.linhaForte}`,
              borderRadius: 8,
              fontFamily: FONTES.mono,
              fontWeight: 700,
              fontSize: vertical ? 25 : 21,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: CORES.texto,
              opacity: s,
              transform: `translateY(${(1 - s) * 20}px)`,
            }}
          >
            <Check tamanho={vertical ? 26 : 22} cor="#90e6bc" />
            {nome}
          </div>
        );
      })}
    </div>
  );

  const aviso = entre(frame, 70, 84);
  const Aviso = (
    <div
      style={{
        fontFamily: FONTES.sans,
        fontWeight: 500,
        fontSize: vertical ? 30 : 26,
        color: CORES.textoSuave,
        opacity: aviso,
        borderTop: `1px dashed ${CORES.linhaForte}`,
        paddingTop: 22,
        textAlign: vertical ? 'center' : 'left',
      }}
    >
      {TEXTOS.avisoIndependencia}
    </div>
  );

  return (
    <AbsoluteFill style={{ opacity: interpolate(saida, [0, 1], [1, 0]) }}>
      {vertical ? (
        <div
          style={{
            position: 'absolute',
            left: seguro.left,
            top: seguro.top,
            width: seguro.width,
            height: seguro.height,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 90,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 36 }}>
            <Eyebrow texto="Transparência" tamanho={24} />
            <Palavras texto={TEXTOS.confianca} tamanho={112} alinhamento="center" passo={3} />
          </div>
          {Selo}
          {Fontes}
          {Aviso}
        </div>
      ) : (
        <>
          <div
            style={{
              position: 'absolute',
              left: seguro.left,
              top: seguro.top,
              width: W * 0.36,
              height: seguro.height,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 36,
            }}
          >
            <Eyebrow texto="Transparência" tamanho={22} />
            <Palavras texto={TEXTOS.confianca} tamanho={92} passo={3} />
            {Aviso}
          </div>
          <div
            style={{
              position: 'absolute',
              left: W * 0.54,
              top: seguro.top,
              width: W * 0.4,
              height: seguro.height,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              gap: 70,
            }}
          >
            {Selo}
            {Fontes}
          </div>
        </>
      )}
    </AbsoluteFill>
  );
};
