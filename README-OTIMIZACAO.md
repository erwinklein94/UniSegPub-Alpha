# Otimização aplicada

Projeto refatorado para separar melhor responsabilidades e melhorar o carregamento.

## Principais mudanças

- CSS reorganizado em:
  - `css/base/`
  - `css/layout/`
  - `css/components/`
  - `css/pages/`
  - `css/dist/main.min.css`

- JavaScript reorganizado em:
  - `js/data/`
  - `js/services/`
  - `js/ui/`
  - `js/pages/`
  - `js/dist/app.bundle.js`

- O `index.html` agora carrega:
  - `css/dist/main.min.css`
  - `js/dist/app.bundle.js`

- Eventos inline removidos do HTML:
  - `onclick`
  - `onchange`
  - `oninput`
  - `onkeypress`
  - `onsubmit`
  - `onerror`

- Eventos centralizados em:
  - `js/ui/event-bindings.js`

- Imagens locais convertidas para WebP:
  - 43 arquivos gerados em `img/*.webp`
  - redução estimada das imagens convertidas: 10.5% quando o navegador carrega WebP

- Caminhos de imagens locais corrigidos para `img/...`.
- Criados 10 placeholders visuais WebP para produtos/cursos que não tinham imagem no ZIP.

## Observação importante

Os arquivos antigos em `css/chunks/` e `js/chunks/` foram mantidos como referência/backup de compatibilidade.  
A versão ativa do site usa os arquivos organizados e os bundles em `dist/`.
