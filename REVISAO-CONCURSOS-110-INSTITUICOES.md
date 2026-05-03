# Revisão da aba Concursos — 108 estaduais + PF e PRF

Revisão aplicada em 02/05/2026.

## Escopo

A revisão cobre a aba **Concursos** para:

- 108 instituições estaduais: Polícia Militar, Corpo de Bombeiros Militar, Polícia Civil e Polícia Penal das 27 unidades federativas.
- 2 instituições federais: Polícia Federal e Polícia Rodoviária Federal.

Total validado no bundle de produção: **110 instituições**.

## Padronização feita

- Todo campo de concurso vazio, indefinido, genérico ou marcado como pendente foi padronizado exatamente como:

> Dados em breve

- A padronização foi aplicada aos campos:
  - edital
  - salário
  - vagas
  - cotas
  - idade
  - escolaridade
  - banca
  - inscritos
  - matérias
  - etapas
  - curso de formação
  - estágio probatório
  - validade
  - previsão/próximo edital

- PF e PRF foram incluídas na mesma regra de revisão.
- A aba Concurso agora possui objeto de concurso para todas as instituições registradas no site.
- As fontes/links ausentes deixam de aparecer como link quebrado; quando não houver fonte válida, o site mostra **Dados em breve**.
- O comparador de carreiras também passou a considerar Bombeiros Militares, PF e PRF.

## Arquivos atualizados

- `js/ui/header-estados.js`
- `js/chunks/06-header-estados.js`
- `js/pages/concursos-comparador.js`
- `js/chunks/08-concursos-comparador.js`
- `js/dist/app.bundle.js`
- `index.html`

## Validação técnica

- `node --check js/dist/app.bundle.js`: aprovado.
- `node --check js/ui/head.js`: aprovado.
- `node --check js/brasao-lightbox.js`: aprovado.
- `node --check js/ui/header-estados.js`: aprovado.
- `node --check js/pages/concursos-comparador.js`: aprovado.
- `node --check js/chunks/06-header-estados.js`: aprovado.
- `node --check js/chunks/08-concursos-comparador.js`: aprovado.

Auditoria executada no bundle de produção:

- Instituições válidas: 110.
- Instituições estaduais: 108.
- PF presente: sim.
- PRF presente: sim.
- Objetos de concurso ausentes: 0.
- Campos de concurso vazios ou com placeholder antigo: 0.
- Referências locais de imagens de produção quebradas: 0.

## Observação

Esta revisão não inventa dados de concurso. Onde o projeto ainda não tinha informação confiável ou específica, o campo foi deixado como **Dados em breve**, conforme solicitado.
