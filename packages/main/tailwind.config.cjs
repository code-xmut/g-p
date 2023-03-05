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
        primary: '#212121',
        darkPrimary: '#0ea5e9',
        secondary: '#6D9886',
        danger: '#D9CAB3',
        success: '#F6F6F6',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    theme: ['light', 'dark'],
  },
}
