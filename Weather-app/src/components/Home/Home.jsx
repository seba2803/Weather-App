import { useState } from 'react';
import { useWeatherStore } from '../store/store';
import style from './Home.module.css';

const Home = () => {
  const [lugar, setLugar] = useState('');
  // para estilos
  const [cambio, setCambio] = useState(true);

  const [busqueda, fetchBusqueda] = useWeatherStore((state) => [
    state.busqueda,
    state.fetchBusqueda,
  ]);

  const handleChange = (event) => {
    setLugar(event.target.value);

    if (
      event.target.value.length >= 3 &&
      event.target.value.length <= 18 &&
      event.target.id != 'lugar'
    )
      fetchBusqueda(event.target.value);

    console.log(event.target);

    if (event.target.value.length >= 20 || event.target.value.length <= 3) {
      setCambio(false);
    } else {
      setCambio(true);
    }
  };

  return (
    <div className={style.Home}>
      <label>Ingresa tu país o provincia para continuar...</label>
      <input type='text' value={lugar} onChange={handleChange} />
      <div className={cambio ? style.view : style.noview}>
        {busqueda?.map((val) => (
          <label htmlFor='lugar'>
            {' '}
            {val.name}, {val.region}
            <input
              id='lugar'
              type='checkbox'
              onClick={handleChange}
              value={`${val.name},${val.region}`}
              className={style.option}
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default Home;
