# Campanha de visitas à página inicial

Configuração e textos: [campanha-google-ads-home-100.json](campanha-google-ads-home-100.json).

## Situação em 20/10/2026

A campanha está em preparação no Google Ads e **não foi publicada**. O primeiro anúncio foi preenchido, mas o Google bloqueou o salvamento e exigiu confirmação de identidade. É necessário concluir a confirmação no dispositivo do titular e repetir o salvamento. A conta também tem uma verificação do anunciante pendente, que impede a exibição dos anúncios. A campanha antiga de reparos foi pausada.

O rascunho foi configurado para Pesquisa, cliques, limite de CPC de R$1, português e pessoas presentes no Brasil. Parceiros de pesquisa, Display, AI Max, personalização automática de texto e expansão da URL final foram desativados. O tipo de orçamento total foi selecionado; **o valor de R$100 ainda precisa ser informado, salvo e conferido antes da publicação**. As datas planejadas são 21 a 27/10/2026; precisam ser revistas se a confirmação ocorrer depois do início.

## Conclusão no Ads

1. Confirmar a identidade na janela de autenticação do Google e salvar novamente o anúncio.
2. Finalizar os grupos de salários e concursos com os textos e as palavras do JSON. Conferir se os dados preenchidos antes do bloqueio foram preservados.
3. Usar **Orçamento total da campanha: R$100**, com data de término. O valor total não deve ser colocado em orçamento diário. Se a opção de total não estiver disponível, interromper a publicação até definir uma alternativa que respeite o limite autorizado.
4. Aplicar as palavras negativas em correspondência de frase, conferir recursos herdados da campanha antiga e evitar telefones ou destinos daquele negócio.
5. Conferir que todas as URLs finais levam à página inicial, com o grupo correto em `utm_content`. Não criar sitelinks para outros destinos nesta campanha.
6. Revisar os valores salvos e publicar. Concluir a verificação do anunciante para permitir a exibição. Não declarar a campanha ativa enquanto a conta permanecer pausada pelo Google.

## Medição no site

O Google Ads atrai visitantes e informa cliques e custo. O GA4 mede as visitas e o uso do site após o consentimento para análise. Os totais das duas ferramentas podem diferir por consentimento, bloqueadores e diferenças de definição entre clique e sessão.

As URLs finais usam `utm_source=google`, `utm_medium=cpc`, `utm_campaign=usp_home_100_202610` e `utm_content=salarios` ou `concursos`. A integração preserva a URL limpa no GA4 e transmite somente esses rótulos controlados. Não envia a query completa, identificadores de clique ou valores arbitrários recebidos pela URL. A mudança não cria eventos de compra ou receita.

Validação: `node --test scripts/test-analytics.mjs scripts/test-adsense-consent.mjs` — 14 testes aprovados.

## Referências

- [Orçamento total da campanha](https://support.google.com/google-ads/answer/10486938?hl=pt-BR)
- [Maximizar cliques e limite de CPC](https://support.google.com/google-ads/answer/6268626?hl=pt-BR)
- [Campos de configuração de campanha no GA4](https://developers.google.com/analytics/devguides/collection/ga4/reference/config)
