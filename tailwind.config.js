module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Jost", "sans-serif"],
    },
    extend: {
      colors: {
        bglight: "#F9FAFB",
        cardlight: "#EFF3F3",

        lightaccenttint: "#1C9A9A",
        lightaccent: "#007A7A",
        lightaccentshade: "#004D4D",

        bgdark: "#1D2A35",
        carddark: "#22323F",

        darkaccenttint: "#57DCB4",
        darkaccent: "#05CE91",
        darkaccentshade: "#00835B",
        textlight: "#F9FAFB",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
