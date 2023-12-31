import github from '../../assets/github.svg';
import linkedin from '../../assets/Linkedin.svg';
import { useWeatherStore } from '../store/store';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  const theme = useWeatherStore((state) => state.theme);
  return (
    <div
      className={
        theme == 'light'
          ? 'flex-wrap h-64 justify-around w-full p-3 bg-green-200 text-black text-center bg-opacity-80 shadow-xl'
          : 'flex-wrap h-64 justify-around items-center w-full p-3 bg-green-800 text-white text-center bg-opacity-40 shadow-xl'
      }
    >
      <h2 className='text-base font-bold mt-10 p-5'>
        Designed and Developed by Sebastian Velazquez
      </h2>
      <h3 className='font-semibold'>Copyright © {year} seba2803</h3>
      <div className='flex justify-center'>
        <a
          className='mx-3 p-3'
          href='https://github.com/seba2803'
          target='_blank'
        >
          <img className='h-11' src={github} alt='' />
        </a>
        <a
          className='mx-3 p-3'
          href='https://www.linkedin.com/in/sebastian-orlando-velazquez-gonzales/'
          target='_blank'
        >
          <img className='h-11' src={linkedin} alt='' />
        </a>
      </div>
    </div>
  );
};

export default Footer;
