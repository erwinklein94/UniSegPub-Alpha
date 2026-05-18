(function () {
  'use strict';

  const CACHE = {};
  const DATA_DIR = 'data/remuneracao';
  window.REMUNERACAO_AUTOMATIZADA = window.REMUNERACAO_AUTOMATIZADA || {};

  const CONFIG_URL = 'config/remuneracao-instituicoes.json';

  const UF_ORDEM = ['BR','AC','AL','AM','AP','BA','CE','DF','ES','GO','MA','MG','MS','MT','PA','PB','PE','PI','PR','RJ','RN','RO','RR','RS','SC','SE','SP','TO'];
  const UF_NOME = {
    BR: 'União / Federal', AC: 'Acre', AL: 'Alagoas', AM: 'Amazonas', AP: 'Amapá', BA: 'Bahia', CE: 'Ceará', DF: 'Distrito Federal', ES: 'Espírito Santo', GO: 'Goiás', MA: 'Maranhão', MG: 'Minas Gerais', MS: 'Mato Grosso do Sul', MT: 'Mato Grosso', PA: 'Pará', PB: 'Paraíba', PE: 'Pernambuco', PI: 'Piauí', PR: 'Paraná', RJ: 'Rio de Janeiro', RN: 'Rio Grande do Norte', RO: 'Rondônia', RR: 'Roraima', RS: 'Rio Grande do Sul', SC: 'Santa Catarina', SE: 'Sergipe', SP: 'São Paulo', TO: 'Tocantins'
  };

  function tipoOrdem(item) {
    const id = texto(item && item.id).toLowerCase();
    const tipo = normalizar(item && (item.tipo || item.nome || item.sigla));
    if (id === 'pf') return 0;
    if (id === 'prf') return 1;
    if (tipo.includes('militar') && !tipo.includes('bombeiro') && id.startsWith('pm')) return 10;
    if (tipo.includes('bombeiro') || id.startsWith('bm')) return 20;
    if (tipo.includes('civil') || id.startsWith('pc')) return 30;
    if (tipo.includes('penal') || id.startsWith('pp')) return 40;
    return 90;
  }

  function esferaDaInstituicao(item) {
    const uf = texto(item && item.uf).toUpperCase();
    return uf === 'BR' || texto(item && item.id).toLowerCase() === 'pf' || texto(item && item.id).toLowerCase() === 'prf' ? 'federal' : 'estadual';
  }

  function labelInstituicao(item) {
    const sigla = texto(item && item.sigla).toUpperCase() || texto(item && item.id).toUpperCase();
    const nome = texto(item && item.nome) || sigla;
    return `${sigla} — ${nome}`;
  }

  function criarOption(item) {
    const opt = document.createElement('option');
    const id = texto(item && item.id).toLowerCase();
    opt.value = id;
    opt.textContent = labelInstituicao(item);
    opt.dataset.esfera = esferaDaInstituicao(item);
    opt.dataset.uf = texto(item && item.uf).toUpperCase();
    opt.dataset.sigla = texto(item && item.sigla).toUpperCase();
    opt.dataset.nome = texto(item && item.nome);
    opt.dataset.tipo = texto(item && item.tipo);
    if (id === 'pmesp') opt.selected = true;
    return opt;
  }

  function reconstruirSeletorInstituicoes(config) {
    const select = document.getElementById('remu-filtro-instituicao');
    if (!select || !Array.isArray(config) || !config.length) return false;

    const atual = select.value || 'pmesp';
    const vistos = new Set();
    const itens = config
      .filter(item => item && item.id && !vistos.has(texto(item.id).toLowerCase()) && vistos.add(texto(item.id).toLowerCase()))
      .sort((a, b) => {
        const ufA = texto(a.uf).toUpperCase();
        const ufB = texto(b.uf).toUpperCase();
        const idxA = UF_ORDEM.indexOf(ufA);
        const idxB = UF_ORDEM.indexOf(ufB);
        const ordemUfA = idxA === -1 ? 999 : idxA;
        const ordemUfB = idxB === -1 ? 999 : idxB;
        if (ordemUfA !== ordemUfB) return ordemUfA - ordemUfB;
        const tipoA = tipoOrdem(a);
        const tipoB = tipoOrdem(b);
        if (tipoA !== tipoB) return tipoA - tipoB;
        return texto(a.sigla || a.id).localeCompare(texto(b.sigla || b.id), 'pt-BR');
      });

    select.innerHTML = '';
    const optTodos = document.createElement('option');
    optTodos.value = '';
    optTodos.textContent = `Todas as instituições (${itens.length})`;
    select.appendChild(optTodos);

    const grupos = new Map();
    itens.forEach(item => {
      const uf = texto(item.uf).toUpperCase() || 'BR';
      if (!grupos.has(uf)) grupos.set(uf, []);
      grupos.get(uf).push(item);
    });

    Array.from(grupos.keys())
      .sort((a, b) => {
        const ia = UF_ORDEM.indexOf(a); const ib = UF_ORDEM.indexOf(b);
        return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
      })
      .forEach(uf => {
        const optgroup = document.createElement('optgroup');
        const nomeUf = UF_NOME[uf] || uf;
        optgroup.label = `${nomeUf} (${uf})`;
        grupos.get(uf).forEach(item => optgroup.appendChild(criarOption(item)));
        select.appendChild(optgroup);
      });

    if (atual && Array.from(select.options).some(opt => opt.value === atual)) select.value = atual;
    else select.value = 'pmesp';

    window.REMUNERACAO_INSTITUICOES_CONFIG = itens;
    document.dispatchEvent(new CustomEvent('remuneracao:config-carregado', { detail: { config: itens, total: itens.length } }));
    return true;
  }

  async function carregarConfigInstituicoes() {
    try {
      const resposta = await fetch(`${CONFIG_URL}?v=${Date.now()}`, { cache: 'no-store' });
      if (!resposta.ok) throw new Error(`HTTP ${resposta.status}`);
      const config = await resposta.json();
      reconstruirSeletorInstituicoes(config);
    } catch (erro) {
      console.warn('Remuneração: não foi possível carregar config/remuneracao-instituicoes.json. Mantendo seletor estático.', erro);
    }
  }

  function texto(valor) { return String(valor == null ? '' : valor).replace(/\s+/g, ' ').trim(); }
  function numero(valor) { const n = Number(valor); return Number.isFinite(n) && n > 0 ? n : 0; }
  function limpar(valor) {
    let s = texto(valor);
    s = s.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '$1');
    s = s.replace(/https?:\/\/\S+/g, '');
    s = s.replace(/utm_source=[^\s)]+/g, '');
    s = s.replace(/\[[^\]]*\]/g, '');
    s = s.replace(/\s+([.,;:])/g, '$1').replace(/\s{2,}/g, ' ').replace(/\(\s*\)/g, '').trim();
    return s;
  }
  function normalizar(valor) {
    return limpar(valor).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
  function fraseInadequada(valor) {
    const t = normalizar(valor);
    if (!t) return true;
    const proibidas = ['ver edital','conferir edital','consultar edital','conforme edital','depende do edital','consultar portal','acompanhar site','quando aplicavel','quando previsto','nao localizado nas fontes consultadas'];
    return proibidas.some(p => t.includes(p));
  }
  function fontePrincipal(dados) {
    if (Array.isArray(dados.fontes)) {
      const fonte = dados.fontes.find(f => f && /^https?:\/\//i.test(texto(f.url)));
      if (fonte) return { nome: texto(fonte.titulo || 'Fonte de remuneração'), url: texto(fonte.url) };
    }
    if (/^https?:\/\//i.test(texto(dados.fonte_principal))) return { nome: 'Fonte de remuneração', url: texto(dados.fonte_principal) };
    return { nome: 'Fonte de remuneração', url: '#' };
  }
  function linhaPublicavel(linha) {
    if (!linha || typeof linha !== 'object') return false;
    if (fraseInadequada(linha.cargo)) return false;
    return numero(linha.remuneracao) > 0 || numero(linha.total) > 0;
  }
  function linhaParaSite(linha, dados) {
    const fonte = fontePrincipal(dados);
    const rem = numero(linha.remuneracao || linha.total);
    const beneficios = numero(linha.beneficios);
    return {
      cargo: limpar(linha.cargo),
      badge: limpar(linha.badge || dados.sigla || 'Remuneração'),
      remuneracao: rem,
      beneficios,
      total: numero(linha.total) || rem + beneficios,
      classe: limpar(linha.classe || 'Carreira de segurança pública'),
      criterio: fraseInadequada(linha.criterio) ? 'Valor bruto mensal localizado em fonte pública.' : limpar(linha.criterio),
      benefDesc: fraseInadequada(linha.benefDesc) ? 'Benefícios, indenizações, descontos e verbas eventuais não foram somados ao bruto.' : limpar(linha.benefDesc),
      fonteKey: dados.instituicao_id,
      fonteNome: limpar(linha.fonteNome || fonte.nome),
      fonteUrl: /^https?:\/\//i.test(texto(linha.fonteUrl)) ? texto(linha.fonteUrl) : fonte.url,
      valorPendente: false
    };
  }
  function registrarDados(dados) {
    if (!dados || !dados.instituicao_id || !Array.isArray(dados.linhas)) return false;
    const id = texto(dados.instituicao_id).toLowerCase();
    const linhas = dados.linhas.filter(linhaPublicavel).map(l => linhaParaSite(l, dados));
    if (!linhas.length) return false;
    window.REMUNERACAO_AUTOMATIZADA[id] = { dados, linhas };

    const fonte = fontePrincipal(dados);
    window.REMUNERACAO_FONTES_OFICIAIS = window.REMUNERACAO_FONTES_OFICIAIS || {};
    window.REMUNERACAO_FONTES_OFICIAIS[id] = { nome: fonte.nome, url: fonte.url };

    document.dispatchEvent(new CustomEvent('remuneracao:json-carregado', { detail: { instituicao_id: id, dados, linhas } }));
    return true;
  }

  const geradorOriginal = window.gerarRemuneracaoTabelada;
  window.gerarRemuneracaoTabelada = function gerarRemuneracaoTabeladaAutomatica(inst) {
    const id = texto(inst).toLowerCase();
    if (window.REMUNERACAO_AUTOMATIZADA[id]) return window.REMUNERACAO_AUTOMATIZADA[id].linhas.slice();
    if (typeof geradorOriginal === 'function') return geradorOriginal(inst);
    return [];
  };

  async function carregar(id) {
    id = texto(id).toLowerCase();
    if (!id) return false;
    if (CACHE[id]) return CACHE[id];
    CACHE[id] = fetch(`${DATA_DIR}/${id}.json?v=${Date.now()}`, { cache: 'no-store' })
      .then(resposta => resposta.ok ? resposta.json() : null)
      .then(dados => dados ? registrarDados(dados) : false)
      .catch(() => false);
    return CACHE[id];
  }

  function instituicaoSelecionada() {
    const select = document.getElementById('remu-filtro-instituicao');
    return select ? select.value : '';
  }

  function carregarAtual() {
    const id = instituicaoSelecionada() || 'pmesp';
    carregar(id);
  }

  function iniciar() {
    carregarConfigInstituicoes().finally(carregarAtual);
    const select = document.getElementById('remu-filtro-instituicao');
    if (select) select.addEventListener('change', () => carregar(select.value));
    document.addEventListener('remuneracao:config-carregado', carregarAtual);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar, { once: true });
  else iniciar();
}());
