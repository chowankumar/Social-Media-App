/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'calc-100vh-70px': 'calc(100vh - 70px)',
      },
      boxShadow: {
        custom: '0px 0px 15px 1px rgba(0, 0, 0, 0.09)',
      },
    },
  },
  plugins: [],
}

 

