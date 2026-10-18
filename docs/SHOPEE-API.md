# Acesso à API de Afiliados Shopee

Verificação em 18/10/2026, na conta de afiliados já aberta no navegador.
O painel oficial `/open_api` informa que a conta ainda não possui acesso,
mostra AppID e senha como `--` e mantém “Aplicar” desabilitado. Nenhuma
credencial foi criada ou copiada. Integração automática ainda não está ativa.

## Próximo passo: liberação pela Shopee

O próprio painel orienta entrar em contato para solicitar acesso. O texto
de contato aparece sem link funcional nessa tela. Usar a Central de Ajuda
oficial ou o atendimento dentro da conta, solicitando a liberação abaixo.
Nenhuma mensagem de suporte foi enviada pelo agente.

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

Guardar AppID e Secret exclusivamente nos Secrets do Supabase do projeto
`luggjibketdxztvsgzgo`, nunca no HTML, JavaScript público, Git ou mensagens.
Implementar a consulta em função de servidor restrita ao administrador,
consultar ofertas por identificador e gravar apenas preço, comissão, fonte
e data em `produtos_comissoes`. Preservar o Hotlink já existente quando o
catálogo for atualizado. Testar a resposta real antes de ativar a sincronização.

A documentação oficial oferece consultas de ofertas de produtos, lojas e
Shopee, feed de produtos, links curtos e relatórios. A disponibilidade de
cada operação depende do acesso liberado à conta. Nada foi substituído
por coleta de cookies, tokens de sessão ou uma API não oficial.

Fontes oficiais verificadas no navegador:

- https://affiliate.shopee.com.br/open_api
- https://affiliate.shopee.com.br/open_api/home
- https://affiliate.shopee.com.br/open_api/document?type=overview
- https://help.shopee.com.br/portal?source=10
