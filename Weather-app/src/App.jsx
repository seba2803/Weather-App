// import './App.css';
import LandingPage from './components/Landing/LandingPage';
import CardWeather from './components/CardWeather/CardWather';
import { Routes, Route } from 'react-router-dom';

function App() {
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
