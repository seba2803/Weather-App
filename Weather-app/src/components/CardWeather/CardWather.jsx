import { useWeatherStore } from '../store/store';
import { useEffect } from 'react';
import { IconSun, IconSunrise, IconSunset } from './icons/Icons';
import { weatherForHour } from './weatherForHour';

const CardWeather = () => {
  const [infoClima, fetchData] = useWeatherStore((state) => [
    state.infoClima,
    state.fetchData,
  ]);

  useEffect(() => {
    fetchData('Pueblo Nuevo, la libertad');
  }, []);

  return (
    <div>
      <div>
        <h1>{infoClima[0]?.current?.temp_c} °C</h1>
        <IconSun />
        <h2>
          {infoClima[0]?.location?.name}, {infoClima[0]?.location?.region}
        </h2>
        <h4>
          {infoClima[0]?.forecast.forecastday[0].day.maxtemp_c} ° /
          {infoClima[0]?.forecast.forecastday[0].day.mintemp_c} ° Sensación
          térmica {infoClima[0]?.current.feelslike_c} °
        </h4>
      </div>
      {weatherForHour(
        infoClima[0]?.location?.localtime.split(' '),
        infoClima[0]?.forecast?.forecastday
      )}
      <div>
        <IconSunrise />
        <h3>{infoClima[0]?.forecast?.forecastday[1]?.astro.sunrise}</h3>
        <IconSunset />
        <h3>{infoClima[0]?.forecast?.forecastday[1]?.astro.sunset}</h3>
      </div>
    </div>
  );
};

export default CardWeather;
