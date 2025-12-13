import { useState, useRef } from 'react';
import { ChevronLeft, Printer, RotateCcw, Clock, Target, CheckSquare, BookOpen, Wrench, Brain } from 'lucide-react';
import { useProva } from '../../../context/ProvaContext';

export default function Step4VisualizarSA() {
  const { situacaoAprendizagemGerada, prevStep, resetProva, termoCapacidade, dadosProva } = useProva();
  const printRef = useRef();

  if (!situacaoAprendizagemGerada) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <p className="text-gray-500">Nenhuma Situação de Aprendizagem gerada ainda.</p>
          <button
            onClick={prevStep}
            className="mt-4 px-4 py-2 bg-[#004b8d] text-white rounded-lg"
          >
            Voltar para gerar SA
          </button>
        </div>
      </div>
    );
  }

  const sa = situacaoAprendizagemGerada;

  const handlePrint = () => {
    window.print();
  };

  // Formatar data
  const formatarData = (dataISO) => {
    if (!dataISO) return '';
    const [ano, mes, dia] = dataISO.split('-');
    return `${dia}/${mes}/${ano}`;
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Controles - não aparecem na impressão */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6 no-print">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <BookOpen className="text-[#004b8d]" />
            Situação de Aprendizagem
          </h2>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Printer size={18} />
              Imprimir SA
            </button>

            <button
              onClick={resetProva}
              className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <RotateCcw size={18} />
              Nova SA
            </button>
          </div>
        </div>
      </div>

      {/* Documento da SA */}
      <div ref={printRef} className="bg-white rounded-xl shadow-lg prova-container" id="sa-print">
        {/* Cabeçalho */}
        <table className="w-full border-collapse border border-black text-sm">
          <tbody>
            <tr>
              <td rowSpan="5" className="border border-black p-2 w-36 text-center align-middle">
                <img 
                  src="/senai.png" 
                  alt="SENAI" 
                  className="w-full max-w-[100px] mx-auto mb-1"
                />
                <p className="font-bold text-xs">Serviço Nacional de</p>
                <p className="font-bold text-xs">Aprendizagem Industrial</p>
                <p className="text-xs">Santa Catarina</p>
              </td>
              <td colSpan="2" className="border border-black p-2 text-center font-bold text-base bg-[#004b8d] text-white">
                SITUAÇÃO DE APRENDIZAGEM
              </td>
            </tr>
            <tr>
              <td className="border border-black py-1 px-2">
                <strong>Curso:</strong>{' '}
                <span className="text-blue-600 font-medium italic">{sa.curso}</span>
              </td>
              <td className="border border-black py-1 px-2">
                <strong>Carga Horária:</strong>{' '}
                <span className="text-blue-600 font-medium italic">{sa.cargaHoraria}h</span>
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="border border-black py-1 px-2">
                <strong>Unidade Curricular:</strong>{' '}
                <span className="text-blue-600 font-medium italic">{sa.unidadeCurricular}</span>
              </td>
            </tr>
            <tr>
              <td className="border border-black py-1 px-2">
                <strong>Docente:</strong>{' '}
                <span className="text-blue-600 italic">{sa.docente || dadosProva.professor}</span>
              </td>
              <td className="border border-black py-1 px-2">
                <strong>Turma:</strong>{' '}
                <span className="text-blue-600 italic">{sa.turma || dadosProva.turma}</span>
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="border border-black py-1 px-2">
                <strong>Data:</strong>{' '}
                <span className="text-blue-600 italic">{formatarData(sa.data || dadosProva.data)}</span>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Título da SA */}
        <div className="mt-4 bg-[#004b8d] text-white p-3 text-center">
          <h1 className="text-lg font-bold">{sa.titulo}</h1>
        </div>

        {/* Capacidades */}
        <div className="mt-4">
          <div className="bg-[#004b8d] text-white font-bold py-2 px-3 text-sm flex items-center gap-2">
            <Target size={16} />
            {termoCapacidade.toUpperCase()}S A SEREM DESENVOLVIDAS
          </div>
          <div className="border border-black border-t-0 p-3">
            {sa.capacidades && Object.entries(sa.capacidades).map(([codigo, descricao]) => (
              <p key={codigo} className="mb-2 text-sm">
                <strong className="text-[#004b8d]">{codigo}:</strong> {descricao}
              </p>
            ))}
          </div>
        </div>

        {/* Contextualização */}
        <div className="mt-4">
          <div className="bg-[#004b8d] text-white font-bold py-2 px-3 text-sm flex items-center gap-2">
            <BookOpen size={16} />
            CONTEXTUALIZAÇÃO
          </div>
          <div className="border border-black border-t-0 p-3">
            <p className="text-sm text-gray-700 text-justify leading-relaxed">
              {sa.contextualizacao}
            </p>
          </div>
        </div>

        {/* Desafio */}
        <div className="mt-4">
          <div className="bg-[#004b8d] text-white font-bold py-2 px-3 text-sm flex items-center gap-2">
            <Target size={16} />
            DESAFIO
          </div>
          <div className="border border-black border-t-0 p-3">
            <p className="text-sm text-gray-800 text-justify leading-relaxed font-medium">
              {sa.desafio}
            </p>
          </div>
        </div>

        {/* Resultados Esperados */}
        <div className="mt-4">
          <div className="bg-[#004b8d] text-white font-bold py-2 px-3 text-sm flex items-center gap-2">
            <CheckSquare size={16} />
            RESULTADOS ESPERADOS (ENTREGAS)
          </div>
          <div className="border border-black border-t-0 p-3">
            <ul className="space-y-2">
              {sa.resultadosEsperados?.map((resultado, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <span className="bg-[#004b8d] text-white text-xs px-2 py-0.5 rounded font-medium mt-0.5">
                    {index + 1}
                  </span>
                  <span>{resultado}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Atividades */}
        <div className="mt-4">
          <div className="bg-[#004b8d] text-white font-bold py-2 px-3 text-sm flex items-center gap-2">
            <Wrench size={16} />
            ATIVIDADES
          </div>
          <div className="border border-black border-t-0">
            {sa.atividades?.map((atividade, index) => (
              <div key={index} className={`p-3 ${index > 0 ? 'border-t border-gray-300' : ''}`}>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-[#004b8d] text-sm">
                    Atividade {atividade.numero || index + 1}: {atividade.titulo}
                  </h4>
                  <span className="text-xs bg-blue-100 text-[#004b8d] px-2 py-1 rounded flex items-center gap-1">
                    <Clock size={12} />
                    {atividade.duracao}
                  </span>
                </div>
                <p className="text-sm text-gray-700 mb-2">{atividade.descricao}</p>
                {atividade.recursos && atividade.recursos.length > 0 && (
                  <div className="text-xs text-gray-500">
                    <strong>Recursos:</strong> {atividade.recursos.join(', ')}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Recursos Necessários */}
        <div className="mt-4">
          <div className="bg-[#004b8d] text-white font-bold py-2 px-3 text-sm flex items-center gap-2">
            <Wrench size={16} />
            RECURSOS NECESSÁRIOS
          </div>
          <div className="border border-black border-t-0 p-3">
            <ul className="grid grid-cols-2 gap-2">
              {sa.recursosNecessarios?.map((recurso, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 bg-[#004b8d] rounded-full"></span>
                  {recurso}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Critérios de Avaliação */}
        <div className="mt-4">
          <div className="bg-[#004b8d] text-white font-bold py-2 px-3 text-sm flex items-center gap-2">
            <CheckSquare size={16} />
            CRITÉRIOS DE AVALIAÇÃO
          </div>
          <div className="border border-black border-t-0">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border-b border-r border-gray-300 p-2 text-left">Critério</th>
                  <th className="border-b border-gray-300 p-2 text-center w-24">{termoCapacidade}</th>
                </tr>
              </thead>
              <tbody>
                {sa.criteriosAvaliacao?.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="border-b border-r border-gray-300 p-2">{item.criterio}</td>
                    <td className="border-b border-gray-300 p-2 text-center font-medium text-[#004b8d]">
                      {item.capacidadeRelacionada}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Conhecimentos Mobilizados */}
        <div className="mt-4 mb-4">
          <div className="bg-[#004b8d] text-white font-bold py-2 px-3 text-sm flex items-center gap-2">
            <Brain size={16} />
            CONHECIMENTOS MOBILIZADOS
          </div>
          <div className="border border-black border-t-0 p-3">
            <ul className="grid grid-cols-2 gap-2">
              {sa.conhecimentosMobilizados?.map((conhecimento, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 bg-[#004b8d] rounded-full"></span>
                  {conhecimento}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Botões de navegação - não aparecem na impressão */}
      <div className="flex justify-between mt-6 no-print">
        <button
          onClick={prevStep}
          className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <ChevronLeft size={20} />
          Voltar
        </button>

        <button
          onClick={resetProva}
          className="flex items-center gap-2 px-6 py-3 bg-[#004b8d] text-white rounded-lg hover:bg-[#003a6d] transition-colors"
        >
          <RotateCcw size={20} />
          Criar Nova SA
        </button>
      </div>
    </div>
  );
}
