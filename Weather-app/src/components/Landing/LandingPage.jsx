import Home from '../Home/Home';

const LandingPage = () => {
  return (
    <div className=' flex-col justify-center items-center h-screen p-4 bg-zinc-700 phone:h-full'>
      <div className=' flex-col text-center justify-center'>
        <h1 className='font-extrabold font-sans text-4xl m-5  border-b-4 border-solid rounded-lg'>
          Weather App
        </h1>
        <h2 className='font-sans font-semibold text-xl'>
          Bienvenido a la aplicación definitiva para mantenerte siempre un paso
          adelante en cuanto al clima. ¿Te has preguntado alguna vez cómo estará
          el clima en las próximas horas o días? ¿Necesitas saber si es seguro
          tomar el sol o si debes llevar tu paraguas contigo? ¡No busques más!
          Esta aplicación de Pronóstico del Tiempo te ofrece la información más
          detallada y precisa para que puedas planificar tu día con confianza.
        </h2>
        <h2 className='mt-5 font-bold text-2xl'>En ella encontrarás</h2>
        <ol className='felx text-left border-2 rounded-lg p-3'>
          <li className='font-bold text-xl'>Pronóstico por Hora</li>{' '}
          <p>
            Podrás obtener un pronóstico del tiempo por hora para tu ubicación
            actual o cualquier lugar que elijas. Sabrás exactamente qué esperar
            en cada momento del día, desde la mañana hasta la noche.
          </p>
          <li className='font-bold text-xl'>Pronóstico a 5 Días a Futuro</li>{' '}
          <p>
            No más sorpresas inesperadas. Te proporcionamos un pronóstico
            extendido de cinco días para que puedas planificar tu semana con
            anticipación y estar preparado para cualquier condición climática.
          </p>
          <li className='font-bold text-xl'>Índice UV</li>
          <p>
            La seguridad es lo primero. La aplicación te mostrará el índice de
            radiación ultravioleta (UV) en tu área, lo que te ayudará a
            protegerte adecuadamente del sol y reducir el riesgo de quemaduras
            solares.
          </p>
          <li className='font-bold text-xl'>Humedad y Viento</li>
          <p>
            Conocer la humedad y la velocidad del viento es esencial para tu
            comodidad y seguridad. La misma te proporcionará datos precisos
            sobre estos aspectos, para que puedas ajustar tu ropa y actividades
            en consecuencia.
          </p>
          <li className='font-bold text-xl'>Interfaz Amigable </li>
          <p>
            Cuenta con una interfaz fácil de usar, diseñada para brindarte la
            información que necesitas de manera rápida y sencilla. La
            información se presenta de forma clara y visualmente atractiva.
          </p>
        </ol>

        <h2 className='font-sans font-semibold text-xl m-3'>
          Así que, ya sea que estés planeando un picnic, una jornada en la
          playa, un viaje de negocios o simplemente quieras estar bien preparado
          para cualquier eventualidad climática,Esta aplicación de Pronóstico
          del Tiempo es tu compañero confiable.
        </h2>
      </div>
      <Home />
    </div>
  );
};

export default LandingPage;
