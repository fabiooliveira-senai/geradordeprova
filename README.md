# 📝 Gerador de Provas SENAI

Sistema automatizado para geração de **avaliações objetivas e práticas** seguindo a Metodologia SENAI de Educação Profissional (MSEP) e o padrão SAEP (Sistema de Avaliação da Educação Profissional).

![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1-06B6D4?logo=tailwindcss)
![License](https://img.shields.io/badge/License-Educational-green)

---

## 🚀 Início Rápido

### Pré-requisitos

- **Node.js** 18+ instalado ([download](https://nodejs.org/))
- **npm** ou **yarn**
- **API Key do Groq** (gratuita)

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/fabiooliveira-senai/geradordeprova.git

# 2. Entre na pasta do projeto
cd geradordeprova

# 3. Instale as dependências
npm install

# 4. Configure a API Key (veja seção abaixo)

# 5. Inicie o servidor de desenvolvimento
npm run dev
```

O sistema estará disponível em: **http://localhost:5173**

---

## 🔑 Configuração da API Key

O sistema utiliza a **API Groq** (gratuita) para gerar questões com IA.

### Passo a passo:

1. Acesse [console.groq.com/keys](https://console.groq.com/keys)
2. Crie uma conta gratuita (pode usar Google/GitHub)
3. Clique em **"Create API Key"**
4. Copie a chave gerada

### Configurar no projeto:

```bash
# Copie o arquivo de exemplo
cp .env.example .env

# Edite o arquivo .env e cole sua chave
```

O arquivo `.env` deve ficar assim:

```env
VITE_GROQ_API_KEY=gsk_sua_chave_aqui
```

> ⚠️ **Importante:** Nunca compartilhe sua API Key ou faça commit do arquivo `.env`

---

## 📋 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera build de produção na pasta `dist/` |
| `npm run preview` | Visualiza o build de produção localmente |
| `npm run lint` | Executa o ESLint para verificar o código |

---

## ✨ Funcionalidades

### Tipos de Avaliação

| Objetiva | Prática |
|----------|---------|
| Questões de múltipla escolha | Situação-problema contextualizada |
| Contexto + Comando + Alternativas | Atividades práticas com critérios |
| Gabarito automático | Lista de verificação |

### Recursos Principais

- **🎯 Seleção Múltipla de Dificuldade**: Escolha Fácil, Médio e/ou Difícil com distribuição proporcional automática
- **✏️ Edição de Questões**: Revise e edite cada questão antes de finalizar
- **🤖 Geração com IA + RAG**: Usa base de conhecimento SENAI para questões de qualidade
- **📄 Impressão Profissional**: Template formatado no padrão SENAI
- **📊 Gabarito Separado**: Visualize e imprima o gabarito independentemente

### Suporte a Terminologia

- **Ensino Técnico**: Usa "Capacidade Técnica" (CT)
- **Ensino Médio Integrado** (SESI/SENAI): Usa "Habilidade" (H)

---

## 🎓 Como Usar

### 1. Selecionar Tipo de Avaliação
Escolha entre **Avaliação Objetiva** ou **Avaliação Prática**

### 2. Dados Básicos (Passo 1)
- Selecione o tipo de ensino (Técnico ou Integrado)
- Escolha o curso e unidade curricular
- Preencha turma, data e professor

### 3. Capacidades (Passo 2)
- Selecione as capacidades/habilidades a serem avaliadas
- **Para Objetiva:** Defina quantidade, dificuldade(s) e assunto
- **Para Prática:** Apenas selecione as capacidades

### 4. Gerar Avaliação (Passo 3)
- Clique em **"Gerar com IA"**
- **Para Objetiva:** Revise e edite as questões geradas
- **Para Prática:** Configure tempo e nível cognitivo

### 5. Visualizar e Imprimir (Passo 4)
- Visualize a avaliação completa
- Imprima a prova e/ou gabarito

---

## 🛠️ Tecnologias

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| React | 19.2 | Framework frontend |
| Vite | 7.2 | Build tool |
| TailwindCSS | 4.1 | Estilização |
| Lucide React | 0.561 | Ícones |
| React Router | 7.10 | Navegação |
| Groq API | - | LLM (Llama 3.3 70B) |

---

## 📁 Estrutura do Projeto

```
gerador-provas-senai/
├── public/
│   └── senai.png              # Logo SENAI
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── StepIndicator.jsx
│   │   ├── TipoAvaliacaoSelector.jsx
│   │   └── steps/
│   │       ├── Step1DadosBasicos.jsx
│   │       ├── Step2Capacidades.jsx
│   │       ├── Step3GerarQuestoes.jsx
│   │       ├── Step4VisualizarProva.jsx
│   │       └── pratica/
│   │           ├── Step3GerarPratica.jsx
│   │           └── Step4VisualizarPratica.jsx
│   ├── context/
│   │   └── ProvaContext.jsx   # Estado global
│   ├── data/
│   │   └── cursos.js          # Matriz curricular
│   ├── services/
│   │   ├── llmService.js      # Integração Groq
│   │   └── ragService.js      # Base de conhecimento
│   ├── config/
│   │   └── api.js             # Configurações
│   ├── App.jsx
│   └── main.jsx
├── .env.example               # Exemplo de variáveis
├── package.json
└── vite.config.js
```

---

## 📚 Cursos Disponíveis

- Técnico em Desenvolvimento de Sistemas
- Técnico em Desenvolvimento de Sistemas (Integrado ao Ensino Médio)
- Técnico em Informática para Internet
- Técnico em Multimídia

---

## 📐 Metodologia SAEP

As questões objetivas seguem o padrão SAEP:

| Elemento | Descrição |
|----------|-----------|
| **Contexto** | Situação-problema real do mundo do trabalho |
| **Comando** | Pergunta diretamente relacionada ao contexto |
| **Alternativas** | 4 opções (a, b, c, d) com tamanhos semelhantes |

### Regras de Elaboração

- ✅ Sem pegadinhas nas alternativas
- ✅ Alternativa correta com tamanho similar às outras
- ✅ Comando sem frases subjetivas
- ✅ Distratores plausíveis
- ✅ Respostas distribuídas equilibradamente

---

## 🐛 Solução de Problemas

### "API não configurada"
- Verifique se o arquivo `.env` existe na raiz do projeto
- Confirme que a chave começa com `gsk_`
- Reinicie o servidor após criar/editar o `.env`

### "Erro ao gerar questões"
- Verifique sua conexão com a internet
- Confirme que a API Key é válida em [console.groq.com](https://console.groq.com)
- Tente novamente (pode ser limite de rate)

### Build falha
```bash
# Limpe o cache e reinstale
rm -rf node_modules package-lock.json
npm install
```

---

## 📄 Licença

Desenvolvido para uso educacional no **SENAI Santa Catarina**.

---

## 👥 Contribuição

1. Faça um fork do projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request
