import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/es';
dayjs.locale('es');
dayjs.extend(localizedFormat);

export const getCurrentInfo = (current, city) => {
  return {
    city: city.name,
    state: city.state,
    country: city.country,
    today: dayjs().format('LLLL'),
    temperature: current.temp + ' °C',
    feels_like: current.feels_like + ' °C',
    sunrise: dayjs.unix(current.sunrise).format('LT'),
    sunset: dayjs.unix(current.sunset).format('LT'),
    description: current.weather[0].description.toUpperCase(),
    icon: `https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`,
  };
};

// daily get 7 next days + current, with slice we remove 2 last items)
export const getFiveDays = (daily) => {
  return daily.slice(0, -2).map((item) => {
    return {
      date: dayjs.unix(item.dt).format('dddd'),
      icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
      temperature: item.temp.day + ' °C',
      description: item.weather[0].description,
    };
  });
};
