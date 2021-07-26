module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      display:["group-hover"],
      border:["hover"],
      borderWidth: ['hover', 'focus'],
      borderColor: ['active', 'hover'],

    },
  },
  plugins: [],
}
