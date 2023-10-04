import { IconSun, IconNight } from '../icons/Icons';

export const weatherForDay = (forecast) => {
  if (!forecast) {
    return;
  }

  return forecast.map((el, index) => (
    <div className='flex m-3 justify-between text-left font-normal'>
      {index == 0 ? (
        <h3 className='m-3 px-1'>Hoy</h3>
      ) : (
        <h3 className='m-3'>{`${el.date.split('-')[2]}/${
          el.date.split('-')[1]
        }`}</h3>
      )}
      <div className='flex p-2 justify-center'>
        <IconSun /> <IconNight />
      </div>
      <div className='flex text-center justify-center'>
        <h3 className='phone:text-sm mt-4'>{Math.floor(el.day.maxtemp_c)}°/</h3>
        <h3 className='phone:text-sm mt-4'> {Math.floor(el.day.mintemp_c)}°</h3>
      </div>
    </div>
  ));
};
