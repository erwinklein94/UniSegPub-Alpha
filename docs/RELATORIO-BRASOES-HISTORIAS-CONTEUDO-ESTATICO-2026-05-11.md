# Relatório — Brasões e Histórias com conteúdo estático

## Arquivos alterados

- `brasoes.html`
- `css/pages/brasoes-conteudo-estatico.css`
- `js/pages/brasoes-conteudo-estatico.js`
- `js/main.js`
- `sitemap.xml`

## O que foi mudado

A aba **Brasões e Histórias** passou a ter uma introdução editorial e uma lista de cards grandes escritos diretamente no HTML. Foram criados **56 cards** por instituição ou ramo institucional, com resumo sobre identidade visual, brasão, origem institucional, história geral, cautelas e fontes de conferência.

A área detalhada antiga foi preservada no bloco `#consulta-brasoes-detalhado`, mas agora fica oculta ao abrir a página. Ela aparece quando o usuário seleciona uma instituição no filtro ou clica em **Consultar história detalhada** dentro de um card.

## Paginação

O arquivo `js/pages/brasoes-conteudo-estatico.js` mostra no máximo **4 cards por página**. A paginação é visual e não remove o conteúdo do HTML; ela apenas oculta ou exibe cards que já estão escritos na página.

## Filtro

O filtro da própria aba permite escolher tipo de instituição e instituição. Quando o usuário escolhe uma instituição, a lista mostra o card correspondente e abre a área detalhada. Ao clicar em **Ver todas**, a página volta para a lista paginada e oculta o detalhamento.

## Cuidados para SEO/AdSense

- O conteúdo principal foi escrito diretamente no HTML.
- O JavaScript não cria os cards principais; ele apenas controla exibição, filtro e paginação.
- A página evita mensagens técnicas ao usuário final.
- Os textos evitam afirmar datas, símbolos ou marcos específicos sem base direta no conteúdo já cadastrado.
- A consulta detalhada preserva o mecanismo já existente de brasão, história, marcos e fontes por instituição.
