# Gerador de Provas SENAI

Sistema automatizado para geração de provas objetivas seguindo a metodologia SENAI de Educação Profissional (MSEP) e o padrão SAEP (Sistema de Avaliação da Educação Profissional).

## Funcionalidades

- **Suporte a Habilidade e Capacidade**: Trabalha com ambos os termos conforme o tipo de ensino
  - **Ensino Técnico**: Usa "Capacidade Técnica" (CT)
  - **Ensino Médio Integrado** (SESI/SENAI): Usa "Habilidade" (H)

- **Geração Automática com IA**: Integração com API Groq (gratuita) usando o modelo Llama 3.3 70B

- **RAG Especialista SENAI**: Base de conhecimento com a metodologia SENAI para gerar questões de qualidade

- **Sugestões Inteligentes**: O sistema sugere temas de questões baseado na unidade curricular selecionada

- **Template Profissional**: Prova formatada no padrão SENAI pronta para impressão

- **Gabarito**: Visualização e impressão do gabarito separadamente

## Como Usar

### 1. Configurar API Key

1. Acesse [console.groq.com](https://console.groq.com/keys)
2. Crie uma conta gratuita
3. Gere uma API Key
4. No sistema, clique em "Configurações" e cole a chave

### 2. Criar uma Prova

1. **Passo 1 - Dados Básicos**
   - Selecione o tipo de ensino (Técnico ou Integrado)
   - Escolha o curso e unidade curricular
   - Preencha turma, data e professor

2. **Passo 2 - Capacidades/Habilidades**
   - Selecione as capacidades que serão avaliadas
   - Defina quantidade de questões e dificuldade
   - Informe o assunto/conteúdo da prova

3. **Passo 3 - Gerar Questões**
   - Clique em "Gerar Questões com IA"
   - Ou copie o prompt e use em outra IA

4. **Passo 4 - Visualizar e Imprimir**
   - Visualize a prova completa
   - Imprima a prova ou o gabarito

## Tecnologias

- **React 18** + **Vite**
- **TailwindCSS** para estilização
- **Lucide React** para ícones
- **API Groq** (Llama 3.3 70B) para geração de questões

## Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build
```

## Estrutura do Projeto

```
src/
├── components/
│   ├── Header.jsx
│   ├── StepIndicator.jsx
│   ├── SettingsModal.jsx
│   └── steps/
│       ├── Step1DadosBasicos.jsx
│       ├── Step2Capacidades.jsx
│       ├── Step3GerarQuestoes.jsx
│       └── Step4VisualizarProva.jsx
├── context/
│   └── ProvaContext.jsx
├── data/
│   ├── cursos.js          # Matriz curricular dos cursos
│   └── ragContext.js      # Base de conhecimento SENAI
├── services/
│   └── llmService.js      # Integração com API Groq
└── App.jsx
```

## Cursos Disponíveis

- Técnico em Desenvolvimento de Sistemas
- Técnico em Desenvolvimento de Sistemas (Integrado ao Ensino Médio)
- Técnico em Informática para Internet
- Técnico em Multimídia

## Metodologia SAEP

As questões seguem o padrão SAEP:

1. **Contexto**: Situação-problema real do mundo do trabalho
2. **Comando**: Pergunta diretamente relacionada ao contexto
3. **Alternativas**: 4 opções (a, b, c, d) com tamanhos semelhantes

### Regras de Elaboração

- Sem pegadinhas nas alternativas
- Alternativa correta não pode ser maior que as outras
- Comando não pode ter frases subjetivas
- Distratores devem ser plausíveis
- Respostas distribuídas equilibradamente entre a, b, c, d

## Licença

Desenvolvido para uso educacional no SENAI.
