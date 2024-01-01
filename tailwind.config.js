/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      sans: ["YourFontFamilyName", "sans-serif"],
      serif: ["AnotherFontFamily", "serif"],
      popin: ["Popin", "popin"],
      // Define additional font families as needed
    },
  },
  plugins: [],
};
