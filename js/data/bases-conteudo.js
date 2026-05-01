/* Chunk gerado a partir de js/script-original.js — Bases de ações judiciais, associações, concursos e estado inicial.
   Mantém a ordem original para preservar compatibilidade. */

const ACOES_JUDICIAIS = {
  pmac: [
    { titulo: 'PMAC — sexta-parte e adicionais por tempo de serviço', status: 'Verificar ficha individual', ano: 'Tema permanente', tipo: 'individual', desc: 'Conferir se sexta-parte, adicional por tempo de serviço e reflexos foram implantados corretamente após o cumprimento dos requisitos legais e se a base usada no contracheque corresponde à legislação estadual.', base: 'LC AC 39/1993, LC AC 164/2006 e tabela remuneratória estadual; depende de histórico funcional e ficha financeira.', fonte: 'Portal do Estado do Acre — tabelas salariais', fonteUrl: 'https://estado.ac.gov.br/tabelas-salariais/', atualizado: 'Maio/2026' },
    { titulo: 'PMAC — serviço complementar, localização especial e chefia', status: 'Depende de escala/designação', ano: 'Tema de conferência', tipo: 'individual', desc: 'Pode haver discussão quando houver serviço complementar, lotação especial, designação de chefia ou ato funcional formal com pagamento ausente, incompleto ou calculado em base divergente.', base: 'Tabela PMAC/CBMAC e normas estaduais de vantagens; exige ordem de serviço, boletins, escalas e contracheques.', fonte: 'Portal do Estado do Acre — tabela LC 164', fonteUrl: 'https://estado.ac.gov.br/tabelas-salariais/', atualizado: 'Maio/2026' },
    { titulo: 'PMAC — reserva, reforma e abono de permanência', status: 'Análise previdenciária individual', ano: 'Tema permanente', tipo: 'individual', desc: 'Conferir regra aplicada, data de ingresso, idade, tempo militar, tempo de contribuição, paridade/integralidade quando cabível, reforma por incapacidade e eventual abono de permanência.', base: 'Constituição Federal, EC 103/2019, normas estaduais, Acreprevidência e ficha funcional.', fonte: 'Acreprevidência / Portal do Estado do Acre', fonteUrl: 'https://estado.ac.gov.br/', atualizado: 'Maio/2026' }
  ],
  pcac: [
    { titulo: 'PCAC — titulação e progressão por classe', status: 'Conferir cargo e classe', ano: 'Tema permanente', tipo: 'individual', desc: 'Verificar enquadramento na classe correta e pagamento de titulação, progressão e vantagens pessoais para Delegado, Perito, Médico-Legista, Agente, Escrivão, Papiloscopista e Auxiliar de Necropsia.', base: 'LC AC 303/2015, Lei AC 3.107/2015, Lei AC 3.228/2017 e tabelas salariais oficiais.', fonte: 'Portal do Estado do Acre — tabelas PCAC', fonteUrl: 'https://estado.ac.gov.br/tabelas-salariais/', atualizado: 'Maio/2026' },
    { titulo: 'PCAC — serviço complementar e vantagens absorvidas', status: 'Análise por contracheque', ano: 'Tema de conferência', tipo: 'individual', desc: 'As tabelas indicam serviço complementar e regras de absorção de vantagens. A ação só deve ser cogitada após comparar lei, ato funcional, classe, cargo, fichas financeiras e rubricas efetivamente pagas.', base: 'Lei AC 2.250/2009, Lei AC 3.228/2017, LC AC 303/2015 e normas remuneratórias da PCAC.', fonte: 'Portal do Estado do Acre — tabelas salariais', fonteUrl: 'https://estado.ac.gov.br/tabelas-salariais/', atualizado: 'Maio/2026' },
    { titulo: 'PCAC — aposentadoria policial, paridade e abono', status: 'Verificar regra individual', ano: 'Tema permanente', tipo: 'individual', desc: 'Policiais civis devem conferir regra de aposentadoria policial, transições, tempo no cargo, idade, ingresso anterior à EC 103/2019, abono de permanência e cálculo aplicado pelo regime próprio.', base: 'Lei Orgânica Nacional das Polícias Civis, EC 103/2019, legislação estadual do Acre e Acreprevidência.', fonte: 'Acreprevidência / PCAC / Portal do Estado do Acre', fonteUrl: 'https://estado.ac.gov.br/', atualizado: 'Maio/2026' }
  ],
  ppac: [
    { titulo: 'PPAC — enquadramento, posse e nomeações do concurso IAPEN 2023', status: 'Acompanhar atos oficiais', ano: '2023–2025', tipo: 'coletivo/individual', desc: 'Para aprovados e nomeados, conferir ordem de classificação, convocação, posse, lotação, curso de formação e eventuais efeitos financeiros conforme atos publicados pela SEAD/IAPEN.', base: 'Edital SEAD/IAPEN 001/2023, homologação de 2025 e atos de nomeação/posse.', fonte: 'SEAD/AC — editais IAPEN', fonteUrl: 'https://sead.ac.gov.br/gestao-governamental/editais-e-concursos/iapen-instituto-de-administracao-penitenciaria-do-acre/', atualizado: 'Maio/2026' },
    { titulo: 'PPAC — risco de vida, etapa alimentação, auxílio saúde e titulação', status: 'Verificar cargo/rubrica', ano: 'Tema permanente', tipo: 'individual', desc: 'A tabela do IAPEN e o edital indicam vantagens específicas, mas o cálculo depende do cargo, legislação vigente, lotação, jornada, contracheque e eventuais atos administrativos.', base: 'Lei AC 2.180/IAPEN, LC AC 392/2021, edital SEAD/IAPEN 2023 e contracheques.', fonte: 'Portal do Estado do Acre e SEAD/IAPEN', fonteUrl: 'https://estado.ac.gov.br/tabelas-salariais/', atualizado: 'Maio/2026' },
    { titulo: 'PPAC — aposentadoria policial e abono de permanência', status: 'Verificar regra individual', ano: 'Tema permanente', tipo: 'individual', desc: 'Conferir data de ingresso, tempo no cargo, tempo policial, idade, regra de transição, contribuição previdenciária e eventual abono de permanência.', base: 'EC 104/2019, EC 103/2019, normas estaduais, Acreprevidência e legislação da Polícia Penal/IAPEN.', fonte: 'Acreprevidência / SEAD/IAPEN', fonteUrl: 'https://estado.ac.gov.br/', atualizado: 'Maio/2026' }
  ],
  pmesp: [
    { titulo: "Quinquênio e sexta-parte — base de cálculo", status: "Verificar caso a caso", ano: "Tema recorrente", tipo: "individual", desc: "Discussão sobre a base de cálculo dos adicionais temporais. Exige análise do holerite, verba discutida, período cobrado e entendimento judicial atual.", base: "Constituição do Estado de SP, art. 129; conferir ficha financeira e decisões recentes da carreira.", fonte: "Constituição do Estado de São Paulo", fonteUrl: "https://www.al.sp.gov.br/repositorio/legislacao/constituicao/1989/constituicao-0-05.10.1989.html", atualizado: "Abril/2026" },
    { titulo: "ALE — incorporação e eventuais diferenças", status: "Possível cobrança individual", ano: "Incorporação de 2013", tipo: "individual", desc: "Conferência de eventuais diferenças decorrentes da absorção do Adicional de Local de Exercício nos vencimentos da PMESP. Não tratar como ganho automático.", base: "Lei Complementar Estadual SP nº 1.200/2013, sobre absorção do ALE nos vencimentos dos integrantes da Polícia Militar.", fonte: "LC SP 1.200/2013", fonteUrl: "https://www.al.sp.gov.br/repositorio/legislacao/lei.complementar/2013/lei.complementar-1200-06.06.2013.html", atualizado: "Abril/2026" },
    { titulo: "Insalubridade — termo inicial após atividade insalubre", status: "Atenção: não afirmar no curso de formação", ano: "IRDR Tema 36/TJSP", tipo: "individual", desc: "O ponto seguro é discutir termo inicial após início de atividade insalubre reconhecida por laudo ou documento equivalente. Não afirmar direito automático durante o curso de formação.", base: "TJSP — IRDR Tema 36: o curso de formação é tratado como período acadêmico/treinamento; conferir caso concreto e laudo.", fonte: "TJSP — IRDR Tema 36", fonteUrl: "https://www.tjsp.jus.br/NugepNac/Irdr/DetalheTema?codigoNoticia=62232&pagina=1", atualizado: "Abril/2026" },
    { titulo: "Licença-prêmio não gozada em pecúnia", status: "Tema com precedente forte", ano: "STF Tema 635", tipo: "individual", desc: "Servidor inativo pode discutir conversão em dinheiro de licença-prêmio, férias ou direitos remuneratórios não usufruídos, desde que não usados nem contados para outro fim.", base: "STF — Tema 635 da repercussão geral.", fonte: "STF Tema 635", fonteUrl: "https://portal.stf.jus.br/jurisprudenciaRepercussao/verAndamentoProcesso.asp?classeProcesso=ARE&incidente=4326858&numeroProcesso=721001&numeroTema=635", atualizado: "Abril/2026" },
    { titulo: "Adicional noturno e jornada extraordinária", status: "Em discussão", ano: "Conferir entendimento atual", tipo: "individual", desc: "Tema sensível para militares estaduais por envolver regime próprio, RETP, escalas especiais e DEJEM. Não tratar como direito líquido sem análise jurídica.", base: "Art. 7º, IX, da Constituição Federal; confrontar com regime militar estadual e jurisprudência do TJSP.", fonte: "Constituição Federal", fonteUrl: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm", atualizado: "Abril/2026" }
  ],
  pcsp: [
    { titulo: "Insalubridade — grau, laudo e base de cálculo", status: "Verificar caso a caso", ano: "Tema permanente", tipo: "individual", desc: "Ação possível quando houver divergência no grau, termo inicial, pagamento ou base usada. Depende de laudo, local de trabalho, função e holerites.", base: "Lei Complementar Estadual SP nº 432/1985 e Súmula Vinculante nº 4 do STF.", fonte: "LC SP 432/1985", fonteUrl: "https://www.al.sp.gov.br/repositorio/legislacao/lei.complementar/1985/compilacao-lei.complementar-432-18.12.1985.html", atualizado: "Abril/2026" },
    { titulo: "Paridade e integralidade na aposentadoria policial", status: "Tema com repercussão geral", ano: "STF Tema 1019", tipo: "individual", desc: "Policiais civis que ingressaram antes da EC 103/2019 podem ter análise de aposentadoria especial com integralidade e paridade, conforme requisitos e regra aplicada.", base: "STF — Tema 1019 / RE 1.162.672.", fonte: "STF Tema 1019", fonteUrl: "https://portal.stf.jus.br/jurisprudenciaRepercussao/verAndamentoProcesso.asp?classeProcesso=RE&incidente=5550712&numeroProcesso=1162672&numeroTema=1019", atualizado: "Abril/2026" },
    { titulo: "Abono de permanência retroativo", status: "Possível cobrança", ano: "Depende da data dos requisitos", tipo: "individual", desc: "Pode haver cobrança quando o servidor completou requisitos para aposentadoria voluntária e permaneceu em atividade, mas o abono não foi implantado ou foi pago tardiamente.", base: "Regras previdenciárias aplicáveis ao servidor policial; análise da ficha funcional e ato de concessão.", fonte: "Conferência previdenciária individual", fonteUrl: "", atualizado: "Abril/2026" },
    { titulo: "GAT / acúmulo de titularidade — Delegados", status: "Restrito ao caso concreto", ano: "Quando houver acúmulo comprovado", tipo: "individual", desc: "Discussão de diferenças quando Delegado respondeu formalmente por mais de uma unidade e entende que houve pagamento incompleto.", base: "LC SP nº 1.020/2007 e atos de designação do período cobrado.", fonte: "LC SP 1.020/2007", fonteUrl: "https://www.al.sp.gov.br/repositorio/legislacao/lei.complementar/2007/lei.complementar-1020-23.10.2007.html", atualizado: "Abril/2026" }
  ],
  pmerj: [
    { titulo: "Férias não gozadas na passagem para inatividade", status: "Tema com precedente forte", ano: "STF Tema 635", tipo: "individual", desc: "Militar que passou para a inatividade sem usufruir férias ou outros direitos remuneratórios pode discutir conversão em pecúnia, desde que não tenha havido uso ou contagem para outro fim.", base: "STF — Tema 635 da repercussão geral.", fonte: "STF Tema 635", fonteUrl: "https://portal.stf.jus.br/jurisprudenciaRepercussao/verAndamentoProcesso.asp?classeProcesso=ARE&incidente=4326858&numeroProcesso=721001&numeroTema=635", atualizado: "Abril/2026" },
    { titulo: "Promoção retroativa / preterição", status: "Verificar caso a caso", ano: "Depende do histórico funcional", tipo: "individual", desc: "Pode envolver atraso de promoção, erro administrativo, preterição ou reflexos financeiros. Depende da legislação de promoções, quadro de acesso e publicações.", base: "Estatuto dos Policiais Militares do RJ, normas de promoção, boletins e publicações oficiais.", fonte: "Legislação e boletins internos da PMERJ", fonteUrl: "", atualizado: "Abril/2026" },
    { titulo: "Auxílio-moradia / diferenças pretéritas", status: "Cautela: tema histórico", ano: "Conferir período e prescrição", tipo: "individual", desc: "A discussão pode existir para períodos específicos, desde que o policial comprove direito, pagamento a menor e ausência de prescrição.", base: "Normas estaduais do RJ sobre auxílio-moradia e demonstrativos de pagamento do período cobrado.", fonte: "Legislação estadual do RJ e holerites", fonteUrl: "", atualizado: "Abril/2026" },
    { titulo: "Triênios e reflexos remuneratórios", status: "Em discussão", ano: "Conferir entendimento atual", tipo: "individual", desc: "Tema deve ser apresentado com prudência, pois a base de cálculo depende do regime remuneratório, da natureza das verbas e da jurisprudência atual.", base: "Regime jurídico militar estadual e ficha financeira individual; não usar apenas habitualidade como fundamento isolado.", fonte: "Legislação remuneratória estadual e jurisprudência do TJRJ", fonteUrl: "", atualizado: "Abril/2026" }
  ],
  pcerj: [
    { titulo: "Lei 11.003/2025 — conferência de vantagens implantadas", status: "Atualização legislativa relevante", ano: "Vigente desde 2025", tipo: "individual", desc: "A reestruturação da PCERJ reorganizou cargos e listou vantagens. O ponto prático é conferir se a implantação no holerite corresponde à lei e ao cargo.", base: "Lei Estadual RJ nº 11.003/2025.", fonte: "Alerj — Lei 11.003/2025", fonteUrl: "https://www.alerj.rj.gov.br/Visualizar/Noticia/80215", atualizado: "Abril/2026" },
    { titulo: "Adicional de atividade perigosa — 230%", status: "Conferência de implantação", ano: "Lei 11.003/2025", tipo: "individual", desc: "A lei prevê adicional de atividade perigosa de 230% sobre o vencimento-base para policiais civis, salvo Delegados. Ação só faz sentido se houver não implantação, implantação parcial, base incorreta ou retroativo discutível.", base: "Lei Estadual RJ nº 11.003/2025.", fonte: "Alerj — reestruturação da PCERJ", fonteUrl: "https://www.alerj.rj.gov.br/Visualizar/Noticia/80215", atualizado: "Abril/2026" },
    { titulo: "Verba de representação — Delegados", status: "Conferência de implantação", ano: "Lei 11.003/2025", tipo: "individual", desc: "Para Delegados, a lei prevê verba de representação própria. Conferir percentual, vencimento-base usado, implantação e eventuais diferenças.", base: "Lei Estadual RJ nº 11.003/2025 — verba de representação de Delegado.", fonte: "Alerj — reestruturação da PCERJ", fonteUrl: "https://www.alerj.rj.gov.br/Visualizar/Noticia/80215", atualizado: "Abril/2026" },
    { titulo: "Paridade e integralidade na aposentadoria policial", status: "Tema com repercussão geral", ano: "STF Tema 1019", tipo: "individual", desc: "Policiais civis inativos ou próximos da aposentadoria devem conferir regra usada, data de ingresso e direito a paridade/integralidade.", base: "STF — Tema 1019 / RE 1.162.672.", fonte: "STF Tema 1019", fonteUrl: "https://portal.stf.jus.br/jurisprudenciaRepercussao/verAndamentoProcesso.asp?classeProcesso=RE&incidente=5550712&numeroProcesso=1162672&numeroTema=1019", atualizado: "Abril/2026" }
  ],
  pmmg: [
    { titulo: "URV — diferença de 11,98% e compensações", status: "Tema histórico com cautela", ano: "STF Tema 5", tipo: "individual", desc: "A discussão da URV envolve eventual diferença decorrente da conversão monetária de 1994, mas deve considerar reestruturações posteriores, compensações, prescrição e situação funcional.", base: "STF — Tema 5 / RE 561.836.", fonte: "STF Tema 5", fonteUrl: "https://portal.stf.jus.br/jurisprudenciaRepercussao/verAndamentoProcesso.asp?classeProcesso=RE&incidente=2554015&numeroProcesso=561836&numeroTema=5", atualizado: "Abril/2026" },
    { titulo: "Férias-prêmio não gozadas em pecúnia", status: "Tema com precedente forte", ano: "STF Tema 635", tipo: "individual", desc: "Na passagem para a reserva/inatividade, pode haver discussão sobre conversão em dinheiro de férias-prêmio não usufruídas nem aproveitadas para outro fim.", base: "STF — Tema 635 da repercussão geral.", fonte: "STF Tema 635", fonteUrl: "https://portal.stf.jus.br/jurisprudenciaRepercussao/verAndamentoProcesso.asp?classeProcesso=ARE&incidente=4326858&numeroProcesso=721001&numeroTema=635", atualizado: "Abril/2026" },
    { titulo: "Promoção retroativa / ressarcimento de preterição", status: "Verificar caso a caso", ano: "Depende do processo funcional", tipo: "individual", desc: "Possível quando houver atraso, erro administrativo, preterição indevida ou reflexos de absolvição/revisão funcional. Precisa de boletins, quadro de acesso e atos de promoção.", base: "Normas de promoção da PMMG, atos administrativos e jurisprudência do TJMG.", fonte: "Legislação PMMG, boletins e decisões do TJMG", fonteUrl: "", atualizado: "Abril/2026" },
    { titulo: "IPSM / descontos previdenciários e assistenciais", status: "Em discussão conforme caso", ano: "Conferir holerite", tipo: "coletiva", desc: "Revisões de descontos exigem separar contribuição previdenciária, assistência à saúde, dependentes e regras específicas dos militares mineiros. Não confundir IPSM com IPSEMG dos servidores civis.", base: "Conferir legislação do IPSM, contracheques e orientação da entidade representativa.", fonte: "IPSM/MG", fonteUrl: "https://www.ipsm.mg.gov.br/", atualizado: "Abril/2026" }
  ],
  pcmg: [
    { titulo: "IPSEMG Saúde — contribuição sem adesão", status: "Tema com precedente relevante", ano: "STF ADI 3.106/MG", tipo: "individual", desc: "A tese forte é contra cobrança compulsória para custeio de assistência à saúde quando não houver adesão válida. Devolução depende do período, modulação, prova de não adesão e entendimento aplicável.", base: "STF — ADI 3.106/MG; atenção à modulação e à comprovação individual.", fonte: "STF — ADI 3.106/MG", fonteUrl: "https://noticias.stf.jus.br/postsnoticias/julgada-parcialmente-procedente-adi-que-questionava-lei-mineira-sobre-regime-de-previdencia/", atualizado: "Abril/2026" },
    { titulo: "ADE / vantagens na aposentadoria", status: "Verificar caso a caso", ano: "Depende da regra aplicada", tipo: "individual", desc: "A inclusão de ADE ou vantagens semelhantes em proventos depende da natureza da verba, regra de aposentadoria, histórico de recebimento e legislação mineira.", base: "Plano de carreira, legislação estadual da PCMG e ato de aposentadoria.", fonte: "Legislação PCMG e análise previdenciária individual", fonteUrl: "", atualizado: "Abril/2026" },
    { titulo: "Promoção/progressão atrasada", status: "Possível cobrança", ano: "Caso a caso", tipo: "individual", desc: "Pode haver cobrança de diferenças quando a progressão ou promoção foi concedida com atraso ou implantada em data incorreta. Depende de publicações e requisitos cumpridos.", base: "Lei de carreira da PCMG, atos de promoção/progressão e jurisprudência do TJMG.", fonte: "Legislação PCMG, atos funcionais e TJMG", fonteUrl: "", atualizado: "Abril/2026" },
    { titulo: "Paridade, integralidade e regra de aposentadoria", status: "Análise previdenciária individual", ano: "Conferir ingresso e regra utilizada", tipo: "individual", desc: "Para policiais civis, a análise depende da data de ingresso, regra de aposentadoria, transições e entendimento aplicado ao cargo.", base: "STF — Tema 1019 como referência para atividade de risco, além da legislação estadual aplicável.", fonte: "STF Tema 1019", fonteUrl: "https://portal.stf.jus.br/jurisprudenciaRepercussao/verAndamentoProcesso.asp?classeProcesso=RE&incidente=5550712&numeroProcesso=1162672&numeroTema=1019", atualizado: "Abril/2026" }
  ],
  pmba: [
    { titulo: "GAP / gratificações — implantação e retroativos", status: "Verificar caso a caso", ano: "Depende do período e da publicação", tipo: "individual", desc: "Discussão possível quando houver atraso de implantação, erro de nível, base incorreta ou diferenças em gratificações da carreira. Exige legislação, boletins, holerites e prescrição.", base: "Legislação remuneratória da Bahia e atos funcionais do período cobrado.", fonte: "Legislação estadual da Bahia e Diário Oficial", fonteUrl: "", atualizado: "Abril/2026" },
    { titulo: "URV — diferença de 11,98% e compensações", status: "Tema histórico com cautela", ano: "STF Tema 5", tipo: "individual", desc: "A tese da URV não deve ser apresentada como ganho automático. É necessário verificar período, carreira, reajustes posteriores, compensações, prescrição e decisões aplicáveis à Bahia.", base: "STF — Tema 5 / RE 561.836.", fonte: "STF Tema 5", fonteUrl: "https://portal.stf.jus.br/jurisprudenciaRepercussao/verAndamentoProcesso.asp?classeProcesso=RE&incidente=2554015&numeroProcesso=561836&numeroTema=5", atualizado: "Abril/2026" },
    { titulo: "Adicional noturno", status: "Em discussão", ano: "Conferir jurisprudência atual", tipo: "individual", desc: "A cobrança depende do regime jurídico militar estadual, escala, previsão legal e entendimento do TJBA. Melhor apresentar como tese em avaliação.", base: "Art. 7º, IX, da Constituição Federal; legislação militar estadual e jurisprudência do TJBA.", fonte: "Constituição Federal", fonteUrl: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm", atualizado: "Abril/2026" },
    { titulo: "CET — Condição Especial de Trabalho", status: "Conferência individual", ano: "Depende de função/local", tipo: "individual", desc: "A CET pode variar conforme função, lotação e norma aplicável. Ação judicial deve focar erro de percentual, base de cálculo ou atraso comprovado.", base: "Legislação remuneratória da Bahia, ato de designação, lotação e holerites.", fonte: "Legislação estadual da Bahia e ficha funcional", fonteUrl: "", atualizado: "Abril/2026" }
  ],
  pcba: [
    { titulo: "Paridade e integralidade na aposentadoria policial", status: "Tema com repercussão geral", ano: "STF Tema 1019", tipo: "individual", desc: "Policiais civis devem conferir data de ingresso, regra de aposentadoria, ato concessório e reajustes aplicados. O tema exige análise previdenciária individual.", base: "STF — Tema 1019 / RE 1.162.672, além da legislação previdenciária estadual.", fonte: "STF Tema 1019", fonteUrl: "https://portal.stf.jus.br/jurisprudenciaRepercussao/verAndamentoProcesso.asp?classeProcesso=RE&incidente=5550712&numeroProcesso=1162672&numeroTema=1019", atualizado: "Abril/2026" },
    { titulo: "Promoções/progressões atrasadas", status: "Possível cobrança", ano: "Caso a caso", tipo: "individual", desc: "Discussão possível quando houver atraso administrativo, implantação tardia ou erro em progressão/promoção. Necessário comprovar requisitos, publicação, data correta e diferenças financeiras.", base: "Lei de carreira da PCBA, atos de promoção/progressão e publicações oficiais.", fonte: "Legislação PCBA e Diário Oficial da Bahia", fonteUrl: "", atualizado: "Abril/2026" },
    { titulo: "Insalubridade — laudo, lotação e pagamento", status: "Verificar caso a caso", ano: "Depende da função e local", tipo: "individual", desc: "Possível quando houver exposição insalubre reconhecida, laudo, previsão legal e pagamento ausente ou incorreto. Não tratar como verba universal.", base: "Legislação estadual, laudos, local de trabalho e holerites do período.", fonte: "Legislação estadual da Bahia e prova técnica", fonteUrl: "", atualizado: "Abril/2026" },
    { titulo: "GIP / gratificações e diferenças remuneratórias", status: "Conferência individual", ano: "Depende do cargo e período", tipo: "individual", desc: "A cobrança de diferenças de gratificações deve partir de erro concreto: percentual, base, atraso, não implantação ou enquadramento incorreto.", base: "Legislação remuneratória da Bahia, ato funcional e demonstrativos de pagamento.", fonte: "Legislação estadual da Bahia e ficha financeira", fonteUrl: "", atualizado: "Abril/2026" }
  ],
  pmpr: [
    { titulo: "Subsídio PMPR e enquadramento por classe", status: "Conferência individual", ano: "Lei 22.187/2024", tipo: "individual", desc: "A carreira militar estadual do Paraná foi reestruturada por subsídio e classes. Diferenças podem depender de enquadramento, promoção, data de implantação, ficha funcional e contracheque.", base: "Lei Estadual PR 22.187/2024; conferir Anexo I, classe, posto/graduação e histórico funcional.", fonte: "Lei PR 22.187/2024", fonteUrl: "https://www.administracao.pr.gov.br/sites/default/arquivos_restritos/files/documento/2024-12/lei_n.deg_22.187_2024_tabelas_vigentes_pmpr_e_cbmpr_2024.pdf", atualizado: "Abril/2026" },
    { titulo: "FASPM — desconto facultativo e dependentes", status: "Verificar adesão", ano: "Lei 17.169/2012", tipo: "individual", desc: "A contribuição ao Fundo de Assistência à Saúde dos Militares Estaduais é facultativa e pode variar conforme titular e dependentes. Conferir autorização, percentual e limite aplicado.", base: "0,5% do subsídio + 0,2% por dependente, limitado a 2%, quando houver adesão formal.", fonte: "Lei PR 17.169/2012", fonteUrl: "https://www.legislacao.pr.gov.br/legislacao/exibirAto.do?action=iniciarProcesso&codAto=68411&codItemAto=507044", atualizado: "Abril/2026" },
    { titulo: "Auxílio-alimentação PMPR", status: "Conferência de pagamento", ano: "Lei 22.208/2024", tipo: "individual", desc: "Verificar se o auxílio-alimentação mensal está sendo pago conforme valor vigente para servidores ativos e se há proporcionalidade por afastamento, ingresso ou desligamento.", base: "Auxílio-alimentação de R$ 834,74 informado pela PMPR para concursos e remuneração de ingresso.", fonte: "PMPR — Formas de Ingresso", fonteUrl: "https://www.pmpr.pr.gov.br/Pagina/Formas-de-Ingresso", atualizado: "Abril/2026" },
    { titulo: "Escala extra / diária especial", status: "Somente com previsão e escala", ano: "Tema administrativo", tipo: "individual", desc: "Possíveis valores de escala extraordinária, diária ou indenização operacional dependem de autorização, programa, publicação, cumprimento da escala e rubrica em contracheque.", base: "Conferir ato estadual, escala publicada, unidade e demonstrativo de pagamento.", fonte: "Normas internas e Diário Oficial do Paraná", fonteUrl: "", atualizado: "Abril/2026" }
  ],
  pcpr: [
    { titulo: "Subsídio PCPR e parcelas indenizatórias", status: "Conferência individual", ano: "LC 259/2023", tipo: "individual", desc: "A Lei Complementar 259/2023 estruturou as carreiras da Polícia Civil do Paraná por subsídio. Verbas fora do subsídio exigem previsão legal específica.", base: "LC PR 259/2023: subsídio em parcela única, ressalvadas vantagens expressamente previstas na própria lei.", fonte: "LC PR 259/2023", fonteUrl: "https://www.legislacao.pr.gov.br/legislacao/pesquisarAto.do?action=exibir&codAto=300584&dt=27.1.2024.16.42.52.571&indice=1&totalRegistros=1", atualizado: "Abril/2026" },
    { titulo: "Insalubridade, periculosidade e risco de vida no subsídio", status: "Atenção jurídica", ano: "LC 259/2023", tipo: "individual", desc: "A legislação da PCPR indica que o subsídio compreende adicionais de insalubridade, periculosidade e risco de vida, sem prejuízo de discussão judicial específica quando houver tese ou decisão aplicável.", base: "LC PR 259/2023, art. 39, §3º, com observação de ADI indicada no texto legal.", fonte: "LC PR 259/2023", fonteUrl: "https://www.legislacao.pr.gov.br/legislacao/pesquisarAto.do?action=exibir&codAto=300584&dt=27.1.2024.16.42.52.571&indice=1&totalRegistros=1", atualizado: "Abril/2026" },
    { titulo: "Promoção por titulação e enquadramento", status: "Verificar requisitos", ano: "LC 259/2023 e alterações", tipo: "individual", desc: "A promoção por titulação para níveis específicos envolve tempo de carreira, formação, requisitos e regras de transição. Conferir cargo, nível, data de ingresso e documentação.", base: "Art. 83-A da LC PR 259/2023 e alterações posteriores.", fonte: "LC PR 259/2023", fonteUrl: "https://www.legislacao.pr.gov.br/legislacao/pesquisarAto.do?action=exibir&codAto=300584&dt=27.1.2024.16.42.52.571&indice=1&totalRegistros=1", atualizado: "Abril/2026" },
    { titulo: "Diária especial por jornada extrajornada voluntária", status: "Somente se autorizada", ano: "LC 259/2023", tipo: "individual", desc: "A diária especial por jornada extrajornada voluntária aparece entre parcelas possíveis, mas depende de autorização, disponibilidade orçamentária, escala e cumprimento efetivo.", base: "LC PR 259/2023, art. 39, rol de vantagens e indenizações.", fonte: "LC PR 259/2023", fonteUrl: "https://www.legislacao.pr.gov.br/legislacao/pesquisarAto.do?action=exibir&codAto=300584&dt=27.1.2024.16.42.52.571&indice=1&totalRegistros=1", atualizado: "Abril/2026" }
  ],
  pmrs: [
    {
      titulo: "Subsídio, auxílio-alimentação e enquadramento funcional",
      status: "Verificar caso a caso",
      ano: "Editais 2025",
      tipo: "individual",
      desc: "Conferência de subsídio/remuneração, auxílio-alimentação, ingresso, posto/graduação e eventuais diferenças deve partir do edital oficial, ficha funcional e contracheque. Não tratar verba condicionada como automática.",
      base: "Editais oficiais da Brigada Militar/RS para Soldado e Oficialato; legislação estadual dos militares.",
      fonte: "Brigada Militar/RS — Concursos 2025",
      fonteUrl: "https://www.brigadamilitar.rs.gov.br/concursos-2025",
      atualizado: "Abril/2026"
    },
    {
      titulo: "Reserva remunerada, reforma e contribuição previdenciária",
      status: "Tema previdenciário",
      ano: "EC 103/2019",
      tipo: "individual",
      desc: "A análise de reserva, reforma, abono de permanência e descontos previdenciários exige data de ingresso, tempo total, legislação estadual e demonstrativo de pagamento.",
      base: "Constituição Federal, EC 103/2019 e normas estaduais/RS aplicáveis aos militares estaduais.",
      fonte: "IPE Prev/RS e legislação estadual",
      fonteUrl: "https://ipeprev.rs.gov.br/",
      atualizado: "Abril/2026"
    }
  ],
  pcrs: [
    {
      titulo: "Vencimentos de Escrivão, Inspetor e Delegado — classe inicial",
      status: "Verificar caso a caso",
      ano: "Editais 2025",
      tipo: "individual",
      desc: "Conferência de vencimentos, classe inicial, dedicação exclusiva, descontos e eventual diferença remuneratória deve usar edital, ato de nomeação e contracheque.",
      base: "Editais nº 06/2025 (Escrivão/Inspetor) e nº 04/2025 (Delegado) da Polícia Civil/RS.",
      fonte: "Polícia Civil/RS — Concursos 2025",
      fonteUrl: "https://www.pc.rs.gov.br/concurso-publico-para-escrivao-e-inspetor-2025",
      atualizado: "Abril/2026"
    },
    {
      titulo: "Aposentadoria policial, abono e paridade/integralidade",
      status: "Tema sensível",
      ano: "EC 103/2019",
      tipo: "individual",
      desc: "A análise de aposentadoria policial e abono de permanência depende da data de ingresso, tempo de atividade policial, regra de transição e norma estadual efetivamente aplicada.",
      base: "Lei Federal 14.735/2023, EC 103/2019, Lei Estadual RS 12.350/2005 e legislação previdenciária estadual.",
      fonte: "Polícia Civil/RS — Editais e legislação",
      fonteUrl: "https://www.pc.rs.gov.br/",
      atualizado: "Abril/2026"
    }
  ]
,
  pmsc: [
    { titulo: "Subsídio, enquadramento e promoções na carreira militar estadual", status: "Conferência individual", ano: "Regime SC", tipo: "individual", desc: "Discussões podem envolver enquadramento no regime remuneratório especial, progressão de praças, posto/graduação, interstício, ficha funcional e eventual diferença de subsídio.", base: "LC SC 765/2020, LC SC 776/2021, LC SC 872/2025, LC SC 880/2025 e estatuto militar estadual.", fonte: "ALESC — legislação SC", fonteUrl: "https://leis.alesc.sc.gov.br/", atualizado: "Abril/2026" },
    { titulo: "Reserva remunerada, reforma, paridade e contribuição previdenciária", status: "Análise previdenciária", ano: "Tema recorrente", tipo: "individual", desc: "O direito depende da data de ingresso, tempo de serviço, regra de transição, situação funcional, cálculo do benefício e eventuais regras de paridade/integralidade.", base: "Sistema de proteção social dos militares estaduais, regras estaduais e ficha funcional.", fonte: "IPREV/SC e legislação estadual", fonteUrl: "https://www.iprev.sc.gov.br/", atualizado: "Abril/2026" }
  ],
  pcsc: [
    { titulo: "Subsídio, classe inicial e progressão funcional", status: "Conferência individual", ano: "Regime SC", tipo: "individual", desc: "Pode exigir conferência de cargo, classe, data de ingresso, enquadramento, progressões e reflexos remuneratórios. A comparação deve partir da tabela legal e do contracheque.", base: "Lei SC 6.843/1986, LC SC 765/2020, LC SC 776/2021 e LC SC 872/2025.", fonte: "ALESC — legislação SC", fonteUrl: "https://leis.alesc.sc.gov.br/", atualizado: "Abril/2026" },
    { titulo: "Aposentadoria policial, abono de permanência e paridade", status: "Análise previdenciária", ano: "Tema recorrente", tipo: "individual", desc: "A análise depende de tempo de contribuição, tempo em atividade policial, idade, sexo, data de ingresso, regra de transição e situação no cargo.", base: "Lei Orgânica Nacional das Polícias Civis, estatuto da PCSC, regras previdenciárias estaduais e ficha funcional.", fonte: "PCSC/IPREV/SC", fonteUrl: "https://www.iprev.sc.gov.br/", atualizado: "Abril/2026" }
  ],
  pmes: [
    { titulo: "Subsídio PMES, referência e enquadramento", status: "Conferência individual", ano: "Regime ES", tipo: "individual", desc: "Discussões podem envolver posto/graduação, referência na tabela de subsídio, progressão horizontal, promoção, ficha funcional e diferenças remuneratórias.", base: "LC ES 420/2007, estatuto dos militares estaduais, tabela PM/CBM e ficha funcional.", fonte: "PMES — legislação", fonteUrl: "https://pm.es.gov.br/legislacao", atualizado: "Abril/2026" },
    { titulo: "Serviço extraordinário e escalas especiais", status: "Depende de escala", ano: "LC ES 420/2007", tipo: "individual", desc: "A LC ES 420/2007 admite parcela eventual de serviço extraordinário, condicionada à escala prévia e efetiva prestação do serviço, sem incorporação aos proventos.", base: "LC ES 420/2007, escala, ordem de serviço e contracheque.", fonte: "LC ES 420/2007", fonteUrl: "https://pm.es.gov.br/Media/PMES/Leis%203/36-Lei%20que%20Disp%C3%B5e%20sobre%20a%20remunera%C3%A7%C3%A3o%20por%20subs%C3%ADdio%20-%20Lei_Complementar_420.pdf", atualizado: "Abril/2026" },
    { titulo: "Auxílio-fardamento e indenizações", status: "Conferir rubrica", ano: "Tema recorrente", tipo: "individual", desc: "Pode envolver pagamento anual, fornecimento, indenização ou diferenças conforme edital, norma interna, situação funcional e contracheque.", base: "Editais PMES, normas internas, legislação estadual e ficha financeira.", fonte: "PMES — concursos e legislação", fonteUrl: "https://pm.es.gov.br/", atualizado: "Abril/2026" },
    { titulo: "Reserva remunerada, reforma e contribuição previdenciária", status: "Análise previdenciária", ano: "Tema recorrente", tipo: "individual", desc: "Depende de data de ingresso, tempo de serviço, regra de transição, situação funcional, proventos, paridade/integralidade quando cabíveis e normas do sistema estadual.", base: "Sistema de proteção social dos militares estaduais, LC ES 420/2007, estatuto e legislação previdenciária estadual.", fonte: "IPAJM/ES e legislação estadual", fonteUrl: "https://ipajm.es.gov.br/", atualizado: "Abril/2026" }
  ],
  pces: [
    { titulo: "OIP PCES — enquadramento, categoria e referência", status: "Conferência individual", ano: "LC ES 1.093/2024", tipo: "individual", desc: "O Oficial Investigador de Polícia foi criado com carreira própria, organizada em categorias e referências. Diferenças podem envolver enquadramento, progressão, promoção, categoria, referência e rubricas de transição.", base: "LC ES 1.093/2024, LC ES 1.123/2025, edital OIP 2025 e ficha funcional.", fonte: "LC ES 1.093/2024", fonteUrl: "https://pc.es.gov.br/Media/PCES/Legisla%C3%A7%C3%A3o/LC_%20n_%201093_cria_OIP.pdf", atualizado: "Abril/2026" },
    { titulo: "Delegado PCES — categoria, referência e subsídio", status: "Conferência individual", ano: "Tabelas 2025", tipo: "individual", desc: "A análise deve comparar categoria, referência, data de progressão/promoção e tabela vigente com o contracheque e a ficha funcional.", base: "Tabelas de subsídio dos Delegados de Polícia do ES, legislação estadual e ficha funcional.", fonte: "ALEES/ES — legislação", fonteUrl: "https://www.al.es.gov.br/", atualizado: "Abril/2026" },
    { titulo: "Serviço extraordinário do OIP", status: "Depende de escala", ano: "LC ES 1.093/2024", tipo: "individual", desc: "A LC ES 1.093/2024 prevê prestação de serviço extraordinário conforme interesse público, disponibilidade, candidatura prévia e escala, com regra própria de cálculo e sem incorporação à inatividade.", base: "LC ES 1.093/2024, escala, autorização administrativa e contracheque.", fonte: "LC ES 1.093/2024", fonteUrl: "https://pc.es.gov.br/Media/PCES/Legisla%C3%A7%C3%A3o/LC_%20n_%201093_cria_OIP.pdf", atualizado: "Abril/2026" },
    { titulo: "Aposentadoria policial, abono e paridade/integralidade", status: "Tema sensível", ano: "EC 103/2019", tipo: "individual", desc: "A análise depende de cargo, data de ingresso, tempo em atividade policial, regra de transição, norma estadual aplicada, abono de permanência e situação funcional.", base: "Lei Federal 14.735/2023, EC 103/2019, legislação previdenciária estadual e ficha funcional.", fonte: "PCES/IPAJM/ES", fonteUrl: "https://pc.es.gov.br/", atualizado: "Abril/2026" }
  ],

  pmms: [
    { titulo: "Promoção, preterição e enquadramento militar", status: "Conferência individual", ano: "Regime MS", tipo: "individual", desc: "Discussões podem envolver quadro de acesso, antiguidade/merecimento, interstícios, publicações, promoções retroativas e reflexos financeiros.", base: "Estatuto e legislação dos militares estaduais de MS, boletins, ficha funcional e Diário Oficial/MS.", fonte: "PMMS/DOE-MS", fonteUrl: "https://www.pm.ms.gov.br/", atualizado: "Abril/2026" },
    { titulo: "Escalas, adicionais e diferenças remuneratórias", status: "Depende de rubrica", ano: "Caso concreto", tipo: "individual", desc: "Pode envolver adicional, verba eventual, indenização, serviço extraordinário, ajuda de custo ou diferença por escala/lotação, sempre comparando lei, ordem de serviço e contracheque.", base: "Legislação estadual, escala, ordem de serviço, ficha financeira e holerite.", fonte: "PMMS/Portal MS", fonteUrl: "https://www.pm.ms.gov.br/", atualizado: "Abril/2026" },
    { titulo: "Reserva remunerada, reforma e abono de permanência", status: "Análise previdenciária", ano: "Tema recorrente", tipo: "individual", desc: "A análise depende de tempo de serviço, data de ingresso, regras do sistema de proteção social, averbações, idade, situação funcional e cálculo aplicado.", base: "Sistema de proteção social dos militares estaduais, AGEPREV/MS e ficha funcional.", fonte: "AGEPREV/MS", fonteUrl: "https://www.ageprev.ms.gov.br/", atualizado: "Abril/2026" }
  ],
  pcms: [
    { titulo: "APJ PCMS — concurso, nomeação e ordem de classificação", status: "Acompanhar edital", ano: "Edital APJ/2025", tipo: "individual", desc: "Candidatos podem acompanhar convocações, cotas, nomeações, curso de formação e eventual preterição conforme edital e publicações oficiais.", base: "Edital SAD/SEJUSP/PCMS/APJ/2025, atos da banca, PCMS, Acadepol e Diário Oficial/MS.", fonte: "PCMS — concurso APJ 2025", fonteUrl: "https://www.pc.ms.gov.br/", atualizado: "Abril/2026" },
    { titulo: "Classe, referência e progressão na Polícia Civil", status: "Conferência individual", ano: "LC MS 114/2005 e alterações", tipo: "individual", desc: "Diferenças podem envolver enquadramento, promoção, classe, referência, tempo na carreira, ficha funcional e tabela legal vigente.", base: "LC MS 114/2005, LC MS 343/2024, ficha funcional e contracheque.", fonte: "PCMS/DOE-MS", fonteUrl: "https://www.pc.ms.gov.br/", atualizado: "Abril/2026" },
    { titulo: "Aposentadoria policial e abono de permanência", status: "Tema sensível", ano: "EC 103/2019", tipo: "individual", desc: "A análise depende de cargo, data de ingresso, tempo de atividade policial, regra de transição, abono implantado ou não e situação funcional.", base: "Lei Federal 14.735/2023, EC 103/2019, legislação estadual e AGEPREV/MS.", fonte: "PCMS/AGEPREV-MS", fonteUrl: "https://www.ageprev.ms.gov.br/", atualizado: "Abril/2026" }
  ],
  pmmt: [
    { titulo: "Promoção, preterição e enquadramento militar", status: "Conferência individual", ano: "Regime MT", tipo: "individual", desc: "Discussões podem envolver quadro de acesso, antiguidade/merecimento, interstícios, publicações, promoções retroativas e reflexos financeiros.", base: "Estatuto e legislação dos militares estaduais de MT, boletins, ficha funcional e Diário Oficial/MT.", fonte: "PMMT/DOE-MT", fonteUrl: "https://www.pm.mt.gov.br/", atualizado: "Abril/2026" },
    { titulo: "Escalas, etapas, adicionais e diferenças remuneratórias", status: "Depende de rubrica", ano: "Caso concreto", tipo: "individual", desc: "Pode envolver adicional, verba eventual, indenização, serviço extraordinário, ajuda de custo ou diferença por escala/lotação, sempre comparando lei, ordem de serviço e contracheque.", base: "Legislação estadual, escala, ordem de serviço, ficha financeira e holerite.", fonte: "PMMT/Portal MT", fonteUrl: "https://www.pm.mt.gov.br/", atualizado: "Abril/2026" },
    { titulo: "Reserva remunerada, reforma e abono de permanência", status: "Análise previdenciária", ano: "Tema recorrente", tipo: "individual", desc: "A análise depende de tempo de serviço, data de ingresso, regras do sistema de proteção social, averbações, idade, situação funcional e cálculo aplicado.", base: "Sistema de proteção social dos militares estaduais, MTPREV/MT e ficha funcional.", fonte: "MTPREV/MT", fonteUrl: "https://www.mtprev.mt.gov.br/", atualizado: "Abril/2026" }
  ],
  pcmt: [
    { titulo: "Concurso PCMT — nomeação, ordem de classificação e convocações", status: "Acompanhar edital", ano: "Último ciclo/novo edital", tipo: "individual", desc: "Candidatos podem acompanhar convocações, cotas, nomeações, curso de formação e eventual preterição conforme edital e publicações oficiais.", base: "Edital vigente, atos da banca, PJC-MT, Academia da Polícia Civil e Diário Oficial/MT.", fonte: "PJC-MT", fonteUrl: "https://www.pjc.mt.gov.br/", atualizado: "Abril/2026" },
    { titulo: "Classe, nível, progressão e tabela salarial", status: "Conferência individual", ano: "Tabela SEPLAG-MT", tipo: "individual", desc: "Diferenças podem envolver enquadramento, progressão, classe, nível, tempo na carreira, ficha funcional, tabela legal vigente e rubricas de contracheque.", base: "Tabela salarial do Portal do Servidor/SEPLAG-MT, ficha funcional e contracheque.", fonte: "PJC-MT/SEPLAG-MT", fonteUrl: "https://www.pjc.mt.gov.br/", atualizado: "Abril/2026" },
    { titulo: "Aposentadoria policial e abono de permanência", status: "Tema sensível", ano: "EC 103/2019", tipo: "individual", desc: "A análise depende de cargo, data de ingresso, tempo de atividade policial, regra de transição, abono implantado ou não e situação funcional.", base: "Lei Federal 14.735/2023, EC 103/2019, legislação estadual e MTPREV/MT.", fonte: "PJC-MT/MTPREV", fonteUrl: "https://www.mtprev.mt.gov.br/", atualizado: "Abril/2026" }
  ]

};

/* BLOCO 15.5 — Base de dados das associações e sindicatos */
const ASSOCIACOES = {
  pmac: [
    { nome: 'Entidades representativas dos militares estaduais do Acre', foco: 'Policiais militares, bombeiros militares, veteranos, pensionistas e familiares no Acre', acao: 'Representação de pautas remuneratórias, previdenciárias, assistenciais e institucionais. Cadastro informativo: confirmar entidade específica, filiação e legitimidade antes de encaminhar demanda.', site: 'estado.ac.gov.br', telefone: 'Consultar canais oficiais e redes institucionais locais', mensalidade: 'Consultar diretamente na entidade', servicos: 'Orientação associativa, acompanhamento de pautas da carreira, comunicação institucional e eventual apoio jurídico conforme entidade.' }
  ],
  pcac: [
    { nome: 'Entidades representativas dos policiais civis do Acre', foco: 'Delegados, agentes, escrivães, peritos, papiloscopistas e demais carreiras da Polícia Civil do Acre', acao: 'Atuação sindical/associativa em defesa de carreira, remuneração, concursos, previdência e condições de trabalho. Validar a entidade específica conforme cargo e pauta.', site: 'pc.ac.gov.br', telefone: 'Consultar canais oficiais e redes institucionais locais', mensalidade: 'Consultar diretamente na entidade', servicos: 'Representação de classe, comunicação de pautas, orientação ao associado e acompanhamento de demandas funcionais.' }
  ],
  ppac: [
    { nome: 'Entidades representativas dos policiais penais do Acre', foco: 'Polícia Penal, IAPEN/AC, sistema penitenciário, segurança prisional e carreira penal estadual', acao: 'Acompanhamento de pautas de carreira, nomeações, remuneração, condições de trabalho e estrutura do sistema penitenciário. Confirmar entidade ativa e base de representação antes de encaminhar demanda.', site: 'sead.ac.gov.br', telefone: 'Consultar canais oficiais e redes institucionais locais', mensalidade: 'Consultar diretamente na entidade', servicos: 'Representação de classe, comunicação institucional, orientação ao servidor e acompanhamento de editais/atos do IAPEN.' }
  ],
  pmesp: [
    { nome: "ACS - Associação dos Cabos e Soldados da PMESP", foco: "Praças da Polícia Militar do Estado de São Paulo", acao: "Representação institucional, apoio jurídico, pautas remuneratórias, valorização da carreira e atendimento por regionais no Estado.", site: "www.cabosesoldados.org.br", telefone: "(11) 3871-8100", mensalidade: "Consultar diretamente na entidade", servicos: "Jurídico, notícias de classe, regionais, convênios, comunicação institucional e orientação ao associado." },
    { nome: "AFAM - Associação Fundo de Auxílio Mútuo dos Militares do Estado de São Paulo", foco: "Família policial-militar, assistência social e apoio ao associado", acao: "Atuação voltada a benefícios assistenciais, apoio familiar, orientação jurídica e atendimento ao policial militar e seus dependentes.", site: "www.afam.com.br", telefone: "(11) 3328-1500", mensalidade: "Consultar diretamente na entidade", servicos: "Atendimento ao associado, assistência, apoio jurídico, canais de contato, benefícios e ações de suporte à família policial militar." },
    { nome: "AOMESP - Associação dos Oficiais Militares do Estado de São Paulo", foco: "Oficiais militares estaduais, veteranos e pensionistas", acao: "Defesa institucional da oficialidade, acompanhamento de pautas legislativas, previdenciárias e remuneratórias dos militares estaduais.", site: "aomesp.com.br", telefone: "(11) 3388-7501", mensalidade: "Consultar diretamente na entidade", servicos: "Representação de classe, comunicação institucional, convênios, eventos e apoio aos associados." },
    { nome: "AOPM - Associação dos Oficiais da Polícia Militar do Estado de São Paulo", foco: "Oficiais da PMESP e família policial-militar", acao: "Entidade tradicional de apoio associativo, social e institucional aos oficiais, com estrutura de convivência, serviços e defesa de interesses da carreira.", site: "www.aopm.com.br", telefone: "(11) 2997-8800", mensalidade: "Consultar diretamente na entidade", servicos: "Clube, eventos, convênios, comunicação institucional, apoio associativo e estrutura social para oficiais e familiares." }
  ],
  pcsp: [
    { nome: "SINDPESP - Sindicato dos Delegados de Polícia do Estado de São Paulo", foco: "Delegados de Polícia do Estado de São Paulo", acao: "Defesa de prerrogativas, valorização profissional, plano de carreira, remuneração e pautas institucionais da carreira de Delegado.", site: "sindpesp.org.br", telefone: "Consultar no site", mensalidade: "Consultar diretamente na entidade", servicos: "Atuação sindical, jurídico e institucional, comunicação de pautas da carreira e representação perante órgãos públicos." },
    { nome: "ADPESP - Associação dos Delegados de Polícia do Estado de São Paulo", foco: "Delegados de Polícia, ativos, aposentados e pensionistas", acao: "Associação voltada à organização, consulta, fortalecimento e defesa dos interesses da carreira de Delegado de Polícia.", site: "www.adpesp.org.br", telefone: "Consultar no site", mensalidade: "Consultar diretamente na entidade", servicos: "Representação associativa, eventos, notícias, apoio institucional, convênios e comunicação da carreira." },
    { nome: "SIPESP - Sindicato dos Investigadores de Polícia do Estado de São Paulo", foco: "Investigadores de Polícia e demais carreiras da Polícia Civil paulista", acao: "Defesa de direitos, interesses e prerrogativas dos investigadores, com atuação sindical e acompanhamento de pautas de valorização da PCSP.", site: "sipesp.org.br", telefone: "(11) 3326-8307 / (11) 3326-8308", mensalidade: "Consultar diretamente na entidade", servicos: "Jurídico, convênios, colônia de férias, clube de vantagens, notícias, permutas e atendimento sindical." },
    { nome: "SINCOPOL - Sindicato Regional dos Policiais Civis do Centro-Oeste Paulista", foco: "Policiais civis da região Centro-Oeste Paulista", acao: "Representação regional de policiais civis, defesa de direitos, acompanhamento de pautas funcionais e apoio sindical ao filiado.", site: "www.sincopol.com.br", telefone: "Consultar no site", mensalidade: "Consultar diretamente na entidade", servicos: "Notícias, legislação, serviços ao filiado, orientação sindical, convênios e defesa de direitos." }
  ],
  pmerj: [
    { nome: "ASSINAP - Associação de Ativos, Inativos, Pensionistas das Polícias Militares, Brigadas Militares e Corpos de Bombeiros Militares do Brasil", foco: "Policiais militares, bombeiros militares, inativos e pensionistas", acao: "Entidade representativa de classe militar, com atuação voltada à defesa de direitos, atendimento regional e apoio aos associados.", site: "assinap.com.br", telefone: "WhatsApp: (21) 96499-6470 / (21) 97580-9680", mensalidade: "Consultar diretamente na entidade", servicos: "Representação, atendimento em sedes, orientação ao associado, canais de contato e acompanhamento de pautas militares." },
    { nome: "AME-RJ - Associação de Oficiais Militares Estaduais do Rio de Janeiro", foco: "Oficiais da PMERJ e do CBMERJ, ativa, reserva e reformados", acao: "Representação da oficialidade militar estadual, defesa institucional e acompanhamento de pautas de carreira, prerrogativas e valorização.", site: "amerj.net.br", telefone: "(21) 2233-1144", mensalidade: "Consultar diretamente na entidade", servicos: "Representação de classe, notícias, atuação institucional, comunicação com associados e defesa de prerrogativas." },
    { nome: "CBPMRJ - Caixa Beneficente da Polícia Militar do Estado do Rio de Janeiro", foco: "Policiais militares associados e seus familiares", acao: "Entidade de benefícios e serviços voltada à família policial militar do Rio de Janeiro.", site: "www.cbpmrj.com.br", telefone: "Consultar no site", mensalidade: "Consultar regras de associação e contribuição", servicos: "Benefícios, serviços ao associado, apoio familiar e canais de atendimento." },
    { nome: "Clube dos Oficiais Bombeiros do Estado do Rio de Janeiro", foco: "Oficiais bombeiros militares e associados", acao: "Entidade social e associativa com estrutura de lazer, convivência, assessoria jurídica e apoio aos oficiais bombeiros.", site: "clubeoficiaisbmrj.com.br", telefone: "(21) 2252-1619", mensalidade: "Consultar diretamente na entidade", servicos: "Clube social, assessoria jurídica, áreas de lazer, eventos e serviços ao associado." }
  ],
  pcerj: [
    { nome: "SINDPOL-RJ - Sindicato dos Policiais Civis do Estado do Rio de Janeiro", foco: "Policiais civis do Estado do Rio de Janeiro", acao: "Atuação sindical em defesa de direitos, condições de trabalho, valorização da carreira e acompanhamento de pautas da PCERJ.", site: "sindpolrj.com.br", telefone: "(21) 3439-8428 / (21) 98514-4949", mensalidade: "Consultar diretamente na entidade", servicos: "Jurídico, convênios, saúde do policial, educação, bem-estar, notícias e atendimento sindical." },
    { nome: "SINPOL-RJ - Sindicato dos Funcionários da Polícia Civil", foco: "Servidores e funcionários da Polícia Civil do Estado do Rio de Janeiro", acao: "Representação sindical, mobilização da categoria, acompanhamento legislativo e defesa de pautas funcionais da Polícia Civil.", site: "sinpol.org.br", telefone: "Consultar no site", mensalidade: "Consultar diretamente na entidade", servicos: "Filiação, notícias, comunicação sindical, assembleias, acompanhamento político e defesa coletiva." },
    { nome: "ADEPOL-RJ - Associação dos Delegados de Polícia do Estado do Rio de Janeiro", foco: "Delegados de Polícia do Estado do Rio de Janeiro", acao: "Defesa das prerrogativas dos delegados, representação institucional e acompanhamento de temas ligados à Polícia Judiciária.", site: "www.portal.adepolrj.com.br", telefone: "Consultar no site", mensalidade: "Consultar diretamente na entidade", servicos: "Representação associativa, notícias, atuação institucional, comunicação com associados e defesa de prerrogativas." },
    { nome: "COLPOL-RJ - Coligação dos Policiais Civis do Estado do Rio de Janeiro", foco: "Policiais civis ativos, aposentados e pensionistas", acao: "Entidade tradicional da PCERJ, com atuação em jurídico, saúde, serviços ao associado, convênios e acompanhamento de pautas da categoria.", site: "colpol.com.br", telefone: "(21) 2509-0611 / (21) 2509-1255 / (21) 96914-0012", mensalidade: "Consultar diretamente na entidade", servicos: "Jurídico, centro odontológico, reabilitação física, ambulatório, convênios, assistência funeral e serviços ao policial civil." }
  ],
  pmmg: [
    { nome: "ASPRA/PMBM-MG - Associação dos Praças Policiais e Bombeiros Militares de Minas Gerais", foco: "Praças da PMMG e do CBMMG", acao: "Representação de classe, defesa de direitos, pautas remuneratórias, previdenciárias, IPSM, regionais, lazer e clube de vantagens.", site: "aspra.org.br", telefone: "(31) 3235-2700", mensalidade: "Consultar diretamente na entidade", servicos: "Jurídico, notícias, regionais, clubes, hotelaria, clube de vantagens, convênios e projetos aos associados." },
    { nome: "AOPMBM-MG - Associação dos Oficiais da Polícia Militar e do Corpo de Bombeiros Militar de Minas Gerais", foco: "Oficiais da PMMG e do CBMMG", acao: "Representação da oficialidade, defesa de interesses dos associados, prerrogativas, valorização da carreira e fortalecimento institucional.", site: "www.aopmbm.org.br", telefone: "Consultar no site", mensalidade: "Consultar diretamente na entidade", servicos: "Representação de classe, jurídico, eventos, comunicação institucional, convênios e apoio aos associados." },
    { nome: "APNM/BMPM - Associação dos Praças do Interior de Minas Gerais", foco: "Praças policiais e bombeiros militares do interior de Minas Gerais", acao: "Associação civil de classe voltada à representação, apoio e defesa dos interesses dos praças no interior do Estado.", site: "www.apnm.org.br", telefone: "Consultar no site", mensalidade: "Consultar diretamente na entidade", servicos: "Representação associativa, comunicação, atendimento ao associado e apoio regional." },
    { nome: "AAPMMGBM - Associação de Amparo aos Policiais Militares e Bombeiros Militares de Minas Gerais", foco: "Policiais militares, bombeiros militares e familiares", acao: "Atuação de amparo, benefícios, assistência e projetos sociais voltados aos militares estaduais e suas famílias.", site: "aapmmgbm.org.br", telefone: "Consultar no site", mensalidade: "Consultar diretamente na entidade", servicos: "Benefícios, assistências, projetos sociais, cursos, diretoria, atendimento e canais de contato." }
  ],
  pcmg: [
    { nome: "SINDPOL-MG - Sindicato dos Servidores da Polícia Civil do Estado de Minas Gerais", foco: "Servidores da Polícia Civil de Minas Gerais", acao: "Defesa sindical da categoria, valorização, recomposição salarial, condições de trabalho, convênios e acompanhamento jurídico-institucional.", site: "sindpolmg.org.br", telefone: "(31) 2138-9898", mensalidade: "Consultar diretamente na entidade", servicos: "Jurídico, convênios, atendimento administrativo, financeiro, comunicação, notícias e orientação ao filiado." },
    { nome: "ADEPOL-MG - Associação dos Delegados da Polícia Civil de Minas Gerais", foco: "Delegados de Polícia Civil de Minas Gerais", acao: "Representação associativa dos delegados, defesa de prerrogativas, integração institucional, eventos e acompanhamento de pautas da carreira.", site: "adepolmg.org", telefone: "Consultar no site", mensalidade: "Consultar diretamente na entidade", servicos: "Notícias, eventos, representação, convênios, comunicação institucional e apoio aos delegados associados." },
    { nome: "SINDEPOMINAS - Sindicato dos Delegados de Polícia do Estado de Minas Gerais", foco: "Delegados de Polícia Civil de Minas Gerais", acao: "Atuação sindical sem conotação político-partidária, defesa de interesses da carreira, prerrogativas, remuneração e pautas institucionais.", site: "www.sindepominas.com.br", telefone: "(31) 3272-7268", mensalidade: "Consultar diretamente na entidade", servicos: "Representação sindical, notícias, diretoria, atendimento, comunicação, defesa institucional e orientação ao filiado." },
    { nome: "SINDPECRI-MG - Sindicato dos Peritos Criminais do Estado de Minas Gerais", foco: "Peritos criminais da Polícia Civil de Minas Gerais", acao: "Defesa dos direitos da perícia criminal, valorização da carreira, estrutura de trabalho e pautas específicas dos peritos oficiais.", site: "sindpecri.org.br", telefone: "(31) 3295-4177", mensalidade: "Consultar diretamente na entidade", servicos: "Jurídico, notícias, convênios, atendimento sindical, contato administrativo e defesa das pautas da perícia criminal." }
  ],
  pmba: [
    { nome: "APPM-BA - Associação de Praças da Polícia e Bombeiro Militar da Bahia", foco: "Praças da PMBA e do CBMBA", acao: "Atuação em valorização salarial, direitos dos militares estaduais, propostas, ofícios e discussões com o governo e comando da Corporação.", site: "www.appmba.org.br", telefone: "(71) 3310-4250", mensalidade: "Consultar diretamente na entidade", servicos: "Jurídico, comunicação, notícias, secretaria, representação associativa, canais digitais e atendimento ao associado." },
    { nome: "ASPRA-BA - Associação de Policiais e Bombeiros e de seus Familiares do Estado da Bahia", foco: "Policiais militares, bombeiros militares e familiares", acao: "Representação de policiais e bombeiros militares, defesa de direitos, plantão jurídico e mobilização por valorização da categoria.", site: "www.instagram.com/asprabahia", telefone: "Plantão jurídico: (71) 99374-2524", mensalidade: "Consultar diretamente na entidade", servicos: "Plantão jurídico, comunicação institucional, mobilização, atendimento regional e defesa de pautas dos militares estaduais." },
    { nome: "Força Invicta - Associação dos Oficiais Militares Estaduais da Bahia", foco: "Oficiais da PMBA e do CBMBA", acao: "Representação institucional da oficialidade baiana, segurança jurídica, acompanhamento de pautas no Legislativo e Executivo e defesa de prerrogativas.", site: "forcainvicta.org.br", telefone: "0800 190 0574", mensalidade: "Consultar diretamente na entidade", servicos: "Suporte jurídico, representação institucional, rede de associados, convênios, benefícios, bem-estar e comunicação transparente." },
    { nome: "PLANSERV - Assistência à Saúde dos Servidores Públicos Estaduais da Bahia", foco: "Servidores públicos estaduais da Bahia, incluindo militares estaduais quando vinculados", acao: "Plano de assistência à saúde dos servidores estaduais; não é sindicato, mas é serviço essencial de consulta para o público da segurança pública baiana.", site: "www.planserv.ba.gov.br", telefone: "Consultar canais oficiais", mensalidade: "Conforme regras do plano e dependentes", servicos: "Rede assistencial, atendimento de saúde, dependentes, informações cadastrais e canais oficiais do Governo da Bahia." }
  ],
  pcba: [
    { nome: "SINDPOC-BA - Sindicato dos Policiais Civis do Estado da Bahia", foco: "Policiais civis da Bahia", acao: "Representação sindical, defesa de direitos, valorização, condições de trabalho, atuação jurídica, fiscalização e acompanhamento de pautas da PCBA.", site: "www.sindpoc.org.br", telefone: "Consultar no site", mensalidade: "Consultar diretamente na entidade", servicos: "Jurídico, notícias, convênios, articulação institucional, fiscalização, comunicação e atendimento ao sindicalizado." },
    { nome: "ADPEB/Sindicato - Sindicato dos Delegados de Polícia do Estado da Bahia", foco: "Delegados de Polícia do Estado da Bahia", acao: "Defesa das prerrogativas, valorização da carreira, representação sindical, assembleias, eleições internas e apoio jurídico aos delegados sindicalizados.", site: "www.adpeb.com.br", telefone: "(71) 3329-2684", mensalidade: "Consultar diretamente na entidade", servicos: "Jurídico, atendimento psicológico, convênios, cursos, notícias, assembleias e comunicação institucional." },
    { nome: "AEPEB/Sindicato - Sindicato dos Escrivães de Polícia Civil do Estado da Bahia", foco: "Escrivães de Polícia Civil da Bahia", acao: "Representação específica dos escrivães, defesa de direitos, valorização funcional e comunicação sindical da categoria.", site: "aepebsindicato.com.br", telefone: "(71) 3329-6802", mensalidade: "Consultar diretamente na entidade", servicos: "Comunicação sindical, filiação, redes sociais, notícias, orientação e defesa de pautas dos escrivães." },
    { nome: "SINDPEP-BA - Sindicato dos Peritos em Papiloscopia do Estado da Bahia", foco: "Peritos em papiloscopia e identificação civil/criminal da Bahia", acao: "Defesa dos interesses da papiloscopia, valorização da ciência papiloscópica, identificação civil e criminal e pautas específicas da carreira.", site: "sindpep.com.br", telefone: "Consultar no site", mensalidade: "Consultar diretamente na entidade", servicos: "Representação sindical, notícias, comunicação, defesa de direitos, eventos técnicos e pautas de valorização profissional." }
  ],
  pmpr: [
    { nome: "APCS-PR — Associação de Praças do Estado do Paraná", tipo: "associação", publico: "Praças da PMPR/CBMPR", acao: "Acompanhamento de carreira, notícias, representação institucional e pautas de valorização dos militares estaduais.", site: "apcs.net.br", telefone: "Consultar no site", mensalidade: "Consultar diretamente na entidade", servicos: "Informativos, defesa de interesses da categoria, apoio institucional e acompanhamento de temas remuneratórios." },
    { nome: "FASPM — Fundo de Assistência à Saúde dos Militares Estaduais", tipo: "assistência", publico: "Militares estaduais ativos, inativos, pensionistas e dependentes, quando aderentes", acao: "Assistência à saúde dos militares estaduais do Paraná, com contribuição facultativa conforme lei.", site: "Consultar canal oficial do Governo do Paraná / FASPM", telefone: "Consultar canal oficial", mensalidade: "0,5% do subsídio + 0,2% por dependente, limitado a 2%, quando houver adesão.", servicos: "Assistência à saúde, regras de dependentes e cobertura conforme regulamento próprio." },
    { nome: "Entidades representativas locais da PMPR", tipo: "associação", publico: "Policiais militares do Paraná", acao: "Atuação em pautas de promoção, subsídio, saúde, escala, condições de trabalho e defesa institucional.", site: "Consultar canais oficiais e redes institucionais", telefone: "Consultar diretamente", mensalidade: "Consultar diretamente", servicos: "Representação associativa, orientação, notícias e eventual apoio jurídico conforme contrato." }
  ],
  pcpr: [
    { nome: "SINCLAPOL — Sindicato das Classes Policiais Civis do Paraná", tipo: "sindicato", publico: "Policiais civis do Paraná", acao: "Defesa de interesses da categoria, carreira, remuneração, condições de trabalho e pautas institucionais da Polícia Civil do Paraná.", site: "sinclapol.com.br", telefone: "Consultar no site", mensalidade: "Consultar diretamente na entidade", servicos: "Representação sindical, comunicação de pautas, assembleias, apoio jurídico conforme regras internas e defesa coletiva." },
    { nome: "ADEPOL-PR — Associação dos Delegados de Polícia do Paraná", tipo: "associação", publico: "Delegados de Polícia do Paraná", acao: "Representação institucional da carreira de Delegado, defesa de prerrogativas, valorização profissional e acompanhamento legislativo.", site: "adepolpr.org.br", telefone: "Consultar no site", mensalidade: "Consultar diretamente na entidade", servicos: "Representação associativa, notícias, eventos, defesa de prerrogativas e apoio institucional." },
    { nome: "Entidades e associações por carreira da PCPR", tipo: "associação", publico: "Agentes, Papiloscopistas, Delegados e demais carreiras da Polícia Civil", acao: "Representação específica por cargo, acompanhamento de promoções, subsídio, titulação, escalas e condições de trabalho.", site: "Consultar canais oficiais da entidade de cada carreira", telefone: "Consultar diretamente", mensalidade: "Consultar diretamente", servicos: "Informativos, apoio institucional, pautas remuneratórias, acompanhamento legislativo e eventual orientação jurídica." }
  ],
  pmrs: [
    { nome: "ASSTBM - Associação dos Sargentos, Subtenentes e Tenentes da Brigada Militar e Bombeiros Militares do RS", foco: "Militares estaduais da Brigada Militar e do Corpo de Bombeiros Militar do RS", acao: "Representação associativa, defesa institucional e acompanhamento de pautas de carreira dos militares estaduais.", site: "asstbm.org.br", telefone: "Consultar no site", mensalidade: "Consultar diretamente na entidade", servicos: "Apoio associativo, comunicação, atuação institucional, convênios e orientações aos associados." },
    { nome: "ABAMF - Associação Beneficente Antônio Mendes Filho", foco: "Praças da Brigada Militar e Bombeiros Militares do Rio Grande do Sul", acao: "Atuação associativa e beneficente voltada à categoria, com acompanhamento de pautas funcionais e apoio aos associados.", site: "abamf.org.br", telefone: "Consultar no site", mensalidade: "Consultar diretamente na entidade", servicos: "Apoio associativo, notícias, representação, convênios e atendimento ao associado." },
    { nome: "ASOFBM - Associação dos Oficiais da Brigada Militar", foco: "Oficiais da Brigada Militar do Rio Grande do Sul", acao: "Representação da oficialidade militar estadual, defesa institucional e valorização da carreira.", site: "www.asofbm.org.br", telefone: "Consultar no site", mensalidade: "Consultar diretamente na entidade", servicos: "Representação institucional, notícias, eventos, comunicação e apoio aos associados." }
  ],
  pcrs: [
    { nome: "UGEIRM Sindicato - Sindicato dos Escrivães, Inspetores e Investigadores de Polícia do RS", foco: "Policiais civis do Estado do Rio Grande do Sul", acao: "Representação sindical em defesa de direitos, carreira, condições de trabalho e valorização dos policiais civis.", site: "ugeirmsindicato.com.br", telefone: "Consultar no site", mensalidade: "Consultar diretamente na entidade", servicos: "Jurídico, notícias, mobilização, assembleias, convênios e atendimento sindical." },
    { nome: "ASDEP-RS - Associação dos Delegados de Polícia do Rio Grande do Sul", foco: "Delegados de Polícia Civil do RS", acao: "Representação associativa da carreira de Delegado, defesa institucional e acompanhamento de pautas legislativas e administrativas.", site: "asdep.com.br", telefone: "Consultar no site", mensalidade: "Consultar diretamente na entidade", servicos: "Representação institucional, comunicação, eventos, apoio associativo e defesa de prerrogativas." },
    { nome: "SINPOL-RS - Sindicato dos Policiais Civis do Rio Grande do Sul", foco: "Servidores policiais civis do Rio Grande do Sul", acao: "Atuação sindical e acompanhamento de pautas de valorização, direitos e condições de trabalho.", site: "sinpolrs.org.br", telefone: "Consultar no site", mensalidade: "Consultar diretamente na entidade", servicos: "Atendimento sindical, notícias, mobilização, convênios e orientação aos filiados." }
  ]
,
  pmsc: [
    { nome: "APRASC — Associação de Praças de Santa Catarina", foco: "Praças militares estaduais de Santa Catarina", acao: "Representação associativa, institucional e defesa de interesses da categoria, com acompanhamento de pautas de carreira, remuneração e condições de trabalho.", site: "www.aprasc.org.br", telefone: "Consultar no site", mensalidade: "Consultar diretamente na entidade", servicos: "Comunicação institucional, representação, notícias, atuação associativa, convênios e orientação aos associados." },
    { nome: "ACORS — Associação de Oficiais Militares de SC", foco: "Oficiais da Polícia Militar e do Corpo de Bombeiros Militar de Santa Catarina", acao: "Representação institucional da oficialidade militar estadual, defesa de prerrogativas, valorização profissional e acompanhamento legislativo.", site: "www.acors.org.br", telefone: "Consultar no site", mensalidade: "Consultar diretamente na entidade", servicos: "Representação associativa, comunicação institucional, eventos, convênios e apoio aos associados." }
  ],
  pcsc: [
    { nome: "SINPOL-SC — Sindicato dos Policiais Civis de Santa Catarina", foco: "Policiais civis de Santa Catarina", acao: "Representação sindical em pautas de carreira, direitos, remuneração, condições de trabalho e defesa coletiva da categoria.", site: "sinpolsc.org.br", telefone: "Consultar no site", mensalidade: "Consultar diretamente na entidade", servicos: "Atendimento sindical, notícias, mobilização, orientação, convênios e eventual apoio jurídico conforme regras internas." },
    { nome: "ADEPOL-SC — Associação dos Delegados de Polícia de Santa Catarina", foco: "Delegados de Polícia de Santa Catarina", acao: "Representação associativa da carreira de Delegado, defesa institucional, acompanhamento legislativo e valorização da Polícia Judiciária.", site: "adepolsc.org.br", telefone: "Consultar no site", mensalidade: "Consultar diretamente na entidade", servicos: "Representação institucional, comunicação, eventos, apoio associativo e defesa de prerrogativas." }
  ],
  pmes: [
    { nome: "ASPRA-ES — Associação de Praças da PM e BM do Espírito Santo", foco: "Praças militares estaduais do Espírito Santo", acao: "Representação associativa, acompanhamento de pautas de carreira, remuneração, promoção, previdência e condições de trabalho.", site: "aspraes.com.br", telefone: "Consultar no site", mensalidade: "Consultar diretamente na entidade", servicos: "Comunicação institucional, representação, notícias, orientação associativa, convênios e eventual apoio jurídico conforme regras internas." },
    { nome: "Entidades da oficialidade militar estadual do ES", foco: "Oficiais da Polícia Militar e do Corpo de Bombeiros Militar do Espírito Santo", acao: "Atuação institucional e associativa em pautas da oficialidade, carreira, prerrogativas, subsídio e sistema de proteção social.", site: "Consultar canais oficiais da entidade", telefone: "Consultar diretamente", mensalidade: "Consultar diretamente", servicos: "Representação associativa, acompanhamento legislativo, comunicação institucional e orientação aos associados." },
    { nome: "Entidades representativas locais da PMES", foco: "Militares estaduais ativos, veteranos e pensionistas", acao: "Apoio associativo em temas de promoção, subsídio, escalas, fardamento, saúde, previdência e valorização profissional.", site: "Consultar canais oficiais e redes institucionais", telefone: "Consultar diretamente", mensalidade: "Consultar diretamente", servicos: "Informativos, orientação, acompanhamento de pautas de classe e eventual suporte jurídico/administrativo conforme contrato." }
  ],
  pces: [
    { nome: "SINDIPOL/ES — Sindicato dos Policiais Civis do Espírito Santo", foco: "Policiais civis do Espírito Santo", acao: "Representação sindical em pautas de carreira, remuneração, condições de trabalho, direitos, aposentadoria e valorização da Polícia Civil.", site: "Consultar site/canal oficial da entidade", telefone: "Consultar no site", mensalidade: "Consultar diretamente na entidade", servicos: "Atendimento sindical, notícias, mobilização, assembleias, orientação e eventual apoio jurídico conforme regras internas." },
    { nome: "ADEPOL-ES — Associação dos Delegados de Polícia do Espírito Santo", foco: "Delegados de Polícia Civil do Espírito Santo", acao: "Representação associativa da carreira de Delegado, defesa de prerrogativas, acompanhamento legislativo e valorização institucional.", site: "Consultar site/canal oficial da entidade", telefone: "Consultar no site", mensalidade: "Consultar diretamente na entidade", servicos: "Representação institucional, comunicação, eventos, apoio associativo e defesa de prerrogativas." },
    { nome: "Entidades por carreira da PCES/PCIES", foco: "Oficial Investigador, Delegados, Perícia Oficial e demais carreiras ligadas à segurança pública estadual", acao: "Atuação por carreira em pautas de subsídio, enquadramento, progressão, saúde, aposentadoria, escalas e condições de trabalho.", site: "Consultar canais oficiais da entidade de cada carreira", telefone: "Consultar diretamente", mensalidade: "Consultar diretamente", servicos: "Informativos, orientação, acompanhamento legislativo, pautas remuneratórias e eventual suporte jurídico conforme contrato." }
  ],

  pmms: [
    { nome: "ACS-PM/BM-MS — Associação de Cabos e Soldados de MS", foco: "Praças da Polícia Militar e do Corpo de Bombeiros Militar de Mato Grosso do Sul", acao: "Representação associativa em pautas de remuneração, carreira, previdência, condições de trabalho e valorização dos militares estaduais.", site: "Consultar site/canal oficial da entidade", telefone: "Consultar diretamente", mensalidade: "Consultar diretamente na entidade", servicos: "Comunicação de classe, acompanhamento legislativo, orientação associativa, convênios e eventual apoio jurídico conforme regras internas." },
    { nome: "Entidades da oficialidade militar estadual de MS", foco: "Oficiais da PMMS e do CBMMS", acao: "Atuação institucional e associativa em temas de carreira, prerrogativas, promoções, sistema de proteção social e valorização da oficialidade.", site: "Consultar canais oficiais da entidade", telefone: "Consultar diretamente", mensalidade: "Consultar diretamente", servicos: "Representação associativa, acompanhamento de pautas, eventos, comunicação e orientação aos associados." },
    { nome: "Entidades locais da PMMS", foco: "Militares estaduais ativos, veteranos e pensionistas", acao: "Apoio associativo em pautas de escala, promoção, remuneração, saúde, previdência e condições de serviço.", site: "Consultar canais oficiais e redes institucionais", telefone: "Consultar diretamente", mensalidade: "Consultar diretamente", servicos: "Informativos, orientação, representação e eventual suporte jurídico/administrativo conforme contrato." }
  ],
  pcms: [
    { nome: "SINPOL-MS — Sindicato dos Policiais Civis de Mato Grosso do Sul", foco: "Policiais civis de Mato Grosso do Sul", acao: "Representação sindical em pautas de carreira, remuneração, concurso, condições de trabalho, aposentadoria e valorização da Polícia Civil.", site: "Consultar site/canal oficial da entidade", telefone: "Consultar no site", mensalidade: "Consultar diretamente na entidade", servicos: "Atendimento sindical, notícias, assembleias, mobilização, orientação e eventual apoio jurídico conforme regras internas." },
    { nome: "ADEPOL-MS — Associação dos Delegados de Polícia de Mato Grosso do Sul", foco: "Delegados de Polícia Civil de Mato Grosso do Sul", acao: "Representação associativa da carreira de Delegado, defesa de prerrogativas, acompanhamento legislativo e valorização institucional.", site: "Consultar site/canal oficial da entidade", telefone: "Consultar no site", mensalidade: "Consultar diretamente na entidade", servicos: "Representação institucional, comunicação, eventos, apoio associativo e defesa de prerrogativas." },
    { nome: "Entidades por carreira da PCMS", foco: "Investigadores, Escrivães, Delegados, Perícia Oficial e demais carreiras ligadas à Polícia Civil", acao: "Atuação por carreira em pautas de subsídio, enquadramento, progressão, saúde, aposentadoria, plantões e condições de trabalho.", site: "Consultar canais oficiais da entidade de cada carreira", telefone: "Consultar diretamente", mensalidade: "Consultar diretamente", servicos: "Informativos, orientação, acompanhamento legislativo, pautas remuneratórias e eventual suporte jurídico conforme contrato." }
  ],
  pmmt: [
    { nome: "Associações de praças e militares estaduais de Mato Grosso", foco: "Praças da Polícia Militar e do Corpo de Bombeiros Militar de Mato Grosso", acao: "Representação associativa em pautas de remuneração, carreira, previdência, condições de trabalho e valorização dos militares estaduais.", site: "Consultar canal oficial da entidade", telefone: "Consultar diretamente", mensalidade: "Consultar diretamente na entidade", servicos: "Comunicação de classe, acompanhamento legislativo, orientação associativa, convênios e eventual apoio jurídico conforme regras internas." },
    { nome: "Entidades da oficialidade militar estadual de MT", foco: "Oficiais da PMMT e do CBMMT", acao: "Atuação institucional e associativa em temas de carreira, prerrogativas, promoções, sistema de proteção social e valorização da oficialidade.", site: "Consultar canais oficiais da entidade", telefone: "Consultar diretamente", mensalidade: "Consultar diretamente", servicos: "Representação associativa, acompanhamento de pautas, eventos, comunicação e orientação aos associados." },
    { nome: "Entidades locais da PMMT", foco: "Militares estaduais ativos, veteranos e pensionistas", acao: "Apoio associativo em pautas de escala, promoção, remuneração, saúde, previdência e condições de serviço.", site: "Consultar canais oficiais e redes institucionais", telefone: "Consultar diretamente", mensalidade: "Consultar diretamente", servicos: "Informativos, orientação, representação e eventual suporte jurídico/administrativo conforme contrato." }
  ],
  pcmt: [
    { nome: "Sindicato dos Investigadores da Polícia Civil de Mato Grosso", foco: "Investigadores da Polícia Judiciária Civil de Mato Grosso", acao: "Representação sindical em pautas de carreira, remuneração, concurso, condições de trabalho, aposentadoria e valorização da Polícia Civil.", site: "Consultar site/canal oficial da entidade", telefone: "Consultar no site", mensalidade: "Consultar diretamente na entidade", servicos: "Atendimento sindical, notícias, assembleias, mobilização, orientação e eventual apoio jurídico conforme regras internas." },
    { nome: "Associação dos Delegados de Polícia de Mato Grosso", foco: "Delegados de Polícia Judiciária Civil de Mato Grosso", acao: "Representação associativa da carreira de Delegado, defesa de prerrogativas, acompanhamento legislativo e valorização institucional.", site: "Consultar site/canal oficial da entidade", telefone: "Consultar no site", mensalidade: "Consultar diretamente na entidade", servicos: "Representação institucional, comunicação, eventos, apoio associativo e defesa de prerrogativas." },
    { nome: "Entidades por carreira da PCMT", foco: "Escrivães, Investigadores, Delegados e demais carreiras ligadas à Polícia Judiciária Civil", acao: "Atuação por carreira em pautas de subsídio, enquadramento, progressão, saúde, aposentadoria, plantões e condições de trabalho.", site: "Consultar canais oficiais da entidade de cada carreira", telefone: "Consultar diretamente", mensalidade: "Consultar diretamente", servicos: "Informativos, orientação, acompanhamento legislativo, pautas remuneratórias e eventual suporte jurídico conforme contrato." }
  ],
  ppmt: [
    { nome: "SINDSPPEN-MT — Sindicato dos Policiais Penais de Mato Grosso", foco: "Policiais penais de Mato Grosso", acao: "Representação sindical em pautas da Polícia Penal, sistema prisional, tabela salarial, condições de trabalho, segurança e carreira.", site: "Consultar site/canal oficial da entidade", telefone: "Consultar diretamente", mensalidade: "Consultar diretamente na entidade", servicos: "Notícias, representação sindical, mobilização, orientação, acompanhamento legislativo e eventual apoio jurídico conforme regras internas." },
    { nome: "Entidades locais da Polícia Penal/SEJUS-MT", foco: "Servidores policiais penais, ativos, veteranos e pensionistas", acao: "Apoio associativo e sindical em temas de segurança prisional, escala, remuneração, saúde, previdência e condições de serviço.", site: "Consultar canais oficiais e redes institucionais", telefone: "Consultar diretamente", mensalidade: "Consultar diretamente", servicos: "Informativos, orientação, representação e eventual suporte jurídico/administrativo conforme contrato." }
  ]

};


/* BLOCO 15.6 — Base de dados dos concursos por instituição */
const CONCURSOS = {
  pmac: {
    edital: 'PMAC — Edital nº 001/2023 SEAD/PMAC — Aluno Oficial e 2º Tenente Estagiário de Saúde',
    salario: 'Aluno Oficial: R$ 8.129,55; 2º Tenente Estagiário de Saúde: R$ 10.423,73, conforme edital.',
    vagas: '36 vagas: Aluno Oficial Combatente e cargos de 2º Tenente Estagiário de Saúde',
    cotas: 'Conferir regras do edital FGV/SEAD/PMAC 2023',
    idade: 'Conferir limite etário e requisitos específicos do edital.',
    escolaridade: 'Nível superior conforme cargo; requisitos específicos no edital.',
    materias: 'Língua Portuguesa, conhecimentos jurídicos, conhecimentos específicos, redação/discursiva, raciocínio e legislação conforme cargo.',
    banca: 'FGV',
    inscritos: 'Conferir página oficial da FGV',
    etapas: 'Prova objetiva, prova discursiva/redação, TAF, avaliação psicológica, avaliação médica/toxicológica, investigação social e curso de formação.',
    cfsd: 'Curso de formação/estágio conforme cargo e edital PMAC 2023.',
    estagio: 'Conferir estatuto militar estadual e edital.',
    validade: 'Conferir edital e atos de homologação/prorrogação.',
    previsao: 'Concurso PMAC 2023 já publicado; acompanhar convocações e atos oficiais da SEAD/PMAC/FGV.',
    site: 'https://conhecimento.fgv.br/concursos/pmac23'
  },
  pcac: {
    edital: 'PCAC — concurso anunciado em 2026 para Delegado, Oficial Investigador de Polícia e Perito',
    salario: 'Edital pendente; o simulador usa as tabelas oficiais cadastradas para Delegado, Perito/Médico-Legista e carreiras operacionais.',
    vagas: '139 vagas anunciadas',
    cotas: 'A definir no edital',
    idade: 'A definir no edital',
    escolaridade: 'A definir no edital; cargos policiais civis normalmente exigem formação específica conforme carreira.',
    materias: 'A definir no edital; preparar base em Direito Penal, Processo Penal, Constitucional, Administrativo, Legislação Especial, Português e específicas do cargo.',
    banca: 'A definir',
    inscritos: 'Ainda não divulgado',
    etapas: 'A definir no edital; acompanhar SEAD/AC, PCAC e Diário Oficial do Acre.',
    cfsd: 'A definir no edital e normas da Academia de Polícia Civil.',
    estagio: 'Conferir estatuto e edital.',
    validade: 'A definir no edital.',
    previsao: 'Governo anunciou novo concurso PCAC em abril de 2026; edital e banca ainda devem ser acompanhados nos canais oficiais.',
    site: 'https://agencia.ac.gov.br/governadora-mailza-assis-empossa-novo-delegado-geral-e-anuncia-concurso-publico-da-policia-civil/'
  },
  ppac: {
    edital: 'IAPEN/PPAC — Edital nº 001/2023 SEAD/IAPEN — Agente de Polícia Penal',
    salario: 'Agente de Polícia Penal: R$ 4.366,60, 40h semanais, dedicação exclusiva e escala.',
    vagas: '329 vagas totais no edital, sendo 261 para Agente de Polícia Penal e as demais para cargos administrativos/superiores do IAPEN/AC',
    cotas: 'Conferir edital SEAD/IAPEN 001/2023',
    idade: 'Agente de Polícia Penal: entre 18 e 55 anos na inscrição, conforme edital; demais cargos exigem conferência específica.',
    escolaridade: 'Superior completo e CNH categoria B até o curso de formação para Agente de Polícia Penal.',
    materias: 'Língua Portuguesa, Raciocínio Lógico, Informática, Direito Constitucional, Administrativo, Penal, Processo Penal, Execução Penal, Direitos Humanos e legislação específica conforme edital.',
    banca: 'IBFC',
    inscritos: 'Conferir página oficial do concurso SEAD/IAPEN',
    etapas: 'Prova objetiva, prova discursiva, títulos, TAF, avaliação psicológica, avaliação médica, investigação social e curso de formação.',
    cfsd: 'Curso de formação com convocações e publicações pela SEAD/IAPEN.',
    estagio: 'Conferir LC estadual, edital e atos de posse.',
    validade: 'Edital prevê validade de 2 anos após a homologação do resultado final, prorrogável uma vez por igual período; acompanhar atos oficiais.',
    previsao: 'Concurso 2023 teve resultado/homologação em 2025 e nomeações posteriores; acompanhar novas convocações e eventual novo certame.',
    site: 'https://sead.ac.gov.br/gestao-governamental/editais-e-concursos/iapen-instituto-de-administracao-penitenciaria-do-acre/'
  },
  pmesp: {
    edital: "Soldado PM 2ª Classe (2025/2026) — edital PMES2502 em andamento",
    salario: "R$ 5.055,53 (inicial informado no edital)",
    vagas: "2.200 vagas",
    cotas: "20% negros e pardos / 5% PCD",
    idade: "17 a 30 anos, conforme edital, com exceções legais para integrantes da PMESP",
    escolaridade: "Ensino Médio completo, CNH categoria B ou superior e demais requisitos do edital",
    materias: "Língua Portuguesa, Matemática, Conhecimentos Gerais, Noções Básicas de Informática e Noções de Administração Pública.",
    banca: "Vunesp",
    inscritos: "Período de inscrições encerrado",
    etapas: "Prova objetiva, redação, exames de saúde, exame de aptidão física, avaliação psicológica, investigação social, análise de documentos e demais fases previstas no edital.",
    cfsd: "Curso de Formação de Soldados: formação policial-militar após aprovação nas fases do concurso.",
    estagio: "Estágio probatório de 3 anos.",
    validade: "2 anos prorrogáveis por igual período, conforme regras do edital.",
    previsao: "Não tratar como previsão: o concurso PMES2502 já está em andamento. Acompanhar resultados, convocações, TAF e demais publicações nos canais oficiais.",
    site: "https://concursos.policiamilitar.sp.gov.br"
  },
  pcsp: {
    edital: "Investigador de Polícia 3ª Classe e Escrivão de Polícia 3ª Classe (2023) — concursos em acompanhamento",
    salario: "R$ 5.879,68 (vencimentos iniciais informados nos editais)",
    vagas: "1.250 vagas para Investigador / 1.333 vagas para Escrivão",
    cotas: "20% negros e pardos / 5% PCD",
    idade: "18 anos ou mais, conforme edital e legislação aplicável",
    escolaridade: "Diploma de graduação em nível superior; CNH categoria B para Investigador e demais requisitos do edital",
    materias: "Língua Portuguesa, Noções de Direito, Criminologia, Raciocínio Lógico, Informática e demais disciplinas específicas previstas nos editais.",
    banca: "Vunesp",
    inscritos: "Acompanhar publicações oficiais da PCSP/Vunesp",
    etapas: "Prova objetiva, prova escrita/discursiva quando prevista, prova de aptidão física, comprovação de idoneidade, exames médicos, avaliação psicológica e demais fases do edital.",
    cfsd: "Curso de Formação Técnico-Profissional na Academia de Polícia (Acadepol), conforme convocação.",
    estagio: "Estágio probatório de 3 anos.",
    validade: "2 anos, conforme edital.",
    previsao: "Concursos de Investigador e Escrivão seguem em acompanhamento. Para novo edital, tratar apenas como possibilidade futura, sem confirmação oficial atual.",
    site: "https://www.policiacivil.sp.gov.br"
  },
  pmerj: {
    edital: "Soldado PMERJ — último concurso 2023/2024; novo concurso em tramitação",
    salario: "Último edital: remuneração de aluno-soldado durante o curso e remuneração após formação conforme tabela vigente do Estado",
    vagas: "Último edital: 2.500 vagas; novo concurso anunciado/tramitando, sem edital aberto",
    cotas: "Reserva de vagas conforme legislação estadual e regras do edital",
    idade: "Último edital: 18 a 30 anos completos",
    escolaridade: "Ensino Médio completo no último edital; requisitos do próximo certame ainda dependerão do edital",
    materias: "Último edital cobrou Língua Portuguesa, Matemática Básica, Direitos Humanos, Direito Administrativo e Legislação Aplicada à PMERJ.",
    banca: "Último edital: FGV; próxima banca ainda não definida oficialmente",
    inscritos: "Sem inscrições abertas no momento",
    etapas: "No último edital: prova objetiva, redação, TAF, avaliação psicológica, exames médicos e investigação social.",
    cfsd: "Curso de Formação de Soldados no CFAP, conforme convocação e regras do edital.",
    estagio: "Estágio probatório de 3 anos.",
    validade: "Conforme edital vigente/último edital.",
    previsao: "A PMERJ informou que não há inscrições abertas e que novo concurso está em tramitação entre o Governo do Estado e a SEPM. Aguardar publicação oficial no Diário Oficial.",
    site: "https://sepm.rj.gov.br"
  },
  pcerj: {
    edital: "Novo concurso PCERJ 2026 anunciado/autorizado — 414 vagas previstas",
    salario: "A definir no edital; último concurso de Inspetor/Investigador teve remuneração inicial na faixa de R$ 5.800 a R$ 6.300",
    vagas: "414 vagas previstas para Delegado, Perito Criminal, Perito Legista e Piloto Policial",
    cotas: "Reserva de vagas conforme legislação estadual e regras do edital",
    idade: "A definir no novo edital; último concurso exigia idade mínima de 18 anos",
    escolaridade: "A definir por cargo; tendência de nível superior para os cargos previstos",
    materias: "A definir no edital. Últimos concursos cobraram Língua Portuguesa, Direito Penal, Direito Processual Penal, Direito Administrativo, Direito Constitucional, Informática e conhecimentos específicos.",
    banca: "A definir",
    inscritos: "Ainda sem inscrições abertas para o novo concurso",
    etapas: "A definir no edital; últimos certames tiveram prova objetiva, discursiva, TAF, exames médicos, avaliação psicológica, investigação social e curso de formação.",
    cfsd: "Curso de Formação Profissional na Acadepol-RJ, conforme cargo e edital.",
    estagio: "Estágio probatório de 3 anos.",
    validade: "A definir no edital.",
    previsao: "Novo concurso anunciado para 2026, com 414 vagas previstas, mas ainda dependente de edital oficial com cargos, requisitos, banca, cronograma e remuneração.",
    site: "https://www.policiacivil.rj.gov.br"
  },
  pmmg: {
    edital: "Soldado PMMG (2024/2025) — CFSd 2025",
    salario: "R$ 4.360,83 (Soldado 2ª Classe, conforme edital do CFSd 2025)",
    vagas: "3.102 vagas",
    cotas: "Reserva de vagas conforme legislação aplicável e regras do edital",
    idade: "18 a 30 anos completos",
    escolaridade: "Nível superior completo, CNH categoria B e altura mínima de 1,60 m, conforme edital",
    materias: "Língua Portuguesa/Literatura, Noções de Direito e Direitos Humanos, Raciocínio Lógico-Matemático e Estatística, conforme edital.",
    banca: "CRS / PMMG (Centro de Recrutamento e Seleção)",
    inscritos: "Concurso com inscrições encerradas; acompanhamento pelo CRS/PMMG",
    etapas: "Prova de conhecimentos, avaliações psicológicas, exames de saúde e avaliação física militar.",
    cfsd: "Curso de Formação de Soldados para o ano de 2025, com realização nas unidades definidas pela PMMG.",
    estagio: "Estágio probatório de 3 anos.",
    validade: "Conforme edital do concurso.",
    previsao: "Último edital oficial localizado: CFSd 2025 com 3.102 vagas. Eventual novo edital 2026 deve ser tratado como previsão até publicação oficial.",
    site: "https://www.policiamilitar.mg.gov.br"
  },
  pcmg: {
    edital: "Investigador de Polícia (Edital PCMG nº 04/2024)",
    salario: "R$ 5.332,62 (vencimento inicial informado no edital)",
    vagas: "165 vagas para Investigador de Polícia",
    cotas: "Reserva de vagas conforme legislação aplicável e regras do edital",
    idade: "18 anos ou mais, conforme edital e legislação aplicável",
    escolaridade: "Nível superior completo, conforme edital",
    materias: "Língua Portuguesa, Noções de Direito, Direitos Humanos, Medicina Legal, Informática, Lei Orgânica da PCMG e demais conteúdos previstos no edital.",
    banca: "FGV",
    inscritos: "Acompanhar publicações oficiais da FGV/PCMG",
    etapas: "Prova objetiva, prova dissertativa quando prevista, avaliação psicológica, exames biomédicos e biofísicos, investigação social e curso de formação técnico-profissional.",
    cfsd: "Curso de Formação Técnico-Profissional na ACADEPOL-MG, conforme convocação.",
    estagio: "Estágio probatório de 3 anos.",
    validade: "Conforme edital.",
    previsao: "Concurso PCMG 2024 em acompanhamento. Sem novo edital confirmado para Investigador em 2026 até a última verificação.",
    site: "https://www.policiacivil.mg.gov.br"
  },
  pmba: {
    edital: "Soldado PMBA e CBMBA (2022) — último edital oficial localizado",
    salario: "R$ 4.012,11 (Soldo + GAP, conforme referência do último edital)",
    vagas: "2.500 vagas",
    cotas: "30% negros / 5% PCD",
    idade: "18 a 30 anos",
    escolaridade: "Ensino Médio completo",
    materias: "Língua Portuguesa, Raciocínio Lógico, História, Geografia, Atualidades, Informática e Noções de Direito.",
    banca: "FCC (Fundação Carlos Chagas)",
    inscritos: "Concurso encerrado",
    etapas: "Prova objetiva, prova discursiva/redação quando prevista, TAF, exames médicos, avaliação psicológica, investigação social e demais fases do edital.",
    cfsd: "Curso de Formação de Soldados, conforme convocação da PMBA/CBMBA.",
    estagio: "Estágio probatório de 3 anos.",
    validade: "Conforme edital.",
    previsao: "Não há novo edital oficial aberto localizado. Manter como último concurso oficial: 2022, com 2.500 vagas. Tratar qualquer previsão de 2026 como expectativa até publicação oficial.",
    site: "https://www.pm.ba.gov.br"
  },
  pcba: {
    edital: "Novo concurso PCBA 2026 anunciado — Delegado, Escrivão e Investigador",
    salario: "A definir no edital; último concurso de 2022 informava remuneração inicial de R$ 4.873,18",
    vagas: "Mais de 750 vagas anunciadas para Delegado, Escrivão e Investigador",
    cotas: "30% negros / 5% PCD, conforme legislação e regras do edital",
    idade: "A definir no edital; último concurso exigia idade mínima de 18 anos",
    escolaridade: "Nível superior, conforme cargo e edital",
    materias: "A definir no edital. Último concurso cobrou Língua Portuguesa, Raciocínio Lógico, Informática, Atualidades e Conhecimentos Específicos de Direito.",
    banca: "A definir oficialmente no edital",
    inscritos: "Ainda sem inscrições abertas",
    etapas: "A definir no edital; último certame teve prova objetiva, discursiva, TAF, avaliação psicológica, exames médicos, investigação social e curso de formação.",
    cfsd: "Curso de Formação na ACADEPOL-BA, conforme cargo e edital.",
    estagio: "Estágio probatório de 3 anos.",
    validade: "A definir no edital.",
    previsao: "Governo da Bahia anunciou novo concurso da Polícia Civil em 2026 com mais de 750 vagas para Delegado, Escrivão e Investigador. Aguardar edital oficial.",
    site: "https://www.policiacivil.ba.gov.br"
  },
  pmpr: {
    edital: "Soldado PMPR 2025 e Cadete PMPR 2025 — concursos oficiais em acompanhamento",
    salario: "Soldado 1ª Classe: R$ 6.101,87 + R$ 834,74 de auxílio-alimentação; Aluno-Soldado 3ª Classe: R$ 2.530,12 + auxílio; Cadete 1º ano: R$ 3.994,86 + auxílio; 2º Tenente: R$ 13.731,61 + auxílio.",
    vagas: "Soldado PMPR 2025: 2.000 vagas. Cadete PMPR 2025: acompanhar página oficial do certame.",
    cotas: "Reserva de vagas conforme legislação estadual e regras do edital.",
    idade: "Soldado: máximo de 30 anos, conforme página oficial de formas de ingresso. Cadete e demais quadros: conferir edital específico.",
    escolaridade: "Soldado: curso superior completo. Cadete CFO: regras do edital próprio. Saúde/Capelão: formação específica exigida.",
    materias: "Conforme edital e banca do certame. Para Soldado/Cadete, conferir conteúdo programático da página oficial e do IBFC.",
    banca: "IBFC para o certame de Soldado PMPR 2025 informado na página oficial.",
    inscritos: "Acompanhar convocações, resultados e publicações na página de concursos da PMPR.",
    etapas: "Prova objetiva, avaliações específicas previstas no edital, investigação social, exames médicos, avaliação psicológica, TAF e curso de formação, conforme cargo.",
    cfsd: "Curso de Formação de Praças para Soldado; CFO na Academia Policial Militar do Guatupê para Cadete.",
    estagio: "Estágio/progressão conforme estrutura da carreira e regras da Lei 22.187/2024.",
    validade: "Conforme edital e publicações oficiais.",
    previsao: "PMPR possui concursos recentes para Soldado e Cadete. Usar a página oficial de Concursos em Andamento para cronograma, resultados e convocações.",
    site: "https://www.pmpr.pr.gov.br/Pagina/Concursos-em-Andamento"
  },
  pcpr: {
    edital: "Novo concurso PCPR 2026 autorizado/comissão formada — Delegado, Agente de Polícia Judiciária e Papiloscopista",
    salario: "Agente/Papiloscopista: inicial de R$ 7.818,45. Delegado: inicial de R$ 24.247,12. Valores por subsídio conforme estrutura da LC 259/2023 e tabelas de 2026.",
    vagas: "A definir no novo edital. Último concurso PCPR ofertou 400 vagas: 300 para Investigador/Agente, 50 para Papiloscopista e 50 para Delegado.",
    cotas: "Reserva de vagas conforme legislação e regras do edital.",
    idade: "A definir no edital. Requisitos gerais costumam incluir idade mínima de 18 anos e demais condições legais.",
    escolaridade: "Agente de Polícia Judiciária e Papiloscopista: nível superior; Delegado: Bacharelado em Direito. CNH categoria B ou superior conforme cargo/edital.",
    materias: "A definir no edital. Últimos certames cobraram Língua Portuguesa, Informática, Raciocínio Lógico, Direito Constitucional, Administrativo, Penal, Processual Penal e conhecimentos específicos.",
    banca: "A definir oficialmente no edital.",
    inscritos: "Ainda sem inscrições abertas para o novo certame.",
    etapas: "A definir no edital; tradicionalmente envolve prova objetiva, prova discursiva/peças quando previstas, TAF, avaliação psicológica, investigação social, exames médicos e curso de formação.",
    cfsd: "Curso de Formação Técnico-Profissional pela Escola Superior de Polícia Civil/PCPR, conforme cargo e edital.",
    estagio: "Estágio probatório de 3 anos.",
    validade: "A definir no edital.",
    previsao: "Novo certame previsto para 2026; tratar informações de banca, vagas e cronograma como previsão até publicação do edital oficial.",
    site: "https://www.pcpr.pr.gov.br/Pagina/Concursos"
  },
  pmrs: {
    edital: "Brigada Militar RS — Soldado 1ª Classe e Oficialato 2025",
    salario: "Soldado: R$ 5.944,85 + auxílio-alimentação de R$ 400,00. Oficialato: durante o CSPM, bolsa de 50% da remuneração de Capitão; após o curso, Capitão com remuneração de R$ 21.513,44 + auxílio-alimentação de R$ 400,00.",
    vagas: "Soldado: 1.200 vagas. Oficialato: 120 vagas.",
    cotas: "Conforme editais: ampla concorrência e reservas para pessoas com deficiência, pessoas negras, trans e indígenas; conferir distribuição por cargo.",
    idade: "Soldado: idade máxima de 25 anos; Oficialato: idade máxima de 29 anos, com regra específica para militares estaduais do RS.",
    escolaridade: "Soldado: ensino médio completo e CNH B. Oficialato: curso superior em Direito, além dos demais requisitos do edital.",
    banca: "Soldado: FUNDATEC. Oficialato: IBADE.",
    inscritos: "Consultar banca/edital e atos posteriores.",
    materias: "Soldado: Língua Portuguesa, Legislação Específica, Conhecimentos Gerais, Matemática, Direitos Humanos e Cidadania e Informática. Oficialato: disciplinas jurídicas e institucionais conforme edital.",
    etapas: "Prova escrita/intelectual, exames de saúde, teste de aptidão física e avaliação psicológica. Oficialato também prevê etapas específicas como prova discursiva, prova oral e avaliação de títulos, conforme edital.",
    cfsd: "Soldado: Curso Básico de Formação Policial Militar (CBFPM). Oficialato: Curso Superior Policial Militar (CSPM), com bolsa de 50% da remuneração de Capitão durante o curso.",
    estagio: "Estágio/probatório e inclusão conforme estatuto e edital.",
    validade: "Soldado: 2 anos, prorrogável uma vez por igual período. Oficialato: conferir edital específico.",
    previsao: "Concursos 2025 publicados; acompanhar página oficial de concursos da Brigada Militar para novos atos, convocações e retificações.",
    site: "https://www.brigadamilitar.rs.gov.br/concursos-2025"
  },
  pcrs: {
    edital: "Polícia Civil RS — Editais 2025: Escrivão, Inspetor e Delegado",
    salario: "Escrivão/Inspetor: R$ 7.299,54. Delegado: R$ 23.334,43.",
    vagas: "Escrivão: 360 vagas. Inspetor: 360 vagas. Delegado: 30 vagas.",
    cotas: "Reserva para pessoas com deficiência, pessoas negras, trans e indígenas conforme editais.",
    idade: "Mínimo de 18 anos até a matrícula no Curso de Formação Profissional; demais requisitos conforme edital.",
    escolaridade: "Escrivão/Inspetor: nível superior completo e CNH B. Delegado: bacharelado em Direito e requisitos próprios do edital.",
    banca: "FUNDATEC",
    inscritos: "Consultar atos de homologação da FUNDATEC/ACADEPOL.",
    materias: "Conforme edital do cargo: prova de capacitação intelectual, redação/discursiva e disciplinas específicas da carreira policial.",
    etapas: "Prova de capacitação intelectual, teste de aptidão física, avaliação psicológica/psiquiátrica, exame de saúde, sindicância de vida pregressa e Curso de Formação. Delegado possui etapas próprias como prova discursiva, prova oral e títulos, conforme edital.",
    cfsd: "Curso de Formação Profissional pela ACADEPOL/RS.",
    estagio: "Estágio probatório conforme regime estatutário.",
    validade: "Conferir edital e atos posteriores.",
    previsao: "Editais 2025 publicados e acompanhados por atos no site oficial da Polícia Civil/RS.",
    site: "https://www.pc.rs.gov.br/concurso-publico-para-escrivao-e-inspetor-2025"
  },
  pmsc: {
    edital: "PMSC — concursos e processos seletivos oficiais da Polícia Militar de Santa Catarina",
    salario: "Carreira PMSC em regime de subsídio. Referência atual da tabela: Soldado PMSC R$ 8.505,00, Cabo R$ 9.720,00 e demais postos/graduações conforme LC 765/2020, LC 776/2021, LC 872/2025 e LC 880/2025.",
    vagas: "Conferir edital vigente na página oficial da PMSC. A instituição mantém páginas específicas para concursos de Oficiais, Soldados e processos seletivos temporários.",
    cotas: "Conferir edital específico; reservas e critérios dependem do concurso publicado.",
    idade: "Conferir edital vigente; requisitos de idade podem variar conforme cargo, quadro e concurso.",
    escolaridade: "Conferir edital vigente. Em regra, cargos de carreira exigem escolaridade compatível com Soldado, Oficial ou quadro específico.",
    banca: "Conferir edital vigente",
    inscritos: "Consultar atos oficiais da PMSC e da banca organizadora.",
    materias: "Conforme edital: disciplinas gerais, legislação, conhecimentos específicos e demais conteúdos previstos para o cargo.",
    etapas: "Prova objetiva, exames/avaliações, teste físico, investigação social, curso de formação e demais etapas conforme edital específico.",
    cfsd: "Curso de Formação de Praças ou Curso de Formação de Oficiais, conforme o cargo.",
    estagio: "Estágio probatório e regras de carreira conforme legislação estadual.",
    validade: "Conferir edital e atos posteriores.",
    previsao: "Acompanhar a página oficial de concursos da PMSC para novos editais, retificações e convocações.",
    site: "https://www.pm.sc.gov.br/concursos"
  },
  pcsc: {
    edital: "PCSC — Agente e Escrivão — editais 01/2025 e 02/2025",
    salario: "Agente: R$ 7.290,00 de salário-base + R$ 550,00 de vale-alimentação = R$ 7.840,00. Escrivão: R$ 9.720,00 de salário-base + R$ 550,00 de vale-alimentação = R$ 10.270,00, valores previstos para abril/2026.",
    vagas: "300 vagas: 200 para Agente de Polícia Civil e 100 para Escrivão de Polícia Civil, ambas de nível superior.",
    cotas: "Agente: 190 ampla concorrência e 10 PcD. Escrivão: 95 ampla concorrência e 5 PcD, conforme divulgação oficial.",
    idade: "Conferir edital. Exige cumprimento dos requisitos legais até a posse/matrícula conforme regra do certame.",
    escolaridade: "Nível superior completo para Agente e Escrivão, conforme editais 2025.",
    banca: "IDECAN",
    inscritos: "Consultar IDECAN e atos oficiais da PCSC.",
    materias: "Noções de Direito Penal, Processo Penal, Constitucional, Administrativo, Direitos Humanos, Legislação Institucional, TI, Segurança Cibernética, Crimes Digitais, Contabilidade, Português e Raciocínio Lógico-Matemático.",
    etapas: "Prova objetiva, prova de capacidade física, avaliação psicológica, investigação social, exame toxicológico de larga janela de detecção e avaliação de títulos.",
    cfsd: "Curso/formação conforme regras da ACADEPOL/PCSC e edital.",
    estagio: "Estágio probatório conforme regime estatutário estadual.",
    validade: "Conferir edital e atos posteriores.",
    previsao: "Editais 2025 publicados; acompanhar PCSC, DOE/SC e IDECAN para atos posteriores.",
    site: "https://pc.sc.gov.br/?p=35166"
  },
  pmes: {
    edital: "PMES — Curso de Formação de Oficiais 2024/2025 e concursos de Soldado conforme página oficial",
    salario: "CFO retificado: Aluno-Oficial 1º ano R$ 4.536,14, 2º ano R$ 5.410,85, 3º ano R$ 5.848,19; Aspirante a Oficial R$ 10.381,57. Tabela PM/CBM 12/2025: Soldado Ref. 1 R$ 5.741,46 e Ref. 15 R$ 7.575,15.",
    vagas: "CFO 2024 retificado: 37 ampla concorrência, 10 negros e 3 indígenas. Para Soldado e demais quadros, conferir edital vigente na página oficial da PMES.",
    cotas: "Reserva de vagas conforme edital, legislação estadual e regras específicas do certame.",
    idade: "Conferir edital vigente; requisitos podem variar por cargo, quadro, ingresso e legislação específica.",
    escolaridade: "CFO 2024: nível médio completo conforme edital; demais cargos conforme certame específico.",
    banca: "IDECAN no CFO 2024; demais certames conforme edital.",
    inscritos: "Consultar atos oficiais da PMES e da banca organizadora.",
    materias: "Conforme edital: conteúdos gerais, legislação, conhecimentos específicos, história/geografia do ES quando previstas, além das demais disciplinas do cargo.",
    etapas: "Prova objetiva, prova discursiva/redação quando prevista, TAF, avaliação psicológica, investigação social, exame de saúde, entrega de documentação e curso de formação, conforme edital.",
    cfsd: "Curso de Formação de Soldados ou Curso de Formação de Oficiais, conforme o cargo.",
    estagio: "Estágio/probatório e regras de carreira conforme legislação estadual e atos da corporação.",
    validade: "Conferir edital e publicações posteriores.",
    previsao: "Acompanhar a página oficial de concursos da PMES para novos editais, retificações e convocações.",
    site: "https://pm.es.gov.br/concursos"
  },
  pces: {
    edital: "PCES — Oficial Investigador de Polícia — Edital 2025",
    salario: "OIP: subsídio inicial de R$ 8.539,00 + R$ 800,00 de auxílio-alimentação, podendo chegar a aproximadamente R$ 17 mil no topo da carreira. Delegado, OIP e carreiras periciais possuem tabelas próprias por categoria/referência.",
    vagas: "1.052 vagas para Oficial Investigador de Polícia, conforme divulgação oficial da PCES.",
    cotas: "Conferir edital; reservas e regras específicas dependem do certame.",
    idade: "Divulgação oficial informa que não há limite de idade para o concurso OIP; demais cargos dependem do edital específico.",
    escolaridade: "OIP: curso superior de bacharelado e CNH categoria B. Delegado: bacharelado em Direito quando houver edital específico. Perícia oficial: requisitos próprios da PCIES/Perícia Oficial.",
    banca: "IBADE para o concurso OIP 2025.",
    inscritos: "Consultar PCES, IBADE e atos oficiais posteriores.",
    materias: "Conforme edital OIP 2025 e banca; conteúdos gerais, jurídicos, institucionais e específicos do cargo.",
    etapas: "Prova objetiva, exame de aptidão física, exame de saúde, exame psicotécnico, investigação criminal e social e curso de formação profissional pela Acadepol.",
    cfsd: "Curso de Formação Profissional pela Academia de Polícia Civil — Acadepol.",
    estagio: "Estágio probatório conforme regime estatutário e legislação da carreira.",
    validade: "Conferir edital e atos posteriores.",
    previsao: "Concurso OIP 2025 em andamento; acompanhar publicações da PCES e IBADE para cronograma, convocações e resultados.",
    site: "https://pc.es.gov.br/"
  },

  pmms: {
    edital: "PMMS — Soldado e Oficial — último ciclo SAD/SEJUSP/PMMS 2022 e acompanhamento de atos posteriores",
    salario: "Tabela militar MS 05/2025 cadastrada na remuneração: Soldado PMMS Nível I R$ 5.727,10; Cabo Nível I R$ 6.872,52; 3º Sargento Nível I R$ 8.247,02; Coronel Nível VII R$ 39.426,84. Linhas de curso/formação dependem do edital vigente.",
    vagas: "Último ciclo PMMS/2022: vagas para Soldado e Oficial; acompanhar novos editais, convocações e prorrogações no portal Concursos MS e PMMS.",
    cotas: "Reserva de vagas conforme edital e legislação estadual vigente.",
    idade: "Conferir edital; requisitos podem envolver idade, altura, CNH, aptidão física, escolaridade e investigação social.",
    escolaridade: "Conferir edital vigente; requisitos variam para Soldado, Oficial e demais quadros.",
    banca: "IDECAN no último ciclo PMMS/2022.",
    inscritos: "Sem edital novo aberto cadastrado nesta versão; acompanhar Concursos MS, PMMS e Diário Oficial/MS.",
    materias: "Conforme edital: Língua Portuguesa, Raciocínio Lógico, Noções de Direito, legislação/institucional, atualidades, conhecimentos específicos e demais disciplinas previstas.",
    etapas: "Prova objetiva, TAF, avaliação psicológica, exame de saúde, investigação social, entrega de documentos, curso de formação e demais fases do edital.",
    cfsd: "Curso de Formação de Soldados ou Curso de Formação de Oficiais, conforme cargo.",
    estagio: "Estágio/probatório e regras da carreira militar estadual conforme legislação e atos da corporação.",
    validade: "Conferir edital, atos de homologação, prorrogação e publicações no DOE/MS.",
    previsao: "Acompanhar PMMS, Concursos MS, SEJUSP/MS e Diário Oficial/MS para novos editais e convocações.",
    site: "https://www.pm.ms.gov.br/"
  },
  pcms: {
    edital: "PCMS — Agente de Polícia Judiciária — Edital SAD/SEJUSP/PCMS/APJ/2025",
    salario: "R$ 6.569,53 para Investigador de Polícia Judiciária e Escrivão de Polícia Judiciária, jornada de 40h, conforme divulgação oficial do concurso APJ/2025.",
    vagas: "400 vagas imediatas: 300 para Investigador de Polícia Judiciária e 100 para Escrivão de Polícia Judiciária.",
    cotas: "Vagas em ampla concorrência e reservas conforme edital, incluindo negros, indígenas e pessoas com deficiência.",
    idade: "Requisitos divulgados: 21 a 45 anos, nível superior, CNH categoria B ou superior e demais exigências do edital.",
    escolaridade: "Nível superior completo em qualquer área para APJ, com CNH B ou superior; demais carreiras exigem requisitos próprios.",
    banca: "Instituto Avalia.",
    inscritos: "Inscrições divulgadas de 16/07/2025 a 07/08/2025; prova objetiva prevista para 14/09/2025 em Campo Grande.",
    materias: "Conforme edital APJ/2025: conteúdos gerais, jurídicos, legislação, raciocínio lógico/informática quando previstos, conhecimentos institucionais e específicos.",
    etapas: "Prova objetiva, avaliação de títulos, investigação social, exames de saúde, avaliação psicológica, TAF e curso de formação, conforme edital.",
    cfsd: "Curso de Formação Profissional pela Acadepol/PCMS.",
    estagio: "Estágio probatório conforme LC MS 114/2005, alterações e regras estaduais aplicáveis.",
    validade: "Conferir edital, homologação, convocações e atos posteriores no DOE/MS e nos canais oficiais.",
    previsao: "Concurso APJ/2025 em andamento/convocações; acompanhar PCMS, Instituto Avalia, Acadepol e Diário Oficial/MS.",
    site: "https://www.pc.ms.gov.br/"
  },
  pmmt: {
    edital: "PMMT — Soldado e Oficial — editais nº 003/2022 e nº 004/2022-SEPLAG/SESP/MT; acompanhar novos atos e convocações",
    salario: "Planilha PMMT cadastrada: Aluno-Soldado R$ 3.750,58; Soldado de R$ 5.474,19 a R$ 7.501,13; Aluno-Oficial R$ 9.521,85; 2º Tenente de R$ 15.729,62 a R$ 15.869,72; Coronel de R$ 35.845,70 a R$ 35.985,85. Conferir reajustes posteriores.",
    vagas: "Último ciclo PMMT/2022: cadastro de reserva/vagas conforme edital; em 2026 houve convocação pública de novos profissionais de segurança, incluindo PMMT.",
    cotas: "Reserva de vagas conforme edital e legislação estadual vigente.",
    idade: "Conferir edital; requisitos podem envolver idade, altura, CNH, escolaridade, aptidão física e investigação social.",
    escolaridade: "Soldado e Oficial possuem requisitos próprios; conferir edital vigente da SEPLAG/SESP/MT.",
    banca: "UFMT no último ciclo PMMT/2022.",
    inscritos: "Sem edital novo aberto cadastrado nesta versão; acompanhar SEPLAG/MT, PMMT, SESP/MT e Diário Oficial/MT.",
    materias: "Conforme edital: Língua Portuguesa, Raciocínio Lógico, Noções de Direito, História e Geografia de Mato Grosso, legislação, atualidades e conhecimentos específicos quando previstos.",
    etapas: "Prova objetiva/discursiva quando prevista, TAF, avaliação psicológica, exame de saúde, investigação social, entrega de documentos, curso de formação e demais fases do edital.",
    cfsd: "Curso de Formação de Soldados ou Curso de Formação de Oficiais, conforme cargo.",
    estagio: "Estágio/probatório e regras da carreira militar estadual conforme legislação e atos da corporação.",
    validade: "Conferir edital, atos de homologação, prorrogação e publicações no DOE/MT.",
    previsao: "Acompanhar PMMT, SEPLAG/MT, SESP/MT, UFMT e Diário Oficial/MT para novos editais, convocações e nomeações.",
    site: "https://www.pm.mt.gov.br/"
  },
  pcmt: {
    edital: "PCMT — Polícia Judiciária Civil de Mato Grosso — último concurso 2022 para Escrivão e Investigador; acompanhar comissão/novo edital 2026",
    salario: "Tabela PCMT 2025 cadastrada: Escrivão de Polícia de R$ 7.023,44 no Nível 001/A a R$ 21.134,03 no Nível 010/E; Delegado de R$ 30.961,87 a R$ 42.471,66; Delegado Substituto R$ 27.865,69. Investigador depende de tabela própria/edital vigente.",
    vagas: "Último edital: cadastro de reserva para Escrivão e Investigador; em 2026 houve convocação pública de novos profissionais de segurança, incluindo Polícia Civil.",
    cotas: "Reserva de vagas conforme edital e legislação estadual vigente.",
    idade: "Conferir edital; requisitos podem envolver nível superior, CNH, aptidão física, investigação social e demais condições legais.",
    escolaridade: "Escrivão e Investigador: conferir edital vigente; Delegado exige Bacharelado em Direito e demais requisitos específicos.",
    banca: "UFMT no último concurso PCMT.",
    inscritos: "Sem edital novo aberto cadastrado nesta versão; acompanhar PJC-MT, SEPLAG/MT, SESP/MT e Diário Oficial/MT.",
    materias: "Conforme edital: Língua Portuguesa, Informática, Raciocínio Lógico, Direito Constitucional, Administrativo, Penal, Processual Penal, legislação especial e conhecimentos específicos.",
    etapas: "Prova objetiva, prova discursiva quando prevista, TAF, avaliação psicológica, exame médico, investigação social, curso de formação e demais fases do edital.",
    cfsd: "Curso de Formação pela Academia da Polícia Judiciária Civil de Mato Grosso.",
    estagio: "Estágio probatório e evolução funcional conforme carreira e legislação estadual.",
    validade: "Conferir edital, homologação, prorrogação, convocações e atos posteriores no DOE/MT.",
    previsao: "Acompanhar PJC-MT, SEPLAG/MT, SESP/MT, UFMT e Diário Oficial/MT para novo edital e convocações.",
    site: "https://www.pjc.mt.gov.br/"
  }

};


/* ============================================================ */
/* === ESTADO E HELPERS ======================================= */
/* ============================================================ */
let currTabela = CARGOS_PM;
let currInst = 'pmesp';
let headerModoInicialPortal = true;
const HEADER_BRASIL_FLAG = 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Brazil.svg';
const INSTITUICOES_VALIDAS = ['pmesp','pcsp','ppsp','pmac','pcac','ppac','pmerj','pcerj','pprj','pmmg','pcmg','ppmg','pmba','pcba','ppba','pmpr','pcpr','pppr','pmrs','pcrs','pprs','pmsc','pcsc','ppsc','pmes','pces','ppes','pmms','pcms','ppms','pmmt','pcmt','ppmt'];
