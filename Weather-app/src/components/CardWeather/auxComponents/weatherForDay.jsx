import { IconSun, IconNight, IconDrop } from '../icons/Icons';

export const weatherForDay = (forecast) => {
  if (!forecast) {
    return;
  }

  return forecast.map((el) => (
    <div>
      <h3>{el.date.split('-')[2]}</h3>
      <IconDrop /> <h3>{el.day.avghumidity}%</h3>
      <IconSun /> <IconNight />
      <h3>
        {el.day.maxtemp_c}° {el.day.mintemp_c}°
      </h3>
    </div>
  ));
};
