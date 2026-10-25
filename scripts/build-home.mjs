import fs from 'node:fs';
import { situacaoInicio } from '../js/pages/inicio-modelo.js';
const dados = JSON.parse(fs.readFileSync('data/inicio/concursos.json', 'utf8'));
const e = valor => String(valor).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const data = iso => iso.split('-').reverse().join('/');
const atributos = item => `data-inicio-item="${e(item.id)}" data-situacao="${e(item.situacao)}" data-inicio="${e(item.inicio || '')}" data-fim="${e(item.fim || '')}" data-revisado-em="${dados.revisadoEm}"`;
const estado = item => situacaoInicio({ ...item, revisadoEm: dados.revisadoEm }, dados.revisadoEm + 'T12:00:00-03:00');
const badge = item => `<span class="inicio-status inicio-status--${estado(item).chave}" data-inicio-status>${estado(item).texto}</span>`;
const externo = 'target="_blank" rel="noopener noreferrer"';
const cards = dados.itens.map((item, i) => `          <article class="inicio-noticia${i === 0 ? ' inicio-noticia--principal' : ''}" ${atributos(item)}>
            <a class="inicio-noticia-link" href="${e(item.fonte)}" ${externo}>
              <div class="inicio-noticia-imagem inicio-capa--${e(item.cor)}"><span class="inicio-capa-texto"><small>SEGURANÇA PÚBLICA</small><strong>${e(item.instituicao)}</strong><em>${e(item.uf)} · CONCURSOS</em></span><img src="${e(item.imagem)}" alt="${e(item.imagemAlt)}" width="200" height="200" loading="lazy" decoding="async" /><span class="inicio-capa-legenda">Capa editorial · brasão institucional</span></div>
              <div class="inicio-noticia-conteudo"><div class="inicio-noticia-meta">${badge(item)}<span>${e(item.uf)}</span></div><h3>${e(item.titulo)}</h3><p>${e(item.resumo)}</p><span class="inicio-noticia-cta">${e(item.acao)} <span aria-hidden="true">↗</span></span></div>
            </a>
            <div class="inicio-noticia-fonte"><span>Fonte: ${e(item.fonteNome)}</span><time datetime="${item.publicadoEm}">Documento: ${data(item.publicadoEm)}</time>${item.fim ? `<span data-inicio-prazo>${e(item.prazo)}</span>` : ''}${item.id === 'pmpe-2026' || item.id === 'cbmpe-2026' ? `<a href="${e(item.fontesComplementares[0])}" ${externo}>Ver prorrogação divulgada pela banca ↗</a>` : ''}</div>
          </article>`).join('\n');
const rows = dados.itens.map(item => `              <tr ${atributos(item)}><td>${badge(item)}</td><td><strong>${e(item.instituicao)} · ${e(item.uf)}</strong><small>${e(item.cargos)}</small></td><td>${e(item.vagas)}</td><td><span data-inicio-prazo>${e(item.prazo)}</span><small>${e(item.banca)}</small></td><td><a class="inicio-fonte-link" href="${e(item.fonte)}" ${externo}>Fonte oficial ↗</a></td></tr>`).join('\n');
let html = fs.readFileSync('index.html', 'utf8').replaceAll('\r\n', '\n');
for (const [nome, conteudo] of [['NOTICIAS', cards], ['CONCURSOS', rows]]) {
  const regex = new RegExp(`(<!-- INICIO_${nome}:INICIO -->)[\\s\\S]*?(<!-- INICIO_${nome}:FIM -->)`);
  if (!regex.test(html)) throw new Error('Marcador ausente: ' + nome);
  html = html.replace(regex, (_texto, inicio, fim) => `${inicio}\n${conteudo}\n          ${fim}`);
}
const abertas = dados.itens.filter(item => estado(item).grupo === 'abertas').length;
html = html.replace(/(data-inicio-abertas>)[^<]*/, (_m, inicio) => inicio + abertas);
html = html.replace(/(Checagem editorial: <time datetime=")[^"]*(">)[^<]*(<\/time>)/, (_m, a, b, c) => a + dados.revisadoEm + b + data(dados.revisadoEm) + c);
const head = html.indexOf('<head>'), body = html.indexOf('<body '), main = html.indexOf('  <main>');
const afterMain = html.indexOf('  </main>') + '  </main>'.length;
const endBody = html.lastIndexOf('</body>');
if ([head, body, main, endBody].some(i => i < 0)) throw new Error('Estrutura da home inválida.');
const preOriginal = html.slice(body, main);
const pre = preOriginal.replace(/\n+$/, '\n');
const partes = { head: html.slice(head, body), 'pre-main': pre, main: preOriginal.slice(pre.length) + html.slice(main, afterMain), 'post-main': html.slice(afterMain, endBody) };
const template = html.slice(0, head) + Object.keys(partes).map(p => `<!-- @include partials/pages/index/${p}.html -->\n`).join('') + html.slice(endBody);
const arquivos = { 'index.html': html, 'src/pages/index.template.html': template, ...Object.fromEntries(Object.entries(partes).map(([p, s]) => [`partials/pages/index/${p}.html`, s])) };
if (process.argv.includes('--check')) {
  for (const [p, s] of Object.entries(arquivos)) if (fs.readFileSync(p, 'utf8').replaceAll('\r\n', '\n') !== s.replaceAll('\r\n', '\n')) throw new Error('Home fora de sincronia: ' + p);
  console.log('Home e modelos sincronizados com os cinco destaques editoriais.');
} else {
  for (const [p, s] of Object.entries(arquivos)) fs.writeFileSync(p, s);
  console.log('Home e modelos atualizados: ' + dados.itens.length + ' notícias.');
}
