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
  bmsp: 'img/bmsp.png',
  bmrj: 'img/bmrj.png',
  bmmg: 'img/bmmg.png',
  pmesp: 'img/pmesp.webp',
  pcsp: 'img/pcsp.webp',
  pmerj: 'img/pmerj.webp',
  pcerj: 'img/pcrj.webp',
  pmmg: 'img/pmmg.webp',
  pcmg: 'img/pcmg.webp',
  pmba: 'img/pmba.webp',
  pcba: 'img/pcba.webp',
  pmpr: 'img/pmpr.webp',
  pcpr: 'img/pcpr.webp',
  pmrs: 'img/pmrs.webp',
  pcrs: 'img/pcrs.webp',
  pmsc: 'img/pmsc.webp',
  pcsc: 'img/pcsc.webp',
  pmes: 'img/pmes.webp',
  pces: 'img/pces.webp',
  pmgo: 'img/pmgo.webp',
  pmms: 'img/pmms.webp',
  pcms: 'img/pcms.webp',
  pmmt: 'img/pmmt.webp',
  pcmt: 'img/pcmt.webp',
  ppsp: 'img/ppsp.webp',
  pprj: 'img/pprj.webp',
  ppmg: 'img/ppmg.webp',
  ppba: 'img/ppba.webp',
  pppr: 'img/pppr.webp',
  pprs: 'img/pprs.webp',
  ppes: 'img/ppes.webp',
  ppms: 'img/ppms.webp',
  ppmt: 'img/ppmt.webp',
  pmma: 'img/pmma.webp',
  pcma: 'img/pcma.webp',
  ppma: 'img/ppma.webp',
  pmto: 'img/pmto.webp',
  pcto: 'img/pcto.webp'
};


function setCssUrlVariable(elemento, nomeVariavel, src, fallback = 'img/logoleao.webp') {
  if (!elemento || !nomeVariavel) return;
  const imagemOriginal = String(src || fallback || 'img/logoleao.webp');
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
    const alternativas = ['img/logoleao.webp', 'img/logoleao.webp', 'img/logoleao.webp', 'img/logoleao.webp'];
    const indice = parseInt(this.dataset.logoRetry || '0', 10);
    if (indice < alternativas.length) {
      this.dataset.logoRetry = String(indice + 1);
      this.src = alternativas[indice];
      return;
    }
    this.onerror = null;
    this.style.display = 'none';
  };
  img.src = 'img/logoleao.webp';
}

function aplicarImagemHeaderInstituicao(img, inst, dadosEstado, instituicao) {
  const card = document.querySelector('.header-institution-card');
  if (card) card.classList.remove('header-portal-home');

  const imagemInstituicao = HEADER_INSTITUICOES_IMAGENS[inst];
  const fallbackBandeira = dadosEstado?.flag || HEADER_ESTADOS.sp.flag;
  const altInstituicao = instituicao?.desc || instituicao?.titulo || 'Instituição de segurança pública';

  // Cabeçalho do estado: volta a usar a bandeira como plano de fundo.
  setHeaderHeroImage(fallbackBandeira || 'img/logoleao.webp');
  setSiteHeaderBackgroundImage(fallbackBandeira || 'img/logoleao.webp');

  // Página grande: usa sempre o logo principal, independentemente da instituição selecionada.
  setPageInstitutionBackgroundImage('img/logoleao.webp');

  if (!img) return;
  img.style.display = '';
  img.removeAttribute('data-retry');
  img.removeAttribute('data-img-base');
  img.onerror = function () {
    if (imagemInstituicao && !this.dataset.fallbackJpegAplicado) {
      const jpegFallback = imagemInstituicao.replace(/\.webp$/i, '.jpeg');
      if (jpegFallback && jpegFallback !== this.getAttribute('src')) {
        this.dataset.fallbackJpegAplicado = 'true';
        this.src = jpegFallback;
        return;
      }
    }

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
  "pmesp": {
    "nome": "Polícia Militar de São Paulo",
    "sigla": "PMESP",
    "estado": "São Paulo",
    "estadoSigla": "SP",
    "tipo": "Polícia Militar",
    "criacao": "15/12/1831",
    "ativa": 80037,
    "ativaLabel": "80.037",
    "reserva": 90000,
    "reservaLabel": "90.000",
    "femininas": 10405,
    "femininasLabel": "10.405 · estimado",
    "populacao": 46081801,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 576 hab. · 0,174%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Tarcísio de Freitas",
    "comando": "Cel PM José Augusto Coutinho — Comandante-Geral",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pcsp": {
    "nome": "Polícia Civil de São Paulo",
    "sigla": "PCSP",
    "estado": "São Paulo",
    "estadoSigla": "SP",
    "tipo": "Polícia Civil",
    "criacao": "Origem histórica: 1841",
    "ativa": 21089,
    "ativaLabel": "21.089",
    "reserva": 35000,
    "reservaLabel": "35.000",
    "femininas": 5483,
    "femininasLabel": "5.483 · estimado",
    "populacao": 46081801,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 2.185 hab. · 0,046%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Tarcísio de Freitas",
    "comando": "Delegado Artur José Dian — Delegado-Geral de Polícia",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "ppsp": {
    "nome": "Polícia Penal de São Paulo",
    "sigla": "PPSP",
    "estado": "São Paulo",
    "estadoSigla": "SP",
    "tipo": "Polícia Penal",
    "criacao": "EC 104/2019 · Polícia Penal estadual/distrital",
    "ativa": 24758,
    "ativaLabel": "24.758",
    "reserva": 0,
    "reservaLabel": "0 · carreira civil sem reserva militar; inativos dependem do RPPS local",
    "femininas": 2926,
    "femininasLabel": "2.926",
    "populacao": 213401,
    "populacaoTitulo": "Presos atendidos",
    "relacaoLabel": "1 servidor / 9 presos",
    "relacaoTitulo": "Relação ativa/presos",
    "governador": "Tarcísio de Freitas",
    "comando": "Rodrigo Santos Andrade — Diretor-Geral da Polícia Penal/SP",
    "fonte": "SISDEPEN/SENAPPEN 1º semestre/2025; IBGE 2025; FBSP/Anuário 2025; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pmerj": {
    "nome": "Polícia Militar do Rio de Janeiro",
    "sigla": "PMERJ",
    "estado": "Rio de Janeiro",
    "estadoSigla": "RJ",
    "tipo": "Polícia Militar",
    "criacao": "13/05/1809",
    "ativa": 43362,
    "ativaLabel": "43.362",
    "reserva": 40000,
    "reservaLabel": "40.000",
    "femininas": 5637,
    "femininasLabel": "5.637 · estimado",
    "populacao": 17223547,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 397 hab. · 0,252%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Ricardo Couto — Governador em exercício",
    "comando": "Cel PM Sylvio Ricardo Ciuffo Guerra — Secretário de Estado e Comandante-Geral",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pcerj": {
    "nome": "Polícia Civil do Rio de Janeiro",
    "sigla": "PCERJ",
    "estado": "Rio de Janeiro",
    "estadoSigla": "RJ",
    "tipo": "Polícia Civil",
    "criacao": "Origem histórica: 1808",
    "ativa": 6694,
    "ativaLabel": "6.694",
    "reserva": 10000,
    "reservaLabel": "10.000",
    "femininas": 1740,
    "femininasLabel": "1.740 · estimado",
    "populacao": 17223547,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 2.573 hab. · 0,039%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Ricardo Couto — Governador em exercício",
    "comando": "Delegado Delmir Gouveia — Secretário de Estado de Polícia Civil",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pprj": {
    "nome": "Polícia Penal do Rio de Janeiro",
    "sigla": "PPRJ",
    "estado": "Rio de Janeiro",
    "estadoSigla": "RJ",
    "tipo": "Polícia Penal",
    "criacao": "EC 104/2019 · Polícia Penal estadual/distrital",
    "ativa": 2260,
    "ativaLabel": "2.260",
    "reserva": 0,
    "reservaLabel": "0 · carreira civil sem reserva militar; inativos dependem do RPPS local",
    "femininas": 359,
    "femininasLabel": "359",
    "populacao": 46354,
    "populacaoTitulo": "Presos atendidos",
    "relacaoLabel": "1 servidor / 21 presos",
    "relacaoTitulo": "Relação ativa/presos",
    "governador": "Ricardo Couto — Governador em exercício",
    "comando": "Secretaria de Estado de Polícia Penal do Rio de Janeiro — SEAP/SEPPEN",
    "fonte": "SISDEPEN/SENAPPEN 1º semestre/2025; IBGE 2025; FBSP/Anuário 2025; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pmmg": {
    "nome": "Polícia Militar de Minas Gerais",
    "sigla": "PMMG",
    "estado": "Minas Gerais",
    "estadoSigla": "MG",
    "tipo": "Polícia Militar",
    "criacao": "09/06/1775",
    "ativa": 36362,
    "ativaLabel": "36.362",
    "reserva": 45000,
    "reservaLabel": "45.000",
    "femininas": 4727,
    "femininasLabel": "4.727 · estimado",
    "populacao": 21393441,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 588 hab. · 0,170%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Mateus Simões",
    "comando": "Cel PM Carlos Frederico Otoni Garcia — Comandante-Geral",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pcmg": {
    "nome": "Polícia Civil de Minas Gerais",
    "sigla": "PCMG",
    "estado": "Minas Gerais",
    "estadoSigla": "MG",
    "tipo": "Polícia Civil",
    "criacao": "Origem histórica: 1891",
    "ativa": 8957,
    "ativaLabel": "8.957",
    "reserva": 11000,
    "reservaLabel": "11.000",
    "femininas": 2329,
    "femininasLabel": "2.329 · estimado",
    "populacao": 21393441,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 2.388 hab. · 0,042%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Mateus Simões",
    "comando": "Delegada-Geral Letícia Baptista Gamboge Reis — Chefe da Polícia Civil",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "ppmg": {
    "nome": "Polícia Penal de Minas Gerais",
    "sigla": "PPMG",
    "estado": "Minas Gerais",
    "estadoSigla": "MG",
    "tipo": "Polícia Penal",
    "criacao": "EC 104/2019 · Polícia Penal estadual/distrital",
    "ativa": 15045,
    "ativaLabel": "15.045",
    "reserva": 0,
    "reservaLabel": "0 · carreira civil sem reserva militar; inativos dependem do RPPS local",
    "femininas": 2337,
    "femininasLabel": "2.337",
    "populacao": 72149,
    "populacaoTitulo": "Presos atendidos",
    "relacaoLabel": "1 servidor / 5 presos",
    "relacaoTitulo": "Relação ativa/presos",
    "governador": "Mateus Simões",
    "comando": "Leonardo Mattos Alves Badaró — Diretor-Geral do Departamento Penitenciário/MG",
    "fonte": "SISDEPEN/SENAPPEN 1º semestre/2025; IBGE 2025; FBSP/Anuário 2025; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pmba": {
    "nome": "Polícia Militar da Bahia",
    "sigla": "PMBA",
    "estado": "Bahia",
    "estadoSigla": "BA",
    "tipo": "Polícia Militar",
    "criacao": "17/02/1825",
    "ativa": 29887,
    "ativaLabel": "29.887",
    "reserva": 27000,
    "reservaLabel": "27.000",
    "femininas": 3885,
    "femininasLabel": "3.885 · estimado",
    "populacao": 14870907,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 498 hab. · 0,201%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Jerônimo Rodrigues",
    "comando": "Cel PM Antônio Carlos Silva Magalhães — Comandante-Geral",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pcba": {
    "nome": "Polícia Civil da Bahia",
    "sigla": "PCBA",
    "estado": "Bahia",
    "estadoSigla": "BA",
    "tipo": "Polícia Civil",
    "criacao": "Origem histórica: 1833",
    "ativa": 4370,
    "ativaLabel": "4.370",
    "reserva": 7000,
    "reservaLabel": "7.000",
    "femininas": 1136,
    "femininasLabel": "1.136 · estimado",
    "populacao": 14870907,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 3.403 hab. · 0,029%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Jerônimo Rodrigues",
    "comando": "Delegado André Viana — Delegado-Geral",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "ppba": {
    "nome": "Polícia Penal da Bahia",
    "sigla": "PPBA",
    "estado": "Bahia",
    "estadoSigla": "BA",
    "tipo": "Polícia Penal",
    "criacao": "EC 104/2019 · Polícia Penal estadual/distrital",
    "ativa": 2706,
    "ativaLabel": "2.706",
    "reserva": 0,
    "reservaLabel": "0 · carreira civil sem reserva militar; inativos dependem do RPPS local",
    "femininas": 533,
    "femininasLabel": "533",
    "populacao": 15185,
    "populacaoTitulo": "Presos atendidos",
    "relacaoLabel": "1 servidor / 6 presos",
    "relacaoTitulo": "Relação ativa/presos",
    "governador": "Jerônimo Rodrigues",
    "comando": "José Castro — Secretário da SEAP/BA · Luiz Cláudio — Superintendência · Archimedes Neto — Segurança Prisional",
    "fonte": "SISDEPEN/SENAPPEN 1º semestre/2025; IBGE 2025; FBSP/Anuário 2025; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pmpr": {
    "nome": "Polícia Militar do Paraná",
    "sigla": "PMPR",
    "estado": "Paraná",
    "estadoSigla": "PR",
    "tipo": "Polícia Militar",
    "criacao": "10/08/1854",
    "ativa": 17036,
    "ativaLabel": "17.036",
    "reserva": 20000,
    "reservaLabel": "20.000",
    "femininas": 2215,
    "femininasLabel": "2.215 · estimado",
    "populacao": 11890517,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 698 hab. · 0,143%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Carlos Massa Ratinho Junior",
    "comando": "Cel PM Jefferson Silva — Comandante-Geral",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pcpr": {
    "nome": "Polícia Civil do Paraná",
    "sigla": "PCPR",
    "estado": "Paraná",
    "estadoSigla": "PR",
    "tipo": "Polícia Civil",
    "criacao": "Origem histórica: 1853",
    "ativa": 3716,
    "ativaLabel": "3.716",
    "reserva": 6000,
    "reservaLabel": "6.000",
    "femininas": 966,
    "femininasLabel": "966 · estimado",
    "populacao": 11890517,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 3.200 hab. · 0,031%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Carlos Massa Ratinho Junior",
    "comando": "Delegado Silvio Jacob Rockembach — Delegado-Geral",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pppr": {
    "nome": "Polícia Penal do Paraná",
    "sigla": "PPPR",
    "estado": "Paraná",
    "estadoSigla": "PR",
    "tipo": "Polícia Penal",
    "criacao": "EC 104/2019 · Polícia Penal estadual/distrital",
    "ativa": 4190,
    "ativaLabel": "4.190",
    "reserva": 0,
    "reservaLabel": "0 · carreira civil sem reserva militar; inativos dependem do RPPS local",
    "femininas": 670,
    "femininasLabel": "670",
    "populacao": 41743,
    "populacaoTitulo": "Presos atendidos",
    "relacaoLabel": "1 servidor / 10 presos",
    "relacaoTitulo": "Relação ativa/presos",
    "governador": "Carlos Massa Ratinho Junior",
    "comando": "Ananda Chalegre dos Santos — Diretora-Geral da Polícia Penal/PR",
    "fonte": "SISDEPEN/SENAPPEN 1º semestre/2025; IBGE 2025; FBSP/Anuário 2025; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pmrs": {
    "nome": "Brigada Militar do Rio Grande do Sul",
    "sigla": "PMRS",
    "estado": "Rio Grande do Sul",
    "estadoSigla": "RS",
    "tipo": "Polícia Militar",
    "criacao": "18/11/1837",
    "ativa": 17962,
    "ativaLabel": "17.962",
    "reserva": 23000,
    "reservaLabel": "23.000",
    "femininas": 3772,
    "femininasLabel": "3.772 · estimado",
    "populacao": 11233263,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 625 hab. · 0,160%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Eduardo Leite",
    "comando": "Cel PM Luigi Gustavo Soares Pereira — Comandante-Geral da Brigada Militar",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pcrs": {
    "nome": "Polícia Civil do Rio Grande do Sul",
    "sigla": "PCRS",
    "estado": "Rio Grande do Sul",
    "estadoSigla": "RS",
    "tipo": "Polícia Civil",
    "criacao": "Origem histórica: 1841",
    "ativa": 5711,
    "ativaLabel": "5.711",
    "reserva": 7000,
    "reservaLabel": "7.000",
    "femininas": 1485,
    "femininasLabel": "1.485 · estimado",
    "populacao": 11233263,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 1.967 hab. · 0,051%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Eduardo Leite",
    "comando": "Delegado Heraldo Chaves Guerreiro — Chefe de Polícia",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pprs": {
    "nome": "Polícia Penal do Rio Grande do Sul",
    "sigla": "PPRS",
    "estado": "Rio Grande do Sul",
    "estadoSigla": "RS",
    "tipo": "Polícia Penal",
    "criacao": "EC 104/2019 · Polícia Penal estadual/distrital",
    "ativa": 4881,
    "ativaLabel": "4.881",
    "reserva": 0,
    "reservaLabel": "0 · carreira civil sem reserva militar; inativos dependem do RPPS local",
    "femininas": 1509,
    "femininasLabel": "1.509",
    "populacao": 38519,
    "populacaoTitulo": "Presos atendidos",
    "relacaoLabel": "1 servidor / 8 presos",
    "relacaoTitulo": "Relação ativa/presos",
    "governador": "Eduardo Leite",
    "comando": "Sergio Dalcol — Superintendente da Polícia Penal/RS · Jorge Pozzobom — Secretário da SSPS",
    "fonte": "SISDEPEN/SENAPPEN 1º semestre/2025; IBGE 2025; FBSP/Anuário 2025; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pmsc": {
    "nome": "Polícia Militar de Santa Catarina",
    "sigla": "PMSC",
    "estado": "Santa Catarina",
    "estadoSigla": "SC",
    "tipo": "Polícia Militar",
    "criacao": "05/05/1835",
    "ativa": 9580,
    "ativaLabel": "9.580",
    "reserva": 12000,
    "reservaLabel": "12.000",
    "femininas": 1245,
    "femininasLabel": "1.245 · estimado",
    "populacao": 8187029,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 855 hab. · 0,117%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Jorginho Mello",
    "comando": "Cel PM Emerson Fernandes — Comandante-Geral",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pcsc": {
    "nome": "Polícia Civil de Santa Catarina",
    "sigla": "PCSC",
    "estado": "Santa Catarina",
    "estadoSigla": "SC",
    "tipo": "Polícia Civil",
    "criacao": "Origem histórica: 1812",
    "ativa": 3408,
    "ativaLabel": "3.408",
    "reserva": 4500,
    "reservaLabel": "4.500",
    "femininas": 886,
    "femininasLabel": "886 · estimado",
    "populacao": 8187029,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 2.402 hab. · 0,042%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Jorginho Mello",
    "comando": "Delegado Ulisses Gabriel — Delegado-Geral",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "ppsc": {
    "nome": "Polícia Penal de Santa Catarina",
    "sigla": "PPSC",
    "estado": "Santa Catarina",
    "estadoSigla": "SC",
    "tipo": "Polícia Penal",
    "criacao": "EC 104/2019 · Polícia Penal estadual/distrital",
    "ativa": 3487,
    "ativaLabel": "3.487",
    "reserva": 0,
    "reservaLabel": "0 · carreira civil sem reserva militar; inativos dependem do RPPS local",
    "femininas": 754,
    "femininasLabel": "754",
    "populacao": 28975,
    "populacaoTitulo": "Presos atendidos",
    "relacaoLabel": "1 servidor / 8 presos",
    "relacaoTitulo": "Relação ativa/presos",
    "governador": "Jorginho Mello",
    "comando": "Maicon Ronald Alves — Diretor-Geral do Departamento de Polícia Penal/SC",
    "fonte": "SISDEPEN/SENAPPEN 1º semestre/2025; IBGE 2025; FBSP/Anuário 2025; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pmes": {
    "nome": "Polícia Militar do Espírito Santo",
    "sigla": "PMES",
    "estado": "Espírito Santo",
    "estadoSigla": "ES",
    "tipo": "Polícia Militar",
    "criacao": "06/04/1835",
    "ativa": 7890,
    "ativaLabel": "7.890",
    "reserva": 7000,
    "reservaLabel": "7.000",
    "femininas": 1026,
    "femininasLabel": "1.026 · estimado",
    "populacao": 4126854,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 523 hab. · 0,191%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Ricardo Ferraço",
    "comando": "Cel PM Ríodo Lopes Rubim — Comandante-Geral",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pces": {
    "nome": "Polícia Civil do Espírito Santo",
    "sigla": "PCES",
    "estado": "Espírito Santo",
    "estadoSigla": "ES",
    "tipo": "Polícia Civil",
    "criacao": "Origem histórica: 1896",
    "ativa": 1867,
    "ativaLabel": "1.867",
    "reserva": 3500,
    "reservaLabel": "3.500",
    "femininas": 485,
    "femininasLabel": "485 · estimado",
    "populacao": 4126854,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 2.210 hab. · 0,045%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Ricardo Ferraço",
    "comando": "Delegado-Geral Jordano Bruno — Delegado-Geral",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "ppes": {
    "nome": "Polícia Penal do Espírito Santo",
    "sigla": "PPES",
    "estado": "Espírito Santo",
    "estadoSigla": "ES",
    "tipo": "Polícia Penal",
    "criacao": "EC 104/2019 · Polícia Penal estadual/distrital",
    "ativa": 2836,
    "ativaLabel": "2.836",
    "reserva": 0,
    "reservaLabel": "0 · carreira civil sem reserva militar; inativos dependem do RPPS local",
    "femininas": 678,
    "femininasLabel": "678",
    "populacao": 25021,
    "populacaoTitulo": "Presos atendidos",
    "relacaoLabel": "1 servidor / 9 presos",
    "relacaoTitulo": "Relação ativa/presos",
    "governador": "Ricardo Ferraço",
    "comando": "José Franco Morais Junior — Diretor-Geral da Polícia Penal/ES",
    "fonte": "SISDEPEN/SENAPPEN 1º semestre/2025; IBGE 2025; FBSP/Anuário 2025; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pmms": {
    "nome": "Polícia Militar de Mato Grosso do Sul",
    "sigla": "PMMS",
    "estado": "Mato Grosso do Sul",
    "estadoSigla": "MS",
    "tipo": "Polícia Militar",
    "criacao": "05/09/1835 · estrutura de MS em 1979",
    "ativa": 5237,
    "ativaLabel": "5.237",
    "reserva": 5499,
    "reservaLabel": "5.499 · estimativa técnica",
    "femininas": 681,
    "femininasLabel": "681 · estimado",
    "populacao": 2924631,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 558 hab. · 0,179%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Eduardo Riedel",
    "comando": "Cel QOPM Renato dos Anjos Garnes — Comandante-Geral",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pcms": {
    "nome": "Polícia Civil de Mato Grosso do Sul",
    "sigla": "PCMS",
    "estado": "Mato Grosso do Sul",
    "estadoSigla": "MS",
    "tipo": "Polícia Civil",
    "criacao": "Abril/1979 · LC MS 114/2005",
    "ativa": 1971,
    "ativaLabel": "1.971",
    "reserva": 2168,
    "reservaLabel": "2.168 · estimativa técnica",
    "femininas": 512,
    "femininasLabel": "512 · estimado",
    "populacao": 2924631,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 1.484 hab. · 0,067%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Eduardo Riedel",
    "comando": "Delegado Lupérsio Degerone Lúcio — Delegado-Geral",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "ppms": {
    "nome": "Polícia Penal de Mato Grosso do Sul",
    "sigla": "PPMS",
    "estado": "Mato Grosso do Sul",
    "estadoSigla": "MS",
    "tipo": "Polícia Penal",
    "criacao": "EC 104/2019 · Polícia Penal estadual/distrital",
    "ativa": 1232,
    "ativaLabel": "1.232",
    "reserva": 0,
    "reservaLabel": "0 · carreira civil sem reserva militar; inativos dependem do RPPS local",
    "femininas": 428,
    "femininasLabel": "428",
    "populacao": 17478,
    "populacaoTitulo": "Presos atendidos",
    "relacaoLabel": "1 servidor / 14 presos",
    "relacaoTitulo": "Relação ativa/presos",
    "governador": "Eduardo Riedel",
    "comando": "Direção da Polícia Penal de Mato Grosso do Sul — AGEPEN/MS",
    "fonte": "SISDEPEN/SENAPPEN 1º semestre/2025; IBGE 2025; FBSP/Anuário 2025; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pmmt": {
    "nome": "Polícia Militar de Mato Grosso",
    "sigla": "PMMT",
    "estado": "Mato Grosso",
    "estadoSigla": "MT",
    "tipo": "Polícia Militar",
    "criacao": "05/09/1835",
    "ativa": 6752,
    "ativaLabel": "6.752",
    "reserva": 7090,
    "reservaLabel": "7.090 · estimativa técnica",
    "femininas": 608,
    "femininasLabel": "608 · estimado",
    "populacao": 3893659,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 577 hab. · 0,173%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Otaviano Pivetta",
    "comando": "Cel PM Claudio Fernando Carneiro Tinoco — Comandante-Geral",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pcmt": {
    "nome": "Polícia Judiciária Civil de Mato Grosso",
    "sigla": "PCMT",
    "estado": "Mato Grosso",
    "estadoSigla": "MT",
    "tipo": "Polícia Civil",
    "criacao": "Lei MT 7.935/2003 · LC MT 407/2010",
    "ativa": 2887,
    "ativaLabel": "2.887",
    "reserva": 3176,
    "reservaLabel": "3.176 · estimativa técnica",
    "femininas": 751,
    "femininasLabel": "751 · estimado",
    "populacao": 3893659,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 1.349 hab. · 0,074%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Otaviano Pivetta",
    "comando": "Delegada Daniela Silveira Maidel — Delegada-Geral",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "ppmt": {
    "nome": "Polícia Penal de Mato Grosso",
    "sigla": "PPMT",
    "estado": "Mato Grosso",
    "estadoSigla": "MT",
    "tipo": "Polícia Penal",
    "criacao": "EC 104/2019 · Polícia Penal estadual/distrital",
    "ativa": 2096,
    "ativaLabel": "2.096",
    "reserva": 0,
    "reservaLabel": "0 · carreira civil sem reserva militar; inativos dependem do RPPS local",
    "femininas": 623,
    "femininasLabel": "623",
    "populacao": 14770,
    "populacaoTitulo": "Presos atendidos",
    "relacaoLabel": "1 servidor / 7 presos",
    "relacaoTitulo": "Relação ativa/presos",
    "governador": "Otaviano Pivetta",
    "comando": "Direção da Polícia Penal de Mato Grosso — SEJUS/MT",
    "fonte": "SISDEPEN/SENAPPEN 1º semestre/2025; IBGE 2025; FBSP/Anuário 2025; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pmac": {
    "nome": "Polícia Militar do Acre",
    "sigla": "PMAC",
    "estado": "Acre",
    "estadoSigla": "AC",
    "tipo": "Polícia Militar",
    "criacao": "1916",
    "ativa": 2540,
    "ativaLabel": "2.540",
    "reserva": 2667,
    "reservaLabel": "2.667 · estimativa técnica",
    "femininas": 330,
    "femininasLabel": "330 · estimado",
    "populacao": 884372,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 348 hab. · 0,287%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Mailza Assis Cameli",
    "comando": "Cel PM Marta Renata da Silva Freitas Alves — Comandante-Geral",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pcac": {
    "nome": "Polícia Civil do Acre",
    "sigla": "PCAC",
    "estado": "Acre",
    "estadoSigla": "AC",
    "tipo": "Polícia Civil",
    "criacao": "Órgão estadual de polícia judiciária · origem republicana",
    "ativa": 893,
    "ativaLabel": "893",
    "reserva": 982,
    "reservaLabel": "982 · estimativa técnica",
    "femininas": 232,
    "femininasLabel": "232 · estimado",
    "populacao": 884372,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 990 hab. · 0,101%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Mailza Assis Cameli",
    "comando": "Pedro Paulo Buzolin — Delegado-Geral da Polícia Civil do Acre",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "ppac": {
    "nome": "Polícia Penal do Acre",
    "sigla": "PPAC",
    "estado": "Acre",
    "estadoSigla": "AC",
    "tipo": "Polícia Penal",
    "criacao": "EC 104/2019 · Polícia Penal estadual/distrital",
    "ativa": 651,
    "ativaLabel": "651",
    "reserva": 0,
    "reservaLabel": "0 · carreira civil sem reserva militar; inativos dependem do RPPS local",
    "femininas": 114,
    "femininasLabel": "114",
    "populacao": 5528,
    "populacaoTitulo": "Presos atendidos",
    "relacaoLabel": "1 servidor / 8 presos",
    "relacaoTitulo": "Relação ativa/presos",
    "governador": "Mailza Assis Cameli",
    "comando": "Direção da Polícia Penal do Acre — IAPEN/AC",
    "fonte": "SISDEPEN/SENAPPEN 1º semestre/2025; IBGE 2025; FBSP/Anuário 2025; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pmal": {
    "nome": "Polícia Militar de Alagoas",
    "sigla": "PMAL",
    "estado": "Alagoas",
    "estadoSigla": "AL",
    "tipo": "Polícia Militar",
    "criacao": "03/02/1832",
    "ativa": 6960,
    "ativaLabel": "6.960",
    "reserva": 7308,
    "reservaLabel": "7.308 · estimativa técnica",
    "femininas": 905,
    "femininasLabel": "905 · estimado",
    "populacao": 3220848,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 463 hab. · 0,216%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Paulo Dantas",
    "comando": "Cel PM Paulo Amorim — Comandante-Geral da PMAL",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pcal": {
    "nome": "Polícia Civil de Alagoas",
    "sigla": "PCAL",
    "estado": "Alagoas",
    "estadoSigla": "AL",
    "tipo": "Polícia Civil",
    "criacao": "Polícia Civil estadual · origem histórica republicana",
    "ativa": 1810,
    "ativaLabel": "1.810",
    "reserva": 1991,
    "reservaLabel": "1.991 · estimativa técnica",
    "femininas": 471,
    "femininasLabel": "471 · estimado",
    "populacao": 3220848,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 1.779 hab. · 0,056%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Paulo Dantas",
    "comando": "Delegado Gustavo Xavier — Delegado-Geral da Polícia Civil de Alagoas",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "ppal": {
    "nome": "Polícia Penal de Alagoas",
    "sigla": "PPAL",
    "estado": "Alagoas",
    "estadoSigla": "AL",
    "tipo": "Polícia Penal",
    "criacao": "EC 104/2019 · Polícia Penal estadual/distrital",
    "ativa": 508,
    "ativaLabel": "508",
    "reserva": 0,
    "reservaLabel": "0 · carreira civil sem reserva militar; inativos dependem do RPPS local",
    "femininas": 153,
    "femininasLabel": "153",
    "populacao": 5536,
    "populacaoTitulo": "Presos atendidos",
    "relacaoLabel": "1 servidor / 11 presos",
    "relacaoTitulo": "Relação ativa/presos",
    "governador": "Paulo Dantas",
    "comando": "Diretor/Secretário da PPAL — nome a confirmar em fonte oficial",
    "fonte": "SISDEPEN/SENAPPEN 1º semestre/2025; IBGE 2025; FBSP/Anuário 2025; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pmam": {
    "nome": "Polícia Militar do Amazonas",
    "sigla": "PMAM",
    "estado": "Amazonas",
    "estadoSigla": "AM",
    "tipo": "Polícia Militar",
    "criacao": "04/04/1837",
    "ativa": 8250,
    "ativaLabel": "8.250",
    "reserva": 8662,
    "reservaLabel": "8.662 · estimativa técnica",
    "femininas": 1072,
    "femininasLabel": "1.072 · estimado",
    "populacao": 4321616,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 524 hab. · 0,191%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Roberto Cidade — Governador em exercício",
    "comando": "Comandante-Geral da PMAM — nome a confirmar em fonte oficial",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pcam": {
    "nome": "Polícia Civil do Amazonas",
    "sigla": "PCAM",
    "estado": "Amazonas",
    "estadoSigla": "AM",
    "tipo": "Polícia Civil",
    "criacao": "Polícia Civil estadual · origem histórica republicana",
    "ativa": 1867,
    "ativaLabel": "1.867",
    "reserva": 2054,
    "reservaLabel": "2.054 · estimativa técnica",
    "femininas": 485,
    "femininasLabel": "485 · estimado",
    "populacao": 4321616,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 2.315 hab. · 0,043%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Roberto Cidade — Governador em exercício",
    "comando": "Delegado-Geral da PCAM — nome a confirmar em fonte oficial",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "ppam": {
    "nome": "Polícia Penal do Amazonas",
    "sigla": "PPAM",
    "estado": "Amazonas",
    "estadoSigla": "AM",
    "tipo": "Polícia Penal",
    "criacao": "EC 104/2019 · Polícia Penal estadual/distrital",
    "ativa": 1125,
    "ativaLabel": "1.125",
    "reserva": 0,
    "reservaLabel": "0 · carreira civil sem reserva militar; inativos dependem do RPPS local",
    "femininas": 159,
    "femininasLabel": "159",
    "populacao": 5657,
    "populacaoTitulo": "Presos atendidos",
    "relacaoLabel": "1 servidor / 5 presos",
    "relacaoTitulo": "Relação ativa/presos",
    "governador": "Roberto Cidade — Governador em exercício",
    "comando": "Diretor/Secretário da PPAM — nome a confirmar em fonte oficial",
    "fonte": "SISDEPEN/SENAPPEN 1º semestre/2025; IBGE 2025; FBSP/Anuário 2025; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pmap": {
    "nome": "Polícia Militar do Amapá",
    "sigla": "PMAP",
    "estado": "Amapá",
    "estadoSigla": "AP",
    "tipo": "Polícia Militar",
    "criacao": "17/02/1944",
    "ativa": 3109,
    "ativaLabel": "3.109",
    "reserva": 3264,
    "reservaLabel": "3.264 · estimativa técnica",
    "femininas": 871,
    "femininasLabel": "871 · estimado",
    "populacao": 806517,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 259 hab. · 0,385%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Clécio Luís",
    "comando": "Comandante-Geral da PMAP — nome a confirmar em fonte oficial",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pcap": {
    "nome": "Polícia Civil do Amapá",
    "sigla": "PCAP",
    "estado": "Amapá",
    "estadoSigla": "AP",
    "tipo": "Polícia Civil",
    "criacao": "Polícia Civil estadual · estrutura estadual",
    "ativa": 1010,
    "ativaLabel": "1.010",
    "reserva": 1111,
    "reservaLabel": "1.111 · estimativa técnica",
    "femininas": 263,
    "femininasLabel": "263 · estimado",
    "populacao": 806517,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 799 hab. · 0,125%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Clécio Luís",
    "comando": "Delegado-Geral da PCAP — nome a confirmar em fonte oficial",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "ppap": {
    "nome": "Polícia Penal do Amapá",
    "sigla": "PPAP",
    "estado": "Amapá",
    "estadoSigla": "AP",
    "tipo": "Polícia Penal",
    "criacao": "EC 104/2019 · Polícia Penal estadual/distrital",
    "ativa": 767,
    "ativaLabel": "767",
    "reserva": 0,
    "reservaLabel": "0 · carreira civil sem reserva militar; inativos dependem do RPPS local",
    "femininas": 216,
    "femininasLabel": "216",
    "populacao": 3781,
    "populacaoTitulo": "Presos atendidos",
    "relacaoLabel": "1 servidor / 5 presos",
    "relacaoTitulo": "Relação ativa/presos",
    "governador": "Clécio Luís",
    "comando": "Diretor/Secretário da PPAP — nome a confirmar em fonte oficial",
    "fonte": "SISDEPEN/SENAPPEN 1º semestre/2025; IBGE 2025; FBSP/Anuário 2025; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pmce": {
    "nome": "Polícia Militar do Ceará",
    "sigla": "PMCE",
    "estado": "Ceará",
    "estadoSigla": "CE",
    "tipo": "Polícia Militar",
    "criacao": "24/05/1835",
    "ativa": 22427,
    "ativaLabel": "22.427",
    "reserva": 23548,
    "reservaLabel": "23.548 · estimativa técnica",
    "femininas": 1346,
    "femininasLabel": "1.346 · estimado",
    "populacao": 9268836,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 413 hab. · 0,242%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Elmano de Freitas",
    "comando": "Comandante-Geral da PMCE — nome a confirmar em fonte oficial",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pcce": {
    "nome": "Polícia Civil do Ceará",
    "sigla": "PCCE",
    "estado": "Ceará",
    "estadoSigla": "CE",
    "tipo": "Polícia Civil",
    "criacao": "Polícia Civil estadual · origem histórica republicana",
    "ativa": 4149,
    "ativaLabel": "4.149",
    "reserva": 4564,
    "reservaLabel": "4.564 · estimativa técnica",
    "femininas": 1079,
    "femininasLabel": "1.079 · estimado",
    "populacao": 9268836,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 2.234 hab. · 0,045%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Elmano de Freitas",
    "comando": "Delegado-Geral da PCCE — nome a confirmar em fonte oficial",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "ppce": {
    "nome": "Polícia Penal do Ceará",
    "sigla": "PPCE",
    "estado": "Ceará",
    "estadoSigla": "CE",
    "tipo": "Polícia Penal",
    "criacao": "EC 104/2019 · Polícia Penal estadual/distrital",
    "ativa": 2959,
    "ativaLabel": "2.959",
    "reserva": 0,
    "reservaLabel": "0 · carreira civil sem reserva militar; inativos dependem do RPPS local",
    "femininas": 555,
    "femininasLabel": "555",
    "populacao": 23832,
    "populacaoTitulo": "Presos atendidos",
    "relacaoLabel": "1 servidor / 8 presos",
    "relacaoTitulo": "Relação ativa/presos",
    "governador": "Elmano de Freitas",
    "comando": "Diretor/Secretário da PPCE — nome a confirmar em fonte oficial",
    "fonte": "SISDEPEN/SENAPPEN 1º semestre/2025; IBGE 2025; FBSP/Anuário 2025; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pmdf": {
    "nome": "Polícia Militar do Distrito Federal",
    "sigla": "PMDF",
    "estado": "Distrito Federal",
    "estadoSigla": "DF",
    "tipo": "Polícia Militar",
    "criacao": "13/05/1809 · PMDF organizada no DF",
    "ativa": 10567,
    "ativaLabel": "10.567",
    "reserva": 11095,
    "reservaLabel": "11.095 · estimativa técnica",
    "femininas": 1374,
    "femininasLabel": "1.374 · estimado",
    "populacao": 2996899,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 284 hab. · 0,353%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Celina Leão",
    "comando": "Comandante-Geral da PMDF — nome a confirmar em fonte oficial",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pcdf": {
    "nome": "Polícia Civil do Distrito Federal",
    "sigla": "PCDF",
    "estado": "Distrito Federal",
    "estadoSigla": "DF",
    "tipo": "Polícia Civil",
    "criacao": "Polícia Civil do Distrito Federal · estrutura distrital",
    "ativa": 3440,
    "ativaLabel": "3.440",
    "reserva": 3784,
    "reservaLabel": "3.784 · estimativa técnica",
    "femininas": 894,
    "femininasLabel": "894 · estimado",
    "populacao": 2996899,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 871 hab. · 0,115%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Celina Leão",
    "comando": "Delegado-Geral da PCDF — nome a confirmar em fonte oficial",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "ppdf": {
    "nome": "Polícia Penal do Distrito Federal",
    "sigla": "PPDF",
    "estado": "Distrito Federal",
    "estadoSigla": "DF",
    "tipo": "Polícia Penal",
    "criacao": "EC 104/2019 · Polícia Penal estadual/distrital",
    "ativa": 1523,
    "ativaLabel": "1.523",
    "reserva": 0,
    "reservaLabel": "0 · carreira civil sem reserva militar; inativos dependem do RPPS local",
    "femininas": 457,
    "femininasLabel": "457",
    "populacao": 16455,
    "populacaoTitulo": "Presos atendidos",
    "relacaoLabel": "1 servidor / 11 presos",
    "relacaoTitulo": "Relação ativa/presos",
    "governador": "Celina Leão",
    "comando": "Diretor/Secretário da PPDF — nome a confirmar em fonte oficial",
    "fonte": "SISDEPEN/SENAPPEN 1º semestre/2025; IBGE 2025; FBSP/Anuário 2025; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pmgo": {
    "nome": "Polícia Militar de Goiás",
    "sigla": "PMGO",
    "estado": "Goiás",
    "estadoSigla": "GO",
    "tipo": "Polícia Militar",
    "criacao": "28/07/1858",
    "ativa": 10987,
    "ativaLabel": "10.987",
    "reserva": 11536,
    "reservaLabel": "11.536 · estimativa técnica",
    "femininas": 1428,
    "femininasLabel": "1.428 · estimado",
    "populacao": 7423629,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 676 hab. · 0,148%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Daniel Vilela",
    "comando": "Comandante-Geral da PMGO — nome a confirmar em fonte oficial",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pcgo": {
    "nome": "Polícia Civil de Goiás",
    "sigla": "PCGO",
    "estado": "Goiás",
    "estadoSigla": "GO",
    "tipo": "Polícia Civil",
    "criacao": "Polícia Civil estadual · origem histórica republicana",
    "ativa": 2884,
    "ativaLabel": "2.884",
    "reserva": 3172,
    "reservaLabel": "3.172 · estimativa técnica",
    "femininas": 750,
    "femininasLabel": "750 · estimado",
    "populacao": 7423629,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 2.574 hab. · 0,039%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Daniel Vilela",
    "comando": "Delegado-Geral da PCGO — nome a confirmar em fonte oficial",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "ppgo": {
    "nome": "Polícia Penal de Goiás",
    "sigla": "PPGO",
    "estado": "Goiás",
    "estadoSigla": "GO",
    "tipo": "Polícia Penal",
    "criacao": "EC 104/2019 · Polícia Penal estadual/distrital",
    "ativa": 2517,
    "ativaLabel": "2.517",
    "reserva": 0,
    "reservaLabel": "0 · carreira civil sem reserva militar; inativos dependem do RPPS local",
    "femininas": 401,
    "femininasLabel": "401",
    "populacao": 18658,
    "populacaoTitulo": "Presos atendidos",
    "relacaoLabel": "1 servidor / 7 presos",
    "relacaoTitulo": "Relação ativa/presos",
    "governador": "Daniel Vilela",
    "comando": "Josimar Pires — Diretor-Geral da Polícia Penal de Goiás",
    "fonte": "SISDEPEN/SENAPPEN 1º semestre/2025; IBGE 2025; FBSP/Anuário 2025; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pmma": {
    "nome": "Polícia Militar do Maranhão",
    "sigla": "PMMA",
    "estado": "Maranhão",
    "estadoSigla": "MA",
    "tipo": "Polícia Militar",
    "criacao": "17/06/1836",
    "ativa": 11022,
    "ativaLabel": "11.022",
    "reserva": 11573,
    "reservaLabel": "11.573 · estimativa técnica",
    "femininas": 1433,
    "femininasLabel": "1.433 · estimado",
    "populacao": 7018211,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 637 hab. · 0,157%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Carlos Brandão Júnior",
    "comando": "Comandante-Geral da PMMA — nome a confirmar em fonte oficial",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pcma": {
    "nome": "Polícia Civil do Maranhão",
    "sigla": "PCMA",
    "estado": "Maranhão",
    "estadoSigla": "MA",
    "tipo": "Polícia Civil",
    "criacao": "Polícia Civil estadual · origem histórica republicana",
    "ativa": 1782,
    "ativaLabel": "1.782",
    "reserva": 1960,
    "reservaLabel": "1.960 · estimativa técnica",
    "femininas": 463,
    "femininasLabel": "463 · estimado",
    "populacao": 7018211,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 3.938 hab. · 0,025%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Carlos Brandão Júnior",
    "comando": "Delegado-Geral da PCMA — nome a confirmar em fonte oficial",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "ppma": {
    "nome": "Polícia Penal do Maranhão",
    "sigla": "PPMA",
    "estado": "Maranhão",
    "estadoSigla": "MA",
    "tipo": "Polícia Penal",
    "criacao": "EC 104/2019 · Polícia Penal estadual/distrital",
    "ativa": 3741,
    "ativaLabel": "3.741",
    "reserva": 0,
    "reservaLabel": "0 · carreira civil sem reserva militar; inativos dependem do RPPS local",
    "femininas": 473,
    "femininasLabel": "473",
    "populacao": 12551,
    "populacaoTitulo": "Presos atendidos",
    "relacaoLabel": "1 servidor / 3 presos",
    "relacaoTitulo": "Relação ativa/presos",
    "governador": "Carlos Brandão Júnior",
    "comando": "Diretor/Secretário da PPMA — nome a confirmar em fonte oficial",
    "fonte": "SISDEPEN/SENAPPEN 1º semestre/2025; IBGE 2025; FBSP/Anuário 2025; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pmpa": {
    "nome": "Polícia Militar do Pará",
    "sigla": "PMPA",
    "estado": "Pará",
    "estadoSigla": "PA",
    "tipo": "Polícia Militar",
    "criacao": "25/09/1818",
    "ativa": 17734,
    "ativaLabel": "17.734",
    "reserva": 18621,
    "reservaLabel": "18.621 · estimativa técnica",
    "femininas": 2305,
    "femininasLabel": "2.305 · estimado",
    "populacao": 8711196,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 491 hab. · 0,204%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Hana Ghassan",
    "comando": "Comandante-Geral da PMPA — nome a confirmar em fonte oficial",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pcpa": {
    "nome": "Polícia Civil do Pará",
    "sigla": "PCPA",
    "estado": "Pará",
    "estadoSigla": "PA",
    "tipo": "Polícia Civil",
    "criacao": "Polícia Civil estadual · origem histórica republicana",
    "ativa": 3476,
    "ativaLabel": "3.476",
    "reserva": 3824,
    "reservaLabel": "3.824 · estimativa técnica",
    "femininas": 904,
    "femininasLabel": "904 · estimado",
    "populacao": 8711196,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 2.506 hab. · 0,040%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Hana Ghassan",
    "comando": "Delegado-Geral da PCPA — nome a confirmar em fonte oficial",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pppa": {
    "nome": "Polícia Penal do Pará",
    "sigla": "PPPA",
    "estado": "Pará",
    "estadoSigla": "PA",
    "tipo": "Polícia Penal",
    "criacao": "EC 104/2019 · Polícia Penal estadual/distrital",
    "ativa": 2399,
    "ativaLabel": "2.399",
    "reserva": 0,
    "reservaLabel": "0 · carreira civil sem reserva militar; inativos dependem do RPPS local",
    "femininas": 411,
    "femininasLabel": "411",
    "populacao": 16349,
    "populacaoTitulo": "Presos atendidos",
    "relacaoLabel": "1 servidor / 7 presos",
    "relacaoTitulo": "Relação ativa/presos",
    "governador": "Hana Ghassan",
    "comando": "Diretor/Secretário da PPPA — nome a confirmar em fonte oficial",
    "fonte": "SISDEPEN/SENAPPEN 1º semestre/2025; IBGE 2025; FBSP/Anuário 2025; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pmpb": {
    "nome": "Polícia Militar da Paraíba",
    "sigla": "PMPB",
    "estado": "Paraíba",
    "estadoSigla": "PB",
    "tipo": "Polícia Militar",
    "criacao": "03/02/1832",
    "ativa": 8865,
    "ativaLabel": "8.865",
    "reserva": 9308,
    "reservaLabel": "9.308 · estimativa técnica",
    "femininas": 798,
    "femininasLabel": "798 · estimado",
    "populacao": 4164468,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 470 hab. · 0,213%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Lucas Ribeiro",
    "comando": "Comandante-Geral da PMPB — nome a confirmar em fonte oficial",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pcpb": {
    "nome": "Polícia Civil da Paraíba",
    "sigla": "PCPB",
    "estado": "Paraíba",
    "estadoSigla": "PB",
    "tipo": "Polícia Civil",
    "criacao": "Polícia Civil estadual · origem histórica republicana",
    "ativa": 1640,
    "ativaLabel": "1.640",
    "reserva": 1804,
    "reservaLabel": "1.804 · estimativa técnica",
    "femininas": 426,
    "femininasLabel": "426 · estimado",
    "populacao": 4164468,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 2.539 hab. · 0,039%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Lucas Ribeiro",
    "comando": "Delegado-Geral da PCPB — nome a confirmar em fonte oficial",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pppb": {
    "nome": "Polícia Penal da Paraíba",
    "sigla": "PPPB",
    "estado": "Paraíba",
    "estadoSigla": "PB",
    "tipo": "Polícia Penal",
    "criacao": "EC 104/2019 · Polícia Penal estadual/distrital",
    "ativa": 1372,
    "ativaLabel": "1.372",
    "reserva": 0,
    "reservaLabel": "0 · carreira civil sem reserva militar; inativos dependem do RPPS local",
    "femininas": 194,
    "femininasLabel": "194",
    "populacao": 13238,
    "populacaoTitulo": "Presos atendidos",
    "relacaoLabel": "1 servidor / 10 presos",
    "relacaoTitulo": "Relação ativa/presos",
    "governador": "Lucas Ribeiro",
    "comando": "Diretor/Secretário da PPPB — nome a confirmar em fonte oficial",
    "fonte": "SISDEPEN/SENAPPEN 1º semestre/2025; IBGE 2025; FBSP/Anuário 2025; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pmpe": {
    "nome": "Polícia Militar de Pernambuco",
    "sigla": "PMPE",
    "estado": "Pernambuco",
    "estadoSigla": "PE",
    "tipo": "Polícia Militar",
    "criacao": "11/06/1825",
    "ativa": 16563,
    "ativaLabel": "16.563",
    "reserva": 17391,
    "reservaLabel": "17.391 · estimativa técnica",
    "femininas": 2153,
    "femininasLabel": "2.153 · estimado",
    "populacao": 9562007,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 577 hab. · 0,173%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Raquel Lyra",
    "comando": "Comandante-Geral da PMPE — nome a confirmar em fonte oficial",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pcpe": {
    "nome": "Polícia Civil de Pernambuco",
    "sigla": "PCPE",
    "estado": "Pernambuco",
    "estadoSigla": "PE",
    "tipo": "Polícia Civil",
    "criacao": "Polícia Civil estadual · origem histórica republicana",
    "ativa": 4663,
    "ativaLabel": "4.663",
    "reserva": 5129,
    "reservaLabel": "5.129 · estimativa técnica",
    "femininas": 1212,
    "femininasLabel": "1.212 · estimado",
    "populacao": 9562007,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 2.051 hab. · 0,049%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Raquel Lyra",
    "comando": "Delegado-Geral da PCPE — nome a confirmar em fonte oficial",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pppe": {
    "nome": "Polícia Penal de Pernambuco",
    "sigla": "PPPE",
    "estado": "Pernambuco",
    "estadoSigla": "PE",
    "tipo": "Polícia Penal",
    "criacao": "EC 104/2019 · Polícia Penal estadual/distrital",
    "ativa": 1360,
    "ativaLabel": "1.360",
    "reserva": 0,
    "reservaLabel": "0 · carreira civil sem reserva militar; inativos dependem do RPPS local",
    "femininas": 248,
    "femininasLabel": "248",
    "populacao": 29869,
    "populacaoTitulo": "Presos atendidos",
    "relacaoLabel": "1 servidor / 22 presos",
    "relacaoTitulo": "Relação ativa/presos",
    "governador": "Raquel Lyra",
    "comando": "Diretor/Secretário da PPPE — nome a confirmar em fonte oficial",
    "fonte": "SISDEPEN/SENAPPEN 1º semestre/2025; IBGE 2025; FBSP/Anuário 2025; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pmpi": {
    "nome": "Polícia Militar do Piauí",
    "sigla": "PMPI",
    "estado": "Piauí",
    "estadoSigla": "PI",
    "tipo": "Polícia Militar",
    "criacao": "25/06/1835",
    "ativa": 6707,
    "ativaLabel": "6.707",
    "reserva": 7042,
    "reservaLabel": "7.042 · estimativa técnica",
    "femininas": 604,
    "femininasLabel": "604 · estimado",
    "populacao": 3384547,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 505 hab. · 0,198%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Rafael Fonteles",
    "comando": "Comandante-Geral da PMPI — nome a confirmar em fonte oficial",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pcpi": {
    "nome": "Polícia Civil do Piauí",
    "sigla": "PCPI",
    "estado": "Piauí",
    "estadoSigla": "PI",
    "tipo": "Polícia Civil",
    "criacao": "Polícia Civil estadual · origem histórica republicana",
    "ativa": 1621,
    "ativaLabel": "1.621",
    "reserva": 1783,
    "reservaLabel": "1.783 · estimativa técnica",
    "femininas": 421,
    "femininasLabel": "421 · estimado",
    "populacao": 3384547,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 2.088 hab. · 0,048%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Rafael Fonteles",
    "comando": "Delegado-Geral da PCPI — nome a confirmar em fonte oficial",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pppi": {
    "nome": "Polícia Penal do Piauí",
    "sigla": "PPPI",
    "estado": "Piauí",
    "estadoSigla": "PI",
    "tipo": "Polícia Penal",
    "criacao": "EC 104/2019 · Polícia Penal estadual/distrital",
    "ativa": 801,
    "ativaLabel": "801",
    "reserva": 0,
    "reservaLabel": "0 · carreira civil sem reserva militar; inativos dependem do RPPS local",
    "femininas": 251,
    "femininasLabel": "251",
    "populacao": 7777,
    "populacaoTitulo": "Presos atendidos",
    "relacaoLabel": "1 servidor / 10 presos",
    "relacaoTitulo": "Relação ativa/presos",
    "governador": "Rafael Fonteles",
    "comando": "Diretor/Secretário da PPPI — nome a confirmar em fonte oficial",
    "fonte": "SISDEPEN/SENAPPEN 1º semestre/2025; IBGE 2025; FBSP/Anuário 2025; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pmrn": {
    "nome": "Polícia Militar do Rio Grande do Norte",
    "sigla": "PMRN",
    "estado": "Rio Grande do Norte",
    "estadoSigla": "RN",
    "tipo": "Polícia Militar",
    "criacao": "27/06/1834",
    "ativa": 8191,
    "ativaLabel": "8.191",
    "reserva": 8601,
    "reservaLabel": "8.601 · estimativa técnica",
    "femininas": 491,
    "femininasLabel": "491 · estimado",
    "populacao": 3455236,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 422 hab. · 0,237%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Fátima Bezerra",
    "comando": "Comandante-Geral da PMRN — nome a confirmar em fonte oficial",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pcrn": {
    "nome": "Polícia Civil do Rio Grande do Norte",
    "sigla": "PCRN",
    "estado": "Rio Grande do Norte",
    "estadoSigla": "RN",
    "tipo": "Polícia Civil",
    "criacao": "Polícia Civil estadual · origem histórica republicana",
    "ativa": 1561,
    "ativaLabel": "1.561",
    "reserva": 1717,
    "reservaLabel": "1.717 · estimativa técnica",
    "femininas": 406,
    "femininasLabel": "406 · estimado",
    "populacao": 3455236,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 2.213 hab. · 0,045%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Fátima Bezerra",
    "comando": "Delegado-Geral da PCRN — nome a confirmar em fonte oficial",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pprn": {
    "nome": "Polícia Penal do Rio Grande do Norte",
    "sigla": "PPRN",
    "estado": "Rio Grande do Norte",
    "estadoSigla": "RN",
    "tipo": "Polícia Penal",
    "criacao": "EC 104/2019 · Polícia Penal estadual/distrital",
    "ativa": 995,
    "ativaLabel": "995",
    "reserva": 0,
    "reservaLabel": "0 · carreira civil sem reserva militar; inativos dependem do RPPS local",
    "femininas": 229,
    "femininasLabel": "229",
    "populacao": 7907,
    "populacaoTitulo": "Presos atendidos",
    "relacaoLabel": "1 servidor / 8 presos",
    "relacaoTitulo": "Relação ativa/presos",
    "governador": "Fátima Bezerra",
    "comando": "Regina Ribeiro — Diretora-Geral da Polícia Penal do RN",
    "fonte": "SISDEPEN/SENAPPEN 1º semestre/2025; IBGE 2025; FBSP/Anuário 2025; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pmro": {
    "nome": "Polícia Militar de Rondônia",
    "sigla": "PMRO",
    "estado": "Rondônia",
    "estadoSigla": "RO",
    "tipo": "Polícia Militar",
    "criacao": "26/11/1975",
    "ativa": 4955,
    "ativaLabel": "4.955",
    "reserva": 5203,
    "reservaLabel": "5.203 · estimativa técnica",
    "femininas": 644,
    "femininasLabel": "644 · estimado",
    "populacao": 1751950,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 354 hab. · 0,283%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Marcos Rocha",
    "comando": "Comandante-Geral da PMRO — nome a confirmar em fonte oficial",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pcro": {
    "nome": "Polícia Civil de Rondônia",
    "sigla": "PCRO",
    "estado": "Rondônia",
    "estadoSigla": "RO",
    "tipo": "Polícia Civil",
    "criacao": "Polícia Civil estadual · estrutura estadual",
    "ativa": 1332,
    "ativaLabel": "1.332",
    "reserva": 1465,
    "reservaLabel": "1.465 · estimativa técnica",
    "femininas": 346,
    "femininasLabel": "346 · estimado",
    "populacao": 1751950,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 1.315 hab. · 0,076%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Marcos Rocha",
    "comando": "Delegado-Geral da PCRO — nome a confirmar em fonte oficial",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "ppro": {
    "nome": "Polícia Penal de Rondônia",
    "sigla": "PPRO",
    "estado": "Rondônia",
    "estadoSigla": "RO",
    "tipo": "Polícia Penal",
    "criacao": "EC 104/2019 · Polícia Penal estadual/distrital",
    "ativa": 1590,
    "ativaLabel": "1.590",
    "reserva": 0,
    "reservaLabel": "0 · carreira civil sem reserva militar; inativos dependem do RPPS local",
    "femininas": 229,
    "femininasLabel": "229",
    "populacao": 7528,
    "populacaoTitulo": "Presos atendidos",
    "relacaoLabel": "1 servidor / 5 presos",
    "relacaoTitulo": "Relação ativa/presos",
    "governador": "Marcos Rocha",
    "comando": "Diretor/Secretário da PPRO — nome a confirmar em fonte oficial",
    "fonte": "SISDEPEN/SENAPPEN 1º semestre/2025; IBGE 2025; FBSP/Anuário 2025; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pmrr": {
    "nome": "Polícia Militar de Roraima",
    "sigla": "PMRR",
    "estado": "Roraima",
    "estadoSigla": "RR",
    "tipo": "Polícia Militar",
    "criacao": "21/11/1975",
    "ativa": 2485,
    "ativaLabel": "2.485",
    "reserva": 2609,
    "reservaLabel": "2.609 · estimativa técnica",
    "femininas": 522,
    "femininasLabel": "522 · estimado",
    "populacao": 738772,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 297 hab. · 0,336%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Soldado Sampaio — Governador em exercício",
    "comando": "Comandante-Geral da PMRR — nome a confirmar em fonte oficial",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pcrr": {
    "nome": "Polícia Civil de Roraima",
    "sigla": "PCRR",
    "estado": "Roraima",
    "estadoSigla": "RR",
    "tipo": "Polícia Civil",
    "criacao": "Polícia Civil estadual · estrutura estadual",
    "ativa": 673,
    "ativaLabel": "673",
    "reserva": 740,
    "reservaLabel": "740 · estimativa técnica",
    "femininas": 175,
    "femininasLabel": "175 · estimado",
    "populacao": 738772,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 1.098 hab. · 0,091%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Soldado Sampaio — Governador em exercício",
    "comando": "Delegado-Geral da PCRR — nome a confirmar em fonte oficial",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pprr": {
    "nome": "Polícia Penal de Roraima",
    "sigla": "PPRR",
    "estado": "Roraima",
    "estadoSigla": "RR",
    "tipo": "Polícia Penal",
    "criacao": "EC 104/2019 · Polícia Penal estadual/distrital",
    "ativa": 399,
    "ativaLabel": "399",
    "reserva": 0,
    "reservaLabel": "0 · carreira civil sem reserva militar; inativos dependem do RPPS local",
    "femininas": 91,
    "femininasLabel": "91",
    "populacao": 3209,
    "populacaoTitulo": "Presos atendidos",
    "relacaoLabel": "1 servidor / 8 presos",
    "relacaoTitulo": "Relação ativa/presos",
    "governador": "Soldado Sampaio — Governador em exercício",
    "comando": "Diretor/Secretário da PPRR — nome a confirmar em fonte oficial",
    "fonte": "SISDEPEN/SENAPPEN 1º semestre/2025; IBGE 2025; FBSP/Anuário 2025; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pmse": {
    "nome": "Polícia Militar de Sergipe",
    "sigla": "PMSE",
    "estado": "Sergipe",
    "estadoSigla": "SE",
    "tipo": "Polícia Militar",
    "criacao": "28/02/1835",
    "ativa": 5870,
    "ativaLabel": "5.870",
    "reserva": 6164,
    "reservaLabel": "6.164 · estimativa técnica",
    "femininas": 763,
    "femininasLabel": "763 · estimado",
    "populacao": 2299425,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 392 hab. · 0,255%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Fábio Mitidieri",
    "comando": "Comandante-Geral da PMSE — nome a confirmar em fonte oficial",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pcse": {
    "nome": "Polícia Civil de Sergipe",
    "sigla": "PCSE",
    "estado": "Sergipe",
    "estadoSigla": "SE",
    "tipo": "Polícia Civil",
    "criacao": "Polícia Civil estadual · origem histórica republicana",
    "ativa": 1308,
    "ativaLabel": "1.308",
    "reserva": 1439,
    "reservaLabel": "1.439 · estimativa técnica",
    "femininas": 340,
    "femininasLabel": "340 · estimado",
    "populacao": 2299425,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 1.758 hab. · 0,057%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Fábio Mitidieri",
    "comando": "Delegado-Geral da PCSE — nome a confirmar em fonte oficial",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "ppse": {
    "nome": "Polícia Penal de Sergipe",
    "sigla": "PPSE",
    "estado": "Sergipe",
    "estadoSigla": "SE",
    "tipo": "Polícia Penal",
    "criacao": "EC 104/2019 · Polícia Penal estadual/distrital",
    "ativa": 890,
    "ativaLabel": "890",
    "reserva": 0,
    "reservaLabel": "0 · carreira civil sem reserva militar; inativos dependem do RPPS local",
    "femininas": 167,
    "femininasLabel": "167",
    "populacao": 6022,
    "populacaoTitulo": "Presos atendidos",
    "relacaoLabel": "1 servidor / 7 presos",
    "relacaoTitulo": "Relação ativa/presos",
    "governador": "Fábio Mitidieri",
    "comando": "Diretor/Secretário da PPSE — nome a confirmar em fonte oficial",
    "fonte": "SISDEPEN/SENAPPEN 1º semestre/2025; IBGE 2025; FBSP/Anuário 2025; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pmto": {
    "nome": "Polícia Militar do Tocantins",
    "sigla": "PMTO",
    "estado": "Tocantins",
    "estadoSigla": "TO",
    "tipo": "Polícia Militar",
    "criacao": "01/01/1989",
    "ativa": 3534,
    "ativaLabel": "3.534",
    "reserva": 3711,
    "reservaLabel": "3.711 · estimativa técnica",
    "femininas": 459,
    "femininasLabel": "459 · estimado",
    "populacao": 1586859,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 449 hab. · 0,223%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Wanderlei Barbosa",
    "comando": "Comandante-Geral da PMTO — nome a confirmar em fonte oficial",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "pcto": {
    "nome": "Polícia Civil do Tocantins",
    "sigla": "PCTO",
    "estado": "Tocantins",
    "estadoSigla": "TO",
    "tipo": "Polícia Civil",
    "criacao": "Polícia Civil estadual · estrutura do Tocantins",
    "ativa": 1129,
    "ativaLabel": "1.129",
    "reserva": 1242,
    "reservaLabel": "1.242 · estimativa técnica",
    "femininas": 294,
    "femininasLabel": "294 · estimado",
    "populacao": 1586859,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 1.406 hab. · 0,071%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Wanderlei Barbosa",
    "comando": "Delegado-Geral da PCTO — nome a confirmar em fonte oficial",
    "fonte": "IBGE 2025; FBSP/Anuário 2025; Pesquisa Perfil/SENASP; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  },
  "ppto": {
    "nome": "Polícia Penal do Tocantins",
    "sigla": "PPTO",
    "estado": "Tocantins",
    "estadoSigla": "TO",
    "tipo": "Polícia Penal",
    "criacao": "EC 104/2019 · Polícia Penal estadual/distrital",
    "ativa": 881,
    "ativaLabel": "881",
    "reserva": 0,
    "reservaLabel": "0 · carreira civil sem reserva militar; inativos dependem do RPPS local",
    "femininas": 106,
    "femininasLabel": "106",
    "populacao": 4145,
    "populacaoTitulo": "Presos atendidos",
    "relacaoLabel": "1 servidor / 5 presos",
    "relacaoTitulo": "Relação ativa/presos",
    "governador": "Wanderlei Barbosa",
    "comando": "Diretor/Secretário da PPTO — nome a confirmar em fonte oficial",
    "fonte": "SISDEPEN/SENAPPEN 1º semestre/2025; IBGE 2025; FBSP/Anuário 2025; transparências estaduais quando disponível",
    "atualizado": "Base numérica inserida em 01/05/2026"
  }
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


function criarCargosBombeiroEstrutura(inst, sigla) {
  return [
    criarCargoEstrutural(inst, 'cmtg', `${sigla} — Comandante-Geral`, true),
    criarCargoEstrutural(inst, 'subcmtg', `${sigla} — Subcomandante-Geral`, true),
    criarCargoEstrutural(inst, 'cel', `${sigla} — Coronel BM`, true),
    criarCargoEstrutural(inst, 'tencel', `${sigla} — Tenente-Coronel BM`, true),
    criarCargoEstrutural(inst, 'maj', `${sigla} — Major BM`, true),
    criarCargoEstrutural(inst, 'cap', `${sigla} — Capitão BM`, true),
    criarCargoEstrutural(inst, '1ten', `${sigla} — 1º Tenente BM`, true),
    criarCargoEstrutural(inst, '2ten', `${sigla} — 2º Tenente BM`, true),
    criarCargoEstrutural(inst, 'aspof', `${sigla} — Aspirante a Oficial BM`, true),
    criarCargoEstrutural(inst, 'alof', `${sigla} — Aluno-Oficial / CFO BM`, false),
    criarCargoEstrutural(inst, 'subten', `${sigla} — Subtenente BM`, false),
    criarCargoEstrutural(inst, '1sgt', `${sigla} — 1º Sargento BM`, false),
    criarCargoEstrutural(inst, '2sgt', `${sigla} — 2º Sargento BM`, false),
    criarCargoEstrutural(inst, '3sgt', `${sigla} — 3º Sargento BM`, false),
    criarCargoEstrutural(inst, 'cabo', `${sigla} — Cabo BM`, false),
    criarCargoEstrutural(inst, 'sd1', `${sigla} — Soldado BM 1ª Classe`, false, true),
    criarCargoEstrutural(inst, 'sd2', `${sigla} — Soldado BM 2ª Classe / Aluno-Soldado`, false)
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
    etapas: ['pm', 'bm'].includes(ramo)
      ? 'Prova objetiva/discursiva quando prevista, TAF, exames médicos, avaliação psicológica, investigação social, curso de formação militar e demais etapas do edital.'
      : 'Prova objetiva/discursiva quando prevista, exames, investigação social, TAF quando aplicável, avaliação psicológica, curso de formação e demais etapas do edital.',
    cfsd: ['pm', 'bm'].includes(ramo) ? 'Curso de Formação de Soldados/Oficiais — preencher.' : 'Curso de formação profissional — preencher.',
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


const BOMBEIROS_MILITARES_ESTRUTURA = [
  { estado: 'ac', nome: 'Acre', sigla: 'AC', inst: 'bmac', titulo: 'BMAC', desc: 'Corpo de Bombeiros Militar do Acre' },
  { estado: 'al', nome: 'Alagoas', sigla: 'AL', inst: 'bmal', titulo: 'BMAL', desc: 'Corpo de Bombeiros Militar de Alagoas' },
  { estado: 'am', nome: 'Amazonas', sigla: 'AM', inst: 'bmam', titulo: 'BMAM', desc: 'Corpo de Bombeiros Militar do Amazonas' },
  { estado: 'ap', nome: 'Amapá', sigla: 'AP', inst: 'bmap', titulo: 'BMAP', desc: 'Corpo de Bombeiros Militar do Amapá' },
  { estado: 'ba', nome: 'Bahia', sigla: 'BA', inst: 'bmba', titulo: 'BMBA', desc: 'Corpo de Bombeiros Militar da Bahia' },
  { estado: 'ce', nome: 'Ceará', sigla: 'CE', inst: 'bmce', titulo: 'BMCE', desc: 'Corpo de Bombeiros Militar do Ceará' },
  { estado: 'df', nome: 'Distrito Federal', sigla: 'DF', inst: 'bmdf', titulo: 'BMDF', desc: 'Corpo de Bombeiros Militar do Distrito Federal' },
  { estado: 'es', nome: 'Espírito Santo', sigla: 'ES', inst: 'bmes', titulo: 'BMES', desc: 'Corpo de Bombeiros Militar do Espírito Santo' },
  { estado: 'go', nome: 'Goiás', sigla: 'GO', inst: 'bmgo', titulo: 'BMGO', desc: 'Corpo de Bombeiros Militar do Estado de Goiás' },
  { estado: 'ma', nome: 'Maranhão', sigla: 'MA', inst: 'bmma', titulo: 'BMMA', desc: 'Corpo de Bombeiros Militar do Maranhão' },
  { estado: 'mg', nome: 'Minas Gerais', sigla: 'MG', inst: 'bmmg', titulo: 'BMMG', desc: 'Corpo de Bombeiros Militar de Minas Gerais' },
  { estado: 'ms', nome: 'Mato Grosso do Sul', sigla: 'MS', inst: 'bmms', titulo: 'BMMS', desc: 'Corpo de Bombeiros Militar de Mato Grosso do Sul' },
  { estado: 'mt', nome: 'Mato Grosso', sigla: 'MT', inst: 'bmmt', titulo: 'BMMT', desc: 'Corpo de Bombeiros Militar de Mato Grosso' },
  { estado: 'pa', nome: 'Pará', sigla: 'PA', inst: 'bmpa', titulo: 'BMPA', desc: 'Corpo de Bombeiros Militar do Pará' },
  { estado: 'pb', nome: 'Paraíba', sigla: 'PB', inst: 'bmpb', titulo: 'BMPB', desc: 'Corpo de Bombeiros Militar da Paraíba' },
  { estado: 'pe', nome: 'Pernambuco', sigla: 'PE', inst: 'bmpe', titulo: 'BMPE', desc: 'Corpo de Bombeiros Militar de Pernambuco' },
  { estado: 'pi', nome: 'Piauí', sigla: 'PI', inst: 'bmpi', titulo: 'BMPI', desc: 'Corpo de Bombeiros Militar do Piauí' },
  { estado: 'pr', nome: 'Paraná', sigla: 'PR', inst: 'bmpr', titulo: 'BMPR', desc: 'Corpo de Bombeiros Militar do Paraná' },
  { estado: 'rj', nome: 'Rio de Janeiro', sigla: 'RJ', inst: 'bmrj', titulo: 'BMRJ', desc: 'Corpo de Bombeiros Militar do Rio de Janeiro' },
  { estado: 'rn', nome: 'Rio Grande do Norte', sigla: 'RN', inst: 'bmrn', titulo: 'BMRN', desc: 'Corpo de Bombeiros Militar do Rio Grande do Norte' },
  { estado: 'ro', nome: 'Rondônia', sigla: 'RO', inst: 'bmro', titulo: 'BMRO', desc: 'Corpo de Bombeiros Militar de Rondônia' },
  { estado: 'rr', nome: 'Roraima', sigla: 'RR', inst: 'bmrr', titulo: 'BMRR', desc: 'Corpo de Bombeiros Militar de Roraima' },
  { estado: 'rs', nome: 'Rio Grande do Sul', sigla: 'RS', inst: 'bmrs', titulo: 'BMRS', desc: 'Corpo de Bombeiros Militar do Rio Grande do Sul' },
  { estado: 'sc', nome: 'Santa Catarina', sigla: 'SC', inst: 'bmsc', titulo: 'BMSC', desc: 'Corpo de Bombeiros Militar de Santa Catarina' },
  { estado: 'se', nome: 'Sergipe', sigla: 'SE', inst: 'bmse', titulo: 'BMSE', desc: 'Corpo de Bombeiros Militar de Sergipe' },
  { estado: 'sp', nome: 'São Paulo', sigla: 'SP', inst: 'bmsp', titulo: 'BMSP', desc: 'Corpo de Bombeiros Militar de São Paulo' },
  { estado: 'to', nome: 'Tocantins', sigla: 'TO', inst: 'bmto', titulo: 'BMTO', desc: 'Corpo de Bombeiros Militar do Tocantins' }
];

function criarResumoBombeiroEstrutura(estado, item) {
  return {
    nome: item.desc,
    sigla: item.titulo,
    estado: estado.nome || item.nome,
    estadoSigla: estado.sigla || item.sigla,
    tipo: 'Bombeiro Militar',
    criacao: 'A preencher',
    ativa: 0,
    ativaLabel: 'Efetivo ativo — preencher',
    reserva: 0,
    reservaLabel: 'Reserva/inativos — preencher',
    femininas: 0,
    femininasLabel: 'Integrantes femininas — preencher',
    populacao: 0,
    populacaoTitulo: 'População atendida',
    relacaoLabel: 'Relação ativo/população — preencher após informar efetivo',
    relacaoTitulo: 'Relação ativo/população',
    governador: 'Chefe do Executivo — preencher',
    comando: 'Comando-Geral do Corpo de Bombeiros — preencher',
    fonte: `Fontes oficiais do ${item.titulo}, Diário Oficial e portal de transparência de ${estado.nome || item.nome} — preencher`,
    atualizado: 'Estrutura de Bombeiros criada para preenchimento'
  };
}

function criarAcoesBombeiroEstrutura(info) {
  return [
    { titulo: `${info.titulo} — adicionais, gratificações e escalas`, status: 'A preencher', ano: 'Base local pendente', tipo: 'individual', desc: 'Espaço reservado para temas típicos de bombeiros militares: serviço operacional, sobreaviso/plantões, adicional de risco/insalubridade/periculosidade quando previsto, indenizações, diárias, fardamento e diferenças de escala.', base: 'Preencher com estatuto militar estadual, leis remuneratórias, boletins, escalas, laudos, contracheques e atos de designação.', fonte: 'Fonte oficial a preencher', fonteUrl: '', atualizado: 'Estrutura criada para preenchimento' },
    { titulo: `${info.titulo} — promoções, cursos e quadro militar`, status: 'Verificar caso a caso', ano: 'Tema permanente', tipo: 'individual', desc: 'Reservado para regras de promoção, interstício, cursos de formação/aperfeiçoamento/habilitação, antiguidade, merecimento e enquadramento no quadro de oficiais ou praças bombeiro militar.', base: 'Lei de organização básica, estatuto, regulamento de promoções e boletins internos.', fonte: 'Legislação e atos internos a preencher', fonteUrl: '', atualizado: 'Estrutura criada para preenchimento' },
    { titulo: `${info.titulo} — reserva, reforma e proteção social militar`, status: 'Análise individual', ano: 'Regra local a preencher', tipo: 'individual', desc: 'Espaço para regras de reserva remunerada, reforma, pensão militar, contribuição ao sistema de proteção social, paridade/integralidade quando cabível e averbações.', base: 'Data de ingresso, tempo militar, tempo de contribuição, posto/graduação, legislação estadual/distrital e documentos funcionais.', fonte: 'Conferência previdenciária individual', fonteUrl: '', atualizado: 'Estrutura criada para preenchimento' }
  ];
}

function criarAssociacoesBombeiroEstrutura(info, estadoNome) {
  return [
    { nome: `Associação de Bombeiros Militares — ${info.titulo}`, foco: `${estadoNome} — bombeiros militares ativos, inativos e pensionistas`, acao: 'Espaço reservado para entidade representativa da carreira bombeiro militar, pautas remuneratórias, previdenciárias, jurídicas e valorização profissional.', site: 'Consultar site oficial da entidade local', telefone: 'Consultar diretamente', mensalidade: 'Consultar diretamente', servicos: 'Jurídico, comunicação institucional, convênios, assembleias, atendimento ao associado e acompanhamento legislativo — preencher conforme entidade.' },
    { nome: `Entidade representativa militar estadual — ${estadoNome}`, foco: `Oficiais e praças vinculados ao ${info.titulo}`, acao: 'Cadastrar aqui associações, clubes, caixas beneficentes e entidades de classe que atendam bombeiros militares na unidade federativa.', site: 'Consultar canais oficiais', telefone: 'Consultar diretamente', mensalidade: 'Consultar diretamente', servicos: 'Serviços a preencher conforme entidade.' }
  ];
}

function aplicarEstruturaBombeirosMilitaresDados() {
  BOMBEIROS_MILITARES_ESTRUTURA.forEach(item => {
    const estado = HEADER_ESTADOS[item.estado] || { nome: item.nome, sigla: item.sigla, flag: HEADER_BRASIL_FLAG };
    const tituloBombeiro = String(item.titulo || item.inst || '').toUpperCase();
    item.titulo = tituloBombeiro;

    if (!HEADER_ESTADOS[item.estado]) HEADER_ESTADOS[item.estado] = estado;
    estado.bm = item.inst;

    if (!INSTITUICOES_VALIDAS.includes(item.inst)) INSTITUICOES_VALIDAS.push(item.inst);
    HEADER_INSTITUICOES_INFO[item.inst] = { titulo: tituloBombeiro, desc: item.desc };
    if (!HEADER_INSTITUICOES_RESUMO[item.inst]) HEADER_INSTITUICOES_RESUMO[item.inst] = criarResumoBombeiroEstrutura(estado, item);
    if (!REMUNERACAO_FONTES_OFICIAIS[item.inst]) {
      REMUNERACAO_FONTES_OFICIAIS[item.inst] = { nome: `${tituloBombeiro} — fonte oficial a preencher`, url: '#' };
    }
    CONFIGS_INSTITUICOES_GENERICAS[item.inst] = {
      titulo: tituloBombeiro,
      desc: item.desc,
      cor: '#b91c1c',
      alertaPrev: `${tituloBombeiro}: estrutura aberta para preenchimento. Conferir sistema de proteção social militar, remuneração, adicionais, auxílios, escalas, ingresso e direitos conforme legislação de ${estado.nome || item.nome}.`
    };
    CONCURSOS[item.inst] = CONCURSOS[item.inst] || criarConcursoEstrutura(item.inst, item, 'bm');
    ACOES_JUDICIAIS[item.inst] = ACOES_JUDICIAIS[item.inst] || criarAcoesBombeiroEstrutura(item);
    ASSOCIACOES[item.inst] = ASSOCIACOES[item.inst] || criarAssociacoesBombeiroEstrutura(item, estado.nome || item.nome);
    if (!CARGOS_ESTRUTURA_GENERICAS[item.inst]) CARGOS_ESTRUTURA_GENERICAS[item.inst] = criarCargosBombeiroEstrutura(item.inst, tituloBombeiro);
  });
}

function inserirOptionBombeiroNoSelect(select, item) {
  if (!select || Array.from(select.options || []).some(opt => opt.value === item.inst)) return;
  let grupo = Array.from(select.querySelectorAll('optgroup')).find(optgroup => optgroup.label === item.nome);
  if (!grupo) {
    grupo = document.createElement('optgroup');
    grupo.label = item.nome;
    select.appendChild(grupo);
  }

  const opt = criarOptionInstituicao(item.inst, `${item.titulo} - Bombeiros Militares`);
  const pmOption = Array.from(grupo.querySelectorAll('option')).find(option => String(option.value || '').startsWith('pm'));
  if (pmOption && pmOption.nextSibling) grupo.insertBefore(opt, pmOption.nextSibling);
  else grupo.appendChild(opt);
}

function aplicarEstruturaBombeirosMilitaresNoHtml() {
  BOMBEIROS_MILITARES_ESTRUTURA.forEach(item => {
    inserirOptionBombeiroNoSelect(document.getElementById('instituicao_header'), item);
    inserirOptionBombeiroNoSelect(document.getElementById('instituicao'), item);
  });
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

  aplicarEstruturaBombeirosMilitaresNoHtml();
}

aplicarEstruturaEstadosFaltantesDados();
aplicarEstruturaBombeirosMilitaresDados();

function formatarNumeroHeader(valor) {
  return Number(valor || 0).toLocaleString('pt-BR');
}

function formatarEfetivoHeader(valor) {
  const numero = Number(valor || 0);
  if (!numero) return 'Não informado';
  if (numero >= 1000) {
    const mil = numero / 1000;
    let texto = Number.isInteger(mil) ? String(mil) : mil.toFixed(1).replace('.', ',');
    texto = texto.replace(',0', '');
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
    'header-label-total': 'Integrantes femininas',
    'header-label-populacao': 'População do Estado',
    'header-label-relacao': 'Relação ativa/população',
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
  let femininas = 0;
  let populacao = 0;

  INSTITUICOES_VALIDAS.forEach(inst => {
    const dados = HEADER_INSTITUICOES_RESUMO[inst] || {};
    const infoPenal = POLICIAS_PENAIS_INFO?.[inst] || {};
    ativa += Number(dados.ativa || infoPenal.efetivoAtivo || 0);
    reserva += Number(dados.reserva || 0);
    femininas += Number(dados.femininas || 0);
  });

  Object.values(HEADER_ESTADOS).forEach(estado => {
    const ref = HEADER_INSTITUICOES_RESUMO[estado.pm] || HEADER_INSTITUICOES_RESUMO[estado.pc] || HEADER_INSTITUICOES_RESUMO[estado.pp] || {};
    populacao += Number(ref.populacao || 0);
  });

  return { instituicoes, estados, ativa, reserva, femininas, total: ativa + reserva, populacao };
}

function aplicarHeaderInicialPortal() {
  headerModoInicialPortal = true;
  document.body.setAttribute('data-inst', 'portal');
  setHeaderHeroImage('img/logoleao.webp');
  setSiteHeaderBackgroundImage('img/logoleao.webp');
  setPageInstitutionBackgroundImage('img/logoleao.webp');
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
    'header-label-total': 'Integrantes femininas',
    'header-label-populacao': 'População abrangida',
    'header-label-relacao': 'UFs',
    'header-label-governador': 'Cobertura',
    'header-label-comando': 'Primeiro passo'
  });

  setTexto('header-resumo-criacao', String(resumoPortal.instituicoes));
  setTexto('header-resumo-ativa', `${formatarEfetivoHeader(resumoPortal.ativa)}+`);
  setTexto('header-resumo-reserva', `${formatarEfetivoHeader(resumoPortal.reserva)}+`);
  setTexto('header-resumo-total', `${formatarEfetivoHeader(resumoPortal.femininas)}+`);
  setTexto('header-resumo-populacao', formatarNumeroHeader(resumoPortal.populacao));
  setTexto('header-resumo-relacao', `${resumoPortal.estados} UFs`);
  setTexto('header-resumo-governador', 'Polícias militares, bombeiros militares, civis e penais');
  setTexto('header-resumo-comando', 'Selecione uma instituição para ver os dados específicos');

  ['instituicao', 'instituicao_header'].forEach(id => {
    const seletor = document.getElementById(id);
    if (seletor) seletor.value = '';
  });

  [['header-pm-sigla', 'PM'], ['header-bm-sigla', 'CBM'], ['header-pc-sigla', 'PC'], ['header-pp-sigla', 'PP']].forEach(([id, valor]) => setTexto(id, valor));
  ['header-branch-pm', 'header-branch-bm', 'header-branch-pc', 'header-branch-pp'].forEach(id => {
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
  const tituloResumo = document.getElementById('header-resumo-titulo');
  if (tituloResumo) tituloResumo.textContent = 'Resumo institucional';

  const dados = HEADER_INSTITUICOES_RESUMO[inst] || HEADER_INSTITUICOES_RESUMO.pmesp;
  atualizarLabelsHeaderResumo({
    'header-label-populacao': dados.populacaoTitulo || 'População do Estado',
    'header-label-relacao': dados.relacaoTitulo || 'Relação ativa/população'
  });

  const setTexto = (id, valor) => {
    const el = document.getElementById(id);
    if (el) el.textContent = valor;
  };

  const ativaTexto = dados.ativaLabel || formatarEfetivoHeader(dados.ativa);
  const reservaTexto = dados.reservaLabel || formatarEfetivoHeader(dados.reserva);
  const femininasTexto = dados.femininasLabel || (dados.femininas ? formatarNumeroHeader(dados.femininas) : 'Não informado');
  const relacaoTexto = dados.relacaoLabel || calcularRelacaoHeader(dados.populacao, dados.ativa);

  setTexto('header-resumo-atualizado', dados.atualizado || 'Atualizado');
  setTexto('header-resumo-criacao', dados.criacao || 'Não informado');
  setTexto('header-resumo-ativa', ativaTexto);
  setTexto('header-resumo-reserva', reservaTexto);
  setTexto('header-resumo-total', femininasTexto);
  setTexto('header-resumo-populacao', dados.populacao ? formatarNumeroHeader(dados.populacao) : 'Não informado');
  setTexto('header-resumo-relacao', relacaoTexto);
  setTexto('header-resumo-governador', dados.governador || 'Não informado');
  setTexto('header-resumo-comando', dados.comando || 'Não informado');
}

function getEstadoDaInstituicao(inst) {
  return Object.keys(HEADER_ESTADOS).find(estado => {
    const item = HEADER_ESTADOS[estado];
    return item.pm === inst || item.bm === inst || item.pc === inst || item.pp === inst;
  }) || 'sp';
}

function selecionarEstado(estado) {
  const estadoNormalizado = String(estado || '').toLowerCase();
  const dadosEstado = HEADER_ESTADOS[estadoNormalizado];
  if (!dadosEstado) return;

  mudarInstituicao(dadosEstado.pm || dadosEstado.pc || dadosEstado.pp);
  switchPage('principal');
  mostrarToast(`${dadosEstado.nome} selecionado. Agora escolha Militar, Bombeiros, Civil ou Penal no botão ao lado do seletor.`);
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
  const bmInfo = HEADER_INSTITUICOES_INFO[dadosEstado.bm];
  const pcInfo = HEADER_INSTITUICOES_INFO[dadosEstado.pc];
  const ppInfo = HEADER_INSTITUICOES_INFO[dadosEstado.pp];

  const pmSigla = document.getElementById('header-pm-sigla');
  if (pmSigla) pmSigla.textContent = pmInfo ? pmInfo.titulo : '—';

  const bmSigla = document.getElementById('header-bm-sigla');
  if (bmSigla) bmSigla.textContent = bmInfo ? bmInfo.titulo : 'CBM';

  const pcSigla = document.getElementById('header-pc-sigla');
  if (pcSigla) pcSigla.textContent = pcInfo ? pcInfo.titulo : '—';

  const ppSigla = document.getElementById('header-pp-sigla');
  if (ppSigla) ppSigla.textContent = ppInfo ? ppInfo.titulo : 'PP';

  const btnPm = document.getElementById('header-branch-pm');
  const btnBm = document.getElementById('header-branch-bm');
  const btnPc = document.getElementById('header-branch-pc');
  const btnPp = document.getElementById('header-branch-pp');
  if (btnPm) {
    const ativo = !!dadosEstado.pm && inst === dadosEstado.pm;
    btnPm.disabled = !dadosEstado.pm;
    btnPm.classList.toggle('active', ativo);
    btnPm.setAttribute('aria-pressed', ativo ? 'true' : 'false');
  }
  if (btnBm) {
    const ativo = !!dadosEstado.bm && inst === dadosEstado.bm;
    btnBm.disabled = !dadosEstado.bm;
    btnBm.classList.toggle('active', ativo);
    btnBm.setAttribute('aria-pressed', ativo ? 'true' : 'false');
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
