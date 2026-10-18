# Integração Hotmart — 18/10/2026

## Estado real

Projeto do site migrado por solicitação do proprietário para **luggjibketdxztvsgzgo**, na conta sites.erwin.3@gmail.com. As tabelas Hotmart e a autorização do administrador já existem. A Edge Function e os segredos Hotmart ainda precisam ser publicados/configurados; nenhum webhook foi registrado. O painel mantém conexão pendente, sem transformar ausência de integração em receita zero.

O projeto novo está acessível pelo navegador. As conexões MCP/CLI anteriores ainda pertencem a outras contas e não devem ser usadas para implantar em outro projeto. O admin do site continua sendo erwinklein1994@gmail.com, já cadastrado e confirmado no Auth do projeto novo.

## Arquitetura

- Supabase Edge Function `hotmart-integration`: POST `/webhook`, GET `/status`, `/resumo`, `/comissoes`.
- Webhook exige Hottok válido no header X-HOTMART-HOTTOK e corpo v2; limite real de 256 KiB, timeout das consultas externas e comparação por hash. Eventos não suportados são ignorados com sucesso. Banco indisponível retorna falha para permitir reenvio da Hotmart.
- O gateway JWT é desabilitado apenas nessa função porque a Hotmart não envia JWT Supabase. As rotas de admin validam a sessão no Auth e a autorização por UUID no banco; não dependem de dados de user_metadata nem da proteção visual da página.
- O banco grava apenas identificador de evento e transação, produto, status, datas e comissão de afiliado/moeda. Não grava payload bruto, comprador, e-mail, documento, produtor ou Hottok. A Hotmart pode enviar esses campos ao endpoint, mas o código os descarta antes da persistência e não imprime payloads.
- Chave primária de evento torna reenvios idempotentes. Leitura usa o último estado de cada transação, com desempate conservador de estornos. Aprovação anterior é preservada para o filtro em Brasília mesmo quando chega reembolso posterior sem approved_date.
- Comissão ausente, inválida ou ambígua é desconhecida, não é o preço do produto. Reembolso, chargeback e reembolso parcial ficam fora do total de comissão aprovada. Não soma moedas distintas. Não representa saldo para saque nem receita líquida efetiva.
- O resumo é de eventos observados após ativação, não um espelho de todo o histórico Hotmart. Não atribui automaticamente vendas ao site. Lê todos os lotes até 50.000 eventos; se atingir esse teto, recusa o resumo, sem mostrar totais incompletos. Quando crescer, substituir leitura por agregação SQL com mesma política de acesso.
- A API opcional consulta comissões `commission_as=AFFILIATE`, por período e cursor. O filtro padrão da Hotmart retorna APPROVED/COMPLETE. Token é solicitado no servidor e fica apenas em memória; cliente recebe só produto/transação/comissão e cursor. Acesso 403 é informado explicitamente. Não promete catálogo, afiliação ou alteração de produtos por essa API.

## Ativação — somente após confirmar a conta correta

1. Acessar https://supabase.com/dashboard/project/luggjibketdxztvsgzgo com a conta proprietária ou membro autorizado. Confirmar nome e referência do projeto. A troca de projeto foi autorizada pelo proprietário em 18/10/2026.
2. Já aplicada `supabase/migrations/20261018172428_hotmart_integracao.sql`. Arquivo foi gerado pela CLI oficial 2.121.0 (`migration new`). Executar advisors e conferir que o UUID do administrador correto consta em `hotmart_admins`. O usuário precisa existir e ter email confirmado antes da migração; se não existir, cadastrar a autorização no servidor depois, nunca abrir políticas públicas.
3. Publicar apenas esta função, após revisar o alvo:

```powershell
supabase functions deploy hotmart-integration --project-ref luggjibketdxztvsgzgo --use-api
```

4. Obter o Hottok da conta Hotmart e configurá-lo exclusivamente nos Secrets do projeto como HOTMART_HOTTOK. Opcionalmente cadastrar HOTMART_CLIENT_ID, HOTMART_CLIENT_SECRET e HOTMART_BASIC. Não enviar segredos pelo chat, não imprimir em logs, não inseri-los no código público. `.env` e arquivos locais equivalentes estão no .gitignore; `.env.example` contém somente nomes vazios.
5. Antes de criar credencial/persistir novo acesso ou ativar o envio Hotmart, obter confirmação da conexão específica: conta Hotmart -> este projeto Supabase, para eventos financeiros. Informar que o payload recebido pode conter dados do comprador, descartados pelo handler. Não fazer gravações em projetos de outras finalidades.
6. No admin autenticado, conferir `/status` e testar rejeição a POST sem Hottok. Em conta não autorizada, testar negação. Sem validação do servidor, não cadastrar o endpoint na Hotmart.
7. Cadastrar Webhook v2 com nome `Universo Seg Pub — vendas e comissões`, somente para produtos escolhidos/afiliados disponíveis na conta. URL:

```
https://luggjibketdxztvsgzgo.supabase.co/functions/v1/hotmart-integration/webhook
```

8. Selecionar eventos suportados aplicáveis: compra aprovada/completa, boleto impresso, cancelamento, expiração, atraso, reembolso e chargeback; conferir rótulos oferecidos na conta. Não selecionar todos os produtos automaticamente. Se a Hotmart oferecer teste com dados sintéticos, verificar recebimento e remover apenas a transação de teste antes de usar o painel para análise real, sem excluir transações reais.
9. Confirmar idempotência de reenvio, campos minimizados, status de aprovação/estorno e atualização do período no painel. Consultar API opcional para verificar permissões reais da conta. Somente então considerar a integração ativa. Nenhuma destas etapas foi declarada concluída nesta preparação.

## Testes executados

- 24 testes Node de Hotmart, analytics e AdSense: normalização, PII descartada, comissão sem confusão com preço, ambiguidade, reembolsos fora da ordem e posteriores, moedas, limite/JSON, Hottok, duplicação, banco falhando, autenticação, autorização, origem, paginação, período e API filtrada como afiliado.
- Migração executada em PostgreSQL local descartável com PGlite 0.5.10 (pacote oficial npm, integridade SHA-512 conferida). Admin lê, outro usuário não lê, anon sem permissão; usuário não consegue se autorizar ou excluir eventos; duplicação de evento rejeitada. Produção e advisors remotos ainda pendentes do acesso.
- Chrome com sessões e vendas fictícias: pendente sem zeros falsos, dados conectados, moedas distintas, HTML externo neutralizado, consulta API, alteração de período, logout apaga valores; sem erros JavaScript, sem overflow em 320/390/768/1440. Captura de revisão em output/admin-review/hotmart-desktop.png (não versionada).

## Referências primárias

- Autenticação Hotmart: https://developers.hotmart.com/docs/pt-BR/start/app-auth/
- Webhook v2: https://developers.hotmart.com/docs/en/2.0.0/webhook/purchase-webhook/
- Comissões: https://developers.hotmart.com/docs/pt-BR/v1/sales/sales-commissions/
- Secrets: https://supabase.com/docs/guides/functions/secrets
- Autenticação de funções: https://supabase.com/docs/guides/functions/auth
- Configuração por função: https://supabase.com/docs/guides/functions/function-configuration
- Changelog revisado, incluindo mudança de TLS: https://supabase.com/changelog/cbc-tls-ciphers-deprecated (nenhum uso de TLS antigo no novo código).
