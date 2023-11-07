import LandingPage from './components/Landing/LandingPage';
import Home from './components/Home/Home';
import CardWeather from './components/CardWeather/CardWather';
import { Routes, Route } from 'react-router-dom';
import moon from './assets/moon.svg';
import sun from './assets/sun.svg';
import weatherApp from './assets/weatherApp.png';
import { useWeatherStore } from './components/store/store';
import { useNavigate } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function App() {
  const [theme, setTheme] = useWeatherStore((state) => [
    state.theme,
    state.setTheme,
  ]);

  const handleTheme = () => {
    setTheme();
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  return (
    <div
      className={
        theme == 'light'
          ? `flex-col bg-fixed bg-center bg-cover min-h-screen m-0 p-0 bg-gradient-to-b from-blue-200 via-green-300 to-blue-400`
          : `flex-col bg-fixed bg-center bg-cover min-h-screen m-0 p-0 bg-gradient-to-b from-blue-900 via-green-950 to-blue-950 `
      }
    >
      <div
        className={
          theme == 'light'
            ? 'flex relative justify-between h-fit w-full p-2 bg-green-200 bg-opacity-80 shadow-xl'
            : 'flex relative justify-between h-fit w-full p-2 bg-green-800 bg-opacity-40 shadow-xl'
        }
      >
        <button onClick={handleClick} className='h-fit mx-2 mt-1'>
          <img className='h-14' src={weatherApp} alt='logo' />
        </button>
        <Home />
        <button className='h-fit mx-2 mt-1' onClick={handleTheme}>
          <img
            className='h-14'
            src={theme == 'light' ? moon : sun}
            alt='moon'
          />
        </button>
      </div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/detail' element={<CardWeather />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
