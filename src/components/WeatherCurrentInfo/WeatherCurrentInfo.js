const WeatherCurrentInfo = ({ current }) => {
  return (
    <>
      <div className="my-6">
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
          Clima Actual de: {current.city}
        </h3>
      </div>

      <div className="border-2 border-slate-200 p-4 text-black relative min-w-0 break-words rounded-lg overflow-hidden mb-4 w-full">
        <div className="relative">
          <div className="flex mb-4 justify-between items-center">
            <div>
              <h3 className="font-medium text-xl">{current.city}</h3>
              <h3 className="font-medium text-xl">
                {current.state}, {current.country}
              </h3>
              <h4 className="mb-4 text-slate-500">{current.today}</h4>
              <small className="text-slate-400">{current.description}</small>
            </div>
            <div className="text-right">
              <img src={current.icon} alt="icon weather" className="w-18 h-18 sm:w-24 sm:h-24 mx-auto" />
              <h3 className="font-bold whitespace-nowrap text-xl sm:text-3xl">{current.temperature}</h3>
            </div>
          </div>
          <div className="block sm:flex justify-between items-center flex-wrap border-t border-slate-100 pt-4">
            <div className="w-full sm:w-1/2">
              <div className="flex mb-2 justify-between items-center">
                <span>Temperatura Actual</span>
                <small className="sm:px-2 font-semibold text-sm">
                  {current.temperature}
                </small>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="flex mb-2 justify-between items-center">
                <span>Sensacion</span>
                <small className="sm:px-2 font-semibold text-sm">
                  {current.feels_like}
                </small>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="flex mb-2 justify-between items-center">
                <span>Amanecer</span>
                <small className="sm:px-2 font-semibold text-sm">{current.sunrise}</small>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="flex mb-2 justify-between items-center">
                <span>Atardecer</span>
                <small className="sm:px-2 font-semibold text-sm">{current.sunset}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherCurrentInfo;
