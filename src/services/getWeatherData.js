import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import utc from 'dayjs/plugin/utc';
import 'dayjs/locale/es';
dayjs.locale('es');
dayjs.extend(localizedFormat);
dayjs.extend(utc);

const parseDate = (date, format, offset = '') => {
  return dayjs
    .unix(date)
    .utcOffset(offset / 60) // needs to be converted in minutes or .utc().add(offset, 's')
    .format(format);
};

export const getCurrentInfo = (current, timezone_offset, city) => {
  return {
    city: city.name,
    state: city.state,
    country: city.country,
    today: parseDate(current.dt, 'LLLL', timezone_offset), // dddd[,] D [de] MMMM [de] YYYY HH:mm
    temperature: current.temp + ' °C',
    feels_like: current.feels_like + ' °C',
    sunrise: parseDate(current.sunrise, 'LT', timezone_offset), // 'dddd'
    sunset: parseDate(current.sunset, 'LT', timezone_offset), // 'dddd'
    description: current.weather[0].description.toUpperCase(),
    icon: `https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`,
  };
};

// daily get 7 next days + current, with slice we remove 2 last items)
export const getFiveDays = (daily, timezone_offset) => {
  return daily.slice(0, -2).map((item) => {
    return {
      // .utcOffset(timezone_offset/60)
      date: parseDate(item.dt, 'LT', timezone_offset), // 'dddd'
      icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
      temperature: item.temp.day + ' °C',
      description: item.weather[0].description,
    };
  });
};
