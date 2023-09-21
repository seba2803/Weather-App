import {
  IconSun,
  IconSunrise,
  IconSunset,
  IconCloudRain,
  IconCloudy,
  IconCloudStorm,
  IconCloudSnow,
  IconPartlyCloud,
  IconMoonClear,
  IconNight,
} from './icons/Icons';

export const weatherForHour = (hour, infoClima) => {
  // desestructuro la fecha y horario de hour
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

  console.log(climaPorHora);
  // retornar el tiempo por hora
  return (
    <div>
      {climaPorHora.map((el) => (
        <div></div>
      ))}
    </div>
  );
};
// funcion que devuelve el icono que corresponde
function iconType(isDay, condition) {
  switch (condition) {
  }
}
