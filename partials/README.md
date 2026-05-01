# Partials HTML

O `index.html` foi mantido como arquivo estático principal para preservar SEO e compatibilidade com GitHub Pages.

Para uma futura etapa de componentização completa, a divisão recomendada é:

- `header.html`
- `sidebar.html`
- `pages/home.html`
- `pages/remuneracao.html`
- `pages/direitos.html`
- `pages/concursos.html`
- `pages/comparador.html`
- `pages/produtos.html`
- `pages/acoes.html`
- `pages/associacoes.html`
- `pages/parceiros.html`
- `footer.html`

A refatoração aplicada nesta versão removeu eventos inline, separou CSS/JS por responsabilidade e passou o carregamento de produção para bundles otimizados.
