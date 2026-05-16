# Relatório — Integração PCDF (15/05/2026)

## Arquivos atualizados

- `brasoes.html`: adicionada opção PCDF ao filtro do Distrito Federal e card estático de brasão/história.
- `js/data/brasoes-historia-pcdf.js`: criado cadastro detalhado da história, símbolos, marcos, chefias e medalhas da PCDF.
- `js/ui/header-estados.js`: adicionada renderização especial para detalhamento de brasões quando houver dados ricos em `window.BRASOES_HISTORIA_DETALHES`.
- `concursos.html`: adicionada opção PCDF ao filtro e card completo com Delegado 2026, Administrativo 2024, pedidos de abertura e histórico recente.
- `js/data/concursos-data.js`: adicionados dados estruturados `CONCURSOS["pcdf"]`, com normalização para renderizadores existentes.
- `js/pages/concursos-comparador.js`: adicionada renderização complementar dos blocos estruturados da PCDF na consulta detalhada.
- `noticias.html`: adicionada notícia/resumo da PCDF, filtro PCDF e JSON-LD correspondente.
- `novidades/pcdf-delegado-inscricoes-abertas-2026.html`: adicionada página individual da notícia.
- `img/CIVIL/PCDF/pcdf-delegado-inscricoes-abertas.webp`: criado card visual 1200x675 para a notícia e metadados sociais.
- `sitemap.xml`: atualizadas datas de `brasoes.html`, `concursos.html`, `noticias.html` e adicionada a URL individual da notícia PCDF.

## Observações

- Mantidos os identificadores do projeto: `pcdf`, esfera `estadual`, ramo `Polícia Civil`, UF `DF`.
- O brasão existente `img/CIVIL/pcdf.webp` foi reaproveitado.
- O conteúdo permanece informativo e independente, com aviso de conferência em fonte oficial.
