/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: {
                    dark: '#0a0a0a',
                    light: '#f5f5f5',
                },
                accent: {
                    primary: '#e4ff00', // Aziz Khaldi type lime/yellow
                    secondary: '#ffffff',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['PP Neue Montreal', 'Inter', 'sans-serif'], // Popular high-end font fallback
            },
            animation: {
                'parallax': 'parallax var(--parallax-speed) linear infinite',
            },
            keyframes: {
                parallax: {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(-100%)' },
                }
            }
        },
    },
    plugins: [],
}
