import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { CORES, FONTES, TEXTOS } from '../config';
import { Palavras } from '../components/base';
import { entre, semente } from '../anim';
import { useLayout } from '../layout';

const papel = '#e8edf2';
const barra = (w: string, h = 10, cor = '#b9c3cf') => (
  <div style={{ width: w, height: h, borderRadius: 2, background: cor, marginTop: h * 0.9 }} />
);

const Pdf: React.FC = () => (
  <div style={{ width: 300, height: 390, background: papel, borderRadius: 8, padding: 26, boxSizing: 'border-box' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: FONTES.mono, fontSize: 15, color: '#6f7c8d', fontWeight: 700 }}>
      <span style={{ background: '#d5dce4', padding: '3px 8px', borderRadius: 3 }}>PDF</span>
      <span>pág. 47 / 212</span>
    </div>
    <div style={{ fontFamily: FONTES.sans, fontWeight: 800, fontSize: 30, color: '#33435a', marginTop: 22, letterSpacing: '-0.03em' }}>EDITAL</div>
    {barra('90%')}
    {barra('70%')}
    {barra('84%')}
    {barra('40%')}
    {barra('88%')}
    {barra('76%')}
    {barra('62%')}
    {barra('80%')}
  </div>
);

const Diario: React.FC = () => (
  <div style={{ width: 360, height: 300, background: '#f1f3f5', borderRadius: 6, padding: 22, boxSizing: 'border-box' }}>
    <div style={{ fontFamily: FONTES.sans, fontWeight: 800, fontSize: 25, color: '#2a3648', textAlign: 'center', letterSpacing: '0.06em' }}>
      DIÁRIO OFICIAL
    </div>
    <div style={{ fontFamily: FONTES.mono, fontSize: 12, color: '#6f7c8d', textAlign: 'center', marginTop: 6, borderBottom: '1px solid #c6ced8', paddingBottom: 8 }}>
      SEÇÃO 1 · ATOS DO PODER EXECUTIVO
    </div>
    <div style={{ display: 'flex', gap: 14, marginTop: 6 }}>
      {[0, 1, 2].map((c) => (
        <div key={c} style={{ flex: 1 }}>
          {[...Array(7)].map((_, i) => (
            <div key={i} style={{ height: 7, marginTop: 9, background: '#c4ccd6', width: `${70 + semente(c * 10 + i) * 30}%` }} />
          ))}
        </div>
      ))}
    </div>
  </div>
);

const Abas: React.FC = () => {
  const abas = ['salário soldado pm…', 'edital_v2.pdf', 'tabela (3).pdf', 'concurso pm sai?'];
  return (
    <div style={{ width: 620, background: '#1b2738', borderRadius: 10, padding: '12px 12px 0', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', gap: 6 }}>
        {abas.map((a, i) => (
          <div
            key={a}
            style={{
              flex: 1,
              minWidth: 0,
              padding: '10px 12px',
              borderRadius: '8px 8px 0 0',
              background: i === 3 ? '#2b3a50' : '#223146',
              fontFamily: FONTES.sans,
              fontWeight: 500,
              fontSize: 15,
              color: '#c3ccd8',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {a}
          </div>
        ))}
        <div style={{ color: '#8b97a8', fontSize: 22, padding: '4px 6px' }}>+</div>
      </div>
      <div style={{ background: '#2b3a50', height: 54, display: 'flex', alignItems: 'center', padding: '0 16px', gap: 10 }}>
        <div style={{ flex: 1, height: 32, borderRadius: 16, background: '#1b2738', display: 'flex', alignItems: 'center', padding: '0 14px', fontFamily: FONTES.sans, fontSize: 15, color: '#8b97a8' }}>
          quanto ganha soldado pm no meu estado
        </div>
      </div>
    </div>
  );
};

const Boato: React.FC = () => (
  <div style={{ width: 430, background: '#203046', borderRadius: '18px 18px 18px 4px', padding: '16px 20px', boxSizing: 'border-box' }}>
    <div style={{ fontFamily: FONTES.sans, fontStyle: 'italic', fontSize: 14, color: '#8b97a8', marginBottom: 6 }}>Encaminhada com frequência</div>
    <div style={{ fontFamily: FONTES.sans, fontWeight: 500, fontSize: 22, color: '#dfe5ec', lineHeight: 1.3 }}>
      Disseram que o edital sai semana que vem!! Confirma??
    </div>
  </div>
);

const Planilha: React.FC = () => (
  <div style={{ width: 330, background: papel, borderRadius: 6, overflow: 'hidden' }}>
    <div style={{ background: '#d2dae3', padding: '8px 12px', fontFamily: FONTES.mono, fontSize: 13, color: '#4c5a6b', fontWeight: 700 }}>
      tabela_salarial_FINAL(2).xlsx
    </div>
    {[...Array(5)].map((_, r) => (
      <div key={r} style={{ display: 'flex', borderTop: '1px solid #cfd7e0' }}>
        {[...Array(4)].map((_, c) => (
          <div key={c} style={{ flex: 1, height: 26, borderLeft: c ? '1px solid #cfd7e0' : undefined, display: 'flex', alignItems: 'center', padding: '0 6px' }}>
            <div style={{ height: 6, width: `${40 + semente(r * 7 + c) * 50}%`, background: r === 0 ? '#9aa6b5' : '#c0c9d4' }} />
          </div>
        ))}
      </div>
    ))}
  </div>
);

type Frag = { el: React.ReactNode; x: number; y: number; r: number; d: number; z: number };

export const Problema: React.FC<{ duracao: number }> = ({ duracao }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { W, H, vertical, seguro } = useLayout();

  // Posições normalizadas (0–1) da área de fragmentos
  const area = vertical
    ? { x: 0, y: H * 0.08, w: W, h: H * 0.5, escala: 1.25 }
    : { x: W * 0.46, y: H * 0.04, w: W * 0.54, h: H * 0.92, escala: 1.2 };

  const frags: Frag[] = [
    { el: <Diario />, x: 0.06, y: 0.12, r: -7, d: 2, z: 1 },
    { el: <Pdf />, x: 0.55, y: 0.05, r: 6, d: 6, z: 2 },
    { el: <Abas />, x: 0.1, y: 0.5, r: -3, d: 10, z: 3 },
    { el: <Planilha />, x: 0.6, y: 0.58, r: 8, d: 14, z: 2 },
    { el: <Boato />, x: 0.2, y: 0.78, r: 3, d: 20, z: 4 },
  ];

  const saida = entre(frame, duracao - 14, duracao, 0, 1);

  return (
    <AbsoluteFill>
      {frags.map((f, i) => {
        const s = spring({ frame: frame - f.d, fps, config: { damping: 13, stiffness: 180, mass: 0.7 } });
        const lado = i % 2 === 0 ? -1 : 1;
        const tremor = Math.sin((frame + i * 13) / 3.2) * 4 * s;
        const deriva = Math.sin((frame + i * 20) / 18) * 10;
        const x = area.x + f.x * area.w + (1 - s) * lado * 500 + saida * lado * 900;
        const y = area.y + f.y * area.h + deriva + tremor;
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              zIndex: f.z,
              transformOrigin: 'top left',
              transform: `translate(${x}px, ${y}px) scale(${area.escala}) rotate(${f.r + (1 - s) * lado * 25 + tremor * 0.4}deg)`,
              opacity: s * (1 - saida),
              filter: `drop-shadow(0 20px 40px rgba(0,0,0,0.45))`,
            }}
          >
            {f.el}
          </div>
        );
      })}

      {/* Véu para garantir leitura do texto */}
      <AbsoluteFill
        style={{
          background: vertical
            ? `linear-gradient(180deg, transparent 0%, transparent 50%, ${CORES.navy} 64%)`
            : `linear-gradient(90deg, ${CORES.navy} 0%, ${CORES.navy} 42%, transparent 60%)`,
          zIndex: 5,
        }}
      />

      <div
        style={{
          position: 'absolute',
          zIndex: 6,
          left: seguro.left,
          width: vertical ? seguro.width : W * 0.4,
          top: vertical ? H * 0.62 : seguro.top,
          height: vertical ? H * 0.85 - H * 0.62 : seguro.height,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 10,
          opacity: interpolate(saida, [0, 1], [1, 0]),
        }}
      >
        <Palavras texto={TEXTOS.problemaLinha1} tamanho={vertical ? 104 : 96} atraso={8} passo={4} />
        <Palavras texto={TEXTOS.problemaLinha2} tamanho={vertical ? 104 : 96} atraso={46} passo={4} cor={CORES.textoApagado} />
      </div>
    </AbsoluteFill>
  );
};
