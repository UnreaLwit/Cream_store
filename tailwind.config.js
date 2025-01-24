const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
      fontWeight: {
        "semi-bold": "600",
        medium: "500",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        "h1, h2, h3, button": {
          fontFamily: theme("fontFamily.montserrat"),
          fontWeight: theme("fontWeight.semi-bold"),
        },
        "h4, h5, h6": {
          fontFamily: theme("fontFamily.montserrat"),
          fontWeight: theme("fontWeight.medium"),
        },
        "p, span, li, a": {
          fontFamily: theme("fontFamily.open-sans"),
          fontWeight: "400",
          lineHeight: "1.6",
        },
      });
    }),
  ],
};
