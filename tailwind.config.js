module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        blob: 'blob 30s infinite',
        ring: 'ring 60s infinite',
      },
      keyframes: {
        blob: {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        },
        ring: {
          '0%': {
            transform: 'translate(-30px, 0px)',
          },
          '50%': {
            transform: 'translate(30px, 0px)',
          },
          '100%': {
            transform: 'translate(-30px, 0px)',
          },
        },
      },
    },
  },
  plugins: [],
}
