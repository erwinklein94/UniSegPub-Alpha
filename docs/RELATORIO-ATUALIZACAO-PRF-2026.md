# Relatório de atualização — PRF — 2026

## 1. Escopo aplicado
Atualização institucional da Polícia Rodoviária Federal (`prf`) no padrão do portal UniSegPub, cobrindo ficha institucional, histórico, cargos/remuneração, concursos, direitos, associações, ações judiciais, navegação e relatório técnico.

## 2. Campos revisados
- **Identificação institucional:** PRF cadastrada/garantida como instituição válida, com sigla, nome oficial, tipo federal, brasão `img/FEDERAL/prf.webp` e vínculo nacional em `br`.
- **Ficha institucional:** criação histórica em 24/07/1928, comando atual, sede, telefone 191, links oficiais, estrutura nacional e fonte textual consolidada.
- **Efetivo e abrangência:** usado o dado institucional de mais de 13 mil servidores ativos, 27 Superintendências, 152 Delegacias, cerca de 500 UOPs e 75 mil km de rodovias federais. Onde não houve recorte oficial consolidado nesta revisão, foi usado `Dados em breve`, sem inferência.
- **Remuneração:** criada/garantida a tabela `CARGOS_PRF` com todos os 18 padrões da carreira, usando os valores da Lei nº 14.875/2024, Anexo XXVII, com efeitos financeiros em 01/05/2026.
- **Direitos e vantagens:** incluídos textos específicos para PRF sobre saúde federal/SouGov, progressão/promoção, subsídio, indenização de fronteira, diárias, missão, insalubridade condicionada, aposentadoria policial e abono.
- **Concursos:** consolidado o concurso PRF 2021/Cebraspe como referência vigente/histórica, sem afirmar novo concurso aberto.
- **Associações e ações judiciais:** adicionados registros para FenaPRF/SINPRFs e teses comuns com cautela jurídica, sem promessa de ganho automático.

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
- `docs/RELATORIO-ATUALIZACAO-PRF-2026.md`

## 4. Validação técnica
- `node --check` executado em todos os arquivos `.js` do projeto após as alterações.
- Resultado: sem erro de sintaxe JavaScript.

## 5. Fontes de referência
- PRF/Gov.br — Institucional, Direção-Geral, carreira, concursos e canais oficiais.
- PRF — `Rotas de Integração: Desafios e Perspectivas para a PRF`.
- Câmara dos Deputados — Lei nº 14.875/2024 e Anexo XXVII da carreira PRF.
- Cebraspe — Concurso PRF 2021.
- Planalto — Constituição Federal, Lei nº 8.112/1990, Lei nº 9.654/1998, Lei nº 12.775/2012, Lei nº 12.855/2013 e normas previdenciárias federais.

## 6. Observações de cautela
- Não foram inferidos dados de aposentados/pensionistas ou recorte feminino por ausência de consolidação oficial única localizada na revisão; os campos foram marcados como `Dados em breve`.
- O valor da remuneração foi tratado como **subsídio**, não como remuneração total com benefícios. Auxílios e indenizações foram descritos como condicionados e não somados automaticamente.
- Concurso novo não foi publicado como aberto; o portal orienta conferir exclusivamente PRF/Gov.br e Cebraspe.
- Ações judiciais foram cadastradas como hipóteses de conferência individual, sem indicação de direito automático.

Atualizado em 04/05/2026.
