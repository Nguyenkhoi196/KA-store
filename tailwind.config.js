/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#9ae29b",
        tertiary: "#000",
        danger: "#dc3545",
        warning: "#ffc107"

      }
    },
  },
  plugins: [],
}
