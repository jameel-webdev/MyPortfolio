/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-bg": "#efece3",
        "custom-red": "#d5534d",
        "custom-sand": "#efece3",
        "custom-purple": "#f3e2fb",
        "custom-lime": "#e5f9b3",
        "custom-teal": "#a7ebd5",
        "custom-cloud": "#b3e5fc",
        "custom-testing": "#ffccbc",
      },
      fontFamily: {
        oxygen: ["Oxygen", "sans-serif"],
      },
      borderWidth: {
        1: "1px",
        2: "2px",
        4: "4px",
        5: "5px",
        10: "10px",
      },
    },
  },
  plugins: [],
};
