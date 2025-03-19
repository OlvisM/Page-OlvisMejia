/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "infinite-slider": "infiniteSlider 10s linear infinite", // Adjusted time for faster sliding
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-250px * 13))", // Adjust this based on the number of items
          },
        },
      },
    },
  },
  plugins: [],
};
