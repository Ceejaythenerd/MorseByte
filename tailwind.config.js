/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './*.js'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Source Sans 3"', 'sans-serif'],
      },
      colors: {
        brand: {
          bg: '#DFDDD6',
          forest: '#0F172A',
          sage: '#4169E1',
          clay: '#D5D0C5',
          stone: '#BCB5A9',
          terra: '#2563EB',
        },
      },
      boxShadow: {
        soft: '0 4px 6px -1px rgba(15, 23, 42, 0.05)',
        'soft-md': '0 10px 15px -3px rgba(15, 23, 42, 0.05)',
        'soft-lg': '0 20px 40px -10px rgba(15, 23, 42, 0.05)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(15, 23, 42, 0.03)',
      },
      transitionDuration: {
        500: '500ms',
        700: '700ms',
        1000: '1000ms',
      },
    },
  },
  plugins: [],
};
