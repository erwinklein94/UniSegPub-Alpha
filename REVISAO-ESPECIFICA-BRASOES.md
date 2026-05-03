# Revisão específica — Brasões DF / PF / PRF

## Diagnóstico

A área de brasões foi revisada isoladamente. O código agora tenta carregar automaticamente variações com letras minúsculas, maiúsculas, hífen, underline e nomes descritivos antes de cair para a bandeira do estado/BR.

No pacote revisado aqui, porém, não há arquivo de imagem correspondente aos brasões de PMDF, PCDF, PPDF, BMDF/CBMDF, PF ou PRF dentro da pasta `img/`. Portanto, esses brasões ainda não podem aparecer enquanto os arquivos não estiverem fisicamente dentro do ZIP/projeto.

## Arquivos aceitos agora

### PMDF

- Exemplos aceitos: `img/pmdf.webp` / `img/pmdf.png`; `img/PMDF.webp` / `img/PMDF.png`; `img/pm-df.webp` / `img/pm-df.png`; `img/PM-DF.webp` / `img/PM-DF.png`; `img/pm_df.webp` / `img/pm_df.png`; `img/PM_DF.webp` / `img/PM_DF.png`; `img/brasao-pmdf.webp` / `img/brasao-pmdf.png`; `img/logo-pmdf.webp` / `img/logo-pmdf.png`.

- Encontrado no pacote: **nenhum arquivo correspondente**.

### PCDF

- Exemplos aceitos: `img/pcdf.webp` / `img/pcdf.png`; `img/PCDF.webp` / `img/PCDF.png`; `img/pc-df.webp` / `img/pc-df.png`; `img/PC-DF.webp` / `img/PC-DF.png`; `img/pc_df.webp` / `img/pc_df.png`; `img/PC_DF.webp` / `img/PC_DF.png`; `img/brasao-pcdf.webp` / `img/brasao-pcdf.png`; `img/logo-pcdf.webp` / `img/logo-pcdf.png`.

- Encontrado no pacote: **nenhum arquivo correspondente**.

### PPDF

- Exemplos aceitos: `img/ppdf.webp` / `img/ppdf.png`; `img/PPDF.webp` / `img/PPDF.png`; `img/pp-df.webp` / `img/pp-df.png`; `img/PP-DF.webp` / `img/PP-DF.png`; `img/pp_df.webp` / `img/pp_df.png`; `img/PP_DF.webp` / `img/PP_DF.png`; `img/brasao-ppdf.webp` / `img/brasao-ppdf.png`; `img/logo-ppdf.webp` / `img/logo-ppdf.png`.

- Encontrado no pacote: **nenhum arquivo correspondente**.

### BMDF/CBMDF

- Exemplos aceitos: `img/bmdf.webp` / `img/bmdf.png`; `img/BMDF.webp` / `img/BMDF.png`; `img/bm-df.webp` / `img/bm-df.png`; `img/BM-DF.webp` / `img/BM-DF.png`; `img/cbmdf.webp` / `img/cbmdf.png`; `img/CBMDF.webp` / `img/CBMDF.png`; `img/cbm-df.webp` / `img/cbm-df.png`; `img/CBM-DF.webp` / `img/CBM-DF.png`.

- Encontrado no pacote: **nenhum arquivo correspondente**.

### PF

- Exemplos aceitos: `img/pf.webp` / `img/pf.png`; `img/PF.webp` / `img/PF.png`; `img/dpf.webp` / `img/dpf.png`; `img/DPF.webp` / `img/DPF.png`; `img/brasao-pf.webp` / `img/brasao-pf.png`; `img/logo-pf.webp` / `img/logo-pf.png`; `img/policia-federal.webp` / `img/policia-federal.png`; `img/policiafederal.webp` / `img/policiafederal.png`.

- Encontrado no pacote: **nenhum arquivo correspondente**.

### PRF

- Exemplos aceitos: `img/prf.webp` / `img/prf.png`; `img/PRF.webp` / `img/PRF.png`; `img/brasao-prf.webp` / `img/brasao-prf.png`; `img/logo-prf.webp` / `img/logo-prf.png`; `img/policia-rodoviaria-federal.webp` / `img/policia-rodoviaria-federal.png`; `img/policiarodoviariafederal.webp` / `img/policiarodoviariafederal.png`; `img/policia-rodoviária-federal.webp` / `img/policia-rodoviária-federal.png`.

- Encontrado no pacote: **nenhum arquivo correspondente**.

## Arquivos JavaScript atualizados

- `js/ui/header-estados.js`
- `js/chunks/06-header-estados.js`
- `js/script-original.js`
- `js/dist/app.bundle.js`

## Validação

- `node --check` executado nos arquivos JS principais e no bundle.
- Cache bust do bundle atualizado no `index.html`.
- Inventário da pasta `img/` conferido: 119 imagens; nenhuma com nome de DF/PF/PRF.
