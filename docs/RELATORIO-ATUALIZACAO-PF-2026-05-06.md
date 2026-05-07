# Relatório de atualização — Polícia Federal (PF) — 06/05/2026

## Escopo aplicado

Atualização do cadastro institucional e da aba de remuneração tabelada da Polícia Federal no portal UniSegPub, com foco em manter o mesmo nível de detalhamento usado nas instituições já revisadas, especialmente PMESP.

## Arquivos alterados

- `js/data/parametros-cargos.js`
  - Inclusão de `CARGOS_PF` com 20 linhas remuneratórias: Delegado, Perito Criminal, Agente, Escrivão e Papiloscopista, cada um com classes/categorias de carreira.
  - Inclusão dos critérios e cautelas de remuneração federal 2026.

- `js/services/remuneracao.js`
  - Inclusão da fonte oficial da PF em `REMUNERACAO_FONTES_OFICIAIS`.
  - Inclusão de `REMUNERACAO_SP_OFICIAL.pf` para renderização direta da tabela PF.
  - Inclusão de `pf: CARGOS_PF` no mapa de cargos.
  - Ajuste de resumo de adicionais/benefícios da PF, com diferenciação de subsídio, auxílio-alimentação, pré-escolar, saúde suplementar, fronteira e demais rubricas não somadas.
  - Remoção de trecho de risco que poderia acionar variáveis indefinidas na renderização de instituições federais.

- `js/ui/header-estados.js`
  - Atualização do resumo institucional da PF.
  - Substituição dos campos pendentes por estimativas identificadas: ativos ≈ 15,7 mil, inativos/pensionistas ≈ 9 mil, recorte feminino ≈ 3 mil e razão populacional ≈ 1:13,6 mil habitantes.
  - Compatibilização do gerador federal para reaproveitar `CARGOS_PF` detalhado quando disponível.
  - Atualização da fonte remuneratória PF para Lei nº 14.875/2024, Anexo XXVI.

- `*.html` e `src/pages/*.template.html`
  - Atualização dos parâmetros de cache dos scripts alterados para `20260506pf1`.

## Tabela remuneratória PF aplicada

### Delegado de Polícia Federal e Perito Criminal Federal

- Classe Especial: R$ 41.350,00
- 1ª Classe: R$ 35.377,35
- 2ª Classe: R$ 30.869,46
- 3ª Classe: R$ 27.831,70

### Agente de Polícia Federal, Escrivão de Polícia Federal e Papiloscopista Policial Federal

- Classe Especial: R$ 25.250,00
- 1ª Classe: R$ 19.617,37
- 2ª Classe: R$ 16.761,16
- 3ª Classe: R$ 14.710,10

## Cautelas implementadas no texto da aba de remuneração

- A tabela mostra subsídio bruto mensal, não remuneração total individual.
- Auxílio-alimentação federal, pré-escolar, saúde suplementar, fronteira, diárias, ajuda de custo, transporte, adicional de férias, gratificação natalina, abono de permanência, função e parcelas pessoais não foram somados automaticamente.
- A indenização de fronteira foi descrita como condicionada a localidade estratégica e efetivo trabalho, com vedação de somas indevidas.
- O efetivo da PF agora aparece como estimativa identificada, para evitar card vazio no site. A conferência exata continua recomendada no PEP/MGI e no Portal da Transparência antes de uso administrativo ou jurídico.

## Fontes principais

- Lei nº 14.875/2024, Anexo XXVI — tabela de subsídio da Carreira Policial Federal.
- Polícia Federal/Gov.br — competências, estrutura, direção e servidores.
- MGI/Gov.br — PEP e benefícios federais 2026.
- IBGE — população estimada do Brasil 2025.
- Lei nº 12.855/2013 — indenização de fronteira.

## Validação técnica

- `node --check` executado em todos os arquivos JavaScript dentro de `js/`.
- Teste pontual em ambiente Node com stubs confirmou `gerarRemuneracaoTabelada('pf')` retornando 20 linhas.


## Ajuste posterior — estimativas PF

A pedido do usuário, os campos que apareciam como pendentes na PF foram substituídos por números estimados e rotulados como estimativa. O objetivo é entregar ao visitante uma noção de escala sem afirmar precisão oficial individualizada.

- Ativos: ≈ 15,7 mil servidores, com base em ordem de grandeza do eGP/PF 2025 T4 e orientação de consulta do PEP/MGI.
- Recomposição 2026: observação de possível faixa de 16,7–17,7 mil após formação, nomeação e posse, considerando as autorizações de concurso/convocação divulgadas pela PF.
- Aposentados e pensionistas: ≈ 9 mil vínculos, como estimativa orientativa para o card institucional.
- Mulheres: ≈ 3 mil, como estimativa conservadora de recorte ativo/institucional.
- Relação população/ativo: ≈ 1 servidor ativo da PF para cada 13,6 mil habitantes, usando população nacional IBGE 2025 de 213,4 milhões e base ativa estimada de 15,7 mil.

Esses números não devem ser usados como certidão oficial de efetivo, distribuição, lotação ou direito individual.
