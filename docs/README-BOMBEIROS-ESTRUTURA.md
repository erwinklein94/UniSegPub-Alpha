# Estrutura inicial — Bombeiros Militares por UF

Esta etapa abriu a lógica para cadastrar os Corpos de Bombeiros Militares de todas as UFs no site, seguindo a mesma arquitetura usada para PM/PC/PP e tomando a PMESP como referência estrutural.

## O que foi criado

- Novo ramo no seletor do cabeçalho: **Bombeiros**.
- Nova chave por estado no objeto `HEADER_ESTADOS`: `bm`.
- Novas instituições válidas para todos os estados e DF, com IDs técnicos como `bmsp`, `bmrj`, `bmmg`, `bmsc`, `bmdf` etc., mas exibidas visualmente em maiúsculas: **BMSP**, **BMRJ**, **BMMG** etc.
- Estrutura genérica de cargos bombeiro militar:
  - Comandante-Geral
  - Subcomandante-Geral
  - Coronel BM
  - Tenente-Coronel BM
  - Major BM
  - Capitão BM
  - 1º e 2º Tenente BM
  - Aspirante / Aluno-Oficial
  - Subtenente
  - Sargentos
  - Cabo
  - Soldado / Aluno-Soldado
- Estrutura genérica para:
  - resumo institucional;
  - remuneração tabelada com valores pendentes;
  - concursos;
  - ações/direitos;
  - associações e entidades.

## Arquivos principais alterados

- `index.html`
  - adiciona o botão **Bombeiros** ao switcher de ramo.

- `js/ui/header-estados.js`
  - cria a base `BOMBEIROS_MILITARES_ESTRUTURA`;
  - adiciona o ramo `bm` em cada UF;
  - gera dados placeholder para cabeçalho, concursos, remuneração, ações e associações;
  - habilita o botão Bombeiros no cabeçalho;
  - insere automaticamente as opções dos bombeiros nos seletores.

- `js/dist/app.bundle.js`
  - bundle de produção atualizado com a nova lógica.

- `css/components/componentes.css`, `css/chunks/03-componentes.css`, `css/dist/main.min.css`
  - o grid dos botões de ramo passou de 3 para 4 colunas no desktop.

## Como preencher a próxima etapa

Para cada Corpo de Bombeiros, substituir os placeholders por dados oficiais:

1. brasão/imagem local em `img/`, se houver;
2. fonte oficial da tabela remuneratória em `REMUNERACAO_FONTES_OFICIAIS`;
3. valores reais nos cargos do respectivo `CARGOS_ESTRUTURA_GENERICAS[inst]` ou em constante própria;
4. resumo institucional em `HEADER_INSTITUICOES_RESUMO[inst]`;
5. concursos em `CONCURSOS[inst]`;
6. direitos/ações em `ACOES_JUDICIAIS[inst]`;
7. associações em `ASSOCIACOES[inst]`.

## Observação importante

A estrutura foi criada sem copiar remuneração, efetivo ou regras da PMESP para outros estados. Os valores ficam intencionalmente como **“a preencher”** para evitar informação indevida até conferência em fonte oficial.
