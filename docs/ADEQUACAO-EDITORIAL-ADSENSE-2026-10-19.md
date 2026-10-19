# Adequação editorial e funcional — 19/10/2026

Esta entrega complementa a [integração do AdSense](ADSENSE-2026-10-19.md), atendendo ao pedido de melhorar o site e publicá-lo no domínio universosegpub.com.br. As mudanças não garantem aprovação pelo Google.

## Mudanças

- Comparador independente dos datasets assíncronos legados: 110 instituições, 27 UFs e duas carreiras federais, com PCDF no DF. Permite até quatro instituições, busca, filtros e escolha explícita do cargo/classe. Mostra fonte, composição e período; registros pendentes não aparecem como valores atuais confirmados. Trata falhas de carregamento e permite tentar novamente.
- Corrigida a inicialização dos módulos legados de remuneração, cabeçalho e conteúdo de página, que acessavam datasets antes da conclusão da leitura. A carga não usa novas credenciais nem altera o banco.
- Estatísticas de remuneração excluem valores de tabelas sem conferência integral registrada.
- Nove guias salariais passam a usar os mesmos JSONs revisados da consulta por instituição, com fontes e limitações visíveis. A reorganização editorial de 19/10 está separada da conferência documental registrada em 18/10. URLs dos artigos preservadas.
- Diretório estático com 110 instituições e busca por sigla, estado e nome, substituindo a repetição de textos e valores antigos. Cada entrada mostra a situação de revisão e leva à consulta correspondente.
- Publicadas a página de metodologia e uma explicação original sobre composição, cargo, período e comparação de remuneração. O exemplo numérico é explicitamente hipotético.
- Navegação editorial, metadados, sitemap e modelos do comparador sincronizados. Os geradores permitem reproduzir os guias e verificar divergências.

## Validação

- 71 testes automatizados passaram, incluindo seis testes do comparador, cobertura das instituições, referências pendentes/futuras, URLs, prontidão dos datasets e conteúdo estático.
- Verificados no Chrome: seleção de instituições e cargos, valores conferidos, registros pendentes, busca do diretório, tabela extensa e páginas legadas. Layout de celular conferido com viewport de 390 × 844, sem transbordamento horizontal nas páginas verificadas.
- Home, concursos, comparador, brasões, produtos e remuneração mantêm seus modelos sincronizados. As divergências anteriores dos modelos de 404, ações, anuncie, associações, direitos, parceiros e poderes/deveres permanecem fora desta entrega; não foram usados para sobrescrever as páginas públicas.
- Nenhuma atualização de dados, migração ou inserção de audiência de teste foi executada no Supabase.

Comandos:

```text
node --test scripts/test-*.mjs
npm run test:editorial
node scripts/build-home.mjs --check
node scripts/build-concursos.mjs --check
python scripts/build-static-pages.py --check comparar-carreiras
python scripts/generate-sitemap.py --check
git diff --check
```

## Limitações e acompanhamento

A base permanece com **50 tabelas conferidas e 60 com vigência integral a confirmar**, conforme a revisão documental anterior. Esta entrega não transforma registros antigos em valores atuais e não revalida individualmente essas 60 tabelas. A manutenção futura deve registrar o documento oficial, a composição e a vigência antes de mudar a classificação.

Na configuração da conta realizada em 19/10/2026, o AdSense confirmou **Preparando / Revisão solicitada** para o domínio. Anúncios automáticos e a mensagem europeia já estavam publicados. O arquivo ads.txt público contém a linha correta, mas o painel ainda aguardava reconhecimento. Não é necessário excluir ou cadastrar novamente o domínio enquanto a revisão estiver pendente.

A decisão de aprovação, o reconhecimento do ads.txt e a liberação da veiculação pertencem ao Google. Se houver nova reprovação, o motivo concreto informado no painel deve orientar a próxima revisão.
