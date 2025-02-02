/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        poppins: ['poppins, sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'serif'],
      }
    },
  },
  plugins: [],
}

