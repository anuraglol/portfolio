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

      animation: {
        reveal: "reveal 0.1s linear",
      },

      keyframes: {
        reveal: {
          "0%": { bottom: "0", visibility: "hidden" },
          "100%": { bottom: "1em", visibility: "visible" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
