# Melhoria — Remuneração Tabelada PRF — 03/05/2026

## Alteração aplicada

- Corrigido o cadastro de cargos da PRF para preencher `text` e `val`, além de manter `nome` e `id`.
- A tabela de Remuneração Tabelada passa a exibir explicitamente o cargo/classe/padrão em todas as linhas da PRF.
- Adicionado fallback no renderizador de remuneração para usar `text`, `nome`, `cargo`, `label`, `id` ou `val`, evitando células vazias em futuras instituições.
- Corrigidos valores de subsídio PRF 2026 conforme Lei nº 14.875/2024, Anexo XXVII.
- Atualizado versionamento dos scripts `remuneracao.js` e `header-estados.js` nos HTML para reduzir cache antigo em deploy estático.

## Fonte normativa usada

- Lei nº 14.875/2024, Anexo XXVII — tabela de subsídio da carreira de Policial Rodoviário Federal com efeitos financeiros a partir de 01/05/2026.
