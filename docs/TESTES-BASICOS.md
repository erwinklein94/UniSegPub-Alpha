# Testes básicos do UniSegPub

## Objetivo

Proteger os comportamentos principais do projeto durante refatorações pequenas e médias, sem depender de framework, navegador real ou pacotes externos.

## Comando principal

Na raiz do projeto:

```bash
python scripts/test-basic-behaviors.py
```

## O que os testes cobrem

- Existência das páginas públicas principais.
- Metadados mínimos de HTML, `canonical` e `data-page`.
- Estrutura compartilhada do app: header, seletor institucional, menu lateral, navegação inferior e toast.
- Menu ativo por página.
- IDs usados pelos fluxos principais:
  - home;
  - remuneração;
  - direitos;
  - poderes e deveres;
  - brasões;
  - concursos;
  - comparador;
  - ações judiciais;
  - associações e sindicatos;
  - produtos;
  - anuncie;
  - 404.
- Referências locais de `href` e `src`.
- Links `target="_blank"` com `noopener`.
- Ordem crítica de scripts globais.
- Contratos mínimos dos arquivos de dados estáticos.
- Sintaxe JavaScript com `node --check`.
- Validação do JSON de brasões e existência das imagens.
- Categorias de produtos usadas no HTML versus `produtos-data.js`.
- Templates gerando o HTML público atual.
- `sitemap.xml` e `robots.txt`.
- Nomes de arquivos web sem caracteres arriscados.

## Quando rodar

Rodar antes e depois de cada refatoração:

```bash
python scripts/test-basic-behaviors.py
```

Se algum teste falhar, a alteração deve parar até a causa ser entendida.
