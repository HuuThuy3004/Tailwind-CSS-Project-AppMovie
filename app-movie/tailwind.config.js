/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        schibsted: ['"Schibsted Grotesk"', 'san-serif'],
        sans42dot: '42dot Sans',
        roboto: 'Roboto Condensed'
      },
      colors: {
        primary: '#6bb5ff',
        secondary: '#00D1B2',
        tertiary: '#FFC75F',
        dark: '#4b4e4f',
        quaternary: '#00C853',
        quinary: '#FF9F43',
        senary: '#FF4500',
        septenary: '#FF0084',
        octonary: '#3A235A',
        quinary_light: '#F5F5F5',
        quinary_dark: '#636363',
        tertiary_light: '#F9F9F9',
        tertiary_dark: '#BCBCBC',
        quaternary_light: '#F1F1F1',
        quaternary_dark: '#9B9B9B',
        senary_light: '#F3F3F3',
      }
    },
  },
  plugins: [],
}