/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent': '#34fcff',
        'light-1': '#f5faff',
        'light-2': '#e1f1f6',
        'light-3': '#cde8ed',
        'light-4': '#b9dfe4',
        'light-5': '#a5d6db',
        'text': '#0a0c0e', // Dark color for text
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.no-select': {
          'user-select': 'none',
        },
      }
      addUtilities(newUtilities)
    }
  ]
}