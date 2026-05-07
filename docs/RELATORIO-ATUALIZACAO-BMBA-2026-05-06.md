# Relatório de atualização — BMBA / CBMBA — 06/05/2026

## Escopo

Atualização da instituição `bmba` — Corpo de Bombeiros Militar da Bahia — no padrão aplicado anteriormente para PF, BMAC, BMAL, BMAM e BMAP, com foco em:

- resumo institucional sem lacunas;
- estimativas sinalizadas com `≈` nos campos sem número público consolidado;
- integração da BMBA nos seletores e estruturas do portal;
- remuneração tabelada detalhada por posto/graduação e referência da GAP, aos moldes do detalhamento da PMESP/PMBA;
- cautelas de benefícios, indenizações, CET, escala, lotação, ficha financeira e contracheque.

## Arquivos alterados

- `js/data/portal-config.js`
- `js/data/parametros-cargos.js`
- `js/services/remuneracao.js`
- `js/ui/header-estados.js`
- HTMLs da raiz com cache busting `v=20260506bmba1`

## Dados institucionais inseridos

- Nome: Corpo de Bombeiros Militar da Bahia
- Sigla: BMBA
- Sigla interna: CBMBA
- Estado: Bahia / BA
- Tipo: Bombeiro Militar
- Comando: Coronel BM Aloísio Mascarenhas Fernandes
- Sede: Ladeira Revolta dos Malês, nº 38, Centro Histórico, Salvador/BA
- Emergência: 193
- População de referência: 14.870.907 habitantes, estimativa IBGE 2025
- Efetivo ativo: ≈ 3,8 mil bombeiros militares ativos
- Reserva/reforma/pensionistas: ≈ 2,7 mil vínculos
- Mulheres: ≈ 600 mulheres
- Relação: ≈ 1 bombeiro militar ativo para cada 3.913 habitantes

## Remuneração

Foi criada a estrutura `CARGOS_BMBA`, baseada na Lei BA nº 14.890/2025:

- soldo com efeitos em 01/05/2026;
- GAP com efeitos em 01/06/2026;
- auxílio-fardamento mensal de R$ 256,18 separado como benefício;
- cinco referências de GAP por posto/graduação, quando aplicável;
- linha de Aluno Soldado como referência de formação/estimativa, exigindo validação no edital vigente.

Total gerado pela aba de remuneração: 55 linhas.

Exemplos:

- Soldado BMBA Ref. I: R$ 3.134,44 + R$ 256,18 de auxílio-fardamento separado.
- Soldado BMBA Ref. V: R$ 4.719,02 + R$ 256,18 de auxílio-fardamento separado.
- Coronel BMBA Ref. I: R$ 11.190,50 + R$ 256,18 de auxílio-fardamento separado.
- Coronel BMBA Ref. V: R$ 17.395,31 + R$ 256,18 de auxílio-fardamento separado.

## Cautelas aplicadas

Não foram somados automaticamente:

- CET;
- adicional noturno;
- serviço extraordinário;
- diárias;
- alimentação;
- gratificação de função;
- indenizações;
- parcelas pessoais;
- retroativos;
- diferenças individuais;
- reflexos previdenciários.

Essas rubricas dependem de legislação, escala, lotação, ato específico, ficha financeira e contracheque.

## Fontes usadas

- Portal oficial do CBMBA: https://www.cbm.ba.gov.br/
- Página de Comando-Geral do CBMBA: https://cbm.ba.gov.br/comando-geral
- Portal de concursos do CBMBA: https://www.cbm.ba.gov.br/portal/concursos
- Lei BA nº 14.890/2025 publicada no DOE/BA: https://cdn.atarde.com.br/img/attachmentinline/1310000/Jeronimo-sanciona-lei-de-reajuste-salarial-para-po0131683500202505060933.pdf?xid=6642146
- Governo da Bahia — autonomia/organização do CBMBA em 2014: https://www.ba.gov.br/comunicacao/2014/12/noticias/leis-de-organizacao-basica-da-policia-militar-e-dos-bombeiros-sao-sancionadas
- IBGE — estimativas populacionais 2025: https://ftp.ibge.gov.br/Estimativas_de_Populacao/Estimativas_2025/estimativa_dou_2025.pdf

## Validação técnica

- `node --check` executado nos arquivos JS alterados.
- Teste em VM confirmou:
  - `CARGOS_BMBA.length === 11`
  - `gerarRemuneracaoTabelada('bmba').length === 55`
  - Soldado BMBA Ref. I = R$ 3.134,44
  - Soldado BMBA Ref. V = R$ 4.719,02
  - BMBA incluída em `INSTITUICOES_VALIDAS`
  - Resumo, concurso e ações da BMBA sem `Dados em breve`.
