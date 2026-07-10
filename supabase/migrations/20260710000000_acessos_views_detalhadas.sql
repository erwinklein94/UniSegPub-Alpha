-- Visões extras para o painel admin (herdam RLS da tabela acessos)
create view public.acessos_por_hora
with (security_invoker = true) as
select
  extract(hour from (criado_em at time zone 'America/Sao_Paulo'))::int as hora,
  count(*) as total,
  count(distinct sessao) as visitantes
from public.acessos
group by 1
order by 1;

create view public.acessos_origem_sessao
with (security_invoker = true) as
select origem, count(*) as sessoes from (
  select distinct on (sessao)
    sessao,
    case
      when coalesce(referencia, '') = '' then 'Direto / digitado'
      when referencia ~* 'google\.' then 'Google'
      when referencia ~* 'instagram\.' then 'Instagram'
      when referencia ~* 'facebook\.|fb\.watch' then 'Facebook'
      when referencia ~* 'bing\.' then 'Bing'
      when referencia ~* 'universosegpub' then 'Navegação interna'
      when referencia ~* 'localhost|127\.0\.0\.1' then 'Testes locais'
      else coalesce(substring(referencia from '^https?://([^/]+)'), 'Outros')
    end as origem
  from public.acessos
  where coalesce(sessao, '') <> ''
  order by sessao, criado_em asc
) primeiras
group by 1
order by 2 desc;

grant select on public.acessos_por_hora, public.acessos_origem_sessao to authenticated;
