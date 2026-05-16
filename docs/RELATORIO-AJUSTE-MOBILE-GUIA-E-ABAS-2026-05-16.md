# Relatório — ajuste mobile do Guia de Instituições e revisão de abas

Data: 2026-05-16

## Pedido atendido

Revisar o tamanho dos elementos na aba **Guia de Instituições** para usuários de celular e, em seguida, revisar as demais abas em busca de elementos grandes demais ou que pudessem fugir da largura da tela.

## Principais problemas encontrados

1. Havia uma regra mobile malformada em `css/app-soft-mobile.css` que podia fazer cards herdarem tamanho de fonte destinado ao título principal.
2. O `Guia de Instituições` usava títulos grandes e tabelas com `min-width: 620px`, o que era seguro para desktop, mas podia gerar sensação de conteúdo largo demais no celular.
3. Havia um bloco CSS antigo quebrado/órfão em `css/app-soft-mobile.css`, com declarações sem seletor. Esse bloco foi removido.
4. As abas de conteúdo tinham vários títulos `h1` com `clamp(30px, 5vw, 48px)`, grande demais para telas pequenas quando combinado com cards arredondados e margens do layout app.

## Arquivos alterados

- `css/app-soft-mobile.css`
- `css/pages/guia-instituicoes.css`
- Arquivos HTML e partials com atualização de cache-busting para `app-soft-mobile.css?v=20260516-mobile-fit1`
- `guia-instituicoes.html` com atualização de cache-busting para `guia-instituicoes.css?v=20260516-mobile-fit1`

## Ajustes aplicados no Guia de Instituições

- Redução dos títulos no mobile.
- Redução de espaçamentos internos dos cards.
- Brasões menores dentro dos artigos.
- Metadados em chips com quebra de linha segura.
- Links relacionados em uma coluna no celular.
- Botões de filtro em largura total e sem estouro lateral.
- Tabelas do guia adaptadas para caber no card, com quebra de texto e `table-layout: fixed` no mobile.
- Caixas de aviso, FAQ e destaques com padding menor e bordas mais compactas.

## Ajustes aplicados globalmente nas demais abas

- Proteção contra overflow horizontal em `html` e `body`.
- `box-sizing: border-box` global.
- Imagens, iframes, canvas e vídeos limitados à largura do container.
- Quebra segura de textos longos em links, negritos e códigos.
- Cards compactados em telas até 760px.
- Títulos de hero das abas reduzidos no celular:
  - Remuneração Tabelada
  - Concursos
  - Brasões e História
  - Direitos e Vantagens
  - Ações Judiciais
  - Associações e Sindicatos
  - Notícias
  - Guia de Instituições
- Indicadores/cards estatísticos forçados para 1 coluna no mobile.
- Botões e links de rodapé de cards forçados para 1 coluna no mobile.
- Menu acionado por botão ajustado para largura menor em celular.
- Produtos do menu reduzidos em imagem e texto para evitar estouro lateral.
- Barra inferior mobile compactada para telas estreitas.

## Validação realizada

- `tinycss2` nos CSS alterados: sem erros de parse.
- Checagem de chaves `{}` em `app-soft-mobile.css` e `guia-instituicoes.css`: balanceada.
- `node --check` em todos os arquivos JS: aprovado.
- Busca por seletor mobile antigo malformado: não encontrado.

## Observação

Não foi feita mudança de conteúdo editorial. A revisão foi estrutural e visual, focada em responsividade, largura, tamanho de fonte, padding e proteção contra elementos que escapem da tela em celular.
