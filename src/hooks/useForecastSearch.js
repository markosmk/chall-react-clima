import { useState } from 'react';

import {
  getForecastByActualLocation,
  getForecastByCoordinates,
  getForecastByGeolocation, // for search feature
} from '../services/getDataApi';
import { getCurrentInfo, getFiveDays } from '../services/getWeatherData';

const useForecastSearch = () => {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [result, setResult] = useState({});

  const getForecastCity = async (city) => {
    try {
      const data = await getForecastByCoordinates(city);
      return data;
    } catch (error) {
      setError(error.message);
    }
  };

  // process to get data local and a City specified
  const processRequest = async (city = null) => {
    setLoading(true);
    setError(false);
    let cityLocal = '';

    try {
      // if argument city is null get actual location
      if (!city) {
        cityLocal = await getForecastByActualLocation();
      }
      const data = await getForecastCity(city || cityLocal);

      setResult(orderData(data, city || cityLocal));
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // const processRequestLocal = async () => {
  //   const cityLocal = await getForecastByActualLocation();
  //   const data = await processRequest(cityLocal);
  //   setResult(orderData(data, cityLocal));
  // };

  const processSearch = async (citySearch) => {
    setLoading(true);
    setError(false);
    try {
      const cityFound = await getForecastByGeolocation(citySearch);
      const data = await getForecastCity(cityFound);

      setResult(orderData(data, cityFound));
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // simply to keep the data logic for components in one section
  const orderData = (data, city) => {
    const current = getCurrentInfo(data.current, city);
    const daily = getFiveDays(data.daily);
    return { current, daily };
  };

  return {
    result,
    isLoading,
    isError,
    processRequest,
    processSearch,
  };
};

export default useForecastSearch;
