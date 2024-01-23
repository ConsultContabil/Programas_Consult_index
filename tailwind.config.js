/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
      },
      backgroundImage: {
        'fundo': "url('./static/Rectangle1.jpg')",
        'cel_fun': "url('./static/Rectangle1(1).jpg')",
      },
  },
  plugins: [require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),]
  } 
}
