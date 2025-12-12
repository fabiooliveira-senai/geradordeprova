// Serviço RAG (Retrieval-Augmented Generation) - Especialista SENAI
// Base de conhecimento da metodologia SENAI para elaboração de avaliações

/**
 * Base de conhecimento da metodologia SENAI
 * Extraído do Guia Prático SENAI e metodologia SAEP
 */
const baseConhecimento = {
  // Metodologia SENAI de Educação Profissional (MSEP)
  metodologia: {
    principios: `
A Metodologia SENAI de Educação Profissional (MSEP) é baseada no desenvolvimento de competências profissionais.

PRINCÍPIOS FUNDAMENTAIS:
1. Formação baseada em competências profissionais
2. Integração entre teoria e prática
3. Contextualização do conhecimento no mundo do trabalho
4. Avaliação contínua e formativa
5. Desenvolvimento de capacidades técnicas, sociais, organizativas e metodológicas

COMPETÊNCIA PROFISSIONAL:
É a mobilização de conhecimentos, habilidades e atitudes necessários ao desempenho de atividades ou funções típicas de uma ocupação, segundo padrões de qualidade e produtividade requeridos pela natureza do trabalho.

TIPOS DE CAPACIDADES:
- Capacidades Técnicas (CT): Relacionadas ao saber fazer técnico da profissão
- Capacidades Sociais: Relacionadas à interação e comunicação
- Capacidades Organizativas: Relacionadas à organização do trabalho
- Capacidades Metodológicas: Relacionadas à resolução de problemas e tomada de decisão
`,
    situacaoAprendizagem: `
SITUAÇÃO DE APRENDIZAGEM (SA):
É uma estratégia de ensino que contextualiza o processo de aprendizagem em situações reais ou simuladas do mundo do trabalho.

CARACTERÍSTICAS DA SA:
1. Baseada em situação-problema real do mundo do trabalho
2. Integra conhecimentos, habilidades e atitudes
3. Desenvolve autonomia e protagonismo do aluno
4. Permite avaliação por competências
5. Contextualiza o conteúdo técnico

ELEMENTOS DA SA:
- Desafio: Situação-problema a ser resolvida
- Contexto: Ambiente profissional simulado
- Entregas: Produtos ou resultados esperados
- Critérios: Parâmetros de avaliação
`
  },

  // Sistema de Avaliação da Educação Profissional (SAEP)
  saep: {
    estruturaQuestao: `
ESTRUTURA DA QUESTÃO SAEP:

1. CONTEXTO (Situação-Problema)
- Apresenta uma situação real do mundo do trabalho
- Deve ser claro, objetivo e relevante para a área profissional
- Fornece informações necessárias para a resolução
- Não deve conter informações desnecessárias que confundam
- Deve simular um ambiente profissional autêntico

2. COMANDO (Pergunta)
- É a pergunta propriamente dita
- Deve estar DIRETAMENTE relacionado ao contexto
- O aluno NÃO deve conseguir responder apenas lendo o comando
- Evitar comandos subjetivos como "qual a melhor opção"
- Usar verbos de ação: identificar, aplicar, analisar, avaliar

3. ALTERNATIVAS (4 opções: a, b, c, d)
- Apenas UMA correta (gabarito)
- Distratores (alternativas incorretas) devem ser PLAUSÍVEIS
- Tamanhos SEMELHANTES entre as alternativas
- A resposta correta NÃO pode ser maior que as outras
- NÃO usar "todas as anteriores" ou "nenhuma das anteriores"
- NÃO usar pegadinhas ou termos inexistentes
- Todas devem ser relacionadas ao conteúdo avaliado
`,
    regrasElaboracao: `
REGRAS PARA ELABORAÇÃO DE ITENS SAEP:

1. VINCULAÇÃO À CAPACIDADE
- Cada questão deve avaliar UMA capacidade específica
- A capacidade deve estar claramente identificada
- O item deve permitir verificar se o aluno desenvolveu a capacidade

2. CONTEXTUALIZAÇÃO PROFISSIONAL
- Usar situações REAIS do ambiente de trabalho
- Incluir elementos técnicos da área profissional
- Evitar situações genéricas ou acadêmicas demais
- Simular desafios que o profissional enfrentaria

3. CLAREZA E OBJETIVIDADE
- Linguagem clara e acessível
- Evitar dupla interpretação
- Comando direto e objetivo
- Não usar negativas duplas

4. DISTRATORES EFICAZES
- Alternativas incorretas devem ser plausíveis
- Baseadas em erros comuns dos alunos
- Não devem ser obviamente erradas
- Devem ter relação com o conteúdo avaliado

5. DISTRIBUIÇÃO DO GABARITO
- Variar a posição da resposta correta
- Não criar padrões previsíveis
- Distribuir equilibradamente entre a, b, c, d

6. INDEPENDÊNCIA DOS ITENS
- Cada questão deve ser independente
- A resposta de uma não deve depender de outra
- Não revelar respostas de outras questões
`,
    verbosAcao: `
VERBOS DE AÇÃO POR NÍVEL DE COMPLEXIDADE:

NÍVEL BÁSICO (Conhecimento/Compreensão) - Dificuldade FÁCIL:
- Identificar: Reconhecer elementos, conceitos ou características
- Reconhecer: Distinguir entre opções apresentadas
- Descrever: Relatar características ou processos
- Listar: Enumerar elementos ou etapas
- Nomear: Atribuir nome correto a elementos
- Definir: Apresentar significado de termos
- Citar: Mencionar exemplos ou casos

NÍVEL INTERMEDIÁRIO (Aplicação/Análise) - Dificuldade MÉDIA:
- Aplicar: Usar conhecimento em situação prática
- Utilizar: Empregar ferramentas ou técnicas
- Demonstrar: Mostrar como realizar procedimento
- Calcular: Realizar operações matemáticas
- Resolver: Encontrar solução para problema
- Analisar: Examinar partes de um todo
- Comparar: Identificar semelhanças e diferenças
- Diferenciar: Distinguir características específicas

NÍVEL AVANÇADO (Síntese/Avaliação) - Dificuldade DIFÍCIL:
- Avaliar: Julgar com base em critérios
- Julgar: Emitir parecer fundamentado
- Propor: Sugerir soluções ou alternativas
- Planejar: Elaborar estratégias ou projetos
- Criar: Desenvolver algo novo
- Desenvolver: Elaborar de forma completa
- Criticar: Analisar pontos fortes e fracos
`
  },

  // Exemplos de questões por área
  exemplos: {
    bancoDados: `
EXEMPLO - BANCO DE DADOS:

CAPACIDADE: CT3 - Aplicar linguagem para consulta, manipulação e controle do banco de dados

CONTEXTO:
Uma empresa de e-commerce precisa gerar um relatório mensal de vendas. O desenvolvedor deve consultar o banco de dados PostgreSQL para obter o nome dos produtos e a quantidade vendida de cada um no mês de outubro, ordenando do mais vendido para o menos vendido.

COMANDO:
Considerando o contexto apresentado, qual comando SQL atende à necessidade descrita?

ALTERNATIVAS:
a) SELECT nome, quantidade FROM vendas WHERE mes = 'outubro' ORDER BY quantidade DESC;
b) SELECT nome, quantidade FROM vendas WHERE mes = 'outubro' ORDER BY quantidade ASC;
c) UPDATE vendas SET quantidade WHERE mes = 'outubro';
d) INSERT INTO vendas (nome, quantidade) VALUES ('outubro');

RESPOSTA CORRETA: a

ANÁLISE:
- Contexto: Situação real de trabalho (relatório de vendas)
- Comando: Direto, relacionado ao contexto
- Alternativas: Todas são comandos SQL válidos, mas apenas uma atende ao contexto
- Distratores: Baseados em erros comuns (ordenação errada, comando errado)
`,
    programacao: `
EXEMPLO - PROGRAMAÇÃO:

CAPACIDADE: CT2 - Implementar encapsulamento, herança e polimorfismo

CONTEXTO:
Uma software house está desenvolvendo um sistema de gestão de funcionários. O analista precisa criar uma classe base "Funcionario" com atributos protegidos (nome, salário) e uma classe derivada "Gerente" que herda de Funcionario e adiciona o atributo "bonus".

COMANDO:
De acordo com o contexto, qual conceito de POO está sendo aplicado na relação entre as classes Funcionario e Gerente?

ALTERNATIVAS:
a) Herança, pois Gerente estende as características de Funcionario
b) Composição, pois Gerente contém um objeto Funcionario
c) Agregação, pois Gerente referencia Funcionario externamente
d) Interface, pois Gerente implementa o contrato de Funcionario

RESPOSTA CORRETA: a
`,
    webDev: `
EXEMPLO - DESENVOLVIMENTO WEB:

CAPACIDADE: CT4 - Aplicar JavaScript para interatividade client-side

CONTEXTO:
Um desenvolvedor front-end precisa implementar uma funcionalidade em um formulário de cadastro. Quando o usuário clicar no botão "Enviar", o sistema deve validar se o campo "email" está preenchido antes de submeter o formulário.

COMANDO:
Segundo o contexto, qual evento JavaScript deve ser utilizado para executar a validação no momento correto?

ALTERNATIVAS:
a) onclick no botão de envio
b) onload na página
c) onchange no campo de email
d) onmouseover no formulário

RESPOSTA CORRETA: a
`
  },

  // Conhecimento técnico por área
  conhecimentoTecnico: {
    logicaProgramacao: [
      'Algoritmos e fluxogramas',
      'Variáveis e tipos de dados',
      'Operadores aritméticos, relacionais e lógicos',
      'Estruturas de controle: sequência, seleção (if/else, switch), repetição (for, while, do-while)',
      'Vetores e matrizes',
      'Funções e procedimentos',
      'Recursividade',
      'Ordenação e busca'
    ],
    bancoDados: [
      'Modelo Entidade-Relacionamento (MER)',
      'Normalização (1FN, 2FN, 3FN)',
      'SQL DDL: CREATE, ALTER, DROP',
      'SQL DML: INSERT, UPDATE, DELETE',
      'SQL DQL: SELECT, JOIN, GROUP BY, ORDER BY',
      'SQL DCL: GRANT, REVOKE',
      'Índices e otimização',
      'Procedures, Functions e Triggers',
      'Transações e ACID'
    ],
    programacaoOO: [
      'Classes e objetos',
      'Atributos e métodos',
      'Encapsulamento (public, private, protected)',
      'Herança e polimorfismo',
      'Classes abstratas e interfaces',
      'Sobrecarga e sobrescrita',
      'Coleções (List, Set, Map)',
      'Tratamento de exceções',
      'Padrões de projeto (Singleton, Factory, MVC)'
    ],
    desenvolvimentoWeb: [
      'HTML5: semântica, formulários, multimídia',
      'CSS3: seletores, box model, flexbox, grid',
      'JavaScript: DOM, eventos, AJAX, fetch',
      'Responsividade e mobile-first',
      'Frameworks front-end (React, Vue, Angular)',
      'Node.js e Express',
      'APIs RESTful',
      'Autenticação (JWT, OAuth)',
      'Banco de dados para web'
    ],
    mobile: [
      'Arquiteturas mobile (nativo, híbrido, PWA)',
      'Componentes de interface',
      'Navegação entre telas',
      'Armazenamento local (SQLite, SharedPreferences)',
      'Consumo de APIs',
      'Recursos nativos (câmera, GPS, sensores)',
      'Publicação em lojas'
    ]
  }
};

/**
 * Busca conhecimento relevante do RAG baseado na UC e assunto
 * @param {string} unidadeCurricular - Nome da UC
 * @param {string} assunto - Assunto da prova
 * @param {array} capacidades - Capacidades selecionadas
 * @returns {string} - Contexto relevante para a geração
 */
export function buscarConhecimentoRAG(unidadeCurricular, assunto, capacidades) {
  let contexto = '';
  
  // Sempre incluir metodologia SAEP
  contexto += baseConhecimento.saep.estruturaQuestao;
  contexto += '\n\n';
  contexto += baseConhecimento.saep.regrasElaboracao;
  contexto += '\n\n';
  contexto += baseConhecimento.saep.verbosAcao;
  
  // Buscar exemplo relevante baseado na UC
  const ucLower = unidadeCurricular.toLowerCase();
  const assuntoLower = assunto.toLowerCase();
  
  if (ucLower.includes('banco') || ucLower.includes('dados') || assuntoLower.includes('sql')) {
    contexto += '\n\nEXEMPLO DE QUESTÃO MODELO:\n';
    contexto += baseConhecimento.exemplos.bancoDados;
    contexto += '\n\nCONTEÚDOS TÉCNICOS RELEVANTES:\n';
    contexto += baseConhecimento.conhecimentoTecnico.bancoDados.join('\n- ');
  }
  
  if (ucLower.includes('programação') || ucLower.includes('orientada') || ucLower.includes('objetos') || assuntoLower.includes('poo') || assuntoLower.includes('classe')) {
    contexto += '\n\nEXEMPLO DE QUESTÃO MODELO:\n';
    contexto += baseConhecimento.exemplos.programacao;
    contexto += '\n\nCONTEÚDOS TÉCNICOS RELEVANTES:\n';
    contexto += baseConhecimento.conhecimentoTecnico.programacaoOO.join('\n- ');
  }
  
  if (ucLower.includes('web') || ucLower.includes('front') || ucLower.includes('back') || assuntoLower.includes('html') || assuntoLower.includes('javascript')) {
    contexto += '\n\nEXEMPLO DE QUESTÃO MODELO:\n';
    contexto += baseConhecimento.exemplos.webDev;
    contexto += '\n\nCONTEÚDOS TÉCNICOS RELEVANTES:\n';
    contexto += baseConhecimento.conhecimentoTecnico.desenvolvimentoWeb.join('\n- ');
  }
  
  if (ucLower.includes('lógica') || ucLower.includes('algoritmo') || assuntoLower.includes('algoritmo') || assuntoLower.includes('estrutura')) {
    contexto += '\n\nCONTEÚDOS TÉCNICOS RELEVANTES:\n';
    contexto += baseConhecimento.conhecimentoTecnico.logicaProgramacao.join('\n- ');
  }
  
  if (ucLower.includes('mobile') || ucLower.includes('aplicativo') || assuntoLower.includes('android') || assuntoLower.includes('ios')) {
    contexto += '\n\nCONTEÚDOS TÉCNICOS RELEVANTES:\n';
    contexto += baseConhecimento.conhecimentoTecnico.mobile.join('\n- ');
  }
  
  return contexto;
}

/**
 * Obtém sugestões de temas baseado na UC
 * @param {string} unidadeCurricular - Nome da UC
 * @returns {array} - Lista de sugestões de temas
 */
export function getSugestoesTemas(unidadeCurricular) {
  const ucLower = unidadeCurricular.toLowerCase();
  
  if (ucLower.includes('banco') || ucLower.includes('dados')) {
    return baseConhecimento.conhecimentoTecnico.bancoDados;
  }
  
  if (ucLower.includes('programação') && (ucLower.includes('orientada') || ucLower.includes('objetos'))) {
    return baseConhecimento.conhecimentoTecnico.programacaoOO;
  }
  
  if (ucLower.includes('web') || ucLower.includes('front') || ucLower.includes('back')) {
    return baseConhecimento.conhecimentoTecnico.desenvolvimentoWeb;
  }
  
  if (ucLower.includes('lógica') || ucLower.includes('algoritmo')) {
    return baseConhecimento.conhecimentoTecnico.logicaProgramacao;
  }
  
  if (ucLower.includes('mobile') || ucLower.includes('aplicativo')) {
    return baseConhecimento.conhecimentoTecnico.mobile;
  }
  
  // Retorna sugestões genéricas
  return [
    'Conceitos fundamentais da área',
    'Aplicação prática de técnicas',
    'Ferramentas e tecnologias',
    'Boas práticas profissionais',
    'Resolução de problemas'
  ];
}

/**
 * Obtém o contexto completo do RAG (para uso externo)
 */
export function getContextoRAG(unidadeCurricular, assunto) {
  return buscarConhecimentoRAG(unidadeCurricular, assunto, []);
}

export default {
  buscarConhecimentoRAG,
  getSugestoesTemas,
  getContextoRAG,
  baseConhecimento
};
