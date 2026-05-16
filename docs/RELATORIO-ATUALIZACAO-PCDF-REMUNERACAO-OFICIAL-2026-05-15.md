# Relatório — Atualização da remuneração PCDF na aba Remuneração Tabelada

Data: 2026-05-15

## O que foi corrigido

- A PCDF foi mantida no seletor de instituições da aba `remuneracao.html`, no grupo Distrito Federal (DF).
- O card `remu-card-pcdf` foi substituído por texto editorial coerente com o regime de subsídio da PCDF.
- O indicador de linhas cadastradas foi corrigido de 9 para 28.
- O menor bruto listado foi corrigido para R$ 13.794,41.
- O maior bruto listado foi mantido em R$ 38.872,66.
- A fonte principal foi atualizada para a Lei nº 15.395/2026, Anexos III e IV.

## Arquivos alterados

- `remuneracao.html`
- `js/data/parametros-cargos.js`
- `js/services/remuneracao.js`
- `js/data/portal-config.js`
- `js/ui/navegacao-ui.js`

## Dados cadastrados

`CARGOS_PCDF` agora possui 28 linhas:

- Delegado de Polícia — 4 classes
- Perito Criminal — 4 classes
- Perito Médico-Legista — 4 classes
- Agente de Polícia — 4 classes
- Escrivão de Polícia — 4 classes
- Papiloscopista Policial — 4 classes
- Agente Policial de Custódia — 4 classes

## Regra de cálculo

A PCDF passa a usar cálculo simples: o subsídio informado em cada linha já é o bruto mensal da tabela. Benefícios e verbas eventuais não foram somados automaticamente.

## Fonte usada

Lei nº 15.395, de 27 de abril de 2026 — Anexos III e IV, com valores vigentes a partir de 1º de janeiro de 2026.
