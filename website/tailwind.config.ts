import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        spin_words: {
          '4%': { transform: 'translateY(-112%)' },
          '11%': { transform: 'translateY(-100%)' },
          '15%': { transform: 'translateY(-212%)' },
          '22%': { transform: 'translateY(-200%)' },
          '26%': { transform: 'translateY(-312%)' },
          '33%': { transform: 'translateY(-300%)' },
          '37%': { transform: 'translateY(-412%)' },
          '44%': { transform: 'translateY(-400%)' },
          '48%': { transform: 'translateY(-512%)' },
          '55%': { transform: 'translateY(-500%)' },
          '59%': { transform: 'translateY(-612%)' },
          '66%': { transform: 'translateY(-600%)' },
          '71%': { transform: 'translateY(-712%)' },
          '77%': { transform: 'translateY(-700%)' },
          '82%': { transform: 'translateY(-812%)' },
          '88%': { transform: 'translateY(-800%)' },
          '93%': { transform: 'translateY(-912%)' },
          '100%': { transform: 'translateY(-900%)' },
        },
      },
      animation: {
        'spin-words': 'spin_words 20s infinite',
      },
    },
  },
  plugins: [],
}
export default config
