# Relatório — Nova aba Notícias com conteúdo estático

Data: 11/05/2026

## Arquivos criados
- `noticias.html`
- `css/pages/noticias.css`
- `js/pages/noticias.js`
- `docs/RELATORIO-NOTICIAS-CONTEUDO-ESTATICO-2026-05-11.md`

## Arquivos alterados
- Páginas HTML principais: adicionado o link `Notícias` ao menu lateral principal.
- `index.html`: adicionados botão e card de acesso à nova aba Notícias.
- `sitemap.xml`: incluída a URL `https://universosegpub.com.br/noticias.html`.

## O que foi mudado
- Criada uma nova aba principal chamada `Notícias`.
- Inserida a notícia `Edital PMESP 2026: 2.700 vagas para Soldado, salário de R$ 6.200 e inscrições abertas` diretamente no HTML da página.
- O conteúdo foi adaptado do arquivo `noticia-edital-pmesp-2026.html` e integrado ao visual do restante do site.
- Foi removido o bloco interno de anúncio placeholder do artigo importado para evitar espaços vazios ou slots não configurados dentro do card.
- A imagem hero inexistente no pacote foi substituída pelo brasão/identidade visual disponível em `img/MILITAR/pmesp.webp`, evitando imagem quebrada.

## Paginação
- A página usa paginação visual com limite de 4 cards por página.
- Como há apenas uma notícia cadastrada neste momento, a navegação mostra apenas a página disponível.
- Quando novas notícias forem adicionadas como cards com `data-noticia-card`, o script passa a paginar automaticamente.

## Filtro
- O filtro permite selecionar esfera e instituição.
- O filtro não carrega conteúdo externo: apenas mostra ou oculta cards já existentes no HTML.
- A primeira notícia está cadastrada com `data-noticia-esfera="estadual"` e `data-noticia-inst="pmesp"`.

## Cuidados para SEO/AdSense
- A notícia fica escrita diretamente no HTML de `noticias.html`.
- A página possui título, descrição, canonical, Open Graph, Twitter Card, CollectionPage, BreadcrumbList e NewsArticle em JSON-LD.
- O texto visível ao usuário não menciona robôs, AdSense, JavaScript ou HTML.
- Links internos foram adicionados para Guia das instituições, Concursos, Remuneração e Direitos.
- Foi mantido aviso de independência e orientação para conferência em canais oficiais.
