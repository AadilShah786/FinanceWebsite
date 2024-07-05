/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:  {
      screens: {
        'xs': {'max': '480px'}, // Define custom max screen size for xs
        
      },
    },
  },
  plugins: [],
}

