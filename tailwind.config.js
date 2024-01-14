import COLOR_PALLETE from './src/constants/colors';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: COLOR_PALLETE,
    },
  },
  plugins: [],
}

