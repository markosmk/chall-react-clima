import { useEffect } from 'react';

import Spinner from '../common/Spinner';
import ButtonEmptyState from '../common/ButtonEmptyState';

import WeatherCurrentInfo from '../WeatherCurrentInfo';
import WeatherFiveDays from '../WeatherFiveDays';
import FormSelectCity from '../FormSelectCity';
import FormSearchCity from '../FormSearchCity';

import useForecastSearch from '../../hooks/useForecastSearch';

const Forecast = () => {
  const { result, isLoading, isError, processRequest, processSearch } =
    useForecastSearch();

  useEffect(() => {
    processRequest();
    // eslint-disable-next-line
  }, []);

  const handleSelect = (citySelected) => {
    processRequest(citySelected);
  };

  const handleGeolocation = () => {
    processRequest();
  };

  return (
    <>
      <FormSearchCity handleSubmit={processSearch} />
      <FormSelectCity handleSelect={handleSelect} handleGeolocation={handleGeolocation} />

      {isError && (
        <p className="bg-red-50 text-red-700 py-2 px-4 rounded-md text-sm mb-4">
          <b>Error:</b> {isError}
        </p>
      )}

      {isLoading ? (
        <Spinner centered />
      ) :
      // if object result is empty show button to get local weather
      !result.hasOwnProperty('current') ? (
        <ButtonEmptyState handleGeolocation={handleGeolocation} />
      ) : (
        <>
          <WeatherCurrentInfo current={result.current} />
          <WeatherFiveDays daily={result.daily} />
        </>
      )}
    </>
  );
};

export default Forecast;
