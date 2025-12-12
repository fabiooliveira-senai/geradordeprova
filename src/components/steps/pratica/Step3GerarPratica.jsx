import { useState } from 'react';
import { useProva } from '../../../context/ProvaContext';
import { Sparkles, Loader2, AlertCircle, CheckCircle } from 'lucide-react';
import { gerarAvaliacaoPratica } from '../../../services/llmService';

export default function Step3GerarPratica() {
  const { 
    dadosProva, 
    termoCapacidade,
    setAvaliacaoPraticaGerada,
    nextStep, 
    prevStep,
    isLoading,
    setIsLoading,
    error,
    setError
  } = useProva();

  const [nivelCognitivo, setNivelCognitivo] = useState('Aplicar');
  const [tempoExecucao, setTempoExecucao] = useState(120);
  const [contextoAdicional, setContextoAdicional] = useState('');

  const handleGerarAvaliacao = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const dados = {
        ...dadosProva,
        termoCapacidade: termoCapacidade || 'Capacidade',
        nivelCognitivo,
        tempoExecucao,
        contextoAdicional
      };

      const resultado = await gerarAvaliacaoPratica(dados);
      setAvaliacaoPraticaGerada(resultado);
      nextStep();
    } catch (err) {
      setError(err.message || 'Erro ao gerar avaliação prática');
    } finally {
      setIsLoading(false);
    }
  };

  const níveisCognitivos = [
    { value: 'Lembrar', desc: 'Recordar informações, fatos e conceitos' },
    { value: 'Entender', desc: 'Compreender e interpretar significados' },
    { value: 'Aplicar', desc: 'Usar conhecimento em situações novas' },
    { value: 'Analisar', desc: 'Dividir em partes e identificar relações' },
    { value: 'Avaliar', desc: 'Julgar com base em critérios e padrões' },
    { value: 'Criar', desc: 'Produzir algo novo ou reorganizar elementos' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-orange-600" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">Gerar Avaliação Prática</h2>
          <p className="text-gray-500 text-sm">Configure os parâmetros e gere a avaliação</p>
        </div>
      </div>

      {/* Resumo dos dados */}
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <h3 className="font-semibold text-gray-700 mb-3">Resumo da Avaliação</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-500">Curso:</span>
            <span className="ml-2 font-medium">{dadosProva.curso}</span>
          </div>
          <div>
            <span className="text-gray-500">UC:</span>
            <span className="ml-2 font-medium">{dadosProva.unidadeCurricular}</span>
          </div>
          <div>
            <span className="text-gray-500">Turma:</span>
            <span className="ml-2 font-medium">{dadosProva.turma}</span>
          </div>
          <div>
            <span className="text-gray-500">Professor:</span>
            <span className="ml-2 font-medium">{dadosProva.professor}</span>
          </div>
        </div>
        
        <div className="mt-4">
          <span className="text-gray-500 text-sm">Capacidades selecionadas:</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {dadosProva.capacidades.map((cap, idx) => (
              <span key={idx} className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs">
                {cap.codigo || cap}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Configurações da avaliação prática */}
      <div className="space-y-6">
        {/* Nível Cognitivo */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nível Cognitivo (Taxonomia de Bloom)
          </label>
          <div className="grid md:grid-cols-3 gap-3">
            {níveisCognitivos.map((nivel) => (
              <button
                key={nivel.value}
                onClick={() => setNivelCognitivo(nivel.value)}
                className={`p-3 rounded-lg border-2 text-left transition-all ${
                  nivelCognitivo === nivel.value
                    ? 'border-orange-500 bg-orange-50'
                    : 'border-gray-200 hover:border-orange-300'
                }`}
              >
                <div className="font-medium text-gray-800">{nivel.value}</div>
                <div className="text-xs text-gray-500 mt-1">{nivel.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Tempo de Execução */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tempo de Execução (minutos)
          </label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="30"
              max="240"
              step="15"
              value={tempoExecucao}
              onChange={(e) => setTempoExecucao(Number(e.target.value))}
              className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
            />
            <span className="w-20 text-center font-medium text-gray-700 bg-gray-100 px-3 py-2 rounded-lg">
              {tempoExecucao} min
            </span>
          </div>
        </div>

        {/* Contexto Adicional */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Contexto Adicional / Assunto Específico (opcional)
          </label>
          <textarea
            value={contextoAdicional}
            onChange={(e) => setContextoAdicional(e.target.value)}
            placeholder="Ex: Desenvolvimento de um sistema de cadastro de clientes usando React e Node.js..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none"
            rows={3}
          />
          <p className="text-xs text-gray-500 mt-1">
            Descreva o contexto específico ou tema que deseja abordar na avaliação prática
          </p>
        </div>
      </div>

      {/* Erro */}
      {error && (
        <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-red-700 font-medium">Erro ao gerar avaliação</p>
            <p className="text-red-600 text-sm mt-1">{error}</p>
          </div>
        </div>
      )}

      {/* Info sobre estrutura */}
      <div className="mt-6 bg-orange-50 border border-orange-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-orange-800">
            <p className="font-medium mb-2">A avaliação prática será gerada com:</p>
            <ul className="space-y-1 text-orange-700">
              <li>• <strong>Capacidades:</strong> Lista das capacidades avaliadas</li>
              <li>• <strong>Contextualização:</strong> Situação-problema do mundo do trabalho</li>
              <li>• <strong>Desafio:</strong> Descrição das atividades a serem realizadas</li>
              <li>• <strong>Resultados e Entregas:</strong> Evidências esperadas com tempo estimado</li>
              <li>• <strong>Lista de Verificação:</strong> Critérios de avaliação por atividade</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Botões de navegação */}
      <div className="flex justify-between mt-8 pt-6 border-t">
        <button
          onClick={prevStep}
          disabled={isLoading}
          className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50"
        >
          Voltar
        </button>
        
        <button
          onClick={handleGerarAvaliacao}
          disabled={isLoading}
          className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all flex items-center gap-2 disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Gerando Avaliação...
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              Gerar Avaliação Prática
            </>
          )}
        </button>
      </div>
    </div>
  );
}
