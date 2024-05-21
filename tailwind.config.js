/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  corePlugins: {
    preflight: false
  },
  daisyui: {
    themes: [
      {
        mytheme: {



          "primary": "#bc123c",



          "secondary": "#bc123c",



          "accent": "#ff486d",



          "neutral": "#2f292b",



          "base-100": "#040102",



          "info": "#fca4ae",



          "success": "#1ddf54",



          "warning": "#df1d48",



          "error": "#df1d48",


          "accent- content": "#ffffff",

          "neutral- content": "#ffffff",

        },
      },
    ],
  },
  plugins: [require("daisyui")],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"]
};
