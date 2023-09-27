import { IconSun, IconNight } from '../icons/Icons';

export const weatherForDay = (forecast) => {
  if (!forecast) {
    return;
  }

  return forecast.map((el, index) => (
    <div>
      {index == 0 ? (
        <h3>Hoy</h3>
      ) : (
        <h3>{`${el.date.split('-')[2]}/${el.date.split('-')[1]}`}</h3>
      )}
      <IconSun /> <IconNight />
      <h3>
        {el.day.maxtemp_c}° {el.day.mintemp_c}°
      </h3>
    </div>
  ));
};
