import { useState } from 'react';

import { listCitiesSelected as cities } from '../../services/listCitiesSelected';

const FormSelectCity = ({ handleSelect, handleGeolocation }) => {
  const [city, setCity] = useState({ id: '' });

  const onChangeSelect = (e) => {
    const data = cities.find((item) => item.id === Number(e.target.value));
    if (data) {
      setCity(data);
      handleSelect(data);
    }
  };

  return (
    <form className="my-4 flex">
      <select
        name="city"
        className="w-full border-2 border-slate-200 hover:border-slate-300 focus:outline-none focus:ring-0 focus:border-sky-500 sm:text-sm rounded-md placeholder-slate-400 transition-colors"
        aria-label="Seleccionar Ciudad"
        value={city.id}
        onChange={onChangeSelect}
      >
        <option value="" disabled>
          --- Selecciona una Ciudad de la lista ---
        </option>
        {cities &&
          cities.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
      </select>
      <button
        type="button"
        onClick={handleGeolocation}
        className="ml-4 flex-shrink-0 px-4 border-0 text-sm font-medium rounded-md text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-0 active:bg-sky-800 transition-colors"
      >
        Ver Actual
      </button>
    </form>
  );
};

export default FormSelectCity;
