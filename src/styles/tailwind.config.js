module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5', 
        secondary: '#F9A8D4',
      },
      spacing: {
        '72': '18rem', 
        '84': '21rem',
      },
    },
  },
  plugins: [],
}
