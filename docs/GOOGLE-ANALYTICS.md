# Google Analytics do portal

Configuração autorizada em 18/10/2026 na conta `erwinklein1994@gmail.com`.

- Conta Analytics: Simulado soldo sp (`392605521`).
- Propriedade: Universo Segurança Pública (`534532275`; antes “Erwin Klein”).
- Fluxo Web: Universo Segurança Pública — site (`16155225456`).
- Domínio: `https://universosegpub.com.br`.
- ID de medição: `G-M2ZJSB081C` (identificador público).
- Fuso dos relatórios: America/Sao_Paulo (Brasília); moeda: BRL.

A tag anterior `G-XHR4TCCF9D` foi substituída nos HTMLs, nos parciais e na
inicialização compartilhada `js/ui/head.js`. A versão do script foi atualizada
para evitar que o navegador use a configuração antiga em cache.

Esta coleta inicia um histórico novo. Os dados da propriedade anterior não
foram importados. A medição otimizada do novo fluxo está ativa, incluindo
visualizações, rolagens e cliques de saída; cliques não comprovam vendas.

O acesso de leitura ao Analytics foi autorizado para Windsor.ai, selecionando
somente a propriedade `534532275`. A propriedade de chamaochico.com.br ficou
desmarcada. Credenciais OAuth são administradas pelo Google e pelo Windsor;
nenhuma chave ou token deve ser incluído no repositório ou no JavaScript público.

A conexão Windsor permite consultar dados pela ferramenta quando ela estiver
disponível. Ela não altera a fonte dos indicadores atuais de `admin.html`,
que continuam sendo calculados sobre a tabela de acessos do próprio portal.
O simulador de AdSense continua sendo uma estimativa, não receita do Google.

O painel Windsor apresentou acesso de avaliação até 17/11/2026. Conferir as
condições vigentes antes de depender dessa conexão como fonte permanente.

Para validar a publicação, abrir uma página pública e conferir os eventos em
tempo real na propriedade `534532275`. Os relatórios históricos podem levar
mais tempo para processar. A ausência inicial de dados não deve ser tratada
como uma medição de audiência zero.

## Complemento da medição em 19/10/2026

`js/ui/analytics.js` centraliza a configuração do GA4 e registra `select_item`
nos links de produtos Hotmart e Shopee. O evento informa produto, categoria,
plataforma e lista (página + posição: vitrine, início, lateral, mobile ou
anúncio no conteúdo). Links e parâmetros de campanha não são alterados.
Os eventos não incluem preços, comissões, receita ou consultas da URL.

O módulo também é carregado nos artigos e nas páginas públicas com conteúdo
que não usam `head.js`. Ignora ambiente local e páginas do admin e evita
inicialização duplicada. Os artigos carregam a biblioteca do Google quando
ela ainda não está presente. Novos artigos devem incluir o mesmo módulo.

Foi removido o disparo automático de conversão Google Ads na abertura de
qualquer página. A configuração da tag Ads permanece; uma visita comum não
deve representar uma conversão. `select_item` mede interesse em um produto,
não uma compra: compras devem continuar sendo confirmadas pelo afiliador.

No Analytics, use **Relatórios → Visão geral em tempo real** para verificar os
eventos recentes e **Analisar → Explorações** para comparar **Nome do item**,
**Categoria do item**, **Nome da lista de itens** e **Itens clicados na lista**.
O clique de saída automático (`click`) e `select_item` descrevem o mesmo clique
com finalidades diferentes; não some os dois como cliques únicos ou vendas.
Os relatórios processados podem levar 24–48 horas para refletir os eventos.

Referência do evento: https://developers.google.com/analytics/devguides/collection/ga4/reference/events#select_item
