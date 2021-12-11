module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FEF6FF",
        secondary: "#845EC2",
      },
    },

    fontFamily: {
      poppins: "'Poppins', sans-serif",
      lato: "'Lato', sans-serif"
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
