# Relatório — AdSense em todas as páginas públicas

Data: 2026-05-12

## Alterações aplicadas

- Adicionado o código automático do Google AdSense no `<head>` das páginas públicas que ainda não tinham o script:
  - `novidades/index.html`
  - `novidades/concurso-pmerj-2026-2-mil-vagas-soldado.html`
  - `novidades/concurso-pmmg-tjmg-retoma-oficial-saude-2026.html`
  - `novidades/decreto-policia-federal-2-mil-aprovados-2026.html`
- Criado `ads.txt` na raiz do site com o vendedor autorizado do Google AdSense:
  - `google.com, pub-4280112532471663, DIRECT, f08c47fec0942fa0`

## Observação importante

Os blocos manuais de anúncios nos artigos ainda usam `SUBSTITUIR_SLOT_ID_1`, `SUBSTITUIR_SLOT_ID_2` e `SUBSTITUIR_SLOT_ID_3`.
Esses espaços só devem ser usados quando forem substituídos por IDs reais de unidades de anúncio criadas no Google AdSense.
Enquanto isso, a monetização principal deve ser feita pelos Anúncios automáticos no painel do AdSense.
