/** @type {import('tailwindcss').Config} */
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
        secondary: '#6D9886',
        danger: '#D9CAB3',
        success: '#F6F6F6',
      },
    },
  },
  plugins: [],
}
