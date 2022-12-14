/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#002244',
        'white-transparent': '#ffffff1a',
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
