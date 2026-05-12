# Relatório — Poderes e Deveres com conteúdo estático

## Arquivos alterados

- `poderes-deveres.html`
- `css/pages/poderes-conteudo-estatico.css`
- `js/pages/poderes-conteudo-estatico.js`
- `js/main.js`
- `sitemap.xml`

## O que foi mudado

A aba **Poderes e Deveres** passou a ter introdução editorial e uma lista de cards grandes escritos diretamente no HTML. Foram criados **56 cards** com resumos por instituição ou ramo institucional, contendo competência central, poderes comuns, limites, cautelas e fontes gerais de conferência.

A análise detalhada antiga foi preservada no bloco `#consulta-poderes-detalhado`, mas agora fica oculta ao abrir a página. Ela aparece quando o usuário seleciona uma instituição no filtro ou clica em **Consultar análise detalhada** dentro de um card.

## Paginação

O arquivo `js/pages/poderes-conteudo-estatico.js` mostra no máximo **4 cards por página**. A paginação é visual e não remove o conteúdo do HTML; ela apenas oculta ou exibe os cards existentes.

## Filtro

O filtro da própria aba permite escolher tipo de instituição e instituição. Quando o usuário escolhe uma instituição, a lista mostra o card correspondente e abre a análise detalhada. Ao clicar em **Ver todas**, a página volta para a lista paginada e oculta a análise detalhada.

## Cuidados para SEO/AdSense

- O conteúdo principal foi escrito diretamente no HTML.
- O JavaScript não cria o conteúdo principal, apenas controla exibição, filtro e paginação.
- A página evita mensagens técnicas ao usuário final.
- Os textos não afirmam peculiaridades locais sem base; indicam que regras podem variar conforme lei local, regulamento, decisão judicial, portaria e caso concreto.
- A aparência foi mantida no padrão dos cards e seletores usados nas abas já atualizadas.
