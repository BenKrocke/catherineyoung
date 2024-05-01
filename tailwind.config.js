/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      'display': ['Inter'],
      'body': ['Inter']
    },
    extend: {
      colors: {
        'cyo-red': '#c2223d',
        'cyo-red-light': '#D75860',
        'cyo-blue': '#326B8A',
        'cyo-blue-light': '#42A2D6',
        'cyo-light-bg': '#F8F7F2'
      }
    },
  },
  plugins: [],
}

