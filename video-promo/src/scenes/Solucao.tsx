import React from 'react';
import { AbsoluteFill, Sequence, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { CORES, FONTES, PALAVRA_DESTAQUE, TEXTOS } from '../config';
import { Eyebrow, Palavras } from '../components/base';
import { Celular } from '../components/Celular';
import { TelaAreas, TelaConcursos, TelaCobertura, TelaRemuneracao } from '../components/site';
import { entre } from '../anim';
import { useLayout } from '../layout';
import { telasSolucao } from '../timeline';

const TELAS = [TelaRemuneracao, TelaCobertura, TelaConcursos, TelaAreas];
const TRANSICAO = 9;

const Deslize: React.FC<{ children: React.ReactNode; primeira: boolean }> = ({ children, primeira }) => {
  const f = useCurrentFrame();
  const x = primeira ? 0 : entre(f, 0, TRANSICAO, 100, 0);
  return <div style={{ position: 'absolute', inset: 0, transform: `translateX(${x}%)`, boxShadow: x > 0 ? '-20px 0 40px rgba(6,16,31,.25)' : undefined }}>{children}</div>;
};

export const Solucao: React.FC<{ duracao: number }> = ({ duracao }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { W, H, vertical, seguro } = useLayout();
  const telas = telasSolucao();

  const entrada = spring({ frame, fps, config: { damping: 15, stiffness: 140, mass: 0.8 } });
  const saida = entre(frame, duracao - 10, duracao, 0, 1);

  // Leve aproximação durante os contadores (tela 2)
  const t2 = telas[1];
  const zoom = interpolate(frame, [t2.inicio, t2.inicio + 12, t2.inicio + t2.duracao - 8, t2.inicio + t2.duracao], [1, 1.05, 1.05, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const larguraCel = vertical ? 580 : 418;
  const alturaCel = Math.round(larguraCel * 2.06);
  const celX = vertical ? (W - larguraCel) / 2 : W * 0.68 - larguraCel / 2;
  const celY = vertical ? 182 : (H - alturaCel) / 2;

  const atual = telas.findIndex((t) => frame >= t.inicio && frame < t.inicio + t.duracao);
  const passo = TEXTOS.solucao[Math.max(0, atual)];
  const inicioPasso = telas[Math.max(0, atual)].inicio;

  return (
    <AbsoluteFill>
      <div
        style={{
          position: 'absolute',
          left: celX,
          top: celY,
          transform: `translateY(${(1 - entrada) * H * 0.35 + saida * 60}px) scale(${zoom * (1 - saida * 0.08)}) rotate(${(1 - entrada) * 6}deg)`,
          transformOrigin: '50% 30%',
          opacity: 1 - saida,
        }}
      >
        <Celular largura={larguraCel}>
          {telas.map((t, i) => {
            const Tela = TELAS[i];
            return (
              <Sequence key={i} from={t.inicio} durationInFrames={t.duracao + (i < telas.length - 1 ? TRANSICAO : 0)} layout="none">
                <Deslize primeira={i === 0}>
                  <Tela />
                </Deslize>
              </Sequence>
            );
          })}
        </Celular>
        <div
          style={{
            position: 'absolute',
            top: alturaCel + 14,
            width: '100%',
            textAlign: 'center',
            fontFamily: FONTES.mono,
            fontSize: vertical ? 16 : 15,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: CORES.textoApagado,
            opacity: vertical ? 0 : 1,
          }}
        >
          {TEXTOS.telaIlustrativa}
        </div>
      </div>

      {/* Legenda da tela atual */}
      <div
        key={atual}
        style={{
          position: 'absolute',
          left: seguro.left,
          width: vertical ? seguro.width : W * 0.44,
          top: vertical ? celY + alturaCel + 26 : seguro.top,
          height: vertical ? H * 0.85 - (celY + alturaCel + 26) : seguro.height,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: vertical ? 'flex-start' : 'center',
          gap: vertical ? 16 : 28,
          opacity: 1 - saida,
        }}
      >
        <Sequence from={inicioPasso} layout="none">
          <Eyebrow texto={passo.eyebrow} tamanho={vertical ? 22 : 22} />
          <Palavras
            texto={passo.legenda}
            tamanho={vertical ? 54 : 84}
            altura={1.08}
            passo={2}
            atraso={2}
            destaque={[PALAVRA_DESTAQUE]}
            maxWidth={vertical ? seguro.width : W * 0.44}
          />
        </Sequence>
        {vertical && (
          <div style={{ fontFamily: FONTES.mono, fontSize: 15, letterSpacing: '0.2em', textTransform: 'uppercase', color: CORES.textoApagado, marginTop: 'auto' }}>
            {TEXTOS.telaIlustrativa}
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};
