/** @type {import('tailwindcss').Config} */

export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      colors : {
        mainColor : "#2C3E50",
        secColor  :  "#1ABC9C" 
      }

    },
  },

  plugins: [],

}
