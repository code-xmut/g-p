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
        cardBg: '#1d1c23',
      },
    },
  },
  plugins: [
    daisyui,
    require('@tailwindcss/typography'),
  ],
  daisyui: {
    theme: ['light', 'dark'],
  },
}
