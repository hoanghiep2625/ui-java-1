/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { brand: '#FFD93D', ink: '#0A0A0A' },
      fontFamily: { sans: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      boxShadow: {
        brutal: '4px 4px 0 0 #0A0A0A',
        'brutal-sm': '2px 2px 0 0 #0A0A0A',
      },
      borderRadius: { brutal: '6px' },
    },
  },
  plugins: [],
}
