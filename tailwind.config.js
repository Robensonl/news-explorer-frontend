/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'Arial', 'sans-serif'],
        'roboto': ['Roboto', 'Arial', 'sans-serif'],
        'roboto-slab': ['Roboto Slab', 'serif'],
      },
      colors: {
        primary: {
          black: '#1A1B22',
          white: '#FFFFFF',
          gray: '#B6BCBF',
        },
        accent: {
          blue: '#2F71E5',
          'blue-hover': '#347EFF',
        },
        background: {
          light: '#F5F6F7',
          dark: '#1A1B22',
        },
        text: {
          primary: '#1A1B22',
          secondary: '#B6BCBF',
          white: '#FFFFFF',
        },
      },
      boxShadow: {
        card: '0px 4px 12px rgba(0, 0, 0, 0.08)',
        'card-hover': '0px 8px 24px rgba(0, 0, 0, 0.12)',
      },
      borderRadius: {
        card: '16px',
      },
      maxWidth: {
        container: '1440px',
        content: '1232px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        slideUp: 'slideUp 0.3s ease-out',
      },
    },
  },
  plugins: [],
}
