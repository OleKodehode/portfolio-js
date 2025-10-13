import { Config } from "tailwindcss";

const config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        saira: ["Saira", "sans-serif"],
        slab: ["RobotoSlab", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
