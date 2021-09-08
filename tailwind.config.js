/*
 * @Date: 2021-07-04 18:27:57
 * @LastEditors: Fane Kung
 * @LastEditTime: 2021-07-24 11:19:28
 * @FilePath: /website-funds/tailwind.config.js
 */
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0.75rem',
        sm: '1rem',
        md: '2rem',
        lg: '4rem',
        xl: '7.125rem',
      },
    },
    extend: {
      fontFamily: {
        sans: ['"Noto Sans TC"', 'system-ui', 'sans-serif'],
        baloo: ['"Baloo Tamma 2"', '"Noto Sans TC"', 'system-ui', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class',
    }),
  ],
}
