import React from 'react';
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { CORES, FONTES, PALAVRA_DESTAQUE, TEXTOS, meioTempo } from '../config';
import { BotaoOuro, Logo, Palavras } from '../components/base';
import { entre } from '../anim';
import { useLayout } from '../layout';

export const Cta: React.FC<{ duracao: number; compacto?: boolean }> = ({ compacto = false }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { vertical, seguro } = useLayout();

  const logo = spring({ frame, fps, config: { damping: 12, stiffness: 170, mass: 0.7 } });
  const botao = spring({ frame: frame - (compacto ? 10 : 22), fps, config: { damping: 11, stiffness: 220, mass: 0.6 } });
  const url = entre(frame, compacto ? 16 : 30, compacto ? 28 : 42);
  const batida = meioTempo * 2;
  const pulso = frame > 40 ? 1 + Math.exp(-(((frame - 40) % batida) / batida) * 7) * 0.035 : 1;

  const logoT = vertical ? 300 : 210;

  return (
    <AbsoluteFill>
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
          gap: vertical ? 54 : 34,
          textAlign: 'center',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: vertical ? 30 : 20, opacity: logo, transform: `scale(${0.7 + logo * 0.3})` }}>
          <Logo tamanho={logoT} />
          <div style={{ fontFamily: FONTES.mono, fontWeight: 700, fontSize: vertical ? 26 : 22, letterSpacing: '0.3em', textTransform: 'uppercase', color: CORES.textoSuave }}>
            {TEXTOS.marcaCompleta}
          </div>
        </div>

        <Palavras
          texto={compacto ? TEXTOS.ctaTituloCurto : TEXTOS.ctaTitulo}
          tamanho={vertical ? 72 : 64}
          alinhamento="center"
          altura={1.05}
          passo={2}
          atraso={compacto ? 4 : 8}
          destaque={[PALAVRA_DESTAQUE]}
          maxWidth={vertical ? seguro.width : 1300}
        />

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: vertical ? 34 : 24 }}>
          <div style={{ opacity: Math.min(1, botao * 1.3), transform: `scale(${(0.6 + botao * 0.4) * pulso})` }}>
            <BotaoOuro texto={TEXTOS.ctaBotao} tamanho={vertical ? 52 : 42} />
          </div>
          <div
            style={{
              fontFamily: FONTES.mono,
              fontWeight: 700,
              fontSize: vertical ? 46 : 40,
              letterSpacing: '0.01em',
              color: CORES.texto,
              opacity: url,
              transform: `translateY(${(1 - url) * 16}px)`,
              paddingBottom: 8,
              borderBottom: `2px solid ${CORES.linhaForte}`,
            }}
          >
            {TEXTOS.url}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
