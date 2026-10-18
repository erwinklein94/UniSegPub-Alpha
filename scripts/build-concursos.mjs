import fs from 'node:fs';
import { estadoConcurso, resumoConcursos } from '../js/pages/concursos-modelo.js';
const dados = JSON.parse(fs.readFileSync('data/concursos/destaques.json', 'utf8'));
const instituicoes = JSON.parse(fs.readFileSync('config/concursos-instituicoes.json', 'utf8'));
const escape = valor => String(valor || '').replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' })[c]);
const data = iso => iso.split('-').reverse().join('/');
const instante = dados.revisadoEm + 'T12:00:00-03:00';
const externo = 'target="_blank" rel="noopener noreferrer"';
const grupos = [['abertas', 'Inscrições no período informado', 'Encontre sua próxima oportunidade', 'Confira o encerramento e as retificações antes de realizar a inscrição.'], ['andamento', 'Para quem já se inscreveu', 'Acompanhe as próximas etapas', 'Gabaritos, avaliações e convocações dos concursos com inscrições encerradas.'], ['preparacao', 'No radar', 'Preparação de novos editais', 'Comunicados datados não garantem edital, vagas ou abertura de inscrições.']];
const cards = item => {
  const estado = estadoConcurso(item, dados.revisadoEm, instante);
  const detalhes = [['Cargos', item.cargos], ['Banca', item.banca], ['Referência de remuneração', item.salario], ['Requisitos', item.requisitos], ['Etapa / acompanhamento', item.etapa]];
  const fontes = [...new Set([item.fonte, item.fonteConfirmacao, ...(item.fontesComplementares || [])])].filter(Boolean);
  return `<article class="concurso-card" id="concurso-${escape(item.id)}" data-concurso="${escape(item.id)}" data-grupo="${estado.grupo}" data-inst="${escape(item.inst)}">
    <div class="concurso-capa concurso-capa--${escape(item.cor)}"><div><span>${escape(item.uf === 'BR' ? 'BRASIL' : item.uf)} · ${escape(item.banca)}</span><strong>${escape(item.instituicao)}</strong><small>Capa editorial ilustrativa</small></div><img src="${escape(item.imagem)}" alt="${item.inst === 'camara' ? 'Marca do portal em capa editorial' : 'Brasão de ' + escape(item.nome)}" width="100" height="100" loading="lazy" decoding="async" /></div>
    <div class="concurso-card-body"><span class="concurso-status concurso-status--${estado.chave}" data-status>${estado.texto}</span><h3>${escape(item.nome)}</h3><p class="concurso-resumo">${escape(item.resumo)}</p>
    <div class="concurso-numeros"><div><small>Vagas do edital</small><strong>${escape(item.vagas)}</strong></div><div><small>Inscrições / prazo</small><strong data-prazo>${escape(item.prazo)}</strong></div></div>
    <dl>${detalhes.map(([chave,valor]) => `<div><dt>${chave}</dt><dd>${escape(valor)}</dd></div>`).join('')}</dl>
    <div class="concurso-card-links"><a class="usp-btn usp-btn--dark" href="${escape(item.fonte)}" ${externo}>${estado.grupo === 'abertas' ? 'Edital e inscrições' : 'Acompanhar na fonte'} <span aria-hidden="true">↗</span></a>${item.inst === 'camara' ? '' : `<a href="remuneracao.html?inst=${escape(item.inst)}">Consultar remuneração →</a>`}</div>
    <details class="concurso-fontes"><summary>Fontes e conferência</summary><p>${escape(item.documento)}. Revisado em <time datetime="${dados.revisadoEm}">${data(dados.revisadoEm)}</time>.</p><ul>${fontes.map((url,i) => `<li><a href="${escape(url)}" ${externo}>${i === 0 ? escape(item.fonteNome) : 'Documento / confirmação complementar ' + i} ↗</a></li>`).join('')}</ul>${item.notaConferencia ? `<p>${escape(item.notaConferencia)}</p>` : ''}</details></div>
  </article>`;
};
const secoes = grupos.map(([grupo,eyebrow,titulo,descricao]) => `<section class="usp-section concurso-grupo" id="${grupo === 'abertas' ? 'oportunidades' : grupo}" data-secao="${grupo}" aria-labelledby="titulo-${grupo}"><div class="usp-container"><div class="concurso-section-head"><div><p class="usp-eyebrow usp-eyebrow--gold"><span></span>${eyebrow}</p><h2 id="titulo-${grupo}">${titulo}</h2></div><p>${descricao}</p></div><div class="concurso-grid" data-grid="${grupo}">${dados.itens.filter(item => estadoConcurso(item,dados.revisadoEm,instante).grupo === grupo).map(cards).join('\n')}</div><p class="concurso-grupo-vazio" hidden>Nenhum concurso nesta seção para os filtros selecionados.</p></div></section>`).join('\n');
const diretorio = [...new Set(instituicoes.map(item => item.uf))].sort().map(uf => `<details class="concurso-diretorio-uf"><summary>${uf === 'BR' ? 'Brasil · instituições federais' : uf}</summary><div>${instituicoes.filter(i=>i.uf===uf).map(item => `<article data-diretorio-inst="${escape(item.id)}"><h3>${escape(item.sigla)} · ${escape(item.nome)}</h3><p>Consulte publicações e editais no canal cadastrado. A presença no diretório não indica inscrições abertas.</p><a href="${escape(item.site_principal)}" ${externo}>Canal de referência ↗</a> <a href="remuneracao.html?inst=${escape(item.id)}">Remuneração →</a></article>`).join('')}</div></details>`).join('\n');
const options = instituicoes.map(i=>`<option value="${escape(i.id)}">${escape(i.sigla)} · ${escape(i.nome)} (${i.uf})</option>`).join('')+'<option value="camara">Câmara · Policial Legislativo Federal (DF)</option>';
const ufs = [...new Set(dados.itens.map(i=>i.uf))].sort().map(uf=>`<option value="${uf}">${uf==='BR'?'Brasil (federal)':uf}</option>`).join('');
let html=fs.readFileSync('concursos.html','utf8').replaceAll('\r\n','\n');
for(const [nome,conteudo] of Object.entries({DESTAQUES:secoes,DIRETORIO:diretorio,INSTITUICOES:options,UFS:ufs,DADOS:`<script type="application/json" id="concursos-dados">${JSON.stringify(dados).replaceAll('<','\\u003c')}</script>`})) {
  const regex=new RegExp(`(<!-- CONCURSOS_${nome}:INICIO -->)[\\s\\S]*?(<!-- CONCURSOS_${nome}:FIM -->)`);
  if(!regex.test(html)) throw new Error('Marcador ausente: '+nome);
  html=html.replace(regex,(_m,inicio,fim)=>`${inicio}\n${conteudo}\n${fim}`);
}
const resumo=resumoConcursos(dados.itens,dados.revisadoEm,instante);
for(const [id,valor] of Object.entries({'concurso-total':resumo.total,'concurso-abertas':resumo.abertas,'concurso-vagas':resumo.vagas.toLocaleString('pt-BR'),'concurso-andamento':resumo.andamento})) html=html.replace(new RegExp(`(id="${id}">)[^<]*`),(_m,inicio)=>inicio+valor);
const head=html.indexOf('<head>'),body=html.indexOf('<body '),main=html.indexOf('  <main '),afterMain=html.indexOf('  </main>')+'  </main>'.length,end=html.lastIndexOf('</body>');
const pre=html.slice(body,main).replace(/\n+$/,'\n');
const partes={head:html.slice(head,body),'pre-main':pre,main:html.slice(body+pre.length,main)+html.slice(main,afterMain),'post-main':html.slice(afterMain,end)};
const arquivos={'concursos.html':html,'src/pages/concursos.template.html':html.slice(0,head)+Object.keys(partes).map(p=>`<!-- @include partials/pages/concursos/${p}.html -->\n`).join('')+html.slice(end),...Object.fromEntries(Object.entries(partes).map(([p,s])=>[`partials/pages/concursos/${p}.html`,s]))};
for(const [p,s] of Object.entries(arquivos)) {
  if(process.argv.includes('--check')) { if(fs.readFileSync(p,'utf8').replaceAll('\r\n','\n')!==s) throw new Error('Fora de sincronia: '+p); }
  else fs.writeFileSync(p,s);
}
console.log(`Concursos: ${dados.itens.length} destaques, ${instituicoes.length} instituições; modelos sincronizados.`);
