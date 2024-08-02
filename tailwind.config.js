/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-black': '#151C24',
        'custom-red': '#C23535',
        'custom-dark-red': '#A52A2A',
        'custom-gray': '#818498',
        'custom-light-gray': '#A5A5A5',
        'custom-purple': '#8A489C',
        'custom-dark-purple': '#6e3e7e',
        'custom-gray-2': '#727272',
      },
    },
  },
  plugins: [],
}

