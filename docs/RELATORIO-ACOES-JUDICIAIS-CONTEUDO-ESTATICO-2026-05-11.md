# Relatório — Ações judiciais com conteúdo estático

## Arquivos alterados

- `acoes-judiciais.html`
- `css/pages/acoes-conteudo-estatico.css`
- `js/pages/acoes-conteudo-estatico.js`
- `js/main.js`
- `sitemap.xml`

## O que foi mudado

A aba **Ações judiciais** deixou de abrir como uma área dependente apenas da seleção de instituição. A página agora possui introdução editorial, aviso legal e **45 cards grandes escritos diretamente no HTML**, cada um com temas jurídicos cadastrados por instituição.

A consulta detalhada antiga foi preservada dentro do bloco `#consulta-acoes-detalhado`, mas fica oculta ao abrir a página. Ela aparece apenas quando o usuário seleciona uma instituição no filtro ou clica em **Consultar teses detalhadas** em um card.

## Como funciona a paginação

O arquivo `js/pages/acoes-conteudo-estatico.js` mostra no máximo **4 cards por página**. A paginação é visual e não remove o conteúdo do HTML; ela apenas oculta ou exibe cards já presentes na página.

## Como funciona o filtro

A página possui filtro por tipo de instituição e por instituição. Ao selecionar uma instituição, o script:

1. exibe somente o card correspondente;
2. abre a área de consulta detalhada;
3. chama a lógica já existente de `carregarAcoes()`;
4. rola a página até os detalhes.

Ao clicar em **Ver todas**, a página volta para os cards gerais e oculta a consulta detalhada.

## Cuidados de SEO/AdSense

- Conteúdo principal escrito diretamente no HTML.
- Sem frases técnicas para o usuário final sobre robôs, HTML, JavaScript ou AdSense.
- Aviso legal claro para evitar promessa de resultado jurídico.
- Links internos para `direitos.html` e espaço de anúncio preservado.
- Dados específicos derivados do cadastro existente `ACOES_JUDICIAIS`; quando o tema exige cautela, o texto orienta conferência em documentos e fontes oficiais.
