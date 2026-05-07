# Relatório de Atualização — BMAM/CBMAM — 06/05/2026

## Escopo
Atualização da instituição `bmam` — Corpo de Bombeiros Militar do Amazonas — no mesmo padrão aplicado à PF, BMAC e BMAL.

## Arquivos alterados
- `js/data/portal-config.js`: inclusão de `bmam` na lista de instituições válidas.
- `js/data/parametros-cargos.js`: criação de `CARGOS_BMAM` com 18 linhas remuneratórias.
- `js/services/remuneracao.js`: fonte oficial e integração da BMAM no cálculo de remuneração tabelada.
- `js/ui/header-estados.js`: dados institucionais, estimativas, concurso, ações judiciais e associações.
- HTMLs da raiz e templates: cache busting atualizado para `20260506bmap1`.

## Dados institucionais
- Efetivo ativo: ≈ 1,5 mil militares ativos, com base em notícia oficial de março/2026 que informa efetivo superior a 1,5 mil após a formatura de 210 soldados.
- População AM: 4.321.616 habitantes, IBGE 2025.
- Relação: ≈ 1 bombeiro militar ativo para cada 2.881 habitantes.
- Reserva/reforma/pensionistas e mulheres: preenchidos como estimativas técnicas, com cautela expressa.
- Comando: Coronel QOBM Orleilso Ximenes Muniz.
- Sede: Av. Codajás, nº 1565, Petrópolis, Manaus/AM.

## Remuneração
Tabela baseada na Lei AM nº 7.445/2025, que atualiza a Lei AM nº 3.725/2012. O portal usa o Anexo III, com efeitos financeiros a partir de 01/12/2025, composto por soldo, gratificação de tropa e GAMS quando prevista.

Faixa inserida:
- Coronel BM: R$ 37.322,89.
- Soldado BM: R$ 5.725,66.
- Aluno Soldado BM: R$ 3.149,12.

## Cautelas
Não foram somadas automaticamente indenizações de compensação orgânica/atividade técnica, função, diárias, fardamento, alimentação, saúde, retroativos, parcelas pessoais ou decisões judiciais. Cada rubrica depende de habilitação, escala, ato, lotação e contracheque.

## Validação
Após a atualização, executar `node --check` nos arquivos JS e teste de presença de `CARGOS_BMAM`, remuneração e resumo institucional.
