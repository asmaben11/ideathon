/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#CDDAD5',
        'primary': '#1B3837',
        'secondary': '#027A48',
      },
      fontFamily: {
        'programme': ['Programme', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
