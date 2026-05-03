# Relatório de correção — MPA páginas reais

## Correção aplicada nesta versão

Esta versão foi gerada a partir da **v2**, que era a última versão funcional relatada.

A alteração da v3 foi revertida porque o `js/brasao-lightbox.js` havia sido modificado e carregado globalmente, mudando o comportamento do site inteiro.

Nesta versão, a correção é conservadora:

- Mantido o `js/brasao-lightbox.js` original.
- Removida a versão alterada do lightbox.
- Adicionada uma única chamada ao `js/brasao-lightbox.js?v=20260501` em cada página HTML, como acontecia no site original de página única.
- Mantidas as correções anteriores da v2 para seleção de instituição e páginas reais.

## Páginas revisadas

- `index.html`
- `remuneracao.html`
- `direitos.html`
- `poderes-deveres.html`
- `brasoes.html`
- `concursos.html`
- `comparar-carreiras.html`
- `acoes-judiciais.html`
- `associacoes-sindicatos.html`
- `produtos.html`
- `parceiros.html`
- `anuncie.html`

## Validações executadas

- `node --check` em todos os arquivos JavaScript: sem erros de sintaxe.
- Conferência de todos os HTML: 12 arquivos encontrados.
- Cada HTML possui exatamente um `<main>`.
- Cada HTML possui `body[data-page]` coerente com a página.
- Cada HTML possui exatamente uma chamada ao `js/brasao-lightbox.js`.
- Conferidos arquivos locais de CSS, JS e imagens referenciados nos HTML: sem recurso ausente.
- Conferidos elementos essenciais: `#header-active-flag`, `.menu-btn` e `#sidebar` presentes em todas as páginas.

## Observação

Esta versão evita mudanças amplas no JavaScript global. O objetivo foi restaurar o funcionamento do site e recolocar a ampliação do brasão sem alterar a lógica principal.
