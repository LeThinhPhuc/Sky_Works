/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", 
  "./src/**/*.{js,jsx,ts,tsx}", 
  "./src/**/*.{html,js}",
  "./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1600px',
    },
    extend: {
      width:{
        '88' :'88%',
      },
      boxShadow:{
        "hov": "0px 0px 25px 5px  rgb(203 213 225) "
      },
      
    },
  },
  plugins: [require('flowbite/plugin')],
};