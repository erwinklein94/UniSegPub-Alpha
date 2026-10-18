# Concursos — revisão de 18/10/2026

## Página

Nova apresentação alinhada à home e à remuneração: hero, navegação interna, indicadores que acompanham filtros, seções de inscrições, andamento e preparação, capas com brasões, fontes expansíveis, diretório por UF, guia e perguntas frequentes. Conteúdo estático disponível sem JavaScript. Respeita movimento reduzido, foco pelo teclado e impressão.

Substituídos 47 cartões legados, com dados de datas diferentes, por dez destaques editoriais conferidos nesta revisão. Nenhum arquivo histórico por instituição foi apagado. O diretório continua oferecendo os 110 canais cadastrados, sem anunciar que todos possuem concurso aberto ou que todos os canais foram revalidados nesta pesquisa.

Busca por instituição, cargo e banca; filtros combinados por situação, localidade, carreira e instituição; estado vazio e reset; parâmetro `?inst=` preservado para atalhos das outras páginas. A busca por sigla de UF no diretório usa correspondência exata de estado.

## Seleção editorial

| Concurso | Situação em 18/10 | Informação conferida |
| --- | --- | --- |
| PCPE | Inscrições | 1.315 vagas: 1.200 agentes, 70 escrivães e 45 delegados. De 15/10 a 16/12/2026, às 18h. |
| PMPE | Inscrições | 1.320 vagas. Prorrogação divulgada pela banca até 23/11, às 14h. |
| CBMPE | Inscrições | 570 vagas. Mesmo prazo prorrogado. |
| CBMAL | Inscrições | 172 vagas. Reabertura de 18/09 a 26/10/2026, às 18h. |
| PCPR | Andamento | Provas em 11/10 e gabarito preliminar em 13/10. Cadastro de reserva. |
| PF 2025 | Andamento | 1.000 vagas do edital. Inscrições encerradas em 2025; consulta de local/horário de dinâmica de grupo em 15/10/2026. |
| PMMA | Andamento | 1.000 vagas do edital. Provas e gabaritos preliminares publicados em 16/10. |
| PMAL | Andamento | 530 vagas do edital. Página específica informa fim das inscrições em 16/10 às 18h. |
| Câmara / PLF | Andamento | Inscrições encerradas em 20/02; atos posteriores sobre avaliações e retificações. |
| PMERJ | Preparação | Comunicado histórico de abril informa tramitação; sem afirmar data, banca ou vagas novas. |

Total nesta seleção na data de revisão: quatro concursos com inscrições, 3.377 vagas nos respectivos editais, cinco em andamento e um registro de preparação. Não representa a totalidade dos concursos do país. As vagas das seleções em andamento são do edital original; não são novas inscrições.

A listagem geral do Cebraspe ainda mostrava PMAL no bloco de inscrições abertas, mas a página específica informava 16/10 como término; prevaleceu o cronograma específico. PMPE/CBMPE usam a notícia de prorrogação da própria AOCP, com links complementares e divergência indicada nas notas.

Remuneração dos cartões é referência do edital/página da banca, não atualização da tabela salarial da carreira. PF remete à página de remuneração para evitar apresentar o teto histórico do edital de 2025 como atual. Valores de PCPE e requisitos foram conferidos no PDF do edital. Não foram inventadas taxas, requisitos ou datas que não puderam ser confirmados.

## Fontes primárias

- PCPE: https://www.cebraspe.org.br/concursos/pc_pe_26
- Edital PCPE: https://cdn.cebraspe.org.br/concursos/pc_pe_26/arquivos/C8954198EED687EE933077C3EC25BFDB828354459F7AA3D175D6265BF6DF10C9.pdf
- Prorrogação PMPE/CBMPE: https://noticias.institutoaocp.org.br/blog/pm-e-bombeiros-de-pernambuco-tem-prazo-de-inscricao-estendido/
- Páginas AOCP: https://www.institutoaocp.org.br/concursos/714 e https://www.institutoaocp.org.br/concursos/715
- CBMAL: https://www.cebraspe.org.br/concursos/CBM_AL_26
- PMAL: https://www.cebraspe.org.br/concursos/PM_AL_26
- PMMA: https://www.cebraspe.org.br/concursos/PM_MA_26
- PF: https://www.cebraspe.org.br/concursos/PF_25
- Câmara: https://www.cebraspe.org.br/concursos/CD_26_PL
- PCPR: https://www.policiacivil.pr.gov.br/Noticia/PCPR-realiza-concurso-para-mais-de-46-mil-candidatos-em-Curitiba-Londrina-e-Cascavel
- PMERJ: https://sepm.rj.gov.br/2026/04/comunicado/

Páginas Cebraspe que dependem de JavaScript foram consultadas no Chrome; registros textuais de apoio ficam em tmp/fonte-*.txt (não versionados).

## Atualização e manutenção

`data/concursos/destaques.json` é a fonte editorial desta página. `node scripts/build-concursos.mjs` gera os cartões, o JSON embutido, as opções e sincroniza os quatro partials e o template. `--check` valida a sincronização. As automações legadas não sobrescrevem os destaques editoriais nem seus status na tela.

Com JavaScript, o status é recalculado na carga, a cada minuto e ao voltar à aba. Após o prazo, uma inscrição não permanece no grupo aberto. Após 14 dias sem revisão, registros deixam de ser destacados como abertos e surge um aviso. Isso não consulta a banca automaticamente; uma prorrogação ou novo edital precisa de conferência editorial. Sem JavaScript, a data da revisão e o aviso solicitam confirmação nas fontes.

## Validação

Dez testes unitários (cinco concursos e cinco da home) aprovados: somas, filtros, acentos, limites de data/hora, cronograma futuro, vencimento, revisão antiga, campos e imagens. Gerador próprio e montagem de templates estáticos aprovados.

Chrome: filtros combinados e indicadores, reset, vazio, busca de UF, instituição por URL, animação de rolagem, movimento reduzido, imagens carregadas, passagem para novembro sem inscrições antigas abertas e conteúdo sem JavaScript. Sem erros de JavaScript. Sem overflow em 320, 390, 768, 1024 e 1440 px. Capturas para revisão em output/concursos-onepage/ (não versionadas).
