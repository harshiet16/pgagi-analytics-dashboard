module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',  // Make sure this matches your folder structure
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5', // Customize primary color
        secondary: '#F9A8D4',
      },
      spacing: {
        '72': '18rem', // Custom spacing values
        '84': '21rem',
      },
    },
  },
  plugins: [],
}
