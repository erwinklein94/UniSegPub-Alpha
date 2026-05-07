# Relatório de atualização — BMAL / CBMAL

Data: 06/05/2026
Instituição: Corpo de Bombeiros Militar de Alagoas — BMAL/CBMAL

## Escopo

Atualização do portal UniSegPub para incluir o Corpo de Bombeiros Militar de Alagoas no mesmo padrão aplicado à PF e ao BMAC, com substituição de lacunas por estimativas identificadas, dados institucionais, concursos, associações, ações judiciais e remuneração tabelada detalhada.

## Arquivos alterados

- `js/data/portal-config.js`
- `js/data/parametros-cargos.js`
- `js/services/remuneracao.js`
- `js/ui/header-estados.js`
- HTMLs da raiz para atualização de cache busting

## Dados institucionais

- Efetivo de referência: ≈ 3,2 mil bombeiros militares, com base no efetivo fixado pela Lei AL nº 8.668/2022.
- Reserva/reforma/pensionistas: ≈ 1,8 mil vínculos, estimativa técnica para noção do usuário.
- Mulheres: ≈ 450, estimativa técnica para noção do usuário.
- População AL: 3.220.848 habitantes, referência IBGE 2025.
- Relação estimada: ≈ 1 bombeiro militar para cada 992 habitantes.
- Comando: Coronel BM Sérgio André Silva Verçosa, conforme página oficial do CBMAL.

## Remuneração

Criada `CARGOS_BMAL` com 31 linhas, abrangendo:

- Coronel BM — níveis I e II
- Tenente-Coronel BM — níveis I e II
- Major BM — níveis I e II
- Capitão BM — níveis I e II
- 1º e 2º Tenente BM — níveis I e II
- Aspirante a Oficial BM — níveis I e II
- Cadetes 1º, 2º e 3º ano — níveis I e II
- Subtenente BM — níveis I e II
- 1º, 2º e 3º Sargento BM — níveis I e II
- Cabo BM
- Soldado BM
- Aluno Soldado BM

A tabela usa estimativa técnica de maio/2026: base do Anexo IV da Lei AL nº 7.580/2014 e revisões/reajustes identificados até a Lei AL nº 9.852/2026.

## Cautelas inseridas

- Não tratar a tabela como valor oficial definitivo de contracheque.
- Não somar automaticamente serviço voluntário remunerado, adicional de compensação orgânica, diárias, uniforme, alimentação, saúde, função, retroativos, indenizações ou parcelas pessoais.
- Concurso deve ser exibido como monitoramento/histórico, não como aberto sem edital vigente.
- Ações judiciais devem ser tratadas como conferência individual, nunca promessa de ganho automático.

## Validação

- `node --check` executado em todos os arquivos JS.
- Verificada existência de `CARGOS_BMAL` com 31 linhas.
- Verificado que o bloco específico da BMAL não contém "Dados em breve".
