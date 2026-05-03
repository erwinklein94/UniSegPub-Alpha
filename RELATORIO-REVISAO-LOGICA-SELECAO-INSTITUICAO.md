# Revisão — Lógica de seleção de instituição por aba

Data: 02/05/2026

## O que foi alterado

- A escolha de instituição deixou de ser o primeiro passo global do site.
- O seletor global do topo, os botões de ramo do cabeçalho, as bandeiras de estado do cabeçalho e o seletor global da sidebar foram ocultados.
- As abas institucionais agora possuem seleção própria dentro da aba, no formato:
  1. Tipo de instituição: Federal, Estadual ou Municipal.
  2. Instituição vinculada à escolha anterior.
- A segunda caixa filtra as instituições conforme a esfera:
  - Federal: PF e PRF.
  - Estadual: PM, CBM, PC e PP por UF, incluindo bombeiros militares como BMPI, BMBA, BMSP etc.
  - Municipal: Guarda Municipal em formato geral.
- Após selecionar uma instituição, o site atualiza:
  - Conteúdo da aba consultada.
  - Foto/brasão da instituição no cabeçalho, quando cadastrado.
  - Cor institucional por meio das variáveis visuais do tema.
  - Títulos internos das abas.

## Abas que receberam a nova lógica

- Remuneração Tabelada.
- Direitos e Vantagens.
- Poderes e Deveres.
- Concursos.
- Ações Judiciais.
- Associações e Sindicatos.

## Abas preservadas

As abas abaixo foram preservadas por já terem lógica própria ou por não dependerem diretamente de seleção institucional simples:

- Comparar Carreiras.
- Produtos.
- Parceiros.
- Página Principal, que agora orienta o usuário a escolher primeiro a aba desejada.

## Arquivos principais modificados

- `index.html`
- `css/override-logoleao.css`
- `js/ui/navegacao-ui.js`
- `js/ui/header-estados.js`
- `js/ui/event-bindings.js`
- `js/pages/contato-init.js`
- `js/services/direitos.js`
- `js/services/remuneracao.js`
- `js/pages/concursos-comparador.js`
- `js/pages/poderes-deveres.js`
- `js/dist/app.bundle.js`
- Chunks equivalentes em `js/chunks/`

## Validação técnica

- O bundle `js/dist/app.bundle.js` foi regenerado a partir dos arquivos-fonte organizados.
- A sintaxe JavaScript foi validada com `node --check` nos arquivos alterados e no bundle final.
- O cache busting foi atualizado para `v=20260502logicav2`.
