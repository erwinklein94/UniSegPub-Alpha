# Brasões — onepage em 18/10/2026

Visual alinhado à home, remuneração, concursos e vitrine: abertura mais limpa com três brasões do próprio acervo, filtros com busca textual, navegação por âncoras, cartões arredondados, melhor espaçamento, indicadores e ficha institucional. Acervo e ficha vêm antes da seção explicativa. Cabeçalho, imagens e textos editoriais dos cartões preservados.

Entrada suave ao rolar e barra de progresso. Observação contempla cartões carregados de forma assíncrona, filtros, paginação e blocos da ficha. Movimento reduzido, impressão e foco por teclado mantêm o conteúdo acessível. O CSS e o controlador visual são exclusivos da página.

Busca por nome/sigla sem acentos, combinada com esfera e instituição. O campo do cabeçalho usa a própria página com parâmetro q. Paginação de oito cartões por página com botões próximos e primeira/última página para evitar longas sequências no celular. Estado vazio e mensagem de falha de carregamento. Parâmetro inst reaplicado após a chegada tardia do acervo.

Os contadores usam os cartões efetivamente carregados: na verificação foram 56 instituições, duas federais e 54 estaduais; substituídos os antigos números fixos que indicavam três federais. O aviso da natureza informativa do acervo permanece. Não houve revisão histórica ou atualização de símbolos nesta tarefa.

## Ficha

A página carregava header-estados.js, que também inicializa tabelas de remuneração e falhava ao acessar REMUNERACAO_FONTES_OFICIAIS ausente no conjunto público. A ficha podia ficar vazia. Removidas apenas desta página as dependências de cabeçalho/estado legado e seus módulos auxiliares. O controlador específico monta a ficha com imagem, identificação, indicadores, parágrafos e referências do cartão editorial selecionado, sem duplicar os botões de consulta. Não usa nem modifica tabelas salariais ou o banco de dados. Seção e atalho da ficha ficam ocultos quando não há instituição selecionada.

## Validação

Chrome com os 56 cartões públicos e dados públicos salvos: busca com acentos, estado vazio, reset, filtro federal, seleção PF e ficha, paginação e parâmetro inst com carga tardia de cartões. Entrada por rolagem, movimento reduzido e ampliação de imagem com fechamento por Escape aprovados. Nenhum erro de JavaScript. Sem overflow nas larguras 320, 390, 768, 1024 e 1440. Capturas claras/escuras e desktop/celular em output/brasoes-onepage/ (não versionadas).

Templates e quatro partials sincronizados com a página pública; validação por scripts/build-static-pages.py --check brasoes. O teste de navegador utiliza tmp/brasoes-browser.mjs e os cartões de apoio tmp/brasoes-cards.json (não versionados).
