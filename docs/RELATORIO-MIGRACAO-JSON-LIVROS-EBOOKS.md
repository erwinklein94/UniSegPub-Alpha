# Migração piloto para JSON — livros/e-books

## Objetivo

Migrar uma categoria de dados para JSON começando pela menos crítica da vitrine: `livrosEbooks`.

## Arquivo JSON criado

- `js/data/produtos-livros-ebooks.json`

## Fallback mantido

O fallback permanece em:

- `js/data/produtos-data.js`

Contratos mantidos:

- `window.UNISEGPUB_PRODUTOS`
- `window.UNISEGPUB_PRODUTOS_JSON_FALLBACKS`
- `livrosEbooks`

## Como funciona

1. `produtos-data.js` carrega os dados principais e registra o fallback de `livrosEbooks`.
2. `produtos-render.js` renderiza com fallback imediatamente.
3. Em seguida tenta carregar `js/data/produtos-livros-ebooks.json`.
4. Se o JSON carregar e for válido, a categoria é substituída pela versão JSON e renderizada novamente.
5. Se o JSON falhar, o fallback em JS continua sendo usado.

## Escopo

Não houve migração para framework, módulos ES, bundle ou mudança de arquitetura.
