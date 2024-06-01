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
        boneWhite: "#F0EDE5",
        skyBlue: "#1D4FD8",
        deepRoyalBlue: "#1E3A8A",
        honeyGold: "#F4B942",
      },
      backgroundImage: {
        "gradient-blue": "url('../public/svg/background.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
