import { loadFont } from '@remotion/fonts';
import { staticFile } from 'remotion';

// Fontes locais (public/fonts, licença OFL): o render não depende de internet.
const arquivos: [string, string, string][] = [
  ['Inter', '500', 'inter-latin-500-normal.woff2'],
  ['Inter', '600', 'inter-latin-600-normal.woff2'],
  ['Inter', '700', 'inter-latin-700-normal.woff2'],
  ['Inter', '800', 'inter-latin-800-normal.woff2'],
  ['JetBrains Mono', '500', 'jetbrains-mono-latin-500-normal.woff2'],
  ['JetBrains Mono', '700', 'jetbrains-mono-latin-700-normal.woff2'],
];

export const carregarFontes = () =>
  Promise.all(
    arquivos.map(([family, weight, arquivo]) =>
      loadFont({ family, weight, url: staticFile(`fonts/${arquivo}`), format: 'woff2' }),
    ),
  );
