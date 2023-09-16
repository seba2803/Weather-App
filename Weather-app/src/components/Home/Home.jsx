import { useState } from 'react';
import { useWeatherStore } from '../store/store';
const Home = () => {
  const [lugar, setLugar] = useState('');
  // para estilos
  const [cambio, setCambio] = useState(false);

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
  };

  return (
    <div>
      <label>Ingresa tu país o provincia para continuar...</label>
      <input type='text' value={lugar} onChange={handleChange} />
      <div>
        {busqueda?.map((val) => (
          <label htmlFor='lugar'>
            {' '}
            {val.name}, {val.region}
            <input
              id='lugar'
              type='checkbox'
              onClick={handleChange}
              value={`${val.name},${val.region}`}
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default Home;
