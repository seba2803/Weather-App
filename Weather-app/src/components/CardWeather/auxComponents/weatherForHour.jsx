import {
  IconSun,
  IconCloudRain,
  IconCloudy,
  IconCloudStorm,
  IconCloudSnow,
  IconPartlyCloud,
  IconMoonClear,
  IconNight,
  IconHumidity,
} from '../icons/Icons';

export const weatherForHour = (hour, infoClima) => {
  // desestructuro la fecha y horario de hour
  if (!hour) {
    return;
  }
  const [fecha, horario] = hour;
  // desestructuro la hora y los minutos de horario (00:00)
  const [hora, minuto] = horario.split(':');
  // concateno el clima por hora de los 3 dias siguientes
  const horarios = infoClima[0].hour
    .concat(infoClima[1].hour)
    .concat(infoClima[2].hour);
  // obtengo el indice de la hora actual para ver el clima
  // desde esa hora
  const index = horarios.findIndex(
    (el) => el.time.split(' ')[1].split(':')[0] == hora
  );
  // saco solo las 24 horas siguientes desde la hora actual
  const climaPorHora = horarios.slice(index + 1, index + 24);
  // retornar el tiempo por hora
  return climaPorHora.map((el, index) => (
    <div key={index} className='flex-col hover:scale-110  m-3 text-center'>
      <h3 className='mb-2'>{el.time.split(' ')[1]}</h3>
      {iconType(el.is_day, el.condition.text)}
      <h3 className='m-1'>{el.temp_c} °</h3>
      <h3>Humedad</h3>
      <IconHumidity />
      <h3>{el.humidity}%</h3>
    </div>
  ));
};
// funcion que devuelve el icono que corresponde
export function iconType(isDay, condition) {
  if (condition == 'Sunny') return <IconSun />;
  else if (condition == 'Partly cloudy' && isDay == 1)
    return <IconPartlyCloud />;
  else if (condition == 'Light drizzle' || condition == 'Light rain shower')
    return <IconCloudRain />;
  else if (
    (condition == 'Cloudy' ||
      condition == 'Overcast' ||
      condition == 'Mist' ||
      condition == 'Patchy rain possible') &&
    isDay == 1
  )
    return <IconCloudy />;
  else if (
    (condition == 'Cloudy' ||
      condition == 'Overcast' ||
      condition == 'Partly cloudy') &&
    isDay == 0
  )
    return <IconNight />;
  else if (condition == 'Clear') return <IconMoonClear />;
  else return <IconCloudStorm />;
}
