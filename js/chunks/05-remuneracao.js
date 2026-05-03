/* Chunk gerado a partir de js/script-original.js — Cálculos e renderização da remuneração tabelada.
   Mantém a ordem original para preservar compatibilidade. */

/* === REMUNERAÇÃO TABELADA =================================== */
/* ============================================================ */
/* BLOCO 15.8.1 — Tabela simples gratuita de remuneração bruta com fontes oficiais */
const REMUNERACAO_FONTES_OFICIAIS = {
  pmac: {
    nome: 'Portal do Estado do Acre — tabelas salariais PMAC/CBMAC e Edital FGV PMAC 2023',
    url: 'https://estado.ac.gov.br/tabelas-salariais/'
  },
  pcac: {
    nome: 'Portal do Estado do Acre — tabelas salariais PCAC (Lei 2.250/3.228, LC 303 e Lei 3.107)',
    url: 'https://estado.ac.gov.br/tabelas-salariais/'
  },
  ppac: {
    nome: 'SEAD/IAPEN-AC — Edital 001/2023 e Portal do Estado do Acre — tabela IAPEN',
    url: 'https://sead.ac.gov.br/gestao-governamental/editais-e-concursos/iapen-instituto-de-administracao-penitenciaria-do-acre/'
  },
  pmesp: {
    nome: 'SGGD/SP — Área Policial — Polícia Militar — mês de referência julho/2025',
    url: 'https://www.sggd.sp.gov.br/sgp/normas_e_legislacao/policial'
  },
  pcsp: {
    nome: 'SGGD/SP — Área Policial — Polícia Civil — mês de referência julho/2025',
    url: 'https://www.sggd.sp.gov.br/sgp/normas_e_legislacao/policial'
  },
  pmerj: {
    nome: 'GESPERJ/RJ — Caderno de Remuneração — janeiro/2026 — SEPM',
    url: 'https://www.rj.gov.br/gesperj/sites/default/files/Caderno%20de%20Remunera%C3%A7%C3%A3o%20-%20janeiro%20-%202026.pdf'
  },
  pcerj: {
    nome: 'GESPERJ/RJ — Caderno de Remuneração — janeiro/2026 — SEPOL',
    url: 'https://www.rj.gov.br/gesperj/sites/default/files/Caderno%20de%20Remunera%C3%A7%C3%A3o%20-%20janeiro%20-%202026.pdf'
  },
  pmmg: {
    nome: 'MG/SEPLAG — Grupo XI — Atividades da Defesa Social — Lei nº 25.804/2026',
    url: 'https://www.mg.gov.br/system/files/media/planejamento/documento_detalhado/2026/grupo_11_atualizacao-54-2026.pdf'
  },
  pcmg: {
    nome: 'MG/SEPLAG — Grupo XI — Atividades da Defesa Social — Lei nº 25.804/2026',
    url: 'https://www.mg.gov.br/system/files/media/planejamento/documento_detalhado/2026/grupo_11_atualizacao-54-2026.pdf'
  },
  pmba: {
    nome: 'Casa Civil/BA — Lei nº 14.890/2025 — soldo, GAP e auxílio fardamento',
    url: 'https://www.legislabahia.ba.gov.br/documentos/lei-no-14890-de-05-de-maio-de-2025'
  },
  pcba: {
    nome: 'Casa Civil/BA — Lei nº 14.891/2025 — vencimento, GAJ e GAPJ',
    url: 'https://www.legislabahia.ba.gov.br/documentos/lei-no-14891-de-05-de-maio-de-2025'
  },
  pmpr: {
    nome: 'Legislação/PR — Lei nº 22.187/2024 e Lei nº 22.208/2024',
    url: 'https://www.legislacao.pr.gov.br/legislacao/exibirAto.do?action=iniciarProcesso&codAto=344946&codItemAto=2177446'
  },
  pcpr: {
    nome: 'Legislação/PR — Lei Complementar nº 259/2023 e Lei nº 22.208/2024',
    url: 'https://www.legislacao.pr.gov.br/legislacao/pesquisarAto.do?action=exibir&codAto=300584&dt=27.1.2024.16.42.52.571&indice=1&totalRegistros=1'
  },
  pmrs: {
    nome: 'Governo do RS/RHE — Relação de Remuneração — competência 11/2025; editais BMRS 2025 para ingresso',
    url: 'https://tesouro-admin.fazenda.rs.gov.br/upload/arquivos/202512/12090345-cargos-venc-gov3032-112025.pdf'
  },
  pcrs: {
    nome: 'Governo do RS/RHE — Relação de Remuneração — competência 11/2025; editais PCRS 2025 para ingresso',
    url: 'https://tesouro-admin.fazenda.rs.gov.br/upload/arquivos/202512/12090345-cargos-venc-gov3032-112025.pdf'
  },
  pmsc: {
    nome: 'ALESC/SC — LC 765/2020, LC 776/2021, LC 872/2025 e LC 880/2025 — PMSC',
    url: 'https://leis.alesc.sc.gov.br/ato-normativo/20899'
  },
  pcsc: {
    nome: 'ALESC/SC — LC 765/2020, LC 776/2021 e LC 872/2025; PCSC editais 2025',
    url: 'https://pc.sc.gov.br/?p=35166'
  },
  pmes: {
    nome: 'PMES/ES — LC 420/2007, legislação PMES e tabela PM/CBM a partir de 01/12/2025',
    url: 'https://pm.es.gov.br/legislacao'
  },
  pces: {
    nome: 'PCES/ES — LC 1.093/2024, concurso OIP 2025, tabelas de Delegado e PCIES/Perícia Oficial',
    url: 'https://pc.es.gov.br/Media/PCES/Legisla%C3%A7%C3%A3o/LC_%20n_%201093_cria_OIP.pdf'
  },
  pmms: {
    nome: 'PMMS — Tabela salarial militar MS 05/2025, com reajuste de 5,06% aplicado',
    url: 'https://ronda.org.br/assembleia-aprova-reajuste-de-506-aos-servidores-de-ms-confira-a-tabela-salarial-da-pm-e-bm/'
  },
  pcms: {
    nome: 'PCMS — Edital APJ/2025; LC MS nº 343/2024; LC MS nº 290/2021 para Delegado',
    url: 'https://www.pc.ms.gov.br/governo-de-mato-grosso-do-sul-abre-concurso-publico-com-400-vagas-para-a-policia-civil/'
  },
  pcms_apj2025: {
    nome: 'PCMS — Edital APJ/2025 — 400 vagas, APJ 40h',
    url: 'https://www.pc.ms.gov.br/governo-de-mato-grosso-do-sul-abre-concurso-publico-com-400-vagas-para-a-policia-civil/'
  },
  pcms_lc343: {
    nome: 'PCMS — LC MS nº 343/2024 — Tabelas A, B e C com vigência 01/01/2025',
    url: 'https://dhg1h5j42swfq.cloudfront.net/2024/12/18174426/diariooficial-2.pdf'
  },
  pcms_lc290: {
    nome: 'PCMS — LC MS nº 290/2021 — Tabela D de Delegado',
    url: 'https://www.cgp.sejusp.ms.gov.br/wp-content/uploads/2022/12/DO10711_17_12_2021-pag-02-07-1.pdf'
  },
  ppms: {
    nome: 'AGEPEN/MS — Tabela Subsídio Polícia Penal 2026 — Lei MS nº 6.562/2026',
    url: 'https://www.agepen.ms.gov.br/wp-content/uploads/2025/12/Tabela-Subsidio-AGEPEN-2026.pdf'
  },
  pmmt: {
    nome: 'PMMT — Planilha de vencimentos LC MT nº 541/2014 e Lei MT nº 12.007/2023',
    url: 'https://site.cabosesoldadosmt.com.br/assets/pdf/tabelasalarial.pdf'
  },
  pcmt: {
    nome: 'PCMT/PJC-MT — Portal do Servidor/SEPLAG-MT — tabela salarial 40h 2025',
    url: 'https://dhg1h5j42swfq.cloudfront.net/2025/07/16180311/tabela-salarial-pc-mt.pdf'
  },
  ppmt: {
    nome: 'PPMT — Portal do Servidor/SEPLAG-MT — tabela 40h Policial Penal 2026',
    url: 'https://sites.diretasistemas.com.br/sites/1377/wp-content/uploads/2026/02/10103833/Portal-do-Servidor.pdf'
  },
  ppsp: {
    nome: 'PPSP — SAP/SP e ALESP — LC SP 1.416/2024, LC SP 1.425/2025 e concurso SAP 2025',
    url: 'https://www.sap.sp.gov.br/sec_adm_penitenciaria/Noticias/policia-penal-paulista-abre-inscricoes-para-concurso'
  },
  pprj: {
    nome: 'PPRJ — GESPERJ/RJ — Caderno de Remuneração janeiro/2026 — SEAP/Polícia Penal',
    url: 'https://www.rj.gov.br/gesperj/sites/default/files/Caderno%20de%20Remunera%C3%A7%C3%A3o%20-%20janeiro%20-%202026.pdf'
  },
  ppmg: {
    nome: 'PPMG — SEJUSP/MG — Edital nº 01/2025 e tabela da carreira de Policial Penal',
    url: 'https://depen.seguranca.mg.gov.br/images/2025/SEI_124235863_Edital_01_2025.pdf'
  },
  ppba: {
    nome: 'PPBA — SEAP/BA — Edital nº 02/2024, remuneração de Agente Penitenciário/Policial Penal',
    url: 'https://www.ba.gov.br/seap/'
  },
  pppr: {
    nome: 'PPPR — ALEP/PR — LC PR 245/2022 e LC PR 283/2025 — subsídio do QPPP',
    url: 'https://www.assembleia.pr.leg.br/storage/ccj/208dlCXRFOeEMxdtVDrKxlRxAY9MelrYJIyyrkPM.pdf'
  },
  pprs: {
    nome: 'PPRS — Tesouro/RS — Relações de Remuneração RHE e LC RS 16.449/2025',
    url: 'https://tesouro-admin.fazenda.rs.gov.br/upload/arquivos/202512/12090345-cargos-venc-gov3032-112025.pdf'
  },
  ppsc: {
    nome: 'PPSC — ALESC — LC SC 774/2021 e atualização remuneratória 2025/2026',
    url: 'https://leis.alesc.sc.gov.br/ato-normativo/21250'
  },
  ppes: {
    nome: 'PPES — SEGER/ES e PPES — Edital nº 001/2025, LC ES 1.059/2023 e tabela da carreira',
    url: 'https://seger.es.gov.br/concurso-ppes-edital-no-01-2025-policial-penal'
  },
  sc_auxilio: {
    nome: 'ALESC/SC — Lei 18.796/2023, redação da Lei 19.059/2024 — auxílio-alimentação',
    url: 'https://leis.alesc.sc.gov.br/ato-normativo/22251'
  },
  pr_auxilio: {
    nome: 'Legislação/PR — auxílio-alimentação de R$ 834,74',
    url: 'https://www.legislacao.pr.gov.br/legislacao/pesquisarAto.do?action=exibir&codAto=257965&indice=1'
  },
  mg_auxilio: {
    nome: 'ALMG — Decreto nº 49.006/2025 — ajuda de custo para alimentação',
    url: 'https://www.almg.gov.br/legislacao-mineira/texto/DEC/49006/2025/'
  }
};

function linhaRemuneracaoOficial(cargo, remuneracao, beneficios, criterio, benefDesc, fonteKey, badge = 'Fonte oficial') {
  const valor = Number(remuneracao || 0);
  return { cargo, remuneracao: valor, beneficios: 0, total: valor, criterio, benefDesc, fonteKey, badge, valorPendente: valor <= 0 };
}

function getAdicionaisRemuneracaoResumo(inst, linha = {}) {
  inst = normalizarInstituicao(inst);
  const cargo = String(linha.cargo || '').toLowerCase();

  if (isPoliciaPenal(inst)) {
    const info = getInfoPoliciaPenal(inst);
    const detalhesLinha = linha.benefDesc ? `${linha.benefDesc} ` : '';
    return `${detalhesLinha}${info.sigla}: ${info.atribuicoes} ${info.vantagens} Fonte principal: ${info.fonte}.`;
  }

  if (inst === 'pmms') {
    return linha.benefDesc || 'PMMS: adicionais, indenizações, auxílio, escala, fardamento ou verbas específicas dependem da legislação estadual, lotação, ordem de serviço, escala e contracheque; não foram somados automaticamente.';
  }
  if (inst === 'pcms') {
    return linha.benefDesc || 'PCMS: o edital APJ/2025 informou remuneração inicial de R$ 6.569,53 para 40h; abonos, adicionais, plantões e demais rubricas dependem da legislação estadual, lotação, escala e contracheque.';
  }
  if (inst === 'pmmt') {
    return linha.benefDesc || 'PMMT: adicionais, indenizações, etapas, auxílio, escala, fardamento e demais verbas específicas dependem da legislação estadual, lotação, ordem de serviço, escala e contracheque; não foram somados automaticamente.';
  }
  if (inst === 'pcmt') {
    return linha.benefDesc || 'PCMT: a tabela salarial cadastrada usa referências do Portal do Servidor/SEPLAG-MT para Escrivão e Delegado; abonos, adicionais, plantões e demais rubricas dependem da legislação estadual, lotação, escala e contracheque.';
  }

  if (inst === 'pmesp') {
    const representacao = /(cmt g|coronel|cel|ten cel)/i.test(linha.cargo || '')
      ? ' Gratificação de representação: pode existir para postos/funções específicas e já aparece incorporada quando constar na fonte oficial.'
      : '';
    return `RETP: em regra 100% sobre o padrão/vencimento-base, já considerado no bruto oficial desta tabela. Quinquênio: 5% por período aquisitivo; sexta-parte: 1/6 após requisito temporal. Auxílio-alimentação: ${fmt(AUX_ALIM_SP_DIA_PADRAO)} por dia efetivamente trabalhado. Insalubridade: possível conforme grau, laudo e enquadramento.${representacao}`;
  }

  if (inst === 'pcsp') {
    const carreiraDelegado = /delegado/i.test(linha.cargo || '');
    return `RETP: em regra 100% sobre o padrão/vencimento-base, já considerado no bruto oficial desta tabela. ${carreiraDelegado ? 'Delegados podem ter verbas próprias de representação quando previstas. ' : ''}Quinquênio: 5% por período aquisitivo; sexta-parte: 1/6 após requisito temporal. Auxílio-alimentação: ${fmt(AUX_ALIM_SP_DIA_PADRAO)} por dia efetivamente trabalhado. Insalubridade: possível conforme grau, laudo e enquadramento.`;
  }

  if (isPoliciaPenal(inst)) {
    remuneracao = padrao;
    beneficios = Number(cargo.beneficios || 0);
    criterio = cargo.criterio || 'Remuneração bruta mensal de referência da tabela oficial da Polícia Penal.';
    benefDesc = cargo.benefDesc || 'Auxílios, adicionais, plantões e parcelas indenizatórias dependem de lei, escala, lotação e situação funcional; não foram somados automaticamente.';
    fonteKey = cargo.fonteKey || inst;
    badge = cargo.badge || 'Fonte oficial';
  } else if (inst === 'pmms') {
    remuneracao = padrao;
    beneficios = 0;
    criterio = cargo.valorPendente || padrao <= 0
      ? 'Cargo cadastrado para a PMMS; valor vigente deve ser confirmado em tabela oficial, Diário Oficial/MS, edital ou contracheque.'
      : 'Referência de remuneração do último concurso/edital PMMS; confirmar tabela vigente antes de decisão financeira.';
    benefDesc = 'Auxílios, adicionais, fardamento, indenizações e verbas por escala/lotação dependem da legislação estadual, ato administrativo e contracheque; não foram somados automaticamente.';
    fonteKey = 'pmms';
    badge = cargo.valorPendente || padrao <= 0 ? 'Dados em breve' : 'Edital/triagem';
  } else if (inst === 'pcms') {
    remuneracao = padrao;
    beneficios = 0;
    criterio = cargo.valorPendente || padrao <= 0
      ? 'Cargo/carreira da PCMS cadastrado para seleção; remuneração deve ser confirmada em tabela legal, DOE/MS, edital ou contracheque.'
      : 'Remuneração inicial divulgada no Edital SAD/SEJUSP/PCMS/APJ/2025 para jornada de 40h.';
    benefDesc = 'Abonos, adicionais, plantões, indenizações e outras rubricas dependem da legislação estadual, lotação, escala e contracheque; não foram somados automaticamente.';
    fonteKey = 'pcms';
    badge = cargo.valorPendente || padrao <= 0 ? 'Dados em breve' : 'Edital APJ/2025';
  } else if (inst === 'pmerj') {
    let gret = '150%';
    let ghp = '110%';
    if (/cel|ten cel/i.test(linha.cargo || '')) { gret = '192,5%'; ghp = '160%'; }
    else if (/maj/i.test(linha.cargo || '')) { gret = '192,5%'; ghp = '110%'; }
    else if (/cabo|sd pm|soldado a\/b\/c/i.test(linha.cargo || '')) { ghp = '75%'; }
    else if (/aluno|soldado-aluno|sd aluno|esfo/i.test(linha.cargo || '')) { gret = '122,5%'; ghp = 'não aplicada na linha'; }
    return `GRET: ${gret} sobre o soldo; GHP: ${ghp}; GRAM: 62,5% sobre soldo + GRET + GHP. Essas parcelas já compõem a remuneração bruta exibida. Auxílio-alimentação PMERJ: ${fmt(AUX_ALIM_RJ_PM)} mensais, sem somar no bruto.`;
  }

  if (inst === 'pcerj') {
    if (/delegado/i.test(linha.cargo || '')) {
      return 'Verba de representação: 212% sobre o vencimento-base; GHP: 105%. Essas parcelas já compõem a remuneração bruta exibida. Auxílio-alimentação: R$ 704,00/mês; auxílio-transporte: R$ 100,00/mês, sem somar no bruto.';
    }
    const gatc = /perito|médico|medico|eng\.?|telecomunicações|telecomunicacoes/i.test(linha.cargo || '')
      ? ' GATC: 100% sobre o vencimento-base quando aplicável ao cargo.'
      : ' GATC: pode existir quando prevista para o cargo/função.';
    return `AAP: 230% sobre o vencimento-base; GHP: até 100%.${gatc} Essas parcelas já compõem a remuneração bruta exibida quando aplicáveis. Auxílio-alimentação: R$ 704,00/mês; auxílio-transporte: R$ 100,00/mês, sem somar no bruto.`;
  }

  if (inst === 'pmmg') {
    return `Ajuda de custo para alimentação: ${fmt(AUX_ALIM_MG_DIA_PADRAO)} por dia efetivamente trabalhado, quando atendidos os critérios. Outros adicionais, gratificações ou indenizações dependem de função, local, escala, ato específico ou situação individual e não foram somados ao bruto.`;
  }

  if (inst === 'pcmg') {
    return `Ajuda de custo para alimentação: ${fmt(AUX_ALIM_MG_DIA_PADRAO)} por dia efetivamente trabalhado, quando atendidos os critérios. Adicionais funcionais, gratificações ou indenizações específicas dependem de cargo, lotação, ato próprio ou situação individual e não foram somados ao bruto.`;
  }

  if (inst === 'pmba') {
    const ref = (linha.cargo || '').match(/GAP Ref\.\s*([IVX]+)/i)?.[1] || 'informada';
    return `GAP: gratificação por atividade policial na referência ${ref}, já considerada na remuneração bruta da linha. Auxílio-fardamento: R$ 256,18 mensais. Auxílio-alimentação: referência geral BA de ${fmt(AUX_ALIM_BA_40H)} para 40h ou ${fmt(AUX_ALIM_BA_30H)} para 30h, quando aplicável; não somado ao bruto.`;
  }

  if (inst === 'pcba') {
    const verba = /delegado/i.test(linha.cargo || '') ? 'GAJ' : 'GAPJ';
    const ref = (linha.cargo || '').match(/Ref\.\s*([IVX]+)/i)?.[1] || 'informada';
    return `${verba}: gratificação da carreira na referência ${ref}, já considerada na remuneração bruta da linha. CET, GIP, GQUAL ou outras vantagens podem existir conforme função, titulação, lotação ou ato específico. Auxílio-alimentação: referência geral BA de ${fmt(AUX_ALIM_BA_40H)} para 40h ou ${fmt(AUX_ALIM_BA_30H)} para 30h, quando aplicável; não somado ao bruto.`;
  }

  if (inst === 'pmpr') {
    return `Regime por subsídio: a remuneração bruta da linha corresponde ao subsídio do cargo/classe. Auxílio-alimentação oficial PR: ${fmt(AUX_ALIM_PR_PADRAO)}. Outras indenizações ou gratificações específicas dependem de previsão própria, escala, local ou situação individual e não foram somadas.`;
  }

  if (inst === 'pcpr') {
    return `Regime por subsídio: o subsídio pode compreender adicionais como insalubridade, periculosidade e risco de vida, conforme LC PR 259/2023 e aplicação vigente. Auxílio-alimentação oficial PR: ${fmt(AUX_ALIM_PR_PADRAO)}. Verbas específicas/eventuais não foram somadas.`;
  }

  if (inst === 'pmrs') return `RHE/RS: linhas inicial e final por posto/graduação, com competência 11/2025. Editais BM/RS 2025: referências de ingresso para Soldado, Aluno-Oficial e Capitão. Auxílio-alimentação BM/RS: ${fmt(AUX_ALIM_RS_BM)} informado em edital; não somado automaticamente ao bruto.`;
  if (inst === 'pcrs') return 'Carreira PCRS: classes de Delegado, Escrivão, Inspetor e Comissário, com valores de referência dos editais/tabelas 2025 e conferência na relação RHE 11/2025. Adicionais/indenizações: dependem de rubrica, lotação, legislação e situação funcional; não são somados automaticamente.';
  if (inst === 'pmsc') return `Regime por subsídio da PMSC: valores atualizados pela LC SC 872/2025 e Soldado unificado pela LC SC 880/2025. Auxílio-alimentação SC de referência: ${fmt(AUX_ALIM_SC_PADRAO)}, verba indenizatória não somada ao bruto. Diárias, indenizações e eventuais serviços extraordinários dependem de escala, local, função ou situação funcional.`;
  if (inst === 'pcsc') return `Regime por subsídio da PCSC: classes de Delegado, Agente, Escrivão e Psicólogo Policial conforme legislação estadual. Auxílio-alimentação SC: ${fmt(AUX_ALIM_SC_PADRAO)}, já citado nos editais de Agente/Escrivão 2025, mas não somado automaticamente ao bruto.`;
  if (inst === 'pmes') return `Regime por subsídio da PMES: tabela PM/CBM por posto/graduação e referências, com base na LC ES 420/2007 e valores de referência a partir de 01/12/2025. Auxílio-alimentação ES de referência: ${fmt(AUX_ALIM_ES_PADRAO)}; não somado automaticamente ao bruto.`;
  if (inst === 'pces') return `Regime por subsídio da PCES: Delegado e Oficial Investigador por categorias/referências. Carreiras periciais aparecem sinalizadas como PCIES/Perícia Oficial após segregação institucional. Auxílio-alimentação ES de referência: ${fmt(AUX_ALIM_ES_PADRAO)}; não somado automaticamente ao bruto.`;
  return linha.benefDesc || 'Adicionais e benefícios dependem de legislação, cargo, lotação, escala e situação individual; não foram somados ao bruto.';
}

const REMUNERACAO_SP_OFICIAL = {
  pmesp: [
    linhaRemuneracaoOficial('CMT G — Comandante Geral PM', 22587.35, 0, 'Salário inicial oficial: salário-base + RETP + gratificação de representação. Mês de referência: julho/2025.', 'Benefícios não somados; adicional de insalubridade é variável conforme classificação oficial.', 'pmesp'),
    linhaRemuneracaoOficial('CEL — Coronel PM', 18082.57, 0, 'Salário inicial oficial: salário-base + RETP + gratificação de representação. Mês de referência: julho/2025.', 'Benefícios não somados; adicional de insalubridade é variável conforme classificação oficial.', 'pmesp'),
    linhaRemuneracaoOficial('TEN CEL — Tenente Coronel PM', 16604.78, 0, 'Salário inicial oficial: salário-base + RETP + gratificação de representação. Mês de referência: julho/2025.', 'Benefícios não somados; adicional de insalubridade é variável conforme classificação oficial.', 'pmesp'),
    linhaRemuneracaoOficial('MAJ — Major PM', 15219.78, 0, 'Salário inicial oficial: salário-base + RETP. Mês de referência: julho/2025.', 'Benefícios não somados; adicional de insalubridade é variável conforme classificação oficial.', 'pmesp'),
    linhaRemuneracaoOficial('CAP — Capitão PM', 14384.64, 0, 'Salário inicial oficial: salário-base + RETP. Mês de referência: julho/2025.', 'Benefícios não somados; adicional de insalubridade é variável conforme classificação oficial.', 'pmesp'),
    linhaRemuneracaoOficial('1º TEN — 1º Tenente PM', 13332.24, 0, 'Salário inicial oficial: salário-base + RETP. Mês de referência: julho/2025.', 'Benefícios não somados; adicional de insalubridade é variável conforme classificação oficial.', 'pmesp'),
    linhaRemuneracaoOficial('2º TEN — 2º Tenente PM', 9046.74, 0, 'Salário inicial oficial: salário-base + RETP. Mês de referência: julho/2025.', 'Benefícios não somados; adicional de insalubridade é variável conforme classificação oficial.', 'pmesp'),
    linhaRemuneracaoOficial('ASP OF — Aspirante a Oficial PM', 8666.50, 0, 'Salário inicial oficial: salário-base + RETP. Mês de referência: julho/2025.', 'Benefícios não somados; adicional de insalubridade é variável conforme classificação oficial.', 'pmesp'),
    linhaRemuneracaoOficial('SUBTEN — Subtenente PM', 7363.88, 0, 'Salário inicial oficial: salário-base + RETP. Mês de referência: julho/2025.', 'Benefícios não somados; adicional de insalubridade é variável conforme classificação oficial.', 'pmesp'),
    linhaRemuneracaoOficial('1º SGT — 1º Sargento PM', 6377.26, 0, 'Salário inicial oficial: salário-base + RETP. Mês de referência: julho/2025.', 'Benefícios não somados; adicional de insalubridade é variável conforme classificação oficial.', 'pmesp'),
    linhaRemuneracaoOficial('2º SGT — 2º Sargento PM', 5743.24, 0, 'Salário inicial oficial: salário-base + RETP. Mês de referência: julho/2025.', 'Benefícios não somados; adicional de insalubridade é variável conforme classificação oficial.', 'pmesp'),
    linhaRemuneracaoOficial('3º SGT — 3º Sargento PM', 5040.34, 0, 'Salário inicial oficial: salário-base + RETP. Mês de referência: julho/2025.', 'Benefícios não somados; adicional de insalubridade é variável conforme classificação oficial.', 'pmesp'),
    linhaRemuneracaoOficial('CABO PM', 4884.18, 0, 'Salário inicial oficial: salário-base + RETP. Mês de referência: julho/2025.', 'Benefícios não somados; adicional de insalubridade é variável conforme classificação oficial.', 'pmesp'),
    linhaRemuneracaoOficial('SD 1ª CL — Soldado PM 1ª Classe', 4520.20, 0, 'Salário inicial oficial: salário-base + RETP. Mês de referência: julho/2025.', 'Benefícios não somados; adicional de insalubridade é variável conforme classificação oficial.', 'pmesp'),
    linhaRemuneracaoOficial('SD 2ª CL — Soldado PM 2ª Classe', 4269.86, 0, 'Salário inicial oficial: salário-base + RETP. Mês de referência: julho/2025.', 'Benefícios não somados; adicional de insalubridade é variável conforme classificação oficial.', 'pmesp'),
    linhaRemuneracaoOficial('AL OF 4º CFO', 5013.58, 0, 'Salário inicial oficial: salário-base + RETP. Mês de referência: julho/2025.', 'Benefícios não somados; adicional de insalubridade é variável conforme classificação oficial.', 'pmesp'),
    linhaRemuneracaoOficial('AL OF 3º CFO', 4840.38, 0, 'Salário inicial oficial: salário-base + RETP. Mês de referência: julho/2025.', 'Benefícios não somados; adicional de insalubridade é variável conforme classificação oficial.', 'pmesp'),
    linhaRemuneracaoOficial('AL OF 2º CFO', 4458.80, 0, 'Salário inicial oficial: salário-base + RETP. Mês de referência: julho/2025.', 'Benefícios não somados; adicional de insalubridade é variável conforme classificação oficial.', 'pmesp'),
    linhaRemuneracaoOficial('AL OF 1º CFO', 4249.98, 0, 'Salário inicial oficial: salário-base + RETP. Mês de referência: julho/2025.', 'Benefícios não somados; adicional de insalubridade é variável conforme classificação oficial.', 'pmesp')
  ],
  pcsp: [
    linhaRemuneracaoOficial('Delegado Geral de Polícia', 24832.04, 0, 'Salário inicial oficial: salário-base + RETP + gratificação de representação + ADPJ. Mês de referência: julho/2025.', 'Benefícios não somados; adicional de insalubridade é variável conforme classificação oficial.', 'pcsp'),
    linhaRemuneracaoOficial('Delegado de Polícia — Classe Especial', 18998.25, 0, 'Salário inicial oficial: salário-base + RETP + ADPJ. Mês de referência: julho/2025.', 'Benefícios não somados; adicional de insalubridade é variável conforme classificação oficial.', 'pcsp'),
    linhaRemuneracaoOficial('Delegado de Polícia — 1ª Classe', 17935.65, 0, 'Salário inicial oficial: salário-base + RETP + ADPJ. Mês de referência: julho/2025.', 'Benefícios não somados; adicional de insalubridade é variável conforme classificação oficial.', 'pcsp'),
    linhaRemuneracaoOficial('Delegado de Polícia — 2ª Classe', 16824.27, 0, 'Salário inicial oficial: salário-base + RETP + ADPJ. Mês de referência: julho/2025.', 'Benefícios não somados; adicional de insalubridade é variável conforme classificação oficial.', 'pcsp'),
    linhaRemuneracaoOficial('Delegado de Polícia — 3ª Classe', 15789.88, 0, 'Salário inicial oficial: salário-base + RETP + ADPJ. Mês de referência: julho/2025.', 'Benefícios não somados; adicional de insalubridade é variável conforme classificação oficial.', 'pcsp'),
    ...['Médico Legista', 'Perito Criminal'].flatMap(nome => [
      linhaRemuneracaoOficial(`${nome} — Classe Especial`, 16357.24, 0, 'Salário inicial oficial: salário-base + RETP. Mês de referência: julho/2025.', 'Benefícios não somados; adicional de insalubridade é variável conforme classificação oficial.', 'pcsp'),
      linhaRemuneracaoOficial(`${nome} — 1ª Classe`, 15445.98, 0, 'Salário inicial oficial: salário-base + RETP. Mês de referência: julho/2025.', 'Benefícios não somados; adicional de insalubridade é variável conforme classificação oficial.', 'pcsp'),
      linhaRemuneracaoOficial(`${nome} — 2ª Classe`, 14491.16, 0, 'Salário inicial oficial: salário-base + RETP. Mês de referência: julho/2025.', 'Benefícios não somados; adicional de insalubridade é variável conforme classificação oficial.', 'pcsp'),
      linhaRemuneracaoOficial(`${nome} — 3ª Classe`, 13602.12, 0, 'Salário inicial oficial: salário-base + RETP. Mês de referência: julho/2025.', 'Benefícios não somados; adicional de insalubridade é variável conforme classificação oficial.', 'pcsp')
    ]),
    ...['Escrivão de Polícia', 'Investigador de Polícia'].flatMap(nome => [
      linhaRemuneracaoOficial(`${nome} — Classe Especial`, 7804.58, 0, 'Salário inicial oficial: salário-base + RETP. Mês de referência: julho/2025.', 'Benefícios não somados; adicional de insalubridade é variável conforme classificação oficial.', 'pcsp'),
      linhaRemuneracaoOficial(`${nome} — 1ª Classe`, 7086.34, 0, 'Salário inicial oficial: salário-base + RETP. Mês de referência: julho/2025.', 'Benefícios não somados; adicional de insalubridade é variável conforme classificação oficial.', 'pcsp'),
      linhaRemuneracaoOficial(`${nome} — 2ª Classe`, 6613.20, 0, 'Salário inicial oficial: salário-base + RETP. Mês de referência: julho/2025.', 'Benefícios não somados; adicional de insalubridade é variável conforme classificação oficial.', 'pcsp'),
      linhaRemuneracaoOficial(`${nome} — 3ª Classe`, 6173.66, 0, 'Salário inicial oficial: salário-base + RETP. Mês de referência: julho/2025.', 'Benefícios não somados; adicional de insalubridade é variável conforme classificação oficial.', 'pcsp')
    ]),
    ...['Fotógrafo Técnico-Pericial', 'Agente de Telecomunicações Policial', 'Auxiliar de Necropsia', 'Desenhista Técnico-Pericial', 'Papiloscopista Policial'].flatMap(nome => [
      linhaRemuneracaoOficial(`${nome} — Classe Especial`, 6852.94, 0, 'Salário inicial oficial: salário-base + RETP. Mês de referência: julho/2025.', 'Benefícios não somados; adicional de insalubridade é variável conforme classificação oficial.', 'pcsp'),
      linhaRemuneracaoOficial(`${nome} — 1ª Classe`, 6505.76, 0, 'Salário inicial oficial: salário-base + RETP. Mês de referência: julho/2025.', 'Benefícios não somados; adicional de insalubridade é variável conforme classificação oficial.', 'pcsp'),
      linhaRemuneracaoOficial(`${nome} — 2ª Classe`, 6141.88, 0, 'Salário inicial oficial: salário-base + RETP. Mês de referência: julho/2025.', 'Benefícios não somados; adicional de insalubridade é variável conforme classificação oficial.', 'pcsp'),
      linhaRemuneracaoOficial(`${nome} — 3ª Classe`, 5803.06, 0, 'Salário inicial oficial: salário-base + RETP. Mês de referência: julho/2025.', 'Benefícios não somados; adicional de insalubridade é variável conforme classificação oficial.', 'pcsp')
    ]),
    ...['Atendente Necrotério Policial', 'Auxiliar Papiloscopista Policial'].flatMap(nome => [
      linhaRemuneracaoOficial(`${nome} — Classe Especial`, 5685.64, 0, 'Salário inicial oficial: salário-base + RETP. Mês de referência: julho/2025.', 'Benefícios não somados; adicional de insalubridade é variável conforme classificação oficial.', 'pcsp'),
      linhaRemuneracaoOficial(`${nome} — 1ª Classe`, 5371.36, 0, 'Salário inicial oficial: salário-base + RETP. Mês de referência: julho/2025.', 'Benefícios não somados; adicional de insalubridade é variável conforme classificação oficial.', 'pcsp'),
      linhaRemuneracaoOficial(`${nome} — 2ª Classe`, 5037.22, 0, 'Salário inicial oficial: salário-base + RETP. Mês de referência: julho/2025.', 'Benefícios não somados; adicional de insalubridade é variável conforme classificação oficial.', 'pcsp'),
      linhaRemuneracaoOficial(`${nome} — 3ª Classe`, 4725.36, 0, 'Salário inicial oficial: salário-base + RETP. Mês de referência: julho/2025.', 'Benefícios não somados; adicional de insalubridade é variável conforme classificação oficial.', 'pcsp')
    ])
  ]
};

const REMUNERACAO_MG_OFICIAL = {
  pmmg: [
    ['CORONEL PMMG', 21635.64], ['TENENTE CORONEL PMMG', 19515.61], ['MAJOR PMMG', 17394.91], ['CAPITÃO PMMG', 16101.58],
    ['1º TENENTE PMMG', 14324.95], ['2º TENENTE PMMG', 12170.60], ['ASPIRANTE A OFICIAL PMMG', 10932.55],
    ['CADETE — Último ano PMMG', 9743.51], ['CADETE — Demais anos PMMG', 7912.19], ['SUBTENENTE PMMG', 10932.55],
    ['1º SARGENTO PMMG', 9743.51], ['2º SARGENTO PMMG', 8505.46], ['3º SARGENTO PMMG', 7505.19],
    ['CABO PMMG', 6505.00], ['SOLDADO 1ª CLASSE PMMG', 5620.57], ['SOLDADO 2ª CLASSE (ALUNO) PMMG', 4808.66],
    ['ALUNO 1º SARGENTO PMMG', 9743.56], ['ALUNO SUBTENENTE PMMG', 10932.55]
  ].map(([cargo, valor]) => linhaRemuneracaoOficial(cargo, valor, 0, 'Subsídio/vencimento básico oficial da tabela Grupo XI — Defesa Social. Vigência: 01/01/2026.', 'Ajuda de custo para alimentação regulamentada pelo Decreto MG nº 49.006/2025; não somada por depender de regra, valor e dias efetivamente trabalhados.', 'pmmg')),
  pcmg: [
    ['Delegado de Polícia — Geral — A', 21635.64], ['Delegado de Polícia — Geral — B', 23799.18],
    ['Delegado de Polícia — Especial — A', 17402.29], ['Delegado de Polícia — Especial — B', 17529.88], ['Delegado de Polícia — Especial — C', 17665.93], ['Delegado de Polícia — Especial — D', 17803.03], ['Delegado de Polícia — Especial — E', 17941.20],
    ['Delegado de Polícia — Superior II — A', 16117.11], ['Delegado de Polícia — Superior II — B', 16407.51], ['Delegado de Polícia — Superior II — C', 16719.25], ['Delegado de Polícia — Superior II — D', 17036.93], ['Delegado de Polícia — Superior II — E', 17394.91],
    ['Delegado de Polícia — Superior I — A', 15737.60], ['Delegado de Polícia — Superior I — B', 15816.29], ['Delegado de Polícia — Superior I — C', 15895.36], ['Delegado de Polícia — Superior I — D', 15974.85], ['Delegado de Polícia — Superior I — E', 16101.58],
    ['Médico Legista — Especial — A', 15175.57], ['Médico Legista — Especial — B', 16693.11], ['Perito Criminal — Especial — A', 15175.57], ['Perito Criminal — Especial — B', 16693.11],
    ['Médico Legista — Superior III — A', 14947.06], ['Médico Legista — Superior III — B', 15003.86], ['Médico Legista — Superior III — C', 15060.88], ['Médico Legista — Superior III — D', 15118.10], ['Médico Legista — Superior III — E', 15175.56],
    ['Perito Criminal — Superior III — A', 14947.06], ['Perito Criminal — Superior III — B', 15003.85], ['Perito Criminal — Superior III — C', 15060.88], ['Perito Criminal — Superior III — D', 15118.10], ['Perito Criminal — Superior III — E', 15175.56],
    ['Médico Legista — Superior II — A', 14324.96], ['Médico Legista — Superior II — B', 14468.21], ['Médico Legista — Superior II — C', 14612.88], ['Médico Legista — Superior II — D', 14759.01], ['Médico Legista — Superior II — E', 14906.61],
    ['Perito Criminal — Superior II — A', 14324.96], ['Perito Criminal — Superior II — B', 14468.21], ['Perito Criminal — Superior II — C', 14612.88], ['Perito Criminal — Superior II — D', 14759.01], ['Perito Criminal — Superior II — E', 14906.61],
    ['Médico Legista — Superior I — A', 12170.61], ['Médico Legista — Superior I — B', 12535.72], ['Médico Legista — Superior I — C', 12911.81], ['Médico Legista — Superior I — D', 13299.15], ['Médico Legista — Superior I — E', 13698.13],
    ['Perito Criminal — Superior I — A', 12170.61], ['Perito Criminal — Superior I — B', 12535.72], ['Perito Criminal — Superior I — C', 12911.81], ['Perito Criminal — Superior I — D', 13299.15], ['Perito Criminal — Superior I — E', 13698.13],
    ['Escrivão de Polícia — Médio Especial — A', 9743.51], ['Escrivão de Polícia — Médio Especial — B', 10717.86],
    ['Investigador de Polícia — Médio/Superior Especial — A', 9743.51], ['Investigador de Polícia — Médio/Superior Especial — B', 10717.86],
    ['Escrivão de Polícia — Médio III — A', 7505.30], ['Escrivão de Polícia — Médio III — B', 7525.94], ['Escrivão de Polícia — Médio III — C', 7751.73], ['Escrivão de Polícia — Médio III — D', 7984.27], ['Escrivão de Polícia — Médio III — E', 8505.47],
    ['Investigador de Polícia — Médio/Superior III — A', 7505.30], ['Investigador de Polícia — Médio/Superior III — B', 7525.94], ['Investigador de Polícia — Médio/Superior III — C', 7751.73], ['Investigador de Polícia — Médio/Superior III — D', 7984.27], ['Investigador de Polícia — Médio/Superior III — E', 8505.47],
    ['Escrivão de Polícia — Médio II — A', 6504.99], ['Escrivão de Polícia — Médio II — B', 6667.59], ['Escrivão de Polícia — Médio II — C', 6834.29], ['Escrivão de Polícia — Médio II — D', 7005.15], ['Escrivão de Polícia — Médio II — E', 7505.19],
    ['Investigador de Polícia — Médio/Superior II — A', 6504.99], ['Investigador de Polícia — Médio/Superior II — B', 6667.59], ['Investigador de Polícia — Médio/Superior II — C', 6834.29], ['Investigador de Polícia — Médio/Superior II — D', 7005.15], ['Investigador de Polícia — Médio/Superior II — E', 7505.19],
    ['Escrivão de Polícia — Médio I — A', 5620.58], ['Escrivão de Polícia — Médio I — B', 5789.19], ['Escrivão de Polícia — Médio I — C', 5962.87], ['Escrivão de Polícia — Médio I — D', 6141.75], ['Escrivão de Polícia — Médio I — E', 6504.99],
    ['Investigador de Polícia — Médio/Superior I — A', 5620.58], ['Investigador de Polícia — Médio/Superior I — B', 5789.19], ['Investigador de Polícia — Médio/Superior I — C', 5962.86], ['Investigador de Polícia — Médio/Superior I — D', 6141.75], ['Investigador de Polícia — Médio/Superior I — E', 6504.99],
    ['Investigador de Polícia — Fundamental T — A', 5058.50], ['Investigador de Polícia — Fundamental T — B', 5353.43], ['Investigador de Polícia — Fundamental T — C', 5451.93], ['Investigador de Polícia — Fundamental T — D', 5481.34], ['Investigador de Polícia — Fundamental T — E', 5620.58]
  ].map(([cargo, valor]) => linhaRemuneracaoOficial(cargo, valor, 0, 'Vencimento básico oficial da tabela Grupo XI — Defesa Social. Vigência: 01/01/2026.', 'Ajuda de custo para alimentação regulamentada pelo Decreto MG nº 49.006/2025; não somada por depender de regra, valor e dias efetivamente trabalhados.', 'pcmg'))
};

function getTabelaCargosRemuneracao(inst) {
  const map = {
    pmesp: CARGOS_PM,    pcsp: CARGOS_PC,    ppsp: CARGOS_PPSP,
    pmac: CARGOS_PMAC,   pcac: CARGOS_PCAC,   ppac: CARGOS_PPAC,
    pmerj: CARGOS_PMERJ, pcerj: CARGOS_PCERJ, pprj: CARGOS_PPRJ,
    pmmg: CARGOS_PMMG,   pcmg: CARGOS_PCMG,   ppmg: CARGOS_PPMG,
    pmba: CARGOS_PMBA,   pcba: CARGOS_PCBA,   ppba: CARGOS_PPBA,
    pmpr: CARGOS_PMPR,   pcpr: CARGOS_PCPR,   pppr: CARGOS_PPPR,
    pmrs: CARGOS_PMRS,   pcrs: CARGOS_PCRS,   pprs: CARGOS_PPRS,
    pmsc: CARGOS_PMSC,   pcsc: CARGOS_PCSC,   ppsc: CARGOS_PPSC,
    pmes: CARGOS_PMES,   pces: CARGOS_PCES,   ppes: CARGOS_PPES,
    pmms: CARGOS_PMMS,   pcms: CARGOS_PCMS,   ppms: CARGOS_PPMS,
    pmmt: CARGOS_PMMT,   pcmt: CARGOS_PCMT,   ppmt: CARGOS_PPMT,};
  const instNorm = normalizarInstituicao(inst);
  return CARGOS_ESTRUTURA_GENERICAS[instNorm] || map[instNorm] || CARGOS_PM;
}

function calcularRemuneracaoTabelada(inst, cargo) {
  inst = normalizarInstituicao(inst);
  const padrao = Number(cargo.padrao || 0);
  const gratif = Number(cargo.gratif || 0);
  let remuneracao = padrao + gratif;
  let beneficios = 0;
  let criterio = 'Vencimento/subsídio bruto mensal do cargo.';
  let benefDesc = 'Benefício fixo geral não somado.';
  let fonteKey = inst;
  let badge = cargo.oficial ? 'Fonte oficial' : 'Carreira operacional';

  if (isPoliciaPenal(inst)) {
    remuneracao = padrao;
    beneficios = Number(cargo.beneficios || 0);
    criterio = cargo.criterio || 'Remuneração bruta mensal de referência da tabela oficial da Polícia Penal.';
    benefDesc = cargo.benefDesc || 'Auxílios, adicionais, plantões e parcelas indenizatórias dependem de lei, escala, lotação e situação funcional; não foram somados automaticamente.';
    fonteKey = cargo.fonteKey || inst;
    badge = cargo.badge || 'Fonte oficial';
  } else if (inst === 'pmms') {
    remuneracao = padrao;
    beneficios = 0;
    criterio = cargo.criterio || 'Tabela salarial militar de Mato Grosso do Sul por posto/graduação e nível; confirmar DOE/MS, edital ou contracheque para rubricas individuais.';
    benefDesc = cargo.benefDesc || 'Auxílios, adicionais, fardamento, indenizações e verbas por escala/lotação dependem da legislação estadual, ato administrativo e contracheque; não foram somados automaticamente.';
    fonteKey = cargo.fonteKey || 'pmms';
    badge = cargo.valorPendente || padrao <= 0 ? 'Dados em breve' : (cargo.badge || 'Tabela 05/2025');
  } else if (inst === 'pcms') {
    remuneracao = padrao;
    beneficios = 0;
    criterio = cargo.criterio || 'Tabela legal/edital da Polícia Civil de Mato Grosso do Sul; conferir DOE/MS, edital vigente e contracheque para a situação individual.';
    benefDesc = cargo.benefDesc || 'Abonos, adicionais, plantões, indenizações e outras rubricas dependem da legislação estadual, lotação, escala e contracheque; não foram somados automaticamente.';
    fonteKey = cargo.fonteKey || 'pcms';
    badge = cargo.valorPendente || padrao <= 0 ? 'Dados em breve' : (cargo.badge || 'Fonte oficial');
  } else if (inst === 'pmmt') {
    remuneracao = padrao;
    beneficios = 0;
    criterio = cargo.criterio || 'Referência de edital/portal oficial da PMMT; postos sem valor confirmado ficam como "Dados em breve".';
    benefDesc = cargo.benefDesc || 'Adicionais, indenizações, etapas, auxílio, escala, fardamento e demais rubricas dependem da legislação estadual, lotação, escala e contracheque; não foram somados automaticamente.';
    fonteKey = cargo.fonteKey || 'pmmt';
    badge = cargo.valorPendente || padrao <= 0 ? 'Dados em breve' : (cargo.badge || 'Edital/portal oficial');
  } else if (inst === 'pcmt') {
    remuneracao = padrao;
    beneficios = 0;
    criterio = cargo.criterio || 'Tabela salarial do Portal do Servidor/SEPLAG-MT usada para referências cadastradas da PCMT; cargos sem tabela específica confirmada ficam como "Dados em breve".';
    benefDesc = cargo.benefDesc || 'Adicionais, plantões, indenizações, verbas de escala e demais rubricas dependem da legislação estadual, lotação, escala e contracheque; não foram somados automaticamente.';
    fonteKey = cargo.fonteKey || 'pcmt';
    badge = cargo.valorPendente || padrao <= 0 ? 'Dados em breve' : (cargo.badge || 'Tabela 2025');
  } else if (inst === 'pmerj') {
    const gret = padrao * Number(cargo.gretPct || 0);
    const ghp = padrao * Number(cargo.ghpPct || 0);
    const gram = (padrao + gret + ghp) * 0.625;
    remuneracao = padrao + gret + ghp + gram;
    beneficios = 0;
    criterio = 'Soldo + GRET + GHP + GRAM, conforme tabela remuneratória SEPM/RJ.';
    benefDesc = 'Benefícios gerais não somados nesta linha; a tabela oficial da SEPM apresenta remuneração por parcelas.';
  } else if (inst === 'pcerj') {
    const aapOuRepresentacao = cargo.delegado
      ? padrao * Number(cargo.representacaoPct || 2.12)
      : padrao * Number(cargo.aapPct || 2.30);
    const ghp = padrao * Number(cargo.ghpPct || 0);
    const gatc = padrao * Number(cargo.gatcPct || 0);
    remuneracao = padrao + aapOuRepresentacao + ghp + gatc;
    beneficios = 804;
    criterio = cargo.delegado
      ? 'VB + verba de representação + GHP máxima, conforme tabela SEPOL/RJ.'
      : 'VB + AAP + GHP máxima + GATC quando aplicável, conforme tabela SEPOL/RJ.';
    benefDesc = 'Auxílio alimentação R$ 704,00/mês + auxílio transporte R$ 100,00.';
  } else if (inst === 'pmpr' || inst === 'pcpr') {
    remuneracao = padrao;
    beneficios = AUX_ALIM_PR_PADRAO;
    criterio = 'Subsídio bruto mensal por cargo/classe.';
    benefDesc = `Auxílio-alimentação oficial PR: ${fmt(AUX_ALIM_PR_PADRAO)}.`;
  } else if (inst === 'pmrs') {
    remuneracao = padrao;
    beneficios = AUX_ALIM_RS_BM;
    criterio = 'Remuneração bruta mensal de referência por posto/graduação conforme RHE/RS 11/2025 e editais oficiais BMRS 2025 para linhas de ingresso.';
    benefDesc = `Auxílio-alimentação BM/RS informado em edital: ${fmt(AUX_ALIM_RS_BM)}.`;
  } else if (inst === 'pcrs') {
    remuneracao = padrao;
    beneficios = 0;
    criterio = 'Subsídio/vencimento bruto mensal por cargo/classe conforme editais PCRS 2025, tabelas de carreira e relação RHE/RS 11/2025.';
    benefDesc = 'Adicionais, indenizações e auxílios dependem de rubrica, lotação e situação funcional; não somados automaticamente.';
  } else if (inst === 'pmsc') {
    remuneracao = padrao;
    beneficios = AUX_ALIM_SC_PADRAO;
    criterio = 'Subsídio bruto mensal por posto/graduação conforme LC SC 765/2020, LC SC 776/2021, LC SC 872/2025 e LC SC 880/2025.';
    benefDesc = `Auxílio-alimentação SC de referência: ${fmt(AUX_ALIM_SC_PADRAO)}; verba indenizatória não somada automaticamente ao bruto.`;
  } else if (inst === 'pcsc') {
    remuneracao = padrao;
    beneficios = AUX_ALIM_SC_PADRAO;
    criterio = 'Subsídio bruto mensal por cargo/classe conforme LC SC 765/2020, LC SC 776/2021, LC SC 872/2025 e estatuto da PCSC; Agente/Escrivão conferidos nos editais PCSC 2025.';
    benefDesc = `Auxílio-alimentação SC de referência: ${fmt(AUX_ALIM_SC_PADRAO)}; nos editais PCSC 2025 aparece compondo o total divulgado de Agente e Escrivão.`;
  } else if (inst === 'pmes') {
    remuneracao = padrao;
    beneficios = AUX_ALIM_ES_PADRAO;
    criterio = 'Subsídio bruto mensal por posto/graduação conforme regime de subsídio dos militares estaduais do ES, tabela PM/CBM a partir de 01/12/2025 e editais PMES para linhas de formação.';
    benefDesc = `Auxílio-alimentação ES de referência: ${fmt(AUX_ALIM_ES_PADRAO)}; não somado automaticamente ao bruto. Auxílio-fardamento e serviço extraordinário dependem de regra, escala e situação funcional.`;
  } else if (inst === 'pces') {
    remuneracao = padrao;
    beneficios = AUX_ALIM_ES_PADRAO;
    criterio = 'Subsídio bruto mensal por cargo/categoria/referência conforme tabelas de Delegado, OIP/PCES e carreiras periciais PCIES vinculadas à legislação estadual do ES.';
    benefDesc = `Auxílio-alimentação ES de referência: ${fmt(AUX_ALIM_ES_PADRAO)}; não somado automaticamente ao bruto. Para carreiras por subsídio, vantagens pessoais podem estar absorvidas conforme opção/regime legal.`;
  }

  return { remuneracao, beneficios, total: remuneracao + beneficios, criterio, benefDesc, fonteKey, badge };
}

function gerarRemuneracaoTabelada(inst) {
  inst = normalizarInstituicao(inst);
  if (REMUNERACAO_SP_OFICIAL[inst]) return REMUNERACAO_SP_OFICIAL[inst];
  if (REMUNERACAO_MG_OFICIAL[inst]) return REMUNERACAO_MG_OFICIAL[inst];

  if (inst === 'pmba') {
    const refs = ['I', 'II', 'III', 'IV', 'V'];
    return CARGOS_PMBA.flatMap(cargo => (cargo.gapBa || [0]).map((gap, idx) => {
      const remuneracao = Number(cargo.padrao || 0) + Number(gap || 0);
      return linhaRemuneracaoOficial(
        `${cargo.text} — GAP Ref. ${refs[idx] || (idx + 1)}`,
        remuneracao,
        256.18,
        `Soldo oficial + GAP Referência ${refs[idx] || (idx + 1)}. Valores de soldo com efeito em 01/05/2026 e GAP com efeito em 01/06/2026.`,
        'Auxílio fardamento oficial mensal: R$ 256,18. Auxílio-alimentação não somado por falta de valor geral oficial nesta fonte.',
        'pmba',
        cargo.oficial ? 'Fonte oficial' : 'Carreira operacional'
      );
    }));
  }

  if (inst === 'pcba') {
    const refs = ['I', 'II', 'III', 'IV', 'V'];
    return CARGOS_PCBA.flatMap(cargo => (cargo.gratBa || [0]).map((grat, idx) => {
      const remuneracao = Number(cargo.padrao || 0) + Number(grat || 0);
      return linhaRemuneracaoOficial(
        `${cargo.text} — ${cargo.gratBaLabel || 'GAJ/GAPJ'} Ref. ${refs[idx] || (idx + 1)}`,
        remuneracao,
        0,
        `${cargo.gratBaLabel || 'GAJ/GAPJ'} Referência ${refs[idx] || (idx + 1)}. Valores com efeito em 01/06/2026.`,
        'Benefício fixo geral não somado nesta fonte oficial.',
        'pcba',
        cargo.oficial ? 'Fonte oficial' : 'Carreira operacional'
      );
    }));
  }

  return getTabelaCargosRemuneracao(inst).map(cargo => {
    const calc = calcularRemuneracaoTabelada(inst, cargo);
    return linhaRemuneracaoOficial(cargo.text, calc.remuneracao, calc.beneficios, calc.criterio, calc.benefDesc, calc.fonteKey, calc.badge);
  });
}

function formatarAdicionaisRemuneracaoHtml(inst, linha = {}) {
  const resumo = String(getAdicionaisRemuneracaoResumo(inst, linha) || '').replace(/\s+/g, ' ').trim();

  if (!resumo) {
    return '<span class="adicionais-vazio">Sem adicionais ou auxílios específicos cadastrados para esta linha.</span>';
  }

  const partes = resumo
    .split(/;\s+|\.\s+/)
    .map(parte => parte.trim().replace(/[.;]$/, ''))
    .filter(Boolean);

  const itens = partes.length ? partes : [resumo];

  return `<ul class="adicionais-lista">${itens.map(texto => {
    const match = texto.match(/^([^:]{2,52}):\s*(.+)$/);
    if (match) {
      return `<li><strong>${escapeHtml(match[1])}:</strong> ${escapeHtml(match[2])}</li>`;
    }
    return `<li>${escapeHtml(texto)}</li>`;
  }).join('')}</ul>`;
}

function carregarRemuneracaoTabelada() {
  const tbody = document.getElementById('lista-remuneracao');
  if (!tbody) return;
  if (typeof instituicaoConsultaFoiSelecionada === 'function' && !instituicaoConsultaFoiSelecionada()) {
    if (typeof mostrarAvisoSelecaoInstituicao === 'function') mostrarAvisoSelecaoInstituicao('remuneracao');
    return;
  }
  const inst = normalizarInstituicao(currInst);

  const linhas = gerarRemuneracaoTabelada(inst);

  if (!linhas.length) {
    tbody.innerHTML = '<tr><td colspan="4">Não há dados cadastrados para esta instituição.</td></tr>';
    return;
  }

  const remuneracoes = linhas.map(l => l.remuneracao).filter(v => Number(v) > 0);
  const menor = remuneracoes.length ? Math.min(...remuneracoes) : 0;
  const maior = remuneracoes.length ? Math.max(...remuneracoes) : 0;

  const elTotal = document.getElementById('remu-total-cargos');
  const elMenor = document.getElementById('remu-menor-total');
  const elMaior = document.getElementById('remu-maior-total');
  if (elTotal) elTotal.textContent = String(linhas.length);
  if (elMenor) elMenor.textContent = menor ? fmt(menor) : 'Dados em breve';
  if (elMaior) elMaior.textContent = maior ? fmt(maior) : 'Dados em breve';

  tbody.innerHTML = linhas.map(l => {
    const fonte = REMUNERACAO_FONTES_OFICIAIS[l.fonteKey] || REMUNERACAO_FONTES_OFICIAIS[inst] || { nome: 'Fonte oficial da carreira', url: '#' };
    return `
      <tr>
        <td>
          <strong>${escapeHtml(l.cargo)}</strong>
          <br><span class="remuneracao-badge">${escapeHtml(l.badge || 'Fonte oficial')}</span>
        </td>
        <td class="valor">${l.valorPendente ? 'Dados em breve' : fmt(l.remuneracao)}</td>
        <td class="adicionais">${formatarAdicionaisRemuneracaoHtml(inst, l)}</td>
        <td>
          ${escapeHtml(l.criterio || '')}<br>
          <span class="remuneracao-fonte">${escapeHtml(fonte.nome)}</span><br>
          <a class="remuneracao-link" href="${escapeHtml(fonte.url)}" target="_blank" rel="noopener noreferrer">Abrir fonte oficial</a>
        </td>
      </tr>
    `;
  }).join('');
}


/* ============================================================ */
