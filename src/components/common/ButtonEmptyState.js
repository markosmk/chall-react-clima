import IconLocation from './IconLocation';

const ButtonEmptyState = ({ handleGeolocation }) => {
  return (
    <button
      type="button"
      onClick={handleGeolocation}
      className="relative block w-full border-2 border-slate-200 hover:border-slate-300 border-dashed rounded-lg p-24 text-center focus:outline-none focus:ring-0 active:border-sky-500 transition-colors"
    >
      <IconLocation />
      <span className="mt-2 block text-sm font-medium text-slate-500">
        Click para Ver Pronostico Actual
      </span>
    </button>
  );
};

export default ButtonEmptyState;
