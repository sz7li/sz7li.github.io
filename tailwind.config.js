/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      'display' : ['Raleway'],
    },
    extend: {
      colors: {
        darkRed: '#960200',
        customBlack: '#0A0908',
        dustyBlue: '#22333B',
        lightRose: '#EAE0D5',
        lightBrown: '#C6AC8F',
        lightBlue: '#D2D7DF',
        lightGray: '#BDBBB0',
        darkGray: '#8A897C'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(20%)' },
          '100%': { transform: 'translateX(-80%)' },
        },
      },
      animation : {
        'spin-slow-30': 'spin 30s linear infinite',
        'spin-slow-25': 'spin 25s linear infinite',
        'spin-slow-10': 'spin 10s linear infinite',
        'marquee-infinite' : 'marquee 5s linear infinite',
        'marquee2-infinite' : 'marquee2 5s linear infinite',
      },
    },
  },
  plugins: [],
}
