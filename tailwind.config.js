module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#010101",
        secondary: "#845EC2",
        header: "#ffffffd4",
        arrow: "#000000e4"
      },

      fontFamily: {
        inter: "'Inter', sans-serif",
        lexend: "'Lexend', sans-serif"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
