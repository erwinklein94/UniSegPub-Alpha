# Relatório — limpeza de abas removidas

Data: 2026-05-15

## Alterações aplicadas

- Removidas duas páginas inteiras do portal e seus links de navegação.
- Removidos scripts, partials e CSS exclusivos dessas páginas.
- Removidas rotas antigas do `sitemap.xml`.
- Removidos cadastros genéricos que não fazem mais parte do escopo editorial.
- Removidas chamadas de cabeçalho que listavam a categoria excluída junto das forças estaduais e federais.
- Ajustados scripts globais para não tentar inicializar páginas excluídas.

## Validação esperada

- O menu lateral deve exibir apenas as seções mantidas do portal.
- URLs antigas não ficam anunciadas no sitemap.
- O seletor institucional deve exibir apenas as instituições mantidas.
- O site não deve carregar JS de páginas removidas.
