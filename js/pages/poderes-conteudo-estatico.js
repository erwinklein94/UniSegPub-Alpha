/* Poderes e Deveres — filtro e paginação visual sobre conteúdo já escrito no HTML. */
(function () {
  const CARDS_POR_PAGINA = 4;

  function qs(selector, root) { return (root || document).querySelector(selector); }
  function qsa(selector, root) { return Array.from((root || document).querySelectorAll(selector)); }
  function normalizar(valor) { return String(valor || '').trim().toLowerCase(); }

  function cards() {
    return qsa('[data-poderes-card][data-inst]');
  }

  function detalhe() {
    return qs('#consulta-poderes-detalhado');
  }

  function esconderDetalhe() {
    const bloco = detalhe();
    if (bloco) bloco.hidden = true;
  }

  function mostrarDetalhe() {
    const bloco = detalhe();
    if (bloco) bloco.hidden = false;
  }

  function atualizarOpcoesInstituicao(seletorEsfera, seletorInstituicao) {
    const esfera = normalizar(seletorEsfera?.value);
    Array.from(seletorInstituicao?.options || []).forEach(option => {
      if (!option.value) {
        option.hidden = false;
        return;
      }
      option.hidden = Boolean(esfera) && option.dataset.esfera !== esfera;
    });

    const atual = seletorInstituicao?.selectedOptions?.[0];
    if (atual && atual.hidden) seletorInstituicao.value = '';
  }

  function cardsFiltrados(seletorEsfera, seletorInstituicao) {
    const esfera = normalizar(seletorEsfera?.value);
    const inst = normalizar(seletorInstituicao?.value);
    return cards().filter(card => {
      if (esfera && card.dataset.esfera !== esfera) return false;
      if (inst && card.dataset.inst !== inst) return false;
      return true;
    });
  }

  function renderizarPaginacao(paginacao, paginaAtual, totalPaginas) {
    if (!paginacao) return;
    if (totalPaginas <= 1) {
      paginacao.hidden = true;
      paginacao.innerHTML = '';
      return;
    }

    paginacao.hidden = false;
    const botoes = [];
    botoes.push(`<button type="button" data-poderes-page="prev" ${paginaAtual === 1 ? 'disabled' : ''}>Anterior</button>`);
    for (let i = 1; i <= totalPaginas; i += 1) {
      botoes.push(`<button type="button" data-poderes-page="${i}" ${i === paginaAtual ? 'aria-current="page"' : ''}>${i}</button>`);
    }
    botoes.push(`<button type="button" data-poderes-page="next" ${paginaAtual === totalPaginas ? 'disabled' : ''}>Próxima</button>`);
    paginacao.innerHTML = botoes.join('');
  }

  function atualizarTextoDetalhe(inst) {
    const valorCss = (window.CSS && typeof window.CSS.escape === 'function') ? CSS.escape(inst) : String(inst).replace(/[^a-zA-Z0-9_-]/g, '\$&');
    const card = qs(`[data-poderes-card][data-inst="${valorCss}"]`);
    const sigla = card?.querySelector('.poderes-card-sigla')?.textContent?.trim() || inst.toUpperCase();
    const span = qs('#txt-inst-poderes');
    if (span) span.textContent = sigla;
  }

  function selecionarInstituicao(inst, rolar) {
    if (!inst) {
      esconderDetalhe();
      const resultado = qs('#poderes_resultado');
      if (resultado) resultado.innerHTML = '';
      return;
    }

    mostrarDetalhe();
    atualizarTextoDetalhe(inst);

    try {
      if (typeof mudarInstituicao === 'function' && inst !== 'gm') mudarInstituicao(inst);
    } catch (erro) {
      console.warn('Falha ao atualizar cabeçalho institucional em Poderes:', erro);
    }

    try {
      if (typeof poderesRenderizar === 'function') poderesRenderizar(inst);
      else if (typeof mudarInstituicaoPoderes === 'function') mudarInstituicaoPoderes(inst);
    } catch (erro) {
      console.warn('Falha ao carregar análise de poderes e deveres:', erro);
    }

    atualizarTextoDetalhe(inst);

    if (rolar) {
      const destino = detalhe();
      if (destino) destino.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const seletorEsfera = qs('#poderes-filtro-esfera');
    const seletorInstituicao = qs('#poderes-filtro-instituicao');
    const paginacao = qs('#poderes-paginacao');
    const contador = qs('#poderes-contador-cards');
    const btnLimpar = qs('[data-poderes-limpar]');
    let paginaAtual = 1;

    if (!seletorEsfera || !seletorInstituicao || !paginacao) return;

    function renderizar() {
      atualizarOpcoesInstituicao(seletorEsfera, seletorInstituicao);
      const filtrados = cardsFiltrados(seletorEsfera, seletorInstituicao);
      const totalPaginas = Math.max(1, Math.ceil(filtrados.length / CARDS_POR_PAGINA));
      if (paginaAtual > totalPaginas) paginaAtual = totalPaginas;
      if (paginaAtual < 1) paginaAtual = 1;

      const inicio = (paginaAtual - 1) * CARDS_POR_PAGINA;
      const fim = inicio + CARDS_POR_PAGINA;
      const visiveis = new Set(filtrados.slice(inicio, fim));

      cards().forEach(card => {
        card.hidden = !visiveis.has(card);
      });

      if (contador) {
        const texto = seletorInstituicao.value ? 'instituição selecionada' : 'instituições encontradas';
        contador.textContent = `${filtrados.length} ${texto}`;
      }

      renderizarPaginacao(paginacao, paginaAtual, totalPaginas);
    }

    seletorEsfera.addEventListener('change', () => {
      paginaAtual = 1;
      renderizar();
      if (!seletorInstituicao.value) selecionarInstituicao('', false);
    });

    seletorInstituicao.addEventListener('change', () => {
      paginaAtual = 1;
      renderizar();
      selecionarInstituicao(seletorInstituicao.value, !!seletorInstituicao.value);
    });

    if (btnLimpar) {
      btnLimpar.addEventListener('click', () => {
        seletorEsfera.value = '';
        seletorInstituicao.value = '';
        paginaAtual = 1;
        renderizar();
        selecionarInstituicao('', false);
        if (typeof aplicarHeaderInicialPortal === 'function') aplicarHeaderInicialPortal();
      });
    }

    paginacao.addEventListener('click', event => {
      const botao = event.target.closest('[data-poderes-page]');
      if (!botao || botao.disabled) return;
      const destino = botao.dataset.poderesPage;
      const totalPaginas = Math.max(1, Math.ceil(cardsFiltrados(seletorEsfera, seletorInstituicao).length / CARDS_POR_PAGINA));

      if (destino === 'prev') paginaAtual -= 1;
      else if (destino === 'next') paginaAtual += 1;
      else paginaAtual = Number(destino) || 1;

      if (paginaAtual < 1) paginaAtual = 1;
      if (paginaAtual > totalPaginas) paginaAtual = totalPaginas;
      renderizar();
      const lista = qs('#poderes-conteudo-lista');
      if (lista) lista.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    document.addEventListener('click', event => {
      const botao = event.target.closest('[data-poderes-load]');
      if (!botao) return;
      const inst = botao.dataset.poderesLoad;
      if (!inst) return;
      event.preventDefault();

      const valorCss = (window.CSS && typeof window.CSS.escape === 'function') ? CSS.escape(inst) : String(inst).replace(/[^a-zA-Z0-9_-]/g, '\$&');
      const card = qs(`[data-poderes-card][data-inst="${valorCss}"]`);
      if (card) seletorEsfera.value = card.dataset.esfera || '';
      seletorInstituicao.value = inst;
      paginaAtual = 1;
      renderizar();
      selecionarInstituicao(inst, true);
    });

    esconderDetalhe();
    renderizar();
  });
})();
