import Forecast from './components/Forecast/Forecast';
import IconClima from './components/common/IconClima';

function App() {
  return (
    <div className="max-w-xl mx-auto p-4 sm:px-0 relative">
      <div className="text-center">
        <IconClima />
        <h2 className="mt-2 text-lg font-medium text-black">Clima App</h2>
        <p className="mt-1 text-sm text-slate-500">
          La App permite visualizar el pronóstico climático actual y los proximos 5 dias
          de tu ubicacion. Ademas puedes visualizar el pronóstico de otras 5 ciudades
          seleccionables.
        </p>
      </div>
      <Forecast />
    </div>
  );
}

export default App;
