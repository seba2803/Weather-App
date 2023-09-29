import { useState } from 'react';
import { useWeatherStore } from '../store/store';
import style from './Home.module.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [lugar, setLugar] = useState('');
  // para estilos
  const [cambio, setCambio] = useState(true);

  const [busqueda, fetchBusqueda, fetchData] = useWeatherStore((state) => [
    state.busqueda,
    state.fetchBusqueda,
    state.fetchData,
  ]);

  const handleChange = (event) => {
    console.log(event.target.value);
    setLugar(event.target.value);

    if (
      event.target.value.length >= 3 &&
      event.target.value.length <= 18 &&
      event.target.id != 'lugar'
    )
      fetchBusqueda(event.target.value);

    if (
      event.target.value.length >= 20 ||
      event.target.value.length <= 3 ||
      event.target.id.length
    ) {
      setCambio(false);
    } else {
      setCambio(true);
    }
  };
  console.log(busqueda);

  const navigate = useNavigate();

  const handleClick = () => {
    fetchData(lugar);
    navigate('/detail');
  };

  return (
    <div className={style.Home}>
      <label>Ingresa tu país o provincia para continuar...</label>
      <input type='search' value={lugar} onChange={handleChange} />
      <button onClick={handleClick}>{`-->`}</button>
      <div className={cambio ? style.view : style.noview}>
        {busqueda?.map((val, index) => (
          <label className={style.item}>
            {' '}
            {val.name}, {val.region}
            <input
              name='lugar'
              type='radio'
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
