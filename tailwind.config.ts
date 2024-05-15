import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'lapis-lazuli': '#22577A',
        verdigris: '#38A3A5',
        emerald: '#57CC99',
        'light-green': '#80ED99',
        'tea-green': '#C7F9CC',
        'bright-pink': '#EF476F',
        sunglow: '#FFD166',
        white: '#FEFCFD'
      },
    },
  },
  plugins: [],
};
export default config;
