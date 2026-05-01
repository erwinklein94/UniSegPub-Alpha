/* UniSegPub app bundle - gerado a partir dos fontes organizados. */


/* ===== js/data/parametros-cargos.js ===== */
/* Chunk gerado a partir de js/script-original.js — Parâmetros oficiais e cargos principais por instituição.
   Mantém a ordem original para preservar compatibilidade. */

/* =======================================================
   JavaScript principal extraído do index.html
   Dados, cálculos, navegação, tema, formulários e inicialização.
   ======================================================= */

/* =======================================================
   BLOCO 15 — JAVASCRIPT / DADOS E FUNCIONALIDADES
   Dados das instituições, cálculos, navegação, tema,
   formulários, geração de resultados e contato.
   ======================================================= */

/* BLOCO 15.1 — Constantes oficiais e parâmetros legais 2026 */
/* ============================================================ */
/* === CONSTANTES OFICIAIS 2026 ================================ */
/* ============================================================ */
const UFESP_2026 = 38.42;            // Comunicado DICAR-88/2025 - Sefaz-SP
const AUX_ALIM_SP_DIA_PADRAO = UFESP_2026; // Padrão adotado: 1 UFESP por dia efetivamente trabalhado
const AUX_ALIM_MG_DIA_PADRAO = 50.00;      // Decreto MG 49.006/2025
const AUX_ALIM_BA_40H = 440.00;            // Decreto BA 22.863/2024
const AUX_ALIM_BA_30H = 286.00;            // Decreto BA 22.863/2024
const AUX_ALIM_RJ_PM = 433.80;             // Decreto RJ 50.081/2026 (PMERJ)
const AUX_ALIM_PR_PADRAO = 834.74;         // Lei PR 22.208/2024 — auxílio-alimentação dos servidores ativos
const AUX_ALIM_RS_BM = 400.00;              // Editais BM/RS 2025 — auxílio-alimentação informado para Soldado e Oficialato
const AUX_ALIM_SC_PADRAO = 550.00;          // Lei SC 18.796/2023, com redação da Lei 19.059/2024 — auxílio-alimentação de 40h
const AUX_ALIM_ES_PADRAO = 800.00;          // PCES/OIP 2025 — auxílio-alimentação informado oficialmente; usado como referência ES, sem somar automaticamente ao bruto
const FASPM_PR_TITULAR = 0.005;            // Lei PR 17.169/2012 — 0,5% do subsídio (facultativo)
const FASPM_PR_DEPENDENTE = 0.002;         // Lei PR 17.169/2012 — 0,2% por dependente
const FASPM_PR_LIMITE = 0.02;              // Limite de 2% do subsídio
const SAL_MIN_2026 = 1621.00;        // Decreto 12.797/2025
const ALIQ_PREV = 0.14;
const ALIQ_IPSM = 0.105;
const STORAGE_KEY = 'usegpub_form_v2';
const STORAGE_KEY_CENARIO = 'usegpub_cenario_calc_v1';

/* === IRRF 2026 (tabela progressiva mensal) === */
/* BLOCO 15.2 — Tabela de IRRF e parâmetros do imposto */
const IRRF_FAIXAS = [
  { ate: 2428.80, aliq: 0,     ded: 0      },
  { ate: 2826.65, aliq: 0.075, ded: 182.16 },
  { ate: 3751.05, aliq: 0.15,  ded: 394.16 },
  { ate: 4664.68, aliq: 0.225, ded: 675.49 },
  { ate: Infinity, aliq: 0.275, ded: 908.73 }
];
const IRRF_DEP_DEDUCAO = 189.59;
const IRRF_DESCONTO_SIMPLIFICADO = 607.20; // 25% da faixa mensal isenta da tabela progressiva (R$ 2.428,80)
let ultimoDetalheIRRF = null;
/* Redutor mensal da Lei 15.270/2025 */
const IRRF_REDUTOR_LIM_TOTAL = 5000.00;
const IRRF_REDUTOR_LIM_PARC  = 7350.00;
const IRRF_REDUTOR_FORMULA_A = 978.62;
const IRRF_REDUTOR_FORMULA_B = 0.133145;

/* ============================================================ */
/* === DADOS DE CARGOS (PADRÃO + GRATIF + RETP FATOR) ========== */
/* ============================================================ */

/* BLOCO 15.3 — Tabelas de cargos e remunerações por instituição */
const CARGOS_PM = [
  { val: "cmtg",   text: "CMT G — Comandante Geral PM",          padrao: 11524.04, gratif: 1798.01, oficial: true,  retpFator: 1.0 },
  { val: "cel",    text: "CEL — Coronel PM",                     padrao: 9495.92,  gratif: 899.00,  oficial: true,  retpFator: 1.0 },
  { val: "tencel", text: "TEN CEL — Tenente Coronel PM",         padrao: 8892.20,  gratif: 480.85,  oficial: true,  retpFator: 1.0 },
  { val: "maj",    text: "MAJ — Major PM",                        padrao: 8370.88,  gratif: 0,       oficial: true,  retpFator: 1.0 },
  { val: "cap",    text: "CAP — Capitão PM",                      padrao: 7911.55,  gratif: 0,       oficial: true,  retpFator: 1.0 },
  { val: "1ten",   text: "1º TEN — 1º Tenente PM",                padrao: 7332.73,  gratif: 0,       oficial: true,  retpFator: 1.0 },
  { val: "2ten",   text: "2º TEN — 2º Tenente PM",                padrao: 4975.71,  gratif: 0,       oficial: true,  retpFator: 1.0 },
  { val: "aspof",  text: "ASP OF — Aspirante a Oficial PM",       padrao: 4766.58,  gratif: 0,       oficial: true,  retpFator: 1.0 },
  { val: "alof4",  text: "AL OF 4º CFO",                          padrao: 2757.47,  gratif: 0,       oficial: false, retpFator: 1.0 },
  { val: "alof3",  text: "AL OF 3º CFO",                          padrao: 2662.21,  gratif: 0,       oficial: false, retpFator: 1.0 },
  { val: "alof2",  text: "AL OF 2º CFO",                          padrao: 2452.34,  gratif: 0,       oficial: false, retpFator: 1.0 },
  { val: "alof1",  text: "AL OF 1º CFO",                          padrao: 2337.49,  gratif: 0,       oficial: false, retpFator: 1.0 },
  { val: "subten", text: "SUBTEN — Subtenente PM",                padrao: 4050.13,  gratif: 0,       oficial: false, retpFator: 1.0 },
  { val: "1sgt",   text: "1º SGT — 1º Sargento PM",               padrao: 3507.49,  gratif: 0,       oficial: false, retpFator: 1.0 },
  { val: "2sgt",   text: "2º SGT — 2º Sargento PM",               padrao: 3158.78,  gratif: 0,       oficial: false, retpFator: 1.0 },
  { val: "3sgt",   text: "3º SGT — 3º Sargento PM",               padrao: 2772.19,  gratif: 0,       oficial: false, retpFator: 1.0 },
  { val: "cabo",   text: "CABO PM",                                padrao: 2686.30,  gratif: 0,       oficial: false, retpFator: 1.0 },
  { val: "sd1",    text: "SD 1ª CL — Soldado PM 1ª Classe",       padrao: 2486.11,  gratif: 0,       oficial: false, selected: true, retpFator: 1.0 },
  { val: "sd2",    text: "SD 2ª CL — Soldado PM 2ª Classe",       padrao: 2348.42,  gratif: 0,       oficial: false, retpFator: 1.0 }
];

const CARGOS_PC = [
  // PCSP — estrutura padrão + RETP (100%). Valores da 3ª classe ancorados nos vencimentos iniciais oficiais divulgados pela Polícia Civil/SP.
  // Demais classes mantêm progressão estimativa do simulador, ajustada pela mesma referência proporcional quando não há tabela oficial legível no HTML.
  { val: "del_esp", text: "Delegado de Polícia - Especial",   padrao: 9510.20, gratif: 0, oficial: true,  delegado: true, retpFator: 1.0 },
  { val: "del_1",   text: "Delegado de Polícia - 1ª Classe",  padrao: 8765.41, gratif: 0, oficial: true,  delegado: true, retpFator: 1.0 },
  { val: "del_2",   text: "Delegado de Polícia - 2ª Classe",  padrao: 8056.08, gratif: 0, oficial: true,  delegado: true, retpFator: 1.0 },
  { val: "del_3",   text: "Delegado de Polícia - 3ª Classe",  padrao: 7519.00, gratif: 0, oficial: true,  delegado: true, retpFator: 1.0 },
  { val: "med_esp", text: "Médico Legista / Perito - Especial", padrao: 8134.16, gratif: 0, oficial: true, retpFator: 1.0 },
  { val: "med_1",   text: "Médico Legista / Perito - 1ª Classe", padrao: 7481.42, gratif: 0, oficial: true, retpFator: 1.0 },
  { val: "med_2",   text: "Médico Legista / Perito - 2ª Classe", padrao: 6878.89, gratif: 0, oficial: true, retpFator: 1.0 },
  { val: "med_3",   text: "Médico Legista / Perito - 3ª Classe", padrao: 6477.20, gratif: 0, oficial: true, retpFator: 1.0 },
  { val: "inv_esp", text: "Investigador / Escrivão - Especial",  padrao: 3957.96, gratif: 0, oficial: false, retpFator: 1.0 },
  { val: "inv_1",   text: "Investigador / Escrivão - 1ª Classe", padrao: 3591.58, gratif: 0, oficial: false, retpFator: 1.0 },
  { val: "inv_2",   text: "Investigador / Escrivão - 2ª Classe", padrao: 3243.71, gratif: 0, oficial: false, retpFator: 1.0 },
  { val: "inv_3",   text: "Investigador / Escrivão - 3ª Classe", padrao: 2939.84, gratif: 0, oficial: false, selected: true, retpFator: 1.0 },
  { val: "age_esp", text: "Agente / Aux. / Papi - Especial",     padrao: 3345.01, gratif: 0, oficial: false, retpFator: 1.0 },
  { val: "age_1",   text: "Agente / Aux. / Papi - 1ª Classe",    padrao: 2968.25, gratif: 0, oficial: false, retpFator: 1.0 },
  { val: "age_2",   text: "Agente / Aux. / Papi - 2ª Classe",    padrao: 2685.24, gratif: 0, oficial: false, retpFator: 1.0 },
  { val: "age_3",   text: "Agente / Aux. / Papi - 3ª Classe",    padrao: 2449.87, gratif: 0, oficial: false, retpFator: 1.0 }
];

const CARGOS_PMERJ = [
  // Tabela oficial do Caderno de Remuneração RJ — janeiro/2026.
  // Cálculo por parcelas: Soldo + GRET + GHP + GRAM.
  { val: "cel_rj",     text: "CEL PM — Coronel PMERJ",              padrao: 3270.72, oficial: true,  gretPct: 1.925, ghpPct: 1.60, retpFator: 0 },
  { val: "tencel_rj",  text: "TEN CEL PM — Tenente Coronel PMERJ",  padrao: 2943.64, oficial: true,  gretPct: 1.925, ghpPct: 1.60, retpFator: 0 },
  { val: "maj_rj",     text: "MAJ PM — Major PMERJ",                padrao: 2649.27, oficial: true,  gretPct: 1.925, ghpPct: 1.10, retpFator: 0 },
  { val: "cap_rj",     text: "CAP PM — Capitão PMERJ",              padrao: 2384.35, oficial: true,  gretPct: 1.500, ghpPct: 1.10, retpFator: 0 },
  { val: "1ten_rj",    text: "1º TEN PM — 1º Tenente PMERJ",        padrao: 2145.59, oficial: true,  gretPct: 1.500, ghpPct: 1.10, retpFator: 0 },
  { val: "2ten_rj",    text: "2º TEN PM — 2º Tenente PMERJ",        padrao: 1929.73, oficial: true,  gretPct: 1.500, ghpPct: 1.10, retpFator: 0 },
  { val: "asp_rj",     text: "ASP OF PM — Aspirante Oficial PMERJ", padrao: 1736.74, oficial: true,  gretPct: 1.500, ghpPct: 1.10, retpFator: 0 },
  { val: "subten_rj",  text: "SUBTEN PM — Subtenente PMERJ",        padrao: 1736.74, oficial: false, gretPct: 1.500, ghpPct: 1.10, retpFator: 0 },
  { val: "1sgt_rj",    text: "1º SGT PM — 1º Sargento PMERJ",       padrao: 1596.10, oficial: false, gretPct: 1.500, ghpPct: 1.10, retpFator: 0 },
  { val: "2sgt_rj",    text: "2º SGT PM — 2º Sargento PMERJ",       padrao: 1448.93, oficial: false, gretPct: 1.500, ghpPct: 1.10, retpFator: 0 },
  { val: "3sgt_rj",    text: "3º SGT PM — 3º Sargento PMERJ",       padrao: 1318.10, oficial: false, gretPct: 1.500, ghpPct: 1.10, retpFator: 0 },
  { val: "cabo_rj",    text: "CABO PM — Cabo PMERJ",                padrao: 1141.48, oficial: false, gretPct: 1.500, ghpPct: 0.75, retpFator: 0 },
  { val: "sd_rj",      text: "SD PM — Soldado A/B/C PMERJ",         padrao: 991.03,  oficial: false, selected: true, gretPct: 1.500, ghpPct: 0.75, retpFator: 0 },
  { val: "sdaluno_rj", text: "SD ALUNO — Soldado-Aluno PMERJ",      padrao: 817.67,  oficial: false, gretPct: 1.225, ghpPct: 0,    retpFator: 0 },
  { val: "alesfo_rj",  text: "ALUNO ESFO — Aluno EsFO PMERJ",       padrao: 1141.48, oficial: false, gretPct: 1.225, ghpPct: 0,    retpFator: 0 }
];

const CARGOS_PCERJ = [
  // Tabela oficial do Caderno de Remuneração RJ — janeiro/2026, conforme Lei 11.003/2025.
  // Cálculo por parcelas: VB + AAP/Representação + GHP máxima + GATC quando aplicável.
  { val: "del_1_rj",       text: "Delegado de Polícia - 1ª Classe",       padrao: 7133.67, oficial: true,  delegado: true,  representacaoPct: 2.12, ghpPct: 1.05, gatcPct: 0, retpFator: 0 },
  { val: "del_2_rj",       text: "Delegado de Polícia - 2ª Classe",       padrao: 6793.98, oficial: true,  delegado: true,  representacaoPct: 2.12, ghpPct: 1.05, gatcPct: 0, retpFator: 0 },
  { val: "del_3_rj",       text: "Delegado de Polícia - 3ª Classe",       padrao: 6470.45, oficial: true,  delegado: true,  representacaoPct: 2.12, ghpPct: 1.05, gatcPct: 0, retpFator: 0 },
  { val: "engtelecom_rj",  text: "Eng. Policial de Telecomunicações",     padrao: 3251.50, oficial: true,                  aapPct: 2.30, ghpPct: 1.00, gatcPct: 1.00, retpFator: 0 },
  { val: "piloto_rj",      text: "Piloto Policial",                       padrao: 3251.50, oficial: true,                  aapPct: 2.30, ghpPct: 1.00, gatcPct: 0,    retpFator: 0 },
  { val: "perito_1_rj",    text: "Perito Legista/Criminal - 1ª Classe",   padrao: 3251.50, oficial: true,  perito: true,    aapPct: 2.30, ghpPct: 1.00, gatcPct: 1.00, retpFator: 0 },
  { val: "perito_2_rj",    text: "Perito Legista/Criminal - 2ª Classe",   padrao: 2861.32, oficial: true,  perito: true,    aapPct: 2.30, ghpPct: 1.00, gatcPct: 1.00, retpFator: 0 },
  { val: "perito_3_rj",    text: "Perito Legista/Criminal - 3ª Classe",   padrao: 2601.20, oficial: true,  perito: true,    aapPct: 2.30, ghpPct: 1.00, gatcPct: 1.00, retpFator: 0 },
  { val: "med_1_rj",       text: "Médico Policial - 1ª Classe",           padrao: 2601.20, oficial: true,                  aapPct: 2.30, ghpPct: 1.00, gatcPct: 1.00, retpFator: 0 },
  { val: "med_2_rj",       text: "Médico Policial - 2ª Classe",           padrao: 2471.14, oficial: true,                  aapPct: 2.30, ghpPct: 1.00, gatcPct: 1.00, retpFator: 0 },
  { val: "med_3_rj",       text: "Médico Policial - 3ª Classe",           padrao: 2158.99, oficial: true,                  aapPct: 2.30, ghpPct: 1.00, gatcPct: 1.00, retpFator: 0 },
  { val: "papilo_1_rj",    text: "Perito Papiloscopista - 1ª Classe",     padrao: 3251.50, oficial: true,                  aapPct: 2.30, ghpPct: 1.00, gatcPct: 1.00, retpFator: 0 },
  { val: "papilo_2_rj",    text: "Perito Papiloscopista - 2ª Classe",     padrao: 2861.32, oficial: true,                  aapPct: 2.30, ghpPct: 1.00, gatcPct: 1.00, retpFator: 0 },
  { val: "papilo_3_rj",    text: "Perito Papiloscopista - 3ª Classe",     padrao: 2601.20, oficial: true,                  aapPct: 2.30, ghpPct: 1.00, gatcPct: 1.00, retpFator: 0 },
  { val: "ofpc_com_rj",    text: "Oficial de Polícia Civil - Comissário", padrao: 2861.32, oficial: false,                 aapPct: 2.30, ghpPct: 1.00, gatcPct: 0, retpFator: 0 },
  { val: "ofpc_2_rj",      text: "Oficial de Polícia Civil - 2ª Classe",  padrao: 2471.14, oficial: false,                 aapPct: 2.30, ghpPct: 1.00, gatcPct: 0, retpFator: 0 },
  { val: "ofpc_3_rj",      text: "Oficial de Polícia Civil - 3ª Classe",  padrao: 2341.07, oficial: false, selected: true,  aapPct: 2.30, ghpPct: 1.00, gatcPct: 0, retpFator: 0 },
  { val: "ofpc_4_rj",      text: "Oficial de Polícia Civil - 4ª Classe",  padrao: 2132.97, oficial: false,                 aapPct: 2.30, ghpPct: 1.00, gatcPct: 0, retpFator: 0 },
  { val: "ofpc_5_rj",      text: "Oficial de Polícia Civil - 5ª Classe",  padrao: 2080.95, oficial: false,                 aapPct: 2.30, ghpPct: 1.00, gatcPct: 0, retpFator: 0 },
  { val: "ofpc_6_rj",      text: "Oficial de Polícia Civil - 6ª Classe",  padrao: 2028.92, oficial: false,                 aapPct: 2.30, ghpPct: 1.00, gatcPct: 0, retpFator: 0 },
  { val: "agpc_1_rj",      text: "Agente de Polícia Científica - 1ª",     padrao: 2028.92, oficial: false,                 aapPct: 2.30, ghpPct: 1.00, gatcPct: 0, retpFator: 0 },
  { val: "agpc_2_rj",      text: "Agente de Polícia Científica - 2ª",     padrao: 1820.84, oficial: false,                 aapPct: 2.30, ghpPct: 1.00, gatcPct: 0, retpFator: 0 },
  { val: "agpc_3_rj",      text: "Agente de Polícia Científica - 3ª",     padrao: 1690.77, oficial: false,                 aapPct: 2.30, ghpPct: 1.00, gatcPct: 0, retpFator: 0 },
  { val: "auxenf_rj",      text: "Aux. Enfermagem da Polícia - 1ª",       padrao: 2028.92, oficial: false,                 aapPct: 2.30, ghpPct: 1.00, gatcPct: 0, retpFator: 0 }
];

const MG_REAJUSTE_2026 = 1.054; // Lei Estadual MG 25.804/2026 — revisão geral de 5,4% a partir de jan/2026.
const PMBA_AUX_FARDAMENTO_2026 = 256.18; // Lei Estadual BA 14.890/2025 — valor mensal a partir de maio/2026.

const CARGOS_PMMG = [
  // Valores-base revisados em 5,4% sobre a base anterior usada no simulador. Conferir adicionais individuais no contracheque.
  { val: "cel_mg",     text: "CEL PM — Coronel PMMG",                padrao: 22397.50, oficial: true,  retpFator: 0 },
  { val: "tencel_mg",  text: "TEN CEL PM — Tenente Coronel PMMG",    padrao: 19499.00, oficial: true,  retpFator: 0 },
  { val: "maj_mg",     text: "MAJ PM — Major PMMG",                  padrao: 17074.80, oficial: true,  retpFator: 0 },
  { val: "cap_mg",     text: "CAP PM — Capitão PMMG",                padrao: 14229.00, oficial: true,  retpFator: 0 },
  { val: "1ten_mg",    text: "1º TEN PM — 1º Tenente PMMG",          padrao: 11594.00, oficial: true,  retpFator: 0 },
  { val: "2ten_mg",    text: "2º TEN PM — 2º Tenente PMMG",          padrao: 10013.00, oficial: true,  retpFator: 0 },
  { val: "subten_mg",  text: "SUBTEN PM — Subtenente PMMG",          padrao: 9064.40,  oficial: false, retpFator: 0 },
  { val: "1sgt_mg",    text: "1º SGT PM — 1º Sargento PMMG",         padrao: 8221.20,  oficial: false, retpFator: 0 },
  { val: "2sgt_mg",    text: "2º SGT PM — 2º Sargento PMMG",         padrao: 7272.60,  oficial: false, retpFator: 0 },
  { val: "3sgt_mg",    text: "3º SGT PM — 3º Sargento PMMG",         padrao: 6429.40,  oficial: false, retpFator: 0 },
  { val: "cabo_mg",    text: "CABO PM — Cabo PMMG",                  padrao: 5797.00,  oficial: false, retpFator: 0 },
  { val: "sd1_mg",     text: "SD 1ª CL — Soldado 1ª Classe PMMG",    padrao: 5372.35,  oficial: false, selected: true, retpFator: 0 },
  { val: "sd2_mg",     text: "SD 2ª CL — Soldado 2ª Classe PMMG",    padrao: 4596.31,  oficial: false, retpFator: 0 }
];

const CARGOS_PCMG = [
  // Valores-base 2026: revisão geral de 5,4%. Investigador, Perito e Médico Legista usam bases de edital público atualizadas pela revisão.
  { val: "del_geral_mg", text: "Delegado Geral de Polícia",       padrao: 22661.00, oficial: true,  delegado: true, retpFator: 0 },
  { val: "del_esp_mg",   text: "Delegado Especial",                padrao: 19499.00, oficial: true,  delegado: true, retpFator: 0 },
  { val: "del_mg",       text: "Delegado de Polícia",              padrao: 14966.80, oficial: true,  delegado: true, retpFator: 0 },
  { val: "perito_esp_mg",text: "Perito Criminal Especial",         padrao: 14966.80, oficial: true,  perito: true,  retpFator: 0 },
  { val: "perito_mg",    text: "Perito Criminal",                  padrao: 12170.61, oficial: true,  perito: true,  retpFator: 0 },
  { val: "medleg_mg",    text: "Médico Legista",                   padrao: 12170.61, oficial: true,  perito: true,  retpFator: 0 },
  { val: "inv_esp_mg",   text: "Investigador / Escrivão Especial", padrao: 9275.20,  oficial: false,                 retpFator: 0 },
  { val: "inv_mg",       text: "Investigador / Escrivão",          padrao: 5620.58,  oficial: false, selected: true, retpFator: 0 }
];

const CARGOS_PMBA = [
  // Lei Estadual BA 14.890/2025 — soldo a partir de maio/2026 e GAP a partir de junho/2026.
  { val: "cel_ba",     text: "CEL PM — Coronel PMBA",              padrao: 2561.83, oficial: true,  retpFator: 0, gapBa: [8628.67, 9772.71, 11143.21, 12857.73, 14833.48] },
  { val: "tencel_ba",  text: "TEN CEL PM — Tenente Coronel PMBA",  padrao: 2430.97, oficial: true,  retpFator: 0, gapBa: [7787.90, 8822.62, 10060.34, 11610.88, 13395.22] },
  { val: "maj_ba",     text: "MAJ PM — Major PMBA",                padrao: 2325.81, oficial: true,  retpFator: 0, gapBa: [7001.17, 7961.69, 9113.51, 10566.47, 12229.81] },
  { val: "cap_ba",     text: "CAP PM — Capitão PMBA",              padrao: 2148.53, oficial: true,  retpFator: 0, gapBa: [6319.59, 6963.95, 7737.21, 8731.99, 9844.64] },
  { val: "1ten_ba",    text: "1º TEN PM — 1º Tenente PMBA",        padrao: 1810.30, oficial: true,  retpFator: 0, gapBa: [4321.05, 5036.39, 5900.16, 7000.55, 8237.76] },
  { val: "asp_ba",     text: "ASP OF PM — Aspirante PMBA",         padrao: 1772.26, oficial: true,  retpFator: 0, gapBa: [2289.28, 2609.02, 3036.66, 3629.53, 4261.70] },
  { val: "subten_ba",  text: "SUBTEN PM — Subtenente PMBA",        padrao: 1673.94, oficial: false, retpFator: 0, gapBa: [2278.84, 2598.57, 3026.12, 3618.90, 4250.97] },
  { val: "1sgt_ba",    text: "1º SGT PM — 1º Sargento PMBA",       padrao: 1660.84, oficial: false, retpFator: 0, gapBa: [1970.61, 2275.84, 2647.05, 3218.85, 3830.06] },
  { val: "cabo_ba",    text: "CABO PM — Cabo PMBA",                padrao: 1647.44, oficial: false, retpFator: 0, gapBa: [1719.67, 2000.36, 2340.49, 2823.16, 3380.64] },
  { val: "sd1_ba",     text: "SD 1ª CL — Soldado 1ª Classe PMBA",  padrao: 1633.88, oficial: false, selected: true, retpFator: 0, gapBa: [1500.56, 1773.73, 2102.42, 2558.01, 3085.14] },
  { val: "sdaluno_ba", text: "SD ALUNO — Aluno a Soldado",         padrao: 1412.00, oficial: false, retpFator: 0, gapBa: [0, 0, 0, 0, 0] }
];

const CARGOS_PCBA = [
  // Lei Estadual BA 14.891/2025 — vencimento e GAJ/GAPJ a partir de junho/2026.
  { val: "del_esp_ba", text: "Delegado de Polícia — Classe Especial",   padrao: 7539.46, oficial: true,  delegado: true, retpFator: 0, gratBaLabel: "GAJ — Gratificação de Atividade Jurídica", gratBa: [1429.09, 2678.00, 4174.15, 5972.90, 8129.72] },
  { val: "del_1_ba",   text: "Delegado de Polícia — 1ª Classe",         padrao: 7100.36, oficial: true,  delegado: true, retpFator: 0, gratBaLabel: "GAJ — Gratificação de Atividade Jurídica", gratBa: [1058.42, 2183.73, 3534.93, 5158.89, 7106.86] },
  { val: "del_2_ba",   text: "Delegado de Polícia — 2ª Classe",         padrao: 6701.20, oficial: true,  delegado: true, retpFator: 0, gratBaLabel: "GAJ — Gratificação de Atividade Jurídica", gratBa: [904.00, 1956.87, 3214.26, 4727.41, 6543.22] },
  { val: "del_3_ba",   text: "Delegado de Polícia — 3ª Classe",         padrao: 6449.78, oficial: true,  delegado: true, retpFator: 0, gratBaLabel: "GAJ — Gratificação de Atividade Jurídica", gratBa: [529.46, 1190.47, 1983.66, 2935.55, 4076.87] },

  { val: "perito_esp_ba", text: "Perito Criminal/Legista/Odonto — Classe Especial", padrao: 6336.30, oficial: true, perito: true, retpFator: 0, gratBaLabel: "GAPJ — Gratificação de Atividade de Polícia Judiciária", gratBa: [2234.75, 3483.65, 4979.76, 6778.54, 8935.35] },
  { val: "perito_1_ba",   text: "Perito Criminal/Legista/Odonto — 1ª Classe",       padrao: 5948.96, oficial: true, perito: true, retpFator: 0, gratBaLabel: "GAPJ — Gratificação de Atividade de Polícia Judiciária", gratBa: [1864.09, 2989.35, 4340.55, 5964.56, 7912.49] },
  { val: "perito_2_ba",   text: "Perito Criminal/Legista/Odonto — 2ª Classe",       padrao: 5596.40, oficial: true, perito: true, retpFator: 0, gratBaLabel: "GAPJ — Gratificação de Atividade de Polícia Judiciária", gratBa: [1709.65, 2762.50, 4019.93, 5533.09, 7348.88] },
  { val: "perito_3_ba",   text: "Perito Criminal/Legista/Odonto — 3ª Classe",       padrao: 5374.89, oficial: true, perito: true, retpFator: 0, gratBaLabel: "GAPJ — Gratificação de Atividade de Polícia Judiciária", gratBa: [1335.05, 1996.11, 2789.31, 3741.18, 4882.52] },

  { val: "inv_esp_ba", text: "Investigador/Escrivão/Perito Técnico — Classe Especial", padrao: 2651.24, oficial: false, retpFator: 0, gratBaLabel: "GAPJ — Gratificação de Atividade de Polícia Judiciária", gratBa: [1771.76, 2197.00, 2704.18, 3314.06, 4046.29] },
  { val: "inv_1_ba",   text: "Investigador/Escrivão/Perito Técnico — 1ª Classe",       padrao: 1970.78, oficial: false, retpFator: 0, gratBaLabel: "GAPJ — Gratificação de Atividade de Polícia Judiciária", gratBa: [1677.61, 2102.89, 2610.09, 3222.08, 3952.19] },
  { val: "inv_2_ba",   text: "Investigador/Escrivão/Perito Técnico — 2ª Classe",       padrao: 1957.83, oficial: false, retpFator: 0, gratBaLabel: "GAPJ — Gratificação de Atividade de Polícia Judiciária", gratBa: [1393.70, 1756.44, 2208.58, 2757.62, 3407.80] },
  { val: "inv_3_ba",   text: "Investigador/Escrivão/Perito Técnico — 3ª Classe",       padrao: 1944.74, oficial: false, selected: true, retpFator: 0, gratBaLabel: "GAPJ — Gratificação de Atividade de Polícia Judiciária", gratBa: [1270.45, 1627.71, 2057.39, 2569.05, 3186.96] }
];


const CARGOS_PMPR = [
  // PMPR — Lei Estadual PR 22.187/2024, Anexo I, Tabela I.
  // Regime por subsídio. Classe I é a entrada/menor classe do posto ou graduação; Classe V é o topo da respectiva linha.
  { val: "cel_pr_i", text: "CEL PM — Coronel PMPR — Classe I", padrao: 26380.68, oficial: true, retpFator: 0 },
  { val: "cel_pr_ii", text: "CEL PM — Coronel PMPR — Classe II", padrao: 28978.89, oficial: true, retpFator: 0 },
  { val: "cel_pr_iii", text: "CEL PM — Coronel PMPR — Classe III", padrao: 31577.05, oficial: true, retpFator: 0 },
  { val: "cel_pr_iv", text: "CEL PM — Coronel PMPR — Classe IV", padrao: 34175.24, oficial: true, retpFator: 0 },
  { val: "cel_pr_v", text: "CEL PM — Coronel PMPR — Classe V", padrao: 36773.42, oficial: true, retpFator: 0 },
  { val: "tencel_pr_i", text: "TEN CEL PM — Tenente-Coronel PMPR — Classe I", padrao: 25143.48, oficial: true, retpFator: 0 },
  { val: "tencel_pr_ii", text: "TEN CEL PM — Tenente-Coronel PMPR — Classe II", padrao: 27617.92, oficial: true, retpFator: 0 },
  { val: "tencel_pr_iii", text: "TEN CEL PM — Tenente-Coronel PMPR — Classe III", padrao: 30092.37, oficial: true, retpFator: 0 },
  { val: "tencel_pr_iv", text: "TEN CEL PM — Tenente-Coronel PMPR — Classe IV", padrao: 32566.86, oficial: true, retpFator: 0 },
  { val: "tencel_pr_v", text: "TEN CEL PM — Tenente-Coronel PMPR — Classe V", padrao: 35041.30, oficial: true, retpFator: 0 },
  { val: "maj_pr_i", text: "MAJ PM — Major PMPR — Classe I", padrao: 23742.83, oficial: true, retpFator: 0 },
  { val: "maj_pr_ii", text: "MAJ PM — Major PMPR — Classe II", padrao: 26077.21, oficial: true, retpFator: 0 },
  { val: "maj_pr_iii", text: "MAJ PM — Major PMPR — Classe III", padrao: 28411.61, oficial: true, retpFator: 0 },
  { val: "maj_pr_iv", text: "MAJ PM — Major PMPR — Classe IV", padrao: 30746.01, oficial: true, retpFator: 0 },
  { val: "maj_pr_v", text: "MAJ PM — Major PMPR — Classe V", padrao: 33080.38, oficial: true, retpFator: 0 },
  { val: "cap_pr_i", text: "CAP PM — Capitão PMPR — Classe I", padrao: 22631.21, oficial: true, retpFator: 0 },
  { val: "cap_pr_ii", text: "CAP PM — Capitão PMPR — Classe II", padrao: 24854.45, oficial: true, retpFator: 0 },
  { val: "cap_pr_iii", text: "CAP PM — Capitão PMPR — Classe III", padrao: 27077.66, oficial: true, retpFator: 0 },
  { val: "cap_pr_iv", text: "CAP PM — Capitão PMPR — Classe IV", padrao: 29300.90, oficial: true, retpFator: 0 },
  { val: "cap_pr_v", text: "CAP PM — Capitão PMPR — Classe V", padrao: 31524.13, oficial: true, retpFator: 0 },
  { val: "1ten_pr_i", text: "1º TEN PM — 1º Tenente PMPR — Classe I", padrao: 15731.54, oficial: true, retpFator: 0 },
  { val: "1ten_pr_ii", text: "1º TEN PM — 1º Tenente PMPR — Classe II", padrao: 17264.77, oficial: true, retpFator: 0 },
  { val: "1ten_pr_iii", text: "1º TEN PM — 1º Tenente PMPR — Classe III", padrao: 18798.04, oficial: true, retpFator: 0 },
  { val: "1ten_pr_iv", text: "1º TEN PM — 1º Tenente PMPR — Classe IV", padrao: 20331.31, oficial: true, retpFator: 0 },
  { val: "1ten_pr_v", text: "1º TEN PM — 1º Tenente PMPR — Classe V", padrao: 21864.57, oficial: true, retpFator: 0 },
  { val: "2ten_pr_i", text: "2º TEN PM — 2º Tenente PMPR — Classe I", padrao: 13731.61, oficial: true, retpFator: 0 },
  { val: "2ten_pr_ii", text: "2º TEN PM — 2º Tenente PMPR — Classe II", padrao: 15064.92, oficial: true, retpFator: 0 },
  { val: "2ten_pr_iii", text: "2º TEN PM — 2º Tenente PMPR — Classe III", padrao: 16398.16, oficial: true, retpFator: 0 },
  { val: "2ten_pr_iv", text: "2º TEN PM — 2º Tenente PMPR — Classe IV", padrao: 17731.46, oficial: true, retpFator: 0 },
  { val: "2ten_pr_v", text: "2º TEN PM — 2º Tenente PMPR — Classe V", padrao: 19064.70, oficial: true, retpFator: 0 },
  { val: "subten_pr_i", text: "SUBTEN PM — Subtenente PMPR — Classe I", padrao: 9990.80, oficial: false, retpFator: 0 },
  { val: "subten_pr_ii", text: "SUBTEN PM — Subtenente PMPR — Classe II", padrao: 10939.06, oficial: false, retpFator: 0 },
  { val: "subten_pr_iii", text: "SUBTEN PM — Subtenente PMPR — Classe III", padrao: 11887.36, oficial: false, retpFator: 0 },
  { val: "subten_pr_iv", text: "SUBTEN PM — Subtenente PMPR — Classe IV", padrao: 12835.64, oficial: false, retpFator: 0 },
  { val: "subten_pr_v", text: "SUBTEN PM — Subtenente PMPR — Classe V", padrao: 13783.90, oficial: false, retpFator: 0 },
  { val: "1sgt_pr_i", text: "1º SGT PM — 1º Sargento PMPR — Classe I", padrao: 7825.54, oficial: false, retpFator: 0 },
  { val: "1sgt_pr_ii", text: "1º SGT PM — 1º Sargento PMPR — Classe II", padrao: 8554.06, oficial: false, retpFator: 0 },
  { val: "1sgt_pr_iii", text: "1º SGT PM — 1º Sargento PMPR — Classe III", padrao: 9282.53, oficial: false, retpFator: 0 },
  { val: "1sgt_pr_iv", text: "1º SGT PM — 1º Sargento PMPR — Classe IV", padrao: 10011.06, oficial: false, retpFator: 0 },
  { val: "1sgt_pr_v", text: "1º SGT PM — 1º Sargento PMPR — Classe V", padrao: 10739.53, oficial: false, retpFator: 0 },
  { val: "2sgt_pr_i", text: "2º SGT PM — 2º Sargento PMPR — Classe I", padrao: 7364.37, oficial: false, retpFator: 0 },
  { val: "2sgt_pr_ii", text: "2º SGT PM — 2º Sargento PMPR — Classe II", padrao: 8046.26, oficial: false, retpFator: 0 },
  { val: "2sgt_pr_iii", text: "2º SGT PM — 2º Sargento PMPR — Classe III", padrao: 8728.15, oficial: false, retpFator: 0 },
  { val: "2sgt_pr_iv", text: "2º SGT PM — 2º Sargento PMPR — Classe IV", padrao: 9410.05, oficial: false, retpFator: 0 },
  { val: "2sgt_pr_v", text: "2º SGT PM — 2º Sargento PMPR — Classe V", padrao: 10091.93, oficial: false, retpFator: 0 },
  { val: "3sgt_pr_i", text: "3º SGT PM — 3º Sargento PMPR — Classe I", padrao: 7022.39, oficial: false, retpFator: 0 },
  { val: "3sgt_pr_ii", text: "3º SGT PM — 3º Sargento PMPR — Classe II", padrao: 7662.91, oficial: false, retpFator: 0 },
  { val: "3sgt_pr_iii", text: "3º SGT PM — 3º Sargento PMPR — Classe III", padrao: 8303.38, oficial: false, retpFator: 0 },
  { val: "3sgt_pr_iv", text: "3º SGT PM — 3º Sargento PMPR — Classe IV", padrao: 8943.87, oficial: false, retpFator: 0 },
  { val: "3sgt_pr_v", text: "3º SGT PM — 3º Sargento PMPR — Classe V", padrao: 9584.38, oficial: false, retpFator: 0 },
  { val: "cabo_pr_i", text: "CABO PM — Cabo PMPR — Classe I", padrao: 6277.66, oficial: false, retpFator: 0 },
  { val: "cabo_pr_ii", text: "CABO PM — Cabo PMPR — Classe II", padrao: 6826.00, oficial: false, retpFator: 0 },
  { val: "cabo_pr_iii", text: "CABO PM — Cabo PMPR — Classe III", padrao: 7374.30, oficial: false, retpFator: 0 },
  { val: "cabo_pr_iv", text: "CABO PM — Cabo PMPR — Classe IV", padrao: 7884.89, oficial: false, retpFator: 0 },
  { val: "cabo_pr_v", text: "CABO PM — Cabo PMPR — Classe V", padrao: 8632.27, oficial: false, retpFator: 0 },
  { val: "sd1_pr_i", text: "SD 1ª CL — Soldado PMPR — Classe I", padrao: 6101.87, oficial: false, selected: true, retpFator: 0 },
  { val: "sd1_pr_ii", text: "SD 1ª CL — Soldado PMPR — Classe II", padrao: 6597.95, oficial: false, retpFator: 0 },
  { val: "sd1_pr_iii", text: "SD 1ª CL — Soldado PMPR — Classe III", padrao: 7094.07, oficial: false, retpFator: 0 },
  { val: "sd1_pr_iv", text: "SD 1ª CL — Soldado PMPR — Classe IV", padrao: 7553.83, oficial: false, retpFator: 0 },
  { val: "sd1_pr_v", text: "SD 1ª CL — Soldado PMPR — Classe V", padrao: 8279.70, oficial: false, retpFator: 0 },
  { val: "asp_pr", text: "ASP OF PM — Aspirante a Oficial PMPR", padrao: 8280.91, oficial: true, retpFator: 0 },
  { val: "cad3_pr", text: "CADETE PM — 3º Ano CFO PMPR", padrao: 5023.53, oficial: false, retpFator: 0 },
  { val: "cad2_pr", text: "CADETE PM — 2º Ano CFO PMPR", padrao: 4423.48, oficial: false, retpFator: 0 },
  { val: "cad1_pr", text: "CADETE PM — 1º Ano CFO PMPR", padrao: 3994.86, oficial: false, retpFator: 0 },
  { val: "sdaluno2_pr", text: "ALUNO-SOLDADO OPERACIONAL — 2ª Classe PMPR", padrao: 3795.18, oficial: false, retpFator: 0 },
  { val: "sdaluno3_pr", text: "ALUNO-SOLDADO — 3ª Classe PMPR", padrao: 2530.12, oficial: false, retpFator: 0 }
];

const CARGOS_PCPR = [
  // PCPR — Lei Complementar PR 259/2023 e tabelas de remuneração 2026.
  // Regime por subsídio. Agente e Papiloscopista são organizados em níveis I a XI; Delegado tem classes.
  { val: "del_pr_4_ini", text: "Delegado de Polícia PCPR — 4ª Classe — Inicial", padrao: 24247.12, oficial: true, delegado: true, retpFator: 0 },
  { val: "del_pr_4_fin", text: "Delegado de Polícia PCPR — 4ª Classe — Final", padrao: 29351.01, oficial: true, delegado: true, retpFator: 0 },
  { val: "del_pr_3_ini", text: "Delegado de Polícia PCPR — 3ª Classe — Inicial", padrao: 30764.55, oficial: true, delegado: true, retpFator: 0 },
  { val: "del_pr_3_fin", text: "Delegado de Polícia PCPR — 3ª Classe — Final", padrao: 32224.50, oficial: true, delegado: true, retpFator: 0 },
  { val: "del_pr_2_ini", text: "Delegado de Polícia PCPR — 2ª Classe — Inicial", padrao: 33732.94, oficial: true, delegado: true, retpFator: 0 },
  { val: "del_pr_2_fin", text: "Delegado de Polícia PCPR — 2ª Classe — Final", padrao: 35303.15, oficial: true, delegado: true, retpFator: 0 },
  { val: "del_pr_1_ini", text: "Delegado de Polícia PCPR — 1ª Classe — Inicial", padrao: 36760.50, oficial: true, delegado: true, retpFator: 0 },
  { val: "del_pr_1_fin", text: "Delegado de Polícia PCPR — 1ª Classe — Final", padrao: 38570.72, oficial: true, delegado: true, retpFator: 0 },
  { val: "agente_pr_i", text: "Agente de Polícia Judiciária PCPR — Nível I", padrao: 7818.45, oficial: false, selected: true, retpFator: 0 },
  { val: "agente_pr_ii", text: "Agente de Polícia Judiciária PCPR — Nível II", padrao: 8337.20, oficial: false, retpFator: 0 },
  { val: "agente_pr_iii", text: "Agente de Polícia Judiciária PCPR — Nível III", padrao: 9125.16, oficial: false, retpFator: 0 },
  { val: "agente_pr_iv", text: "Agente de Polícia Judiciária PCPR — Nível IV", padrao: 9850.32, oficial: false, retpFator: 0 },
  { val: "agente_pr_v", text: "Agente de Polícia Judiciária PCPR — Nível V", padrao: 10716.78, oficial: false, retpFator: 0 },
  { val: "agente_pr_vi", text: "Agente de Polícia Judiciária PCPR — Nível VI", padrao: 11681.41, oficial: false, retpFator: 0 },
  { val: "agente_pr_vii", text: "Agente de Polícia Judiciária PCPR — Nível VII", padrao: 12679.72, oficial: false, retpFator: 0 },
  { val: "agente_pr_viii", text: "Agente de Polícia Judiciária PCPR — Nível VIII", padrao: 14119.73, oficial: false, retpFator: 0 },
  { val: "agente_pr_ix", text: "Agente de Polícia Judiciária PCPR — Nível IX", padrao: 15392.94, oficial: false, retpFator: 0 },
  { val: "agente_pr_x", text: "Agente de Polícia Judiciária PCPR — Nível X", padrao: 17113.10, oficial: false, retpFator: 0 },
  { val: "agente_pr_xi", text: "Agente de Polícia Judiciária PCPR — Nível XI", padrao: 18513.49, oficial: false, retpFator: 0 },
  { val: "papilo_pr_i", text: "Papiloscopista Policial PCPR — Nível I", padrao: 7818.45, oficial: false, retpFator: 0 },
  { val: "papilo_pr_ii", text: "Papiloscopista Policial PCPR — Nível II", padrao: 8337.20, oficial: false, retpFator: 0 },
  { val: "papilo_pr_iii", text: "Papiloscopista Policial PCPR — Nível III", padrao: 9125.16, oficial: false, retpFator: 0 },
  { val: "papilo_pr_iv", text: "Papiloscopista Policial PCPR — Nível IV", padrao: 9850.32, oficial: false, retpFator: 0 },
  { val: "papilo_pr_v", text: "Papiloscopista Policial PCPR — Nível V", padrao: 10716.78, oficial: false, retpFator: 0 },
  { val: "papilo_pr_vi", text: "Papiloscopista Policial PCPR — Nível VI", padrao: 11681.41, oficial: false, retpFator: 0 },
  { val: "papilo_pr_vii", text: "Papiloscopista Policial PCPR — Nível VII", padrao: 12679.72, oficial: false, retpFator: 0 },
  { val: "papilo_pr_viii", text: "Papiloscopista Policial PCPR — Nível VIII", padrao: 14119.73, oficial: false, retpFator: 0 },
  { val: "papilo_pr_ix", text: "Papiloscopista Policial PCPR — Nível IX", padrao: 15392.94, oficial: false, retpFator: 0 },
  { val: "papilo_pr_x", text: "Papiloscopista Policial PCPR — Nível X", padrao: 17113.10, oficial: false, retpFator: 0 },
  { val: "papilo_pr_xi", text: "Papiloscopista Policial PCPR — Nível XI", padrao: 18513.49, oficial: false, retpFator: 0 }
];

const CARGOS_PMRS = [
  // PMRS / Brigada Militar do Rio Grande do Sul — relação oficial de remuneração RHE, competência 11/2025, com linhas inicial/final por posto/graduação.
  { val: "cel_rs_ini", text: "CEL PM — Coronel PMRS (remuneração inicial)", padrao: 19911.80, oficial: true, retpFator: 0 },
  { val: "cel_rs_fin", text: "CEL PM — Coronel PMRS (remuneração final)", padrao: 36836.83, oficial: true, retpFator: 0 },
  { val: "tc_rs_ini", text: "TEN CEL PM — Tenente-Coronel PMRS (remuneração inicial)", padrao: 17920.65, oficial: true, retpFator: 0 },
  { val: "tc_rs_fin", text: "TEN CEL PM — Tenente-Coronel PMRS (remuneração final)", padrao: 33153.20, oficial: true, retpFator: 0 },
  { val: "maj_rs_ini", text: "MAJ PM — Major PMRS (remuneração inicial)", padrao: 16128.56, oficial: true, retpFator: 0 },
  { val: "maj_rs_fin", text: "MAJ PM — Major PMRS (remuneração final)", padrao: 29837.83, oficial: true, retpFator: 0 },
  { val: "cap_rs_ini", text: "CAP PM — Capitão PMRS (remuneração inicial)", padrao: 14515.71, oficial: true, retpFator: 0 },
  { val: "cap_rs_fin", text: "CAP PM — Capitão PMRS (remuneração final)", padrao: 26854.06, oficial: true, retpFator: 0 },
  { val: "cap_qoem_rs_edital", text: "CAP PM — Capitão PMRS / QOEM (referência edital 2025)", padrao: 21513.44, oficial: true, retpFator: 0 },
  { val: "alof_rs", text: "AL OF PM — Aluno-Oficial PMRS / bolsa CSPM", padrao: 10756.72, oficial: false, retpFator: 0 },
  { val: "ten1_rs_ini", text: "1º TEN PM — 1º Tenente PMRS (remuneração inicial)", padrao: 8960.29, oficial: true, retpFator: 0 },
  { val: "ten1_rs_fin", text: "1º TEN PM — 1º Tenente PMRS (remuneração final)", padrao: 16576.54, oficial: true, retpFator: 0 },
  { val: "sgt1_rs_ini", text: "1º SGT PM — 1º Sargento PMRS (remuneração inicial)", padrao: 7168.20, oficial: true, retpFator: 0 },
  { val: "sgt1_rs_fin", text: "1º SGT PM — 1º Sargento PMRS (remuneração final)", padrao: 13261.17, oficial: true, retpFator: 0 },
  { val: "sgt2_rs_ini", text: "2º SGT PM — 2º Sargento PMRS (remuneração inicial)", padrao: 6769.98, oficial: true, retpFator: 0 },
  { val: "sgt2_rs_fin", text: "2º SGT PM — 2º Sargento PMRS (remuneração final)", padrao: 12524.47, oficial: true, retpFator: 0 },
  { val: "sgt3_rs_ini", text: "3º SGT PM — 3º Sargento PMRS (remuneração inicial)", padrao: 6172.64, oficial: true, retpFator: 0 },
  { val: "sgt3_rs_fin", text: "3º SGT PM — 3º Sargento PMRS (remuneração final)", padrao: 11419.39, oficial: true, retpFator: 0 },
  { val: "sd_rs_ini", text: "SD PM — Soldado PMRS (remuneração inicial RHE)", padrao: 5376.20, oficial: true, selected: true, retpFator: 0 },
  { val: "sd_rs_fin", text: "SD PM — Soldado PMRS (remuneração final RHE)", padrao: 9945.98, oficial: true, retpFator: 0 },
  { val: "sd1_rs_edital", text: "SD 1ª CL — Soldado PMRS (referência edital 2025)", padrao: 5944.85, oficial: true, retpFator: 0 }
];

const CARGOS_PCRS = [
  // PCRS — cargos e evolução por classe com base em editais 2025, relação oficial RHE 11/2025 e tabelas de carreira divulgadas para a Lei Estadual RS nº 16.165/2024.
  { val: "del_rs_1", text: "Delegado de Polícia PCRS — 1ª Classe", padrao: 23334.43, oficial: true, delegado: true, retpFator: 0 },
  { val: "del_rs_2", text: "Delegado de Polícia PCRS — 2ª Classe", padrao: 25927.43, oficial: true, delegado: true, retpFator: 0 },
  { val: "del_rs_3", text: "Delegado de Polícia PCRS — 3ª Classe", padrao: 28808.27, oficial: true, delegado: true, retpFator: 0 },
  { val: "del_rs_4", text: "Delegado de Polícia PCRS — 4ª Classe", padrao: 32009.35, oficial: true, delegado: true, retpFator: 0 },
  { val: "esc_rs_1", text: "Escrivão de Polícia PCRS — 1ª Classe", padrao: 7299.54, oficial: true, selected: true, retpFator: 0 },
  { val: "esc_rs_2", text: "Escrivão de Polícia PCRS — 2ª Classe", padrao: 10617.47, oficial: true, retpFator: 0 },
  { val: "esc_rs_3", text: "Escrivão de Polícia PCRS — 3ª Classe", padrao: 13271.83, oficial: true, retpFator: 0 },
  { val: "esc_rs_4", text: "Escrivão de Polícia PCRS — 4ª Classe", padrao: 15926.26, oficial: true, retpFator: 0 },
  { val: "insp_rs_1", text: "Inspetor de Polícia PCRS — 1ª Classe", padrao: 7299.54, oficial: true, retpFator: 0 },
  { val: "insp_rs_2", text: "Inspetor de Polícia PCRS — 2ª Classe", padrao: 10617.47, oficial: true, retpFator: 0 },
  { val: "insp_rs_3", text: "Inspetor de Polícia PCRS — 3ª Classe", padrao: 13271.83, oficial: true, retpFator: 0 },
  { val: "insp_rs_4", text: "Inspetor de Polícia PCRS — 4ª Classe", padrao: 15926.26, oficial: true, retpFator: 0 },
  { val: "comissario_rs", text: "Comissário de Polícia PCRS — topo da carreira", padrao: 19907.84, oficial: true, retpFator: 0 }
];

const CARGOS_PMSC = [
  // PMSC — valores calculados a partir da LC SC 765/2020, reajustes da LC SC 776/2021 e reajuste total da LC SC 872/2025. Soldado unificado pela LC SC 880/2025.
  { val: "cel_sc", text: "CEL PM — Coronel PMSC", padrao: 39623.58, oficial: true, retpFator: 0 },
  { val: "tc_sc", text: "TEN CEL PM — Tenente-Coronel PMSC", padrao: 35661.46, oficial: true, retpFator: 0 },
  { val: "maj_sc", text: "MAJ PM — Major PMSC", padrao: 31699.35, oficial: true, retpFator: 0 },
  { val: "cap_sc", text: "CAP PM — Capitão PMSC", padrao: 27737.23, oficial: true, retpFator: 0 },
  { val: "ten1_sc", text: "1º TEN PM — 1º Tenente PMSC", padrao: 25359.48, oficial: true, retpFator: 0 },
  { val: "ten2_sc", text: "2º TEN PM — 2º Tenente PMSC", padrao: 22585.63, oficial: true, retpFator: 0 },
  { val: "asp_sc", text: "ASP OF PM — Aspirante a Oficial PMSC", padrao: 19811.79, oficial: true, retpFator: 0 },
  { val: "cad_sc", text: "AL OF PM / Cadete — referência equivalente a Aspirante", padrao: 19811.79, oficial: true, retpFator: 0 },
  { val: "subten_sc", text: "SUBTEN PM — Subtenente PMSC", padrao: 19440.00, oficial: true, retpFator: 0 },
  { val: "sgt1_sc", text: "1º SGT PM — 1º Sargento PMSC", padrao: 15181.42, oficial: true, retpFator: 0 },
  { val: "sgt2_sc", text: "2º SGT PM — 2º Sargento PMSC", padrao: 12904.51, oficial: true, retpFator: 0 },
  { val: "sgt3_sc", text: "3º SGT PM — 3º Sargento PMSC", padrao: 10969.02, oficial: true, retpFator: 0 },
  { val: "cabo_sc", text: "CABO PM — Cabo PMSC", padrao: 9720.00, oficial: true, retpFator: 0 },
  { val: "sd_sc", text: "SD PM — Soldado PMSC", padrao: 8505.00, oficial: true, selected: true, retpFator: 0 }
];

const CARGOS_PCSC = [
  // PCSC — valores calculados a partir da LC SC 765/2020, reajustes da LC SC 776/2021 e reajuste total da LC SC 872/2025; Agente/Escrivão conferidos pelos editais PCSC 2025.
  { val: "del_sc_ee", text: "Delegado de Polícia PCSC — Entrância Especial", padrao: 39623.58, oficial: true, delegado: true, retpFator: 0 },
  { val: "del_sc_final", text: "Delegado de Polícia PCSC — Entrância Final", padrao: 35661.46, oficial: true, delegado: true, retpFator: 0 },
  { val: "del_sc_inicial", text: "Delegado de Polícia PCSC — Entrância Inicial", padrao: 31699.35, oficial: true, delegado: true, retpFator: 0 },
  { val: "del_sc_sub", text: "Delegado de Polícia PCSC — Substituto", padrao: 27737.23, oficial: true, delegado: true, retpFator: 0 },
  { val: "agente_sc_i", text: "Agente de Polícia Civil PCSC — Classe I", padrao: 7290.00, oficial: true, selected: true, retpFator: 0 },
  { val: "agente_sc_ii", text: "Agente de Polícia Civil PCSC — Classe II", padrao: 7897.50, oficial: true, retpFator: 0 },
  { val: "agente_sc_iii", text: "Agente de Polícia Civil PCSC — Classe III", padrao: 8505.00, oficial: true, retpFator: 0 },
  { val: "agente_sc_iv", text: "Agente de Polícia Civil PCSC — Classe IV", padrao: 9720.00, oficial: true, retpFator: 0 },
  { val: "agente_sc_v", text: "Agente de Polícia Civil PCSC — Classe V", padrao: 10969.02, oficial: true, retpFator: 0 },
  { val: "agente_sc_vi", text: "Agente de Polícia Civil PCSC — Classe VI", padrao: 12904.51, oficial: true, retpFator: 0 },
  { val: "agente_sc_vii", text: "Agente de Polícia Civil PCSC — Classe VII", padrao: 15181.42, oficial: true, retpFator: 0 },
  { val: "agente_sc_viii", text: "Agente de Polícia Civil PCSC — Classe VIII", padrao: 19440.00, oficial: true, retpFator: 0 },
  { val: "esc_sc_iv", text: "Escrivão de Polícia Civil PCSC — Classe IV", padrao: 9720.00, oficial: true, retpFator: 0 },
  { val: "esc_sc_v", text: "Escrivão de Polícia Civil PCSC — Classe V", padrao: 10969.02, oficial: true, retpFator: 0 },
  { val: "esc_sc_vi", text: "Escrivão de Polícia Civil PCSC — Classe VI", padrao: 12904.51, oficial: true, retpFator: 0 },
  { val: "esc_sc_vii", text: "Escrivão de Polícia Civil PCSC — Classe VII", padrao: 15181.42, oficial: true, retpFator: 0 },
  { val: "esc_sc_viii", text: "Escrivão de Polícia Civil PCSC — Classe VIII", padrao: 19440.00, oficial: true, retpFator: 0 },
  { val: "psico_sc_vi", text: "Psicólogo Policial Civil PCSC — Classe VI", padrao: 12904.51, oficial: true, retpFator: 0 },
  { val: "psico_sc_vii", text: "Psicólogo Policial Civil PCSC — Classe VII", padrao: 15181.42, oficial: true, retpFator: 0 },
  { val: "psico_sc_viii", text: "Psicólogo Policial Civil PCSC — Classe VIII", padrao: 19440.00, oficial: true, retpFator: 0 }
];

const CARGOS_PMES = [
  // PMES — Polícia Militar do Espírito Santo. Subsídio por posto/graduação em referências; valores de referência da tabela PM/CBM a partir de 01/12/2025 e edital CFO/2024 retificado.
  { val: "cel_es_ref1", text: "CEL PM — Coronel PMES — Referência 1", padrao: 25197.24, oficial: true, retpFator: 0 },
  { val: "cel_es_ref15", text: "CEL PM — Coronel PMES — Referência 15", padrao: 33247.22, oficial: true, retpFator: 0 },
  { val: "tc_es_ref1", text: "TEN CEL PM — Tenente-Coronel PMES — Referência 1", padrao: 22906.55, oficial: true, retpFator: 0 },
  { val: "tc_es_ref15", text: "TEN CEL PM — Tenente-Coronel PMES — Referência 15", padrao: 30224.76, oficial: true, retpFator: 0 },
  { val: "maj_es_ref1", text: "MAJ PM — Major PMES — Referência 1", padrao: 19088.81, oficial: true, retpFator: 0 },
  { val: "maj_es_ref15", text: "MAJ PM — Major PMES — Referência 15", padrao: 25187.30, oficial: true, retpFator: 0 },
  { val: "cap_es_ref1", text: "CAP PM — Capitão PMES — Referência 1", padrao: 15519.36, oficial: true, retpFator: 0 },
  { val: "cap_es_ref15", text: "CAP PM — Capitão PMES — Referência 15", padrao: 20477.47, oficial: true, retpFator: 0 },
  { val: "ten1_es_ref1", text: "1º TEN PM — 1º Tenente PMES — Referência 1", padrao: 13364.21, oficial: true, retpFator: 0 },
  { val: "ten1_es_ref15", text: "1º TEN PM — 1º Tenente PMES — Referência 15", padrao: 17633.78, oficial: true, retpFator: 0 },
  { val: "ten2_es_ref1", text: "2º TEN PM — 2º Tenente PMES — Referência 1", padrao: 12452.99, oficial: true, retpFator: 0 },
  { val: "ten2_es_ref15", text: "2º TEN PM — 2º Tenente PMES — Referência 15", padrao: 16431.48, oficial: true, retpFator: 0 },
  { val: "asp_es_ref1", text: "ASP OF PM — Aspirante a Oficial PMES — Referência 1", padrao: 10630.61, oficial: true, retpFator: 0 },
  { val: "asp_es_ref15", text: "ASP OF PM — Aspirante a Oficial PMES — Referência 15", padrao: 14026.88, oficial: true, retpFator: 0 },
  { val: "subten_es_ref1", text: "SUBTEN PM — Subtenente PMES — Referência 1", padrao: 10326.86, oficial: true, retpFator: 0 },
  { val: "subten_es_ref15", text: "SUBTEN PM — Subtenente PMES — Referência 15", padrao: 13626.12, oficial: true, retpFator: 0 },
  { val: "sgt1_es_ref1", text: "1º SGT PM — 1º Sargento PMES — Referência 1", padrao: 9719.42, oficial: true, retpFator: 0 },
  { val: "sgt1_es_ref15", text: "1º SGT PM — 1º Sargento PMES — Referência 15", padrao: 12824.58, oficial: true, retpFator: 0 },
  { val: "sgt2_es_ref1", text: "2º SGT PM — 2º Sargento PMES — Referência 1", padrao: 8808.23, oficial: true, retpFator: 0 },
  { val: "sgt2_es_ref15", text: "2º SGT PM — 2º Sargento PMES — Referência 15", padrao: 11622.30, oficial: true, retpFator: 0 },
  { val: "sgt3_es_ref1", text: "3º SGT PM — 3º Sargento PMES — Referência 1", padrao: 7897.06, oficial: true, retpFator: 0 },
  { val: "sgt3_es_ref15", text: "3º SGT PM — 3º Sargento PMES — Referência 15", padrao: 10419.99, oficial: true, retpFator: 0 },
  { val: "cabo_es_ref1", text: "CABO PM — Cabo PMES — Referência 1", padrao: 6378.37, oficial: true, retpFator: 0 },
  { val: "cabo_es_ref15", text: "CABO PM — Cabo PMES — Referência 15", padrao: 8416.16, oficial: true, retpFator: 0 },
  { val: "sd_es_ref1", text: "SD PM — Soldado PMES — Referência 1", padrao: 5741.46, oficial: true, selected: true, retpFator: 0 },
  { val: "sd_es_ref15", text: "SD PM — Soldado PMES — Referência 15", padrao: 7575.15, oficial: true, retpFator: 0 },
  { val: "alof_es_1", text: "AL OF PM — Aluno-Oficial PMES — 1º ano CFO 2024 retificado", padrao: 4536.14, oficial: true, retpFator: 0 },
  { val: "alof_es_2", text: "AL OF PM — Aluno-Oficial PMES — 2º ano CFO 2024 retificado", padrao: 5410.85, oficial: true, retpFator: 0 },
  { val: "alof_es_3", text: "AL OF PM — Aluno-Oficial PMES — 3º ano CFO 2024 retificado", padrao: 5848.19, oficial: true, retpFator: 0 },
  { val: "asp_es_edital", text: "ASP OF PM — Aspirante a Oficial PMES — referência edital CFO 2024 retificado", padrao: 10381.57, oficial: true, retpFator: 0 }
];

const CARGOS_PCES = [
  // PCES — Polícia Civil do Espírito Santo. OIP criado pela LC ES 1.093/2024; Delegado por tabela própria; perícia oficial sinalizada como PCIES após segregação institucional.
  { val: "del_es_esp_1", text: "Delegado de Polícia PCES — Categoria Especial — Ref. 1", padrao: 24486.24, oficial: true, delegado: true, retpFator: 0 },
  { val: "del_es_esp_15", text: "Delegado de Polícia PCES — Categoria Especial — Ref. 15", padrao: 32309.07, oficial: true, delegado: true, retpFator: 0 },
  { val: "del_es_1_1", text: "Delegado de Polícia PCES — 1ª Categoria — Ref. 1", padrao: 21669.23, oficial: true, delegado: true, retpFator: 0 },
  { val: "del_es_1_15", text: "Delegado de Polícia PCES — 1ª Categoria — Ref. 15", padrao: 28592.10, oficial: true, delegado: true, retpFator: 0 },
  { val: "del_es_2_1", text: "Delegado de Polícia PCES — 2ª Categoria — Ref. 1", padrao: 18680.38, oficial: true, delegado: true, retpFator: 0 },
  { val: "del_es_2_15", text: "Delegado de Polícia PCES — 2ª Categoria — Ref. 15", padrao: 24648.36, oficial: true, delegado: true, retpFator: 0 },
  { val: "del_es_3_1", text: "Delegado de Polícia PCES — 3ª Categoria — Ref. 1", padrao: 16829.16, oficial: true, delegado: true, retpFator: 0 },
  { val: "del_es_3_15", text: "Delegado de Polícia PCES — 3ª Categoria — Ref. 15", padrao: 22205.73, oficial: true, delegado: true, retpFator: 0 },
  { val: "oip_es_esp_1", text: "Oficial Investigador de Polícia PCES — Categoria Especial — Ref. 1", padrao: 12925.14, oficial: true, retpFator: 0 },
  { val: "oip_es_esp_15", text: "Oficial Investigador de Polícia PCES — Categoria Especial — Ref. 15", padrao: 17054.45, oficial: true, retpFator: 0 },
  { val: "oip_es_1_1", text: "Oficial Investigador de Polícia PCES — 1ª Categoria — Ref. 1", padrao: 11464.04, oficial: true, retpFator: 0 },
  { val: "oip_es_1_15", text: "Oficial Investigador de Polícia PCES — 1ª Categoria — Ref. 15", padrao: 14829.95, oficial: true, retpFator: 0 },
  { val: "oip_es_2_1", text: "Oficial Investigador de Polícia PCES — 2ª Categoria — Ref. 1", padrao: 9968.73, oficial: true, retpFator: 0 },
  { val: "oip_es_2_15", text: "Oficial Investigador de Polícia PCES — 2ª Categoria — Ref. 15", padrao: 12895.61, oficial: true, retpFator: 0 },
  { val: "oip_es_3_1", text: "Oficial Investigador de Polícia PCES — 3ª Categoria — Ref. 1", padrao: 8668.46, oficial: true, selected: true, retpFator: 0 },
  { val: "oip_es_3_15", text: "Oficial Investigador de Polícia PCES — 3ª Categoria — Ref. 15", padrao: 11213.57, oficial: true, retpFator: 0 },
  { val: "perito_es_esp_1", text: "Perito Oficial Criminal / Médico-Legista — PCIES/Perícia Oficial — Categoria Especial — Ref. 1", padrao: 14857.44, oficial: true, perito: true, retpFator: 0 },
  { val: "perito_es_esp_15", text: "Perito Oficial Criminal / Médico-Legista — PCIES/Perícia Oficial — Categoria Especial — Ref. 15", padrao: 19604.07, oficial: true, perito: true, retpFator: 0 },
  { val: "perito_es_1_1", text: "Perito Oficial Criminal / Médico-Legista — PCIES/Perícia Oficial — 1ª Categoria — Ref. 1", padrao: 12919.51, oficial: true, perito: true, retpFator: 0 },
  { val: "perito_es_1_15", text: "Perito Oficial Criminal / Médico-Legista — PCIES/Perícia Oficial — 1ª Categoria — Ref. 15", padrao: 17047.02, oficial: true, perito: true, retpFator: 0 },
  { val: "perito_es_2_1", text: "Perito Oficial Criminal / Médico-Legista — PCIES/Perícia Oficial — 2ª Categoria — Ref. 1", padrao: 11234.36, oficial: true, perito: true, retpFator: 0 },
  { val: "perito_es_2_15", text: "Perito Oficial Criminal / Médico-Legista — PCIES/Perícia Oficial — 2ª Categoria — Ref. 15", padrao: 14823.49, oficial: true, perito: true, retpFator: 0 },
  { val: "perito_es_3_1", text: "Perito Oficial Criminal / Médico-Legista — PCIES/Perícia Oficial — 3ª Categoria — Ref. 1", padrao: 9769.00, oficial: true, perito: true, retpFator: 0 },
  { val: "perito_es_3_15", text: "Perito Oficial Criminal / Médico-Legista — PCIES/Perícia Oficial — 3ª Categoria — Ref. 15", padrao: 12889.99, oficial: true, perito: true, retpFator: 0 },
  { val: "assist_pericia_es_3_1", text: "Assistente de Perícia — PCIES/Perícia Oficial — 3ª Categoria — Ref. 1", padrao: 3803.80, oficial: true, retpFator: 0 },
  { val: "assist_pericia_es_esp_15", text: "Assistente de Perícia — PCIES/Perícia Oficial — Categoria Especial — Ref. 15", padrao: 7633.32, oficial: true, retpFator: 0 }
];



const CARGOS_PMMS = [
  // PMMS — Mato Grosso do Sul. Tabela enriquecida com postos/graduações e níveis constantes na planilha salarial militar de maio/2025; linhas de formação mantidas como referência histórica de edital quando aplicável.
  { val: "sd_aluno_ms_edital", text: "AL SD PM — Aluno-Soldado PMMS — referência de curso/formação do edital anterior", padrao: 2252.25, oficial: true, retpFator: 0, badge: "Edital anterior", criterio: "Referência de remuneração durante formação informada em edital anterior da PMMS; usar apenas como parâmetro histórico e conferir edital vigente.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "sd_ms_nivel_i", text: "SD PM — Soldado PMMS — Nível I — tabela militar MS 05/2025", padrao: 5727.10, oficial: true, selected: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "sd_ms_nivel_ii", text: "SD PM — Soldado PMMS — Nível II — tabela militar MS 05/2025", padrao: 6099.36, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "sd_ms_nivel_iii", text: "SD PM — Soldado PMMS — Nível III — tabela militar MS 05/2025", padrao: 6285.49, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "sd_ms_nivel_iv", text: "SD PM — Soldado PMMS — Nível IV — tabela militar MS 05/2025", padrao: 6471.62, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "sd_ms_nivel_v", text: "SD PM — Soldado PMMS — Nível V — tabela militar MS 05/2025", padrao: 6657.76, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "sd_ms_nivel_vi", text: "SD PM — Soldado PMMS — Nível VI — tabela militar MS 05/2025", padrao: 6843.88, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "sd_ms_nivel_vii", text: "SD PM — Soldado PMMS — Nível VII — tabela militar MS 05/2025", padrao: 6987.06, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "cabo_ms_nivel_i", text: "CABO PM — Cabo PMMS — Nível I — tabela militar MS 05/2025", padrao: 6872.52, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "cabo_ms_nivel_ii", text: "CABO PM — Cabo PMMS — Nível II — tabela militar MS 05/2025", padrao: 7319.23, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "cabo_ms_nivel_iii", text: "CABO PM — Cabo PMMS — Nível III — tabela militar MS 05/2025", padrao: 7542.58, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "cabo_ms_nivel_iv", text: "CABO PM — Cabo PMMS — Nível IV — tabela militar MS 05/2025", padrao: 7765.94, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "cabo_ms_nivel_v", text: "CABO PM — Cabo PMMS — Nível V — tabela militar MS 05/2025", padrao: 7989.30, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "cabo_ms_nivel_vi", text: "CABO PM — Cabo PMMS — Nível VI — tabela militar MS 05/2025", padrao: 8212.66, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "cabo_ms_nivel_vii", text: "CABO PM — Cabo PMMS — Nível VII — tabela militar MS 05/2025", padrao: 8384.47, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "sgt3_ms_nivel_i", text: "3º SGT PM — 3º Sargento PMMS — Nível I — tabela militar MS 05/2025", padrao: 8247.02, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "sgt3_ms_nivel_ii", text: "3º SGT PM — 3º Sargento PMMS — Nível II — tabela militar MS 05/2025", padrao: 8783.07, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "sgt3_ms_nivel_iii", text: "3º SGT PM — 3º Sargento PMMS — Nível III — tabela militar MS 05/2025", padrao: 9051.10, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "sgt3_ms_nivel_iv", text: "3º SGT PM — 3º Sargento PMMS — Nível IV — tabela militar MS 05/2025", padrao: 9319.13, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "sgt3_ms_nivel_v", text: "3º SGT PM — 3º Sargento PMMS — Nível V — tabela militar MS 05/2025", padrao: 9587.16, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "sgt3_ms_nivel_vi", text: "3º SGT PM — 3º Sargento PMMS — Nível VI — tabela militar MS 05/2025", padrao: 9855.18, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "sgt3_ms_nivel_vii", text: "3º SGT PM — 3º Sargento PMMS — Nível VII — tabela militar MS 05/2025", padrao: 10061.37, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "sgt2_ms_nivel_i", text: "2º SGT PM — 2º Sargento PMMS — Nível I — tabela militar MS 05/2025", padrao: 9484.07, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "sgt2_ms_nivel_ii", text: "2º SGT PM — 2º Sargento PMMS — Nível II — tabela militar MS 05/2025", padrao: 10100.53, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "sgt2_ms_nivel_iii", text: "2º SGT PM — 2º Sargento PMMS — Nível III — tabela militar MS 05/2025", padrao: 10408.77, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "sgt2_ms_nivel_iv", text: "2º SGT PM — 2º Sargento PMMS — Nível IV — tabela militar MS 05/2025", padrao: 10716.99, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "sgt2_ms_nivel_v", text: "2º SGT PM — 2º Sargento PMMS — Nível V — tabela militar MS 05/2025", padrao: 11025.23, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "sgt2_ms_nivel_vi", text: "2º SGT PM — 2º Sargento PMMS — Nível VI — tabela militar MS 05/2025", padrao: 11333.46, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "sgt2_ms_nivel_vii", text: "2º SGT PM — 2º Sargento PMMS — Nível VII — tabela militar MS 05/2025", padrao: 11570.56, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "sgt1_ms_nivel_i", text: "1º SGT PM — 1º Sargento PMMS — Nível I — tabela militar MS 05/2025", padrao: 11380.88, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "sgt1_ms_nivel_ii", text: "1º SGT PM — 1º Sargento PMMS — Nível II — tabela militar MS 05/2025", padrao: 12120.63, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "sgt1_ms_nivel_iii", text: "1º SGT PM — 1º Sargento PMMS — Nível III — tabela militar MS 05/2025", padrao: 12490.51, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "sgt1_ms_nivel_iv", text: "1º SGT PM — 1º Sargento PMMS — Nível IV — tabela militar MS 05/2025", padrao: 12860.38, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "sgt1_ms_nivel_v", text: "1º SGT PM — 1º Sargento PMMS — Nível V — tabela militar MS 05/2025", padrao: 13230.27, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "sgt1_ms_nivel_vi", text: "1º SGT PM — 1º Sargento PMMS — Nível VI — tabela militar MS 05/2025", padrao: 13600.14, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "sgt1_ms_nivel_vii", text: "1º SGT PM — 1º Sargento PMMS — Nível VII — tabela militar MS 05/2025", padrao: 13884.67, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "subten_ms_nivel_i", text: "SUBTEN PM — Subtenente PMMS — Nível I — tabela militar MS 05/2025", padrao: 13088.01, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "subten_ms_nivel_ii", text: "SUBTEN PM — Subtenente PMMS — Nível II — tabela militar MS 05/2025", padrao: 13938.72, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "subten_ms_nivel_iii", text: "SUBTEN PM — Subtenente PMMS — Nível III — tabela militar MS 05/2025", padrao: 14364.09, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "subten_ms_nivel_iv", text: "SUBTEN PM — Subtenente PMMS — Nível IV — tabela militar MS 05/2025", padrao: 14789.44, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "subten_ms_nivel_v", text: "SUBTEN PM — Subtenente PMMS — Nível V — tabela militar MS 05/2025", padrao: 15214.80, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "subten_ms_nivel_vi", text: "SUBTEN PM — Subtenente PMMS — Nível VI — tabela militar MS 05/2025", padrao: 15640.17, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "subten_ms_nivel_vii", text: "SUBTEN PM — Subtenente PMMS — Nível VII — tabela militar MS 05/2025", padrao: 15967.37, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "ten2_ms_nivel_i", text: "2º TEN PM — 2º Tenente PMMS — Nível I — tabela militar MS 05/2025", padrao: 13807.85, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "ten2_ms_nivel_ii", text: "2º TEN PM — 2º Tenente PMMS — Nível II — tabela militar MS 05/2025", padrao: 14705.35, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "ten2_ms_nivel_iii", text: "2º TEN PM — 2º Tenente PMMS — Nível III — tabela militar MS 05/2025", padrao: 15154.11, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "ten2_ms_nivel_iv", text: "2º TEN PM — 2º Tenente PMMS — Nível IV — tabela militar MS 05/2025", padrao: 15602.86, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "ten2_ms_nivel_v", text: "2º TEN PM — 2º Tenente PMMS — Nível V — tabela militar MS 05/2025", padrao: 16051.61, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "ten2_ms_nivel_vi", text: "2º TEN PM — 2º Tenente PMMS — Nível VI — tabela militar MS 05/2025", padrao: 16500.37, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "ten2_ms_nivel_vii", text: "2º TEN PM — 2º Tenente PMMS — Nível VII — tabela militar MS 05/2025", padrao: 16845.57, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "ten1_ms_nivel_i", text: "1º TEN PM — 1º Tenente PMMS — Nível I — tabela militar MS 05/2025", padrao: 16086.14, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "ten1_ms_nivel_ii", text: "1º TEN PM — 1º Tenente PMMS — Nível II — tabela militar MS 05/2025", padrao: 17131.72, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "ten1_ms_nivel_iii", text: "1º TEN PM — 1º Tenente PMMS — Nível III — tabela militar MS 05/2025", padrao: 17654.52, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "ten1_ms_nivel_iv", text: "1º TEN PM — 1º Tenente PMMS — Nível IV — tabela militar MS 05/2025", padrao: 18177.32, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "ten1_ms_nivel_v", text: "1º TEN PM — 1º Tenente PMMS — Nível V — tabela militar MS 05/2025", padrao: 18700.12, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "ten1_ms_nivel_vi", text: "1º TEN PM — 1º Tenente PMMS — Nível VI — tabela militar MS 05/2025", padrao: 19222.92, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "ten1_ms_nivel_vii", text: "1º TEN PM — 1º Tenente PMMS — Nível VII — tabela militar MS 05/2025", padrao: 19625.08, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "cap_ms_nivel_i", text: "CAP PM — Capitão PMMS — Nível I — tabela militar MS 05/2025", padrao: 19303.36, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "cap_ms_nivel_ii", text: "CAP PM — Capitão PMMS — Nível II — tabela militar MS 05/2025", padrao: 20558.07, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "cap_ms_nivel_iii", text: "CAP PM — Capitão PMMS — Nível III — tabela militar MS 05/2025", padrao: 21185.43, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "cap_ms_nivel_iv", text: "CAP PM — Capitão PMMS — Nível IV — tabela militar MS 05/2025", padrao: 21812.79, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "cap_ms_nivel_v", text: "CAP PM — Capitão PMMS — Nível V — tabela militar MS 05/2025", padrao: 22440.14, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "cap_ms_nivel_vi", text: "CAP PM — Capitão PMMS — Nível VI — tabela militar MS 05/2025", padrao: 23067.51, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "cap_ms_nivel_vii", text: "CAP PM — Capitão PMMS — Nível VII — tabela militar MS 05/2025", padrao: 23550.09, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "maj_ms_nivel_iii", text: "MAJ PM — Major PMMS — Nível III — tabela militar MS 05/2025", padrao: 26587.71, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "maj_ms_nivel_iv", text: "MAJ PM — Major PMMS — Nível IV — tabela militar MS 05/2025", padrao: 27375.05, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "maj_ms_nivel_v", text: "MAJ PM — Major PMMS — Nível V — tabela militar MS 05/2025", padrao: 28162.39, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "maj_ms_nivel_vi", text: "MAJ PM — Major PMMS — Nível VI — tabela militar MS 05/2025", padrao: 28949.70, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "maj_ms_nivel_vii", text: "MAJ PM — Major PMMS — Nível VII — tabela militar MS 05/2025", padrao: 29555.35, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "tencel_ms_nivel_iii", text: "TEN CEL PM — Tenente-Coronel PMMS — Nível III — tabela militar MS 05/2025", padrao: 30575.86, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "tencel_ms_nivel_iv", text: "TEN CEL PM — Tenente-Coronel PMMS — Nível IV — tabela militar MS 05/2025", padrao: 31481.30, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "tencel_ms_nivel_v", text: "TEN CEL PM — Tenente-Coronel PMMS — Nível V — tabela militar MS 05/2025", padrao: 32386.74, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "tencel_ms_nivel_vi", text: "TEN CEL PM — Tenente-Coronel PMMS — Nível VI — tabela militar MS 05/2025", padrao: 33292.16, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "tencel_ms_nivel_vii", text: "TEN CEL PM — Tenente-Coronel PMMS — Nível VII — tabela militar MS 05/2025", padrao: 33988.64, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "cel_ms_nivel_iv", text: "CEL PM — Coronel PMMS — Nível IV — tabela militar MS 05/2025", padrao: 36518.31, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "cel_ms_nivel_v", text: "CEL PM — Coronel PMMS — Nível V — tabela militar MS 05/2025", padrao: 37568.61, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "cel_ms_nivel_vi", text: "CEL PM — Coronel PMMS — Nível VI — tabela militar MS 05/2025", padrao: 38618.91, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" },
  { val: "cel_ms_nivel_vii", text: "CEL PM — Coronel PMMS — Nível VII — tabela militar MS 05/2025", padrao: 39426.84, oficial: true, retpFator: 0, badge: "Tabela 05/2025", criterio: "Tabela salarial dos servidores militares de MS com índice de 5,06% aplicado a partir de maio/2025, organizada por posto/graduação e nível. Conferir DOE/MS e contracheque para situação individual.", benefDesc: "Não inclui auxílio, etapa alimentação, fardamento, indenizações, serviço extraordinário, adicionais por função/lotação, diárias ou rubricas pessoais; essas parcelas dependem de lei, escala, ato administrativo e contracheque.", fonteKey: "pmms" }
];

const CARGOS_PCMS = [
  // PCMS — Mato Grosso do Sul. Tabela enriquecida com APJ/2025 e faixas legais por carreira: APJ/Agente Científica, Perito Oficial Forense, Perito Papiloscopista e Delegado.
  { val: "investigador_ms_apj_2025", text: "Investigador de Polícia Judiciária PCMS — APJ — edital 2025 — 40h", padrao: 6569.53, oficial: true, selected: true, retpFator: 0, badge: "Edital APJ/2025", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_apj2025" },
  { val: "escrivao_ms_apj_2025", text: "Escrivão de Polícia Judiciária PCMS — APJ — edital 2025 — 40h", padrao: 6569.53, oficial: true, retpFator: 0, badge: "Edital APJ/2025", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_apj2025" },
  { val: "investigador_ms_especial_7_nivel_i", text: "Investigador de Polícia Judiciária PCMS — Especial Ref. 7 — Nível I — subsídio 2025", padrao: 11077.74, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "escrivao_ms_especial_7_nivel_i", text: "Escrivão de Polícia Judiciária PCMS — Especial Ref. 7 — Nível I — subsídio 2025", padrao: 11077.74, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "agente_cientifica_ms_especial_7_nivel_i", text: "Agente de Polícia Científica PCMS — Especial Ref. 7 — Nível I — subsídio 2025", padrao: 11077.74, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "investigador_ms_especial_7_nivel_vii", text: "Investigador de Polícia Judiciária PCMS — Especial Ref. 7 — Nível VII — subsídio 2025", padrao: 14954.94, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "escrivao_ms_especial_7_nivel_vii", text: "Escrivão de Polícia Judiciária PCMS — Especial Ref. 7 — Nível VII — subsídio 2025", padrao: 14954.94, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "agente_cientifica_ms_especial_7_nivel_vii", text: "Agente de Polícia Científica PCMS — Especial Ref. 7 — Nível VII — subsídio 2025", padrao: 14954.94, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "investigador_ms_especial_6_nivel_i", text: "Investigador de Polícia Judiciária PCMS — Especial Ref. 6 — Nível I — subsídio 2025", padrao: 10070.68, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "escrivao_ms_especial_6_nivel_i", text: "Escrivão de Polícia Judiciária PCMS — Especial Ref. 6 — Nível I — subsídio 2025", padrao: 10070.68, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "agente_cientifica_ms_especial_6_nivel_i", text: "Agente de Polícia Científica PCMS — Especial Ref. 6 — Nível I — subsídio 2025", padrao: 10070.68, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "investigador_ms_especial_6_nivel_vii", text: "Investigador de Polícia Judiciária PCMS — Especial Ref. 6 — Nível VII — subsídio 2025", padrao: 13595.41, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "escrivao_ms_especial_6_nivel_vii", text: "Escrivão de Polícia Judiciária PCMS — Especial Ref. 6 — Nível VII — subsídio 2025", padrao: 13595.41, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "agente_cientifica_ms_especial_6_nivel_vii", text: "Agente de Polícia Científica PCMS — Especial Ref. 6 — Nível VII — subsídio 2025", padrao: 13595.41, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "investigador_ms_primeira_5_nivel_i", text: "Investigador de Polícia Judiciária PCMS — Primeira Classe Ref. 5 — Nível I — subsídio 2025", padrao: 9155.17, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "escrivao_ms_primeira_5_nivel_i", text: "Escrivão de Polícia Judiciária PCMS — Primeira Classe Ref. 5 — Nível I — subsídio 2025", padrao: 9155.17, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "agente_cientifica_ms_primeira_5_nivel_i", text: "Agente de Polícia Científica PCMS — Primeira Classe Ref. 5 — Nível I — subsídio 2025", padrao: 9155.17, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "investigador_ms_primeira_5_nivel_vii", text: "Investigador de Polícia Judiciária PCMS — Primeira Classe Ref. 5 — Nível VII — subsídio 2025", padrao: 12359.47, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "escrivao_ms_primeira_5_nivel_vii", text: "Escrivão de Polícia Judiciária PCMS — Primeira Classe Ref. 5 — Nível VII — subsídio 2025", padrao: 12359.47, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "agente_cientifica_ms_primeira_5_nivel_vii", text: "Agente de Polícia Científica PCMS — Primeira Classe Ref. 5 — Nível VII — subsídio 2025", padrao: 12359.47, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "investigador_ms_primeira_4_nivel_i", text: "Investigador de Polícia Judiciária PCMS — Primeira Classe Ref. 4 — Nível I — subsídio 2025", padrao: 8322.89, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "escrivao_ms_primeira_4_nivel_i", text: "Escrivão de Polícia Judiciária PCMS — Primeira Classe Ref. 4 — Nível I — subsídio 2025", padrao: 8322.89, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "agente_cientifica_ms_primeira_4_nivel_i", text: "Agente de Polícia Científica PCMS — Primeira Classe Ref. 4 — Nível I — subsídio 2025", padrao: 8322.89, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "investigador_ms_primeira_4_nivel_vii", text: "Investigador de Polícia Judiciária PCMS — Primeira Classe Ref. 4 — Nível VII — subsídio 2025", padrao: 11235.90, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "escrivao_ms_primeira_4_nivel_vii", text: "Escrivão de Polícia Judiciária PCMS — Primeira Classe Ref. 4 — Nível VII — subsídio 2025", padrao: 11235.90, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "agente_cientifica_ms_primeira_4_nivel_vii", text: "Agente de Polícia Científica PCMS — Primeira Classe Ref. 4 — Nível VII — subsídio 2025", padrao: 11235.90, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "investigador_ms_segunda_3_nivel_i", text: "Investigador de Polícia Judiciária PCMS — Segunda Classe Ref. 3 — Nível I — subsídio 2025", padrao: 7566.27, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "escrivao_ms_segunda_3_nivel_i", text: "Escrivão de Polícia Judiciária PCMS — Segunda Classe Ref. 3 — Nível I — subsídio 2025", padrao: 7566.27, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "agente_cientifica_ms_segunda_3_nivel_i", text: "Agente de Polícia Científica PCMS — Segunda Classe Ref. 3 — Nível I — subsídio 2025", padrao: 7566.27, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "investigador_ms_segunda_3_nivel_vii", text: "Investigador de Polícia Judiciária PCMS — Segunda Classe Ref. 3 — Nível VII — subsídio 2025", padrao: 10214.46, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "escrivao_ms_segunda_3_nivel_vii", text: "Escrivão de Polícia Judiciária PCMS — Segunda Classe Ref. 3 — Nível VII — subsídio 2025", padrao: 10214.46, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "agente_cientifica_ms_segunda_3_nivel_vii", text: "Agente de Polícia Científica PCMS — Segunda Classe Ref. 3 — Nível VII — subsídio 2025", padrao: 10214.46, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "investigador_ms_segunda_2_nivel_i", text: "Investigador de Polícia Judiciária PCMS — Segunda Classe Ref. 2 — Nível I — subsídio 2025", padrao: 6878.43, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "escrivao_ms_segunda_2_nivel_i", text: "Escrivão de Polícia Judiciária PCMS — Segunda Classe Ref. 2 — Nível I — subsídio 2025", padrao: 6878.43, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "agente_cientifica_ms_segunda_2_nivel_i", text: "Agente de Polícia Científica PCMS — Segunda Classe Ref. 2 — Nível I — subsídio 2025", padrao: 6878.43, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "investigador_ms_segunda_2_nivel_vii", text: "Investigador de Polícia Judiciária PCMS — Segunda Classe Ref. 2 — Nível VII — subsídio 2025", padrao: 9285.88, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "escrivao_ms_segunda_2_nivel_vii", text: "Escrivão de Polícia Judiciária PCMS — Segunda Classe Ref. 2 — Nível VII — subsídio 2025", padrao: 9285.88, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "agente_cientifica_ms_segunda_2_nivel_vii", text: "Agente de Polícia Científica PCMS — Segunda Classe Ref. 2 — Nível VII — subsídio 2025", padrao: 9285.88, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "investigador_ms_terceira_1_nivel_i", text: "Investigador de Polícia Judiciária PCMS — Terceira Classe Ref. 1 — Nível I — subsídio 2025", padrao: 6253.12, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "escrivao_ms_terceira_1_nivel_i", text: "Escrivão de Polícia Judiciária PCMS — Terceira Classe Ref. 1 — Nível I — subsídio 2025", padrao: 6253.12, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "agente_cientifica_ms_terceira_1_nivel_i", text: "Agente de Polícia Científica PCMS — Terceira Classe Ref. 1 — Nível I — subsídio 2025", padrao: 6253.12, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "investigador_ms_terceira_1_nivel_vii", text: "Investigador de Polícia Judiciária PCMS — Terceira Classe Ref. 1 — Nível VII — subsídio 2025", padrao: 8441.71, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "escrivao_ms_terceira_1_nivel_vii", text: "Escrivão de Polícia Judiciária PCMS — Terceira Classe Ref. 1 — Nível VII — subsídio 2025", padrao: 8441.71, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "agente_cientifica_ms_terceira_1_nivel_vii", text: "Agente de Polícia Científica PCMS — Terceira Classe Ref. 1 — Nível VII — subsídio 2025", padrao: 8441.71, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "investigador_ms_dap_nivel_i", text: "Investigador de Polícia Judiciária PCMS — DAP — Nível I — subsídio 2025", padrao: 7566.27, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "escrivao_ms_dap_nivel_i", text: "Escrivão de Polícia Judiciária PCMS — DAP — Nível I — subsídio 2025", padrao: 7566.27, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "agente_cientifica_ms_dap_nivel_i", text: "Agente de Polícia Científica PCMS — DAP — Nível I — subsídio 2025", padrao: 7566.27, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "investigador_ms_dap_nivel_vii", text: "Investigador de Polícia Judiciária PCMS — DAP — Nível VII — subsídio 2025", padrao: 10214.46, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "escrivao_ms_dap_nivel_vii", text: "Escrivão de Polícia Judiciária PCMS — DAP — Nível VII — subsídio 2025", padrao: 10214.46, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "agente_cientifica_ms_dap_nivel_vii", text: "Agente de Polícia Científica PCMS — DAP — Nível VII — subsídio 2025", padrao: 10214.46, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "perito_criminal_ms_especial_7_nivel_i", text: "Perito Criminal PCMS — Especial Ref. 7 — Nível I — subsídio 2025", padrao: 18091.88, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "medico_legista_ms_especial_7_nivel_i", text: "Médico-Legista PCMS — Especial Ref. 7 — Nível I — subsídio 2025", padrao: 18091.88, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "odontolegista_ms_especial_7_nivel_i", text: "Perito Odonto-Legista PCMS — Especial Ref. 7 — Nível I — subsídio 2025", padrao: 18091.88, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "perito_criminal_ms_especial_7_nivel_vii", text: "Perito Criminal PCMS — Especial Ref. 7 — Nível VII — subsídio 2025", padrao: 24424.03, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "medico_legista_ms_especial_7_nivel_vii", text: "Médico-Legista PCMS — Especial Ref. 7 — Nível VII — subsídio 2025", padrao: 24424.03, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "odontolegista_ms_especial_7_nivel_vii", text: "Perito Odonto-Legista PCMS — Especial Ref. 7 — Nível VII — subsídio 2025", padrao: 24424.03, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "perito_criminal_ms_especial_6_nivel_i", text: "Perito Criminal PCMS — Especial Ref. 6 — Nível I — subsídio 2025", padrao: 16447.17, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "medico_legista_ms_especial_6_nivel_i", text: "Médico-Legista PCMS — Especial Ref. 6 — Nível I — subsídio 2025", padrao: 16447.17, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "odontolegista_ms_especial_6_nivel_i", text: "Perito Odonto-Legista PCMS — Especial Ref. 6 — Nível I — subsídio 2025", padrao: 16447.17, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "perito_criminal_ms_especial_6_nivel_vii", text: "Perito Criminal PCMS — Especial Ref. 6 — Nível VII — subsídio 2025", padrao: 22203.67, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "medico_legista_ms_especial_6_nivel_vii", text: "Médico-Legista PCMS — Especial Ref. 6 — Nível VII — subsídio 2025", padrao: 22203.67, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "odontolegista_ms_especial_6_nivel_vii", text: "Perito Odonto-Legista PCMS — Especial Ref. 6 — Nível VII — subsídio 2025", padrao: 22203.67, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "perito_criminal_ms_primeira_5_nivel_i", text: "Perito Criminal PCMS — Primeira Classe Ref. 5 — Nível I — subsídio 2025", padrao: 14951.98, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "medico_legista_ms_primeira_5_nivel_i", text: "Médico-Legista PCMS — Primeira Classe Ref. 5 — Nível I — subsídio 2025", padrao: 14951.98, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "odontolegista_ms_primeira_5_nivel_i", text: "Perito Odonto-Legista PCMS — Primeira Classe Ref. 5 — Nível I — subsídio 2025", padrao: 14951.98, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "perito_criminal_ms_primeira_5_nivel_vii", text: "Perito Criminal PCMS — Primeira Classe Ref. 5 — Nível VII — subsídio 2025", padrao: 20185.17, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "medico_legista_ms_primeira_5_nivel_vii", text: "Médico-Legista PCMS — Primeira Classe Ref. 5 — Nível VII — subsídio 2025", padrao: 20185.17, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "odontolegista_ms_primeira_5_nivel_vii", text: "Perito Odonto-Legista PCMS — Primeira Classe Ref. 5 — Nível VII — subsídio 2025", padrao: 20185.17, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "perito_criminal_ms_primeira_4_nivel_i", text: "Perito Criminal PCMS — Primeira Classe Ref. 4 — Nível I — subsídio 2025", padrao: 13592.71, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "medico_legista_ms_primeira_4_nivel_i", text: "Médico-Legista PCMS — Primeira Classe Ref. 4 — Nível I — subsídio 2025", padrao: 13592.71, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "odontolegista_ms_primeira_4_nivel_i", text: "Perito Odonto-Legista PCMS — Primeira Classe Ref. 4 — Nível I — subsídio 2025", padrao: 13592.71, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "perito_criminal_ms_primeira_4_nivel_vii", text: "Perito Criminal PCMS — Primeira Classe Ref. 4 — Nível VII — subsídio 2025", padrao: 18350.15, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "medico_legista_ms_primeira_4_nivel_vii", text: "Médico-Legista PCMS — Primeira Classe Ref. 4 — Nível VII — subsídio 2025", padrao: 18350.15, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "odontolegista_ms_primeira_4_nivel_vii", text: "Perito Odonto-Legista PCMS — Primeira Classe Ref. 4 — Nível VII — subsídio 2025", padrao: 18350.15, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "perito_criminal_ms_segunda_3_nivel_i", text: "Perito Criminal PCMS — Segunda Classe Ref. 3 — Nível I — subsídio 2025", padrao: 12357.01, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "medico_legista_ms_segunda_3_nivel_i", text: "Médico-Legista PCMS — Segunda Classe Ref. 3 — Nível I — subsídio 2025", padrao: 12357.01, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "odontolegista_ms_segunda_3_nivel_i", text: "Perito Odonto-Legista PCMS — Segunda Classe Ref. 3 — Nível I — subsídio 2025", padrao: 12357.01, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "perito_criminal_ms_segunda_3_nivel_vii", text: "Perito Criminal PCMS — Segunda Classe Ref. 3 — Nível VII — subsídio 2025", padrao: 16681.96, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "medico_legista_ms_segunda_3_nivel_vii", text: "Médico-Legista PCMS — Segunda Classe Ref. 3 — Nível VII — subsídio 2025", padrao: 16681.96, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "odontolegista_ms_segunda_3_nivel_vii", text: "Perito Odonto-Legista PCMS — Segunda Classe Ref. 3 — Nível VII — subsídio 2025", padrao: 16681.96, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "perito_criminal_ms_segunda_2_nivel_i", text: "Perito Criminal PCMS — Segunda Classe Ref. 2 — Nível I — subsídio 2025", padrao: 11233.65, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "medico_legista_ms_segunda_2_nivel_i", text: "Médico-Legista PCMS — Segunda Classe Ref. 2 — Nível I — subsídio 2025", padrao: 11233.65, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "odontolegista_ms_segunda_2_nivel_i", text: "Perito Odonto-Legista PCMS — Segunda Classe Ref. 2 — Nível I — subsídio 2025", padrao: 11233.65, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "perito_criminal_ms_segunda_2_nivel_vii", text: "Perito Criminal PCMS — Segunda Classe Ref. 2 — Nível VII — subsídio 2025", padrao: 15165.42, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "medico_legista_ms_segunda_2_nivel_vii", text: "Médico-Legista PCMS — Segunda Classe Ref. 2 — Nível VII — subsídio 2025", padrao: 15165.42, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "odontolegista_ms_segunda_2_nivel_vii", text: "Perito Odonto-Legista PCMS — Segunda Classe Ref. 2 — Nível VII — subsídio 2025", padrao: 15165.42, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "perito_criminal_ms_terceira_1_nivel_i", text: "Perito Criminal PCMS — Terceira Classe Ref. 1 — Nível I — subsídio 2025", padrao: 10212.41, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "medico_legista_ms_terceira_1_nivel_i", text: "Médico-Legista PCMS — Terceira Classe Ref. 1 — Nível I — subsídio 2025", padrao: 10212.41, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "odontolegista_ms_terceira_1_nivel_i", text: "Perito Odonto-Legista PCMS — Terceira Classe Ref. 1 — Nível I — subsídio 2025", padrao: 10212.41, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "perito_criminal_ms_terceira_1_nivel_vii", text: "Perito Criminal PCMS — Terceira Classe Ref. 1 — Nível VII — subsídio 2025", padrao: 13786.75, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "medico_legista_ms_terceira_1_nivel_vii", text: "Médico-Legista PCMS — Terceira Classe Ref. 1 — Nível VII — subsídio 2025", padrao: 13786.75, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "odontolegista_ms_terceira_1_nivel_vii", text: "Perito Odonto-Legista PCMS — Terceira Classe Ref. 1 — Nível VII — subsídio 2025", padrao: 13786.75, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "perito_criminal_ms_dap_nivel_i", text: "Perito Criminal PCMS — DAP — Nível I — subsídio 2025", padrao: 12357.01, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "medico_legista_ms_dap_nivel_i", text: "Médico-Legista PCMS — DAP — Nível I — subsídio 2025", padrao: 12357.01, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "odontolegista_ms_dap_nivel_i", text: "Perito Odonto-Legista PCMS — DAP — Nível I — subsídio 2025", padrao: 12357.01, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "perito_criminal_ms_dap_nivel_vii", text: "Perito Criminal PCMS — DAP — Nível VII — subsídio 2025", padrao: 16681.96, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "medico_legista_ms_dap_nivel_vii", text: "Médico-Legista PCMS — DAP — Nível VII — subsídio 2025", padrao: 16681.96, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "odontolegista_ms_dap_nivel_vii", text: "Perito Odonto-Legista PCMS — DAP — Nível VII — subsídio 2025", padrao: 16681.96, oficial: true, perito: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "papiloscopista_ms_especial_7_nivel_i", text: "Perito Papiloscopista PCMS — Especial Ref. 7 — Nível I — subsídio 2025", padrao: 11077.74, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "papiloscopista_ms_especial_7_nivel_vii", text: "Perito Papiloscopista PCMS — Especial Ref. 7 — Nível VII — subsídio 2025", padrao: 14954.94, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "papiloscopista_ms_especial_6_nivel_i", text: "Perito Papiloscopista PCMS — Especial Ref. 6 — Nível I — subsídio 2025", padrao: 10070.68, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "papiloscopista_ms_especial_6_nivel_vii", text: "Perito Papiloscopista PCMS — Especial Ref. 6 — Nível VII — subsídio 2025", padrao: 13595.41, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "papiloscopista_ms_primeira_5_nivel_i", text: "Perito Papiloscopista PCMS — Primeira Classe Ref. 5 — Nível I — subsídio 2025", padrao: 9155.17, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "papiloscopista_ms_primeira_5_nivel_vii", text: "Perito Papiloscopista PCMS — Primeira Classe Ref. 5 — Nível VII — subsídio 2025", padrao: 12359.47, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "papiloscopista_ms_primeira_4_nivel_i", text: "Perito Papiloscopista PCMS — Primeira Classe Ref. 4 — Nível I — subsídio 2025", padrao: 8322.89, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "papiloscopista_ms_primeira_4_nivel_vii", text: "Perito Papiloscopista PCMS — Primeira Classe Ref. 4 — Nível VII — subsídio 2025", padrao: 11235.90, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "papiloscopista_ms_segunda_3_nivel_i", text: "Perito Papiloscopista PCMS — Segunda Classe Ref. 3 — Nível I — subsídio 2025", padrao: 7566.27, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "papiloscopista_ms_segunda_3_nivel_vii", text: "Perito Papiloscopista PCMS — Segunda Classe Ref. 3 — Nível VII — subsídio 2025", padrao: 10214.46, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "papiloscopista_ms_segunda_2_nivel_i", text: "Perito Papiloscopista PCMS — Segunda Classe Ref. 2 — Nível I — subsídio 2025", padrao: 6878.43, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "papiloscopista_ms_segunda_2_nivel_vii", text: "Perito Papiloscopista PCMS — Segunda Classe Ref. 2 — Nível VII — subsídio 2025", padrao: 9285.88, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "papiloscopista_ms_terceira_1_nivel_i", text: "Perito Papiloscopista PCMS — Terceira Classe Ref. 1 — Nível I — subsídio 2025", padrao: 6253.12, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "papiloscopista_ms_terceira_1_nivel_vii", text: "Perito Papiloscopista PCMS — Terceira Classe Ref. 1 — Nível VII — subsídio 2025", padrao: 8441.71, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "papiloscopista_ms_dap_nivel_i", text: "Perito Papiloscopista PCMS — DAP — Nível I — subsídio 2025", padrao: 7566.27, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "papiloscopista_ms_dap_nivel_vii", text: "Perito Papiloscopista PCMS — DAP — Nível VII — subsídio 2025", padrao: 10214.46, oficial: true, retpFator: 0, badge: "LC 343/2024", criterio: "LC MS nº 343/2024: tabelas de subsídios das carreiras da Polícia Civil/MS com vigência a partir de 01/01/2025. O edital APJ/2025 informa remuneração inicial de R$ 6.569,53 para Investigador e Escrivão em 40h.", benefDesc: "A LC MS nº 343/2024 informa que auxílio-alimentação e etapa alimentação estão compreendidos no subsídio para APJ, Perito Oficial Forense, Perito Papiloscopista e Agente de Polícia Científica. Abono salarial/transitório e outras rubricas dependem de classe, referência, nível, situação funcional e contracheque.", fonteKey: "pcms_lc343" },
  { val: "delegado_ms_especial_nivel_i", text: "Delegado de Polícia PCMS — Classe Especial — Nível I — tabela D", padrao: 29240.41, oficial: true, delegado: true, retpFator: 0, badge: "LC 290/2021", criterio: "Tabela D de Delegado da Polícia Civil/MS prevista no anexo da LC MS nº 290/2021, com vigência base de 01/01/2022; conferir reajustes posteriores, DOE/MS e contracheque antes de decisão financeira.", benefDesc: "Demais vantagens, substituição, indenizações e eventuais rubricas pessoais dependem de ato, função, lotação, legislação e contracheque; não foram somadas automaticamente.", fonteKey: "pcms_lc290" },
  { val: "delegado_ms_especial_nivel_vii", text: "Delegado de Polícia PCMS — Classe Especial — Nível VII — tabela D", padrao: 39474.55, oficial: true, delegado: true, retpFator: 0, badge: "LC 290/2021", criterio: "Tabela D de Delegado da Polícia Civil/MS prevista no anexo da LC MS nº 290/2021, com vigência base de 01/01/2022; conferir reajustes posteriores, DOE/MS e contracheque antes de decisão financeira.", benefDesc: "Demais vantagens, substituição, indenizações e eventuais rubricas pessoais dependem de ato, função, lotação, legislação e contracheque; não foram somadas automaticamente.", fonteKey: "pcms_lc290" },
  { val: "delegado_ms_primeira_nivel_i", text: "Delegado de Polícia PCMS — Primeira Classe — Nível I — tabela D", padrao: 25426.44, oficial: true, delegado: true, retpFator: 0, badge: "LC 290/2021", criterio: "Tabela D de Delegado da Polícia Civil/MS prevista no anexo da LC MS nº 290/2021, com vigência base de 01/01/2022; conferir reajustes posteriores, DOE/MS e contracheque antes de decisão financeira.", benefDesc: "Demais vantagens, substituição, indenizações e eventuais rubricas pessoais dependem de ato, função, lotação, legislação e contracheque; não foram somadas automaticamente.", fonteKey: "pcms_lc290" },
  { val: "delegado_ms_primeira_nivel_vii", text: "Delegado de Polícia PCMS — Primeira Classe — Nível VII — tabela D", padrao: 34325.69, oficial: true, delegado: true, retpFator: 0, badge: "LC 290/2021", criterio: "Tabela D de Delegado da Polícia Civil/MS prevista no anexo da LC MS nº 290/2021, com vigência base de 01/01/2022; conferir reajustes posteriores, DOE/MS e contracheque antes de decisão financeira.", benefDesc: "Demais vantagens, substituição, indenizações e eventuais rubricas pessoais dependem de ato, função, lotação, legislação e contracheque; não foram somadas automaticamente.", fonteKey: "pcms_lc290" },
  { val: "delegado_ms_segunda_nivel_i", text: "Delegado de Polícia PCMS — Segunda Classe — Nível I — tabela D", padrao: 22109.94, oficial: true, delegado: true, retpFator: 0, badge: "LC 290/2021", criterio: "Tabela D de Delegado da Polícia Civil/MS prevista no anexo da LC MS nº 290/2021, com vigência base de 01/01/2022; conferir reajustes posteriores, DOE/MS e contracheque antes de decisão financeira.", benefDesc: "Demais vantagens, substituição, indenizações e eventuais rubricas pessoais dependem de ato, função, lotação, legislação e contracheque; não foram somadas automaticamente.", fonteKey: "pcms_lc290" },
  { val: "delegado_ms_segunda_nivel_vii", text: "Delegado de Polícia PCMS — Segunda Classe — Nível VII — tabela D", padrao: 29848.41, oficial: true, delegado: true, retpFator: 0, badge: "LC 290/2021", criterio: "Tabela D de Delegado da Polícia Civil/MS prevista no anexo da LC MS nº 290/2021, com vigência base de 01/01/2022; conferir reajustes posteriores, DOE/MS e contracheque antes de decisão financeira.", benefDesc: "Demais vantagens, substituição, indenizações e eventuais rubricas pessoais dependem de ato, função, lotação, legislação e contracheque; não foram somadas automaticamente.", fonteKey: "pcms_lc290" },
  { val: "delegado_ms_terceira_nivel_i", text: "Delegado de Polícia PCMS — Terceira Classe — Nível I — tabela D", padrao: 19394.68, oficial: true, delegado: true, retpFator: 0, badge: "LC 290/2021", criterio: "Tabela D de Delegado da Polícia Civil/MS prevista no anexo da LC MS nº 290/2021, com vigência base de 01/01/2022; conferir reajustes posteriores, DOE/MS e contracheque antes de decisão financeira.", benefDesc: "Demais vantagens, substituição, indenizações e eventuais rubricas pessoais dependem de ato, função, lotação, legislação e contracheque; não foram somadas automaticamente.", fonteKey: "pcms_lc290" },
  { val: "delegado_ms_terceira_nivel_vii", text: "Delegado de Polícia PCMS — Terceira Classe — Nível VII — tabela D", padrao: 26182.81, oficial: true, delegado: true, retpFator: 0, badge: "LC 290/2021", criterio: "Tabela D de Delegado da Polícia Civil/MS prevista no anexo da LC MS nº 290/2021, com vigência base de 01/01/2022; conferir reajustes posteriores, DOE/MS e contracheque antes de decisão financeira.", benefDesc: "Demais vantagens, substituição, indenizações e eventuais rubricas pessoais dependem de ato, função, lotação, legislação e contracheque; não foram somadas automaticamente.", fonteKey: "pcms_lc290" },
  { val: "delegado_ms_quarta_nivel_i", text: "Delegado de Polícia PCMS — Quarta Classe — Nível I — tabela D", padrao: 18720.73, oficial: true, delegado: true, retpFator: 0, badge: "LC 290/2021", criterio: "Tabela D de Delegado da Polícia Civil/MS prevista no anexo da LC MS nº 290/2021, com vigência base de 01/01/2022; conferir reajustes posteriores, DOE/MS e contracheque antes de decisão financeira.", benefDesc: "Demais vantagens, substituição, indenizações e eventuais rubricas pessoais dependem de ato, função, lotação, legislação e contracheque; não foram somadas automaticamente.", fonteKey: "pcms_lc290" },
  { val: "delegado_ms_quarta_nivel_vii", text: "Delegado de Polícia PCMS — Quarta Classe — Nível VII — tabela D", padrao: 25272.98, oficial: true, delegado: true, retpFator: 0, badge: "LC 290/2021", criterio: "Tabela D de Delegado da Polícia Civil/MS prevista no anexo da LC MS nº 290/2021, com vigência base de 01/01/2022; conferir reajustes posteriores, DOE/MS e contracheque antes de decisão financeira.", benefDesc: "Demais vantagens, substituição, indenizações e eventuais rubricas pessoais dependem de ato, função, lotação, legislação e contracheque; não foram somadas automaticamente.", fonteKey: "pcms_lc290" },
  { val: "delegado_ms_dap500_nivel_i", text: "Delegado de Polícia PCMS — DAP 500 — Nível I — tabela D", padrao: 22109.94, oficial: true, delegado: true, retpFator: 0, badge: "LC 290/2021", criterio: "Tabela D de Delegado da Polícia Civil/MS prevista no anexo da LC MS nº 290/2021, com vigência base de 01/01/2022; conferir reajustes posteriores, DOE/MS e contracheque antes de decisão financeira.", benefDesc: "Demais vantagens, substituição, indenizações e eventuais rubricas pessoais dependem de ato, função, lotação, legislação e contracheque; não foram somadas automaticamente.", fonteKey: "pcms_lc290" },
  { val: "delegado_ms_dap500_nivel_vii", text: "Delegado de Polícia PCMS — DAP 500 — Nível VII — tabela D", padrao: 29848.41, oficial: true, delegado: true, retpFator: 0, badge: "LC 290/2021", criterio: "Tabela D de Delegado da Polícia Civil/MS prevista no anexo da LC MS nº 290/2021, com vigência base de 01/01/2022; conferir reajustes posteriores, DOE/MS e contracheque antes de decisão financeira.", benefDesc: "Demais vantagens, substituição, indenizações e eventuais rubricas pessoais dependem de ato, função, lotação, legislação e contracheque; não foram somadas automaticamente.", fonteKey: "pcms_lc290" }
];

const CARGOS_PMMT = [
  // PMMT — Mato Grosso. Tabela enriquecida com a planilha de vencimentos por posto/graduação e níveis da LC 541/2014 e Lei 12.007/2023.
  { val: "sd_aluno_mt_nivel_ref", text: "AL SD PM — Aluno-Soldado PMMT — referência de formação — planilha PMMT", padrao: 3750.58, oficial: true, selected: true, retpFator: 0, badge: "LC 541/2014 + Lei 12.007/2023", criterio: "Planilha de vencimento da PMMT definida pela LC MT nº 541/2014 e Lei MT nº 12.007/2023, a contar de 01/01/2023; conferir eventual RGA/reajustes posteriores no Portal do Servidor, DOE/MT e contracheque.", benefDesc: "Não inclui etapa alimentação, auxílio, fardamento, indenizações, serviço extraordinário, diárias, função ou rubricas pessoais; parcelas dependem de lei, escala, lotação, ato administrativo e contracheque.", fonteKey: "pmmt" },
  { val: "sd_mt_nivel_1", text: "SD PM — Soldado PMMT — Nível 1 — planilha PMMT", padrao: 5474.19, oficial: true, retpFator: 0, badge: "LC 541/2014 + Lei 12.007/2023", criterio: "Planilha de vencimento da PMMT definida pela LC MT nº 541/2014 e Lei MT nº 12.007/2023, a contar de 01/01/2023; conferir eventual RGA/reajustes posteriores no Portal do Servidor, DOE/MT e contracheque.", benefDesc: "Não inclui etapa alimentação, auxílio, fardamento, indenizações, serviço extraordinário, diárias, função ou rubricas pessoais; parcelas dependem de lei, escala, lotação, ato administrativo e contracheque.", fonteKey: "pmmt" },
  { val: "sd_mt_nivel_2", text: "SD PM — Soldado PMMT — Nível 2 — planilha PMMT", padrao: 6158.48, oficial: true, retpFator: 0, badge: "LC 541/2014 + Lei 12.007/2023", criterio: "Planilha de vencimento da PMMT definida pela LC MT nº 541/2014 e Lei MT nº 12.007/2023, a contar de 01/01/2023; conferir eventual RGA/reajustes posteriores no Portal do Servidor, DOE/MT e contracheque.", benefDesc: "Não inclui etapa alimentação, auxílio, fardamento, indenizações, serviço extraordinário, diárias, função ou rubricas pessoais; parcelas dependem de lei, escala, lotação, ato administrativo e contracheque.", fonteKey: "pmmt" },
  { val: "sd_mt_nivel_3", text: "SD PM — Soldado PMMT — Nível 3 — planilha PMMT", padrao: 7501.13, oficial: true, retpFator: 0, badge: "LC 541/2014 + Lei 12.007/2023", criterio: "Planilha de vencimento da PMMT definida pela LC MT nº 541/2014 e Lei MT nº 12.007/2023, a contar de 01/01/2023; conferir eventual RGA/reajustes posteriores no Portal do Servidor, DOE/MT e contracheque.", benefDesc: "Não inclui etapa alimentação, auxílio, fardamento, indenizações, serviço extraordinário, diárias, função ou rubricas pessoais; parcelas dependem de lei, escala, lotação, ato administrativo e contracheque.", fonteKey: "pmmt" },
  { val: "cabo_mt_nivel_1", text: "CABO PM — Cabo PMMT — Nível 1 — planilha PMMT", padrao: 9358.88, oficial: true, retpFator: 0, badge: "LC 541/2014 + Lei 12.007/2023", criterio: "Planilha de vencimento da PMMT definida pela LC MT nº 541/2014 e Lei MT nº 12.007/2023, a contar de 01/01/2023; conferir eventual RGA/reajustes posteriores no Portal do Servidor, DOE/MT e contracheque.", benefDesc: "Não inclui etapa alimentação, auxílio, fardamento, indenizações, serviço extraordinário, diárias, função ou rubricas pessoais; parcelas dependem de lei, escala, lotação, ato administrativo e contracheque.", fonteKey: "pmmt" },
  { val: "cabo_mt_nivel_2", text: "CABO PM — Cabo PMMT — Nível 2 — planilha PMMT", padrao: 9428.96, oficial: true, retpFator: 0, badge: "LC 541/2014 + Lei 12.007/2023", criterio: "Planilha de vencimento da PMMT definida pela LC MT nº 541/2014 e Lei MT nº 12.007/2023, a contar de 01/01/2023; conferir eventual RGA/reajustes posteriores no Portal do Servidor, DOE/MT e contracheque.", benefDesc: "Não inclui etapa alimentação, auxílio, fardamento, indenizações, serviço extraordinário, diárias, função ou rubricas pessoais; parcelas dependem de lei, escala, lotação, ato administrativo e contracheque.", fonteKey: "pmmt" },
  { val: "cabo_mt_nivel_3", text: "CABO PM — Cabo PMMT — Nível 3 — planilha PMMT", padrao: 9499.04, oficial: true, retpFator: 0, badge: "LC 541/2014 + Lei 12.007/2023", criterio: "Planilha de vencimento da PMMT definida pela LC MT nº 541/2014 e Lei MT nº 12.007/2023, a contar de 01/01/2023; conferir eventual RGA/reajustes posteriores no Portal do Servidor, DOE/MT e contracheque.", benefDesc: "Não inclui etapa alimentação, auxílio, fardamento, indenizações, serviço extraordinário, diárias, função ou rubricas pessoais; parcelas dependem de lei, escala, lotação, ato administrativo e contracheque.", fonteKey: "pmmt" },
  { val: "sgt3_mt_nivel_1", text: "3º SGT PM — 3º Sargento PMMT — Nível 1 — planilha PMMT", padrao: 10123.96, oficial: true, retpFator: 0, badge: "LC 541/2014 + Lei 12.007/2023", criterio: "Planilha de vencimento da PMMT definida pela LC MT nº 541/2014 e Lei MT nº 12.007/2023, a contar de 01/01/2023; conferir eventual RGA/reajustes posteriores no Portal do Servidor, DOE/MT e contracheque.", benefDesc: "Não inclui etapa alimentação, auxílio, fardamento, indenizações, serviço extraordinário, diárias, função ou rubricas pessoais; parcelas dependem de lei, escala, lotação, ato administrativo e contracheque.", fonteKey: "pmmt" },
  { val: "sgt3_mt_nivel_2", text: "3º SGT PM — 3º Sargento PMMT — Nível 2 — planilha PMMT", padrao: 10194.05, oficial: true, retpFator: 0, badge: "LC 541/2014 + Lei 12.007/2023", criterio: "Planilha de vencimento da PMMT definida pela LC MT nº 541/2014 e Lei MT nº 12.007/2023, a contar de 01/01/2023; conferir eventual RGA/reajustes posteriores no Portal do Servidor, DOE/MT e contracheque.", benefDesc: "Não inclui etapa alimentação, auxílio, fardamento, indenizações, serviço extraordinário, diárias, função ou rubricas pessoais; parcelas dependem de lei, escala, lotação, ato administrativo e contracheque.", fonteKey: "pmmt" },
  { val: "sgt3_mt_nivel_3", text: "3º SGT PM — 3º Sargento PMMT — Nível 3 — planilha PMMT", padrao: 10264.10, oficial: true, retpFator: 0, badge: "LC 541/2014 + Lei 12.007/2023", criterio: "Planilha de vencimento da PMMT definida pela LC MT nº 541/2014 e Lei MT nº 12.007/2023, a contar de 01/01/2023; conferir eventual RGA/reajustes posteriores no Portal do Servidor, DOE/MT e contracheque.", benefDesc: "Não inclui etapa alimentação, auxílio, fardamento, indenizações, serviço extraordinário, diárias, função ou rubricas pessoais; parcelas dependem de lei, escala, lotação, ato administrativo e contracheque.", fonteKey: "pmmt" },
  { val: "sgt2_mt_nivel_1", text: "2º SGT PM — 2º Sargento PMMT — Nível 1 — planilha PMMT", padrao: 11492.52, oficial: true, retpFator: 0, badge: "LC 541/2014 + Lei 12.007/2023", criterio: "Planilha de vencimento da PMMT definida pela LC MT nº 541/2014 e Lei MT nº 12.007/2023, a contar de 01/01/2023; conferir eventual RGA/reajustes posteriores no Portal do Servidor, DOE/MT e contracheque.", benefDesc: "Não inclui etapa alimentação, auxílio, fardamento, indenizações, serviço extraordinário, diárias, função ou rubricas pessoais; parcelas dependem de lei, escala, lotação, ato administrativo e contracheque.", fonteKey: "pmmt" },
  { val: "sgt2_mt_nivel_2", text: "2º SGT PM — 2º Sargento PMMT — Nível 2 — planilha PMMT", padrao: 11562.60, oficial: true, retpFator: 0, badge: "LC 541/2014 + Lei 12.007/2023", criterio: "Planilha de vencimento da PMMT definida pela LC MT nº 541/2014 e Lei MT nº 12.007/2023, a contar de 01/01/2023; conferir eventual RGA/reajustes posteriores no Portal do Servidor, DOE/MT e contracheque.", benefDesc: "Não inclui etapa alimentação, auxílio, fardamento, indenizações, serviço extraordinário, diárias, função ou rubricas pessoais; parcelas dependem de lei, escala, lotação, ato administrativo e contracheque.", fonteKey: "pmmt" },
  { val: "sgt2_mt_nivel_3", text: "2º SGT PM — 2º Sargento PMMT — Nível 3 — planilha PMMT", padrao: 11632.65, oficial: true, retpFator: 0, badge: "LC 541/2014 + Lei 12.007/2023", criterio: "Planilha de vencimento da PMMT definida pela LC MT nº 541/2014 e Lei MT nº 12.007/2023, a contar de 01/01/2023; conferir eventual RGA/reajustes posteriores no Portal do Servidor, DOE/MT e contracheque.", benefDesc: "Não inclui etapa alimentação, auxílio, fardamento, indenizações, serviço extraordinário, diárias, função ou rubricas pessoais; parcelas dependem de lei, escala, lotação, ato administrativo e contracheque.", fonteKey: "pmmt" },
  { val: "sgt1_mt_nivel_1", text: "1º SGT PM — 1º Sargento PMMT — Nível 1 — planilha PMMT", padrao: 12176.78, oficial: true, retpFator: 0, badge: "LC 541/2014 + Lei 12.007/2023", criterio: "Planilha de vencimento da PMMT definida pela LC MT nº 541/2014 e Lei MT nº 12.007/2023, a contar de 01/01/2023; conferir eventual RGA/reajustes posteriores no Portal do Servidor, DOE/MT e contracheque.", benefDesc: "Não inclui etapa alimentação, auxílio, fardamento, indenizações, serviço extraordinário, diárias, função ou rubricas pessoais; parcelas dependem de lei, escala, lotação, ato administrativo e contracheque.", fonteKey: "pmmt" },
  { val: "sgt1_mt_nivel_2", text: "1º SGT PM — 1º Sargento PMMT — Nível 2 — planilha PMMT", padrao: 12246.85, oficial: true, retpFator: 0, badge: "LC 541/2014 + Lei 12.007/2023", criterio: "Planilha de vencimento da PMMT definida pela LC MT nº 541/2014 e Lei MT nº 12.007/2023, a contar de 01/01/2023; conferir eventual RGA/reajustes posteriores no Portal do Servidor, DOE/MT e contracheque.", benefDesc: "Não inclui etapa alimentação, auxílio, fardamento, indenizações, serviço extraordinário, diárias, função ou rubricas pessoais; parcelas dependem de lei, escala, lotação, ato administrativo e contracheque.", fonteKey: "pmmt" },
  { val: "sgt1_mt_nivel_3", text: "1º SGT PM — 1º Sargento PMMT — Nível 3 — planilha PMMT", padrao: 12316.96, oficial: true, retpFator: 0, badge: "LC 541/2014 + Lei 12.007/2023", criterio: "Planilha de vencimento da PMMT definida pela LC MT nº 541/2014 e Lei MT nº 12.007/2023, a contar de 01/01/2023; conferir eventual RGA/reajustes posteriores no Portal do Servidor, DOE/MT e contracheque.", benefDesc: "Não inclui etapa alimentação, auxílio, fardamento, indenizações, serviço extraordinário, diárias, função ou rubricas pessoais; parcelas dependem de lei, escala, lotação, ato administrativo e contracheque.", fonteKey: "pmmt" },
  { val: "subten_mt_nivel_1", text: "SUBTEN PM — Subtenente PMMT — Nível 1 — planilha PMMT", padrao: 13545.33, oficial: true, retpFator: 0, badge: "LC 541/2014 + Lei 12.007/2023", criterio: "Planilha de vencimento da PMMT definida pela LC MT nº 541/2014 e Lei MT nº 12.007/2023, a contar de 01/01/2023; conferir eventual RGA/reajustes posteriores no Portal do Servidor, DOE/MT e contracheque.", benefDesc: "Não inclui etapa alimentação, auxílio, fardamento, indenizações, serviço extraordinário, diárias, função ou rubricas pessoais; parcelas dependem de lei, escala, lotação, ato administrativo e contracheque.", fonteKey: "pmmt" },
  { val: "subten_mt_nivel_2", text: "SUBTEN PM — Subtenente PMMT — Nível 2 — planilha PMMT", padrao: 13615.40, oficial: true, retpFator: 0, badge: "LC 541/2014 + Lei 12.007/2023", criterio: "Planilha de vencimento da PMMT definida pela LC MT nº 541/2014 e Lei MT nº 12.007/2023, a contar de 01/01/2023; conferir eventual RGA/reajustes posteriores no Portal do Servidor, DOE/MT e contracheque.", benefDesc: "Não inclui etapa alimentação, auxílio, fardamento, indenizações, serviço extraordinário, diárias, função ou rubricas pessoais; parcelas dependem de lei, escala, lotação, ato administrativo e contracheque.", fonteKey: "pmmt" },
  { val: "subten_mt_nivel_3", text: "SUBTEN PM — Subtenente PMMT — Nível 3 — planilha PMMT", padrao: 13685.45, oficial: true, retpFator: 0, badge: "LC 541/2014 + Lei 12.007/2023", criterio: "Planilha de vencimento da PMMT definida pela LC MT nº 541/2014 e Lei MT nº 12.007/2023, a contar de 01/01/2023; conferir eventual RGA/reajustes posteriores no Portal do Servidor, DOE/MT e contracheque.", benefDesc: "Não inclui etapa alimentação, auxílio, fardamento, indenizações, serviço extraordinário, diárias, função ou rubricas pessoais; parcelas dependem de lei, escala, lotação, ato administrativo e contracheque.", fonteKey: "pmmt" },
  { val: "aluno_oficial_mt_nivel_ref", text: "AL OF PM — Aluno-a-Oficial PMMT — referência de formação — planilha PMMT", padrao: 9521.85, oficial: true, retpFator: 0, badge: "LC 541/2014 + Lei 12.007/2023", criterio: "Planilha de vencimento da PMMT definida pela LC MT nº 541/2014 e Lei MT nº 12.007/2023, a contar de 01/01/2023; conferir eventual RGA/reajustes posteriores no Portal do Servidor, DOE/MT e contracheque.", benefDesc: "Não inclui etapa alimentação, auxílio, fardamento, indenizações, serviço extraordinário, diárias, função ou rubricas pessoais; parcelas dependem de lei, escala, lotação, ato administrativo e contracheque.", fonteKey: "pmmt" },
  { val: "asp_mt_nivel_ref", text: "ASP OF PM — Aspirante a Oficial PMMT — referência de formação — planilha PMMT", padrao: 13685.45, oficial: true, retpFator: 0, badge: "LC 541/2014 + Lei 12.007/2023", criterio: "Planilha de vencimento da PMMT definida pela LC MT nº 541/2014 e Lei MT nº 12.007/2023, a contar de 01/01/2023; conferir eventual RGA/reajustes posteriores no Portal do Servidor, DOE/MT e contracheque.", benefDesc: "Não inclui etapa alimentação, auxílio, fardamento, indenizações, serviço extraordinário, diárias, função ou rubricas pessoais; parcelas dependem de lei, escala, lotação, ato administrativo e contracheque.", fonteKey: "pmmt" },
  { val: "ten2_mt_nivel_1", text: "2º TEN PM — 2º Tenente PMMT — Nível 1 — planilha PMMT", padrao: 15729.62, oficial: true, retpFator: 0, badge: "LC 541/2014 + Lei 12.007/2023", criterio: "Planilha de vencimento da PMMT definida pela LC MT nº 541/2014 e Lei MT nº 12.007/2023, a contar de 01/01/2023; conferir eventual RGA/reajustes posteriores no Portal do Servidor, DOE/MT e contracheque.", benefDesc: "Não inclui etapa alimentação, auxílio, fardamento, indenizações, serviço extraordinário, diárias, função ou rubricas pessoais; parcelas dependem de lei, escala, lotação, ato administrativo e contracheque.", fonteKey: "pmmt" },
  { val: "ten2_mt_nivel_2", text: "2º TEN PM — 2º Tenente PMMT — Nível 2 — planilha PMMT", padrao: 15799.69, oficial: true, retpFator: 0, badge: "LC 541/2014 + Lei 12.007/2023", criterio: "Planilha de vencimento da PMMT definida pela LC MT nº 541/2014 e Lei MT nº 12.007/2023, a contar de 01/01/2023; conferir eventual RGA/reajustes posteriores no Portal do Servidor, DOE/MT e contracheque.", benefDesc: "Não inclui etapa alimentação, auxílio, fardamento, indenizações, serviço extraordinário, diárias, função ou rubricas pessoais; parcelas dependem de lei, escala, lotação, ato administrativo e contracheque.", fonteKey: "pmmt" },
  { val: "ten2_mt_nivel_3", text: "2º TEN PM — 2º Tenente PMMT — Nível 3 — planilha PMMT", padrao: 15869.72, oficial: true, retpFator: 0, badge: "LC 541/2014 + Lei 12.007/2023", criterio: "Planilha de vencimento da PMMT definida pela LC MT nº 541/2014 e Lei MT nº 12.007/2023, a contar de 01/01/2023; conferir eventual RGA/reajustes posteriores no Portal do Servidor, DOE/MT e contracheque.", benefDesc: "Não inclui etapa alimentação, auxílio, fardamento, indenizações, serviço extraordinário, diárias, função ou rubricas pessoais; parcelas dependem de lei, escala, lotação, ato administrativo e contracheque.", fonteKey: "pmmt" },
  { val: "ten1_mt_nivel_1", text: "1º TEN PM — 1º Tenente PMMT — Nível 1 — planilha PMMT", padrao: 17492.90, oficial: true, retpFator: 0, badge: "LC 541/2014 + Lei 12.007/2023", criterio: "Planilha de vencimento da PMMT definida pela LC MT nº 541/2014 e Lei MT nº 12.007/2023, a contar de 01/01/2023; conferir eventual RGA/reajustes posteriores no Portal do Servidor, DOE/MT e contracheque.", benefDesc: "Não inclui etapa alimentação, auxílio, fardamento, indenizações, serviço extraordinário, diárias, função ou rubricas pessoais; parcelas dependem de lei, escala, lotação, ato administrativo e contracheque.", fonteKey: "pmmt" },
  { val: "ten1_mt_nivel_2", text: "1º TEN PM — 1º Tenente PMMT — Nível 2 — planilha PMMT", padrao: 17562.98, oficial: true, retpFator: 0, badge: "LC 541/2014 + Lei 12.007/2023", criterio: "Planilha de vencimento da PMMT definida pela LC MT nº 541/2014 e Lei MT nº 12.007/2023, a contar de 01/01/2023; conferir eventual RGA/reajustes posteriores no Portal do Servidor, DOE/MT e contracheque.", benefDesc: "Não inclui etapa alimentação, auxílio, fardamento, indenizações, serviço extraordinário, diárias, função ou rubricas pessoais; parcelas dependem de lei, escala, lotação, ato administrativo e contracheque.", fonteKey: "pmmt" },
  { val: "ten1_mt_nivel_3", text: "1º TEN PM — 1º Tenente PMMT — Nível 3 — planilha PMMT", padrao: 17633.04, oficial: true, retpFator: 0, badge: "LC 541/2014 + Lei 12.007/2023", criterio: "Planilha de vencimento da PMMT definida pela LC MT nº 541/2014 e Lei MT nº 12.007/2023, a contar de 01/01/2023; conferir eventual RGA/reajustes posteriores no Portal do Servidor, DOE/MT e contracheque.", benefDesc: "Não inclui etapa alimentação, auxílio, fardamento, indenizações, serviço extraordinário, diárias, função ou rubricas pessoais; parcelas dependem de lei, escala, lotação, ato administrativo e contracheque.", fonteKey: "pmmt" },
  { val: "cap_mt_nivel_1", text: "CAP PM — Capitão PMMT — Nível 1 — planilha PMMT", padrao: 21901.19, oficial: true, retpFator: 0, badge: "LC 541/2014 + Lei 12.007/2023", criterio: "Planilha de vencimento da PMMT definida pela LC MT nº 541/2014 e Lei MT nº 12.007/2023, a contar de 01/01/2023; conferir eventual RGA/reajustes posteriores no Portal do Servidor, DOE/MT e contracheque.", benefDesc: "Não inclui etapa alimentação, auxílio, fardamento, indenizações, serviço extraordinário, diárias, função ou rubricas pessoais; parcelas dependem de lei, escala, lotação, ato administrativo e contracheque.", fonteKey: "pmmt" },
  { val: "cap_mt_nivel_2", text: "CAP PM — Capitão PMMT — Nível 2 — planilha PMMT", padrao: 21971.27, oficial: true, retpFator: 0, badge: "LC 541/2014 + Lei 12.007/2023", criterio: "Planilha de vencimento da PMMT definida pela LC MT nº 541/2014 e Lei MT nº 12.007/2023, a contar de 01/01/2023; conferir eventual RGA/reajustes posteriores no Portal do Servidor, DOE/MT e contracheque.", benefDesc: "Não inclui etapa alimentação, auxílio, fardamento, indenizações, serviço extraordinário, diárias, função ou rubricas pessoais; parcelas dependem de lei, escala, lotação, ato administrativo e contracheque.", fonteKey: "pmmt" },
  { val: "cap_mt_nivel_3", text: "CAP PM — Capitão PMMT — Nível 3 — planilha PMMT", padrao: 22041.33, oficial: true, retpFator: 0, badge: "LC 541/2014 + Lei 12.007/2023", criterio: "Planilha de vencimento da PMMT definida pela LC MT nº 541/2014 e Lei MT nº 12.007/2023, a contar de 01/01/2023; conferir eventual RGA/reajustes posteriores no Portal do Servidor, DOE/MT e contracheque.", benefDesc: "Não inclui etapa alimentação, auxílio, fardamento, indenizações, serviço extraordinário, diárias, função ou rubricas pessoais; parcelas dependem de lei, escala, lotação, ato administrativo e contracheque.", fonteKey: "pmmt" },
  { val: "maj_mt_nivel_1", text: "MAJ PM — Major PMMT — Nível 1 — planilha PMMT", padrao: 27411.52, oficial: true, retpFator: 0, badge: "LC 541/2014 + Lei 12.007/2023", criterio: "Planilha de vencimento da PMMT definida pela LC MT nº 541/2014 e Lei MT nº 12.007/2023, a contar de 01/01/2023; conferir eventual RGA/reajustes posteriores no Portal do Servidor, DOE/MT e contracheque.", benefDesc: "Não inclui etapa alimentação, auxílio, fardamento, indenizações, serviço extraordinário, diárias, função ou rubricas pessoais; parcelas dependem de lei, escala, lotação, ato administrativo e contracheque.", fonteKey: "pmmt" },
  { val: "maj_mt_nivel_2", text: "MAJ PM — Major PMMT — Nível 2 — planilha PMMT", padrao: 27481.59, oficial: true, retpFator: 0, badge: "LC 541/2014 + Lei 12.007/2023", criterio: "Planilha de vencimento da PMMT definida pela LC MT nº 541/2014 e Lei MT nº 12.007/2023, a contar de 01/01/2023; conferir eventual RGA/reajustes posteriores no Portal do Servidor, DOE/MT e contracheque.", benefDesc: "Não inclui etapa alimentação, auxílio, fardamento, indenizações, serviço extraordinário, diárias, função ou rubricas pessoais; parcelas dependem de lei, escala, lotação, ato administrativo e contracheque.", fonteKey: "pmmt" },
  { val: "maj_mt_nivel_3", text: "MAJ PM — Major PMMT — Nível 3 — planilha PMMT", padrao: 27551.66, oficial: true, retpFator: 0, badge: "LC 541/2014 + Lei 12.007/2023", criterio: "Planilha de vencimento da PMMT definida pela LC MT nº 541/2014 e Lei MT nº 12.007/2023, a contar de 01/01/2023; conferir eventual RGA/reajustes posteriores no Portal do Servidor, DOE/MT e contracheque.", benefDesc: "Não inclui etapa alimentação, auxílio, fardamento, indenizações, serviço extraordinário, diárias, função ou rubricas pessoais; parcelas dependem de lei, escala, lotação, ato administrativo e contracheque.", fonteKey: "pmmt" },
  { val: "tencel_mt_nivel_1", text: "TEN CEL PM — Tenente-Coronel PMMT — Nível 1 — planilha PMMT", padrao: 31347.50, oficial: true, retpFator: 0, badge: "LC 541/2014 + Lei 12.007/2023", criterio: "Planilha de vencimento da PMMT definida pela LC MT nº 541/2014 e Lei MT nº 12.007/2023, a contar de 01/01/2023; conferir eventual RGA/reajustes posteriores no Portal do Servidor, DOE/MT e contracheque.", benefDesc: "Não inclui etapa alimentação, auxílio, fardamento, indenizações, serviço extraordinário, diárias, função ou rubricas pessoais; parcelas dependem de lei, escala, lotação, ato administrativo e contracheque.", fonteKey: "pmmt" },
  { val: "tencel_mt_nivel_2", text: "TEN CEL PM — Tenente-Coronel PMMT — Nível 2 — planilha PMMT", padrao: 31417.57, oficial: true, retpFator: 0, badge: "LC 541/2014 + Lei 12.007/2023", criterio: "Planilha de vencimento da PMMT definida pela LC MT nº 541/2014 e Lei MT nº 12.007/2023, a contar de 01/01/2023; conferir eventual RGA/reajustes posteriores no Portal do Servidor, DOE/MT e contracheque.", benefDesc: "Não inclui etapa alimentação, auxílio, fardamento, indenizações, serviço extraordinário, diárias, função ou rubricas pessoais; parcelas dependem de lei, escala, lotação, ato administrativo e contracheque.", fonteKey: "pmmt" },
  { val: "tencel_mt_nivel_3", text: "TEN CEL PM — Tenente-Coronel PMMT — Nível 3 — planilha PMMT", padrao: 31487.62, oficial: true, retpFator: 0, badge: "LC 541/2014 + Lei 12.007/2023", criterio: "Planilha de vencimento da PMMT definida pela LC MT nº 541/2014 e Lei MT nº 12.007/2023, a contar de 01/01/2023; conferir eventual RGA/reajustes posteriores no Portal do Servidor, DOE/MT e contracheque.", benefDesc: "Não inclui etapa alimentação, auxílio, fardamento, indenizações, serviço extraordinário, diárias, função ou rubricas pessoais; parcelas dependem de lei, escala, lotação, ato administrativo e contracheque.", fonteKey: "pmmt" },
  { val: "cel_mt_nivel_1", text: "CEL PM — Coronel PMMT — Nível 1 — planilha PMMT", padrao: 35845.70, oficial: true, retpFator: 0, badge: "LC 541/2014 + Lei 12.007/2023", criterio: "Planilha de vencimento da PMMT definida pela LC MT nº 541/2014 e Lei MT nº 12.007/2023, a contar de 01/01/2023; conferir eventual RGA/reajustes posteriores no Portal do Servidor, DOE/MT e contracheque.", benefDesc: "Não inclui etapa alimentação, auxílio, fardamento, indenizações, serviço extraordinário, diárias, função ou rubricas pessoais; parcelas dependem de lei, escala, lotação, ato administrativo e contracheque.", fonteKey: "pmmt" },
  { val: "cel_mt_nivel_2", text: "CEL PM — Coronel PMMT — Nível 2 — planilha PMMT", padrao: 35915.77, oficial: true, retpFator: 0, badge: "LC 541/2014 + Lei 12.007/2023", criterio: "Planilha de vencimento da PMMT definida pela LC MT nº 541/2014 e Lei MT nº 12.007/2023, a contar de 01/01/2023; conferir eventual RGA/reajustes posteriores no Portal do Servidor, DOE/MT e contracheque.", benefDesc: "Não inclui etapa alimentação, auxílio, fardamento, indenizações, serviço extraordinário, diárias, função ou rubricas pessoais; parcelas dependem de lei, escala, lotação, ato administrativo e contracheque.", fonteKey: "pmmt" },
  { val: "cel_mt_nivel_3", text: "CEL PM — Coronel PMMT — Nível 3 — planilha PMMT", padrao: 35985.85, oficial: true, retpFator: 0, badge: "LC 541/2014 + Lei 12.007/2023", criterio: "Planilha de vencimento da PMMT definida pela LC MT nº 541/2014 e Lei MT nº 12.007/2023, a contar de 01/01/2023; conferir eventual RGA/reajustes posteriores no Portal do Servidor, DOE/MT e contracheque.", benefDesc: "Não inclui etapa alimentação, auxílio, fardamento, indenizações, serviço extraordinário, diárias, função ou rubricas pessoais; parcelas dependem de lei, escala, lotação, ato administrativo e contracheque.", fonteKey: "pmmt" }
];

const CARGOS_PCMT = [
  // PCMT/PJC-MT — Mato Grosso. Tabela enriquecida com todas as combinações localizadas para Escrivão e Delegado no Portal do Servidor/SEPLAG-MT.
  { val: "escrivao_mt_001_a", text: "Escrivão de Polícia PCMT — Nível 001 / Classe A — tabela 2025", padrao: 7023.44, oficial: true, selected: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "escrivao_mt_001_b", text: "Escrivão de Polícia PCMT — Nível 001 / Classe B — tabela 2025", padrao: 9669.42, oficial: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "escrivao_mt_001_c", text: "Escrivão de Polícia PCMT — Nível 001 / Classe C — tabela 2025", padrao: 12438.84, oficial: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "escrivao_mt_001_e", text: "Escrivão de Polícia PCMT — Nível 001 / Classe E — tabela 2025", padrao: 16197.48, oficial: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "escrivao_mt_002_a", text: "Escrivão de Polícia PCMT — Nível 002 / Classe A — tabela 2025", padrao: 7234.16, oficial: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "escrivao_mt_002_b", text: "Escrivão de Polícia PCMT — Nível 002 / Classe B — tabela 2025", padrao: 9959.51, oficial: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "escrivao_mt_002_c", text: "Escrivão de Polícia PCMT — Nível 002 / Classe C — tabela 2025", padrao: 12812.01, oficial: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "escrivao_mt_002_e", text: "Escrivão de Polícia PCMT — Nível 002 / Classe E — tabela 2025", padrao: 16683.39, oficial: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "escrivao_mt_003_a", text: "Escrivão de Polícia PCMT — Nível 003 / Classe A — tabela 2025", padrao: 7451.19, oficial: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "escrivao_mt_003_b", text: "Escrivão de Polícia PCMT — Nível 003 / Classe B — tabela 2025", padrao: 10258.32, oficial: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "escrivao_mt_003_c", text: "Escrivão de Polícia PCMT — Nível 003 / Classe C — tabela 2025", padrao: 13196.36, oficial: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "escrivao_mt_003_e", text: "Escrivão de Polícia PCMT — Nível 003 / Classe E — tabela 2025", padrao: 17183.90, oficial: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "escrivao_mt_004_a", text: "Escrivão de Polícia PCMT — Nível 004 / Classe A — tabela 2025", padrao: 7674.71, oficial: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "escrivao_mt_004_b", text: "Escrivão de Polícia PCMT — Nível 004 / Classe B — tabela 2025", padrao: 10566.03, oficial: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "escrivao_mt_004_c", text: "Escrivão de Polícia PCMT — Nível 004 / Classe C — tabela 2025", padrao: 13592.27, oficial: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "escrivao_mt_004_e", text: "Escrivão de Polícia PCMT — Nível 004 / Classe E — tabela 2025", padrao: 17699.43, oficial: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "escrivao_mt_005_a", text: "Escrivão de Polícia PCMT — Nível 005 / Classe A — tabela 2025", padrao: 7904.96, oficial: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "escrivao_mt_005_b", text: "Escrivão de Polícia PCMT — Nível 005 / Classe B — tabela 2025", padrao: 10883.03, oficial: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "escrivao_mt_005_c", text: "Escrivão de Polícia PCMT — Nível 005 / Classe C — tabela 2025", padrao: 14000.03, oficial: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "escrivao_mt_005_e", text: "Escrivão de Polícia PCMT — Nível 005 / Classe E — tabela 2025", padrao: 18230.39, oficial: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "escrivao_mt_006_a", text: "Escrivão de Polícia PCMT — Nível 006 / Classe A — tabela 2025", padrao: 8142.09, oficial: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "escrivao_mt_006_b", text: "Escrivão de Polícia PCMT — Nível 006 / Classe B — tabela 2025", padrao: 11209.50, oficial: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "escrivao_mt_006_c", text: "Escrivão de Polícia PCMT — Nível 006 / Classe C — tabela 2025", padrao: 14420.02, oficial: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "escrivao_mt_006_e", text: "Escrivão de Polícia PCMT — Nível 006 / Classe E — tabela 2025", padrao: 18777.34, oficial: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "escrivao_mt_007_a", text: "Escrivão de Polícia PCMT — Nível 007 / Classe A — tabela 2025", padrao: 8386.38, oficial: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "escrivao_mt_007_b", text: "Escrivão de Polícia PCMT — Nível 007 / Classe B — tabela 2025", padrao: 11545.84, oficial: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "escrivao_mt_007_c", text: "Escrivão de Polícia PCMT — Nível 007 / Classe C — tabela 2025", padrao: 14852.63, oficial: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "escrivao_mt_007_e", text: "Escrivão de Polícia PCMT — Nível 007 / Classe E — tabela 2025", padrao: 19340.66, oficial: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "escrivao_mt_008_a", text: "Escrivão de Polícia PCMT — Nível 008 / Classe A — tabela 2025", padrao: 8637.95, oficial: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "escrivao_mt_008_b", text: "Escrivão de Polícia PCMT — Nível 008 / Classe B — tabela 2025", padrao: 11892.16, oficial: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "escrivao_mt_008_c", text: "Escrivão de Polícia PCMT — Nível 008 / Classe C — tabela 2025", padrao: 15298.24, oficial: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "escrivao_mt_008_e", text: "Escrivão de Polícia PCMT — Nível 008 / Classe E — tabela 2025", padrao: 19920.86, oficial: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "escrivao_mt_009_a", text: "Escrivão de Polícia PCMT — Nível 009 / Classe A — tabela 2025", padrao: 8897.08, oficial: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "escrivao_mt_009_b", text: "Escrivão de Polícia PCMT — Nível 009 / Classe B — tabela 2025", padrao: 12248.92, oficial: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "escrivao_mt_009_c", text: "Escrivão de Polícia PCMT — Nível 009 / Classe C — tabela 2025", padrao: 15757.14, oficial: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "escrivao_mt_009_e", text: "Escrivão de Polícia PCMT — Nível 009 / Classe E — tabela 2025", padrao: 20518.50, oficial: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "escrivao_mt_010_a", text: "Escrivão de Polícia PCMT — Nível 010 / Classe A — tabela 2025", padrao: 9164.01, oficial: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "escrivao_mt_010_b", text: "Escrivão de Polícia PCMT — Nível 010 / Classe B — tabela 2025", padrao: 12616.41, oficial: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "escrivao_mt_010_c", text: "Escrivão de Polícia PCMT — Nível 010 / Classe C — tabela 2025", padrao: 16229.84, oficial: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "escrivao_mt_010_e", text: "Escrivão de Polícia PCMT — Nível 010 / Classe E — tabela 2025", padrao: 21134.03, oficial: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "delegado_mt_000_a", text: "Delegado de Polícia PCMT — Nível 000 / Classe A — tabela 2025", padrao: 30961.87, oficial: true, delegado: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "delegado_mt_000_b", text: "Delegado de Polícia PCMT — Nível 000 / Classe B — tabela 2025", padrao: 34402.04, oficial: true, delegado: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "delegado_mt_000_c", text: "Delegado de Polícia PCMT — Nível 000 / Classe C — tabela 2025", padrao: 38224.56, oficial: true, delegado: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "delegado_mt_000_e", text: "Delegado de Polícia PCMT — Nível 000 / Classe E — tabela 2025", padrao: 42471.66, oficial: true, delegado: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
  { val: "delegado_subst_mt_000_a", text: "Delegado de Polícia Substituto PCMT — LC 575/2016 — Nível 000 / Classe A — tabela 2025", padrao: 27865.69, oficial: true, delegado: true, retpFator: 0, badge: "Tabela 2025", criterio: "Tabela salarial do Portal do Servidor/SEPLAG-MT para a Polícia Civil, carga horária de 40h, período selecionado 01/01/2025-atual. Conferir holerite e rubricas individuais.", benefDesc: "Não inclui abonos, plantões, indenizações, verbas de escala, gratificações por função, auxílio ou outras rubricas pessoais; parcelas dependem de lei, lotação, escala e contracheque.", fonteKey: "pcmt" },
];



/* === ACRE — tabelas oficiais cadastradas manualmente ===================== */
const CRITERIO_PMAC_2018 = 'Total bruto oficial da tabela remuneratória da PMAC/CBMAC, Lei Complementar AC 164 e alterações, vigência julho/2018. Conferir atualizações posteriores no Portal do Estado do Acre, Diário Oficial e contracheque.';
const BENEF_PMAC_2018 = 'O total bruto já consolida as parcelas da tabela oficial. Não soma automaticamente prêmio anual, serviço complementar, localização especial, chefia, sexta-parte, titulação, adicionais pessoais, indenizações ou rubricas por escala.';
const CARGOS_PMAC = [
  { val: 'coronel_ac', text: 'CEL PMAC — Coronel', padrao: 18560.01, gratif: 0, oficial: true, retpFator: 0, selected: false, fonteKey: 'pmac', criterio: CRITERIO_PMAC_2018, benefDesc: BENEF_PMAC_2018, badge: 'Tabela oficial AC' },
  { val: 'ten_cel_ac', text: 'TEN CEL PMAC — Tenente-Coronel', padrao: 15955.97, gratif: 0, oficial: true, retpFator: 0, fonteKey: 'pmac', criterio: CRITERIO_PMAC_2018, benefDesc: BENEF_PMAC_2018, badge: 'Tabela oficial AC' },
  { val: 'major_ac', text: 'MAJ PMAC — Major', padrao: 13856.68, gratif: 0, oficial: true, retpFator: 0, fonteKey: 'pmac', criterio: CRITERIO_PMAC_2018, benefDesc: BENEF_PMAC_2018, badge: 'Tabela oficial AC' },
  { val: 'capitao_ac', text: 'CAP PMAC — Capitão', padrao: 11988.79, gratif: 0, oficial: true, retpFator: 0, fonteKey: 'pmac', criterio: CRITERIO_PMAC_2018, benefDesc: BENEF_PMAC_2018, badge: 'Tabela oficial AC' },
  { val: '1ten_ac', text: '1º TEN PMAC — 1º Tenente', padrao: 10494.73, gratif: 0, oficial: true, retpFator: 0, fonteKey: 'pmac', criterio: CRITERIO_PMAC_2018, benefDesc: BENEF_PMAC_2018, badge: 'Tabela oficial AC' },
  { val: '2ten_ac', text: '2º TEN PMAC — 2º Tenente', padrao: 9887.81, gratif: 0, oficial: true, retpFator: 0, fonteKey: 'pmac', criterio: CRITERIO_PMAC_2018, benefDesc: BENEF_PMAC_2018, badge: 'Tabela oficial AC' },
  { val: 'asp_of_ac', text: 'ASP OF PMAC — Aspirante a Oficial', padrao: 9253.15, gratif: 0, oficial: true, retpFator: 0, fonteKey: 'pmac', criterio: CRITERIO_PMAC_2018, benefDesc: BENEF_PMAC_2018, badge: 'Tabela oficial AC' },
  { val: 'al_of_ac', text: 'AL OF PMAC — Aluno Oficial', padrao: 6887.07, gratif: 0, oficial: false, retpFator: 0, fonteKey: 'pmac', criterio: CRITERIO_PMAC_2018, benefDesc: BENEF_PMAC_2018, badge: 'Tabela oficial AC' },
  { val: 'subten_ac', text: 'SUBTEN PMAC — Subtenente', padrao: 7285.86, gratif: 0, oficial: false, retpFator: 0, fonteKey: 'pmac', criterio: CRITERIO_PMAC_2018, benefDesc: BENEF_PMAC_2018, badge: 'Tabela oficial AC' },
  { val: '1sgt_ac', text: '1º SGT PMAC — 1º Sargento', padrao: 6767.42, gratif: 0, oficial: false, retpFator: 0, fonteKey: 'pmac', criterio: CRITERIO_PMAC_2018, benefDesc: BENEF_PMAC_2018, badge: 'Tabela oficial AC' },
  { val: '2sgt_ac', text: '2º SGT PMAC — 2º Sargento', padrao: 6500.93, gratif: 0, oficial: false, retpFator: 0, fonteKey: 'pmac', criterio: CRITERIO_PMAC_2018, benefDesc: BENEF_PMAC_2018, badge: 'Tabela oficial AC' },
  { val: '3sgt_b_ac', text: '3º SGT PMAC — Nível II', padrao: 6349.39, gratif: 0, oficial: false, retpFator: 0, fonteKey: 'pmac', criterio: CRITERIO_PMAC_2018, benefDesc: BENEF_PMAC_2018, badge: 'Tabela oficial AC' },
  { val: '3sgt_a_ac', text: '3º SGT PMAC — Nível I', padrao: 6217.35, gratif: 0, oficial: false, retpFator: 0, fonteKey: 'pmac', criterio: CRITERIO_PMAC_2018, benefDesc: BENEF_PMAC_2018, badge: 'Tabela oficial AC' },
  { val: 'al_sgt_ac', text: 'AL SGT PMAC — Aluno Sargento', padrao: 5415.82, gratif: 0, oficial: false, retpFator: 0, fonteKey: 'pmac', criterio: CRITERIO_PMAC_2018, benefDesc: BENEF_PMAC_2018, badge: 'Tabela oficial AC' },
  { val: 'cabo_ac', text: 'CB PMAC — Cabo', padrao: 5326.50, gratif: 0, oficial: false, retpFator: 0, fonteKey: 'pmac', criterio: CRITERIO_PMAC_2018, benefDesc: BENEF_PMAC_2018, badge: 'Tabela oficial AC' },
  { val: 'al_cabo_ac', text: 'AL CB PMAC — Aluno Cabo', padrao: 5249.83, gratif: 0, oficial: false, retpFator: 0, fonteKey: 'pmac', criterio: CRITERIO_PMAC_2018, benefDesc: BENEF_PMAC_2018, badge: 'Tabela oficial AC' },
  { val: 'soldado_2_ac', text: 'SD PMAC — Soldado Nível II', padrao: 5207.53, gratif: 0, oficial: false, retpFator: 0, fonteKey: 'pmac', criterio: CRITERIO_PMAC_2018, benefDesc: BENEF_PMAC_2018, badge: 'Tabela oficial AC' },
  { val: 'soldado_1_ac', text: 'SD PMAC — Soldado Nível I', padrao: 5007.40, gratif: 0, oficial: false, selected: true, retpFator: 0, fonteKey: 'pmac', criterio: CRITERIO_PMAC_2018, benefDesc: BENEF_PMAC_2018, badge: 'Tabela oficial AC' },
  { val: 'al_soldado_ac', text: 'AL SD PMAC — Aluno Soldado', padrao: 4344.22, gratif: 0, oficial: false, retpFator: 0, fonteKey: 'pmac', criterio: CRITERIO_PMAC_2018, benefDesc: BENEF_PMAC_2018, badge: 'Tabela oficial AC' }
];

const CRITERIO_PCAC_DELEGADO = 'Vencimento oficial do Delegado de Polícia Civil/AC, Lei Complementar AC 303/2015, tabela de janeiro/2016. Conferir atualizações posteriores, absorções e contracheque.';
const CRITERIO_PCAC_PERITO = 'Vencimento oficial de Perito Criminal e Médico-Legista/AC, Lei AC 3.107/2015, tabela de janeiro/2018. Conferir atualizações posteriores, classe, rubricas e contracheque.';
const CRITERIO_PCAC_OPERACIONAL = 'Vencimento oficial das carreiras de Agente, Escrivão, Perito Papiloscopista e Auxiliar de Necropsia da PCAC, Lei AC 3.228/2017. Conferir atualizações posteriores, classe, rubricas e contracheque.';
const BENEF_PCAC = 'Titulação, sexta-parte, serviço complementar, vantagens pessoais, indenizações e eventuais gratificações dependem do cargo, classe, ato funcional e contracheque; não foram somadas automaticamente.';
const CARGOS_PCAC = [
  { val: 'delegado_esp_ac', text: 'Delegado de Polícia PCAC — Classe Especial', padrao: 22514.92, gratif: 0, oficial: true, delegado: true, retpFator: 0, fonteKey: 'pcac', criterio: CRITERIO_PCAC_DELEGADO, benefDesc: BENEF_PCAC, badge: 'Tabela oficial AC' },
  { val: 'delegado_iv_ac', text: 'Delegado de Polícia PCAC — Classe IV', padrao: 20468.12, gratif: 0, oficial: true, delegado: true, retpFator: 0, fonteKey: 'pcac', criterio: CRITERIO_PCAC_DELEGADO, benefDesc: BENEF_PCAC, badge: 'Tabela oficial AC' },
  { val: 'delegado_iii_ac', text: 'Delegado de Polícia PCAC — Classe III', padrao: 18607.39, gratif: 0, oficial: true, delegado: true, retpFator: 0, fonteKey: 'pcac', criterio: CRITERIO_PCAC_DELEGADO, benefDesc: BENEF_PCAC, badge: 'Tabela oficial AC' },
  { val: 'delegado_ii_ac', text: 'Delegado de Polícia PCAC — Classe II', padrao: 16915.81, gratif: 0, oficial: true, delegado: true, retpFator: 0, fonteKey: 'pcac', criterio: CRITERIO_PCAC_DELEGADO, benefDesc: BENEF_PCAC, badge: 'Tabela oficial AC' },
  { val: 'delegado_i_ac', text: 'Delegado de Polícia PCAC — Classe I', padrao: 15378.00, gratif: 0, oficial: true, delegado: true, selected: true, retpFator: 0, fonteKey: 'pcac', criterio: CRITERIO_PCAC_DELEGADO, benefDesc: BENEF_PCAC, badge: 'Tabela oficial AC' },
  { val: 'perito_esp_ac', text: 'Perito Criminal / Médico-Legista PCAC — Classe Especial', padrao: 17000.48, gratif: 0, oficial: true, retpFator: 0, fonteKey: 'pcac', criterio: CRITERIO_PCAC_PERITO, benefDesc: BENEF_PCAC, badge: 'Tabela oficial AC' },
  { val: 'perito_iv_ac', text: 'Perito Criminal / Médico-Legista PCAC — Classe IV', padrao: 16332.90, gratif: 0, oficial: true, retpFator: 0, fonteKey: 'pcac', criterio: CRITERIO_PCAC_PERITO, benefDesc: BENEF_PCAC, badge: 'Tabela oficial AC' },
  { val: 'perito_iii_ac', text: 'Perito Criminal / Médico-Legista PCAC — Classe III', padrao: 13830.98, gratif: 0, oficial: true, retpFator: 0, fonteKey: 'pcac', criterio: CRITERIO_PCAC_PERITO, benefDesc: BENEF_PCAC, badge: 'Tabela oficial AC' },
  { val: 'perito_ii_ac', text: 'Perito Criminal / Médico-Legista PCAC — Classe II', padrao: 12213.42, gratif: 0, oficial: true, retpFator: 0, fonteKey: 'pcac', criterio: CRITERIO_PCAC_PERITO, benefDesc: BENEF_PCAC, badge: 'Tabela oficial AC' },
  { val: 'perito_i_ac', text: 'Perito Criminal / Médico-Legista PCAC — Classe I', padrao: 10255.66, gratif: 0, oficial: true, retpFator: 0, fonteKey: 'pcac', criterio: CRITERIO_PCAC_PERITO, benefDesc: BENEF_PCAC, badge: 'Tabela oficial AC' },
  { val: 'agente_v_ac', text: 'Agente / Escrivão / Papiloscopista / Aux. Necropsia PCAC — Classe V', padrao: 9200.00, gratif: 0, oficial: true, retpFator: 0, fonteKey: 'pcac', criterio: CRITERIO_PCAC_OPERACIONAL, benefDesc: BENEF_PCAC, badge: 'Tabela oficial AC' },
  { val: 'agente_iv_ac', text: 'Agente / Escrivão / Papiloscopista / Aux. Necropsia PCAC — Classe IV', padrao: 8150.00, gratif: 0, oficial: true, retpFator: 0, fonteKey: 'pcac', criterio: CRITERIO_PCAC_OPERACIONAL, benefDesc: BENEF_PCAC, badge: 'Tabela oficial AC' },
  { val: 'agente_iii_ac', text: 'Agente / Escrivão / Papiloscopista / Aux. Necropsia PCAC — Classe III', padrao: 7100.00, gratif: 0, oficial: true, retpFator: 0, fonteKey: 'pcac', criterio: CRITERIO_PCAC_OPERACIONAL, benefDesc: BENEF_PCAC, badge: 'Tabela oficial AC' },
  { val: 'agente_ii_ac', text: 'Agente / Escrivão / Papiloscopista / Aux. Necropsia PCAC — Classe II', padrao: 6050.00, gratif: 0, oficial: true, retpFator: 0, fonteKey: 'pcac', criterio: CRITERIO_PCAC_OPERACIONAL, benefDesc: BENEF_PCAC, badge: 'Tabela oficial AC' },
  { val: 'agente_i_ac', text: 'Agente / Escrivão / Papiloscopista / Aux. Necropsia PCAC — Classe I', padrao: 5000.00, gratif: 0, oficial: true, retpFator: 0, fonteKey: 'pcac', criterio: CRITERIO_PCAC_OPERACIONAL, benefDesc: BENEF_PCAC, badge: 'Tabela oficial AC' }
];


;


/* ===== js/data/policia-penal.js ===== */
/* Chunk gerado a partir de js/script-original.js — Informações e tabelas da Polícia Penal.
   Mantém a ordem original para preservar compatibilidade. */

/* BLOCO 15.3.1 — Cargos-base e dossiê informativo da Polícia Penal por Estado
   Observação: a Polícia Penal foi inserida no art. 144 da Constituição pela EC 104/2019.
   Como a implantação, nomenclatura, carreira, adicionais, previdência e tabelas remuneratórias variam por UF,
   este bloco deixa a página rica em contexto, mas evita inventar valores quando não houver tabela oficial cadastrada.
*/
const POLICIAS_PENAIS_INFO = {
  ppsp: {
    sigla: 'PPSP',
    nome: 'Polícia Penal do Estado de São Paulo',
    uf: 'São Paulo',
    criacao: 'EC 104/2019 · EC Estadual 51/2022 · LC SP 1.416/2024',
    marco: 'A Polícia Penal paulista foi estruturada pela LC SP 1.416/2024 e iniciou atividades em fevereiro de 2025, com carreira própria no quadro da SAP.',
    orgao: 'Secretaria da Administração Penitenciária do Estado de São Paulo (SAP/SP)',
    direcao: 'Diretoria-Geral da Polícia Penal/SP — estrutura própria da SAP',
    subordinacao: 'Órgão permanente de segurança pública, subordinado à SAP/SP, responsável pela segurança dos estabelecimentos penais estaduais.',
    efetivoAtivoLabel: 'Quadro em implantação',
    reservaLabel: 'Inativos: conferir SAP/SPPREV',
    totalLabel: 'Conferir SAP/SP',
    relacaoLabel: 'Não calcular sem efetivo oficial consolidado',
    quadro: 'Carreira de Policial Penal criada no quadro da SAP/SP. Há concurso recente para 1.100 vagas de ingresso, com remuneração inicial por subsídio informada em edital.',
    ingresso: 'Concurso público, investigação social, TAF, exames, avaliação psicológica, curso de formação e posse conforme edital e atos da SAP.',
    escolaridade: 'Conferir edital vigente da SAP/AOCP; requisitos podem envolver escolaridade, CNH, aptidão física, conduta social e demais condições legais.',
    formacao: 'Curso de formação e capacitação continuada para atuação em segurança prisional, escoltas, custódia, muralhas, canil, GIR, inteligência e proteção de unidades.',
    atribuicoes: 'Segurança interna e externa dos estabelecimentos penais, custódia, vigilância, escolta, recambiamento, manutenção da ordem e disciplina, proteção de instalações e apoio ao enfrentamento do crime organizado no ambiente prisional.',
    remuneracao: 'Subsídio/remuneração deve ser conferido no edital, tabela oficial, Diário Oficial e holerite; não somar rubricas sem fonte oficial.',
    vantagens: 'Podem existir auxílio-alimentação, verbas de escala, indenizações, adicionais e vantagens conforme lei paulista, lotação, escala, laudo e rubrica individual.',
    saude: 'Assistência e perícias devem ser conferidas conforme SAP/SP, SPPREV, IAMSPE e regras do vínculo funcional.',
    previdencia: 'Regime próprio estadual/SPPREV; aposentadoria policial, regras de transição e contribuição exigem análise individual.',
    concurso: {
      vagas: 'Concurso SAP/SP: 1.100 vagas para Policial Penal; conferir status no site da SAP, AOCP e Diário Oficial.',
      salario: 'Subsídio inicial informado em edital recente: R$ 4.695,60 para nível I - ingresso; conferir atualizações oficiais antes de usar.',
      banca: 'Instituto AOCP no concurso recente da SAP/SP.',
      escolaridade: 'Conferir edital vigente; requisitos detalhados no edital da SAP/AOCP.'
    },
    associacaoBusca: 'associação ou sindicato dos policiais penais de São Paulo',
    fonte: 'ALESP/SAP-SP — LC SP 1.416/2024 e notícias oficiais da SAP',
    url: 'https://www.al.sp.gov.br/repositorio/legislacao/lei.complementar/2024/lei.complementar-1416-26.09.2024.html',
    atualizado: 'Atualizado em 28/04/2026'
  },
  pprj: {
    sigla: 'PPRJ',
    nome: 'Polícia Penal do Estado do Rio de Janeiro',
    uf: 'Rio de Janeiro',
    criacao: 'EC 104/2019 · estrutura estadual da Secretaria de Estado de Polícia Penal',
    marco: 'A carreira aparece em canais oficiais do RJ como Secretaria de Estado de Polícia Penal/SEAP, com concursos, formação e operações próprias do sistema penitenciário fluminense.',
    orgao: 'Secretaria de Estado de Polícia Penal / Administração Penitenciária do RJ',
    direcao: 'Secretaria de Estado de Polícia Penal — conferir titular e estrutura atual no portal RJ/SEAP',
    subordinacao: 'Sistema penitenciário estadual do Rio de Janeiro, com atuação em segurança prisional, custódia, escolta, reintegração e inteligência penitenciária.',
    efetivoAtivoLabel: 'Conferir SEAP/RJ',
    reservaLabel: 'Inativos: conferir RioPrevidência/SEAP',
    totalLabel: 'Conferir SEAP/RJ',
    relacaoLabel: 'Não calcular sem efetivo oficial consolidado',
    quadro: 'Há movimentações recentes de formação e concurso para Inspetor de Polícia Penal, incluindo turma formada em 2025 e notícias de concurso para 300 vagas.',
    ingresso: 'Concurso público para Inspetor de Polícia Penal ou nomenclatura definida em edital, com curso de formação e fases de aptidão, investigação e exames.',
    escolaridade: 'Conferir edital vigente da SEAP/RJ; escolaridade, requisitos físicos, documentação e etapas variam conforme concurso.',
    formacao: 'Curso de formação da carreira penal, com treinamento operacional, direitos humanos, execução penal, segurança prisional e rotinas de unidade.',
    atribuicoes: 'Segurança de unidades prisionais, custódia, escoltas, recaptura, controle disciplinar, inteligência penitenciária e apoio à execução penal.',
    remuneracao: 'Conferir caderno remuneratório/edital RJ e contracheque; rubricas podem envolver vencimento, gratificações, auxílio-alimentação, plantões e vantagens condicionadas.',
    vantagens: 'Podem existir gratificações, auxílio-alimentação, plantões, adicionais, indenizações e verbas operacionais conforme lei, escala, lotação e contracheque.',
    saude: 'Assistência deve ser conferida conforme RJ, RioPrevidência, regras de saúde do servidor e normas internas da Secretaria.',
    previdencia: 'RioPrevidência/regime estadual; analisar aposentadoria policial e transições individualmente.',
    concurso: {
      vagas: 'Notícias oficiais citam concurso para 300 vagas de Inspetor de Polícia Penal e formação de 276 novos policiais penais em 2025; conferir edital atual.',
      salario: 'R$ 7.461,95 na 3ª Classe, R$ 8.291,06 na 2ª Classe e R$ 9.212,29 na 1ª Classe, conforme Caderno de Remuneração RJ jan/2026.',
      banca: 'A definir conforme edital vigente.',
      escolaridade: 'Conferir edital vigente da SEAP/RJ.'
    },
    associacaoBusca: 'associação ou sindicato dos policiais penais do Rio de Janeiro',
    fonte: 'Governo do RJ/Secretaria de Estado de Polícia Penal — notícias, editais e portarias SEAP',
    url: 'https://www.rj.gov.br/admpenitenciaria/',
    atualizado: 'Atualizado em 28/04/2026'
  },
  ppmg: {
    sigla: 'PPMG',
    nome: 'Polícia Penal de Minas Gerais',
    uf: 'Minas Gerais',
    criacao: 'EC 104/2019 · estrutura estadual vinculada à segurança pública mineira',
    marco: 'Minas Gerais mantém carreira própria de Polícia Penal e lançou edital em 2025 com 1.178 vagas, além de ter nomeado 3.405 profissionais do sistema prisional em 2024.',
    orgao: 'SEJUSP/MG — Secretaria de Estado de Justiça e Segurança Pública',
    direcao: 'Polícia Penal/MG — conferir direção e subsecretaria atual no portal da SEJUSP',
    subordinacao: 'Sistema prisional mineiro, vinculado à política estadual de segurança pública, custódia e execução penal.',
    efetivoAtivoLabel: 'Conferir SEJUSP/MG',
    reservaLabel: 'Inativos: conferir IPSEMG/regime estadual',
    totalLabel: 'Conferir SEJUSP/MG',
    relacaoLabel: 'Não calcular sem efetivo oficial consolidado',
    quadro: 'Edital 2025 com 1.178 vagas para Polícia Penal MG; nomeações recentes reforçaram o sistema prisional mineiro.',
    ingresso: 'Concurso público, curso de formação técnico-profissional, investigação social, exames, TAF e demais fases previstas em edital.',
    escolaridade: 'Conferir edital SEJUSP/MG vigente; requisitos costumam envolver escolaridade, idade mínima, aptidão física e documentação.',
    formacao: 'Formação técnico-profissional com execução penal, segurança prisional, direitos humanos, armamento, procedimentos operacionais e conduta funcional.',
    atribuicoes: 'Custódia, vigilância, escolta, segurança de unidades, movimentação de presos, disciplina interna, inteligência prisional e apoio à reintegração social.',
    remuneracao: 'Conferir edital SEJUSP/MG e tabela oficial; não somar ajuda de custo, adicionais ou indenizações sem rubrica.',
    vantagens: 'Podem existir ajuda de custo alimentação, gratificações, adicionais ou indenizações conforme escala, local, função e legislação mineira.',
    saude: 'Assistência conforme IPSEMG/SEJUSP e regras estaduais de saúde do servidor.',
    previdencia: 'Regime próprio de Minas Gerais; contribuição, aposentadoria e transições dependem do histórico funcional.',
    concurso: {
      vagas: 'Edital SEJUSP/MG 2025: 1.178 vagas para Polícia Penal.',
      salario: 'Edital SEJUSP/MG 2025: R$ 5.332,64 + ajuda de custo para alimentação por dia efetivamente trabalhado; conferir edital e eventuais reajustes.',
      banca: 'Conferir edital SEJUSP/MG vigente.',
      escolaridade: 'Conferir edital; não presumir escolaridade sem a publicação específica.'
    },
    associacaoBusca: 'associação ou sindicato dos policiais penais de Minas Gerais',
    fonte: 'SEJUSP/MG — edital 2025 da Polícia Penal e notícias oficiais',
    url: 'https://www.seguranca.mg.gov.br/index.php/noticias/sejusp-mg-abre-edital-para-concurso-da-policia-penal-com-1-178-vagas',
    atualizado: 'Atualizado em 28/04/2026'
  },
  ppba: {
    sigla: 'PPBA',
    nome: 'Polícia Penal da Bahia',
    uf: 'Bahia',
    criacao: 'EC 104/2019 · estrutura estadual da SEAP/BA',
    marco: 'A SEAP/BA utiliza a ACADEPPEN para capacitações e informou reforço do sistema prisional em 2026 dentro da estratégia Bahia pela Paz.',
    orgao: 'SEAP/BA — Secretaria de Administração Penitenciária e Ressocialização',
    direcao: 'Polícia Penal/SEAP-BA — conferir direção e superintendências no portal oficial',
    subordinacao: 'Sistema prisional baiano, com foco em segurança, ressocialização, controle interno, inteligência e execução penal.',
    efetivoAtivoLabel: 'Conferir SEAP/BA',
    reservaLabel: 'Inativos: conferir Funprev/BA',
    totalLabel: 'Conferir SEAP/BA',
    relacaoLabel: 'Não calcular sem efetivo oficial consolidado',
    quadro: 'Capacitações e reforços recentes pela ACADEPPEN/SEAP; ações de 2026 citam ampliação de policiais penais e fortalecimento do controle interno.',
    ingresso: 'Concurso público e curso de formação/capacitação pela estrutura da SEAP/ACADEPPEN, conforme edital vigente.',
    escolaridade: 'Conferir edital da SEAP/BA; requisitos variam conforme cargo e norma vigente.',
    formacao: 'Capacitações pela ACADEPPEN, incluindo intervenção prisional, gerenciamento de crises, direitos humanos e procedimentos operacionais.',
    atribuicoes: 'Segurança de unidades prisionais, custódia, escolta, controle interno, prevenção de ilícitos, disciplina, inteligência e apoio à ressocialização.',
    remuneracao: 'Conferir tabela/edital/contracheque da Bahia; gratificações penitenciárias, auxílio-alimentação e vantagens dependem de rubrica.',
    vantagens: 'Podem existir gratificações, adicionais, auxílio-alimentação, indenizações e verba de escala conforme lei baiana, local de serviço e situação funcional.',
    saude: 'Assistência conforme Planserv/BA e regras estaduais do servidor, quando aplicáveis.',
    previdencia: 'Funprev/BA/regime próprio estadual; aposentadoria e regras de transição exigem análise individual.',
    concurso: {
      vagas: 'Conferir autorização e edital vigente da SEAP/BA; notícias de 2026 indicam reforço e capacitação do efetivo penal.',
      salario: 'Edital SEAP/BA nº 02/2024: R$ 2.601,04 para 30h e referência de até R$ 4.478,31 para 40h.',
      banca: 'A definir conforme edital.',
      escolaridade: 'Conferir edital e lei local da carreira.'
    },
    associacaoBusca: 'associação ou sindicato dos policiais penais da Bahia',
    fonte: 'SEAP/BA — notícias oficiais e ACADEPPEN',
    url: 'https://www.ba.gov.br/seap/noticias',
    atualizado: 'Atualizado em 28/04/2026'
  },
  pppr: {
    sigla: 'PPPR',
    nome: 'Polícia Penal do Paraná',
    uf: 'Paraná',
    criacao: 'EC 104/2019 · modernização do QPPP',
    marco: 'O Paraná modernizou o Quadro Próprio dos Policiais Penais (QPPP), nomeou 429 novos policiais penais em 2025 e autorizou promoção de 1.181 servidores.',
    orgao: 'Polícia Penal do Paraná / Governo do Estado do Paraná',
    direcao: 'Ananda Chalegre dos Santos — Diretora-Geral da Polícia Penal do Paraná',
    subordinacao: 'Sistema penal paranaense, com carreira própria, gestão de unidades, segurança, custódia, escolta e inteligência penitenciária.',
    efetivoAtivoLabel: 'Conferir PPPR',
    reservaLabel: 'Inativos: conferir ParanáPrevidência',
    totalLabel: 'Conferir PPPR',
    relacaoLabel: 'Não calcular sem efetivo oficial consolidado',
    quadro: 'QPPP modernizado; 429 novos policiais penais nomeados em 2025 e 1.181 promoções autorizadas após a reestruturação da carreira.',
    ingresso: 'Concurso público, formação e nomeação conforme QPPP, edital e atos do Governo do Paraná.',
    escolaridade: 'Conferir edital vigente e legislação do QPPP.',
    formacao: 'Curso de formação e capacitações operacionais para segurança prisional, escolta, custódia, inteligência e procedimentos de unidade.',
    atribuicoes: 'Segurança, vigilância, custódia, escoltas, movimentação de presos, disciplina interna, inteligência prisional e apoio à execução penal.',
    remuneracao: 'Conferir tabela oficial do Paraná e atos da carreira; não somar adicional, auxílio ou indenização sem rubrica.',
    vantagens: 'Podem existir auxílio-alimentação, progressões, promoções, adicionais e verbas condicionadas conforme QPPP, classe, lotação e ato administrativo.',
    saude: 'Assistência conforme regras estaduais/ParanáPrevidência/SAS e normas internas.',
    previdencia: 'ParanáPrevidência/regime estadual; aposentadoria policial e transições dependem do histórico funcional.',
    concurso: {
      vagas: 'Nomeação oficial de 429 novos policiais penais em 2025; acompanhar novos editais e chamamentos no portal da Polícia Penal/PR.',
      salario: 'Tabela do QPPP/PR por subsídio: de R$ 4.300,00 na Classe XII até R$ 17.500,00 na Classe I.',
      banca: 'A definir conforme edital vigente.',
      escolaridade: 'Conferir edital e legislação do QPPP.'
    },
    associacaoBusca: 'associação ou sindicato dos policiais penais do Paraná',
    fonte: 'Polícia Penal/PR — QPPP, nomeações e promoções',
    url: 'https://www.policiapenal.pr.gov.br/',
    atualizado: 'Atualizado em 28/04/2026'
  },
  pprs: {
    sigla: 'PPRS',
    nome: 'Polícia Penal do Rio Grande do Sul',
    uf: 'Rio Grande do Sul',
    criacao: 'EC 104/2019 · EC RS 82/2022 · LC RS 16.449/2025',
    marco: 'A LC RS 16.449/2025 criou o Estatuto da Polícia Penal gaúcha, com estrutura básica, atribuições, carreira e criação de cargos.',
    orgao: 'Secretaria de Sistemas Penal e Socioeducativo do Rio Grande do Sul (SSPS/RS)',
    direcao: 'Sergio Dalcol — Superintendente da Polícia Penal/RS; Jorge Pozzobom — Secretário da SSPS',
    subordinacao: 'Polícia Penal vinculada à SSPS/RS, responsável pela execução penal, segurança dos estabelecimentos prisionais, custódia, escolta e inteligência.',
    efetivoAtivoLabel: 'Quadro legal: 6.938 cargos',
    reservaLabel: 'Inativos: conferir IPE Prev/RS',
    totalLabel: '5.364 nomeações desde 2019',
    relacaoLabel: 'Relação aproximada depende do provimento efetivo dos cargos',
    quadro: 'LC RS 16.449/2025 criou 6.938 cargos de Policial Penal e 50 cargos administrativos; governo informou 5.364 nomeações desde 2019 e formação de 643 novos servidores em 2026.',
    ingresso: 'Concurso público, curso de formação e posse conforme estatuto, edital e atos da SSPS/RS.',
    escolaridade: 'Conferir edital e Estatuto da Polícia Penal/RS.',
    formacao: 'Formação voltada à execução penal, custódia, segurança, inteligência, direitos humanos, procedimentos de unidade e atuação operacional.',
    atribuicoes: 'Execução penal, segurança de estabelecimentos prisionais, custódia, escolta, recambiamento, operações, inteligência, disciplina e proteção de servidores, pessoas presas e instalações.',
    remuneracao: 'Conferir relação remuneratória oficial do RS, edital e holerite; não somar verbas condicionadas sem rubrica.',
    vantagens: 'Podem existir auxílio-alimentação, adicionais, indenizações, gratificações, vantagens de carreira e verbas de escala conforme LC, regulamentos e situação funcional.',
    saude: 'Assistência conforme IPE Saúde/RS, regras de servidor estadual e normas internas.',
    previdencia: 'IPE Prev/RS/regime estadual; aposentadoria e transições dependem do histórico funcional.',
    concurso: {
      vagas: 'Governo informou 953 policiais penais e 59 técnicos administrativos chamados em 2026, com 643 novos servidores em formação; acompanhar novos editais da SSPS/RS.',
      salario: 'Referências RHE/RS: Policial Penal/antigo Agente Penitenciário de R$ 6.305,76 a R$ 17.197,52; carreiras técnicas/administrativas em faixas próprias.',
      banca: 'Conferir edital vigente.',
      escolaridade: 'Conferir edital e LC RS 16.449/2025.'
    },
    associacaoBusca: 'associação ou sindicato dos policiais penais do Rio Grande do Sul',
    fonte: 'Governo RS/SSPS — LC RS 16.449/2025, estatuto e nomeações',
    url: 'https://www.estado.rs.gov.br/governador-eduardo-leite-sanciona-lei-que-cria-estatuto-da-policia-penal-do-rio-grande-do-sul',
    atualizado: 'Atualizado em 28/04/2026'
  },
  ppsc: {
    sigla: 'PPSC',
    nome: 'Polícia Penal de Santa Catarina',
    uf: 'Santa Catarina',
    criacao: 'EC 104/2019 · EC SC 80/2020 · LC SC 774/2021',
    marco: 'Santa Catarina tem Estatuto da Polícia Penal pela LC SC 774/2021; em 2025 o governo informou 1.644 nomeações e efetivo total de 4.809 profissionais.',
    orgao: 'Departamento de Polícia Penal (DPP) / Secretaria de Estado da Justiça e Reintegração Social',
    direcao: 'Maicon Ronald Alves — Diretor-Geral do Departamento de Polícia Penal',
    subordinacao: 'Departamento de Polícia Penal de Santa Catarina, com atuação em unidades prisionais, custódia, segurança, escolta, inteligência e reintegração.',
    efetivoAtivo: 4809,
    reservaLabel: 'Inativos: conferir IPREV/SC',
    totalLabel: '4.809 profissionais',
    relacaoLabel: '1 profissional / 1.703 hab. · cálculo aproximado com efetivo divulgado',
    quadro: 'LC SC 774/2021 estruturou a carreira; governo informou 1.644 servidores nomeados em 2025 e efetivo total de 4.809 profissionais.',
    ingresso: 'Concurso público, curso de formação e ingresso conforme LC SC 774/2021, editais e atos do DPP/SC.',
    escolaridade: 'A LC SC 774/2021 organiza carreira de nível superior; conferir edital vigente e requisitos completos.',
    formacao: 'Formação própria para custódia, segurança prisional, escolta, intervenção, direitos humanos, inteligência e rotinas de unidade.',
    atribuicoes: 'Segurança e disciplina dos estabelecimentos penais, custódia, escolta, vigilância, recaptura, inteligência, apoio à execução penal e proteção das unidades.',
    remuneracao: 'Conferir LC/tabelas de SC, edital e holerite; subsídio, auxílio e adicionais dependem de classe, referência e rubrica.',
    vantagens: 'Podem existir auxílio-alimentação, progressões, adicionais, gratificações, indenizações e verbas condicionadas conforme classe, escala, lotação e legislação catarinense.',
    saude: 'Assistência conforme SC Saúde/IPREV/SC e normas do servidor estadual.',
    previdencia: 'IPREV/SC/regime estadual; aposentadoria policial e transições exigem análise individual.',
    concurso: {
      vagas: 'Governo informou 1.644 nomeações em 2025; acompanhar novos editais e chamamentos no DPP/SC e SEJURI.',
      salario: 'Carreira por subsídio em 8 classes; referência atualizada de R$ 7.290,00 na Classe I até R$ 19.440,00 na Classe VIII.',
      banca: 'A definir conforme edital vigente.',
      escolaridade: 'Carreira de nível superior conforme LC SC 774/2021; conferir edital.'
    },
    associacaoBusca: 'associação ou sindicato dos policiais penais de Santa Catarina',
    fonte: 'ALESC/SC e Governo SC — LC SC 774/2021, DPP e efetivo divulgado',
    url: 'https://leis.alesc.sc.gov.br/ato-normativo/21250',
    atualizado: 'Atualizado em 28/04/2026'
  },
  ppes: {
    sigla: 'PPES',
    nome: 'Polícia Penal do Espírito Santo',
    uf: 'Espírito Santo',
    criacao: 'EC 104/2019 · LC ES 1.059/2023 · LC ES 1.061/2023',
    marco: 'O Espírito Santo instituiu carreira e órgão próprio por leis complementares de 2023; em 2025 anunciou concurso com 600 vagas e meta de 3.300 policiais concursados nas unidades.',
    orgao: 'Polícia Penal do Espírito Santo (PPES) / Secretaria de Estado da Justiça (SEJUS)',
    direcao: 'José Franco Morais Junior — Diretor-Geral da Polícia Penal do Espírito Santo',
    subordinacao: 'Órgão de segurança pública vinculado à SEJUS/ES, responsável pela segurança penitenciária, custódia, inteligência e gestão operacional das unidades.',
    efetivoAtivoLabel: 'Meta divulgada: 3.300 concursados',
    reservaLabel: 'Inativos: conferir IPAJM/ES',
    totalLabel: 'Conferir SEJUS/PPES',
    relacaoLabel: 'Relação aproximada depende do provimento e lotação efetiva',
    quadro: 'Concurso anunciado em 2025 com 600 vagas; SEJUS informou que o novo edital levaria o ES a 3.300 policiais penais concursados nas unidades prisionais.',
    ingresso: 'Concurso público, curso de formação, lotação em unidade prisional e demais fases previstas em edital e portarias da PPES.',
    escolaridade: 'Conferir edital vigente e LC ES 1.059/2023/1.061/2023.',
    formacao: 'Curso de formação e capacitações operacionais da PPES/Academia, com foco em custódia, segurança, inteligência, porte institucional e rotinas do sistema prisional.',
    atribuicoes: 'Segurança de unidades prisionais, custódia, escolta, controle interno, inteligência prisional, proteção das instalações e apoio ao combate ao crime organizado.',
    remuneracao: 'Conferir tabela oficial/edital/contracheque do ES; não somar auxílio, indenização ou adicional sem rubrica.',
    vantagens: 'Podem existir auxílio-alimentação, adicionais, indenizações, gratificações, porte/cautela institucional e verbas condicionadas conforme LC, portarias, escala e lotação.',
    saude: 'Assistência conforme IPAJM/ES, SEJUS e regras administrativas estaduais.',
    previdencia: 'IPAJM/ES/regime estadual; aposentadoria e transições dependem do histórico funcional.',
    concurso: {
      vagas: 'Concurso anunciado em 2025 com 600 vagas para Polícia Penal/ES; acompanhar edital e convocações oficiais.',
      salario: 'Edital PPES 2025: subsídio inicial de R$ 5.631,16 + auxílio-alimentação de R$ 800,00; tabela por classe e nível cadastrada.',
      banca: 'A definir conforme edital vigente.',
      escolaridade: 'Conferir edital e LC ES 1.059/2023/1.061/2023.'
    },
    associacaoBusca: 'associação ou sindicato dos policiais penais do Espírito Santo',
    fonte: 'SEJUS/PPES — LC ES 1.059/2023, LC ES 1.061/2023, portarias e concurso',
    url: 'https://sejus.es.gov.br/',
    atualizado: 'Atualizado em 28/04/2026'
  },

  ppms: {
    sigla: 'PPMS',
    nome: 'Polícia Penal de Mato Grosso do Sul',
    uf: 'Mato Grosso do Sul',
    criacao: 'EC 104/2019 · Diretoria-Geral da Polícia Penal/AGEPEN-MS',
    marco: 'Mato Grosso do Sul possui Diretoria-Geral da Polícia Penal vinculada à estrutura da AGEPEN/MS, com atuação voltada à segurança, custódia, escolta, inteligência e gestão operacional do sistema prisional.',
    orgao: 'AGEPEN/MS — Agência Estadual de Administração do Sistema Penitenciário',
    direcao: 'Creone da Conceição Batista — Diretor-Geral da Polícia Penal; Rodrigo Rossi Maiorchini — Diretor-Presidente da AGEPEN/MS',
    subordinacao: 'Sistema penitenciário estadual de Mato Grosso do Sul, com coordenação administrativa pela AGEPEN/MS e integração com a SEJUSP/MS.',
    efetivoAtivoLabel: 'Conferir AGEPEN/MS',
    reservaLabel: 'Inativos: conferir AGEPREV/MS',
    totalLabel: 'Conferir AGEPEN/MS',
    relacaoLabel: 'Não calcular sem efetivo oficial consolidado',
    quadro: 'Carreira penal estadual em consolidação constitucional após a EC 104/2019; conferir leis estaduais, atos da AGEPEN/MS e publicações no Diário Oficial/MS.',
    ingresso: 'Concurso público, curso de formação, investigação social, exames e demais fases previstas no edital vigente.',
    escolaridade: 'Conferir edital vigente da AGEPEN/MS; requisitos podem variar conforme cargo, carreira e legislação local.',
    formacao: 'Curso de formação e capacitações operacionais do sistema penitenciário estadual, com foco em custódia, segurança, escolta, disciplina, inteligência e rotinas prisionais.',
    atribuicoes: 'Segurança interna e externa de unidades prisionais, custódia, escolta, controle disciplinar, prevenção de ilícitos, inteligência prisional e proteção das instalações.',
    remuneracao: 'Tabela Subsídio AGEPEN/MS 2026: de R$ 5.517,66 na Classe Inicial/Nível I até R$ 13.132,02 na Classe Especial/Nível VIII; conferir contracheque e rubricas individuais.',
    vantagens: 'Podem existir adicionais, indenizações, gratificações, auxílio-alimentação e verbas condicionadas por lei, escala, lotação e situação funcional.',
    saude: 'Assistência conforme regras estaduais, AGEPEN/MS, AGEPREV/MS e normas administrativas aplicáveis ao servidor.',
    previdencia: 'AGEPREV/MS/regime próprio estadual; aposentadoria e transições exigem análise individual do histórico funcional.',
    concurso: {
      vagas: 'Conferir autorização, edital e publicações no Diário Oficial de Mato Grosso do Sul.',
      salario: 'Tabela Subsídio AGEPEN/MS 2026: R$ 5.517,66 a R$ 13.132,02, conforme classe e nível; adicionais e auxílios não foram somados.',
      banca: 'A definir conforme edital vigente.',
      escolaridade: 'Conferir edital e legislação local da carreira.'
    },
    associacaoBusca: 'associação ou sindicato dos policiais penais de Mato Grosso do Sul',
    fonte: 'AGEPEN/MS — Tabela Subsídio 2026 e Diretoria-Geral da Polícia Penal',
    url: 'https://www.agepen.ms.gov.br/wp-content/uploads/2025/12/Tabela-Subsidio-AGEPEN-2026.pdf',
    atualizado: 'Atualizado em 28/04/2026'
  },
  ppmt: {
    sigla: 'PPMT',
    nome: 'Polícia Penal de Mato Grosso',
    uf: 'Mato Grosso',
    criacao: 'EC 104/2019 · SEJUS/MT · Secretaria Adjunta de Administração Penitenciária',
    marco: 'Em Mato Grosso, a administração penitenciária está vinculada à SEJUS/MT, com Secretaria Adjunta de Administração Penitenciária e atuação da Polícia Penal no sistema prisional estadual.',
    orgao: 'SEJUS/MT — Secretaria de Estado de Justiça',
    direcao: 'Jean Carlos Gonçalves — Secretário Adjunto de Administração Penitenciária; Valter Furtado Filho — Secretário de Estado de Justiça',
    subordinacao: 'Sistema penitenciário estadual de Mato Grosso, com coordenação da SEJUS/MT e integração às políticas estaduais de segurança e justiça.',
    efetivoAtivoLabel: 'Conferir SEJUS/MT/Portal da Transparência',
    reservaLabel: 'Inativos: conferir MTPREV/Portal MT',
    totalLabel: 'Conferir SEJUS/MT',
    relacaoLabel: 'Não calcular sem efetivo oficial consolidado',
    quadro: 'Carreira penal estadual com tabela salarial 40h publicada no Portal do Servidor/SEPLAG-MT para o cargo de Policial Penal.',
    ingresso: 'Concurso público, curso de formação, investigação social, exames, avaliação psicológica, TAF e demais fases previstas no edital vigente.',
    escolaridade: 'Conferir edital vigente; requisitos podem envolver escolaridade, CNH, aptidão física, conduta social e demais condições legais.',
    formacao: 'Curso de formação e capacitação continuada para segurança prisional, escoltas, custódia, disciplina, inteligência e operação de unidades.',
    atribuicoes: 'Segurança interna e externa das unidades penais, custódia, escolta, controle disciplinar, prevenção de ilícitos, inteligência prisional e proteção das instalações.',
    remuneracao: 'Tabela salarial 40h do Portal do Servidor/SEPLAG-MT para Policial Penal/MT, período 01/01/2026-atual: de R$ 5.155,94 no Nível 001/A até R$ 16.761,66 no Nível 012/D; conferir contracheque e rubricas individuais.',
    vantagens: 'Adicionais, indenizações, plantões, verbas de escala, auxílio-alimentação e gratificações dependem de lei, lotação, escala e situação funcional.',
    saude: 'Conferir SEJUS/MT, MTPREV e regras estaduais aplicáveis ao servidor policial penal.',
    previdencia: 'Regime próprio estadual/MTPREV; aposentadoria e transições exigem análise individual do histórico funcional.',
    concurso: {
      vagas: 'Conferir autorização, edital e publicações da SEJUS/MT, SEPLAG/MT e Diário Oficial/MT.',
      salario: 'Tabela 40h do Policial Penal/MT em 2026 parte de R$ 5.155,94 no Nível 001/A e chega a R$ 16.761,66 no Nível 012/D.',
      banca: 'A definir conforme edital vigente.',
      escolaridade: 'Conferir edital e legislação local da carreira.'
    },
    associacaoBusca: 'Sindicato dos Policiais Penais de Mato Grosso / SINDSPPEN-MT',
    fonte: 'SEJUS/MT, Portal do Servidor/SEPLAG-MT e SINDSPPEN-MT — tabela 40h Policial Penal',
    url: 'https://sindspenmt.com.br/tabela-salarial-do-sistema-penitenciario/',
    atualizado: 'Atualizado em 28/04/2026'
  },
  ppac: {
    sigla: 'PPAC',
    nome: 'Polícia Penal do Estado do Acre',
    uf: 'Acre',
    criacao: 'EC 104/2019 · IAPEN/AC · Polícia Penal do Acre',
    marco: 'O concurso SEAD/IAPEN 2023 tratou expressamente do IAPEN/AC e da Polícia Penal do Acre, com resultado final/homologação publicados em 2025 e nomeações posteriores.',
    orgao: 'Instituto de Administração Penitenciária do Acre (IAPEN/AC) / Secretaria de Estado de Justiça e Segurança Pública (SEJUSP/AC)',
    direcao: 'Marcos Frank Costa — Presidente do IAPEN/AC',
    subordinacao: 'Sistema penitenciário estadual do Acre, com atuação em segurança prisional, custódia, escoltas, controle, disciplina, monitoramento e execução penal.',
    efetivoAtivoLabel: 'Edital SEAD/IAPEN 2023: 261 vagas de Agente de Polícia Penal; 170 policiais penais nomeados em 2025',
    reservaLabel: 'Inativos: conferir Acreprevidência e atos do IAPEN/AC',
    totalLabel: 'Sistema em reforço após curso de formação e nomeações de 2025',
    relacaoLabel: 'Relação depende do efetivo ativo consolidado pelo IAPEN/AC',
    quadro: 'Carreira penal estadual ligada ao IAPEN/AC. O edital 2023 cadastrou Agente de Polícia Penal e cargos de apoio do instituto, com dedicação exclusiva e escala definida pela administração.',
    ingresso: 'Concurso público com prova objetiva, discursiva, títulos, TAF, avaliação psicológica, avaliação médica, investigação social e curso de formação, conforme edital.',
    escolaridade: 'Agente de Polícia Penal: diploma de curso superior e CNH categoria B até a matrícula no curso de formação, conforme edital SEAD/IAPEN 2023.',
    formacao: 'Curso de formação no Acre; o governo estadual divulgou formação e nomeações de novos policiais penais em 2025.',
    atribuicoes: 'Segurança interna e externa de unidades prisionais, custódia, escolta, controle disciplinar, prevenção de ilícitos, fiscalização, apoio à execução penal e proteção das instalações.',
    remuneracao: 'Edital SEAD/IAPEN 2023: Agente de Polícia Penal com remuneração de R$ 4.366,60, jornada de 40h semanais, dedicação exclusiva e escala. Conferir LC AC 392/2021, atualizações e contracheque.',
    vantagens: 'Auxílio saúde, risco de vida, etapa alimentação, titulação, sexta-parte, prêmio anual, plantões, indenizações e vantagens pessoais dependem de lei, rubrica e situação funcional; não foram somados automaticamente.',
    saude: 'Conferir IAPEN/AC, SEAD/AC, Acreprevidência e normas estaduais de assistência ao servidor.',
    previdencia: 'Regime próprio estadual/Acreprevidência; aposentadoria policial, transições e abono de permanência exigem análise individual.',
    concurso: {
      vagas: 'Edital 001/2023 SEAD/IAPEN: 261 vagas para Agente de Polícia Penal, além de cargos administrativos e de nível superior do IAPEN/AC.',
      salario: 'Agente de Polícia Penal: R$ 4.366,60 no edital 2023; cargos de apoio tinham remunerações próprias no mesmo edital.',
      banca: 'IBFC',
      escolaridade: 'Superior completo e CNH B para Agente de Polícia Penal; requisitos específicos para os demais cargos.'
    },
    associacaoBusca: 'associação ou sindicato dos policiais penais do Acre',
    fonte: 'SEAD/IAPEN/AC — Edital 001/2023, publicações de homologação/curso de formação 2025; Portal do Estado do Acre — Lei 2.180/IAPEN',
    url: 'https://sead.ac.gov.br/gestao-governamental/editais-e-concursos/iapen-instituto-de-administracao-penitenciaria-do-acre/',
    atualizado: 'Atualizado em 01/05/2026'
  }
};

function getInfoPoliciaPenal(inst) {
  const chave = String(inst || '').toLowerCase();
  return POLICIAS_PENAIS_INFO[chave] || POLICIAS_PENAIS_INFO.ppsp;
}

function cargoRemuneracaoPenal(inst, val, text, padrao, resumo, opcoes = {}) {
  const info = getInfoPoliciaPenal(inst);
  return {
    val,
    text,
    padrao: Number(padrao || 0),
    selected: !!opcoes.selected,
    oficial: true,
    retpFator: 0,
    valorPendente: false,
    fonteKey: opcoes.fonteKey || inst,
    fonteUrl: opcoes.fonteUrl || info.url,
    infoPenal: true,
    beneficios: Number(opcoes.beneficios || 0),
    criterio: opcoes.criterio || `Tabela remuneratória oficial da ${info.sigla}.`,
    benefDesc: opcoes.benefDesc || 'Auxílios, adicionais, plantões, gratificações e parcelas indenizatórias dependem da legislação local, da escala, da lotação e da situação funcional; não foram somados quando não forem parcela geral fixa da tabela.',
    badge: opcoes.badge || 'Fonte oficial',
    resumo: resumo || `${text}: remuneração bruta mensal de referência cadastrada.`
  };
}

function mapearTabelaPoliciaPenal(inst, tabela, criterio, benefDesc, prefixo, opcoes = {}) {
  return tabela.map((item, index) => cargoRemuneracaoPenal(
    inst,
    `${prefixo}_${item.id || index + 1}`,
    item.text,
    item.valor,
    item.resumo || `${item.text}: remuneração bruta mensal de referência conforme tabela/edital da carreira.`,
    {
      selected: index === 0,
      criterio: item.criterio || criterio,
      benefDesc: item.benefDesc || benefDesc,
      beneficios: item.beneficios !== undefined ? item.beneficios : (opcoes.beneficios || 0),
      badge: item.badge || opcoes.badge || 'Fonte oficial',
      fonteKey: opcoes.fonteKey || inst
    }
  ));
}

const CARGOS_PPSP = mapearTabelaPoliciaPenal('ppsp', [
  { id: 'nivel_i_ingresso', text: 'PPSP — Nível I / Ingresso', valor: 4695.60 },
  { id: 'nivel_i_a', text: 'PPSP — Nível I / Classe A', valor: 4982.25 },
  { id: 'nivel_ii_a', text: 'PPSP — Nível II / Classe A', valor: 5316.87 },
  { id: 'nivel_ii_b', text: 'PPSP — Nível II / Classe B', valor: 5479.58 },
  { id: 'nivel_ii_c', text: 'PPSP — Nível II / Classe C', valor: 5642.30 },
  { id: 'nivel_iii_a', text: 'PPSP — Nível III / Classe A', valor: 6020.34 },
  { id: 'nivel_iii_b', text: 'PPSP — Nível III / Classe B', valor: 6204.59 },
  { id: 'nivel_iii_c', text: 'PPSP — Nível III / Classe C', valor: 6388.83 },
  { id: 'nivel_iv_a', text: 'PPSP — Nível IV / Classe A', valor: 6816.88 },
  { id: 'nivel_iv_b', text: 'PPSP — Nível IV / Classe B', valor: 7025.51 },
  { id: 'nivel_iv_c', text: 'PPSP — Nível IV / Classe C', valor: 7234.13 },
  { id: 'nivel_v_a', text: 'PPSP — Nível V / Classe A', valor: 7718.82 },
  { id: 'nivel_v_b', text: 'PPSP — Nível V / Classe B', valor: 7955.04 },
  { id: 'nivel_v_c', text: 'PPSP — Nível V / Classe C', valor: 8191.27 },
  { id: 'nivel_vi_a', text: 'PPSP — Nível VI / Classe A', valor: 8740.08 },
  { id: 'nivel_vi_b', text: 'PPSP — Nível VI / Classe B', valor: 9007.57 },
  { id: 'nivel_vi_c', text: 'PPSP — Nível VI / Classe C', valor: 9275.05 },
  { id: 'nivel_vii_a', text: 'PPSP — Nível VII / Classe A', valor: 9896.48 },
  { id: 'nivel_vii_b', text: 'PPSP — Nível VII / Classe B', valor: 10199.35 },
  { id: 'nivel_vii_c', text: 'PPSP — Nível VII / Classe C', valor: 10502.23 },
],
  'Subsídio mensal da carreira de Policial Penal/SP. Valores da LC SP 1.416/2024 reajustados em 5% pela LC SP 1.425/2025, conferindo o ingresso de R$ 4.695,60 publicado no concurso SAP 2025.',
  'Insalubridade informada pela SAP em R$ 785,67 e DEJEP eventual podem existir conforme escala/lotação; não foram somadas ao subsídio da tabela.',
  'ppsp'
);

const CARGOS_PPRJ = mapearTabelaPoliciaPenal('pprj', [
  { id: 'terceira_classe', text: 'PPRJ — 3ª Classe / ingresso', valor: 7461.95 },
  { id: 'segunda_classe', text: 'PPRJ — 2ª Classe', valor: 8291.06 },
  { id: 'primeira_classe', text: 'PPRJ — 1ª Classe', valor: 9212.29 },
],
  'Remuneração bruta calculada como vencimento-base + GVP de 20%, conforme Caderno de Remuneração GESPERJ/RJ — janeiro/2026 para Policiais Penais.',
  'A GVP já está incluída no valor da remuneração bruta. Insalubridade, auxílio-transporte, auxílio-alimentação e triênio dependem das regras do caderno/remuneração e da situação funcional.',
  'pprj'
);

const CARGOS_PPMG = mapearTabelaPoliciaPenal('ppmg', [
  { id: 'nivel_i_grau_a', text: 'PPMG — Nível I / Grau A', valor: 5332.64 },
  { id: 'nivel_i_grau_b', text: 'PPMG — Nível I / Grau B', valor: 5492.62 },
  { id: 'nivel_i_grau_c', text: 'PPMG — Nível I / Grau C', valor: 5657.40 },
  { id: 'nivel_i_grau_d', text: 'PPMG — Nível I / Grau D', valor: 5827.12 },
  { id: 'nivel_i_grau_e', text: 'PPMG — Nível I / Grau E', valor: 6001.93 },
  { id: 'nivel_i_grau_f', text: 'PPMG — Nível I / Grau F', valor: 6181.99 },
  { id: 'nivel_i_grau_g', text: 'PPMG — Nível I / Grau G', valor: 6367.45 },
  { id: 'nivel_i_grau_h', text: 'PPMG — Nível I / Grau H', valor: 6558.47 },
  { id: 'nivel_i_grau_i', text: 'PPMG — Nível I / Grau I', valor: 6755.23 },
  { id: 'nivel_i_grau_j', text: 'PPMG — Nível I / Grau J', valor: 6957.89 },
  { id: 'nivel_ii_grau_a', text: 'PPMG — Nível II / Grau A', valor: 5571.13 },
  { id: 'nivel_ii_grau_b', text: 'PPMG — Nível II / Grau B', valor: 5738.26 },
  { id: 'nivel_ii_grau_c', text: 'PPMG — Nível II / Grau C', valor: 5910.41 },
  { id: 'nivel_ii_grau_d', text: 'PPMG — Nível II / Grau D', valor: 6087.72 },
  { id: 'nivel_ii_grau_e', text: 'PPMG — Nível II / Grau E', valor: 6270.36 },
  { id: 'nivel_ii_grau_f', text: 'PPMG — Nível II / Grau F', valor: 6458.47 },
  { id: 'nivel_ii_grau_g', text: 'PPMG — Nível II / Grau G', valor: 6652.22 },
  { id: 'nivel_ii_grau_h', text: 'PPMG — Nível II / Grau H', valor: 6851.79 },
  { id: 'nivel_ii_grau_i', text: 'PPMG — Nível II / Grau I', valor: 7057.34 },
  { id: 'nivel_ii_grau_j', text: 'PPMG — Nível II / Grau J', valor: 7269.06 },
  { id: 'nivel_iii_grau_a', text: 'PPMG — Nível III / Grau A', valor: 5820.62 },
  { id: 'nivel_iii_grau_b', text: 'PPMG — Nível III / Grau B', valor: 5995.24 },
  { id: 'nivel_iii_grau_c', text: 'PPMG — Nível III / Grau C', valor: 6175.10 },
  { id: 'nivel_iii_grau_d', text: 'PPMG — Nível III / Grau D', valor: 6360.35 },
  { id: 'nivel_iii_grau_e', text: 'PPMG — Nível III / Grau E', valor: 6551.16 },
  { id: 'nivel_iii_grau_f', text: 'PPMG — Nível III / Grau F', valor: 6747.69 },
  { id: 'nivel_iii_grau_g', text: 'PPMG — Nível III / Grau G', valor: 6950.12 },
  { id: 'nivel_iii_grau_h', text: 'PPMG — Nível III / Grau H', valor: 7158.63 },
  { id: 'nivel_iii_grau_i', text: 'PPMG — Nível III / Grau I', valor: 7373.39 },
  { id: 'nivel_iii_grau_j', text: 'PPMG — Nível III / Grau J', valor: 7594.59 },
  { id: 'nivel_iv_grau_a', text: 'PPMG — Nível IV / Grau A', valor: 6751.92 },
  { id: 'nivel_iv_grau_b', text: 'PPMG — Nível IV / Grau B', valor: 6954.48 },
  { id: 'nivel_iv_grau_c', text: 'PPMG — Nível IV / Grau C', valor: 7163.11 },
  { id: 'nivel_iv_grau_d', text: 'PPMG — Nível IV / Grau D', valor: 7378.01 },
  { id: 'nivel_iv_grau_e', text: 'PPMG — Nível IV / Grau E', valor: 7599.35 },
  { id: 'nivel_iv_grau_f', text: 'PPMG — Nível IV / Grau F', valor: 7827.33 },
  { id: 'nivel_iv_grau_g', text: 'PPMG — Nível IV / Grau G', valor: 8062.15 },
  { id: 'nivel_iv_grau_h', text: 'PPMG — Nível IV / Grau H', valor: 8304.01 },
  { id: 'nivel_iv_grau_i', text: 'PPMG — Nível IV / Grau I', valor: 8553.13 },
  { id: 'nivel_iv_grau_j', text: 'PPMG — Nível IV / Grau J', valor: 8809.72 },
  { id: 'nivel_v_grau_a', text: 'PPMG — Nível V / Grau A', valor: 7832.23 },
  { id: 'nivel_v_grau_b', text: 'PPMG — Nível V / Grau B', valor: 8067.20 },
  { id: 'nivel_v_grau_c', text: 'PPMG — Nível V / Grau C', valor: 8309.21 },
  { id: 'nivel_v_grau_d', text: 'PPMG — Nível V / Grau D', valor: 8558.49 },
  { id: 'nivel_v_grau_e', text: 'PPMG — Nível V / Grau E', valor: 8815.24 },
  { id: 'nivel_v_grau_f', text: 'PPMG — Nível V / Grau F', valor: 9079.70 },
  { id: 'nivel_v_grau_g', text: 'PPMG — Nível V / Grau G', valor: 9352.09 },
  { id: 'nivel_v_grau_h', text: 'PPMG — Nível V / Grau H', valor: 9632.65 },
  { id: 'nivel_v_grau_i', text: 'PPMG — Nível V / Grau I', valor: 9921.63 },
  { id: 'nivel_v_grau_j', text: 'PPMG — Nível V / Grau J', valor: 10219.28 },
],
  'Vencimento básico da carreira de Policial Penal/MG. Ingresso no Nível I Grau A conforme Edital SEJUSP nº 01/2025; graus seguintes estruturados pela tabela de carreira com progressão remuneratória entre graus.',
  'Ajuda de custo para alimentação é devida por dia efetivamente trabalhado conforme Decreto MG nº 49.006/2025; não foi somada por variar conforme escala e dias trabalhados.',
  'ppmg'
);

const CARGOS_PPBA = mapearTabelaPoliciaPenal('ppba', [
  { id: 'agente_30h', text: 'PPBA — Agente Penitenciário / Policial Penal — 30h', valor: 2601.04 },
  { id: 'agente_40h', text: 'PPBA — Agente Penitenciário / Policial Penal — 40h', valor: 4478.31 },
],
  'Remuneração bruta oficial do edital SEAP/BA nº 02/2024: 30h composta por vencimento básico + GSP; 40h conforme valor máximo indicado no edital.',
  'Valores do edital não incluem vantagens pessoais, adicionais de escala, indenizações ou parcelas condicionadas à lotação/ficha funcional.',
  'ppba'
);

const CARGOS_PPPR = mapearTabelaPoliciaPenal('pppr', [
  { id: 'classe_xii', text: 'PPPR — Classe XII / ingresso', valor: 4300.00 },
  { id: 'classe_xi', text: 'PPPR — Classe XI', valor: 6000.00 },
  { id: 'classe_x', text: 'PPPR — Classe X', valor: 6800.00 },
  { id: 'classe_ix', text: 'PPPR — Classe IX', valor: 7300.00 },
  { id: 'classe_viii', text: 'PPPR — Classe VIII', valor: 8200.00 },
  { id: 'classe_vii', text: 'PPPR — Classe VII', valor: 9100.00 },
  { id: 'classe_vi', text: 'PPPR — Classe VI', valor: 10000.00 },
  { id: 'classe_v', text: 'PPPR — Classe V', valor: 11000.00 },
  { id: 'classe_iv', text: 'PPPR — Classe IV', valor: 12300.00 },
  { id: 'classe_iii', text: 'PPPR — Classe III', valor: 14000.00 },
  { id: 'classe_ii', text: 'PPPR — Classe II', valor: 15700.00 },
  { id: 'classe_i', text: 'PPPR — Classe I / final', valor: 17500.00 },
],
  'Subsídio mensal por classe do Quadro Próprio da Polícia Penal do Paraná, conforme LC PR 245/2022 e alteração da LC PR 283/2025.',
  'Carreira em subsídio. Décimo terceiro, férias, diárias, função, auxílio-alimentação e parcelas indenizatórias dependem de regra própria e não foram somados ao subsídio.',
  'pppr'
);

const CARGOS_PPRS = mapearTabelaPoliciaPenal('pprs', [
  { id: 'policial_penal_inicial', text: 'PPRS — Policial Penal / antigo Agente Penitenciário — inicial', valor: 6305.76 },
  { id: 'policial_penal_final', text: 'PPRS — Policial Penal / antigo Agente Penitenciário — final', valor: 17197.52 },
  { id: 'tecnico_administrativo_inicial', text: 'PPRS — Técnico Administrativo da Polícia Penal — inicial', valor: 5159.25 },
  { id: 'tecnico_administrativo_final', text: 'PPRS — Técnico Administrativo da Polícia Penal — final', valor: 9745.26 },
  { id: 'analista_inicial', text: 'PPRS — Analista da Polícia Penal / antigo Técnico Superior Penitenciário — inicial', valor: 9745.26 },
  { id: 'analista_final', text: 'PPRS — Analista da Polícia Penal / antigo Técnico Superior Penitenciário — final', valor: 18917.27 },
],
  'Remuneração mensal inicial/final de referência conforme relações remuneratórias RHE/RS e transição/nomenclatura da LC RS 16.449/2025.',
  'Valores de referência por cargo/classe. Adicionais, gratificações, indenizações e eventuais auxílios dependem de rubrica, lotação e situação funcional; não foram somados automaticamente.',
  'pprs'
);

const CARGOS_PPSC = mapearTabelaPoliciaPenal('ppsc', [
  { id: 'classe_i', text: 'PPSC — Classe I / ingresso', valor: 7290.00 },
  { id: 'classe_ii', text: 'PPSC — Classe II', valor: 7897.50 },
  { id: 'classe_iii', text: 'PPSC — Classe III', valor: 8505.00 },
  { id: 'classe_iv', text: 'PPSC — Classe IV', valor: 9720.00 },
  { id: 'classe_v', text: 'PPSC — Classe V', valor: 10969.02 },
  { id: 'classe_vi', text: 'PPSC — Classe VI', valor: 12904.52 },
  { id: 'classe_vii', text: 'PPSC — Classe VII', valor: 15181.43 },
  { id: 'classe_viii', text: 'PPSC — Classe VIII / final', valor: 19440.00 },
],
  'Subsídio mensal da carreira de Policial Penal/SC por classe, com referência da LC SC 774/2021 e atualização salarial da segurança pública em 2025/2026.',
  'Carreira remunerada por subsídio. Auxílio-alimentação, convocação, diárias, função e outras parcelas do art. 44 da LC SC 774/2021 dependem de regra, escala e situação funcional.',
  'ppsc'
);

const CARGOS_PPES = mapearTabelaPoliciaPenal('ppes', [
  { id: '3a_classe_nivel_1', text: 'PPES — 3ª Classe / Nível 1', valor: 5631.16 },
  { id: '3a_classe_nivel_2', text: 'PPES — 3ª Classe / Nível 2', valor: 5743.79 },
  { id: '3a_classe_nivel_3', text: 'PPES — 3ª Classe / Nível 3', valor: 5858.66 },
  { id: '3a_classe_nivel_4', text: 'PPES — 3ª Classe / Nível 4', valor: 5975.83 },
  { id: '3a_classe_nivel_5', text: 'PPES — 3ª Classe / Nível 5', valor: 6095.36 },
  { id: '3a_classe_nivel_6', text: 'PPES — 3ª Classe / Nível 6', valor: 6217.26 },
  { id: '3a_classe_nivel_7', text: 'PPES — 3ª Classe / Nível 7', valor: 6341.60 },
  { id: '3a_classe_nivel_8', text: 'PPES — 3ª Classe / Nível 8', valor: 6468.44 },
  { id: '3a_classe_nivel_9', text: 'PPES — 3ª Classe / Nível 9', valor: 6597.81 },
  { id: '3a_classe_nivel_10', text: 'PPES — 3ª Classe / Nível 10', valor: 6729.76 },
  { id: '3a_classe_nivel_11', text: 'PPES — 3ª Classe / Nível 11', valor: 6864.36 },
  { id: '3a_classe_nivel_12', text: 'PPES — 3ª Classe / Nível 12', valor: 7001.64 },
  { id: '3a_classe_nivel_13', text: 'PPES — 3ª Classe / Nível 13', valor: 7141.68 },
  { id: '3a_classe_nivel_14', text: 'PPES — 3ª Classe / Nível 14', valor: 7284.51 },
  { id: '3a_classe_nivel_15', text: 'PPES — 3ª Classe / Nível 15', valor: 7430.20 },
  { id: '2a_classe_nivel_1', text: 'PPES — 2ª Classe / Nível 1', valor: 6475.84 },
  { id: '2a_classe_nivel_2', text: 'PPES — 2ª Classe / Nível 2', valor: 6605.35 },
  { id: '2a_classe_nivel_3', text: 'PPES — 2ª Classe / Nível 3', valor: 6737.46 },
  { id: '2a_classe_nivel_4', text: 'PPES — 2ª Classe / Nível 4', valor: 6872.21 },
  { id: '2a_classe_nivel_5', text: 'PPES — 2ª Classe / Nível 5', valor: 7009.65 },
  { id: '2a_classe_nivel_6', text: 'PPES — 2ª Classe / Nível 6', valor: 7149.85 },
  { id: '2a_classe_nivel_7', text: 'PPES — 2ª Classe / Nível 7', valor: 7292.85 },
  { id: '2a_classe_nivel_8', text: 'PPES — 2ª Classe / Nível 8', valor: 7438.70 },
  { id: '2a_classe_nivel_9', text: 'PPES — 2ª Classe / Nível 9', valor: 7587.47 },
  { id: '2a_classe_nivel_10', text: 'PPES — 2ª Classe / Nível 10', valor: 7739.23 },
  { id: '2a_classe_nivel_11', text: 'PPES — 2ª Classe / Nível 11', valor: 7894.01 },
  { id: '2a_classe_nivel_12', text: 'PPES — 2ª Classe / Nível 12', valor: 8051.89 },
  { id: '2a_classe_nivel_13', text: 'PPES — 2ª Classe / Nível 13', valor: 8212.93 },
  { id: '2a_classe_nivel_14', text: 'PPES — 2ª Classe / Nível 14', valor: 8377.19 },
  { id: '2a_classe_nivel_15', text: 'PPES — 2ª Classe / Nível 15', valor: 8544.72 },
  { id: '1a_classe_nivel_1', text: 'PPES — 1ª Classe / Nível 1', valor: 7447.20 },
  { id: '1a_classe_nivel_2', text: 'PPES — 1ª Classe / Nível 2', valor: 7596.16 },
  { id: '1a_classe_nivel_3', text: 'PPES — 1ª Classe / Nível 3', valor: 7748.08 },
  { id: '1a_classe_nivel_4', text: 'PPES — 1ª Classe / Nível 4', valor: 7903.04 },
  { id: '1a_classe_nivel_5', text: 'PPES — 1ª Classe / Nível 5', valor: 8061.10 },
  { id: '1a_classe_nivel_6', text: 'PPES — 1ª Classe / Nível 6', valor: 8222.32 },
  { id: '1a_classe_nivel_7', text: 'PPES — 1ª Classe / Nível 7', valor: 8386.77 },
  { id: '1a_classe_nivel_8', text: 'PPES — 1ª Classe / Nível 8', valor: 8554.51 },
  { id: '1a_classe_nivel_9', text: 'PPES — 1ª Classe / Nível 9', valor: 8725.59 },
  { id: '1a_classe_nivel_10', text: 'PPES — 1ª Classe / Nível 10', valor: 8900.11 },
  { id: '1a_classe_nivel_11', text: 'PPES — 1ª Classe / Nível 11', valor: 9078.11 },
  { id: '1a_classe_nivel_12', text: 'PPES — 1ª Classe / Nível 12', valor: 9259.67 },
  { id: '1a_classe_nivel_13', text: 'PPES — 1ª Classe / Nível 13', valor: 9444.87 },
  { id: '1a_classe_nivel_14', text: 'PPES — 1ª Classe / Nível 14', valor: 9633.77 },
  { id: '1a_classe_nivel_15', text: 'PPES — 1ª Classe / Nível 15', valor: 9826.44 },
  { id: 'classe_especial_nivel_1', text: 'PPES — Classe Especial / Nível 1', valor: 8564.30 },
  { id: 'classe_especial_nivel_2', text: 'PPES — Classe Especial / Nível 2', valor: 8735.57 },
  { id: 'classe_especial_nivel_3', text: 'PPES — Classe Especial / Nível 3', valor: 8910.29 },
  { id: 'classe_especial_nivel_4', text: 'PPES — Classe Especial / Nível 4', valor: 9088.50 },
  { id: 'classe_especial_nivel_5', text: 'PPES — Classe Especial / Nível 5', valor: 9270.27 },
  { id: 'classe_especial_nivel_6', text: 'PPES — Classe Especial / Nível 6', valor: 9455.67 },
  { id: 'classe_especial_nivel_7', text: 'PPES — Classe Especial / Nível 7', valor: 9644.79 },
  { id: 'classe_especial_nivel_8', text: 'PPES — Classe Especial / Nível 8', valor: 9837.68 },
  { id: 'classe_especial_nivel_9', text: 'PPES — Classe Especial / Nível 9', valor: 10034.43 },
  { id: 'classe_especial_nivel_10', text: 'PPES — Classe Especial / Nível 10', valor: 10235.13 },
  { id: 'classe_especial_nivel_11', text: 'PPES — Classe Especial / Nível 11', valor: 10439.82 },
  { id: 'classe_especial_nivel_12', text: 'PPES — Classe Especial / Nível 12', valor: 10648.62 },
  { id: 'classe_especial_nivel_13', text: 'PPES — Classe Especial / Nível 13', valor: 10861.59 },
  { id: 'classe_especial_nivel_14', text: 'PPES — Classe Especial / Nível 14', valor: 11078.82 },
  { id: 'classe_especial_nivel_15', text: 'PPES — Classe Especial / Nível 15', valor: 11300.41 },
],
  'Subsídio mensal da carreira de Policial Penal/ES por classe e nível, conforme estrutura da LC ES 1.059/2023 e tabela usada no concurso PPES 2025.',
  'Auxílio-alimentação de R$ 800,00 informado no concurso PPES 2025; não incluído no campo de subsídio bruto. Outras verbas dependem de escala, lotação e situação funcional.',
  'ppes',
  { beneficios: 800 }
);



const CARGOS_PPMS = mapearTabelaPoliciaPenal('ppms', [
  { id: "especial_nivel_1", text: "PPMS — Policial Penal — Classe Especial / Nível 1", valor: 9380.02, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "especial_nivel_2", text: "PPMS — Policial Penal — Classe Especial / Nível 2", valor: 10318.02, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "especial_nivel_3", text: "PPMS — Policial Penal — Classe Especial / Nível 3", valor: 10787.02, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "especial_nivel_4", text: "PPMS — Policial Penal — Classe Especial / Nível 4", valor: 11256.02, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "especial_nivel_5", text: "PPMS — Policial Penal — Classe Especial / Nível 5", valor: 11725.02, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "especial_nivel_6", text: "PPMS — Policial Penal — Classe Especial / Nível 6", valor: 12194.02, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "especial_nivel_7", text: "PPMS — Policial Penal — Classe Especial / Nível 7", valor: 12663.02, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "especial_nivel_8", text: "PPMS — Policial Penal — Classe Especial / Nível 8", valor: 13132.02, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "primeira_nivel_1", text: "PPMS — Policial Penal — Classe Primeira / Nível 1", valor: 8828.25, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "primeira_nivel_2", text: "PPMS — Policial Penal — Classe Primeira / Nível 2", valor: 9711.08, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "primeira_nivel_3", text: "PPMS — Policial Penal — Classe Primeira / Nível 3", valor: 10152.49, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "primeira_nivel_4", text: "PPMS — Policial Penal — Classe Primeira / Nível 4", valor: 10593.90, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "primeira_nivel_5", text: "PPMS — Policial Penal — Classe Primeira / Nível 5", valor: 11035.31, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "primeira_nivel_6", text: "PPMS — Policial Penal — Classe Primeira / Nível 6", valor: 11476.73, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "primeira_nivel_7", text: "PPMS — Policial Penal — Classe Primeira / Nível 7", valor: 11918.14, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "primeira_nivel_8", text: "PPMS — Policial Penal — Classe Primeira / Nível 8", valor: 12359.55, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "segunda_nivel_1", text: "PPMS — Policial Penal — Classe Segunda / Nível 1", valor: 8276.48, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "segunda_nivel_2", text: "PPMS — Policial Penal — Classe Segunda / Nível 2", valor: 9104.13, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "segunda_nivel_3", text: "PPMS — Policial Penal — Classe Segunda / Nível 3", valor: 9517.96, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "segunda_nivel_4", text: "PPMS — Policial Penal — Classe Segunda / Nível 4", valor: 9931.78, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "segunda_nivel_5", text: "PPMS — Policial Penal — Classe Segunda / Nível 5", valor: 10345.61, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "segunda_nivel_6", text: "PPMS — Policial Penal — Classe Segunda / Nível 6", valor: 10759.43, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "segunda_nivel_7", text: "PPMS — Policial Penal — Classe Segunda / Nível 7", valor: 11173.25, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "segunda_nivel_8", text: "PPMS — Policial Penal — Classe Segunda / Nível 8", valor: 11587.08, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "terceira_nivel_1", text: "PPMS — Policial Penal — Classe Terceira / Nível 1", valor: 7724.72, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "terceira_nivel_2", text: "PPMS — Policial Penal — Classe Terceira / Nível 2", valor: 8497.19, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "terceira_nivel_3", text: "PPMS — Policial Penal — Classe Terceira / Nível 3", valor: 8883.43, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "terceira_nivel_4", text: "PPMS — Policial Penal — Classe Terceira / Nível 4", valor: 9269.66, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "terceira_nivel_5", text: "PPMS — Policial Penal — Classe Terceira / Nível 5", valor: 9655.90, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "terceira_nivel_6", text: "PPMS — Policial Penal — Classe Terceira / Nível 6", valor: 10042.14, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "terceira_nivel_7", text: "PPMS — Policial Penal — Classe Terceira / Nível 7", valor: 10428.37, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "terceira_nivel_8", text: "PPMS — Policial Penal — Classe Terceira / Nível 8", valor: 10814.61, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "quarta_nivel_1", text: "PPMS — Policial Penal — Classe Quarta / Nível 1", valor: 7172.95, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "quarta_nivel_2", text: "PPMS — Policial Penal — Classe Quarta / Nível 2", valor: 7890.25, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "quarta_nivel_3", text: "PPMS — Policial Penal — Classe Quarta / Nível 3", valor: 8248.90, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "quarta_nivel_4", text: "PPMS — Policial Penal — Classe Quarta / Nível 4", valor: 8607.54, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "quarta_nivel_5", text: "PPMS — Policial Penal — Classe Quarta / Nível 5", valor: 8966.19, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "quarta_nivel_6", text: "PPMS — Policial Penal — Classe Quarta / Nível 6", valor: 9324.84, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "quarta_nivel_7", text: "PPMS — Policial Penal — Classe Quarta / Nível 7", valor: 9683.49, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "quarta_nivel_8", text: "PPMS — Policial Penal — Classe Quarta / Nível 8", valor: 10042.14, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "quinta_nivel_1", text: "PPMS — Policial Penal — Classe Quinta / Nível 1", valor: 6621.19, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "quinta_nivel_2", text: "PPMS — Policial Penal — Classe Quinta / Nível 2", valor: 7283.31, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "quinta_nivel_3", text: "PPMS — Policial Penal — Classe Quinta / Nível 3", valor: 7614.37, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "quinta_nivel_4", text: "PPMS — Policial Penal — Classe Quinta / Nível 4", valor: 7945.43, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "quinta_nivel_5", text: "PPMS — Policial Penal — Classe Quinta / Nível 5", valor: 8276.48, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "quinta_nivel_6", text: "PPMS — Policial Penal — Classe Quinta / Nível 6", valor: 8607.54, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "quinta_nivel_7", text: "PPMS — Policial Penal — Classe Quinta / Nível 7", valor: 8938.60, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "quinta_nivel_8", text: "PPMS — Policial Penal — Classe Quinta / Nível 8", valor: 9269.66, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "sexta_nivel_1", text: "PPMS — Policial Penal — Classe Sexta / Nível 1", valor: 6069.42, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "sexta_nivel_2", text: "PPMS — Policial Penal — Classe Sexta / Nível 2", valor: 6676.36, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "sexta_nivel_3", text: "PPMS — Policial Penal — Classe Sexta / Nível 3", valor: 6979.84, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "sexta_nivel_4", text: "PPMS — Policial Penal — Classe Sexta / Nível 4", valor: 7283.31, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "sexta_nivel_5", text: "PPMS — Policial Penal — Classe Sexta / Nível 5", valor: 7586.78, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "sexta_nivel_6", text: "PPMS — Policial Penal — Classe Sexta / Nível 6", valor: 7890.25, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "sexta_nivel_7", text: "PPMS — Policial Penal — Classe Sexta / Nível 7", valor: 8193.72, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "sexta_nivel_8", text: "PPMS — Policial Penal — Classe Sexta / Nível 8", valor: 8497.19, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "inicial_nivel_1", text: "PPMS — Policial Penal — Classe Inicial / Nível 1", valor: 5517.66, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "inicial_nivel_2", text: "PPMS — Policial Penal — Classe Inicial / Nível 2", valor: 6069.42, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "inicial_nivel_3", text: "PPMS — Policial Penal — Classe Inicial / Nível 3", valor: 6345.31, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "inicial_nivel_4", text: "PPMS — Policial Penal — Classe Inicial / Nível 4", valor: 6621.19, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "inicial_nivel_5", text: "PPMS — Policial Penal — Classe Inicial / Nível 5", valor: 6897.07, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "inicial_nivel_6", text: "PPMS — Policial Penal — Classe Inicial / Nível 6", valor: 7172.95, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "inicial_nivel_7", text: "PPMS — Policial Penal — Classe Inicial / Nível 7", valor: 7448.84, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." },
  { id: "inicial_nivel_8", text: "PPMS — Policial Penal — Classe Inicial / Nível 8", valor: 7724.72, badge: "Tabela 2026", criterio: "Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.", benefDesc: "Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente." }
],
  'Tabela Subsídio AGEPEN/MS 2026, elaborada pela Divisão de Recursos Humanos da AGEPEN/MS, com reajuste de 3,81% pela Lei MS nº 6.562/2026.',
  'Auxílios, adicionais, plantões, indenizações, gratificações e verbas por escala/lotação dependem de lei, rubrica, unidade e situação funcional; não foram somados automaticamente.',
  'ppms',
  { badge: 'Tabela 2026' }
);

const CARGOS_PPMT = mapearTabelaPoliciaPenal('ppmt', [
  { id: "nivel_001_a", text: "PPMT — Policial Penal — Nível 001 / Classe A", valor: 5155.94, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_001_b", text: "PPMT — Policial Penal — Nível 001 / Classe B", valor: 6252.58, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_001_c", text: "PPMT — Policial Penal — Nível 001 / Classe C", valor: 8051.67, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_001_d", text: "PPMT — Policial Penal — Nível 001 / Classe D", valor: 10459.21, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_002_a", text: "PPMT — Policial Penal — Nível 002 / Classe A", valor: 5132.60, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_002_b", text: "PPMT — Policial Penal — Nível 002 / Classe B", valor: 6728.00, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_002_c", text: "PPMT — Policial Penal — Nível 002 / Classe C", valor: 8355.25, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_002_d", text: "PPMT — Policial Penal — Nível 002 / Classe D", valor: 10853.51, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_003_a", text: "PPMT — Policial Penal — Nível 003 / Classe A", valor: 5326.11, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_003_b", text: "PPMT — Policial Penal — Nível 003 / Classe B", valor: 6981.66, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_003_c", text: "PPMT — Policial Penal — Nível 003 / Classe C", valor: 8670.20, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_003_d", text: "PPMT — Policial Penal — Nível 003 / Classe D", valor: 11262.73, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_004_a", text: "PPMT — Policial Penal — Nível 004 / Classe A", valor: 5526.88, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_004_b", text: "PPMT — Policial Penal — Nível 004 / Classe B", valor: 7244.90, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_004_c", text: "PPMT — Policial Penal — Nível 004 / Classe C", valor: 8997.07, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_004_d", text: "PPMT — Policial Penal — Nível 004 / Classe D", valor: 11687.31, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_005_a", text: "PPMT — Policial Penal — Nível 005 / Classe A", valor: 5735.25, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_005_b", text: "PPMT — Policial Penal — Nível 005 / Classe B", valor: 7517.99, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_005_c", text: "PPMT — Policial Penal — Nível 005 / Classe C", valor: 9951.12, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_005_d", text: "PPMT — Policial Penal — Nível 005 / Classe D", valor: 12936.40, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_006_a", text: "PPMT — Policial Penal — Nível 006 / Classe A", valor: 5951.50, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_006_b", text: "PPMT — Policial Penal — Nível 006 / Classe B", valor: 7801.44, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_006_c", text: "PPMT — Policial Penal — Nível 006 / Classe C", valor: 10326.28, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_006_d", text: "PPMT — Policial Penal — Nível 006 / Classe D", valor: 13424.19, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_007_a", text: "PPMT — Policial Penal — Nível 007 / Classe A", valor: 6175.81, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_007_b", text: "PPMT — Policial Penal — Nível 007 / Classe B", valor: 8095.55, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_007_c", text: "PPMT — Policial Penal — Nível 007 / Classe C", valor: 10715.56, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_007_d", text: "PPMT — Policial Penal — Nível 007 / Classe D", valor: 13930.21, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_008_a", text: "PPMT — Policial Penal — Nível 008 / Classe A", valor: 6408.70, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_008_b", text: "PPMT — Policial Penal — Nível 008 / Classe B", valor: 8400.76, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_008_c", text: "PPMT — Policial Penal — Nível 008 / Classe C", valor: 11119.54, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_008_d", text: "PPMT — Policial Penal — Nível 008 / Classe D", valor: 14455.39, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_009_a", text: "PPMT — Policial Penal — Nível 009 / Classe A", valor: 6650.29, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_009_b", text: "PPMT — Policial Penal — Nível 009 / Classe B", valor: 8717.48, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_009_c", text: "PPMT — Policial Penal — Nível 009 / Classe C", valor: 11538.73, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_009_d", text: "PPMT — Policial Penal — Nível 009 / Classe D", valor: 15000.38, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_010_a", text: "PPMT — Policial Penal — Nível 010 / Classe A", valor: 6900.98, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_010_b", text: "PPMT — Policial Penal — Nível 010 / Classe B", valor: 9046.09, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_010_c", text: "PPMT — Policial Penal — Nível 010 / Classe C", valor: 11973.79, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_010_d", text: "PPMT — Policial Penal — Nível 010 / Classe D", valor: 15565.87, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_011_a", text: "PPMT — Policial Penal — Nível 011 / Classe A", valor: 7161.18, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_011_b", text: "PPMT — Policial Penal — Nível 011 / Classe B", valor: 9387.11, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_011_c", text: "PPMT — Policial Penal — Nível 011 / Classe C", valor: 12425.19, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_011_d", text: "PPMT — Policial Penal — Nível 011 / Classe D", valor: 16152.70, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_012_a", text: "PPMT — Policial Penal — Nível 012 / Classe A", valor: 7431.15, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_012_b", text: "PPMT — Policial Penal — Nível 012 / Classe B", valor: 9741.03, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_012_c", text: "PPMT — Policial Penal — Nível 012 / Classe C", valor: 12893.61, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." },
  { id: "nivel_012_d", text: "PPMT — Policial Penal — Nível 012 / Classe D", valor: 16761.66, badge: "Tabela 2026", criterio: "Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT para Policial Penal, período selecionado 01/01/2026-atual.", benefDesc: "Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente." }
],
  'Tabela salarial de 40h do Portal do Servidor/SEPLAG-MT, período 01/01/2026-atual, para o cargo de Policial Penal.',
  'Adicionais, plantões, indenizações, gratificações, auxílio-alimentação e parcelas por escala/lotação dependem de rubrica, legislação estadual e situação funcional; não foram somados automaticamente.',
  'ppmt',
  { badge: 'Tabela 2026' }
);

/* ============================================================ */
/* === AÇÕES JUDICIAIS (com tipo, ano, prazo, base legal) ===== */
/* ============================================================ */

const CARGOS_PPAC = mapearTabelaPoliciaPenal(
  'ppac',
  [
    { id: 'agente_policial_penal_ac', text: 'Agente de Polícia Penal PPAC — edital SEAD/IAPEN 2023', valor: 4366.60, resumo: 'Remuneração inicial informada no edital SEAD/IAPEN 001/2023 para 40h semanais, dedicação exclusiva e escala.', selected: true },
    { id: 'especialista_iapen_ac', text: 'Especialista / Psicólogo / Assistente Social IAPEN-AC — edital 2023', valor: 5131.34, resumo: 'Remuneração de referência dos cargos de nível superior do IAPEN/AC no edital 2023.' },
    { id: 'engenheiro_iapen_ac', text: 'Engenheiro Civil IAPEN-AC — edital 2023', valor: 6561.76, resumo: 'Remuneração de referência do cargo de Engenheiro Civil no edital SEAD/IAPEN 2023.' }
  ],
  'Remuneração informada no edital SEAD/IAPEN 001/2023 e nas tabelas oficiais do Portal do Estado do Acre. Conferir LC AC 392/2021, Lei 2.180/IAPEN, atualizações posteriores e contracheque.',
  'Auxílio saúde, risco de vida, etapa alimentação, titulação, sexta-parte, prêmio anual, plantões, indenizações e vantagens pessoais não foram somados automaticamente.',
  'ppac',
  { badge: 'Edital 2023' }
);

/* BLOCO 15.4 — Base de dados das ações judiciais por instituição */

;


/* ===== js/data/bases-conteudo.js ===== */
/* Chunk gerado a partir de js/script-original.js — Bases de ações judiciais, associações, concursos e estado inicial.
   Mantém a ordem original para preservar compatibilidade. */

const ACOES_JUDICIAIS = {
  pmac: [
    { titulo: 'PMAC — sexta-parte e adicionais por tempo de serviço', status: 'Verificar ficha individual', ano: 'Tema permanente', tipo: 'individual', desc: 'Conferir se sexta-parte, adicional por tempo de serviço e reflexos foram implantados corretamente após o cumprimento dos requisitos legais e se a base usada no contracheque corresponde à legislação estadual.', base: 'LC AC 39/1993, LC AC 164/2006 e tabela remuneratória estadual; depende de histórico funcional e ficha financeira.', fonte: 'Portal do Estado do Acre — tabelas salariais', fonteUrl: 'https://estado.ac.gov.br/tabelas-salariais/', atualizado: 'Maio/2026' },
    { titulo: 'PMAC — serviço complementar, localização especial e chefia', status: 'Depende de escala/designação', ano: 'Tema de conferência', tipo: 'individual', desc: 'Pode haver discussão quando houver serviço complementar, lotação especial, designação de chefia ou ato funcional formal com pagamento ausente, incompleto ou calculado em base divergente.', base: 'Tabela PMAC/CBMAC e normas estaduais de vantagens; exige ordem de serviço, boletins, escalas e contracheques.', fonte: 'Portal do Estado do Acre — tabela LC 164', fonteUrl: 'https://estado.ac.gov.br/tabelas-salariais/', atualizado: 'Maio/2026' }
  ],
  pcac: [
    { titulo: 'PCAC — titulação e progressão por classe', status: 'Conferir cargo e classe', ano: 'Tema permanente', tipo: 'individual', desc: 'Verificar enquadramento na classe correta e pagamento de titulação, progressão e vantagens pessoais para Delegado, Perito, Médico-Legista, Agente, Escrivão, Papiloscopista e Auxiliar de Necropsia.', base: 'LC AC 303/2015, Lei AC 3.107/2015, Lei AC 3.228/2017 e tabelas salariais oficiais.', fonte: 'Portal do Estado do Acre — tabelas PCAC', fonteUrl: 'https://estado.ac.gov.br/tabelas-salariais/', atualizado: 'Maio/2026' },
    { titulo: 'PCAC — serviço complementar e vantagens absorvidas', status: 'Análise por contracheque', ano: 'Tema de conferência', tipo: 'individual', desc: 'As tabelas indicam serviço complementar e regras de absorção de vantagens. A ação só deve ser cogitada após comparar lei, ato funcional, classe, cargo, fichas financeiras e rubricas efetivamente pagas.', base: 'Lei AC 2.250/2009, Lei AC 3.228/2017, LC AC 303/2015 e normas remuneratórias da PCAC.', fonte: 'Portal do Estado do Acre — tabelas salariais', fonteUrl: 'https://estado.ac.gov.br/tabelas-salariais/', atualizado: 'Maio/2026' }
  ],
  ppac: [
    { titulo: 'PPAC — enquadramento, posse e nomeações do concurso IAPEN 2023', status: 'Acompanhar atos oficiais', ano: '2023–2025', tipo: 'coletivo/individual', desc: 'Para aprovados e nomeados, conferir ordem de classificação, convocação, posse, lotação, curso de formação e eventuais efeitos financeiros conforme atos publicados pela SEAD/IAPEN.', base: 'Edital SEAD/IAPEN 001/2023, homologação de 2025 e atos de nomeação/posse.', fonte: 'SEAD/AC — editais IAPEN', fonteUrl: 'https://sead.ac.gov.br/gestao-governamental/editais-e-concursos/iapen-instituto-de-administracao-penitenciaria-do-acre/', atualizado: 'Maio/2026' },
    { titulo: 'PPAC — risco de vida, etapa alimentação, auxílio saúde e titulação', status: 'Verificar cargo/rubrica', ano: 'Tema permanente', tipo: 'individual', desc: 'A tabela do IAPEN e o edital indicam vantagens específicas, mas o cálculo depende do cargo, legislação vigente, lotação, jornada, contracheque e eventuais atos administrativos.', base: 'Lei AC 2.180/IAPEN, LC AC 392/2021, edital SEAD/IAPEN 2023 e contracheques.', fonte: 'Portal do Estado do Acre e SEAD/IAPEN', fonteUrl: 'https://estado.ac.gov.br/tabelas-salariais/', atualizado: 'Maio/2026' }
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
    site: 'https://agencia.ac.gov.br/'
  },
  ppac: {
    edital: 'IAPEN/PPAC — Edital nº 001/2023 SEAD/IAPEN — Agente de Polícia Penal',
    salario: 'Agente de Polícia Penal: R$ 4.366,60, 40h semanais, dedicação exclusiva e escala.',
    vagas: '261 vagas para Agente de Polícia Penal, além de cargos de apoio do IAPEN/AC',
    cotas: 'Conferir edital SEAD/IAPEN 001/2023',
    idade: 'Conferir requisitos do edital',
    escolaridade: 'Superior completo e CNH categoria B até o curso de formação para Agente de Polícia Penal.',
    materias: 'Língua Portuguesa, Raciocínio Lógico, Informática, Direito Constitucional, Administrativo, Penal, Processo Penal, Execução Penal, Direitos Humanos e legislação específica conforme edital.',
    banca: 'IBFC',
    inscritos: 'Conferir página oficial do concurso SEAD/IAPEN',
    etapas: 'Prova objetiva, prova discursiva, títulos, TAF, avaliação psicológica, avaliação médica, investigação social e curso de formação.',
    cfsd: 'Curso de formação com convocações e publicações pela SEAD/IAPEN.',
    estagio: 'Conferir LC estadual, edital e atos de posse.',
    validade: 'Resultado final/homologação publicados em 2025; acompanhar prorrogação, nomeações e atos oficiais.',
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

;


/* ===== js/ui/navegacao-ui.js ===== */
/* Chunk gerado a partir de js/script-original.js — Helpers, menu, tema, navegação e popularização de cargos.
   Mantém a ordem original para preservar compatibilidade. */

function normalizarInstituicao(inst) {
  return INSTITUICOES_VALIDAS.includes(inst) ? inst : 'pmesp';
}

function isPoliciaPenal(inst) {
  return /^pp/.test(String(inst || ''));
}

function getSiglaInstituicao(inst) {
  const info = HEADER_INSTITUICOES_INFO?.[inst];
  return info?.titulo || String(inst || '').toUpperCase();
}

function getNomeInstituicao(inst) {
  const info = HEADER_INSTITUICOES_INFO?.[inst];
  return info?.desc || 'Polícia Penal';
}

function getUnidadeInstituicao(inst) {
  const estado = getEstadoDaInstituicao(inst);
  return HEADER_ESTADOS?.[estado]?.nome || 'unidade federativa';
}

/* BLOCO 15.7 — Funções utilitárias gerais */
const fmt = v => `R$ ${(+v || 0).toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
const valEl = id => parseFloat(document.getElementById(id)?.value) || 0;
const BA_REFS = ['I', 'II', 'III', 'IV', 'V'];
const refBa = i => BA_REFS[Math.max(0, Math.min(4, parseInt(i, 10) || 0))] || 'I';
const idxRefBa = id => Math.max(0, Math.min(4, parseInt(document.getElementById(id)?.value || '0', 10) || 0));

function debounce(fn, ms = 150) {
  let t; return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
}

function mostrarToast(msg, tipo = 'success') {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.className = 'toast show' + (tipo === 'error' ? ' error' : '');
  setTimeout(() => { toast.className = 'toast'; }, 3500);
}

function escapeHtml(str = '') {
  return String(str).replace(/[&<>'"]/g, ch => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;'}[ch]));
}

/* ============================================================ */
/* === UI: MENU, TEMA, TROCA DE PÁGINA ======================== */
/* ============================================================ */
/* BLOCO 15.8 — Menu lateral, navegação por abas e tema */
function toggleMenu(forceOpen) {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('menuOverlay');
  const btn = document.querySelector('.menu-btn');
  if (!sidebar || !overlay || !btn) return;

  const shouldOpen = typeof forceOpen === 'boolean'
    ? forceOpen
    : !sidebar.classList.contains('active');

  sidebar.classList.toggle('active', shouldOpen);
  overlay.classList.toggle('active', shouldOpen);
  btn.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
}

function closeMenu() {
  toggleMenu(false);
}

function abrirPaginaInicial() {
  // Volta ao mesmo estado visual da primeira entrada no portal:
  // página principal, cabeçalho institucional genérico e nenhum Estado/instituição marcado.
  aplicarHeaderInicialPortal();
  switchPage('principal');
  try {
    if (window.location.hash !== '#principal') window.history.replaceState(null, '', '#principal');
  } catch (e) { /* navegação silenciosa */ }
}

function switchPage(page) {
  document.querySelectorAll('.page-section').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.sidebar-nav a').forEach(a => a.classList.remove('active'));

  const pageEl = document.getElementById('page-' + page);
  const menuEl = document.getElementById('menu-' + page);
  if (!pageEl || !menuEl) return;

  pageEl.classList.add('active');
  menuEl.classList.add('active');
  atualizarHeaderDesc();
  atualizarVisibilidadeResumoInstitucional(page);

  // Fecha a sidebar automaticamente após escolher uma aba, liberando a área principal da página.
  closeMenu();

  // Atualiza dados da página alvo
  if (page === 'direitos') analisarDireitos();
  else if (page === 'concursos') carregarConcursos();
  else if (page === 'comparar') inicializarComparadorCarreiras();
  else if (page === 'acoes') carregarAcoes();
  else if (page === 'associacoes') carregarAssociacoes();
  else if (page === 'remuneracao') carregarRemuneracaoTabelada();
}

function atualizarVisibilidadeResumoInstitucional(page = '') {
  const ativa = document.querySelector('.page-section.active');
  const pagina = page || (ativa ? ativa.id.replace('page-', '') : 'principal');
  const painelResumo = document.querySelector('.header-facts-panel');
  const cardInstitucional = document.querySelector('.header-institution-card');
  const blocoPrincipal = document.querySelector('.header-institution-main');
  const mostrarResumo = pagina === 'principal';

  if (painelResumo) {
    painelResumo.hidden = !mostrarResumo;
    painelResumo.style.display = mostrarResumo ? '' : 'none';
    painelResumo.setAttribute('aria-hidden', mostrarResumo ? 'false' : 'true');
  }

  if (cardInstitucional) cardInstitucional.classList.toggle('sem-resumo-institucional', !mostrarResumo);
  if (blocoPrincipal) blocoPrincipal.classList.toggle('sem-resumo-institucional', !mostrarResumo);
}

function getNomeAbaAtual() {
  const ativa = document.querySelector('.page-section.active');
  const page = ativa ? ativa.id.replace('page-', '') : 'principal';
  const nomes = {
    principal: 'Principal',
    acoes: 'Ações Judiciais',
    associacoes: 'Associações e Sindicatos',
    remuneracao: 'Remuneração Tabelada',
    concursos: 'Concursos',
    comparar: 'Comparar Carreiras',
    produtos: 'Produtos',
    direitos: 'Direitos e Vantagens',
    parceiros: 'Parceiros - Anuncie aqui!'
  };
  return nomes[page] || 'Principal';
}

function atualizarHeaderDesc(descInstituicao) {
  if (headerModoInicialPortal) {
    const el = document.getElementById('header-desc');
    if (el) el.textContent = getNomeAbaAtual() === 'Principal' ? 'Escolha uma instituição' : getNomeAbaAtual();
    return;
  }

  const descs = {
    pmesp: 'Polícia Militar de São Paulo',
    pcsp: 'Polícia Civil de São Paulo',
    pmerj: 'Polícia Militar do Rio de Janeiro',
    pcerj: 'Polícia Civil do Rio de Janeiro',
    pmmg: 'Polícia Militar de Minas Gerais',
    pcmg: 'Polícia Civil de Minas Gerais',
    pmba: 'Polícia Militar da Bahia',
    pcba: 'Polícia Civil da Bahia',
    pmpr: 'Polícia Militar do Paraná',
    pcpr: 'Polícia Civil do Paraná',
    pmrs: 'Brigada Militar do Rio Grande do Sul',
    pcrs: 'Polícia Civil do Rio Grande do Sul',
    pmsc: 'Polícia Militar de Santa Catarina',
    pcsc: 'Polícia Civil de Santa Catarina',
    pmes: 'Polícia Militar do Espírito Santo',
    pces: 'Polícia Civil do Espírito Santo',
    ppsp: 'Polícia Penal de São Paulo',
    pprj: 'Polícia Penal do Rio de Janeiro',
    ppmg: 'Polícia Penal de Minas Gerais',
    ppba: 'Polícia Penal da Bahia',
    pppr: 'Polícia Penal do Paraná',
    pprs: 'Polícia Penal do Rio Grande do Sul',
    ppsc: 'Polícia Penal de Santa Catarina',
    ppes: 'Polícia Penal do Espírito Santo',
    pmms: 'Polícia Militar de Mato Grosso do Sul',
    pcms: 'Polícia Civil de Mato Grosso do Sul',
    ppms: 'Polícia Penal de Mato Grosso do Sul',
    pmmt: 'Polícia Militar de Mato Grosso',
    pcmt: 'Polícia Judiciária Civil de Mato Grosso',
    ppmt: 'Polícia Penal de Mato Grosso'
  };
  const textoAba = getNomeAbaAtual();
  const desc = descInstituicao || descs[currInst] || HEADER_INSTITUICOES_INFO?.[currInst]?.desc || descs.pmesp;
  const el = document.getElementById('header-desc');
  if (el) el.textContent = textoAba;

  const info = HEADER_INSTITUICOES_INFO?.[currInst];
  const siglaAtual = document.getElementById('header-active-sigla');
  if (siglaAtual && info) siglaAtual.textContent = info.titulo;

  const nomeAtual = document.getElementById('header-active-name');
  if (nomeAtual) nomeAtual.textContent = desc;
}

function toggleTheme() {
  const html = document.documentElement;
  const tema = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', tema);
  localStorage.setItem('theme', tema);
  initTheme();
}

function initTheme() {
  const tema = document.documentElement.getAttribute('data-theme');
  const btnHeader = document.getElementById('theme-toggle-header');
  if (btnHeader) btnHeader.innerHTML = tema === 'dark' ? '☀️ Claro' : '🌙 Escuro';
}

/* ============================================================ */
/* === POPULA CARGOS NO SELECT ================================ */
/* ============================================================ */
/* BLOCO 15.9 — Troca de instituição e popularização dos cargos */
function popularCargos(inst) {
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
  currTabela = CARGOS_ESTRUTURA_GENERICAS[inst] || map[inst] || CARGOS_PM;

  const sCargo = document.getElementById('cargo');
  const sCargoDir = document.getElementById('cargo_dir');
  if (!sCargo && !sCargoDir) return;
  if (sCargo) sCargo.innerHTML = '';
  if (sCargoDir) sCargoDir.innerHTML = '';

  currTabela.forEach(c => {
    if (sCargo) {
      const o1 = document.createElement('option');
      o1.value = c.val; o1.textContent = c.text;
      if (c.selected) o1.selected = true;
      sCargo.appendChild(o1);
    }

    if (sCargoDir) {
      const o2 = document.createElement('option');
      o2.value = c.val; o2.textContent = c.text;
      if (c.selected) o2.selected = true;
      sCargoDir.appendChild(o2);
    }
  });



}


/* ============================================================ */

;


/* ===== js/services/remuneracao.js ===== */
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
    badge = cargo.valorPendente || padrao <= 0 ? 'A confirmar' : 'Edital/triagem';
  } else if (inst === 'pcms') {
    remuneracao = padrao;
    beneficios = 0;
    criterio = cargo.valorPendente || padrao <= 0
      ? 'Cargo/carreira da PCMS cadastrado para seleção; remuneração deve ser confirmada em tabela legal, DOE/MS, edital ou contracheque.'
      : 'Remuneração inicial divulgada no Edital SAD/SEJUSP/PCMS/APJ/2025 para jornada de 40h.';
    benefDesc = 'Abonos, adicionais, plantões, indenizações e outras rubricas dependem da legislação estadual, lotação, escala e contracheque; não foram somados automaticamente.';
    fonteKey = 'pcms';
    badge = cargo.valorPendente || padrao <= 0 ? 'A confirmar' : 'Edital APJ/2025';
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
    badge = cargo.valorPendente || padrao <= 0 ? 'A confirmar' : (cargo.badge || 'Tabela 05/2025');
  } else if (inst === 'pcms') {
    remuneracao = padrao;
    beneficios = 0;
    criterio = cargo.criterio || 'Tabela legal/edital da Polícia Civil de Mato Grosso do Sul; conferir DOE/MS, edital vigente e contracheque para a situação individual.';
    benefDesc = cargo.benefDesc || 'Abonos, adicionais, plantões, indenizações e outras rubricas dependem da legislação estadual, lotação, escala e contracheque; não foram somados automaticamente.';
    fonteKey = cargo.fonteKey || 'pcms';
    badge = cargo.valorPendente || padrao <= 0 ? 'A confirmar' : (cargo.badge || 'Fonte oficial');
  } else if (inst === 'pmmt') {
    remuneracao = padrao;
    beneficios = 0;
    criterio = cargo.criterio || 'Referência de edital/portal oficial da PMMT; postos sem valor confirmado ficam como "a confirmar".';
    benefDesc = cargo.benefDesc || 'Adicionais, indenizações, etapas, auxílio, escala, fardamento e demais rubricas dependem da legislação estadual, lotação, escala e contracheque; não foram somados automaticamente.';
    fonteKey = cargo.fonteKey || 'pmmt';
    badge = cargo.valorPendente || padrao <= 0 ? 'A confirmar' : (cargo.badge || 'Edital/portal oficial');
  } else if (inst === 'pcmt') {
    remuneracao = padrao;
    beneficios = 0;
    criterio = cargo.criterio || 'Tabela salarial do Portal do Servidor/SEPLAG-MT usada para referências cadastradas da PCMT; cargos sem tabela específica confirmada ficam como "a confirmar".';
    benefDesc = cargo.benefDesc || 'Adicionais, plantões, indenizações, verbas de escala e demais rubricas dependem da legislação estadual, lotação, escala e contracheque; não foram somados automaticamente.';
    fonteKey = cargo.fonteKey || 'pcmt';
    badge = cargo.valorPendente || padrao <= 0 ? 'A confirmar' : (cargo.badge || 'Tabela 2025');
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
  const inst = normalizarInstituicao(currInst);
  const tbody = document.getElementById('lista-remuneracao');
  if (!tbody) return;

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
  if (elMenor) elMenor.textContent = menor ? fmt(menor) : 'A confirmar';
  if (elMaior) elMaior.textContent = maior ? fmt(maior) : 'A confirmar';

  tbody.innerHTML = linhas.map(l => {
    const fonte = REMUNERACAO_FONTES_OFICIAIS[l.fonteKey] || REMUNERACAO_FONTES_OFICIAIS[inst] || { nome: 'Fonte oficial da carreira', url: '#' };
    return `
      <tr>
        <td>
          <strong>${escapeHtml(l.cargo)}</strong>
          <br><span class="remuneracao-badge">${escapeHtml(l.badge || 'Fonte oficial')}</span>
        </td>
        <td class="valor">${l.valorPendente ? 'A confirmar' : fmt(l.remuneracao)}</td>
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

;


/* ===== js/ui/header-estados.js ===== */
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
  ppsc: 'img/ppsc.webp',
  ppes: 'img/ppes.webp',
  ppms: 'img/ppms.webp',
  ppmt: 'img/ppmt.webp',
  pmma: 'img/pmma.webp',
  pcma: 'img/pcma.webp',
  ppma: 'img/ppma.webp',
  pmto: 'img/pmto.webp',
  pcto: 'img/pcto.webp',
  ppto: 'img/ppto.webp'
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
    const alternativas = ['img/logoleao.webp', 'img/logoleao.jpeg', 'img/logoleao.jpg', 'img/logoleao.png'];
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

;


/* ===== js/services/direitos.js ===== */
/* Chunk gerado a partir de js/script-original.js — Análise de direitos, vantagens e aposentadoria.
   Mantém a ordem original para preservar compatibilidade. */

/* === ANÁLISE DE DIREITOS (EXPANDIDA) ======================== */
/* ============================================================ */
/* BLOCO 15.11 — Análise de direitos e vantagens */
function analisarDireitos() {
  const cont = document.getElementById('resultados_dir');
  if (!cont) return;

  const inst = currInst;
  const tempo = valEl('tempo_dir');
  const idade = valEl('idade_dir');
  const renda = valEl('renda_dir');
  const sit = document.getElementById('situacao_dir')?.value || 'ativa';
  const sexo = document.getElementById('sexo_dir')?.value || 'na';
  const ingresso = document.getElementById('ingresso_dir')?.value || '';
  const dependente = document.getElementById('dependente_dir')?.value || 'na';
  const localEspecial = document.getElementById('local_especial_dir')?.value || 'na';
  const requisitosApos = document.getElementById('requisitos_apos_dir')?.value || 'na';
  const cargoVal = document.getElementById('cargo_dir')?.value;
  const c = currTabela.find(x => x.val === cargoVal);
  if (!c) return;

  const nomesInst = {
    pmesp: 'PMESP', pcsp: 'PCSP', ppsp: 'PPSP', pmerj: 'PMERJ', pcerj: 'PCERJ', pprj: 'PPRJ',
    pmmg: 'PMMG', pcmg: 'PCMG', ppmg: 'PPMG', pmba: 'PMBA', pcba: 'PCBA', ppba: 'PPBA', pmpr: 'PMPR', pcpr: 'PCPR', pppr: 'PPPR',
    pmrs: 'PMRS', pcrs: 'PCRS', pprs: 'PPRS', pmsc: 'PMSC', pcsc: 'PCSC', ppsc: 'PPSC',
    pmes: 'PMES', pces: 'PCES', ppes: 'PPES',
    pmms: 'PMMS', pcms: 'PCMS', ppms: 'PPMS',
    pmmt: 'PMMT', pcmt: 'PCMT', ppmt: 'PPMT'
  };
  const isPM = String(inst || '').startsWith('pm');
  const isPC = String(inst || '').startsWith('pc');
  const isPP = isPoliciaPenal(inst);
  const dadosUfDireitos = HEADER_ESTADOS[getEstadoDaInstituicao(inst)] || {};
  const uf = dadosUfDireitos.sigla || '';
  const ingressoAntesEC103 = ingresso ? new Date(ingresso + 'T00:00:00') < new Date('2019-11-13T00:00:00') : false;

  let html = '';

  html += direitoResumo(c.text, nomesInst[inst] || getSiglaInstituicao(inst), tempo, idade, sit, sexo, ingresso, renda, dependente);

  // ===== DIREITOS GERAIS =====
  html += direitoSecao('Direitos gerais e benefícios familiares');

  if (dependente === 'sim' && renda > 0 && renda <= 1980.38) {
    html += direitoItem('Salário-Família', 'condicionado',
      'Pelos dados informados, pode haver enquadramento no salário-família: filho/equiparado até 14 anos ou inválido e remuneração dentro do limite legal. Cota 2026: <strong>R$ 67,54</strong>.',
      'Base: Portaria Interministerial MPS/MF nº 13/2026 e tabela INSS 2026. Conferir aplicação ao regime do servidor e regras do órgão.');
  } else if (dependente === 'nao' || (renda > 1980.38)) {
    html += direitoItem('Salário-Família', 'atencao',
      'Não aparece como direito provável com os dados informados. O benefício depende de dependente elegível e remuneração dentro do limite legal.',
      'Referência 2026: cota de R$ 67,54 para remuneração até R$ 1.980,38.');
  } else {
    html += direitoItem('Salário-Família', 'condicionado',
      'Pode existir somente se houver filho/equiparado até 14 anos ou inválido e remuneração dentro do limite legal. Informe dependente e remuneração para uma análise melhor.',
      'Referência 2026: cota de R$ 67,54 para remuneração até R$ 1.980,38.');
  }

  html += direitoItem('Auxílio-Funeral', 'condicionado',
    'Benefício/indenização normalmente destinado aos dependentes ou a quem comprovar despesas de funeral, conforme regra previdenciária ou estatuto próprio da instituição.',
    'Depende de requerimento, documentação, vínculo com o servidor e norma estadual específica.');

  html += direitoItem('Pensão por Morte', 'condicionado',
    'Direito dos dependentes legalmente habilitados, observadas as regras do regime próprio, sistema de proteção social militar ou previdência estadual.',
    'Depende da qualidade de dependente, documentação, cálculo previdenciário e legislação estadual aplicável.');

  html += direitoItem('Licença-Maternidade / Paternidade', 'condicionado',
    'Direito ligado ao nascimento, adoção ou guarda, com prazos definidos pela Constituição, lei estadual, estatuto e regulamento próprio da carreira.',
    'Evitar tratar prazo único como regra universal: a aplicação concreta depende do ente federativo e do regime jurídico.');

  html += direitoItem('Licença para Tratamento de Pessoa da Família', 'requerimento',
    'Possibilidade de afastamento para cuidar de familiar, normalmente condicionada a requerimento, comprovação do vínculo, necessidade de acompanhamento e avaliação administrativa/pericial.',
    'A remuneração, prazo e renovação variam conforme estatuto/regulamento da instituição.');

  // ===== SAÚDE E ASSISTÊNCIA =====
  html += direitoSecao('Saúde, assistência e proteção social');
  html += direitoItem('Assistência à Saúde / Plano Institucional', 'condicionado', getSaudeTexto(inst), getSaudeBase(inst));

  if (sit === 'reforma') {
    html += direitoItem('Reforma / Invalidez', 'requerimento',
      'A reforma ou aposentadoria por incapacidade exige procedimento administrativo e/ou perícia oficial. Em casos ligados ao serviço, pode haver tratamento jurídico e cálculo diferenciados.',
      'Depende de laudo, nexo com o serviço, junta médica e legislação estadual.');
  } else {
    html += direitoItem('Licença-Saúde e Readaptação', 'requerimento',
      'Em caso de doença, acidente ou limitação funcional, pode haver licença para tratamento de saúde, readaptação, restrição temporária ou avaliação de incapacidade.',
      'Depende de perícia médica oficial e procedimento administrativo.');
  }

  if (inst === 'pmesp') {
    html += direitoItem('SPSM / CBPM / Cruz Azul', 'condicionado',
      'Sistema de proteção social e assistência ligado ao militar paulista, com possíveis benefícios como pensão, auxílio-funeral, assistência e serviços vinculados.',
      'Acesso, contribuição, dependentes e coberturas dependem das normas da PMESP/CBPM/Cruz Azul.');
  } else if (inst === 'pmmg') {
    html += direitoItem('IPSM Minas Gerais', 'condicionado',
      'O IPSM é referência para previdência e saúde dos militares mineiros e seus dependentes, conforme regras próprias.',
      'Base institucional: IPSM/MG. Verificar contribuição, dependentes, rede e cobertura.');
  } else if (inst === 'pcmg') {
    html += direitoItem('IPSEMG / Assistência à Saúde', 'condicionado',
      'Servidores civis mineiros podem ter acesso a assistência conforme adesão, contribuição e regras do sistema estadual.',
      'Verificar adesão, descontos, dependentes e cobertura vigente.');
  } else if (inst === 'pmba' || inst === 'pcba') {
    html += direitoItem('Planserv Bahia', 'condicionado',
      'Assistência à saúde dos servidores públicos baianos, sujeita a adesão, contribuição, dependentes e regras administrativas.',
      'Base: normas do Planserv e legislação estadual da Bahia.');
  } else if (inst === 'pmrs' || inst === 'pcrs') {
    html += direitoItem('Assistência à saúde / sistema estadual RS', 'condicionado',
      getSaudeTexto(inst),
      getSaudeBase(inst));
  } else if (inst === 'pmsc' || inst === 'pcsc') {
    html += direitoItem('Assistência à saúde / sistema estadual SC', 'condicionado',
      getSaudeTexto(inst),
      getSaudeBase(inst));
  } else if (inst === 'pmes' || inst === 'pces') {
    html += direitoItem('Assistência à saúde / sistema estadual ES', 'condicionado',
      getSaudeTexto(inst),
      getSaudeBase(inst));
  } else if (isPP) {
    html += direitoItem('Assistência à saúde / sistema penitenciário', 'condicionado',
      getSaudeTexto(inst),
      getSaudeBase(inst));
  }

  // ===== VANTAGENS REMUNERATÓRIAS =====
  html += direitoSecao('Vantagens remuneratórias e adicionais');

  if (tempo >= 5) {
    html += direitoItem('Adicional por Tempo de Serviço', 'automatico', getTempoServicoTexto(inst, tempo), getTempoServicoBase(inst));
  } else {
    const faltaTempo = Math.max(0, 5 - tempo);
    html += direitoItem('Adicional por Tempo de Serviço', 'atencao',
      `Ainda não há indicativo de primeiro período completo de tempo de serviço. Faltam aproximadamente <strong>${faltaTempo}</strong> ano(s) para o primeiro marco de 5 anos, quando aplicável.`,
      getTempoServicoBase(inst));
  }

  if (inst === 'pmesp' || inst === 'pcsp') {
    if (tempo >= 20) {
      html += direitoItem('Sexta-Parte', 'automatico',
        'Com 20 anos ou mais de efetivo exercício, há indicativo de direito à sexta-parte dos vencimentos integrais, observadas as regras constitucionais e exceções legais.',
        'Base: Art. 129 da Constituição do Estado de São Paulo; atenção à exceção para servidores remunerados por subsídio, quando aplicável.');
    } else {
      html += direitoItem('Sexta-Parte', 'atencao',
        `Ainda não há 20 anos informados. Faltam aproximadamente <strong>${20 - tempo}</strong> ano(s) para o marco temporal da sexta-parte em SP.`,
        'Base: Art. 129 da Constituição do Estado de São Paulo.');
    }
  }

  if (tempo >= 5) {
    html += direitoItem('Licença-Prêmio / Férias-Prêmio / Licença Especial', 'condicionado',
      'Pode existir direito relacionado a períodos aquisitivos por tempo de serviço, conforme a regra estadual e a situação funcional do servidor.',
      'Não tratar como automático universal: nomenclatura, concessão, conversão em pecúnia e restrições variam por Estado e carreira.');
  }

  html += direitoItem('Insalubridade', 'condicionado', getInsalubridadeTexto(inst), getInsalubridadeBase(inst));
  html += direitoItem('Periculosidade / Atividade de Risco', inst === 'pcerj' ? 'automatico' : 'condicionado', getPericulosidadeTexto(inst), getPericulosidadeBase(inst));

  if (localEspecial === 'sim') {
    html += direitoItem('Localidade Especial / Unidade Especial', 'condicionado',
      'Você informou atuação em localidade ou unidade especial. Pode haver verba, gratificação, diária, adicional ou prioridade administrativa conforme norma da instituição.',
      'Depende de designação formal, publicação, unidade, escala, disponibilidade e legislação local.');
  } else {
    html += direitoItem('Localidade Especial / Unidade Especial', 'verificar',
      'Algumas instituições possuem verbas ou regras específicas para local de difícil provimento, unidade especial, transferência ou serviço extraordinário.',
      'Marque “sim” se o servidor atua nessas condições e confirme a norma da instituição.');
  }

  html += getVantagensEspecificas(inst);

  // ===== LICENÇAS E CARREIRA =====
  html += direitoSecao('Licenças, carreira e estabilidade');
  if (tempo >= 3) {
    html += direitoItem('Estabilidade no Serviço Público', 'automatico',
      'Com 3 anos ou mais informados, há indicativo de estabilidade, desde que o estágio probatório tenha sido cumprido e aprovado.',
      'Base geral: Art. 41 da Constituição Federal. Militares e carreiras específicas podem ter rito próprio de avaliação e permanência.');
  } else {
    html += direitoItem('Estabilidade no Serviço Público', 'atencao',
      `Tempo informado inferior a 3 anos. Faltam aproximadamente <strong>${3 - tempo}</strong> ano(s) para o marco geral de estabilidade, se aprovado no estágio probatório.`,
      'Base geral: Art. 41 da Constituição Federal.');
  }

  html += direitoItem('Promoção por Bravura / Ato de Bravura', 'condicionado',
    'Não é vantagem automática. Pode ocorrer em casos excepcionais de ato reconhecido formalmente como bravura, conforme regulamento de promoções da instituição.',
    'Depende de sindicância/procedimento, enquadramento, proposta, decisão administrativa e publicação oficial.');

  html += direitoItem('Progressão / Promoção na Carreira', 'condicionado',
    'Promoções e progressões dependem de tempo, merecimento, antiguidade, avaliação, cursos, vagas, interstício, conduta e regras próprias da carreira.',
    'Verificar estatuto, plano de carreira e editais internos da instituição.');

  // ===== APOSENTADORIA / RESERVA / REFORMA =====
  html += direitoSecao(isPM ? 'Reserva, reforma e proteção previdenciária' : 'Aposentadoria, abono e proteção previdenciária');

  html += direitoItem(isPM ? 'Reserva Remunerada / Inatividade' : 'Aposentadoria Policial', getStatusAposentadoria(tempo, idade, requisitosApos),
    getAposentadoriaTexto(inst, tempo, idade, sexo, requisitosApos, ingressoAntesEC103),
    'A regra concreta depende de idade, tempo total, tempo no cargo/carreira, sexo, data de ingresso, legislação estadual e regras de transição após a EC 103/2019.');

  if (sit === 'ativa') {
    if (requisitosApos === 'sim') {
      html += direitoItem('Abono de Permanência', 'condicionado',
        'Como você informou já ter cumprido requisitos de aposentadoria/reserva e permanece em atividade, pode haver direito ao abono de permanência conforme regra previdenciária aplicável.',
        'Depende de requerimento, reconhecimento administrativo dos requisitos e norma estadual.');
    } else {
      html += direitoItem('Abono de Permanência', 'verificar',
        'Só deve ser tratado como possível depois de confirmado o cumprimento dos requisitos para aposentadoria/reserva com permanência em atividade.',
        'Não depende apenas de tempo informado: exige análise de idade, ingresso, carreira, contribuição e regra de transição.');
    }
  }

  if (isPC && (sit === 'reserva' || sit === 'reforma')) {
    html += direitoItem('Paridade e Integralidade', ingressoAntesEC103 ? 'condicionado' : 'verificar',
      ingressoAntesEC103
        ? 'A data de ingresso informada é anterior à EC 103/2019, o que pode indicar análise de integralidade/paridade conforme regras de transição e jurisprudência aplicável aos policiais civis.'
        : 'A análise de paridade e integralidade depende principalmente da data de ingresso, regra de aposentadoria utilizada e legislação do Estado. Informe/verifique a data de ingresso.',
      'Tema sensível: confirmar com setor previdenciário, associação ou advogado especializado.');
  }

  if (sit === 'reserva' || sit === 'reforma') {
    html += direitoItem('Porte de Arma na Inatividade', 'condicionado',
      'Pode existir autorização para porte na inatividade, mas não deve ser tratado como “vitalício” sem ressalvas. Normalmente depende de requisitos legais, aptidão psicológica, documentação e regras de controle.',
      'Base geral: Estatuto do Desarmamento e regulamentos. Conferir norma institucional e exigências vigentes.');
  }

  // ===== ALERTAS E FONTES =====
  html += direitoSecao('Alertas e fontes de conferência');
  html += direitoItem('Conferência em fonte oficial', 'verificar',
    'Use esta aba como triagem inicial. Para decisão financeira, ação judicial, aposentadoria, abono ou requerimento administrativo, confira sempre a legislação atualizada e a ficha funcional do servidor.',
    'Fontes úteis: Diário Oficial do Estado, estatuto da carreira, lei orgânica, portal de transparência, setor de pessoal, previdência estadual e associação/sindicato.');

  cont.innerHTML = html;
}

function direitoResumo(cargo, instNome, tempo, idade, sit, sexo, ingresso, renda, dependente) {
  const sitTxt = sit === 'ativa' ? 'Serviço ativo' : sit === 'reserva' ? 'Inatividade / aposentadoria' : 'Reforma / invalidez';
  const sexoTxt = sexo === 'masculino' ? 'masculino' : sexo === 'feminino' ? 'feminino' : 'não informado';
  const ingressoTxt = ingresso ? ingresso.split('-').reverse().join('/') : 'não informado';
  const rendaTxt = renda > 0 ? fmt(renda) : 'não informada';
  const depTxt = dependente === 'sim' ? 'sim' : dependente === 'nao' ? 'não' : 'não informado';
  return `<div class="direito-item acao" style="border-left-color: var(--vermelho);">
    <span class="direito-nome">Resumo da análise — ${instNome}</span>
    <span class="direito-desc"><strong>Cargo/nível:</strong> ${cargo}</span>
    <span class="direito-desc"><strong>Situação:</strong> ${sitTxt} · <strong>Tempo informado:</strong> ${tempo} ano(s) · <strong>Idade:</strong> ${idade || 'não informada'} · <strong>Sexo:</strong> ${sexoTxt}</span>
    <span class="direito-desc"><strong>Ingresso:</strong> ${ingressoTxt} · <strong>Remuneração bruta:</strong> ${rendaTxt} · <strong>Dependente para salário-família:</strong> ${depTxt}</span>
  </div>`;
}

function direitoSecao(titulo) {
  return `<div class="direitos-section-title">${titulo}</div>`;
}

function direitoItem(nome, status, desc, base = '') {
  const statusMap = {
    automatico: { label: '✓ Direito automático / requisito provável', color: 'var(--verde)', bg: 'rgba(32, 142, 78, 0.06)' },
    condicionado: { label: '◼ Direito condicionado', color: 'var(--dourado)', bg: 'rgba(223,182,62,0.08)' },
    requerimento: { label: '⏳ Depende de requerimento/perícia', color: 'var(--azul)', bg: 'rgba(30,48,132,0.08)' },
    verificar: { label: '⚠ Verificar caso individual', color: 'var(--text-muted)', bg: 'var(--item-bg)' },
    atencao: { label: '⚠ Atenção / requisito não indicado', color: '#e60000', bg: 'rgba(230, 0, 0, 0.05)' }
  };
  const cfg = statusMap[status] || statusMap.verificar;
  const baseHtml = base ? `<span class="direito-meta"><strong>Base/observação:</strong> ${base}</span>` : '';
  const classe = status === 'automatico' ? 'sim' : status === 'atencao' ? 'nao' : '';
  return `<div class="direito-item ${classe}" style="border-left-color:${cfg.color}; background:${cfg.bg};">
    <span class="direito-nome">${nome}</span>
    <span class="direito-status" style="color:${cfg.color};">${cfg.label}</span>
    <span class="direito-desc">${desc}</span>
    ${baseHtml}
  </div>`;
}

function getSaudeTexto(inst) {
  if (isPoliciaPenal(inst)) {
    const info = getInfoPoliciaPenal(inst);
    return `${info.sigla}: ${info.saude} Não confundir assistência à saúde com adicional, indenização ou verba remuneratória.`;
  }
  const textos = {
    pmesp: 'PMESP: assistência pode envolver Cruz Azul, FUSAM, CBPM/SPSM e regras próprias para titular e dependentes.',
    pcsp: 'PCSP: pode haver atendimento pelo IAMSPE e outros mecanismos de assistência conforme vínculo, contribuição e regras do Estado.',
    pmerj: 'PMERJ: assistência pode envolver FUSPOM, HCPM, Família Azul ou estruturas próprias da corporação.',
    pcerj: 'PCERJ: verificar assistência disponível, convênios e regras administrativas da Polícia Civil/RJ.',
    pmmg: 'PMMG: assistência e previdência vinculadas ao IPSM, conforme contribuição, dependentes e rede credenciada.',
    pcmg: 'PCMG: assistência pode envolver IPSEMG ou outro plano, conforme adesão e regra estadual.',
    pmba: 'PMBA: assistência pode envolver Planserv e regras estaduais de adesão, contribuição e cobertura.',
    pcba: 'PCBA: assistência pode envolver Planserv e regras estaduais de adesão, contribuição e cobertura.',
    pmpr: 'PMPR: assistência pode envolver FASPM, sistema próprio de saúde militar e regras de adesão/dependentes.',
    pcpr: 'PCPR: assistência pode envolver o Sistema de Assistência à Saúde do Paraná e regras administrativas do Estado.',
    pmrs: 'PMRS: assistência pode envolver IPE Saúde, Hospital da Brigada Militar e regras próprias dos militares estaduais do RS.',
    pcrs: 'PCRS: assistência pode envolver IPE Saúde e regras administrativas do Estado do Rio Grande do Sul.',
    pmsc: 'PMSC: assistência pode envolver SC Saúde, IPREV/SC e regras próprias do sistema dos militares estaduais de Santa Catarina.',
    pcsc: 'PCSC: assistência pode envolver SC Saúde/IPREV-SC e regras administrativas do Estado de Santa Catarina.',
    pmes: 'PMES: assistência pode envolver IPAJM/ES, assistência médica/odontológica prevista em edital e normas próprias dos militares estaduais do Espírito Santo.',
    pces: 'PCES: assistência pode envolver IPAJM/ES, regras administrativas do Estado do Espírito Santo e normas da carreira policial civil.'
  };
  return textos[inst] || 'Verificar assistência à saúde conforme norma da instituição.';
}

function getSaudeBase(inst) {
  if (isPoliciaPenal(inst)) {
    const info = getInfoPoliciaPenal(inst);
    return `Base: ${info.orgao}; ${info.previdencia}`;
  }
  if (inst === 'pmmg') return 'IPSM/MG: gestão de benefícios previdenciários e de saúde dos militares mineiros e dependentes.';
  if (inst === 'pmba' || inst === 'pcba') return 'Planserv/BA e legislação estadual aplicável.';
  if (inst === 'pmpr') return 'FASPM/PR: contribuição facultativa de saúde dos militares estaduais, conforme Lei PR 17.169/2012.';
  if (inst === 'pcpr') return 'SAS/Paraná, legislação estadual e normas internas da PCPR/SEAP, conforme vínculo e adesão.';
  if (inst === 'pmrs' || inst === 'pcrs') return 'IPE Saúde/RS, Hospital da Brigada Militar quando aplicável, normas estaduais e regras de adesão/dependentes.';
  if (inst === 'pmsc' || inst === 'pcsc') return 'SC Saúde, IPREV/SC, normas estaduais e regras de adesão/dependentes conforme cargo e situação funcional.';
  if (inst === 'pmes' || inst === 'pces') return 'IPAJM/ES, legislação estadual do Espírito Santo, normas de adesão/dependentes e regras administrativas da instituição.';
  return 'Regulamento institucional, estatuto da carreira, órgão de saúde estadual e regras de contribuição/dependentes.';
}

function getTempoServicoTexto(inst, tempo) {
  if (isPoliciaPenal(inst)) {
    const info = getInfoPoliciaPenal(inst);
    return `${info.sigla}: ${info.quadro} O tempo informado indica <strong>${tempo}</strong> ano(s) para análise de interstício, progressão, promoção, aposentadoria e vantagens condicionadas.`;
  }
  if (inst === 'pmesp' || inst === 'pcsp') return `Em SP, há indicativo de <strong>${Math.floor(tempo / 5)}</strong> quinquênio(s), calculados em regra a cada 5 anos de efetivo exercício, observadas as exceções legais.`;
  if (inst === 'pmerj') return `Na PMERJ, o adicional por tempo de serviço deve ser conferido conforme regra estadual e ficha funcional. Pelo tempo informado, há <strong>${Math.floor(tempo / 3)}</strong> período(s) de 3 anos como referência de triênio, se aplicável.`;
  if (inst === 'pcerj') return `Na PCERJ, a Lei Orgânica vigente prevê adicional por tempo de serviço. Pelo tempo informado, há <strong>${Math.floor(tempo / 5)}</strong> período(s) de 5 anos como referência.`;
  if (inst === 'pmmg' || inst === 'pcmg') return `Em MG, tratar o adicional por tempo de serviço com cautela: pode envolver quinquênio, ADE, VPNI ou regra de transição. Pelo tempo informado, há <strong>${Math.floor(tempo / 5)}</strong> período(s) de 5 anos como referência para conferência.`;
  if (inst === 'pmba' || inst === 'pcba') return `Na Bahia, há referência a anuênios/adicionais por tempo conforme carreira. Pelo tempo informado, a referência inicial é de <strong>${Math.min(35, tempo)}</strong> ano(s) de serviço.`;
  if (inst === 'pmpr') return `Na PMPR, a carreira é estruturada por subsídio, posto/graduação e classes. A progressão/promoção por classe deve ser conferida no enquadramento funcional; o tempo informado indica <strong>${tempo}</strong> ano(s) para análise de interstício.`;
  if (inst === 'pcpr') return `Na PCPR, a carreira é estruturada por subsídio, cargo e níveis/classes. O tempo informado indica <strong>${tempo}</strong> ano(s) para análise de promoção, progressão e regras de titulação.`;
  if (inst === 'pmrs') return `Na PMRS, posto/graduação, promoções, interstícios e eventuais vantagens devem ser conferidos conforme estatuto e ficha funcional. O tempo informado indica <strong>${tempo}</strong> ano(s) para análise.`;
  if (inst === 'pcrs') return `Na PCRS, cargo, classe, tempo de carreira e regras de promoção/progressão devem ser conferidos na ficha funcional. O tempo informado indica <strong>${tempo}</strong> ano(s) para análise.`;
  if (inst === 'pmsc') return `Na PMSC, posto/graduação, promoções, interstícios e eventuais vantagens devem ser conferidos conforme estatuto, LC SC 801/2022, LC SC 880/2025 e ficha funcional. O tempo informado indica <strong>${tempo}</strong> ano(s) para análise.`;
  if (inst === 'pcsc') return `Na PCSC, cargo, classe, tempo de carreira e regras de promoção/progressão devem ser conferidos no estatuto e na ficha funcional. O tempo informado indica <strong>${tempo}</strong> ano(s) para análise.`;
  if (inst === 'pmes') return `Na PMES, posto/graduação, referência, progressão horizontal, promoções e eventuais vantagens devem ser conferidos conforme estatuto, LC ES 420/2007, ficha funcional e atos da corporação. O tempo informado indica <strong>${tempo}</strong> ano(s) para análise.`;
  if (inst === 'pces') return `Na PCES, cargo, categoria, referências, progressões e promoções devem ser conferidos na ficha funcional e na lei da carreira. O tempo informado indica <strong>${tempo}</strong> ano(s) para análise.`;
  return 'Verificar adicional por tempo de serviço conforme legislação da carreira.';
}

function getTempoServicoBase(inst) {
  if (isPoliciaPenal(inst)) {
    const info = getInfoPoliciaPenal(inst);
    return `Base: ${info.criacao}; ${info.fonte}; ficha funcional e tabela remuneratória vigente.`;
  }
  if (inst === 'pmesp' || inst === 'pcsp') return 'Base: Art. 129 da Constituição do Estado de São Paulo; observar exceções para remuneração por subsídio.';
  if (inst === 'pcerj') return 'Base: Lei Orgânica/Reestruturação da Polícia Civil do RJ e normas complementares.';
  if (inst === 'pmmg' || inst === 'pcmg') return 'Revisar no estatuto/plano de carreira atualizado e no demonstrativo de pagamento. Não fixar percentual sem conferência individual.';
  if (inst === 'pmba' || inst === 'pcba') return 'Base: estatuto/lei orgânica e normas remuneratórias do Estado da Bahia.';
  if (inst === 'pmpr') return 'Base: Lei PR 22.187/2024 e Lei PR 17.169/2012, com enquadramento por classes.';
  if (inst === 'pcpr') return 'Base: Lei Complementar PR 259/2023 e alterações posteriores, com estrutura por subsídio e níveis/classes.';
  if (inst === 'pmrs') return 'Base: estatuto dos militares estaduais do RS, normas remuneratórias e ficha funcional.';
  if (inst === 'pcrs') return 'Base: Lei Estadual RS 12.350/2005, Lei Federal 14.735/2023, normas estaduais e ficha funcional.';
  if (inst === 'pmsc') return 'Base: estatuto dos militares estaduais de SC, LC SC 801/2022, LC SC 880/2025 e ficha funcional.';
  if (inst === 'pcsc') return 'Base: Lei SC 6.843/1986, Lei Federal 14.735/2023, normas estaduais e ficha funcional.';
  if (inst === 'pmes') return 'Base: Lei ES 3.196/1978, LC ES 420/2007, LC ES 910/2019, LC ES 911/2019 e ficha funcional.';
  if (inst === 'pces') return 'Base: Estatuto da PCES, LC ES 1.093/2024, Lei Federal 14.735/2023 e ficha funcional.';
  return 'Base: estatuto, lei de remuneração e ficha funcional.';
}

function getInsalubridadeTexto(inst) {
  if (isPoliciaPenal(inst)) {
    const info = getInfoPoliciaPenal(inst);
    return `${info.sigla}: ${info.vantagens} Insalubridade, periculosidade, risco de vida ou adicional de atividade penitenciária só devem ser tratados como verba quando houver lei local, laudo, lotação, rubrica e contracheque.`;
  }
  if (inst === 'pmesp' || inst === 'pcsp') return 'Em SP, pode haver adicional de insalubridade em graus mínimo, médio ou máximo, conforme enquadramento, laudo e legislação. Não é universal para todo servidor em qualquer função.';
  if (inst === 'pcerj') return 'Na PCERJ, a insalubridade aparece entre vantagens possíveis, mas deve ser separada do adicional de atividade perigosa. Depende de previsão legal e enquadramento.';
  if (inst === 'pcpr') return 'Na PCPR, a LC 259/2023 indica que o subsídio compreende adicionais de insalubridade, periculosidade e risco de vida. Não lançar como verba separada sem decisão, rubrica ou tese específica.';
  if (inst === 'pmpr') return 'Na PMPR, a remuneração é por subsídio. Não computar adicional de insalubridade automático sem rubrica específica, laudo, decisão ou previsão expressa aplicável ao caso.';
  if (inst === 'pmrs') return 'Na PMRS, não lançar adicional de insalubridade automático sem rubrica específica, laudo, decisão ou previsão expressa aplicável ao caso.';
  if (inst === 'pcrs') return 'Na PCRS, eventual insalubridade deve ser conferida por legislação, rubrica, laudo, lotação e situação funcional; não é verba universal automática.';
  if (inst === 'pmsc') return 'Na PMSC, não lançar adicional de insalubridade automático sem rubrica específica, laudo, decisão ou previsão expressa aplicável ao caso.';
  if (inst === 'pcsc') return 'Na PCSC, eventual insalubridade deve ser conferida por legislação, rubrica, laudo, lotação e situação funcional; não é verba universal automática.';
  if (inst === 'pmes') return 'Na PMES, não lançar adicional de insalubridade automático sem rubrica específica, laudo, decisão ou previsão expressa aplicável ao caso.';
  if (inst === 'pces') return 'Na PCES, eventual insalubridade deve ser conferida por legislação, rubrica, laudo, lotação e situação funcional; em carreiras por subsídio pode haver absorção de vantagens conforme regime/lei.';
  return 'Pode existir quando houver exposição reconhecida a agente insalubre, mediante laudo, enquadramento e previsão legal da instituição.';
}

function getInsalubridadeBase(inst) {
  if (isPoliciaPenal(inst)) {
    const info = getInfoPoliciaPenal(inst);
    return `Base: ${info.criacao}; laudo/ato administrativo, rubrica, lotação, escala e contracheque.`;
  }
  if (inst === 'pmesp' || inst === 'pcsp') return 'Conferir grau, base de cálculo, laudo e holerite. Não confundir com periculosidade.';
  if (inst === 'pcpr') return 'Base: LC PR 259/2023, art. 39, §3º; observar ADI indicada na própria legislação e decisões aplicáveis.';
  if (inst === 'pmpr') return 'Base: regime de subsídio da carreira militar estadual do Paraná; conferir rubrica específica, laudo e legislação aplicável.';
  if (inst === 'pmrs' || inst === 'pcrs') return 'Base: legislação estadual do RS, laudo, rubrica de pagamento e enquadramento do local/função.';
  if (inst === 'pmsc' || inst === 'pcsc') return 'Base: legislação estadual de SC, laudo, rubrica de pagamento e enquadramento do local/função.';
  if (inst === 'pmes' || inst === 'pces') return 'Base: legislação estadual do ES, laudo, rubrica de pagamento e enquadramento do local/função.';
  return 'Depende de laudo, legislação estadual e enquadramento do local/função.';
}

function getPericulosidadeTexto(inst) {
  if (isPoliciaPenal(inst)) {
    const info = getInfoPoliciaPenal(inst);
    return `${info.sigla}: a atividade penal envolve custódia, vigilância, escolta, inteligência e segurança prisional. Eventual adicional de risco/periculosidade/atividade penitenciária depende da legislação da UF, rubrica e contracheque.`;
  }
  if (inst === 'pcerj') return 'PCERJ: a Lei 11.003/2025 prevê adicional de atividade perigosa de 230% sobre o vencimento-base para policiais civis, salvo Delegados, que possuem verba de representação própria.';
  if (inst === 'pcpr') return 'Na PCPR, a LC 259/2023 indica que o subsídio compreende o risco de vida e a periculosidade. Tratar como verba separada somente diante de rubrica, decisão ou tese específica.';
  if (inst === 'pcrs') return 'Na PCRS, eventual adicional ligado ao risco/atividade deve ser conferido em lei estadual, rubrica e contracheque; não aplicar automaticamente regra de outro Estado.';
  if (inst === 'pcsc') return 'Na PCSC, eventual adicional ligado ao risco/atividade deve ser conferido em lei estadual, rubrica e contracheque; não aplicar automaticamente regra de outro Estado.';
  if (inst === 'pces') return 'Na PCES, eventual adicional ligado ao risco/atividade deve ser conferido em lei estadual, rubrica e contracheque; no OIP e demais carreiras por subsídio, verificar se a vantagem foi absorvida pelo regime legal.';
  if (inst === 'pmesp' || inst === 'pmerj' || inst === 'pmmg' || inst === 'pmba' || inst === 'pmpr' || inst === 'pmrs' || inst === 'pmsc' || inst === 'pmes') return 'Para militares estaduais, o risco da atividade costuma estar absorvido no regime remuneratório ou em verbas próprias. Não aplicar automaticamente o modelo da PCERJ.';
  return 'Pode haver gratificação ou adicional ligado ao risco/atividade, mas a regra muda bastante por Estado e carreira. Verificar norma específica.';
}

function getPericulosidadeBase(inst) {
  if (isPoliciaPenal(inst)) {
    const info = getInfoPoliciaPenal(inst);
    return `Base: ${info.criacao}; ${info.fonte}; legislação remuneratória e contracheque.`;
  }
  if (inst === 'pcerj') return 'Base: Lei 11.003/2025/RJ, art. sobre adicional de atividade perigosa e verba de representação.';
  if (inst === 'pcpr') return 'Base: LC PR 259/2023, art. 39, §3º, e decisões judiciais aplicáveis.';
  if (inst === 'pmpr') return 'Base: Lei PR 22.187/2024 e regime de subsídio dos militares estaduais do Paraná.';
  if (inst === 'pmrs') return 'Base: estatuto e normas remuneratórias dos militares estaduais do RS.';
  if (inst === 'pcrs') return 'Base: Lei Estadual RS 12.350/2005, Lei Federal 14.735/2023 e normas remuneratórias estaduais aplicáveis.';
  if (inst === 'pmsc') return 'Base: estatuto e normas remuneratórias dos militares estaduais de SC.';
  if (inst === 'pcsc') return 'Base: Lei SC 6.843/1986, Lei Federal 14.735/2023 e normas remuneratórias estaduais aplicáveis.';
  if (inst === 'pmes') return 'Base: LC ES 420/2007, estatuto da PMES e normas remuneratórias dos militares estaduais do ES.';
  if (inst === 'pces') return 'Base: LC ES 1.093/2024, Lei Federal 14.735/2023 e normas remuneratórias estaduais aplicáveis.';
  return 'Base: estatuto e lei de remuneração da instituição; não usar regra genérica para todas as carreiras.';
}

function getVantagensEspecificas(inst) {
  let html = '';
  if (isPoliciaPenal(inst)) {
    const info = getInfoPoliciaPenal(inst);
    html += direitoItem(`${info.sigla} — Estrutura institucional e atribuições`, 'condicionado',
      `${info.marco} ${info.atribuicoes}`,
      `Base: ${info.criacao}; ${info.orgao}.`);
    html += direitoItem(`${info.sigla} — Adicionais, auxílios e verbas condicionadas`, 'condicionado',
      `${info.vantagens} ${info.remuneracao}`,
      'Conferir lei local, tabela oficial, edital, escala, ordem de serviço, laudo, rubrica e contracheque.');
    html += direitoItem(`${info.sigla} — Formação, porte, identidade funcional e prerrogativas`, 'condicionado',
      `${info.formacao} Prerrogativas, porte, uniforme, corregedoria e identidade funcional dependem da regulamentação da UF.`,
      `Base: Constituição Federal, art. 144, EC 104/2019 e legislação específica: ${info.criacao}.`);
    html += direitoItem(`${info.sigla} — Previdência, saúde e aposentadoria policial`, 'verificar',
      `${info.previdencia} ${info.saude}`,
      'A análise exige data de ingresso, tempo no cargo, sexo, idade, regra de transição, contribuição e ficha funcional.');
    return html;
  }
  if (inst === 'pmesp') {
    html += direitoItem('DEJEM / Diária Especial por Jornada Extraordinária', 'condicionado',
      'Verba eventual para jornada extraordinária, quando houver escala, autorização e cumprimento do serviço.',
      'Depende de escala, disponibilidade, limite mensal e norma vigente.');
  } else if (inst === 'pcsp') {
    html += direitoItem('DEJEC / Diária Especial por Jornada Extraordinária', 'condicionado',
      'Verba eventual para jornada extraordinária na Polícia Civil/SP, quando autorizada e efetivamente cumprida.',
      'Depende de escala, autorização, limite e regulamentação vigente.');
  } else if (inst === 'pmerj') {
    html += direitoItem('RAS / Serviço Adicional', 'condicionado',
      'Pode haver remuneração por serviço adicional, escala extraordinária ou programa equivalente, conforme disponibilidade e autorização.',
      'Depende de escala, publicação, limite e norma estadual.');
  } else if (inst === 'pcerj') {
    html += direitoItem('Gratificação Técnico-Científica', 'condicionado',
      'Pode ser aplicável a carreiras técnico-científicas, como peritos e médicos legistas, conforme enquadramento legal.',
      'Base: Lei 11.003/2025/RJ e cargo ocupado.');
    html += direitoItem('Verba de Representação — Delegado', 'condicionado',
      'Delegados possuem tratamento remuneratório próprio, com verba de representação prevista na reestruturação da PCERJ.',
      'Base: Lei 11.003/2025/RJ. Aplicável apenas ao cargo correspondente.');
    html += direitoItem('Auxílio-Transporte / Diárias / Auxílios específicos', 'condicionado',
      'A nova estrutura da PCERJ lista vantagens e indenizações específicas que devem ser verificadas conforme lotação, deslocamento e situação funcional.',
      'Conferir Lei 11.003/2025/RJ e regulamentação interna.');
  } else if (inst === 'pmmg') {
    html += direitoItem('ADE / VPNI / Vantagens de transição', 'condicionado',
      'ADE, VPNI e parcelas de transição podem aparecer conforme avaliação, histórico funcional e regra remuneratória individual.',
      'Conferir ficha financeira, avaliações e legislação mineira atualizada.');
  } else if (inst === 'pcmg') {
    html += direitoItem('ADE / Gratificação de Aprimoramento Profissional', 'condicionado',
      'Podem existir vantagens por desempenho, formação, titulação ou aprimoramento profissional, conforme cargo e legislação da PCMG.',
      'Conferir plano de carreira, titulação aceita e percentuais vigentes.');
  } else if (inst === 'pmba' || inst === 'pcba') {
    html += direitoItem('CET — Condição Especial de Trabalho', 'condicionado',
      'Gratificação variável ligada a condição especial de trabalho, função ou local de exercício. Não deve ser tratada como valor fixo universal.',
      'Conferir percentual, cargo, setor, publicação e legislação estadual da Bahia.');
  } else if (inst === 'pmpr') {
    html += direitoItem('Auxílio-Alimentação PMPR', 'automatico',
      'Valor mensal padrão de R$ 834,74 para servidores ativos, destacado como verba indenizatória no simulador.',
      'Base: Lei PR 22.208/2024 e informação oficial de formas de ingresso da PMPR.');
    html += direitoItem('FASPM', 'condicionado',
      'Assistência à saúde militar com contribuição facultativa. No simulador, o desconto só entra se o usuário selecionar a opção FASPM.',
      'Base: Lei PR 17.169/2012: 0,5% + 0,2% por dependente, limitado a 2%.');
  } else if (inst === 'pcpr') {
    html += direitoItem('Auxílio-Alimentação PCPR', 'automatico',
      'Valor mensal padrão de R$ 834,74 para servidores ativos, destacado como verba indenizatória no simulador.',
      'Base: Lei PR 22.208/2024 e regras estaduais de auxílio-alimentação.');
    html += direitoItem('Diária especial / extrajornada voluntária', 'condicionado',
      'Pode existir quando houver escala, autorização e cumprimento de jornada extraordinária prevista em norma. Não é verba fixa mensal.',
      'Base: LC PR 259/2023, rol de vantagens/indenizações e regulamentação administrativa.');
  } else if (inst === 'pmrs') {
    html += direitoItem('Auxílio-Alimentação BM/RS', 'automatico',
      'Valor de R$ 400,00 informado nos editais oficiais 2025 de Soldado e Oficialato da Brigada Militar.',
      'Base: editais oficiais da Brigada Militar/RS.');
    html += direitoItem('Diárias / serviço extraordinário', 'condicionado',
      'Pode existir quando houver escala, autorização, deslocamento ou serviço extraordinário previsto em norma. Não é verba fixa mensal.',
      'Conferir legislação estadual, publicação da escala e contracheque.');
  } else if (inst === 'pcrs') {
    html += direitoItem('Dedicação exclusiva / jornada de 40 horas', 'condicionado',
      'Editais da PCRS indicam regime estatutário, 40 horas semanais e dedicação exclusiva para os cargos policiais.',
      'Base: editais oficiais 2025 da Polícia Civil/RS.');
    html += direitoItem('Diárias / indenizações / serviço extraordinário', 'condicionado',
      'Podem existir conforme lotação, deslocamento, autorização e legislação estadual. Não são verbas fixas universais.',
      'Conferir rubrica, contracheque, legislação estadual e normas internas.');
  } else if (inst === 'pmsc') {
    html += direitoItem('Auxílio-Alimentação PMSC', 'automatico',
      'Valor de referência de R$ 550,00 para 40h em Santa Catarina, com caráter indenizatório e sem incorporação ao subsídio.',
      'Base: Lei SC 18.796/2023, com redação da Lei SC 19.059/2024.');
    html += direitoItem('Diárias / serviço extraordinário / indenizações', 'condicionado',
      'Podem existir conforme escala, deslocamento, autorização, local de serviço e norma específica. Não são verbas fixas mensais.',
      'Conferir legislação estadual, publicação da escala, ordem de serviço e contracheque.');
  } else if (inst === 'pcsc') {
    html += direitoItem('Auxílio-Alimentação PCSC', 'automatico',
      'Valor de referência de R$ 550,00 para 40h. Nos editais PCSC 2025, aparece compondo o total divulgado para Agente e Escrivão.',
      'Base: Lei SC 18.796/2023, Lei SC 19.059/2024 e editais PCSC 2025.');
    html += direitoItem('Dedicação exclusiva / regime policial civil', 'condicionado',
      'A carreira policial civil exige conferência do cargo, classe, jornada, lotação e regras próprias do estatuto e da Lei Orgânica Nacional.',
      'Base: Lei SC 6.843/1986, Lei Federal 14.735/2023 e regulamentação estadual.');
  } else if (inst === 'pmes') {
    html += direitoItem('Auxílio-Alimentação PMES', 'condicionado',
      `Auxílio-alimentação deve ser conferido por edital, norma e rubrica vigente. O simulador usa referência ES de ${fmt(AUX_ALIM_ES_PADRAO)} apenas como verba informativa, sem somar automaticamente ao bruto.`,
      'Base: editais PMES, legislação estadual e contracheque.');
    html += direitoItem('Auxílio-Fardamento / serviço extraordinário', 'condicionado',
      'Pode existir conforme regra própria, fornecimento ou indenização de fardamento, escala e autorização de serviço extra.',
      'Base: LC ES 420/2007, editais PMES, legislação de fardamento/indenização e atos internos.');
  } else if (inst === 'pces') {
    html += direitoItem('Auxílio-Alimentação PCES', 'automatico',
      `Concurso OIP 2025 informa auxílio-alimentação de ${fmt(AUX_ALIM_ES_PADRAO)} além da remuneração inicial. Conferir rubrica e regra vigente para cada carreira.`,
      'Base: divulgação oficial PCES do concurso OIP 2025.');
    html += direitoItem('Serviço extraordinário / escalas especiais', 'condicionado',
      'Para OIP, a LC ES 1.093/2024 prevê possibilidade de serviço extraordinário sujeito a disponibilidade, interesse de serviço, candidatura prévia e escala, com limite mensal.',
      'Base: LC ES 1.093/2024 e regulamentação do Estado.');
  }
  return html;
}

function getStatusAposentadoria(tempo, idade, requisitosApos) {
  if (requisitosApos === 'sim') return 'condicionado';
  if (tempo >= 30 && idade >= 55) return 'verificar';
  return 'atencao';
}

function getAposentadoriaTexto(inst, tempo, idade, sexo, requisitosApos, ingressoAntesEC103) {
  const tipo = String(inst || '').startsWith('pm') ? 'reserva remunerada/reforma' : 'aposentadoria policial';
  if (requisitosApos === 'sim') {
    return `Você informou que os requisitos de ${tipo} já foram cumpridos. O próximo passo é confirmar a regra usada, cálculo, paridade/integralidade quando cabível e eventual abono de permanência.`;
  }
  if (tempo >= 30 && idade >= 55) {
    return `Tempo e idade informados indicam possível proximidade de ${tipo}, mas isso não basta para afirmar direito automático. É indispensável conferir data de ingresso, sexo, tempo no cargo/carreira e regra de transição.`;
  }
  const idadeTxt = idade ? `${idade} ano(s) de idade` : 'idade não informada';
  const sexoTxt = sexo === 'na' ? 'sexo não informado' : `sexo ${sexo}`;
  const ingressoTxt = ingressoAntesEC103 ? 'ingresso informado antes da EC 103/2019' : 'ingresso não informado ou posterior à EC 103/2019';
  return `Com ${tempo} ano(s) de contribuição policial, ${idadeTxt}, ${sexoTxt} e ${ingressoTxt}, a análise previdenciária deve ser individual. Não é seguro afirmar direito adquirido apenas por este simulador.`;
}

/* ============================================================ */

;


/* ===== js/pages/concursos-comparador.js ===== */
/* Chunk gerado a partir de js/script-original.js — Concursos, comparador de carreiras, ações judiciais e associações.
   Mantém a ordem original para preservar compatibilidade. */

/* === CONCURSOS (RICO) ======================================= */
/* ============================================================ */
/* BLOCO 15.12 — Renderização das páginas de concursos, ações e associações */

function getConcursoPoliciaPenal(inst) {
  if (!isPoliciaPenal(inst)) return null;
  const info = getInfoPoliciaPenal(inst);
  return {
    edital: `${info.sigla} — ${info.nome} — concursos, formação e carreira penal`,
    salario: info.concurso.salario || info.remuneracao,
    vagas: info.concurso.vagas || 'Conferir autorização, edital e Diário Oficial da unidade federativa.',
    cotas: 'Reserva de vagas conforme legislação estadual, federal e regras do edital vigente.',
    idade: 'Em regra, idade mínima de 18 anos; limites máximos, CNH, altura, aptidão física e demais requisitos dependem do edital e da legislação local.',
    escolaridade: info.concurso.escolaridade || info.escolaridade,
    materias: 'Português, Raciocínio Lógico, Informática, Direito Constitucional, Administrativo, Penal, Processo Penal, Direitos Humanos, Lei de Execução Penal, legislação penitenciária, atualidades e conhecimentos específicos, conforme edital.',
    banca: info.concurso.banca || 'A definir conforme edital.',
    inscritos: 'Sem informação automática; acompanhar Diário Oficial, portal do governo e site da banca.',
    etapas: 'Prova objetiva, investigação social, exames médicos, avaliação psicológica, TAF, curso de formação e demais fases previstas no edital.',
    cfsd: info.formacao,
    estagio: 'Estágio probatório e avaliação de desempenho conforme regime jurídico e lei da carreira penal.',
    validade: 'Conferir edital do certame.',
    previsao: `Acompanhar publicações oficiais: ${info.fonte}. Não afirmar edital aberto sem publicação oficial.`,
    site: info.url || REMUNERACAO_FONTES_OFICIAIS[inst]?.url || '#'
  };
}

function getAcoesPoliciaPenal(inst) {
  if (!isPoliciaPenal(inst)) return [];
  const info = getInfoPoliciaPenal(inst);
  return [
    { titulo: `${info.sigla} — Enquadramento, transformação de cargos e implantação da carreira`, status: 'Verificar caso a caso', ano: info.criacao, tipo: 'individual', desc: `Discussões podem envolver transformação de antigos cargos penitenciários em Polícia Penal, enquadramento, classe, referência, atribuições, efeitos financeiros e data de implantação. ${info.marco}`, base: `${info.criacao}; ato de enquadramento; ficha funcional; tabela remuneratória; Diário Oficial.`, fonte: info.fonte, fonteUrl: info.url, atualizado: 'Abril/2026' },
    { titulo: `${info.sigla} — Adicional penitenciário, risco, periculosidade, insalubridade e rubricas`, status: 'Tema dependente de rubrica e laudo', ano: 'Tema recorrente', tipo: 'individual', desc: info.vantagens, base: 'Lei estadual da carreira, laudo/ato administrativo, contracheques, lotação, escala e local de exercício.', fonte: info.fonte, fonteUrl: info.url, atualizado: 'Abril/2026' },
    { titulo: `${info.sigla} — Aposentadoria policial, transições e previdência`, status: 'Análise individual', ano: 'EC 103/2019, EC 104/2019 e normas locais', tipo: 'individual', desc: info.previdencia, base: 'Data de ingresso, tempo de contribuição, tempo no cargo/carreira, sexo, idade, regra aplicada e ficha funcional.', fonte: 'Conferência previdenciária individual', fonteUrl: info.url, atualizado: 'Abril/2026' },
    { titulo: `${info.sigla} — Plantões, escoltas, operações, diárias e serviço extraordinário`, status: 'Depende de escala e autorização', ano: 'Tema operacional', tipo: 'individual', desc: `Atribuições operacionais: ${info.atribuicoes} Diferenças dependem de escala, ordem de serviço, autorização, deslocamento e rubrica.`, base: 'Escalas, ordens de serviço, publicações, lei local, contracheques e atos administrativos.', fonte: 'Documentos funcionais e normas internas', fonteUrl: info.url, atualizado: 'Abril/2026' }
  ];
}

function getAssociacoesPoliciaPenal(inst) {
  if (!isPoliciaPenal(inst)) return [];
  const info = getInfoPoliciaPenal(inst);
  return [
    { nome: `Entidade representativa da ${info.sigla} — ${info.nome}`, foco: `${info.uf} — policiais penais ativos, aposentados e pensionistas quando abrangidos`, acao: `Representação da categoria em carreira, remuneração, saúde, aposentadoria policial, porte funcional, condições de trabalho, segurança prisional e valorização institucional. Busca sugerida: ${info.associacaoBusca}.`, site: 'Consultar site/canal oficial da entidade local', telefone: 'Consultar diretamente', mensalidade: 'Consultar diretamente na entidade', servicos: 'Orientação sindical/associativa, notícias, mobilização, acompanhamento legislativo e eventual apoio jurídico conforme regras internas.' },
    { nome: `Associação/Sindicato dos Policiais Penais — ${info.uf}`, foco: `${info.orgao}`, acao: `Acompanhamento de pautas ligadas a ${info.criacao}, implantação da carreira, adicionais, concurso, formação, segurança das unidades e direitos funcionais.`, site: 'Consultar canais oficiais e redes da entidade local', telefone: 'Consultar diretamente', mensalidade: 'Consultar diretamente', servicos: 'Atendimento associativo, comunicação, assembleias, convênios, acompanhamento legislativo e eventual suporte jurídico conforme contrato.' }
  ];
}


/* ============================================================ */
/* === COMPARADOR DE CARREIRAS ================================ */
/* ============================================================ */
/* BLOCO 15.14.1 — Comparar remuneração, benefícios, concursos e fontes entre instituições */
function getRamoComparador(inst) {
  inst = String(inst || '');
  if (inst.startsWith('pp')) return 'Penal';
  if (inst.startsWith('pc')) return 'Civil';
  if (inst.startsWith('pm')) return inst === 'pmrs' ? 'Militar / Brigada' : 'Militar';
  return 'Carreira';
}

function getOrdemComparador(inst) {
  const estado = getEstadoDaInstituicao(inst);
  const dadosEstado = HEADER_ESTADOS[estado] || {};
  if (dadosEstado.pm === inst) return 1;
  if (dadosEstado.pc === inst) return 2;
  if (dadosEstado.pp === inst) return 3;
  return 9;
}

function getInstituicoesComparador() {
  return INSTITUICOES_VALIDAS
    .filter(inst => HEADER_INSTITUICOES_INFO[inst])
    .map(inst => {
      const estado = getEstadoDaInstituicao(inst);
      const dadosEstado = HEADER_ESTADOS[estado] || HEADER_ESTADOS.sp;
      const info = HEADER_INSTITUICOES_INFO[inst] || {};
      return {
        inst,
        estado,
        uf: dadosEstado.sigla || estado.toUpperCase(),
        estadoNome: dadosEstado.nome || estado.toUpperCase(),
        sigla: info.titulo || inst.toUpperCase(),
        nome: info.desc || inst.toUpperCase(),
        ramo: getRamoComparador(inst)
      };
    })
    .sort((a, b) => {
      const estadoComp = Object.keys(HEADER_ESTADOS).indexOf(a.estado) - Object.keys(HEADER_ESTADOS).indexOf(b.estado);
      return estadoComp || getOrdemComparador(a.inst) - getOrdemComparador(b.inst);
    });
}

function inicializarComparadorCarreiras() {
  const selecao = document.getElementById('comparador-selecao');
  if (!selecao) return;

  if (!selecao.dataset.renderizado) {
    const instituicoes = getInstituicoesComparador();
    const ordemEstados = Object.keys(HEADER_ESTADOS);
    selecao.innerHTML = ordemEstados.map(estado => {
      const dadosEstado = HEADER_ESTADOS[estado] || {};
      const itens = instituicoes.filter(item => item.estado === estado);
      if (!itens.length) return '';
      return `
        <div class="comparador-check-grupo" role="group" aria-label="${escapeHtml(dadosEstado.nome || estado.toUpperCase())}">
          <div class="comparador-check-titulo">${escapeHtml(dadosEstado.nome || estado.toUpperCase())}</div>
          ${itens.map(item => `
            <label class="comparador-check-option">
              <input type="checkbox" value="${escapeHtml(item.inst)}" data-sigla="${escapeHtml(item.sigla)}">
              <span>
                <strong>${escapeHtml(item.sigla)}</strong>
                <small>${escapeHtml(item.nome)} · ${escapeHtml(item.uf)} · ${escapeHtml(item.ramo)}</small>
              </span>
            </label>
          `).join('')}
        </div>
      `;
    }).join('');
    selecao.dataset.renderizado = 'true';
  }

  if (!selecao.querySelector('input[type="checkbox"]:checked')) comparadorSelecionarEstadoAtual(false);
  carregarComparadorCarreiras();
}

function getComparadorSelect() {
  return document.getElementById('comparador-selecao');
}

function getComparadorCheckboxes() {
  const selecao = getComparadorSelect();
  return selecao ? Array.from(selecao.querySelectorAll('input[type="checkbox"]')) : [];
}

function toggleComparadorLista() {
  const lista = getComparadorSelect();
  const botao = document.getElementById('comparador-toggle-lista');
  if (!lista || !botao) return;
  const aberta = !lista.classList.contains('aberta');
  lista.classList.toggle('aberta', aberta);
  botao.setAttribute('aria-expanded', aberta ? 'true' : 'false');
}

function setSelecionadasComparador(valores) {
  const checkboxes = getComparadorCheckboxes();
  const setValores = new Set((valores || []).filter(Boolean));
  checkboxes.forEach(check => { check.checked = setValores.has(check.value); });
}

function atualizarResumoSelecaoComparador() {
  const resumoSelecao = document.getElementById('comparador-selecionadas');
  const contador = document.getElementById('comparador-contador-selecao');
  if (!resumoSelecao) return;

  const selecionadas = getComparadorCheckboxes()
    .filter(check => check.checked)
    .map(check => check.dataset.sigla || check.value.toUpperCase())
    .filter(Boolean);

  if (contador) contador.textContent = `${selecionadas.length} selecionada${selecionadas.length === 1 ? '' : 's'}`;

  if (!selecionadas.length) {
    resumoSelecao.innerHTML = 'Nenhuma instituição selecionada.';
    return;
  }

  resumoSelecao.innerHTML = `<strong>Selecionadas (${selecionadas.length}):</strong> ${escapeHtml(selecionadas.join(', '))}`;
}

function comparadorSelecionarEstadoAtual(exibirToast = true) {
  const estadoAtivo = getEstadoDaInstituicao(currInst);
  const dadosEstado = HEADER_ESTADOS[estadoAtivo] || HEADER_ESTADOS.sp;
  const valores = [dadosEstado.pm, dadosEstado.pc, dadosEstado.pp].filter(Boolean);
  setSelecionadasComparador(valores);
  carregarComparadorCarreiras();
  if (exibirToast) mostrarToast(`Comparando carreiras de ${dadosEstado.nome}.`);
}

function comparadorSelecionarTodas() {
  const checkboxes = getComparadorCheckboxes();
  checkboxes.forEach(check => { check.checked = true; });
  carregarComparadorCarreiras();
  mostrarToast('Todas as instituições foram selecionadas para comparação.');
}

function comparadorLimparSelecao() {
  const checkboxes = getComparadorCheckboxes();
  checkboxes.forEach(check => { check.checked = false; });
  carregarComparadorCarreiras();
}

function getConcursoComparador(inst) {
  return CONCURSOS[inst] || getConcursoPoliciaPenal(inst) || {
    edital: 'Concurso de referência não cadastrado',
    salario: 'Consultar edital vigente',
    vagas: 'Consultar edital vigente',
    inscritos: 'Consultar banca e órgão oficial',
    banca: 'Consultar edital',
    materias: 'Consultar edital do cargo',
    previsao: 'Acompanhar Diário Oficial, órgão e banca.',
    escolaridade: 'Consultar edital',
    etapas: 'Consultar edital',
    site: REMUNERACAO_FONTES_OFICIAIS[inst]?.url || '#'
  };
}

function limitarTextoComparador(texto, limite = 220) {
  texto = String(texto || '').replace(/\s+/g, ' ').trim();
  return texto.length > limite ? texto.slice(0, limite - 1).trim() + '…' : texto;
}

function getResumoRemuneracaoComparador(inst) {
  const linhas = gerarRemuneracaoTabelada(inst) || [];
  const validas = linhas.filter(l => Number(l.remuneracao || 0) > 0);
  const menor = validas.length ? Math.min(...validas.map(l => Number(l.remuneracao || 0))) : 0;
  const maior = validas.length ? Math.max(...validas.map(l => Number(l.remuneracao || 0))) : 0;
  const linhaMenor = validas.find(l => Number(l.remuneracao || 0) === menor) || linhas[0] || {};
  const linhaMaior = validas.find(l => Number(l.remuneracao || 0) === maior) || linhas[0] || {};
  const fonte = REMUNERACAO_FONTES_OFICIAIS[linhaMenor.fonteKey] || REMUNERACAO_FONTES_OFICIAIS[inst] || { nome: 'Fonte oficial da carreira', url: '#' };
  const adicionais = getAdicionaisRemuneracaoResumo(inst, linhaMenor);
  return {
    totalCargos: linhas.length,
    menor,
    maior,
    cargoMenor: linhaMenor.cargo || 'Cargo inicial/de referência',
    cargoMaior: linhaMaior.cargo || 'Topo de carreira/de referência',
    adicionais,
    fonteNome: fonte.nome || 'Fonte oficial da carreira',
    fonteUrl: fonte.url || '#'
  };
}

function getDadosComparador(inst) {
  const info = HEADER_INSTITUICOES_INFO[inst] || {};
  const estado = getEstadoDaInstituicao(inst);
  const dadosEstado = HEADER_ESTADOS[estado] || HEADER_ESTADOS.sp;
  const concurso = getConcursoComparador(inst);
  const remuneracao = getResumoRemuneracaoComparador(inst);
  return {
    inst,
    sigla: info.titulo || inst.toUpperCase(),
    nome: info.desc || inst.toUpperCase(),
    estado: dadosEstado.nome || estado.toUpperCase(),
    uf: dadosEstado.sigla || estado.toUpperCase(),
    ramo: getRamoComparador(inst),
    concurso,
    remuneracao
  };
}

function getSelecionadasComparador() {
  return getComparadorCheckboxes()
    .filter(check => check.checked)
    .map(check => check.value)
    .filter(inst => INSTITUICOES_VALIDAS.includes(inst));
}

function linkComparador(url, texto = 'Abrir fonte') {
  if (!url || url === '#') return '<span>Consultar fonte oficial</span>';
  return `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(texto)}</a>`;
}

function carregarComparadorCarreiras() {
  const tbody = document.getElementById('comparador-tabela');
  const cards = document.getElementById('comparador-cards');
  const resumo = document.getElementById('comparador-resumo');
  const wrap = document.getElementById('comparador-tabela-wrap');
  if (!tbody || !cards || !resumo || !wrap) return;

  atualizarResumoSelecaoComparador();
  const selecionadas = getSelecionadasComparador();
  if (selecionadas.length < 2) {
    resumo.innerHTML = '';
    tbody.innerHTML = '';
    cards.innerHTML = '<div class="comparador-vazio">Selecione pelo menos duas instituições para gerar o comparativo de carreiras.</div>';
    wrap.style.display = 'none';
    return;
  }

  wrap.style.display = '';
  const dados = selecionadas.map(getDadosComparador);

  const menores = dados.map(d => d.remuneracao.menor).filter(v => v > 0);
  const maiores = dados.map(d => d.remuneracao.maior).filter(v => v > 0);
  const melhorInicial = dados
    .filter(d => d.remuneracao.menor > 0)
    .sort((a, b) => b.remuneracao.menor - a.remuneracao.menor)[0];
  const melhorTopo = dados
    .filter(d => d.remuneracao.maior > 0)
    .sort((a, b) => b.remuneracao.maior - a.remuneracao.maior)[0];

  resumo.innerHTML = `
    <div class="comparador-stat">
      <span>Instituições comparadas</span>
      <strong>${dados.length}</strong>
    </div>
    <div class="comparador-stat">
      <span>Menor remuneração encontrada</span>
      <strong>${menores.length ? fmt(Math.min(...menores)) : 'A confirmar'}</strong>
    </div>
    <div class="comparador-stat">
      <span>Maior remuneração encontrada</span>
      <strong>${maiores.length ? fmt(Math.max(...maiores)) : 'A confirmar'}</strong>
    </div>
    <div class="comparador-stat">
      <span>Destaques</span>
      <strong>${melhorInicial ? escapeHtml(melhorInicial.sigla) + ' menor base' : 'Sem base'} · ${melhorTopo ? escapeHtml(melhorTopo.sigla) + ' topo' : 'Sem topo'}</strong>
    </div>
  `;

  tbody.innerHTML = dados.map(d => {
    const c = d.concurso;
    const r = d.remuneracao;
    return `
      <tr>
        <td>
          <strong>${escapeHtml(d.sigla)}</strong><br>
          ${escapeHtml(d.nome)}<br>
          <span class="comparador-pill">${escapeHtml(d.uf)}</span>
          <span class="comparador-pill">${escapeHtml(d.ramo)}</span>
        </td>
        <td>
          <strong>Menor:</strong> ${r.menor ? fmt(r.menor) : 'A confirmar'}<br>
          <small>${escapeHtml(r.cargoMenor)}</small><br>
          <strong>Maior:</strong> ${r.maior ? fmt(r.maior) : 'A confirmar'}<br>
          <small>${escapeHtml(r.cargoMaior)}</small>
        </td>
        <td>
          ${escapeHtml(limitarTextoComparador(r.adicionais, 260))}
        </td>
        <td>
          <strong>Último edital:</strong> ${escapeHtml(c.edital || 'Edital de referência')}<br>
          <strong>Salário edital:</strong> ${escapeHtml(c.salario || 'Consultar edital')}<br>
          <strong>Próximo concurso / andamento:</strong> ${escapeHtml(limitarTextoComparador(c.previsao, 180))}
        </td>
        <td>
          <strong>Vagas:</strong> ${escapeHtml(c.vagas || 'Consultar edital')}<br>
          <strong>Inscritos:</strong> ${escapeHtml(c.inscritos || 'Consultar banca')}
        </td>
        <td>
          <strong>Banca:</strong> ${escapeHtml(c.banca || 'Consultar edital')}<br>
          <strong>Matérias:</strong> ${escapeHtml(limitarTextoComparador(c.materias, 230))}
        </td>
        <td>
          ${linkComparador(c.site || r.fonteUrl, 'Concurso')}<br>
          ${linkComparador(r.fonteUrl, 'Remuneração')}
        </td>
      </tr>
    `;
  }).join('');

  cards.innerHTML = dados.map(d => {
    const c = d.concurso;
    const r = d.remuneracao;
    return `
      <article class="comparador-card">
        <h3>${escapeHtml(d.sigla)} — ${escapeHtml(d.uf)}</h3>
        <p><strong>${escapeHtml(d.nome)}</strong> · ${escapeHtml(d.ramo)}</p>
        <ul>
          <li><strong>Faixa cadastrada:</strong> ${r.menor ? fmt(r.menor) : 'A confirmar'} até ${r.maior ? fmt(r.maior) : 'A confirmar'}.</li>
          <li><strong>Referência inferior:</strong> ${escapeHtml(r.cargoMenor)}.</li>
          <li><strong>Último edital de referência:</strong> ${escapeHtml(c.edital || 'Consultar edital vigente')}.</li>
          <li><strong>Vagas:</strong> ${escapeHtml(c.vagas || 'Consultar edital')}.</li>
          <li><strong>Banca:</strong> ${escapeHtml(c.banca || 'Consultar edital')}.</li>
          <li><strong>Escolaridade:</strong> ${escapeHtml(limitarTextoComparador(c.escolaridade, 180))}.</li>
          <li><strong>Etapas:</strong> ${escapeHtml(limitarTextoComparador(c.etapas, 200))}.</li>
        </ul>
        <p><strong>Vantagens/benefícios:</strong> ${escapeHtml(limitarTextoComparador(r.adicionais, 260))}</p>
        <p>${linkComparador(c.site || r.fonteUrl, 'Ver fonte do concurso')} · ${linkComparador(r.fonteUrl, 'Ver fonte remuneratória')}</p>
      </article>
    `;
  }).join('');
}


function carregarConcursos() {
  const cont = document.getElementById('lista-concursos');
  if (!cont) return;
  const c = CONCURSOS[currInst] || getConcursoPoliciaPenal(currInst);
  if (!c) { cont.innerHTML = ""; return; }

  cont.innerHTML = `
    <div class="direito-item acao">
      <span class="direito-nome">${c.edital}</span>
      <span class="direito-desc"><strong>Salário inicial:</strong> ${c.salario}</span>
      <span class="direito-desc"><strong>Vagas:</strong> ${c.vagas}</span>
      <span class="direito-desc"><strong>Cotas:</strong> ${c.cotas}</span>
      <span class="direito-desc"><strong>Idade exigida:</strong> ${c.idade}</span>
      <span class="direito-desc"><strong>Escolaridade:</strong> ${c.escolaridade}</span>
      <span class="direito-desc"><strong>Banca:</strong> ${c.banca} · <strong>Inscritos no último:</strong> ${c.inscritos}</span>
      <span class="direito-desc"><strong>Disciplinas:</strong> ${c.materias}</span>
      <span class="direito-desc"><strong>Etapas do certame:</strong> ${c.etapas}</span>
      <span class="direito-desc"><strong>Curso de Formação:</strong> ${c.cfsd}</span>
      <span class="direito-desc"><strong>Estágio Probatório:</strong> ${c.estagio}</span>
      <span class="direito-desc"><strong>Validade do edital:</strong> ${c.validade}</span>
      <span class="direito-desc" style="margin-top:8px;"><strong>Próximo Edital:</strong> ${c.previsao}</span>
      ${c.site ? `<a href="${c.site}" target="_blank" rel="noopener noreferrer" class="concurso-link">🔗 Site oficial da instituição</a>` : ''}
    </div>

    <a class="taf-produto-card" href="https://s.shopee.com.br/9fHIyi0uae" target="_blank" rel="noopener noreferrer" aria-label="Ver barra fixa para porta, produto útil para treino de TAF">
      <div class="taf-produto-imagem" aria-hidden="true">
        <img src="img/barrafixa01.webp" data-img-base="img/barrafixa01" alt="Detalhes da Oferta do Produto - barra fixa para porta" loading="lazy">
      </div>
      <div class="taf-produto-conteudo">
        <span class="taf-produto-selo">Produto útil para o TAF</span>
        <strong>Barra fixa para porta</strong>
        <p>Ajuda o candidato a treinar em casa um dos exercícios que mais reprovam no TAF. Com constância, a barra fortalece costas, braços, pegada e resistência, facilitando a evolução para cumprir as repetições exigidas nos testes físicos das polícias.</p>
        <span class="taf-produto-cta">Comprar</span>
      </div>
    </a>

    <a class="taf-produto-card taf-produto-card-barrafixa02" href="https://s.shopee.com.br/9fHJ0X4HVl" target="_blank" rel="noopener noreferrer" aria-label="Ver Power Rack Funcional com paralelas, suporte de agachamento, supino, barra fixa e barra paralela, produto útil para treino de TAF">
      <div class="taf-produto-imagem" aria-hidden="true">
        <img src="img/barrafixa02.webp" data-img-base="img/barrafixa02" alt="Power Rack Funcional com paralelas, suporte de agachamento, supino, barra fixa e barra paralela" loading="lazy">
      </div>
      <div class="taf-produto-conteudo">
        <span class="taf-produto-selo">Produto útil para o TAF</span>
        <strong>Power Rack Funcional com barra fixa e paralelas</strong>
        <p>Por ser maior, mais estável e permitir treino completo, o power rack ajuda o candidato a evoluir com mais segurança na barra fixa, paralelas, agachamento e fortalecimento geral. É uma opção superior para quem quer passar no TAF das polícias, porque permite treinar força, pegada, costas, braços, core e resistência em um equipamento mais robusto e versátil.</p>
        <span class="taf-produto-cta">Comprar</span>
      </div>
    </a>
  `;
}

/* ============================================================ */
/* === AÇÕES JUDICIAIS ======================================== */
/* ============================================================ */
function carregarAcoes() {
  const cont = document.getElementById('lista-acoes');
  if (!cont) return;
  const lista = ACOES_JUDICIAIS[currInst] || getAcoesPoliciaPenal(currInst) || [];

  cont.innerHTML = lista.map(a => {
    const fonteHtml = a.fonte ? `<span class="direito-desc"><strong>Fonte de conferência:</strong> ${a.fonteUrl ? `<a href="${a.fonteUrl}" target="_blank" rel="noopener noreferrer" class="concurso-link">${a.fonte}</a>` : a.fonte}</span>` : '';
    const atualizadoHtml = a.atualizado ? `<span class="direito-desc"><strong>Última atualização:</strong> ${a.atualizado}</span>` : '';

    return `
      <div class="direito-item acao">
        <span class="direito-nome">${a.titulo}</span>
        <span class="direito-status" style="color: var(--vermelho);">${a.status}</span>
        <div>
          <span class="badge-info ${a.tipo}">${a.tipo === 'coletiva' ? '⚖ Ação Coletiva' : '👤 Ação Individual'}</span>
          <span class="badge-info ativa">${a.ano}</span>
        </div>
        <span class="direito-desc">${a.desc}</span>
        <span class="direito-desc"><strong>Base legal/jurisprudência:</strong> ${a.base}</span>
        ${fonteHtml}
        ${atualizadoHtml}
      </div>
    `;
  }).join('');
}

/* ============================================================ */
/* === ASSOCIAÇÕES ============================================ */
/* ============================================================ */
function carregarAssociacoes() {
  const cont = document.getElementById('lista-associacoes');
  if (!cont) return;
  const lista = ASSOCIACOES[currInst] || getAssociacoesPoliciaPenal(currInst) || [];
  cont.innerHTML = lista.map(a => `
    <div class="direito-item associacao">
      <span class="direito-nome">${a.nome}</span>
      <span class="direito-desc"><strong>Foco:</strong> ${a.foco}</span>
      <span class="direito-desc"><strong>Atuação atual:</strong> ${a.acao}</span>
      <span class="direito-desc"><strong>Serviços:</strong> ${a.servicos}</span>
      <span class="direito-desc"><strong>Mensalidade:</strong> ${a.mensalidade}</span>
      <span class="direito-desc"><strong>Contato:</strong> ${a.telefone} · <a href="https://${a.site}" target="_blank" rel="noopener noreferrer" class="concurso-link" style="margin-top:0;">${a.site}</a></span>
    </div>
  `).join('');
}



/* ============================================================ */

;


/* ===== js/pages/contato-init.js ===== */
/* Chunk gerado a partir de js/script-original.js — Contato, anúncios, contador e inicialização.
   Mantém a ordem original para preservar compatibilidade. */

/* === ESPAÇOS DE ANÚNCIO / LINK PARA PARCEIROS =============== */
/* ============================================================ */
/* BLOCO 15.13A — Direciona interessados em anúncios para o formulário */
const ANUNCIO_AREAS_LABELS = {
  home_topo: 'Topo da página principal',
  home_meio_consultas: 'Meio da página principal, após consultas principais',
  home_meio_produtos: 'Página principal, antes de conteúdos e produtos',
  menu_lateral: 'Menu lateral',
  remuneracao_antes_tabela: 'Aba Remuneração, antes da tabela',
  direitos_entre_formulario_parecer: 'Aba Direitos, entre formulário e parecer',
  concursos_antes_lista: 'Aba Concursos, antes da lista',
  comparador_antes_resultado: 'Aba Comparar Carreiras, antes dos resultados',
  produtos_topo: 'Topo da aba Produtos',
  acoes_antes_lista: 'Aba Ações Judiciais, antes da lista',
  associacoes_antes_lista: 'Aba Associações, antes da lista',
  rodape_geral: 'Antes do rodapé'
};

function abrirContatoAnuncio(area = '') {
  const areaNome = ANUNCIO_AREAS_LABELS[area] || 'Espaço de anúncio do portal';

  switchPage('parceiros');

  if (window.history && window.history.replaceState) {
    window.history.replaceState(null, '', '#parceiros');
  }

  window.setTimeout(() => {
    const assunto = document.getElementById('contato_assunto');
    const mensagem = document.getElementById('contato_mensagem');
    const nome = document.getElementById('contato_nome');
    const form = document.querySelector('#page-parceiros form');

    if (assunto) assunto.value = 'Parceria Comercial / Anúncio';

    if (mensagem && !mensagem.value.trim()) {
      mensagem.value = `Olá, tenho interesse em anunciar no Universo Segurança Pública.\n\nÁrea de interesse: ${areaNome}.\n\nGostaria de receber informações sobre disponibilidade, valores, formatos e próximos passos.`;
      atualizarContador();
    }

    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    if (nome) {
      try {
        nome.focus({ preventScroll: true });
      } catch (e) {
        nome.focus();
      }
    }
  }, 0);
}

/* ============================================================ */
/* === CONTADOR DE CARACTERES (CONTATO) ======================= */
/* ============================================================ */
/* BLOCO 15.14 — Formulário de contato e contador de caracteres */
function atualizarContador() {
  const txt = document.getElementById('contato_mensagem');
  const cnt = document.getElementById('char-counter');
  if (!txt || !cnt) return;
  const len = txt.value.length;
  cnt.textContent = `${len} / 2000 caracteres`;
  cnt.classList.toggle('over', len > 1900);
}

/* ============================================================ */
/* === ENVIO DE CONTATO ======================================= */
/* ============================================================ */
function enviarEmailContato(event) {
  event.preventDefault();
  const nome = document.getElementById('contato_nome').value.trim();
  const email = document.getElementById('contato_email').value.trim();
  const assunto = document.getElementById('contato_assunto').value;
  const msg = document.getElementById('contato_mensagem').value.trim();

  if (!nome || !email || !assunto || !msg) {
    mostrarToast('Preencha todos os campos!', 'error');
    return;
  }
  if (msg.length < 10) {
    mostrarToast('Mensagem muito curta (mínimo 10 caracteres).', 'error');
    return;
  }
  const corpo = encodeURIComponent(`Nome: ${nome}\nE-mail: ${email}\n\nMensagem:\n${msg}\n\n---\nEnviado via Universo Segurança Pública`);
  const sub = encodeURIComponent(`[CONTATO] ${assunto}`);
  window.location.href = `mailto:universosegpub@gmail.com?subject=${sub}&body=${corpo}`;
  setTimeout(() => mostrarToast('E-mail aberto no seu cliente! Resposta em até 48h.'), 300);
}

/* ============================================================ */
/* === EVENT LISTENERS / INICIALIZAÇÃO ======================== */
/* ============================================================ */
/* BLOCO 15.15 — Inicialização, eventos automáticos e atalhos de teclado */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  aplicarEstruturaEstadosFaltantesNoHtml();

  // Popula cargos usados na aba Direitos e Vantagens.
  popularCargos('pmesp');

  // Aplica o cabeçalho inicial do portal; a instituição específica só entra após escolha do usuário.
  aplicarHeaderInicialPortal();

  // Direitos: atualizar quando muda cargo/situação/tempo.
  ['cargo_dir', 'situacao_dir', 'tempo_dir'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', analisarDireitos);
  });

  // Acessibilidade: ESC fecha o menu.
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const sb = document.getElementById('sidebar');
      if (sb && sb.classList.contains('active')) toggleMenu();
    }
  });
});

;


/* ===== js/ui/event-bindings.js ===== */
/* =======================================================
   Eventos centralizados.
   Remove a dependência de onclick/onchange/oninput inline no HTML.
   Este arquivo deve ser carregado depois dos dados, serviços e páginas.
   ======================================================= */

(function () {
  function safeCall(fnName, args = []) {
    const fn = window[fnName];
    if (typeof fn === 'function') return fn.apply(window, args);
    console.warn(`[UniSegPub] Função não encontrada: ${fnName}`);
    return undefined;
  }

  function bindClick(selector, handler) {
    document.querySelectorAll(selector).forEach(el => {
      el.addEventListener('click', handler);
    });
  }

  function bindChange(selector, handler) {
    document.querySelectorAll(selector).forEach(el => {
      el.addEventListener('change', handler);
    });
  }

  function bindInput(selector, handler) {
    document.querySelectorAll(selector).forEach(el => {
      el.addEventListener('input', handler);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    bindClick('.menu-btn, #menuOverlay, .close-btn', () => safeCall('toggleMenu'));
    bindClick('#theme-toggle-header', () => safeCall('toggleTheme'));

    bindChange('#instituicao, #instituicao_header', event => {
      safeCall('mudarInstituicao', [event.currentTarget.value]);
    });

    bindClick('.branch-option[data-branch]', event => {
      safeCall('selecionarRamo', [event.currentTarget.dataset.branch]);
    });

    bindClick('.state-flag[data-estado]', event => {
      safeCall('selecionarEstado', [event.currentTarget.dataset.estado]);
    });

    bindClick('.sidebar-nav a[href^="#"]', event => {
      const link = event.currentTarget;
      const page = (link.getAttribute('href') || '').replace('#', '');
      if (!page) return;

      event.preventDefault();

      if (page === 'principal') {
        safeCall('abrirPaginaInicial');
        return;
      }

      safeCall('switchPage', [page]);
    });

    bindClick('[data-page]', event => {
      const page = event.currentTarget.dataset.page;
      if (!page) return;
      safeCall('switchPage', [page]);
    });

    document.querySelectorAll('[data-page]').forEach(el => {
      el.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          safeCall('switchPage', [event.currentTarget.dataset.page]);
        }
      });
    });

    bindClick('.ad-slot .ad-placeholder-link', event => {
      const area = event.currentTarget.closest('[data-ad-area]')?.dataset.adArea;
      if (!area) return;
      event.preventDefault();
      safeCall('abrirContatoAnuncio', [area]);
    });

    bindInput('#idade_dir, #renda_dir', () => safeCall('analisarDireitos'));
    bindChange('#idade_dir, #renda_dir, #sexo_dir, #ingresso_dir, #dependente_dir, #local_especial_dir, #requisitos_apos_dir', () => safeCall('analisarDireitos'));

    bindClick('[data-action="comparador-estado-atual"]', () => safeCall('comparadorSelecionarEstadoAtual'));
    bindClick('[data-action="comparador-todas"]', () => safeCall('comparadorSelecionarTodas'));
    bindClick('[data-action="comparador-limpar"]', () => safeCall('comparadorLimparSelecao'));
    bindClick('#comparador-toggle-lista', () => safeCall('toggleComparadorLista'));

    document.addEventListener('change', event => {
      const alvo = event.target;
      if (alvo && alvo.matches('#comparador-selecao input[type="checkbox"]')) {
        safeCall('carregarComparadorCarreiras');
      }
    });

    bindInput('#contato_mensagem', () => safeCall('atualizarContador'));

    const contatoForm = document.querySelector('form[data-form="contato"]');
    if (contatoForm) {
      contatoForm.addEventListener('submit', event => safeCall('enviarEmailContato', [event]));
    }
  });

  document.addEventListener('error', event => {
    const img = event.target;
    if (!(img instanceof HTMLImageElement)) return;

    if (img.matches('.produto-imagem img[data-img-base], .taf-produto-imagem img[data-img-base]')) {
      safeCall('carregarImagemProduto', [img]);
      return;
    }

    if (img.dataset.hideOnError === 'true') {
      img.style.display = 'none';
      const container = img.closest('.produto-imagem, .taf-produto-imagem, .partner-image-slot');
      if (container) container.classList.add('img-indisponivel');
    }
  }, true);
})();

;