/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto Variable', 'sans-serif'],
        'cherry-swash': ['Cherry Swash', 'serif'],
        'dancing-script': ['Dancing Script', 'cursive'],
      },
    },
  },
}

