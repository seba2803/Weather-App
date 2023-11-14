import { create } from 'zustand';
import axios from 'axios';
import { persist } from 'zustand/middleware';

// para persisitir datos en localStorage
export const useWeatherStore = create(
  persist(
    (set) => ({
      //state
      infoClima: [],
      busqueda: [],
      theme: 'light',
      // actions
      fetchData: async (lugar) => {
        try {
          const { data } = await axios(
            `${import.meta.env.VITE_BASE_URL}/forecast.json?key=${
              import.meta.env.VITE_API_KEY
            }&q=${lugar}&days=5`
          );
          // Verificar si 'data' y 'data.current' existen antes de actualizar el estado
          if (data && data.current) {
            set((state) => ({
              infoClima: (state.infoClima = [data]),
            }));
          } else {
            console.error('Datos de clima incompletos o incorrectos:', data);
          }
        } catch (error) {
          console.error('Error al obtener datos de clima:', error);
        }
      },
      fetchBusqueda: async (lugar) => {
        const { data } = await axios(
          `${import.meta.env.VITE_BASE_URL}/search.json?key=${
            import.meta.env.VITE_API_KEY
          }&q=${lugar}`
        );
        set((state) => ({
          busqueda: (state.busqueda = data),
        }));
      },
      setTheme: () =>
        set((state) => ({
          theme:
            state.theme == 'light'
              ? (state.theme = 'dark')
              : (state.theme = 'light'),
        })),
    }),
    {
      name: 'weather',
    }
  )
);
