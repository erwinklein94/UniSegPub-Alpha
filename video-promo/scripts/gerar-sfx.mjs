// Gera os efeitos sonoros (sound design mínimo) em public/sfx/*.wav.
// Tudo é sintetizado aqui: nenhum áudio de terceiros, sem direitos autorais.
// Uso: npm run sfx
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const SR = 44100;
const pasta = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'sfx');
mkdirSync(pasta, { recursive: true });

let semente = 7;
const ruido = () => {
  semente = (semente * 1103515245 + 12345) & 0x7fffffff;
  return (semente / 0x7fffffff) * 2 - 1;
};

const salvarWav = (nome, amostras) => {
  const n = amostras.length;
  const buf = Buffer.alloc(44 + n * 2);
  buf.write('RIFF', 0);
  buf.writeUInt32LE(36 + n * 2, 4);
  buf.write('WAVE', 8);
  buf.write('fmt ', 12);
  buf.writeUInt32LE(16, 16);
  buf.writeUInt16LE(1, 20);
  buf.writeUInt16LE(1, 22);
  buf.writeUInt32LE(SR, 24);
  buf.writeUInt32LE(SR * 2, 28);
  buf.writeUInt16LE(2, 32);
  buf.writeUInt16LE(16, 34);
  buf.write('data', 36);
  buf.writeUInt32LE(n * 2, 40);
  for (let i = 0; i < n; i++) {
    const v = Math.max(-1, Math.min(1, amostras[i]));
    buf.writeInt16LE(Math.round(v * 32767), 44 + i * 2);
  }
  writeFileSync(join(pasta, `${nome}.wav`), buf);
  console.log(`sfx/${nome}.wav`, (n / SR).toFixed(2) + 's');
};

const gerar = (seg, fn) => Array.from({ length: Math.round(seg * SR) }, (_, i) => fn(i / SR, i));

// Whoosh: ruído com filtro passa-banda varrendo a frequência
{
  const dur = 0.5;
  let low = 0, band = 0;
  salvarWav(
    'whoosh',
    gerar(dur, (t) => {
      const p = t / dur;
      const fc = 350 + Math.sin(p * Math.PI) * 2600;
      const f = 2 * Math.sin((Math.PI * fc) / SR);
      const q = 0.55;
      const x = ruido();
      low += f * band;
      const high = x - low - q * band;
      band += f * high;
      const env = Math.sin(Math.min(1, p / 0.45) * (Math.PI / 2)) * Math.pow(1 - p, 1.6);
      return band * env * 0.55;
    }),
  );
}

// Tick: clique curto e agudo (contadores, cards)
salvarWav('tick', gerar(0.045, (t) => Math.sin(2 * Math.PI * 2300 * t) * Math.exp(-t * 110) * 0.3));

// Click: toque na tela
salvarWav(
  'click',
  gerar(0.07, (t) => (Math.sin(2 * Math.PI * 1250 * t) * Math.exp(-t * 75) * 0.32 + ruido() * Math.exp(-t * 420) * 0.18)),
);

// Pop: selos de status
{
  let fase = 0;
  salvarWav(
    'pop',
    gerar(0.14, (t) => {
      const freq = 520 + 480 * Math.exp(-t * 35);
      fase += (2 * Math.PI * freq) / SR;
      return Math.sin(fase) * Math.exp(-t * 28) * 0.34;
    }),
  );
}

// Thump: batida grave nos cortes
{
  let fase = 0;
  salvarWav(
    'thump',
    gerar(0.4, (t) => {
      const freq = 46 + 70 * Math.exp(-t * 22);
      fase += (2 * Math.PI * freq) / SR;
      const ataque = Math.min(1, t / 0.004);
      return Math.sin(fase) * Math.exp(-t * 9) * ataque * 0.7 + ruido() * Math.exp(-t * 600) * 0.06;
    }),
  );
}

// Chime: acorde suave (selo de fonte oficial e CTA)
salvarWav(
  'chime',
  gerar(1.5, (t) => {
    const a = Math.min(1, t / 0.008);
    return (
      a *
      (Math.sin(2 * Math.PI * 880 * t) * Math.exp(-t * 3.2) * 0.16 +
        Math.sin(2 * Math.PI * 1318.5 * t) * Math.exp(-t * 4.2) * 0.11 +
        Math.sin(2 * Math.PI * 1760 * t) * Math.exp(-t * 6) * 0.07)
    );
  }),
);
