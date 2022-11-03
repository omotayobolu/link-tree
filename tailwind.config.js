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
        contactText: "#475467",
        button: "#1570EF",
        buttonHover: "#175CD3",
        buttonActive: "#1570EF",
        disabledButton: "#B2DDFF",
        inputFocus: "#84CAFF",
      },
      dropShadow: {
        linkShadow: "0 12px 16px rgba(16,24,40,8%)",
        avatarShadow: "0 0 0 rgba(242,244,247,100%)",
        borderShadow: "0 1px 2px rgba(16,24,40,5%)",
      },
      backgroundImage: {
        tick: "./src/assets/tick.png",
      },
    },
  },
  plugins: [],
};
