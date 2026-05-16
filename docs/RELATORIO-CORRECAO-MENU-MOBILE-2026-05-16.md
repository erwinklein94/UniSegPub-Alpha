# Correção do menu no mobile — 2026-05-16

## Problema observado
Após a revisão responsiva geral, uma regra no fim de `css/app-soft-mobile.css` reativou o comportamento antigo de menu lateral em telas pequenas. No celular, o painel voltava a abrir pela esquerda, estreito, com parte da identidade cortada e cobrindo o conteúdo de maneira desalinhada.

## Correção aplicada
- Mantido o menu fechado por padrão e acionado apenas pelo botão Menu.
- Forçado, no mobile, o painel centralizado com `left: 50%` e `transform: translate(-50%, 0)`.
- Removido o comportamento de gaveta lateral em `max-width: 760px` e `max-width: 430px` por meio de uma camada final de CSS.
- Mantida a caixa seletora de instituições fora do menu (`.sidebar-inst-panel { display:none }`).
- Produtos preservados abaixo das abas em grade compacta, sem lista horizontal com barra de rolagem.
- Produtos ficam como miniaturas no mobile para caberem no painel.
- Cache-busting atualizado de `20260516-mobile-fit1` para `20260516-menu-mobile-fix1`.

## Arquivo alterado
- `css/app-soft-mobile.css`
- HTMLs e partials com link do CSS atualizado.
