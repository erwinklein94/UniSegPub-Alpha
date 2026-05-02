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

    <a class="taf-produto-card taf-produto-card-mochilaimpermeavel50l" href="https://s.shopee.com.br/901i8h9IK5" target="_blank" rel="noopener noreferrer" aria-label="Comprar Mochila Militar Tática Impermeável 50 L Grande Reforçada c/ 2 Bandeiras Brasil/EUA, produto útil para rotina operacional e preparação">
      <div class="taf-produto-imagem" aria-hidden="true">
        <img src="img/mochilaimpermeavel50l.jpeg" data-img-base="img/mochilaimpermeavel50l" alt="Mochila Militar Tática Impermeável 50 L Grande Reforçada c/ 2 Bandeiras Brasil/EUA" loading="lazy">
      </div>
      <div class="taf-produto-conteudo">
        <span class="taf-produto-selo">Produto útil para rotina operacional</span>
        <strong>Mochila Militar Tática Impermeável 50 L Grande Reforçada c/ 2 Bandeiras Brasil/EUA</strong>
        <p>Mochila tática impermeável de 50 L, grande e reforçada, indicada para rotina operacional, estudos, viagens, treinos e organização de equipamentos. Acompanha 2 bandeiras Brasil/EUA.</p>
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
