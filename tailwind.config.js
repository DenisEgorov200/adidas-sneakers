/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Open Sans', 'sans-serif']
    },
    extend: {
      colors: {
        first: '#010101',
        secondary: '#8d8d8d',
        third: '#1d67fa'
      }
    },
  },
  plugins: [],
}