    const bebidasclassificadas = [
        // Destilados
        'Whisky', 'Vodka', 'Rum', 'Gin', 'Tequila', 'Brandy', 'Cachaça', 'Ouzo', 'Absinto',
        // Fermentados
        'Cerveja', 'Vinho', 'Sake',
        // Mistas
        'Vermute', 'Licor', 'Bitter'
    ];
    
    const whiskyInfo = [
        {
          titulo: 'O que é Whisky?',
          descricao: 'O whisky é uma bebida destilada que encanta paladares há séculos. Produzido a partir da fermentação de grãos como cevada, trigo, centeio ou milho, o whisky possui uma complexidade de sabores que varia de acordo com sua origem, tipo e processo de produção.'
        },
        {
          titulo: 'Origem do Whisky',
          descricao: 'A Escócia e a Irlanda disputam a paternidade do whisky. A Escócia é frequentemente associada ao whisky devido à sua longa tradição na produção e exportação da bebida. No entanto, evidências arqueológicas sugerem que a destilação de grãos pode ter ocorrido na Irlanda antes mesmo da chegada dos monges.'
        },
        {
          titulo: 'Tipos de Whisky',
          subsecoes: [
            {
              titulo: 'Scotch Whisky',
              descricao: 'Produzido na Escócia, é o tipo mais conhecido e diversificado.',
              subtipos: [
                { nome: 'Single Malt', descricao: 'Destilado em uma única destilaria, utilizando apenas malte de cevada.' },
                { nome: 'Blended', descricao: 'Mistura de diferentes whiskies de malte e de grão.' },
                { nome: 'Blended Malt', descricao: 'Mistura de diferentes whiskies de malte.' },
                { nome: 'Grain Whisky', descricao: 'Destilado principalmente a partir de outros grãos além da cevada maltada.' }
              ],
              regioes: ['Highlands', 'Speyside', 'Islay', 'Lowlands', 'Campbelltown'],
              destilarias: [
                { nome: 'Glenfiddich', regiao: 'Speyside', caracteristicas: 'Frutado e floral' },
                
              ]
            },
            
          ]
        },
        {
          titulo: 'Processo de Produção',
          etapas: [
            { etapa: 'Maltagem', descricao: 'Os grãos são germinados e secos, transformando o amido em açúcares.' },
            { etapa: 'Mosturação', descricao: 'O malte moído é misturado com água quente para liberar os açúcares.' },
            
          ]
        },
        {
          titulo: 'Como Apreciar o Whisky',
          dicas: [
            { dica: 'Temperatura', descricao: 'O whisky deve ser servido à temperatura ambiente.' },
            { dica: 'Taça', descricao: 'Utilize uma taça de whisky para concentrar os aromas.' },
            
          ]
        },
        {
          titulo: 'Curiosidades',
          fatos: [
            { fato: 'Origem do nome', descricao: 'A palavra "whisky" deriva do gaélico "uisge beatha", que significa "água da vida".' },
            
          ]
        }
      ];
    const vodkaInfo = [
        {
          titulo: "O que é Vodka?",
          descricao: "A vodka é uma bebida alcoólica destilada, caracterizada por seu sabor neutro e suave. Originalmente produzida na Rússia, a vodka se tornou uma das bebidas espirituosas mais populares do mundo, presente em diversos coquetéis e apreciada por muitos como um destilado puro."
        },
        {
          titulo: "Características e Produção",
          descricao: "A vodka é produzida a partir da fermentação de diversos grãos, como trigo, centeio, milho ou batata. O processo de destilação é repetido várias vezes para garantir a pureza e a neutralidade do sabor. A vodka é filtrada através de carvão vegetal para remover impurezas e garantir sua limpidez. O sabor da vodka é predominantemente neutro, com algumas variações dependendo dos grãos utilizados e do processo de produção. Algumas vodkas podem apresentar leves notas de cereal ou um toque adocicado."
        },
        {
          titulo: "Tipos de Vodka",
          subsecoes: [
            {
              titulo: "Vodka Clássica",
              descricao: "A vodka mais comum, com sabor neutro e ideal para coquetéis."
            },
            {
              titulo: "Vodka Aromatizada",
              descricao: "Vodka infundida com frutas, especiarias ou outros ingredientes, como a vodka de limão, de morango ou de pepino."
            },
            {
              titulo: "Vodka Premium",
              descricao: "Vodkas de alta qualidade, produzidas com ingredientes selecionados e processos artesanais."
            }
          ]
        },
        {
          titulo: "Coquetéis Clássicos",
          subsecoes: [
            {
              titulo: "Vodka Martini",
              descricao: "Elegante e sofisticado, feito com vodka, vermute seco e uma azeitona."
            },
            {
              titulo: "Bloody Mary",
              descricao: "Refrescante e saboroso, feito com vodka, suco de tomate, molho Worcestershire e especiarias."
            },
            {
              titulo: "Moscow Mule",
              descricao: "Refrescante e cítrico, feito com vodka, ginger ale e suco de limão, servido em um copo de cobre."
            },
            {
              titulo: "Cosmopolitan",
              descricao: "Doce e frutado, feito com vodka, licor de laranja, suco de cranberry e suco de limão."
            }
          ]
        },
        {
          titulo: "Como Apreciar a Vodka",
          descricao: "A vodka pode ser apreciada pura, com gelo, para sentir sua pureza e suavidade. A vodka é um ingrediente versátil e combina com diversos outros ingredientes, como sucos, frutas e especiarias."
        },
        {
          titulo: "Curiosidades",
          descricao: "A palavra 'vodka' tem origem eslava e significa 'pequena água'. A vodka é utilizada em diversas culturas para fins medicinais e religiosos. A Rússia é considerada a pátria da vodka, mas a bebida é produzida e consumida em todo o mundo."
        }
      ];


const ginInfo = [
    {
        titulo: "O que é Gin?",
        descricao: "O gin é uma bebida espirituosa destilada, aromatizada com zimbro e outros botânicos, como coentro, cardamomo, casca de limão e raiz de angélica. Sua origem remonta ao século XVII, na Holanda, e rapidamente se tornou popular na Inglaterra, onde se tornou a base de diversos coquetéis clássicos."
      },
      {
        titulo: "Características e Sabores",
        descricao: "O sabor do gin é dominado pelo zimbro, que confere um aroma resinoso e levemente cítrico. Os outros botânicos utilizados na produção do gin contribuem para a complexidade e variedade de sabores, que podem ir desde notas florais e cítricas até especiadas e herbáceas."
      },
           
      {
        titulo: "Como Apreciar o Gin",
        descricao: "Puro: Os gins de alta qualidade podem ser apreciados puros..."
      },
      {
        titulo: "Curiosidades",
        subsecoes: [
            {
                titulo:"puro",
                descricao:"Os gins de alta qualidade podem ser apreciados puros, com uma fatia de limão ou laranja."
            },
            {
                titulo:"Com tônica",
                descricao:"A combinação clássica de gin e tônica é perfeita para os dias quentes."
            },
            {
                titulo:"Em coquetéis",
                descricao:" A versatilidade do gin o torna ideal para uma infinidade de coquetéis."
            }
        ]
      },
   
    {
      titulo: "Tipos de Gin",
      subsecoes: [
        {
          titulo: "London Dry Gin",
          descricao: "O estilo mais conhecido, produzido na Inglaterra, com sabor seco e acentuado de zimbro."
        },
        {
          titulo: "Plymouth Gin",
          descricao: "Outro estilo inglês, com sabor mais suave e arredondado."
        },
        {
          titulo: "Gin Old Tom",
          descricao: "Um estilo mais antigo, adocicado e aromatizado com especiarias."
        },
        {
          titulo: "Gin Blended",
          descricao: "Mistura de diferentes gins para obter um sabor mais uniforme."
        },
        {
          titulo: "Gin Destilado",
          descricao: "Gin produzido por destilação a vapor, com sabores mais puros e intensos."
        },
        {
          titulo: "Gin Craft",
          descricao: "Gins artesanais, produzidos em pequenas destilarias, com receitas únicas e ingredientes locais."
        }
      ]
    },
    {
      titulo: "Coquetéis Clássicos",
      subsecoes: [
        {
          titulo: "Martini",
          descricao: "Elegante e sofisticado, feito com gin seco, vermute seco e uma azeitona."
        },
        {
          titulo: "Gin Tônica",
          descricao: "Refrescante e versátil, feito com gin, água tônica e uma rodela de limão."
        },
        {
          titulo: "Negroni",
          descricao: "Equilibrado e amargo, feito com gin, vermute doce e Campari."
        },
        {
          titulo: "Tom Collins",
          descricao: "Clássico e refrescante, feito com gin, suco de limão, xarope de açúcar e água com gás."
        }
      ]
    }

  ];


const tequilaInfo = [
    {
      titulo: "Tequila: Um Tesouro Mexicano",
      descricao: "A tequila é uma bebida destilada que simboliza o México, com um sabor único e uma história rica. Produzida a partir do coração da agave azul, uma planta suculenta nativa do país, a tequila é apreciada mundialmente por sua complexidade e versatilidade."
    },
    {
      titulo: "Origem e Produção",
      descricao: "A tequila tem origem na região de Tequila, no estado de Jalisco, México. A produção da tequila é um processo artesanal que envolve várias etapas: Cultivo da Agave Azul: A planta leva de 8 a 12 anos para amadurecer e atingir o ponto ideal para a produção da tequila. Cozimento: Os corações da agave são cozidos em fornos tradicionais, o que confere um sabor característico à bebida. Fermentação: O mosto obtido do cozimento é fermentado com leveduras naturais. Destilação: O mosto fermentado é destilado duas vezes para obter a tequila. Envelhecimento: Dependendo do tipo de tequila, a bebida pode ser envelhecida em barris de carvalho branco americano, o que confere aromas e sabores mais complexos."
    },
    {
      titulo: "Tipos de Tequila",
      descricao: "Existem diferentes tipos de tequila, classificados de acordo com o tempo de envelhecimento e os ingredientes utilizados: Tequila Blanco (Silver): Não envelhecida ou envelhecida por um curto período, com sabor fresco e limpo. Tequila Joven: Mistura de tequila blanco com tequila reposado, oferecendo um sabor mais suave e complexo. Tequila Reposado: Envelhecida em barris de carvalho por um período mínimo de 2 meses, com sabor amadeirado e frutado. Tequila Añejo: Envelhecida em barris de carvalho por um período mínimo de 1 ano, com sabor complexo e intenso. Tequila Extra Añejo: Envelhecida em barris de carvalho por um período mínimo de 3 anos, com sabor extremamente complexo e amadeirado."
    },
    {
      titulo: "Sabores e Aromas",
      descricao: "Os sabores e aromas da tequila variam de acordo com o tipo e o tempo de envelhecimento. Em geral, a tequila apresenta notas de agave cozido, frutas cítricas, especiarias, baunilha e caramelo."
    },
    {
      titulo: "Como apreciar a Tequila",
      descricao: "A tequila pode ser apreciada pura, com gelo ou em diversos coquetéis. A forma de consumo depende do tipo de tequila e do gosto pessoal. Algumas sugestões: Tequila Blanco: Ideal para coquetéis como Margarita e Tequila Sunrise. Tequila Reposado: Pode ser apreciada pura, com gelo ou em coquetéis mais complexos. Tequila Añejo e Extra Añejo: Melhor apreciada pura, com uma fatia de laranja ou limão."
    },
    {
      titulo: "A Tequila na Cultura Mexicana",
      descricao: "A tequila é um símbolo da cultura mexicana e está presente em diversas tradições e celebrações. A bebida é frequentemente associada a festas, música e dança."
    }
  ];


  const rumInfo = [
    {
      titulo: "O que é Rum?",
      descricao: "O rum é uma bebida alcoólica destilada, obtida a partir da fermentação alcoólica do melaço e de outros derivados da produção de açúcar, como o caldo de cana fermentado. Sua origem remonta às antigas colônias europeias nas Índias Ocidentais e no Caribe, onde a cana-de-açúcar era cultivada em larga escala."
    },
    {
      titulo: "Características e Sabores",
      descricao: "O sabor do rum varia muito dependendo da região de produção, do tipo de cana utilizado, do processo de fermentação e envelhecimento, e dos tipos de barris empregados. Geralmente, o rum apresenta notas de melaço, caramelo, frutas secas e especiarias, com variações que vão desde sabores leves e frutados até aromas mais complexos e amadeirados."
    },
    {
      titulo: "Tipos de Rum",
      subsecoes: [
        {
          titulo: "Rum Branco",
          descricao: "Leve, seco e sem envelhecimento, ideal para coquetéis."
        },
        {
          titulo: "Rum Âmbar",
          descricao: "Envelhecido por alguns anos em barris de carvalho, com sabor mais complexo e amadeirado."
        },

      ]
    },
    {
      titulo: "Regiões Produtoras",
      subsecoes: [
        {
          titulo: "Caribe",
          descricao: "Cuba, Jamaica, Barbados, Porto Rico são as principais produtoras, cada uma com seu estilo único."
        },

      ]
    },
    {
      titulo: "Coquetéis Clássicos",
      subsecoes: [
        {
          titulo: "Daiquiri",
          descricao: "Um clássico cubano, feito com rum branco, suco de limão e açúcar."
        },
       
      ]
    },
    {
      titulo: "Como Apreciar o Rum",
      descricao: "Puro: Os rums envelhecidos podem ser apreciados puros, com ou sem gelo. Com acompanhamentos: O rum combina bem com frutas frescas, nozes e chocolate. Em coquetéis: A versatilidade do rum o torna perfeito para uma infinidade de coquetéis."
    },
    {
      titulo: "Curiosidades",
      descricao: "O rum era utilizado como moeda de troca em algumas regiões do Caribe. O processo de envelhecimento em barris de carvalho confere ao rum sua cor âmbar e complexidade de sabores. O rum é um ingrediente fundamental na cultura popular de muitos países caribenhos."
    }
  ];



  const brandyInfo = [
    {
      titulo: "O que é Brandy?",
      descricao: "Brandy é uma bebida alcoólica destilada, produzida principalmente a partir do vinho..."
    },
    {
      titulo: "Origem e História",
      descricao: "A origem do brandy é incerta, mas acredita-se que os árabes tenham sido os primeiros a destilar vinho..."
    },
    {
      titulo: "Tipos de Brandy",
      tipos: [
        {
          nome: "Cognac",
          regiao: "Cognac, França",
          caracteristicas: "Elegante, complexo, notas de frutas secas, especiarias e baunilha"
        },
        {
          nome: "Armagnac",
          regiao: "Armagnac, França",
          caracteristicas: "Rústico, frutado, notas de ameixa e cereja"
        },
    
      ]
    },
    {
      titulo: "Processo de Produção",
      etapas: [
        { etapa: "Produção do vinho", descricao: "As uvas são colhidas e fermentadas para produzir vinho." },
        { etapa: "Destilação", descricao: "O vinho é destilado em alambiques de cobre..." },
       
      ]
    },
    {
      titulo: "Como Apreciar",
      dicas: [
        { dica: "Temperatura", descricao: "Sirva à temperatura ambiente." },
        { dica: "Taça", descricao: "Utilize uma taça de brandy." },
 
      ]
    },
    {
      titulo: "Curiosidades",
      fatos: [
        { fato: "Coquetéis", descricao: "Utilizado em coquetéis como Sidecar e Brandy Alexander." },
        { fato: "Envelhecimento", descricao: "O tempo de envelhecimento influencia o sabor." },
       
      ]
    }
  ];

  const cachacaInfo = [
    {
      titulo: "Cachaça: Um Tesouro Brasileiro",
      descricao: "A cachaça, também conhecida como pinga, cana ou caninha, é uma aguardente de cana-de-açúcar produzida exclusivamente no Brasil. É um dos símbolos mais autênticos da nossa cultura e a base de um dos coquetéis mais famosos do mundo: a caipirinha.",
      origem: "Brasil",
      materiaPrima: "Cana-de-açúcar"
    },
    {
      titulo: "História",
      descricao: "A origem da cachaça está intrinsecamente ligada à história da colonização portuguesa no Brasil. Os portugueses introduziram a cultura da cana-de-açúcar e, com ela, a produção de açúcar. A cachaça era um subproduto desse processo, inicialmente considerada um resíduo. Com o tempo, a aguardente ganhou valor próprio e se tornou uma bebida popular entre os colonos e escravizados.",
      periodo: "Colonial"
    },
    {
      titulo: "Processo de Produção",
      etapas: [
        { etapa: "Moagem", descricao: "A cana-de-açúcar é moída para extrair o caldo." },
        { etapa: "Fermentação", descricao: "O caldo é fermentado por leveduras naturais, transformando os açúcares em álcool." },
        { etapa: "Destilação", descricao: "O vinho obtido na fermentação é destilado em alambiques de cobre, separando o álcool das outras substâncias." },
        { etapa: "Envelhecimento (opcional)", descricao: "A cachaça pode ser envelhecida em diferentes tipos de madeira, como carvalho, amburana ou jequitibá." }
      ]
    },
    {
      titulo: "Tipos de Cachaça",
      classificacao: [
        { tipo: "Branca ou Prata", descricao: "Cachaça nova, sem envelhecimento ou com envelhecimento muito curto, geralmente cristalina e com sabor mais leve.", envelhecimento: "Curto ou nenhum" },
        { tipo: "Amarela ou Ouro", descricao: "Cachaça envelhecida por um curto período, adquirindo uma coloração amarelada e aromas mais complexos.", envelhecimento: "Curto" },
        { tipo: "Envelhecida", descricao: "Cachaça envelhecida por um período mais longo, em barris de madeira, desenvolvendo aromas e sabores mais intensos e complexos.", envelhecimento: "Longo" }
      ]
    },
    {
      titulo: "Sabor e Aroma",
      caracteristicas: [
        "Notas de cana-de-açúcar",
        "Frutas tropicais",
        "Especiarias",
        "Madeira (em cachaças envelhecidas)"
      ]
    },
    {
      titulo: "Gastronomia",
      usos: [
        "Caipirinha",
        "Molhos",
        "Marinadas",
        "Sobremesas",
        "Outros coquetéis"
      ]
    },
    {
      titulo: "Cachaça no Mundo",
      relevância: "A cachaça é uma bebida única e cada vez mais apreciada em todo o mundo. Sua versatilidade e sabor característico a tornam um ingrediente essencial em diversos bares e restaurantes internacionais."
    }
  ];

  const ouzoInfo = [
    {
      titulo: "Ouzo: A Aguardente Grega de Anis",
      descricao: "O Ouzo é uma bebida alcoólica grega, famosa por sua característica única: quando diluída com água, torna-se leitosa...",
      origem: "Grécia",
      caracteristicaPrincipal: "Efeito leitoso ao ser diluído em água"
    },
    {
      titulo: "História",
      descricao: "A origem exata do Ouzo é um tanto nebulosa, mas sabe-se que bebidas anisadas eram consumidas na região do Mediterrâneo há séculos...",
      periodo: "Séculos atrás"
    },
    {
      titulo: "Processo de Produção",
      etapas: [
        { etapa: "Fermentação", descricao: "Vinho de alta qualidade é fermentado." },
        { etapa: "Destilação", descricao: "O vinho fermentado é destilado para obter um álcool de alta graduação." },
        { etapa: "Maceração", descricao: "O álcool destilado é macerado com anis estrelado e outras especiarias..." },
        { etapa: "Diluição", descricao: "Após a maceração, a bebida é diluída com água, resultando no efeito leitoso característico." }
      ]
    },
    {
      titulo: "Características e Sabor",
      perfilSabor: [
        "Sabor marcante de anis",
        "Notas de especiarias",
        "Toque levemente adocicado"
      ]
    },
    {
      titulo: "Como Servir",
      modoDePreparo: [
        "Servir gelado",
        "Diluir com água gelada (proporção 1:5 ou 1:10)",
        "Acompanhar com gelo, laranja ou meze"
      ]
    },
    {
      titulo: "Na Cultura Grega",
      importanciaCultural: "O Ouzo é um símbolo da hospitalidade grega e é frequentemente oferecido como um gesto de boas-vindas.",
      ocasioes: "Celebrações familiares, encontros entre amigos"
    }
  ];

  const cervejaInfo = [
    {
      titulo: "A Cerveja: Uma Jornada pela História e Sabores",
      descricao: "A cerveja é uma das bebidas alcoólicas mais antigas e populares do mundo, produzida a partir da fermentação de cereais...",
      origem: "Antiguidade",
      cereaisPrincipais: "Cevada maltada"
    },
    {
      titulo: "História",
      descricao: "Acredita-se que a cerveja seja uma das primeiras bebidas alcoólicas criadas pelo ser humano...",
      periodos: ["Antiguidade", "Idade Média"],
      paisesDeOrigem: ["Suméria", "Egito", "Mesopotâmia"]
    },
    {
      titulo: "Processo de Produção",
      etapas: [
        { etapa: "Maltagem", descricao: "Os grãos de cevada são germinados e secos..." },
        { etapa: "Mostura", descricao: "O malte moído é misturado com água quente..." },
        { etapa: "Fermentação", descricao: "A mostura é resfriada e adicionada à levedura..." },
        { etapa: "Maturação", descricao: "A cerveja é armazenada em tanques..." },
        { etapa: "Embalagem", descricao: "A cerveja é filtrada, carbonatada e embalada..." }
      ]
    },
    {
      titulo: "Estilos de Cerveja",
      estilos: [
        { estilo: "Lager", descricao: "Cerveja leve e refrescante, com sabor maltado suave..." },
        { estilo: "Ale", descricao: "Cerveja mais encorpada, com sabores frutados e florais..." },
      ]
    },
    {
      titulo: "Harmonização e Consumo",
      harmonizacao: "Queijos, carnes, frutos do mar, sobremesas",
      temperatura: "Varia de acordo com o estilo (lagers geladas, ales um pouco mais quentes)"
    },
    {
      titulo: "Cultura da Cerveja",
      eventos: ["Festivais de cerveja", "Beer bars"],
      tendencias: ["Cervejarias artesanais", "Busca por sabores únicos"]
    }
  ];
  const vinhoInfo = {
    introducao: "O vinho, uma bebida milenar e repleta de nuances, é muito mais do que apenas uma bebida alcoólica.",
    historia: {
        origem: "Acredita-se que a vinificação seja uma das primeiras técnicas de fermentação dominadas pelo homem.",
        evolucao: "Ao longo dos séculos, a cultura do vinho se espalhou por todo o mundo..."
    },
    producao: {
        etapas: ["Cultivo da Uva", "Vindima", "Desengace e Maceração", "Fermentação", "Maturação", "Engarrafamento"],
        detalhes: {
            cultivo: "A qualidade do vinho começa na videira.",
            vindima: "A colheita das uvas, chamada de vindima, é um momento crucial..."
        }
    },
    tipos: {
        tinto: {
            uvas: ["Cabernet Sauvignon", "Merlot", "Pinot Noir"],
            caracteristicas: "Possui taninos, que conferem um sabor mais encorpado e estruturado."
        },
        branco: {
            uvas: ["Chardonnay", "Sauvignon Blanc", "Riesling"],
            caracteristicas: "Geralmente mais leves e frescos, com aromas frutados e florais.",
            estilos: ["Jovens e frutados", "Com passagem por carvalho", "Espumantes"] // Adicionei um campo "estilos" para os brancos
        },
        rose: {
            uvas: ["Pinot Noir", "Cinsault", "Grenache"],
            caracteristicas: "Vinho de cor rosa, obtido a partir de uvas tintas ou através do contato curto do mosto com as cascas.",
            estilos: ["Secos", "Doces", "Rosés de Provence"]
        },
        espumante: {
            metodos: ["Tradicional", "Charmat"],
            caracteristicas: "Vinho efervescente, com bolhas de dióxido de carbono, produzido através de um segundo processo de fermentação.",
            estilos: ["Brut", "Extra Brut", "Demi-Sec"]
        }
    },
    harmonizacao: "A harmonização do vinho com a comida é uma arte que envolve a combinação de sabores...",
    cultura: {
        temas: ["Regiões vinícolas", "Variedades de uva", "Degustação"]
    }
};

const sakeInfo = {
    descricao: "O sake, muitas vezes chamado de vinho de arroz, é uma bebida alcoólica japonesa com uma história rica e uma cultura profundamente arraigada.",
    producao: {
      etapas: ["Polimento do arroz", "Cozimento do arroz", "Koji", "Moromi", "Fermentação", "Pressão", "Pasteurização e engarrafamento"],
      ingredientes: ["Arroz", "Água", "Koji", "Levedura"]
    },
    tipos: {
      junmai: {
        descricao: "Sake puro, feito apenas de arroz, água, koji e levedura.",
        polimento: "Baixo"
      },
      ginjo: {
        descricao: "Sake feito com arroz mais polido, resultando em um sabor mais delicado.",
        polimento: "Médio"
      },
      daiginjo: {
        descricao: "Sake feito com arroz altamente polido, com sabor muito suave e aroma floral.",
        polimento: "Alto"
      },
      honjozo: {
        descricao: "Sake junmai ao qual foi adicionado álcool destilado."
      },
      fukumasu: {
        descricao: "Sake doce, geralmente servido como aperitivo."
      },
      nigori: {
        descricao: "Sake turvo, com partículas de arroz em suspensão, que lhe conferem uma textura cremosa."
      }
    },
    harmonizacao: {
      junmai: ["Pratos gordurosos", "Tempurá", "Yakitori"],
      ginjo: ["Sushis", "Sashimis"],
      daiginjo: ["Pratos leves", "Tofu", "Vegetais"],
      nigori: ["Pratos apimentados", "Frutos do mar"]
    },
    cultura: {
      tradicoes: "O sake faz parte da cultura japonesa há séculos e é consumido em diversas ocasiões..."
    }
  };

  const vermuteInfo = {
    descricao: "O vermute, uma bebida alcoólica à base de vinho, com adição de flores ou ervas aromáticas...",
    historia: {
      origem: "Sua origem remonta a Hipócrates...",
      popularidade: "O vermute ganhou popularidade na Europa medieval..."
    },
    caracteristicas: {
      versatilidade: "Pode ser seco, doce, branco, tinto ou rosé...",
      aromatico: "As ervas e especiarias utilizadas em sua produção conferem ao vermute aromas complexos..."
    },
    tipos: {
      seco: {
        sabor: "seco e amargo",
        notas: "absinto e especiarias",
        harmonizacao: "Queijos duros, frutos do mar, aperitivos salgados"
      },
      doce: {
        sabor: "adocicado",
        notas: "frutas, especiarias",
        harmonizacao: "Sobremesas, frutas, chocolate"
      },
      tinto: {
        sabor: "encorpado",
        notas: "frutas vermelhas, especiarias",
        harmonizacao: "Carnes vermelhas, queijos azuis, massas"
      },
      branco: {
        sabor: "leve e fresco",
        notas: "cítricas, florais",
        harmonizacao: "Peixes brancos, frutos do mar, saladas"
      },
      rose: {
        sabor: "delicado",
        notas: "frutas vermelhas, flores",
        harmonizacao: "Carnes brancas, saladas, queijos leves"
      }
    },
    consumo: {
      puro: "Pode ser apreciado puro, com gelo e uma fatia de laranja ou limão.",
      cocteis: "É um ingrediente fundamental em diversos coquetéis clássicos e contemporâneos."
    },
    marcas: ["Martini", "Cinzano", "Noilly Prat", "Carpano"]
  };

  const licorInfo = {
    descricao: "O licor, uma bebida alcoólica obtida pela maceração de frutas, ervas, raízes ou sementes em álcool etílico e adição de açúcar...",
    historia: {
      origem: "A produção de licores remonta à antiguidade...",
      desenvolvimento: "Monjas e monges europeus desempenharam um papel fundamental..."
    },
    caracteristicas: {
      versatilidade: "A variedade de ingredientes permite a criação de bebidas com os mais diversos sabores...",
      complexidade: "A maceração dos ingredientes em álcool resulta em bebidas com sabores complexos..."
    },
    tipos: {
      frutas: {
        exemplos: ["maracujá", "morango", "laranja"],
        caracteristicas: "Obtidos pela maceração de frutas em álcool"
      },
      ervas: {
        exemplos: ["absinto", "vermute", "benedictine"],
        caracteristicas: "Elaborados a partir da maceração de ervas aromáticas"
      },
      cremosos: {
        exemplos: ["baileys", "goyave"],
        caracteristicas: "Licores com adição de creme"
      },
      secos: {
        exemplos: ["chartreuse", "amaretto"],
        caracteristicas: "Licores com baixo teor de açúcar"
      }
    },
    consumo: {
      formas: ["puro", "com gelo", "em coquetéis", "na culinária"],
      harmonizacao: {
        frutas: "Sobremesas à base de frutas, sorvetes, bolos",
        ervas: "Queijos, carnes vermelhas, chocolate amargo",
        cremosos: "Café, chocolate quente, sobremesas cremosas",
        secos: "Aperitivos salgados, frutos secos"
      }
    },
    marcas: ["Cointreau", "Baileys", "Chartreuse", "Amaretto"]
  };

  const bittersInfo = {
    descricao: "Os bitters são ingredientes essenciais na coquetelaria, responsáveis por adicionar um toque amargo e complexo aos drinks.",
    historia: {
      origem: "A origem dos bitters remonta à antiguidade, quando diversas culturas utilizavam bebidas amargas com propriedades medicinais.",
      usoInicial: "Na Europa medieval, os bitters eram utilizados para tratar diversas doenças e estimular o apetite."
    },
    caracteristicas: {
      complexidade: "Os bitters possuem perfis aromáticos complexos, com notas de ervas, especiarias, frutas cítricas e até mesmo toques de chocolate ou tabaco.",
      equilibrio: "Os bitters ajudam a equilibrar os sabores dos coquetéis, adicionando um toque amargo que contrasta com os sabores doces, ácidos e alcoólicos.",
      versatilidade: "Existem diversos tipos de bitters, com perfis aromáticos variados, o que permite criar uma infinidade de combinações e explorar novos sabores."
    },
    tipos: {
      angostura: {
        sabor: "complexo e equilibrado",
        notas: "laranja amarga, especiarias, casca de canela"
      },
      peychaud: {
        sabor: "doce e frutado",
        notas: "laranja, especiarias"
      },
      orange: {
        sabor: "intenso de laranja",
        usoIdeal: "coquetéis cítricos"
      },
      chocolate: {
        sabor: "chocolate amargo",
        usoIdeal: "coquetéis mais complexos"
      }
    },
    uso: {
      quantidade: "Os bitters são geralmente adicionados em pequenas quantidades, apenas algumas gotas são suficientes para transformar o sabor da bebida.",
      harmonizacao: {
        gin: "complementam perfeitamente o sabor do gin, adicionando complexidade e profundidade aos coquetéis à base de gin, como o Martini.",
        whiskey: "podem ser utilizados para criar coquetéis clássicos como o Old Fashioned ou para adicionar um toque especial a coquetéis mais contemporâneos.",
        rum: "combinam bem com o sabor do rum, especialmente em coquetéis tiki"
      }
    },
    marcas: ["Angostura", "Peychaud's", "Fee Brothers, Regan's"],
        receitas: {
            oldFashioned: "Whiskey, açúcar, bitters, água com gás.",
            martini: "Gin seco, vermute seco, bitters a gosto."
        }
  };

