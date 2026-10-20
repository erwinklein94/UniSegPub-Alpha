# Acesso à API de Afiliados Shopee

## Atualização em 20/10/2026

Critério de seleção solicitado pelo responsável: priorizar produtos ligados ao tema do portal (segurança pública, concursos, trabalho/plantão, equipamentos e preparação física) ou ofertas com volume de vendas muito alto comprovado no painel Shopee. Conferir a pertinência, avaliação, preço, comissão do canal externo e disponibilidade antes de incluir. Distinguir vendas mensais da busca de vendas acumuladas da página de detalhes. Não prometer vendas futuras. Conferir o catálogo antes de criar anúncios para evitar produtos repetidos com links diferentes.

Seleção publicada em 20/10/2026 no dataset público, preservando os anúncios anteriores: mochila ROMANTIC CROWN para notebook/viagem (oferta 22497773735, mais de 70 mil vendas acumuladas e avaliação 5 na conferência), fone Bluetooth para estudos (19899586753, mais de 100 mil e avaliação 4,8) e power bank para rotina (22499247158, mais de 10 mil e avaliação 4,6). Os três links foram gerados na ferramenta oficial da conta e confirmados no DOM da vitrine pública com `rel="sponsored noopener noreferrer"`. Preços, comissões e notas de conferência foram salvos apenas na tabela privada do admin. Os números de vendas são os exibidos pela Shopee no momento da seleção, não uma previsão de vendas pelo portal.

A conta continua sem acesso à Open API na conferência de 20/10/2026: AppID e senha `--`, botão Aplicar desabilitado. O código de integração está implementado, mas a operação com dados reais ainda depende da liberação e das credenciais. Não foi encontrado plugin Shopee no diretório consultado.

O retorno do atendimento, enviado pelo titular em imagem, informa que a liberação foi solicitada e ocorrerá em **até 5 dias úteis**, diretamente no portal do afiliado. Esse é o prazo informado para liberação; os 3 dias úteis citados pelo formulário eram para retorno do atendimento. A resposta não constitui liberação já concluída.

## Integração implementada

No admin de produtos, a seção Shopee oferece busca por palavra-chave, ordenação por vendas, relevância, preço ou comissão máxima, sugestões ligadas ao portal e paginação de 20 ofertas. “Buscar / atualizar ofertas” faz nova consulta; “Verificar conexão” só confirma sucesso após consultar a API real. “Selecionar e revisar” gera o link oficial e abre o editor com publicação desmarcada. Salvar continua sendo uma ação explícita do administrador.

A Edge Function `shopee-integration` possui três rotas: `GET /conexao`, `GET /ofertas?busca=mochila&ordem=2&pagina=1` e `POST /link` com `{ "produto": "https://shopee.com.br/product/SHOP_ID/ITEM_ID" }`. Todas validam a sessão pelo Supabase Auth e a lista privada `hotmart_admins`, inclusive na ausência das credenciais Shopee. O servidor admite apenas as operações documentadas `productOfferV2` e `generateShortLink`, assina o corpo exato com SHA256 e não expõe AppID, Secret ou assinatura no navegador. Erros GraphQL retornados com HTTP 200 também interrompem a operação. Não existe proxy para consultas ou endereços arbitrários.

As ofertas exibem vendas totais informadas (não vendas mensais) e comissão **máxima**, sem assumir a taxa do canal externo. Valores desconhecidos permanecem vazios. Essa classificação é preservada no editor. Ofertas existentes são identificadas pela fonte do produto ou pelo link já cadastrado, preservando a afiliação anterior. Links novos aceitam os domínios oficiais `s.shopee.com.br` e `shope.ee`. A seleção não salva nem altera preços/comissões do catálogo automaticamente.

Validação desta implementação: 34 testes de admin/backend passaram, incluindo assinatura, permissões, parâmetros, ausência de credenciais, respostas inválidas e erros GraphQL. A verificação visual local cobriu busca, ordenação, paginação, estados pendente/conectado, geração de link, revisão sem publicação, duplicação e tela móvel com respostas simuladas. Isso não substitui o teste real da Shopee após liberação.

Foi acrescentado ao admin de produtos um fluxo assistido: atalhos para ofertas e geração oficial de links, importação de até 20 produtos por seleção e abertura no editor para revisão. Links de afiliado são preservados; importações abrem com publicação desmarcada e campos desconhecidos ficam vazios. Links já cadastrados abrem o anúncio existente, sem sobrescrever seus dados.

O assistente pode consultar os dados visíveis da conta pelo navegador, gerar o link com a ferramenta oficial e preparar um JSON com `titulo`, `href`, `imagem`, `fonte`, `conferido_em`, `categoria` e, quando conhecidos, `descricao`, `preco`, `percentual`, `comissao`. Valores numéricos usam ponto decimal. Categorias aceitas: `produtosFisicos` e `livrosEbooks`. A comissão para o site deve vir do canal externo/Redes sociais, não de Live/Vídeo. A seleção não deve conter cookies, credenciais, dados fiscais ou de pagamento. Nenhuma seleção é salva automaticamente.

O usuário autorizou pedir a liberação da API. Formulário oficial encontrado na Central de Ajuda do Afiliado: responder Sim, escolher outras dúvidas, tema cadastro/conta e cenário **Quero ativar a API**. O titular preencheu os dados necessários diretamente na Shopee. A página confirmou **Enviado com sucesso — A sua solicitação foi enviada com sucesso** em 20/10/2026. Nenhum protocolo apareceu nessa confirmação. O formulário informa prazo de até 3 dias úteis para retorno. A aprovação da API permanece pendente. Não registrar telefone ou ID no Git.

Validação: testes de importação e segurança, fluxo visual com dados de teste e geração real de link no portal oficial. A geração de link não publica anúncios no site.

Verificação em 18/10/2026, na conta de afiliados já aberta no navegador.
O painel oficial `/open_api` informa que a conta ainda não possui acesso,
mostra AppID e senha como `--` e mantém “Aplicar” desabilitado. Nenhuma
credencial foi criada ou copiada. Integração automática ainda não está ativa.

## Histórico do pedido de liberação

O próprio painel orienta entrar em contato para solicitar acesso. O texto
de contato aparece sem link funcional nessa tela. Usar a Central de Ajuda
oficial ou o atendimento dentro da conta, solicitando a liberação abaixo.
O pedido foi posteriormente enviado com autorização do titular, conforme o registro acima.

Texto preparado para o pedido:

> Solicito acesso à Open API de Afiliados Shopee para integrar meu portal
> https://universosegpub.com.br. Já sou afiliado e divulgo produtos por links
> de afiliação no site. Quero consultar ofertas, preços, taxas de comissão e
> links de divulgação para manter meu catálogo atualizado. Pretendo usar
> as consultas de ofertas de produtos e, se permitido, seus identificadores
> e links curtos. Podem verificar minha elegibilidade e orientar a liberação
> de AppID e Secret?

O painel também aponta pendência nas informações de pagamento e fiscais.
Esses dados devem ser completados pelo titular dentro da Shopee. Não se
concluiu que essa pendência seja a causa da falta de acesso à API.

## Configuração após aprovação

Quando o portal exibir as credenciais, guardar o AppID como `SHOPEE_APP_ID`
e o Secret como `SHOPEE_APP_SECRET` nos Secrets do Supabase do projeto
`luggjibketdxztvsgzgo`, nunca no HTML, JavaScript público, Git ou mensagens.
A função de servidor já está publicada. Não há necessidade de nova migração.
No admin, usar “Verificar conexão”; confirmar uma busca real, ordenar e
paginar, gerar um link e revisar o destino. Só então salvar os anúncios
escolhidos. Conferir preço, comissão e disponibilidade na Shopee. A liberação
e esse teste real ainda não foram concluídos, pois não existem credenciais disponíveis.

A documentação oficial oferece consultas de ofertas de produtos, lojas e
Shopee, feed de produtos, links curtos e relatórios. A disponibilidade de
cada operação depende do acesso liberado à conta. Nada foi substituído
por coleta de cookies, tokens de sessão ou uma API não oficial.

Fontes oficiais verificadas no navegador:

- https://affiliate.shopee.com.br/open_api
- https://affiliate.shopee.com.br/open_api/home
- https://affiliate.shopee.com.br/open_api/document?type=overview
- https://affiliate.shopee.com.br/open_api/document?type=authentication
- https://affiliate.shopee.com.br/open_api/document?type=request_response
- https://affiliate.shopee.com.br/open_api/list?type=product_offer
- https://affiliate.shopee.com.br/open_api/list?type=short_link
- https://help.shopee.com.br/portal?source=10
