/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cabinet Grotesk', 'sans-serif'],
        sans: ['Instrument Sans', 'sans-serif'],
      },
      colors: {
        background: '#0C0C0C',
        primary: '#FFFFFF',
        accent: '#64FF8D',
        muted: '#727272'
      },
      fontSize: {
        'display': ['clamp(3rem, 8vw, 7.5rem)', {
          lineHeight: '1',
          letterSpacing: '-0.02em',
          fontWeight: '600',
        }],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}