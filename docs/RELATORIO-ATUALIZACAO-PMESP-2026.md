# Relatório de atualização — PMESP — Maio/2026

## Escopo aplicado

Atualização dos dados da Polícia Militar do Estado de São Paulo no portal UniSegPub, com substituição de estimativas frágeis por dados oficiais, faixas seguras ou notas de cautela.

## Campos revisados

- **Nome institucional:** Polícia Militar do Estado de São Paulo.
- **Comando-Geral:** Cel PM Glauce Anselmo Cavalli — Comandante-Geral.
- **Efetivo ativo:** alterado de número fechado para **82.000+**, porque a fonte oficial localizada informa “mais de 82 mil” e não um número exato auditado no portal.
- **Reserva/inativos:** alterado de número fechado para **72.000+ inativos**, usando a terminologia mais segura da fonte oficial.
- **Efetivo feminino:** removida a estimativa frágil de mulheres na corporação; o bloco passou a exibir **efetivo legal: 93.802 cargos fixados em lei**.
- **Relação por habitante:** recalculada de forma aproximada com base no efetivo ativo oficial em faixa, exibida como **1 ativo / 562 hab. · 0,178%**.
- **Previdência/contribuição:** removido percentual único rígido para PMESP; o portal agora orienta conferir contribuição, base de cálculo, rubricas e norma vigente no caso concreto.
- **Estrutura institucional:** adicionados órgãos de direção geral, direção setorial, apoio, execução e assessoria, com comandos territoriais e especializados.
- **Carreira:** incluída referência à Lei SP 18.442/2026, quadros, efetivo legal e progressão/promoção.
- **Remuneração:** mantida a tabela total oficial SGGD/SP de julho/2025, com nota de cautela sobre a Lei SP 18.441/2026, que atualiza vencimentos-base desde 01/04/2026. O portal não trata vencimento-base como remuneração total.
- **Concursos:** atualizados PMES2502 Soldado, 2º Tenente Médico PM Estagiário 2026, Aluno-Oficial PM 2025 e CFS 2026 interno.
- **Ações/direitos:** ampliados temas sobre quinquênio, sexta-parte, ALE, Lei 18.441/2026, Lei 18.442/2026, insalubridade, licença-prêmio, CBPM/Cruz Azul, adicional noturno e jornada extraordinária.
- **Associações:** atualizados links e descrição de entidades de representação/assistência, incluindo CBPM/Cruz Azul.

## Arquivos alterados

- `js/ui/header-estados.js`
- `js/ui/navegacao-ui.js`
- `js/data/bases-conteudo.js`
- `js/services/direitos.js`
- `js/services/remuneracao.js`
- `docs/RELATORIO-ATUALIZACAO-PMESP-2026.md`

## Validação técnica

Executado `node --check` nos arquivos JavaScript alterados. Nenhum erro de sintaxe foi encontrado.

## Fontes de referência cadastradas ou usadas na atualização

- Portal oficial da PMESP.
- Portal de Notícias da PMESP — posse da Cel PM Glauce Anselmo Cavalli.
- Governo do Estado de São Paulo — nomeação da Comandante-Geral em abril/2026.
- Página oficial de organização/organograma da PMESP.
- Lei SP 18.441/2026 — vencimentos-base.
- Lei SP 18.442/2026 — efetivo legal, carreira, quadros e promoção.
- SGGD/SP — tabela oficial de remuneração da área policial, referência julho/2025.
- Vunesp e portal de concursos da PMESP — concursos recentes e em andamento.
- CBPM/SP — contribuição e assistência institucional.

## Observações de cautela

- O número exato de policiais ativos não foi inventado. Foi usado **82.000+** porque a fonte oficial localizada informa faixa.
- O número de mulheres na PMESP não foi mantido porque a estimativa anterior não estava suficientemente confirmada por fonte oficial recente.
- A remuneração total de 2026 não foi calculada manualmente a partir dos vencimentos-base. O portal mantém a tabela total oficial disponível e destaca que a Lei 18.441/2026 alterou apenas a base legal, exigindo tabela operacional posterior ou holerite para total atualizado.
