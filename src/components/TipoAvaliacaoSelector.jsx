import { FileText, Wrench } from 'lucide-react';

export default function TipoAvaliacaoSelector({ onSelect }) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Selecione o Tipo de Avaliação
        </h2>
        <p className="text-gray-600">
          Escolha entre avaliação objetiva (múltipla escolha) ou prática (situação-problema)
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Card Avaliação Objetiva */}
        <button
          onClick={() => onSelect('objetiva')}
          className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-500 text-left"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-500 transition-colors">
              <FileText className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">Avaliação Objetiva</h3>
              <span className="text-sm text-blue-600 font-medium">Múltipla Escolha</span>
            </div>
          </div>
          
          <p className="text-gray-600 mb-4">
            Questões de múltipla escolha com contexto, comando e alternativas seguindo o padrão SAEP do SENAI.
          </p>
          
          <ul className="space-y-2 text-sm text-gray-500">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
              Questões com 4 alternativas (A, B, C, D)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
              Contexto + Comando + Alternativas
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
              Gabarito automático
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
              Avalia conhecimentos teóricos
            </li>
          </ul>

          <div className="mt-6 text-blue-600 font-medium group-hover:translate-x-2 transition-transform flex items-center gap-2">
            Criar Avaliação Objetiva →
          </div>
        </button>

        {/* Card Avaliação Prática */}
        <button
          onClick={() => onSelect('pratica')}
          className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-orange-500 text-left"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-500 transition-colors">
              <Wrench className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">Avaliação Prática</h3>
              <span className="text-sm text-orange-600 font-medium">Situação-Problema</span>
            </div>
          </div>
          
          <p className="text-gray-600 mb-4">
            Desafios práticos com contextualização, atividades e critérios de avaliação baseados em competências.
          </p>
          
          <ul className="space-y-2 text-sm text-gray-500">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
              Contextualização do mundo do trabalho
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
              Desafio + Atividades + Entregas
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
              Lista de verificação com critérios
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
              Avalia capacidades técnicas e práticas
            </li>
          </ul>

          <div className="mt-6 text-orange-600 font-medium group-hover:translate-x-2 transition-transform flex items-center gap-2">
            Criar Avaliação Prática →
          </div>
        </button>
      </div>

      <div className="mt-8 bg-blue-50 rounded-lg p-4 text-center">
        <p className="text-sm text-blue-800">
          <strong>Dica:</strong> Use avaliações objetivas para verificar conhecimentos teóricos e 
          avaliações práticas para avaliar capacidades técnicas e psicomotoras em situações reais de trabalho.
        </p>
      </div>
    </div>
  );
}
