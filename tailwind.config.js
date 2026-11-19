/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#1B6B1E',
          greenDark: '#145317',
          greenDeep: '#0D3B10',
          lime: '#7CB342',
          limeLight: '#8BC34A',
          terracotta: '#F59B65',
          terracottaDark: '#E8834A',
          cream: '#FAF9F5',
          sand: '#F3EFE6',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'botanical': '0 10px 30px -8px rgba(27, 107, 30, 0.08), 0 4px 12px -4px rgba(20, 83, 23, 0.04)',
        'botanical-lg': '0 18px 40px -10px rgba(27, 107, 30, 0.14), 0 8px 16px -6px rgba(20, 83, 23, 0.06)',
        'primary-cta': '0 14px 32px -6px rgba(27, 107, 30, 0.32), 0 4px 12px -2px rgba(20, 83, 23, 0.18)',
        'terracotta-glow': '0 12px 28px -6px rgba(232, 131, 74, 0.22)',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        }
      },
      animation: {
        'float-slow': 'float-slow 5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
