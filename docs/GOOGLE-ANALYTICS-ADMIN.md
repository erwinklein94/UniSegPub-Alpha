# Painel Google Analytics do admin

Estado em 20/10/2026: função `google-analytics` publicada no Supabase (versão 1); Google Analytics Data API habilitada no projeto `river-key-395310`; conta de serviço `unisegpub-analytics@river-key-395310.iam.gserviceaccount.com` criada. O acesso de Leitor à propriedade e os Secrets ainda precisam ser confirmados. A conta indicada pelo responsável para entrar no Supabase é `sites.erwin.3@gmail.com`. A chave privada não faz parte deste repositório.

A página `admin-google-analytics.html` usa a sessão existente do admin e consulta a função `google-analytics` somente ao clicar em **Atualizar dados**. Não armazena relatórios no navegador nem substitui os dados por exemplos quando a consulta falha.

## Ativação

1. No Google Cloud, selecione o projeto e habilite **Google Analytics Data API**.
2. Crie ou selecione uma conta de serviço. Não são necessários papéis administrativos no Google Cloud para ler o Analytics.
3. No Google Analytics, abra **Administrador → Gerenciamento de acesso à propriedade** da propriedade **534532275**. Adicione o e-mail da conta de serviço com papel **Leitor**.
4. Gere a chave JSON da conta de serviço e configure seu conteúdo completo como Secret `GOOGLE_SERVICE_ACCOUNT_JSON` nas Edge Functions do Supabase `luggjibketdxztvsgzgo`. Configure também `GA4_PROPERTY_ID=534532275`. Não coloque o JSON no repositório, em arquivos públicos ou no chat.
5. Publique os arquivos da função `supabase/functions/google-analytics/` com o nome `google-analytics`. A configuração `verify_jwt=false` é intencional: o handler valida o Bearer token no Supabase Auth e verifica a lista privada `hotmart_admins`, antes de qualquer chamada ao Google. Sem essa verificação o endpoint não deve ser publicado.
6. Publique os arquivos do site, incluindo a nova página e seus módulos e estilos. Entre no admin, abra **Google Analytics** e clique em **Atualizar dados**.

Criar uma chave e adicionar uma identidade ao Analytics são alterações de acesso persistente e devem ser aprovadas pelo responsável pela conta. O administrador precisa constar na lista `hotmart_admins`, já utilizada pela integração Hotmart. Não altere políticas dessa tabela para permitir acesso público.

## Validação

- Execute `npm run test:admin`.
- Uma chamada sem sessão deve retornar 401; um usuário fora da lista administrativa deve receber 403.
- Após configurar os Secrets, a consulta autenticada deve retornar `fonte: Google Analytics Data API`, propriedade `534532275`, horário e filtros da consulta.
- Compare o mesmo período/filtros com o painel do Google. Usuários ativos vêm do relatório agregado; não são somados entre dias.
- Clique novamente em Atualizar: outra consulta `batchRunReports` deve acontecer, mesmo quando o token OAuth ainda é válido.
- Teste dispositivo, país (`Brazil`), canal e página. Confirme o contexto dos resultados, os estados vazio e erro e a visualização móvel.

## Limites

O Google pode levar tempo para processar os eventos; atualizar consulta o relatório mais recente disponível, sem forçar o processamento do GA4. Datas seguem o fuso da propriedade. O gráfico inclui dias sem valores. São exibidas as primeiras 50 páginas, 20 canais e 20 países; os totais dos cartões vêm de consulta agregada independente. O relatório restringe os hosts ao domínio do portal. Avisos de limiares de privacidade, amostragem e agrupamento `(other)` são exibidos quando informados pelo Google.

Referências: [Data API](https://developers.google.com/analytics/devguides/reporting/data/v1/rest/v1beta/properties/batchRunReports), [configuração de acesso](https://developers.google.com/analytics/devguides/reporting/data/v1/quickstart), [autenticação das Edge Functions](https://supabase.com/docs/guides/functions/auth-legacy-jwt).
