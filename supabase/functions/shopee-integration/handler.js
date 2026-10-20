const ORIGENS = new Set(['https://universosegpub.com.br', 'https://www.universosegpub.com.br']);
const ENDPOINT = 'https://open-api.affiliate.shopee.com.br/graphql';
const CAMPOS = 'itemId shopId productName imageUrl productLink sales ratingStar priceMin priceMax commissionRate commission shopName';
const pendente = { codigo: 'CONFIGURACAO_PENDENTE', erro: 'Aguardando a liberação da Shopee e a configuração do AppID e Secret no servidor. Confira o acesso no portal de afiliados.' };
export function filtrosOfertas(url) {
  const keyword = (url.searchParams.get('busca') || '').trim();
  const ordem = url.searchParams.get('ordem') || '2', pagina = url.searchParams.get('pagina') || '1';
  if (!keyword || keyword.length > 100 || /[\x00-\x1f]/.test(keyword)) throw Error('Informe uma busca de 1 a 100 caracteres.');
  if (!['1', '2', '3', '4', '5'].includes(ordem) || !/^[1-9]\d{0,2}$/.test(pagina) || Number(pagina) > 100) throw Error('Ordenação ou página inválida.');
  return { keyword, ordem: Number(ordem), pagina: Number(pagina) };
}
export function urlProduto(valor) {
  const u = new URL(valor);
  if (u.protocol !== 'https:' || !['shopee.com.br', 'www.shopee.com.br'].includes(u.hostname) || u.port || u.username || u.password || u.search || u.hash || !/^\/product\/[1-9]\d{0,18}\/[1-9]\d{0,18}$/.test(u.pathname)) throw Error('Use o endereço oficial do produto selecionado.');
  return 'https://shopee.com.br' + u.pathname;
}
function linkAfiliado(valor) {
  const u = new URL(valor);
  if (u.protocol !== 'https:' || !['s.shopee.com.br', 'shope.ee'].includes(u.hostname) || u.port || u.username || u.password || u.hash || !/^\/[a-zA-Z0-9]+\/?$/.test(u.pathname)) throw Error('link');
  return u.href;
}
function id(valor) {
  if (typeof valor === 'number' && !Number.isSafeInteger(valor)) throw Error('id');
  if (!/^[1-9]\d{0,18}$/.test(String(valor))) throw Error('id');
  return String(valor);
}
function numero(valor, max = 9999999999.99) {
  if (valor == null || valor === '') return null;
  const n = Number(valor);
  if (!Number.isFinite(n) || n < 0 || n > max) throw Error('numero');
  return n;
}
export function normalizarOferta(n) {
  if (typeof n.productName !== 'string' || !n.productName.trim() || n.productName.length > 2000) throw Error('nome');
  const produto = urlProduto(`https://shopee.com.br/product/${id(n.shopId)}/${id(n.itemId)}`);
  const imagem = new URL(n.imageUrl);
  if (imagem.protocol !== 'https:' || imagem.username || imagem.password) throw Error('imagem');
  const percentual = numero(n.commissionRate, 1);
  return { itemId: id(n.itemId), shopId: id(n.shopId), titulo: n.productName.slice(0, 200), imagem: imagem.href, produto,
    loja: String(n.shopName || '').slice(0, 200), vendas: numero(n.sales, 2147483647), avaliacao: numero(n.ratingStar, 5),
    preco: numero(n.priceMin), precoMax: numero(n.priceMax), percentual: percentual == null ? null : Math.round(percentual * 10000) / 100,
    comissao: numero(n.commission), tipo: 'maxima' };
}
export async function autorizacao(appId, secret, payload, agora = Date.now()) {
  const timestamp = Math.floor(agora / 1000);
  const hash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(appId + timestamp + payload + secret));
  const assinatura = Array.from(new Uint8Array(hash), b => b.toString(16).padStart(2, '0')).join('');
  return `SHA256 Credential=${appId}, Timestamp=${timestamp}, Signature=${assinatura}`;
}
export function criarHandler({ env, fetch: request, agora = () => Date.now() }) {
  const chamar = (url, opcoes = {}) => request(url, { ...opcoes, signal: AbortSignal.timeout(20000), cache: 'no-store', redirect: 'error' });
  return async req => {
    const origin = req.headers.get('origin');
    const cors = origin && ORIGENS.has(origin) ? { 'Access-Control-Allow-Origin': origin, 'Access-Control-Allow-Headers': 'authorization, apikey, content-type', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', Vary: 'Origin' } : {};
    const responder = (dados, status = 200) => new Response(JSON.stringify(dados), { status, headers: { ...cors, 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });
    if (origin && !ORIGENS.has(origin)) return responder({ erro: 'Origem não autorizada.' }, 403);
    if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    const rota = new URL(req.url).pathname.split('/').pop();
    if (!['conexao', 'ofertas', 'link'].includes(rota)) return responder({ erro: 'Rota não encontrada.' }, 404);
    if (req.method !== (rota === 'link' ? 'POST' : 'GET')) return responder({ erro: 'Método não permitido.' }, 405);
    const auth = req.headers.get('authorization') || '';
    if (!/^Bearer \S+$/.test(auth)) return responder({ erro: 'Entre no admin para consultar a Shopee.' }, 401);
    const base = env('SUPABASE_URL'), key = env('SUPABASE_SERVICE_ROLE_KEY');
    if (!base || !key) return responder({ erro: 'Servidor não configurado.' }, 503);
    try {
      const headers = { apikey: key, Authorization: auth };
      const usuario = await chamar(base + '/auth/v1/user', { headers });
      if (!usuario.ok) return responder({ erro: 'Sua sessão expirou. Entre novamente.' }, 401);
      const u = await usuario.json();
      if (!u.id || !u.email_confirmed_at) return responder({ erro: 'Acesso restrito ao administrador.' }, 403);
      const membros = await chamar(base + '/rest/v1/hotmart_admins?select=user_id&user_id=eq.' + encodeURIComponent(u.id), { headers });
      if (!membros.ok) return responder({ erro: 'Não foi possível verificar a permissão administrativa.' }, 503);
      if (!(await membros.json()).some(m => m.user_id === u.id)) return responder({ erro: 'Acesso restrito ao administrador.' }, 403);
      let query, filtros;
      try {
        if (rota === 'link') {
          if (Number(req.headers.get('content-length') || 0) > 4096) throw Error('Pedido muito grande.');
          const corpo = await req.text();
          if (corpo.length > 4096) throw Error('Pedido muito grande.');
          const produto = urlProduto(JSON.parse(corpo).produto);
          query = `mutation{generateShortLink(input:{originUrl:${JSON.stringify(produto)},subIds:["universosegpub"]}){shortLink}}`;
        } else {
          filtros = rota === 'conexao' ? { keyword: 'mochila', ordem: 2, pagina: 1 } : filtrosOfertas(new URL(req.url));
          query = `{productOfferV2(keyword:${JSON.stringify(filtros.keyword)},sortType:${filtros.ordem},page:${filtros.pagina},limit:${rota === 'conexao' ? 1 : 20}){nodes{${CAMPOS}}pageInfo{page limit hasNextPage}}}`;
        }
      } catch (e) { return responder({ erro: e instanceof SyntaxError || e instanceof TypeError ? 'Pedido inválido.' : e.message }, 400); }
      const appId = env('SHOPEE_APP_ID'), secret = env('SHOPEE_APP_SECRET');
      if (!appId || !/^\d{1,30}$/.test(appId) || !secret?.trim()) return responder(pendente, 503);
      const payload = JSON.stringify({ query });
      const r = await chamar(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: await autorizacao(appId, secret, payload, agora()) }, body: payload });
      if (!r.ok) return responder({ erro: r.status === 429 ? 'Limite da Shopee atingido. Aguarde antes de tentar novamente.' : 'A Shopee não respondeu à consulta. Tente novamente.' }, r.status === 429 ? 429 : 502);
      const dados = await r.json();
      // A Shopee retorna erros GraphQL inclusive com HTTP 200; dados parciais não confirmam sucesso.
      if (dados.errors?.length) {
        const codes = dados.errors.map(e => Number(e.extensions?.code));
        if (codes.includes(10030)) return responder({ erro: 'Limite da Shopee atingido. Aguarde antes de tentar novamente.' }, 429);
        if (codes.some(c => [10031, 10032, 10033, 10034, 10035, 11002].includes(c))) return responder({ codigo: 'ACESSO_SHOPEE_PENDENTE', erro: 'A Shopee não autorizou esta conta. Confira a liberação da API no portal de afiliados.' }, 502);
        if (codes.includes(10020)) return responder({ erro: 'A Shopee recusou a autenticação. Confira AppID e Secret nos Secrets do servidor.' }, 502);
        return responder({ erro: 'A Shopee não concluiu a operação. Tente novamente ou confira as permissões da API.' }, 502);
      }
      const consultadoEm = new Date(agora()).toISOString();
      if (rota === 'link') return responder({ href: linkAfiliado(dados.data?.generateShortLink?.shortLink), consultadoEm });
      const resultado = dados.data?.productOfferV2;
      if (!Array.isArray(resultado?.nodes) || resultado.nodes.length > 20 || typeof resultado.pageInfo?.hasNextPage !== 'boolean') throw Error('resposta');
      if (rota === 'conexao') return responder({ conectado: true, consultadoEm, mensagem: 'Conexão confirmada com uma consulta real à Shopee.' });
      return responder({ fonte: 'Shopee Affiliate Open API', consultadoEm, filtros, itens: resultado.nodes.map(normalizarOferta), pagina: filtros.pagina, temProxima: resultado.pageInfo.hasNextPage });
    } catch { return responder({ erro: 'Operação indisponível. Nenhuma alteração no catálogo foi feita. Tente novamente.' }, 503); }
  };
}
