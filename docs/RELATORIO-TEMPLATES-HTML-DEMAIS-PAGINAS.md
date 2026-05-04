# Relatório — Expansão dos templates HTML página por página

## Objetivo

Aplicar o padrão validado em `anuncie.html` às demais páginas públicas, mantendo o site como MPA estático.

## Escopo

Foram criados templates e partials para estas páginas:

- `index.html`
- `remuneracao.html`
- `direitos.html`
- `poderes-deveres.html`
- `brasoes.html`
- `concursos.html`
- `comparar-carreiras.html`
- `acoes-judiciais.html`
- `associacoes-sindicatos.html`
- `produtos.html`
- `parceiros.html`
- `404.html`

O piloto de `anuncie.html` foi preservado.

## Padrão aplicado

Para cada página com `<main>`, foram criados:

- `src/pages/<pagina>.template.html`
- `partials/pages/<pagina>/head.html`
- `partials/pages/<pagina>/pre-main.html`
- `partials/pages/<pagina>/main.html`
- `partials/pages/<pagina>/post-main.html`

Para páginas sem `<main>`, como redirecionamentos simples, foi usado:

- `partials/pages/<pagina>/body.html`

## Script criado

- `scripts/build-static-pages.py`

Comandos:

```bash
python scripts/build-static-pages.py --check
python scripts/build-static-pages.py --check index
python scripts/build-static-pages.py --write index
```

## Garantias desta etapa

- O HTML público continua estático.
- Nenhuma página pública foi alterada visualmente.
- Não houve mudança de CSS.
- Não houve mudança de JavaScript funcional.
- Não houve migração para framework.
- Não houve uso de módulos ES, `fetch` ou build complexo.
- Cada template foi validado contra seu HTML público atual.
