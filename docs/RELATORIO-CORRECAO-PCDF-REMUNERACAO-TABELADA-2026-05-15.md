# Correção — PCDF na Remuneração Tabelada — 2026-05-15

## Ajuste aplicado

- Incluída a opção **PCDF — Polícia Civil do Distrito Federal** no seletor de instituições da página `remuneracao.html`.
- Criado card estático da PCDF na aba **Remuneração Tabelada**, com resumo editorial, mini-tabela e botão de consulta detalhada.
- Incluída a constante `CARGOS_PCDF` em `js/data/parametros-cargos.js` com 9 linhas remuneratórias cadastradas.
- Incluída a PCDF no mapa de `js/services/remuneracao.js`, permitindo renderização da tabela detalhada.
- Incluída a PCDF em `INSTITUICOES_VALIDAS` no `js/data/portal-config.js`, evitando normalização indevida para PMESP.
- Incluída a PCDF no mapa de cargos de `js/ui/navegacao-ui.js`, para manter compatibilidade com `mudarInstituicao`.
- Atualizados os parâmetros de cache-busting dos scripts afetados em `remuneracao.html`.

## Valores cadastrados

- Delegado de Polícia — Classe Especial: R$ 38.872,66.
- Delegado de Polícia — 3ª Classe / inicial: R$ 26.690,15.
- Perito Criminal — inicial: R$ 26.690,15.
- Perito Médico-Legista — inicial: R$ 26.690,15.
- Papiloscopista Policial — inicial: R$ 13.794,41.
- Agente Policial de Custódia — inicial: R$ 13.794,41.
- Gestor de Apoio — referência superior cadastrada: R$ 8.719,13.
- Gestor de Apoio — referência inicial cadastrada: R$ 6.539,35.
- Analista de Apoio — inicial: R$ 4.162,94.

## Observação editorial

Os valores foram tratados como remuneração bruta informativa. Benefícios, indenizações, adicionais, funções, plantões, curso de formação, descontos e parcelas pessoais não foram somados automaticamente.

## Proteção adicional

- Ajustada a leitura de estruturas genéricas em `js/services/remuneracao.js` e `js/ui/navegacao-ui.js` para evitar fallback indevido quando o carregamento assíncrono ainda não disponibilizar `CARGOS_ESTRUTURA_GENERICAS`.
