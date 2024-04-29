/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'primary' : '#2F1893',
      },
      fontFamily : {
        body : ['DM Sans']
      }
    },
  },
  plugins: [],
}

