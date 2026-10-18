-- Conteúdos antes criados somente pelo painel, agora reproduzíveis no projeto novo.
create table public.datasets (
  chave text primary key,
  conteudo jsonb not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create table public.cards_estaticos (
  pagina text not null,
  instituicao_id text not null,
  ordem integer not null default 0,
  html text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (pagina, instituicao_id)
);
alter table public.datasets enable row level security;
alter table public.cards_estaticos enable row level security;
revoke all on public.datasets, public.cards_estaticos from anon, authenticated;
grant select on public.datasets, public.cards_estaticos to anon, authenticated;
grant all on public.datasets, public.cards_estaticos to service_role;
create policy "Conteudo publico" on public.datasets for select to anon, authenticated using (true);
create policy "Cards publicos" on public.cards_estaticos for select to anon, authenticated using (true);
alter function public.set_updated_at() set search_path = '';
-- O cadastro de administradores é controlado pelo servidor, nunca pelo cliente.
drop policy "Leitura apenas do admin" on public.acessos;
create policy "Leitura apenas do admin" on public.acessos
for select to authenticated
using (exists (select 1 from public.hotmart_admins a where a.user_id = (select auth.uid())));
-- Retira privilégios automáticos do projeto novo e explicita o mínimo necessário.
revoke all on public.acessos from anon, authenticated;
grant insert on public.acessos to anon, authenticated;
grant select on public.acessos to authenticated;
revoke all on sequence public.acessos_id_seq from anon, authenticated;
grant usage on sequence public.acessos_id_seq to anon, authenticated;
revoke insert, update, delete, truncate, references, trigger
on public.instituicoes, public.concursos, public.remuneracoes,
public.remuneracao_linhas, public.acoes_judiciais from anon, authenticated;
