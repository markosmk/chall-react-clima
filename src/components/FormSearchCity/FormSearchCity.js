import { useState } from 'react';

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
        className="focus:ring-0 focus:border-sky-500 block w-full sm:text-sm border-2 border-slate-200 rounded-md"
        placeholder="Nombre de Ciudad, Pais (Codigo de Pais ej.: AR, ES, CL, etc )..."
      />
      <button
        type="submit"
        className="ml-4 flex-shrink-0 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-0 active:bg-sky-800"
      >
        Buscar
      </button>
    </form>
  );
};

export default FormSearch;
