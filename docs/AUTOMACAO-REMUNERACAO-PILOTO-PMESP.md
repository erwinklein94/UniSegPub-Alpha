# Automação de Remuneração — piloto PMESP

Esta etapa replica o motor simples de pesquisas da aba Concursos para a aba Remuneração.

## Arquivos criados

```text
config/remuneracao-instituicoes.json
data/remuneracao/pmesp.json
scripts/atualizar-remuneracao.mjs
scripts/gerar-relatorio-remuneracao.mjs
.github/workflows/atualizar-remuneracao.yml
js/pages/remuneracao-automacao.js
```

Também foi atualizado:

```text
remuneracao.html
js/pages/remuneracao-desktop.js
```

## Como funciona

1. O workflow lê `config/remuneracao-instituicoes.json`.
2. Classifica cada instituição como `pendente`, `fraca` ou `forte`.
3. Usa OpenAI com web search para pesquisar remuneração bruta por cargo.
4. Salva o resultado em `data/remuneracao/{id}.json`.
5. A página `remuneracao.html` carrega esse JSON e prioriza a tabela automática.

## Regras editoriais

A automação não deve publicar texto vago para o usuário final.

Frases proibidas nos campos visíveis:

```text
ver edital
consultar edital
conferir edital
conforme edital
depende do edital
consultar portal
quando aplicável
```

Cada linha da tabela precisa ter cargo e valor numérico em reais.

## Como testar PMESP

No GitHub Actions:

```text
Atualizar Remuneração - Simples → Run workflow
```

Use:

```text
grupo_atualizacao: instituicao
instituicao: pmesp
quantidade: 1
modelo_openai: gpt-5.4-mini
```

Depois abra:

```text
data/remuneracao/pmesp.json
```

E no site:

```text
remuneracao.html?inst=pmesp
```

## Expansão

O config já contém as 110 instituições copiadas da estrutura de concursos. As que ainda não tiverem JSON ficam como `pendentes`.

Para primeira pesquisa em lote pequeno:

```text
grupo_atualizacao: pendentes
quantidade: 3
modelo_openai: gpt-5.4-mini
```

Para instituição importante ou difícil:

```text
grupo_atualizacao: instituicao
instituicao: pcdf
quantidade: 1
modelo_openai: gpt-5.5
```
