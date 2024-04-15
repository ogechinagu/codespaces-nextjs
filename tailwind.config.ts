import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f8f7f4',
        secondary: '#f8f7f4',
        tertiary: '#f8f7f4',
        slate: {
          10: '#f1f3f4',
        },
        green: {
          50: '#30af5b',
          90: '#292c27',
        },
        gray: {
          10: '#eeeeee',
          20: '#a2a2a2',
          30: '#787878',
          50: '#585858',
          90: '#141414',
        }
      },
      fontFamily: {
        nunito: ['var(--font-nunito)'],
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
