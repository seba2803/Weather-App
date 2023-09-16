import './App.css';
import Home from './components/Home/Home';
function App() {
  // const infoClima = useWeatherStore((state) => state.infoClima);
  // const fetchData = useWeatherStore((state) => state.fetchData);

  return (
    <div>
      <h2>Weather App</h2>
      <Home />
    </div>
  );
}

export default App;
