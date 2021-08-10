const plugin = require("tailwindcss/plugin");

const scrollbarNone = plugin(function ({ addUtilities }) {
  addUtilities({
    ".scrollbar-none": {
      /* Firefox */
      "scrollbar-width": "none",

      /* Safari and Chrome */
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
  });
});

module.exports = scrollbarNone;
