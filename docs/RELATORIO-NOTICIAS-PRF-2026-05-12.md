# Relatório — Inclusão de notícias PRF na aba Notícias (12/05/2026)

## Arquivos alterados

- `noticias.html`
- `js/pages/noticias.js`
- `novidades/concurso-prf-2026-pedido-mjsp-511-vagas.html`
- `novidades/decreto-prf-321-excedentes-2025.html`

## Conteúdo inserido

1. Card da notícia **Concurso PRF 2026: corporação envia novo pedido ao MJSP com 511 vagas previstas**.
2. Card da notícia **Decreto nº 12.765/2025 autoriza Polícia Rodoviária Federal a nomear 321 excedentes do concurso de 2021**.
3. Dois objetos `NewsArticle` no JSON-LD da página `noticias.html`.
4. Opção `PRF — Polícia Rodoviária Federal` no filtro de instituições.
5. Termos de PRF no meta `keywords`.
6. Redirecionamentos opcionais em `/novidades/`, no mesmo padrão dos redirecionamentos existentes.

## Ajuste técnico adicional

O arquivo `js/pages/noticias.js` recebeu suporte para abrir links com âncora (`#id-da-noticia`) mesmo quando a notícia estiver fora da página atual da paginação. Isso preserva o funcionamento dos redirecionamentos antigos e novos em `/novidades/`.

## Validação manual esperada

- Abrir `noticias.html`.
- Conferir se a notícia mais recente da PRF aparece no topo da lista.
- Filtrar por instituição `PRF — Polícia Rodoviária Federal`.
- Abrir `/novidades/concurso-prf-2026-pedido-mjsp-511-vagas.html`.
- Abrir `/novidades/decreto-prf-321-excedentes-2025.html`.
