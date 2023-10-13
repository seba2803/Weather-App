import LandingPage from './components/Landing/LandingPage';
import Home from './components/Home/Home';
import CardWeather from './components/CardWeather/CardWather';
import { Routes, Route } from 'react-router-dom';
import moon from './assets/moon.svg';
import moonFilled from './assets/moonFilled.svg';
import { useWeatherStore } from './components/store/store';

function App() {
  const [theme, setTheme] = useWeatherStore((state) => [
    state.theme,
    state.setTheme,
  ]);

  const handleClick = () => {
    setTheme();
  };

  return (
    <div
      className={
        theme == 'light'
          ? `flex-col bg-fixed bg-center bg-cover min-h-screen m-0 p-0 transition duration-700 ease-in-out bg-gradient-to-b from-blue-200 via-green-300 to-blue-400`
          : `flex-col bg-fixed bg-center bg-cover min-h-screen m-0 p-0 transition duration-700 ease-in-out bg-gradient-to-b from-blue-900 via-green-950 to-blue-950 `
      }
    >
      <div
        className={
          theme == 'light'
            ? 'flex relative justify-around h-fit w-full p-2 bg-green-200 bg-opacity-80 shadow-xl'
            : 'flex relative justify-around h-fit w-full p-2 bg-green-800 bg-opacity-40 shadow-xl'
        }
      >
        <Home />
        <button onClick={handleClick}>
          <img
            className='h-10'
            src={theme == 'light' ? moon : moonFilled}
            alt='moon'
          />
        </button>
      </div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/detail' element={<CardWeather />} />
      </Routes>
    </div>
  );
}

export default App;
