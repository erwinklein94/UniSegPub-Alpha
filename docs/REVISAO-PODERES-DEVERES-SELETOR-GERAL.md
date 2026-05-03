# Revisão — seletor geral da aba Poderes e Deveres

Data: 02/05/2026

## Alteração aplicada

A caixa de seleção interna da aba **Poderes e Deveres** foi simplificada para exibir apenas tipos gerais de instituição, sem detalhamento por estado ou órgão específico, e foi atualizada para incluir também o **Corpo de Bombeiros Militar**.

## Opções atuais do seletor

1. Polícia Militar
2. Corpo de Bombeiros Militar
3. Polícia Civil
4. Polícia Penal
5. Polícia Federal
6. Polícia Rodoviária Federal
7. Guarda Municipal

## O que foi ajustado

- Removida da caixa de seleção a listagem detalhada das instituições estaduais por UF.
- Incluída a opção geral **Corpo de Bombeiros Militar**.
- Mantida a independência da caixa de seleção em relação à instituição principal do site.
- A escolha da aba Poderes e Deveres continua alterando somente o conteúdo dessa aba.
- O conteúdo renderizado trabalha por tipo geral de instituição.
- O bundle principal foi atualizado e o cache do `index.html` foi renovado.

## Revisão técnica

- `node --check js/pages/poderes-deveres.js`: aprovado.
- `node --check js/chunks/11-poderes-deveres.js`: aprovado.
- `node --check js/dist/app.bundle.js`: aprovado.
- Validação do seletor: 7 opções.
- Ordem validada: PM, BM, PC, PP, PF, PRF, GM.
