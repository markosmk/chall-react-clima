import { useState } from 'react';

import IconSearch from '../common/IconSearch';

const FormSearch = ({ handleSubmit }) => {
  const [search, setSearch] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(search);
  };

  return (
    <form className="mt-6 flex" onSubmit={onSubmit}>
      <label htmlFor="search" className="sr-only">
        Buscar Ciudad
      </label>
      <input
        id="search"
        type="text"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        required
        className="focus:ring-0 focus:border-sky-500 block w-full sm:text-sm border-2 border-slate-200 rounded-md transition-colors"
        placeholder="Ciudad, Cod Pais (ej: Neuquen, AR )"
      />
      <button
        type="submit"
        className="ml-4 flex-shrink-0 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-0 active:bg-sky-800 w-14 sm:w-auto transition-colors"
      >
        <IconSearch className="h-6 w-6 sm:h-4 sm:w-4 inline-flex" />
        <span className="hidden sm:inline-flex sm:ml-2">Buscar</span>
      </button>
    </form>
  );
};

export default FormSearch;
