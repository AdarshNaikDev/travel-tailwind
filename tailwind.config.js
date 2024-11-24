/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Add Roboto
        merriweather: ['Merriweather', 'serif'], // Add Merriweather
        opensans: ['"Open Sans"', 'sans-serif'], // Add Open Sans
      }
    },
  },
  plugins: [],
}

