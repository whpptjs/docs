module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#fff",
      blue: {
        400: "#5a67d8",
      },
      grey: {
        400: "#eaeaea",
        600: "#6a8bad",
        700: "#2c3e50",
      },
      black: {
        900: "#000",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
