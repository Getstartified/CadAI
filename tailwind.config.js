/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'cad-orange': '#FF6B00',
                'cad-purple': '#B844D8',
                'cad-pink': '#FF3D8F',
                'cad-dark': '#0a0a0a',
                'cad-darker': '#000000',
                'cad-gray': '#1a1a1a',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-cad': 'linear-gradient(135deg, #B844D8 0%, #FF3D8F 100%)',
            },
            boxShadow: {
                'glow-orange': '0 0 20px rgba(255, 107, 0, 0.3)',
                'glow-gradient': '0 0 30px rgba(184, 68, 216, 0.4)',
            },
            animation: {
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
            },
            keyframes: {
                'pulse-glow': {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(184, 68, 216, 0.4)' },
                    '50%': { boxShadow: '0 0 30px rgba(184, 68, 216, 0.6)' },
                },
            },
        },
    },
    plugins: [],
}
