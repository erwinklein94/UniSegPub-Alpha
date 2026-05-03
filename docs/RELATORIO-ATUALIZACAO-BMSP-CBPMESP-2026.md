# Relatório de atualização aplicada — BMSP / CBPMESP — 03/05/2026

## Escopo aplicado

- A chave interna `bmsp` foi preservada para não quebrar seletores, imagens, filtros e referências já existentes no código.
- O nome exibido foi atualizado para **Corpo de Bombeiros da Polícia Militar do Estado de São Paulo — CBPMESP**.
- A sigla oficial exibida foi ajustada para **CBPMESP**, mantendo `BMSP` como referência interna/compatibilidade quando necessário.
- O disclaimer superior `.header-disclaimer-note` foi removido dos cabeçalhos das páginas HTML, conforme solicitado.

## Dados institucionais aplicados

- Comando: Cel PM Alexandre Merlin — Comandante do Corpo de Bombeiros da PMESP.
- Emergência: 193.
- Efetivo ativo: 8.604 como referência histórica TCE/SP 2019/2020.
- Inativos/reserva: marcado como “A confirmar · recorte CBPMESP”.
- Efetivo feminino: marcado como “A confirmar em fonte oficial”.
- Estrutura: CCB — Comando do Corpo de Bombeiros, vinculado à PMESP, com atuação em prevenção/combate a incêndios, busca e salvamento, salvamento aquático, defesa civil, fiscalização técnica e educação pública.
- Fonte agregada: CBPMESP, PMESP, Governo de SP, ALESP, SGGD/SP, TCE/SP, DOE/SP e Vunesp.

## Áreas alteradas

- `js/ui/header-estados.js`: resumo institucional, sigla/nome exibidos, configuração de instituição e estrutura BMSP/CBPMESP.
- `js/data/bases-conteudo.js`: ações judiciais, associações e concursos.
- `js/services/remuneracao.js`: fonte oficial e tabela remuneratória por posto/graduação com base na PMESP/SGGD-SP.
- `*.html`: remoção do parágrafo `.header-disclaimer-note` do cabeçalho.

## Observação técnica

Não foi criada nova chave `cbpmesp`. A instituição continua sendo selecionada internamente como `bmsp`, evitando quebra de compatibilidade com imagens (`img/BOMBEIRO/bmsp.webp`), seletores, rotas e bases existentes.
