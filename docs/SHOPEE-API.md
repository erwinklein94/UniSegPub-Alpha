# Acesso à API de Afiliados Shopee

## Atualização em 20/10/2026

A conta continua sem acesso à Open API: AppID e senha `--`, botão Aplicar desabilitado. Não foi encontrado plugin Shopee no diretório consultado. A integração automática da API não está ativa.

Foi acrescentado ao admin de produtos um fluxo assistido: atalhos para ofertas e geração oficial de links, importação de até 20 produtos por seleção e abertura no editor para revisão. Links de afiliado são preservados; importações abrem com publicação desmarcada e campos desconhecidos ficam vazios. Links já cadastrados abrem o anúncio existente, sem sobrescrever seus dados.

O assistente pode consultar os dados visíveis da conta pelo navegador, gerar o link com a ferramenta oficial e preparar um JSON com `titulo`, `href`, `imagem`, `fonte`, `conferido_em`, `categoria` e, quando conhecidos, `descricao`, `preco`, `percentual`, `comissao`. Valores numéricos usam ponto decimal. Categorias aceitas: `produtosFisicos` e `livrosEbooks`. A comissão para o site deve vir do canal externo/Redes sociais, não de Live/Vídeo. A seleção não deve conter cookies, credenciais, dados fiscais ou de pagamento. Nenhuma seleção é salva automaticamente.

O usuário autorizou pedir a liberação da API. Formulário oficial encontrado na Central de Ajuda do Afiliado: responder Sim, escolher outras dúvidas, tema cadastro/conta e cenário **Quero ativar a API**. O titular preencheu os dados necessários diretamente na Shopee. A página confirmou **Enviado com sucesso — A sua solicitação foi enviada com sucesso** em 20/10/2026. Nenhum protocolo apareceu nessa confirmação. O formulário informa prazo de até 3 dias úteis para retorno. A aprovação da API permanece pendente. Não registrar telefone ou ID no Git.

Validação: testes de importação e segurança, fluxo visual com dados de teste e geração real de link no portal oficial. A geração de link não publica anúncios no site.

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
