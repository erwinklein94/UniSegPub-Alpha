# Revisão — Padronização "Dados em breve"

## Regra aplicada

Todo conteúdo sem informação segura, fonte oficial, link válido ou dado consolidado passa a ser exibido no site somente como:

> Dados em breve

## Áreas revisadas

- Resumo institucional
- Aba Concursos
- Comparador de carreiras
- Ações judiciais
- Associações
- Aba Poderes e Deveres
- Dados estruturais de instituições federais, estaduais/distritais e municipais
- Fallbacks de remuneração quando não houver valor confirmado

## Ajustes técnicos

- Adicionada normalização global de textos pendentes no bundle principal.
- Campos com expressões como "a confirmar", "a definir", "preencher", "consultar", "pendente", "estrutura aberta/criada" e similares passam a exibir `Dados em breve`.
- Fontes sem URL pública válida não geram link quebrado.
- Na aba Poderes e Deveres, itens de lei/entendimento sem fonte segura são renderizados como um único bloco: `Dados em breve`.
- Na aba Concursos, fontes/site ausentes exibem apenas `Dados em breve`.
- Ações e associações sem fonte/dado seguro exibem apenas `Dados em breve`.

## Validação

- `node --check js/dist/app.bundle.js`: aprovado.
- `node --check js/ui/header-estados.js`: aprovado.
- `node --check js/pages/concursos-comparador.js`: aprovado.
- `node --check js/pages/poderes-deveres.js`: aprovado.
- Validação runtime com mock de DOM: aprovada.
- Verificação dos objetos normalizados de concursos, resumos, ações, associações, polícias penais e configurações: sem placeholders pendentes após carregamento.
