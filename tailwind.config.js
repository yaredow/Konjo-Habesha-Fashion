/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      custom: [
        "Blinker",
        "sans-serif",
        "Croissant One",
        "cursive",
        "League Spartan",
        "sans-serif",
        "Poppins",
        "sans-serif",
        "Roboto",
        "sans-serif",
        "Skranji",
        "cursive",
      ],
    },
    extend: {
      colors: {
        blue: {
          500: "#3b82f6",
        },
        gray: {
          700: "616161",
        },
      },
    },
  },
  plugins: [],
};
