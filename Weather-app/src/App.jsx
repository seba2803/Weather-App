import './App.css';
import Home from './components/Home/Home';
import CardWeather from './components/CardWeather/CardWather';
function App() {
  // const infoClima = useWeatherStore((state) => state.infoClima);
  // const fetchData = useWeatherStore((state) => state.fetchData);

  return (
    <div>
      <h2>Weather App</h2>
      <Home />
      <CardWeather />
    </div>
  );
}

export default App;
