/**
 * Telas do portal recriadas em React (layout mobile da home), com base em
 * index.html, css/home-desktop-redesign.css e css/pages/inicio.css.
 * Medidas em "px lógicos" de um celular de 390 px de largura; o componente
 * Celular escala tudo para o tamanho do vídeo.
 */
import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { CORES, FONTES } from '../config';
import { SPRING_CURTO, contar, entre } from '../anim';
import { Logo } from './base';
import { Chevron, IconeArea, Menu, SetaDiagonal, SetaDireita } from './icones';

export const LARGURA_TELA = 390;
const C = CORES;

// ─── Peças do site ─────────────────────────────────────────────────────
const SiteEyebrow: React.FC<{ texto: string }> = ({ texto }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      margin: '0 0 12px',
      fontFamily: FONTES.mono,
      fontWeight: 700,
      fontSize: 9,
      letterSpacing: '0.32em',
      textTransform: 'uppercase',
      color: '#516070',
    }}
  >
    <span style={{ width: 20, height: 1, background: C.ouro }} />
    {texto}
  </div>
);

export const SiteCabecalho: React.FC = () => (
  <div style={{ background: C.navy }}>
    <div
      style={{
        height: 30,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '0 18px',
        borderBottom: '1px solid rgba(255,255,255,.08)',
        color: '#e9eef5',
        fontFamily: FONTES.sans,
        fontWeight: 500,
        fontSize: 10.5,
      }}
    >
      <span style={{ width: 7, height: 7, borderRadius: 99, background: C.ouro, boxShadow: '0 0 0 3px rgba(215,182,46,.15)' }} />
      Portal independente · Não governamental
    </div>
    <div
      style={{
        height: 62,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '0 18px',
        borderBottom: `2px solid ${C.ouro}`,
      }}
    >
      <Logo tamanho={38} anel={false} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}>
        <strong style={{ fontFamily: FONTES.sans, fontWeight: 800, fontSize: 15, color: '#fff', letterSpacing: '-0.02em' }}>
          Universo Seg Pub
        </strong>
        <small style={{ fontFamily: FONTES.sans, fontWeight: 500, fontSize: 9.5, color: '#aeb8c6' }}>Portal de Segurança Pública</small>
      </div>
      <Menu tamanho={24} cor="#e9eef5" />
    </div>
  </div>
);

/** Indicador de toque (círculo + onda) */
export const Toque: React.FC<{ em: number; x?: string; y?: string }> = ({ em, x = '50%', y = '50%' }) => {
  const f = useCurrentFrame();
  if (f < em - 6 || f > em + 16) return null;
  const chegada = entre(f, em - 6, em, 0, 1);
  const onda = entre(f, em, em + 14, 0, 1);
  return (
    <div style={{ position: 'absolute', left: x, top: y, width: 0, height: 0, zIndex: 20, pointerEvents: 'none' }}>
      <div
        style={{
          position: 'absolute',
          width: 34,
          height: 34,
          left: -17,
          top: -17,
          borderRadius: 99,
          background: 'rgba(6,16,31,.28)',
          border: '2px solid rgba(255,255,255,.9)',
          opacity: chegada * (1 - onda * 0.9),
          transform: `scale(${1.3 - chegada * 0.3})`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: 34,
          height: 34,
          left: -17,
          top: -17,
          borderRadius: 99,
          border: '2px solid rgba(6,16,31,.35)',
          opacity: 1 - onda,
          transform: `scale(${1 + onda * 1.8})`,
        }}
      />
    </div>
  );
};

type Situacao = 'aberto' | 'preparacao' | 'andamento';
const STATUS: Record<Situacao, { texto: string; cor: string; fundo: string }> = {
  aberto: { texto: 'Inscrições abertas', ...mapa(C.statusAberto) },
  preparacao: { texto: 'Em preparação', ...mapa(C.statusPreparacao) },
  andamento: { texto: 'Em andamento', ...mapa(C.statusAndamento) },
};
function mapa(s: { cor: string; fundo: string }) {
  return { cor: s.cor, fundo: s.fundo };
}

export const SeloStatus: React.FC<{ situacao: Situacao; escala?: number; style?: React.CSSProperties }> = ({ situacao, escala = 1, style }) => {
  const s = STATUS[situacao];
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6 * escala,
        borderRadius: 5 * escala,
        padding: `${5 * escala}px ${9 * escala}px`,
        fontFamily: FONTES.sans,
        fontSize: 11 * escala,
        lineHeight: 1.35,
        fontWeight: 700,
        color: s.cor,
        background: s.fundo,
        ...style,
      }}
    >
      <span style={{ width: 6 * escala, height: 6 * escala, borderRadius: 99, background: s.cor }} />
      {s.texto}
    </span>
  );
};

// ─── Tela 1: consulta de remuneração ──────────────────────────────────
const Select: React.FC<{ rotulo: string; vazio: string; valor: string; preenchidoEm: number; focoEm: number }> = ({
  rotulo,
  vazio,
  valor,
  preenchidoEm,
  focoEm,
}) => {
  const f = useCurrentFrame();
  const foco = f >= focoEm && f < preenchidoEm + 8;
  const cheio = f >= preenchidoEm;
  return (
    <label style={{ display: 'block', position: 'relative' }}>
      <span style={{ display: 'block', margin: '0 0 6px', fontFamily: FONTES.sans, fontSize: 11, fontWeight: 600, color: '#536276' }}>{rotulo}</span>
      <div
        style={{
          height: 46,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 14px',
          border: `1px solid ${foco ? C.ouroEscuro : '#d1d9e3'}`,
          boxShadow: foco ? '0 0 0 3px rgba(215,182,46,.18)' : 'none',
          borderRadius: 4,
          background: '#fff',
          fontFamily: FONTES.sans,
          fontSize: 14.5,
          fontWeight: cheio ? 600 : 500,
          color: cheio ? C.siteTinta : '#6f7c8d',
        }}
      >
        {cheio ? valor : vazio}
        <Chevron tamanho={18} cor="#536276" />
      </div>
      <Toque em={focoEm} x="70%" y="62%" />
    </label>
  );
};

export const TelaRemuneracao: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const rolagem = entre(f, 6, 22, 0, 292);
  const pronto = f >= 50;
  const pressionado = f >= 62 && f < 68;
  const folha = spring({ frame: f - 68, fps, config: SPRING_CURTO });

  return (
    <div style={{ position: 'relative', height: '100%', background: '#fff', overflow: 'hidden' }}>
      <div style={{ transform: `translateY(${-rolagem}px)` }}>
        <SiteCabecalho />
        <div style={{ padding: '26px 20px 6px' }}>
          <SiteEyebrow texto="Consulta gratuita · Fontes públicas" />
          <h1 style={{ margin: 0, fontFamily: FONTES.sans, fontWeight: 800, fontSize: 33, lineHeight: 1.0, letterSpacing: '-0.055em', color: C.siteTinta }}>
            Salários e concursos da segurança pública, em um só{' '}
            <span style={{ position: 'relative', display: 'inline-block', isolation: 'isolate' }}>
              lugar.
              <span style={{ position: 'absolute', left: 0, right: 0, bottom: '0.08em', height: '0.18em', background: 'rgba(215,182,46,.45)', zIndex: -1 }} />
            </span>
          </h1>
          <p style={{ margin: '16px 0 0', fontFamily: FONTES.sans, fontWeight: 500, fontSize: 13.5, lineHeight: 1.55, color: '#27384c' }}>
            Consulte remuneração por cargo, acompanhe editais e explore as carreiras.
          </p>
        </div>
        <div
          style={{
            margin: '22px 16px 0',
            border: '1px solid #dce3eb',
            borderTop: `2px solid ${C.ouro}`,
            borderRadius: 7,
            padding: '20px 18px 18px',
            background: '#fbfcfe',
            boxShadow: '0 16px 40px rgba(6,16,31,.05)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: FONTES.mono, fontWeight: 700, fontSize: 8.5, letterSpacing: '0.26em', textTransform: 'uppercase', color: '#49596d', marginBottom: 14 }}>
            <span>Sua consulta começa aqui</span>
            <strong style={{ color: C.siteTinta }}>Por instituição</strong>
          </div>
          <h2 style={{ margin: '0 0 4px', fontFamily: FONTES.sans, fontWeight: 800, fontSize: 18, letterSpacing: '-0.02em', color: C.siteTinta }}>
            Qual carreira você quer conhecer?
          </h2>
          <p style={{ margin: '0 0 16px', fontFamily: FONTES.sans, fontSize: 12.5, color: '#516070' }}>Abra a tabela da instituição escolhida.</p>
          <div style={{ display: 'grid', gap: 12 }}>
            <Select rotulo="Instituição / carreira" vazio="Selecione a carreira" valor="Polícia Militar" focoEm={28} preenchidoEm={33} />
            <Select rotulo="Estado / UF" vazio="Selecione o estado" valor="SP · São Paulo" focoEm={42} preenchidoEm={47} />
          </div>
          <p style={{ margin: '12px 0 14px', fontFamily: FONTES.sans, fontSize: 11.5, color: pronto ? '#166849' : '#5d6c7f', fontWeight: pronto ? 600 : 500 }}>
            {pronto ? 'Pronto: Polícia Militar · SP.' : 'Selecione a carreira e, quando necessário, a UF.'}
          </p>
          <div style={{ position: 'relative' }}>
            <div
              style={{
                height: 50,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                borderRadius: 3,
                background: C.ouro,
                color: C.siteTinta,
                fontFamily: FONTES.sans,
                fontWeight: 700,
                fontSize: 15,
                opacity: pronto ? 1 : 0.45,
                transform: `scale(${pressionado ? 0.97 : 1})`,
              }}
            >
              Consultar remuneração <SetaDireita tamanho={17} />
            </div>
            <Toque em={62} x="58%" y="55%" />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16, paddingTop: 14, borderTop: '1px solid #e0e6ed', fontFamily: FONTES.sans, fontSize: 11.5, color: '#5d6c7f' }}>
            <span>Federal e estadual</span>
            <span>
              <strong style={{ color: C.siteTinta }}>110</strong> instituições na base
            </span>
          </div>
        </div>
      </div>

      {/* Resultado (sem valores: "veja o salário do seu cargo") */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          top: 120,
          background: '#fff',
          borderTop: `2px solid ${C.ouro}`,
          borderRadius: '14px 14px 0 0',
          boxShadow: '0 -20px 50px rgba(6,16,31,.18)',
          transform: `translateY(${(1 - folha) * 105}%)`,
          padding: '22px 20px',
        }}
      >
        <SiteEyebrow texto="Remuneração tabelada" />
        <div style={{ fontFamily: FONTES.sans, fontWeight: 800, fontSize: 24, letterSpacing: '-0.04em', color: C.siteTinta }}>PMESP · SP</div>
        <div style={{ fontFamily: FONTES.sans, fontSize: 12.5, color: '#516070', margin: '4px 0 16px' }}>Valores brutos por cargo, com a fonte de cada tabela.</div>
        {['Soldado 2ª classe', 'Soldado 1ª classe', 'Cabo', '3º Sargento', '2º Sargento'].map((cargo, i) => {
          const brilho = (Math.sin((f - i * 4) / 4) + 1) / 2;
          return (
            <div key={cargo} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '13px 0', borderTop: '1px solid #e7ecf1' }}>
              <span style={{ fontFamily: FONTES.sans, fontWeight: 600, fontSize: 14, color: C.siteTinta }}>{cargo}</span>
              <span style={{ width: 92, height: 14, borderRadius: 3, background: `rgba(6,16,31,${0.08 + brilho * 0.07})` }} />
            </div>
          );
        })}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 14, fontFamily: FONTES.sans, fontWeight: 650, fontSize: 12, color: C.siteTinta }}>
          Fonte oficial <SetaDiagonal tamanho={13} />
        </div>
      </div>
    </div>
  );
};

// ─── Tela 2: cobertura (contadores) ───────────────────────────────────
const TABS = [
  { nome: 'Federais', n: 2 },
  { nome: 'Polícia Militar', n: 27 },
  { nome: 'Polícia Civil', n: 27 },
  { nome: 'Polícia Penal', n: 27 },
  { nome: 'Bombeiros', n: 27 },
];
const SIGLAS = [
  { s: 'PF', n: 'Polícia Federal' },
  { s: 'PRF', n: 'Rodoviária Federal' },
  { s: 'PMESP', n: 'Polícia Militar' },
  { s: 'PCSP', n: 'Polícia Civil' },
  { s: 'PPMG', n: 'Polícia Penal' },
  { s: 'CBMMG', n: 'Bombeiros' },
  { s: 'PMBA', n: 'Polícia Militar' },
  { s: 'PCRS', n: 'Polícia Civil' },
  { s: 'PPPE', n: 'Polícia Penal' },
];

export const TelaCobertura: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const ativo = Math.min(TABS.length - 1, Math.max(0, Math.floor((f - 36) / 9)));
  return (
    <div style={{ height: '100%', background: '#fff', overflow: 'hidden' }}>
      <SiteCabecalho />
      <div style={{ padding: '24px 20px 0' }}>
        <SiteEyebrow texto="Cobertura nacional" />
        <h2 style={{ margin: 0, fontFamily: FONTES.sans, fontWeight: 800, fontSize: 25, lineHeight: 1.15, letterSpacing: '-0.045em', color: C.siteTinta }}>
          Selecione sua instituição
        </h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', margin: '20px 0 0', borderTop: `1px solid ${C.siteLinha}`, borderBottom: `1px solid ${C.siteLinha}` }}>
        {[
          { n: contar(f, 4, 34, 110), sufixo: '', rot: 'Instituições na base' },
          { n: contar(f, 8, 30, 27), sufixo: 'UFs', rot: 'Consultas em todo o Brasil' },
        ].map((st, i) => (
          <div key={i} style={{ padding: '20px 20px 18px', borderLeft: i ? `1px solid ${C.siteLinha}` : undefined }}>
            <strong style={{ display: 'block', fontFamily: FONTES.mono, fontWeight: 700, fontSize: 52, lineHeight: 1, letterSpacing: '-0.04em', color: C.siteTinta }}>
              {st.n}
              {st.sufixo && <em style={{ fontStyle: 'normal', fontFamily: FONTES.sans, fontWeight: 600, fontSize: 22, color: C.ouroEscuro, marginLeft: 6, letterSpacing: 0 }}>{st.sufixo}</em>}
            </strong>
            <span style={{ display: 'block', marginTop: 8, fontFamily: FONTES.sans, fontSize: 12, color: '#57667a' }}>{st.rot}</span>
          </div>
        ))}
      </div>
      <div style={{ margin: '18px 14px 0', padding: '16px 14px 18px', background: '#eef2f6' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 14px', borderBottom: '1px solid #d6dde6', marginBottom: 14 }}>
          {TABS.map((t, i) => {
            const s = spring({ frame: f - 14 - i * 3, fps, config: SPRING_CURTO });
            return (
              <span
                key={t.nome}
                style={{
                  position: 'relative',
                  padding: '8px 0 9px',
                  fontFamily: FONTES.sans,
                  fontSize: 12.5,
                  fontWeight: i === ativo ? 700 : 500,
                  color: i === ativo ? C.siteTinta : '#536276',
                  opacity: s,
                }}
              >
                {t.nome} <span style={{ color: C.ouroEscuro, fontSize: 11, fontFamily: FONTES.mono, fontWeight: 700 }}>{t.n}</span>
                {i === ativo && <span style={{ position: 'absolute', left: 0, right: 0, bottom: -1, height: 2, background: C.ouro }} />}
              </span>
            );
          })}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
          {SIGLAS.map((g, i) => {
            const s = spring({ frame: f - 20 - i * 2, fps, config: SPRING_CURTO });
            return (
              <div
                key={g.s}
                style={{
                  padding: '13px 10px 11px',
                  background: '#fff',
                  border: '1px solid #d6dde6',
                  borderRadius: 4,
                  opacity: s,
                  transform: `translateY(${(1 - s) * 14}px)`,
                }}
              >
                <strong style={{ display: 'block', fontFamily: FONTES.sans, fontWeight: 800, fontSize: 17, letterSpacing: '-0.03em', color: C.siteTinta }}>{g.s}</strong>
                <span style={{ display: 'block', marginTop: 5, fontFamily: FONTES.sans, fontWeight: 600, fontSize: 8.5, letterSpacing: '0.02em', textTransform: 'uppercase', color: '#536276' }}>{g.n}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// ─── Tela 3: concursos com selos de status ────────────────────────────
const CARDS: { sigla: string; uf: string; capa: string; situacao: Situacao; titulo: string; cta: string }[] = [
  { sigla: 'PMPE', uf: 'PE', capa: '#294e4a', situacao: 'aberto', titulo: 'Soldado e oficiais: requisitos, etapas e banca', cta: 'Ver edital e inscrições' },
  { sigla: 'PCSP', uf: 'SP', capa: '#4b4964', situacao: 'preparacao', titulo: 'Novo concurso em preparação: acompanhe os atos oficiais', cta: 'Ler comunicado oficial' },
  { sigla: 'PRF', uf: 'Federal', capa: '#173951', situacao: 'andamento', titulo: 'Provas aplicadas: acompanhe as próximas etapas', cta: 'Acompanhar informação oficial' },
];

export const TelaConcursos: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const rolagem = entre(f, 34, 72, 0, 250);
  return (
    <div style={{ height: '100%', background: '#fff', overflow: 'hidden' }}>
      <div style={{ transform: `translateY(${-rolagem}px)` }}>
        <SiteCabecalho />
        <div style={{ padding: '24px 20px 0' }}>
          <SiteEyebrow texto="No radar da sua carreira" />
          <h2 style={{ margin: 0, fontFamily: FONTES.sans, fontWeight: 800, fontSize: 25, lineHeight: 1.15, letterSpacing: '-0.045em', color: C.siteTinta }}>
            Concursos para acompanhar de perto.
          </h2>
          <p style={{ margin: '8px 0 0', fontFamily: FONTES.sans, fontSize: 13, lineHeight: 1.5, color: '#34445a' }}>Cada chamada leva à fonte oficial.</p>
          <div style={{ display: 'flex', gap: 6, margin: '16px 0 18px' }}>
            {['Todos', 'Inscrições', 'Em preparação', 'Em andamento'].map((b, i) => (
              <span
                key={b}
                style={{
                  border: `1px solid ${i === 0 ? C.siteTinta : C.siteLinha}`,
                  background: i === 0 ? C.siteTinta : '#fff',
                  color: i === 0 ? '#fff' : C.siteMudo,
                  padding: '7px 10px',
                  borderRadius: 20,
                  fontFamily: FONTES.sans,
                  fontWeight: 600,
                  fontSize: 10.5,
                  whiteSpace: 'nowrap',
                }}
              >
                {b}
              </span>
            ))}
          </div>
        </div>
        <div style={{ display: 'grid', gap: 14, padding: '0 16px' }}>
          {CARDS.map((c, i) => {
            const s = spring({ frame: f - 4 - i * 7, fps, config: SPRING_CURTO });
            const selo = spring({ frame: f - 14 - i * 8, fps, config: { damping: 9, stiffness: 260, mass: 0.5 } });
            return (
              <div
                key={c.sigla}
                style={{
                  border: `1px solid ${C.siteLinha}`,
                  borderRadius: 14,
                  overflow: 'hidden',
                  background: '#fff',
                  opacity: s,
                  transform: `translateY(${(1 - s) * 50}px)`,
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    height: 92,
                    padding: '0 18px',
                    display: 'flex',
                    alignItems: 'center',
                    overflow: 'hidden',
                    background: `radial-gradient(ellipse at 85% 20%, #ffffff12, transparent 55%), linear-gradient(130deg, ${c.capa}, #081522)`,
                    color: '#fff',
                  }}
                >
                  <div style={{ position: 'absolute', width: 200, height: 200, right: -50, top: -110, border: '1px solid #ffffff20', borderRadius: '50%', boxShadow: '0 0 0 30px #ffffff05, 0 0 0 60px #ffffff04' }} />
                  <div style={{ display: 'grid', gap: 5 }}>
                    <small style={{ fontFamily: FONTES.sans, fontSize: 7.5, letterSpacing: '0.13em', color: '#dce5eb' }}>SEGURANÇA PÚBLICA</small>
                    <strong style={{ fontFamily: FONTES.sans, fontWeight: 800, fontSize: 34, lineHeight: 1, letterSpacing: '-0.04em' }}>{c.sigla}</strong>
                    <em style={{ fontFamily: FONTES.mono, fontStyle: 'normal', fontSize: 9, letterSpacing: '0.12em', color: '#e8cd6c' }}>
                      {c.uf.toUpperCase()} · CONCURSOS
                    </em>
                  </div>
                </div>
                <div style={{ padding: '14px 16px 16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 10 }}>
                    <SeloStatus situacao={c.situacao} style={{ transform: `scale(${0.6 + selo * 0.4})`, transformOrigin: 'left center', opacity: Math.min(1, selo * 1.5) }} />
                    <span style={{ fontFamily: FONTES.mono, fontSize: 10, color: C.siteMudo }}>{c.uf}</span>
                  </div>
                  <h3 style={{ margin: '0 0 12px', fontFamily: FONTES.sans, fontWeight: 800, fontSize: 15.5, lineHeight: 1.25, letterSpacing: '-0.025em', color: C.siteTinta }}>{c.titulo}</h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: FONTES.sans, fontWeight: 700, fontSize: 12, color: C.siteTinta }}>
                    {c.cta} <SetaDiagonal tamanho={14} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// ─── Tela 4: grade das áreas ──────────────────────────────────────────
const AREAS = [
  { id: 'remuneracao', t: 'Remuneração Tabelada', cta: 'Ver tabelas' },
  { id: 'concursos', t: 'Concursos', cta: 'Ver editais' },
  { id: 'direitos', t: 'Direitos e Vantagens', cta: 'Consultar direitos' },
  { id: 'acoes', t: 'Ações Judiciais', cta: 'Ver ações' },
  { id: 'brasoes', t: 'Brasões e história', cta: 'Ver história' },
  { id: 'associacoes', t: 'Associações e Sindicatos', cta: 'Ver entidades' },
];

export const TelaAreas: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <div style={{ height: '100%', background: '#fff', overflow: 'hidden' }}>
      <SiteCabecalho />
      <div style={{ padding: '24px 20px 0' }}>
        <SiteEyebrow texto="Áreas de consulta" />
        <h2 style={{ margin: 0, fontFamily: FONTES.sans, fontWeight: 800, fontSize: 24, lineHeight: 1.15, letterSpacing: '-0.045em', color: C.siteTinta }}>
          Tudo o que importa para sua carreira, em um único lugar
        </h2>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          margin: '20px 16px 0',
          borderTop: `1px solid ${C.siteLinha}`,
          borderLeft: `1px solid ${C.siteLinha}`,
        }}
      >
        {AREAS.map((a, i) => {
          const s = spring({ frame: f - 6 - i * 4, fps, config: SPRING_CURTO });
          const destaque = interpolate(f, [30 + i * 6, 36 + i * 6, 44 + i * 6], [0, 1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
          return (
            <div
              key={a.id}
              style={{
                minHeight: 150,
                display: 'flex',
                flexDirection: 'column',
                padding: '16px 14px 14px',
                borderRight: `1px solid ${C.siteLinha}`,
                borderBottom: `1px solid ${C.siteLinha}`,
                background: destaque > 0 ? `rgba(244,247,250,${destaque})` : '#fff',
                opacity: s,
                transform: `scale(${0.9 + s * 0.1})`,
              }}
            >
              <small style={{ fontFamily: FONTES.mono, fontSize: 9.5, letterSpacing: '0.14em', color: '#536276' }}>{String(i + 1).padStart(2, '0')}</small>
              <span
                style={{
                  width: 32,
                  height: 32,
                  margin: '10px 0 12px',
                  display: 'grid',
                  placeItems: 'center',
                  border: '1px solid #d6dde6',
                  borderRadius: 4,
                  color: C.siteTinta,
                }}
              >
                <IconeArea area={a.id} tamanho={18} />
              </span>
              <h3 style={{ margin: 0, fontFamily: FONTES.sans, fontWeight: 800, fontSize: 14.5, lineHeight: 1.22, letterSpacing: '-0.025em', color: C.siteTinta }}>{a.t}</h3>
              <strong style={{ marginTop: 'auto', paddingTop: 12, display: 'flex', justifyContent: 'space-between', fontFamily: FONTES.sans, fontWeight: 700, fontSize: 11, color: C.siteTinta }}>
                {a.cta} <SetaDireita tamanho={13} cor="#8d98a8" />
              </strong>
            </div>
          );
        })}
      </div>
    </div>
  );
};
