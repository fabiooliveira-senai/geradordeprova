/**
 * Serviço para geração de Situação de Aprendizagem (SA)
 * Utiliza a API Groq para gerar SAs baseadas na metodologia SENAI
 */

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

/**
 * Obtém a API key do ambiente
 */
const getApiKey = () => {
  return import.meta.env.VITE_GROQ_API_KEY || '';
};

/**
 * Verifica se a API está configurada
 */
export const isApiConfigured = () => {
  const apiKey = getApiKey();
  return apiKey && apiKey.length > 0 && apiKey !== 'sua_chave_aqui';
};

/**
 * Gera uma Situação de Aprendizagem usando IA
 */
export async function gerarSituacaoAprendizagem({
  curso,
  unidadeCurricular,
  capacidades,
  cargaHoraria,
  tema,
  contextoAdicional,
  termoCapacidade = 'Capacidade'
}) {
  const apiKey = getApiKey();
  
  if (!apiKey) {
    throw new Error('API Key não configurada. Configure a variável VITE_GROQ_API_KEY no arquivo .env');
  }

  // Formatar capacidades para o prompt
  const capacidadesTexto = capacidades
    .map(cap => `- ${cap.codigo}: ${cap.descricao}`)
    .join('\n');

  const systemPrompt = `Você é um especialista em educação profissional do SENAI, com profundo conhecimento da Metodologia SENAI de Educação Profissional (MSEP).

Sua tarefa é criar uma SITUAÇÃO DE APRENDIZAGEM (SA) completa e detalhada.

CONCEITO DE SITUAÇÃO DE APRENDIZAGEM:
Uma SA é uma estratégia de ensino que contextualiza o processo de aprendizagem em situações reais ou simuladas do mundo do trabalho. Ela integra conhecimentos, habilidades e atitudes, desenvolvendo a autonomia e o protagonismo do aluno.

ESTRUTURA OBRIGATÓRIA DA SA:

1. TÍTULO: Nome criativo e relacionado ao desafio proposto

2. CONTEXTUALIZAÇÃO: 
   - Apresenta o cenário profissional (empresa fictícia, setor, situação)
   - Deve ser realista e motivador
   - Conecta o conteúdo ao mundo do trabalho

3. DESAFIO:
   - Problema ou situação que o aluno deve resolver
   - Deve ser claro e mensurável
   - Relacionado às ${termoCapacidade.toLowerCase()}s avaliadas

4. RESULTADOS ESPERADOS:
   - Lista de entregas/produtos que o aluno deve produzir
   - Cada entrega deve ser específica e verificável

5. ATIVIDADES:
   - Sequência de atividades para resolver o desafio
   - Cada atividade deve ter objetivo claro
   - Incluir estimativa de tempo

6. RECURSOS NECESSÁRIOS:
   - Materiais, equipamentos, softwares necessários

7. CRITÉRIOS DE AVALIAÇÃO:
   - Lista de critérios objetivos para avaliar cada entrega
   - Baseados nas ${termoCapacidade.toLowerCase()}s selecionadas

8. CONHECIMENTOS MOBILIZADOS:
   - Lista de conhecimentos técnicos necessários

IMPORTANTE:
- A SA deve ser PRÁTICA e APLICÁVEL
- O contexto deve simular uma situação REAL de trabalho
- As atividades devem desenvolver as ${termoCapacidade.toLowerCase()}s indicadas
- Use linguagem clara e profissional`;

  const userPrompt = `Crie uma Situação de Aprendizagem completa com os seguintes dados:

CURSO: ${curso}
UNIDADE CURRICULAR: ${unidadeCurricular}
CARGA HORÁRIA: ${cargaHoraria} horas
TEMA/ASSUNTO: ${tema}

${termoCapacidade.toUpperCase()}S A SEREM DESENVOLVIDAS:
${capacidadesTexto}

${contextoAdicional ? `CONTEXTO ADICIONAL DO DOCENTE:\n${contextoAdicional}\n` : ''}

Retorne a SA em formato JSON com a seguinte estrutura:
{
  "titulo": "Título criativo da SA",
  "cargaHoraria": ${cargaHoraria},
  "contextualizacao": "Texto descrevendo o cenário profissional...",
  "desafio": "Descrição clara do desafio/problema a ser resolvido...",
  "resultadosEsperados": [
    "Entrega 1: descrição",
    "Entrega 2: descrição"
  ],
  "atividades": [
    {
      "numero": 1,
      "titulo": "Título da atividade",
      "descricao": "O que o aluno deve fazer",
      "duracao": "2 horas",
      "recursos": ["recurso1", "recurso2"]
    }
  ],
  "recursosNecessarios": [
    "Computador com acesso à internet",
    "Software X"
  ],
  "criteriosAvaliacao": [
    {
      "criterio": "Descrição do critério",
      "capacidadeRelacionada": "CT1"
    }
  ],
  "conhecimentosMobilizados": [
    "Conhecimento 1",
    "Conhecimento 2"
  ],
  "capacidades": {
    "CT1": "Descrição da capacidade 1",
    "CT2": "Descrição da capacidade 2"
  }
}

IMPORTANTE: Retorne APENAS o JSON válido, sem texto adicional, sem markdown, sem \`\`\`json.`;

  try {
    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.7,
        max_tokens: 4000,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error?.message || `Erro na API: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices[0]?.message?.content;

    if (!content) {
      throw new Error('Resposta vazia da API');
    }

    // Limpar e parsear JSON
    let jsonContent = content.trim();
    
    // Remover possíveis marcadores de código
    if (jsonContent.startsWith('```json')) {
      jsonContent = jsonContent.slice(7);
    }
    if (jsonContent.startsWith('```')) {
      jsonContent = jsonContent.slice(3);
    }
    if (jsonContent.endsWith('```')) {
      jsonContent = jsonContent.slice(0, -3);
    }
    jsonContent = jsonContent.trim();

    const sa = JSON.parse(jsonContent);

    // Adicionar metadados
    return {
      ...sa,
      curso,
      unidadeCurricular,
      dataGeracao: new Date().toISOString(),
      termoCapacidade
    };

  } catch (error) {
    console.error('Erro ao gerar SA:', error);
    throw error;
  }
}

export default {
  gerarSituacaoAprendizagem,
  isApiConfigured
};
