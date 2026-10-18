begin;
set local role authenticated;
set local request.jwt.claims = '{"sub":"86bd2000-8080-4ccf-bf90-8c99d1fca0f8","role":"authenticated"}';
do $$
declare d public.datasets; p jsonb; v timestamptz; nova timestamptz;
begin
 select * into d from public.datasets where chave='UNISEGPUB_PRODUTOS';
 p := d.conteudo->'cursosGerais'->0;
 if p->>'id' <> 'hotmart-1098241' then raise exception 'Curso de teste incorreto'; end if;
 nova := public.admin_salvar_produto('cursosGerais',p->>'href',jsonb_build_object('titulo',p->>'titulo','descricao',p->>'descricao','href',p->>'href','imagem',p->'imagem'->>'src','ativo',false,'destaque',true),'{"preco":298,"comissao":134,"percentual":50,"tipo":"maxima","conferido_em":"2026-10-18","fonte":"Teste transacional revertido"}'::jsonb,d.updated_at);
 if nova is null then raise exception 'Salvamento falhou'; end if;
 if (select conteudo->'cursosGerais'->0->>'ativo' from public.datasets where chave='UNISEGPUB_PRODUTOS') <> 'false' then raise exception 'Pausa não salva'; end if;
 begin
  perform public.admin_salvar_produto('cursosGerais',p->>'href',jsonb_build_object('titulo',p->>'titulo','descricao',p->>'descricao','href',p->>'href','imagem',p->'imagem'->>'src','ativo',true,'destaque',true),'{}'::jsonb,d.updated_at);
  raise exception 'Versão antiga sobrescreveu o catálogo';
 exception when serialization_failure then null;
 end;
 if not exists(select 1 from public.produtos_comissoes where href=p->>'href' and comissao=134) then raise exception 'Leitura privada falhou'; end if;
end $$;
set local request.jwt.claims = '{"sub":"00000000-0000-0000-0000-000000000001","role":"authenticated"}';
do $$ begin
 if (select count(*) from public.produtos_comissoes) <> 0 then raise exception 'RLS permitiu acesso indevido'; end if;
 begin perform public.admin_salvar_produto('cursosGerais','','{}','{}',now());
 raise exception 'Função permitiu acesso indevido'; exception when insufficient_privilege then null; end;
end $$;
set local role anon;
do $$ begin
 begin perform * from public.produtos_comissoes;
 raise exception 'Anônimo leu comissões'; exception when insufficient_privilege then null; end;
 begin perform public.admin_salvar_produto('cursosGerais','','{}','{}',now());
 raise exception 'Anônimo salvou produto'; exception when insufficient_privilege then null; end;
end $$;
rollback;
select 'OK: salvamento admin, RLS de não-admin e bloqueio anônimo; tudo revertido' as teste;
