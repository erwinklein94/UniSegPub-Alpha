(function () {
  'use strict';

  const PAGE_SIZE = 14;
  const DEFAULT_INST = 'pmesp';

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const state = {
    inst: DEFAULT_INST,
    rows: [],
    filter: 'todos',
    sort: 'hierarquia',
    search: '',
    page: 1,
    requestedInst: DEFAULT_INST
  };

  const friendlyNames = {
    pf: 'Polícia Federal',
    prf: 'Polícia Rodoviária Federal',
    pcdf: 'Polícia Civil do Distrito Federal',
    pmesp: 'Polícia Militar de São Paulo',
    bmsp: 'Corpo de Bombeiros da PM de São Paulo',
    pcsp: 'Polícia Civil de São Paulo',
    ppsp: 'Polícia Penal de São Paulo',
    pmerj: 'Polícia Militar do Rio de Janeiro',
    bmrj: 'Corpo de Bombeiros Militar do Rio de Janeiro',
    pcerj: 'Polícia Civil do Rio de Janeiro',
    pprj: 'Polícia Penal do Rio de Janeiro',
    pmmg: 'Polícia Militar de Minas Gerais',
    bmmg: 'Corpo de Bombeiros Militar de Minas Gerais',
    pcmg: 'Polícia Civil de Minas Gerais',
    ppmg: 'Polícia Penal de Minas Gerais'
  };

  const ufByInst = {
    pf: 'BR', prf: 'BR', pcdf: 'DF',
    pmac: 'AC', bmac: 'AC', pcac: 'AC', ppac: 'AC',
    pmal: 'AL', bmal: 'AL', pcal: 'AL', ppal: 'AL',
    pmap: 'AP', bmap: 'AP', pcap: 'AP', ppap: 'AP',
    pmam: 'AM', bmam: 'AM', pcam: 'AM', ppam: 'AM',
    pmba: 'BA', bmba: 'BA', pcba: 'BA', ppba: 'BA',
    pcce: 'CE',
    pmes: 'ES', bmes: 'ES', pces: 'ES', ppes: 'ES',
    pmmt: 'MT', bmmt: 'MT', pcmt: 'MT', ppmt: 'MT',
    pmms: 'MS', bmms: 'MS', pcms: 'MS', ppms: 'MS',
    pmmg: 'MG', bmmg: 'MG', pcmg: 'MG', ppmg: 'MG',
    pmpr: 'PR', bmpr: 'PR', pcpr: 'PR', pppr: 'PR',
    pmrs: 'RS', pcrs: 'RS', pprs: 'RS',
    pmerj: 'RJ', bmrj: 'RJ', pcerj: 'RJ', pprj: 'RJ',
    pmsc: 'SC', bmsc: 'SC', pcsc: 'SC', ppsc: 'SC',
    pmesp: 'SP', bmsp: 'SP', pcsp: 'SP', ppsp: 'SP'
  };

  function esc(text) {
    return String(text == null ? '' : text).replace(/[&<>"']/g, char => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
    }[char]));
  }

  function money(value) {
    const number = Number(value);
    if (!Number.isFinite(number) || number <= 0) return 'Dados em breve';
    return number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  function normalize(text) {
    return String(text || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }

  function selectedOption(inst) {
    const select = $('#remu-filtro-instituicao');
    if (!select) return null;
    return Array.from(select.options).find(opt => opt.value === inst) || null;
  }

  function optionName(inst) {
    const option = selectedOption(inst);
    if (!option) return friendlyNames[inst] || String(inst || '').toUpperCase();
    const raw = option.textContent.replace(/\s+/g, ' ').trim();
    const parts = raw.split('—').map(p => p.trim());
    const sigla = parts[0] || inst.toUpperCase();
    const name = friendlyNames[inst] || parts[1] || sigla;
    const uf = ufByInst[inst];
    if (friendlyNames[inst]) return friendlyNames[inst];
    if (uf && !/Federal|Distrito Federal|São Paulo|Rio de Janeiro|Minas Gerais/i.test(name)) return `${name} — ${uf}`;
    return name;
  }

  function sigla(inst) {
    const option = selectedOption(inst);
    return (option ? option.textContent.split('—')[0].trim() : inst.toUpperCase()).replace('PMESP', 'PM SP').replace('CBPMESP', 'CB SP');
  }

  function groupOf(row) {
    if (/^(pc|pp)/.test(state.inst) || ['pf', 'prf'].includes(state.inst)) return 'oficiais';
    const n = normalize(row.cargo);
    if (/comandante|delegado geral|diretor geral|classe especial/.test(n) || /^coronel\b/.test(n)) return 'comando';
    if (/soldado|cabo|sargento|subtenente|sub tenente|aluno|cadete|praca/.test(n)) return 'pracas';
    if (/tenente|capitao|major|oficial|delegado|perito|medico|papiloscopista|escrivao|investigador|agente/.test(n)) return 'oficiais';
    return 'todos';
  }

  function badgeText(row) {
    if (row.badge && String(row.badge).length <= 5) return esc(row.badge);
    const cargo = String(row.cargo || '').trim();
    const explicit = cargo.match(/^([A-Z]{1,4}\s?[A-Z]{0,3}|\d+[ºª]?\s?[A-Z]{0,3})\s?[—-]/);
    if (explicit && explicit[1]) return explicit[1].replace(/\s+/g, '<br>');
    const words = cargo.split(/\s+/).filter(Boolean);
    return words.slice(0, 2).map(w => w[0]).join('').toUpperCase() || '—';
  }

  function categoryLabel(row) {
    if (row.classe) return row.classe;
    if (/^(pc|pp)/.test(state.inst) || ['pf', 'prf'].includes(state.inst)) return 'Carreira civil';
    const g = groupOf(row);
    if (g === 'pracas') return 'Praça · carreira de execução';
    if (g === 'oficiais') return 'Oficial / carreira superior';
    if (g === 'comando') return 'Comando / classe superior';
    return row.badge || 'Tabela oficial';
  }

  function chips(row) {
    const source = String(row.benefDesc || row.adicionais || row.criterio || '').replace(/\s+/g, ' ').trim();
    return [source || 'Sem adicionais fixos somados'];
  }

  function sourceFor(row) {
    if (row.fonteNome || row.fonteUrl) return { nome: row.fonteNome || 'Tabela vigente', url: row.fonteUrl || '#' };
    const fontes = window.REMUNERACAO_FONTES_OFICIAIS || {};
    return fontes[row.fonteKey] || fontes[state.inst] || { nome: 'Fonte oficial da carreira', url: '#' };
  }

  function safeUrl(url) {
    const value = String(url || '').trim();
    return /^https?:\/\//i.test(value) ? value : '#';
  }

  function loadRows(inst) {
    if (window.REMUNERACAO_AUTOMATIZADA && window.REMUNERACAO_AUTOMATIZADA[inst]) {
      return window.REMUNERACAO_AUTOMATIZADA[inst].linhas.slice();
    }
    return [];
  }

  function updateInstitutionUi() {
    const inst = state.inst;
    const name = optionName(inst);
    const option = selectedOption(inst);
    const uf = option?.dataset.uf || ufByInst[inst] || 'BR';
    const esfera = option?.dataset.esfera === 'federal' ? 'Federal' : 'Estadual';
    const sig = sigla(inst);

    $('#remu-title-inst').textContent = name;
    $('#remu-selected-name').textContent = name;
    $('#remu-selected-state').textContent = uf;
    $('#remu-selected-sigla').innerHTML = esc(sig).replace(/\s+/, '<br>');
    $('#remu-selected-meta').textContent = `${esfera} · valores e composição por fonte`;
    $('#remu-breadcrumb-current').textContent = `Remuneração Tabelada — ${sig.replace(/\s+/g, '-')}`;
  }

  function updateStats() {
    const visiveis = filteredRows(false);
    const dados = window.REMUNERACAO_AUTOMATIZADA?.[state.inst]?.dados;
    const rows = visiveis.filter(row => dados?.revisao_dados?.situacao === 'conferida' && row.verificacao === 'fonte_oficial' && !row.valorPendente && Number(row.remuneracao) > 0);
    const min = rows.reduce((acc, row) => !acc || row.remuneracao < acc.remuneracao ? row : acc, null);
    const max = rows.reduce((acc, row) => !acc || row.remuneracao > acc.remuneracao ? row : acc, null);
    $('#remu-total-cargos').textContent = String(visiveis.length);
    $('#remu-total-desc').textContent = visiveis.length === 1 ? 'referência no filtro' : 'referências no filtro';
    $('#remu-menor-total').textContent = min ? money(min.remuneracao) : '—';
    $('#remu-menor-cargo').textContent = min ? min.cargo.replace(/\s?[—-].+$/, '') : '—';
    $('#remu-maior-total').textContent = max ? money(max.remuneracao) : '—';
    $('#remu-maior-cargo').textContent = max ? max.cargo.replace(/\s?[—-].+$/, '') : '—';
    const revisao = dados?.revisao_dados;
    const data = revisao?.data || dados?.ultima_pesquisa;
    $('#remu-atualizacao').textContent = data ? new Date(data + 'T12:00:00Z').toLocaleDateString('pt-BR', { timeZone: 'UTC' }) : 'Aguardando dados';
    $('#remu-criterio-resumo').textContent = revisao?.situacao === 'conferida' ? 'Valores conferidos em fonte oficial' : 'Vigência ainda não confirmada';
    const aviso = $('#remu-aviso-dados');
    if (aviso) {
      aviso.hidden = !dados;
      aviso.textContent = revisao?.nota || 'Dados de referência cadastrados anteriormente. A vigência atual ainda não foi confirmada.';
      aviso.dataset.situacao = revisao?.situacao || 'a_confirmar';
    }
  }

  function valueLabel(row) {
    const tipo = { soldo: 'Somente soldo', vencimento_base: 'Vencimento básico', subsidio: 'Subsídio', remuneracao: 'Composição de referência' }[row.tipo_valor] || 'Valor de referência';
    const data = row.vigencia_inicio || row.referencia_data;
    const periodo = data ? `${row.vigencia_inicio ? 'Desde' : 'Referência'} ${new Date(data + 'T12:00:00Z').toLocaleDateString('pt-BR', { timeZone: 'UTC' })}` : '';
    return [tipo, row.verificacao === 'fonte_oficial' ? periodo : 'Vigência a confirmar'].filter(Boolean).join(' · ');
  }

  function filteredRows(noSearch) {
    let rows = state.rows.slice();
    if (state.filter !== 'todos') rows = rows.filter(row => groupOf(row) === state.filter);
    const q = normalize(state.search);
    if (!noSearch && q) rows = rows.filter(row => normalize(`${row.cargo} ${row.badge} ${row.criterio}`).includes(q));
    if (state.sort === 'asc') rows.sort((a, b) => Number(a.remuneracao || 0) - Number(b.remuneracao || 0));
    if (state.sort === 'desc') rows.sort((a, b) => Number(b.remuneracao || 0) - Number(a.remuneracao || 0));
    return rows;
  }

  function updateFilterCounts() {
    const civil = /^(pc|pp)/.test(state.inst) || ['pf', 'prf'].includes(state.inst);
    $$('[data-remu-filter]').forEach(btn => {
      btn.hidden = civil && ['pracas', 'comando'].includes(btn.dataset.remuFilter);
      if (btn.dataset.remuFilter === 'oficiais') btn.firstChild.textContent = civil ? 'Carreiras civis ' : 'Oficiais ';
    });
    const rows = state.rows.slice();
    const counts = {
      todos: rows.length,
      pracas: rows.filter(row => groupOf(row) === 'pracas').length,
      oficiais: rows.filter(row => groupOf(row) === 'oficiais').length,
      comando: rows.filter(row => groupOf(row) === 'comando').length
    };
    Object.entries(counts).forEach(([key, value]) => {
      const el = $(`#remu-count-${key}`);
      if (el) el.textContent = String(value);
    });
  }

  function rowHtml(row, index) {
    const group = groupOf(row);
    const fonte = sourceFor(row);
    const chipHtml = chips(row).map((chip, i) => `<span class="usp-remu-chip ${i < 2 && /aux|adic|fardamento|moradia|comando|representação/i.test(chip) ? 'is-gold' : ''}">${esc(chip)}</span>`).join('');
    const badgeClass = group === 'comando' ? 'is-command' : (group === 'oficiais' ? 'is-gold' : '');
    return `<tr>
      <td>
        <div class="usp-remu-cargo">
          <span class="usp-remu-badge ${badgeClass}">${badgeText(row)}</span>
          <div><strong>${esc(row.cargo)}</strong><small>${esc(categoryLabel(row))}</small></div>
        </div>
      </td>
      <td class="usp-remu-value"><strong>${row.valorPendente ? 'Valor não confirmado' : money(row.remuneracao)}</strong><small>${esc(valueLabel(row))}</small></td>
      <td><div class="usp-remu-chips">${chipHtml}</div></td>
      <td class="usp-remu-source"><a href="${esc(safeUrl(fonte.url))}" target="_blank" rel="noopener noreferrer">${esc(row.criterio || fonte.nome || 'Fonte da linha')}</a><small>${esc(fonte.nome || 'Fonte de referência')}</small></td>
    </tr>`;
  }

  function renderPagination(total) {
    const host = $('#remu-paginacao');
    const pages = Math.max(1, Math.ceil(total / PAGE_SIZE));
    if (!host || pages <= 1) {
      if (host) { host.hidden = true; host.innerHTML = ''; }
      return;
    }
    host.hidden = false;
    const buttons = [];
    buttons.push(`<button type="button" data-remu-page="prev" ${state.page === 1 ? 'disabled' : ''}>←</button>`);
    const numeros = [...new Set([1, state.page - 1, state.page, state.page + 1, pages])].filter(p => p >= 1 && p <= pages).sort((a, b) => a - b);
    numeros.forEach((p, i) => {
      if (i && p > numeros[i - 1] + 1) buttons.push('<span aria-hidden="true">…</span>');
      buttons.push(`<button type="button" data-remu-page="${p}" aria-label="Página ${p}" ${p === state.page ? 'aria-current="page"' : ''}>${p}</button>`);
    });
    buttons.push(`<button type="button" data-remu-page="next" ${state.page === pages ? 'disabled' : ''}>→</button>`);
    host.innerHTML = buttons.join('');
  }

  function renderTable() {
    const tbody = $('#lista-remuneracao');
    if (!tbody) return;
    const rows = filteredRows(false);
    updateStats();
    const pages = Math.max(1, Math.ceil(rows.length / PAGE_SIZE));
    if (state.page > pages) state.page = pages;
    const slice = rows.slice((state.page - 1) * PAGE_SIZE, state.page * PAGE_SIZE);
    if (!slice.length) {
      const carregado = window.REMUNERACAO_AUTOMATIZADA?.[state.inst];
      tbody.innerHTML = `<tr><td class="usp-remu-empty" colspan="4">${carregado ? 'Nenhum cargo encontrado para o filtro aplicado.' : 'Aguardando a tabela da instituição. Se o carregamento falhar, tente novamente.'}</td></tr>`;
    } else {
      tbody.innerHTML = slice.map(rowHtml).join('');
    }
    renderPagination(rows.length);
    document.dispatchEvent(new Event('remuneracao:renderizada'));
  }

  function updateInstitutionOptions() {
    const esfera = $('#remu-filtro-esfera')?.value || '';
    const select = $('#remu-filtro-instituicao');
    if (!select) return;
    Array.from(select.options).forEach(opt => {
      if (!opt.value) { opt.hidden = false; return; }
      opt.hidden = Boolean(esfera) && opt.dataset.esfera !== esfera;
    });
    Array.from(select.querySelectorAll('optgroup')).forEach(group => {
      const visiveis = Array.from(group.querySelectorAll('option')).some(opt => !opt.hidden);
      group.hidden = !visiveis;
    });
    const current = selectedOption(select.value);
    if (current && current.hidden) select.value = '';
  }

  function setInst(inst) {
    const select = $('#remu-filtro-instituicao');
    const valid = inst && selectedOption(inst) ? inst : DEFAULT_INST;
    state.inst = valid;
    if (select) select.value = valid;
    const esfera = selectedOption(valid)?.dataset.esfera || '';
    const esferaSelect = $('#remu-filtro-esfera');
    if (esferaSelect) esferaSelect.value = esfera;
    updateInstitutionOptions();
    if (/^(pc|pp)/.test(valid) || ['pf', 'prf'].includes(valid)) {
      state.filter = 'todos';
      $$('[data-remu-filter]').forEach(btn => btn.classList.toggle('is-active', btn.dataset.remuFilter === 'todos'));
    }
    state.rows = loadRows(valid);
    state.page = 1;
    updateInstitutionUi();
    updateStats();
    updateFilterCounts();
    renderTable();
    window.carregarRemuneracaoInstituicao?.(valid);
  }

  function init() {
    const params = new URLSearchParams(window.location.search);
    const requested = params.get('inst') || $('#remu-filtro-instituicao')?.value || DEFAULT_INST;
    state.requestedInst = requested;
    setInst(requested);

    $('#remu-filtro-esfera')?.addEventListener('change', () => {
      updateInstitutionOptions();
      const select = $('#remu-filtro-instituicao');
      const firstVisible = Array.from(select.options).find(opt => opt.value && !opt.hidden);
      if (firstVisible) setInst(firstVisible.value);
    });

    $('#remu-filtro-instituicao')?.addEventListener('change', event => {
      if (event.target.value) setInst(event.target.value);
    });

    $('#remu-busca-cargo')?.addEventListener('input', event => {
      state.search = event.target.value;
      state.page = 1;
      renderTable();
    });

    document.addEventListener('remuneracao:json-carregado', event => {
      const id = event.detail && event.detail.instituicao_id;
      if (!id || id !== state.inst) return;
      state.rows = loadRows(state.inst);
      state.page = 1;
      updateStats();
      updateFilterCounts();
      renderTable();
    });

    document.addEventListener('remuneracao:config-carregado', event => {
      const config = event.detail && Array.isArray(event.detail.config) ? event.detail.config : [];
      config.forEach(item => {
        if (!item || !item.id) return;
        const id = String(item.id).toLowerCase();
        friendlyNames[id] = item.nome || item.sigla || id.toUpperCase();
        ufByInst[id] = item.uf || ufByInst[id] || 'BR';
      });
      updateInstitutionOptions();
      const alvo = state.requestedInst && selectedOption(state.requestedInst) ? state.requestedInst : state.inst;
      setInst(alvo);
    });

    document.addEventListener('click', event => {
      const filterBtn = event.target.closest('[data-remu-filter]');
      if (filterBtn) {
        state.filter = filterBtn.dataset.remuFilter || 'todos';
        state.page = 1;
        $$('[data-remu-filter]').forEach(btn => btn.classList.toggle('is-active', btn === filterBtn));
        renderTable();
        return;
      }
      const sortBtn = event.target.closest('[data-remu-sort]');
      if (sortBtn) {
        state.sort = sortBtn.dataset.remuSort || 'hierarquia';
        state.page = 1;
        $$('[data-remu-sort]').forEach(btn => btn.classList.toggle('is-active', btn === sortBtn));
        renderTable();
        return;
      }
      const pageBtn = event.target.closest('[data-remu-page]');
      if (pageBtn && !pageBtn.disabled) {
        const rows = filteredRows(false);
        const pages = Math.max(1, Math.ceil(rows.length / PAGE_SIZE));
        const value = pageBtn.dataset.remuPage;
        if (value === 'prev') state.page -= 1;
        else if (value === 'next') state.page += 1;
        else state.page = Number(value) || 1;
        state.page = Math.max(1, Math.min(pages, state.page));
        renderTable();
        $('.usp-remu-table-wrap')?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
      }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
