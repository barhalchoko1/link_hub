/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkbg: '#0c1317',
        darkcard: '#141d22',
        darkcard2: '#18242a',
        neon: {
          mint: '#00e699',
          emerald: '#10b981',
          teal: '#2dd4bf',
          purple: '#8b5cf6',
          violet: '#7c3aed',
        }
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-mint': 'glowMint 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glowMint: {
          '0%': { boxShadow: '0 0 15px rgba(0, 230, 153, 0.25), 0 0 30px rgba(0, 230, 153, 0.1)' },
          '100%': { boxShadow: '0 0 25px rgba(0, 230, 153, 0.6), 0 0 45px rgba(0, 230, 153, 0.3)' },
        }
      }
    },
  },
  plugins: [],
}
