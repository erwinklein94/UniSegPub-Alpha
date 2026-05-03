# Alterações aplicadas — DF, instituições federais e brasões

## Estruturas abertas

Foram preparadas estruturas para preenchimento posterior das seguintes instituições:

- PMDF — Polícia Militar do Distrito Federal
- PCDF — Polícia Civil do Distrito Federal
- PPDF — Polícia Penal do Distrito Federal
- BMDF — Corpo de Bombeiros Militar do Distrito Federal
- PF — Polícia Federal
- PRF — Polícia Rodoviária Federal

As estruturas usam textos de preenchimento, sem copiar valores remuneratórios de outra instituição. Isso evita dado incorreto enquanto as informações oficiais ainda serão abastecidas.

## Locais cobertos pela estrutura

- Seletor de instituições no cabeçalho e no formulário principal
- Cartão/resumo institucional do cabeçalho
- Cargos base para simulação e direitos
- Remuneração tabelada com linhas “A confirmar”
- Concursos
- Ações/direitos
- Associações/sindicatos
- Navegação por DF e opção BR/Federais

## Brasões e imagens

Foram habilitados caminhos padronizados para brasões em:

- `img/pmdf.webp`
- `img/pcdf.webp`
- `img/ppdf.webp`
- `img/bmdf.webp`
- `img/pf.webp`
- `img/prf.webp`

Também foi criado fallback automático para procurar, nessa ordem: `.webp`, `.png`, `.jpeg`, `.jpg`, `.svg`. Assim, se o arquivo for adicionado depois com uma dessas extensões, o cabeçalho tentará carregar sem nova alteração de lógica.

## Imagens otimizadas

Foram criadas versões WebP leves para brasões de bombeiros que estavam em PNG pesado:

- `img/bmsp.webp`
- `img/bmrj.webp`
- `img/bmmg.webp`

O código agora aponta para essas versões WebP, mantendo os PNGs originais como fallback.

## Brasões ainda ausentes no pacote recebido

Não foram encontrados arquivos para:

- PMDF
- PCDF
- PPDF
- BMDF
- PF
- PRF

Quando esses arquivos forem adicionados à pasta `img/`, preferencialmente com os nomes padronizados acima, o site já estará preparado para usá-los.
