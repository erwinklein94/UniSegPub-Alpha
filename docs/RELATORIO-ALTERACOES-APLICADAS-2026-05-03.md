# Relatório de alterações aplicadas — 2026-05-03

Alterações aplicadas após revisão do anexo técnico.

## Limpeza estrutural

- Removidos diretórios legados não carregados pelas páginas públicas atuais:
  - `js/chunks/`
  - `css/chunks/`
  - `backup-original/`
- Removidos arquivos órfãos/duplicados:
  - `js/script-original.js`
  - `js/script.js`
  - `js/head.js`
  - `css/style-original.css`
  - `css/style.css`
- Movidos 25 arquivos `.md` da raiz para `docs/`.
- Mantido `js/dist/app.bundle.js` como artefato de compatibilidade e regenerado a partir dos módulos atuais, embora as páginas públicas carreguem os scripts individuais.

## Correções de JavaScript

- `js/ui/head.js`: removida a declaração duplicada de `gtag`; agora `dataLayer` e `gtag` são inicializados uma vez e os dois IDs são configurados na mesma sequência.
- `js/ui/navegacao-ui.js`: `mostrarToast()` agora retorna silenciosamente se `#toast` não existir e evita timers sobrepostos.
- `js/ui/navegacao-ui.js`: botões de tema agora renderizam emoji com `aria-hidden="true"`.
- `js/ui/event-bindings.js`: consolidados os listeners delegados de `change` em um único handler global.
- `js/ui/header-estados.js`: bandeiras criadas dinamicamente em botões de estado agora são decorativas (`alt=""`, `aria-hidden="true"`).

## SEO

- Canonical absoluto em todas as páginas públicas.
- Adicionados Open Graph e Twitter Card por página.
- Adicionado JSON-LD com `WebPage`, `WebSite` quando aplicável e `BreadcrumbList`.
- Criados `robots.txt` e `sitemap.xml`.
- Criada `404.html` para GitHub Pages.
- `parceiros.html`, que era idêntico a `anuncie.html`, virou redirecionamento leve com `noindex, follow` e canonical para `anuncie.html`.

## Acessibilidade

- Ícones da navegação inferior marcados como decorativos.
- Botão de fechar menu passou a usar `<span aria-hidden="true">✕</span>`.
- Imagens de bandeiras nos botões de estado marcadas como decorativas.
- Adicionado foco visível global em `css/app-soft-mobile.css` para navegação por teclado.

## Validação executada

- `node --check` nos arquivos JS de origem.
- `node --check js/dist/app.bundle.js`.
- Varredura simples de referências locais em HTML: 0 referências locais quebradas.
- Validação de parsing dos blocos JSON-LD gerados.
- Teste de integridade do ZIP final.

## Itens não aplicados nesta rodada

- Build real com Vite/esbuild/Rollup: exige mudança de fluxo de build/deploy e deve ser feito em uma etapa separada.
- Reotimização de imagens: depende de ferramenta de compressão e validação visual.
- Refatoração completa do seletor UF → ramo e partials de header/sidebar/footer: é boa, mas maior e mais arriscada para aplicar junto com uma limpeza estrutural.
