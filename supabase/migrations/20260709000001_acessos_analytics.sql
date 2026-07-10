-- Registro de acessos do site + visões agregadas para o painel admin
create table public.acessos (
  id bigserial primary key,
  pagina text not null,
  sessao text,
  referencia text,
  criado_em timestamptz not null default now()
);

create index idx_acessos_criado_em on public.acessos (criado_em desc);
create index idx_acessos_pagina on public.acessos (pagina);

alter table public.acessos enable row level security;

-- Qualquer visitante registra o próprio acesso; só o admin lê.
grant insert on public.acessos to anon, authenticated;
grant usage on sequence public.acessos_id_seq to anon, authenticated;
grant select on public.acessos to authenticated;
grant all on public.acessos to service_role;

create policy "Registro publico de acesso"
on public.acessos
for insert
to anon, authenticated
with check (
  char_length(coalesce(pagina, '')) between 1 and 200
  and char_length(coalesce(sessao, '')) <= 64
  and char_length(coalesce(referencia, '')) <= 300
);

create policy "Leitura apenas do admin"
on public.acessos
for select
to authenticated
using ((auth.jwt() ->> 'email') = 'erwinklein1994@gmail.com');

-- Visões agregadas (security invoker: herdam a RLS da tabela base)
create view public.acessos_por_dia
with (security_invoker = true) as
select
  (criado_em at time zone 'America/Sao_Paulo')::date as dia,
  count(*) as total,
  count(distinct sessao) as visitantes
from public.acessos
group by 1
order by 1;

create view public.acessos_por_pagina
with (security_invoker = true) as
select
  pagina,
  count(*) as total,
  count(distinct sessao) as visitantes
from public.acessos
group by 1
order by 2 desc;

grant select on public.acessos_por_dia, public.acessos_por_pagina to authenticated;

create view public.acessos_resumo
with (security_invoker = true) as
select
  count(*) as total,
  count(distinct sessao) as visitantes,
  count(distinct pagina) as paginas,
  min(criado_em) as primeiro_acesso
from public.acessos;

grant select on public.acessos_resumo to authenticated;
