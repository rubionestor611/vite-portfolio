/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      cursor: {
        default: 'url(/src/assets/cursors/defaultCursor.svg), default',
        pointer: 'url(/src/assets/cursors/pointer.svg), pointer'
      },
      animation: {
        shine: "shine 1s",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
      colors: {
        primary: '#3860D0',
        
        darkBG1: '#121F3D',
        darkBG2: '#0F182E',
        darkAccent: '#4D6AAE',
        darkText: '#F5F5F5',
  
        lightBG1: '#F5F8FF',
        lightBG2: '#E3ECFF',
        lightAccent: '#81A3FF',
        lightText: '#222222'
      },
      screens: {
        lg: '1075px',
      },
      keyframes: {
        wiggle: {
          '0%, 50%': { transform: 'rotate(-3deg)' },
          '25%': { transform: 'rotate(3deg)' },
          '100%': {transfor: 'rotate(0deg)'}
        }
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out"
      }
    },
  },
  plugins: [],
  darkMode: "class"
}

