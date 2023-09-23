import { useWeatherStore } from '../store/store';
// import { useEffect } from 'react';
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

  return (
    <div>
      <div>
        <h1>{infoClima[0]?.current?.temp_c} °C</h1>
        {iconType(
          infoClima[0]?.current.is_day,
          infoClima[0]?.current.condition.text
        )}
        <h2>
          {infoClima[0]?.location?.name}, {infoClima[0]?.location?.region}
        </h2>
        <h4>
          {infoClima[0]?.forecast.forecastday[0].day.maxtemp_c} ° /
          {infoClima[0]?.forecast.forecastday[0].day.mintemp_c} ° Sensación
          térmica {infoClima[0]?.current.feelslike_c} °
        </h4>
      </div>
      <div>
        {weatherForHour(
          infoClima[0]?.location?.localtime.split(' '),
          infoClima[0]?.forecast?.forecastday
        )}
      </div>
      <div>{weatherForDay(infoClima[0]?.forecast?.forecastday)}</div>
      <div>
        <h3>Amanecer</h3>
        <IconSunrise />
        <h3>{infoClima[0]?.forecast?.forecastday[1]?.astro.sunrise}</h3>
        <h3>Atardecer</h3>
        <IconSunset />
        <h3>{infoClima[0]?.forecast?.forecastday[1]?.astro.sunset}</h3>
      </div>
    </div>
  );
};

export default CardWeather;
