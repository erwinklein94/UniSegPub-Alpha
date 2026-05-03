# Revisão — Aba Brasões e história

Alterações aplicadas em 02/05/2026.

## O que foi feito

- Criada nova aba principal **Brasões e história** na sidebar.
- Adicionado card da nova aba na página inicial.
- Adicionado botão rápido no hero inicial.
- A aba usa o mesmo fluxo institucional por aba: **esfera → instituição**.
- Ao selecionar uma instituição, o site exibe:
  - brasão/insígnia em destaque, com tamanho grande e `object-fit: contain`;
  - nome, sigla, natureza, jurisdição e revisão;
  - campos de criação/origem, criador/ato de origem, efetivo ativo, inativos/reserva, mulheres, população/presos atendidos e comando/direção;
  - história breve por tipo de instituição;
  - marcos históricos por ramo institucional.
- O conteúdo funciona para todas as instituições cadastradas na base: PM, Bombeiros Militares, Polícia Civil, Polícia Penal, PF, PRF e Guarda Municipal.
- Ajustada a contagem da página inicial de **108** para **111** instituições/seções institucionais.
- Corrigido o cálculo dinâmico do resumo do portal para contar 27 UFs reais, sem somar Brasil/municipal como UF.
- Atualizado cache busting de CSS e JS.

## Arquivos alterados

- `index.html`
- `js/ui/navegacao-ui.js`
- `js/chunks/04-navegacao-ui.js`
- `js/ui/header-estados.js`
- `js/chunks/06-header-estados.js`
- `js/dist/app.bundle.js`
- `css/override-logoleao.css`

## Observação

A aba é informativa e independente. Os textos históricos usam a base institucional existente e modelos por ramo quando a data exata ou o criador específico ainda não estiverem consolidados em fonte oficial local.
