# Relatório — Melhoria do tema claro

Data: 2026-05-10

## Objetivo

Melhorar a leitura e a aparência do tema claro no desktop, removendo o excesso de fade branco e aumentando o contraste entre fundo, cards e textos, sem alterar o comportamento visual do tema escuro.

## Alterações aplicadas

- Mantido o tema escuro como padrão inicial do site.
- Adicionado `data-theme="dark"` como fallback no elemento `<html>` das páginas estáticas.
- Tornada mais robusta a leitura de tema salvo em `js/ui/head.js`, aceitando apenas `light` ou `dark` e caindo para `dark` quando não houver valor válido.
- Criada uma camada de ajustes `Ajustes v4` em `css/app-soft-mobile.css` com escopo restrito a `html[data-theme="light"]`.
- Removido o aspecto excessivamente esbranquiçado do plano de fundo claro.
- Definido fundo principal branco com variação suave e cards levemente acinzentados para contraste.
- Reforçadas cores escuras em títulos, textos, tabelas, cards, labels, campos e navegação no tema claro.
- Preservadas as regras existentes de `html[data-theme="dark"]`.
- Atualizado o versionamento do CSS para `css/app-soft-mobile.css?v=20260510lightfix1`.

## Arquivos alterados

- `css/app-soft-mobile.css`
- `js/ui/head.js`
- Páginas `.html` na raiz do projeto, para fallback `data-theme="dark"` e cache busting do CSS.
