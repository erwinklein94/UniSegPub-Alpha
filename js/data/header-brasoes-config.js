/* Configuração estática de busca/fallback de brasões usada pelo header.
   Mantida fora de header-estados.js para reduzir responsabilidade sem alterar fluxo. */
(function () {
  window.EXTENSOES_BRASAO_SUPORTADAS = ['webp'];

  window.HEADER_INSTITUICOES_IMAGENS_ALIASES = {
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
})();
