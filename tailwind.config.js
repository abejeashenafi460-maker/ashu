/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "col-3": "#f0f4f8",
        "col-4": "#1e3a8a",
      },
      spacing: {
        '9': '2.25rem',
        '11': '2.75rem',
      },
    },
  },
  plugins: [],
};
