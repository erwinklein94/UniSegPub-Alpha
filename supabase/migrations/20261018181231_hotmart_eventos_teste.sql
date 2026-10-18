-- Preserva a trilha de testes sem apresentá-la como venda/estorno real.
alter table public.hotmart_eventos add column teste boolean not null default false;
update public.hotmart_eventos set teste = true
where evento_id in (
  '3849ec37-cc17-4154-b5f5-d98eb6221c5d',
  'd39a3660-3aec-4eb6-98b0-64dd3a9a26a9',
  'f40232a6-83bf-44f5-9b61-9d44e8361c94',
  'b661413d-37bf-4230-82ba-0ad2a89efe8d',
  'f7683ba3-82b3-4448-9fad-1e35300b4414',
  'cafc9b1d-4965-4f06-a8d1-2159a7edb3a9',
  '68d9ea1d-767b-47ab-8ca4-d4a1e88ba5ad'
);
