/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB', // Royal Blue
          dark: '#1E40AF',
          light: '#60A5FA',
        },
        secondary: {
          DEFAULT: '#0F172A', // Slate 900
          light: '#334155',
        },
        accent: {
          DEFAULT: '#7C3AED', // Violet
          hover: '#6D28D9',
        },
        surface: '#F8FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
