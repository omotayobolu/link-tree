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
        disabledGrey: "#F2F4F7",
        activeGrey: "#98A2B3",
        hoverGrey: "#D0D5DD",
        imageHover: "rgba(52,64,84,75%)",
      },
      dropShadow: {
        linkShadow: "0 12px 16px rgba(16,24,40,8%)",
      },
    },
  },
  plugins: [],
};
