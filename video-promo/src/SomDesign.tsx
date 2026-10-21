import React from 'react';
import { Audio, Sequence, interpolate, staticFile, useVideoConfig } from 'remotion';
import { Cena, telasSolucao } from './timeline';

type Efeito = 'whoosh' | 'tick' | 'click' | 'pop' | 'thump' | 'chime';
type Disparo = { em: number; som: Efeito; volume?: number };

/** Lista de efeitos (em quadros absolutos) a partir das cenas montadas. */
export const disparosDeSom = (cenas: Cena[]): Disparo[] => {
  const d: Disparo[] = [];
  for (const c of cenas) {
    const a = c.inicio;
    switch (c.id) {
      case 'gancho':
        d.push({ em: a, som: 'whoosh', volume: 0.7 });
        for (let k = 0; k < 13; k++) d.push({ em: a + 22 + Math.round(k * 4.4), som: 'tick', volume: 0.35 });
        d.push({ em: a + 80, som: 'pop', volume: 0.6 });
        break;
      case 'problema':
        d.push({ em: a, som: 'thump', volume: 0.8 });
        d.push({ em: a + 2, som: 'whoosh', volume: 0.45 });
        d.push({ em: a + 12, som: 'whoosh', volume: 0.35 });
        d.push({ em: a + c.duracao - 14, som: 'whoosh', volume: 0.6 });
        break;
      case 'solucao': {
        d.push({ em: a, som: 'thump', volume: 0.7 });
        d.push({ em: a + 1, som: 'whoosh', volume: 0.6 });
        const t = telasSolucao();
        // tela 1: toques
        [28, 42, 62].forEach((x) => d.push({ em: a + t[0].inicio + x, som: 'click', volume: 0.7 }));
        d.push({ em: a + t[0].inicio + 68, som: 'whoosh', volume: 0.3 });
        // tela 2: contadores
        d.push({ em: a + t[1].inicio, som: 'whoosh', volume: 0.3 });
        for (let k = 0; k < 11; k++) d.push({ em: a + t[1].inicio + 4 + Math.round(Math.pow(k / 10, 1.8) * 32), som: 'tick', volume: 0.3 });
        // tela 3: selos
        d.push({ em: a + t[2].inicio, som: 'whoosh', volume: 0.3 });
        [14, 22, 30].forEach((x) => d.push({ em: a + t[2].inicio + x, som: 'pop', volume: 0.55 }));
        // tela 4: cards
        d.push({ em: a + t[3].inicio, som: 'whoosh', volume: 0.3 });
        for (let k = 0; k < 6; k++) d.push({ em: a + t[3].inicio + 6 + k * 4, som: 'tick', volume: 0.3 });
        break;
      }
      case 'confianca':
        d.push({ em: a, som: 'thump', volume: 0.8 });
        d.push({ em: a + 16, som: 'chime', volume: 0.7 });
        for (let k = 0; k < 4; k++) d.push({ em: a + 40 + k * 6, som: 'tick', volume: 0.35 });
        break;
      case 'cta':
        d.push({ em: a, som: 'thump', volume: 0.9 });
        d.push({ em: a + 4, som: 'whoosh', volume: 0.4 });
        d.push({ em: a + (c.duracao < 100 ? 10 : 22), som: 'chime', volume: 0.75 });
        break;
    }
  }
  return d;
};

export const SomDesign: React.FC<{ cenas: Cena[]; musica: boolean; efeitos: boolean }> = ({ cenas, musica, efeitos }) => {
  const { durationInFrames } = useVideoConfig();
  return (
    <>
      {musica && (
        <Audio
          src={staticFile('music.mp3')}
          volume={(f) =>
            interpolate(f, [0, 8, durationInFrames - 24, durationInFrames - 1], [0, 0.55, 0.55, 0], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            })
          }
        />
      )}
      {efeitos &&
        disparosDeSom(cenas)
          .filter((x) => x.em < durationInFrames)
          .map((x, i) => (
            <Sequence key={i} from={x.em} layout="none">
              <Audio src={staticFile(`sfx/${x.som}.wav`)} volume={(x.volume ?? 0.6) * (musica ? 0.7 : 1)} />
            </Sequence>
          ))}
    </>
  );
};
