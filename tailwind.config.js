/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./src/**/*.{html,js,svelte,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'main': {
          100: '#F30000',
          200: '#CC0000',
          300: '#A60000',
          400: '#800000',
          500: '#730000',
          600: '#660000',
          700: '#5A0000',
          800: '#4D0000',
          900: '#400000',
        },
        'highlight': 
        {
          50: '#ffdb9f',
          100: '#ffd38a',
          200: '#ffc35f',
          300: '#ffb73f',
          400: '#FFAF2A',
          500: '#ffa40c',
          600: '#ee9400',
          700: '#df8b00',
          800: '#a36600',
          900: '#774a00',
        }
      }
    },
  },
  plugins: [],
}

