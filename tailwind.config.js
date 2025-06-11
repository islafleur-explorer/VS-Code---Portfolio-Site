/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C70039', // Deep Magenta
        secondary: '#F8A878', // Pale Orange
        accent: '#F8F32B',   // Electric Yellow
        teal: '#43AA8B',     // Teal Accent
        lime: '#90BE6D',     // Lime Green
        neutral: '#A9A9A9',  // Dark Gray (for text on darker backgrounds)
        dark: '#333333',    // Dark text
      },
      fontFamily: {
        'headline': ['Montserrat', 'sans-serif'], // Using Montserrat for both headline and body as per concept
        'body': ['Montserrat', 'sans-serif'],
      },
      spacing: {
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '48px',
      },
    },
  },
  plugins: [],
}
