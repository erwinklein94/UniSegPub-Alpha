# Campanha de visitas à página inicial

Configuração e textos: [campanha-google-ads-home-100.json](campanha-google-ads-home-100.json).

## Situação em 20/10/2026

A campanha foi **publicada e programada para 21 a 27/10/2026**, com orçamento total de **R$100**. O painel mostra status **Pendente**, por ainda não ter chegado a data de início. No encerramento da configuração, o gasto e os cliques eram zero. Publicação não significa que os anúncios já estejam sendo exibidos ou tenham aprovação editorial definitiva.

A configuração salva usa Pesquisa, Maximizar cliques, limite de CPC de R$1, português e pessoas presentes no Brasil. Parceiros de pesquisa, Display, AI Max, personalização automática de texto e expansão da URL final foram desativados. O cabeçalho do painel confirmou **R$100 (total)** e as datas de início e término. Não aumentar o valor nem prolongar o teste sem nova solicitação.

As tarefas obrigatórias de identificação do anunciante, documentos e declaração sobre anúncios na UE constam como concluídas. O aviso de conta pausada desapareceu após a conclusão. O anunciante público confirmado pelo titular é ERWIN KLEIN. A pergunta adicional sobre quem paga é opcional e ficou sem alteração. A campanha antiga de reparos permanece pausada.

## Anúncios e segmentação

O teste concentra a veiculação no grupo **Salários e carreiras**, com nove palavras em correspondência de frase ou exata, um anúncio responsivo com dez títulos e quatro descrições, e destino na página inicial. As 14 palavras negativas do JSON foram salvas em correspondência de frase no nível da campanha. Não foram adicionados telefone, sitelinks ou recursos do negócio antigo.

O grupo **Concursos e instituições** foi criado com oito palavras, mas está **pausado**. Sua cópia específica no JSON é uma proposta, não uma descrição do anúncio atualmente salvo, que herdou a cópia de salários. A edição foi bloqueada pela exigência de telefone associada à meta antiga de chamadas. A conta exige ao menos uma meta existente; não foi criada uma conversão falsa nem uma ligação para contornar essa exigência. A campanha usa **Maximizar cliques**, portanto essa meta de relatórios não determina seus lances. O teste não depende do grupo pausado.

Quando houver dados de veiculação, avaliar cliques, CPC, pesquisas acionadas e visitas no GA4. Não há garantia de volume de cliques ou consumo integral do orçamento.

## Medição no site

O Google Ads atrai visitantes e informa cliques e custo. O GA4 mede as visitas e o uso do site após o consentimento para análise. Os totais das duas ferramentas podem diferir por consentimento, bloqueadores e diferenças de definição entre clique e sessão.

A URL final do anúncio em veiculação programada usa `utm_source=google`, `utm_medium=cpc`, `utm_campaign=usp_home_100_202610` e `utm_content=salarios`. O rótulo `concursos` está preparado para uma futura edição do grupo pausado. A integração preserva a URL limpa no GA4 e transmite somente esses rótulos controlados. Não envia a query completa, identificadores de clique ou valores arbitrários recebidos pela URL. A mudança não cria eventos de compra ou receita.

Validação: `node --test scripts/test-analytics.mjs scripts/test-adsense-consent.mjs` — 14 testes aprovados.

## Referências

- [Orçamento total da campanha](https://support.google.com/google-ads/answer/10486938?hl=pt-BR)
- [Maximizar cliques e limite de CPC](https://support.google.com/google-ads/answer/6268626?hl=pt-BR)
- [Campos de configuração de campanha no GA4](https://developers.google.com/analytics/devguides/collection/ga4/reference/config)
