import { useWeatherStore } from '../store/store';
// import { useEffect } from 'react';
import { IndexUV, IconDrop, IconWind } from './icons/Icons';
import { IconSunrise, IconSunset } from './icons/Icons';
import { weatherForHour } from './auxComponents/weatherForHour';
import { weatherForDay } from './auxComponents/weatherForDay';
import { iconType } from './auxComponents/weatherForHour';
import style from './CardWeather.module.css';

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
    <div className={style.container}>
      <div className={style.head}>
        <div>
          <h1>{infoClima[0]?.current?.temp_c} °C</h1>
          {iconType(
            infoClima[0]?.current.is_day,
            infoClima[0]?.current.condition.text
          )}
        </div>
        <h2>
          {infoClima[0]?.location?.name}, {infoClima[0]?.location?.region}
        </h2>
        <h4>
          {infoClima[0]?.forecast.forecastday[0].day.maxtemp_c} ° /
          {infoClima[0]?.forecast.forecastday[0].day.mintemp_c} ° Sensación
          térmica {infoClima[0]?.current.feelslike_c} °
        </h4>
      </div>
      <div className={style.weatherForHour}>
        {weatherForHour(
          infoClima[0]?.location?.localtime.split(' '),
          infoClima[0]?.forecast?.forecastday
        )}
      </div>
      <div className={style.weatherForDay}>
        {weatherForDay(infoClima[0]?.forecast?.forecastday)}
      </div>
      <div>
        <h3>Amanecer</h3>
        <IconSunrise />
        <h3>{infoClima[0]?.forecast?.forecastday[1]?.astro.sunrise}</h3>
        <h3>Atardecer</h3>
        <IconSunset />
        <h3>{infoClima[0]?.forecast?.forecastday[1]?.astro.sunset}</h3>
      </div>
      <div>
        <div>
          <IndexUV />
          <h3>Índice UV</h3>
          <p>{controlUV(infoClima[0]?.current.uv)}</p>
        </div>
        <div>
          <IconDrop />
          <h3>Humedad</h3>
          <p>{infoClima[0]?.current.humidity}%</p>
        </div>
        <div>
          <IconWind />
          <h3>Viento</h3>
          <p>{infoClima[0]?.current.wind_kph} Km/h</p>
        </div>
      </div>
    </div>
  );
};

export default CardWeather;
