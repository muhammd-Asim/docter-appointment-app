/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "white-100": "#F0FFF0",
        "white-200": "#F5F5F5",
        "white-300": "#F8F8FF",
        violetdark: "#9d4edd"
      },
      fontFamily: {
        NunitoSans: ['Nunito Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}

