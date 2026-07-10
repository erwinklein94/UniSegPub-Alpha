# Relatório — Ações Judiciais: cobertura completa das 110 instituições (2026-07-09)

## O que foi feito

A aba Ações Judiciais passou de 46 para **110 instituições** (100% de cobertura). As 64 instituições que não tinham card (18 CBM, 13 PM, 12 PC, 20 PP e a PF) receberam cards gerados a partir de **teses de alcance nacional** com Tema STF/STJ citável, seguindo o padrão editorial da skill `acoes-judiciais-instituicao-segpub`.

## Arquitetura

- **Supabase**: nova tabela `acoes_judiciais` (instituicao_id + dados jsonb), leitura pública via RLS, escrita bloqueada. Migration em `supabase/migrations/20260709000000_acoes_judiciais.sql`.
- **Fallback local**: `data/acoes-judiciais-complemento.json` (64 instituições) — usado se o Supabase estiver indisponível.
- **Front-end**: `js/pages/acoes-supabase.js` busca os dados (1 requisição), injeta os cards no mesmo markup/classes CSS dos cards estáticos, adiciona as opções no seletor por estado, alimenta `ACOES_JUDICIAIS` para o painel de teses detalhadas e respeita `?inst=` na URL.
- Os 46 cards estáticos existentes **não foram alterados** — o módulo só cria cards para instituições ausentes.

## Conteúdo (por tipo de corporação)

Cada instituição recebeu 5 teses (PF: 6), todas com Status, Referência, Tipo, Jurisprudência atual, parágrafo acessível, Base de análise, Fonte de conferência e Quem está acompanhando:

- **PM/CBM**: sexta-parte/ATS; gratificações por escala; URV 11,98% (STF Tema 5, RE 561.836/RN); licença especial em pecúnia (STF Tema 635, STJ Tema 1086); reserva/reforma (EC 103/2019, Lei 13.954/2019, Súmula 359/STF). Entidades: FENEME e ANASPRA.
- **PC**: aposentadoria especial LC 51/1985 (STF Tema 1019); abono de permanência (ARE 954.408, Tema 1326, STJ Tema 1233); licença-prêmio (Tema 635/1086); URV (Tema 5); titulação/progressão. Entidade: ADEPOL do Brasil.
- **PP**: aposentadoria do policial penal (EC 104/2019); abono de permanência; licença-prêmio; URV; adicionais de risco/insalubridade/plantão.
- **PF**: subsídio Lei 14.875/2024; progressão (Lei 9.266/1996); aposentadoria LC 51/1985 (Tema 1019); licença-prêmio Lei 4.878/1965 (Tema 635); alíquotas EC 103 (Tema 1226); indenizações Lei 12.855/2013. Entidades: FENAPEF e ADPF.

## Regra "Dados em breve"

Nenhum dado estadual foi inventado: legislação estadual, entidades estaduais, últimas movimentações de Temas e fontes locais não confirmadas estão marcadas literalmente como `Dados em breve`, conforme `docs/REVISAO-DADOS-EM-BREVE-GLOBAL.md`. Esses campos podem ser preenchidos por instituição rodando a skill `acoes-judiciais-instituicao-segpub` (pesquisa profunda, uma por vez), que substitui o registro no Supabase.

## Validação (navegador local)

- 110 cards, contador "110 instituições encontradas", seletor com 110 opções agrupadas por estado.
- Filtro federal exibe PRF + PF; seleção de PMTO/PCGO renderiza card e teses detalhadas corretas.
- Zero erros de console; 1 requisição ao Supabase por carga.

## Próximos passos sugeridos

1. Rodar a skill de ações judiciais por instituição para substituir gradualmente os `Dados em breve` estaduais.
2. Migrar os 46 cards estáticos para o Supabase (aliviaria ~2.000 linhas do HTML).
3. Repetir o modelo nas abas Associações (63 faltantes) e Brasões/Direitos/Poderes (~54 faltantes cada).
