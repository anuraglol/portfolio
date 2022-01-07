module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FEF7FF",
        secondary: "#845EC2",
        header: "#ffffffd4",
        arrow: "#000000e4"
      },

      fontFamily: {
        inter: "'Inter', sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
