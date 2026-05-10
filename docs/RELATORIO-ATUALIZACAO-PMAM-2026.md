# Relatório de Atualização PMAM 2026

## 1. Escopo aplicado
Atualização institucional da Polícia Militar do Estado do Amazonas (PMAM) no portal UniSegPub, seguindo o padrão de cadastro, remuneração, direitos, concursos, associações e ações judiciais usado para a PMESP.

## 2. Campos revisados
- Chave institucional `pmam` incluída na lista mestra de instituições válidas.
- Estado do Amazonas vinculado à PMAM no mapa de estados, preservando Bombeiro, Polícia Civil e Polícia Penal quando existentes na estrutura.
- Resumo institucional revisado com nome completo, sigla, UF, tipo, criação, efetivo ativo estimado, reserva/inativos estimados, efetivo feminino estimado, população, relação ativo/população, governador, comando, estrutura, sede, emergência, links oficiais, fontes e data de revisão.
- Histórico institucional incluído com origem em 04/04/1837, reorganizações de 1887/1890/1935, denominação PMAM em 14/11/1938, marco de comando em 1983, concurso FGV 2021/2022 e atualização remuneratória pela Lei AM nº 7.445/2025.
- Remuneração tabelada criada para a PMAM com 18 linhas oficiais por posto/graduação, usando a tabela legal PM/BM do Amazonas com referência em 01/12/2025: Coronel, Tenente-Coronel, Major, Capitão, Tenentes, Aspirante, Alunos Oficiais, Subtenente, Sargentos, Cabo, Soldado e Aluno Soldado.
- Concursos PMAM cadastrados com edital FGV 2021/2022, convocações em 2026, vagas, remuneração de edital, cotas, idade, escolaridade, banca, etapas, formação e cautela sobre novo edital.
- Direitos revisados com Sistema de Proteção Social Militar AM/Amazonprev, tabela legal PM/BM, indenização de compensação orgânica e atividade técnica, promoção, curso, quadro, concurso e rubricas condicionadas.
- Associações e canais institucionais cadastrados com campos completos e cautela para confirmação direta.
- Ações judiciais comuns cadastradas para tabela remuneratória, indenizações técnicas, promoção, concurso, reserva/reforma/pensão e diárias/escalas.

## 3. Arquivos alterados
- `js/data/portal-config.js`
- `js/ui/header-estados.js`
- `js/data/parametros-cargos.js`
- `js/services/remuneracao.js`
- `js/services/direitos.js`
- `js/data/concursos-data.js`
- `js/data/associacoes-data.js`
- `js/data/acoes-judiciais-data.js`
- `js/ui/navegacao-ui.js`
- `docs/RELATORIO-ATUALIZACAO-PMAM-2026.md`

## 4. Validação técnica
- `node --check` executado em todos os 25 arquivos JavaScript do projeto.
- `python3 -m json.tool brasoes-mapeados-webp.json` executado para conferir JSON.
- Resultado: aprovado, sem erro sintático detectado.

## 5. Fontes de referência
- PMAM — História institucional, missão, endereço e canais.
- PMAM — Página de editais do Concurso PMAM 2021.
- FGV — Edital PMAM 2021/2022.
- Governo do Amazonas — publicações de 2026 sobre formação e convocações de novos policiais militares.
- ALEAM/SAPL/Legisla.AM — Lei AM nº 7.445/2025, que atualiza a remuneração dos policiais e bombeiros militares do Amazonas.
- IBGE — estimativa populacional 2025 do Amazonas.
- Governo do Amazonas / Agência Brasil — atualização do chefe do Executivo estadual em 2026.

## 6. Observações de cautela
- Efetivo ativo, reserva/inativos e efetivo feminino foram marcados como estimados por não haver número consolidado oficial localizado para todos os campos na revisão.
- A tabela remuneratória PMAM usa valor legal bruto da Lei AM nº 7.445/2025, Anexo III, com referência em 01/12/2025. Não representa contracheque individual completo.
- Não foram somados automaticamente indenizações técnicas, diárias, função, retroativos, GAMS fora da composição legal, saúde, fardamento, decisões judiciais, parcelas pessoais, descontos ou rubricas de reserva/reforma.
- O concurso PMAM 2021/2026 foi cadastrado como certame vigente/histórico com convocações; não tratar como novo edital aberto sem publicação oficial posterior.
- A contribuição previdenciária/proteção social deve ser conferida no contracheque, na legislação estadual, no órgão pagador e no Amazonprev.
