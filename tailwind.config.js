/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        filament: {
          orange: '#F97316', // Corporate Orange matching the abstract lightbulb/star
          'orange-dark': '#EA580C',
          'orange-light': '#FFEDD5',
          blue: '#0F1E36',   // Deep Blue matching the base detail
          'blue-dark': '#0B1526',
          'blue-light': '#1E3A8A',
          charcoal: '#1E293B', // Charcoal wordmark color
          slate: '#475569',
          light: '#F8FAFC',
          border: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
