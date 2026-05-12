# Ajuste — Tabela detalhada da Remuneração Tabelada

## Arquivos alterados

- `remuneracao.html`
- `js/pages/remuneracao-tabelada.js`
- `css/pages/remuneracao-tabelada.css`

## O que foi alterado

O card `Tabela detalhada` que aparecia vazio abaixo da paginação foi ocultado no carregamento inicial da página.

Agora ele só aparece quando o visitante escolhe uma instituição no filtro ou toca em `Consultar tabela detalhada` dentro de um card de instituição.

## Motivo

O card vazio passava uma impressão de área incompleta ou sem utilidade. A página mantém os cards editoriais estáticos visíveis para o usuário e para indexação, mas evita mostrar uma tabela detalhada sem dados antes da escolha da instituição.

## Funcionamento

- Ao abrir a aba: o card de tabela detalhada fica oculto.
- Ao selecionar uma instituição: o card aparece e carrega a tabela correspondente.
- Ao clicar em `Ver todas`: o card volta a ficar oculto.
- A paginação dos cards editoriais permanece igual.
- O conteúdo estático em HTML permanece disponível na página.
