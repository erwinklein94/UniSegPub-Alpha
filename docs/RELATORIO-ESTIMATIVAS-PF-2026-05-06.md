# Ajuste de estimativas — Polícia Federal (PF)

Data: 06/05/2026

## Objetivo

Substituir campos “Dados em breve” da Polícia Federal por números estimados, para evitar que o usuário final encontre cards vazios no site, mantendo transparência sobre a natureza estimativa dos dados.

## Campos ajustados

- Efetivo ativo: `≈ 15,7 mil servidores ativos`.
- Aposentados/pensionistas: `≈ 9 mil vínculos`.
- Mulheres: `≈ 3 mil mulheres no quadro ativo/institucional`.
- População de referência: `213,4 milhões de habitantes`.
- Relação estimada: `≈ 1 servidor ativo da PF para cada 13,6 mil habitantes`.
- Faixa pós-recomposição: `≈ 16,7–17,7 mil ativos`, dependendo de formação, nomeação e posse dos concursos/convocações autorizados.

## Critério editorial

Os campos foram preenchidos como estimativas de ordem de grandeza, usando o símbolo `≈` e textos explícitos de cautela. A finalidade é dar noção ao usuário final sem afirmar precisão administrativa, lotação, distribuição territorial ou recorte sensível.

## Fontes de referência indicadas no código

- Polícia Federal/Gov.br.
- Painel Estatístico de Pessoal — PEP/MGI.
- eGP/PF Dados Abertos 2025 T4.
- Portal da Transparência.
- IBGE — população estimada do Brasil em 2025.
- Cebraspe/PF 2025.

## Arquivos afetados

- `js/ui/header-estados.js`
- HTMLs e partials com cache busting atualizado para `header-estados.js?v=20260506pfestimativas1`
- `docs/RELATORIO-ATUALIZACAO-PF-2026-05-06.md`
- `docs/RELATORIO-ESTIMATIVAS-PF-2026-05-06.md`
