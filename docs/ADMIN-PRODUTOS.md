# Produtos e comissões no admin

Página: `/admin-produtos.html`, acessível pela aba “Produtos e comissões”
no painel atual. Usa o mesmo login e a mesma sessão do administrador.

## Operação

- Lista todas as cinco categorias do catálogo Supabase, inclusive anúncios
  pausados e links bloqueados. Filtros por categoria, situação, nome ou link.
- Permite cadastrar, editar e pausar anúncios sem apagar o cadastro. Edita
  nome, descrição, imagem, Hotlink e prioridade. Categorias e filtros
  institucionais existentes são preservados; novos anúncios têm escopo geral.
- Comissão, preço de referência, percentual, natureza do valor, fonte, data
  de conferência e observações ficam em `produtos_comissoes`, com RLS restrita
  aos usuários de `hotmart_admins`. Não são incorporados ao catálogo público.
- Ganho informado em reais tem prioridade. Sem ele, preço × percentual
  aparece como estimativa. Campos vazios significam “não informado”, e zero
  significa R$ 0. A projeção por quantidade de vendas é por produto,
  independente das vendas recebidas no painel Hotmart.
- Apenas Hiper-Estudo começa com valores conferidos: preço de referência
  R$ 298, comissão anunciada de até R$ 134 e percentual de 50%, em 18/10/2026.
  O percentual não substitui o teto informado e não garante ganho mínimo.
  Outros produtos aguardam conferência; não foram inventadas comissões.

## Publicidade no portal

Até três espaços entre os conteúdos de início, notícias, remuneração,
concursos, brasões, comparação, guia, direitos, ações, associações, base legal
e poderes/deveres. A seleção prioriza um produto destacado e mistura cursos,
livros e equipamentos, com variação por página e deduplicação. Rótulo de
publicidade, aviso de afiliado, imagens e links patrocinados. Não há popup.
Hotlinks preservam o código do afiliado e recebem SRC por página/posição.

Anúncios com `ativo: false` não aparecem na vitrine, nos espaços novos ou
nas laterais legadas. Links previamente confirmados como inválidos continuam
bloqueados. Alterações chegam quando o visitante abre/recarrega uma página:
o cache acelera a primeira renderização e é revalidado no servidor em seguida.
O JSON local de livros é apenas fallback quando a categoria não existe no banco.

## Banco e validação

Migração `20261018184933_admin_produtos.sql`, aplicada no projeto
`luggjibketdxztvsgzgo` pelo SQL Editor autenticado. Não executar `db push`
sem reconciliar o histórico das migrações anteriormente aplicadas pelo painel.

`admin_salvar_produto` verifica o usuário no servidor, valida categoria,
link HTTPS, imagem e campos; salva anúncio e comissão em uma transação.
Bloqueio de linha e versão do catálogo impedem sobrescrever uma edição recente
feita em outra aba. A comissão do link anterior permanece registrada ao trocar
o link; não há exclusão irreversível no gerenciador.

Verificações: `node --test scripts/test-admin-produtos.mjs
scripts/test-campanhas-hotmart.mjs scripts/test-produtos-disponibilidade.mjs`.
`scripts/test-admin-produtos.sql` testa salvamento, pausa, conflito de versão,
RLS e bloqueio de anônimo em transação revertida no projeto indicado.
Interface testada em Chrome local com catálogo real e gravações simuladas;
12 páginas públicas verificadas em desktop/celular, com três anúncios e SRC.

Referência de funções e permissões:
https://supabase.com/docs/guides/database/functions

## Simulação mensal

Cada produto tem uma quantidade independente de vendas/mês, iniciada em zero.
O total mensal soma todas as linhas simuladas, inclusive as escondidas pelos
filtros. Vendas sem comissão conhecida são contadas e explicitamente excluídas
do total financeiro. Quantidades inválidas não entram na soma. Há aplicação
em lote aos resultados filtrados e botão para zerar. As quantidades ficam na
sessão do navegador; não criam vendas reais nem alteram dados da Hotmart.
