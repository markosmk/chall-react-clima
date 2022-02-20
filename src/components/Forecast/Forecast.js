import { useEffect, useState } from 'react';

import Spinner from '../common/Spinner';
import WeatherCurrentInfo from '../WeatherCurrentInfo';
import WeatherFiveDays from '../WeatherFiveDays';
import FormSelectCity from '../FormSelectCity';

import {
  getForecastByActualLocation,
  getForecastByCoordinates,
  getForecastLocalByIp,
} from '../../services/getDataApi';
import { getCurrentInfo, getFiveDays } from '../../services/getWeatherData';

const Forecast = () => {
  const [isLoading, setLoading] = useState(false);
  const [city, setCity] = useState({});
  const [weather, setWeather] = useState(false);
  const [isError, setError] = useState('');

  const getCurrentForecast = async () => {
    setLoading(true);
    setError(false);
    try {
      const cityLocal = await getForecastByActualLocation();
      if (!cityLocal.hasOwnProperty('name')) {
        const data = await getForecastLocalByIp();
        setCity(data);
      } else {
        setCity(cityLocal);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCurrentForecast();
  }, []);

  useEffect(() => {
    if (city.lon && city.lat) {
      const updateForecast = async () => {
        setLoading(true);
        setError(false);
        try {
          const data = await getForecastByCoordinates(city);
          const dataForecast = {
            current: getCurrentInfo(data.current, city),
            daily: getFiveDays(data.daily),
          };
          setWeather(dataForecast);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
      updateForecast();
    }
  }, [city]);

  const handleSelect = (citySelected) => {
    setCity(citySelected);
  };

  const handleGeolocation = () => {
    getCurrentForecast();
  };

  return (
    <>
      <FormSelectCity handleSelect={handleSelect} handleGeolocation={handleGeolocation} />

      {isError && (
        <p className="bg-red-50 text-red-700 py-2 px-4 rounded-md text-sm mb-4">
          <b>Error:</b> {isError}
        </p>
      )}

      {isLoading && (
        <div className="absolute top-6 right-2">
          <Spinner />
        </div>
      )}

      {weather.hasOwnProperty('current') && (
        <div
          className={
            isLoading ? 'blur scale-90 transition' : 'transform scale-100 duration-300 '
          }
        >
          <WeatherCurrentInfo current={weather.current} />
          <WeatherFiveDays daily={weather.daily} />
        </div>
      )}
    </>
  );
};

export default Forecast;
