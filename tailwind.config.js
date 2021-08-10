module.exports = {
  darkMode: false,
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        "-1": "-1",
      },
      container: {
        center: true,
        padding: "2rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("./src/index")],
};
