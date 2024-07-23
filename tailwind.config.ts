import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/components/**/*.{ts,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/home/**/*.{jsx,tsx}",
    "./src/store/**/*.{jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        grad: "linear-gradient(to bottom, #0d0d0c, #0d130d, #051916, #001d22, #001f30, #002d45, #003b5c, #004973, #006d97, #0093b1, #00babf, #10e0c1);",
      },
      fontFamily: {
        satisfy: ['var(--font-satisfy)'],
        bungee: ['var(--font-bungee)'],
        nosifer: ['var(--font-nosifer)']
      },
    },
  },
  plugins: [],
};
export default config;
