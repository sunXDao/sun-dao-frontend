import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins',  'sans-serif']
      },
      colors: {
        primaryColor: '#00B894',
        secondaryColor: '#3D3D3D',
      }
    },
  },
  plugins: [],
};
export default config;
