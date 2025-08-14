/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'georgian-red': '#FF0000',
        'georgian-black': '#000000',
      },
      fontFamily: {
        'georgian': ['Noto Sans Georgian', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
