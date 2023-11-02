/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      phone: '320px',
      max_phone: '360px',
      tablet: '768px',
    },
    extend: {},
  },
  plugins: [],
};
