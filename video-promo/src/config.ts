/**
 * CONFIGURAÇÃO CENTRAL DO VÍDEO
 * Tudo o que costuma mudar (textos, cores, tempos) está aqui.
 * Veja o README para o passo a passo.
 */

// ─── Cores (identidade visual do portal) ───────────────────────────────
export const CORES = {
  navy: '#06101c',
  navy2: '#0b1624',
  texto: '#f8fafc',
  textoSuave: '#aab6c5',
  textoApagado: '#6f7c8d',
  linha: 'rgba(248,250,252,0.10)',
  linhaForte: 'rgba(248,250,252,0.22)',
  // Dourado: reservado para CTA e para a palavra em destaque ("lugar.")
  ouro: '#d7b62e',
  ouroEscuro: '#b89618',
  ouroSuave: '#f7f0cb',
  // Tela do site (tema claro, como no portal)
  siteTinta: '#06101f',
  siteMudo: '#4c5a6b',
  siteLinha: '#dfe5ec',
  siteSoft: '#f4f7fa',
  siteFundo: '#ffffff',
  // Selos de status (mesmas cores de css/pages/inicio.css)
  statusAberto: { cor: '#166849', fundo: '#e7f5ed' },
  statusPreparacao: { cor: '#805d11', fundo: '#fff4d5' },
  statusAndamento: { cor: '#294e85', fundo: '#edf3ff' },
} as const;

export const FONTES = {
  sans: '"Inter", system-ui, sans-serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
} as const;

// ─── Textos ────────────────────────────────────────────────────────────
// Regra: sem valores salariais e sem datas de edital (o anúncio precisa
// continuar correto por meses).
export const TEXTOS = {
  eyebrow: 'Consulta gratuita · Fontes públicas',
  marca: 'Universo Seg Pub',
  marcaCompleta: 'Universo Segurança Pública',

  gancho: 'Quanto ganha um soldado da PM no seu estado?',
  ganchoApoio: '27 UFs. Uma consulta.',

  problemaLinha1: 'Informação espalhada.',
  problemaLinha2: 'Fonte duvidosa.',

  // Uma legenda por tela do celular (cena "Solução")
  solucao: [
    { eyebrow: '01 · Remuneração', legenda: 'Escolha a carreira e o estado. Veja o salário do seu cargo.' },
    { eyebrow: '02 · Cobertura', legenda: '110 instituições em 27 UFs.' },
    { eyebrow: '03 · Concursos', legenda: 'Editais com status claro e link para a banca.' },
    { eyebrow: '04 · Tudo junto', legenda: 'Salários, concursos e direitos. Em um só lugar.' },
  ],
  telaIlustrativa: 'Telas ilustrativas',

  confianca: 'Cada dado com fonte oficial.',
  confiancaSelo: 'Fonte oficial',
  confiancaFontes: ['Edital', 'Diário Oficial', 'Lei', 'Banca'],
  avisoIndependencia: 'Portal informativo, sem vínculo governamental.',

  ctaTitulo: 'Salários e concursos da segurança pública, em um só lugar.',
  ctaTituloCurto: 'Salários e concursos, em um só lugar.', // bumper de 6 s
  ctaBotao: 'Consulte grátis',
  url: 'universosegpub.com.br',
} as const;

// Palavra que recebe o marca-texto dourado (como no site)
export const PALAVRA_DESTAQUE = 'lugar.';

// ─── Tempo ─────────────────────────────────────────────────────────────
export const FPS = 30;
export const BPM = 110;

/** Duração (em segundos) de cada cena da versão de 30 s. */
export const TIMELINE_30S = {
  gancho: 3,
  problema: 5,
  solucao: 12, // dividida igualmente entre as 4 telas do celular
  confianca: 6,
  cta: 4,
} as const;

/** Bumper de 6 s: só gancho + logo/CTA. */
export const TIMELINE_BUMPER = {
  gancho: 3,
  cta: 3,
} as const;

/**
 * Converte segundos em quadros e encaixa o corte no meio-tempo mais
 * próximo da grade de 110 BPM, para os cortes caírem no ritmo da música.
 */
export const meioTempo = (60 / BPM / 2) * FPS; // ≈ 8,18 quadros
export const noRitmo = (segundos: number) =>
  Math.round(Math.round((segundos * FPS) / meioTempo) * meioTempo);
