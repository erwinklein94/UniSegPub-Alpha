/* Ações judiciais — complementa a página com cards vindos do Supabase
   para instituições que não possuem card estático no HTML.
   Fonte: tabela acoes_judiciais (fallback: data/acoes-judiciais-complemento.json). */
(function () {
  'use strict';

  function qs(selector, root) { return (root || document).querySelector(selector); }

  function esc(valor) {
    return String(valor == null ? '' : valor).replace(/[&<>"']/g, char => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
    }[char]));
  }

  function urlValida(url) {
    return /^https:\/\//i.test(String(url || '').trim());
  }

  function linkHtml(url, texto) {
    return `<a href="${esc(url)}" rel="noopener noreferrer" target="_blank">${esc(texto)}</a>`;
  }

  function cardExiste(id) {
    try {
      return Boolean(qs(`[data-acoes-card][data-inst="${window.CSS && CSS.escape ? CSS.escape(id) : id}"]`));
    } catch (erro) {
      return true;
    }
  }

  function teseHtml(tese, indice) {
    const juris = String(tese.jurisprudencia || '').trim();
    const jurisLink = urlValida(tese.jurisUrl) ? ` · ${linkHtml(tese.jurisUrl, 'Acompanhar no STF')}` : '';
    const fonteHtml = urlValida(tese.fonteUrl)
      ? linkHtml(tese.fonteUrl, tese.fonteNome || 'Fonte oficial')
      : esc(tese.fonteNome || 'Dados em breve');
    const entidades = Array.isArray(tese.acompanhando) ? tese.acompanhando.filter(e => e && e.nome) : [];
    const acompanhandoHtml = entidades.length
      ? entidades.map(e => `${urlValida(e.url) ? linkHtml(e.url, e.nome) : esc(e.nome)} (${esc(e.funcao || 'entidade de classe')})`).join(', ')
      : 'Dados em breve';

    return `
      <section class="acoes-card-tema">
        <h3>${indice + 1}. ${esc(tese.titulo)}</h3>
        <p>
          <strong>Status:</strong> ${esc(tese.status || 'Dados em breve')} ·
          <strong>Referência:</strong> ${esc(tese.referencia || 'Dados em breve')} ·
          <strong>Tipo:</strong> ${esc(tese.tipo || 'Ação individual')}
        </p>
        ${juris ? `<p><strong>Jurisprudência atual:</strong> ${esc(juris)}${jurisLink}</p>` : ''}
        <p>${esc(tese.desc || 'Dados em breve')}</p>
        <p><strong>Base de análise:</strong> ${esc(tese.base || 'Dados em breve')}</p>
        <p><strong>Fonte de conferência:</strong> ${fonteHtml}</p>
        <p><strong>Quem está acompanhando:</strong> ${acompanhandoHtml}</p>
      </section>`;
  }

  function cardHtml(id, dados) {
    /* Cards editoriais migrados guardam o HTML completo em htmlCard. */
    if (dados.htmlCard) return dados.htmlCard;
    const teses = Array.isArray(dados.teses) ? dados.teses : [];
    const esferaLabel = dados.esfera === 'federal' ? 'Federal' : 'Estadual';
    const kicker = `${esferaLabel} • ${dados.sigla} · ${dados.ramo} · ${dados.esfera === 'federal' ? 'União' : dados.estado}`;
    const comTema = dados.comTema ? `${dados.comTema} teses` : 'Dados em breve';

    return `
      <article class="card acoes-conteudo-card" data-acoes-card="" data-esfera="${esc(dados.esfera)}" data-inst="${esc(id)}" data-ramo="${esc(dados.ramo)}" data-uf="${esc(dados.uf)}">
        <div class="acoes-card-cabecalho">
          <span class="acoes-card-kicker">${esc(kicker)}</span>
          <h2>Ações judiciais e teses da ${esc(dados.sigla)}</h2>
          <p>${esc(dados.lead || '')}</p>
        </div>
        <div aria-label="Resumo jurídico da ${esc(dados.sigla)}" class="acoes-card-indicadores">
          <div><span>Teses cadastradas</span><strong>${teses.length}</strong></div>
          <div><span>Natureza</span><strong>${esc(dados.natureza || 'Dados em breve')}</strong></div>
          <div><span>Com Tema STF/STJ</span><strong>${esc(comTema)}</strong></div>
          <div><span>Atualização</span><strong>${esc(dados.atualizado || 'Dados em breve')}</strong></div>
        </div>
        <div class="acoes-card-corpo">
          ${teses.map(teseHtml).join('')}
        </div>
        <div class="acoes-card-rodape">
          <p>Conteúdo informativo e independente. A existência de tema cadastrado não significa direito automático, ação recomendada ou resultado garantido. Verifique prescrição, documentos, legislação vigente e entendimento judicial atualizado com advogado, sindicato ou associação.</p>
          <div class="acoes-card-links">
            <button data-acoes-load="${esc(id)}" type="button">Consultar teses detalhadas</button>
            <a href="associacoes-sindicatos.html">Ver associações e sindicatos</a>
            <a href="direitos.html">Ver direitos e vantagens</a>
          </div>
        </div>
      </article>`;
  }

  function inserirOpcaoSeletor(id, dados) {
    const seletor = qs('#acoes-filtro-instituicao');
    if (!seletor || !dados.sigla) return;
    if (Array.from(seletor.options).some(opt => opt.value === id)) return;

    const label = dados.esfera === 'federal' ? 'União' : `${dados.estado} (${dados.uf})`;
    let grupo = Array.from(seletor.querySelectorAll('optgroup')).find(g => (g.label || '').trim() === label);
    if (!grupo) {
      grupo = document.createElement('optgroup');
      grupo.label = label;
      const grupos = Array.from(seletor.querySelectorAll('optgroup'));
      const posterior = grupos.find(g => (g.label || '').localeCompare(label, 'pt-BR') > 0 && (g.label || '') !== 'União');
      seletor.insertBefore(grupo, posterior || null);
    }

    const opcao = document.createElement('option');
    opcao.value = id;
    opcao.dataset.esfera = dados.esfera;
    opcao.textContent = `${dados.sigla} — ${dados.ramo}`;
    const seguinte = Array.from(grupo.children).find(opt => (opt.textContent || '').localeCompare(opcao.textContent, 'pt-BR') > 0);
    grupo.insertBefore(opcao, seguinte || null);
  }

  function registrarDetalhe(id, dados) {
    /* Sobrescreve com segurança: entradas geradas em runtime são preenchimento genérico.
       Cards editoriais (htmlCard) não trazem teses estruturadas — mantêm o detalhe existente. */
    if (typeof ACOES_JUDICIAIS === 'undefined' || !ACOES_JUDICIAIS) window.ACOES_JUDICIAIS = {};
    const teses = Array.isArray(dados.teses) ? dados.teses : [];
    if (!teses.length) return;
    ACOES_JUDICIAIS[id] = teses.map(tese => ({
      titulo: tese.titulo,
      status: tese.status,
      ano: tese.referencia,
      tipo: tese.tipo,
      desc: tese.desc,
      base: [tese.jurisprudencia, tese.base].filter(Boolean).join(' · '),
      fonte: tese.fonteNome,
      fonteUrl: tese.fonteUrl,
      atualizado: dados.atualizado
    }));
  }

  async function buscarDados() {
    if (window.SUPABASE_API) {
      try {
        const linhas = await window.SUPABASE_API.rest('acoes_judiciais?select=instituicao_id,dados&limit=300');
        if (Array.isArray(linhas) && linhas.length) {
          const mapa = {};
          linhas.forEach(l => { if (l && l.instituicao_id && l.dados) mapa[String(l.instituicao_id).toLowerCase()] = l.dados; });
          return mapa;
        }
      } catch (erro) {
        console.warn('Ações judiciais: Supabase indisponível. Usando fallback local.', erro);
      }
    }
    try {
      const resposta = await fetch('data/acoes-judiciais-complemento.json?v=' + Date.now(), { cache: 'no-store' });
      if (!resposta.ok) throw new Error('HTTP ' + resposta.status);
      return await resposta.json();
    } catch (erro) {
      console.warn('Ações judiciais: fallback local indisponível.', erro);
      return null;
    }
  }

  function selecionarDaUrlSePendente() {
    try {
      const params = new URLSearchParams(window.location.search || '');
      const inst = String(params.get('inst') || params.get('instituicao') || '').trim().toLowerCase();
      const seletor = qs('#acoes-filtro-instituicao');
      if (!inst || !seletor || seletor.value) return;
      if (!Array.from(seletor.options).some(opt => opt.value === inst)) return;
      seletor.value = inst;
      seletor.dispatchEvent(new Event('change', { bubbles: true }));
    } catch (erro) { /* silencioso */ }
  }

  async function iniciar() {
    const lista = qs('#acoes-conteudo-lista');
    if (!lista) return;

    /* Aguarda os datasets do portal para o loader não sobrescrever ACOES_JUDICIAIS depois. */
    if (window.DADOS_PORTAL_PROMESSA) { try { await window.DADOS_PORTAL_PROMESSA; } catch (e) { /* segue */ } }
    /* Aguarda os cards estáticos para manter a ordem e evitar duplicidade. */
    if (window.CARDS_ESTATICOS_PROMESSA) { try { await window.CARDS_ESTATICOS_PROMESSA; } catch (e) { /* segue */ } }

    const mapa = await buscarDados();
    if (!mapa) return;

    const entradas = Object.keys(mapa)
      .filter(id => mapa[id] && (mapa[id].htmlCard || Array.isArray(mapa[id].teses)) && !cardExiste(id))
      .map(id => ({ id, dados: mapa[id] }))
      .sort((a, b) => {
        const ordemA = typeof a.dados.ordem === 'number' ? a.dados.ordem : 9999;
        const ordemB = typeof b.dados.ordem === 'number' ? b.dados.ordem : 9999;
        return (ordemA - ordemB) || a.id.localeCompare(b.id);
      });
    if (!entradas.length) return;

    const html = entradas.map(entrada => cardHtml(entrada.id, entrada.dados)).join('\n');
    lista.insertAdjacentHTML('afterbegin', html);

    entradas.forEach(entrada => {
      inserirOpcaoSeletor(entrada.id, entrada.dados);
      registrarDetalhe(entrada.id, entrada.dados);
    });

    const seletorEsfera = qs('#acoes-filtro-esfera');
    if (seletorEsfera) seletorEsfera.dispatchEvent(new Event('change', { bubbles: true }));

    document.dispatchEvent(new CustomEvent('acoes:complemento-carregado', { detail: { total: idsNovos.length } }));
    selecionarDaUrlSePendente();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar, { once: true });
  else iniciar();
}());
