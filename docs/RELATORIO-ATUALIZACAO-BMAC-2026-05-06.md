# Relatório técnico — Atualização BMAC/CBMAC

Data da revisão: 06/05/2026
Instituição: BMAC — Corpo de Bombeiros Militar do Acre

## Objetivo

Aplicar ao BMAC o mesmo padrão de preenchimento aplicado à Polícia Federal no portal UniSegPub: resumo institucional completo, estimativas sinalizadas no lugar de lacunas, remuneração tabelada detalhada por posto/graduação, concursos, associações e cautelas jurídicas/remuneratórias.

## Arquivos alterados

- `js/data/portal-config.js`
  - Inclusão de `bmac` entre as instituições válidas para evitar bloqueio de seleção e normalização.

- `js/data/parametros-cargos.js`
  - Inclusão de `CARGOS_BMAC` com 19 referências remuneratórias por posto/graduação.
  - Inclusão de critérios e observações próprios do Acre/CBMAC.
  - Benefícios e rubricas eventuais foram descritos, mas não somados automaticamente.

- `js/services/remuneracao.js`
  - Inclusão da fonte remuneratória `bmac`.
  - Inclusão de `bmac: CARGOS_BMAC` no mapa de cargos.
  - Inclusão de regra de cálculo própria para PMAC/BMAC, preservando total bruto de referência e cautelas.

- `js/ui/header-estados.js`
  - Inclusão do BMAC como bombeiro militar do Acre.
  - Inclusão do resumo institucional completo.
  - Substituição de lacunas por estimativas sinalizadas com `≈`.
  - Inclusão de dados de concurso, associações e ações judiciais de cautela.

- Arquivos HTML da raiz
  - Atualização do cache busting dos scripts alterados.

## Resumo dos dados incorporados

- Efetivo ativo estimado: aproximadamente 690 militares ativos.
- Base da estimativa: efetivo oficial divulgado de 633 militares no balanço de 2024, acrescido de 56 novos soldados formados em 2025.
- População de referência: 884.372 habitantes, IBGE 2025.
- Relação população/ativo: aproximadamente 1 militar ativo para cada 1,3 mil habitantes.
- Reserva/inativos: estimativa técnica de ordem de grandeza, não usada como número oficial fechado.
- Mulheres: estimativa técnica de ordem de grandeza, não usada como número oficial fechado.
- Comando: Cel QOBM Charles da Silva Santos.
- Governo estadual: Mailza Assis.
- Emergência: 193.

## Remuneração cadastrada

Tabela `CARGOS_BMAC` com 19 linhas:

1. Coronel BM — R$ 18.560,01
2. Tenente-Coronel BM — R$ 15.955,97
3. Major BM — R$ 13.856,68
4. Capitão BM — R$ 11.988,79
5. 1º Tenente BM — R$ 10.494,73
6. 2º Tenente BM — R$ 9.887,81
7. Aspirante a Oficial BM — R$ 9.253,15
8. Aluno Oficial BM — R$ 6.887,07
9. Subtenente BM — R$ 7.285,86
10. 1º Sargento BM — R$ 6.767,42
11. 2º Sargento BM — R$ 6.500,93
12. 3º Sargento BM Nível II — R$ 6.349,39
13. 3º Sargento BM Nível I — R$ 6.217,35
14. Aluno Sargento BM — R$ 5.415,82
15. Cabo BM — R$ 5.326,50
16. Aluno Cabo BM — R$ 5.249,83
17. Soldado BM Nível II — R$ 5.207,53
18. Soldado BM Nível I — R$ 5.007,40
19. Aluno Soldado BM — R$ 4.344,22

## Cautelas inseridas no código

- A tabela é referência de remuneração bruta mensal/posto-graduação e não deve ser confundida com líquido de contracheque.
- Auxílio-aptidão militar, serviço complementar, banco de horas, localização especial, chefia, sexta-parte, gratificação de atividade especial, prêmio anual, diárias, indenizações, fardamento, saúde e rubricas pessoais dependem de lei, escala, lotação, ato administrativo e contracheque.
- Reserva, reforma e pensão militar devem ser tratadas caso a caso.
- Concursos devem ser checados no DOE/SEAD/IBFC antes de afirmar status de edital aberto.

## Fontes públicas consultadas

- Agência de Notícias do Acre — balanço institucional do CBMAC 2024.
- Agência de Notícias do Acre — formatura de 56 novos soldados em 2025.
- Agência de Notícias do Acre — curso e declarações institucionais do comandante em 2026.
- Portal do Estado do Acre — legislação e PCCR dos militares estaduais.
- ALEAC Legisla-e — Lei Complementar nº 349/2018.
- IBGE — população estimada do Acre em 2025.
- SEAD/AC e IBFC — edital/atos do concurso CBMAC 2022.

## Validação técnica

- `node --check` executado em todos os arquivos JavaScript do projeto.
- Teste funcional em VM Node confirmou:
  - `CARGOS_BMAC.length === 19`
  - `HEADER_INSTITUICOES_RESUMO.bmac.ativa === 689`
  - cálculo de `soldado_1_bmac` retorna `R$ 5.007,40`
  - fonte remuneratória `bmac` carregada.

## Observação editorial

As estimativas foram mantidas com marcador `≈` e texto de cautela para atender à diretriz editorial de não deixar campos vazios no site sem apresentar estimativas como dado oficial fechado.
