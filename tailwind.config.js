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
      keyframes: {
        slideDown: {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        slideUpAndFade: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: '0', transform: 'translateX(-2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateY(-10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: '0', transform: 'translateX(2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        contentShow: {
          from: { opacity: 0, transform: 'translateX(200px) ' },
          to: { opacity: 1, transform: 'translateX(0px)' },
        },
        contentClose: {
          from: { opacity: 0, transform: 'translateX(0) ' },
          to: { opacity: 1, transform: 'translateX(200px)' },
        },
        contentShowMobile: {
          from: { opacity: 0, transform: 'translateY(200px) ' },
          to: { opacity: 1, transform: 'translateY(0px)' },
        },
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUpAndFade: 'slideUpAndFade 600ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade:
          'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideDownAndFade:
          'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade:
          'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 1000ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentClose: 'contentClose 1000ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShowMobile:
          'contentShowMobile 1000ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [require('tailwindcss-gradients')],
}
