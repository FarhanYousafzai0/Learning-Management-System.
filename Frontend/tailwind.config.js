/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Include React component files
    ],
    theme: {
      extend: {
        colors: {
          primary: "#1d4ed8", // Custom primary color
          secondary: "#9333ea",
          accent: "#f59e0b",
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"], // Custom font families
          serif: ["Merriweather", "serif"],
        },
        spacing: {
          "128": "32rem",
          "144": "36rem",
        },
        borderRadius: {
          "4xl": "2rem",
        },
      },
    },
    plugins: [
      require("@tailwindcss/forms"), // Optional plugins for forms
      require("@tailwindcss/typography"),
      require("@tailwindcss/aspect-ratio"),
    ],
  };
  