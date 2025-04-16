/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0062FF',
        whitetheme: '#E2E2EA',
        subtitle: '#D0D0DA',
        contentbg:"#F2F3F7"
      }
    },
  },
  plugins: [],
}