/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        primary: '#1E293B',
        accent: '#5B7FFF',
        secondary: '#6366F1',
        tertiary: '#8B5CF6',
        purple: '#9333EA',
        magenta: '#A855F7',
        blue: '#3B82F6',
        indigo: '#6366F1',
        violet: '#8B5CF6',
        'blue-light': '#60A5FA',
        'purple-dark': '#7E22CE',
        lavender: '#C4B5FD',
        slate: '#64748B',
        'slate-light': '#94A3B8',
        yellow: '#FEE440',
        mint: '#00F5D4',
        coral: '#FF9770',
        peach: '#FEC5BB',
        teal: '#00BBF9',
        light: '#F8FAFC',
        dark: '#1E293B',
      },
      fontFamily: {
        display: ['Cabinet Grotesk', 'sans-serif'],
        sans: ['Satoshi', 'sans-serif'],
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' }
        },
        'float-medium': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(-5deg)' }
        },
        'pulse-slow': {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 1 }
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'float-medium': 'float-medium 6s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 12s linear infinite',
        'bounce-subtle': 'bounce-subtle 5s ease-in-out infinite'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}