# Migração do Supabase — 18/10/2026

Destino autorizado: `luggjibketdxztvsgzgo`, projeto Universo Segurança Publica,
organização Planejador-Operacional-Fiscalização-Qualidade, conta proprietária
`sites.erwin.3@gmail.com`. Origem: `yilpmghvcvfceowwuopc`.

## Conteúdo migrado e conferido

| Tabela | Registros |
| --- | ---: |
| instituicoes | 110 |
| concursos | 110 |
| remuneracoes | 110 |
| remuneracao_linhas | 1394 |
| acoes_judiciais | 110 |
| datasets | 132 |
| cards_estaticos | 260 |

A leitura REST paginada do destino foi comparada integralmente com a origem:
todos os campos, incluindo JSON, HTML, identificadores e datas, são idênticos.
Os arquivos temporários de transferência não foram versionados.
Foi ajustada a sequência dos identificadores de linhas salariais para o maior ID importado.

## Acesso e segurança

- Admin existente e confirmado no novo Auth: `erwinklein1994@gmail.com`.
  A senha desse usuário não foi lida, recuperada nem alterada. O login usa a
  senha cadastrada pelo proprietário nesse projeto; igualdade com a senha antiga
  depende do cadastro que ele realizou. A sessão autenticada no admin do novo
  projeto foi conferida no navegador e consultou a integração com sucesso.
- Todas as dez tabelas têm RLS. Conteúdo público permite leitura; alterações
  dependem do servidor. `acessos` permite inserir visitas, mas somente o UUID
  autorizado em `hotmart_admins` pode consultar os dados de audiência.
- `acessos`, `hotmart_admins` e `hotmart_eventos` rejeitaram leitura anônima por REST (401).
- Security Advisor: zero erros, um aviso de proteção contra senhas vazadas
  desativada no Auth. A configuração de senhas não foi alterada.
- Cache de dados e sessão administrativa receberam identificadores específicos
  do novo projeto. Scripts nas páginas e nos respectivos partials têm versão nova.

## Limites e próximas operações

O histórico privado de acessos e as sessões do projeto antigo não foram
migrados: não há acesso administrativo à origem. O projeto antigo não foi
excluído. A contagem do destino começa depois da publicação do site atualizado.

A integração Hotmart foi ativada após a migração: função publicada, webhook
ativo, sete testes oficiais com HTTP 200 e consulta de comissões pela API
validada no admin. Detalhes em INTEGRACAO-HOTMART.md.

As migrações foram executadas pelo SQL Editor do navegador, com confirmação
do proprietário. Isso não registra automaticamente o histórico da CLI. Antes
de usar `db push`, conectar CLI/MCP à conta correta, conferir o schema e
reconciliar o histórico das migrações já aplicadas; não reaplicá-las cegamente.

Validação adicional: importação completa em PostgreSQL local (PGlite), acesso
do admin permitido, outro usuário sem leitura dos acessos e visitante sem
permissão de consulta privada. Os 24 testes de analytics, AdSense e Hotmart passaram.
