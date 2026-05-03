# Revisão — Aba Poderes e Deveres

Revisão gerada em 02/05/2026.

## O que foi implementado

- Criada a nova aba principal **Poderes e Deveres**.
- Adicionado link no menu lateral em **Consultas principais**.
- Adicionado botão na página inicial e card de acesso rápido.
- Criada uma caixa de seleção própria da aba, independente do seletor principal do site.
- A seleção da aba **Poderes e Deveres** altera apenas o conteúdo desta aba e não muda a instituição global usada em Remuneração, Direitos, Concursos, Ações ou Associações.
- Incluídas as instituições estaduais por UF:
  - Polícia Militar;
  - Corpo de Bombeiros Militar;
  - Polícia Civil;
  - Polícia Penal.
- Incluídas as instituições federais:
  - Polícia Federal;
  - Polícia Rodoviária Federal.
- Incluída a consulta municipal:
  - Guardas Municipais.

## Conteúdo inserido na aba

Para cada tipo de instituição, a aba mostra:

- Abrangência institucional;
- Deveres principais;
- Abrangência de poder;
- Limites importantes;
- Leis e normas de referência;
- Entendimentos recentes e pontos de atenção;
- Fontes oficiais/institucionais de conferência.

Quando a informação local específica ainda não está consolidada, foi usado exatamente:

**Dados em breve**

## Fontes oficiais e institucionais usadas como base

- Constituição Federal, art. 144 — Planalto.
- Lei nº 14.751/2023 — Lei Orgânica Nacional das Polícias Militares e dos Corpos de Bombeiros Militares.
- Lei nº 14.735/2023 — Lei Orgânica Nacional das Polícias Civis.
- Emenda Constitucional nº 104/2019 — criação das Polícias Penais.
- Lei nº 7.210/1984 — Lei de Execução Penal.
- Lei nº 13.022/2014 — Estatuto Geral das Guardas Municipais.
- Lei nº 13.675/2018 — Sistema Único de Segurança Pública.
- Decreto nº 11.841/2023 — cooperação das guardas municipais com órgãos de segurança pública.
- Lei nº 9.266/1996 — carreira policial federal.
- Lei nº 10.446/2002 — atuação da Polícia Federal em infrações de repercussão interestadual ou internacional.
- Lei nº 9.654/1998 — carreira da Polícia Rodoviária Federal.
- Decreto nº 1.655/1995 — competências da Polícia Rodoviária Federal.
- Lei nº 9.503/1997 — Código de Trânsito Brasileiro.
- Páginas e informativos oficiais do STF sobre art. 144, guardas municipais, TCO pela PM/PRF, Polícias Civis, Bombeiros Militares e Polícia Penal.

## Revisão técnica antes da entrega

- `node --check js/pages/poderes-deveres.js`: aprovado.
- `node --check js/ui/navegacao-ui.js`: aprovado.
- `node --check js/ui/event-bindings.js`: aprovado.
- `node --check js/dist/app.bundle.js`: aprovado.
- Seletor independente validado com 111 opções:
  - 27 Polícias Militares;
  - 27 Corpos de Bombeiros Militares;
  - 27 Polícias Civis;
  - 27 Polícias Penais;
  - Polícia Federal;
  - Polícia Rodoviária Federal;
  - Guardas Municipais.
- Funções da aba validadas no bundle:
  - `inicializarPoderesDeveres`;
  - `mudarInstituicaoPoderes`;
  - `poderesInstituicoesDisponiveis`;
  - `poderesRenderizar`.

## Arquivos alterados/adicionados

- `index.html`
- `css/override-logoleao.css`
- `js/main.js`
- `js/ui/navegacao-ui.js`
- `js/ui/event-bindings.js`
- `js/pages/poderes-deveres.js`
- `js/dist/app.bundle.js`
- `REVISAO-PODERES-DEVERES.md`
