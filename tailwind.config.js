import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        "theme-blue": "#050A30",
        "theme-maroon": "#8B2635",
        "theme-gray": "#E0E2DB",
        "theme-gold": "#FAA916",
        "theme-lavender": "#DAE0F2",
      },
    },
    fontFamily: {
      garet: ["garet"],
      garetheavy: ["garet-heavy"],
    },
  },
  plugins: [require("daisyui"), flowbite.plugin()],
  daisyui: {
    themes: false,
    darkTheme: "light",
  },
};
