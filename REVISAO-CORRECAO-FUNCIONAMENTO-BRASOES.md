# Revisão — correção de funcionamento e brasões DF/Federais

## Correções aplicadas

1. **Eventos restaurados no bundle de produção**
   - O arquivo `js/ui/event-bindings.js`, responsável por ligar cliques e mudanças de seleção, não estava dentro de `js/dist/app.bundle.js`.
   - Isso afetava selects de instituição, botões de página, bandeiras, menu, tema, botões de ramo, cards da página inicial e formulário.
   - O bundle foi reconstruído incluindo `js/chunks/10-event-bindings.js`.
   - A camada de eventos agora tem trava idempotente (`window.__UNISEGPUB_EVENT_BINDINGS_INSTALLED__`) para evitar eventos duplicados caso o arquivo seja carregado separadamente no futuro.

2. **Cache bust do bundle**
   - O `index.html` passou a carregar `js/dist/app.bundle.js?v=20260502df-fed-fix1`.

3. **Fallbacks de brasões ampliados**
   - O cabeçalho já tenta automaticamente `.webp`, `.png`, `.jpeg`, `.jpg` e `.svg`.
   - Foram adicionados aliases para aceitar nomes comuns além do padrão:
     - BMDF: `bmdf.*`, `cbmdf.*`, `bombeiros-df.*`, `bombeiro-df.*`
     - PF: `pf.*`, `dpf.*`, `policia-federal.*`, `policiafederal.*`
     - PRF: `prf.*`, `policia-rodoviaria-federal.*`, `policiarodoviariafederal.*`

## Brasões encontrados no ZIP revisado

Nenhum dos novos brasões abaixo foi encontrado dentro da pasta `img/` do ZIP recebido:

- PMDF
- PCDF
- PPDF
- BMDF / CBMDF
- PF
- PRF

## Nomes recomendados para adicionar os brasões

Para evitar erro, prefira estes nomes na pasta `img/`:

```text
img/pmdf.webp
img/pcdf.webp
img/ppdf.webp
img/bmdf.webp
img/pf.webp
img/prf.webp
```

Também serão aceitos os formatos `.png`, `.jpeg`, `.jpg` e `.svg` nos mesmos nomes.

## Validação executada

- `node --check` em todos os arquivos JavaScript.
- Rebuild manual do bundle a partir dos chunks.
- Verificação de referências locais do HTML.
- Verificação dos brasões esperados para DF/PF/PRF.
- Carga estática do bundle em VM Node com DOM simulado para detectar erro de execução inicial.

