# Revisão mobile do cabeçalho institucional

## Objetivo
Reduzir o excesso de altura do cabeçalho na versão mobile e evitar que o resumo institucional ocupe a tela inteira em celulares.

## Ajustes aplicados

- O cabeçalho mobile passou a usar uma composição horizontal compacta: brasão à esquerda e nome/descrição à direita.
- O tamanho do brasão no mobile foi reduzido para aproximadamente 54px.
- A altura mínima do bloco principal foi reduzida de centenas de pixels para cerca de 86px.
- O painel de resumo institucional foi compactado com menos padding, bordas menores e grid em duas colunas.
- Campos sem informação útil, como “Dados em breve” ou “Não informado”, passam a receber classe automática e são ocultados no mobile.
- No mobile, o resumo mostra somente os quatro primeiros indicadores principais para evitar rolagem excessiva.
- O bloco de liderança/comando do resumo é ocultado no mobile para reduzir altura.
- O seletor global antigo do cabeçalho foi ocultado no mobile, preservando a lógica de seleção dentro das abas.
- A versão desktop foi preservada.

## Arquivos alterados

- `css/override-logoleao.css`
- `js/chunks/06-header-estados.js`
- `js/dist/app.bundle.js`
- `js/script-original.js`
- `index.html`

## Validação

- `node --check js/dist/app.bundle.js`
- `node --check js/chunks/06-header-estados.js`
- `node --check js/script-original.js`

