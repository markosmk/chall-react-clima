import Forecast from './components/Forecast';
import IconClima from './components/Icons/IconClima';

function App() {
  return (
    <div className="max-w-xl mx-auto p-4 sm:px-0">
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
