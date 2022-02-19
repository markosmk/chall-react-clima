import dayjs from 'dayjs';
import 'dayjs/locale/es';
dayjs.locale('es');

const WeatherFiveDays = ({ daily, city }) => {
  return (
    <>
      <div className="my-6">
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
          Mostrando Pronostico proximos 5 dias de: {city.name}
        </h3>
      </div>

      <div className="text-black relative min-w-0 break-words rounded-lg overflow-hidden">
        <div className="text-center justify-between items-center flex gap-2">
          {daily &&
            daily.map(({ dt, temp, weather }, idx) => {
              return (
                <div
                  key={idx}
                  className="text-center flex items-center justify-center flex-col"
                >
                  <span className="my-1 text-sm capitalize">
                    {idx === 0
                      ? 'Hoy'
                      : idx === 1
                      ? 'Mañana'
                      : dayjs.unix(dt).format('dddd')}
                  </span>
                  <img
                    src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                    className="w-16 h-16"
                    alt="icono clima"
                  />
                  <span className="my-1">{temp.day}&nbsp;°C</span>
                  <span className="my-1 text-xs text-slate-400">
                    {weather[0].description}
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default WeatherFiveDays;
