/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ob-navy': '#20365A',
        'ob-blue': '#1188FF',
        'ob-bg': '#F7F8FA',
        'ob-text': '#18233D',
        'ob-green': '#3AD17D',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
