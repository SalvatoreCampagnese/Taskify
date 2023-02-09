/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-white": "#FAFAFF",
        "primary-white-40": "rgb(250, 250, 255, 0.5)",
        "primary-green": "#8affab",
        "primary-green-60": "rgba(138, 255, 171,0.6)",
        "secondary-green": "#058c42",
        "primary-blue": "#253C78",
        "primary-blue-60": "rgba(37, 60, 120,0.6)",
        "primary-dark": "#101010",
        "secondary-dark": "#2B2B2B",
        "light-gray": "#F0F1F9",
        "dark-gray": "#898D9E",
        "primary-red": "#EEC1C1",
        "primary-orange": "#F2D382",
        "chart-green": "#99D7DB",
      },
      boxShadow: {
        "top-shadow": "0 -2px 10px 2px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
