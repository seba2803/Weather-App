import { useWeatherStore } from '../store/store';
// import { useEffect } from 'react';
import Home from '../Home/Home';
import { IndexUV, IconDrop, IconWind } from './icons/Icons';
import { IconSunrise, IconSunset } from './icons/Icons';
import { weatherForHour } from './auxComponents/weatherForHour';
import { weatherForDay } from './auxComponents/weatherForDay';
import { iconType } from './auxComponents/weatherForHour';

const CardWeather = () => {
  const [infoClima] = useWeatherStore((state) => [state.infoClima]);

  console.log(infoClima);
  // useEffect(() => {
  //   fetchData('pueblo nuevo, la libertad');
  // }, []);

  const controlUV = (indice) => {
    if (indice >= 0 && indice <= 2) return 'Bajo';
    if (indice >= 3 && indice <= 5) return 'Moderado';
    if (indice >= 6 && indice <= 7) return 'Alto';
    if (indice >= 8 && indice <= 10) return 'Muy alto';
    if (indice >= 11) return 'Extremo';
  };

  return (
    <div className='grid place-items-center p-2 text-white'>
      <Home />
      <div className='flex-col m-4 justify-center bg-slate-600 bg-opacity-60 rounded-xl shadow-2xl shadow-black border border-teal-100 h-72  w-full'>
        <div className='flex'>
          <h1 className='m-5 font-bold text-5xl phone:font-semibold phone:text-3xl'>
            {infoClima[0]?.current?.temp_c} °C
          </h1>
          <div className='mx-10 mt-3'>
            {iconType(
              infoClima[0]?.current.is_day,
              infoClima[0]?.current.condition.text
            )}
          </div>
        </div>
        <h2 className='font-normal text-left text-3xl mx-4 mt-4'>
          {infoClima[0]?.location?.name}, {infoClima[0]?.location?.region}
        </h2>
        <h4 className='font-normal text-left text-lg mx-4 mt-2 phone:text-sm phone:font-semibold phone:mt-8'>
          {Math.floor(infoClima[0]?.forecast.forecastday[0].day.maxtemp_c)} °/
          {Math.floor(infoClima[0]?.forecast.forecastday[0].day.mintemp_c)} °
          Sensación térmica {Math.floor(infoClima[0]?.current.feelslike_c)} °
        </h4>
      </div>
      <div className='flex m-4 overflow-x-scroll w-full h-full bg-slate-600 bg-opacity-60 rounded-xl shadow-2xl shadow-black border border-teal-100'>
        {weatherForHour(
          infoClima[0]?.location?.localtime.split(' '),
          infoClima[0]?.forecast?.forecastday
        )}
      </div>
      <div className='m-4 bg-slate-600 bg-opacity-60 rounded-xl shadow-2xl shadow-black border border-teal-100 w-full'>
        {weatherForDay(infoClima[0]?.forecast?.forecastday)}
      </div>
      <div className='flex justify-around h-cover bg-slate-600 bg-opacity-60 rounded-xl border border-teal-100  shadow-2xl shadow-black w-full'>
        <div>
          <h3>Amanecer</h3>
          <h3>{infoClima[0]?.forecast?.forecastday[1]?.astro.sunrise}</h3>
          <IconSunrise />
        </div>
        <div>
          <h3>Atardecer</h3>
          <h3>{infoClima[0]?.forecast?.forecastday[1]?.astro.sunset}</h3>
          <IconSunset />
        </div>
      </div>
      <div className='flex justify-around h-cover bg-slate-600 bg-opacity-60 rounded-xl border border-teal-100 m-4 shadow-2xl shadow-neutral-800  w-full'>
        <div className='flex-col text-center mx-2'>
          <IndexUV />
          <h3>Índice UV</h3>
          <p>{controlUV(infoClima[0]?.current.uv)}</p>
        </div>
        <div className='flex-col text-center mx-2'>
          <IconDrop />
          <h3>Humedad</h3>
          <p>{infoClima[0]?.current.humidity}%</p>
        </div>
        <div className='flex-col text-center mx-2'>
          <IconWind />
          <h3>Viento</h3>
          <p>{infoClima[0]?.current.wind_kph} Km/h</p>
        </div>
      </div>
    </div>
  );
};

export default CardWeather;
