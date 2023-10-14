import { useState } from 'react';
import { useWeatherStore } from '../store/store';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [lugar, setLugar] = useState('');
  // para estilos
  const [cambio, setCambio] = useState(false);

  const [busqueda, fetchBusqueda, fetchData, theme] = useWeatherStore(
    (state) => [
      state.busqueda,
      state.fetchBusqueda,
      state.fetchData,
      state.theme,
    ]
  );

  const handleChange = (event) => {
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

  const navigate = useNavigate();
  console.log(busqueda);
  const handleClick = () => {
    if (lugar.length >= 20 || lugar.length >= 5) {
      fetchData(lugar);
      navigate('/detail');
      setLugar('');
    }
  };

  return (
    <div className='flex-col flex-wrap text-center justify-center items-center'>
      {/* <h2 className='font-semibold text-lg mb-2'>
        Ingrese su ubicación para continuar
      </h2> */}
      <div className='flex-wrap justify-center text-center'>
        <input
          className='lg:w-72 h-8 rounded-lg text-black phone:w-48 p-2'
          type='search'
          placeholder='Ingrese su ubicación para continuar...'
          value={lugar}
          onChange={handleChange}
        />
        <button
          onClick={handleClick}
          className={
            (cambio && !lugar.length) || lugar.length < 4
              ? 'border-2 rounded-lg text-2xl bg-green-800 bg-opacity-40 w-12 h-8 m-2 cursor-not-allowed'
              : 'border-2 rounded-lg text-2xl bg-green-800 bg-opacity-60 w-12 h-8 m-2 hover:bg-green-400 hover:scale-125 transition ease-out duration-700'
          }
        >
          ➜
        </button>
      </div>
      <div className='flex text-center justify-center h-fit'>
        <ul
          className={
            cambio &&
            lugar.length > 3 &&
            `${`${busqueda[0].name},${busqueda[0].region}`.toLocaleLowerCase()}` !=
              lugar.toLocaleLowerCase()
              ? 'flex-col border-2 border-black bg-black bg-opacity-20  rounded-xl p-2 m-2 w-full text-center  phone:w-fit divide-y'
              : 'hidden'
          }
        >
          {busqueda?.map((val, index) => (
            <li className='p-1'>
              <label
                className={
                  theme == 'dark'
                    ? 'm-2 w-full sw text-blue-300 hover:text-white phone:m-4'
                    : 'm-2 w-full sw text-blue-600 hover:text-white phone:m-4'
                }
              >
                {' '}
                {val.name}, {val.region}
                <input
                  name='lugar'
                  type='radio'
                  onClick={handleChange}
                  value={`${val.name},${val.region}`}
                  className='hidden'
                />
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
