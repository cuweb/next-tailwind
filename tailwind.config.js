/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'red-carleton' : '#e91c24',
        'gray-carleton': '#222222'
      }
    },
  },
  plugins: [
    '@tailwindcss/forms'
  ],
}
