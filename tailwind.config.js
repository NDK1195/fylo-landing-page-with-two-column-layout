/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        "very-dark-blue": "hsl(243, 87%, 12%)",
        "desaturated-blue": "hsl(238, 22%, 44%)",
        "bright-blue": "hsl(224, 93%, 58%)",
        "moderate-cyan": "hsl(170, 45%, 43%)",
        "light-grayish-blue": "hsl(240, 75%, 98%)",
        "light-gray": "hsl(0, 0%, 75%)",
      },
      boxShadow: {
        "box-mobile": "0px 0px 8px 4px rgba(56, 56, 56, 0.05)",
        "box-desktop": "0px 0px 10px 5px rgba(56, 56, 56, 0.05)",
      },
      dropShadow: {
        drop: "2px 3px 6px rgba(0, 0, 0, 0.16)",
      },
    },
  },
  plugins: [],
};
