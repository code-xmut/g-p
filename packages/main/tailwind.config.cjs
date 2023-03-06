/** @type {import('tailwindcss').Config} */
const daisyui = require('daisyui')

module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#131219',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    theme: ['light', 'dark'],
  },
}
