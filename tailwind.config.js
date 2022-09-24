/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        priamry: "#240D57",
        secondary: "#4F4F4F",
        detailClr: "#828282",
        eventBg: "#FBFAFF"
      }
    },
  },
  plugins: [],
}