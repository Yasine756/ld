/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Poppins:['Poppins', 'sans-serif'],
      },
      colors: {
        'first':'#58A596',
        'second':'#418477',
        'third':'#273E4F',
        'fourth':'#ED8E88',
        'fifth':'#008E7C',
        'oranged':'#fdd004',
        'black':'black',
        'white':'white',
        'leger':'#a5fae9'
      }
    },
  },
  plugins: [],
}