# Relatório — Menu horizontal superior e vitrine compacta de produtos

Data: 2026-05-15

## Objetivo

Reestruturar a navegação que antes funcionava como menu lateral, transformando-a em um bloco horizontal superior integrado ao portal, com abas em formato de cards e vitrine de produtos abaixo das abas, sem barra de rolagem interna.

## Alterações aplicadas

- O bloco de navegação foi movido para o topo da página, antes do cabeçalho institucional.
- O antigo comportamento de abertura lateral foi desativado visualmente.
- Botões de menu/hambúrguer e overlay foram ocultados.
- As abas do portal passaram a usar grid horizontal em cards compactos.
- Os grupos internos do menu foram simplificados visualmente para evitar vazios e divisões soltas.
- A vitrine de produtos permanece abaixo das abas, em grid responsivo e sem rolagem interna.
- Em desktop, os produtos aparecem em linha compacta; em telas menores, quebram em linhas sem criar barra horizontal.
- A barra inferior mobile deixou de exibir o botão de menu lateral.
- Textos internos/visíveis que citavam "menu lateral" foram substituídos por "menu superior".

## Arquivos principais afetados

- `css/app-soft-mobile.css`
- `index.html`
- `remuneracao.html`
- `concursos.html`
- `comparar-carreiras.html`
- `brasoes.html`
- `direitos.html`
- `acoes-judiciais.html`
- `associacoes-sindicatos.html`
- `guia-instituicoes.html`
- `noticias.html`
- `produtos.html`
- `anuncie.html`

## Validação

- `node --check` executado nos arquivos JavaScript do projeto sem erros.
- Busca por textos visíveis de "menu lateral" zerada nos HTML/CSS/JS públicos.
- A estrutura mantém os links existentes do menu e os links comerciais da vitrine.
