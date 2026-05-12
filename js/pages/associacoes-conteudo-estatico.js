/* Associações e sindicatos — filtro e paginação visual sobre conteúdo já escrito no HTML. */
(function () {
  const CARDS_POR_PAGINA = 4;

  function qs(selector, root) { return (root || document).querySelector(selector); }
  function qsa(selector, root) { return Array.from((root || document).querySelectorAll(selector)); }
  function normalizar(valor) { return String(valor || '').trim().toLowerCase(); }

  function cards() {
    return qsa('[data-associacoes-card][data-inst]');
  }

  function detalhe() {
    return qs('#consulta-associacoes-detalhado');
  }

  function esconderDetalhe() {
    const bloco = detalhe();
    if (bloco) bloco.hidden = true;
  }

  function mostrarDetalhe() {
    const bloco = detalhe();
    if (bloco) bloco.hidden = false;
  }

  function textoSeguro(valor) {
    const texto = String(valor == null ? '' : valor);
    if (typeof escapeHtml === 'function') return escapeHtml(texto);
    return texto.replace(/[&<>"']/g, char => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
    }[char]));
  }

  function escapeCss(valor) {
    if (window.CSS && typeof window.CSS.escape === 'function') return window.CSS.escape(valor);
    return String(valor || '').replace(/[^a-zA-Z0-9_-]/g, '\\$&');
  }

  function urlValida(valor) {
    return /^https?:\/\//i.test(String(valor || '').trim());
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
    botoes.push(`<button type="button" data-associacoes-page="prev" ${paginaAtual === 1 ? 'disabled' : ''}>Anterior</button>`);
    for (let i = 1; i <= totalPaginas; i += 1) {
      botoes.push(`<button type="button" data-associacoes-page="${i}" ${i === paginaAtual ? 'aria-current="page"' : ''}>${i}</button>`);
    }
    botoes.push(`<button type="button" data-associacoes-page="next" ${paginaAtual === totalPaginas ? 'disabled' : ''}>Próxima</button>`);
    paginacao.innerHTML = botoes.join('');
  }

  function atualizarTextoDetalhe(inst) {
    const card = qs(`[data-associacoes-card][data-inst="${escapeCss(inst)}"]`);
    const titulo = card?.querySelector('.associacoes-card-kicker')?.textContent || '';
    const sigla = (titulo.split('•')[1] || '').split('·')[0]?.trim() || String(inst || '').toUpperCase();
    const span = qs('#txt-inst-assoc');
    if (span) span.textContent = sigla;
  }

  function associacaoFallbackHtml(inst) {
    if (typeof ASSOCIACOES === 'undefined' || !ASSOCIACOES[inst]) return '';
    const lista = ASSOCIACOES[inst] || [];
    return lista.map(a => {
      const site = String(a.site || '').trim();
      const contato = urlValida(site)
        ? `${textoSeguro(a.telefone || 'Consultar diretamente')} · <a href="${textoSeguro(site)}" target="_blank" rel="noopener noreferrer" class="concurso-link" style="margin-top:0;">${textoSeguro(site)}</a>`
        : `${textoSeguro(a.telefone || 'Consultar diretamente')} · ${textoSeguro(site || 'Consultar diretamente')}`;
      return `
        <div class="direito-item associacao">
          <span class="direito-nome">${textoSeguro(a.nome || 'Entidade representativa em conferência')}</span>
          <span class="direito-desc"><strong>Foco:</strong> ${textoSeguro(a.foco || 'Consultar diretamente na entidade.')}</span>
          <span class="direito-desc"><strong>Atuação atual:</strong> ${textoSeguro(a.acao || 'Consultar diretamente na entidade.')}</span>
          <span class="direito-desc"><strong>Serviços:</strong> ${textoSeguro(a.servicos || 'Consultar diretamente na entidade.')}</span>
          <span class="direito-desc"><strong>Mensalidade:</strong> ${textoSeguro(a.mensalidade || 'Consultar diretamente na entidade.')}</span>
          <span class="direito-desc"><strong>Contato:</strong> ${contato}</span>
        </div>
      `;
    }).join('');
  }

  function selecionarInstituicao(inst, rolar) {
    const listaDetalhe = qs('#lista-associacoes');
    if (!inst) {
      esconderDetalhe();
      if (listaDetalhe) listaDetalhe.innerHTML = '';
      return;
    }

    mostrarDetalhe();
    atualizarTextoDetalhe(inst);

    try {
      if (typeof mudarInstituicao === 'function') mudarInstituicao(inst);
    } catch (erro) {
      console.warn('Falha ao atualizar cabeçalho institucional em Associações:', erro);
    }

    try {
      if (typeof carregarAssociacoes === 'function') carregarAssociacoes();
    } catch (erro) {
      console.warn('Falha ao carregar associações detalhadas:', erro);
    }

    atualizarTextoDetalhe(inst);

    if (listaDetalhe && !listaDetalhe.textContent.trim()) {
      listaDetalhe.innerHTML = associacaoFallbackHtml(inst);
    }

    if (rolar) {
      const destino = detalhe();
      if (destino) destino.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const seletorEsfera = qs('#associacoes-filtro-esfera');
    const seletorInstituicao = qs('#associacoes-filtro-instituicao');
    const paginacao = qs('#associacoes-paginacao');
    const contador = qs('#associacoes-contador-cards');
    const btnLimpar = qs('[data-associacoes-limpar]');
    const listaDetalhe = qs('#lista-associacoes');
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
      const botao = event.target.closest('[data-associacoes-page]');
      if (!botao || botao.disabled) return;
      const destino = botao.dataset.associacoesPage;
      const totalPaginas = Math.max(1, Math.ceil(cardsFiltrados(seletorEsfera, seletorInstituicao).length / CARDS_POR_PAGINA));

      if (destino === 'prev') paginaAtual -= 1;
      else if (destino === 'next') paginaAtual += 1;
      else paginaAtual = Number(destino) || 1;

      if (paginaAtual < 1) paginaAtual = 1;
      if (paginaAtual > totalPaginas) paginaAtual = totalPaginas;
      renderizar();
      const lista = qs('#associacoes-conteudo-lista');
      if (lista) lista.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    document.addEventListener('click', event => {
      const botao = event.target.closest('[data-associacoes-load]');
      if (!botao) return;
      const inst = botao.dataset.associacoesLoad;
      if (!inst) return;
      event.preventDefault();

      const card = qs(`[data-associacoes-card][data-inst="${escapeCss(inst)}"]`);
      if (card) seletorEsfera.value = card.dataset.esfera || '';
      seletorInstituicao.value = inst;
      paginaAtual = 1;
      renderizar();
      selecionarInstituicao(inst, true);
    });

    esconderDetalhe();
    if (listaDetalhe) listaDetalhe.innerHTML = '';
    renderizar();
  });
})();
