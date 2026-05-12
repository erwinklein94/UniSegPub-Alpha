# Relatório — Guia das instituições com novos artigos de SP

## Arquivos alterados

- `guia-instituicoes.html`
- `js/pages/guia-instituicoes.js`
- `docs/RELATORIO-GUIA-INSTITUICOES-ARTIGOS-SP-2026-05-11.md`

## O que foi feito

Foram adicionados à aba **Guia das instituições** três novos artigos completos, no mesmo modelo editorial do guia PMESP já existente:

1. **Guia Bombeiros SP 2026: salário, ingresso e carreira** (`data-guia-inst="bmsp"`)
2. **Guia PCSP 2026: salário, ingresso e carreira** (`data-guia-inst="pcsp"`)
3. **Guia Polícia Penal SP 2026: salário, ingresso e carreira** (`data-guia-inst="ppsp"`)

Os textos foram incorporados diretamente no HTML da página, dentro de cards grandes, mantendo o padrão visual do site.

## Filtro por instituição

O filtro da aba continua usando os campos de esfera e instituição. Ao selecionar uma instituição com artigo publicado, o JavaScript apenas oculta os demais artigos e mantém visível o artigo correspondente. A lista de fallback do `js/pages/guia-instituicoes.js` foi atualizada com PMESP, Bombeiros SP, PCSP e PPSP para preservar o funcionamento mesmo se alguma função global não estiver disponível.

## SEO e AdSense

- O conteúdo principal dos novos artigos foi deixado diretamente no HTML.
- Foram removidos blocos internos de anúncios e CTAs com link placeholder dos artigos importados, evitando links vazios ou anúncios duplicados dentro da aba.
- O JSON-LD da página foi atualizado com objetos `Article` para os novos guias.
- A meta description foi atualizada para refletir os novos artigos publicados.
- Não foram adicionadas mensagens técnicas visíveis ao usuário final sobre HTML, robôs, AdSense ou JavaScript.

## Observação

A página continua sendo uma página de coleção. Os artigos estão publicados dentro da aba `guia-instituicoes.html`, um abaixo do outro, e podem ser filtrados por instituição sem depender de carregamento dinâmico de conteúdo.
