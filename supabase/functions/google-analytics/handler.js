const ORIGENS = new Set(['https://universosegpub.com.br', 'https://www.universosegpub.com.br']);
const METRICAS = ['activeUsers', 'sessions', 'screenPageViews', 'eventCount', 'engagementRate'];
const DIA = 86400000;
export function validarFiltros(url, hoje = new Date().toLocaleDateString('en-CA', { timeZone: 'America/Sao_Paulo' })) {
  const q = url.searchParams, inicio = q.get('inicio'), fim = q.get('fim');
  const dataValida = d => /^\d{4}-\d{2}-\d{2}$/.test(d || '') && Number.isFinite(Date.parse(d)) && new Date(d).toISOString().slice(0, 10) === d;
  if (!dataValida(inicio) || !dataValida(fim) || inicio > fim || fim > hoje || (Date.parse(fim) - Date.parse(inicio)) / DIA >= 366) throw Error('Selecione um período válido de até 366 dias, encerrado até hoje.');
  const dispositivo = q.get('dispositivo') || '';
  if (!['', 'desktop', 'mobile', 'tablet', 'smart tv'].includes(dispositivo)) throw Error('Dispositivo inválido.');
  const pais = (q.get('pais') || '').trim(), pagina = (q.get('pagina') || '').trim(), canal = (q.get('canal') || '').trim();
  if ([pais, pagina, canal].some(v => v.length > 150 || /[\x00-\x1f]/.test(v))) throw Error('Filtro inválido (máximo 150 caracteres).');
  return { inicio, fim, dispositivo, pais, pagina, canal };
}
export function criarRelatorios(f) {
  const filtro = (fieldName, value, matchType = 'EXACT') => ({ filter: { fieldName, stringFilter: { value, matchType, caseSensitive: false } } });
  const expressions = [{ filter: { fieldName: 'hostName', inListFilter: { values: ['universosegpub.com.br', 'www.universosegpub.com.br'] } } }];
  for (const [campo, valor, tipo] of [['deviceCategory', f.dispositivo, 'EXACT'], ['country', f.pais, 'EXACT'], ['pagePath', f.pagina, 'CONTAINS'], ['sessionDefaultChannelGroup', f.canal, 'EXACT']]) if (valor) expressions.push(filtro(campo, valor, tipo));
  const base = { dateRanges: [{ startDate: f.inicio, endDate: f.fim }], dimensionFilter: { andGroup: { expressions } }, returnPropertyQuota: true };
  const report = (dimensions, metrics, limit, orderBys) => ({ ...base, dimensions: dimensions.map(name => ({ name })), metrics: metrics.map(name => ({ name })), limit: String(limit), ...(orderBys ? { orderBys } : {}) });
  const desc = metricName => [{ metric: { metricName }, desc: true }];
  return [
    report([], METRICAS, 1),
    report(['date'], ['activeUsers', 'sessions', 'screenPageViews'], 366, [{ dimension: { dimensionName: 'date' } }]),
    report(['pagePath'], ['screenPageViews', 'activeUsers'], 50, desc('screenPageViews')),
    report(['sessionDefaultChannelGroup'], ['sessions', 'activeUsers'], 20, desc('sessions')),
    report(['country'], ['activeUsers', 'sessions'], 20, desc('activeUsers'))
  ];
}
export function normalizarRelatorio(report) {
  if (!report || !Array.isArray(report.metricHeaders)) throw Error('Resposta inválida do Google.');
  return {
    linhas: (report.rows || []).map(row => Object.fromEntries([
      ...(report.dimensionHeaders || []).map((h, i) => [h.name, row.dimensionValues?.[i]?.value || '']),
      ...report.metricHeaders.map((h, i) => [h.name, Number(row.metricValues?.[i]?.value || 0)])
    ])),
    totalLinhas: Number(report.rowCount || 0), metadata: report.metadata || {}
  };
}
const b64 = bytes => btoa(String.fromCharCode(...bytes)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
const codificar = value => b64(new TextEncoder().encode(JSON.stringify(value)));
async function assinarConta(conta) {
  const agora = Math.floor(Date.now() / 1000);
  const conteudo = codificar({ alg: 'RS256', typ: 'JWT' }) + '.' + codificar({ iss: conta.client_email, scope: 'https://www.googleapis.com/auth/analytics.readonly', aud: 'https://oauth2.googleapis.com/token', iat: agora, exp: agora + 3600 });
  const pem = conta.private_key.replace(/-----[^-]+-----|\s/g, '');
  const key = await crypto.subtle.importKey('pkcs8', Uint8Array.from(atob(pem), c => c.charCodeAt(0)), { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }, false, ['sign']);
  return conteudo + '.' + b64(new Uint8Array(await crypto.subtle.sign('RSASSA-PKCS1-v1_5', key, new TextEncoder().encode(conteudo))));
}
export function criarHandler({ env, fetch: request }) {
  let token = null, validade = 0;
  const chamar = (url, options = {}) => request(url, { ...options, signal: AbortSignal.timeout(20000), cache: 'no-store' });
  return async req => {
    const origin = req.headers.get('origin');
    const cors = origin && ORIGENS.has(origin) ? { 'Access-Control-Allow-Origin': origin, 'Access-Control-Allow-Headers': 'authorization, apikey, content-type', 'Access-Control-Allow-Methods': 'GET, OPTIONS', Vary: 'Origin' } : {};
    const responder = (data, status = 200) => new Response(JSON.stringify(data), { status, headers: { ...cors, 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });
    if (origin && !ORIGENS.has(origin)) return responder({ erro: 'Origem não autorizada.' }, 403);
    if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    if (req.method !== 'GET') return responder({ erro: 'Método não permitido.' }, 405);
    const auth = req.headers.get('authorization') || '';
    if (!auth.startsWith('Bearer ')) return responder({ erro: 'Entre no admin para consultar o Google Analytics.' }, 401);
    const base = env('SUPABASE_URL'), key = env('SUPABASE_SERVICE_ROLE_KEY');
    if (!base || !key) return responder({ erro: 'Servidor não configurado.' }, 503);
    try {
      const headers = { apikey: key, Authorization: auth };
      const usuario = await chamar(base + '/auth/v1/user', { headers });
      if (!usuario.ok) return responder({ erro: 'Sua sessão expirou. Entre novamente.' }, 401);
      const u = await usuario.json();
      if (!u.id || !u.email_confirmed_at) return responder({ erro: 'Acesso restrito ao administrador.' }, 403);
      // Reutiliza a lista privada de administradores já adotada no painel Hotmart.
      const membros = await chamar(base + '/rest/v1/hotmart_admins?select=user_id&user_id=eq.' + encodeURIComponent(u.id), { headers });
      if (!membros.ok) return responder({ erro: 'Não foi possível verificar a permissão administrativa.' }, 503);
      if (!(await membros.json()).some(m => m.user_id === u.id)) return responder({ erro: 'Acesso restrito ao administrador.' }, 403);
      let filtros;
      try { filtros = validarFiltros(new URL(req.url)); } catch (e) { return responder({ erro: e.message }, 400); }
      const property = env('GA4_PROPERTY_ID') || '534532275', segredo = env('GOOGLE_SERVICE_ACCOUNT_JSON');
      if (!segredo || !/^\d+$/.test(property)) return responder({ codigo: 'CONFIGURACAO_PENDENTE', erro: 'A conexão de leitura com o Google Analytics ainda precisa ser configurada no servidor.' }, 503);
      if (!token || Date.now() >= validade) {
        let conta;
        try { conta = JSON.parse(segredo); if (!conta.client_email || !conta.private_key) throw Error(); } catch { return responder({ erro: 'Credencial do Google inválida no servidor.' }, 503); }
        const resposta = await chamar('https://oauth2.googleapis.com/token', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: await assinarConta(conta) }) });
        if (!resposta.ok) return responder({ erro: 'O Google não autorizou a credencial de leitura. Confira a configuração no servidor.' }, 502);
        const dados = await resposta.json();
        if (!dados.access_token) throw Error('token');
        token = dados.access_token; validade = Date.now() + Math.max(0, Number(dados.expires_in || 3600) - 60) * 1000;
      }
      const resposta = await chamar('https://analyticsdata.googleapis.com/v1beta/properties/' + property + ':batchRunReports', { method: 'POST', headers: { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' }, body: JSON.stringify({ requests: criarRelatorios(filtros) }) });
      if (resposta.status === 401) token = null;
      if (!resposta.ok) return responder({ erro: resposta.status === 403 ? 'O Google não liberou a leitura desta propriedade. Confira a API e o acesso de Leitor da conta de serviço.' : resposta.status === 429 ? 'O limite de consultas do Google foi atingido. Aguarde e tente novamente.' : 'Não foi possível consultar os relatórios do Google Analytics. Tente novamente.' }, resposta.status === 429 ? 429 : 502);
      const dados = await resposta.json();
      if (dados.reports?.length !== 5) throw Error('reports');
      const [resumo, diario, paginas, canais, paises] = dados.reports.map(normalizarRelatorio);
      return responder({ fonte: 'Google Analytics Data API', propriedade: property, consultadoEm: new Date().toISOString(), filtros, resumo, diario, paginas, canais, paises });
    } catch { return responder({ erro: 'Consulta indisponível. Nenhuma atualização foi confirmada; tente novamente.' }, 503); }
  };
}
