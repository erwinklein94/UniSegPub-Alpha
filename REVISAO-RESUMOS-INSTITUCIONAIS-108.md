# Revisão dos resumos institucionais — 108 instituições

Data da revisão: 02/05/2026

## Escopo

Foram revisados os resumos institucionais estaduais do site:

- 27 Polícias Militares
- 27 Corpos de Bombeiros Militares
- 27 Polícias Civis
- 27 Polícias Penais

Total revisado: **108 instituições estaduais**.

As instituições federais PF e PRF também foram mantidas no site e normalizadas quando havia campo pendente, mas não entram na contagem das 108 instituições estaduais.

## Ajustes aplicados

- Padronização dos campos pendentes com o texto exato: **"Dados em breve"**.
- Complementação de campos básicos ausentes: nome, sigla, estado, UF e tipo institucional.
- Atualização do campo de governador/chefe do Executivo por UF conforme a revisão pública disponível em 02/05/2026.
- Preservação dos dados numéricos já cadastrados quando não estavam marcados como pendentes.
- Substituição dos fallbacks visuais de "Não informado" por **"Dados em breve"** nos cards de resumo institucional.
- Inclusão de `populacaoLabel` para evitar que campos sem população apareçam como zero ou texto genérico.

## Campos revisados

Campos verificados em cada resumo:

- Criação
- Efetivo ativo
- Reserva/inativos
- Integrantes femininas
- População ou presos atendidos
- Relação ativa/população ou ativa/presos
- Chefe do Executivo
- Comando/direção atual
- Fonte
- Atualização

## Resultado da checagem técnica

- Resumos estaduais avaliados: **108**
- Resumos estaduais ausentes: **0**
- Referências locais `.webp` quebradas: **0**
- Imagens pesadas PNG/JPG/JPEG dentro de `img/`: **0**
- `node --check js/dist/app.bundle.js`: aprovado
- `node --check js/chunks/06-header-estados.js`: aprovado
- `node --check js/ui/header-estados.js`: aprovado
- `node --check js/brasao-lightbox.js`: aprovado
- `node --check js/ui/head.js`: aprovado
- Eventos `data-action` do HTML cobertos no bundle: aprovado
- Funções chamadas pelos eventos centralizados (`safeCall`) encontradas: aprovado

## Observação

Os brasões que ainda não foram adicionados continuam usando fallback visual quando a imagem WebP não existe. Assim que os novos brasões forem incluídos, o site já está preparado para usar os arquivos `.webp` nos caminhos corretos.
