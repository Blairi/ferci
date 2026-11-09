/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F8F6F2',
        'cream-deep': '#F1ECE5',
        ink: '#252525',
        muted: '#85817B',
        rose: '#D8B7B2',
        beige: '#EAE3DA',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        script: ['Caveat', 'cursive'],
      },
      letterSpacing: {
        widest: '0.32em',
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
};
