/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3238f2', // This will create bg-primary, text-primary, etc.
      },
    },
  },
  plugins: [],
};