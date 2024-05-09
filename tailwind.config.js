/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Gandhi-Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: "#fff1f3",
          100: "#ffe0e4",
          200: "#ffc7ce",
          300: "#ffa0ab",
          400: "#ff697a",
          500: "#f93a50",
          600: "#e72138",
          700: "#c21327",
          800: "#a01424",
          900: "#851724",
          950: "#48070f",
        },
      },
    },
  },
  plugins: [],
};
