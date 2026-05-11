/* ============================================================
   UniSegPub — Dados da vitrine de produtos
   Edite este arquivo para incluir, remover ou ajustar cards da aba Produtos.
   A renderização fica em js/pages/produtos-render.js.
   ============================================================ */
(function () {
  'use strict';

  const PRODUTOS_LIVROS_EBOOKS_FALLBACK = [
    {
      "titulo": "Pacote - Viva Sem Procrastinar",
      "href": "https://go.hotmart.com/C105562969M?dp=1",
      "ariaLabel": "Abrir Pacote Viva Sem Procrastinar",
      "classes": [
        "curso-card",
        "produto-card"
      ],
      "rel": "noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
        "wrapClasses": [
          "produto-imagem"
        ],
        "src": "img/HOTMART/vivasemprocastinar.webp",
        "alt": "Pacote - Viva Sem Procrastinar",
        "decoding": "async",
        "loading": "lazy",
        "dataAttrs": {
          "data-img-base": "img/HOTMART/vivasemprocastinar"
        }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Pacote voltado para quem deseja combater a procrastinação, melhorar a rotina e construir mais atitude prática no dia a dia.",
      "metaAriaLabel": "Destaques do produto",
      "meta": [
        "Material digital",
        "Procrastinação",
        "Saúde mental",
        "Desenvolvimento pessoal"
      ],
      "cta": "Ver na loja"
    },
    {
      "titulo": "Otimizando o Cérebro para Concursos Públicos",
      "href": "https://go.hotmart.com/U105563061C?dp=1",
      "ariaLabel": "Abrir Otimizando o Cérebro para Concursos Públicos",
      "classes": [
        "curso-card",
        "produto-card"
      ],
      "rel": "noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
        "wrapClasses": [
          "produto-imagem"
        ],
        "src": "img/HOTMART/otimizando.webp",
        "alt": "OTIMIZANDO O CÉREBRO PARA CONCURSOS PÚBLICOS",
        "decoding": "async",
        "loading": "lazy",
        "dataAttrs": {
          "data-img-base": "img/HOTMART/otimizando"
        }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "E-book com técnicas para melhorar memória, concentração, aprendizado, organização do tempo e produtividade nos estudos para concursos.",
      "metaAriaLabel": "Destaques do livro",
      "meta": [
        "E-book",
        "Concursos",
        "Neurociências",
        "Produtividade"
      ],
      "cta": "Ver na loja"
    },
    {
      "titulo": "Além da Farda: O Código da Travessia",
      "href": "https://go.hotmart.com/Y105563100L?dp=1",
      "ariaLabel": "Abrir Além da Farda O Código da Travessia",
      "classes": [
        "curso-card",
        "produto-card"
      ],
      "rel": "noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
        "wrapClasses": [
          "produto-imagem"
        ],
        "src": "img/HOTMART/alemdafarda.webp",
        "alt": "ALÉM DA FARDA: O Código da Travessia",
        "decoding": "async",
        "loading": "lazy",
        "dataAttrs": {
          "data-img-base": "img/HOTMART/alemdafarda"
        }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Manual de reconstrução de identidade e transição do modo institucional para uma vida com mais autonomia, estratégia e consciência de valor.",
      "metaAriaLabel": "Destaques do livro",
      "meta": [
        "Livro digital",
        "Transição",
        "Carreira",
        "Vida pós-farda"
      ],
      "cta": "Ver na loja"
    },
    {
      "titulo": "Método DMA: Vença a Procrastinação e Alcance o Sucesso em seus Objetivos",
      "href": "https://go.hotmart.com/V105563143D",
      "ariaLabel": "Abrir Método DMA",
      "classes": [
        "curso-card",
        "produto-card"
      ],
      "rel": "noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
        "wrapClasses": [
          "produto-imagem"
        ],
        "src": "img/HOTMART/disciplinamilitaraplicada.webp",
        "alt": "Método DMA: vença a procrastinação e alcance o sucesso em seus objetivos",
        "decoding": "async",
        "loading": "lazy",
        "dataAttrs": {
          "data-img-base": "img/HOTMART/disciplinamilitaraplicada"
        }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Método de planejamento, gestão de tempo, disciplina e desenvolvimento pessoal para quem busca mais resultado na vida profissional e pessoal.",
      "metaAriaLabel": "Destaques do livro",
      "meta": [
        "Material digital",
        "Planejamento",
        "Gestão de tempo",
        "Disciplina"
      ],
      "cta": "Ver na loja"
    },
    {
      "titulo": "Táticas de Liderança Militar Aplicadas ao Dia a Dia",
      "href": "https://go.hotmart.com/M105563187S?dp=1",
      "ariaLabel": "Abrir Táticas de Liderança Militar Aplicadas ao Dia a Dia",
      "classes": [
        "curso-card",
        "produto-card"
      ],
      "rel": "noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
        "wrapClasses": [
          "produto-imagem"
        ],
        "src": "img/HOTMART/taticadeliderancamilitar.webp",
        "alt": "Táticas de Liderança Militar Aplicadas ao Dia a Dia",
        "decoding": "async",
        "loading": "lazy",
        "dataAttrs": {
          "data-img-base": "img/HOTMART/taticadeliderancamilitar"
        }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "E-book sobre disciplina, liderança, tomada de decisão, comunicação objetiva e organização da rotina com princípios militares.",
      "metaAriaLabel": "Destaques do livro",
      "meta": [
        "E-book",
        "Liderança",
        "Disciplina",
        "Tomada de decisão"
      ],
      "cta": "Ver na loja"
    }
  ];

  window.UNISEGPUB_PRODUTOS = {
  "produtosFisicos": [
    {
      "titulo": "Mochila Militar Tática Impermeável 50 L Grande Reforçada c/ 2 Bandeiras Brasil/EUA",
      "href": "https://s.shopee.com.br/901i8h9IK5",
      "ariaLabel": "Ver na loja Mochila Militar Tática Impermeável 50 L Grande Reforçada c/ 2 Bandeiras Brasil/EUA",
      "classes": [
        "curso-card",
        "produto-card",
        "produto-card--destaque"
      ],
      "rel": "noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {
        "data-ad-area": "produtos_topo"
      },
      "imagem": {
        "wrapClasses": [
          "produto-imagem"
        ],
        "src": "img/SHOPEE/mochilaimpermeavel50l.webp",
        "alt": "Mochila Militar Tática Impermeável 50 L Grande Reforçada c/ 2 Bandeiras Brasil/EUA",
        "decoding": "async",
        "loading": "lazy",
        "dataAttrs": {
          "data-img-base": "img/SHOPEE/mochilaimpermeavel50l"
        }
      },
      "adLabel": "Produto em destaque",
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Mochila tática impermeável de 50 L, grande e reforçada, indicada para rotina operacional, estudos, viagens, treinos e organização de equipamentos. Acompanha 2 bandeiras Brasil/EUA.",
      "meta": [],
      "cta": "Ver na loja"
    },
    {
      "titulo": "Mochila Coban Tática Militar Reforçada 24 L",
      "href": "https://s.shopee.com.br/8V5RQXr16n",
      "ariaLabel": "Abrir Mochila Coban Tática Militar Reforçada 24 L",
      "classes": [
        "curso-card",
        "produto-card"
      ],
      "rel": "noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
        "wrapClasses": [
          "produto-imagem"
        ],
        "src": "img/SHOPEE/mochilacoban.webp",
        "alt": "Mochila Coban Tática Militar Reforçada 24 L",
        "decoding": "async",
        "loading": "lazy",
        "dataAttrs": {
          "data-img-base": "img/SHOPEE/mochilacoban"
        }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Mochila tática de 24 L para organizar equipamentos, itens pessoais e acessórios da rotina operacional, de estudos ou de deslocamento diário. Uma opção prática para quem precisa transportar materiais com mais resistência e organização.",
      "metaAriaLabel": "Destaques do produto",
      "meta": [
        "Produto físico",
        "Uso operacional",
        "24 L"
      ],
      "cta": "Ver na loja"
    },
    {
      "titulo": "Barra fixa para porta",
      "href": "https://s.shopee.com.br/9fHIyi0uae",
      "ariaLabel": "Abrir barra fixa para porta",
      "classes": [
        "curso-card",
        "produto-card"
      ],
      "rel": "noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
        "wrapClasses": [
          "produto-imagem"
        ],
        "src": "img/SHOPEE/barrafixa01.webp",
        "alt": "Barra fixa para porta",
        "decoding": "async",
        "loading": "lazy",
        "dataAttrs": {
          "data-img-base": "img/SHOPEE/barrafixa01"
        }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Equipamento simples para treinar barra fixa em casa, fortalecer costas, braços e pegada, ajudando na preparação para o TAF.",
      "metaAriaLabel": "Destaques do produto",
      "meta": [
        "Produto físico",
        "TAF",
        "Treino em casa"
      ],
      "cta": "Ver na loja"
    },
    {
      "titulo": "BOTA ACERO COURO COLT PADRÃO POLICIA MILITAR SP",
      "href": "https://s.shopee.com.br/1qYSZj5bki",
      "ariaLabel": "Abrir BOTA ACERO COURO COLT PADRÃO POLICIA MILITAR SP",
      "classes": [
        "curso-card",
        "produto-card"
      ],
      "rel": "noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
        "wrapClasses": [
          "produto-imagem"
        ],
        "src": "img/SHOPEE/botaacero.webp",
        "alt": "BOTA ACERO COURO COLT PADRÃO POLICIA MILITAR SP",
        "decoding": "async",
        "loading": "lazy",
        "dataAttrs": {
          "data-img-base": "img/SHOPEE/botaacero"
        }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "No trabalho policial, uma boa bota ajuda na estabilidade, proteção dos pés e tornozelos, aderência em deslocamentos e conforto em longas jornadas. Isso favorece mobilidade, postura e segurança durante patrulhamento, plantões, abordagens e ocorrências.",
      "metaAriaLabel": "Destaques do produto",
      "meta": [
        "Produto físico",
        "Uso operacional",
        "Conforto e proteção"
      ],
      "cta": "Ver na loja"
    },
    {
      "titulo": "Power Rack Funcional com paralelas",
      "href": "https://s.shopee.com.br/9fHJ0X4HVl",
      "ariaLabel": "Abrir Power Rack Funcional",
      "classes": [
        "curso-card",
        "produto-card"
      ],
      "rel": "noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
        "wrapClasses": [
          "produto-imagem"
        ],
        "src": "img/SHOPEE/barrafixa02.webp",
        "alt": "Power Rack Funcional com paralelas, suporte de agachamento, supino, barra fixa e barra paralela",
        "decoding": "async",
        "loading": "lazy",
        "dataAttrs": {
          "data-img-base": "img/SHOPEE/barrafixa02"
        }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Estrutura mais completa para treinar barra fixa, paralelas, agachamento e supino, criando uma rotina física mais forte para concursos policiais.",
      "metaAriaLabel": "Destaques do produto",
      "meta": [
        "Produto físico",
        "TAF",
        "Treino completo"
      ],
      "cta": "Ver na loja"
    },
    {
      "titulo": "Colete à Prova d'Água Unissex para Peito - Bolsa para Corrida Esportiva ao Ar Livre (Preto)",
      "href": "https://s.shopee.com.br/8V5UTFtI4n",
      "ariaLabel": "Ver na loja Colete à Prova d'Água Unissex para Peito - Bolsa para Corrida Esportiva ao Ar Livre (Preto)",
      "classes": [
        "curso-card",
        "produto-card"
      ],
      "rel": "noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
        "wrapClasses": [
          "produto-imagem"
        ],
        "src": "img/SHOPEE/coletepeito.webp",
        "alt": "Colete à Prova d'Água Unissex para Peito - Bolsa para Corrida Esportiva ao Ar Livre (Preto)",
        "decoding": "async",
        "loading": "lazy",
        "dataAttrs": {
          "data-img-base": "img/SHOPEE/coletepeito"
        }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Colete de peito unissex em preto, útil para corrida, caminhada, treino ao ar livre e deslocamentos rápidos. Ajuda a carregar celular, documentos e pequenos itens com mais praticidade e segurança.",
      "metaAriaLabel": "Destaques do produto",
      "meta": [
        "Produto físico",
        "Corrida e caminhada",
        "À prova d'água"
      ],
      "cta": "Ver na loja"
    },
    {
      "titulo": "Calças De Carga De Alta Qualidade Novos Homens Táticas À Prova D'água Do Exército Usuários Fora De Esportes Long Hiking",
      "href": "https://s.shopee.com.br/9fHRseGBA0",
      "ariaLabel": "Ver na loja Calças De Carga De Alta Qualidade Novos Homens Táticas À Prova D'água Do Exército Usuários Fora De Esportes Long Hiking",
      "classes": [
        "curso-card",
        "produto-card"
      ],
      "rel": "noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
        "wrapClasses": [
          "produto-imagem"
        ],
        "src": "img/SHOPEE/calcadecarga1.webp",
        "alt": "Calças De Carga De Alta Qualidade Novos Homens Táticas À Prova D'água Do Exército Usuários Fora De Esportes Long Hiking",
        "decoding": "async",
        "loading": "lazy",
        "dataAttrs": {
          "data-img-base": "img/SHOPEE/calcadecarga1"
        }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Calça cargo tática masculina para uso externo, trilhas, caminhada e rotina operacional leve. Possui proposta resistente, bolsos utilitários e proteção para atividades ao ar livre.",
      "metaAriaLabel": "Destaques do produto",
      "meta": [
        "Produto físico",
        "Uso tático",
        "Outdoor"
      ],
      "cta": "Ver na loja"
    },
    {
      "titulo": "Boné De Beisebol Masculino Camuflado Com Caveira, Chapéu Tático Para Pesca E Caminhada Ao Ar Livre O Verão",
      "href": "https://s.shopee.com.br/8Km4Irus3i",
      "ariaLabel": "Ver na loja Boné De Beisebol Masculino Camuflado Com Caveira, Chapéu Tático Para Pesca E Caminhada Ao Ar Livre O Verão",
      "classes": [
        "curso-card",
        "produto-card"
      ],
      "rel": "noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
        "wrapClasses": [
          "produto-imagem"
        ],
        "src": "img/SHOPEE/bonecaveira.webp",
        "alt": "Boné De Beisebol Masculino Camuflado Com Caveira, Chapéu Tático Para Pesca E Caminhada Ao Ar Livre O Verão",
        "decoding": "async",
        "loading": "lazy",
        "dataAttrs": {
          "data-img-base": "img/SHOPEE/bonecaveira"
        }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Boné camuflado com estampa de caveira, indicado para pesca, caminhada, treinos e uso casual em dias de sol. Uma opção leve para proteção e estilo tático no cotidiano.",
      "metaAriaLabel": "Destaques do produto",
      "meta": [
        "Produto físico",
        "Boné tático",
        "Uso outdoor"
      ],
      "cta": "Ver na loja"
    },
    {
      "titulo": "Lanterna Led Militar 3 Em 1 T9 Tática Potente Forte Longo Alcance USB Recarregável Pesca Camping",
      "href": "https://s.shopee.com.br/9Uy1hagpxm",
      "ariaLabel": "Ver na loja Lanterna Led Militar 3 Em 1 T9 Tática Potente Forte Longo Alcance USB Recarregável Pesca Camping",
      "classes": [
        "curso-card",
        "produto-card"
      ],
      "rel": "noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
        "wrapClasses": [
          "produto-imagem"
        ],
        "src": "img/SHOPEE/lanterna.webp",
        "alt": "Lanterna Led Militar 3 Em 1 T9 Tática Potente Forte Longo Alcance USB Recarregável Pesca Camping",
        "decoding": "async",
        "loading": "lazy",
        "dataAttrs": {
          "data-img-base": "img/SHOPEE/lanterna"
        }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Lanterna LED tática recarregável, pensada para camping, pesca, uso emergencial e atividades noturnas. Produto prático para quem precisa de iluminação forte e fácil transporte.",
      "metaAriaLabel": "Destaques do produto",
      "meta": [
        "Produto físico",
        "Lanterna tática",
        "Recarregável"
      ],
      "cta": "Ver na loja"
    },
    {
      "titulo": "Cinto Premium com Fivela de Liga Metálica - Cinto Militar Largo em Nylon com Fivela Unissex de Engate Rápido Resistente",
      "href": "https://s.shopee.com.br/2qR7lnxjWo",
      "ariaLabel": "Ver na loja Cinto Premium com Fivela de Liga Metálica - Cinto Militar Largo em Nylon com Fivela Unissex de Engate Rápido Resistente",
      "classes": [
        "curso-card",
        "produto-card"
      ],
      "rel": "noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
        "wrapClasses": [
          "produto-imagem"
        ],
        "src": "img/SHOPEE/cintotatico.webp",
        "alt": "Cinto Premium com Fivela de Liga Metálica - Cinto Militar Largo em Nylon com Fivela Unissex de Engate Rápido Resistente",
        "decoding": "async",
        "loading": "lazy",
        "dataAttrs": {
          "data-img-base": "img/SHOPEE/cintotatico"
        }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Cinto militar em nylon largo com fivela metálica e engate rápido. Boa alternativa para uso diário, trilhas, atividades externas e composição de equipamentos táticos leves.",
      "metaAriaLabel": "Destaques do produto",
      "meta": [
        "Produto físico",
        "Cinto tático",
        "Engate rápido"
      ],
      "cta": "Ver na loja"
    },
    {
      "titulo": "Presilha Cinto Tático Preto Nylon Belt Keeper Coldre PM Polícia Militar GM Segurança",
      "href": "https://s.shopee.com.br/gMdCBBSkJ",
      "ariaLabel": "Ver na loja Presilha Cinto Tático Preto Nylon Belt Keeper Coldre PM Polícia Militar GM Segurança",
      "classes": [
        "curso-card",
        "produto-card"
      ],
      "rel": "noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
        "wrapClasses": [
          "produto-imagem"
        ],
        "src": "img/SHOPEE/presilha.webp",
        "alt": "Presilha Cinto Tático Preto Nylon Belt Keeper Coldre PM Polícia Militar GM Segurança",
        "decoding": "async",
        "loading": "lazy",
        "dataAttrs": {
          "data-img-base": "img/SHOPEE/presilha"
        }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Presilha em nylon para auxiliar na fixação de cinto tático, coldre e acessórios. Indicada para melhorar organização, firmeza e segurança no transporte de equipamentos.",
      "metaAriaLabel": "Destaques do produto",
      "meta": [
        "Produto físico",
        "Acessório tático",
        "Nylon"
      ],
      "cta": "Ver na loja"
    },
    {
      "titulo": "Cinto Modular Tático Modular Militar Coyote Original Unistar",
      "href": "https://s.shopee.com.br/7ppnjfBlrP",
      "ariaLabel": "Ver na loja Cinto Modular Tático Modular Militar Coyote Original Unistar",
      "classes": [
        "curso-card",
        "produto-card"
      ],
      "rel": "noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
        "wrapClasses": [
          "produto-imagem"
        ],
        "src": "img/SHOPEE/cintomodular.webp",
        "alt": "Cinto Modular Tático Modular Militar Coyote Original Unistar",
        "decoding": "async",
        "loading": "lazy",
        "dataAttrs": {
          "data-img-base": "img/SHOPEE/cintomodular"
        }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Cinto modular tático na cor coyote, voltado para organização de acessórios e equipamentos. Útil para atividades operacionais, treinamento e montagem de kit tático.",
      "metaAriaLabel": "Destaques do produto",
      "meta": [
        "Produto físico",
        "Cinto modular",
        "Uso tático"
      ],
      "cta": "Ver na loja"
    },
    {
      "titulo": "Bota Coturno Acero Militar Tático Zíper Moto Resistente Couro",
      "href": "https://s.shopee.com.br/70GgkOPSbh",
      "ariaLabel": "Ver na loja Bota Coturno Acero Militar Tático Zíper Moto Resistente Couro",
      "classes": [
        "curso-card",
        "produto-card"
      ],
      "rel": "noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
        "wrapClasses": [
          "produto-imagem"
        ],
        "src": "img/SHOPEE/botaacero2.webp",
        "alt": "Bota Coturno Acero Militar Tático Zíper Moto Resistente Couro",
        "decoding": "async",
        "loading": "lazy",
        "dataAttrs": {
          "data-img-base": "img/SHOPEE/botaacero2"
        }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Coturno Acero militar em couro com zíper, indicado para rotina operacional, moto, trabalho e uso tático. Une proteção, resistência e praticidade no calce.",
      "metaAriaLabel": "Destaques do produto",
      "meta": [
        "Produto físico",
        "Coturno",
        "Couro e zíper"
      ],
      "cta": "Ver na loja"
    },
    {
      "titulo": "Tênis Masculino e Feminino Militar Tático Acero Botas Ripstop Ponto .40",
      "href": "https://s.shopee.com.br/4LFvZrdWL3",
      "ariaLabel": "Ver na loja Tênis Masculino e Feminino Militar Tático Acero Botas Ripstop Ponto .40",
      "classes": [
        "curso-card",
        "produto-card"
      ],
      "rel": "noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
        "wrapClasses": [
          "produto-imagem"
        ],
        "src": "img/SHOPEE/tenisacero1.webp",
        "alt": "Tênis Masculino e Feminino Militar Tático Acero Botas Ripstop Ponto .40",
        "decoding": "async",
        "loading": "lazy",
        "dataAttrs": {
          "data-img-base": "img/SHOPEE/tenisacero1"
        }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Tênis/bota tática Acero em proposta unissex, com visual militar e material ripstop. Opção para quem busca calçado leve, resistente e versátil para rotina ou treino.",
      "metaAriaLabel": "Destaques do produto",
      "meta": [
        "Produto físico",
        "Calçado tático",
        "Unissex"
      ],
      "cta": "Ver na loja"
    },
    {
      "titulo": "Organizador de Armário Porta Objetos Organizador Militar",
      "href": "https://s.shopee.com.br/9ALBL0RrAD",
      "ariaLabel": "Ver na loja Organizador de Armário Porta Objetos Organizador Militar",
      "classes": [
        "curso-card",
        "produto-card"
      ],
      "rel": "noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
        "wrapClasses": [
          "produto-imagem"
        ],
        "src": "img/SHOPEE/organizadorarmario.webp",
        "alt": "Organizador de Armário Porta Objetos Organizador Militar",
        "decoding": "async",
        "loading": "lazy",
        "dataAttrs": {
          "data-img-base": "img/SHOPEE/organizadorarmario"
        }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Organizador militar para armário e porta objetos, útil para separar acessórios, roupas, itens operacionais e materiais de rotina com mais ordem e agilidade.",
      "metaAriaLabel": "Destaques do produto",
      "meta": [
        "Produto físico",
        "Organização",
        "Porta objetos"
      ],
      "cta": "Ver na loja"
    },
    {
      "titulo": "Cantil + Porta Cantil Original – Resistência 950 ML",
      "href": "https://s.shopee.com.br/8piKxfAxmV",
      "ariaLabel": "Ver na loja Cantil + Porta Cantil Original – Resistência 950 ML",
      "classes": [
        "curso-card",
        "produto-card"
      ],
      "rel": "noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
        "wrapClasses": [
          "produto-imagem"
        ],
        "src": "img/SHOPEE/cantil950.webp",
        "alt": "Cantil + Porta Cantil Original – Resistência 950 ML",
        "decoding": "async",
        "loading": "lazy",
        "dataAttrs": {
          "data-img-base": "img/SHOPEE/cantil950"
        }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Cantil com porta cantil de 950 ml, voltado para hidratação em treinos, trilhas, atividades externas e rotina operacional. Item simples, resistente e funcional.",
      "metaAriaLabel": "Destaques do produto",
      "meta": [
        "Produto físico",
        "Hidratação",
        "950 ml"
      ],
      "cta": "Ver na loja"
    },
    {
      "titulo": "Relógio Masculino Digital Esportivo Cronômetro Militar – Esportivo, LED e Super Resistente!",
      "href": "https://s.shopee.com.br/3LNOPp1rnC",
      "ariaLabel": "Ver na loja Relógio Masculino Digital Esportivo Cronômetro Militar – Esportivo, LED e Super Resistente!",
      "classes": [
        "curso-card",
        "produto-card"
      ],
      "rel": "noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
        "wrapClasses": [
          "produto-imagem"
        ],
        "src": "img/SHOPEE/relogiotatico.webp",
        "alt": "Relógio Masculino Digital Esportivo Cronômetro Militar – Esportivo, LED e Super Resistente!",
        "decoding": "async",
        "loading": "lazy",
        "dataAttrs": {
          "data-img-base": "img/SHOPEE/relogiotatico"
        }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Relógio digital esportivo com cronômetro, LED e visual militar. Indicado para treino, rotina, atividades externas e controle de tempo no dia a dia.",
      "metaAriaLabel": "Destaques do produto",
      "meta": [
        "Produto físico",
        "Relógio esportivo",
        "Cronômetro"
      ],
      "cta": "Ver na loja"
    },
    {
      "titulo": "PRF 1.001 Questões Comentadas - AlfaCon - Concursos Carreiras Policiais",
      "href": "https://s.shopee.com.br/1BItze7fTw",
      "ariaLabel": "Ver na loja PRF 1.001 Questões Comentadas - AlfaCon - Concursos Carreiras Policiais",
      "classes": [
        "curso-card",
        "produto-card"
      ],
      "rel": "sponsored noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
        "wrapClasses": [
          "produto-imagem"
        ],
        "src": "img/SHOPEE/prfquestoesalfacon.webp",
        "alt": "PRF 1.001 Questões Comentadas - AlfaCon - Concursos Carreiras Policiais",
        "decoding": "async",
        "loading": "lazy",
        "dataAttrs": {
          "data-img-base": "img/SHOPEE/prfquestoesalfacon"
        }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Material de estudo com questões comentadas para candidatos da PRF e carreiras policiais, útil para revisar conteúdo, treinar interpretação de enunciados e fortalecer a preparação por exercícios.",
      "metaAriaLabel": "Destaques do produto",
      "meta": [
        "Produto físico",
        "PRF",
        "Questões comentadas"
      ],
      "cta": "Ver na loja"
    },
    {
      "titulo": "Apostila Polícia Federal (PF) - Delegado de Polícia Federal",
      "href": "https://s.shopee.com.br/10zTo819rd",
      "ariaLabel": "Ver na loja Apostila Polícia Federal (PF) - Delegado de Polícia Federal",
      "classes": [
        "curso-card",
        "produto-card"
      ],
      "rel": "sponsored noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
        "wrapClasses": [
          "produto-imagem"
        ],
        "src": "img/SHOPEE/apostilapfdelegado.webp",
        "alt": "Apostila Polícia Federal (PF) - Delegado de Polícia Federal",
        "decoding": "async",
        "loading": "lazy",
        "dataAttrs": {
          "data-img-base": "img/SHOPEE/apostilapfdelegado"
        }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Apostila impressa voltada ao cargo de Delegado da Polícia Federal, indicada para organizar a preparação, revisar disciplinas exigidas e manter um material de consulta direcionado ao concurso.",
      "metaAriaLabel": "Destaques do produto",
      "meta": [
        "Produto físico",
        "PF",
        "Delegado"
      ],
      "cta": "Ver na loja"
    },
    {
      "titulo": "Apostila Polícia Federal (PF) 2026 - Escrivão de Polícia Federal",
      "href": "https://s.shopee.com.br/9KebjbAPje",
      "ariaLabel": "Ver na loja Apostila Polícia Federal (PF) 2026 - Escrivão de Polícia Federal",
      "classes": [
        "curso-card",
        "produto-card"
      ],
      "rel": "sponsored noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
        "wrapClasses": [
          "produto-imagem"
        ],
        "src": "img/SHOPEE/apostilapfescrivao.webp",
        "alt": "Apostila Polícia Federal (PF) 2026 - Escrivão de Polícia Federal",
        "decoding": "async",
        "loading": "lazy",
        "dataAttrs": {
          "data-img-base": "img/SHOPEE/apostilapfescrivao"
        }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Material impresso direcionado ao cargo de Escrivão da Polícia Federal, com foco em estudo organizado, revisão objetiva e acompanhamento da preparação para o concurso PF 2026.",
      "metaAriaLabel": "Destaques do produto",
      "meta": [
        "Produto físico",
        "PF 2026",
        "Escrivão"
      ],
      "cta": "Ver na loja"
    },
    {
      "titulo": "Apostila Polícia Federal (PF) 2026 - Papiloscopista Policial Federal",
      "href": "https://s.shopee.com.br/9Uy1w73uSI",
      "ariaLabel": "Ver na loja Apostila Polícia Federal (PF) 2026 - Papiloscopista Policial Federal",
      "classes": [
        "curso-card",
        "produto-card"
      ],
      "rel": "sponsored noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
        "wrapClasses": [
          "produto-imagem"
        ],
        "src": "img/SHOPEE/apostilapfpapiloscopista.webp",
        "alt": "Apostila Polícia Federal (PF) 2026 - Papiloscopista Policial Federal",
        "decoding": "async",
        "loading": "lazy",
        "dataAttrs": {
          "data-img-base": "img/SHOPEE/apostilapfpapiloscopista"
        }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Apostila para candidatos ao cargo de Papiloscopista Policial Federal, pensada para apoiar a rotina de estudos, revisões e preparação específica para o concurso da PF.",
      "metaAriaLabel": "Destaques do produto",
      "meta": [
        "Produto físico",
        "PF 2026",
        "Papiloscopista"
      ],
      "cta": "Ver na loja"
    },
    {
      "titulo": "Apostila Completa PRF - Agente Administrativo da Polícia Rodoviária Federal",
      "href": "https://s.shopee.com.br/9pasKuSzle",
      "ariaLabel": "Ver na loja Apostila Completa PRF - Agente Administrativo da Polícia Rodoviária Federal",
      "classes": [
        "curso-card",
        "produto-card"
      ],
      "rel": "sponsored noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
        "wrapClasses": [
          "produto-imagem"
        ],
        "src": "img/SHOPEE/apostilaprfagenteadm.webp",
        "alt": "Apostila Completa PRF - Agente Administrativo da Polícia Rodoviária Federal",
        "decoding": "async",
        "loading": "lazy",
        "dataAttrs": {
          "data-img-base": "img/SHOPEE/apostilaprfagenteadm"
        }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Apostila completa para quem estuda para Agente Administrativo da PRF, reunindo material de apoio para leitura, revisão e organização dos principais pontos da preparação.",
      "metaAriaLabel": "Destaques do produto",
      "meta": [
        "Produto físico",
        "PRF",
        "Agente administrativo"
      ],
      "cta": "Ver na loja"
    },
    {
      "titulo": "Apostila Polícia Federal (PF) 2026 - Perito Criminal Federal - Medicina Legal",
      "href": "https://s.shopee.com.br/qg3cYrOLn",
      "ariaLabel": "Ver na loja Apostila Polícia Federal (PF) 2026 - Perito Criminal Federal - Medicina Legal",
      "classes": [
        "curso-card",
        "produto-card"
      ],
      "rel": "sponsored noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
        "wrapClasses": [
          "produto-imagem"
        ],
        "src": "img/SHOPEE/apostilapfperito.webp",
        "alt": "Apostila Polícia Federal (PF) 2026 - Perito Criminal Federal - Medicina Legal",
        "decoding": "async",
        "loading": "lazy",
        "dataAttrs": {
          "data-img-base": "img/SHOPEE/apostilapfperito"
        }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Material direcionado ao cargo de Perito Criminal Federal na área de Medicina Legal, útil para complementar a preparação, organizar revisões e apoiar os estudos específicos da PF.",
      "metaAriaLabel": "Destaques do produto",
      "meta": [
        "Produto físico",
        "PF 2026",
        "Perito criminal"
      ],
      "cta": "Ver na loja"
    },
    {
      "titulo": "Apostila impressa concurso da Polícia Federal PF 2025 - Agente Administrativo da Polícia Federal",
      "href": "https://s.shopee.com.br/9KebkNcBTH",
      "ariaLabel": "Ver na loja Apostila impressa concurso da Polícia Federal PF 2025 - Agente Administrativo da Polícia Federal",
      "classes": [
        "curso-card",
        "produto-card"
      ],
      "rel": "sponsored noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
        "wrapClasses": [
          "produto-imagem"
        ],
        "src": "img/SHOPEE/apostilapfagenteadm.webp",
        "alt": "Apostila impressa concurso da Polícia Federal PF 2025 - Agente Administrativo da Polícia Federal",
        "decoding": "async",
        "loading": "lazy",
        "dataAttrs": {
          "data-img-base": "img/SHOPEE/apostilapfagenteadm"
        }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Apostila impressa para o cargo de Agente Administrativo da Polícia Federal, indicada para estudo contínuo, revisão de conteúdo e apoio à preparação com material físico.",
      "metaAriaLabel": "Destaques do produto",
      "meta": [
        "Produto físico",
        "PF 2025",
        "Agente administrativo"
      ],
      "cta": "Ver na loja"
    },
    {
      "titulo": "Apostila PRF - Polícia Rodoviária Federal - Policial Rodoviário Federal",
      "href": "https://s.shopee.com.br/9pasLS6Sfs",
      "ariaLabel": "Ver na loja Apostila PRF - Polícia Rodoviária Federal - Policial Rodoviário Federal",
      "classes": [
        "curso-card",
        "produto-card"
      ],
      "rel": "sponsored noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
        "wrapClasses": [
          "produto-imagem"
        ],
        "src": "img/SHOPEE/apostilaprfpolicial.webp",
        "alt": "Apostila PRF - Polícia Rodoviária Federal - Policial Rodoviário Federal",
        "decoding": "async",
        "loading": "lazy",
        "dataAttrs": {
          "data-img-base": "img/SHOPEE/apostilaprfpolicial"
        }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Apostila voltada ao cargo de Policial Rodoviário Federal, ideal para estruturar os estudos, revisar disciplinas e manter um material físico de apoio para a preparação da PRF.",
      "metaAriaLabel": "Destaques do produto",
      "meta": [
        "Produto físico",
        "PRF",
        "Policial rodoviário"
      ],
      "cta": "Ver na loja"
    },
{
      "titulo": "Fiel Retrátil Bélica - Estrela - Preto",
      "href": "https://s.shopee.com.br/8fP6903lIb",
      "ariaLabel": "Ver na loja Fiel Retrátil Bélica - Estrela - Preto",
      "classes": [
            "curso-card",
            "produto-card"
      ],
      "rel": "sponsored noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
            "wrapClasses": [
                  "produto-imagem"
            ],
            "src": "img/SHOPEE/fielretratil.webp",
            "alt": "Fiel Retrátil Bélica - Estrela - Preto",
            "decoding": "async",
            "loading": "lazy",
            "dataAttrs": {
                  "data-img-base": "img/SHOPEE/fielretratil"
            }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Fiel retrátil preto para prender chaves, cartões, apitos ou pequenos acessórios, ajudando na praticidade e na organização da rotina operacional ou diária.",
      "metaAriaLabel": "Destaques do produto",
      "meta": [
            "Produto físico",
            "Acessório tático",
            "Organização"
      ],
      "cta": "Ver na loja"
},
{
      "titulo": "Kit com 5 pares de meia militar Cano longo",
      "href": "https://s.shopee.com.br/1VvvcEu90Z",
      "ariaLabel": "Ver na loja Kit com 5 pares de meia militar Cano longo",
      "classes": [
            "curso-card",
            "produto-card"
      ],
      "rel": "sponsored noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
            "wrapClasses": [
                  "produto-imagem"
            ],
            "src": "img/SHOPEE/meiamilitar.webp",
            "alt": "Kit com 5 pares de meia militar Cano longo",
            "decoding": "async",
            "loading": "lazy",
            "dataAttrs": {
                  "data-img-base": "img/SHOPEE/meiamilitar"
            }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Kit com 5 pares de meias militares de cano longo, indicado para uso com coturno, treinos, plantões e atividades que exigem conforto nos pés por mais tempo.",
      "metaAriaLabel": "Destaques do produto",
      "meta": [
            "Produto físico",
            "Meia militar",
            "Cano longo"
      ],
      "cta": "Ver na loja"
},
{
      "titulo": "Boonie Chapéu Balaclava Terno Dobrável Macio Proteção Solar",
      "href": "https://s.shopee.com.br/6L1BNNI9PF",
      "ariaLabel": "Ver na loja Boonie Chapéu Balaclava Terno Dobrável Macio Proteção Solar",
      "classes": [
            "curso-card",
            "produto-card"
      ],
      "rel": "sponsored noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
            "wrapClasses": [
                  "produto-imagem"
            ],
            "src": "img/SHOPEE/chapeubalaclava.webp",
            "alt": "Boonie Chapéu Balaclava Terno Dobrável Macio Proteção Solar",
            "decoding": "async",
            "loading": "lazy",
            "dataAttrs": {
                  "data-img-base": "img/SHOPEE/chapeubalaclava"
            }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Chapéu boonie dobrável com proposta de proteção solar e uso outdoor, útil para atividades externas, trilhas, instruções, pesca e rotina em dias de sol.",
      "metaAriaLabel": "Destaques do produto",
      "meta": [
            "Produto físico",
            "Proteção solar",
            "Uso outdoor"
      ],
      "cta": "Ver na loja"
},
{
      "titulo": "Bermuda Elásticas Multi-Táticas Rip Stop Impermeável",
      "href": "https://s.shopee.com.br/3qJqP60kht",
      "ariaLabel": "Ver na loja Bermuda Elásticas Multi-Táticas Rip Stop Impermeável",
      "classes": [
            "curso-card",
            "produto-card"
      ],
      "rel": "sponsored noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
            "wrapClasses": [
                  "produto-imagem"
            ],
            "src": "img/SHOPEE/bermudatatica1.webp",
            "alt": "Bermuda Elásticas Multi-Táticas Rip Stop Impermeável",
            "decoding": "async",
            "loading": "lazy",
            "dataAttrs": {
                  "data-img-base": "img/SHOPEE/bermudatatica1"
            }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Bermuda tática elástica em rip stop, com foco em mobilidade, bolsos e uso prático para treinos, atividades externas e deslocamentos do dia a dia.",
      "metaAriaLabel": "Destaques do produto",
      "meta": [
            "Produto físico",
            "Bermuda tática",
            "Rip stop"
      ],
      "cta": "Ver na loja"
},
{
      "titulo": "Calção De Bolso Masculinos Elásticas Multi-Táticas",
      "href": "https://s.shopee.com.br/7fWYyH6ACj",
      "ariaLabel": "Ver na loja Calção De Bolso Masculinos Elásticas Multi-Táticas",
      "classes": [
            "curso-card",
            "produto-card"
      ],
      "rel": "sponsored noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
            "wrapClasses": [
                  "produto-imagem"
            ],
            "src": "img/SHOPEE/bermudatatica2.webp",
            "alt": "Calção De Bolso Masculinos Elásticas Multi-Táticas",
            "decoding": "async",
            "loading": "lazy",
            "dataAttrs": {
                  "data-img-base": "img/SHOPEE/bermudatatica2"
            }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Calção masculino elástico com bolsos e visual multi-tático, indicado para treino, caminhada, lazer e rotinas que pedem conforto com funcionalidade.",
      "metaAriaLabel": "Destaques do produto",
      "meta": [
            "Produto físico",
            "Calção tático",
            "Bolsos"
      ],
      "cta": "Ver na loja"
},
{
      "titulo": "Calça Tática 6 Bolsos Feminina Militar Leve Fina C Elástico",
      "href": "https://s.shopee.com.br/8KmFlmRYZx",
      "ariaLabel": "Ver na loja Calça Tática 6 Bolsos Feminina Militar Leve Fina C Elástico",
      "classes": [
            "curso-card",
            "produto-card"
      ],
      "rel": "sponsored noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
            "wrapClasses": [
                  "produto-imagem"
            ],
            "src": "img/SHOPEE/calcataticafeminina.webp",
            "alt": "Calça Tática 6 Bolsos Feminina Militar Leve Fina C Elástico",
            "decoding": "async",
            "loading": "lazy",
            "dataAttrs": {
                  "data-img-base": "img/SHOPEE/calcataticafeminina"
            }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Calça tática feminina leve com 6 bolsos e elástico, pensada para mobilidade, organização de pequenos itens e uso em rotina, treino ou atividades externas.",
      "metaAriaLabel": "Destaques do produto",
      "meta": [
            "Produto físico",
            "Calça feminina",
            "6 bolsos"
      ],
      "cta": "Ver na loja"
},
{
      "titulo": "Kit Torniquete Tático Militar Primeiros Socorros + Tesoura Aph Ponta Romba Socorrista",
      "href": "https://s.shopee.com.br/W3ORZciDO",
      "ariaLabel": "Ver na loja Kit Torniquete Tático Militar Primeiros Socorros + Tesoura Aph Ponta Romba Socorrista",
      "classes": [
            "curso-card",
            "produto-card"
      ],
      "rel": "sponsored noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
            "wrapClasses": [
                  "produto-imagem"
            ],
            "src": "img/SHOPEE/kittorniquete.webp",
            "alt": "Kit Torniquete Tático Militar Primeiros Socorros + Tesoura Aph Ponta Romba Socorrista",
            "decoding": "async",
            "loading": "lazy",
            "dataAttrs": {
                  "data-img-base": "img/SHOPEE/kittorniquete"
            }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Kit de primeiros socorros com torniquete tático e tesoura APH de ponta romba, indicado para compor bolsa de emergência e materiais de apoio em situações de atendimento.",
      "metaAriaLabel": "Destaques do produto",
      "meta": [
            "Produto físico",
            "Primeiros socorros",
            "APH"
      ],
      "cta": "Ver na loja"
},
{
      "titulo": "Sapato Scarpin Social Feminino Estilo Sapato Militar Feminino Ideal p/ Escritório ou Escola Militar",
      "href": "https://s.shopee.com.br/8V5fyPVQKt",
      "ariaLabel": "Ver na loja Sapato Scarpin Social Feminino Estilo Sapato Militar Feminino Ideal p/ Escritório ou Escola Militar",
      "classes": [
            "curso-card",
            "produto-card"
      ],
      "rel": "sponsored noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
            "wrapClasses": [
                  "produto-imagem"
            ],
            "src": "img/SHOPEE/sapatosocialfeminino.webp",
            "alt": "Sapato Scarpin Social Feminino Estilo Sapato Militar Feminino Ideal p/ Escritório ou Escola Militar",
            "decoding": "async",
            "loading": "lazy",
            "dataAttrs": {
                  "data-img-base": "img/SHOPEE/sapatosocialfeminino"
            }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Sapato social feminino estilo militar, voltado para uso em escritório, escola militar, eventos formais ou rotinas que exigem apresentação mais alinhada.",
      "metaAriaLabel": "Destaques do produto",
      "meta": [
            "Produto físico",
            "Sapato social",
            "Uso feminino"
      ],
      "cta": "Ver na loja"
},
{
      "titulo": "Patch Bandeira Emborrachada 3d Patch C/ Velcro Militar Tático Brasil Caveira Estados Unidos USA Para Mochila Tática",
      "href": "https://s.shopee.com.br/2BBcR400pI",
      "ariaLabel": "Ver na loja Patch Bandeira Emborrachada 3d Patch C/ Velcro Militar Tático Brasil Caveira Estados Unidos USA Para Mochila Tática",
      "classes": [
            "curso-card",
            "produto-card"
      ],
      "rel": "sponsored noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
            "wrapClasses": [
                  "produto-imagem"
            ],
            "src": "img/SHOPEE/patchbandeira.webp",
            "alt": "Patch Bandeira Emborrachada 3d Patch C/ Velcro Militar Tático Brasil Caveira Estados Unidos USA Para Mochila Tática",
            "decoding": "async",
            "loading": "lazy",
            "dataAttrs": {
                  "data-img-base": "img/SHOPEE/patchbandeira"
            }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Patch emborrachado 3D com velcro para mochila, colete ou acessórios táticos, ideal para personalização visual e identificação de equipamentos.",
      "metaAriaLabel": "Destaques do produto",
      "meta": [
            "Produto físico",
            "Patch tático",
            "Velcro"
      ],
      "cta": "Ver na loja"
},
{
      "titulo": "Palmilha Gel Conforto Laranja Macia Altura Anatômica Acero",
      "href": "https://s.shopee.com.br/901wZlJADp",
      "ariaLabel": "Ver na loja Palmilha Gel Conforto Laranja Macia Altura Anatômica Acero",
      "classes": [
            "curso-card",
            "produto-card"
      ],
      "rel": "sponsored noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
            "wrapClasses": [
                  "produto-imagem"
            ],
            "src": "img/SHOPEE/palmilhagelacero.webp",
            "alt": "Palmilha Gel Conforto Laranja Macia Altura Anatômica Acero",
            "decoding": "async",
            "loading": "lazy",
            "dataAttrs": {
                  "data-img-base": "img/SHOPEE/palmilhagelacero"
            }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Palmilha em gel anatômica e macia, indicada para aumentar o conforto em coturnos, botas, tênis e calçados usados por longos períodos.",
      "metaAriaLabel": "Destaques do produto",
      "meta": [
            "Produto físico",
            "Palmilha em gel",
            "Conforto"
      ],
      "cta": "Ver na loja"
},
{
      "titulo": "Bota Motociclista Acero Cano Alto Couro Proteção Marcha Bico",
      "href": "https://s.shopee.com.br/2VoSq5R4c8",
      "ariaLabel": "Ver na loja Bota Motociclista Acero Cano Alto Couro Proteção Marcha Bico",
      "classes": [
            "curso-card",
            "produto-card"
      ],
      "rel": "sponsored noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
            "wrapClasses": [
                  "produto-imagem"
            ],
            "src": "img/SHOPEE/botamotociclistaacero.webp",
            "alt": "Bota Motociclista Acero Cano Alto Couro Proteção Marcha Bico",
            "decoding": "async",
            "loading": "lazy",
            "dataAttrs": {
                  "data-img-base": "img/SHOPEE/botamotociclistaacero"
            }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Bota motociclista Acero de cano alto em couro, com proposta de proteção para marcha e bico, indicada para moto, trabalho e rotina com mais segurança nos pés.",
      "metaAriaLabel": "Destaques do produto",
      "meta": [
            "Produto físico",
            "Bota motociclista",
            "Couro"
      ],
      "cta": "Ver na loja"
},
{
      "titulo": "Bota Militar Acero Apache 100% Impermeável Couro Leve",
      "href": "https://s.shopee.com.br/3B49dgO2nF",
      "ariaLabel": "Ver na loja Bota Militar Acero Apache 100% Impermeável Couro Leve",
      "classes": [
            "curso-card",
            "produto-card"
      ],
      "rel": "sponsored noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
            "wrapClasses": [
                  "produto-imagem"
            ],
            "src": "img/SHOPEE/botaapacheacero.webp",
            "alt": "Bota Militar Acero Apache 100% Impermeável Couro Leve",
            "decoding": "async",
            "loading": "lazy",
            "dataAttrs": {
                  "data-img-base": "img/SHOPEE/botaapacheacero"
            }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Bota militar Acero Apache em couro, com proposta impermeável e leve, indicada para uso operacional, atividades externas, trabalho e deslocamentos prolongados.",
      "metaAriaLabel": "Destaques do produto",
      "meta": [
            "Produto físico",
            "Bota militar",
            "Impermeável"
      ],
      "cta": "Ver na loja"
},
{
      "titulo": "BOTA COTURNO MILITAR ACERO RIPSTOP MID CORES LEVE CONFORTÁVEL",
      "href": "https://s.shopee.com.br/6AhlDNzax2",
      "ariaLabel": "Ver na loja BOTA COTURNO MILITAR ACERO RIPSTOP MID CORES LEVE CONFORTÁVEL",
      "classes": [
            "curso-card",
            "produto-card"
      ],
      "rel": "sponsored noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
            "wrapClasses": [
                  "produto-imagem"
            ],
            "src": "img/SHOPEE/botamidacero.webp",
            "alt": "BOTA COTURNO MILITAR ACERO RIPSTOP MID CORES LEVE CONFORTÁVEL",
            "decoding": "async",
            "loading": "lazy",
            "dataAttrs": {
                  "data-img-base": "img/SHOPEE/botamidacero"
            }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Coturno militar Acero Mid em ripstop, com proposta leve e confortável para rotina, treinos, trabalho e atividades externas com visual tático.",
      "metaAriaLabel": "Destaques do produto",
      "meta": [
            "Produto físico",
            "Coturno mid",
            "Ripstop"
      ],
      "cta": "Ver na loja"
},
{
      "titulo": "Bota Coturno Militar Acero One Mid Resistente Extra Leve Confortável Cano Baixo",
      "href": "https://s.shopee.com.br/4fsxQnWgNv",
      "ariaLabel": "Ver na loja Bota Coturno Militar Acero One Mid Resistente Extra Leve Confortável Cano Baixo",
      "classes": [
            "curso-card",
            "produto-card"
      ],
      "rel": "sponsored noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
            "wrapClasses": [
                  "produto-imagem"
            ],
            "src": "img/SHOPEE/botatenisacero.webp",
            "alt": "Bota Coturno Militar Acero One Mid Resistente Extra Leve Confortável Cano Baixo",
            "decoding": "async",
            "loading": "lazy",
            "dataAttrs": {
                  "data-img-base": "img/SHOPEE/botatenisacero"
            }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Bota/coturno Acero One Mid de cano baixo, com proposta resistente, extra leve e confortável para quem precisa de mobilidade no dia a dia.",
      "metaAriaLabel": "Destaques do produto",
      "meta": [
            "Produto físico",
            "Cano baixo",
            "Extra leve"
      ],
      "cta": "Ver na loja"
},
{
      "titulo": "Bota Tática Impermeável Acero Pro MAX Couro Legítimo DRYSHIELD Waterproof Solado 320°C",
      "href": "https://s.shopee.com.br/5ApE1wkVIY",
      "ariaLabel": "Ver na loja Bota Tática Impermeável Acero Pro MAX Couro Legítimo DRYSHIELD Waterproof Solado 320°C",
      "classes": [
            "curso-card",
            "produto-card"
      ],
      "rel": "sponsored noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
            "wrapClasses": [
                  "produto-imagem"
            ],
            "src": "img/SHOPEE/botaaceromax.webp",
            "alt": "Bota Tática Impermeável Acero Pro MAX Couro Legítimo DRYSHIELD Waterproof Solado 320°C",
            "decoding": "async",
            "loading": "lazy",
            "dataAttrs": {
                  "data-img-base": "img/SHOPEE/botaaceromax"
            }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Bota tática Acero Pro MAX em couro legítimo, com proposta impermeável e solado resistente ao calor, indicada para uso operacional e atividades exigentes.",
      "metaAriaLabel": "Destaques do produto",
      "meta": [
            "Produto físico",
            "Bota tática",
            "Waterproof"
      ],
      "cta": "Ver na loja"
},
{
      "titulo": "HUAWEI WATCH FIT 5 | Smartwatch Relogio | AMOLED de 182\" Design Leve | Mini Treino | 64 GB | GPS",
      "href": "https://s.shopee.com.br/LjyHJSC0i",
      "ariaLabel": "Ver na loja HUAWEI WATCH FIT 5 | Smartwatch Relogio | AMOLED de 182\" Design Leve | Mini Treino | 64 GB | GPS",
      "classes": [
            "curso-card",
            "produto-card"
      ],
      "rel": "sponsored noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
            "wrapClasses": [
                  "produto-imagem"
            ],
            "src": "img/SHOPEE/relogiohuaweifit5.webp",
            "alt": "HUAWEI WATCH FIT 5 | Smartwatch Relogio | AMOLED de 182\" Design Leve | Mini Treino | 64 GB | GPS",
            "decoding": "async",
            "loading": "lazy",
            "dataAttrs": {
                  "data-img-base": "img/SHOPEE/relogiohuaweifit5"
            }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Smartwatch Huawei Watch Fit 5 com visual leve, recursos de treino e GPS, útil para acompanhar atividades físicas, rotina e métricas de saúde no dia a dia.",
      "metaAriaLabel": "Destaques do produto",
      "meta": [
            "Produto físico",
            "Smartwatch",
            "GPS"
      ],
      "cta": "Ver na loja"
}
  ],
  "cursosGerais": [
    {
      "titulo": "MAPA PMTO: Método de Aprovação Policial Acelerado na Polícia Militar de Tocantins",
      "href": "https://go.hotmart.com/P105668763H?dp=1",
      "ariaLabel": "Abrir MAPA PMTO: Método de Aprovação Policial Acelerado na Polícia Militar de Tocantins",
      "classes": [
        "curso-card",
        "produto-card",
        "produto-card--pmto"
      ],
      "rel": "noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
        "wrapClasses": [
          "produto-imagem",
          "produto-imagem--pmto"
        ],
        "src": "img/HOTMART/cursopmto1.webp",
        "alt": "MAPA PMTO: Método de Aprovação Policial Acelerado na Polícia Militar de Tocantins",
        "decoding": "async",
        "loading": "lazy",
        "dataAttrs": {
          "data-img-base": "img/HOTMART/cursopmto1",
          "data-img-fallback": "img/MILITAR/pmto.webp"
        }
      },
      "badges": [
        "Curso PMTO"
      ],
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Curso preparatório direcionado para candidatos da Polícia Militar do Tocantins, com método de estudo acelerado, organização da preparação e foco na aprovação no concurso da PMTO.",
      "metaAriaLabel": "Destaques do curso",
      "meta": [
        "Curso online",
        "PMTO",
        "Polícia Militar do Tocantins",
        "Preparação acelerada"
      ],
      "cta": "Ver na loja"
    },
    {
      "titulo": "Na Rota PRF",
      "href": "https://go.hotmart.com/A105672755T?dp=1",
      "ariaLabel": "Ver na loja Na Rota PRF",
      "classes": [
        "curso-card",
        "produto-card"
      ],
      "rel": "sponsored noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
        "wrapClasses": [
          "produto-imagem"
        ],
        "src": "img/HOTMART/narotaprf.webp",
        "alt": "Na Rota PRF",
        "decoding": "async",
        "loading": "lazy",
        "dataAttrs": {
          "data-img-base": "img/HOTMART/narotaprf"
        }
      },
      "badges": [
        "Curso PRF"
      ],
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Curso preparatório voltado para quem deseja estudar com foco na Polícia Rodoviária Federal, organizando a preparação, a rotina de estudos e o direcionamento para conteúdos cobrados em carreiras policiais.",
      "metaAriaLabel": "Destaques do curso",
      "meta": [
        "Curso online",
        "PRF",
        "Preparatório",
        "Carreiras policiais"
      ],
      "cta": "Ver na loja"
    }
  ],
  "cursosPmesp": [
    {
      "titulo": "Curso Preparatório - SARGENTO PMESP",
      "href": "https://go.hotmart.com/Q105560013F?dp=1",
      "ariaLabel": "Abrir Curso Preparatório Sargento PMESP",
      "classes": [
        "curso-card",
        "produto-card"
      ],
      "rel": "noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
        "wrapClasses": [
          "produto-imagem"
        ],
        "src": "img/HOTMART/curso-sargento-pmesp.webp",
        "alt": "Curso Preparatório Sargento PMESP",
        "decoding": "async",
        "loading": "lazy",
        "dataAttrs": {
          "data-img-base": "img/HOTMART/curso-sargento-pmesp"
        }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Curso online do CABEP voltado aos concursos internos da PMESP, com conteúdo direcionado para Soldado, Cabo, Sargento e CHQAOPM.",
      "metaAriaLabel": "Destaques do curso",
      "meta": [
        "Curso online",
        "PMESP",
        "Concursos internos"
      ],
      "cta": "Ver na loja"
    },
    {
      "titulo": "Curso Preparatório PMESP Completo",
      "href": "https://go.hotmart.com/A105560326I?dp=1",
      "ariaLabel": "Abrir Curso Preparatório PMESP Completo",
      "classes": [
        "curso-card",
        "produto-card"
      ],
      "rel": "noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
        "wrapClasses": [
          "produto-imagem"
        ],
        "src": "img/HOTMART/curso-pmesp-completo.webp",
        "alt": "Curso Preparatório PMESP Completo",
        "decoding": "async",
        "loading": "lazy",
        "dataAttrs": {
          "data-img-base": "img/HOTMART/curso-pmesp-completo"
        }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Preparatório para o concurso de Soldado PMESP 2ª Classe, com foco em prova, exercícios, fases do concurso e preparação objetiva para a banca VUNESP.",
      "metaAriaLabel": "Destaques do curso",
      "meta": [
        "Curso online",
        "PMESP",
        "Soldado 2ª Classe",
        "VUNESP"
      ],
      "cta": "Ver na loja"
    },
    {
      "titulo": "Preparatório para o psicotécnico das carreiras policiais",
      "href": "https://go.hotmart.com/J105560541A?dp=1",
      "ariaLabel": "Abrir Preparatório para o Psicotécnico das Carreiras Policiais",
      "classes": [
        "curso-card",
        "produto-card"
      ],
      "rel": "noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
        "wrapClasses": [
          "produto-imagem"
        ],
        "src": "img/HOTMART/curso-psicotecnico-carreiras-policiais.webp",
        "alt": "Preparatório para o psicotécnico das carreiras policiais",
        "decoding": "async",
        "loading": "lazy",
        "dataAttrs": {
          "data-img-base": "img/HOTMART/curso-psicotecnico-carreiras-policiais"
        }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Material direto para candidatos que querem entender melhor a etapa psicológica dos concursos policiais e se preparar com mais segurança.",
      "metaAriaLabel": "Destaques do curso",
      "meta": [
        "Curso online",
        "Psicotécnico",
        "Carreiras policiais",
        "Concurseiros"
      ],
      "cta": "Ver na loja"
    }
  ],
  "cursosPcsp": [
    {
      "titulo": "Raciocínio Lógico para Polícia Civil de São Paulo (PCSP)",
      "href": "https://go.hotmart.com/K105562484Y?dp=1",
      "ariaLabel": "Abrir Raciocínio Lógico para Polícia Civil de São Paulo",
      "classes": [
        "curso-card",
        "produto-card"
      ],
      "rel": "noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
        "wrapClasses": [
          "produto-imagem"
        ],
        "src": "img/HOTMART/curso-raciocinio-logico-pcsp.webp",
        "alt": "Raciocínio Lógico para Polícia Civil de São Paulo PCSP",
        "decoding": "async",
        "loading": "lazy",
        "dataAttrs": {
          "data-img-base": "img/HOTMART/curso-raciocinio-logico-pcsp"
        }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Curso de Raciocínio Lógico com foco na PCSP e na banca VUNESP, pensado para acelerar o aprendizado com abordagem prática.",
      "metaAriaLabel": "Destaques do curso",
      "meta": [
        "Curso online",
        "PCSP",
        "Raciocínio lógico",
        "VUNESP"
      ],
      "cta": "Ver na loja"
    },
    {
      "titulo": "PCSP - Curso de Informática - Edital Completo",
      "href": "https://go.hotmart.com/K105562579S?dp=1",
      "ariaLabel": "Abrir Curso de Informática PCSP",
      "classes": [
        "curso-card",
        "produto-card"
      ],
      "rel": "noopener noreferrer",
      "target": "_blank",
      "dataAttrs": {},
      "imagem": {
        "wrapClasses": [
          "produto-imagem"
        ],
        "src": "img/HOTMART/curso-informatica-pcsp.webp",
        "alt": "PCSP Curso de Informática Edital Completo",
        "decoding": "async",
        "loading": "lazy",
        "dataAttrs": {
          "data-img-base": "img/HOTMART/curso-informatica-pcsp"
        }
      },
      "avisoAfiliado": "Exposição do produto em formato de afiliado.",
      "descricao": "Curso de Informática para concursos da Polícia Civil de São Paulo, com teoria, exercícios, videoaulas, PDFs e foco na banca VUNESP.",
      "metaAriaLabel": "Destaques do curso",
      "meta": [
        "Curso online",
        "PCSP",
        "Informática",
        "VUNESP"
      ],
      "cta": "Ver na loja"
    }
  ]
};
  window.UNISEGPUB_PRODUTOS_JSON_FALLBACKS = Object.assign(
    {},
    window.UNISEGPUB_PRODUTOS_JSON_FALLBACKS || {},
    {
      livrosEbooks: PRODUTOS_LIVROS_EBOOKS_FALLBACK
    }
  );

  window.UNISEGPUB_PRODUTOS.livrosEbooks = PRODUTOS_LIVROS_EBOOKS_FALLBACK;

})();
