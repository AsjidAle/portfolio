/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}", // If using Next.js App Router (v13+)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
