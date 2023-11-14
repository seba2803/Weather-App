import { useWeatherStore } from '../store/store';
import actualizar from '../../assets/actualizar.svg';
import { IndexUV, IconDrop, IconWind } from './icons/Icons';
import { IconSunrise, IconSunset } from './icons/Icons';
import { weatherForHour } from './auxComponents/weatherForHour';
import { useState } from 'react';
import { weatherForDay } from './auxComponents/weatherForDay';
import { iconType } from './auxComponents/weatherForHour';

const CardWeather = () => {
  const [infoClima, fetchData, theme] = useWeatherStore((state) => [
    state.infoClima,
    state.fetchData,
    state.theme,
  ]);

  const [timing, setTiming] = useState(false);

  const handleClick = () => {
    setTiming(true);
    setTimeout(() => {
      setTiming(false);
    }, 1500);
    fetchData(
      `${infoClima[0]?.location?.name}, ${infoClima[0]?.location?.region}`
    );
  };

  const controlUV = (indice) => {
    if (indice >= 0 && indice <= 2) return 'Bajo';
    if (indice >= 3 && indice <= 5) return 'Moderado';
    if (indice >= 6 && indice <= 7) return 'Alto';
    if (indice >= 8 && indice <= 10) return 'Muy alto';
    if (indice >= 11) return 'Extremo';
  };

  return (
    <div
      className={
        theme == 'light'
          ? 'grid place-items-center p-2 text-gray-800'
          : 'grid place-items-center p-2 text-gray-200'
      }
    >
      <div
        className={
          theme == 'light'
            ? 'flex-col m-4 justify-center bg-white bg-opacity-20 rounded-xl shadow-2xl shadow-black border border-teal-100 h-72  w-full'
            : 'flex-col m-4 justify-center bg-white bg-opacity-10 rounded-xl shadow-2xl shadow-black border border-teal-100 h-72  w-full'
        }
      >
        <div className='flex'>
          {infoClima[0]?.current && (
            <h1 className='m-5 tablet:font-bold tablet:text-5xl phone:font-semibold phone:text-3xl'>
              {infoClima[0]?.current?.temp_c} °C
            </h1>
          )}
          <div className='mx-10 mt-3'>
            {iconType(
              infoClima[0]?.current?.is_day,
              infoClima[0]?.current?.condition?.text
            )}
          </div>
        </div>
        {infoClima[0]?.current && (
          <h2 className='font-normal text-left text-3xl mx-4 mt-4'>
            {infoClima[0]?.location?.name}, {infoClima[0]?.location?.region}
          </h2>
        )}
        <h4 className='font-normal text-left text-lg mx-4 mt-2 tablet:text-lg phone:text-sm phone:font-semibold phone:mt-8'>
          {infoClima[0] &&
            Math.floor(
              infoClima[0]?.forecast?.forecastday[0]?.day?.maxtemp_c
            )}{' '}
          °/
          {infoClima[0] &&
            Math.floor(
              infoClima[0]?.forecast?.forecastday[0]?.day?.mintemp_c
            )}{' '}
          ° Sensación térmica {Math.floor(infoClima[0]?.current?.feelslike_c)} °
        </h4>
        <div className='flex'>
          {infoClima[0]?.current && (
            <h3 className='font-normal text-left text-lg mx-4 tablet:text-lg phone:text-sm phone:font-semibold phone:mt-4'>
              {infoClima[0] && infoClima[0]?.location?.localtime?.split(' ')[1]}
            </h3>
          )}
          <button
            className='h-fit bg-white bg-opacity-10 hover:bg-opacity-40 mt-3 p-1 rounded-md'
            onClick={handleClick}
          >
            <img
              className={timing ? 'h-7 animate-spin' : 'h-7'}
              src={actualizar}
              alt='actualizar'
            />
          </button>
        </div>
      </div>
      <div
        className={
          theme == 'light'
            ? 'flex m-4 overflow-x-scroll w-full h-full  bg-white bg-opacity-20 rounded-xl shadow-2xl shadow-black border border-teal-100'
            : 'flex m-4 overflow-x-scroll w-full h-full  bg-white bg-opacity-10 rounded-xl shadow-2xl shadow-black border border-teal-100'
        }
      >
        {weatherForHour(
          infoClima[0]?.location?.localtime?.split(' '),
          infoClima[0]?.forecast?.forecastday
        )}
      </div>
      <div
        className={
          theme == 'light'
            ? 'm-4 bg-white bg-opacity-20 rounded-xl shadow-2xl shadow-black border border-teal-100 w-full'
            : 'm-4 bg-white bg-opacity-10 rounded-xl shadow-2xl shadow-black border border-teal-100 w-full'
        }
      >
        {weatherForDay(infoClima[0]?.forecast?.forecastday)}
      </div>
      <div
        className={
          theme == 'light'
            ? 'flex justify-around h-cover bg-white bg-opacity-20 rounded-xl border border-teal-100  shadow-2xl shadow-black w-full'
            : 'flex justify-around h-cover bg-white bg-opacity-10 rounded-xl border border-teal-100  shadow-2xl shadow-black w-full'
        }
      >
        <div>
          <h3>Amanecer</h3>
          {infoClima[0]?.forecast && (
            <h3>{infoClima[0]?.forecast?.forecastday[1]?.astro?.sunrise}</h3>
          )}
          <IconSunrise />
        </div>
        <div>
          <h3>Atardecer</h3>
          {infoClima[0]?.forecast && (
            <h3>{infoClima[0]?.forecast?.forecastday[1]?.astro?.sunset}</h3>
          )}
          <IconSunset />
        </div>
      </div>
      <div
        className={
          theme == 'light'
            ? 'flex justify-around h-cover bg-white bg-opacity-20 rounded-xl border border-teal-100 m-4 shadow-2xl shadow-neutral-800  w-full'
            : 'flex justify-around h-cover bg-white bg-opacity-10 rounded-xl border border-teal-100 m-4 shadow-2xl shadow-neutral-800  w-full'
        }
      >
        <div className='flex-col text-center mx-2'>
          <IndexUV />
          <h3>Índice UV</h3>
          {infoClima[0]?.current && (
            <p>{controlUV(infoClima[0]?.current?.uv)}</p>
          )}
        </div>
        <div className='flex-col text-center mx-2'>
          <IconDrop />
          <h3>Humedad</h3>
          {infoClima[0]?.current && <p>{infoClima[0]?.current?.humidity}%</p>}
        </div>
        <div className='flex-col text-center mx-2'>
          <IconWind />
          <h3>Viento</h3>
          {infoClima[0]?.current && (
            <p>{infoClima[0]?.current?.wind_kph} Km/h</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardWeather;
