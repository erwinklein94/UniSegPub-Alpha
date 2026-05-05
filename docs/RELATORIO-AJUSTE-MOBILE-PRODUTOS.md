# Ajuste mobile da aba Produtos

## Objetivo

Ajustar a vitrine de produtos no mobile para exibir cards em 2 colunas, com cards mais compactos e próximos de um formato quadrado.

## O que mudou

- A vitrine da aba Produtos passa a usar 2 colunas em telas até 760px.
- Imagens dos cards no mobile passam a usar proporção 1:1.
- Títulos e descrições são limitados a 2 linhas no mobile.
- Metadados dos cards e aviso de afiliado ficam ocultos dentro do card no mobile para reduzir altura.
- CTA dos produtos foi padronizado para `Ver na loja`.

## Arquivos principais

- `partials/pages/produtos/head.html`
- `produtos.html`
- `js/data/produtos-data.js`
- `js/data/produtos-livros-ebooks.json`
- `js/pages/produtos-render.js`
- `js/pages/concursos-comparador.js`
- `scripts/test-basic-behaviors.py`

## Validação

Rodar:

```bash
python scripts/test-basic-behaviors.py
python scripts/build-static-pages.py --check produtos
```
