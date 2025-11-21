/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a', // Obsidian
        surface: '#121212', // Slightly lighter for cards
        primary: '#f8fafc', // Slate 50
        secondary: '#94a3b8', // Slate 400
        accent: '#38bdf8', // Sky 400 - Neon Blue
        'accent-purple': '#c084fc', // Purple 400
        'accent-glow': 'rgba(56, 189, 248, 0.5)',
        muted: '#334155', // Slate 700
        border: '#1e293b', // Slate 800
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['General Sans', 'Inter', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
      },
      backgroundImage: {
        'noise': "url('/noise.png')", // We will need to ensure this asset exists or use a CSS gradient trick
        'gradient-dark': 'linear-gradient(to bottom right, #0a0a0a, #121212)',
        'gradient-glow': 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
        'magnetic': 'magnetic 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        magnetic: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(var(--mx, 0), var(--my, 0))' },
        }
      },
    },
  },
  plugins: [],
}