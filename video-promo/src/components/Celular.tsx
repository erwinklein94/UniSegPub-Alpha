import React from 'react';
import { LARGURA_TELA } from './site';

/** Moldura de celular; o conteúdo é desenhado em 390 px lógicos e escalado. */
export const Celular: React.FC<{ largura: number; children: React.ReactNode; style?: React.CSSProperties }> = ({
  largura,
  children,
  style,
}) => {
  const altura = Math.round(largura * 2.06);
  const borda = Math.round(largura * 0.028);
  const escala = (largura - borda * 2) / LARGURA_TELA;
  const alturaLogica = (altura - borda * 2) / escala;
  const raio = largura * 0.13;
  return (
    <div
      style={{
        position: 'relative',
        width: largura,
        height: altura,
        borderRadius: raio,
        padding: borda,
        boxSizing: 'border-box',
        background: 'linear-gradient(160deg, #2a3647, #121b28 45%, #1d2838)',
        boxShadow: `0 0 0 2px rgba(248,250,252,0.14), 0 ${largura * 0.08}px ${largura * 0.2}px rgba(0,0,0,0.55)`,
        ...style,
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          borderRadius: raio - borda,
          overflow: 'hidden',
          background: '#fff',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: LARGURA_TELA,
            height: alturaLogica,
            transform: `scale(${escala})`,
            transformOrigin: 'top left',
          }}
        >
          {/* barra de status */}
          <div style={{ height: 34, background: '#06101c' }} />
          <div style={{ position: 'absolute', top: 34, left: 0, right: 0, bottom: 0, overflow: 'hidden' }}>{children}</div>
          {/* "ilha" da câmera */}
          <div style={{ position: 'absolute', top: 9, left: '50%', width: 96, height: 24, marginLeft: -48, borderRadius: 14, background: '#000' }} />
        </div>
      </div>
    </div>
  );
};
