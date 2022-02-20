import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import 'dayjs/locale/es';
dayjs.locale('es');
dayjs.extend(utc);

const parseDate = (date, format, offset = '') => {
  return dayjs
    .unix(date + offset)
    .utc()
    .format(format);
};

export const getCurrentInfo = (current, timezone_offset, city) => {
  return {
    city: city.name,
    state: city.state,
    country: city.country,
    today: parseDate(current.dt, 'dddd[,] D [de] MMMM [de] YYYY HH:mm', timezone_offset),
    temperature: current.temp + ' °C',
    feels_like: current.feels_like + ' °C',
    sunrise: parseDate(current.sunrise, 'HH:mm', timezone_offset),
    sunset: parseDate(current.sunset, 'HH:mm', timezone_offset),
    description: current.weather[0].description.toUpperCase(),
    icon: `https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`,
  };
};

// daily get 7 next days + current, with slice we remove 2 last items)
export const getFiveDays = (daily, timezone_offset) => {
  return daily.slice(0, -2).map((item) => {
    return {
      date: parseDate(item.dt, 'dddd', timezone_offset), // , // dayjs.unix(item.dt).format('dddd')
      icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
      temperature: item.temp.day + ' °C',
      description: item.weather[0].description,
    };
  });
};
