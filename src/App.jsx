import { ProvaProvider, useProva, TIPO_AVALIACAO } from './context/ProvaContext';
import Header from './components/Header';
import Footer from './components/Footer';
import StepIndicator from './components/StepIndicator';
import TipoAvaliacaoSelector from './components/TipoAvaliacaoSelector';
import Step1DadosBasicos from './components/steps/Step1DadosBasicos';
import Step2Capacidades from './components/steps/Step2Capacidades';
import Step3GerarQuestoes from './components/steps/Step3GerarQuestoes';
import Step4VisualizarProva from './components/steps/Step4VisualizarProva';
import Step3GerarPratica from './components/steps/pratica/Step3GerarPratica';
import Step4VisualizarPratica from './components/steps/pratica/Step4VisualizarPratica';

function AppContent() {
  const { currentStep, tipoAvaliacao, selectTipoAvaliacao } = useProva();

  // Se não selecionou tipo de avaliação, mostrar seletor
  if (!tipoAvaliacao) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header />
        
        <main className="max-w-6xl mx-auto px-4 py-8">
          <TipoAvaliacaoSelector onSelect={selectTipoAvaliacao} />
        </main>

        <Footer />
      </div>
    );
  }

  const renderStep = () => {
    // Avaliação Objetiva
    if (tipoAvaliacao === TIPO_AVALIACAO.OBJETIVA) {
      switch (currentStep) {
        case 1:
          return <Step1DadosBasicos />;
        case 2:
          return <Step2Capacidades />;
        case 3:
          return <Step3GerarQuestoes />;
        case 4:
          return <Step4VisualizarProva />;
        default:
          return <Step1DadosBasicos />;
      }
    }
    
    // Avaliação Prática
    if (tipoAvaliacao === TIPO_AVALIACAO.PRATICA) {
      switch (currentStep) {
        case 1:
          return <Step1DadosBasicos />;
        case 2:
          return <Step2Capacidades />;
        case 3:
          return <Step3GerarPratica />;
        case 4:
          return <Step4VisualizarPratica />;
        default:
          return <Step1DadosBasicos />;
      }
    }

    return <Step1DadosBasicos />;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <StepIndicator />
        {renderStep()}
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <ProvaProvider>
      <AppContent />
    </ProvaProvider>
  );
}

export default App;
