/* Módulo organizado por responsabilidade — Troca de instituição, estados, cabeçalho e estrutura de UFs.
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
  pmesp: { titulo: 'PMESP', desc: 'Polícia Militar do Estado de São Paulo' },
  pcsp:  { titulo: 'PCSP',  desc: 'Polícia Civil do Estado de São Paulo' },
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
  ppsp: { titulo: 'PPSP', desc: 'Polícia Penal do Estado de São Paulo — PPESP/PPSP' },
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
  pmac: 'img/MILITAR/pmac.webp',
  pmal: 'img/MILITAR/pmal.webp',
  pmam: 'img/MILITAR/pmam.webp',
  pmba: 'img/MILITAR/pmba.webp',
  pmdf: 'img/MILITAR/pmdf.webp',
  pmerj: 'img/MILITAR/pmerj.webp',
  pmes: 'img/MILITAR/pmes.webp',
  pmesp: 'img/MILITAR/pmesp.webp',
  pmgo: 'img/MILITAR/pmgo.webp',
  pmma: 'img/MILITAR/pmma.webp',
  pmmg: 'img/MILITAR/pmmg.webp',
  pmms: 'img/MILITAR/pmms.webp',
  pmmt: 'img/MILITAR/pmmt.webp',
  pmpr: 'img/MILITAR/pmpr.webp',
  pmrs: 'img/MILITAR/pmrs.webp',
  pmsc: 'img/MILITAR/pmsc.webp',
  pmto: 'img/MILITAR/pmto.webp',
  pcac: 'img/CIVIL/pcac.webp',
  pcal: 'img/CIVIL/pcal.webp',
  pcam: 'img/CIVIL/pcam.webp',
  pcba: 'img/CIVIL/pcba.webp',
  pcdf: 'img/CIVIL/pcdf.webp',
  pcerj: 'img/CIVIL/pcrj.webp',
  pces: 'img/CIVIL/pces.webp',
  pcma: 'img/CIVIL/pcma.webp',
  pcmg: 'img/CIVIL/pcmg.webp',
  pcms: 'img/CIVIL/pcms.webp',
  pcmt: 'img/CIVIL/pcmt.webp',
  pcpr: 'img/CIVIL/pcpr.webp',
  pcrs: 'img/CIVIL/pcrs.webp',
  pcsc: 'img/CIVIL/pcsc.webp',
  pcsp: 'img/CIVIL/pcsp.webp',
  pcto: 'img/CIVIL/pcto.webp',
  ppac: 'img/PENAL/ppac.webp',
  ppal: 'img/PENAL/ppal.webp',
  ppam: 'img/PENAL/ppam.webp',
  ppap: 'img/PENAL/ppap.webp',
  ppba: 'img/PENAL/ppba.webp',
  ppce: 'img/PENAL/ppce.webp',
  ppdf: 'img/PENAL/ppdf.webp',
  ppes: 'img/PENAL/ppes.webp',
  ppgo: 'img/PENAL/ppgo.webp',
  ppma: 'img/PENAL/ppma.webp',
  ppmg: 'img/PENAL/ppmg.webp',
  ppms: 'img/PENAL/ppms.webp',
  ppmt: 'img/PENAL/ppmt.webp',
  pppa: 'img/PENAL/pppa.webp',
  pppb: 'img/PENAL/pppb.webp',
  pppe: 'img/PENAL/pppe.webp',
  pppi: 'img/PENAL/pppi.webp',
  pppr: 'img/PENAL/pppr.webp',
  pprj: 'img/PENAL/pprj.webp',
  pprn: 'img/PENAL/pprn.webp',
  ppro: 'img/PENAL/ppro.webp',
  pprr: 'img/PENAL/pprr.webp',
  pprs: 'img/PENAL/pprs.webp',
  ppsc: 'img/PENAL/ppsc.webp',
  ppse: 'img/PENAL/ppse.webp',
  ppsp: 'img/PENAL/ppsp.webp',
  ppto: 'img/PENAL/ppto.webp',
  bmac: 'img/BOMBEIRO/bmac.webp',
  bmal: 'img/BOMBEIRO/bmal.webp',
  bmam: 'img/BOMBEIRO/bmam.webp',
  bmap: 'img/BOMBEIRO/bmap.webp',
  bmba: 'img/BOMBEIRO/bmba.webp',
  bmce: 'img/BOMBEIRO/bmce.webp',
  bmdf: 'img/BOMBEIRO/bmdf.webp',
  bmes: 'img/BOMBEIRO/bmes.webp',
  bmgo: 'img/BOMBEIRO/bmgo.webp',
  bmma: 'img/BOMBEIRO/bmma.webp',
  bmmg: 'img/BOMBEIRO/bmmg.webp',
  bmms: 'img/BOMBEIRO/bmms.webp',
  bmmt: 'img/BOMBEIRO/bmmt.webp',
  bmpa: 'img/BOMBEIRO/bmpa.webp',
  bmpe: 'img/BOMBEIRO/bmpe.webp',
  bmpi: 'img/BOMBEIRO/bmpi.webp',
  bmpr: 'img/BOMBEIRO/bmpr.webp',
  bmrj: 'img/BOMBEIRO/bmrj.webp',
  bmrn: 'img/BOMBEIRO/bmrn.webp',
  bmro: 'img/BOMBEIRO/bmro.webp',
  bmrr: 'img/BOMBEIRO/bmrr.webp',
  bmrs: 'img/BOMBEIRO/bmrs.webp',
  bmsc: 'img/BOMBEIRO/bmsc.webp',
  bmse: 'img/BOMBEIRO/bmse.webp',
  bmsp: 'img/BOMBEIRO/bmsp.webp',
  bmto: 'img/BOMBEIRO/bmto.webp',
  pf: 'img/FEDERAL/pf.webp',
  prf: 'img/FEDERAL/prf.webp'
};

/* Brasões/insígnias em versão leve.
   O site agora usa somente WebP; arquivos PNG/JPEG/JPG originais foram removidos.
   A busca automática também verifica as pastas organizadas por carreira para facilitar novas inclusões. */
const EXTENSOES_BRASAO_SUPORTADAS = ['webp'];

const HEADER_INSTITUICOES_IMAGENS_ALIASES = {
  pmdf: [
    'img/pmdf', 'img/PMDF', 'img/pm-df', 'img/PM-DF', 'img/pm_df', 'img/PM_DF',
    'img/brasao-pmdf', 'img/brasao-PMDF', 'img/logo-pmdf', 'img/logo-PMDF',
    'img/policia-militar-df', 'img/policia-militar-distrito-federal',
    'img/policia-militar-do-distrito-federal'
  ],
  pcdf: [
    'img/pcdf', 'img/PCDF', 'img/pc-df', 'img/PC-DF', 'img/pc_df', 'img/PC_DF',
    'img/brasao-pcdf', 'img/brasao-PCDF', 'img/logo-pcdf', 'img/logo-PCDF',
    'img/policia-civil-df', 'img/policia-civil-distrito-federal',
    'img/policia-civil-do-distrito-federal'
  ],
  ppdf: [
    'img/ppdf', 'img/PPDF', 'img/pp-df', 'img/PP-DF', 'img/pp_df', 'img/PP_DF',
    'img/brasao-ppdf', 'img/brasao-PPDF', 'img/logo-ppdf', 'img/logo-PPDF',
    'img/policia-penal-df', 'img/policia-penal-distrito-federal',
    'img/policia-penal-do-distrito-federal', 'img/seape-df', 'img/SEAPE-DF'
  ],
  bmdf: [
    'img/bmdf', 'img/BMDF', 'img/bm-df', 'img/BM-DF', 'img/bm_df', 'img/BM_DF',
    'img/cbmdf', 'img/CBMDF', 'img/cbm-df', 'img/CBM-DF', 'img/cbm_df', 'img/CBM_DF',
    'img/brasao-bmdf', 'img/brasao-BMDF', 'img/brasao-cbmdf', 'img/brasao-CBMDF',
    'img/logo-bmdf', 'img/logo-BMDF', 'img/logo-cbmdf', 'img/logo-CBMDF',
    'img/bombeiros-df', 'img/bombeiro-df', 'img/corpo-bombeiros-df',
    'img/corpo-de-bombeiros-militar-df',
    'img/corpo-de-bombeiros-militar-do-distrito-federal'
  ],
  pf: [
    'img/pf', 'img/PF', 'img/dpf', 'img/DPF',
    'img/brasao-pf', 'img/brasao-PF', 'img/brasao-dpf', 'img/brasao-DPF',
    'img/logo-pf', 'img/logo-PF', 'img/logo-dpf', 'img/logo-DPF',
    'img/policia-federal', 'img/Policia-Federal', 'img/POLICIA-FEDERAL',
    'img/policiafederal', 'img/departamento-policia-federal',
    'img/departamento-de-policia-federal'
  ],
  prf: [
    'img/prf', 'img/PRF',
    'img/brasao-prf', 'img/brasao-PRF', 'img/logo-prf', 'img/logo-PRF',
    'img/policia-rodoviaria-federal', 'img/Policia-Rodoviaria-Federal',
    'img/POLICIA-RODOVIARIA-FEDERAL', 'img/policiarodoviariafederal',
    'img/policia-rodoviária-federal', 'img/Polícia-Rodoviária-Federal'
  ]
};

function normalizarBaseImagemBrasao(base) {
  return String(base || '')
    .trim()
    .replace(/^\/+/, '')
    .replace(/^\.\//, '')
    .replace(/\.(webp|png|jpe?g|svg)$/i, '');
}

function montarCandidatosImagemInstituicao(inst, caminhoInicial) {
  const candidatos = [];
  const bases = [];
  const instLimpa = String(inst || '').trim();
  const instMinuscula = instLimpa.toLowerCase();
  const instMaiuscula = instLimpa.toUpperCase();
  const adicionarPastasOrganizadas = () => {
    ['MILITAR', 'CIVIL', 'PENAL', 'BOMBEIRO', 'FEDERAL', 'LOGO'].forEach(pasta => {
      adicionarBase(`img/${pasta}/${instMinuscula}`);
      adicionarBase(`img/${pasta}/${instMaiuscula}`);
    });
    if (instMinuscula === 'pcerj') adicionarBase('img/CIVIL/pcrj');
  };

  const adicionar = valor => {
    if (!valor) return;
    const caminho = String(valor).trim().replace(/^\/+/, '').replace(/^\.\//, '');
    if (caminho && !candidatos.includes(caminho)) candidatos.push(caminho);
  };

  const adicionarBase = base => {
    const baseLimpa = normalizarBaseImagemBrasao(base);
    if (baseLimpa && !bases.includes(baseLimpa)) bases.push(baseLimpa);
  };

  adicionar(caminhoInicial);
  adicionarBase(caminhoInicial || `img/${instMinuscula}`);
  adicionarBase(`img/${instMinuscula}`);
  adicionarBase(`img/${instMaiuscula}`);
  adicionarPastasOrganizadas();

  const aliases = HEADER_INSTITUICOES_IMAGENS_ALIASES[instMinuscula] || [];
  aliases.forEach(adicionarBase);

  bases.forEach(base => {
    EXTENSOES_BRASAO_SUPORTADAS.forEach(ext => adicionar(`${base}.${ext}`));
  });

  return candidatos;
}



function setCssUrlVariable(elemento, nomeVariavel, src, fallback = 'img/LOGO/logoleao.webp') {
  if (!elemento || !nomeVariavel) return;
  const imagemOriginal = String(src || fallback || 'img/LOGO/logoleao.webp');
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
  img.dataset.imgBase = 'img/LOGO/logoleao';
  img.dataset.retry = '';
  img.dataset.logoRetry = '0';
  img.alt = 'Logo Universo Segurança Pública';
  img.onerror = function () {
    const alternativas = ['img/LOGO/logoleao.webp', 'img/LOGO/logoleao.webp', 'img/LOGO/logoleao.webp', 'img/LOGO/logoleao.webp'];
    const indice = parseInt(this.dataset.logoRetry || '0', 10);
    if (indice < alternativas.length) {
      this.dataset.logoRetry = String(indice + 1);
      this.src = alternativas[indice];
      return;
    }
    this.onerror = null;
    this.style.display = 'none';
  };
  img.src = 'img/LOGO/logoleao.webp';
}

function aplicarImagemHeaderInstituicao(img, inst, dadosEstado, instituicao) {
  const card = document.querySelector('.header-institution-card');
  if (card) card.classList.remove('header-portal-home');

  const imagemInstituicao = HEADER_INSTITUICOES_IMAGENS[inst];
  const candidatosImagem = montarCandidatosImagemInstituicao(inst, imagemInstituicao);
  const fallbackBandeira = dadosEstado?.flag || HEADER_ESTADOS.sp.flag;
  const altInstituicao = instituicao?.desc || instituicao?.titulo || 'Instituição de segurança pública';

  // Cabeçalho do estado: volta a usar a bandeira como plano de fundo.
  setHeaderHeroImage(fallbackBandeira || 'img/LOGO/logoleao.webp');
  setSiteHeaderBackgroundImage(fallbackBandeira || 'img/LOGO/logoleao.webp');

  // Página grande: usa sempre o logo principal, independentemente da instituição selecionada.
  setPageInstitutionBackgroundImage('img/LOGO/logoleao.webp');

  if (!img) return;
  img.style.display = '';
  img.removeAttribute('data-retry');
  img.removeAttribute('data-img-base');
  img.removeAttribute('data-fallback-jpeg-aplicado');
  img.onerror = function () {
    const indice = parseInt(this.dataset.fallbackIndex || '0', 10);
    if (indice < candidatosImagem.length) {
      this.dataset.fallbackIndex = String(indice + 1);
      const proximaImagem = candidatosImagem[indice];
      if (proximaImagem && proximaImagem !== this.getAttribute('src')) {
        this.src = proximaImagem;
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

  if (candidatosImagem.length) {
    img.dataset.fallbackAplicado = '';
    img.dataset.fallbackIndex = '1';
    img.src = candidatosImagem[0];
    img.alt = `Logo/brasão da ${altInstituicao}`;
  } else {
    img.dataset.fallbackAplicado = 'bandeira';
    img.dataset.fallbackIndex = '0';
    img.onerror = null;
    img.src = fallbackBandeira;
    img.alt = `Bandeira de ${dadosEstado?.nome || 'estado'}`;
  }
}


const HEADER_INSTITUICOES_RESUMO = {
  "pmesp": {
    "nome": "Polícia Militar do Estado de São Paulo",
    "sigla": "PMESP",
    "estado": "São Paulo",
    "estadoSigla": "SP",
    "tipo": "Polícia Militar",
    "criacao": "15/12/1831 · origem histórica",
    "ativa": 82000,
    "ativaLabel": "82.000+",
    "reserva": 72000,
    "reservaLabel": "72.000+ inativos",
    "femininas": 0,
    "femininasLabel": "93.802 cargos fixados em lei",
    "populacao": 46081801,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 562 hab. · 0,178%",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Tarcísio de Freitas",
    "comando": "Cel PM Glauce Anselmo Cavalli — Comandante-Geral",
    "fonte": "PMESP; Governo de SP; SSP/SP Plano de Ação 2024; SGGD/SP; Leis SP 18.441/2026 e 18.442/2026; Portal da Transparência/SP",
    "atualizado": "PMESP revisada em 03/05/2026 — números exatos não inferidos quando a fonte oficial informa faixa"
  },
  "bmsp": {
    "nome": "Corpo de Bombeiros da Polícia Militar do Estado de São Paulo",
    "sigla": "CBPMESP",
    "siglaInterna": "BMSP",
    "estado": "São Paulo",
    "estadoSigla": "SP",
    "tipo": "Bombeiro Militar / órgão da PMESP",
    "criacao": "10/03/1880 · origem histórica",
    "ativa": 8604,
    "ativaLabel": "8.604 · ref. TCE/SP 2019/2020",
    "reserva": 0,
    "reservaLabel": "A confirmar · recorte CBPMESP",
    "femininas": 0,
    "femininasLabel": "A confirmar em fonte oficial",
    "populacao": 46081801,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 5.356 hab. · ref. histórica",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Tarcísio de Freitas",
    "comando": "Cel PM Alexandre Merlin — Comandante do Corpo de Bombeiros da PMESP",
    "estrutura": "CCB — Comando do Corpo de Bombeiros, vinculado à PMESP; atuação em prevenção e combate a incêndios, busca e salvamento, salvamento aquático, defesa civil, fiscalização técnica e educação pública.",
    "emergencia": "193",
    "fonte": "CBPMESP; PMESP; Governo de SP; ALESP; SGGD/SP; TCE/SP; DOE/SP; Vunesp",
    "atualizado": "CBPMESP/BMSP revisado em 03/05/2026 — chave interna bmsp preservada para compatibilidade"
  },
  "pcsp": {
    "nome": "Polícia Civil do Estado de São Paulo",
    "sigla": "PCSP",
    "estado": "São Paulo",
    "estadoSigla": "SP",
    "tipo": "Polícia Civil",
    "criacao": "Origem histórica: 1841 · confirmar fonte histórica oficial direta",
    "ativa": 21089,
    "ativaLabel": "21.089 · ref. 2022/2023",
    "reserva": 35000,
    "reservaLabel": "35.000 · estimado",
    "femininas": 5483,
    "femininasLabel": "5.483 · estimado",
    "populacao": 46081801,
    "populacaoTitulo": "População do Estado",
    "relacaoLabel": "1 ativo / 2.185 hab. · ref. histórica",
    "relacaoTitulo": "Relação ativa/população",
    "governador": "Tarcísio de Freitas",
    "comando": "Delegado Artur José Dian — Delegado-Geral da Polícia Civil",
    "estrutura": "DGP; DGPAD; DAP; DIPOL; DPPC; DECAP; DEMACRO; DEINTER 1 a 10; DEIC; DHPP; DENARC; DOPE; ACADEPOL; CORREGEDORIA",
    "sede": "Rua Brigadeiro Tobias, 527, São Paulo/SP, CEP 01032-902",
    "fonte": "PCSP; Governo/SSP-SP; SGGD/SP; Portal da Transparência/SP; ALESP; editais PCSP/Vunesp; Lei 18.440/2026, Lei 18.441/2026 e Lei 18.443/2026",
    "atualizado": "PCSP revisada em 03/05/2026 — efetivo ativo, inativos e feminino mantidos como estimativas/referência histórica a pedido"
  },
  "ppsp": {
    "nome": "Polícia Penal do Estado de São Paulo — PPESP/PPSP",
    "sigla": "PPSP",
    "estado": "São Paulo",
    "estadoSigla": "SP",
    "tipo": "Polícia Penal",
    "criacao": "EC 104/2019 · EC Estadual 51/2022 · LC SP 1.416/2024 · atividades desde fev/2025",
    "ativa": 25000,
    "ativaLabel": "25 mil+ · SAP/2025",
    "reserva": 35,
    "reservaLabel": "35+ · recorte AEVP/Transparência SP",
    "femininas": 2926,
    "femininasLabel": "2.926 · estimado",
    "populacao": 213401,
    "populacaoTitulo": "Pessoas custodiadas/atendidas",
    "relacaoLabel": "1 policial penal / 9 custodiados · estimado",
    "relacaoTitulo": "Relação efetivo/custódia",
    "governador": "Tarcísio de Freitas",
    "comando": "Rodrigo Santos Andrade — Diretor-Geral da Polícia Penal",
    "estrutura": "Diretoria Geral; Diretoria Geral Adjunta; Corregedoria da Polícia Penal; Coordenadoria de Inteligência; Coordenadoria Geral de Administração Integrada; Coordenadoria Geral de Execução Penal; Departamento de Segurança Penal; Departamento de Controle e Execução Penal; Coordenadoria de Reintegração Social e Cidadania; Coordenadoria de Saúde do Sistema Penitenciário; coordenadorias regionais",
    "sede": "Secretaria da Administração Penitenciária — São Paulo/SP",
    "fonte": "SAP/SP; ALESP; SGGD/SP; Governo de SP; Diário Oficial/SP; Instituto AOCP; Portal da Transparência/SP; SPPREV/IAMSPE",
    "atualizado": "PPSP revisada em 03/05/2026 — efetivo ativo SAP/2025; feminino estimado; inativos em recorte de transparência"
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


/* ============================================================ */
/* === ESTRUTURA-BASE PARA INSTITUIÇÕES FEDERAIS =============== */
/* ============================================================ */
const INSTITUICOES_FEDERAIS_ESTRUTURA = [
  { inst: 'pf', titulo: 'PF', desc: 'Polícia Federal', tipo: 'Polícia Federal', cor: '#1f4f7a' },
  { inst: 'prf', titulo: 'PRF', desc: 'Polícia Rodoviária Federal', tipo: 'Polícia Rodoviária Federal', cor: '#1f5f8a' }
];

function criarResumoFederalEstrutura(item) {
  if (item.inst === 'prf') {
    return {
      nome: 'Polícia Rodoviária Federal',
      sigla: 'PRF',
      estado: 'Brasil',
      estadoSigla: 'BR',
      tipo: 'Polícia Rodoviária Federal',
      criacao: '24/07/1928 · Decreto nº 18.323/1928',
      ativa: 13000,
      ativaLabel: '13.000+ · PRF/2025',
      reserva: 7000,
      reservaLabel: '7.000+ aposentados e pensionistas · estimado/Transparência',
      femininas: 1700,
      femininasLabel: '1.700+ mulheres · estimado',
      populacao: 77000,
      populacaoTitulo: 'Rodovias federais fiscalizadas',
      relacaoLabel: '1 PRF / 5,9 km de rodovia federal · estimado',
      relacaoTitulo: 'Cobertura operacional',
      governador: 'Governo Federal / Ministério da Justiça e Segurança Pública',
      comando: 'Antônio Fernando Souza Oliveira — Diretor-Geral da PRF',
      fonte: 'PRF, Portal da Transparência, MGI/Servidor, Decreto nº 11.759/2023 e legislação federal',
      atualizado: 'Pesquisa em 03/05/2026 · efetivo ativo aprox. PRF/2025 · remuneração federal 2026'
    };
  }

  return {
    nome: item.desc,
    sigla: item.titulo,
    estado: 'Brasil',
    estadoSigla: 'BR',
    tipo: item.tipo,
    criacao: 'A preencher',
    ativa: 0,
    ativaLabel: 'Efetivo ativo — preencher',
    reserva: 0,
    reservaLabel: 'Aposentados/inativos — preencher',
    femininas: 0,
    femininasLabel: 'Integrantes femininas — preencher',
    populacao: 0,
    populacaoTitulo: 'Abrangência nacional',
    relacaoLabel: 'Relação por habitante/rodovia/atribuição — preencher',
    relacaoTitulo: 'Relação institucional',
    governador: 'Governo Federal / Ministério responsável — preencher',
    comando: 'Direção-Geral atual — preencher',
    fonte: 'Fontes oficiais federais — preencher',
    atualizado: 'Estrutura criada para preenchimento'
  };
}

function criarCargosPfEstrutura(inst, sigla) {
  return [
    criarCargoEstrutural(inst, 'diretor_geral', `${sigla} — Diretor-Geral / Direção Superior`, true),
    criarCargoEstrutural(inst, 'delegado', `${sigla} — Delegado de Polícia Federal`, true),
    criarCargoEstrutural(inst, 'perito', `${sigla} — Perito Criminal Federal`, true),
    criarCargoEstrutural(inst, 'papiloscopista', `${sigla} — Papiloscopista Policial Federal`, false),
    criarCargoEstrutural(inst, 'escrivao', `${sigla} — Escrivão de Polícia Federal`, false),
    criarCargoEstrutural(inst, 'agente', `${sigla} — Agente de Polícia Federal`, false, true),
    criarCargoEstrutural(inst, 'administrativo', `${sigla} — Carreira administrativa / apoio`, false)
  ];
}

function criarCargosPrfEstrutura(inst, sigla) {
  const fonteKey = 'prf';
  const criterio = 'Subsídio federal da carreira de Policial Rodoviário Federal, referência 2026, conforme tabela remuneratória federal/MGI e Lei nº 14.875/2024.';
  const benefDesc = 'Benefícios não somados ao subsídio: auxílio-alimentação federal, assistência à saúde suplementar por faixa, auxílio pré-escolar quando devido, adicional de fronteira quando houver exercício em localidade prevista, diárias/indenizações e demais rubricas funcionais.';
  return [
    { id: 'especial_iii', nome: `${sigla} — Policial Rodoviário Federal — Especial III`, padrao: 23000.00, oficial: true, fonteKey, criterio, benefDesc, badge: 'Federal 2026' },
    { id: 'especial_ii', nome: `${sigla} — Policial Rodoviário Federal — Especial II`, padrao: 22249.43, oficial: true, fonteKey, criterio, benefDesc, badge: 'Federal 2026' },
    { id: 'especial_i', nome: `${sigla} — Policial Rodoviário Federal — Especial I`, padrao: 21524.32, oficial: true, fonteKey, criterio, benefDesc, badge: 'Federal 2026' },
    { id: 'primeira_vi', nome: `${sigla} — Policial Rodoviário Federal — 1ª Classe VI`, padrao: 20306.21, oficial: true, fonteKey, criterio, benefDesc, badge: 'Federal 2026' },
    { id: 'primeira_v', nome: `${sigla} — Policial Rodoviário Federal — 1ª Classe V`, padrao: 19649.56, oficial: true, fonteKey, criterio, benefDesc, badge: 'Federal 2026' },
    { id: 'primeira_iv', nome: `${sigla} — Policial Rodoviário Federal — 1ª Classe IV`, padrao: 19015.88, oficial: true, fonteKey, criterio, benefDesc, badge: 'Federal 2026' },
    { id: 'primeira_iii', nome: `${sigla} — Policial Rodoviário Federal — 1ª Classe III`, padrao: 18404.39, oficial: true, fonteKey, criterio, benefDesc, badge: 'Federal 2026' },
    { id: 'primeira_ii', nome: `${sigla} — Policial Rodoviário Federal — 1ª Classe II`, padrao: 17814.28, oficial: true, fonteKey, criterio, benefDesc, badge: 'Federal 2026' },
    { id: 'primeira_i', nome: `${sigla} — Policial Rodoviário Federal — 1ª Classe I`, padrao: 17244.77, oficial: true, fonteKey, criterio, benefDesc, badge: 'Federal 2026' },
    { id: 'segunda_vi', nome: `${sigla} — Policial Rodoviário Federal — 2ª Classe VI`, padrao: 15949.32, oficial: true, fonteKey, criterio, benefDesc, badge: 'Federal 2026' },
    { id: 'segunda_v', nome: `${sigla} — Policial Rodoviário Federal — 2ª Classe V`, padrao: 15704.54, oficial: true, fonteKey, criterio, benefDesc, badge: 'Federal 2026' },
    { id: 'segunda_iv', nome: `${sigla} — Policial Rodoviário Federal — 2ª Classe IV`, padrao: 15467.49, oficial: true, fonteKey, criterio, benefDesc, badge: 'Federal 2026' },
    { id: 'segunda_iii', nome: `${sigla} — Policial Rodoviário Federal — 2ª Classe III`, padrao: 15237.63, oficial: true, fonteKey, criterio, benefDesc, badge: 'Federal 2026' },
    { id: 'segunda_ii', nome: `${sigla} — Policial Rodoviário Federal — 2ª Classe II`, padrao: 15014.50, oficial: true, fonteKey, criterio, benefDesc, badge: 'Federal 2026' },
    { id: 'segunda_i', nome: `${sigla} — Policial Rodoviário Federal — 2ª Classe I`, padrao: 14798.58, oficial: true, fonteKey, criterio, benefDesc, badge: 'Federal 2026' },
    { id: 'terceira_iii', nome: `${sigla} — Policial Rodoviário Federal — 3ª Classe III`, padrao: 12646.11, oficial: true, fonteKey, criterio, benefDesc, badge: 'Federal 2026' },
    { id: 'terceira_ii', nome: `${sigla} — Policial Rodoviário Federal — 3ª Classe II`, padrao: 12448.92, oficial: true, fonteKey, criterio, benefDesc, badge: 'Federal 2026' },
    { id: 'terceira_i', nome: `${sigla} — Policial Rodoviário Federal — 3ª Classe I`, padrao: 12253.84, oficial: true, fonteKey, criterio, benefDesc, badge: 'Federal 2026' }
  ];
}

function criarConcursoFederalEstrutura(item) {
  if (item.inst === 'prf') {
    return {
      edital: 'PRF — Concurso Policial Rodoviário Federal 2021 · 1.500 vagas · validade prorrogada até junho/2026',
      salario: 'Inicial 2026: R$ 12.253,84 · Classe 3ª, Padrão I; final da carreira: R$ 23.000,00 · Classe Especial III.',
      vagas: '1.500 vagas no concurso PRF 2021; 521 nomeações em 2025 e posse coletiva de aproximadamente 300 profissionais em janeiro/2026.',
      cotas: 'Regras federais de cotas e edital Cebraspe/PRF 2021.',
      idade: 'CNH categoria B ou superior; requisitos físicos, médicos, psicológicos, investigação social e demais condições do edital.',
      escolaridade: 'Nível superior completo em qualquer área, conforme carreira de Policial Rodoviário Federal.',
      banca: 'Cebraspe',
      inscritos: '304 mil+ inscritos · referência concurso PRF 2021/Cebraspe',
      materias: 'Língua Portuguesa, Raciocínio Lógico, Informática, Física, Ética, Geopolítica, Língua Estrangeira, legislação de trânsito, Direito Constitucional, Administrativo, Penal, Processo Penal, Direitos Humanos e legislação especial.',
      etapas: 'Provas objetiva e discursiva, TAF, avaliação psicológica, avaliação de saúde, investigação social, avaliação biopsicossocial/heteroidentificação quando aplicável, curso de formação profissional e nomeação.',
      cfsd: 'Curso de Formação Policial na UniPRF; novas turmas em 2025/2026 reforçaram efetivo em áreas estratégicas.',
      estagio: 'Estágio probatório e desenvolvimento na carreira conforme Lei nº 9.654/1998, Decreto nº 8.282/2014 e normas federais.',
      validade: 'Concurso PRF 2021 prorrogado até junho/2026.',
      previsao: 'Novo concurso solicitado/anunciado em estudos; sem edital novo publicado até a referência desta atualização.',
      site: 'https://www.gov.br/prf/pt-br/acesso-a-informacao/servidores/concursos'
    };
  }

  return {
    edital: `${item.titulo} — ${item.desc} — estrutura de concurso a preencher`,
    salario: 'A confirmar em edital, tabela oficial federal ou Diário Oficial da União.',
    vagas: 'Preencher com edital/autorização vigente.',
    cotas: 'Preencher conforme legislação federal e edital.',
    idade: 'Preencher requisitos de idade, CNH, aptidão física, investigação social e demais exigências conforme edital.',
    escolaridade: 'Preencher escolaridade e requisitos do cargo conforme edital.',
    banca: 'A definir/preencher conforme edital.',
    inscritos: 'Preencher quando houver dado oficial.',
    materias: 'Preencher disciplinas conforme edital do cargo.',
    etapas: 'Prova objetiva/discursiva quando prevista, TAF, exames médicos, avaliação psicológica, investigação social, curso de formação profissional e demais etapas do edital.',
    cfsd: 'Curso de formação profissional — preencher conforme edital e academia responsável.',
    estagio: 'Estágio probatório e desenvolvimento na carreira — preencher conforme legislação federal.',
    validade: 'Preencher conforme edital e atos de homologação/prorrogação.',
    previsao: 'Acompanhar Diário Oficial da União, órgão oficial e banca. Não afirmar concurso aberto sem publicação oficial.',
    site: '#'
  };
}

function criarAcoesFederalEstrutura(item) {
  if (item.inst === 'prf') {
    return [
      { titulo: 'PRF — subsídio 2026, enquadramento e progressão', status: 'Tema permanente', ano: 'Lei 9.654/1998 · Lei 14.875/2024', tipo: 'individual/coletivo', desc: 'Conferência de classe e padrão da carreira de Policial Rodoviário Federal, progressão, promoção e aplicação do subsídio federal vigente em 2026.', base: 'Lei nº 9.654/1998, Lei nº 12.775/2012, Decreto nº 8.282/2014, Lei nº 14.875/2024 e tabela federal/MGI 2026.', fonte: 'PRF/MGI/Planalto', fonteUrl: 'https://www.gov.br/prf/pt-br/acesso-a-informacao/servidores/carreira-prf', atualizado: 'Maio/2026' },
      { titulo: 'PRF — adicional de fronteira, diárias e indenizações', status: 'Depende de lotação/escala', ano: 'Tema recorrente', tipo: 'individual', desc: 'Conferência de adicional de fronteira, diárias, indenizações, ajuda de custo, missões, deslocamentos, escalas e demais rubricas eventuais.', base: 'Lei nº 12.855/2013, portarias federais, escala, lotação, Sigepe/SouGov e ficha financeira.', fonte: 'Planalto/MGI/PRF', fonteUrl: 'https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2013/lei/l12855.htm', atualizado: 'Maio/2026' },
      { titulo: 'PRF — aposentadoria policial, integralidade, paridade e abono', status: 'Análise previdenciária', ano: 'EC 103/2019', tipo: 'individual', desc: 'Aplicação das regras de aposentadoria policial federal, transições, paridade/integralidade quando cabíveis, contribuição previdenciária e abono de permanência.', base: 'Constituição Federal, EC 103/2019, LC 51/1985, Lei Complementar 144/2014, Lei 9.654/1998 e histórico funcional.', fonte: 'Planalto/MGI/PRF', fonteUrl: 'https://www.gov.br/prf/pt-br/acesso-a-informacao/servidores', atualizado: 'Maio/2026' }
    ];
  }

  return [
    { titulo: `${item.titulo} — Estrutura de direitos e ações a preencher`, status: 'A preencher', ano: 'Base federal pendente', tipo: 'individual', desc: 'Espaço reservado para inserir ações judiciais, teses administrativas, precedentes, prazos e observações específicas desta instituição federal.', base: 'Preencher com lei federal, edital, estatuto, jurisprudência, atos administrativos e documentos funcionais.', fonte: 'Fonte oficial a preencher', fonteUrl: '', atualizado: 'Estrutura criada para preenchimento' },
    { titulo: `${item.titulo} — Remuneração, adicionais e indenizações`, status: 'Verificar caso a caso', ano: 'Tema permanente', tipo: 'individual', desc: 'Use este item para detalhar subsídio/vencimento, indenizações, adicionais, auxílio-alimentação, adicional de fronteira, plantões, serviço extraordinário e eventuais diferenças.', base: 'Tabela remuneratória federal, contracheque, escala, portaria, ato de designação e legislação aplicável.', fonte: 'Documentos funcionais e normas federais', fonteUrl: '', atualizado: 'Estrutura criada para preenchimento' },
    { titulo: `${item.titulo} — Aposentadoria policial e previdência`, status: 'Análise individual', ano: 'Regra federal a preencher', tipo: 'individual', desc: 'Espaço para regras previdenciárias, transições, paridade/integralidade quando aplicável, abono de permanência e regras próprias da carreira policial federal.', base: 'Data de ingresso, tempo de contribuição, cargo/carreira, sexo, idade, regime previdenciário e norma federal.', fonte: 'Conferência previdenciária individual', fonteUrl: '', atualizado: 'Estrutura criada para preenchimento' }
  ];
}

function criarAssociacoesFederalEstrutura(item) {
  if (item.inst === 'prf') {
    return [
      { nome: 'FenaPRF — Federação Nacional dos Policiais Rodoviários Federais', foco: 'Policiais rodoviários federais ativos, aposentados e pensionistas', acao: 'Representação nacional da categoria, negociação coletiva, defesa institucional, previdência, saúde, segurança do trabalho e pautas remuneratórias.', site: 'https://fenaprf.org.br', telefone: 'Consultar canais oficiais da federação', mensalidade: 'Conforme sindicato estadual/filiado', servicos: 'Notícias da carreira, representação nacional, articulação legislativa, convênios e orientação institucional.' },
      { nome: 'SINPRFs — Sindicatos estaduais dos Policiais Rodoviários Federais', foco: 'Policiais rodoviários federais por unidade da federação', acao: 'Representação regional, atendimento jurídico/administrativo, acompanhamento de escalas, lotação, remoção, saúde, remuneração e aposentadoria.', site: 'Consultar sindicato estadual da base', telefone: 'Consultar diretamente no sindicato local', mensalidade: 'Conforme regra de filiação', servicos: 'Atendimento sindical, jurídico, convênios, assembleias, comunicação e apoio ao associado.' },
      { nome: 'Associações e entidades regionais da PRF', foco: 'Servidores PRF, familiares, aposentados e pensionistas', acao: 'Apoio associativo complementar, comunicação de classe, benefícios, atividades sociais e acompanhamento de pautas locais.', site: 'Consultar entidade regional', telefone: 'Consultar diretamente', mensalidade: 'Conforme entidade', servicos: 'Convênios, apoio social, comunicação institucional e suporte associativo.' }
    ];
  }

  return [
    { nome: `Associação/Sindicato — ${item.titulo}`, foco: `Brasil — ${item.desc}`, acao: 'Espaço reservado para cadastrar entidade representativa, atuação institucional, pautas remuneratórias, previdenciárias e jurídicas da carreira.', site: 'Consultar site oficial da entidade nacional', telefone: 'Consultar diretamente', mensalidade: 'Consultar diretamente', servicos: 'Jurídico, comunicação institucional, convênios, assembleias, atendimento ao associado e acompanhamento legislativo — preencher conforme entidade.' },
    { nome: `Entidade representativa federal — ${item.titulo}`, foco: `Profissionais ativos, aposentados e pensionistas vinculados à ${item.desc}`, acao: 'Cadastrar aqui associações, sindicatos, clubes e entidades de classe nacionais/regionais existentes.', site: 'Consultar canais oficiais', telefone: 'Consultar diretamente', mensalidade: 'Consultar diretamente', servicos: 'Serviços a preencher conforme entidade.' }
  ];
}

function aplicarEstruturaFederaisDados() {
  HEADER_ESTADOS.br = {
    nome: 'Brasil',
    sigla: 'BR',
    pc: 'pf',
    pp: 'prf',
    pf: 'pf',
    prf: 'prf',
    flag: HEADER_BRASIL_FLAG
  };

  INSTITUICOES_FEDERAIS_ESTRUTURA.forEach(item => {
    if (!INSTITUICOES_VALIDAS.includes(item.inst)) INSTITUICOES_VALIDAS.push(item.inst);
    HEADER_INSTITUICOES_INFO[item.inst] = HEADER_INSTITUICOES_INFO[item.inst] || { titulo: item.titulo, desc: item.desc };
    HEADER_INSTITUICOES_RESUMO[item.inst] = HEADER_INSTITUICOES_RESUMO[item.inst] || criarResumoFederalEstrutura(item);
    REMUNERACAO_FONTES_OFICIAIS[item.inst] = item.inst === 'prf'
      ? { nome: 'MGI/Servidor — Tabela de Remuneração dos Servidores Públicos Federais Civis nº 87/2026; PRF — Carreira e Portal da Transparência', url: 'https://www.gov.br/prf/pt-br/acesso-a-informacao/servidores/carreira-prf' }
      : (REMUNERACAO_FONTES_OFICIAIS[item.inst] || { nome: `${item.titulo} — fonte oficial federal a preencher`, url: '#' });
    CONFIGS_INSTITUICOES_GENERICAS[item.inst] = item.inst === 'prf'
      ? {
          titulo: 'PRF',
          desc: 'Polícia Rodoviária Federal',
          cor: item.cor,
          alertaPrev: 'PRF: carreira federal de Policial Rodoviário Federal, com atuação em patrulhamento ostensivo, fiscalização de trânsito, segurança viária, enfrentamento ao crime nas rodovias federais e operações integradas.'
        }
      : {
          titulo: item.titulo,
          desc: item.desc,
          cor: item.cor,
          alertaPrev: `${item.titulo}: estrutura aberta para preenchimento. Conferir legislação federal, carreira, previdência, remuneração, indenizações, auxílios, regras de ingresso e direitos conforme fontes oficiais.`
        };
    CONCURSOS[item.inst] = CONCURSOS[item.inst] || criarConcursoFederalEstrutura(item);
    ACOES_JUDICIAIS[item.inst] = ACOES_JUDICIAIS[item.inst] || criarAcoesFederalEstrutura(item);
    ASSOCIACOES[item.inst] = ASSOCIACOES[item.inst] || criarAssociacoesFederalEstrutura(item);
    if (!CARGOS_ESTRUTURA_GENERICAS[item.inst]) {
      CARGOS_ESTRUTURA_GENERICAS[item.inst] = item.inst === 'pf'
        ? criarCargosPfEstrutura(item.inst, item.titulo)
        : criarCargosPrfEstrutura(item.inst, item.titulo);
    }
  });
}

function inserirOptionFederalNoSelect(select, item) {
  if (!select || Array.from(select.options || []).some(opt => opt.value === item.inst)) return;
  let grupo = Array.from(select.querySelectorAll('optgroup')).find(optgroup => optgroup.label === 'Federais');
  if (!grupo) {
    grupo = document.createElement('optgroup');
    grupo.label = 'Federais';
    select.appendChild(grupo);
  }
  grupo.appendChild(criarOptionInstituicao(item.inst, `${item.titulo} - ${item.desc}`));
}

function aplicarEstruturaFederaisNoHtml() {
  INSTITUICOES_FEDERAIS_ESTRUTURA.forEach(item => {
    ['instituicao_header', 'instituicao', 'instituicao_home'].forEach(id => inserirOptionFederalNoSelect(document.getElementById(id), item));
  });

  const flags = document.querySelector('.header-state-flags');
  if (flags && !flags.querySelector('[data-estado="br"]')) {
    const btn = document.createElement('button');
    btn.className = 'state-flag';
    btn.type = 'button';
    btn.dataset.estado = 'br';
    btn.title = 'Brasil / Instituições federais';
    btn.setAttribute('aria-label', 'Selecionar instituições federais');
    btn.setAttribute('aria-pressed', 'false');
    btn.onclick = () => selecionarEstado('br');
    btn.innerHTML = `<img src="${HEADER_BRASIL_FLAG}" alt="" aria-hidden="true"><span>BR</span>`;
    flags.appendChild(btn);
  }
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
  { estado: 'sp', nome: 'São Paulo', sigla: 'SP', inst: 'bmsp', titulo: 'CBPMESP', desc: 'Corpo de Bombeiros da Polícia Militar do Estado de São Paulo' },
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
    ['instituicao_header', 'instituicao', 'instituicao_home'].forEach(id => inserirOptionBombeiroNoSelect(document.getElementById(id), item));
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


function getRotuloRamoSelect(ramo, inst, info = {}) {
  if (ramo === 'bm') return 'Bombeiros Militares';
  if (ramo === 'pc') return 'Polícia Civil';
  if (ramo === 'pp') return 'Polícia Penal';
  if (inst === 'pmrs' || /Brigada Militar/i.test(info.desc || '')) return 'Brigada Militar';
  return 'Polícia Militar';
}

function montarSelectInstituicoes(select) {
  if (!select || select.dataset.instituicoesMontadas === 'true') return;

  const valorAtual = select.value;
  const fragmento = document.createDocumentFragment();
  const placeholder = criarOptionInstituicao('', 'Escolha uma instituição');
  placeholder.disabled = true;
  placeholder.selected = true;
  fragmento.appendChild(placeholder);

  Object.entries(HEADER_ESTADOS || {}).forEach(([uf, estado]) => {
    if (!estado || ['br', 'municipal'].includes(uf)) return;

    const grupo = document.createElement('optgroup');
    grupo.label = estado.nome || String(uf).toUpperCase();

    ['pm', 'bm', 'pc', 'pp'].forEach(ramo => {
      const inst = estado[ramo];
      if (!inst) return;
      const info = HEADER_INSTITUICOES_INFO[inst] || {};
      const titulo = info.titulo || String(inst).toUpperCase();
      const rotulo = getRotuloRamoSelect(ramo, inst, info);
      grupo.appendChild(criarOptionInstituicao(inst, `${titulo} - ${rotulo}`));
    });

    if (grupo.children.length) fragmento.appendChild(grupo);
  });

  select.innerHTML = '';
  select.appendChild(fragmento);
  select.dataset.instituicoesMontadas = 'true';

  if (valorAtual && Array.from(select.options || []).some(opt => opt.value === valorAtual)) {
    select.value = valorAtual;
  }
}

function montarSelectsInstituicoes() {
  document.querySelectorAll('#instituicao, #instituicao_header, #instituicao_home').forEach(montarSelectInstituicoes);
}

function prepararSelectInstituicaoHome() {
  const seletor = document.getElementById('instituicao_home');
  if (!seletor) return;

  montarSelectInstituicoes(seletor);
  const primeiraOpcao = seletor.options && seletor.options[0];
  if (primeiraOpcao) {
    primeiraOpcao.disabled = false;
    primeiraOpcao.selected = true;
    primeiraOpcao.textContent = 'Resumo do portal';
    primeiraOpcao.value = '';
  }
  seletor.value = '';
}

function selecionarInstituicaoPaginaInicial(inst) {
  const valor = String(inst || '').trim();
  if (!valor) {
    aplicarHeaderInicialPortal();
    prepararSelectInstituicaoHome();
    return;
  }

  mudarInstituicao(valor);
  atualizarVisibilidadeResumoInstitucional('principal');
  const info = HEADER_INSTITUICOES_INFO[valor];
  if (info) mostrarToast(`${info.titulo} selecionada no resumo da página inicial.`);
}

function aplicarEstruturaEstadosFaltantesNoHtml() {
  montarSelectsInstituicoes();

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

  ['instituicao_header', 'instituicao', 'instituicao_home'].forEach(id => montarOptgroups(document.getElementById(id)));

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
      btn.innerHTML = `<img src="${estado.flag}" alt="" aria-hidden="true"><span>${estado.sigla}</span>`;
      flags.appendChild(btn);
    });
  }

  aplicarEstruturaBombeirosMilitaresNoHtml();
  aplicarEstruturaFederaisNoHtml();
}



/* ============================================================ */
/* === REVISÃO DOS RESUMOS INSTITUCIONAIS ====================== */
/* ============================================================ */
const RESUMO_DADOS_EM_BREVE = 'Dados em breve';

const RESUMO_GOVERNADORES_UF_2026 = {
  ac: 'Mailza Assis',
  al: 'Paulo Dantas',
  ap: 'Clécio Luís',
  am: 'Roberto Cidade (interino)',
  ba: 'Jerônimo Rodrigues',
  ce: 'Elmano de Freitas',
  df: 'Celina Leão',
  es: 'Ricardo Ferraço',
  go: 'Daniel Vilela',
  ma: 'Carlos Brandão Júnior',
  mt: 'Otaviano Pivetta',
  ms: 'Eduardo Riedel',
  mg: 'Mateus Simões',
  pa: 'Hana Ghassan',
  pb: 'Lucas Ribeiro',
  pr: 'Ratinho Júnior',
  pe: 'Raquel Lyra',
  pi: 'Rafael Fonteles',
  rj: 'Ricardo Couto (interino)',
  rn: 'Fátima Bezerra',
  rs: 'Eduardo Leite',
  ro: 'Marcos Rocha',
  rr: 'Soldado Sampaio (interino)',
  sc: 'Jorginho Mello',
  sp: 'Tarcísio de Freitas',
  se: 'Fábio Mitidieri',
  to: 'Wanderlei Barbosa'
};

function resumoEhDadoPendente(valor) {
  if (valor === undefined || valor === null) return true;
  if (typeof valor === 'number') return !Number.isFinite(valor) || valor === 0;
  const texto = String(valor).trim();
  if (!texto || texto === '#' || texto === '-' || texto === '—') return true;
  return /\b(a preencher|preencher|a confirmar|não informado|nao informado|estrutura .*criada|preenchimento|pendente|consultar diretamente|consultar site oficial|fonte oficial a preencher|fontes oficiais .* preencher|comando\/direção atual|chefe do executivo|efetivo ativo — preencher|reserva\/inativos — preencher|integrantes femininas — preencher|relação ativa|relação ativo\/população — preencher)\b/i.test(texto);
}

function resumoValorOuEmBreve(valor) {
  return resumoEhDadoPendente(valor) ? RESUMO_DADOS_EM_BREVE : valor;
}

function resumoInferirTipo(inst, dados = {}) {
  if (dados.tipo && !resumoEhDadoPendente(dados.tipo)) return dados.tipo;
  if (/^bm/i.test(inst)) return 'Bombeiro Militar';
  if (/^pm/i.test(inst) || inst === 'pmerj') return 'Polícia Militar';
  if (/^pc/i.test(inst) || inst === 'pcerj') return 'Polícia Civil';
  if (/^pp/i.test(inst)) return 'Polícia Penal';
  if (inst === 'pf') return 'Polícia Federal';
  if (inst === 'prf') return 'Polícia Rodoviária Federal';
  return RESUMO_DADOS_EM_BREVE;
}

function resumoInstituicoesEstaduais() {
  const pares = [];
  Object.entries(HEADER_ESTADOS || {}).forEach(([uf, estado]) => {
    if (uf === 'br') return;
    ['pm', 'bm', 'pc', 'pp'].forEach(ramo => {
      if (estado && estado[ramo]) pares.push({ uf, ramo, inst: estado[ramo], estado });
    });
  });
  return pares;
}

function aplicarRevisaoResumosInstitucionais() {
  const pares = resumoInstituicoesEstaduais();

  pares.forEach(({ uf, ramo, inst, estado }) => {
    const info = HEADER_INSTITUICOES_INFO[inst] || {};
    const dados = HEADER_INSTITUICOES_RESUMO[inst] || {};
    const governadorAtual = RESUMO_GOVERNADORES_UF_2026[uf];
    const nome = !resumoEhDadoPendente(dados.nome) ? dados.nome : (info.desc || RESUMO_DADOS_EM_BREVE);
    const sigla = !resumoEhDadoPendente(dados.sigla) ? dados.sigla : (info.titulo || String(inst || '').toUpperCase() || RESUMO_DADOS_EM_BREVE);

    HEADER_INSTITUICOES_RESUMO[inst] = {
      ...dados,
      nome,
      sigla,
      estado: resumoValorOuEmBreve(dados.estado || estado?.nome),
      estadoSigla: resumoValorOuEmBreve(dados.estadoSigla || estado?.sigla),
      tipo: resumoInferirTipo(inst, dados),
      criacao: resumoValorOuEmBreve(dados.criacao),
      ativaLabel: !resumoEhDadoPendente(dados.ativaLabel) ? dados.ativaLabel : (resumoEhDadoPendente(dados.ativa) ? RESUMO_DADOS_EM_BREVE : ''),
      reservaLabel: !resumoEhDadoPendente(dados.reservaLabel) ? dados.reservaLabel : (resumoEhDadoPendente(dados.reserva) ? RESUMO_DADOS_EM_BREVE : ''),
      femininasLabel: !resumoEhDadoPendente(dados.femininasLabel) ? dados.femininasLabel : (resumoEhDadoPendente(dados.femininas) ? RESUMO_DADOS_EM_BREVE : ''),
      populacaoTitulo: dados.populacaoTitulo || (ramo === 'pp' ? 'Presos atendidos' : 'População do Estado'),
      populacaoLabel: !resumoEhDadoPendente(dados.populacaoLabel) ? dados.populacaoLabel : (resumoEhDadoPendente(dados.populacao) ? RESUMO_DADOS_EM_BREVE : ''),
      relacaoTitulo: dados.relacaoTitulo || (ramo === 'pp' ? 'Relação ativa/presos' : 'Relação ativa/população'),
      relacaoLabel: !resumoEhDadoPendente(dados.relacaoLabel) ? dados.relacaoLabel : (!resumoEhDadoPendente(dados.populacao) && !resumoEhDadoPendente(dados.ativa) ? '' : RESUMO_DADOS_EM_BREVE),
      governador: governadorAtual || resumoValorOuEmBreve(dados.governador),
      comando: resumoValorOuEmBreve(dados.comando),
      fonte: resumoValorOuEmBreve(dados.fonte),
      atualizado: dados.atualizado && !resumoEhDadoPendente(dados.atualizado)
        ? `${dados.atualizado} · Revisado em 02/05/2026`
        : 'Revisado em 02/05/2026'
    };

    ['ativaLabel', 'reservaLabel', 'femininasLabel', 'populacaoLabel', 'relacaoLabel'].forEach(chave => {
      if (HEADER_INSTITUICOES_RESUMO[inst][chave] === '') delete HEADER_INSTITUICOES_RESUMO[inst][chave];
    });
  });

  // Também normaliza estruturas federais que o site mantém fora das 108 estaduais.
  ['pf', 'prf'].forEach(inst => {
    if (!HEADER_INSTITUICOES_RESUMO[inst]) return;
    const dados = HEADER_INSTITUICOES_RESUMO[inst];
    Object.keys(dados).forEach(chave => {
      if (chave.endsWith('Titulo')) return;
      if (chave === 'populacao' || chave === 'ativa' || chave === 'reserva' || chave === 'femininas') return;
      dados[chave] = resumoValorOuEmBreve(dados[chave]);
    });
    dados.populacaoLabel = resumoValorOuEmBreve(dados.populacaoLabel || dados.populacao);
    dados.atualizado = 'Revisado em 02/05/2026';
  });
}

aplicarEstruturaEstadosFaltantesDados();
aplicarEstruturaBombeirosMilitaresDados();
aplicarEstruturaFederaisDados();
aplicarRevisaoResumosInstitucionais();

/* ============================================================ */
/* === REVISÃO DA ABA CONCURSOS ================================ */
/* ============================================================ */
const CONCURSO_DADOS_EM_BREVE = 'Dados em breve';
const CONCURSO_CAMPOS_TEXTO = [
  'edital', 'salario', 'vagas', 'cotas', 'idade', 'escolaridade', 'banca',
  'inscritos', 'materias', 'etapas', 'cfsd', 'estagio', 'validade', 'previsao'
];

function concursoEhDadoPendente(valor) {
  if (valor === undefined || valor === null) return true;
  if (typeof valor === 'number') return !Number.isFinite(valor) || valor === 0;
  const texto = String(valor).trim();
  if (!texto || texto === '#' || texto === '-' || texto === '—') return true;
  if (texto === CONCURSO_DADOS_EM_BREVE) return true;
  return /^(a definir|a confirmar|a preencher|preencher|consultar|conferir|sem informação|sem informacao|sem inscrições|sem inscricoes|ainda não divulgado|ainda nao divulgado|não divulgado|nao divulgado|fonte oficial a preencher|dados pendentes|pendente|acompanhar|curso de formação.*preencher|curso de formacao.*preencher|prova objetiva\/discursiva quando prevista)\b/i.test(texto)
    || /\b(estrutura de concurso a preencher|estrutura .*para preenchimento|fonte oficial a preencher|preencher|a definir\/preencher|base .*pendente)\b/i.test(texto);
}

function concursoValorOuEmBreve(valor) {
  return concursoEhDadoPendente(valor) ? CONCURSO_DADOS_EM_BREVE : String(valor).trim();
}

function concursoUrlValida(valor) {
  const url = String(valor || '').trim();
  return /^https?:\/\//i.test(url) ? url : '#';
}

function concursoInfoInstituicao(inst) {
  const info = HEADER_INSTITUICOES_INFO[inst] || {};
  return {
    titulo: info.titulo || String(inst || '').toUpperCase(),
    desc: info.desc || CONCURSO_DADOS_EM_BREVE
  };
}

function concursoCriarBaseDadosEmBreve(inst) {
  const info = concursoInfoInstituicao(inst);
  const fonte = REMUNERACAO_FONTES_OFICIAIS[inst] || {};
  return {
    edital: `${info.titulo} — ${info.desc}`,
    salario: CONCURSO_DADOS_EM_BREVE,
    vagas: CONCURSO_DADOS_EM_BREVE,
    cotas: CONCURSO_DADOS_EM_BREVE,
    idade: CONCURSO_DADOS_EM_BREVE,
    escolaridade: CONCURSO_DADOS_EM_BREVE,
    banca: CONCURSO_DADOS_EM_BREVE,
    inscritos: CONCURSO_DADOS_EM_BREVE,
    materias: CONCURSO_DADOS_EM_BREVE,
    etapas: CONCURSO_DADOS_EM_BREVE,
    cfsd: CONCURSO_DADOS_EM_BREVE,
    estagio: CONCURSO_DADOS_EM_BREVE,
    validade: CONCURSO_DADOS_EM_BREVE,
    previsao: CONCURSO_DADOS_EM_BREVE,
    site: concursoUrlValida(fonte.url)
  };
}

function concursoNormalizarObjeto(inst, dados) {
  const normalizado = concursoCriarBaseDadosEmBreve(inst);
  const origem = dados && typeof dados === 'object' ? dados : {};

  CONCURSO_CAMPOS_TEXTO.forEach(campo => {
    normalizado[campo] = concursoValorOuEmBreve(origem[campo] ?? normalizado[campo]);
  });

  normalizado.site = concursoUrlValida(origem.site || normalizado.site);
  return normalizado;
}

function aplicarRevisaoConcursosInstituicoes() {
  const instituicoes = new Set(INSTITUICOES_VALIDAS || []);

  Object.values(HEADER_ESTADOS || {}).forEach(estado => {
    ['pm', 'bm', 'pc', 'pp', 'pf', 'prf'].forEach(ramo => {
      if (estado && estado[ramo]) instituicoes.add(estado[ramo]);
    });
  });

  ['pf', 'prf'].forEach(inst => instituicoes.add(inst));

  instituicoes.forEach(inst => {
    if (!inst) return;
    if (!INSTITUICOES_VALIDAS.includes(inst)) INSTITUICOES_VALIDAS.push(inst);
    if (!HEADER_INSTITUICOES_INFO[inst]) {
      HEADER_INSTITUICOES_INFO[inst] = { titulo: String(inst).toUpperCase(), desc: CONCURSO_DADOS_EM_BREVE };
    }

    let dados = CONCURSOS[inst];
    if (!dados && typeof isPoliciaPenal === 'function' && typeof getConcursoPoliciaPenal === 'function') {
      try {
        if (isPoliciaPenal(inst)) dados = getConcursoPoliciaPenal(inst);
      } catch (erro) {
        dados = null;
      }
    }

    CONCURSOS[inst] = concursoNormalizarObjeto(inst, dados);
  });
}

aplicarRevisaoConcursosInstituicoes();


/* ============================================================ */
/* === PADRONIZAÇÃO GLOBAL DE DADOS SEM FONTE SEGURA =========== */
/* ============================================================ */
const DADOS_EM_BREVE_PADRAO_GLOBAL = 'Dados em breve';

function dadoSemFonteSegura(valor) {
  if (valor === undefined || valor === null) return true;
  if (typeof valor === 'number') return false;
  if (typeof valor !== 'string') return false;
  const texto = valor.trim();
  if (!texto || texto === '#' || texto === '-' || texto === '—') return true;
  if (texto === DADOS_EM_BREVE_PADRAO_GLOBAL) return false;
  if (/^https?:\/\//i.test(texto)) return false;
  return /(?:a preencher|preencher|a confirmar|nome a confirmar|a definir|sem informação|sem informacao|não informado|nao informado|não divulgado|nao divulgado|ainda não divulgado|ainda nao divulgado|pendente|dados pendentes|estrutura criada|estrutura aberta|para preenchimento|fonte oficial a preencher|fontes oficiais .* preencher|consultar diretamente|consultar site|consultar canais|consultar edital|consultar banca|consultar fonte|conferir edital|conferir autorização|acompanhar diário oficial|acompanhar diario oficial|não afirmar concurso aberto|nao afirmar concurso aberto|espaço reservado|espaco reservado|reservado para|cadastrar aqui|serviços a preencher|servicos a preencher|verificar caso a caso|análise individual|analise individual|base local pendente|base federal pendente|regra local a preencher|regra federal a preencher|tema permanente|tema recorrente|documentos funcionais e normas locais|documentos funcionais e normas federais|conferência previdenciária individual|conferencia previdenciaria individual)/i.test(texto);
}

function normalizarTextoSemFonteSegura(valor) {
  return dadoSemFonteSegura(valor) ? DADOS_EM_BREVE_PADRAO_GLOBAL : valor;
}

function normalizarObjetoSemFonteSegura(obj, visitados = new WeakSet()) {
  if (!obj || typeof obj !== 'object') return obj;
  if (visitados.has(obj)) return obj;
  visitados.add(obj);

  if (Array.isArray(obj)) {
    obj.forEach((item, indice) => {
      if (item && typeof item === 'object') normalizarObjetoSemFonteSegura(item, visitados);
      else obj[indice] = normalizarTextoSemFonteSegura(item);
    });
    return obj;
  }

  Object.keys(obj).forEach(chave => {
    const valor = obj[chave];
    if (valor && typeof valor === 'object') {
      normalizarObjetoSemFonteSegura(valor, visitados);
      return;
    }
    if (/^(url|fonteUrl|href|flag|brasao|imagem|img|logo)$/i.test(chave)) return;
    obj[chave] = normalizarTextoSemFonteSegura(valor);
  });
  return obj;
}

function aplicarPadraoDadosEmBreveGlobal() {
  [
    HEADER_INSTITUICOES_RESUMO,
    CONCURSOS,
    ACOES_JUDICIAIS,
    ASSOCIACOES,
    POLICIAS_PENAIS_INFO,
    CONFIGS_INSTITUICOES_GENERICAS,
    CARGOS_ESTRUTURA_GENERICAS,
    REMUNERACAO_FONTES_OFICIAIS,
    typeof CARGOS_PM !== 'undefined' ? CARGOS_PM : null,
    typeof CARGOS_PC !== 'undefined' ? CARGOS_PC : null,
    typeof CARGOS_PMERJ !== 'undefined' ? CARGOS_PMERJ : null,
    typeof CARGOS_PCERJ !== 'undefined' ? CARGOS_PCERJ : null,
    typeof CARGOS_PMMG !== 'undefined' ? CARGOS_PMMG : null,
    typeof CARGOS_PCMG !== 'undefined' ? CARGOS_PCMG : null,
    typeof CARGOS_PMBA !== 'undefined' ? CARGOS_PMBA : null,
    typeof CARGOS_PCBA !== 'undefined' ? CARGOS_PCBA : null,
    typeof CARGOS_PMPR !== 'undefined' ? CARGOS_PMPR : null,
    typeof CARGOS_PCPR !== 'undefined' ? CARGOS_PCPR : null,
    typeof CARGOS_PMRS !== 'undefined' ? CARGOS_PMRS : null,
    typeof CARGOS_PCRS !== 'undefined' ? CARGOS_PCRS : null,
    typeof CARGOS_PMSC !== 'undefined' ? CARGOS_PMSC : null,
    typeof CARGOS_PCSC !== 'undefined' ? CARGOS_PCSC : null,
    typeof CARGOS_PMES !== 'undefined' ? CARGOS_PMES : null,
    typeof CARGOS_PCES !== 'undefined' ? CARGOS_PCES : null,
    typeof CARGOS_PMMS !== 'undefined' ? CARGOS_PMMS : null,
    typeof CARGOS_PCMS !== 'undefined' ? CARGOS_PCMS : null,
    typeof CARGOS_PMMT !== 'undefined' ? CARGOS_PMMT : null,
    typeof CARGOS_PCMT !== 'undefined' ? CARGOS_PCMT : null,
    typeof CARGOS_PMAC !== 'undefined' ? CARGOS_PMAC : null,
    typeof CARGOS_PCAC !== 'undefined' ? CARGOS_PCAC : null,
    typeof CARGOS_PPSP !== 'undefined' ? CARGOS_PPSP : null,
    typeof CARGOS_PPRJ !== 'undefined' ? CARGOS_PPRJ : null,
    typeof CARGOS_PPMG !== 'undefined' ? CARGOS_PPMG : null,
    typeof CARGOS_PPBA !== 'undefined' ? CARGOS_PPBA : null,
    typeof CARGOS_PPPR !== 'undefined' ? CARGOS_PPPR : null,
    typeof CARGOS_PPRS !== 'undefined' ? CARGOS_PPRS : null,
    typeof CARGOS_PPSC !== 'undefined' ? CARGOS_PPSC : null,
    typeof CARGOS_PPES !== 'undefined' ? CARGOS_PPES : null,
    typeof CARGOS_PPMS !== 'undefined' ? CARGOS_PPMS : null,
    typeof CARGOS_PPMT !== 'undefined' ? CARGOS_PPMT : null,
    typeof CARGOS_PPAC !== 'undefined' ? CARGOS_PPAC : null
  ].forEach(base => normalizarObjetoSemFonteSegura(base));
}

aplicarPadraoDadosEmBreveGlobal();

/* ============================================================ */
/* === INDICADOR DE ATUALIZAÇÃO DO PORTAL ====================== */
/* ============================================================ */
const CAMPOS_IGNORADOS_PERCENTUAL_PORTAL = new Set([
  'id', 'inst', 'selected', 'cor', 'color', 'flag', 'brasao', 'imagem', 'img',
  'logo', 'path', 'classe', 'className', 'data', 'tipoCalculo', 'grupo'
]);

function campoContaParaPercentualPortal(chave, valor) {
  if (valor === undefined || valor === null) return true;
  if (typeof valor === 'boolean' || typeof valor === 'function') return false;
  if (!chave) return true;
  return !CAMPOS_IGNORADOS_PERCENTUAL_PORTAL.has(String(chave));
}

function valorPreenchidoParaPercentualPortal(valor, chave = '') {
  if (valor === undefined || valor === null) return false;
  if (typeof valor === 'number') return Number.isFinite(valor) && valor > 0;
  if (typeof valor === 'boolean' || typeof valor === 'function') return true;

  const texto = String(valor).trim();
  if (!texto || texto === '#' || texto === '-' || texto === '—') return false;
  if (/dados em breve/i.test(texto)) return false;

  if (/url|href|site|fonteurl/i.test(String(chave))) {
    return /^https?:\/\//i.test(texto);
  }

  if (typeof dadoSemFonteSegura === 'function' && dadoSemFonteSegura(texto)) return false;
  if (typeof resumoEhDadoPendente === 'function' && resumoEhDadoPendente(texto)) return false;
  if (typeof concursoEhDadoPendente === 'function' && concursoEhDadoPendente(texto)) return false;
  return true;
}

function adicionarBasePercentualPortal(bases, nome, valor) {
  if (valor && typeof valor === 'object') bases.push({ nome, valor });
}

function getBasesPercentualAtualizacaoPortal() {
  const bases = [];
  adicionarBasePercentualPortal(bases, 'resumos institucionais', HEADER_INSTITUICOES_RESUMO);
  adicionarBasePercentualPortal(bases, 'concursos', CONCURSOS);
  adicionarBasePercentualPortal(bases, 'ações judiciais', ACOES_JUDICIAIS);
  adicionarBasePercentualPortal(bases, 'associações e sindicatos', ASSOCIACOES);
  adicionarBasePercentualPortal(bases, 'polícias penais', POLICIAS_PENAIS_INFO);
  adicionarBasePercentualPortal(bases, 'fontes oficiais de remuneração', REMUNERACAO_FONTES_OFICIAIS);

  [
    ['cargos PM', typeof CARGOS_PM !== 'undefined' ? CARGOS_PM : null],
    ['cargos PC', typeof CARGOS_PC !== 'undefined' ? CARGOS_PC : null],
    ['cargos PMERJ', typeof CARGOS_PMERJ !== 'undefined' ? CARGOS_PMERJ : null],
    ['cargos PCERJ', typeof CARGOS_PCERJ !== 'undefined' ? CARGOS_PCERJ : null],
    ['cargos PMMG', typeof CARGOS_PMMG !== 'undefined' ? CARGOS_PMMG : null],
    ['cargos PCMG', typeof CARGOS_PCMG !== 'undefined' ? CARGOS_PCMG : null],
    ['cargos PMBA', typeof CARGOS_PMBA !== 'undefined' ? CARGOS_PMBA : null],
    ['cargos PCBA', typeof CARGOS_PCBA !== 'undefined' ? CARGOS_PCBA : null],
    ['cargos PMPR', typeof CARGOS_PMPR !== 'undefined' ? CARGOS_PMPR : null],
    ['cargos PCPR', typeof CARGOS_PCPR !== 'undefined' ? CARGOS_PCPR : null],
    ['cargos PMRS', typeof CARGOS_PMRS !== 'undefined' ? CARGOS_PMRS : null],
    ['cargos PCRS', typeof CARGOS_PCRS !== 'undefined' ? CARGOS_PCRS : null],
    ['cargos PMSC', typeof CARGOS_PMSC !== 'undefined' ? CARGOS_PMSC : null],
    ['cargos PCSC', typeof CARGOS_PCSC !== 'undefined' ? CARGOS_PCSC : null],
    ['cargos PMES', typeof CARGOS_PMES !== 'undefined' ? CARGOS_PMES : null],
    ['cargos PCES', typeof CARGOS_PCES !== 'undefined' ? CARGOS_PCES : null],
    ['cargos PMMS', typeof CARGOS_PMMS !== 'undefined' ? CARGOS_PMMS : null],
    ['cargos PCMS', typeof CARGOS_PCMS !== 'undefined' ? CARGOS_PCMS : null],
    ['cargos PMMT', typeof CARGOS_PMMT !== 'undefined' ? CARGOS_PMMT : null],
    ['cargos PCMT', typeof CARGOS_PCMT !== 'undefined' ? CARGOS_PCMT : null],
    ['cargos PMAC', typeof CARGOS_PMAC !== 'undefined' ? CARGOS_PMAC : null],
    ['cargos PCAC', typeof CARGOS_PCAC !== 'undefined' ? CARGOS_PCAC : null],
    ['cargos PPSP', typeof CARGOS_PPSP !== 'undefined' ? CARGOS_PPSP : null],
    ['cargos PPRJ', typeof CARGOS_PPRJ !== 'undefined' ? CARGOS_PPRJ : null],
    ['cargos PPMG', typeof CARGOS_PPMG !== 'undefined' ? CARGOS_PPMG : null],
    ['cargos PPBA', typeof CARGOS_PPBA !== 'undefined' ? CARGOS_PPBA : null],
    ['cargos PPPR', typeof CARGOS_PPPR !== 'undefined' ? CARGOS_PPPR : null],
    ['cargos PPRS', typeof CARGOS_PPRS !== 'undefined' ? CARGOS_PPRS : null],
    ['cargos PPSC', typeof CARGOS_PPSC !== 'undefined' ? CARGOS_PPSC : null],
    ['cargos PPES', typeof CARGOS_PPES !== 'undefined' ? CARGOS_PPES : null],
    ['cargos PPMS', typeof CARGOS_PPMS !== 'undefined' ? CARGOS_PPMS : null],
    ['cargos PPMT', typeof CARGOS_PPMT !== 'undefined' ? CARGOS_PPMT : null],
    ['cargos PPAC', typeof CARGOS_PPAC !== 'undefined' ? CARGOS_PPAC : null],
    ['cargos estruturais genéricos', CARGOS_ESTRUTURA_GENERICAS]
  ].forEach(([nome, valor]) => adicionarBasePercentualPortal(bases, nome, valor));

  return bases;
}

function contabilizarPercentualAtualizacaoPortal(valor, stats, chave = '', visitados = new WeakSet()) {
  if (valor && typeof valor === 'object') {
    if (visitados.has(valor)) return stats;
    visitados.add(valor);

    if (Array.isArray(valor)) {
      valor.forEach(item => contabilizarPercentualAtualizacaoPortal(item, stats, chave, visitados));
      return stats;
    }

    Object.entries(valor).forEach(([subChave, subValor]) => {
      contabilizarPercentualAtualizacaoPortal(subValor, stats, subChave, visitados);
    });
    return stats;
  }

  if (!campoContaParaPercentualPortal(chave, valor)) return stats;
  stats.total += 1;
  if (valorPreenchidoParaPercentualPortal(valor, chave)) stats.preenchidos += 1;
  else stats.emBreve += 1;
  return stats;
}

function calcularPercentualAtualizacaoPortal() {
  const stats = { total: 0, preenchidos: 0, emBreve: 0 };
  getBasesPercentualAtualizacaoPortal().forEach(base => {
    contabilizarPercentualAtualizacaoPortal(base.valor, stats);
  });

  const percentual = stats.total ? (stats.preenchidos / stats.total) * 100 : 0;
  return {
    ...stats,
    percentual,
    percentualTexto: `${percentual.toFixed(percentual >= 99.5 || percentual < 10 ? 0 : 1).replace('.', ',')}%`
  };
}

function atualizarIndicadorPercentualPortal() {
  const indicador = calcularPercentualAtualizacaoPortal();
  const valor = document.getElementById('header-resumo-dados-atualizados');
  const label = document.getElementById('header-label-dados-atualizados');

  if (label) label.textContent = 'Dados Atualizados do site';
  if (valor) {
    valor.textContent = indicador.percentualTexto;
    valor.title = `${indicador.preenchidos.toLocaleString('pt-BR')} de ${indicador.total.toLocaleString('pt-BR')} campos com dados preenchidos; ${indicador.emBreve.toLocaleString('pt-BR')} em “Dados em breve”.`;
    valor.setAttribute('aria-label', `${indicador.percentualTexto} dos dados cadastrados estão preenchidos`);
    valor.dataset.totalCampos = String(indicador.total);
    valor.dataset.camposPreenchidos = String(indicador.preenchidos);
    valor.dataset.camposEmBreve = String(indicador.emBreve);
  }

  return indicador;
}

function formatarNumeroHeader(valor) {
  return Number(valor || 0).toLocaleString('pt-BR');
}

function formatarEfetivoHeader(valor) {
  const numero = Number(valor || 0);
  if (!numero) return RESUMO_DADOS_EM_BREVE;
  if (numero >= 1000000) {
    const milhao = numero / 1000000;
    let texto = Number.isInteger(milhao) ? String(milhao) : milhao.toFixed(1).replace('.', ',');
    texto = texto.replace(',0', '');
    return `≈ ${texto} ${milhao >= 2 ? 'milhões' : 'milhão'}`;
  }
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
  if (!pop || !ativo) return RESUMO_DADOS_EM_BREVE;
  const habitantesPorAtivo = Math.round(pop / ativo);
  const percentual = ((ativo / pop) * 100).toFixed(3).replace('.', ',');
  return `1 ativo / ${habitantesPorAtivo.toLocaleString('pt-BR')} hab. · ${percentual}%`;
}

function calcularEfetivoTotalResumoHeader(dados = {}) {
  if (dados.efetivoTotalLabel) return dados.efetivoTotalLabel;
  const ativa = Number(dados.ativa || 0);
  const reserva = Number(dados.reserva || 0);
  if (ativa || reserva) return formatarEfetivoHeader(ativa + reserva);
  if (dados.ativaLabel) return dados.ativaLabel;
  return formatarEfetivoHeader(dados.ativa);
}

function calcularEfetivoAtivoResumoHeader(dados = {}) {
  if (dados.ativaLabel) return dados.ativaLabel;
  return formatarEfetivoHeader(dados.ativa);
}

function atualizarLabelsHeaderResumo(labels = {}) {
  const padrao = {
    'header-label-natureza': 'Natureza',
    'header-label-uf': 'UF/Jurisdição',
    'header-label-criacao': 'Criação',
    'header-label-ativa': 'Efetivo na ativa',
    'header-label-reserva': 'Reserva/inativos',
    'header-label-total': 'Mulheres no efetivo',
    'header-label-populacao': 'População do Estado',
    'header-label-relacao': 'Relação ativa/população',
    'header-label-dados-atualizados': 'Dados Atualizados do site',
    'header-label-governador': 'Chefe do Executivo',
    'header-label-comando': 'Comando/Direção'
  };

  Object.entries({ ...padrao, ...labels }).forEach(([id, valor]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = valor;
  });
}


function alternarHeaderComandoResumo(visivel) {
  document.querySelectorAll('.header-command-item').forEach(item => {
    item.hidden = !visivel;
    item.classList.toggle('is-hidden', !visivel);
  });
}

function calcularResumoPortalHeader() {
  if (typeof garantirEstruturaGuardaMunicipalConsulta === 'function') garantirEstruturaGuardaMunicipalConsulta();
  const instituicoes = INSTITUICOES_VALIDAS.length;
  const estados = Object.keys(HEADER_ESTADOS).filter(chave => !['br', 'municipal'].includes(chave)).length;
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
  document.body.style.removeProperty('--vermelho');
  document.body.style.removeProperty('--vermelho-escuro');
  setHeaderHeroImage('img/LOGO/logoleao.webp');
  setSiteHeaderBackgroundImage('img/LOGO/logoleao.webp');
  setPageInstitutionBackgroundImage('img/LOGO/logoleao.webp');
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

  alternarHeaderComandoResumo(false);

  atualizarLabelsHeaderResumo({
    'header-label-natureza': 'Escopo',
    'header-label-uf': 'Abrangência',
    'header-label-criacao': 'Instituições',
    'header-label-ativa': 'Efetivo total estimado',
    'header-label-reserva': 'Reserva/inativos',
    'header-label-total': 'Mulheres no efetivo',
    'header-label-populacao': 'População abrangida',
    'header-label-relacao': 'UFs',
    'header-label-dados-atualizados': 'Dados Atualizados do site',
    'header-label-governador': 'Cobertura',
    'header-label-comando': 'Comando/Direção'
  });

  setTexto('header-resumo-natureza', 'Portal informativo');
  setTexto('header-resumo-uf', 'Brasil');
  setTexto('header-resumo-criacao', String(resumoPortal.instituicoes));
  setTexto('header-resumo-ativa', `${formatarEfetivoHeader(resumoPortal.total)}+`);
  setTexto('header-resumo-reserva', `${formatarEfetivoHeader(resumoPortal.reserva)}+`);
  setTexto('header-resumo-total', `${formatarEfetivoHeader(resumoPortal.femininas)}+`);
  setTexto('header-resumo-populacao', formatarNumeroHeader(resumoPortal.populacao));
  setTexto('header-resumo-relacao', `${resumoPortal.estados} UFs`);
  atualizarIndicadorPercentualPortal();
  setTexto('header-resumo-governador', 'Polícias militares, bombeiros militares, civis e penais');
  setTexto('header-resumo-comando', '—');

  ['instituicao', 'instituicao_header', 'instituicao_home'].forEach(id => {
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

function getResumoHeaderLabelsPorInstituicao(inst, dados = {}) {
  const instTexto = String(inst || '').toLowerCase();
  const tipoTexto = String(dados.tipo || '').toLowerCase();
  const ehPenal = instTexto.startsWith('pp') || tipoTexto.includes('penal');
  const ehBombeiro = instTexto.startsWith('bm') || tipoTexto.includes('bombeiro');
  const ehMilitar = instTexto.startsWith('pm') || instTexto === 'pmerj' || tipoTexto.includes('militar');
  const ehCivil = instTexto.startsWith('pc') || instTexto === 'pcerj' || tipoTexto.includes('civil');
  const ehFederal = ['pf', 'prf'].includes(instTexto) || dados.estadoSigla === 'BR';
  const ehMunicipal = instTexto === 'gm' || tipoTexto.includes('guarda municipal');

  if (instTexto === 'pmesp') {
    return {
      'header-label-natureza': 'Natureza',
      'header-label-uf': 'UF/Jurisdição',
      'header-label-criacao': 'Origem histórica',
      'header-label-ativa': 'Efetivo ativo oficial',
      'header-label-reserva': 'Inativos (SSP)',
      'header-label-total': 'Efetivo legal',
      'header-label-populacao': dados.populacaoTitulo || 'População do Estado',
      'header-label-relacao': dados.relacaoTitulo || 'Efetivo/população',
      'header-label-governador': 'Chefe do Executivo',
      'header-label-comando': 'Comando-Geral'
    };
  }

  if (ehPenal) {
    return {
      'header-label-natureza': 'Natureza',
      'header-label-uf': 'UF/Jurisdição',
      'header-label-criacao': 'Base constitucional',
      'header-label-ativa': 'Efetivo na ativa',
      'header-label-reserva': 'Inativos/RPPS',
      'header-label-total': 'Mulheres no efetivo',
      'header-label-populacao': dados.populacaoTitulo || 'Presos atendidos',
      'header-label-relacao': dados.relacaoTitulo || 'Servidor/preso',
      'header-label-governador': ehFederal ? 'Governo responsável' : 'Chefe do Executivo',
      'header-label-comando': 'Direção/Secretaria'
    };
  }

  if (ehBombeiro) {
    return {
      'header-label-natureza': 'Natureza',
      'header-label-uf': 'UF/Jurisdição',
      'header-label-criacao': 'Criação',
      'header-label-ativa': 'Efetivo na ativa',
      'header-label-reserva': 'Reserva/reforma',
      'header-label-total': 'Mulheres no efetivo',
      'header-label-populacao': dados.populacaoTitulo || 'População do Estado',
      'header-label-relacao': dados.relacaoTitulo || 'Efetivo/população',
      'header-label-governador': 'Chefe do Executivo',
      'header-label-comando': 'Comando-Geral'
    };
  }

  if (ehMilitar) {
    return {
      'header-label-natureza': 'Natureza',
      'header-label-uf': 'UF/Jurisdição',
      'header-label-criacao': 'Criação',
      'header-label-ativa': 'Efetivo na ativa',
      'header-label-reserva': 'Reserva/reforma',
      'header-label-total': 'Mulheres no efetivo',
      'header-label-populacao': dados.populacaoTitulo || 'População do Estado',
      'header-label-relacao': dados.relacaoTitulo || 'Efetivo/população',
      'header-label-governador': 'Chefe do Executivo',
      'header-label-comando': 'Comando-Geral'
    };
  }

  if (ehCivil) {
    return {
      'header-label-natureza': 'Natureza',
      'header-label-uf': 'UF/Jurisdição',
      'header-label-criacao': 'Origem histórica',
      'header-label-ativa': 'Efetivo na ativa',
      'header-label-reserva': 'Inativos estimados',
      'header-label-total': 'Mulheres no efetivo',
      'header-label-populacao': dados.populacaoTitulo || 'População do Estado',
      'header-label-relacao': dados.relacaoTitulo || 'Efetivo/população',
      'header-label-governador': 'Chefe do Executivo',
      'header-label-comando': 'Delegado-Geral/Chefia'
    };
  }

  if (ehFederal) {
    return {
      'header-label-natureza': 'Natureza',
      'header-label-uf': 'Jurisdição',
      'header-label-criacao': 'Base legal/histórica',
      'header-label-ativa': 'Efetivo na ativa',
      'header-label-reserva': 'Aposentados/inativos',
      'header-label-total': 'Mulheres no efetivo',
      'header-label-populacao': dados.populacaoTitulo || 'Abrangência',
      'header-label-relacao': dados.relacaoTitulo || 'Indicador',
      'header-label-governador': 'Governo responsável',
      'header-label-comando': 'Direção-Geral'
    };
  }

  if (ehMunicipal) {
    return {
      'header-label-natureza': 'Natureza',
      'header-label-uf': 'Jurisdição',
      'header-label-criacao': 'Base local',
      'header-label-ativa': 'Efetivo na ativa',
      'header-label-reserva': 'Regime previdenciário',
      'header-label-total': 'Mulheres no efetivo',
      'header-label-populacao': dados.populacaoTitulo || 'Abrangência',
      'header-label-relacao': dados.relacaoTitulo || 'Efetivo/população',
      'header-label-governador': 'Poder Executivo local',
      'header-label-comando': 'Comando/Direção'
    };
  }

  return {
    'header-label-populacao': dados.populacaoTitulo || 'População do Estado',
    'header-label-relacao': dados.relacaoTitulo || 'Relação ativa/população'
  };
}

function resumoHeaderUfLabel(dados = {}) {
  const sigla = dados.estadoSigla && !resumoEhDadoPendente(dados.estadoSigla) ? String(dados.estadoSigla).trim() : '';
  const estado = dados.estado && !resumoEhDadoPendente(dados.estado) ? String(dados.estado).trim() : '';
  if (sigla && estado && sigla !== estado) return `${sigla} · ${estado}`;
  return sigla || estado || RESUMO_DADOS_EM_BREVE;
}

function atualizarHeaderResumo(inst) {
  const tituloResumo = document.getElementById('header-resumo-titulo');
  if (tituloResumo) tituloResumo.textContent = 'Resumo institucional';

  const dados = HEADER_INSTITUICOES_RESUMO[inst] || HEADER_INSTITUICOES_RESUMO.pmesp;
  alternarHeaderComandoResumo(true);
  atualizarLabelsHeaderResumo(getResumoHeaderLabelsPorInstituicao(inst, dados));

  const setTexto = (id, valor) => {
    const el = document.getElementById(id);
    if (el) el.textContent = resumoValorOuEmBreve(valor);
  };

  const ativaTexto = calcularEfetivoAtivoResumoHeader(dados);
  const reservaTexto = dados.reservaLabel || formatarEfetivoHeader(dados.reserva);
  const femininasTexto = dados.femininasLabel || (dados.femininas ? formatarNumeroHeader(dados.femininas) : RESUMO_DADOS_EM_BREVE);
  const relacaoTexto = dados.relacaoLabel || calcularRelacaoHeader(dados.populacao, dados.ativa);
  const naturezaTexto = dados.tipo || resumoInferirTipo(inst, dados);

  setTexto('header-resumo-atualizado', dados.atualizado || 'Atualizado');
  setTexto('header-resumo-natureza', naturezaTexto);
  setTexto('header-resumo-uf', resumoHeaderUfLabel(dados));
  setTexto('header-resumo-criacao', dados.criacao || RESUMO_DADOS_EM_BREVE);
  setTexto('header-resumo-ativa', ativaTexto);
  setTexto('header-resumo-reserva', reservaTexto);
  setTexto('header-resumo-total', femininasTexto);
  setTexto('header-resumo-populacao', dados.populacaoLabel || (dados.populacao ? formatarNumeroHeader(dados.populacao) : RESUMO_DADOS_EM_BREVE));
  setTexto('header-resumo-relacao', relacaoTexto);
  atualizarIndicadorPercentualPortal();
  setTexto('header-resumo-governador', dados.governador || RESUMO_DADOS_EM_BREVE);
  setTexto('header-resumo-comando', dados.comando || RESUMO_DADOS_EM_BREVE);
}

function getEstadoDaInstituicao(inst) {
  return Object.keys(HEADER_ESTADOS).find(estado => {
    const item = HEADER_ESTADOS[estado];
    return item.pm === inst || item.bm === inst || item.pc === inst || item.pp === inst || item.gm === inst;
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

  const ramoFederalAtivo = estadoAtivo === 'br';
  const setBranchSmall = (id, texto) => {
    const small = document.querySelector(`#${id} small`);
    if (small) small.textContent = texto;
  };
  setBranchSmall('header-branch-pm', ramoFederalAtivo ? '—' : 'Militar');
  setBranchSmall('header-branch-bm', ramoFederalAtivo ? '—' : 'Bombeiros');
  setBranchSmall('header-branch-pc', ramoFederalAtivo ? 'Federal' : 'Civil');
  setBranchSmall('header-branch-pp', ramoFederalAtivo ? 'Rodoviária' : 'Penal');

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
    pmesp: { titulo: "PMESP", desc: "Polícia Militar do Estado de São Paulo", cor: "#e60000", alertaPrev: "PMESP/SPPREV/SPSM: conferir a contribuição e a base de cálculo no holerite e na norma vigente. Não fixar percentual único sem validar cargo, situação funcional e rubricas." },
    bmsp: { titulo: "CBPMESP", desc: "Corpo de Bombeiros da Polícia Militar do Estado de São Paulo", cor: "#b91c1c", alertaPrev: "CBPMESP/BMSP: carreira militar estadual vinculada à PMESP; conferir SPPREV/SPSM, RETP, DEJEM, CBPM/Cruz Azul, insalubridade, escalas e rubricas no holerite e na norma vigente." },
    pcsp:  { titulo: "PCSP",  desc: "Polícia Civil do Estado de São Paulo", cor: "#4f4f4f", alertaPrev: "PCSP/SPPREV/IAMSPE: conferir contribuição previdenciária, assistência, quinquênios, sexta-parte, RETP, DEJEC, insalubridade e demais rubricas no holerite e na norma vigente. Não tratar os 14% como regra isolada sem validar base e situação funcional." },
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

  ['instituicao', 'instituicao_header', 'instituicao_home'].forEach(id => {
    const seletor = document.getElementById(id);
    if (!seletor) return;
    const existeOpcao = Array.from(seletor.options || []).some(o => o.value === inst);
    if (existeOpcao && seletor.value !== inst) seletor.value = inst;
  });

  const config = configs[inst];
  if (config?.cor) {
    document.body.style.setProperty('--vermelho', config.cor);
    document.body.style.setProperty('--vermelho-escuro', config.cor);
  }
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


  // Em modo MPA, cada página carrega apenas os scripts que precisa.
  // Portanto, funções de outras páginas precisam ser opcionais para não travar
  // a seleção de instituição quando o usuário estiver, por exemplo, em remuneração.
  if (typeof popularCargos === 'function') popularCargos(inst);
  if (typeof analisarDireitos === 'function') analisarDireitos();
  if (typeof carregarConcursos === 'function') carregarConcursos();
  if (typeof carregarAcoes === 'function') carregarAcoes();
  if (typeof carregarAssociacoes === 'function') carregarAssociacoes();
  if (typeof carregarRemuneracaoTabelada === 'function') carregarRemuneracaoTabelada();
  if (typeof sincronizarSeletoresConsulta === 'function') sincronizarSeletoresConsulta();
  if (document.getElementById('page-comparar')?.classList.contains('active') && typeof carregarComparadorCarreiras === 'function') carregarComparadorCarreiras();
}


/* ============================================================ */
/* === SELEÇÃO INTERNA POR ABA: ESFERA → INSTITUIÇÃO ========== */
/* ============================================================ */
const PAGINAS_COM_SELECAO_INSTITUICAO = {
  remuneracao: {
    titulo: 'Consultar remuneração por instituição',
    subtitulo: 'Escolha a esfera e depois a instituição para carregar a tabela correspondente.',
    destino: 'lista-remuneracao'
  },
  direitos: {
    titulo: 'Consultar direitos por instituição',
    subtitulo: 'A análise usa a instituição escolhida nesta aba e os dados funcionais preenchidos abaixo.',
    destino: 'resultados_dir'
  },
  poderes: {
    titulo: 'Consultar poderes e deveres por instituição',
    subtitulo: 'Escolha a esfera e a instituição para ver competências, deveres, limites, fontes e entendimentos aplicáveis.',
    destino: 'poderes_resultado'
  },
  brasoes: {
    titulo: 'Consultar brasão e história por instituição',
    subtitulo: 'Escolha a esfera e a instituição para ver o brasão, origem, criação, marcos históricos e dados institucionais.',
    destino: 'brasoes_historia_resultado'
  },
  concursos: {
    titulo: 'Consultar concursos por instituição',
    subtitulo: 'Escolha a esfera e a instituição para carregar os dados de edital, requisitos, etapas e fontes.',
    destino: 'lista-concursos'
  },
  acoes: {
    titulo: 'Consultar ações judiciais por instituição',
    subtitulo: 'Escolha a esfera e a instituição para ver teses, alertas e referências cadastradas.',
    destino: 'lista-acoes'
  },
  associacoes: {
    titulo: 'Consultar associações e sindicatos por instituição',
    subtitulo: 'Escolha a esfera e a instituição para localizar entidades relacionadas à carreira.',
    destino: 'lista-associacoes'
  }
};

function instituicaoConsultaFoiSelecionada() {
  return !headerModoInicialPortal && !!currInst && INSTITUICOES_VALIDAS.includes(currInst);
}

function garantirEstruturaGuardaMunicipalConsulta() {
  if (!INSTITUICOES_VALIDAS.includes('gm')) INSTITUICOES_VALIDAS.push('gm');

  HEADER_INSTITUICOES_INFO.gm = HEADER_INSTITUICOES_INFO.gm || {
    titulo: 'GM',
    desc: 'Guarda Municipal'
  };

  HEADER_INSTITUICOES_IMAGENS.gm = HEADER_INSTITUICOES_IMAGENS.gm || 'img/LOGO/logoleao.webp';

  HEADER_ESTADOS.municipal = HEADER_ESTADOS.municipal || {
    nome: 'Municípios',
    sigla: 'MUN',
    gm: 'gm',
    flag: HEADER_BRASIL_FLAG
  };

  HEADER_INSTITUICOES_RESUMO.gm = HEADER_INSTITUICOES_RESUMO.gm || {
    nome: 'Guarda Municipal',
    sigla: 'GM',
    estado: 'Municípios',
    estadoSigla: 'MUN',
    tipo: 'Guarda Municipal',
    criacao: 'Varia por município',
    ativaLabel: 'Efetivo municipal — varia por cidade',
    reservaLabel: 'Regime local — verificar município',
    femininasLabel: 'Dados locais — consultar prefeitura',
    populacaoLabel: 'Município selecionado',
    relacaoLabel: 'Depende da lei municipal e do efetivo local',
    populacaoTitulo: 'Abrangência',
    relacaoTitulo: 'Relação efetivo/população',
    governador: 'Prefeitura municipal / Secretaria municipal competente',
    comando: 'Comando/direção da Guarda Municipal, conforme lei local',
    atualizado: 'Conteúdo geral municipal'
  };

  CONFIGS_INSTITUICOES_GENERICAS.gm = CONFIGS_INSTITUICOES_GENERICAS.gm || {
    titulo: 'GM',
    desc: 'Guarda Municipal',
    cor: '#0f766e',
    alertaPrev: 'Guarda Municipal: conteúdo geral. Direitos, remuneração, concurso e organização dependem da lei municipal, estatuto local, plano de cargos, regime previdenciário e edital de cada cidade.'
  };

  if (typeof CARGOS_ESTRUTURA_GENERICAS !== 'undefined' && !CARGOS_ESTRUTURA_GENERICAS.gm) {
    CARGOS_ESTRUTURA_GENERICAS.gm = [
      { val: 'gm_guarda', text: 'Guarda Municipal / Agente da Guarda' },
      { val: 'gm_inspetor', text: 'Inspetor / Classe intermediária — quando existir' },
      { val: 'gm_comando', text: 'Comando / direção — conforme lei municipal' }
    ];
  }

  if (typeof REMUNERACAO_FONTES_OFICIAIS !== 'undefined') {
    REMUNERACAO_FONTES_OFICIAIS.gm = REMUNERACAO_FONTES_OFICIAIS.gm || {
      nome: 'Guarda Municipal — verificar portal da transparência, lei municipal e edital local',
      url: '#'
    };
  }

  if (typeof CONCURSOS !== 'undefined') {
    CONCURSOS.gm = CONCURSOS.gm || {
      edital: 'Guarda Municipal — concurso municipal conforme cidade escolhida',
      salario: 'Varia conforme lei municipal e edital local',
      vagas: 'Varia por município',
      cotas: 'Conforme edital municipal',
      idade: 'Conforme edital e legislação local',
      escolaridade: 'Geralmente ensino médio, podendo variar conforme município',
      materias: 'Língua Portuguesa, legislação municipal, Estatuto Geral das Guardas Municipais, noções de Direito, conhecimentos gerais, informática e outras disciplinas conforme edital.',
      banca: 'Conforme contratação municipal',
      inscritos: 'Varia por edital',
      etapas: 'Prova objetiva, TAF, avaliação psicológica, investigação social, exames médicos e curso de formação quando previstos.',
      cfsd: 'Curso de formação ou capacitação conforme matriz curricular e regulamento local.',
      estagio: 'Conforme estatuto municipal.',
      validade: 'Conforme edital.',
      previsao: 'Consultar prefeitura e diário oficial do município.',
      site: '#'
    };
  }

  if (typeof ACOES_JUDICIAIS !== 'undefined') {
    ACOES_JUDICIAIS.gm = ACOES_JUDICIAIS.gm || [
      {
        titulo: 'Guarda Municipal — direitos e enquadramentos locais',
        status: 'Verificar caso individual',
        ano: 'Tema permanente',
        tipo: 'individual',
        desc: 'Demandas podem envolver plano de carreira, adicional de risco, adicional noturno, horas extras, previdência, aposentadoria especial quando discutida, porte institucional, enquadramento e condições de trabalho.',
        base: 'Lei municipal, Estatuto Geral das Guardas Municipais, Constituição, decisões judiciais aplicáveis e documentos funcionais.',
        fonte: 'Consultar legislação municipal e advogado/entidade local',
        fonteUrl: '',
        atualizado: 'Conteúdo geral municipal'
      }
    ];
  }

  if (typeof ASSOCIACOES !== 'undefined') {
    ASSOCIACOES.gm = ASSOCIACOES.gm || [
      {
        nome: 'Entidade representativa de Guardas Municipais — consultar município',
        foco: 'Guardas municipais ativos, aposentados, pensionistas e familiares, conforme base territorial da entidade.',
        acao: 'Acompanhamento de pautas de carreira, remuneração, plano de cargos, condições de trabalho, porte, formação e valorização profissional.',
        site: '',
        telefone: 'Consultar entidade local',
        mensalidade: 'Consultar diretamente',
        servicos: 'Jurídico, comunicação, convênios e representação institucional conforme estatuto da entidade.'
      }
    ];
  }
}

function getEsferaConsultaInstituicao(inst) {
  inst = String(inst || '').toLowerCase();
  if (inst === 'pf' || inst === 'prf') return 'federal';
  if (inst === 'gm' || inst === 'guarda_municipal') return 'municipal';
  return 'estadual';
}

function getRamoConsultaInstituicao(inst) {
  inst = String(inst || '').toLowerCase();
  if (inst === 'pf') return 'Polícia Federal';
  if (inst === 'prf') return 'Polícia Rodoviária Federal';
  if (inst === 'gm') return 'Guarda Municipal';
  if (inst.startsWith('bm')) return 'Bombeiro Militar';
  if (inst.startsWith('pp')) return 'Polícia Penal';
  if (inst.startsWith('pc')) return 'Polícia Civil';
  if (inst.startsWith('pm')) return inst === 'pmrs' ? 'Brigada Militar / Polícia Militar' : 'Polícia Militar';
  return 'Instituição';
}

function getOrdemConsultaInstituicao(inst) {
  const estado = getEstadoDaInstituicao(inst);
  const dadosEstado = HEADER_ESTADOS[estado] || {};
  if (inst === 'pf') return 1;
  if (inst === 'prf') return 2;
  if (dadosEstado.pm === inst) return 1;
  if (dadosEstado.bm === inst) return 2;
  if (dadosEstado.pc === inst) return 3;
  if (dadosEstado.pp === inst) return 4;
  if (inst === 'gm') return 1;
  return 9;
}

function getInstituicoesParaConsulta(esfera) {
  garantirEstruturaGuardaMunicipalConsulta();
  const esferaNormalizada = String(esfera || '').toLowerCase();
  let base = [];

  if (esferaNormalizada === 'federal') {
    base = ['pf', 'prf'];
  } else if (esferaNormalizada === 'municipal') {
    base = ['gm'];
  } else if (esferaNormalizada === 'estadual') {
    base = INSTITUICOES_VALIDAS.filter(inst => getEsferaConsultaInstituicao(inst) === 'estadual');
  }

  return base
    .filter(inst => HEADER_INSTITUICOES_INFO[inst])
    .map(inst => {
      const estado = getEstadoDaInstituicao(inst);
      const dadosEstado = HEADER_ESTADOS[estado] || HEADER_ESTADOS.sp;
      const info = HEADER_INSTITUICOES_INFO[inst] || {};
      return {
        inst,
        estado,
        estadoNome: dadosEstado.nome || 'Brasil',
        uf: dadosEstado.sigla || estado.toUpperCase(),
        sigla: info.titulo || inst.toUpperCase(),
        nome: info.desc || inst.toUpperCase(),
        ramo: getRamoConsultaInstituicao(inst),
        ordem: getOrdemConsultaInstituicao(inst)
      };
    })
    .sort((a, b) => {
      if (a.estado !== b.estado) {
        const ordemEstados = Object.keys(HEADER_ESTADOS);
        return ordemEstados.indexOf(a.estado) - ordemEstados.indexOf(b.estado);
      }
      return a.ordem - b.ordem || a.sigla.localeCompare(b.sigla, 'pt-BR');
    });
}

function removerSeletorAntigoPoderes() {
  const antigo = document.getElementById('poderes_instituicao');
  const bloco = antigo?.closest('.poderes-form-grid');
  if (bloco) bloco.remove();
}

function criarHtmlSeletorConsulta(page, config) {
  const idEsfera = `consulta_esfera_${page}`;
  const idInstituicao = `consulta_instituicao_${page}`;
  return `
    <section class="consulta-instituicao-card" data-consulta-selector="${page}" aria-label="Seleção de instituição para esta aba">
      <div class="consulta-instituicao-texto">
        <span>Escolha dentro desta aba</span>
        <strong>${escapeHtml(config.titulo)}</strong>
        <small>${escapeHtml(config.subtitulo)}</small>
      </div>
      <div class="consulta-instituicao-grid">
        <div class="field">
          <label for="${idEsfera}">Tipo de instituição</label>
          <select id="${idEsfera}" data-consulta-esfera data-consulta-page="${page}" aria-label="Selecione se a instituição é federal, estadual ou municipal">
            <option value="" selected>Escolha a esfera</option>
            <option value="federal">Federal</option>
            <option value="estadual">Estadual</option>
            <option value="municipal">Municipal</option>
          </select>
        </div>
        <div class="field">
          <label for="${idInstituicao}">Instituição</label>
          <select id="${idInstituicao}" data-consulta-instituicao data-consulta-page="${page}" aria-label="Selecione a instituição" disabled>
            <option value="">Escolha primeiro a esfera</option>
          </select>
        </div>
      </div>
    </section>
  `;
}

function inserirSeletorConsultaNaPagina(page) {
  const config = PAGINAS_COM_SELECAO_INSTITUICAO[page];
  if (!config) return;
  const pageEl = document.getElementById(`page-${page}`);
  const card = pageEl?.querySelector('.card');
  if (!card || card.querySelector(`[data-consulta-selector="${page}"]`)) return;

  if (page === 'poderes') removerSeletorAntigoPoderes();

  const h2 = card.querySelector('h2');
  const temp = document.createElement('div');
  temp.innerHTML = criarHtmlSeletorConsulta(page, config).trim();
  const seletor = temp.firstElementChild;
  if (h2 && h2.nextSibling) card.insertBefore(seletor, h2.nextSibling);
  else card.prepend(seletor);
}

function montarSeletoresConsultaInstituicao() {
  garantirEstruturaGuardaMunicipalConsulta();
  Object.keys(PAGINAS_COM_SELECAO_INSTITUICAO).forEach(inserirSeletorConsultaNaPagina);
  sincronizarSeletoresConsulta();
}

function atualizarInstituicoesConsulta(page, esfera, valorPreferido = '') {
  const pageEl = document.getElementById(`page-${page}`);
  const seletorInst = pageEl?.querySelector('[data-consulta-instituicao]');
  if (!seletorInst) return;

  const itens = getInstituicoesParaConsulta(esfera);
  if (!itens.length) {
    seletorInst.innerHTML = '<option value="">Nenhuma instituição disponível para esta esfera</option>';
    seletorInst.disabled = true;
    return;
  }

  let html = '<option value="">Escolha a instituição</option>';
  let grupoAtual = '';
  itens.forEach(item => {
    const grupo = esfera === 'estadual' ? `${item.estadoNome} (${item.uf})` : (esfera === 'federal' ? 'União' : 'Municípios');
    if (grupo !== grupoAtual) {
      if (grupoAtual) html += '</optgroup>';
      html += `<optgroup label="${escapeHtml(grupo)}">`;
      grupoAtual = grupo;
    }
    const texto = esfera === 'estadual'
      ? `${item.sigla} — ${item.ramo}`
      : `${item.sigla} — ${item.nome}`;
    html += `<option value="${escapeHtml(item.inst)}">${escapeHtml(texto)}</option>`;
  });
  if (grupoAtual) html += '</optgroup>';

  seletorInst.disabled = false;
  seletorInst.innerHTML = html;
  if (valorPreferido && itens.some(item => item.inst === valorPreferido)) {
    seletorInst.value = valorPreferido;
  } else {
    seletorInst.value = '';
  }
}

function sincronizarSeletoresConsulta(pageUnica = '') {
  const paginas = pageUnica ? [pageUnica] : Object.keys(PAGINAS_COM_SELECAO_INSTITUICAO);
  paginas.forEach(page => {
    inserirSeletorConsultaNaPagina(page);
    const pageEl = document.getElementById(`page-${page}`);
    if (!pageEl) return;
    const esferaSelect = pageEl.querySelector('[data-consulta-esfera]');
    const instSelect = pageEl.querySelector('[data-consulta-instituicao]');
    if (!esferaSelect || !instSelect) return;

    if (!instituicaoConsultaFoiSelecionada()) {
      if (!esferaSelect.value) {
        instSelect.innerHTML = '<option value="">Escolha primeiro a esfera</option>';
        instSelect.disabled = true;
      }
      return;
    }

    const esfera = getEsferaConsultaInstituicao(currInst);
    esferaSelect.value = esfera;
    atualizarInstituicoesConsulta(page, esfera, currInst);
  });
}

function alterarEsferaConsultaInstituicao(page, esfera) {
  inserirSeletorConsultaNaPagina(page);
  if (instituicaoConsultaFoiSelecionada()) {
    aplicarHeaderInicialPortal();
  }
  atualizarInstituicoesConsulta(page, esfera, '');
  mostrarAvisoSelecaoInstituicao(page);
}

function selecionarInstituicaoConsulta(page, inst) {
  if (!inst) {
    mostrarAvisoSelecaoInstituicao(page);
    return;
  }
  mudarInstituicao(inst);
  sincronizarSeletoresConsulta();
  renderizarConteudoPaginaInstitucional(page);
  const info = HEADER_INSTITUICOES_INFO[inst];
  if (info) mostrarToast(`${info.titulo} selecionada para esta consulta.`);
}

function avisoSelecaoInstituicaoHtml(page) {
  const nomes = {
    remuneracao: 'a tabela de remuneração',
    direitos: 'a análise de direitos',
    poderes: 'os poderes e deveres',
    brasoes: 'o brasão e a história institucional',
    concursos: 'os dados de concursos',
    acoes: 'as ações judiciais',
    associacoes: 'as associações e sindicatos'
  };
  return `
    <div class="consulta-vazio" role="status">
      <strong>Escolha uma instituição nesta aba.</strong>
      <span>Primeiro selecione se a instituição é federal, estadual ou municipal. Depois escolha a instituição específica para carregar ${nomes[page] || 'as informações'}.</span>
    </div>
  `;
}

function atualizarTitulosConsultaSemInstituicao() {
  [
    'txt-inst-dir',
    'txt-inst-concursos',
    'txt-inst-poderes',
    'txt-inst-brasoes',
    'txt-inst-remuneracao',
    'txt-inst-acoes',
    'txt-inst-assoc'
  ].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = '—';
  });
}

function mostrarAvisoSelecaoInstituicao(page = '') {
  if (!page) return;
  atualizarTitulosConsultaSemInstituicao();

  if (page === 'remuneracao') {
    const tbody = document.getElementById('lista-remuneracao');
    if (tbody) tbody.innerHTML = `<tr><td colspan="4">Escolha uma instituição nesta aba para carregar a tabela.</td></tr>`;
    const total = document.getElementById('remu-total-cargos');
    const menor = document.getElementById('remu-menor-total');
    const maior = document.getElementById('remu-maior-total');
    if (total) total.textContent = '0';
    if (menor) menor.textContent = '—';
    if (maior) maior.textContent = '—';
    return;
  }

  if (page === 'direitos') {
    const cargo = document.getElementById('cargo_dir');
    if (cargo && !instituicaoConsultaFoiSelecionada()) cargo.innerHTML = '<option value="">Selecione uma instituição primeiro</option>';
    const cont = document.getElementById('resultados_dir');
    if (cont) cont.innerHTML = avisoSelecaoInstituicaoHtml(page);
    return;
  }

  const destino = PAGINAS_COM_SELECAO_INSTITUICAO[page]?.destino;
  const cont = destino ? document.getElementById(destino) : null;
  if (cont) cont.innerHTML = avisoSelecaoInstituicaoHtml(page);
}

function limparConsultaInstitucionalInicial() {
  montarSeletoresConsultaInstituicao();
  atualizarTitulosConsultaSemInstituicao();
  Object.keys(PAGINAS_COM_SELECAO_INSTITUICAO).forEach(mostrarAvisoSelecaoInstituicao);
}

function renderizarConteudoPaginaInstitucional(page) {
  if (!instituicaoConsultaFoiSelecionada()) {
    mostrarAvisoSelecaoInstituicao(page);
    return;
  }

  sincronizarSeletoresConsulta(page);

  if (page === 'direitos') {
    popularCargos(currInst);
    analisarDireitos();
  } else if (page === 'concursos') {
    carregarConcursos();
  } else if (page === 'poderes') {
    inicializarPoderesDeveres();
  } else if (page === 'brasoes') {
    renderizarBrasoesHistoria();
  } else if (page === 'acoes') {
    carregarAcoes();
  } else if (page === 'associacoes') {
    carregarAssociacoes();
  } else if (page === 'remuneracao') {
    carregarRemuneracaoTabelada();
  }
}

function prepararPaginaComSelecaoInstituicao(page) {
  if (!PAGINAS_COM_SELECAO_INSTITUICAO[page]) return false;
  montarSeletoresConsultaInstituicao();
  if (!instituicaoConsultaFoiSelecionada()) {
    mostrarAvisoSelecaoInstituicao(page);
    return true;
  }
  renderizarConteudoPaginaInstitucional(page);
  return true;
}



function obterResumoInstituicaoCompleto(inst) {
  const info = HEADER_INSTITUICOES_INFO[inst] || {};
  const resumo = HEADER_INSTITUICOES_RESUMO[inst] || {};
  const estadoChave = getEstadoDaInstituicao(inst);
  const estado = HEADER_ESTADOS[estadoChave] || {};
  const sigla = resumo.sigla || info.titulo || String(inst || '').toUpperCase();
  const nome = resumo.nome || info.desc || sigla;
  const tipo = resumo.tipo || resumoInferirTipo(inst, resumo);
  const uf = resumo.estadoSigla || estado.sigla || (getEsferaConsultaInstituicao(inst) === 'federal' ? 'BR' : '—');
  const estadoNome = resumo.estado || estado.nome || (getEsferaConsultaInstituicao(inst) === 'federal' ? 'Brasil' : 'Municípios');
  return { info, resumo, estadoChave, estado, sigla, nome, tipo, uf, estadoNome };
}

function valorHistoriaOuNaoDeclarado(valor, alternativo = 'Informação específica a confirmar em fonte oficial') {
  if (typeof resumoEhDadoPendente === 'function' && resumoEhDadoPendente(valor)) return alternativo;
  const texto = String(valor || '').trim();
  if (!texto || texto === RESUMO_DADOS_EM_BREVE || /dados em breve/i.test(texto)) return alternativo;
  return texto;
}

function imagemPrincipalBrasaoInstituicao(inst) {
  const caminho = HEADER_INSTITUICOES_IMAGENS?.[inst] || '';
  const candidatos = montarCandidatosImagemInstituicao(inst, caminho);
  return candidatos[0] || caminho || 'img/LOGO/logoleao.webp';
}

function getCriadorInstitucional(inst, tipo, estadoNome) {
  if (inst === 'pmesp') return 'Brigadeiro Rafael Tobias de Aguiar — então presidente da Província de São Paulo, pela lei provincial de 15/12/1831.';
  const esfera = getEsferaConsultaInstituicao(inst);
  if (inst === 'pf') return 'União — estrutura federal organizada pela Constituição, legislação federal e atos do Poder Executivo federal.';
  if (inst === 'prf') return 'União — estrutura federal vinculada à segurança pública e ao policiamento ostensivo das rodovias federais.';
  if (esfera === 'municipal') return 'Município — criada por lei municipal e organizada pela prefeitura/secretaria competente.';
  if (/Polícia Penal/i.test(tipo)) return `${estadoNome} — carreira constitucionalizada pela EC 104/2019 e estruturada por normas estaduais/distritais.`;
  if (/Bombeiro/i.test(tipo)) return `${estadoNome} — poder público estadual/distrital, com organização militar e comando próprio conforme legislação local.`;
  if (/Polícia Civil/i.test(tipo)) return `${estadoNome} — poder público estadual/distrital, com organização da polícia judiciária conforme legislação local.`;
  return `${estadoNome} — poder público estadual/distrital, por ato legal de organização da força pública local.`;
}

function getHistoricoPorTipo(inst, dados) {
  const { sigla, nome, tipo, estadoNome, resumo } = dados;
  const criacao = valorHistoriaOuNaoDeclarado(resumo.criacao, 'origem histórica organizada pela legislação própria da instituição');
  const esfera = getEsferaConsultaInstituicao(inst);

  if (inst === 'pmesp') {
    return {
      origem: `A ${nome} tem origem histórica em 15 de dezembro de 1831, quando foi criada em São Paulo a força pública provincial que se tornaria a Polícia Militar do Estado de São Paulo. Em 2026, a instituição teve atualização relevante de comando, efetivo legal e carreira, com a posse da Cel PM Glauce Anselmo Cavalli no Comando-Geral e a Lei SP 18.442/2026 reorganizando efetivo, quadros, regime jurídico e regras gerais de promoção.`,
      marcos: [
        'Criação da força pública paulista em 15/12/1831, associada ao governo provincial de Rafael Tobias de Aguiar.',
        'Consolidação como força militar estadual com atuação em policiamento ostensivo, preservação da ordem pública e apoio em crises.',
        'Estrutura institucional organizada em órgãos de direção geral, direção setorial, apoio, execução e assessoria, conforme página oficial de organização da PMESP.',
        'Lei SP 18.442/2026: efetivo legal de 93.802 cargos, com quadros QOEM, QOE, QOS, QOM, QORR e QP e regras gerais de promoção.',
        'Lei SP 18.441/2026: vencimentos-base reclassificados a partir de 01/04/2026; remuneração total deve ser conferida em tabela oficial posterior quando disponível.',
        '2026: Cel PM Glauce Anselmo Cavalli assume o Comando-Geral, primeira mulher a comandar a PMESP.'
      ]
    };
  }

  if (inst === 'pf') {
    return {
      origem: `A ${nome} é órgão permanente da União e atua como polícia judiciária federal, responsável por investigar crimes de competência federal, proteger interesses da União e executar atribuições especializadas em fronteiras, migração, polícia marítima, aeroportuária e de combate a crimes interestaduais ou internacionais.`,
      marcos: [
        'Consolidação constitucional como órgão da segurança pública federal no art. 144 da Constituição.',
        'Atuação em investigações federais, cooperação internacional, controle migratório e repressão a crimes contra bens, serviços e interesses da União.',
        'Ampliação de capacidades técnicas em perícia, inteligência, operações especiais, crimes cibernéticos e enfrentamento de organizações criminosas.'
      ]
    };
  }

  if (inst === 'prf') {
    return {
      origem: `A ${nome} se consolidou como polícia ostensiva federal voltada às rodovias federais, combinando fiscalização de trânsito, prevenção de acidentes, atendimento em ocorrências e enfrentamento de crimes que utilizam a malha rodoviária nacional.`,
      marcos: [
        'Reconhecimento constitucional como órgão permanente da segurança pública federal no art. 144 da Constituição.',
        'Fortalecimento da fiscalização de trânsito e do patrulhamento ostensivo nas rodovias federais.',
        'Atuação integrada no combate ao tráfico de drogas, armas, contrabando, crimes ambientais, roubo de cargas e crimes interestaduais.'
      ]
    };
  }

  if (esfera === 'municipal') {
    return {
      origem: 'A Guarda Municipal é organizada por lei local e atua na proteção de bens, serviços e instalações municipais, com papel preventivo e comunitário. A história concreta varia conforme o município, sua lei de criação, estatuto, plano de carreira e estrutura administrativa.',
      marcos: [
        'Previsão constitucional das guardas municipais no art. 144 da Constituição.',
        'Fortalecimento nacional com o Estatuto Geral das Guardas Municipais, que definiu princípios mínimos de atuação, proteção municipal e cooperação institucional.',
        'Integração crescente com políticas de prevenção, ordenamento urbano, proteção escolar, videomonitoramento e defesa civil local.'
      ]
    };
  }

  if (/Bombeiro/i.test(tipo)) {
    return {
      origem: `O ${nome} integra a segurança pública e a defesa civil do ${estadoNome}. Sua trajetória é ligada ao combate a incêndios, salvamento, resgate, prevenção, vistoria técnica e resposta a emergências, com organização militar estadual/distrital. Registro de criação/origem usado nesta base: ${criacao}.`,
      marcos: [
        'Formação ou consolidação como estrutura bombeiro militar estadual/distrital.',
        'Expansão das atividades de prevenção contra incêndio, salvamento, atendimento pré-hospitalar e defesa civil.',
        'Adoção de normas técnicas, formação especializada e integração com sistemas estaduais de gestão de riscos e desastres.'
      ]
    };
  }

  if (/Polícia Civil/i.test(tipo)) {
    return {
      origem: `A ${nome} é a polícia judiciária do ${estadoNome}. Sua história está ligada à investigação criminal, apuração de infrações penais, formalização de procedimentos, apoio à Justiça criminal e especialização de delegacias. Registro de criação/origem usado nesta base: ${criacao}.`,
      marcos: [
        'Consolidação das delegacias e da carreira policial civil como estrutura de investigação estadual/distrital.',
        'Especialização de unidades investigativas para homicídios, patrimônio, drogas, crimes cibernéticos, violência contra a mulher e outras áreas.',
        'Integração progressiva com perícia, inteligência, bancos de dados e cooperação operacional com outras forças.'
      ]
    };
  }

  if (/Polícia Penal/i.test(tipo)) {
    return {
      origem: `A ${nome} representa a carreira voltada à segurança dos estabelecimentos penais no ${estadoNome}. A Polícia Penal foi inserida no texto constitucional pela Emenda Constitucional 104/2019, e cada ente federativo organiza sua estrutura, cargos, atribuições e identidade institucional por normas próprias.`,
      marcos: [
        'Constitucionalização da Polícia Penal pela EC 104/2019.',
        'Transição de estruturas penitenciárias para carreira policial penal estadual/distrital.',
        'Fortalecimento da segurança prisional, escoltas, inteligência penitenciária e controle interno dos estabelecimentos penais.'
      ]
    };
  }

  return {
    origem: `A ${nome} é força policial militar do ${estadoNome}, com trajetória ligada à preservação da ordem pública, policiamento ostensivo, disciplina militar e proteção da sociedade. Registro de criação/origem usado nesta base: ${criacao}.`,
    marcos: [
      'Criação ou organização histórica como força pública estadual/provincial.',
      'Consolidação do policiamento ostensivo e da preservação da ordem pública como atribuições centrais.',
      'Modernização de formação, radiopatrulhamento, policiamento especializado, corregedoria, inteligência e atendimento comunitário.'
    ]
  };
}

function montarCamposResumoHistoria(inst, dados) {
  const { resumo, tipo, uf, estadoNome } = dados;
  const populacaoTitulo = resumo.populacaoTitulo || (/Polícia Penal/i.test(tipo) ? 'Presos atendidos' : 'População atendida');
  return [
    { rotulo: 'Natureza', valor: tipo },
    { rotulo: 'Jurisdição', valor: `${uf} · ${estadoNome}` },
    { rotulo: 'Criação/origem', valor: valorHistoriaOuNaoDeclarado(resumo.criacao, 'Registro histórico específico a confirmar') },
    { rotulo: 'Criador/ato de origem', valor: getCriadorInstitucional(inst, tipo, estadoNome) },
    { rotulo: 'Efetivo total', valor: valorHistoriaOuNaoDeclarado(resumo.efetivoTotalLabel || calcularEfetivoTotalResumoHeader(resumo), 'Efetivo específico a confirmar') },
    { rotulo: /Bombeiro|Polícia Militar/i.test(tipo) ? 'Reserva/reforma' : 'Aposentados/inativos', valor: valorHistoriaOuNaoDeclarado(resumo.reservaLabel || resumo.reserva, 'Inativos específicos a confirmar') },
    { rotulo: 'Mulheres no efetivo', valor: valorHistoriaOuNaoDeclarado(resumo.femininasLabel || resumo.femininas, 'Dado específico a confirmar') },
    { rotulo: populacaoTitulo, valor: valorHistoriaOuNaoDeclarado(resumo.populacaoLabel || (resumo.populacao ? formatarNumeroHeader(resumo.populacao) : ''), 'Abrangência específica a confirmar') },
    { rotulo: resumo.relacaoTitulo || 'Relação institucional', valor: valorHistoriaOuNaoDeclarado(resumo.relacaoLabel, 'Relação específica a confirmar') },
    { rotulo: /Polícia Federal|Rodoviária Federal/i.test(tipo) ? 'Direção-Geral' : (/Polícia Civil/i.test(tipo) ? 'Chefia/Direção' : 'Comando/Direção'), valor: valorHistoriaOuNaoDeclarado(resumo.comando, 'Chefia atual a confirmar') }
  ];
}

function renderizarBrasoesHistoria() {
  const cont = document.getElementById('brasoes_historia_resultado');
  if (!cont) return;
  if (typeof instituicaoConsultaFoiSelecionada === 'function' && !instituicaoConsultaFoiSelecionada()) {
    if (typeof mostrarAvisoSelecaoInstituicao === 'function') mostrarAvisoSelecaoInstituicao('brasoes');
    return;
  }

  const inst = currInst;
  const dados = obterResumoInstituicaoCompleto(inst);
  const { sigla, nome, tipo, estadoNome, resumo } = dados;
  const imagem = imagemPrincipalBrasaoInstituicao(inst);
  const historico = getHistoricoPorTipo(inst, dados);
  const campos = montarCamposResumoHistoria(inst, dados);
  const atualizado = valorHistoriaOuNaoDeclarado(resumo.atualizado, 'Resumo institucional revisado para navegação informativa');
  const fonte = valorHistoriaOuNaoDeclarado(resumo.fonte, 'Fontes públicas e oficiais quando disponíveis; confirmar informações sensíveis nos canais oficiais da instituição.');

  const tituloSpan = document.getElementById('txt-inst-brasoes');
  if (tituloSpan) tituloSpan.textContent = sigla;

  cont.innerHTML = `
    <section class="brasoes-hero" aria-label="Brasão e identificação da instituição">
      <div class="brasoes-imagem-wrap">
        <img class="brasoes-imagem" src="${escapeHtml(imagem)}" alt="Brasão ou insígnia da ${escapeHtml(nome)}" loading="eager" decoding="async" onerror="this.onerror=null;this.src='img/LOGO/logoleao.webp';">
      </div>
      <div class="brasoes-hero-copy">
        <span class="brasoes-kicker">${escapeHtml(tipo)}</span>
        <h3>${escapeHtml(sigla)} — ${escapeHtml(nome)}</h3>
        <p>${escapeHtml(estadoNome)} · ${escapeHtml(getEsferaConsultaInstituicao(inst))}</p>
        <small>${escapeHtml(atualizado)}</small>
      </div>
    </section>

    <section class="brasoes-resumo-grid" aria-label="Resumo institucional detalhado">
      ${campos.map(campo => `
        <article class="brasoes-resumo-item">
          <span>${escapeHtml(campo.rotulo)}</span>
          <strong>${escapeHtml(campo.valor)}</strong>
        </article>
      `).join('')}
    </section>

    <section class="brasoes-historia-card" aria-label="História da instituição">
      <div class="brasoes-section-title">
        <span>História breve</span>
        <h3>Origem e evolução institucional</h3>
      </div>
      <p>${escapeHtml(historico.origem)}</p>
    </section>

    <section class="brasoes-historia-card" aria-label="Marcos históricos">
      <div class="brasoes-section-title">
        <span>Marcos históricos</span>
        <h3>Pontos importantes da trajetória</h3>
      </div>
      <ul class="brasoes-marcos">
        ${historico.marcos.map(item => `<li>${escapeHtml(item)}</li>`).join('')}
      </ul>
    </section>

    <section class="brasoes-historia-card brasoes-observacao" aria-label="Fontes e observações">
      <strong>Fonte-base do resumo:</strong>
      <p>${escapeHtml(fonte)}</p>
      <small>Conteúdo informativo, independente e não oficial. Dados de efetivo, chefia e datas podem mudar; confirme sempre em ato oficial, portal da transparência, diário oficial ou site institucional.</small>
    </section>
  `;
}


/* ============================================================ */
