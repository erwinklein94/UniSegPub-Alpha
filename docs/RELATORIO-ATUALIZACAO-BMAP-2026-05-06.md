# Relatório de atualização — BMAP/CBMAP — 06/05/2026

## Objetivo
Inserir o Corpo de Bombeiros Militar do Amapá (BMAP/CBMAP) no portal UniSegPub no mesmo padrão já aplicado para PF, BMAC, BMAL e BMAM, evitando campos vazios no site e mantendo estimativas sinalizadas quando não houver número oficial fechado.

## Arquivos alterados
- `js/data/portal-config.js`: inclusão de `bmap` como instituição válida.
- `js/data/parametros-cargos.js`: criação de `CARGOS_BMAP` com 154 linhas remuneratórias.
- `js/services/remuneracao.js`: inclusão de fonte oficial BMAP, mapeamento da tabela e cálculo de remuneração estadual.
- `js/ui/header-estados.js`: inclusão do resumo institucional completo, estimativas, concursos, ações judiciais e associações.
- HTMLs da raiz/templates: cache busting atualizado para `20260506bmap1`.

## Dados institucionais
- Efetivo ativo: 1.073 bombeiros militares, conforme histórico institucional do CBMAP.
- Reserva/reforma/pensionistas: estimativa técnica de aproximadamente 600 vínculos.
- Mulheres: estimativa técnica de aproximadamente 180 mulheres.
- População de referência: 806.517 habitantes — estimativa IBGE 2025 para o Amapá.
- Relação estimada: aproximadamente 1 bombeiro militar ativo para cada 752 habitantes.
- Comando: Coronel QOCBM Pelsondré Martins da Silva.
- Sede: Rua Hamilton Silva, nº 1647, Santa Rita, Macapá/AP.
- Emergência: 193.

## Remuneração
Foi usada a Lei Complementar AP nº 173/2025, que alterou a LC AP nº 113/2018. A tabela principal cadastrada é o Anexo III — Tabela de Progressão Horizontal 2026 I, com vigência em 01/04/2026.

A tabela inclui 14 postos/graduações e 11 níveis de progressão horizontal, totalizando 154 linhas:
- Coronel, Tenente-Coronel, Major, Capitão, 1º Tenente, 2º Tenente, Aspirante a Oficial;
- Subtenente, 1º Sargento, 2º Sargento, 3º Sargento, Cabo, Soldado e Aluno Soldado;
- Nível Base até Nível 10.

Valores de referência:
- Aluno Soldado Base: R$ 3.213,26.
- Soldado Base: R$ 6.039,13.
- Coronel Nível 10: R$ 33.810,04.

## Cautelas incluídas
- Não somar automaticamente indenizações, diárias, fardamento, alimentação, funções, serviço extraordinário, retroativos, parcelas pessoais ou rubricas de quadros federais/ex-Território.
- Distinguir militar estadual do CBMAP de eventual vínculo federal/transposição.
- Tratar reserva, mulheres e pensionistas como estimativas para noção do usuário, não como número oficial fechado.

## Validação
- `node --check` executado nos principais arquivos JS.
- `CARGOS_BMAP.length === 154`.
- Linha padrão: Soldado BM Base — R$ 6.039,13.
- Seção BMAP sem ocorrência de `Dados em breve`.
