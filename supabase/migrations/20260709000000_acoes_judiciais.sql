-- Aba Ações Judiciais — conteúdo por instituição (JSON estruturado em dados)
create table public.acoes_judiciais (
  instituicao_id text primary key references public.instituicoes(id) on delete cascade,
  dados jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger set_acoes_judiciais_updated_at
before update on public.acoes_judiciais
for each row execute function public.set_updated_at();

alter table public.acoes_judiciais enable row level security;

grant select on public.acoes_judiciais to anon, authenticated;
grant all on public.acoes_judiciais to service_role;

create policy "Leitura publica de acoes judiciais"
on public.acoes_judiciais
for select
to anon, authenticated
using (true);
