/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor: '#7339AB',
        secundaryColor: '#625AD8',
        terciaryColor: '#42497C',
        letterColor: '#88F4FF'
      },
    },
  },
  plugins: [],
}

