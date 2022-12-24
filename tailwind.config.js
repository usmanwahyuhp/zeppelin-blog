/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Montserrat', sans-serif"],
      },
      colors: {
        "accent-1": "#D05270",
      },
    },
  },
  plugins: [],
};
