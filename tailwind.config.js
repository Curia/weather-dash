module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      backgroundColor: {
        background: "#f2f2f2",
      },
      textColor: {
        'primary': '#333434',
      },
      fontSize: {
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
        "8xl": "6rem",
        "9xl": "8rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
