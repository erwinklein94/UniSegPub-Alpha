# Relatório — Associações e sindicatos com conteúdo estático

## Arquivos alterados

- `associacoes-sindicatos.html`
- `css/pages/associacoes-conteudo-estatico.css`
- `js/pages/associacoes-conteudo-estatico.js`
- `js/main.js`
- `sitemap.xml`

## O que foi mudado

A aba **Associações e sindicatos** deixou de abrir como uma área dependente apenas da seleção de instituição. A página agora possui introdução editorial, aviso de independência e **45 cards grandes escritos diretamente no HTML**, cada um com entidades, foco, atuação, serviços, mensalidade e contato quando cadastrados.

A consulta detalhada antiga foi preservada dentro do bloco `#consulta-associacoes-detalhado`, mas fica oculta ao abrir a página. Ela aparece apenas quando o usuário seleciona uma instituição no filtro ou clica em **Consultar entidades cadastradas** em um card.

## Como funciona a paginação

O arquivo `js/pages/associacoes-conteudo-estatico.js` mostra no máximo **4 cards por página**. A paginação é visual e não remove o conteúdo do HTML; ela apenas oculta ou exibe cards já presentes na página.

## Como funciona o filtro

A página possui filtro por tipo de instituição e por instituição. Ao selecionar uma instituição, o script:

1. exibe somente o card correspondente;
2. abre a área de consulta detalhada;
3. chama a lógica já existente de `carregarAssociacoes()`;
4. rola a página até os detalhes.

Ao clicar em **Ver todas**, a página volta para os cards gerais e oculta a consulta detalhada.

## Cuidados de SEO/AdSense

- Conteúdo principal escrito diretamente no HTML.
- Sem frases técnicas para o usuário final sobre robôs, HTML, JavaScript ou AdSense.
- Aviso claro de independência e cautela antes de filiação, pagamento ou contratação de serviços.
- Links internos para `direitos.html` e espaços de anúncio preservados.
- Dados específicos derivados do cadastro existente `ASSOCIACOES`; quando a informação exige confirmação, o texto orienta consulta direta aos canais oficiais da entidade.
