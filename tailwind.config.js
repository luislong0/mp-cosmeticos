/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        instagram:
          'linear-gradient(225deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #FCAF45)',
        'rose-gradient':
          'linear-gradient(225deg, #fda4af, #fb7185, #f43f5e, #e11d48, #E1306C)',
      },
      screens: {
        '2xl': '1400px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [require('tailwindcss-gradients')],
}
