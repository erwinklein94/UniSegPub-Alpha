# Relatório — Concursos com conteúdo estático e filtro visual

## Arquivos alterados

- `concursos.html`
- `css/pages/concursos-conteudo-estatico.css`
- `js/pages/concursos-conteudo-estatico.js`
- `sitemap.xml`

## O que foi mudado

A aba **Concursos** deixou de depender apenas do carregamento dinâmico após seleção de instituição. A página agora possui uma introdução editorial e 45 cards grandes de instituições escritos diretamente no HTML, com resumo de edital, vagas, banca, escolaridade, remuneração de referência, etapas do certame, previsão/acompanhamento e link de fonte oficial quando disponível.

A consulta detalhada antiga foi preservada, mas passou a ficar oculta na abertura da página. Ela aparece somente quando o usuário seleciona uma instituição no filtro ou clica em **Consultar dados completos** dentro de um card.

## Paginação

O arquivo `js/pages/concursos-conteudo-estatico.js` controla a paginação visual dos cards, mostrando no máximo 4 cards por vez. A paginação não remove o conteúdo do HTML; apenas oculta e exibe cards já presentes na página.

## Filtro

O filtro possui seleção por tipo de instituição e por instituição. Ao selecionar uma instituição, a lista mostra apenas o card correspondente e abre a consulta detalhada daquela corporação. Ao clicar em **Ver todas**, os cards voltam a ser exibidos com paginação e a consulta detalhada é ocultada.

## Cuidados para SEO e AdSense

- O conteúdo de valor foi escrito diretamente em `concursos.html`.
- O JavaScript atua apenas sobre visibilidade, paginação e abertura da consulta detalhada.
- Não foram adicionadas mensagens técnicas para o usuário final sobre robôs, AdSense ou funcionamento interno.
- Foram mantidos avisos naturais para o visitante confirmar regras, prazos e requisitos no edital, na banca e nos canais oficiais.
- O visual usa o padrão de cards, seletores, espaçamentos, cores e tipografia já existentes no projeto.
