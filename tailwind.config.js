/* eslint-disable no-undef */

/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");


module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'dark-color': 'var(--dark-color)'
      },
      colors:{
        'text-color': 'var(--text-color)',
        'primary-color': 'var(--primary-color)',
        'about-text-color': 'var(--about-text-color)',
        'light-color': 'var(--light-color)',
        'button-bg': 'var(--button-bg)',
        'bg-color' : 'var(--bg-color)',
        'line-color' : 'var(--line-color)',
        'circle-bg' : 'var(--circle-bg)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
});
