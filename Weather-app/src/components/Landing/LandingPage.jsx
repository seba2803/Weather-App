import Home from '../Home/Home';
import style from './Landing.module.css';

const LandingPage = () => {
  return (
    <div>
      <input id='viewmore' className={style.continuar} type='checkbox' />
      <div>
        <h1>Weather App</h1>
        <h2>
          Bienvenido a la aplicación definitiva para mantenerte siempre un paso
          adelante en cuanto al clima. ¿Te has preguntado alguna vez cómo estará
          el clima en las próximas horas o días? ¿Necesitas saber si es seguro
          tomar el sol o si debes llevar tu paraguas contigo? ¡No busques más!
          Esta aplicación de Pronóstico del Tiempo te ofrece la información más
          detallada y precisa para que puedas planificar tu día con confianza.
        </h2>
        <h2>En ella encontrarás:</h2>
        <ol>
          <li>Pronóstico por Hora: </li>{' '}
          <p>
            Podrás obtener un pronóstico del tiempo por hora para tu ubicación
            actual o cualquier lugar que elijas. Sabrás exactamente qué esperar
            en cada momento del día, desde la mañana hasta la noche.
          </p>
          <li>Pronóstico a 5 Días a Futuro: </li>{' '}
          <p>
            No más sorpresas inesperadas. Te proporcionamos un pronóstico
            extendido de cinco días para que puedas planificar tu semana con
            anticipación y estar preparado para cualquier condición climática.
          </p>
          <li>Índice UV: </li>
          <p>
            La seguridad es lo primero. La aplicación te mostrará el índice de
            radiación ultravioleta (UV) en tu área, lo que te ayudará a
            protegerte adecuadamente del sol y reducir el riesgo de quemaduras
            solares.
          </p>
          <li>Humedad y Viento: </li>
          <p>
            Conocer la humedad y la velocidad del viento es esencial para tu
            comodidad y seguridad. La misma te proporcionará datos precisos
            sobre estos aspectos, para que puedas ajustar tu ropa y actividades
            en consecuencia.
          </p>
          <li>Interfaz Amigable: </li>
          <p>
            Cuenta con una interfaz fácil de usar, diseñada para brindarte la
            información que necesitas de manera rápida y sencilla. La
            información se presenta de forma clara y visualmente atractiva.
          </p>
        </ol>

        <h2>
          Así que, ya sea que estés planeando un picnic, una jornada en la
          playa, un viaje de negocios o simplemente quieras estar bien preparado
          para cualquier eventualidad climática,Esta aplicación de Pronóstico
          del Tiempo es tu compañero confiable.
        </h2>

        <label htmlFor='viewmore'>continuar</label>
      </div>
      <div className={style.home}>
        <Home />
      </div>
    </div>
  );
};

export default LandingPage;
