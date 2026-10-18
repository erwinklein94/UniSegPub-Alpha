# Auditoria de remuneração — 18/10/2026

Foram examinados os 110 cadastros e consultadas as 340 URLs distintas que estavam associadas às tabelas. Novas leis e anexos oficiais foram consultados quando as fontes antigas estavam incompletas ou desatualizadas. Resposta HTTP 200, quantidade de linhas e score estrutural não comprovam correção ou vigência.

Resultado: **50 instituições com tabelas conferidas documentalmente** e **60 com vigência integral ainda a confirmar**. A base passou de 1394 para 2350 referências de cargo/classe/nível. A ampliação de referências não equivale à criação de novos cargos.

Das 340 URLs antigas, 59 apresentaram erro de acesso, certificado, resolução de endereço ou resposta diferente de 200 nesta consulta. Outras retornaram páginas genéricas ou conteúdo antigo. A lista de consultas e os respectivos resultados estão em [registro da auditoria](../data/remuneracao/_auditoria-2026-10-18.json).

## Alterações nos dados

- PF: inclusão das quatro classes/categorias, com a etapa de maio/2026. PRF: conferência dos 18 padrões da mesma etapa. PCDF: anexos de janeiro/2026.
- São Paulo: substituição dos valores ilustrativos por tabela da SGGD para PM e CBPMESP; composição e exclusões explicitadas. Na PCSP, o vencimento básico deixou de ser apresentado como remuneração completa; a vigência da tabela integral permanece pendente.
- Minas Gerais: tabelas de 2026 após a revisão de 5,4%; níveis e graus de Polícia Civil e Penal, com bases separadas da remuneração composta.
- Pará: substituição de soldos e editais antigos pelos totais de referência dos ativos na Lei 11.358/2026, sem misturar quadro em extinção ou inativos.
- Paraíba: classes e níveis completos da PC e PP; distinção entre subsídio e remuneração composta de Delegado, com alimentação e anuênio de referência já incluídos onde previstos.
- Goiás: tabela militar legal com efeitos em julho/2026, sem incorporar a indenização de alimentação ao subsídio.
- Paraná: etapa de outubro/2026 da tabela militar, com cinco classes por posto/graduação. Valores de bolsas de formação não extrapolados.
- Amapá: progressões militares de setembro/2026, classes da PC em setembro e subsídios da PP em outubro/2026; etapas futuras excluídas.
- Amazonas: tabela militar aplicável em outubro, sem antecipar o reajuste de novembro; referências A–J da PP, separando o quadro NS do quadro transposto NM.
- Rio de Janeiro: composições SEPM e SEPOL do caderno oficial, com os percentuais de GHP identificados; valores com habilitação máxima não tratados como garantia de ingresso.
- Piauí: anexos de abril/2026 para PM, BM, PC e PP; substituição da tabela anterior da PC.
- Rondônia e DF: correção das tabelas de soldo e identificação expressa de que esse componente não representa a remuneração completa.
- Roraima: retirada da estimativa que usava auxílio-fardamento como base de salário; substituição por subsídios oficiais de abril/2026.
- Sergipe: tabelas de abril/2026 de militares, Delegados e Oficiais Investigadores; vencimento básico da PP com o reajuste legal de 7%, sem incorporar auxílios condicionados.
- Mato Grosso do Sul: ampliação da PP para oito níveis por classe, na tabela oficial de 2026.
- Santa Catarina: regime militar especial e tabelas da PC e PP após as etapas da LC 872/2025. Reajuste de 21,5% sobre a base legal, sem capitalização das parcelas.
- Polícia Penal do RS: correção de valores de outras carreiras que haviam sido atribuídos aos cargos da instituição.

### Exemplos de correção

| Referência | Antes | Depois | Natureza |
|---|---:|---:|---|
| PMRR — Soldado de 1ª classe | R$ 1.013,05 | R$ 5.128,32 | Subsídio |
| PPRS — Policial Penal, 1ª classe | R$ 16.650,00 | R$ 6.305,76 | Subsídio de ingresso |
| PMPR — Soldado de 1ª classe, classe I | R$ 6.467,98 | R$ 6.856,06 | Subsídio, outubro/2026 |
| PPAP — 3ª classe, padrão I | R$ 5.911,14 | R$ 6.025,92 | Subsídio, outubro/2026 |
| PCPI — Delegado de 4ª classe | R$ 20.601,38 | R$ 21.755,06 | Subsídio, abril/2026 |

## Página e publicação

- Retirados o aumento fixo fictício de 5,8% e o fallback ilustrativo da PMESP.
- Data da revisão editorial separada da vigência ou data de referência do valor.
- Aviso visível de conferência ou de referência histórica em todas as instituições; cada linha identifica soldo, base, subsídio ou composição quando a natureza foi determinada.
- Valores mínimo, máximo e quantidade recalculados pela busca e pelo grupo selecionado.
- Notas de composição exibidas integralmente, sem truncar condições ou dividir valores monetários em fragmentos.
- JSON versionado priorizado sobre cópia do banco, com carregamento por URL, troca de esfera/instituição e nova tentativa após falha.
- Paginação compacta para tabelas extensas e retirada de dois geradores antigos que produziam erros de JavaScript nesta página.
- Pesquisas automáticas posteriores para cadastros auditados são gravadas em `data/remuneracao/candidatas/`, preservando a tabela publicada até conferência editorial.
- Relatório de qualidade diferencia preenchimento estrutural de conferência documental; não usa mais “forte” como sinônimo de salário validado.

## Tabelas conferidas

A data abaixo é a vigência ou referência indicada no documento. “Conferida” descreve as linhas publicadas e suas respectivas composições; não significa que todas as parcelas individuais ou todas as carreiras auxiliares da instituição estejam cobertas.

| Instituição | UF | Referências | Vigência / referência | Documento conferido |
|---|---|---:|---|---|
| PRF (prf) | BR | 18 | 2026-05-01 | [Fonte primária](https://www.planalto.gov.br/ccivil_03/_Ato2023-2026/2024/Lei/Anexo/L14875-24-anexos.pdf) |
| PCDF (pcdf) | DF | 20 | 2026-01-01 | [Fonte primária](https://planalto.gov.br/ccivil_03/_ato2023-2026/2026/lei/l15395.htm) |
| PMESP (pmesp) | SP | 19 | 2026-04-01 | [Fonte primária](https://www.sggd.sp.gov.br/sgp/normas_e_legislacao/policial) |
| CBPMESP (bmsp) | SP | 19 | 2026-04-01 | [Fonte primária](https://www.sggd.sp.gov.br/sgp/normas_e_legislacao/policial) |
| CBMMG (bmmg) | MG | 18 | 2026-01-01 | [Fonte primária](https://www.mg.gov.br/system/files/media/planejamento/documento_detalhado/2026/grupo_11_atualizacao-54-2026_3.pdf) |
| PPMG (ppmg) | MG | 30 | 2026-01-01 | [Fonte primária](https://www.mg.gov.br/system/files/media/planejamento/documento_detalhado/2026/grupo_11_atualizacao-54-2026_3.pdf) |
| PMMG (pmmg) | MG | 18 | 2026-01-01 | [Fonte primária](https://www.mg.gov.br/system/files/media/planejamento/documento_detalhado/2026/grupo_11_atualizacao-54-2026_3.pdf) |
| PCMG (pcmg) | MG | 86 | 2026-01-01 | [Fonte primária](https://www.mg.gov.br/system/files/media/planejamento/documento_detalhado/2026/grupo_11_atualizacao-54-2026_3.pdf) |
| CBMPR (bmpr) | PR | 60 | 2026-10-01 | [Fonte primária](https://www.legislacao.pr.gov.br/legislacao/exibirAto.do?action=abrirAnexo&codArquivoAnexado=73961) |
| PMPR (pmpr) | PR | 60 | 2026-10-01 | [Fonte primária](https://www.legislacao.pr.gov.br/legislacao/exibirAto.do?action=abrirAnexo&codArquivoAnexado=73961) |
| PMAM (pmam) | AM | 18 | 2025-12-01 | [Fonte primária](https://sapl.al.am.leg.br/media/sapl/public/normajuridica/2025/13902/7445.pdf) |
| PMERJ (pmerj) | RJ | 24 | 2026-01-01 | [Fonte primária](https://www.rj.gov.br/gesperj/sites/default/files/Caderno%20de%20Remunera%C3%A7%C3%A3o%20-%20janeiro%20-%202026.pdf) |
| PCERJ (pcerj) | RJ | 22 | 2026-01-01 | [Fonte primária](https://www.rj.gov.br/gesperj/sites/default/files/Caderno%20de%20Remunera%C3%A7%C3%A3o%20-%20janeiro%20-%202026.pdf) |
| PMSC (pmsc) | SC | 19 | 2026-04-01 | [Fonte primária](https://leis.alesc.sc.gov.br/ato-normativo/22843) |
| CBMSC (bmsc) | SC | 19 | 2026-04-01 | [Fonte primária](https://leis.alesc.sc.gov.br/ato-normativo/22843) |
| PCSC (pcsc) | SC | 12 | 2026-04-01 | [Fonte primária](https://leis.alesc.sc.gov.br/ato-normativo/22843) |
| PPMS (ppms) | MS | 64 | 2026-04-01 | [Fonte primária](https://www.agepen.ms.gov.br/wp-content/uploads/2025/12/Tabela-Subsidio-AGEPEN-2026.pdf) |
| PMAP (pmap) | AP | 154 | 2026-09-01 | [Fonte primária](https://diofe.portal.ap.gov.br/portal/edicoes/download/2464) |
| PCAP (pcap) | AP | 22 | 2026-09-01 | [Fonte primária](https://diofe.portal.ap.gov.br/portal/edicoes/download/9770) |
| CBMAP (bmap) | AP | 154 | 2026-09-01 | [Fonte primária](https://diofe.portal.ap.gov.br/portal/edicoes/download/2464) |
| PF (pf) | BR | 20 | 2026-05-01 | [Fonte primária](https://www.planalto.gov.br/ccivil_03/_Ato2023-2026/2024/Lei/Anexo/L14875-24-anexos.pdf) |
| PPAM (ppam) | AM | 20 | 2025-11-27 | [Fonte primária](https://diario.imprensaoficial.am.gov.br/portal/edicoes/download/17976) |
| PPAP (ppap) | AP | 18 | 2026-10-01 | [Fonte primária](https://diofe.portal.ap.gov.br/portal/edicoes/visualizar_pdf/2491/) |
| PMDF (pmdf) | DF | 16 | 2026-01-01 | [Fonte primária](https://planalto.gov.br/ccivil_03/_ato2023-2026/2026/lei/l15395.htm) |
| PMGO (pmgo) | GO | 18 | 2026-07-01 | [Fonte primária](https://legisla.casacivil.go.gov.br/pesquisa_legislacao/115998/lei-24402) |
| PMPA (pmpa) | PA | 16 | 2026-04-01 | [Fonte primária](https://sistemas.semas.pa.gov.br/legislacao/files/anexos/907897_anexo.pdf) |
| PCPA (pcpa) | PA | 20 | 2026-04-01 | [Fonte primária](https://sistemas.semas.pa.gov.br/legislacao/files/anexos/907897_anexo.pdf) |
| PPPA (pppa) | PA | 1 | 2026-04-01 | [Fonte primária](https://sistemas.semas.pa.gov.br/legislacao/files/anexos/907897_anexo.pdf) |
| PMPB (pmpb) | PB | 13 | 2026-01-01 | [Fonte primária](https://auniao.pb.gov.br/servicos/doe/2026/fevereiro/diario-oficial-20-02-2026-portal.pdf) |
| PCPB (pcpb) | PB | 300 | 2026-01-01 | [Fonte primária](https://auniao.pb.gov.br/servicos/doe/2026/fevereiro/diario-oficial-20-02-2026-portal.pdf) |
| PPPB (pppb) | PB | 35 | 2026-01-01 | [Fonte primária](https://auniao.pb.gov.br/servicos/doe/2026/fevereiro/diario-oficial-20-02-2026-portal.pdf) |
| PMPI (pmpi) | PI | 12 | 2026-04-01 | [Fonte primária](https://sapl.al.pi.leg.br/media/sapl/public/normajuridica/2026/6950/sei_0023241319_lei_8941.pdf) |
| PCPI (pcpi) | PI | 25 | 2026-04-01 | [Fonte primária](https://sapl.al.pi.leg.br/media/sapl/public/normajuridica/2026/6950/sei_0023241319_lei_8941.pdf) |
| PPPI (pppi) | PI | 5 | 2026-04-01 | [Fonte primária](https://sapl.al.pi.leg.br/media/sapl/public/normajuridica/2026/6950/sei_0023241319_lei_8941.pdf) |
| PMRO (pmro) | RO | 13 | 2026-01-01 | [Fonte primária](https://ditel.casacivil.ro.gov.br/COTEL/Livros/Files/L5695%20-%20COMPILADO.pdf) |
| PMRR (pmrr) | RR | 15 | 2026-04-01 | [Fonte primária](https://api.transparencia.rr.gov.br/storage/legislacoes/6df35931-6cf5-413e-95d9-cfb7cff60301.pdf) |
| PMSE (pmse) | SE | 15 | 2026-04-01 | [Fonte primária](https://api.legislacao.se.gov.br/uploads/atos/36429/LC-453-2026.pdf) |
| PCSE (pcse) | SE | 10 | 2026-04-01 | [Fonte primária](https://api.legislacao.se.gov.br/uploads/atos/36439/LO-9933-2026.pdf) |
| PPSE (ppse) | SE | 6 | 2026-04-01 | [Fonte primária](https://api.legislacao.se.gov.br/uploads/atos/36428/LC-452-2026.pdf) |
| BMAM (bmam) | AM | 18 | 2025-12-01 | [Fonte primária](https://sapl.al.am.leg.br/media/sapl/public/normajuridica/2025/13902/7445.pdf) |
| BMDF (bmdf) | DF | 16 | 2026-01-01 | [Fonte primária](https://planalto.gov.br/ccivil_03/_ato2023-2026/2026/lei/l15395.htm) |
| BMGO (bmgo) | GO | 18 | 2026-07-01 | [Fonte primária](https://legisla.casacivil.go.gov.br/pesquisa_legislacao/115998/lei-24402) |
| BMPA (bmpa) | PA | 16 | 2026-04-01 | [Fonte primária](https://sistemas.semas.pa.gov.br/legislacao/files/anexos/907897_anexo.pdf) |
| BMPB (bmpb) | PB | 13 | 2026-01-01 | [Fonte primária](https://auniao.pb.gov.br/servicos/doe/2026/fevereiro/diario-oficial-20-02-2026-portal.pdf) |
| BMPI (bmpi) | PI | 12 | 2026-04-01 | [Fonte primária](https://sapl.al.pi.leg.br/media/sapl/public/normajuridica/2026/6950/sei_0023241319_lei_8941.pdf) |
| BMRO (bmro) | RO | 13 | 2026-01-01 | [Fonte primária](https://ditel.casacivil.ro.gov.br/COTEL/Livros/Files/L5695%20-%20COMPILADO.pdf) |
| BMRR (bmrr) | RR | 15 | 2026-04-01 | [Fonte primária](https://api.transparencia.rr.gov.br/storage/legislacoes/6df35931-6cf5-413e-95d9-cfb7cff60301.pdf) |
| BMSE (bmse) | SE | 15 | 2026-04-01 | [Fonte primária](https://api.legislacao.se.gov.br/uploads/atos/36429/LC-453-2026.pdf) |
| PPRS (pprs) | RS | 3 | 2026-05-14 | [Fonte primária](https://concursos-publicacoes.s3.amazonaws.com/1092/publico/1092_Edital-02-2026_RetificaAAodoEditaldeAberturaREQUISITOePROGRAMAS_Rev2_6a063b5d7c0d1.pdf?idpub=507759) |
| PPSC (ppsc) | SC | 8 | 2026-04-01 | [Fonte primária](https://leis.alesc.sc.gov.br/ato-normativo/22843) |

## Vigência a confirmar

As tabelas abaixo conservam valores históricos e a data da pesquisa original. Não foram aplicados percentuais estimados ou reajustes de notícias sem composição e enquadramento confirmados. Cada uma tem aviso na página e `precisa_revisao_humana: true`. A checagem das fontes cadastradas não foi suficiente para validar a tabela integral em outubro/2026.

| Instituição | UF | Referências históricas | Pesquisa original |
|---|---|---:|---|
| PCSP (pcsp) | SP | 56 | 2026-05-18 |
| PPSP (ppsp) | SP | 20 | 2026-05-18 |
| PMAL (pmal) | AL | 27 | 2026-05-18 |
| PCAL (pcal) | AL | 3 | 2026-05-18 |
| PPAL (ppal) | AL | 28 | 2026-05-18 |
| PCPR (pcpr) | PR | 8 | 2026-05-18 |
| PCAM (pcam) | AM | 6 | 2026-05-18 |
| CBMERJ (bmrj) | RJ | 4 | 2026-05-18 |
| PMBA (pmba) | BA | 10 | 2026-05-18 |
| PCBA (pcba) | BA | 3 | 2026-05-18 |
| PMRS (pmrs) | RS | 3 | 2026-05-18 |
| PCRS (pcrs) | RS | 3 | 2026-05-18 |
| PMES (pmes) | ES | 8 | 2026-05-18 |
| CBMES (bmes) | ES | 4 | 2026-05-18 |
| PCES (pces) | ES | 4 | 2026-05-18 |
| PMMS (pmms) | MS | 12 | 2026-05-18 |
| CBMMS (bmms) | MS | 3 | 2026-05-18 |
| PCMS (pcms) | MS | 6 | 2026-05-18 |
| PMMT (pmmt) | MT | 18 | 2026-05-18 |
| CBMMT (bmmt) | MT | 3 | 2026-05-18 |
| PCMT (pcmt) | MT | 3 | 2026-05-18 |
| PPMT (ppmt) | MT | 8 | 2026-05-18 |
| PMAC (pmac) | AC | 17 | 2026-05-18 |
| PCAC (pcac) | AC | 35 | 2026-05-18 |
| PPAC (ppac) | AC | 1 | 2026-05-18 |
| PCCE (pcce) | CE | 5 | 2026-05-18 |
| PMCE (pmce) | CE | 3 | 2026-05-18 |
| PPCE (ppce) | CE | 2 | 2026-05-18 |
| PPDF (ppdf) | DF | 20 | 2026-05-18 |
| PCGO (pcgo) | GO | 28 | 2026-05-18 |
| PPGO (ppgo) | GO | 10 | 2026-05-18 |
| PMMA (pmma) | MA | 3 | 2026-05-18 |
| PCMA (pcma) | MA | 14 | 2026-05-18 |
| PPMA (ppma) | MA | 1 | 2026-05-18 |
| PMPE (pmpe) | PE | 12 | 2026-05-18 |
| PCPE (pcpe) | PE | 3 | 2026-05-18 |
| PPPE (pppe) | PE | 8 | 2026-05-18 |
| PMRN (pmrn) | RN | 13 | 2026-05-18 |
| PCRN (pcrn) | RN | 21 | 2026-05-18 |
| PPRN (pprn) | RN | 21 | 2026-05-18 |
| PCRO (pcro) | RO | 52 | 2026-05-18 |
| PPRO (ppro) | RO | 4 | 2026-05-18 |
| PCRR (pcrr) | RR | 9 | 2026-05-18 |
| PPRR (pprr) | RR | 12 | 2026-05-18 |
| PMTO (pmto) | TO | 17 | 2026-05-18 |
| PCTO (pcto) | TO | 10 | 2026-05-18 |
| PPTO (ppto) | TO | 5 | 2026-05-18 |
| BMAC (bmac) | AC | 19 | 2026-05-18 |
| BMAL (bmal) | AL | 31 | 2026-05-18 |
| BMBA (bmba) | BA | 13 | 2026-05-18 |
| BMCE (bmce) | CE | 17 | 2026-05-18 |
| BMMA (bmma) | MA | 14 | 2026-05-18 |
| BMPE (bmpe) | PE | 48 | 2026-05-18 |
| BMRN (bmrn) | RN | 12 | 2026-05-18 |
| BMRS (bmrs) | RS | 15 | 2026-05-18 |
| BMTO (bmto) | TO | 17 | 2026-05-18 |
| PPRJ (pprj) | RJ | 3 | 2026-05-18 |
| PPBA (ppba) | BA | 1 | 2026-05-18 |
| PPPR (pppr) | PR | 12 | 2026-05-18 |
| PPES (ppes) | ES | 1 | 2026-05-18 |

## Validação

- `npm run test:remuneracao`: cobertura dos 110 JSONs, somas, fontes, datas, valores críticos, prioridade local, tabela vazia, repetição após falha e proteção contra sobrescrita automática.
- Chrome: carregamento direto por `?inst=pf`, troca de instituição e esfera, busca, mínimos/máximos/contagens, ausência de resultados, aviso histórico e paginação da PCPB com 300 referências.
- Inspeção visual de capturas desktop e celular de 390 px, sem overflow do documento; console sem erros de execução.
- Nenhuma chave privada, escrita no banco de produção ou execução de pesquisa paga foi necessária.
