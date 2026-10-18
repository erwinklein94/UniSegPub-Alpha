/* Hipóteses de curiosidade, sem conexão com receitas ou cliques do AdSense.
   Receita = páginas consideradas × RPM de página / 1000.
   CTR só estima cliques; não adiciona uma segunda receita ao RPM. */
export function simularAdSense({ acessos, dias, rpm, percentualMonetizado, ctr }) {
  const parametros = [acessos, dias, rpm, percentualMonetizado, ctr];
  if (!parametros.every(n => typeof n === 'number' && Number.isFinite(n))) {
    throw new Error('Preencha todos os campos com números válidos.');
  }
  if (!Number.isSafeInteger(acessos) || acessos < 0 || !Number.isInteger(dias) || dias < 1) {
    throw new Error('A base precisa de acessos válidos e de pelo menos um dia.');
  }
  if (rpm < 0) throw new Error('O RPM precisa ser maior ou igual a zero.');
  if (percentualMonetizado < 0 || percentualMonetizado > 100 || ctr < 0 || ctr > 100) {
    throw new Error('Os percentuais precisam estar entre 0 e 100.');
  }
  const paginas = acessos * (percentualMonetizado / 100);
  const receita = paginas / 1000 * rpm;
  const diaria = receita / dias;
  const projecao30 = diaria * 30;
  const cliques = paginas * (ctr / 100);
  if (![paginas, receita, diaria, projecao30, cliques].every(Number.isFinite)) {
    throw new Error('Os valores são altos demais. Reduza as hipóteses para simular.');
  }
  return { paginas, receita, diaria, projecao30, cliques };
}
