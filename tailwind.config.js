/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1A3A6B',
        electric: '#0056C1',
        'blue-light': '#2B7FD6',
        'blue-medium': '#5B9AE4',
        'blue-faded': '#A3C4F3',
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      maxWidth: {
        content: 'min(100%, 120rem)',
      },
      borderRadius: {
        card: '10px',
        hero: '14px',
      },
    },
  },
  plugins: [],
}
