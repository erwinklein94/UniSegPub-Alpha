/* Chunk gerado a partir de js/script-original.js — Troca de instituição, estados, cabeçalho e estrutura de UFs.
   Mantém a ordem original para preservar compatibilidade. */

/* === TROCA INSTITUIÇÃO ====================================== */
/* ============================================================ */

const HEADER_ESTADOS = {
  ac: {
    nome: 'Acre',
    sigla: 'AC',
    pm: 'pmac',
    pc: 'pcac',
    pp: 'ppac',
    flag: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bandeira_do_Acre.svg'
  },
  sp: {
    nome: 'São Paulo',
    sigla: 'SP',
    pm: 'pmesp',
    pc: 'pcsp',
    pp: 'ppsp',
    flag: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bandeira_do_estado_de_S%C3%A3o_Paulo.svg'
  },
  rj: {
    nome: 'Rio de Janeiro',
    sigla: 'RJ',
    pm: 'pmerj',
    pc: 'pcerj',
    pp: 'pprj',
    flag: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bandeira_do_estado_do_Rio_de_Janeiro.svg'
  },
  mg: {
    nome: 'Minas Gerais',
    sigla: 'MG',
    pm: 'pmmg',
    pc: 'pcmg',
    pp: 'ppmg',
    flag: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bandeira_de_Minas_Gerais.svg'
  },
  ba: {
    nome: 'Bahia',
    sigla: 'BA',
    pm: 'pmba',
    pc: 'pcba',
    pp: 'ppba',
    flag: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bandeira_da_Bahia.svg'
  },
  pr: {
    nome: 'Paraná',
    sigla: 'PR',
    pm: 'pmpr',
    pc: 'pcpr',
    pp: 'pppr',
    flag: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bandeira_do_Paran%C3%A1.svg'
  },
  rs: {
    nome: 'Rio Grande do Sul',
    sigla: 'RS',
    pm: 'pmrs',
    pc: 'pcrs',
    pp: 'pprs',
    flag: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bandeira_do_Rio_Grande_do_Sul.svg'
  },
  sc: {
    nome: 'Santa Catarina',
    sigla: 'SC',
    pm: 'pmsc',
    pc: 'pcsc',
    pp: 'ppsc',
    flag: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bandeira_de_Santa_Catarina.svg'
  },
  es: {
    nome: 'Espírito Santo',
    sigla: 'ES',
    pm: 'pmes',
    pc: 'pces',
    pp: 'ppes',
    flag: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bandeira_do_Esp%C3%ADrito_Santo.svg'
  },
  ms: {
    nome: 'Mato Grosso do Sul',
    sigla: 'MS',
    pm: 'pmms',
    pc: 'pcms',
    pp: 'ppms',
    flag: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bandeira_de_Mato_Grosso_do_Sul.svg'
  },
  mt: {
    nome: 'Mato Grosso',
    sigla: 'MT',
    pm: 'pmmt',
    pc: 'pcmt',
    pp: 'ppmt',
    flag: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bandeira_de_Mato_Grosso.svg'
  }
};

const HEADER_INSTITUICOES_INFO = {
  pmac: { titulo: 'PMAC', desc: 'Polícia Militar do Acre' },
  pcac: { titulo: 'PCAC', desc: 'Polícia Civil do Acre' },
  ppac: { titulo: 'PPAC', desc: 'Polícia Penal do Acre' },
  pmesp: { titulo: 'PMESP', desc: 'Polícia Militar de São Paulo' },
  pcsp:  { titulo: 'PCSP',  desc: 'Polícia Civil de São Paulo' },
  pmerj: { titulo: 'PMERJ', desc: 'Polícia Militar do Rio de Janeiro' },
  pcerj: { titulo: 'PCERJ', desc: 'Polícia Civil do Rio de Janeiro' },
  pmmg:  { titulo: 'PMMG',  desc: 'Polícia Militar de Minas Gerais' },
  pcmg:  { titulo: 'PCMG',  desc: 'Polícia Civil de Minas Gerais' },
  pmba:  { titulo: 'PMBA',  desc: 'Polícia Militar da Bahia' },
  pcba:  { titulo: 'PCBA',  desc: 'Polícia Civil da Bahia' },
  pmpr:  { titulo: 'PMPR',  desc: 'Polícia Militar do Paraná' },
  pcpr:  { titulo: 'PCPR',  desc: 'Polícia Civil do Paraná' },
  pmrs:  { titulo: 'PMRS',  desc: 'Brigada Militar do Rio Grande do Sul' },
  pcrs:  { titulo: 'PCRS',  desc: 'Polícia Civil do Rio Grande do Sul' },
  pmsc:  { titulo: 'PMSC',  desc: 'Polícia Militar de Santa Catarina' },
  pcsc:  { titulo: 'PCSC',  desc: 'Polícia Civil de Santa Catarina' },
  pmes:  { titulo: 'PMES',  desc: 'Polícia Militar do Espírito Santo' },
  pces:  { titulo: 'PCES',  desc: 'Polícia Civil do Espírito Santo' },
  ppsp: { titulo: 'PPSP', desc: 'Polícia Penal de São Paulo' },
  pprj: { titulo: 'PPRJ', desc: 'Polícia Penal do Rio de Janeiro' },
  ppmg: { titulo: 'PPMG', desc: 'Polícia Penal de Minas Gerais' },
  ppba: { titulo: 'PPBA', desc: 'Polícia Penal da Bahia' },
  pppr: { titulo: 'PPPR', desc: 'Polícia Penal do Paraná' },
  pprs: { titulo: 'PPRS', desc: 'Polícia Penal do Rio Grande do Sul' },
  ppsc: { titulo: 'PPSC', desc: 'Polícia Penal de Santa Catarina' },
  ppes: { titulo: 'PPES', desc: 'Polícia Penal do Espírito Santo' },
  pmms: { titulo: 'PMMS', desc: 'Polícia Militar de Mato Grosso do Sul' },
  pcms: { titulo: 'PCMS', desc: 'Polícia Civil de Mato Grosso do Sul' },
  ppms: { titulo: 'PPMS', desc: 'Polícia Penal de Mato Grosso do Sul' },
  pmmt: { titulo: 'PMMT', desc: 'Polícia Militar de Mato Grosso' },
  pcmt: { titulo: 'PCMT', desc: 'Polícia Judiciária Civil de Mato Grosso' },
  ppmt: { titulo: 'PPMT', desc: 'Polícia Penal de Mato Grosso' }
};

const HEADER_INSTITUICOES_IMAGENS = {
  pmesp: 'img/pmesp.jpeg',
  pcsp: 'img/pcsp.jpeg',
  pmerj: 'img/pmerj.jpeg',
  pcerj: 'img/pcrj.jpeg',
  pmmg: 'img/pmmg.jpeg',
  pcmg: 'img/pcmg.jpeg',
  pmba: 'img/pmba.jpeg',
  pcba: 'img/pcba.jpeg',
  pmpr: 'img/pmpr.jpeg',
  pcpr: 'img/pcpr.jpeg',
  pmrs: 'img/pmrs.jpeg',
  pcrs: 'img/pcrs.jpeg',
  pmsc: 'img/pmsc.jpeg',
  pcsc: 'img/pcsc.jpeg',
  pmes: 'img/pmes.jpeg',
  pces: 'img/pces.jpeg',
  pmgo: 'img/pmgo.jpeg',
  pmms: 'img/pmms.jpeg',
  pcms: 'img/pcms.jpeg',
  pmmt: 'img/pmmt.jpeg',
  pcmt: 'img/pcmt.jpeg',
  ppsp: 'img/ppsp.jpeg',
  pprj: 'img/pprj.jpeg',
  ppmg: 'img/ppmg.jpeg',
  ppba: 'img/ppba.jpeg',
  pppr: 'img/pppr.jpeg',
  pprs: 'img/pprs.jpeg',
  ppsc: 'img/ppsc.jpeg',
  ppes: 'img/ppes.jpeg',
  ppms: 'img/ppms.jpeg',
  ppmt: 'img/ppmt.jpeg',
  pmma: 'img/pmma.jpeg',
  pcma: 'img/pcma.jpeg',
  ppma: 'img/ppma.jpeg',
  pmto: 'img/pmto.jpeg',
  pcto: 'img/pcto.jpeg',
  ppto: 'img/ppto.jpeg'
};


function setCssUrlVariable(elemento, nomeVariavel, src, fallback = 'img/logoleao.jpeg') {
  if (!elemento || !nomeVariavel) return;
  const imagemOriginal = String(src || fallback || 'img/logoleao.jpeg');
  const imagem = imagemOriginal.replace(/["\\]/g, '\\$&');
  elemento.style.setProperty(nomeVariavel, `url("${imagem}")`);
  return imagemOriginal;
}

function setHeaderHeroImage(src) {
  const card = document.querySelector('.header-institution-card');
  if (!card) return;
  const imagemOriginal = setCssUrlVariable(card, '--header-hero-image', src);
  card.dataset.headerHeroImage = imagemOriginal;
}

function setSiteHeaderBackgroundImage(src) {
  const imagemOriginal = setCssUrlVariable(document.body, '--site-header-bg-image', src);
  if (imagemOriginal) document.body.dataset.siteHeaderBgImage = imagemOriginal;
}

function setPageInstitutionBackgroundImage(src) {
  const imagemOriginal = setCssUrlVariable(document.body, '--page-institution-image', src);
  if (imagemOriginal) document.body.dataset.pageInstitutionImage = imagemOriginal;
}

function configurarLogoInicialHeader(img) {
  if (!img) return;
  img.style.display = '';
  img.onerror = null;
  img.removeAttribute('srcset');
  img.removeAttribute('sizes');
  img.removeAttribute('data-fallback-aplicado');
  img.dataset.imgBase = 'img/logoleao';
  img.dataset.retry = '';
  img.dataset.logoRetry = '0';
  img.alt = 'Logo Universo Segurança Pública';
  img.onerror = function () {
    const alternativas = ['img/logoleao.png', 'img/logoleao.jpg', 'img/logoleao.webp'];
    const indice = parseInt(this.dataset.logoRetry || '0', 10);
    if (indice < alternativas.length) {
      this.dataset.logoRetry = String(indice + 1);
      this.src = alternativas[indice];
      return;
    }
    this.onerror = null;
    this.style.display = 'none';
  };
  img.src = 'img/logoleao.jpeg';
}

function aplicarImagemHeaderInstituicao(img, inst, dadosEstado, instituicao) {
  const card = document.querySelector('.header-institution-card');
  if (card) card.classList.remove('header-portal-home');

  const imagemInstituicao = HEADER_INSTITUICOES_IMAGENS[inst];
  const fallbackBandeira = dadosEstado?.flag || HEADER_ESTADOS.sp.flag;
  const altInstituicao = instituicao?.desc || instituicao?.titulo || 'Instituição de segurança pública';

  // Cabeçalho do estado: volta a usar a bandeira como plano de fundo.
  setHeaderHeroImage(fallbackBandeira || 'img/logoleao.jpeg');
  setSiteHeaderBackgroundImage(fallbackBandeira || 'img/logoleao.jpeg');

  // Página grande: usa sempre o logo principal, independentemente da instituição selecionada.
  setPageInstitutionBackgroundImage('img/logoleao.webp');

  if (!img) return;
  img.style.display = '';
  img.removeAttribute('data-retry');
  img.removeAttribute('data-img-base');
  img.onerror = function () {
    if (this.dataset.fallbackAplicado === 'bandeira') {
      this.onerror = null;
      return;
    }
    this.dataset.fallbackAplicado = 'bandeira';
    this.src = fallbackBandeira;
    this.alt = `Bandeira de ${dadosEstado?.nome || 'estado'}`;
  };

  if (imagemInstituicao) {
    img.dataset.fallbackAplicado = '';
    img.src = imagemInstituicao;
    img.alt = `Logo/brasão da ${altInstituicao}`;
  } else {
    img.dataset.fallbackAplicado = 'bandeira';
    img.onerror = null;
    img.src = fallbackBandeira;
    img.alt = `Bandeira de ${dadosEstado?.nome || 'estado'}`;
  }
}


const HEADER_INSTITUICOES_RESUMO = {
  pmac: {
    nome: 'Polícia Militar do Acre', sigla: 'PMAC', estado: 'Acre', estadoSigla: 'AC', tipo: 'Polícia Militar',
    criacao: '1916 · instituição centenária', marco: 'A PMAC completou 110 anos em 2026; a data institucional é celebrada em maio.',
    ativaLabel: 'Efetivo: conferir PMAC/Portal da Transparência', reservaLabel: 'Reserva/reforma: conferir Acreprevidência e atos estaduais', totalLabel: 'Conferir transparência estadual', relacaoLabel: 'Não calcular sem efetivo oficial consolidado',
    populacao: 884372,
    governo: 'Governo do Estado do Acre', governador: 'Mailza Assis Cameli', comando: 'Cel PM Marta Renata da Silva Freitas Alves — Comandante-Geral',
    ingresso: 'Concurso público, curso de formação, TAF, exames, investigação social e requisitos específicos do edital.',
    remuneracao: 'Tabela PMAC/CBMAC cadastrada com total bruto oficial de julho/2018; edital PMAC 2023 indicou R$ 8.129,55 para Aluno Oficial e R$ 10.423,73 para 2º Tenente Estagiário de Saúde.',
    fonte: 'IBGE, Governadoria/PMAC, Portal do Estado do Acre e Edital FGV PMAC 2023', atualizado: 'Atualizado em 01/05/2026'
  },
  pcac: {
    nome: 'Polícia Civil do Acre', sigla: 'PCAC', estado: 'Acre', estadoSigla: 'AC', tipo: 'Polícia Civil',
    criacao: 'Órgão estadual de polícia judiciária', marco: 'Em 2026, o Governo do Acre anunciou Pedro Paulo Buzolin como Delegado-Geral e novo concurso PCAC com 139 vagas.',
    ativaLabel: 'Efetivo: conferir PCAC/Portal da Transparência', reservaLabel: 'Inativos: conferir Acreprevidência', totalLabel: 'Conferir transparência estadual', relacaoLabel: 'Não calcular sem efetivo oficial consolidado',
    populacao: 884372,
    governo: 'Governo do Estado do Acre', governador: 'Mailza Assis Cameli', comando: 'Pedro Paulo Buzolin — Delegado-Geral da Polícia Civil do Acre',
    ingresso: 'Concurso público conforme edital; anúncio de 2026 prevê Delegado, Oficial Investigador de Polícia e Perito.',
    remuneracao: 'Tabelas oficiais cadastradas para Delegado, Perito/Médico-Legista e carreiras operacionais da PCAC, com alertas para atualização por lei e contracheque.',
    fonte: 'Agência de Notícias do Acre, Portal do Estado do Acre e tabelas salariais PCAC', atualizado: 'Atualizado em 01/05/2026'
  },
  ppac: {
    nome: 'Polícia Penal do Acre', sigla: 'PPAC', estado: 'Acre', estadoSigla: 'AC', tipo: 'Polícia Penal',
    criacao: POLICIAS_PENAIS_INFO.ppac.criacao, marco: POLICIAS_PENAIS_INFO.ppac.marco,
    ativaLabel: POLICIAS_PENAIS_INFO.ppac.efetivoAtivoLabel, reservaLabel: POLICIAS_PENAIS_INFO.ppac.reservaLabel, totalLabel: POLICIAS_PENAIS_INFO.ppac.totalLabel, relacaoLabel: POLICIAS_PENAIS_INFO.ppac.relacaoLabel,
    populacao: 884372,
    governo: 'Governo do Estado do Acre', governador: 'Mailza Assis Cameli', comando: POLICIAS_PENAIS_INFO.ppac.direcao,
    ingresso: POLICIAS_PENAIS_INFO.ppac.ingresso,
    remuneracao: POLICIAS_PENAIS_INFO.ppac.remuneracao,
    fonte: POLICIAS_PENAIS_INFO.ppac.fonte, atualizado: POLICIAS_PENAIS_INFO.ppac.atualizado
  },
  pmesp: { criacao: '15/12/1831', ativa: 82000, reserva: 90000, populacao: 46081801, governador: 'Tarcísio de Freitas', comando: 'Cel PM José Augusto Coutinho — Comandante-Geral', atualizado: 'Atualizado em 28/04/2026' },
  pcsp:  { criacao: 'Origem histórica: 1841', ativa: 28000, reserva: 35000, populacao: 46081801, governador: 'Tarcísio de Freitas', comando: 'Delegado Artur José Dian — Delegado-Geral de Polícia', atualizado: 'Atualizado em 28/04/2026' },
  pmerj: { criacao: '13/05/1809', ativa: 43000, reserva: 40000, populacao: 17223547, governador: 'Douglas Ruas — Governador em exercício', comando: 'Cel PM Sylvio Ricardo Ciuffo Guerra — Secretário de Estado e Comandante-Geral', atualizado: 'Atualizado em 28/04/2026' },
  pcerj: { criacao: 'Origem histórica: 1808', ativa: 9000, reserva: 10000, populacao: 17223547, governador: 'Douglas Ruas — Governador em exercício', comando: 'Delegado Delmir Gouveia — Secretário de Estado de Polícia Civil', atualizado: 'Atualizado em 28/04/2026' },
  pmmg:  { criacao: '09/06/1775', ativa: 40000, reserva: 45000, populacao: 21393441, governador: 'Mateus Simões', comando: 'Cel PM Carlos Frederico Otoni Garcia — Comandante-Geral', atualizado: 'Atualizado em 28/04/2026' },
  pcmg:  { criacao: 'Origem histórica: 1891', ativa: 10000, reserva: 11000, populacao: 21393441, governador: 'Mateus Simões', comando: 'Delegada-Geral Letícia Baptista Gamboge Reis — Chefe da Polícia Civil', atualizado: 'Atualizado em 28/04/2026' },
  pmba:  { criacao: '17/02/1825', ativa: 30000, reserva: 27000, populacao: 14870907, governador: 'Jerônimo Rodrigues', comando: 'Cel PM Antônio Carlos Silva Magalhães — Comandante-Geral', atualizado: 'Atualizado em 28/04/2026' },
  pcba:  { criacao: 'Origem histórica: 1833', ativa: 6000, reserva: 7000, populacao: 14870907, governador: 'Jerônimo Rodrigues', comando: 'Delegado André Viana — Delegado-Geral', atualizado: 'Atualizado em 28/04/2026' },
  pmpr:  { criacao: '10/08/1854', ativa: 18000, reserva: 20000, populacao: 11890517, governador: 'Carlos Massa Ratinho Junior', comando: 'Cel PM Jefferson Silva — Comandante-Geral', atualizado: 'Atualizado em 28/04/2026' },
  pcpr:  { criacao: 'Origem histórica: 1853', ativa: 5000, reserva: 6000, populacao: 11890517, governador: 'Carlos Massa Ratinho Junior', comando: 'Delegado Silvio Jacob Rockembach — Delegado-Geral', atualizado: 'Atualizado em 28/04/2026' },
  pmrs:  { criacao: '18/11/1837', ativa: 18000, reserva: 23000, populacao: 11233263, governador: 'Eduardo Leite', comando: 'Cel PM Luigi Gustavo Soares Pereira — Comandante-Geral da Brigada Militar', atualizado: 'Atualizado em 28/04/2026' },
  pcrs:  { criacao: 'Origem histórica: 1841', ativa: 5500, reserva: 7000, populacao: 11233263, governador: 'Eduardo Leite', comando: 'Delegado Heraldo Chaves Guerreiro — Chefe de Polícia', atualizado: 'Atualizado em 28/04/2026' },
  pmsc:  { criacao: '05/05/1835', ativa: 10500, reserva: 12000, populacao: 8187029, governador: 'Jorginho Mello', comando: 'Cel PM Emerson Fernandes — Comandante-Geral', atualizado: 'Atualizado em 28/04/2026' },
  pcsc:  { criacao: 'Origem histórica: 1812', ativa: 3500, reserva: 4500, populacao: 8187029, governador: 'Jorginho Mello', comando: 'Delegado Ulisses Gabriel — Delegado-Geral', atualizado: 'Atualizado em 28/04/2026' },
  pmes:  { criacao: '06/04/1835', ativa: 8000, reserva: 7000, populacao: 4126854, governador: 'Ricardo Ferraço', comando: 'Cel PM Ríodo Lopes Rubim — Comandante-Geral', atualizado: 'Atualizado em 28/04/2026' },
  pces:  { criacao: 'Origem histórica: 1896', ativa: 2500, reserva: 3500, populacao: 4126854, governador: 'Ricardo Ferraço', comando: 'Delegado-Geral Jordano Bruno — Delegado-Geral', atualizado: 'Atualizado em 28/04/2026' },
  ppsp: { criacao: 'EC 104/2019 · EC SP 51/2022 · LC SP 1.416/2024', ativaLabel: 'Carreira em implantação · concurso SAP/2025 com 1.100 vagas', reservaLabel: 'Inativos: SPPREV/SAP · quadro de origem em transição', totalLabel: 'Órgão permanente de segurança pública da SAP/SP', relacaoLabel: 'Relação ativa será consolidada após provimento oficial do quadro', populacao: 46081801, governador: 'Tarcísio de Freitas', comando: 'Rodrigo Santos Andrade — Diretor-Geral da Polícia Penal/SP', atualizado: 'Atualizado em 28/04/2026' },
  pprj: { criacao: 'EC 104/2019 · Secretaria de Estado de Polícia Penal/SEAP-RJ', ativaLabel: 'Ativo: conferir SEAP/RJ · operação 2026 mobilizou 2.355 policiais penais', reservaLabel: 'Inativos: RioPrevidência/SEAP-RJ', totalLabel: 'Carreira de Inspetor de Polícia Penal · concurso/renovação em acompanhamento', relacaoLabel: 'Relação depende do efetivo ativo consolidado pela SEAP/RJ', populacao: 17223547, governador: 'Ricardo Couto — Governador em exercício', comando: 'Secretaria de Estado de Polícia Penal do Rio de Janeiro — SEAP/SEPPEN', atualizado: 'Atualizado em 28/04/2026' },
  ppmg: { criacao: 'EC 104/2019 · carreira estadual da Polícia Penal/MG', ativaLabel: 'Concurso SEJUSP/MG 2025: 1.178 vagas · carreira em expansão', reservaLabel: 'Inativos: IPSEMG/regime estadual', totalLabel: 'Sistema prisional mineiro reforçado por nomeações recentes', relacaoLabel: 'Relação depende de efetivo ativo consolidado pela SEJUSP/MG', populacao: 21393441, governador: 'Mateus Simões', comando: 'Leonardo Mattos Alves Badaró — Diretor-Geral do Departamento Penitenciário/MG', atualizado: 'Atualizado em 28/04/2026' },
  ppba: { criacao: 'EC 104/2019 · estrutura estadual da SEAP/BA', ativaLabel: 'Efetivo oficial: conferir SEAP/BA · GEOP e unidades prisionais em operação', reservaLabel: 'Inativos: Funprev/BA', totalLabel: 'Sistema prisional baiano com ACADEPPEN, GEOP e segurança prisional', relacaoLabel: 'Relação depende de efetivo ativo consolidado pela SEAP/BA', populacao: 14870907, governador: 'Jerônimo Rodrigues', comando: 'José Castro — Secretário da SEAP/BA · Luiz Cláudio — Superintendência · Archimedes Neto — Segurança Prisional', atualizado: 'Atualizado em 28/04/2026' },
  pppr: { criacao: 'EC 104/2019 · QPPP modernizado pela LC PR 245/2022 e LC PR 283/2025', ativaLabel: '429 novos policiais penais nomeados em 2025', reservaLabel: 'Inativos: ParanáPrevidência', totalLabel: '1.181 promoções autorizadas após reestruturação do QPPP', relacaoLabel: 'Relação depende do efetivo ativo consolidado pela Polícia Penal/PR', populacao: 11890517, governador: 'Carlos Massa Ratinho Junior', comando: 'Ananda Chalegre dos Santos — Diretora-Geral da Polícia Penal/PR', atualizado: 'Atualizado em 28/04/2026' },
  pprs: { criacao: 'EC 104/2019 · EC RS 82/2022 · LC RS 16.449/2025', ativaLabel: 'Quadro legal: 6.938 cargos de Policial Penal', reservaLabel: 'Inativos: IPE Prev/RS', totalLabel: '5.364 nomeações desde 2019 · 643 novos servidores em formação em 2026', relacaoLabel: 'Relação aproximada depende do provimento efetivo dos cargos', populacao: 11233263, governador: 'Eduardo Leite', comando: 'Sergio Dalcol — Superintendente da Polícia Penal/RS · Jorge Pozzobom — Secretário da SSPS', atualizado: 'Atualizado em 28/04/2026' },
  ppsc: { criacao: 'EC 104/2019 · EC SC 80/2020 · LC SC 774/2021', ativa: 4809, ativaLabel: '4.809 profissionais informados pelo Governo/SC', reservaLabel: 'Inativos: IPREV/SC', totalLabel: '1.644 nomeações informadas em 2025 · carreira estruturada em 8 classes', relacaoLabel: '1 profissional / 1.703 hab. · cálculo aproximado com efetivo divulgado', populacao: 8187029, governador: 'Jorginho Mello', comando: 'Maicon Ronald Alves — Diretor-Geral do Departamento de Polícia Penal/SC', atualizado: 'Atualizado em 28/04/2026' },
  ppes: { criacao: 'EC 104/2019 · LC ES 1.059/2023 · LC ES 1.061/2023', ativaLabel: 'Meta institucional: 3.300 policiais penais concursados · concurso com 600 vagas', reservaLabel: 'Inativos: IPAJM/ES', totalLabel: 'Órgão próprio vinculado à SEJUS/ES · carreira em consolidação', relacaoLabel: 'Relação aproximada depende do provimento e da lotação efetiva', populacao: 4126854, governador: 'Ricardo Ferraço', comando: 'José Franco Morais Junior — Diretor-Geral da Polícia Penal/ES', atualizado: 'Atualizado em 28/04/2026' },
  pmms: { criacao: '05/09/1835 · MS estruturada em 1979', ativa: 10602, ativaLabel: 'Efetivo legal: 10.602 PMs', reservaLabel: 'Reserva/inativos: AGEPREV/MS', totalLabel: 'Ativo legal 10.602 · reserva à parte', populacao: 2924631, governador: 'Eduardo Riedel', comando: 'Cel QOPM Renato dos Anjos Garnes — Comandante-Geral', atualizado: 'Atualizado em 28/04/2026' },
  pcms: { criacao: 'Abril/1979 · LC MS 114/2005', ativa: 2373, ativaLabel: '2.373 policiais na ativa', reservaLabel: 'Inativos: AGEPREV/MS', totalLabel: '2.373 ativos · inativos à parte', populacao: 2924631, governador: 'Eduardo Riedel', comando: 'Delegado Lupérsio Degerone Lúcio — Delegado-Geral', atualizado: 'Atualizado em 28/04/2026' },
  ppms: { criacao: 'EC 104/2019 · EC MS 88/2021 · Lei MS 5.846/2022', ativa: 1903, ativaLabel: '≈ 1.903 servidores ativos AGEPEN/PP', reservaLabel: 'Inativos: AGEPREV/MS', totalLabel: 'Ativo informado ≈ 1.903 · inativos à parte', populacao: 2924631, governador: 'Eduardo Riedel', comando: POLICIAS_PENAIS_INFO.ppms.direcao, atualizado: POLICIAS_PENAIS_INFO.ppms.atualizado },
  pmmt: { criacao: '05/09/1835 · LC MT 529/2014', ativa: 7275, ativaLabel: 'Ativo informado: 7.275 PMs', reservaLabel: 'Reserva/inativos: MTPREV/MT', totalLabel: 'Efetivo legal previsto: 12.495 PMs', populacao: 3893659, governador: 'Mauro Mendes', comando: 'Cel PM Claudio Fernando Carneiro Tinoco — Comandante-Geral', atualizado: 'Atualizado em 28/04/2026' },
  pcmt: { criacao: 'Lei MT 7.935/2003 · LC MT 407/2010', ativa: 2983, ativaLabel: 'Ativo informado: 2.983 policiais civis', reservaLabel: 'Inativos: MTPREV/MT', totalLabel: 'Efetivo legal: 5.600 cargos PJC', populacao: 3893659, governador: 'Mauro Mendes', comando: 'Delegada Daniela Silveira Maidel — Delegada-Geral', atualizado: 'Atualizado em 28/04/2026' },
  ppmt: { criacao: 'EC 104/2019 · SEJUS/MT · Polícia Penal MT', ativa: 2620, ativaLabel: 'Ativo informado: 2.620 policiais penais', reservaLabel: 'Inativos: MTPREV/MT', totalLabel: '2.620 ativos · inativos à parte', populacao: 3893659, governador: 'Mauro Mendes', comando: POLICIAS_PENAIS_INFO.ppmt.direcao, atualizado: POLICIAS_PENAIS_INFO.ppmt.atualizado }
};

/* ============================================================ */
/* === ESTRUTURA-BASE PARA UFs FALTANTES ======================= */
/* ============================================================ */
/*
  Bloco de expansão criado para manter os estados já cadastrados e abrir
  a estrutura dos demais entes da federação. Os valores ficam como
  "A confirmar" para permitir o preenchimento detalhado depois, sem
  copiar remunerações de São Paulo para outras UFs.
*/
const ESTADOS_ESTRUTURA_FALTANTES = [
  { estado: 'al', nome: 'Alagoas', sigla: 'AL', pm: 'pmal', pc: 'pcal', pp: 'ppal', pmSigla: 'PMAL', pcSigla: 'PCAL', ppSigla: 'PPAL', flag: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bandeira_de_Alagoas.svg' },
  { estado: 'am', nome: 'Amazonas', sigla: 'AM', pm: 'pmam', pc: 'pcam', pp: 'ppam', pmSigla: 'PMAM', pcSigla: 'PCAM', ppSigla: 'PPAM', flag: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bandeira_do_Amazonas.svg' },
  { estado: 'ap', nome: 'Amapá', sigla: 'AP', pm: 'pmap', pc: 'pcap', pp: 'ppap', pmSigla: 'PMAP', pcSigla: 'PCAP', ppSigla: 'PPAP', flag: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bandeira_do_Amap%C3%A1.svg' },
  { estado: 'ce', nome: 'Ceará', sigla: 'CE', pm: 'pmce', pc: 'pcce', pp: 'ppce', pmSigla: 'PMCE', pcSigla: 'PCCE', ppSigla: 'PPCE', flag: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bandeira_do_Cear%C3%A1.svg' },
  { estado: 'df', nome: 'Distrito Federal', sigla: 'DF', pm: 'pmdf', pc: 'pcdf', pp: 'ppdf', pmSigla: 'PMDF', pcSigla: 'PCDF', ppSigla: 'PPDF', flag: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bandeira_do_Distrito_Federal_(Brasil).svg' },
  { estado: 'go', nome: 'Goiás', sigla: 'GO', pm: 'pmgo', pc: 'pcgo', pp: 'ppgo', pmSigla: 'PMGO', pcSigla: 'PCGO', ppSigla: 'PPGO', flag: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bandeira_de_Goi%C3%A1s.svg' },
  { estado: 'ma', nome: 'Maranhão', sigla: 'MA', pm: 'pmma', pc: 'pcma', pp: 'ppma', pmSigla: 'PMMA', pcSigla: 'PCMA', ppSigla: 'PPMA', flag: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bandeira_do_Maranh%C3%A3o.svg' },
  { estado: 'pa', nome: 'Pará', sigla: 'PA', pm: 'pmpa', pc: 'pcpa', pp: 'pppa', pmSigla: 'PMPA', pcSigla: 'PCPA', ppSigla: 'PPPA', flag: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bandeira_do_Par%C3%A1.svg' },
  { estado: 'pb', nome: 'Paraíba', sigla: 'PB', pm: 'pmpb', pc: 'pcpb', pp: 'pppb', pmSigla: 'PMPB', pcSigla: 'PCPB', ppSigla: 'PPPB', flag: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bandeira_da_Para%C3%ADba.svg' },
  { estado: 'pe', nome: 'Pernambuco', sigla: 'PE', pm: 'pmpe', pc: 'pcpe', pp: 'pppe', pmSigla: 'PMPE', pcSigla: 'PCPE', ppSigla: 'PPPE', flag: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bandeira_de_Pernambuco.svg' },
  { estado: 'pi', nome: 'Piauí', sigla: 'PI', pm: 'pmpi', pc: 'pcpi', pp: 'pppi', pmSigla: 'PMPI', pcSigla: 'PCPI', ppSigla: 'PPPI', flag: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bandeira_do_Piau%C3%AD.svg' },
  { estado: 'rn', nome: 'Rio Grande do Norte', sigla: 'RN', pm: 'pmrn', pc: 'pcrn', pp: 'pprn', pmSigla: 'PMRN', pcSigla: 'PCRN', ppSigla: 'PPRN', flag: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bandeira_do_Rio_Grande_do_Norte.svg' },
  { estado: 'ro', nome: 'Rondônia', sigla: 'RO', pm: 'pmro', pc: 'pcro', pp: 'ppro', pmSigla: 'PMRO', pcSigla: 'PCRO', ppSigla: 'PPRO', flag: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bandeira_de_Rond%C3%B4nia.svg' },
  { estado: 'rr', nome: 'Roraima', sigla: 'RR', pm: 'pmrr', pc: 'pcrr', pp: 'pprr', pmSigla: 'PMRR', pcSigla: 'PCRR', ppSigla: 'PPRR', flag: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bandeira_de_Roraima.svg' },
  { estado: 'se', nome: 'Sergipe', sigla: 'SE', pm: 'pmse', pc: 'pcse', pp: 'ppse', pmSigla: 'PMSE', pcSigla: 'PCSE', ppSigla: 'PPSE', flag: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bandeira_de_Sergipe.svg' },
  { estado: 'to', nome: 'Tocantins', sigla: 'TO', pm: 'pmto', pc: 'pcto', pp: 'ppto', pmSigla: 'PMTO', pcSigla: 'PCTO', ppSigla: 'PPTO', flag: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bandeira_do_Tocantins.svg' }
];

const CARGOS_ESTRUTURA_GENERICAS = {};
const CONFIGS_INSTITUICOES_GENERICAS = {};

function criarCargoEstrutural(inst, val, text, oficial = false, selected = false) {
  return {
    val: `${val}_${inst}`,
    text,
    padrao: 0,
    gratif: 0,
    oficial,
    selected,
    retpFator: 0,
    valorPendente: true,
    fonteKey: inst,
    criterio: 'Estrutura-base cadastrada. Informe depois a tabela remuneratória oficial, lei, edital, classe/referência e rubricas da instituição.',
    benefDesc: 'Auxílios, adicionais, indenizações, escalas, gratificações e vantagens dependem da legislação local e ainda não foram preenchidos.',
    badge: 'Estrutura a preencher'
  };
}

function criarCargosPmEstrutura(inst, sigla) {
  return [
    criarCargoEstrutural(inst, 'cmtg', `${sigla} — Comandante-Geral`, true),
    criarCargoEstrutural(inst, 'cel', `${sigla} — Coronel`, true),
    criarCargoEstrutural(inst, 'tencel', `${sigla} — Tenente-Coronel`, true),
    criarCargoEstrutural(inst, 'maj', `${sigla} — Major`, true),
    criarCargoEstrutural(inst, 'cap', `${sigla} — Capitão`, true),
    criarCargoEstrutural(inst, '1ten', `${sigla} — 1º Tenente`, true),
    criarCargoEstrutural(inst, '2ten', `${sigla} — 2º Tenente`, true),
    criarCargoEstrutural(inst, 'aspof', `${sigla} — Aspirante a Oficial`, true),
    criarCargoEstrutural(inst, 'alof', `${sigla} — Aluno-Oficial / CFO`, false),
    criarCargoEstrutural(inst, 'subten', `${sigla} — Subtenente`, false),
    criarCargoEstrutural(inst, '1sgt', `${sigla} — 1º Sargento`, false),
    criarCargoEstrutural(inst, '2sgt', `${sigla} — 2º Sargento`, false),
    criarCargoEstrutural(inst, '3sgt', `${sigla} — 3º Sargento`, false),
    criarCargoEstrutural(inst, 'cabo', `${sigla} — Cabo`, false),
    criarCargoEstrutural(inst, 'sd1', `${sigla} — Soldado 1ª Classe`, false, true),
    criarCargoEstrutural(inst, 'sd2', `${sigla} — Soldado 2ª Classe / Aluno-Soldado`, false)
  ];
}

function criarCargosPcEstrutura(inst, sigla) {
  return [
    criarCargoEstrutural(inst, 'delegado_geral', `${sigla} — Delegado-Geral / Direção Superior`, true),
    criarCargoEstrutural(inst, 'delegado_esp', `${sigla} — Delegado de Polícia — Classe Especial`, true),
    criarCargoEstrutural(inst, 'delegado_1', `${sigla} — Delegado de Polícia — 1ª Classe`, true),
    criarCargoEstrutural(inst, 'delegado_2', `${sigla} — Delegado de Polícia — 2ª Classe`, true),
    criarCargoEstrutural(inst, 'delegado_3', `${sigla} — Delegado de Polícia — Classe Inicial`, true),
    criarCargoEstrutural(inst, 'perito_esp', `${sigla} — Perito / Médico Legista — Classe Especial`, true),
    criarCargoEstrutural(inst, 'perito_1', `${sigla} — Perito / Médico Legista — 1ª Classe`, true),
    criarCargoEstrutural(inst, 'perito_2', `${sigla} — Perito / Médico Legista — 2ª Classe`, true),
    criarCargoEstrutural(inst, 'perito_3', `${sigla} — Perito / Médico Legista — Classe Inicial`, true),
    criarCargoEstrutural(inst, 'investigador_esp', `${sigla} — Investigador / Agente / Escrivão — Classe Especial`, false),
    criarCargoEstrutural(inst, 'investigador_1', `${sigla} — Investigador / Agente / Escrivão — 1ª Classe`, false),
    criarCargoEstrutural(inst, 'investigador_2', `${sigla} — Investigador / Agente / Escrivão — 2ª Classe`, false),
    criarCargoEstrutural(inst, 'investigador_3', `${sigla} — Investigador / Agente / Escrivão — Classe Inicial`, false, true),
    criarCargoEstrutural(inst, 'papiloscopista', `${sigla} — Papiloscopista / Auxiliar / Técnico Policial`, false)
  ];
}

function criarCargosPpEstrutura(inst, sigla) {
  return [
    criarCargoEstrutural(inst, 'direcao_superior', `${sigla} — Direção / Comando da Polícia Penal`, true),
    criarCargoEstrutural(inst, 'classe_esp', `${sigla} — Policial Penal — Classe Especial`, false),
    criarCargoEstrutural(inst, 'classe_1', `${sigla} — Policial Penal — 1ª Classe`, false),
    criarCargoEstrutural(inst, 'classe_2', `${sigla} — Policial Penal — 2ª Classe`, false),
    criarCargoEstrutural(inst, 'classe_3', `${sigla} — Policial Penal — Classe Inicial`, false, true),
    criarCargoEstrutural(inst, 'aluno_formacao', `${sigla} — Aluno / Curso de Formação`, false)
  ];
}

function criarInfoPenalEstrutura(estado) {
  return {
    sigla: estado.ppSigla,
    nome: `Polícia Penal de ${estado.nome}`,
    uf: estado.nome,
    criacao: 'EC 104/2019 · estrutura estadual/distrital a preencher',
    marco: 'Estrutura aberta no site para receber histórico, legislação, carreira, organograma e dados oficiais da Polícia Penal local.',
    orgao: `Órgão gestor da administração penitenciária de ${estado.nome} — preencher`,
    direcao: 'Direção/comando atual — preencher',
    subordinacao: 'Sistema penitenciário estadual/distrital — preencher conforme legislação local.',
    efetivoAtivoLabel: 'Efetivo ativo — preencher',
    reservaLabel: 'Inativos/reserva — preencher',
    totalLabel: 'Total — preencher',
    relacaoLabel: 'Relação por habitante — preencher após informar efetivo e população',
    quadro: 'Quadro e carreira da Polícia Penal — preencher com lei, classes, níveis e requisitos.',
    ingresso: 'Concurso público, curso de formação, investigação social, exames, TAF e demais fases conforme edital local.',
    escolaridade: 'Preencher conforme edital vigente ou legislação da carreira.',
    formacao: 'Curso de formação e capacitação continuada — preencher com regras locais.',
    atribuicoes: 'Segurança interna e externa de unidades penais, custódia, escoltas, disciplina, inteligência prisional e demais atribuições legais — detalhar conforme norma local.',
    remuneracao: 'Tabela remuneratória ainda não preenchida; inserir valores oficiais, classe/referência e rubricas da carreira.',
    vantagens: 'Auxílios, adicionais, plantões, indenizações e vantagens a preencher conforme lei, escala, lotação e contracheque.',
    saude: 'Assistência à saúde e previdência — preencher conforme regime estadual/distrital.',
    previdencia: 'Regime próprio/previdência local — preencher regras, contribuição e aposentadoria policial aplicável.',
    concurso: {
      vagas: 'Preencher com edital/autorização vigente.',
      salario: 'A confirmar em edital, tabela oficial ou Diário Oficial.',
      banca: 'A definir/preencher conforme edital.',
      escolaridade: 'Preencher conforme edital.'
    },
    associacaoBusca: `associação ou sindicato dos policiais penais de ${estado.nome}`,
    fonte: `Fontes oficiais de ${estado.nome} — preencher`,
    url: '#',
    atualizado: 'Estrutura criada para preenchimento'
  };
}

function criarConcursoEstrutura(inst, info, ramo) {
  return {
    edital: `${info.titulo} — ${info.desc} — estrutura de concurso a preencher`,
    salario: 'A confirmar em edital, tabela oficial ou Diário Oficial.',
    vagas: 'Preencher com edital/autorização vigente.',
    cotas: 'Preencher conforme legislação local e edital.',
    idade: 'Preencher requisitos de idade, CNH, altura, aptidão física e demais exigências conforme edital.',
    escolaridade: 'Preencher escolaridade e requisitos do cargo conforme edital.',
    banca: 'A definir/preencher conforme edital.',
    inscritos: 'Preencher quando houver dado oficial.',
    materias: 'Preencher disciplinas conforme edital do cargo.',
    etapas: ramo === 'pm'
      ? 'Prova objetiva/discursiva quando prevista, TAF, exames médicos, avaliação psicológica, investigação social, curso de formação e demais etapas do edital.'
      : 'Prova objetiva/discursiva quando prevista, exames, investigação social, TAF quando aplicável, avaliação psicológica, curso de formação e demais etapas do edital.',
    cfsd: ramo === 'pm' ? 'Curso de Formação de Soldados/Oficiais — preencher.' : 'Curso de formação profissional — preencher.',
    estagio: 'Estágio probatório e desenvolvimento na carreira — preencher conforme lei local.',
    validade: 'Preencher conforme edital e atos de homologação/prorrogação.',
    previsao: 'Acompanhar Diário Oficial, órgão oficial e banca. Não afirmar concurso aberto sem publicação oficial.',
    site: '#'
  };
}

function criarAcoesEstrutura(info) {
  return [
    { titulo: `${info.titulo} — Estrutura de direitos e ações a preencher`, status: 'A preencher', ano: 'Base local pendente', tipo: 'individual', desc: 'Espaço reservado para inserir ações judiciais, teses administrativas, precedentes, prazos e observações específicas desta instituição.', base: 'Preencher com lei estadual/distrital, edital, estatuto, jurisprudência e documentos funcionais.', fonte: 'Fonte oficial a preencher', fonteUrl: '', atualizado: 'Estrutura criada para preenchimento' },
    { titulo: `${info.titulo} — Remuneração, adicionais e rubricas`, status: 'Verificar caso a caso', ano: 'Tema permanente', tipo: 'individual', desc: 'Use este item para detalhar adicionais, gratificações, auxílio-alimentação, insalubridade, periculosidade, serviço extraordinário, plantões e eventuais diferenças.', base: 'Tabela remuneratória, contracheque, laudo, escala, ato de designação e legislação local.', fonte: 'Documentos funcionais e normas locais', fonteUrl: '', atualizado: 'Estrutura criada para preenchimento' },
    { titulo: `${info.titulo} — Aposentadoria, reserva, reforma e previdência`, status: 'Análise individual', ano: 'Regra local a preencher', tipo: 'individual', desc: 'Espaço para regras previdenciárias, transições, paridade/integralidade quando aplicável, abono de permanência e regras próprias da carreira.', base: 'Data de ingresso, tempo de contribuição, cargo/carreira, sexo, idade, regime previdenciário e norma local.', fonte: 'Conferência previdenciária individual', fonteUrl: '', atualizado: 'Estrutura criada para preenchimento' }
  ];
}

function criarAssociacoesEstrutura(info, estadoNome) {
  return [
    { nome: `Associação/Sindicato — ${info.titulo}`, foco: `${estadoNome} — ${info.desc}`, acao: 'Espaço reservado para cadastrar entidade representativa, atuação institucional, pautas remuneratórias, previdenciárias e jurídicas da carreira.', site: 'Consultar site oficial da entidade local', telefone: 'Consultar diretamente', mensalidade: 'Consultar diretamente', servicos: 'Jurídico, comunicação institucional, convênios, assembleias, atendimento ao associado e acompanhamento legislativo — preencher conforme entidade.' },
    { nome: `Entidade representativa estadual — ${estadoNome}`, foco: `Profissionais ativos, inativos e pensionistas vinculados à ${info.titulo}`, acao: 'Cadastrar aqui associações, sindicatos, clubes e entidades de classe existentes na unidade federativa.', site: 'Consultar canais oficiais', telefone: 'Consultar diretamente', mensalidade: 'Consultar diretamente', servicos: 'Serviços a preencher conforme entidade.' }
  ];
}

function aplicarEstruturaEstadosFaltantesDados() {
  ESTADOS_ESTRUTURA_FALTANTES.forEach(estado => {
    if (!HEADER_ESTADOS[estado.estado]) {
      HEADER_ESTADOS[estado.estado] = { nome: estado.nome, sigla: estado.sigla, pm: estado.pm, pc: estado.pc, pp: estado.pp, flag: estado.flag };
    }

    const instituicoes = [
      { ramo: 'pm', inst: estado.pm, titulo: estado.pmSigla, desc: `Polícia Militar de ${estado.nome}` },
      { ramo: 'pc', inst: estado.pc, titulo: estado.pcSigla, desc: `Polícia Civil de ${estado.nome}` },
      { ramo: 'pp', inst: estado.pp, titulo: estado.ppSigla, desc: `Polícia Penal de ${estado.nome}` }
    ];

    instituicoes.forEach(item => {
      if (!INSTITUICOES_VALIDAS.includes(item.inst)) INSTITUICOES_VALIDAS.push(item.inst);
      if (!HEADER_INSTITUICOES_INFO[item.inst]) HEADER_INSTITUICOES_INFO[item.inst] = { titulo: item.titulo, desc: item.desc };
      if (!HEADER_INSTITUICOES_RESUMO[item.inst]) {
        HEADER_INSTITUICOES_RESUMO[item.inst] = {
          criacao: 'A preencher',
          ativaLabel: 'Efetivo ativo — preencher',
          reservaLabel: 'Reserva/inativos — preencher',
          totalLabel: 'Total — preencher',
          relacaoLabel: 'Relação ativa — preencher',
          populacao: 0,
          governador: 'Chefe do Executivo — preencher',
          comando: 'Comando/direção atual — preencher',
          atualizado: 'Estrutura criada para preenchimento'
        };
      }
      if (!REMUNERACAO_FONTES_OFICIAIS[item.inst]) {
        REMUNERACAO_FONTES_OFICIAIS[item.inst] = { nome: `${item.titulo} — fonte oficial a preencher`, url: '#' };
      }
      CONFIGS_INSTITUICOES_GENERICAS[item.inst] = {
        titulo: item.titulo,
        desc: item.desc,
        cor: item.ramo === 'pm' ? '#1f4f7a' : item.ramo === 'pc' ? '#4b5563' : '#6b5f2f',
        alertaPrev: `${item.titulo}: estrutura aberta para preenchimento. Conferir previdência, remuneração, adicionais, auxílios, regras de ingresso e direitos conforme legislação de ${estado.nome}.`
      };
      CONCURSOS[item.inst] = CONCURSOS[item.inst] || criarConcursoEstrutura(item.inst, item, item.ramo);
      ACOES_JUDICIAIS[item.inst] = ACOES_JUDICIAIS[item.inst] || criarAcoesEstrutura(item);
      ASSOCIACOES[item.inst] = ASSOCIACOES[item.inst] || criarAssociacoesEstrutura(item, estado.nome);
    });

    if (!POLICIAS_PENAIS_INFO[estado.pp]) POLICIAS_PENAIS_INFO[estado.pp] = criarInfoPenalEstrutura(estado);
    if (!CARGOS_ESTRUTURA_GENERICAS[estado.pm]) CARGOS_ESTRUTURA_GENERICAS[estado.pm] = criarCargosPmEstrutura(estado.pm, estado.pmSigla);
    if (!CARGOS_ESTRUTURA_GENERICAS[estado.pc]) CARGOS_ESTRUTURA_GENERICAS[estado.pc] = criarCargosPcEstrutura(estado.pc, estado.pcSigla);
    if (!CARGOS_ESTRUTURA_GENERICAS[estado.pp]) CARGOS_ESTRUTURA_GENERICAS[estado.pp] = criarCargosPpEstrutura(estado.pp, estado.ppSigla);
  });
}

function criarOptionInstituicao(inst, texto) {
  const opt = document.createElement('option');
  opt.value = inst;
  opt.textContent = texto;
  return opt;
}

function aplicarEstruturaEstadosFaltantesNoHtml() {
  const montarOptgroups = select => {
    if (!select) return;
    ESTADOS_ESTRUTURA_FALTANTES.forEach(estado => {
      if (Array.from(select.options || []).some(opt => opt.value === estado.pm)) return;
      const grupo = document.createElement('optgroup');
      grupo.label = estado.nome;
      grupo.appendChild(criarOptionInstituicao(estado.pm, `${estado.pmSigla} - Polícia Militar`));
      grupo.appendChild(criarOptionInstituicao(estado.pc, `${estado.pcSigla} - Polícia Civil`));
      grupo.appendChild(criarOptionInstituicao(estado.pp, `${estado.ppSigla} - Polícia Penal`));
      select.appendChild(grupo);
    });
  };

  montarOptgroups(document.getElementById('instituicao_header'));
  montarOptgroups(document.getElementById('instituicao'));

  const flags = document.querySelector('.header-state-flags');
  if (flags) {
    ESTADOS_ESTRUTURA_FALTANTES.forEach(estado => {
      if (flags.querySelector(`[data-estado="${estado.estado}"]`)) return;
      const btn = document.createElement('button');
      btn.className = 'state-flag';
      btn.type = 'button';
      btn.dataset.estado = estado.estado;
      btn.title = estado.nome;
      btn.setAttribute('aria-label', `Selecionar ${estado.nome}`);
      btn.setAttribute('aria-pressed', 'false');
      btn.onclick = () => selecionarEstado(estado.estado);
      btn.innerHTML = `<img src="${estado.flag}" alt="Bandeira de ${estado.nome}"><span>${estado.sigla}</span>`;
      flags.appendChild(btn);
    });
  }
}

aplicarEstruturaEstadosFaltantesDados();

function formatarNumeroHeader(valor) {
  return Number(valor || 0).toLocaleString('pt-BR');
}

function formatarEfetivoHeader(valor) {
  const numero = Number(valor || 0);
  if (!numero) return 'Não informado';
  if (numero >= 1000) {
    const mil = numero / 1000;
    const texto = Number.isInteger(mil) ? String(mil) : mil.toFixed(1).replace('.', ',');
    return `≈ ${texto} mil`;
  }
  return `≈ ${formatarNumeroHeader(numero)}`;
}

function calcularRelacaoHeader(populacao, ativa) {
  const pop = Number(populacao || 0);
  const ativo = Number(ativa || 0);
  if (!pop || !ativo) return 'Não informado';
  const habitantesPorAtivo = Math.round(pop / ativo);
  const percentual = ((ativo / pop) * 100).toFixed(3).replace('.', ',');
  return `1 ativo / ${habitantesPorAtivo.toLocaleString('pt-BR')} hab. · ${percentual}%`;
}

function atualizarLabelsHeaderResumo(labels = {}) {
  const padrao = {
    'header-label-criacao': 'Criação',
    'header-label-ativa': 'Efetivo ativo',
    'header-label-reserva': 'Reserva/inativos',
    'header-label-total': 'Efetivo total',
    'header-label-populacao': 'População UF',
    'header-label-relacao': 'Relação ativa',
    'header-label-governador': 'Chefe do Executivo',
    'header-label-comando': 'Comando atual'
  };

  Object.entries({ ...padrao, ...labels }).forEach(([id, valor]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = valor;
  });
}

function calcularResumoPortalHeader() {
  const instituicoes = INSTITUICOES_VALIDAS.length;
  const estados = Object.keys(HEADER_ESTADOS).length;
  let ativa = 0;
  let reserva = 0;
  let populacao = 0;

  INSTITUICOES_VALIDAS.forEach(inst => {
    const dados = HEADER_INSTITUICOES_RESUMO[inst] || {};
    const infoPenal = POLICIAS_PENAIS_INFO?.[inst] || {};
    ativa += Number(dados.ativa || infoPenal.efetivoAtivo || 0);
    reserva += Number(dados.reserva || 0);
  });

  Object.values(HEADER_ESTADOS).forEach(estado => {
    const ref = HEADER_INSTITUICOES_RESUMO[estado.pm] || HEADER_INSTITUICOES_RESUMO[estado.pc] || HEADER_INSTITUICOES_RESUMO[estado.pp] || {};
    populacao += Number(ref.populacao || 0);
  });

  return { instituicoes, estados, ativa, reserva, total: ativa + reserva, populacao };
}

function aplicarHeaderInicialPortal() {
  headerModoInicialPortal = true;
  document.body.setAttribute('data-inst', 'portal');
  setHeaderHeroImage('img/logoleao.jpeg');
  setSiteHeaderBackgroundImage('img/logoleao.jpeg');
  setPageInstitutionBackgroundImage('img/logoleao.jpeg');
  const card = document.querySelector('.header-institution-card');
  if (card) card.classList.add('header-portal-home');

  const resumoPortal = calcularResumoPortalHeader();
  const setTexto = (id, valor) => {
    const el = document.getElementById(id);
    if (el) el.textContent = valor;
  };

  const flagAtual = document.getElementById('header-active-flag');
  if (flagAtual) {
    configurarLogoInicialHeader(flagAtual);
    const moldura = flagAtual.closest('.current-flag-frame');
    if (moldura) {
      moldura.classList.remove('institution-logo-frame');
      moldura.classList.add('brand-logo-frame');
    }
  }

  setTexto('header-active-sigla', 'Universo');
  setTexto('header-active-name', 'Segurança Pública');
  setTexto('header-desc', 'Escolha uma instituição');
  setTexto('header-resumo-titulo', 'Resumo do portal');
  setTexto('header-resumo-atualizado', 'Visão geral do portal');

  atualizarLabelsHeaderResumo({
    'header-label-criacao': 'Instituições',
    'header-label-ativa': 'Ativos estimados',
    'header-label-reserva': 'Reserva/inativos',
    'header-label-total': 'Total abrangido',
    'header-label-populacao': 'População abrangida',
    'header-label-relacao': 'Estados',
    'header-label-governador': 'Cobertura',
    'header-label-comando': 'Primeiro passo'
  });

  setTexto('header-resumo-criacao', String(resumoPortal.instituicoes));
  setTexto('header-resumo-ativa', `${formatarEfetivoHeader(resumoPortal.ativa)}+`);
  setTexto('header-resumo-reserva', `${formatarEfetivoHeader(resumoPortal.reserva)}+`);
  setTexto('header-resumo-total', `${formatarEfetivoHeader(resumoPortal.total)}+`);
  setTexto('header-resumo-populacao', formatarNumeroHeader(resumoPortal.populacao));
  setTexto('header-resumo-relacao', `${resumoPortal.estados} estados`);
  setTexto('header-resumo-governador', 'Polícias militares, civis e penais');
  setTexto('header-resumo-comando', 'Selecione uma instituição para ver os dados específicos');

  ['instituicao', 'instituicao_header'].forEach(id => {
    const seletor = document.getElementById(id);
    if (seletor) seletor.value = '';
  });

  [['header-pm-sigla', 'PM'], ['header-pc-sigla', 'PC'], ['header-pp-sigla', 'PP']].forEach(([id, valor]) => setTexto(id, valor));
  ['header-branch-pm', 'header-branch-pc', 'header-branch-pp'].forEach(id => {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.disabled = true;
    btn.classList.remove('active');
    btn.setAttribute('aria-pressed', 'false');
  });

  document.querySelectorAll('.state-flag').forEach(flag => {
    flag.classList.remove('active');
    flag.setAttribute('aria-pressed', 'false');
  });

  atualizarVisibilidadeResumoInstitucional('principal');
}

function atualizarHeaderResumo(inst) {
  atualizarLabelsHeaderResumo();
  const tituloResumo = document.getElementById('header-resumo-titulo');
  if (tituloResumo) tituloResumo.textContent = 'Resumo institucional';

  const dados = HEADER_INSTITUICOES_RESUMO[inst] || HEADER_INSTITUICOES_RESUMO.pmesp;
  const totalEfetivo = Number(dados.ativa || 0) + Number(dados.reserva || 0);
  const setTexto = (id, valor) => {
    const el = document.getElementById(id);
    if (el) el.textContent = valor;
  };

  const ativaTexto = dados.ativaLabel || formatarEfetivoHeader(dados.ativa);
  const reservaTexto = dados.reservaLabel || formatarEfetivoHeader(dados.reserva);
  const totalTexto = dados.totalLabel || (totalEfetivo ? formatarEfetivoHeader(totalEfetivo) : 'Não informado');
  const relacaoTexto = dados.relacaoLabel || calcularRelacaoHeader(dados.populacao, dados.ativa);

  setTexto('header-resumo-atualizado', dados.atualizado || 'Atualizado');
  setTexto('header-resumo-criacao', dados.criacao || 'Não informado');
  setTexto('header-resumo-ativa', ativaTexto);
  setTexto('header-resumo-reserva', reservaTexto);
  setTexto('header-resumo-total', totalTexto);
  setTexto('header-resumo-populacao', dados.populacao ? formatarNumeroHeader(dados.populacao) : 'Não informado');
  setTexto('header-resumo-relacao', relacaoTexto);
  setTexto('header-resumo-governador', dados.governador || 'Não informado');
  setTexto('header-resumo-comando', dados.comando || 'Não informado');
}

function getEstadoDaInstituicao(inst) {
  return Object.keys(HEADER_ESTADOS).find(estado => {
    const item = HEADER_ESTADOS[estado];
    return item.pm === inst || item.pc === inst || item.pp === inst;
  }) || 'sp';
}

function selecionarEstado(estado) {
  const estadoNormalizado = String(estado || '').toLowerCase();
  const dadosEstado = HEADER_ESTADOS[estadoNormalizado];
  if (!dadosEstado) return;

  mudarInstituicao(dadosEstado.pm || dadosEstado.pc || dadosEstado.pp);
  switchPage('principal');
  mostrarToast(`${dadosEstado.nome} selecionado. Agora escolha Militar, Civil ou Penal no botão ao lado do seletor.`);
}

function selecionarRamo(ramo) {
  const estadoAtivo = getEstadoDaInstituicao(currInst);
  const dadosEstado = HEADER_ESTADOS[estadoAtivo] || HEADER_ESTADOS.sp;
  const instituicao = dadosEstado[ramo] || dadosEstado.pm || dadosEstado.pc || dadosEstado.pp;
  if (instituicao) mudarInstituicao(instituicao);
}

function atualizarHeaderInstitucional(inst) {
  const instituicao = HEADER_INSTITUICOES_INFO[inst] || HEADER_INSTITUICOES_INFO.pmesp;
  const estadoAtivo = getEstadoDaInstituicao(inst);
  const dadosEstado = HEADER_ESTADOS[estadoAtivo] || HEADER_ESTADOS.sp;

  const flagAtual = document.getElementById('header-active-flag');
  if (flagAtual) {
    const moldura = flagAtual.closest('.current-flag-frame');
    if (moldura) {
      moldura.classList.remove('brand-logo-frame');
      moldura.classList.add('institution-logo-frame');
    }
    aplicarImagemHeaderInstituicao(flagAtual, inst, dadosEstado, instituicao);
  }

  const siglaAtual = document.getElementById('header-active-sigla');
  if (siglaAtual) siglaAtual.textContent = instituicao.titulo;

  const nomeAtual = document.getElementById('header-active-name');
  if (nomeAtual) nomeAtual.textContent = instituicao.desc;

  const pmInfo = HEADER_INSTITUICOES_INFO[dadosEstado.pm];
  const pcInfo = HEADER_INSTITUICOES_INFO[dadosEstado.pc];
  const ppInfo = HEADER_INSTITUICOES_INFO[dadosEstado.pp];

  const pmSigla = document.getElementById('header-pm-sigla');
  if (pmSigla) pmSigla.textContent = pmInfo ? pmInfo.titulo : '—';

  const pcSigla = document.getElementById('header-pc-sigla');
  if (pcSigla) pcSigla.textContent = pcInfo ? pcInfo.titulo : '—';

  const ppSigla = document.getElementById('header-pp-sigla');
  if (ppSigla) ppSigla.textContent = ppInfo ? ppInfo.titulo : 'PP';

  const btnPm = document.getElementById('header-branch-pm');
  const btnPc = document.getElementById('header-branch-pc');
  const btnPp = document.getElementById('header-branch-pp');
  if (btnPm) {
    const ativo = !!dadosEstado.pm && inst === dadosEstado.pm;
    btnPm.disabled = !dadosEstado.pm;
    btnPm.classList.toggle('active', ativo);
    btnPm.setAttribute('aria-pressed', ativo ? 'true' : 'false');
  }
  if (btnPc) {
    const ativo = !!dadosEstado.pc && inst === dadosEstado.pc;
    btnPc.disabled = !dadosEstado.pc;
    btnPc.classList.toggle('active', ativo);
    btnPc.setAttribute('aria-pressed', ativo ? 'true' : 'false');
  }
  if (btnPp) {
    const ativo = !!dadosEstado.pp && inst === dadosEstado.pp;
    btnPp.disabled = !dadosEstado.pp;
    btnPp.classList.toggle('active', ativo);
    btnPp.setAttribute('aria-pressed', ativo ? 'true' : 'false');
  }

  atualizarHeaderResumo(inst);
}

function atualizarFlagsEstado(inst) {
  const estadoAtivo = getEstadoDaInstituicao(inst);
  document.querySelectorAll('.state-flag').forEach(flag => {
    const ativo = flag.dataset.estado === estadoAtivo;
    flag.classList.toggle('active', ativo);
    flag.setAttribute('aria-pressed', ativo ? 'true' : 'false');
  });
  atualizarHeaderInstitucional(inst);
}

function mudarInstituicao(novaInstituicao) {
  if (novaInstituicao === '') return;

  const configs = {
    pmac: { titulo: 'PMAC', desc: 'Polícia Militar do Acre', cor: '#006b3f', alertaPrev: 'PMAC: conferir Acreprevidência, LC AC 164/2006, tabela remuneratória, adicionais por tempo, serviço complementar, localização especial e contracheque.' },
    pcac: { titulo: 'PCAC', desc: 'Polícia Civil do Acre', cor: '#5b6472', alertaPrev: 'PCAC: conferir Acreprevidência, cargo, classe, titulação, serviço complementar, tabela oficial e regra de aposentadoria policial aplicada ao caso concreto.' },
    ppac: { titulo: 'PPAC', desc: POLICIAS_PENAIS_INFO.ppac.nome, cor: '#536b2f', alertaPrev: `${POLICIAS_PENAIS_INFO.ppac.sigla}: ${POLICIAS_PENAIS_INFO.ppac.previdencia} ${POLICIAS_PENAIS_INFO.ppac.vantagens}` },
    pmesp: { titulo: "PMESP", desc: "Polícia Militar de São Paulo", cor: "#e60000", alertaPrev: "SPPREV (previdência) é descontada automaticamente — 14% sobre vencimentos, RETP, quinquênios e sexta-parte." },
    pcsp:  { titulo: "PCSP",  desc: "Polícia Civil de São Paulo",   cor: "#4f4f4f", alertaPrev: "SPPREV (previdência) — 14% sobre vencimentos, GAT, quinquênios e sexta-parte." },
    pmerj: { titulo: "PMERJ", desc: "Polícia Militar do Rio de Janeiro", cor: "#1E3084", alertaPrev: "RioPrevidência — 14% sobre soldo, GRET, GHP, GRAM e triênios." },
    pcerj: { titulo: "PCERJ", desc: "Polícia Civil do Rio de Janeiro",    cor: "#6B7280", alertaPrev: "RioPrevidência — 14% sobre vencimento-base, AAP/representação, GHP, GATC e adicionais remuneratórios." },
    pmmg:  { titulo: "PMMG",  desc: "Polícia Militar de Minas Gerais",     cor: "#7c1a1a", alertaPrev: "IPSM — 10,5% (8% previdência + 2,5% saúde compulsória) sobre o subsídio." },
    pcmg:  { titulo: "PCMG",  desc: "Polícia Civil de Minas Gerais",        cor: "#b58d3d", alertaPrev: "IPSEMG — 11% previdência + 3,2% saúde (opcional) sobre subsídio." },
    pmba:  { titulo: "PMBA",  desc: "Polícia Militar da Bahia",             cor: "#967117", alertaPrev: "Funprev-BA — 14% sobre soldo, GAP, anuênios e CET." },
    pcba:  { titulo: "PCBA",  desc: "Polícia Civil da Bahia",                cor: "#333333", alertaPrev: "Funprev-BA — 14% sobre vencimento, anuênios, CET, GIP e GQUAL." },
    pmpr:  { titulo: "PMPR",  desc: "Polícia Militar do Paraná",              cor: "#2f6b3f", alertaPrev: "ParanáPrevidência/Sistema de Proteção Social Militar: contribuição previdenciária estimada em 14% sobre base remuneratória. FASPM é facultativo e calculado somente se selecionado." },
    pcpr:  { titulo: "PCPR",  desc: "Polícia Civil do Paraná",                 cor: "#1f5e89", alertaPrev: "ParanáPrevidência: contribuição previdenciária estimada em 14% sobre base remuneratória. Verbas indenizatórias ficam destacadas sem incidência automática." },
    pmrs:  { titulo: "PMRS",  desc: "Brigada Militar do Rio Grande do Sul",     cor: "#0f3d75", alertaPrev: "IPE Prev/RS e sistema de proteção dos militares estaduais: conferir contribuição previdenciária, rubricas e auxílio-alimentação no contracheque." },
    pcrs:  { titulo: "PCRS",  desc: "Polícia Civil do Rio Grande do Sul",       cor: "#5b6472", alertaPrev: "IPE Prev/RS: contribuição previdenciária conforme regra estadual; adicionais e indenizações dependem de rubrica e situação funcional." },
    pmsc:  { titulo: "PMSC",  desc: "Polícia Militar de Santa Catarina",        cor: "#1b4f8a", alertaPrev: "IPREV/SC e sistema de proteção dos militares estaduais: conferir contribuição previdenciária, subsídio, rubricas e auxílio-alimentação no contracheque." },
    pcsc:  { titulo: "PCSC",  desc: "Polícia Civil de Santa Catarina",          cor: "#4b5563", alertaPrev: "IPREV/SC: contribuição previdenciária conforme regra estadual; classes, subsídios e indenizações dependem de cargo, rubrica e situação funcional." },
    pmes:  { titulo: "PMES",  desc: "Polícia Militar do Espírito Santo",        cor: "#0b5c9e", alertaPrev: "IPAJM/ES e sistema estadual: conferir subsídio, referência, auxílio-alimentação, fardamento, serviço extra e demais rubricas no contracheque." },
    pces:  { titulo: "PCES",  desc: "Polícia Civil do Espírito Santo",          cor: "#4b3f72", alertaPrev: "IPAJM/ES: contribuição previdenciária conforme regra estadual; OIP, Delegado e demais carreiras exigem conferência de categoria, referência e rubricas." },
    ppsp: { titulo: "PPSP", desc: POLICIAS_PENAIS_INFO.ppsp.nome, cor: "#6f4e37", alertaPrev: `${POLICIAS_PENAIS_INFO.ppsp.sigla}: ${POLICIAS_PENAIS_INFO.ppsp.previdencia} ${POLICIAS_PENAIS_INFO.ppsp.vantagens}` },
    pprj: { titulo: "PPRJ", desc: POLICIAS_PENAIS_INFO.pprj.nome, cor: "#5a4b81", alertaPrev: `${POLICIAS_PENAIS_INFO.pprj.sigla}: ${POLICIAS_PENAIS_INFO.pprj.previdencia} ${POLICIAS_PENAIS_INFO.pprj.vantagens}` },
    ppmg: { titulo: "PPMG", desc: POLICIAS_PENAIS_INFO.ppmg.nome, cor: "#8b5a2b", alertaPrev: `${POLICIAS_PENAIS_INFO.ppmg.sigla}: ${POLICIAS_PENAIS_INFO.ppmg.previdencia} ${POLICIAS_PENAIS_INFO.ppmg.vantagens}` },
    ppba: { titulo: "PPBA", desc: POLICIAS_PENAIS_INFO.ppba.nome, cor: "#6b5b2e", alertaPrev: `${POLICIAS_PENAIS_INFO.ppba.sigla}: ${POLICIAS_PENAIS_INFO.ppba.previdencia} ${POLICIAS_PENAIS_INFO.ppba.vantagens}` },
    pppr: { titulo: "PPPR", desc: POLICIAS_PENAIS_INFO.pppr.nome, cor: "#41644a", alertaPrev: `${POLICIAS_PENAIS_INFO.pppr.sigla}: ${POLICIAS_PENAIS_INFO.pppr.previdencia} ${POLICIAS_PENAIS_INFO.pppr.vantagens}` },
    pprs: { titulo: "PPRS", desc: POLICIAS_PENAIS_INFO.pprs.nome, cor: "#315d7c", alertaPrev: `${POLICIAS_PENAIS_INFO.pprs.sigla}: ${POLICIAS_PENAIS_INFO.pprs.previdencia} ${POLICIAS_PENAIS_INFO.pprs.vantagens}` },
    ppsc: { titulo: "PPSC", desc: POLICIAS_PENAIS_INFO.ppsc.nome, cor: "#38598b", alertaPrev: `${POLICIAS_PENAIS_INFO.ppsc.sigla}: ${POLICIAS_PENAIS_INFO.ppsc.previdencia} ${POLICIAS_PENAIS_INFO.ppsc.vantagens}` },
    ppes: { titulo: "PPES", desc: POLICIAS_PENAIS_INFO.ppes.nome, cor: "#5e548e", alertaPrev: `${POLICIAS_PENAIS_INFO.ppes.sigla}: ${POLICIAS_PENAIS_INFO.ppes.previdencia} ${POLICIAS_PENAIS_INFO.ppes.vantagens}` },
    pmms: { titulo: "PMMS", desc: "Polícia Militar de Mato Grosso do Sul", cor: "#2f5f8f", alertaPrev: "PMMS: conferir sistema de proteção social dos militares estaduais, AGEPREV/MS, regra de ingresso, averbações, reserva remunerada e reforma conforme legislação estadual." },
    pcms: { titulo: "PCMS", desc: "Polícia Civil de Mato Grosso do Sul", cor: "#4b5563", alertaPrev: "PCMS: conferir LC MS 114/2005, LC MS 343/2024, AGEPREV/MS, cargo, classe, referência, tempo em atividade policial e regra de aposentadoria aplicada." },
    ppms: { titulo: "PPMS", desc: POLICIAS_PENAIS_INFO.ppms.nome, cor: "#516b3b", alertaPrev: `${POLICIAS_PENAIS_INFO.ppms.sigla}: ${POLICIAS_PENAIS_INFO.ppms.previdencia} ${POLICIAS_PENAIS_INFO.ppms.vantagens}` },
    pmmt: { titulo: "PMMT", desc: "Polícia Militar de Mato Grosso", cor: "#1f7a4d", alertaPrev: "PMMT: conferir sistema de proteção social dos militares estaduais, MTPREV/MT, regra de ingresso, averbações, reserva remunerada e reforma conforme legislação estadual." },
    pcmt: { titulo: "PCMT", desc: "Polícia Judiciária Civil de Mato Grosso", cor: "#5b6472", alertaPrev: "PCMT: conferir tabela salarial do Portal do Servidor/SEPLAG-MT, cargo, classe, nível, tempo em atividade policial, MTPREV/MT e regra de aposentadoria aplicada." },
    ppmt: { titulo: "PPMT", desc: POLICIAS_PENAIS_INFO.ppmt.nome, cor: "#6b5f2f", alertaPrev: `${POLICIAS_PENAIS_INFO.ppmt.sigla}: ${POLICIAS_PENAIS_INFO.ppmt.previdencia} ${POLICIAS_PENAIS_INFO.ppmt.vantagens}` }
  };

  Object.assign(configs, CONFIGS_INSTITUICOES_GENERICAS || {});

  const solicitada = novaInstituicao || document.getElementById('instituicao')?.value || currInst || 'pmesp';
  const inst = configs[solicitada] ? solicitada : 'pmesp';

  // Proteção contra instituições antigas/inexistentes salvas no navegador.
  // Sem isso, uma opção inválida salva no navegador poderia travar a inicialização.
  if (!configs[solicitada]) {
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) { /* silencioso */ }
  }

  headerModoInicialPortal = false;
  currInst = inst;
  document.body.setAttribute('data-inst', inst);

  ['instituicao', 'instituicao_header'].forEach(id => {
    const seletor = document.getElementById(id);
    if (!seletor) return;
    const existeOpcao = Array.from(seletor.options || []).some(o => o.value === inst);
    if (existeOpcao && seletor.value !== inst) seletor.value = inst;
  });

  const config = configs[inst];
  atualizarFlagsEstado(inst);

  // Atualiza textos visíveis
  const h1 = document.querySelector('.header-text h1');
  if (h1) h1.innerHTML = `Universo <span>Segurança Pública</span>`;
  atualizarHeaderDesc(config.desc);

  const atualizarTexto = (id, valor) => {
    const el = document.getElementById(id);
    if (el) el.textContent = valor;
  };
  atualizarTexto('txt-inst-dir', config.titulo);
  atualizarTexto('txt-inst-concursos', config.titulo);
  atualizarTexto('txt-inst-comparar', config.titulo);
  atualizarTexto('txt-inst-produtos', config.titulo);
  atualizarTexto('txt-inst-remuneracao', config.titulo);
  atualizarTexto('txt-inst-acoes', config.titulo);
  atualizarTexto('txt-inst-assoc', config.titulo);


  popularCargos(inst);
  analisarDireitos();
  carregarConcursos();
  carregarAcoes();
  carregarAssociacoes();
  carregarRemuneracaoTabelada();
  if (document.getElementById('page-comparar')?.classList.contains('active')) carregarComparadorCarreiras();
}


/* ============================================================ */
