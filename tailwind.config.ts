import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { colors: {
        'dark-slate': '#2D383C',
        'darker-slate': '#38464B',
        'accent': '#ff5940',
        'light-accent': '#ff8a76',
    },
    fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'display': ['Montserrat', 'sans-serif'],
        'cursive': ['Pacifico', 'cursive'],
        'cookie': ['Cookie', 'cursive'],
    }},
  },
  plugins: [],
} satisfies Config
