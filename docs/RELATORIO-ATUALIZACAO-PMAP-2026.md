# Relatório de atualização — PMAP — 2026

## 1. Escopo aplicado
Atualização institucional da Polícia Militar do Estado do Amapá (PMAP), seguindo o modelo de dossiê usado para a PMESP no portal UniSegPub.

## 2. Campos revisados
- Cadastro da chave `pmap` como instituição válida e vinculada ao Estado do Amapá.
- Identificação curta, brasão, descrição institucional, cor-tema e alerta previdenciário.
- Resumo institucional com criação, efetivo ativo, reserva/inativos, efetivo feminino, população, relação ativo/população, comando, sede, emergência, estrutura e fontes.
- Histórico institucional com origem, criador/ato de origem e marcos principais.
- Remuneração tabelada por subsídio da carreira militar estadual do Amapá, com base na LC AP nº 173/2025, Anexo III, efeitos em 01/04/2026.
- Concursos PMAP/Soldado 2022/2026, com banca FCC e convocações recentes pela SEAD/AP.
- Direitos, saúde/proteção social, vantagens, associações e ações judiciais cabíveis.
- Mapa de cargos para navegação e simulador de remuneração.

## 3. Arquivos alterados
- `js/data/portal-config.js`
- `js/ui/header-estados.js`
- `brasoes-mapeados-webp.json`
- `js/data/parametros-cargos.js`
- `js/services/remuneracao.js`
- `js/services/direitos.js`
- `js/data/concursos-data.js`
- `js/data/associacoes-data.js`
- `js/data/acoes-judiciais-data.js`
- `js/ui/navegacao-ui.js`
- `docs/RELATORIO-ATUALIZACAO-PMAP-2026.md`

## 4. Validação técnica
- Executar `node --check` em todos os arquivos `.js` alterados.
- Conferir `brasoes-mapeados-webp.json` com parser JSON.
- Testar seleção da instituição `pmap` no cabeçalho, cargos, remuneração, concursos, direitos, associações e ações.

## 5. Fontes de referência
- PMAP — História da Polícia Militar do Amapá.
- Governo do Amapá / Agência Amapá — passagem de comando da PMAP em 2026.
- SEAD/AP — concursos vigentes PMAP/Soldado 2022/2026.
- SEAD/AP / Diário Oficial do Amapá — LC AP nº 173/2025 e tabela de progressão horizontal dos militares estaduais.
- IBGE — população estimada do Amapá em 2025.
- Portal institucional e canais oficiais da PMAP.

## 6. Observações de cautela
- Efetivo ativo, reserva/inativos e efetivo feminino foram mantidos como estimados quando não localizados em fonte oficial consolidada nesta revisão.
- Remuneração usa subsídio legal por posto/graduação e tempo de efetivo serviço; diárias, auxílios, alimentação, fardamento, serviço extraordinário, função, decisões judiciais, retroativos e rubricas pessoais não foram somados.
- No Amapá, vínculos estaduais e eventuais situações de ex-Território/transposição federal não devem ser misturados sem análise de ficha funcional e contracheque.
- Concurso PMAP 2022/2026 foi registrado como certame em acompanhamento/convocações, não como novo edital aberto.
