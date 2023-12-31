/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007BFF',
        background: '#EAF2FC',
        secondary: '#FF5722',
        searchGray: '#E5EAEF',
        iconsLight: '#666666',
        iconDark: '#333333',
        NegFeedback: '#FF1744',
        PosFeedback: '#4CAF50'
      },
    },
  },
  plugins: [],
}