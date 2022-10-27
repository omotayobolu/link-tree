/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: ["Inter", "sans-serif"],
      colors: {
        black: "#101828",
        grey: "#EAECF0",
        darkGrey: "#667085",
      },
    },
  },
  plugins: [],
};
