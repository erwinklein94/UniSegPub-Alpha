# Correção — menu superior acionado por botão e sem seletor interno (2026-05-15)

## Objetivo
Corrigir o comportamento do menu criado na etapa anterior: ele não deve aparecer como parte fixa da página. Deve abrir somente após clique no botão **Menu** e manter o desenho horizontal com produtos abaixo das abas.

## Alterações aplicadas
- Removido o bloco `.sidebar-inst-panel` com a caixa seletora de instituições de todos os HTMLs e partials em que ele aparecia.
- Mantido o seletor institucional próprio das páginas, fora do menu, quando aplicável.
- O menu superior agora inicia fechado por padrão.
- O menu abre somente quando o usuário clica no botão **Menu**.
- O overlay voltou a funcionar para fechar a navegação ao clicar fora.
- O botão de fechar voltou a aparecer no painel.
- O painel permanece horizontal no topo, com cards compactos e produtos abaixo das abas.
- A vitrine de produtos do menu foi compactada para evitar barra de rolagem interna.
- Atualizado `toggleMenu()` para sincronizar `aria-expanded` em todos os botões `.menu-btn` e aplicar `body.menu-open` durante a abertura.
- Atualizado cache-busting do CSS para `v=20260515-menu-click`.

## Arquivos principais alterados
- `css/app-soft-mobile.css`
- `js/ui/navegacao-ui.js`
- HTMLs principais com menu
- `partials/pages/*/pre-main.html`
- `partials/pilot/anuncie/sidebar-parceiros.html`

## Validação
- A caixa seletora de instituições não aparece mais dentro do menu.
- A navegação não ocupa espaço fixo no topo da página quando fechada.
- O painel abre e fecha por classe `.active`, controlada pelo botão **Menu**.
