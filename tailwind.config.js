const { getColorsMapping } = require('./src/utils/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: getColorsMapping(),
    },
  },
  plugins: [],
}