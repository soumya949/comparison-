/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ob-navy': '#26334A',
        'ob-blue': '#0084FF',
        'ob-bg': '#F9FAFB',
        'ob-text': '#18233D',
        'ob-green': '#10B981',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
