# Relatório — Visual App Suave v3

## Ajustes pedidos
- botão de tema no canto superior direito no lugar do menu
- menu mantido na barra flutuante inferior
- tema padrão do app em modo escuro
- tema claro com contraste corrigido e troca adequada das cores do texto

## Alterações realizadas
### HTML
- em todas as páginas, o botão flutuante superior direito deixou de abrir o menu e passou a alternar tema
- o menu continua acessível pela barra inferior flutuante
- o botão de tema do cabeçalho foi mantido para desktop

### JavaScript
- `js/ui/event-bindings.js`
  - o listener de alternância de tema agora usa `[data-theme-toggle]`
- `js/ui/navegacao-ui.js`
  - `initTheme()` agora atualiza todos os botões de tema
  - botão de topo usa ícone
  - botão do cabeçalho usa texto
- o tema padrão continua `dark` quando não há preferência salva

### CSS
- `css/app-soft-mobile.css`
  - adicionados ajustes para o botão flutuante de tema
  - criado bloco explícito de `html[data-theme="light"]` para o tema claro
  - no tema claro, fundo, cartões, botões, textos e textos secundários mudam juntos
  - contraste geral do tema claro reforçado para evitar texto claro sobre fundo claro

## Revisão rápida
- todos os 12 HTML principais atualizados
- `node --check` executado em:
  - `js/ui/event-bindings.js`
  - `js/ui/navegacao-ui.js`
