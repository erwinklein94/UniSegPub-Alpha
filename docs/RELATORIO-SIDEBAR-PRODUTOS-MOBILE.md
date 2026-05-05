# Ajuste — produtos na sidebar mobile

## Objetivo

Substituir os produtos antigos da parte inferior da sidebar por uma vitrine compacta com os 10 primeiros produtos da aba Produtos.

## Mudanças

- Removido o produto único em destaque da sidebar.
- Removida a lista antiga com 3 produtos.
- Criada seção única com título `Produtos`.
- Exibidos os 10 primeiros produtos da vitrine, todos com o mesmo peso visual.
- Cada produto usa botão `Ver na loja`.
- Ao final da lista, foi adicionada chamada para `produtos.html`.
- A vitrine da sidebar usa cards compactos em 2 colunas.

## Arquivos principais alterados

- `css/app-soft-mobile.css`
- páginas HTML públicas com sidebar
- partials correspondentes da sidebar
- `scripts/test-basic-behaviors.py`

## Teste recomendado

```bash
python scripts/test-basic-behaviors.py
python scripts/build-static-pages.py --check
```

Em mobile, abrir a sidebar e conferir a seção `Produtos` na parte inferior.
