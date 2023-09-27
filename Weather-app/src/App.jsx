import './App.css';
import LandingPage from './components/Landing/LandingPage';
import Home from './components/Home/Home';
import CardWeather from './components/CardWeather/CardWather';
import { useWeatherStore } from './components/store/store';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  // const infoClima = useWeatherStore((state) => state.infoClima);
  const fetchData = useWeatherStore((state) => state.fetchData);

  useEffect(() => {
    fetchData('San salvador de jujuy');
  }, []);

  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/detail' element={<CardWeather />} />
      </Routes>
    </div>
  );
}

export default App;
