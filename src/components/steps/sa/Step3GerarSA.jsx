import { useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Loader2, AlertCircle, Clock, FileText } from 'lucide-react';
import { useProva } from '../../../context/ProvaContext';
import { gerarSituacaoAprendizagem } from '../../../services/saService';

export default function Step3GerarSA() {
  const { 
    dadosProva, 
    prevStep, 
    nextStep, 
    termoCapacidade,
    setSituacaoAprendizagemGerada,
    situacaoAprendizagemGerada,
    apiConfigured
  } = useProva();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cargaHoraria, setCargaHoraria] = useState(20);
  const [tema, setTema] = useState(dadosProva.assunto || '');
  const [contextoAdicional, setContextoAdicional] = useState('');

  // Preparar capacidades para exibição
  const capacidadesSelecionadas = dadosProva.capacidades.map(cap => ({
    codigo: cap.codigo,
    descricao: cap.descricao
  }));

  const handleGerarSA = async () => {
    if (!tema.trim()) {
      setError('Por favor, informe o tema/assunto da Situação de Aprendizagem.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const sa = await gerarSituacaoAprendizagem({
        curso: dadosProva.curso,
        unidadeCurricular: dadosProva.unidadeCurricular,
        capacidades: capacidadesSelecionadas,
        cargaHoraria,
        tema,
        contextoAdicional,
        termoCapacidade
      });

      setSituacaoAprendizagemGerada({
        ...sa,
        docente: dadosProva.professor,
        turma: dadosProva.turma,
        data: dadosProva.data
      });

    } catch (err) {
      console.error('Erro ao gerar SA:', err);
      setError(err.message || 'Erro ao gerar Situação de Aprendizagem. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleProximo = () => {
    if (situacaoAprendizagemGerada) {
      nextStep();
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <FileText className="text-green-600" />
          Gerar Situação de Aprendizagem
        </h2>

        {/* Resumo dos dados */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-gray-700 mb-3">Dados da SA</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-500">Curso:</span>
              <span className="ml-2 font-medium">{dadosProva.curso}</span>
            </div>
            <div>
              <span className="text-gray-500">Unidade Curricular:</span>
              <span className="ml-2 font-medium">{dadosProva.unidadeCurricular}</span>
            </div>
            <div>
              <span className="text-gray-500">Docente:</span>
              <span className="ml-2 font-medium">{dadosProva.professor}</span>
            </div>
            <div>
              <span className="text-gray-500">Turma:</span>
              <span className="ml-2 font-medium">{dadosProva.turma}</span>
            </div>
          </div>
        </div>

        {/* Capacidades selecionadas */}
        <div className="bg-green-50 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-green-800 mb-3">
            {termoCapacidade}s Selecionadas ({capacidadesSelecionadas.length})
          </h3>
          <ul className="space-y-2 text-sm">
            {capacidadesSelecionadas.map((cap, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="bg-green-600 text-white text-xs px-2 py-0.5 rounded font-medium">
                  {cap.codigo}
                </span>
                <span className="text-green-900">{cap.descricao}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Configurações da SA */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Clock size={16} className="inline mr-1" />
              Carga Horária (horas)
            </label>
            <input
              type="number"
              min="4"
              max="100"
              value={cargaHoraria}
              onChange={(e) => setCargaHoraria(parseInt(e.target.value) || 20)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              Tempo total estimado para realização da SA
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tema/Assunto Principal *
            </label>
            <input
              type="text"
              value={tema}
              onChange={(e) => setTema(e.target.value)}
              placeholder="Ex: Desenvolvimento de API RESTful, Instalação elétrica residencial..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contexto Adicional (opcional)
            </label>
            <textarea
              value={contextoAdicional}
              onChange={(e) => setContextoAdicional(e.target.value)}
              placeholder="Informações adicionais que deseja incluir na SA, como recursos disponíveis, nível da turma, projetos anteriores..."
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
        </div>

        {/* Erro */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start gap-3">
            <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
            <div>
              <p className="text-red-800 font-medium">Erro ao gerar SA</p>
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          </div>
        )}

        {/* Aviso se API não configurada */}
        {!apiConfigured && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <p className="text-yellow-800 text-sm">
              <strong>Atenção:</strong> A API Groq não está configurada. 
              Configure a variável VITE_GROQ_API_KEY no arquivo .env para usar a geração com IA.
            </p>
          </div>
        )}

        {/* Preview da SA gerada */}
        {situacaoAprendizagemGerada && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-green-800 mb-2">
              ✓ Situação de Aprendizagem Gerada
            </h3>
            <p className="text-green-700 font-medium">{situacaoAprendizagemGerada.titulo}</p>
            <p className="text-green-600 text-sm mt-1">
              {situacaoAprendizagemGerada.atividades?.length || 0} atividades • 
              {situacaoAprendizagemGerada.cargaHoraria}h de carga horária
            </p>
          </div>
        )}

        {/* Botões */}
        <div className="flex justify-between pt-6 border-t">
          <button
            onClick={prevStep}
            className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft size={20} />
            Voltar
          </button>

          <div className="flex gap-3">
            <button
              onClick={handleGerarSA}
              disabled={isLoading || !apiConfigured}
              className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Gerando SA...
                </>
              ) : (
                <>
                  <Sparkles size={20} />
                  {situacaoAprendizagemGerada ? 'Gerar Novamente' : 'Gerar com IA'}
                </>
              )}
            </button>

            {situacaoAprendizagemGerada && (
              <button
                onClick={handleProximo}
                className="flex items-center gap-2 px-6 py-3 bg-[#004b8d] text-white rounded-lg hover:bg-[#003a6d] transition-colors"
              >
                Visualizar SA
                <ChevronRight size={20} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
