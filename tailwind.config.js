/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#61A3BA',
        first: '#FFFFDD',
        green: '#A5DD9B',
        secondgreen: '#C5EBAA',
        third: '#65273C',
      }, screens: {
        xs: '480px', // Define your custom breakpoint
      }
    },
  },

}

