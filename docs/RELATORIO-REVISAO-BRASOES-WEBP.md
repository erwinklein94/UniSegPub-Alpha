# Relatório de Revisão — Brasões e WebP
## O que foi feito
- Converti as imagens PNG/JPG/JPEG de `img/` para WebP e removi os arquivos pesados originais.
- Corrigi os caminhos dos brasões para as pastas por carreira: `MILITAR`, `CIVIL`, `PENAL`, `BOMBEIRO` e `FEDERAL`.
- Corrigi o brasão de Rondônia dos Bombeiros: o arquivo antigo `bmrd` foi tratado como `bmro.webp`.
- Atualizei o logo e imagens de produtos/cursos para os subdiretórios corretos: `LOGO`, `SHOPEE` e `HOTMART`.
- Ajustei os fallbacks do site para usar somente WebP nas imagens locais.
- Recriei `js/dist/app.bundle.js` a partir dos arquivos-fonte organizados.

## Revisão técnica realizada
- Arquivos não-WebP restantes em `img/`: **0**.
- Referências locais `.webp` quebradas encontradas em HTML/CSS/JS: **0**.
- `node --check js/dist/app.bundle.js`: aprovado.
- `node --check js/ui/head.js`: aprovado.
- Conferência estática dos botões/eventos: todas as funções chamadas por `safeCall` existem no bundle ou no head.
- Brasões mapeados: **88/110**.

## Brasões ainda faltando
- `bmpb` — BMPB — Corpo de Bombeiros Militar da Paraíba
- `pcap` — PCAP — Polícia Civil de Amapá
- `pcce` — PCCE — Polícia Civil de Ceará
- `pcgo` — PCGO — Polícia Civil de Goiás
- `pcpa` — PCPA — Polícia Civil de Pará
- `pcpb` — PCPB — Polícia Civil de Paraíba
- `pcpe` — PCPE — Polícia Civil de Pernambuco
- `pcpi` — PCPI — Polícia Civil de Piauí
- `pcrn` — PCRN — Polícia Civil de Rio Grande do Norte
- `pcro` — PCRO — Polícia Civil de Rondônia
- `pcrr` — PCRR — Polícia Civil de Roraima
- `pcse` — PCSE — Polícia Civil de Sergipe
- `pmap` — PMAP — Polícia Militar de Amapá
- `pmce` — PMCE — Polícia Militar de Ceará
- `pmpa` — PMPA — Polícia Militar de Pará
- `pmpb` — PMPB — Polícia Militar de Paraíba
- `pmpe` — PMPE — Polícia Militar de Pernambuco
- `pmpi` — PMPI — Polícia Militar de Piauí
- `pmrn` — PMRN — Polícia Militar de Rio Grande do Norte
- `pmro` — PMRO — Polícia Militar de Rondônia
- `pmrr` — PMRR — Polícia Militar de Roraima
- `pmse` — PMSE — Polícia Militar de Sergipe
