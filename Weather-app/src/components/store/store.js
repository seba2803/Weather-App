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
      // actions
      fetchData: async (lugar) => {
        const { data } = await axios(
          `${import.meta.env.VITE_BASE_URL}/forecast.json?key=${
            import.meta.env.VITE_API_KEY
          }&q=${lugar}&days=5`
        );
        set((state) => ({
          infoClima: (state.infoClima = [data]),
        }));
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
    }),
    {
      name: 'weather',
    }
  )
);
