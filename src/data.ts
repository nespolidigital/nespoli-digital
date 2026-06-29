import { AppItem, ServiceItem, StepItem } from "./types";

export const APPS_DATA: AppItem[] = [
  {
    id: "obra-facil",
    name: "Obra Fácil — Gestão de Obras",
    description: "Obra Fácil é o app completo para profissionais da construção civil que querem organizar seus projetos, impressionar clientes e ter controle total do negócio — direto do celular.",
    category: "Construção",
    tagColor: {
      bg: "bg-orange-50/70",
      text: "text-orange-700",
      border: "border-orange-200",
      icon: "text-orange-600"
    },
    iconName: "HardHat",
    tagline: "Orçamentos, contratos e diário de obras para profissionais da construção.",
    paragraphs: [
      "Obra Fácil é o app completo para profissionais da construção civil que querem organizar seus projetos, impressionar clientes e ter controle total do negócio — direto do celular.",
      "Com recursos avançados de rastreamento de compras, controle de estoque de materiais e registro diário de obra (RDO), o aplicativo mantém todas as partes interessadas em perfeita sincronia. Receba alertas de desvio de orçamento e controle o andamento de cada etapa em tempo real.",
      "Diga adeus às surpresas desagradáveis no final do mês. Gerencie fornecedores, compare orçamentos e arquive recibos com facilidade diretamente pelo celular ou tablet, garantindo que sua obra seja entregue dentro do prazo e do orçamento previstos."
    ],
    features: [
      {
        iconName: "FileText",
        title: "Orçamentos Profissionais",
        description: "Gere propostas de valores detalhadas e envie orçamentos elegantes em minutos para seus clientes."
      },
      {
        iconName: "PenTool",
        title: "Contratos Digitais",
        description: "Crie contratos personalizados e colete assinaturas eletrônicas diretamente pelo celular."
      },
      {
        iconName: "Wallet",
        title: "Controle Financeiro",
        description: "Monitore despesas de materiais, mão de obra e veja em tempo real a margem de lucro de cada projeto."
      },
      {
        iconName: "Activity",
        title: "Diário de Obras",
        description: "Registre a evolução diária da construção com fotos e relatórios estruturados para evitar mal-entendidos."
      },
      {
        iconName: "ClipboardList",
        title: "Lista de Materiais",
        description: "Crie listas quantitativas de insumos e compartilhe instantaneamente com seus fornecedores favoritos."
      },
      {
        iconName: "Layers",
        title: "Adicionais de Obra",
        description: "Gerencie e aprove alterações de escopo com aditivos transparentes ao longo da construção."
      },
      {
        iconName: "Calendar",
        title: "Agenda de Compromissos",
        description: "Sincronize visitas técnicas, vistorias e datas importantes com lembretes proativos."
      },
      {
        iconName: "Users",
        title: "Gestão de Clientes",
        description: "Histórico unificado de contatos, mensagens e arquivos trocados com cada proprietário."
      }
    ]
  },
  {
    id: "dinlab",
    name: "DinLab — Finanças Pessoais",
    description: "Assuma o controle da sua vida financeira com o DinLab — o app de finanças pessoais que combina organização simples com inteligência artificial avançada.",
    category: "Finanças",
    tagColor: {
      bg: "bg-teal-50/70",
      text: "text-teal-700",
      border: "border-teal-200",
      icon: "text-teal-600"
    },
    iconName: "Wallet",
    tagline: "Controle seus gastos, metas e orçamentos com análise inteligente por IA.",
    paragraphs: [
      "Assuma o controle da sua vida financeira com o DinLab — o app de finanças pessoais que combina organização simples com inteligência artificial avançada.",
      "O app utiliza inteligência preditiva para estimar suas faturas e saldos ao final do mês, auxiliando na criação de orçamentos flexíveis por categoria de gastos e gerando alertas proativos antes que você exceda seus limites planejados.",
      "Crie metas de economia específicas, como 'Viagem de Férias' ou 'Reserva de Emergência', e visualize o progresso do seu esforço com gráficos simples e envolvendo-se positivamente com seu dinheiro."
    ],
    features: [
      {
        iconName: "LayoutDashboard",
        title: "Dashboard completo",
        description: "Painel intuitivo para acompanhar seu saldo consolidado, despesas recentes e status das metas."
      },
      {
        iconName: "ArrowUpDown",
        title: "Registro de transações",
        description: "Lançamentos rápidos de receitas e despesas com categorização automática e anexos."
      },
      {
        iconName: "Layers",
        title: "Múltiplas contas",
        description: "Gerencie saldos e transações de diferentes bancos e carteiras físicas no mesmo lugar."
      },
      {
        iconName: "CreditCard",
        title: "Controle de cartões",
        description: "Acompanhe faturas abertas, limites disponíveis e datas de vencimento de cartões de crédito."
      },
      {
        iconName: "PieChart",
        title: "Orçamentos mensais",
        description: "Defina tetos de gastos inteligentes por categoria para evitar surpresas no final do mês."
      },
      {
        iconName: "Target",
        title: "Metas financeiras",
        description: "Planeje e poupe para seus sonhos de consumo com acompanhamento visual de progresso."
      },
      {
        iconName: "BarChart3",
        title: "Relatórios detalhados",
        description: "Análise gráfica do seu comportamento de consumo para identificar onde economizar."
      },
      {
        iconName: "Sparkles",
        title: "Análise com IA",
        description: "Insights automáticos baseados em inteligência artificial para otimizar seus hábitos financeiros."
      }
    ]
  },
  {
    id: "investmap",
    name: "InvestMap — Carteira de Investimentos",
    description: "Acompanhe sua carteira de investimentos com precisão e inteligência. O InvestMap é o app completo para investidores brasileiros que querem controle total sobre ações, FIIs, BDRs e outros ativos.",
    category: "Investimentos",
    tagColor: {
      bg: "bg-emerald-50/70",
      text: "text-emerald-700",
      border: "border-emerald-200",
      icon: "text-emerald-600"
    },
    iconName: "TrendingUp",
    tagline: "Gerencie ações, FIIs e dividendos com análise inteligente de carteira por IA.",
    paragraphs: [
      "Acompanhe sua carteira de investimentos com precisão e inteligência. O InvestMap é o app completo para investidores brasileiros que querem controle total sobre ações, FIIs, BDRs e outros ativos.",
      "Através de algoritmos avançados, o aplicativo analisa a correlação entre seus ativos, detectando concentrações de risco indesejadas e sugerindo rebalanceamentos dinâmicos alinhados com suas metas financeiras de curto, médio e longo prazo.",
      "Monitore a rentabilidade histórica real ajustada pela inflação, simule cenários futuros e configure notificações instantâneas sobre proventos declarados ou oscilações de mercado relevantes. Assuma o controle estratégico do seu patrimônio."
    ],
    features: [
      {
        iconName: "LayoutDashboard",
        title: "Dashboard de carteira",
        description: "Visualização consolidada do patrimônio, rentabilidade histórica e alocação por classes de ativos."
      },
      {
        iconName: "History",
        title: "Registro de operações",
        description: "Lançamento simples de compras, vendas e proventos com cálculo em tempo real de posições."
      },
      {
        iconName: "Calculator",
        title: "Cálculo de preço médio",
        description: "Controle tributário e financeiro preciso com cálculo automático de preço médio de compra."
      },
      {
        iconName: "DollarSign",
        title: "Acompanhamento de dividendos",
        description: "Agenda integrada com lançamentos passados e projeção futura de dividendos e JCP."
      },
      {
        iconName: "FileText",
        title: "Relatório de IR",
        description: "Gere relatórios estruturados com as informações exatas necessárias para sua declaração de renda."
      },
      {
        iconName: "Flame",
        title: "Simulador FIRE",
        description: "Calcule quando você poderá atingir a independência financeira baseado no seu ritmo atual."
      },
      {
        iconName: "Target",
        title: "Metas de alocação",
        description: "Defina metas de diversificação por ativo ou setor e rebalanceie sua carteira sem estresse."
      },
      {
        iconName: "Sparkles",
        title: "Análise com IA",
        description: "Avaliação inteligente dos riscos de diversificação e sugestões de alocação criadas por IA."
      }
    ]
  },
  {
    id: "portfy",
    name: "Portfy — Portfólio para Criadores",
    description: "O Portfy é o app definitivo para freelancers, designers, fotógrafos, desenvolvedores e criadores de conteúdo que precisam de uma solução profissional para organizar projetos, clientes e portfólio.",
    category: "Carreira",
    tagColor: {
      bg: "bg-sky-50/70",
      text: "text-sky-700",
      border: "border-sky-200",
      icon: "text-sky-600"
    },
    iconName: "Briefcase",
    tagline: "Crie portfólios profissionais, gerencie clientes e projetos como freelancer.",
    paragraphs: [
      "O Portfy é o app definitivo para freelancers, designers, fotógrafos, desenvolvedores e criadores de conteúdo que precisam de uma solução profissional para organizar projetos, clientes e portfólio.",
      "Esqueça a complexidade de construtores de sites inchados. No Portfy, você insere seus melhores projetos, links de redes profissionais e dados de contato, e nossa engine otimiza automaticamente o carregamento, SEO e visualização mobile.",
      "Monitore estatísticas de visualização de seus projetos em tempo real, configure um domínio personalizado e use nossa ferramenta de exportação em PDF de alta qualidade para enviar junto com suas candidaturas corporativas."
    ],
    features: [
      {
        iconName: "Image",
        title: "Portfólio visual",
        description: "Apresente seus melhores trabalhos em galerias de mídia belas e adaptadas para qualquer tela."
      },
      {
        iconName: "Users",
        title: "Gestão de clientes",
        description: "Organize contatos, contratos e envie propostas comerciais elegantes para fechar mais negócios."
      },
      {
        iconName: "FolderOpen",
        title: "Controle de projetos",
        description: "Gerencie tarefas, prazos e entregas de cada projeto freelancer com cronogramas limpos."
      },
      {
        iconName: "Calculator",
        title: "Calculadora de preços",
        description: "Descubra o valor ideal para cobrar por hora ou projeto considerando seus custos e metas."
      },
      {
        iconName: "TrendingUp",
        title: "Dashboard financeiro",
        description: "Acompanhe faturamentos, contas a receber de clientes e lucros do seu negócio freelancer."
      },
      {
        iconName: "Sparkles",
        title: "Assistente de IA",
        description: "Crie textos profissionais e descrições impactantes para seus projetos usando IA integrada."
      },
      {
        iconName: "Download",
        title: "Exportação HTML e PDF",
        description: "Gere páginas web estáticas ou documentos PDF profissionais em um único clique."
      },
      {
        iconName: "Languages",
        title: "Multilíngue",
        description: "Exiba seu portfólio em português, inglês ou espanhol para atrair clientes globais."
      }
    ]
  },
  {
    id: "fitmap",
    name: "FitMap — Treino de Academia e em Casa",
    description: "Transforme seus treinos com o FitMap — o app completo para quem treina na academia ou em casa e quer resultados reais com organização e inteligência artificial.",
    category: "Saúde",
    tagColor: {
      bg: "bg-rose-50/70",
      text: "text-rose-700",
      border: "border-rose-200",
      icon: "text-rose-600"
    },
    iconName: "Dumbbell",
    tagline: "Monte fichas de treino, acompanhe progresso e treinos com Personal Trainer IA.",
    paragraphs: [
      "Transforme seus treinos com o FitMap — o app completo para quem treina na academia ou em casa e quer resultados reais com organização e inteligência artificial.",
      "Sincronize com seus dispositivos vestíveis favoritos para acompanhar métricas vitais como zonas de frequência cardíaca, cadência, queima calórica e tempo de recuperação, ajudando você a evoluir consistentemente sem risco de lesões."
    ],
    features: [
      {
        iconName: "Dumbbell",
        title: "Fichas de treino personalizadas",
        description: "Crie e organize treinos de musculação, funcional ou cardio de forma dinâmica."
      },
      {
        iconName: "Play",
        title: "Biblioteca de exercícios com GIF",
        description: "Centenas de movimentos com instruções passo a passo e demonstrações animadas."
      },
      {
        iconName: "CheckSquare",
        title: "Registro de sessões",
        description: "Marque séries concluídas, tempos de descanso e adicione observações em tempo real."
      },
      {
        iconName: "Activity",
        title: "Histórico de cargas",
        description: "Monitore a progressão de cargas exercício por exercício com gráficos intuitivos de evolução."
      },
      {
        iconName: "Trophy",
        title: "Recordes pessoais",
        description: "Comemore e registre suas maiores marcas de peso levantado ou metas de repetições."
      },
      {
        iconName: "Scale",
        title: "Medidas corporais",
        description: "Monitore peso, percentual de gordura e circunferências físicas para registrar seus ganhos."
      },
      {
        iconName: "Cpu",
        title: "Personal Trainer IA",
        description: "Assistente virtual de treino por IA para sugerir ajustes de séries ou tirar dúvidas técnicas."
      },
      {
        iconName: "WifiOff",
        title: "Funciona offline",
        description: "Acesse e registre seus treinos mesmo sem sinal de internet no meio da academia."
      }
    ]
  },
  {
    id: "bandflow",
    name: "BandFlow",
    description: "Organize ensaios, repertório, agenda de shows e finanças da sua banda ou projeto musical em um só lugar.",
    category: "Música",
    tagColor: {
      bg: "bg-indigo-50/70",
      text: "text-indigo-700",
      border: "border-indigo-200",
      icon: "text-indigo-600"
    },
    iconName: "Music",
    tagline: "Gestão completa para músicos e bandas.",
    paragraphs: [
      "Organize ensaios, repertório, agenda de shows e finanças da sua banda ou projeto musical em um só lugar."
    ],
    features: [
      {
        iconName: "Music",
        title: "Gestão de repertório",
        description: "Organize todas as suas canções, andamentos (BPM), tons e links para letras de forma unificada."
      },
      {
        iconName: "Calendar",
        title: "Agenda de ensaios e shows",
        description: "Calendário compartilhado de compromissos para garantir a presença de todos os integrantes."
      },
      {
        iconName: "Wallet",
        title: "Controle financeiro da banda",
        description: "Controle de cachês, despesas de combustível, estúdio e rateio automatizado."
      },
      {
        iconName: "List",
        title: "Setlists",
        description: "Monte e edite a ordem das músicas para suas apresentações ao vivo com marcação de duração."
      },
      {
        iconName: "Users",
        title: "Membros e contatos",
        description: "Cadastro integrado de contatos de contratantes, produtores e membros ativos."
      },
      {
        iconName: "History",
        title: "Histórico de apresentações",
        description: "Consolide dados de shows anteriores com locais visitados e faturamentos acumulados."
      }
    ]
  },
  {
    id: "mercadofacil",
    name: "MercadoFácil",
    description: "Listas de compras inteligentes com controle de preços, histórico e organização por categorias para facilitar o seu dia a dia.",
    category: "Cotidiano",
    tagColor: {
      bg: "bg-amber-50/70",
      text: "text-amber-700",
      border: "border-amber-200",
      icon: "text-amber-600"
    },
    iconName: "ShoppingCart",
    tagline: "Lista de compras inteligente com controle de preços.",
    paragraphs: [
      "Listas de compras inteligentes com controle de preços, histórico e organização por categorias para facilitar o seu dia a dia."
    ],
    features: [
      {
        iconName: "ShoppingCart",
        title: "Listas inteligentes",
        description: "Adicione e risque produtos com facilidade e compartilhe em tempo real com sua família."
      },
      {
        iconName: "Wallet",
        title: "Controle de preços",
        description: "Registre os valores unitários e tenha o total exato do seu carrinho antes de ir ao caixa."
      },
      {
        iconName: "History",
        title: "Histórico de compras",
        description: "Acompanhe e compare gastos de compras anteriores para planejar seu orçamento mensal."
      },
      {
        iconName: "Layers",
        title: "Organização por categorias",
        description: "Separação automática de hortifrúti, limpeza ou mercearia para agilizar suas compras."
      },
      {
        iconName: "Share2",
        title: "Compartilhamento de listas",
        description: "Envie e colabore em listas dinâmicas com amigos ou familiares em segundos."
      },
      {
        iconName: "WifiOff",
        title: "Modo offline",
        description: "Crie, edite e consulte suas listas de compras perfeitamente mesmo sem conexão celular."
      }
    ]
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "apps-mobile",
    title: "Apps Mobile (iOS & Android)",
    description: "Desenvolvimento nativo e híbrido focado em altíssima performance, design intuitivo e interfaces fluidas que encantam usuários.",
    iconName: "Smartphone"
  },
  {
    id: "sites-webapps",
    title: "Sites e Web Apps",
    description: "Criação de plataformas web sob medida, landing pages de alta conversão e sistemas SaaS rápidos, seguros e escaláveis.",
    iconName: "Globe"
  },
  {
    id: "manutencao-evolucao",
    title: "Manutenção e Evolução",
    description: "Suporte técnico proativo, monitoramento de performance, correções de bugs, atualizações de segurança e novos recursos constantes.",
    iconName: "Cpu"
  }
];

export const PROCESS_STEPS: StepItem[] = [
  {
    number: "01",
    title: "Briefing",
    description: "Alinhamento de ideias, entendimento profundo das necessidades e mapeamento do público-alvo."
  },
  {
    number: "02",
    title: "Proposta",
    description: "Definição clara do escopo, cronograma detalhado de entregas, custos transparentes e arquitetura inicial."
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description: "Design UI/UX sofisticado, codificação limpa usando tecnologias de ponta e testes rigorosos de qualidade."
  },
  {
    number: "04",
    title: "Lançamento",
    description: "Publicação oficial nas lojas ou servidores, treinamento técnico e início do monitoramento pós-lançamento."
  }
];
