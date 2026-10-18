# Auditoria do Universo Segurança Pública — 18/10/2026

O portal tem uma proposta útil: reunir informações dispersas sobre carreiras de segurança pública. A identidade visual, os artigos sobre salários e a consulta por instituição dão uma base aproveitável. O maior ganho agora virá de informações coerentes entre as páginas, consultas que funcionem na primeira visita e recomendações comerciais relacionadas à necessidade de quem lê.

Adicionar mais anúncios antes de resolver esses pontos aumenta o risco de perder a confiança do visitante. Não há evidência suficiente nesta auditoria para estimar receita, avaliar a qualidade do tráfego existente ou prometer crescimento.

## Escopo e limites

- Inspeção do código, dos dados públicos consumidos pelo site e das 38 rotas HTML publicadas no repositório: 21 na raiz, dez em `artigos/` e sete em `novidades/`. A contagem inclui redirecionamentos, a página 404 e páginas administrativas.
- Abertura das 38 rotas no Chrome em desktop de 1440 px e celular de 390 px, com leitura do conteúdo, erros de JavaScript, imagens e largura do documento. As rotas responderam ou redirecionaram; não apareceram imagens quebradas nessa amostra.
- Testes adicionais em contextos novos, com atraso de 700 ms no carregamento dos dados, para verificar a primeira visita sem cache. O teste geral compartilhava cache entre páginas e, sozinho, não revelava todas as falhas.
- Inventário dos 70 produtos do catálogo público e dos anúncios estáticos: 71 URLs distintas, incluindo uma URL de exemplo repetida em dez botões.
- Verificação HTTP com redirecionamentos para todos os links comerciais; navegação renderizada para os 41 destinos Shopee. Os sete produtos inexistentes foram reconfirmados em sessões novas.
- Não houve acesso ao Google Analytics, Search Console, painéis de afiliados ou métricas privadas de receita. Nenhuma conclusão sobre audiência real, posição no Google, vendas ou comissão foi inferida apenas pela presença das tags.
- Isto é uma auditoria funcional, editorial e comercial. Não certifica toda a legislação, todos os editais, estoque, qualidade dos cursos, segurança do servidor ou conformidade jurídica. Os testes bloquearam rastreadores e gravações de telemetria para não inflar os acessos.

## Alterações executadas nesta entrega

Foram retirados da exposição pública sete produtos cuja página da Shopee informou explicitamente **“O produto não existe”**:

| Produto | Link retirado |
|---|---|
| Mochila Militar Tática Impermeável 50 L, com bandeiras | `https://s.shopee.com.br/901i8h9IK5` |
| Cinto Premium com fivela metálica e engate rápido | `https://s.shopee.com.br/2qR7lnxjWo` |
| Apostila PRF — Agente Administrativo | `https://s.shopee.com.br/9pasKuSzle` |
| Apostila PF 2026 — Escrivão | `https://s.shopee.com.br/9KebjbAPje` |
| Apostila PF 2026 — Papiloscopista | `https://s.shopee.com.br/9Uy1w73uSI` |
| Apostila PF 2026 — Perito Criminal / Medicina Legal | `https://s.shopee.com.br/qg3cYrOLn` |
| Apostila PRF — Policial Rodoviário Federal | `https://s.shopee.com.br/9pasLS6Sfs` |

Também foram removidos dez blocos comerciais sem link real: nove nos artigos salariais e um no guia de instituições. Todos apontavam para `https://go.hotmart.com/SEU_LINK_AFILIADO_AQUI`, que retornou erro HTTP 400.

A retirada alcança a vitrine, os dois destaques inválidos da home, as laterais, os produtos de fallback e os respectivos modelos HTML. Um filtro central impede que o catálogo anterior, vindo do banco ou do cache de seis horas, volte a exibir esses sete links. A vitrine passou de 70 para **63 produtos expostos**. Os registros de origem no Supabase não foram apagados: o projeto de produção não está disponível nas conexões administrativas desta sessão. A supressão é aplicada pelo site mesmo quando ele recebe esses registros antigos.

Dos 63 links preservados, **58 levaram a páginas acessíveis** e **cinco ficaram inconclusivos por verificação de segurança da Shopee**. Os cinco foram mantidos para evitar excluir produtos por bloqueio de navegação. São as URLs terminadas em `1qYSZj5bki`, `9fHRseGBA0`, `7ppnjfBlrP`, `70GgkOPSbh` e `8KmFlmRYZx`. Uma página acessível não comprova disponibilidade de estoque, correspondência com o edital vigente nem atribuição da comissão ao afiliado.

O registro dos 71 resultados está em [auditoria-links-2026-10-18.json](../data/produtos/auditoria-links-2026-10-18.json), com método, origem e evidência. Não foram substituídos seus códigos de afiliado.

Validação da alteração: 18 testes automatizados passaram, incluindo cinco específicos de produtos e as regressões de admin e remuneração. A verificação no Chrome passou em 14 cenários, abrangendo sete páginas com e sem o cache anterior. Confirmou 63 cards no catálogo, ausência dos links retirados, preservação dos cinco inconclusivos e ausência de novos erros ou transbordamento horizontal nesses cenários. A sintaxe dos scripts alterados e o diff também foram verificados.

As recomendações abaixo ainda são trabalho proposto, salvo as retiradas descritas acima e as melhorias de admin/remuneração já realizadas em entregas anteriores.

## Prioridades do portal como um todo

| Prioridade | Evidência encontrada | Mudança recomendada e finalidade |
|---|---|---|
| P0 — informação | A home ainda apresenta atualização de maio, inscrições antigas como abertas e números salariais diferentes da consulta revisada. | Gerar home, artigos e comparador a partir da mesma base, com cargo, composição, fonte e vigência. Evitar que uma página contradiga outra. |
| P0 — navegação | Selecionar Polícia Civil/MG na home abre `remuneracao.html?tipo=pc&uf=MG`, mas a consulta mostra PMESP. Links genéricos também perdem a instituição. | Resolver cada escolha para o identificador real, por exemplo `inst=pcmg`, e preservar contexto nos links entre as seções. |
| P0 — comparador | Em primeira visita, houve erros de inicialização; marcar duas instituições não produziu o resultado. Foram encontrados 50 checkboxes, embora a página anuncie 111 instituições. | Aguardar os dados, tratar falhas com mensagem recuperável e comparar cargos equivalentes. Expor a cobertura real. |
| P0 — medição | `js/ui/head.js` dispara um evento Google Ads `conversion` em toda carga de página. | Distinguir visualização, clique externo, contato enviado e venda confirmada. Um evento de abertura não deve ser interpretado como venda. |
| P1 — busca | A busca envia `q` ao guia, que não aplica a consulta recebida. | Implementar pesquisa por instituição, cargo e tema, com resultado correto, estado vazio e URL compartilhável. |
| P1 — conteúdo | Cópias em HTML, scripts, JSON local e Supabase envelhecem separadamente. Na revisão anterior, 50 das 110 instituições salariais ficaram confirmadas; 60 permanecem com vigência a confirmar. | Manter uma fonte por assunto, fila editorial e estado de verificação explícito. Data de revisão deve representar conferência real. |
| P1 — celular | O documento transborda em ações judiciais e associações (457 px), na notícia PCDF (420 px) e no relatório técnico (956 px), em uma tela de 390 px. | Conter tabelas e elementos largos; encurtar a abertura das páginas e tornar o menu completo mais fácil de descobrir. |
| P1 — carregamento | A consulta geral busca 132 datasets, aproximadamente 1,89 MB de JSON decodificado; `header-estados.js` tem 422.427 bytes no repositório. | Buscar apenas os dados da página, separar responsabilidades e eliminar dependências de salário em telas de história ou legislação. Medir depois com dados de campo. |
| P1 — publicidade | Há links comerciais sem `sponsored`/`nofollow` e slots de AdSense ainda com IDs de exemplo nos nove artigos. | Padronizar a identificação dos links e configurar ou retirar espaços incompletos. Confirmar a configuração no painel antes de contar com receita. |
| P1 — privacidade | Analytics/Ads inicializam antes de qualquer escolha; o aviso de cookies oferece apenas “Entendi”. | Alinhar funcionamento, preferências, revogação e política publicada, com revisão apropriada das finalidades e bases aplicáveis. |

P0 significa problema que afeta confiança, consulta principal ou interpretação dos resultados. P1 indica a etapa seguinte; P2 representa consolidação e manutenção.

## Avaliação de cada uma das 38 rotas

### Páginas da raiz — 21 rotas

| Página | Diagnóstico e melhoria recomendada | Prioridade |
|---|---|---|
| **Página inicial — `index.html`** | Boa apresentação do propósito, mas a abertura é extensa no celular. Cards e estatísticas são manuais: há salários PF/PRF apresentados como R$ 23.692, que não representam os valores iniciais de agente/policial da base revisada; faltam cargo e método para as contagens de profissionais. Corrigir o atalho de instituição e a busca; substituir listas antigas por dados com vigência. Dois destaques comerciais inválidos já foram retirados. | P0 |
| **Remuneração — `remuneracao.html`** | É o melhor ponto para concentrar o produto. A entrega anterior passou a priorizar JSON revisado, identificar fonte/critério e recalcular indicadores com os filtros. Completar as 60 verificações pendentes e levar a mesma base aos artigos e comparador. Dar destaque ao cargo, etapa de formação, vencimento/subsídio, parcelas condicionais e data de vigência. | P0/P1 |
| **Concursos — `concursos.html`** | A organização por instituição é útil. Status e prazos precisam ser derivados de datas e conferidos no edital/banca, inclusive nas chamadas da home. Separar aberto, autorizado, previsto e encerrado; indicar última checagem e retificações. Esta auditoria não revalidou todos os editais individualmente. | P1 |
| **Comparar — `comparar-carreiras.html`** | Falha reproduzida em primeira visita: seleção atualiza, comparação não aparece. A lista tem cobertura inferior à anunciada e PCDF apareceu agrupada em SP. Corrigir inicialização e classificação; usar a base salarial revisada, selecionar dois ou três cargos equivalentes e permitir compartilhar a comparação. | P0 |
| **Direitos — `direitos.html`** | Tem consulta por instituição e conteúdo de referência, mas scripts legados acusam `CARGOS_PF`/`CONCURSOS` ausentes quando os dados atrasam. Remover dependências não utilizadas e indicar fonte, alcance e data por benefício; separar direito geral, regra local e condição individual. | P1 |
| **Poderes e deveres — `poderes-deveres.html`** | A organização temática é aproveitável. Apresenta erros de inicialização dos módulos compartilhados em carga sem cache. Unificar a aparência com as páginas novas; facilitar consulta por competência e vincular resumo à norma e aos limites locais. Dois anúncios estáticos inválidos foram retirados, além do filtro da vitrine dinâmica. | P1 |
| **Base legal — `base-legal.html`** | Reúne fontes oficiais e busca temática, mas conserva o layout antigo e uma grande quantidade de posicionamentos comerciais. O teste sem cache encontrou erro de inicialização compartilhada. Priorizar a lei pesquisada, indicar versão/conferência e reduzir produtos repetidos. Dois anúncios inválidos foram retirados das laterais e bloqueados na renderização. | P1 |
| **Ações judiciais — `acoes-judiciais.html`** | Houve dois erros JavaScript e transbordamento no celular. Acrescentar número do processo/tema, tribunal, situação, data e fonte por item; distinguir decisão específica de entendimento consolidado. Filtrar por tese e instituição sem sugerir resultado garantido. Revisão especializada é necessária para afirmações jurídicas. | P1 |
| **Associações e sindicatos — `associacoes-sindicatos.html`** | Diretório útil, com largura excedente no celular e cobertura variável. Exibir tipo de entidade, UF, público atendido e data de conferência do contato. Diferenciar representação associativa de órgão oficial e evitar sugerir cobertura nacional completa onde não existe. | P1 |
| **Brasões e história — `brasoes.html`** | Conteúdo que pode atrair buscas permanentes e enriquecer o portal. Um script falha por depender de `REMUNERACAO_FONTES_OFICIAIS`, informação alheia à função da página. Isolar o módulo, documentar origem/crédito das imagens e fontes históricas, e manter ampliação acessível por teclado. | P2 |
| **Guia — `guia-instituicoes.html`** | A busca recebida na URL não funciona e o guia replica conteúdos dos artigos, aumentando a manutenção. Torná-lo um diretório com filtros e resumos, apontando para uma página principal por instituição. Um bloco de afiliado com URL de exemplo já foi removido. | P1 |
| **Notícias — `noticias.html`** | Há estrutura e filtros, mas as chamadas de atualização contínua não combinam com o acervo observado, concentrado em maio. Mostrar publicação e atualização separadamente, arquivar prazos vencidos e oferecer um endereço estável para cada notícia relevante. | P1 |
| **Produtos — `produtos.html`** | O catálogo tinha 70 itens; agora expõe 63. A filtragem por instituição ajuda, mas compatibilidade inferida por palavras não certifica edital ou padrão exigido pela corporação. Organizar também por finalidade, explicar critérios de seleção e conferir correspondência do título com a oferta real. Padronizar links patrocinados e medir cliques por posição. | P1 |
| **Anuncie — `anuncie.html`** | O contato termina em `mailto:`: preencher não garante que a mensagem foi enviada, pois depende do programa de e-mail do visitante. Implementar envio com confirmação, proteção contra abuso e acompanhamento do recebimento. Publicar mídia kit com audiência efetivamente medida, formatos e condições comerciais. | P1 |
| **Parceiros — `parceiros.html`** | Já encaminha para Anuncie, o que evita manter duas propostas comerciais concorrentes. Consolidar o destino canônico e, se a hospedagem permitir, usar redirecionamento HTTP permanente e atualizar os links internos. | P2 |
| **Privacidade — `privacidade.html`** | Existe política e identificação do caráter independente, mas é preciso conferir correspondência com Supabase, analytics, publicidade e dados de navegação efetivamente coletados. Documentar finalidades, retenção, canal de atendimento e terceiros; evitar guardar parâmetros desnecessários da URL de referência. | P1 |
| **Cookies — `cookies.html`** | Existe explicação, mas falta um controle de preferências coerente com ela. Implementar escolha/revisão de categorias quando aplicável e garantir que a execução das tags corresponda às opções e bases adotadas. O botão “Entendi” atual apenas dispensa o aviso. | P1 |
| **Termos — `termos.html`** | A delimitação informativa e a transparência comercial são positivas. Acrescentar política editorial, procedimento de correção e versão/data de revisão; manter a redação compatível com as funcionalidades efetivas. | P2 |
| **Página 404 — `404.html`** | Oferece bons caminhos de recuperação. Revisar contagens institucionais fixas e testar periodicamente uma URL inexistente para confirmar o status HTTP correto. Abrir o próprio arquivo `404.html` com HTTP 200 não demonstra falha no tratamento de URLs inexistentes. | P2 |
| **Admin — `admin.html`** | A correção anterior dos filtros e indicadores é a base para acompanhar o retorno das mudanças. Acrescentar eventos de clique em afiliado, página/instituição de origem e conversão confirmada quando houver integração legítima; excluir acessos próprios/automáticos e separar métrica de audiência de receita. Não houve acesso às métricas privadas nesta auditoria. | P1 |
| **Relatório de concursos — `relatorio-concursos.html`** | É conteúdo operacional interno, sem descrição/canônico/`noindex` no HTML inspecionado, e transborda muito no celular. Separar do conteúdo voltado ao público, aplicar controle de acesso se contiver informação restrita e impedir indexação quando apropriado. | P2 |

### Artigos — dez rotas

Os nove artigos salariais têm potencial de busca por uma intenção específica. Todos tiveram o botão com afiliado de exemplo removido. Os nove também conservam três valores `SUBSTITUIR_SLOT_ID_*` nos atributos de AdSense: precisam de configuração real ou retirada dos espaços. A auditoria identificou divergências editoriais, mas não certificou individualmente cada adicional ou regra de ingresso.

| Página | Diagnóstico e melhoria recomendada | Prioridade |
|---|---|---|
| **Índice — `artigos/index.html`** | Dar visibilidade aos nove guias existentes, organizar por esfera/UF e mostrar a data real de revisão. Evitar anunciar cobertura editorial completa das 110 instituições. | P1 |
| **CBMERJ — `artigos/salario-cbmerj-2026.html`** | Conferir valores e transcrições, diferenciar formação e exercício e ligar cada parcela à fonte. A situação da remuneração dessa instituição continua dependente da confirmação oficial indicada na base; o ano no título não basta para demonstrar atualização. | P1 |
| **PCDF — `artigos/salario-pcdf-2026.html`** | A estrutura por classes e a referência de 2026 são aproveitáveis. Unificar com a tabela principal, revisar benefícios separadamente do subsídio e fazer links contextuais abrirem PCDF. Revisar também os atalhos com âncoras geradas por JavaScript. | P1 |
| **PCERJ — `artigos/salario-pcerj-2026-tabela-completa.html`** | Há valores históricos e composições que exigem reconciliação com os cargos e referências da base revisada. Identificar cargo, classe, GHP e condições em cada número, em vez de apresentar uma faixa genérica como salário universal. | P0/P1 |
| **PCMG — `artigos/salario-pcmg-2026-tabela-completa.html`** | Mantém números anteriores aos da referência revisada de 2026. Gerar a tabela pela mesma fonte da consulta principal e explicar a vigência por cargo; atualizar os exemplos do texto junto com a tabela. | P0/P1 |
| **PF — `artigos/salario-pf-2026-tabela-completa.html`** | A tabela já contempla a etapa de maio/2026. Manter esse acerto, conferir benefícios/ressalvas separadamente e retirar números contraditórios da home. Direcionar materiais por cargo e edital, com justificativa editorial. | P1 |
| **PMERJ — `artigos/salario-pmerj-2026-tabela-completa.html`** | Há valores arredondados e composições distintas. Expor a precisão e a parcela incluída, relacionando graduação, posto, condição e fonte; evitar confundir remuneração de uma situação com valor geral da carreira. | P0/P1 |
| **PMMG — `artigos/salario-pmmg-2026-tabela-completa.html`** | Permanecem valores anteriores de ingresso/formação, divergentes da base revisada. Priorizar sincronização e explicação da diferença entre aluno e soldado em exercício. | P0/P1 |
| **Polícia Penal RJ — `artigos/salario-pprj-2026-tabela-completa.html`** | Conferir vigência e discriminar vencimento, adicional e total citado. Não promover uma composição histórica a valor confirmado apenas atualizando o título para 2026. A confirmação oficial ainda é necessária. | P1 |
| **PRF — `artigos/salario-prf-2026-tabela-completa.html`** | O subsídio inicial de maio/2026 está alinhado à base revisada. Revalidar benefícios e regras de formação separadamente; transformar a página em referência permanente com histórico das alterações e materiais relacionados à necessidade do leitor. | P1 |

### Notícias antigas e redirecionamentos — sete rotas

Os cinco redirecionamentos de notícias abaixo já têm `noindex, follow` e canônico para Notícias. Foram tratados como rotas de redirecionamento, não como cinco artigos quebrados. É importante preservar endereços que possam ter backlinks.

| Rota em `novidades/` | Diagnóstico e melhoria recomendada | Prioridade |
|---|---|---|
| **`index.html`** | Redireciona para Notícias e declara esse destino como canônico. Consolidar o índice por redirecionamento HTTP permanente se houver suporte na hospedagem. | P2 |
| **`concurso-pmerj-2026-2-mil-vagas-soldado.html`** | Encaminha à seção correspondente em Notícias. Preservar o endereço antigo e atualizar o destino com o status efetivamente confirmado do concurso. | P2 |
| **`concurso-pmmg-tjmg-retoma-oficial-saude-2026.html`** | Encaminha à seção da notícia. Manter o contexto da decisão e a cronologia, com revisão do andamento antes de novas chamadas. | P2 |
| **`concurso-prf-2026-pedido-mjsp-511-vagas.html`** | Encaminha à seção da notícia. Distinguir pedido de vagas, autorização e edital; não converter expectativa em inscrição aberta. | P2 |
| **`decreto-policia-federal-2-mil-aprovados-2026.html`** | Encaminha à notícia existente. Explicar diferença entre autorização, convocação e nomeação, mantendo data e fonte do ato. | P2 |
| **`decreto-prf-321-excedentes-2025.html`** | Encaminha ao conteúdo histórico. Identificar 2025 como período da informação e atualizar desdobramentos sem alterar silenciosamente o fato antigo. | P2 |
| **`pcdf-delegado-inscricoes-abertas-2026.html`** | Artigo independente, ainda com chamada de inscrições abertas e prazo informado de 25/05/2026, já passado na data desta auditoria. Conferir eventual retificação antes de definir o status atual, sinalizar o histórico e corrigir o transbordamento no celular. | P1 |

## Como transformar as visitas em uma operação de afiliados melhor

O caminho mais promissor é responder primeiro à pergunta que trouxe o visitante e oferecer uma recomendação relacionada depois. A pessoa que consulta remuneração pode ser candidata, servidora, familiar ou apenas curiosa; todas essas visitas não têm a mesma intenção de compra.

| Intenção do leitor | Conteúdo prioritário | Oferta que pode fazer sentido | Medição útil |
|---|---|---|---|
| Escolher uma carreira | Salário confiável, requisitos, comparação e rotina | Livro introdutório ou curso compatível com a carreira escolhida | Consulta → comparação → clique qualificado |
| Preparar um concurso específico | Edital vigente, matérias, etapas e cronograma | Curso e material realmente compatíveis; informar edição e critério de seleção | Clique por instituição, cargo e posicionamento; venda confirmada no afiliado |
| Preparar o TAF | Exigências oficiais e orientação de preparação com fontes | Equipamento pertinente ao exercício, sem promessas de aprovação | Interesse no conteúdo → clique por finalidade |
| Trabalhar na área | Direitos, progressão e necessidades práticas | Livros técnicos e equipamentos com descrição de compatibilidade verificável | Cliques recorrentes e comissão efetivamente registrada |
| Pesquisar história e símbolos | Fontes e imagens bem documentadas | Produtos editoriais relacionados quando houver relação real | Retorno ao portal e navegação para conteúdos relacionados |

Recomendo começar com poucas recomendações bem justificadas, em vez de repetir uma grande vitrine em toda página. Acrescentar critérios como público indicado, compatibilidade com edital, edição, limitações e data de conferência. Não inventar avaliações, descontos, experiência de uso nem alegações como “recomendado por aprovados” sem evidência.

Manter o aviso de afiliado que o portal já possui e padronizar `rel="sponsored"` nos links comerciais; `nofollow` também é aceito pelo Google para essa qualificação. Na coleta anterior à limpeza, 28 links comerciais do catálogo não tinham nenhuma dessas qualificações. Os cinco destaques originais da home também não tinham. Isso exige padronização, sem mudar seus identificadores de afiliado. A orientação está na [documentação oficial sobre links externos](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links).

Para atrair e manter busca orgânica, os guias precisam acrescentar informação e comparação próprias, além de copiar descrições de vendedores. Essa recomendação acompanha as orientações oficiais de [análises úteis de produtos](https://developers.google.com/search/docs/specialty/ecommerce/write-high-quality-reviews) e as [políticas sobre páginas de afiliados sem valor adicional](https://developers.google.com/search/docs/essentials/spam-policies). Não há diagnóstico de penalização do portal nesta auditoria.

Registrar cliques externos com produto, categoria, página, instituição e posição da oferta. O GA4 possui [medição de cliques de saída](https://support.google.com/analytics/answer/13566436?hl=en), mas a venda e a comissão exigem confirmação no programa de afiliados. Não somar cliques como faturamento. Para anúncios diretos, usar no mídia kit apenas audiência conferida e um formulário que realmente entregue o contato.

## SEO, experiência e manutenção

**Preservar o que já funciona.** O site tem títulos descritivos, descrições e canônicos em grande parte das páginas públicas, sitemap, política institucional, identificação de independência e imagens em WebP. A base visual azul/dourado é reconhecível. Não é necessário trocar todo o framework para corrigir os problemas encontrados.

**Criar uma página principal por instituição.** Usar URLs permanentes, conteúdo e tabelas disponíveis de forma estável, com ligações para remuneração, concursos, direitos e história. O guia deve ajudar a encontrar essas páginas, reduzindo textos duplicados. A apresentação pode continuar simples, mas a informação precisa vir da mesma fonte.

**Facilitar renderização e descoberta.** Parte importante dos dados depende de JavaScript e de uma resposta assíncrona. O Google pode renderizar JavaScript; isso não garante que falhas, atrasos ou estados vazios sejam inofensivos. Pré-gerar conteúdo essencial e garantir links navegáveis torna a consulta mais resistente. Referência: [SEO para JavaScript](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics).

**Não confundir carregamento observado com Core Web Vitals.** A auditoria não possui amostra real de usuários suficiente para certificar LCP, INP e CLS. Após reduzir os dados e dependências, medir em laboratório e conferir dados de campo disponíveis no Search Console/PageSpeed. Referência: [Web Vitals](https://web.dev/articles/vitals).

**Simplificar celular e acessibilidade.** Encurtar os blocos iniciais para mostrar a consulta principal mais cedo, deixar o menu completo identificável, conter tabelas horizontalmente e revisar foco, rótulos, estados de carregamento e mensagens de erro. Não foi feita certificação completa de acessibilidade ou teste de todas as combinações de tema e leitor de tela.

**Atualizar o sitemap com mudanças reais.** O arquivo inspecionado concentra `lastmod` em 17/05/2026, embora a remuneração tenha sido revisada em outubro. Gerar datas a partir de alterações relevantes do conteúdo, sem renovar artificialmente todas as páginas a cada publicação.

**Alinhar privacidade e implementação.** O aviso atual não controla a inicialização das tags. Conferir a necessidade e o momento de cada tecnologia, oferecer preferências quando aplicável e documentar terceiros e retenção. A [orientação oficial da ANPD sobre cookies](https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia_orientativo_cookies_e_protecao_de_dados_pessoais) é referência para essa revisão; esta auditoria não conclui, isoladamente, que houve uma infração legal.

**Reduzir manutenção manual.** Separar apresentação, catálogo e dados institucionais. Os modelos de `partials/` e o HTML final não representam sempre a mesma versão visual; uma regeneração ampla pode recuperar conteúdo antigo. Definir um processo de construção reproduzível antes de regenerar tudo. Atualizar também a documentação inicial do projeto, que ainda descreve uma arquitetura anterior às revisões atuais.

**Criar um fluxo editorial verificável.** Cada item deve ter fonte, vigência, última conferência, responsável e estado: confirmado, histórico ou pendente. Pesquisa automática deve produzir candidata à revisão; não basta um resultado parecer completo para publicá-lo. A remuneração já ganhou essa proteção na entrega anterior; estender o princípio a notícias e concursos. Verificar links comerciais periodicamente e guardar o resultado da checagem. Nenhuma nova automação recorrente foi criada nesta entrega.

## Ordem recomendada de execução

1. Corrigir o atalho de instituições, a busca e o comparador na primeira visita. Remover a definição de conversão baseada apenas em abertura de página e definir eventos úteis.
2. Sincronizar home e artigos com a remuneração revisada; resolver as pendências de fontes e revalidar os status dos concursos. Ajustar todas as contagens para a cobertura real.
3. Priorizar a experiência móvel da remuneração e dos artigos que realmente concentram entradas, conforme Analytics/Search Console, e corrigir os quatro transbordamentos observados.
4. Organizar recomendações de afiliados por intenção, verificar compatibilidade dos cursos, configurar os slots reais de publicidade e qualificar os links comerciais.
5. Reduzir a carga de dados por página, isolar módulos e estabelecer publicação reproduzível com verificações de primeira visita, filtros e links.
6. Consolidar SEO, privacidade, formulário comercial e rotina editorial; acompanhar retorno por página e oferta com dados reais.

O primeiro critério de sucesso deve ser a pessoa encontrar a instituição e o dado correto. Depois, acompanhar cliques qualificados, vendas confirmadas e comissão por conteúdo. Isso permite decidir onde investir sem depender apenas da quantidade de visitas.
