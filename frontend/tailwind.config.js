/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
        extend: {
                colors:{
                  'primary' : "#5f6FFF"
                },
                gridTemplateColumns:{
                    'auto' : 'repeat(auto-fill , minmax(200px,1fr))'
                },
                animation: {
                  'fade-in': 'fadeIn 0.5s ease-out forwards',
                },
                keyframes: {
                    fadeIn: {
                      '0%': { opacity: 0, transform: 'translateY(20px)' },
                      '100%': { opacity: 1, transform: 'translateY(0)' },
                    },
                  },
            plugins: [],
          }
        }

      }