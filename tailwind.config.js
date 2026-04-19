/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
          extend: {
                  colors: {
                            pleat: {
                                        bg: '#080d08',
                                        card: '#0f160f',
                                        hover: '#182018',
                                        border: '#1e2e1e',
                                        gold: '#c8a96e',
                                        'gold-light': '#e2c99a',
                                        text: '#f0ebe0',
                                        muted: '#7a8c7a',
                                        green: '#2d5a2d',
                            }
                  },
                  fontFamily: {
                            display: ['"Cormorant Garamond"', 'serif'],
                            sans: ['Inter', 'sans-serif'],
                  },
                  animation: {
                            'fade-in': 'fadeIn 0.5s ease-out',
                            'slide-in': 'slideIn 0.4s ease-out',
                  },
                  keyframes: {
                            fadeIn: { from: { opacity: '0', transform: 'translateY(12px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
                            slideIn: { from: { transform: 'translateX(100%)' }, to: { transform: 'translateX(0)' } },
                  }
          },
    },
    plugins: [],
}
