# Primeira etapa de SEO — 20/10/2026

## Objetivo e alterações

Facilitar o rastreamento das páginas públicas e tornar seus títulos mais claros para quem pesquisa por salários e concursos. A análise considerou a propriedade de domínio já verificada no Google Search Console e os arquivos publicados. Dados privados de desempenho e capturas ficam no relatório local em `output/seo-2026-10-20/`.

- Títulos, descrições e metadados de compartilhamento de início, remuneração e concursos passaram a descrever os assuntos consultados, preservando as URLs canônicas.
- Os guias de PCMG, PMMG e PMERJ receberam títulos e descrições alinhados às pesquisas observadas, mantendo as tabelas, fontes e limites documentais. Os modelos de geração preservam os ajustes.
- A página de remuneração passou a oferecer links HTML diretos para esses três guias, a lista de artigos e a explicação de como comparar remuneração. Esses caminhos funcionam sem executar o JavaScript das tabelas.
- O gerador do sitemap continua incluindo somente páginas públicas canônicas, com exclusão de `noindex` e duplicadas. `lastmod` usa o histórico Git e mudanças de dados versionados relevantes, em vez de datas de cópia dos arquivos. Registros auxiliares de monitoramento não atualizam a data da consulta. Sem histórico verificável, a data é omitida.
- O `robots.txt` permite que o Google leia o `noindex` das páginas administrativas. Essa regra controla a presença nas buscas; a autenticação dos dados continua sendo feita no servidor.
- O tipo Open Graph dos índices e diretórios foi corrigido para `website`; os guias continuam identificados como artigos. A data de modificação dos artigos usa a revisão registrada ou a edição efetivamente realizada.

## Verificação reproduzível

Na raiz do projeto, com Python 3 disponível:

```sh
python scripts/generate-sitemap.py
python scripts/test-seo.py
python scripts/audit-seo.py --check
python scripts/generate-sitemap.py --check
```

`audit-seo.py --json` fornece os títulos, descrições e canônicos de cada página, além de verificar links locais, JSON-LD, páginas sem entrada estática e a correspondência entre sitemap e páginas públicas. O diagnóstico do código não informa quais páginas já foram indexadas: isso deve ser consultado no Search Console.

Também conferir os geradores de home, concursos e editorial com `--check`, o template de remuneração e os testes desses fluxos. A suíte antiga `test-basic-behaviors.py` contém contratos anteriores à remodelação do site: exige IDs legados e arquivos de dados que já estavam ausentes no commit anterior, e trata links absolutos de raiz como se fossem caminhos fora do projeto. Ela também apontou outras pendências antigas de templates e sintaxe no comparador legado. Essas falhas ficam registradas como limitação da verificação ampla; os testes atuais dos fluxos modificados são executados separadamente.

## Operação no Search Console

Usar a propriedade de domínio `universosegpub.com.br`. Enviar o sitemap preferido `https://universosegpub.com.br/sitemap.xml`, conferir seu processamento e inspecionar as URLs canônicas mais importantes. O cadastro antigo usava o endereço com `www`, que redireciona para o domínio preferido.

O relatório de indexação é atrasado em relação ao site. URLs alternativas com canonical adequada e páginas de redirecionamento podem ser exclusões esperadas. Os dez exemplos marcados como erro de redirecionamento foram verificados em HTTP nesta etapa: cada URL com `www` respondeu 301, seguida de 200 no domínio preferido. Solicitar revalidação dessa categoria, sem declarar antecipadamente que o Google concluiu a validação.

A solicitação foi enviada nesta etapa e a interface confirmou “Validação iniciado — Início: 20/10/2026”. O resultado final permanece em processamento pelo Google.

O sitemap sem `www` foi enviado e a interface confirmou **Processado**, com 31 páginas encontradas e leitura em 20/10/2026. Isso confirma o recebimento das URLs, não a indexação de todas elas. A inspeção individual do artigo da PCMG confirmou que essa URL já está no Google.

## Como avaliar o resultado

Comparar períodos de 28 dias completos no Search Console, por página e consulta: cliques, impressões, CTR e posição média. Priorizar os guias que já recebem impressões, lendo também a intenção das pesquisas. No Analytics, acompanhar sessões vindas de pesquisa orgânica, navegação para outras páginas e cliques em produtos. Solicitação de indexação e envio de sitemap não confirmam, por si só, indexação ou melhoria de posição.

Fontes oficiais consultadas:

- [Fundamentos de SEO](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=pt-br)
- [URLs canônicas](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=pt-br)
- [Sitemaps e uso correto de lastmod](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=pt-br)
- [Noindex e acesso pelo rastreador](https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=pt-br)
