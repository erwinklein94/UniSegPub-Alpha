# Relatório — Revisão da aba Poderes e Deveres

Data: 02/05/2026

## O que foi melhorado

- Conteúdo da aba ampliado para 7 ramos: Polícia Federal, Polícia Rodoviária Federal, Polícia Militar, Corpo de Bombeiros Militar, Polícia Civil, Polícia Penal e Guarda Municipal.
- Remoção dos principais placeholders genéricos da aba, substituindo por explicações úteis sobre base local, competência complementar e limites práticos.
- Inclusão de novos campos de leitura rápida:
  - Essência da competência
  - Não confundir
  - Ponto de atenção
- Reescrita dos blocos de deveres, poderes e limites com linguagem mais clara, prática e jurídica.
- Ampliação das fontes legais e institucionais por instituição.
- Inclusão de entendimentos relevantes do STF, quando aplicáveis.
- Ajustes visuais para destacar os novos cards práticos.
- Atualização do cache busting de CSS e JS no `index.html`.

## Arquivos alterados

- `index.html`
- `js/pages/poderes-deveres.js`
- `js/chunks/11-poderes-deveres.js`
- `js/dist/app.bundle.js`
- `css/override-logoleao.css`

## Validação realizada

- Conferência de sintaxe JavaScript com `node --check` em:
  - `js/pages/poderes-deveres.js`
  - `js/dist/app.bundle.js`
- Sincronização do arquivo-fonte, chunk e bundle de produção.
