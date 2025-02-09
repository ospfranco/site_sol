module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: '.625rem',
      },
      animation: {
        'slow-pulse': 'slow-pulse 8s infinite',
      },
      keyframes: {
        'slow-pulse': {
          '0%, 100%': {opacity: 1},
          '50%': {opacity: 0.1},
        },
      },
    },
  },
  plugins: [],
}
