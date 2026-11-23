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
        cream: {
          50: '#FDFBF7',   // Main background
          100: '#FAF6EE',
          200: '#F4ECE0',
          300: '#EAE0D0',
        },
        lavender: {
          50: '#FAF8FD',
          100: '#F3EEFA',
          200: '#E8DFF5',  // Pastel lavender accent
          300: '#D5C4ED',
          400: '#B69CE2',
          500: '#9571D8',
          600: '#7C5CFA',  // Deep warm lavender CTA
          700: '#6442DF',
        },
        mint: {
          50: '#F4FAF8',
          100: '#E7F7F3',
          200: '#D9F2EC',  // Pastel mint accent
          300: '#BFE7DE',
          600: '#2A9D8F',
          700: '#1F7E73',
        },
        peach: {
          50: '#FEF8F5',
          100: '#FDF0E9',
          200: '#FCE1D6',  // Soft peach/melon accent
          300: '#F8C8B5',
          400: '#F59E87',
          500: '#F27D65',  // Soft coral CTA
          600: '#E26248',
        },
        butter: {
          50: '#FFFDF5',
          100: '#FFFBE6',
          200: '#FFF4CC',  // Butter yellow accent
          300: '#FFE999',
          500: '#E5B82A',
        },
        charcoal: {
          700: '#464652',
          800: '#34343D',
          900: '#242429',  // Dark charcoal for titles
          950: '#17171B',
        },
        slateText: {
          500: '#767682',
          600: '#555560',  // Medium gray for body paragraphs
          700: '#3E3E47',
        }
      },
      fontFamily: {
        display: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'Fredoka', 'sans-serif'],
        sans: ['var(--font-dmsans)', 'DM Sans', 'Nunito', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(36, 36, 41, 0.05)',
        'soft-lg': '0 12px 32px -4px rgba(36, 36, 41, 0.08)',
        'soft-xl': '0 20px 40px -6px rgba(36, 36, 41, 0.1)',
      }
    },
  },
  plugins: [],
};
