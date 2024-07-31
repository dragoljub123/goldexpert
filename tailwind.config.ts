import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "gradijent-pozadina":"linear-gradient(144deg, rgba(13, 18, 35, 1) 50%, rgba(13, 18, 35, 0.5) 50%)",

      },
      screens: {

        '1440p': '1440px',
  
      },
      colors: {
        customBlue: '#3852AC',
        zlatna: '#c69638',
        lightblue: '#121B34',
        oblacicsiva:'#F9F9FB',
        
      },
    },
  },
  plugins: [],
};
export default config;



