// tailwind.config.js
const { keepTheme } = require("keep-react/keepTheme");
const withMT = require("@material-tailwind/react/utils/withMT");

// Define a base configuration
const baseConfig = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
          "&::-webkit-scrollbar": {
            display: "none" /* Chrome, Safari, and Opera */,
          },
        },
      });
    },
  ],
};

// Apply both configurations by merging manually
module.exports = keepTheme(withMT(baseConfig));
