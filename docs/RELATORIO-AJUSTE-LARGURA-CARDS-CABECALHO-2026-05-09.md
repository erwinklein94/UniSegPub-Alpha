# Relatório — ajuste de largura dos cards abaixo do cabeçalho

Data: 2026-05-09

## Objetivo

Alinhar a largura visual dos cards de conteúdo que aparecem abaixo do cabeçalho com a largura do card institucional do cabeçalho, em todas as páginas/abas do site.

## Alteração aplicada

- Adicionado um ajuste global em `css/app-soft-mobile.css` para que `main.page-section` use o mesmo recuo horizontal do cabeçalho.
- Os filhos diretos de `main.page-section` passam a respeitar `width: 100%` e `max-width: 100%`, evitando que cards fiquem mais largos que o card superior.
- No mobile, o recuo foi ajustado para acompanhar o padding do cabeçalho mobile.
- Atualizada a query string do CSS para `v=20260509cardswidth1` nas páginas públicas e partials, evitando cache antigo.

## Escopo preservado

- Nenhum conteúdo textual dos cards foi alterado.
- Nenhuma estrutura do menu lateral foi alterada.
- A vitrine de produtos da parte inferior do menu lateral foi preservada.

## Validações

- CSS com chaves balanceadas.
- `scripts/test-basic-behaviors.py`: 15/18 testes passaram.
- As 3 falhas restantes já são verificações estruturais existentes no projeto e não foram causadas por este ajuste:
  - `index.html`: `instituicao_header` ausente.
  - `comparar-carreiras.html`: `comparador-instituicao` ausente.
  - templates não geram exatamente o HTML público atual em várias páginas.
