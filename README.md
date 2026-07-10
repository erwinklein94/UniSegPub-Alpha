# UniSegPub + Supabase — starter kit

Este pacote inicia a migração dos JSONs do site para Supabase.

**Projeto Supabase:** `https://yilpmghvcvfceowwuopc.supabase.co`
Chave publishable (somente leitura, usada no navegador): `sb_publishable_2Yj2IfqpQugBSDJr9ByV7w_5KNCPeKa`

## Estado da migração (2026-07-09)

- ✅ Migration aplicada no projeto: tabelas `instituicoes`, `concursos`, `remuneracoes`, `remuneracao_linhas` com RLS (leitura pública, escrita bloqueada).
- ✅ Dados importados: 110 instituições, 110 concursos, 110 remunerações e 1.394 linhas salariais. A coluna `raw` guarda o JSON original de cada instituição.
- ✅ Front-end em produção: as páginas Concursos e Remuneração leem do Supabase via `js/services/supabase-api.js` (Concursos passou de ~110 requisições para 2). Os JSONs em `data/` e `config/` continuam como fallback se o Supabase estiver fora do ar.
- Próximo passo: completar o conteúdo das abas fracas e migrar os dados embutidos em `js/data/*.js` (ações judiciais, associações, brasões etc.) para o banco.

## O que está incluído

- `supabase/migrations/20260524000000_initial_unisegpub.sql`: cria as tabelas iniciais.
- `scripts/import-json-to-supabase.mjs`: importa `config/`, `data/concursos/` e `data/remuneracao/`.
- `js/services/supabase-api.js`: leitura no front-end estático (em produção nas páginas Concursos e Remuneração).
- `js/supabase-data-api.example.js`: exemplo de leitura com o SDK oficial.

## Ordem recomendada

1. Copie a pasta `supabase/` e `scripts/` para a raiz do repositório do site.
2. Instale a CLI do Supabase e conecte seu projeto.
3. Rode a migration.
4. Rode o importador.
5. Só depois troque uma página do site para ler pelo Supabase.

## Comandos

```bash
npm install

# Na raiz do repositório UniSegPub:
export SUPABASE_URL="https://SEU-PROJETO.supabase.co"
export SUPABASE_SERVICE_ROLE_KEY="SUA_SERVICE_ROLE_KEY"
export UNISEGPUB_ROOT="/caminho/para/UniSegPub-Alpha-main"

npm run import:supabase
```

> Nunca exponha `SUPABASE_SERVICE_ROLE_KEY` no navegador ou no GitHub público. Ela é só para importação no servidor/local/CI.

## Tabelas criadas

- `instituicoes`
- `concursos`
- `remuneracoes`
- `remuneracao_linhas`

A modelagem usa JSONB para `fontes`, `alertas` e `raw` nesta fase inicial para evitar perda de informação enquanto o front-end ainda está sendo adaptado.
