# Ajuste de largura — seletor institucional da página inicial

## Pedido

No computador, o card com a caixa de seleção para mudar a instituição na página inicial estava mais largo que o card do cabeçalho.

## Alteração

Arquivo alterado:

- `css/override-logoleao.css`

Regra ajustada:

```css
.home-institution-selector-wrap {
  width: min(1120px, calc(100% - 28px));
  margin: 18px auto 0;
}
```

O valor foi alinhado com a largura usada pelo cabeçalho/app container no desktop.

## Escopo

- Não altera JavaScript.
- Não altera comportamento do seletor.
- Não altera HTML.
- Não altera dados.
- Mantém a regra mobile específica já existente para telas até 760px.
