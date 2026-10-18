-- Dados mínimos de vendas: sem payload bruto, comprador, CPF, e-mail ou Hottok.
create table public.hotmart_admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  criado_em timestamptz not null default now()
);
alter table public.hotmart_admins enable row level security;
revoke all on public.hotmart_admins from anon, authenticated;
grant select on public.hotmart_admins to authenticated;
grant all on public.hotmart_admins to service_role;
create policy "Admin consulta propria autorizacao Hotmart"
on public.hotmart_admins for select to authenticated
using (user_id = (select auth.uid()));

-- Vinculação ao UUID do administrador já existente, não ao user_metadata.
insert into public.hotmart_admins (user_id)
select id from auth.users
where email = 'erwinklein1994@gmail.com' and email_confirmed_at is not null
on conflict do nothing;

create table public.hotmart_eventos (
  evento_id text primary key check (length(evento_id) between 1 and 160),
  evento text not null,
  transacao text not null check (length(transacao) between 1 and 100),
  produto_id text not null,
  produto text not null,
  status text not null check (status in ('APPROVED','COMPLETE','REFUNDED','CHARGEBACK','CANCELLED','EXPIRED','PRINTED_BILLET','OVERDUE','PROTESTED','PARTIALLY_REFUNDED')),
  ocorrido_em timestamptz not null,
  aprovado_em timestamptz,
  comissao numeric(18,4) check (comissao >= 0),
  moeda text check (moeda ~ '^[A-Z]{3}$'),
  recebido_em timestamptz not null default now(),
  check ((comissao is null and moeda is null) or (comissao is not null and moeda is not null))
);
create index hotmart_eventos_transacao_data on public.hotmart_eventos (transacao, ocorrido_em desc);
create index hotmart_eventos_recebido on public.hotmart_eventos (recebido_em desc);
alter table public.hotmart_eventos enable row level security;
revoke all on public.hotmart_eventos from anon, authenticated;
grant select on public.hotmart_eventos to authenticated;
grant all on public.hotmart_eventos to service_role;
create policy "Somente administradores Hotmart leem eventos"
on public.hotmart_eventos for select to authenticated
using (exists (select 1 from public.hotmart_admins a where a.user_id = (select auth.uid())));
comment on table public.hotmart_eventos is 'Eventos Hotmart v2 minimizados; insercao somente pelo servidor apos verificar Hottok; evento_id idempotente.';
