# Vídeo promo · Universo Segurança Pública

Anúncio curto do portal feito em [Remotion](https://www.remotion.dev) (React + TypeScript).
Uma única composição (`src/Promo.tsx`) gera os três formatos a partir da prop `formato`.

| Composição         | Formato              | Duração | Saída                              |
| ------------------ | -------------------- | ------- | ---------------------------------- |
| `Promo-Vertical`   | 1080×1920 · 30 fps   | 30 s    | `out/unisegpub-vertical-30s.mp4`   |
| `Promo-Horizontal` | 1920×1080 · 30 fps   | 30 s    | `out/unisegpub-horizontal-30s.mp4` |
| `Promo-Bumper`     | 1080×1920 · 30 fps   | 6 s     | `out/unisegpub-bumper-6s.mp4`      |

## Uso

```bash
cd video-promo
npm install
npm run dev        # Remotion Studio, para ver e ajustar
npm run stills     # quadros 0, 5, 12, 22 e 28 s em out/stills/ (conferência)
npm run render     # os três MP4 em out/
```

## Trocar textos

Tudo está em **`src/config.ts` → `TEXTOS`**: gancho, problema, as 4 legendas da cena do
celular (`solucao`), confiança, CTA e URL. A palavra com marca-texto dourado é
`PALAVRA_DESTAQUE` (`"lugar."`). Regra do anúncio: sem valores salariais e sem datas de edital.

O conteúdo das telas do celular (cards de concurso, siglas, áreas) fica em
`src/components/site.tsx` (constantes `CARDS`, `SIGLAS`, `AREAS`).

## Trocar cores e fontes

`src/config.ts` → `CORES` e `FONTES`. O dourado (`ouro`) é reservado ao CTA e à palavra em
destaque. As fontes Inter e JetBrains Mono estão em `public/fonts/` (licença OFL), então o
render não depende de internet.

## Trocar duração

`src/config.ts` → `TIMELINE_30S` e `TIMELINE_BUMPER` (em segundos, por cena). Os cortes são
encaixados automaticamente na grade de 110 BPM (`BPM`). A cena do celular é dividida
igualmente entre as 4 telas. A duração total da composição é recalculada sozinha.

## Áudio

- **Sound design mínimo**: `public/sfx/*.wav`, sintetizados por `npm run sfx`
  (`scripts/gerar-sfx.mjs`), sem material de terceiros. Os disparos ficam em `src/SomDesign.tsx`.
- **Música (opcional)**: coloque uma faixa livre de direitos em `public/music.mp3` e renderize de
  novo. Ela entra sozinha, com fade no fim. Sem o arquivo, o vídeo sai só com o sound design.
- **Versão sem música** (mesmo com `music.mp3` presente): `npm run render:sem-musica`.
  Para tirar todo o áudio: `--props=props/mudo.json`.

## Áreas seguras

`src/layout.ts`: 10% de margem em todas as bordas e, no vertical, nada importante nos 15%
inferiores (UI de Reels, Shorts e TikTok). As legendas queimadas da cena do celular
respeitam esse limite.

## Observações

- Não há brasões oficiais no anúncio: as instituições aparecem como siglas em tipografia.
  As telas trazem a etiqueta "Telas ilustrativas".
- O logo é `public/logo.webp` (cópia de `img/LOGO/logoleao.webp`), recortado em círculo.
- Em servidores sem acesso ao download do Chrome do Remotion, aponte um Chromium local:
  `REMOTION_BROWSER_EXECUTABLE=/caminho/do/chromium npm run render`.
