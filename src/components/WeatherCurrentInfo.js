import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/es';
dayjs.locale('es');
dayjs.extend(localizedFormat);

const WeatherCurrentInfo = ({ current, city }) => {
  const { temp, sunrise, sunset, feels_like } = current;
  const { description, icon } = current.weather[0];

  return (
    <>
      <div className="my-6">
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
          Mostrando Clima Actual de: {city.name}
        </h3>
      </div>

      <div className="text-black relative min-w-0 break-words rounded-lg overflow-hidden mb-4 w-full">
        <div className="relative">
          <div className="flex mb-4 justify-between items-center">
            <div>
              <h3 className="font-medium text-xl">{city.name}</h3>
              <h3 className="font-medium text-xl">
                {city.state}, {city.country}
              </h3>
              <h4 className="mb-4">{dayjs().format('LLLL')}</h4>
              <small className="text-slate-400">{description.toUpperCase()}</small>
            </div>
            <div className="text-right">
              {icon && (
                <img
                  src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                  alt=""
                  className="w-24 h-24 mx-auto"
                />
              )}
              <h3 className="font-bold text-3xl">{temp}&nbsp;°C</h3>
            </div>
          </div>
          <div className="block sm:flex justify-between items-center flex-wrap border-t border-slate-100 pt-4">
            <div className="w-full sm:w-1/2">
              <div className="flex mb-2 justify-between items-center">
                <span>Temperatura Actual</span>
                <small className="sm:px-2 inline-block">{temp}&nbsp;°C</small>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="flex mb-2 justify-between items-center">
                <span>Sensacion</span>
                <small className="sm:px-2 inline-block">{feels_like}&nbsp;°C</small>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="flex mb-2 justify-between items-center">
                <span>Amanecer</span>
                <small className="sm:px-2 inline-block">
                  {dayjs.unix(sunrise).format('LT')}
                </small>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="flex mb-2 justify-between items-center">
                <span>Atardecer</span>
                <small className="sm:px-2 inline-block">
                  {dayjs.unix(sunset).format('LT')}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherCurrentInfo;
