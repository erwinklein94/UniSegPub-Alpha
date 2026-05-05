# Ajuste do card de carreiras — página inicial

## Pedido

Substituir o texto:

- `Grátis`
- `Consulta inicial`

por:

- `PF,PRF,PM,PC,PP,BM,GM`

na página inicial, tanto no desktop quanto no mobile.

## Alteração aplicada

Arquivos alterados:

- `index.html`
- `partials/pages/index/main.html`

Para preservar a estrutura visual do card, o texto foi dividido nas duas linhas já existentes:

```html
<strong>PF,PRF,PM</strong>
<span>PC,PP,BM,GM</span>
```

Visualmente, isso forma:

```text
PF,PRF,PM
PC,PP,BM,GM
```

## Escopo

Não houve alteração de JavaScript, CSS, dados, layout estrutural ou comportamento principal.
