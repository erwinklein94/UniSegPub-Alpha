# Otimização segura aplicada pelo ChatGPT

Alterações feitas sem mudar as regras de cálculo, textos informativos ou fluxos de navegação:

## Imagens WebP criadas
- Criadas 13 novas versões `.webp` para imagens que ainda estavam apenas em JPG/JPEG/PNG.
- Tamanho dessas imagens caiu de 13.86 MB para 2.50 MB, mantendo as originais como fallback.

  - `mochilacoban.jpeg` → `mochilacoban.webp`: 37.1 KB → 15.4 KB
  - `mochilaimpermeavel50l.jpeg` → `mochilaimpermeavel50l.webp`: 79.5 KB → 41.7 KB
  - `pcac.jpeg` → `pcac.webp`: 360.5 KB → 368.3 KB
  - `pcal.png` → `pcal.webp`: 1869.4 KB → 215.2 KB
  - `pcam.png` → `pcam.webp`: 2308.6 KB → 314.1 KB
  - `pmac.jpeg` → `pmac.webp`: 211.8 KB → 200.0 KB
  - `pmal.png` → `pmal.webp`: 1813.2 KB → 191.3 KB
  - `pmam.png` → `pmam.webp`: 2347.1 KB → 267.0 KB
  - `ppac.jpeg` → `ppac.webp`: 264.4 KB → 261.5 KB
  - `ppal.png` → `ppal.webp`: 1995.9 KB → 187.7 KB
  - `ppam.png` → `ppam.webp`: 2693.8 KB → 279.2 KB
  - `ppsp.jpeg` → `ppsp.webp`: 209.2 KB → 223.7 KB

  - `pprs.jpeg` → `pprs.webp`: 64.0 KB → 105.6 KB (arquivo original parece truncado; mantido fallback)

## HTML/CSS
- Referências locais foram trocadas para `.webp` quando já existia uma versão WebP correspondente.
- Imagens remotas receberam `loading="lazy"`, `decoding="async"` e `referrerpolicy="no-referrer"`.
- Logo principal recebeu `fetchpriority="high"` e dimensões básicas para reduzir salto visual.
- Adicionados `preconnect` para Google Fonts e Google Tag Manager.
- Em telas menores, `background-attachment: fixed` foi desativado para reduzir travamentos de rolagem no celular.
- Adicionado suporte a `prefers-reduced-motion` para usuários/dispositivos com menor tolerância a animações.

## Ainda recomendado para uma próxima etapa
- Separar `js/dist/app.bundle.js` em carregamento sob demanda por página/dados, porque hoje ele carrega todos os dados de remuneração, direitos, concursos e cabeçalho de uma vez.
- Transformar os objetos grandes de dados em JSON carregado apenas quando a aba/instituição for aberta.
- Remover CSS não usado com uma ferramenta de purge depois de validar todas as telas.