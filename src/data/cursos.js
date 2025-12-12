// Dados dos cursos SENAI com suas unidades curriculares e capacidades/habilidades
// Baseado nas matrizes curriculares SC 2024

export const TIPO_ENSINO = {
  TECNICO: 'tecnico', // Usa "Capacidade"
  INTEGRADO: 'integrado' // Usa "Habilidade" (Ensino Médio Integrado ao Técnico - SESI/SENAI)
};

export const cursos = [
  {
    id: 'desi',
    nome: 'Técnico em Desenvolvimento de Sistemas',
    tipo: TIPO_ENSINO.TECNICO,
    unidadesCurriculares: [
      // 1º Período
      {
        id: 'uc1',
        nome: 'Introdução a Tecnologia da Informação e Comunicação',
        cargaHoraria: 40,
        modulo: 'Indústria',
        capacidades: [
          { codigo: 'CT1', descricao: 'Identificar os fundamentos de tecnologia da informação e comunicação' },
          { codigo: 'CT2', descricao: 'Reconhecer os componentes de sistemas computacionais' },
          { codigo: 'CT3', descricao: 'Aplicar conceitos básicos de redes e internet' }
        ]
      },
      {
        id: 'uc2',
        nome: 'Lógica de Programação',
        cargaHoraria: 220,
        modulo: 'Introdutório',
        capacidades: [
          { codigo: 'CT1', descricao: 'Identificar os princípios da lógica de programação aplicados ao desenvolvimento de sistemas' },
          { codigo: 'CT2', descricao: 'Aplicar técnicas de algoritmos para resolução de problemas computacionais' },
          { codigo: 'CT3', descricao: 'Utilizar estruturas de controle de fluxo (sequência, seleção e repetição)' },
          { codigo: 'CT4', descricao: 'Aplicar estruturas de dados (vetores, matrizes, registros)' },
          { codigo: 'CT5', descricao: 'Desenvolver algoritmos utilizando funções e procedimentos' },
          { codigo: 'CT6', descricao: 'Aplicar técnicas de depuração e teste de algoritmos' }
        ]
      },
      {
        id: 'uc3',
        nome: 'Fundamentos de Eletroeletrônica Aplicada',
        cargaHoraria: 80,
        modulo: 'Introdutório',
        capacidades: [
          { codigo: 'CT1', descricao: 'Identificar os princípios básicos de eletricidade e eletrônica' },
          { codigo: 'CT2', descricao: 'Reconhecer componentes eletrônicos e suas aplicações' },
          { codigo: 'CT3', descricao: 'Aplicar conceitos de circuitos elétricos básicos' }
        ]
      },
      // 2º Período
      {
        id: 'uc4',
        nome: 'Introdução ao Desenvolvimento de Projetos',
        cargaHoraria: 12,
        modulo: 'Indústria',
        capacidades: [
          { codigo: 'CT1', descricao: 'Identificar metodologias de desenvolvimento de projetos' },
          { codigo: 'CT2', descricao: 'Aplicar técnicas de planejamento e organização de projetos' }
        ]
      },
      {
        id: 'uc5',
        nome: 'Modelagem de Sistemas',
        cargaHoraria: 100,
        modulo: 'Específico II',
        capacidades: [
          { codigo: 'CT1', descricao: 'Aplicar técnicas de modelagem de sistemas utilizando UML' },
          { codigo: 'CT2', descricao: 'Desenvolver diagramas de casos de uso, classes e sequência' },
          { codigo: 'CT3', descricao: 'Identificar requisitos funcionais e não funcionais' },
          { codigo: 'CT4', descricao: 'Aplicar padrões de projeto de software' }
        ]
      },
      {
        id: 'uc6',
        nome: 'Banco de Dados',
        cargaHoraria: 120,
        modulo: 'Específico I',
        capacidades: [
          { codigo: 'CT1', descricao: 'Identificar linguagem de banco dados relacionais e não-relacionais para consulta, manipulação, controle e definição' },
          { codigo: 'CT2', descricao: 'Identificar ferramentas de manipulação de banco de dados' },
          { codigo: 'CT3', descricao: 'Aplicar linguagem para consulta, manipulação e controle do banco de dados (SQL)' },
          { codigo: 'CT4', descricao: 'Identificar métodos de normalização de banco de dados' },
          { codigo: 'CT5', descricao: 'Modelar banco de dados utilizando modelo entidade-relacionamento (MER)' },
          { codigo: 'CT6', descricao: 'Aplicar técnicas de otimização de consultas' },
          { codigo: 'CT7', descricao: 'Implementar procedures, functions e triggers' }
        ]
      },
      {
        id: 'uc7',
        nome: 'Programação de Aplicativos',
        cargaHoraria: 100,
        modulo: 'Específico I',
        capacidades: [
          { codigo: 'CT1', descricao: 'Aplicar os conceitos de orientação a objetos (classes, objetos, atributos, métodos)' },
          { codigo: 'CT2', descricao: 'Implementar encapsulamento, herança e polimorfismo' },
          { codigo: 'CT3', descricao: 'Desenvolver aplicações com interface gráfica' },
          { codigo: 'CT4', descricao: 'Implementar conexão com banco de dados' },
          { codigo: 'CT5', descricao: 'Aplicar tratamento de exceções' }
        ]
      },
      // 3º Período
      {
        id: 'uc8',
        nome: 'Sustentabilidade nos Processos Industriais',
        cargaHoraria: 8,
        modulo: 'Indústria',
        capacidades: [
          { codigo: 'CT1', descricao: 'Identificar práticas sustentáveis nos processos industriais' },
          { codigo: 'CT2', descricao: 'Aplicar conceitos de responsabilidade ambiental' }
        ]
      },
      {
        id: 'uc9',
        nome: 'Introdução a Qualidade e Produtividade',
        cargaHoraria: 16,
        modulo: 'Indústria',
        capacidades: [
          { codigo: 'CT1', descricao: 'Identificar conceitos de qualidade e produtividade' },
          { codigo: 'CT2', descricao: 'Aplicar ferramentas de gestão da qualidade' }
        ]
      },
      {
        id: 'uc10',
        nome: 'Desenvolvimento de Sistemas',
        cargaHoraria: 200,
        modulo: 'Específico II',
        capacidades: [
          { codigo: 'CT1', descricao: 'Desenvolver sistemas web utilizando linguagens de programação client-side e server-side' },
          { codigo: 'CT2', descricao: 'Aplicar frameworks de desenvolvimento web' },
          { codigo: 'CT3', descricao: 'Implementar APIs RESTful' },
          { codigo: 'CT4', descricao: 'Integrar aplicações com banco de dados' },
          { codigo: 'CT5', descricao: 'Aplicar padrões de arquitetura de software (MVC, MVP)' },
          { codigo: 'CT6', descricao: 'Implementar autenticação e autorização' }
        ]
      },
      {
        id: 'uc11',
        nome: 'Teste de Sistemas',
        cargaHoraria: 60,
        modulo: 'Específico II',
        capacidades: [
          { codigo: 'CT1', descricao: 'Identificar tipos e técnicas de testes de software' },
          { codigo: 'CT2', descricao: 'Aplicar testes unitários, de integração e de sistema' },
          { codigo: 'CT3', descricao: 'Desenvolver casos de teste e planos de teste' },
          { codigo: 'CT4', descricao: 'Utilizar ferramentas de automação de testes' }
        ]
      },
      // 4º Período
      {
        id: 'uc12',
        nome: 'Introdução a Indústria 4.0',
        cargaHoraria: 24,
        modulo: 'Indústria',
        capacidades: [
          { codigo: 'CT1', descricao: 'Identificar os conceitos e tecnologias da Indústria 4.0' },
          { codigo: 'CT2', descricao: 'Reconhecer aplicações de IoT, Big Data e Inteligência Artificial na indústria' }
        ]
      },
      {
        id: 'uc13',
        nome: 'Saúde e Segurança no Trabalho',
        cargaHoraria: 12,
        modulo: 'Indústria',
        capacidades: [
          { codigo: 'CT1', descricao: 'Identificar normas de saúde e segurança no trabalho' },
          { codigo: 'CT2', descricao: 'Aplicar práticas de prevenção de acidentes' }
        ]
      },
      {
        id: 'uc14',
        nome: 'Internet das Coisas',
        cargaHoraria: 128,
        modulo: 'Específico I',
        capacidades: [
          { codigo: 'CT1', descricao: 'Identificar arquiteturas e protocolos de IoT' },
          { codigo: 'CT2', descricao: 'Desenvolver aplicações para dispositivos IoT' },
          { codigo: 'CT3', descricao: 'Integrar sensores e atuadores em sistemas' },
          { codigo: 'CT4', descricao: 'Aplicar conceitos de comunicação entre dispositivos' }
        ]
      },
      {
        id: 'uc15',
        nome: 'Implantação de Sistemas',
        cargaHoraria: 40,
        modulo: 'Específico II',
        capacidades: [
          { codigo: 'CT1', descricao: 'Identificar métodos e técnicas para implantação de sistemas' },
          { codigo: 'CT2', descricao: 'Aplicar procedimentos de documentação técnica' },
          { codigo: 'CT3', descricao: 'Configurar ambientes de produção' },
          { codigo: 'CT4', descricao: 'Realizar testes de implantação e homologação' }
        ]
      },
      {
        id: 'uc16',
        nome: 'Manutenção de Sistemas',
        cargaHoraria: 40,
        modulo: 'Específico II',
        capacidades: [
          { codigo: 'CT1', descricao: 'Aplicar técnicas de manutenção corretiva e evolutiva' },
          { codigo: 'CT2', descricao: 'Identificar e corrigir falhas em sistemas' },
          { codigo: 'CT3', descricao: 'Aplicar técnicas de versionamento de código (Git)' },
          { codigo: 'CT4', descricao: 'Documentar alterações e atualizações de sistemas' }
        ]
      }
    ]
  },
  {
    id: 'info-internet',
    nome: 'Técnico em Informática para Internet',
    tipo: TIPO_ENSINO.TECNICO,
    unidadesCurriculares: [
      // 1º Período
      {
        id: 'uc1',
        nome: 'Introdução à Tecnologia da Informação e Comunicação',
        cargaHoraria: 40,
        modulo: 'Indústria',
        capacidades: [
          { codigo: 'CT1', descricao: 'Identificar os fundamentos de tecnologia da informação e comunicação' },
          { codigo: 'CT2', descricao: 'Reconhecer os componentes de sistemas computacionais' }
        ]
      },
      {
        id: 'uc2',
        nome: 'Introdução ao Desenvolvimento de Projetos',
        cargaHoraria: 12,
        modulo: 'Indústria',
        capacidades: [
          { codigo: 'CT1', descricao: 'Identificar metodologias de desenvolvimento de projetos' },
          { codigo: 'CT2', descricao: 'Aplicar técnicas de planejamento e organização de projetos' }
        ]
      },
      {
        id: 'uc3',
        nome: 'Introdução a Indústria 4.0',
        cargaHoraria: 24,
        modulo: 'Indústria',
        capacidades: [
          { codigo: 'CT1', descricao: 'Identificar os conceitos e tecnologias da Indústria 4.0' },
          { codigo: 'CT2', descricao: 'Reconhecer aplicações de IoT, Big Data e IA na indústria' }
        ]
      },
      {
        id: 'uc4',
        nome: 'Arquitetura de Hardware e Software',
        cargaHoraria: 24,
        modulo: 'Introdutório',
        capacidades: [
          { codigo: 'CT1', descricao: 'Identificar componentes de hardware e arquitetura de computadores' },
          { codigo: 'CT2', descricao: 'Reconhecer tipos de software e suas aplicações' },
          { codigo: 'CT3', descricao: 'Aplicar conceitos de sistemas operacionais' }
        ]
      },
      {
        id: 'uc5',
        nome: 'Versionamento e Colaboração',
        cargaHoraria: 20,
        modulo: 'Introdutório',
        capacidades: [
          { codigo: 'CT1', descricao: 'Aplicar técnicas de versionamento de código com Git' },
          { codigo: 'CT2', descricao: 'Utilizar plataformas de colaboração (GitHub, GitLab)' },
          { codigo: 'CT3', descricao: 'Aplicar boas práticas de trabalho em equipe' }
        ]
      },
      {
        id: 'uc6',
        nome: 'Lógica de Programação',
        cargaHoraria: 128,
        modulo: 'Introdutório',
        capacidades: [
          { codigo: 'CT1', descricao: 'Identificar os princípios da lógica de programação' },
          { codigo: 'CT2', descricao: 'Aplicar técnicas de algoritmos para resolução de problemas' },
          { codigo: 'CT3', descricao: 'Utilizar estruturas de controle de fluxo (sequência, seleção e repetição)' },
          { codigo: 'CT4', descricao: 'Aplicar estruturas de dados (vetores, matrizes)' },
          { codigo: 'CT5', descricao: 'Desenvolver algoritmos utilizando funções e procedimentos' }
        ]
      },
      {
        id: 'uc7',
        nome: 'Fundamentos de UI / UX',
        cargaHoraria: 76,
        modulo: 'Introdutório',
        capacidades: [
          { codigo: 'CT1', descricao: 'Aplicar princípios de design de interfaces (UI)' },
          { codigo: 'CT2', descricao: 'Aplicar conceitos de experiência do usuário (UX)' },
          { codigo: 'CT3', descricao: 'Desenvolver wireframes e protótipos' },
          { codigo: 'CT4', descricao: 'Utilizar ferramentas de design (Figma)' }
        ]
      },
      // 2º Período
      {
        id: 'uc8',
        nome: 'Codificação para Front-End',
        cargaHoraria: 100,
        modulo: 'Específico I',
        capacidades: [
          { codigo: 'CT1', descricao: 'Aplicar HTML5 para estruturação semântica de páginas web' },
          { codigo: 'CT2', descricao: 'Aplicar CSS3 para estilização e layout de páginas web' },
          { codigo: 'CT3', descricao: 'Desenvolver interfaces responsivas' },
          { codigo: 'CT4', descricao: 'Aplicar JavaScript para interatividade client-side' },
          { codigo: 'CT5', descricao: 'Utilizar frameworks e bibliotecas front-end' }
        ]
      },
      {
        id: 'uc9',
        nome: 'Interação com APIs',
        cargaHoraria: 40,
        modulo: 'Específico I',
        capacidades: [
          { codigo: 'CT1', descricao: 'Consumir APIs RESTful' },
          { codigo: 'CT2', descricao: 'Aplicar requisições HTTP (GET, POST, PUT, DELETE)' },
          { codigo: 'CT3', descricao: 'Manipular dados em formato JSON' },
          { codigo: 'CT4', descricao: 'Implementar tratamento de erros em requisições' }
        ]
      },
      {
        id: 'uc10',
        nome: 'Testes de Front-End',
        cargaHoraria: 40,
        modulo: 'Específico I',
        capacidades: [
          { codigo: 'CT1', descricao: 'Identificar tipos de testes para front-end' },
          { codigo: 'CT2', descricao: 'Aplicar testes unitários em componentes' },
          { codigo: 'CT3', descricao: 'Utilizar ferramentas de teste (Jest, Testing Library)' }
        ]
      },
      {
        id: 'uc11',
        nome: 'Projeto de Front-End',
        cargaHoraria: 90,
        modulo: 'Específico I',
        capacidades: [
          { codigo: 'CT1', descricao: 'Desenvolver projeto completo de front-end' },
          { codigo: 'CT2', descricao: 'Aplicar metodologias ágeis no desenvolvimento' },
          { codigo: 'CT3', descricao: 'Integrar componentes e funcionalidades' },
          { codigo: 'CT4', descricao: 'Realizar deploy de aplicação front-end' }
        ]
      },
      {
        id: 'uc12',
        nome: 'Sustentabilidade nos Processos Industriais',
        cargaHoraria: 8,
        modulo: 'Indústria',
        capacidades: [
          { codigo: 'CT1', descricao: 'Identificar práticas sustentáveis nos processos industriais' }
        ]
      },
      {
        id: 'uc13',
        nome: 'Introdução a Qualidade e Produtividade',
        cargaHoraria: 16,
        modulo: 'Indústria',
        capacidades: [
          { codigo: 'CT1', descricao: 'Identificar conceitos de qualidade e produtividade' },
          { codigo: 'CT2', descricao: 'Aplicar ferramentas de gestão da qualidade' }
        ]
      },
      // 3º Período
      {
        id: 'uc14',
        nome: 'Codificação para Back-End',
        cargaHoraria: 100,
        modulo: 'Específico II',
        capacidades: [
          { codigo: 'CT1', descricao: 'Aplicar linguagens de programação server-side' },
          { codigo: 'CT2', descricao: 'Desenvolver aplicações com Node.js ou PHP' },
          { codigo: 'CT3', descricao: 'Implementar padrão MVC' },
          { codigo: 'CT4', descricao: 'Aplicar conceitos de segurança em aplicações web' }
        ]
      },
      {
        id: 'uc15',
        nome: 'Desenvolvimento de APIs',
        cargaHoraria: 60,
        modulo: 'Específico II',
        capacidades: [
          { codigo: 'CT1', descricao: 'Desenvolver APIs RESTful' },
          { codigo: 'CT2', descricao: 'Implementar autenticação e autorização (JWT)' },
          { codigo: 'CT3', descricao: 'Documentar APIs' },
          { codigo: 'CT4', descricao: 'Aplicar boas práticas de desenvolvimento de APIs' }
        ]
      },
      {
        id: 'uc16',
        nome: 'Banco de Dados',
        cargaHoraria: 80,
        modulo: 'Específico II',
        capacidades: [
          { codigo: 'CT1', descricao: 'Modelar banco de dados relacional' },
          { codigo: 'CT2', descricao: 'Aplicar SQL para manipulação de dados (CRUD)' },
          { codigo: 'CT3', descricao: 'Utilizar banco de dados NoSQL' },
          { codigo: 'CT4', descricao: 'Integrar aplicações com banco de dados' }
        ]
      },
      {
        id: 'uc17',
        nome: 'Testes de Back-End',
        cargaHoraria: 40,
        modulo: 'Específico II',
        capacidades: [
          { codigo: 'CT1', descricao: 'Identificar tipos de testes para back-end' },
          { codigo: 'CT2', descricao: 'Aplicar testes unitários e de integração' },
          { codigo: 'CT3', descricao: 'Utilizar ferramentas de teste de API' }
        ]
      },
      {
        id: 'uc18',
        nome: 'Projeto de Back-End',
        cargaHoraria: 90,
        modulo: 'Específico II',
        capacidades: [
          { codigo: 'CT1', descricao: 'Desenvolver projeto completo de back-end' },
          { codigo: 'CT2', descricao: 'Integrar front-end com back-end' },
          { codigo: 'CT3', descricao: 'Realizar deploy de aplicação completa' },
          { codigo: 'CT4', descricao: 'Aplicar CI/CD no projeto' }
        ]
      },
      {
        id: 'uc19',
        nome: 'Saúde e Segurança no Trabalho',
        cargaHoraria: 12,
        modulo: 'Indústria',
        capacidades: [
          { codigo: 'CT1', descricao: 'Identificar normas de saúde e segurança no trabalho' },
          { codigo: 'CT2', descricao: 'Aplicar práticas de prevenção de acidentes' }
        ]
      }
    ]
  },
  {
    id: 'multimidia',
    nome: 'Técnico em Multimídia',
    tipo: TIPO_ENSINO.TECNICO,
    unidadesCurriculares: [
      // 1º Período
      {
        id: 'uc1',
        nome: 'Introdução à Tecnologia da Informação e Comunicação',
        cargaHoraria: 40,
        modulo: 'Indústria',
        capacidades: [
          { codigo: 'CT1', descricao: 'Identificar os fundamentos de tecnologia da informação e comunicação' },
          { codigo: 'CT2', descricao: 'Reconhecer os componentes de sistemas computacionais' }
        ]
      },
      {
        id: 'uc2',
        nome: 'História do Design Gráfico',
        cargaHoraria: 40,
        modulo: 'Introdutório',
        capacidades: [
          { codigo: 'CT1', descricao: 'Identificar a evolução histórica do design gráfico' },
          { codigo: 'CT2', descricao: 'Reconhecer movimentos artísticos e suas influências no design' },
          { codigo: 'CT3', descricao: 'Aplicar referências históricas em projetos de design' }
        ]
      },
      {
        id: 'uc3',
        nome: 'Fundamentos de Teoria da Cor',
        cargaHoraria: 40,
        modulo: 'Introdutório',
        capacidades: [
          { codigo: 'CT1', descricao: 'Aplicar teoria das cores e harmonia cromática' },
          { codigo: 'CT2', descricao: 'Identificar sistemas de cores (RGB, CMYK, Pantone)' },
          { codigo: 'CT3', descricao: 'Aplicar psicologia das cores em projetos' }
        ]
      },
      {
        id: 'uc4',
        nome: 'Fundamentos de Desenho e Percepção Visual',
        cargaHoraria: 40,
        modulo: 'Introdutório',
        capacidades: [
          { codigo: 'CT1', descricao: 'Aplicar técnicas básicas de desenho' },
          { codigo: 'CT2', descricao: 'Desenvolver percepção visual e composição' },
          { codigo: 'CT3', descricao: 'Aplicar princípios de design (equilíbrio, contraste, hierarquia)' }
        ]
      },
      {
        id: 'uc5',
        nome: 'Fundamentos de Fotografia Digital e de Semiótica',
        cargaHoraria: 40,
        modulo: 'Introdutório',
        capacidades: [
          { codigo: 'CT1', descricao: 'Aplicar técnicas de fotografia digital' },
          { codigo: 'CT2', descricao: 'Identificar conceitos de semiótica e comunicação visual' },
          { codigo: 'CT3', descricao: 'Aplicar composição fotográfica' }
        ]
      },
      {
        id: 'uc6',
        nome: 'Saúde e Segurança no Trabalho',
        cargaHoraria: 12,
        modulo: 'Indústria',
        capacidades: [
          { codigo: 'CT1', descricao: 'Identificar normas de saúde e segurança no trabalho' },
          { codigo: 'CT2', descricao: 'Aplicar práticas de ergonomia' }
        ]
      },
      {
        id: 'uc7',
        nome: 'Introdução ao Desenvolvimento de Projetos',
        cargaHoraria: 12,
        modulo: 'Indústria',
        capacidades: [
          { codigo: 'CT1', descricao: 'Identificar metodologias de desenvolvimento de projetos' },
          { codigo: 'CT2', descricao: 'Aplicar técnicas de planejamento e organização' }
        ]
      },
      // 2º Período
      {
        id: 'uc8',
        nome: 'Tipografia',
        cargaHoraria: 60,
        modulo: 'Específico I',
        capacidades: [
          { codigo: 'CT1', descricao: 'Identificar famílias tipográficas e suas características' },
          { codigo: 'CT2', descricao: 'Aplicar tipografia de forma eficaz em projetos' },
          { codigo: 'CT3', descricao: 'Desenvolver hierarquia tipográfica' }
        ]
      },
      {
        id: 'uc9',
        nome: 'Imagem Digital',
        cargaHoraria: 80,
        modulo: 'Específico I',
        capacidades: [
          { codigo: 'CT1', descricao: 'Utilizar softwares de edição de imagem (Photoshop)' },
          { codigo: 'CT2', descricao: 'Aplicar técnicas de tratamento e retoque de imagens' },
          { codigo: 'CT3', descricao: 'Desenvolver composições e fotomontagens' },
          { codigo: 'CT4', descricao: 'Otimizar imagens para diferentes mídias' }
        ]
      },
      {
        id: 'uc10',
        nome: 'Produção Audiovisual',
        cargaHoraria: 100,
        modulo: 'Específico II',
        capacidades: [
          { codigo: 'CT1', descricao: 'Definir estrutura de pré-produção, produção e pós-produção de projetos audiovisuais' },
          { codigo: 'CT2', descricao: 'Identificar procedimentos técnicos para a produção de curtas-metragem, comerciais e documentários' },
          { codigo: 'CT3', descricao: 'Identificar padrões, normas e procedimentos para elaboração do projeto de mídias digitais, referentes a propriedade intelectual, acessibilidade, usabilidade e sustentabilidade' },
          { codigo: 'CT4', descricao: 'Identificar a estrutura técnica do roteiro e storyboard para desenvolvimento de projeto audiovisual' },
          { codigo: 'CT5', descricao: 'Identificar tipos e características de plataformas utilizados no processo de criação de elementos gráficos para imagens, animações, áudio e vídeo' },
          { codigo: 'CT6', descricao: 'Identificar a complexidade, aplicação e o estilo da produção do vídeo' },
          { codigo: 'CT7', descricao: 'Aplicar conceitos de fotografia e filmagem para o desenvolvimento audiovisual' },
          { codigo: 'CT8', descricao: 'Selecionar elementos audiovisuais como: formas, imagens, grafismos, pictogramas, áudio, animações, vídeos, textos para o desenvolvimento de animações gráficas' },
          { codigo: 'CT9', descricao: 'Identificar o processo de buffering para o processamento de dados no projeto' },
          { codigo: 'CT10', descricao: 'Aplicar ajustes de cor, chroma key, efeitos visuais e sonoros' },
          { codigo: 'CT11', descricao: 'Aplicar blocagem de animações, imagens, textos, legendas, vídeos e áudio para desenvolvimento de projeto' },
          { codigo: 'CT12', descricao: 'Aplicar edição de áudio, vídeo, texto e imagem para compor um produto audiovisual' },
          { codigo: 'CT13', descricao: 'Aplicar procedimentos de proximidade e alinhamento para desenvolver projetos audiovisuais' },
          { codigo: 'CT14', descricao: 'Aplicar render da produção audiovisual para diferentes plataformas' }
        ]
      },
      {
        id: 'uc11',
        nome: 'Design Web',
        cargaHoraria: 100,
        modulo: 'Específico II',
        capacidades: [
          { codigo: 'CT1', descricao: 'Identificar padrões, normas e procedimentos para elaboração do projeto de mídias digitais, referentes a propriedade intelectual, acessibilidade, usabilidade e sustentabilidade' },
          { codigo: 'CT2', descricao: 'Identificar estrutura técnica para desenvolvimento de layout com características de responsividade para projetos de web' },
          { codigo: 'CT3', descricao: 'Selecionar softwares, aplicativos e plugins necessários para a elaboração do layout para projetos de design web' },
          { codigo: 'CT4', descricao: 'Identificar estrutura técnica para desenvolvimento de wireframes de interfaces gráficas para design web' },
          { codigo: 'CT5', descricao: 'Analisar usabilidade e navegabilidade do projeto de mídias digitais' },
          { codigo: 'CT6', descricao: 'Aplicar soluções de acessibilidade e sustentabilidade para o projeto de web' },
          { codigo: 'CT7', descricao: 'Aplicar procedimentos técnicos de automatização, diagramação, proximidade e alinhamento para projetos web' },
          { codigo: 'CT8', descricao: 'Aplicar linguagem HTML (HyperText Markup Language) para desenvolvimento de design web' },
          { codigo: 'CT9', descricao: 'Aplicar a publicação de website para visualização online de projeto de web' },
          { codigo: 'CT10', descricao: 'Aplicar conceitos de design de experiência e interação do usuário' }
        ]
      },
      // 3º Período
      {
        id: 'uc12',
        nome: 'Sustentabilidade nos Processos Industriais',
        cargaHoraria: 8,
        modulo: 'Indústria',
        capacidades: [
          { codigo: 'CT1', descricao: 'Identificar práticas sustentáveis nos processos industriais' }
        ]
      },
      {
        id: 'uc13',
        nome: 'Design de Interfaces',
        cargaHoraria: 100,
        modulo: 'Específico II',
        capacidades: [
          { codigo: 'CT1', descricao: 'Selecionar elementos audiovisuais como: formas, imagens, grafismos, pictogramas, áudio, animações, vídeos, textos para o desenvolvimento de interfaces' },
          { codigo: 'CT2', descricao: 'Aplicar os padrões de experiência de usuários nos projetos de interface' },
          { codigo: 'CT3', descricao: 'Aplicar procedimentos técnicos de automatização, diagramação, proximidade e alinhamento para projetos de interfaces' },
          { codigo: 'CT4', descricao: 'Identificar estrutura técnica para desenvolvimento de layout com características de responsividade para projetos de interfaces' },
          { codigo: 'CT5', descricao: 'Analisar usabilidade e navegabilidade do projeto de mídias digitais' },
          { codigo: 'CT6', descricao: 'Identificar aspectos técnicos, funcionais, de custos, tipos de materiais e condições de produção digital para a criação do projeto' },
          { codigo: 'CT7', descricao: 'Identificar estrutura técnica para desenvolvimento de wireframes de interfaces gráficas design web, interfaces e redes sociais' },
          { codigo: 'CT8', descricao: 'Selecionar softwares, aplicativos e plugins necessários para a elaboração do layout para projetos digitais' }
        ]
      },
      {
        id: 'uc14',
        nome: 'Design de Animação 3D',
        cargaHoraria: 140,
        modulo: 'Específico III',
        capacidades: [
          { codigo: 'CT1', descricao: 'Identificar padrões, normas e procedimentos para elaboração do projeto de mídias digitais, referentes a propriedade intelectual, acessibilidade, usabilidade e sustentabilidade' },
          { codigo: 'CT2', descricao: 'Identificar a aplicação, complexidade e o estilo dos modelos hard surface e animação 3D' },
          { codigo: 'CT3', descricao: 'Selecionar software, aplicativos e plugins necessários para desenvolvimento da modelagem hard surface e animação 3D' },
          { codigo: 'CT4', descricao: 'Identificar estrutura técnica para desenvolvimento de roteiro para animação' },
          { codigo: 'CT5', descricao: 'Aplicar conceitos de animação com keyframes e curvas para desenvolvimento da animação' },
          { codigo: 'CT6', descricao: 'Aplicar princípios de animação para desenvolver projetos de animação 3D' },
          { codigo: 'CT7', descricao: 'Aplicar textura no modelo 3D hard surface criado para desenvolvimento da animação' },
          { codigo: 'CT8', descricao: 'Identificar as características dos modelos 3D para criação do projeto' },
          { codigo: 'CT9', descricao: 'Aplicar técnicas de concept art dos modelos 3D para o desenvolvimento do projeto' }
        ]
      },
      {
        id: 'uc15',
        nome: 'Projeto de Identidade Visual',
        cargaHoraria: 100,
        modulo: 'Específico II',
        capacidades: [
          { codigo: 'CT1', descricao: 'Desenvolver logotipos e marcas' },
          { codigo: 'CT2', descricao: 'Criar identidade visual completa' },
          { codigo: 'CT3', descricao: 'Desenvolver manual de identidade visual' },
          { codigo: 'CT4', descricao: 'Aplicar identidade visual em diferentes mídias' }
        ]
      },
      // 4º Período
      {
        id: 'uc16',
        nome: 'Introdução a Indústria 4.0',
        cargaHoraria: 24,
        modulo: 'Indústria',
        capacidades: [
          { codigo: 'CT1', descricao: 'Identificar os conceitos e tecnologias da Indústria 4.0' },
          { codigo: 'CT2', descricao: 'Reconhecer aplicações de tecnologias emergentes na multimídia' }
        ]
      },
      {
        id: 'uc17',
        nome: 'Introdução a Qualidade e Produtividade',
        cargaHoraria: 16,
        modulo: 'Indústria',
        capacidades: [
          { codigo: 'CT1', descricao: 'Identificar conceitos de qualidade e produtividade' },
          { codigo: 'CT2', descricao: 'Aplicar ferramentas de gestão da qualidade' }
        ]
      },
      {
        id: 'uc18',
        nome: 'Projeto de Mídias Digitais',
        cargaHoraria: 80,
        modulo: 'Específico I',
        capacidades: [
          { codigo: 'CT1', descricao: 'Desenvolver projetos para mídias digitais' },
          { codigo: 'CT2', descricao: 'Criar conteúdo para redes sociais' },
          { codigo: 'CT3', descricao: 'Aplicar estratégias de marketing digital' }
        ]
      },
      {
        id: 'uc19',
        nome: 'Projeto de Mídias Integradas',
        cargaHoraria: 140,
        modulo: 'Específico III',
        capacidades: [
          { codigo: 'CT1', descricao: 'Identificar os pilares tecnológicos para integração dos sistemas verticais e horizontais dos projetos de design' },
          { codigo: 'CT2', descricao: 'Identificar estrutura técnica para desenvolvimento de protótipos e/ou mockups na integração de mídias digitais' },
          { codigo: 'CT3', descricao: 'Identificar os impulsores das novas tecnologias para integração dos processos' },
          { codigo: 'CT4', descricao: 'Selecionar softwares, aplicativos e plugins necessários a integração dos projetos de design' },
          { codigo: 'CT5', descricao: 'Selecionar plataformas onde os projetos de mídias digitais serão aplicados' },
          { codigo: 'CT6', descricao: 'Identificar mídias com possibilidade de implementação de diferentes projetos de multimídia' },
          { codigo: 'CT7', descricao: 'Definir os produtos que serão aplicados em diferentes mídias' }
        ]
      },
      {
        id: 'uc20',
        nome: 'Motion Design',
        cargaHoraria: 120,
        modulo: 'Específico III',
        capacidades: [
          { codigo: 'CT1', descricao: 'Identificar aspectos técnicos, funcionais, de custos, tipos de materiais e condições de produção gráfica para a criação do projeto' },
          { codigo: 'CT2', descricao: 'Identificar estilo de animações que serão utilizadas no projeto de motion design' },
          { codigo: 'CT3', descricao: 'Identificar estrutura técnica para desenvolvimento de animações digitais bidimensionais publicitárias, cinema e web' },
          { codigo: 'CT4', descricao: 'Identificar padrões, normas e procedimentos para elaboração do projeto de mídias digitais, referentes a propriedade intelectual, acessibilidade, usabilidade e sustentabilidade' },
          { codigo: 'CT5', descricao: 'Identificar soluções de usabilidade do produto com base nos padrões de mercado' },
          { codigo: 'CT6', descricao: 'Aplicar soluções de acessibilidade e sustentabilidade para o projeto' },
          { codigo: 'CT7', descricao: 'Aplicar softwares, aplicativos e plugins necessários para a elaboração da animação para projetos de motion design' },
          { codigo: 'CT8', descricao: 'Aplicar conceitos de animação com keyframes e curvas para desenvolvimento da animação 2D para mídias digitais' },
          { codigo: 'CT9', descricao: 'Aplicar conceitos de fotografia e filmagem para o desenvolvimento audiovisual' },
          { codigo: 'CT10', descricao: 'Aplicar edição para blocar animações, imagens, textos, vídeos e áudio para desenvolvimento de projeto' },
          { codigo: 'CT11', descricao: 'Aplicar princípios de animação, proximidade e alinhamento para desenvolver projetos de mídias digitais' },
          { codigo: 'CT12', descricao: 'Definir storyboard e roteiro para elaborar elementos de motion design' },
          { codigo: 'CT13', descricao: 'Selecionar elementos audiovisuais como: formas, imagens, grafismos, pictogramas, áudio, animações, vídeos, textos para o desenvolvimento de animações gráficas' },
          { codigo: 'CT14', descricao: 'Aplicar ajustes de cor, chroma key, efeitos visuais e sonoros' }
        ]
      }
    ]
  }
];

// Função auxiliar para obter o termo correto (Capacidade ou Habilidade)
export const getTermoCapacidade = (tipoEnsino) => {
  return tipoEnsino === TIPO_ENSINO.INTEGRADO ? 'Habilidade' : 'Capacidade';
};

// Função auxiliar para obter o prefixo do código (H ou CT)
export const getPrefixoCodigo = (tipoEnsino) => {
  return tipoEnsino === TIPO_ENSINO.INTEGRADO ? 'H' : 'CT';
};

export default cursos;
