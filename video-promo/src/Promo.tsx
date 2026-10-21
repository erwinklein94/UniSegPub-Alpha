import React from 'react';
import { AbsoluteFill, CalculateMetadataFunction, Sequence, getStaticFiles } from 'remotion';
import { FPS } from './config';
import { Fundo } from './components/base';
import { Gancho } from './scenes/Gancho';
import { Problema } from './scenes/Problema';
import { Solucao } from './scenes/Solucao';
import { Confianca } from './scenes/Confianca';
import { Cta } from './scenes/Cta';
import { SomDesign } from './SomDesign';
import { CenaId, DIMENSOES, Formato, duracaoTotal, montarCenas } from './timeline';

export type PromoProps = {
  formato: Formato;
  /**
   * completo   → música (se existir public/music.mp3) + efeitos
   * sem-musica → só o sound design mínimo
   * mudo       → sem áudio
   */
  audio: 'completo' | 'sem-musica' | 'mudo';
  /** Preenchido automaticamente: existe public/music.mp3? */
  temMusica?: boolean;
};

const CENAS: Record<CenaId, React.FC<{ duracao: number; compacto?: boolean }>> = {
  gancho: Gancho,
  problema: Problema,
  solucao: Solucao,
  confianca: Confianca,
  cta: Cta,
};

export const Promo: React.FC<PromoProps> = ({ formato, audio, temMusica = false }) => {
  const cenas = montarCenas(formato);
  return (
    <AbsoluteFill style={{ backgroundColor: '#06101c' }}>
      <Fundo />
      {cenas.map((c) => {
        const Cena = CENAS[c.id];
        return (
          <Sequence key={c.id} from={c.inicio} durationInFrames={c.duracao} name={c.id}>
            <Cena duracao={c.duracao} compacto={formato === 'bumper'} />
          </Sequence>
        );
      })}
      {audio !== 'mudo' && <SomDesign cenas={cenas} musica={audio === 'completo' && temMusica} efeitos />}
    </AbsoluteFill>
  );
};

/** Uma única composição: formato define tamanho e duração. */
export const calcularMetadados: CalculateMetadataFunction<PromoProps> = async ({ props }) => {
  const temMusica = props.audio === 'completo' && getStaticFiles().some((f) => f.name === 'music.mp3');
  return {
    ...DIMENSOES[props.formato],
    fps: FPS,
    durationInFrames: duracaoTotal(props.formato),
    props: { ...props, temMusica },
  };
};
