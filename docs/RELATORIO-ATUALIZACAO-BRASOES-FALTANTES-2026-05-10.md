# Relatório — inclusão dos brasões faltantes (2026-05-10)

## Brasões adicionados
- PCAP → `img/CIVIL/pcap.webp`
- PCGO → `img/CIVIL/pcgo.webp`
- PCPA → `img/CIVIL/pcpa.webp`
- PCPI → `img/CIVIL/pcpi.webp`
- PMPA → `img/MILITAR/pmpa.webp`

## Ações executadas
1. Conversão dos arquivos JPEG fornecidos para WebP otimizado.
2. Redimensionamento com limite de 900 px no maior lado para reduzir peso.
3. Inclusão dos arquivos nas pastas corretas do projeto.
4. Atualização de `brasoes-mapeados-webp.json`.
5. Atualização de `js/ui/header-estados.js` para expor os novos caminhos.
6. Atualização do cache-bust das páginas HTML para forçar recarga do JS.

## Resultado esperado
Ao selecionar as instituições PCAP, PCGO, PCPA, PCPI e PMPA, o respectivo brasão deve aparecer normalmente no site.
