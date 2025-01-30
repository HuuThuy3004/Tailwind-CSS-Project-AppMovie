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
      }
    },
  },
  plugins: [],
}