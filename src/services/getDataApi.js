// Todo en una llamada
// https://openweathermap.org/api/one-call-api
export const API_URL = `https://api.openweathermap.org/data/2.5/onecall?appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=es&exclude=hourly,minutely,alerts`;
//..&lat={lat}&lon={lon}

// Geocoding API
// https://openweathermap.org/api/geocoding-api
export const API_URL_GEOCODING = `http://api.openweathermap.org/geo/1.0/direct?appid=${process.env.REACT_APP_API_KEY}`;

// Current weather data
// https://openweathermap.org/current
// export const API_URL_CURRENT_WEATHER = `http://api.openweathermap.org/data/2.5/weather?appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=es`;
//..&lat={lat}&lon={lon}

// 5 day weather forecast
//https://openweathermap.org/forecast5
// export const API_URL_5_FORECAST = `http://api.openweathermap.org/data/2.5/forecast?appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=es`;
//..&lat={lat}&lon={lon}

export const getForecastByCoordinates = async (city) => {
  try {
    if (!city.lat || !city.lon) throw new Error('No se puede procesar la solicitud');

    const resp = await fetch(`${API_URL}&lat=${city.lat}&lon=${city.lon}`);
    const data = await resp.json();

    if (!data || data.length === 0)
      throw new Error('No se encuentran datos para esa Ciudad');

    return data;
  } catch (error) {
    return error.message;
  }
};

// only get Location by city name, country
export const getForecastByGeolocation = async (value) => {
  try {
    if (!value) throw new Error('No se puede procesar la solicitud');

    const resp = await fetch(API_URL_GEOCODING + '&q=' + value);
    const data = await resp.json();

    if (!data || data.length === 0) throw new Error('No se encontro una ciudad');
    // return only first item of array list
    return data[0];
  } catch (error) {
    throw error;
  }
};

// get data with geolocation HTML5 or a fetch to https://geolocation-db.com/json/
export const getForecastByActualLocation = async () => {
  if (!navigator.geolocation) {
    return getForecastLocalByIp();
  } else {
    const location = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
          resolve(position);
        },
        (err) => {
          reject(err);
        }
      );
    });
    return {
      lon: location.coords.longitude,
      lat: location.coords.latitude,
    };
  }
};

export const getForecastLocalByIp = async () => {
  try {
    const resp = await fetch('https://geolocation-db.com/json/');
    const data = await resp.json();
    if (!data || data.length === 0) throw new Error('No se puede localizar tu ubicacion');
    return {
      name: data.city,
      lat: data.latitude,
      lon: data.longitude,
      state: data.state,
      country: data.country_name,
    };
  } catch (error) {
    throw error;
  }
};
