-- Comissões são informações internas; não integram o catálogo público.
create table public.produtos_comissoes (
  categoria text not null,
  href text not null,
  preco numeric(12,2) check (preco >= 0),
  comissao numeric(12,2) check (comissao >= 0),
  percentual numeric(5,2) check (percentual between 0 and 100),
  tipo text not null default 'maxima' check (tipo in ('maxima','estimada','fixa')),
  conferido_em date,
  fonte text not null default '',
  observacoes text not null default '',
  updated_at timestamptz not null default now(),
  primary key (categoria, href)
);
alter table public.produtos_comissoes enable row level security;
revoke all on public.produtos_comissoes from anon, authenticated;
grant select on public.produtos_comissoes to authenticated;
grant all on public.produtos_comissoes to service_role;
create policy "Admin consulta comissoes previstas" on public.produtos_comissoes
for select to authenticated using (
  exists (select 1 from public.hotmart_admins a where a.user_id = (select auth.uid()))
);

-- Uma única transação salva anúncio e comissão, com versão para evitar perdas.
create function public.admin_salvar_produto(
  p_categoria text, p_href_original text, p_produto jsonb,
  p_comissao jsonb, p_versao timestamptz
) returns timestamptz language plpgsql security definer set search_path = '' as $$
declare
  catalogo jsonb; versao timestamptz; antigos jsonb; novo jsonb;
  anterior jsonb; posicao integer; destino text; imagem text;
begin
  if not exists (select 1 from public.hotmart_admins where user_id = auth.uid()) then
    raise exception 'Acesso restrito ao administrador' using errcode = '42501';
  end if;
  if p_categoria not in ('produtosFisicos','cursosGerais','cursosPmesp','cursosPcsp','livrosEbooks') then
    raise exception 'Categoria inválida';
  end if;
  if jsonb_typeof(p_produto) is distinct from 'object' or jsonb_typeof(p_comissao) is distinct from 'object' then
    raise exception 'Dados inválidos';
  end if;
  destino := trim(p_produto->>'href'); imagem := trim(p_produto->>'imagem');
  if destino is null or destino !~ '^https://[A-Za-z0-9.-]+([/:?].*)?$' or length(destino) > 2048
     or destino ~ '[[:space:]]' or destino ~ '@' then raise exception 'Informe um link HTTPS válido'; end if;
  if imagem is null or length(imagem) > 2048 or
     not (imagem ~ '^https://[A-Za-z0-9.-]+/' or imagem ~ '^img/[A-Za-z0-9_./ -]+$') or imagem ~ '\.\.' then
    raise exception 'Imagem inválida';
  end if;
  if coalesce(length(trim(p_produto->>'titulo')),0) not between 1 and 200 or
     coalesce(length(p_produto->>'descricao'),0) > 2000 or
     jsonb_typeof(p_produto->'ativo') is distinct from 'boolean' or
     jsonb_typeof(p_produto->'destaque') is distinct from 'boolean' then raise exception 'Revise os campos do anúncio'; end if;
  select conteudo, updated_at into catalogo, versao from public.datasets
    where chave = 'UNISEGPUB_PRODUTOS' for update;
  if not found then raise exception 'Catálogo não encontrado'; end if;
  if versao is distinct from p_versao then
    raise exception 'O catálogo mudou. Atualize a página antes de salvar novamente.' using errcode='40001';
  end if;
  antigos := coalesce(catalogo->p_categoria,'[]'::jsonb);
  select item, (ordem-1)::integer into anterior,posicao
    from jsonb_array_elements(antigos) with ordinality itens(item,ordem)
    where item->>'href' = p_href_original limit 1;
  if coalesce(p_href_original,'') <> '' and anterior is null then raise exception 'Anúncio não encontrado'; end if;
  if exists(select 1 from jsonb_array_elements(antigos) item
    where item->>'href'=destino and item->>'href' is distinct from p_href_original) then
    raise exception 'Já existe um anúncio com esse link nesta categoria';
  end if;
  novo := coalesce(anterior, jsonb_build_object(
    'classes',jsonb_build_array('produto-card'), 'filtro',jsonb_build_object('geral',true))) ||
    jsonb_build_object('titulo',trim(p_produto->>'titulo'),'descricao',p_produto->>'descricao',
      'href',destino,'ativo',p_produto->'ativo','destaque',p_produto->'destaque',
      'target','_blank','rel','sponsored noopener noreferrer','cta','Conhecer o produto',
      'ariaLabel','Conhecer '||trim(p_produto->>'titulo'),
      'avisoAfiliado','Link de afiliado: podemos receber comissão pela compra.',
      'imagem',jsonb_build_object('src',imagem,'alt',trim(p_produto->>'titulo'),'loading','lazy','decoding','async','wrapClasses',jsonb_build_array('produto-imagem')));
  if anterior is null then antigos := jsonb_build_array(novo)||antigos;
  else antigos := jsonb_set(antigos,array[posicao::text],novo); end if;
  insert into public.produtos_comissoes(categoria,href,preco,comissao,percentual,tipo,conferido_em,fonte,observacoes)
  values(p_categoria,destino,nullif(p_comissao->>'preco','')::numeric,nullif(p_comissao->>'comissao','')::numeric,
    nullif(p_comissao->>'percentual','')::numeric,coalesce(p_comissao->>'tipo','maxima'),
    nullif(p_comissao->>'conferido_em','')::date,left(coalesce(p_comissao->>'fonte',''),1000),left(coalesce(p_comissao->>'observacoes',''),2000))
  on conflict (categoria,href) do update set preco=excluded.preco,comissao=excluded.comissao,
    percentual=excluded.percentual,tipo=excluded.tipo,conferido_em=excluded.conferido_em,
    fonte=excluded.fonte,observacoes=excluded.observacoes,updated_at=now();
  -- Guarda o histórico de links anteriores na tabela privada; não apaga dados.
  update public.datasets set conteudo=jsonb_set(catalogo,array[p_categoria],antigos),updated_at=clock_timestamp()
    where chave='UNISEGPUB_PRODUTOS' returning updated_at into versao;
  return versao;
end;
$$;
revoke all on function public.admin_salvar_produto(text,text,jsonb,jsonb,timestamptz) from public,anon;
grant execute on function public.admin_salvar_produto(text,text,jsonb,jsonb,timestamptz) to authenticated;
insert into public.produtos_comissoes(categoria,href,preco,comissao,percentual,tipo,conferido_em,fonte,observacoes)
values ('cursosGerais','https://go.hotmart.com/Q108086691J?dp=1',298,134,50,'maxima','2026-10-18',
 'Mercado de Afiliação Hotmart — produto 1098241',
 'Até R$ 134 anunciados; 50%, último clique, cookie de 60 dias. Descontos podem reduzir a comissão.')
on conflict do nothing;
update public.datasets set conteudo=jsonb_set(conteudo,'{cursosGerais}',
 (select jsonb_agg(case when item->>'id'='hotmart-1098241' then item||'{"destaque":true}'::jsonb else item end order by ordem)
 from jsonb_array_elements(conteudo->'cursosGerais') with ordinality itens(item,ordem))),updated_at=now()
where chave='UNISEGPUB_PRODUTOS';
notify pgrst, 'reload schema';
