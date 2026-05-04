# Piloto de redução de duplicação HTML — `anuncie.html`

## Escopo

Esta etapa reduz duplicação de HTML em **uma única página piloto**: `anuncie.html`.

Não foram migradas as demais páginas do projeto.

## Estratégia

Foi adotada uma geração build-time simples:

- `src/pages/anuncie.template.html` virou a fonte editável da página piloto.
- `partials/pilot/anuncie/*.html` guarda blocos repetitivos extraídos da página.
- `scripts/build-pilot-anuncie.py` recompõe `anuncie.html` a partir do template.

A página final continua sendo um HTML estático comum, compatível com GitHub Pages.

## Blocos extraídos

- `head.html`
- `app-quick-controls.html`
- `estrutura-site-comment.html`
- `site-header.html`
- `menu-chrome.html`
- `sidebar-parceiros.html`
- `page-section-markers.html`
- `footer-ad.html`
- `footer.html`
- `visual-comments.html`
- `scripts.html`

## Compatibilidade

O script de validação confirma que o template gera um `anuncie.html` idêntico ao arquivo público atual.

Comando:

```bash
python scripts/build-pilot-anuncie.py --check
```

## Fora do escopo

Não foi alterado:

- layout;
- CSS;
- JavaScript funcional;
- navegação das demais páginas;
- arquitetura global;
- `fetch`, módulos ES ou bundlers.
