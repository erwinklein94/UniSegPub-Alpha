# Relatório — Direitos e Vantagens com conteúdo estático

Data: 11/05/2026

## Arquivos alterados

- `direitos.html`
- `css/pages/direitos-conteudo-estatico.css`
- `js/pages/direitos-conteudo-estatico.js`
- `sitemap.xml`
- `js/data/portal-config.js`

## O que foi mudado

A aba **Direitos e Vantagens** passou a ter conteúdo editorial escrito diretamente no HTML. Antes da seleção de qualquer instituição, a página já apresenta introdução, orientação geral e cards grandes por instituição com resumos de direitos, vantagens, previdência, licenças e cuidados funcionais.

A chave `bmsp` foi incluída na lista global de instituições válidas para que o card do CBPMESP/BMSP consiga abrir a análise detalhada, mantendo compatibilidade com os dados já existentes no projeto.

O formulário detalhado antigo foi preservado, mas agora fica em uma área de análise funcional que permanece oculta até o usuário escolher uma instituição no filtro ou clicar no botão de consulta dentro de um card.

## Paginação

A página mostra visualmente até 4 cards por vez. A paginação no fim da lista permite navegar entre as páginas sem sair da aba. Todos os cards continuam escritos no HTML; o JavaScript apenas oculta ou exibe os cards conforme a página escolhida.

## Filtro

Foram criados filtros por tipo de instituição e por instituição. Ao escolher uma instituição, a página exibe o card correspondente e abre a análise detalhada da instituição escolhida. O botão **Ver todas** limpa os filtros, oculta a análise detalhada e restaura a navegação geral.

## Cuidados para SEO e AdSense

- Conteúdo principal fica presente no HTML, sem depender de JavaScript para existir.
- A página não exibe mensagens técnicas sobre robôs, AdSense ou implementação interna.
- Os textos evitam prometer direitos como automáticos quando dependem de lei, cargo, lotação, laudo, requerimento, data de ingresso ou regra de transição.
- Foram mantidos links internos para `remuneracao.html` e `concursos.html`.
- O visual foi preservado com classes e padrão de cards compatíveis com o restante do site.
