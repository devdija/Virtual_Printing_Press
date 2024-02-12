/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  screens: {
    xs: '450px',
    sm: '640px',
    md: '768px',
    xmd: '900px',
    lg: '1025px',
    xl: '1280px',
    '2xl': '1536px',
    '3xl': '1800px',
  },
}