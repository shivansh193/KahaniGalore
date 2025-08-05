/** @type {import('tailwindcss').Config} */
module.exports = {
  // THIS IS THE KEY PART
  darkMode: 'media', // or 'class' if you want a manual toggle
  
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-purple': '#8b6baf',
        'bright-yellow': '#fff572',
        'leaf-green': '#75c044',
        'sky-blue': '#74d1f6',
        'coral-red': '#f05656',
        'dark-charcoal': '#231f20',
      },
    },
  },
  plugins: [],
}