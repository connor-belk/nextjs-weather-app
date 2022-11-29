/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        glass: "0 0 15px 0 rgba(0, 0, 0, 0.7)",
      },
    },
  },
  plugins: [],
};
