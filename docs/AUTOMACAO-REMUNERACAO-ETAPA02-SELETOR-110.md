# Remuneração — seletor com 110 instituições

Esta correção faz a aba `remuneracao.html` reconstruir automaticamente a caixa seletora de instituições a partir do arquivo:

```text
config/remuneracao-instituicoes.json
```

## O que muda

- A caixa seletora passa a mostrar todas as instituições cadastradas no motor de remuneração.
- As instituições são agrupadas por UF, com `União / Federal` no topo.
- O filtro `Tipo de instituição` passa a iniciar em `Todas`, para não esconder instituições federais ou estaduais por padrão.
- O JavaScript da página passa a ler nome, UF e esfera a partir da configuração dinâmica.
- O seletor deixa de depender da lista estática escrita manualmente no HTML.

## Arquivos alterados

```text
remuneracao.html
js/pages/remuneracao-automacao.js
js/pages/remuneracao-desktop.js
```

## Resultado esperado

Ao abrir `remuneracao.html`, o seletor de instituição deve ser reconstruído com as 110 instituições de:

```text
config/remuneracao-instituicoes.json
```

Se o visitante escolher uma instituição que ainda não possui JSON de remuneração com linhas publicáveis, a tabela pode aparecer sem cargos, mas a instituição já ficará disponível para consulta e automação.
