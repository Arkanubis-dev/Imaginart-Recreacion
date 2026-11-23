/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        theater: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#9c12d1', // La Teatrina Signature Magenta / Purple
          800: '#86198f',
          900: '#701a75',
        },
        sunny: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        bubble: {
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
        }
      },
      fontFamily: {
        display: ['Fredoka', 'sans-serif'],
        sans: ['Nunito', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
