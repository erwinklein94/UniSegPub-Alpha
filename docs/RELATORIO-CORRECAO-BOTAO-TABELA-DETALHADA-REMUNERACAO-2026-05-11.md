# Correção — Botão “Consultar tabela detalhada” na Remuneração Tabelada

## Arquivos alterados

- `remuneracao.html`
- `js/pages/remuneracao-tabelada.js`
- `docs/RELATORIO-CORRECAO-BOTAO-TABELA-DETALHADA-REMUNERACAO-2026-05-11.md`

## O que foi corrigido

O card “Tabela detalhada” permanece oculto ao abrir a página, para não passar a impressão de bloco vazio ou sem utilidade.

Ao clicar em “Consultar tabela detalhada” dentro de qualquer card de instituição, o script agora:

1. Seleciona a instituição correspondente no filtro editorial.
2. Mantém apenas o card daquela instituição visível.
3. Exibe o bloco “Tabela detalhada”.
4. Preenche a tabela diretamente a partir dos dados já cadastrados no portal.
5. Atualiza os indicadores de cargos listados, menor remuneração bruta e maior remuneração bruta.
6. Rola a tela até o bloco detalhado.

## Ajuste técnico aplicado

Antes, o botão dependia principalmente da troca global de instituição do site. Esse fluxo poderia falhar caso o seletor institucional legado estivesse oculto, se houvesse cache antigo de JavaScript ou se alguma função global não atualizasse a tabela no momento do clique.

Agora, além de tentar atualizar o cabeçalho institucional, o script da própria página renderiza a tabela detalhada diretamente usando `gerarRemuneracaoTabelada(inst)`. Isso preserva a lógica existente do site, mas torna o botão da nova área editorial independente do seletor antigo.

## Cache

Também foi alterada a versão do arquivo `js/pages/remuneracao-tabelada.js` chamada em `remuneracao.html`, para reduzir a chance de o navegador ou o GitHub Pages manterem uma versão antiga em cache.

## SEO e AdSense

O conteúdo editorial dos cards continua escrito diretamente no HTML. O JavaScript atua apenas para melhorar a navegação, filtrar cards, paginar visualmente e abrir a consulta detalhada quando o visitante pede mais informações.
