# Relatório de refatoração da vitrine de produtos — 2026-05-03

## O que foi alterado

- Os cards da aba `produtos.html` foram removidos do HTML estático e passaram a ser renderizados por JavaScript.
- Os dados editáveis dos produtos agora ficam em `js/data/produtos-data.js`.
- A montagem visual dos cards agora fica em `js/pages/produtos-render.js`.
- O HTML da vitrine ficou com containers identificados por `data-produtos-categoria`, mantendo as mesmas classes CSS já usadas no projeto.

## Categorias migradas

- `produtosFisicos`: 25 cards.
- `cursosGerais`: 2 cards.
- `cursosPmesp`: 3 cards.
- `cursosPcsp`: 2 cards.
- `livrosEbooks`: 5 cards.

## Como adicionar um novo produto

1. Abra `js/data/produtos-data.js`.
2. Escolha a categoria correta.
3. Copie um objeto de produto existente.
4. Altere `titulo`, `href`, `ariaLabel`, `imagem.src`, `imagem.alt`, `imagem.dataAttrs["data-img-base"]`, `descricao`, `meta` e `cta`.
5. Salve e teste `produtos.html`.

## Validação feita

- Sintaxe JavaScript validada com `node --check`.
- Preservação dos links, textos, metas, imagens, badges e classes dos cards existentes.
- Validação das referências locais usadas pelo `produtos.html`.
