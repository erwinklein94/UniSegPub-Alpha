# Revisão — Comparar Carreiras e Resumo Institucional

Alterações aplicadas nesta versão:

- A aba **Comparar Carreiras** recebeu seletor rápido por **esfera → instituição**, seguindo o padrão visual das demais abas.
- Ao escolher uma instituição na segunda caixa, ela é adicionada automaticamente ao comparativo. O botão **Adicionar** permanece disponível para reforçar a ação.
- O comparador deixou de selecionar automaticamente um estado ao abrir a aba; agora o usuário monta a comparação de forma intencional.
- A versão desktop foi compactada: menos espaçamento, tabela menor, cards duplicados ocultos no computador e painel superior mais enxuto.
- A versão mobile foi revisada: tabela horizontal ocultada no celular, cards compactos, botões em grade, resumo em blocos menores e lista de seleção com altura limitada.
- Na página inicial, o campo do resumo institucional deixou de exibir **Ativos estimados** e passou a exibir **Efetivo total estimado**, somando efetivo ativo e reserva/inativos quando os dados estão disponíveis.
- Nos resumos específicos por instituição, o rótulo **Efetivo ativo** foi substituído por **Efetivo total**, usando soma de ativo + reserva/inativos quando possível.

Arquivos principais alterados:

- `index.html`
- `js/pages/concursos-comparador.js`
- `js/chunks/08-concursos-comparador.js`
- `js/ui/event-bindings.js`
- `js/chunks/10-event-bindings.js`
- `js/ui/header-estados.js`
- `js/chunks/06-header-estados.js`
- `js/dist/app.bundle.js`
- `css/override-logoleao.css`
- `css/pages/comparador-produtos.css`
- `css/chunks/04-comparador-produtos.css`
