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
        gray: "#11141e",
      },

      fontFamily: {
        poppins: "'Poppins', sans-serif",
        inter: "'Inter', sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
