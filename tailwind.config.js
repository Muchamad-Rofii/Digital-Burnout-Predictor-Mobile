/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")], // <-- TAMBAHKAN BARIS INI
  theme: {
    extend: {},
  },
  plugins: [],
}