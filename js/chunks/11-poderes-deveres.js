/* ============================================================
   PODERES E DEVERES — aba independente da instituição principal
   ============================================================ */
const PODERES_DEVERES_DADOS_EM_BREVE = "Dados em breve";
const PODERES_DEVERES_BASE = {
  "pf": {
    "rotulo": "Polícia Federal",
    "categoria": "Federal",
    "essencia": "Polícia judiciária da União e órgão federal especializado: investiga crimes federais, exerce funções de fronteira, imigração, polícia marítima e aeroportuária, e executa fiscalizações administrativas federais atribuídas por lei.",
    "abrangencia": "Atuação nacional, vinculada a bens, serviços, interesses e competências da União; crimes de repercussão interestadual ou internacional previstos em lei; fronteiras, portos, aeroportos, migração, passaportes, segurança privada, armas e outras atribuições federais específicas.",
    "naoConfundir": "Não é polícia ostensiva geral da União nem substitui automaticamente a Polícia Civil em todo crime comum. A competência federal precisa decorrer da Constituição, de lei ou de conexão concreta com interesse federal.",
    "pontoAtencao": "Na prática, a pergunta-chave é: há interesse, bem, serviço, autarquia, empresa pública federal, fronteira, repercussão interestadual/internacional legalmente prevista ou atribuição administrativa federal específica? Se não houver, a competência tende a ser estadual.",
    "deveres": [
      "Apurar infrações penais contra a ordem política e social ou em detrimento de bens, serviços e interesses da União, de suas autarquias e de empresas públicas federais.",
      "Exercer, com exclusividade constitucional, as funções de polícia judiciária da União, instaurando e conduzindo procedimentos investigatórios federais.",
      "Prevenir e reprimir tráfico ilícito de drogas, contrabando, descaminho e outros ilícitos federais, sem prejuízo da atuação fazendária e de órgãos especializados.",
      "Atuar como polícia marítima, aeroportuária e de fronteiras, inclusive em controle migratório, passaportes e atividades correlatas previstas em normas federais.",
      "Assumir investigações de repercussão interestadual ou internacional quando houver previsão legal e necessidade de repressão uniforme.",
      "Fiscalizar atividades administrativas federais atribuídas à PF, como segurança privada, controle de armas, produtos controlados sob sua atribuição e documentação de viagem, conforme legislação específica."
    ],
    "poderes": [
      "Instaurar inquérito policial federal, realizar diligências, ouvir pessoas, requisitar perícias e representar por medidas cautelares quando a lei exigir decisão judicial.",
      "Cumprir mandados judiciais, efetuar prisão em flagrante e executar operações de polícia judiciária da União.",
      "Representar por busca e apreensão, prisão cautelar, interceptação, quebra de sigilo e outras medidas invasivas, sempre com controle judicial quando exigido.",
      "Exercer poder de polícia administrativa federal em áreas como segurança privada, passaportes, migração, armas e atividades definidas em lei.",
      "Cooperar com órgãos estaduais, federais e internacionais mediante instrumentos formais, tratados, acordos e canais oficiais."
    ],
    "limites": [
      "Não há competência federal por simples gravidade do fato; é preciso enquadramento constitucional ou legal.",
      "Não exerce policiamento ostensivo geral como missão ordinária, embora possa realizar ações ostensivas especializadas vinculadas às suas atribuições.",
      "Busca domiciliar, interceptação, quebra de sigilo e medidas equivalentes dependem de autorização judicial quando a Constituição ou a lei exigirem.",
      "A atuação internacional depende de cooperação jurídica/policial formal, soberania do Estado estrangeiro e regras de tratados ou acordos aplicáveis."
    ],
    "leis": [
      {
        "nome": "Constituição Federal, art. 144, § 1º",
        "resumo": "Define a Polícia Federal como órgão permanente, organizado e mantido pela União, com funções próprias de polícia judiciária da União e atribuições federais específicas.",
        "url": "https://portal.stf.jus.br/constituicao-supremo/artigo.asp?abrirArtigo=144&abrirBase=CF"
      },
      {
        "nome": "Lei nº 10.446/2002",
        "resumo": "Permite atuação da PF em infrações penais de repercussão interestadual ou internacional que exijam repressão uniforme, nas hipóteses legais.",
        "url": "https://www.planalto.gov.br/ccivil_03/leis/2002/l10446.htm"
      },
      {
        "nome": "Lei nº 9.266/1996",
        "resumo": "Reorganiza classes da carreira policial federal e estrutura aspectos dos cargos policiais federais.",
        "url": "https://www.planalto.gov.br/ccivil_03/LEIS/l9266.htm"
      },
      {
        "nome": "Código de Processo Penal",
        "resumo": "Base processual para inquérito policial, prisão em flagrante, medidas cautelares e atos investigatórios.",
        "url": "https://www.planalto.gov.br/ccivil_03/decreto-lei/del3689.htm"
      },
      {
        "nome": "Lei nº 7.102/1983",
        "resumo": "Base legal relevante para fiscalização federal de segurança privada, conforme atribuições da Polícia Federal.",
        "url": "https://www.planalto.gov.br/ccivil_03/leis/l7102.htm"
      }
    ],
    "entendimentos": [
      {
        "titulo": "Competência federal exige vínculo constitucional ou legal com a União",
        "data": "Base constitucional permanente",
        "status": "Fonte oficial de conferência",
        "resumo": "A leitura segura da atuação da PF começa pelo art. 144: polícia judiciária da União, infrações contra interesses federais e atribuições expressas.",
        "fonte": "STF — Constituição anotada, art. 144",
        "url": "https://portal.stf.jus.br/constituicao-supremo/artigo.asp?abrirArtigo=144&abrirBase=CF"
      },
      {
        "titulo": "Repercussão interestadual ou internacional não é cláusula aberta",
        "data": "Lei nº 10.446/2002",
        "status": "Critério de aplicação",
        "resumo": "A federalização operacional pela PF depende das hipóteses legais e da necessidade de repressão uniforme; não basta o caso ser notório ou grave.",
        "fonte": "Planalto — Lei nº 10.446/2002",
        "url": "https://www.planalto.gov.br/ccivil_03/leis/2002/l10446.htm"
      }
    ],
    "local": "Competência federal; não depende de lei estadual ou municipal para sua função central.",
    "atualizacao": "Revisado e ampliado em 02/05/2026"
  },
  "prf": {
    "rotulo": "Polícia Rodoviária Federal",
    "categoria": "Federal",
    "essencia": "Órgão federal de patrulhamento ostensivo das rodovias e estradas federais, com foco em segurança viária, fiscalização de trânsito, prevenção de acidentes e repressão imediata a ilícitos no ambiente rodoviário federal.",
    "abrangencia": "Atuação nacional nas rodovias e estradas federais, incluindo fiscalização de trânsito, atendimento a acidentes, escolta, operações de segurança viária, combate a crimes em trânsito e cooperação em operações integradas quando houver pertinência legal e operacional.",
    "naoConfundir": "A PRF não é polícia judiciária federal. Ela pode prender em flagrante e lavrar TCO em hipóteses admitidas, mas investigação criminal ampla e inquérito federal continuam vinculados à Polícia Federal.",
    "pontoAtencao": "O limite prático é territorial e funcional: rodovia/estrada federal, trânsito, segurança viária e ocorrência encontrada no patrulhamento. Fora desse eixo, a atuação precisa de base normativa ou operação integrada formal.",
    "deveres": [
      "Realizar patrulhamento ostensivo das rodovias e estradas federais, prevenindo acidentes, crimes e situações de risco.",
      "Cumprir e fazer cumprir a legislação de trânsito no âmbito federal, com fiscalização, autuação e medidas administrativas cabíveis.",
      "Atender acidentes, preservar locais de ocorrência, orientar usuários e apoiar a fluidez e segurança do tráfego.",
      "Reprimir ilícitos encontrados no patrulhamento rodoviário, como tráfico de drogas, contrabando, descaminho, receptação, roubo de cargas e crimes ambientais em trânsito.",
      "Apoiar operações integradas de segurança pública quando houver competência, ordem de serviço, convênio ou ato formal adequado."
    ],
    "poderes": [
      "Fiscalizar veículos, condutores e cargas, lavrar autos de infração, aplicar medidas administrativas de trânsito e acionar remoção, retenção ou recolhimento quando previsto em lei.",
      "Realizar abordagem policial, busca pessoal/veicular quando houver fundada suspeita ou situação objetiva de fiscalização, e prender em flagrante.",
      "Lavrar termo circunstanciado em infrações de menor potencial ofensivo nas hipóteses admitidas pelo STF e pelas normas aplicáveis.",
      "Executar operações ostensivas, escoltas, controle de tráfego, interdições e apoio emergencial no âmbito da malha federal.",
      "Compartilhar informações e atuar com PF, polícias estaduais, Receita, órgãos ambientais e demais instituições em ações integradas."
    ],
    "limites": [
      "A atribuição constitucional central é patrulhamento ostensivo de rodovias federais; investigação criminal ampla não é sua função ordinária.",
      "A lavratura de TCO não transforma a PRF em polícia judiciária nem autoriza condução de inquérito policial.",
      "Busca, retenção, apreensão e interdição precisam de motivação, previsão legal e proporcionalidade.",
      "Atuação fora de rodovias federais deve ser excepcional, vinculada a base legal, cooperação formal, continuidade da ocorrência ou situação de flagrante."
    ],
    "leis": [
      {
        "nome": "Constituição Federal, art. 144, § 2º",
        "resumo": "Define a PRF como órgão permanente, organizado e mantido pela União, destinado ao patrulhamento ostensivo das rodovias federais.",
        "url": "https://portal.stf.jus.br/constituicao-supremo/artigo.asp?abrirArtigo=144&abrirBase=CF"
      },
      {
        "nome": "Decreto nº 1.655/1995",
        "resumo": "Define competências da Polícia Rodoviária Federal, incluindo patrulhamento, fiscalização, segurança viária e colaboração operacional.",
        "url": "https://www.planalto.gov.br/ccivil_03/decreto/d1655.htm"
      },
      {
        "nome": "Lei nº 9.503/1997 — Código de Trânsito Brasileiro",
        "resumo": "Base da fiscalização de trânsito, autuações e medidas administrativas aplicáveis nas rodovias e estradas federais.",
        "url": "https://www.planalto.gov.br/ccivil_03/leis/l9503compilado.htm"
      },
      {
        "nome": "Lei nº 9.654/1998",
        "resumo": "Cria e estrutura a carreira de Policial Rodoviário Federal.",
        "url": "https://www.planalto.gov.br/ccivil_03/Leis/l9654.htm"
      },
      {
        "nome": "Lei nº 9.099/1995",
        "resumo": "Disciplina os juizados especiais criminais e o termo circunstanciado para infrações de menor potencial ofensivo.",
        "url": "https://www.planalto.gov.br/ccivil_03/leis/l9099.htm"
      }
    ],
    "entendimentos": [
      {
        "titulo": "PRF pode lavrar termo circunstanciado de ocorrência",
        "data": "STF, 2023",
        "status": "Entendimento oficial localizado",
        "resumo": "O STF admitiu que a lavratura de TCO pela PRF não configura investigação criminal nem usurpação da polícia judiciária, desde que respeitadas as hipóteses legais.",
        "fonte": "STF — notícia institucional sobre TCO pela PRF",
        "url": "https://portal.stf.jus.br/noticias/verNoticiaDetalhe.asp?idConteudo=503028&ori=1"
      },
      {
        "titulo": "TCO tem natureza distinta de inquérito policial",
        "data": "STF, Informativo 1083",
        "status": "Ponto de atenção",
        "resumo": "A distinção entre TCO e investigação formal é essencial para evitar leitura exagerada dos poderes da PRF.",
        "fonte": "STF — Informativo 1083",
        "url": "https://www.stf.jus.br/arquivo/informativo/documento/informativo1083.htm"
      }
    ],
    "local": "Competência federal vinculada às rodovias e estradas federais.",
    "atualizacao": "Revisado e ampliado em 02/05/2026"
  },
  "pm": {
    "rotulo": "Polícia Militar",
    "categoria": "Estadual/Distrital",
    "essencia": "Força estadual/distrital de polícia ostensiva e preservação da ordem pública. Sua missão principal é prevenir, conter e responder imediatamente a fatos que afetem a segurança coletiva.",
    "abrangencia": "Atuação no território do Estado ou do Distrito Federal, por meio de policiamento ostensivo fardado, radiopatrulhamento, policiamento comunitário, policiamento de trânsito quando previsto, controle de distúrbios, operações de preservação da ordem pública e atendimento emergencial.",
    "naoConfundir": "A PM não substitui a Polícia Civil na investigação criminal comum. Ela atua ostensivamente, prende em flagrante e preserva a ordem; a apuração formal de crimes comuns, como regra, segue para a polícia judiciária.",
    "pontoAtencao": "O ponto mais sensível é a abordagem: deve haver contexto objetivo, fundada suspeita, legalidade, proporcionalidade e registro adequado. Poder ostensivo forte exige controle forte.",
    "deveres": [
      "Realizar policiamento ostensivo preventivo, com presença fardada, patrulhamento e ações de dissuasão de delitos.",
      "Preservar a ordem pública, atuando em ocorrências, tumultos, crises, eventos, emergências e situações de risco coletivo.",
      "Atender chamadas emergenciais, proteger vítimas, preservar locais de crime e encaminhar ocorrências à autoridade competente.",
      "Prender em flagrante delito e adotar providências imediatas para cessar agressão, crime, ameaça ou perturbação da ordem.",
      "Executar policiamento de trânsito, ambiental, rodoviário estadual, escolar ou especializado quando previsto na estrutura local.",
      "Atuar com legalidade, hierarquia, disciplina, direitos humanos, uso diferenciado/progressivo da força e prestação de contas."
    ],
    "poderes": [
      "Realizar abordagem, busca pessoal e veicular quando houver fundada suspeita ou contexto operacional legítimo.",
      "Efetuar prisão em flagrante, conduzir envolvidos e apresentar ocorrência à autoridade de polícia judiciária ou órgão competente.",
      "Empregar força, algemas e instrumentos de menor potencial ofensivo quando necessário, proporcional e justificado.",
      "Lavrar TCO em unidades federativas e hipóteses admitidas por norma local e entendimento do STF, sem transformar a PM em polícia judiciária.",
      "Realizar operações ostensivas, barreiras, bloqueios, patrulhamento tático e policiamento especializado dentro da competência estadual/distrital."
    ],
    "limites": [
      "Não conduz inquérito policial comum nem exerce investigação criminal típica da Polícia Civil, salvo polícia judiciária militar e hipóteses legalmente autorizadas.",
      "Busca pessoal não pode ser genérica, discriminatória ou baseada apenas em intuição; exige elementos objetivos do caso concreto.",
      "Uso da força deve observar necessidade, proporcionalidade, legalidade, técnica e registro posterior.",
      "Atribuições administrativas específicas dependem de lei estadual/distrital, regulamento, convênio ou ordem legal competente."
    ],
    "leis": [
      {
        "nome": "Constituição Federal, art. 144, § 5º",
        "resumo": "Atribui às Polícias Militares a polícia ostensiva e a preservação da ordem pública.",
        "url": "https://portal.stf.jus.br/constituicao-supremo/artigo.asp?abrirArtigo=144&abrirBase=CF"
      },
      {
        "nome": "Lei nº 14.751/2023",
        "resumo": "Institui a Lei Orgânica Nacional das Polícias Militares e dos Corpos de Bombeiros Militares.",
        "url": "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14751.htm"
      },
      {
        "nome": "Decreto-Lei nº 667/1969",
        "resumo": "Norma histórica de organização das Polícias Militares e Corpos de Bombeiros Militares, aplicada no que permanecer compatível com a legislação posterior.",
        "url": "https://www.planalto.gov.br/ccivil_03/decreto-lei/del0667.htm"
      },
      {
        "nome": "Lei nº 9.099/1995",
        "resumo": "Base legal do termo circunstanciado para infrações de menor potencial ofensivo, conforme aplicação definida por normas e entendimentos locais.",
        "url": "https://www.planalto.gov.br/ccivil_03/leis/l9099.htm"
      },
      {
        "nome": "Código de Processo Penal",
        "resumo": "Base geral para prisão em flagrante, preservação da prova e encaminhamento à autoridade competente.",
        "url": "https://www.planalto.gov.br/ccivil_03/decreto-lei/del3689.htm"
      }
    ],
    "entendimentos": [
      {
        "titulo": "Possibilidade de lavratura de TCO por Polícia Militar",
        "data": "STF, 2022",
        "status": "Entendimento oficial localizado",
        "resumo": "O STF manteve a possibilidade de PM lavrar termo circunstanciado, distinguindo TCO de inquérito policial. A aplicação depende da norma local e do caso concreto.",
        "fonte": "STF — PM-MG e termo circunstanciado",
        "url": "https://noticias.stf.jus.br/postsnoticias/supremo-mantem-possibilidade-de-pm-mg-lavrar-termo-circunstanciado/"
      },
      {
        "titulo": "Atribuição central permanece ostensiva",
        "data": "Base constitucional permanente",
        "status": "Fonte oficial de conferência",
        "resumo": "O núcleo constitucional da Polícia Militar continua sendo polícia ostensiva e preservação da ordem pública.",
        "fonte": "STF — Constituição anotada, art. 144",
        "url": "https://portal.stf.jus.br/constituicao-supremo/artigo.asp?abrirArtigo=144&abrirBase=CF"
      }
    ],
    "local": "Varia conforme lei estadual ou distrital, regulamentos da corporação e normas operacionais locais.",
    "atualizacao": "Revisado e ampliado em 02/05/2026"
  },
  "bm": {
    "rotulo": "Corpo de Bombeiros Militar",
    "categoria": "Estadual/Distrital",
    "essencia": "Instituição militar estadual/distrital voltada à proteção da vida, do patrimônio e do meio ambiente, com defesa civil, prevenção e combate a incêndios, busca, salvamento, resgate e fiscalização técnica quando prevista em lei local.",
    "abrangencia": "Atuação no território da unidade federativa, em incêndios, salvamentos, emergências pré-hospitalares onde houver atribuição, desastres, defesa civil, perícias/relatórios técnicos de incêndio quando previstos, vistorias e segurança contra incêndio e pânico conforme legislação estadual ou distrital.",
    "naoConfundir": "O Corpo de Bombeiros Militar não é órgão de policiamento ostensivo geral nem polícia judiciária. Seu poder restritivo costuma aparecer em emergência, defesa civil e fiscalização técnica de segurança contra incêndio, sempre conforme lei local.",
    "pontoAtencao": "A parte mais variável é a fiscalização: AVCB/CLCB, vistoria, interdição, multa, exigências técnicas e licenças dependem da lei estadual/distrital e das instruções técnicas da corporação.",
    "deveres": [
      "Executar atividades de defesa civil, prevenção, preparação, resposta e apoio à recuperação em desastres e calamidades.",
      "Prevenir e combater incêndios urbanos, florestais, industriais e especiais, conforme estrutura e normas locais.",
      "Realizar busca, salvamento, resgate e atendimento a emergências com prioridade absoluta à proteção da vida.",
      "Fiscalizar segurança contra incêndio e pânico, analisar projetos, vistoriar edificações e emitir certificados quando a legislação local atribuir essa competência.",
      "Atuar em emergências ambientais, produtos perigosos, desabamentos, enchentes, afogamentos, acidentes e eventos críticos.",
      "Orientar a população, promover educação preventiva e apoiar planos de contingência e evacuação."
    ],
    "poderes": [
      "Ingressar e atuar em áreas de risco em situação emergencial para salvar vidas, controlar danos e remover pessoas expostas a perigo iminente.",
      "Realizar vistorias, exigir adequações, emitir autos, relatórios, licenças, certificados ou pareceres técnicos conforme lei local.",
      "Interditar, embargar, restringir uso ou recomendar evacuação quando houver risco grave e previsão normativa, observando motivação e devido processo quando cabível.",
      "Coordenar ou integrar resposta a desastres com defesa civil, saúde, polícia, órgãos ambientais, concessionárias e autoridades municipais.",
      "Aplicar medidas administrativas de segurança contra incêndio e pânico quando houver competência legal expressa."
    ],
    "limites": [
      "Fiscalização, multa, interdição e emissão de certificados dependem de lei estadual/distrital e regulamentos técnicos locais.",
      "Atos de restrição fora da emergência devem ser motivados, proporcionais e sujeitos a recurso ou revisão administrativa quando a norma prever.",
      "Bombeiros civis, voluntários ou brigadas privadas podem complementar prevenção e resposta, mas não substituem competências públicas reservadas ao CBM.",
      "O CBM não conduz investigação criminal comum; eventual apuração técnica de incêndio não se confunde com inquérito policial."
    ],
    "leis": [
      {
        "nome": "Constituição Federal, art. 144, § 5º",
        "resumo": "Atribui aos Corpos de Bombeiros Militares, além das atribuições definidas em lei, a execução de atividades de defesa civil.",
        "url": "https://portal.stf.jus.br/constituicao-supremo/artigo.asp?abrirArtigo=144&abrirBase=CF"
      },
      {
        "nome": "Lei nº 14.751/2023",
        "resumo": "Institui normas gerais para Polícias Militares e Corpos de Bombeiros Militares dos Estados, do Distrito Federal e dos Territórios.",
        "url": "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14751.htm"
      },
      {
        "nome": "Decreto-Lei nº 667/1969",
        "resumo": "Norma histórica de organização das PMs e CBMs, aplicável no que permanecer compatível com a ordem constitucional e leis posteriores.",
        "url": "https://www.planalto.gov.br/ccivil_03/decreto-lei/del0667.htm"
      },
      {
        "nome": "Lei nº 12.608/2012 — Política Nacional de Proteção e Defesa Civil",
        "resumo": "Base nacional da proteção e defesa civil, relevante para atuação integrada em desastres.",
        "url": "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12608.htm"
      }
    ],
    "entendimentos": [
      {
        "titulo": "Competência pública dos bombeiros militares e limites a estruturas voluntárias/privadas",
        "data": "STF, Informativo 1171",
        "status": "Entendimento oficial localizado",
        "resumo": "O STF analisou normas sobre bombeiros voluntários e reforçou que atividades de defesa civil e competências constitucionais dos CBMs devem ser respeitadas.",
        "fonte": "STF — Informativo 1171",
        "url": "https://www.stf.jus.br/arquivo/informativo/documento/informativo1171.htm"
      },
      {
        "titulo": "Defesa civil é núcleo constitucional dos CBMs",
        "data": "Base constitucional permanente",
        "status": "Fonte oficial de conferência",
        "resumo": "A Constituição expressamente vincula os Corpos de Bombeiros Militares à execução de atividades de defesa civil, além das atribuições definidas em lei.",
        "fonte": "STF — Constituição anotada, art. 144",
        "url": "https://portal.stf.jus.br/constituicao-supremo/artigo.asp?abrirArtigo=144&abrirBase=CF"
      }
    ],
    "local": "Varia conforme lei estadual ou distrital de segurança contra incêndio, defesa civil e organização do CBM.",
    "atualizacao": "Revisado e ampliado em 02/05/2026"
  },
  "pc": {
    "rotulo": "Polícia Civil",
    "categoria": "Estadual/Distrital",
    "essencia": "Polícia judiciária dos Estados e do Distrito Federal: apura infrações penais comuns, formaliza a investigação e encaminha elementos ao Ministério Público e ao Poder Judiciário.",
    "abrangencia": "Atuação no território estadual ou distrital, em delegacias territoriais e especializadas, com registro de ocorrências, investigação, inquérito policial, cumprimento de mandados, identificação, inteligência policial, atendimento a vítimas e articulação com perícia oficial.",
    "naoConfundir": "A Polícia Civil não faz, como missão principal, policiamento ostensivo preventivo fardado. Também não apura crimes militares, que seguem regras e órgãos próprios.",
    "pontoAtencao": "A PC tem poder investigativo forte, mas atos invasivos dependem de controle judicial quando exigido. O inquérito não é processo: é procedimento administrativo preparatório da ação penal.",
    "deveres": [
      "Apurar infrações penais de competência estadual ou distrital, exceto as militares.",
      "Exercer funções de polícia judiciária, instaurando e conduzindo inquéritos e outros procedimentos previstos em lei.",
      "Registrar ocorrências, atender vítimas, requisitar exames periciais, colher depoimentos e preservar elementos de prova.",
      "Cumprir mandados judiciais, localizar autores, recuperar bens e produzir relatórios investigativos.",
      "Atuar por unidades especializadas em crimes contra a vida, patrimônio, vulneráveis, entorpecentes, cibernéticos, corrupção, meio ambiente e outras áreas conforme organização local.",
      "Garantir legalidade, cadeia de custódia, proteção de vítimas/testemunhas e respeito aos direitos fundamentais durante a investigação."
    ],
    "poderes": [
      "Instaurar inquérito policial e procedimentos investigativos, ouvir pessoas, realizar diligências e requisitar perícias.",
      "Representar por prisão temporária/preventiva, busca e apreensão, interceptação, quebras de sigilo e outras medidas cautelares perante o Judiciário.",
      "Cumprir mandados, efetuar prisão em flagrante, proceder a reconhecimento, apreensão de objetos e formalização de autos.",
      "Coordenar a investigação criminal estadual, sem prejuízo do controle externo do Ministério Público e do controle judicial de medidas restritivas.",
      "Gerir unidades de polícia judiciária, delegacias especializadas e sistemas de registro/informação conforme lei orgânica e normas estaduais."
    ],
    "limites": [
      "Não apura crimes militares, salvo hipóteses de conexão ou atribuição específica definidas pela legislação e pela autoridade competente.",
      "Não substitui o Ministério Público na titularidade da ação penal pública.",
      "Medidas que invadem domicílio, sigilo, comunicações ou liberdade dependem de base legal e autorização judicial quando exigida.",
      "A investigação deve respeitar contraditório diferido quando aplicável, cadeia de custódia, controle externo e direitos de investigados e vítimas."
    ],
    "leis": [
      {
        "nome": "Constituição Federal, art. 144, § 4º",
        "resumo": "Atribui às Polícias Civis funções de polícia judiciária e apuração de infrações penais, exceto as militares.",
        "url": "https://portal.stf.jus.br/constituicao-supremo/artigo.asp?abrirArtigo=144&abrirBase=CF"
      },
      {
        "nome": "Lei nº 14.735/2023",
        "resumo": "Institui a Lei Orgânica Nacional das Polícias Civis e normas gerais de funcionamento.",
        "url": "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/L14735.htm"
      },
      {
        "nome": "Lei nº 12.830/2013",
        "resumo": "Dispõe sobre a investigação criminal conduzida pelo delegado de polícia.",
        "url": "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2013/lei/l12830.htm"
      },
      {
        "nome": "Código de Processo Penal",
        "resumo": "Base processual de inquérito, flagrante, provas, medidas cautelares e atos de polícia judiciária.",
        "url": "https://www.planalto.gov.br/ccivil_03/decreto-lei/del3689.htm"
      },
      {
        "nome": "Lei nº 13.964/2019 — Pacote Anticrime",
        "resumo": "Alterou regras processuais e reforçou temas como cadeia de custódia, medidas cautelares e persecução penal.",
        "url": "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2019/lei/l13964.htm"
      }
    ],
    "entendimentos": [
      {
        "titulo": "Função constitucional de polícia judiciária e apuração de infrações penais",
        "data": "STF, Informativo 1160, 2024",
        "status": "Entendimento oficial localizado",
        "resumo": "O STF reafirmou que o texto constitucional atribui às Polícias Civis as funções de polícia judiciária e apuração de infrações penais, exceto as militares.",
        "fonte": "STF — Informativo 1160",
        "url": "https://www.stf.jus.br/arquivo/informativo/documento/informativo1160.htm"
      },
      {
        "titulo": "Subordinação institucional e desenho constitucional",
        "data": "STF, jurisprudência constitucional",
        "status": "Ponto de atenção",
        "resumo": "A autonomia administrativa da Polícia Civil encontra limites no modelo constitucional estadual, inclusive na chefia do Executivo e no controle externo da atividade policial.",
        "fonte": "STF — Constituição anotada, art. 144",
        "url": "https://portal.stf.jus.br/constituicao-supremo/artigo.asp?abrirArtigo=144&abrirBase=CF"
      }
    ],
    "local": "Varia conforme lei orgânica estadual/distrital, estrutura de delegacias e normas da unidade federativa.",
    "atualizacao": "Revisado e ampliado em 02/05/2026"
  },
  "pp": {
    "rotulo": "Polícia Penal",
    "categoria": "Federal/Estadual/Distrital, conforme o ente",
    "essencia": "Órgão de segurança pública voltado à segurança dos estabelecimentos penais e à custódia, vigilância, escolta e proteção da ordem prisional, conforme a Constituição, a Lei de Execução Penal e a lei do ente federativo.",
    "abrangencia": "Atuação no sistema prisional federal, estadual ou distrital correspondente, abrangendo segurança interna e externa de unidades penais, movimentação de custodiados, escoltas, revistas, controle de acesso, prevenção de fugas, gerenciamento de crises e apoio à execução penal.",
    "naoConfundir": "Polícia Penal não é Polícia Civil, Polícia Federal nem Polícia Militar. Ela não assume investigação criminal geral nem policiamento ostensivo urbano; seu eixo é a segurança prisional.",
    "pontoAtencao": "Como a EC 104 criou a Polícia Penal, muitos detalhes ainda dependem de lei federal, estadual ou distrital: carreira, porte, corregedoria, escolta externa, grupos especializados e integração operacional.",
    "deveres": [
      "Garantir a segurança dos estabelecimentos penais e preservar a ordem interna e externa das unidades prisionais.",
      "Realizar custódia, vigilância, escolta, movimentação e recambiamento de pessoas privadas de liberdade conforme normas do ente federativo.",
      "Controlar acesso, realizar revistas, fiscalizar objetos, prevenir fugas, motins, rebeliões e entrada de materiais ilícitos.",
      "Preservar a integridade física de presos, servidores, visitantes, prestadores de serviço e terceiros no ambiente prisional.",
      "Apoiar a execução penal, a disciplina prisional e o cumprimento de decisões judiciais no limite das atribuições administrativas.",
      "Atuar de forma integrada com demais órgãos de segurança quando a ocorrência tiver relação com o sistema prisional."
    ],
    "poderes": [
      "Realizar revista pessoal, inspeção de celas, controle de acesso, rondas, vigilância armada e procedimentos de segurança penitenciária nos limites legais.",
      "Empregar força necessária e proporcional para conter fuga, rebelião, motim, agressão, entrada ilícita ou risco concreto à vida.",
      "Executar escoltas, transferências e recapturas quando previstas em normas locais e atos administrativos competentes.",
      "Apreender objetos ilícitos, comunicar crime ou falta disciplinar e preservar elementos para autoridade competente.",
      "Integrar inteligência penitenciária e operações de segurança prisional, respeitada a competência dos demais órgãos de investigação."
    ],
    "limites": [
      "Não conduz investigação criminal geral nem substitui a polícia judiciária em crimes comuns fora do sistema prisional.",
      "Atuação externa, grupos táticos, porte, escolta e recaptura dependem da lei e dos regulamentos do ente federativo.",
      "Revistas e uso da força devem observar legalidade, dignidade humana, proporcionalidade, registros e protocolos institucionais.",
      "A disciplina prisional não autoriza pena informal, tratamento degradante ou restrição sem base normativa e controle cabível."
    ],
    "leis": [
      {
        "nome": "Emenda Constitucional nº 104/2019",
        "resumo": "Criou as polícias penais federal, estaduais e distrital e alterou o art. 144 da Constituição.",
        "url": "https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc104.htm"
      },
      {
        "nome": "Constituição Federal, art. 144",
        "resumo": "Inclui a Polícia Penal no sistema de segurança pública e vincula sua atuação à segurança dos estabelecimentos penais.",
        "url": "https://portal.stf.jus.br/constituicao-supremo/artigo.asp?abrirArtigo=144&abrirBase=CF"
      },
      {
        "nome": "Lei nº 7.210/1984 — Lei de Execução Penal",
        "resumo": "Regula a execução penal, disciplina prisional, direitos e deveres de presos e funcionamento de estabelecimentos penais.",
        "url": "https://www.planalto.gov.br/ccivil_03/leis/l7210.htm"
      },
      {
        "nome": "Lei nº 13.675/2018 — SUSP",
        "resumo": "Organiza o Sistema Único de Segurança Pública e a Política Nacional de Segurança Pública e Defesa Social.",
        "url": "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/L13675.htm"
      }
    ],
    "entendimentos": [
      {
        "titulo": "Implementação normativa e administrativa da Polícia Penal",
        "data": "STF, Informativo 1208, 2026",
        "status": "Entendimento oficial localizado",
        "resumo": "O STF tratou da implementação da Polícia Penal no âmbito estadual e registrou a análise da EC nº 104/2019 dentro da arquitetura constitucional da segurança pública.",
        "fonte": "STF — Informativo 1208",
        "url": "https://www.stf.jus.br/arquivo/informativo/documento/informativo1208.htm"
      },
      {
        "titulo": "Competência central é a segurança dos estabelecimentos penais",
        "data": "Base constitucional permanente",
        "status": "Ponto de atenção",
        "resumo": "A leitura segura da Polícia Penal deve partir do vínculo com estabelecimentos penais, não de uma competência policial geral.",
        "fonte": "STF — Constituição anotada, art. 144",
        "url": "https://portal.stf.jus.br/constituicao-supremo/artigo.asp?abrirArtigo=144&abrirBase=CF"
      }
    ],
    "local": "Varia conforme lei federal, estadual ou distrital de organização da Polícia Penal e normas do sistema prisional.",
    "atualizacao": "Revisado e ampliado em 02/05/2026"
  },
  "gm": {
    "rotulo": "Guarda Municipal",
    "categoria": "Municipal",
    "essencia": "Instituição municipal de segurança urbana, preventiva, comunitária e patrimonial, voltada à proteção de bens, serviços, instalações e logradouros municipais, com atuação integrada no sistema de segurança pública.",
    "abrangencia": "Atuação no território do município que criou a guarda por lei local, incluindo proteção de escolas, praças, prédios e serviços municipais, patrulhamento preventivo, segurança urbana comunitária, apoio à defesa civil, fiscalização administrativa municipal e cooperação com outros órgãos.",
    "naoConfundir": "A Guarda Municipal não tem poder de investigação criminal. O STF reconhece ações de segurança urbana, inclusive policiamento ostensivo e comunitário, mas isso não a transforma em Polícia Civil, Militar ou Federal.",
    "pontoAtencao": "O alcance real muda muito de município para município: lei local, efetivo, formação, porte, corregedoria, ouvidoria, convênios e protocolos determinam o que a guarda pode fazer na prática.",
    "deveres": [
      "Proteger bens, serviços, instalações e logradouros públicos municipais, conforme Constituição e lei local.",
      "Atuar preventivamente na segurança urbana, com presença comunitária, patrulhamento municipal e mediação de conflitos quando cabível.",
      "Apoiar escolas, unidades de saúde, praças, eventos públicos, fiscalização municipal, defesa civil e proteção de servidores e usuários de serviços municipais.",
      "Cooperar com órgãos de segurança pública da União, dos Estados e do Distrito Federal por meio de integração, convênios, protocolos ou acionamento formal.",
      "Atender situações de flagrante delito, preservar local e encaminhar envolvidos à autoridade competente.",
      "Observar uso proporcional da força, formação, controle interno, ouvidoria e demais exigências do Estatuto Geral das Guardas Municipais."
    ],
    "poderes": [
      "Realizar patrulhamento preventivo, ostensivo e comunitário no âmbito municipal, conforme lei local e entendimento do STF.",
      "Efetuar abordagem quando houver situação concreta, fundada suspeita ou contexto operacional legítimo, com respeito a direitos fundamentais.",
      "Prender em flagrante e apresentar imediatamente à autoridade policial competente, como qualquer agente público diante de flagrante delito.",
      "Exercer poder de polícia administrativa municipal quando a lei local atribuir fiscalização específica, como posturas, trânsito municipal, patrimônio, comércio ou ordenamento urbano.",
      "Atuar em cooperação com polícias e órgãos públicos, preservando sua identidade municipal e seus limites legais."
    ],
    "limites": [
      "Não conduz inquérito policial nem investigação criminal típica de Polícia Civil ou Polícia Federal.",
      "Não substitui a Polícia Militar no policiamento estadual geral nem pode invadir competências estaduais/federais sem base legal ou cooperação formal.",
      "Porte de arma, estrutura, corregedoria, ouvidoria, formação e atribuições exigem observância da Lei nº 13.022/2014 e da legislação municipal.",
      "Abordagens e revistas devem ter justificativa objetiva; atuação meramente genérica, abusiva ou discriminatória compromete a legalidade do ato."
    ],
    "leis": [
      {
        "nome": "Constituição Federal, art. 144, § 8º",
        "resumo": "Autoriza os municípios a constituírem guardas municipais destinadas à proteção de seus bens, serviços e instalações, conforme lei.",
        "url": "https://portal.stf.jus.br/constituicao-supremo/artigo.asp?abrirArtigo=144&abrirBase=CF"
      },
      {
        "nome": "Lei nº 13.022/2014 — Estatuto Geral das Guardas Municipais",
        "resumo": "Define normas gerais, princípios, competências, controle interno/externo e estrutura mínima das guardas municipais.",
        "url": "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2014/lei/l13022.htm"
      },
      {
        "nome": "Lei nº 13.675/2018 — SUSP",
        "resumo": "Disciplina o Sistema Único de Segurança Pública e a Política Nacional de Segurança Pública e Defesa Social.",
        "url": "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/L13675.htm"
      },
      {
        "nome": "Decreto nº 11.841/2023",
        "resumo": "Regulamenta a cooperação das guardas municipais com órgãos de segurança pública.",
        "url": "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/decreto/d11841.htm"
      },
      {
        "nome": "Código de Processo Penal",
        "resumo": "Base geral para prisão em flagrante e encaminhamento à autoridade competente.",
        "url": "https://www.planalto.gov.br/ccivil_03/decreto-lei/del3689.htm"
      }
    ],
    "entendimentos": [
      {
        "titulo": "Guardas municipais integram o sistema de segurança pública",
        "data": "STF, ADPF 995, 2023",
        "status": "Entendimento oficial localizado",
        "resumo": "O STF reconheceu que as guardas municipais integram o sistema de segurança pública, superando leitura meramente patrimonial e restritiva.",
        "fonte": "STF — ADPF 995",
        "url": "https://noticias.stf.jus.br/postsnoticias/guardas-municipais-integram-o-sistema-de-seguranca-publica-decide-stf/"
      },
      {
        "titulo": "Policiamento urbano ostensivo e comunitário é constitucional",
        "data": "STF, Tema 656, 2025",
        "status": "Entendimento oficial localizado",
        "resumo": "O STF reconheceu a constitucionalidade de ações de segurança urbana pelas guardas municipais, inclusive policiamento ostensivo e comunitário, sem poder de investigação.",
        "fonte": "STF — Tema 656",
        "url": "https://noticias.stf.jus.br/postsnoticias/guardas-municipais-podem-fazer-policiamento-urbano-decide-stf/"
      }
    ],
    "local": "Varia conforme lei municipal de criação, plano de cargos, regulamento, convênios e estrutura local.",
    "atualizacao": "Revisado e ampliado em 02/05/2026"
  }
};

function poderesEscapar(texto = '') {
  if (typeof escapeHtml === 'function') return escapeHtml(texto);
  return String(texto).replace(/[&<>'"]/g, ch => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;'}[ch]));
}

function poderesTipoDaInstituicao(inst) {
  inst = String(inst || '').toLowerCase();
  if (inst === 'pf') return 'pf';
  if (inst === 'prf') return 'prf';
  if (inst === 'guarda_municipal' || inst === 'gm') return 'gm';
  if (inst.startsWith('bm')) return 'bm';
  if (inst.startsWith('pp')) return 'pp';
  if (inst.startsWith('pc')) return 'pc';
  if (inst.startsWith('pm')) return 'pm';
  return 'pm';
}

function poderesRamoNome(tipo) {
  return PODERES_DEVERES_BASE[tipo]?.rotulo || PODERES_DEVERES_DADOS_EM_BREVE;
}

function poderesOrdemRamo(inst, estado) {
  if (!estado) return 9;
  if (estado.pm === inst) return 1;
  if (estado.bm === inst) return 2;
  if (estado.pc === inst) return 3;
  if (estado.pp === inst) return 4;
  if (inst === 'pf') return 1;
  if (inst === 'prf') return 2;
  return 9;
}

function poderesInstituicoesDisponiveis() {
  return [
    {
      inst: 'pm',
      estadoKey: 'estadual',
      estadoNome: 'Estados e Distrito Federal',
      uf: 'UF/DF',
      sigla: 'PM',
      nome: 'Polícia Militar',
      ramo: 'Polícia Militar',
      ordem: 1
    },
    {
      inst: 'bm',
      estadoKey: 'estadual',
      estadoNome: 'Estados e Distrito Federal',
      uf: 'UF/DF',
      sigla: 'BM',
      nome: 'Corpo de Bombeiros Militar',
      ramo: 'Corpo de Bombeiros Militar',
      ordem: 2
    },
    {
      inst: 'pc',
      estadoKey: 'estadual',
      estadoNome: 'Estados e Distrito Federal',
      uf: 'UF/DF',
      sigla: 'PC',
      nome: 'Polícia Civil',
      ramo: 'Polícia Civil',
      ordem: 3
    },
    {
      inst: 'pp',
      estadoKey: 'estadual',
      estadoNome: 'Estados, Distrito Federal e União',
      uf: 'UF/DF/BR',
      sigla: 'PP',
      nome: 'Polícia Penal',
      ramo: 'Polícia Penal',
      ordem: 4
    },
    {
      inst: 'pf',
      estadoKey: 'br',
      estadoNome: 'União',
      uf: 'BR',
      sigla: 'PF',
      nome: 'Polícia Federal',
      ramo: 'Polícia Federal',
      ordem: 5
    },
    {
      inst: 'prf',
      estadoKey: 'br',
      estadoNome: 'União',
      uf: 'BR',
      sigla: 'PRF',
      nome: 'Polícia Rodoviária Federal',
      ramo: 'Polícia Rodoviária Federal',
      ordem: 6
    },
    {
      inst: 'gm',
      estadoKey: 'municipal',
      estadoNome: 'Municípios',
      uf: 'MUN',
      sigla: 'GM',
      nome: 'Guarda Municipal',
      ramo: 'Guarda Municipal',
      ordem: 7
    }
  ];
}

function poderesPopularSeletor() {
  const select = document.getElementById('poderes_instituicao');
  if (!select || select.dataset.renderizado) return;

  const itens = poderesInstituicoesDisponiveis();
  select.innerHTML = '<option value="" disabled>Escolha o tipo de instituição</option>' + itens.map(item => `
    <option value="${poderesEscapar(item.inst)}">${poderesEscapar(item.nome)}</option>
  `).join('');

  const tipoAtual = poderesTipoDaInstituicao(currInst);
  const preferida = itens.some(item => item.inst === tipoAtual) ? tipoAtual : 'pf';
  select.value = preferida;
  select.dataset.renderizado = 'true';
}

function poderesValor(valor) {
  if (valor === undefined || valor === null) return PODERES_DEVERES_DADOS_EM_BREVE;
  const texto = String(valor).trim();
  return texto ? texto : PODERES_DEVERES_DADOS_EM_BREVE;
}

function poderesEhDadoPendente(valor) {
  const texto = poderesValor(valor);
  if (texto === PODERES_DEVERES_DADOS_EM_BREVE) return true;
  if (/^(lei estadual|lei distrital|lei municipal|lei orgânica nacional específica|lei organica nacional especifica|lei estadual\/distrital|lei local|norma local)/i.test(texto)) return true;
  return /(?:dados em breve|a preencher|preencher|a confirmar|a definir|sem informação|sem informacao|pendente|fonte oficial a preencher|consultar|conferir|não localizado|nao localizado)/i.test(texto);
}

function poderesUrlValida(url) {
  return /^https?:\/\//i.test(String(url || '').trim());
}

function poderesItemDadosEmBreve(classe = 'poderes-fonte-item') {
  return `<div class="${classe}"><strong>${PODERES_DEVERES_DADOS_EM_BREVE}</strong></div>`;
}

function poderesListaHtml(lista) {
  if (!Array.isArray(lista) || !lista.length) return `<li>${PODERES_DEVERES_DADOS_EM_BREVE}</li>`;
  return lista.map(item => `<li>${poderesEscapar(poderesValor(item))}</li>`).join('');
}

function poderesLeisHtml(lista) {
  if (!Array.isArray(lista) || !lista.length) return poderesItemDadosEmBreve('poderes-fonte-item');
  return lista.map(lei => {
    const semFonteSegura = !poderesUrlValida(lei?.url) || poderesEhDadoPendente(lei?.nome) || poderesEhDadoPendente(lei?.resumo);
    if (semFonteSegura) return poderesItemDadosEmBreve('poderes-fonte-item');
    const nome = poderesEscapar(poderesValor(lei.nome));
    const resumo = poderesEscapar(poderesValor(lei.resumo));
    const link = `<a href="${poderesEscapar(lei.url)}" target="_blank" rel="noopener noreferrer" class="concurso-link">Abrir fonte oficial</a>`;
    return `<div class="poderes-fonte-item"><strong>${nome}</strong><span>${resumo}</span>${link}</div>`;
  }).join('');
}

function poderesEntendimentosHtml(lista) {
  if (!Array.isArray(lista) || !lista.length) return `<div class="direito-item acao"><span class="direito-nome">${PODERES_DEVERES_DADOS_EM_BREVE}</span></div>`;
  return lista.map(item => {
    const semFonteSegura = !poderesUrlValida(item?.url)
      || poderesEhDadoPendente(item?.titulo)
      || poderesEhDadoPendente(item?.resumo)
      || poderesEhDadoPendente(item?.fonte);
    if (semFonteSegura) return `<div class="direito-item acao"><span class="direito-nome">${PODERES_DEVERES_DADOS_EM_BREVE}</span></div>`;
    const link = `<a href="${poderesEscapar(item.url)}" target="_blank" rel="noopener noreferrer" class="concurso-link">${poderesEscapar(item.fonte)}</a>`;
    return `
      <div class="direito-item acao poderes-entendimento-item">
        <span class="direito-nome">${poderesEscapar(poderesValor(item.titulo))}</span>
        <span class="direito-status" style="color: var(--vermelho);">${poderesEscapar(poderesValor(item.status))}</span>
        <div><span class="badge-info ativa">${poderesEscapar(poderesValor(item.data))}</span></div>
        <span class="direito-desc">${poderesEscapar(poderesValor(item.resumo))}</span>
        <span class="direito-desc"><strong>Fonte:</strong> ${link}</span>
      </div>
    `;
  }).join('');
}



function poderesDestaquesHtml(dados = {}) {
  const cards = [
    { titulo: 'Essência da competência', valor: dados.essencia },
    { titulo: 'Não confundir', valor: dados.naoConfundir },
    { titulo: 'Ponto de atenção', valor: dados.pontoAtencao }
  ].filter(card => !poderesEhDadoPendente(card.valor));

  if (!cards.length) return '';

  return `
    <section class="poderes-destaques-grid" aria-label="Destaques práticos">
      ${cards.map(card => `
        <article class="poderes-destaque-card">
          <span>${poderesEscapar(card.titulo)}</span>
          <p>${poderesEscapar(poderesValor(card.valor))}</p>
        </article>
      `).join('')}
    </section>
  `;
}

function poderesRenderizar(inst) {
  const painel = document.getElementById('poderes_resultado');
  const tituloSpan = document.getElementById('txt-inst-poderes');
  if (!painel) return;

  const tipo = poderesTipoDaInstituicao(inst);
  const dados = PODERES_DEVERES_BASE[tipo] || PODERES_DEVERES_BASE.pm;
  const infoInstituicao = HEADER_INSTITUICOES_INFO?.[inst];
  const estadoInstituicao = HEADER_ESTADOS?.[getEstadoDaInstituicao(inst)] || {};
  const itemSelecionado = infoInstituicao ? {
    nome: infoInstituicao.desc,
    estadoNome: estadoInstituicao.nome || dados.categoria,
    sigla: infoInstituicao.titulo
  } : (poderesInstituicoesDisponiveis().find(item => item.inst === tipo) || {
    nome: dados.rotulo,
    estadoNome: dados.categoria,
    sigla: String(tipo || '').toUpperCase()
  });
  const nomeCompleto = infoInstituicao
    ? `${infoInstituicao.titulo} — ${infoInstituicao.desc}`
    : (dados.rotulo || itemSelecionado.nome || PODERES_DEVERES_DADOS_EM_BREVE);
  if (tituloSpan) tituloSpan.textContent = infoInstituicao?.titulo || dados.rotulo || itemSelecionado.sigla || '—';

  painel.innerHTML = `
    <section class="poderes-resumo-card" aria-label="Resumo de poderes e deveres">
      <div>
        <span class="poderes-kicker">${poderesEscapar(dados.categoria)}</span>
        <h3>${poderesEscapar(nomeCompleto)}</h3>
        <p>${poderesEscapar(dados.abrangencia)}</p>
      </div>
      <div class="poderes-meta-grid">
        <div><span>Tipo de instituição</span><strong>${poderesEscapar(itemSelecionado.nome || dados.rotulo)}</strong></div>
        <div><span>Abrangência geral</span><strong>${poderesEscapar(itemSelecionado.estadoNome || dados.categoria)}</strong></div>
        <div><span>Base local/complementar</span><strong>${poderesEscapar(dados.local || PODERES_DEVERES_DADOS_EM_BREVE)}</strong></div>
        <div><span>Última revisão</span><strong>${poderesEscapar(dados.atualizacao || PODERES_DEVERES_DADOS_EM_BREVE)}</strong></div>
      </div>
    </section>

    ${poderesDestaquesHtml(dados)}

    <div class="poderes-grid">
      <section class="direito-item poderes-bloco">
        <span class="direito-nome">Deveres principais</span>
        <ul>${poderesListaHtml(dados.deveres)}</ul>
      </section>
      <section class="direito-item poderes-bloco">
        <span class="direito-nome">Poderes e competências</span>
        <ul>${poderesListaHtml(dados.poderes)}</ul>
      </section>
      <section class="direito-item poderes-bloco poderes-bloco-largo">
        <span class="direito-nome">Limites, cautelas e controles</span>
        <ul>${poderesListaHtml(dados.limites)}</ul>
      </section>
    </div>

    <section class="poderes-fontes-card">
      <h3>Leis, normas e bases de referência</h3>
      <p>Fontes oficiais ou institucionais selecionadas para conferência e aprofundamento.</p>
      <div class="poderes-fontes-lista">${poderesLeisHtml(dados.leis)}</div>
    </section>

    <section class="poderes-entendimentos-card">
      <h3>Entendimentos e pontos práticos de interpretação</h3>
      <div class="result-list">${poderesEntendimentosHtml(dados.entendimentos)}</div>
    </section>

    <div class="alerta legal">
      <strong>Aviso:</strong> Esta aba é informativa e independente. Ela resume competências gerais, mas não substitui consulta a advogado, corregedoria, setor jurídico, legislação local, decisão judicial aplicável, edital, norma interna ou canal oficial da instituição.
    </div>
  `;
}

function inicializarPoderesDeveres() {
  if (typeof instituicaoConsultaFoiSelecionada === 'function' && !instituicaoConsultaFoiSelecionada()) {
    if (typeof mostrarAvisoSelecaoInstituicao === 'function') mostrarAvisoSelecaoInstituicao('poderes');
    return;
  }
  poderesRenderizar(currInst);
}

function mudarInstituicaoPoderes(valor) {
  if (valor && typeof mudarInstituicao === 'function') mudarInstituicao(valor);
  poderesRenderizar(valor || currInst || 'pf');
}
