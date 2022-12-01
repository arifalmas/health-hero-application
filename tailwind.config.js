/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#36B3AC",
        secondary: "#5FB3D6",
        tertiary: "#5FD6CF",
      }
    },
  },
  plugins: [],
}
