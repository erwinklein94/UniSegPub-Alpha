/* Módulo de estado inicial compartilhado.
   Os dados do portal vivem no Supabase (tabela datasets) e são carregados
   por js/services/dados-portal.js, que define os mesmos nomes globais. */

/* ============================================================ */
/* === ESTADO E HELPERS ======================================= */
/* ============================================================ */
let currTabela = (typeof CARGOS_PM !== 'undefined' && Array.isArray(CARGOS_PM)) ? CARGOS_PM : [];
let currInst = 'pmesp';
let headerModoInicialPortal = true;
let ultimoDetalheIRRF = null;

document.addEventListener('dados-portal:pronto', function () {
  if ((!Array.isArray(currTabela) || !currTabela.length) && Array.isArray(window.CARGOS_PM)) {
    currTabela = window.CARGOS_PM;
  }
});
