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
          '6%': { transform: 'translateY(-112%)' },
          '16%': { transform: 'translateY(-100%)' },
          '23%': { transform: 'translateY(-212%)' },
          '33%': { transform: 'translateY(-200%)' },
          '40%': { transform: 'translateY(-312%)' },
          '50%': { transform: 'translateY(-300%)' },
          '57%': { transform: 'translateY(-412%)' },
          '67%': { transform: 'translateY(-400%)' },
          '74%': { transform: 'translateY(-512%)' },
          '84%': { transform: 'translateY(-500%)' },
          '91%': { transform: 'translateY(-612%)' },
          '100%': { transform: 'translateY(-600%)' }
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
