/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4fd1c5',
          DEFAULT: '#319795',
          dark: '#2c7a7b',
        },
      },
    },
  },
  plugins: [],
}
