# Relatório de alterações — Produtos PF/PRF

Data: 2026-05-03

## Arquivo alterado

- `produtos.html`

## O que foi adicionado

### Produtos físicos — Shopee

Foram adicionados à vitrine de **Produtos físicos**, sem marcação de destaque:

1. PRF 1.001 Questões Comentadas - AlfaCon - Concursos Carreiras Policiais
2. Apostila Polícia Federal (PF) - Delegado de Polícia Federal
3. Apostila Polícia Federal (PF) 2026 - Escrivão de Polícia Federal
4. Apostila Polícia Federal (PF) 2026 - Papiloscopista Policial Federal
5. Apostila Completa PRF - Agente Administrativo da Polícia Rodoviária Federal
6. Apostila Polícia Federal (PF) 2026 - Perito Criminal Federal - Medicina Legal
7. Apostila impressa concurso da Polícia Federal PF 2025 - Agente Administrativo da Polícia Federal
8. Apostila PRF - Polícia Rodoviária Federal - Policial Rodoviário Federal

### Cursos preparatórios e materiais de estudo — Hotmart

Foi adicionado à vitrine de **Cursos preparatórios e materiais de estudo**, sem marcação de destaque:

1. Na Rota PRF

## Ajustes aplicados

- Todos os novos cards receberam imagem, título, resumo curto, metadados e botão `Comprar por afiliado`.
- As imagens foram vinculadas aos arquivos já existentes em `img/SHOPEE` e `img/HOTMART`.
- Os novos links de afiliado receberam `rel="sponsored noopener noreferrer"` para sinalizar natureza comercial e manter segurança ao abrir em nova aba.
- Foi removido um selo duplicado `Curso online` em um card existente do curso Sargento PMESP.

## Verificações realizadas

- Conferência de existência das imagens usadas nos novos cards.
- Conferência de referências locais de imagens, CSS e JavaScript nas páginas HTML.
- Verificação de sintaxe dos arquivos JavaScript com `node --check`.

## Sugestões para próxima manutenção

- Extrair o CSS inline da página `produtos.html` para um arquivo dedicado, por exemplo `css/pages/produtos.css`, deixando o HTML mais limpo.
- Padronizar todos os links comerciais antigos com `rel="sponsored noopener noreferrer"`, já que vários links anteriores ainda usam apenas `noopener noreferrer`.
- Padronizar os botões antigos da vitrine, caso queira que todos digam `Comprar por afiliado` em vez de apenas `Comprar`.
- Em uma etapa futura, considerar mover os produtos para um arquivo de dados em JavaScript/JSON para facilitar novas inclusões sem editar HTML manualmente.
