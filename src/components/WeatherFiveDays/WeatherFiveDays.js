const WeatherFiveDays = ({ daily }) => {
  return (
    <>
      <div className="my-6">
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
          Pronostico proximos 5 dias
        </h3>
      </div>

      <div className="border-2 border-slate-200 p-4 text-black relative min-w-0 break-words rounded-lg overflow-hidden">
        <div className="flex gap-0 sm:gap-2 flex-wrap sm:flex-nowrap justify-between">
          {daily &&
            daily.map(({ date, temperature, icon, description }, idx) => {
              return (
                <div
                  key={idx}
                  className="text-center mb-4 sm:mb-0 flex items-center justify-start flex-col w-1/3 sm:w-1/6"
                >
                  <span className="my-1 text-xs sm:text-sm md:text-base capitalize">
                    {idx === 0 ? 'Hoy' : idx === 1 ? 'Mañana' : date}
                  </span>
                  <img src={icon} className="w-16 h-16" alt="icon weather" />
                  <span className="my-1 text-sm font-semibold">{temperature}</span>
                  <span className="my-1 text-xs text-slate-400">{description}</span>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default WeatherFiveDays;
