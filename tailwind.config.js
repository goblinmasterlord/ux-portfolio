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
        'text-body': '#334155',
      },
      fontFamily: {
        display: ['Satoshi', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['GeistMono', 'monospace'],
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.03), 0 2px 4px rgba(0, 0, 0, 0.03)',
        'DEFAULT': '0 2px 4px rgba(0, 0, 0, 0.05), 0 4px 8px rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.04), 0 6px 12px rgba(0, 0, 0, 0.04)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.03), 0 15px 30px rgba(0, 0, 0, 0.05)',
        'xl': '0 15px 25px rgba(0, 0, 0, 0.03), 0 25px 50px rgba(0, 0, 0, 0.06)',
        '2xl': '0 20px 40px rgba(0, 0, 0, 0.04), 0 35px 60px rgba(0, 0, 0, 0.07)',
        'blue-sm': '0 2px 4px rgba(59, 130, 246, 0.1), 0 4px 8px rgba(59, 130, 246, 0.05)',
        'blue-md': '0 4px 8px rgba(59, 130, 246, 0.1), 0 8px 16px rgba(59, 130, 246, 0.1)',
        'blue-lg': '0 8px 16px rgba(59, 130, 246, 0.1), 0 16px 32px rgba(59, 130, 246, 0.1)',
        'violet-sm': '0 2px 4px rgba(139, 92, 246, 0.1), 0 4px 8px rgba(139, 92, 246, 0.05)',
        'violet-md': '0 4px 8px rgba(139, 92, 246, 0.1), 0 8px 16px rgba(139, 92, 246, 0.1)',
        'card': '0 1px 3px rgba(0, 0, 0, 0.02), 0 4px 12px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 4px 8px rgba(0, 0, 0, 0.03), 0 12px 24px rgba(0, 0, 0, 0.05)',
        'button': '0 1px 2px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.05)',
        'button-hover': '0 2px 4px rgba(0, 0, 0, 0.05), 0 4px 8px rgba(0, 0, 0, 0.05)',
        'button-blue': '0 2px 4px rgba(59, 130, 246, 0.15), 0 4px 8px rgba(59, 130, 246, 0.1)',
        'button-violet': '0 2px 4px rgba(139, 92, 246, 0.15), 0 4px 8px rgba(139, 92, 246, 0.1)',
      },
      dropShadow: {
        'sm': '0 1px 1px rgba(0, 0, 0, 0.03)',
        'DEFAULT': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'md': '0 2px 4px rgba(0, 0, 0, 0.05)',
        'lg': '0 4px 8px rgba(0, 0, 0, 0.05)',
        'xl': '0 8px 16px rgba(0, 0, 0, 0.05)',
        'blue-sm': '0 1px 2px rgba(59, 130, 246, 0.2)',
        'blue-md': '0 2px 4px rgba(59, 130, 246, 0.2)',
        'blue-lg': '0 4px 8px rgba(59, 130, 246, 0.2)',
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