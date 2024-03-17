/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./indexfolder*/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        agrandir: ['Agrandir'],
        hatton: ['Hatton'],
        hattonMedium: ['Hatton Medium'],
      }
    },
  },
  plugins: [],
}