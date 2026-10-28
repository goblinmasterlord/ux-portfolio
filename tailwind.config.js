/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: 'rgb(var(--paper) / <alpha-value>)',
        'paper-2': 'rgb(var(--paper-2) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        'ink-2': 'rgb(var(--ink-2) / <alpha-value>)',
        mute: 'rgb(var(--mute) / <alpha-value>)',
        signal: 'rgb(var(--signal) / <alpha-value>)',
        'signal-soft': 'rgb(var(--signal-soft) / <alpha-value>)',
        line: 'rgb(var(--ink) / 0.14)',
        'line-inv': 'rgb(var(--paper) / 0.16)',
      },
      fontFamily: {
        sans: ['"Geist Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
        mono: ['"Geist Mono Variable"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        // Fluid display sizes (min @ 375px → max @ 1600px)
        'display-xl': ['clamp(3.1rem, 8.2vw, 9.5rem)', { lineHeight: '0.92', letterSpacing: '-0.045em' }],
        'display-l': ['clamp(2.6rem, 6vw, 6.75rem)', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        'display-m': ['clamp(2rem, 4vw, 4.25rem)', { lineHeight: '1', letterSpacing: '-0.035em' }],
        'display-s': ['clamp(1.6rem, 2.6vw, 2.75rem)', { lineHeight: '1.08', letterSpacing: '-0.03em' }],
        lead: ['clamp(1.2rem, 1.6vw, 1.6rem)', { lineHeight: '1.35', letterSpacing: '-0.015em' }],
        label: ['0.72rem', { lineHeight: '1', letterSpacing: '0.06em' }],
      },
      spacing: {
        gutter: 'var(--gutter)',
        section: 'clamp(6rem, 14vw, 13rem)',
      },
      transitionTimingFunction: {
        expo: 'cubic-bezier(0.16, 1, 0.3, 1)',
        quart: 'cubic-bezier(0.76, 0, 0.24, 1)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translate3d(0,0,0)' },
          to: { transform: 'translate3d(-50%,0,0)' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        pulseDot: {
          '0%': { boxShadow: '0 0 0 0 rgb(var(--signal) / 0.5)' },
          '70%': { boxShadow: '0 0 0 7px rgb(var(--signal) / 0)' },
          '100%': { boxShadow: '0 0 0 0 rgb(var(--signal) / 0)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        blink: 'blink 1.05s steps(1) infinite',
        'pulse-dot': 'pulseDot 2.2s ease-out infinite',
      },
    },
  },
  plugins: [],
}
