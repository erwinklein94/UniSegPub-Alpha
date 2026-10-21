// Gera stills de conferência (legibilidade e enquadramento) em out/stills/.
// Uso: npm run stills            → segundos 0, 5, 12, 22 e 28 (vertical e horizontal) + bumper
//      npm run stills -- 3 9.5   → segundos personalizados
import { mkdirSync } from 'node:fs';
import path from 'node:path';
import { bundle } from '@remotion/bundler';
import { renderStill, selectComposition } from '@remotion/renderer';

const segundos = process.argv.slice(2).map(Number).filter((n) => !Number.isNaN(n));
const lista = segundos.length ? segundos : [0, 5, 12, 22, 28];
mkdirSync('out/stills', { recursive: true });

const alvos = [
  { id: 'Promo-Vertical', segundos: lista },
  { id: 'Promo-Horizontal', segundos: lista },
  { id: 'Promo-Bumper', segundos: segundos.length ? lista.filter((s) => s < 6) : [0, 2, 4.5] },
];

const serveUrl = await bundle({ entryPoint: path.resolve('src/index.ts') });
const browserExecutable = process.env.REMOTION_BROWSER_EXECUTABLE || null;

for (const { id, segundos: ss } of alvos) {
  const composition = await selectComposition({ serveUrl, id, inputProps: {}, browserExecutable });
  for (const s of ss) {
    const frame = Math.min(composition.durationInFrames - 1, Math.round(s * composition.fps));
    const output = `out/stills/${id}-${String(s).replace('.', '_')}s.png`;
    await renderStill({ serveUrl, composition, frame, output, browserExecutable, overwrite: true });
    console.log('ok', output);
  }
}
