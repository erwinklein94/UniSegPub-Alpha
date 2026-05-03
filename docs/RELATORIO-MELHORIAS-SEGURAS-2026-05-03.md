# Relatório — melhorias seguras pós-vitrine de produtos

Data: 03/05/2026

## Objetivo

Aplicar ajustes conservadores para fortalecer o código sem alterar conteúdo de produtos, links, imagens, títulos ou descrições da vitrine.

## Alterações aplicadas

1. **Remoção do bundle JS não utilizado**
   - Removido `js/dist/app.bundle.js`, que não era carregado pelos HTMLs públicos.
   - Atualizado o comentário de `js/main.js` para refletir que o projeto usa scripts individuais.

2. **Redução de HTML duplicado nos seletores de instituição**
   - Os 11 HTMLs principais passaram a manter apenas o `<select>` base com o placeholder.
   - A lista de instituições agora é montada em runtime por `js/ui/header-estados.js`, usando `HEADER_ESTADOS` e `HEADER_INSTITUICOES_INFO` como fonte única.
   - Isso evita divergência entre páginas e reduz a manutenção manual de centenas de `<option>` repetidos.

3. **Padronização complementar dos botões comerciais laterais**
   - Além da vitrine de `produtos.html`, os CTAs comerciais do menu lateral também foram padronizados para `Comprar por afiliado`.

## Validação executada

- `node --check` em todos os arquivos JavaScript.
- Conferência estática dos 11 HTMLs principais para garantir um `#instituicao_header` e um `#instituicao` por página.
- Conferência da aba `produtos.html`: 15 cards de produto e 15 CTAs principais com `Comprar por afiliado`.
- Verificação de que nenhum HTML público aponta para `js/dist/app.bundle.js`.

## Pontos mantidos de propósito

- Não foi aplicada refatoração agressiva de carregamento por página porque `header-estados.js` ainda depende de bases compartilhadas (`POLICIAS_PENAIS_INFO`, `REMUNERACAO_FONTES_OFICIAIS`, `ACOES_JUDICIAIS`, `ASSOCIACOES`, `CONCURSOS` etc.). Cortar scripts agora poderia quebrar inicialização do cabeçalho.
- Não foi reotimizada imagem em lote porque a ferramenta `cwebp` não está disponível no ambiente atual, e recompactar com outro encoder poderia alterar qualidade visual sem validação adequada.
- Não foi feita migração de `!important` para cascade layers nesta rodada por ser uma mudança visual ampla e mais arriscada.
