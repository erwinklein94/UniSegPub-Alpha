# Relatório — Ajuste do seletor duplicado na Remuneração Tabelada

## Arquivos alterados

- `remuneracao.html`
- `css/pages/remuneracao-tabelada.css`

## O que foi ajustado

- Removida a exibição duplicada do seletor superior gerado pela lógica institucional global.
- Mantido apenas o filtro novo da página, usado para filtrar os cards editoriais da Remuneração Tabelada.
- O filtro novo continua com seleção por tipo de instituição e instituição.
- A tabela detalhada e os botões “Consultar tabela detalhada” foram preservados.

## Como o ajuste foi feito

- O filtro novo recebeu o marcador `data-consulta-selector="remuneracao"`, impedindo que o script global injete um segundo seletor dentro do card principal.
- Foi adicionada uma regra CSS de segurança para ocultar qualquer seletor legado que ainda seja inserido no card principal por cache ou execução antiga do JavaScript.
- O cache-buster do CSS da página foi atualizado para `v=20260511conteudo2`.

## Cuidados tomados

- Não foram removidos scripts globais.
- Não houve alteração na lógica dos cards estáticos no HTML.
- Não houve alteração no conteúdo editorial da página.
- A mudança ficou restrita à aba Remuneração Tabelada e ao CSS específico dela.
