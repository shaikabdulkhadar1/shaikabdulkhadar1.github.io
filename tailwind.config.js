/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      outfit: ["Outfit", "sans-serif"],
    },
    colors: {
      bg1: "#FFFFFF",
      bg2: "#BFC0C0",
      fontColor: "#2D3142",
      navBar: "#4F5D75",
      btnColor: "#EF8354",
    },
  },
  plugins: [require("tailwindcss-motion")],
};
