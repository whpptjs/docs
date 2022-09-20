/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./styles/**/*.{css, scss}", "./components/**/*.{css, scss}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {},
  },
  plugins: [],
};
