/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "node_modules/preline/dist/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      zIndex: {
        9999: "9999",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
