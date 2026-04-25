/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      background: {
        dark: '#536878',
        light: '#EAE0C8',
      },
      paynes: '#536878',
      pearl: '#EAE0C8',
      accent: {
        primary: '#536878',
        secondary: '#EAE0C8',
      },
      white: '#EAE0C8',
      black: '#536878',
      transparent: 'transparent',
      current: 'currentColor',
    },
    extend: {
      strokeWidth: {
        '1': '1px',
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
        display: ['Outfit', 'PP Neue Montreal', 'Inter', 'sans-serif'],
      },
      animation: {
        'parallax': 'parallax var(--parallax-speed) linear infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        parallax: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
    },
  },
  plugins: [],
}
