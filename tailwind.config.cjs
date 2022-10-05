/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      ibm: ['"IBM Plex Sans"', "sans-serif"],
      pixel: ['"Press Start 2P"', "cursive"],
      sans: ["sans-serif"],
    },
  },
  plugins: [],
};
