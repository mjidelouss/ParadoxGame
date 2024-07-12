import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      rotate: {
        '120': '120deg',
        '240': '240deg',
        '30': '30deg',
        '150': '150deg',
        '270': '270deg',
      },
      animation: {
        'scale': 'scale .3s ease-in-out',
        'glow': 'glow .5s ease-in-out',
      },
      keyframes: {
        scale: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 0 rgb(201, 13, 13)' },
          '100%': { boxShadow: '0 0 100px rgb(201, 13, 13)' },
        },
      },
      backgroundColor: {
        background: 'rgb(var(--background))',
      },
      textColor: {
        foreground: 'rgb(var(--foreground))',
      },
    },
  },
  plugins: [],
}
export default config;
