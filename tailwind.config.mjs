/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0D6EFD',
        'secondary': '#6c757d',
        /* Wedding Theme */
        'bg-color': '#f6f8f7',
        'text-color': '#333333',
        'subtitle-color': '#92ada6',
        'accent-color': '#92ada6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
        script: ['Dancing Script', 'cursive'],
      }
    },
  },
  plugins: [],
}
