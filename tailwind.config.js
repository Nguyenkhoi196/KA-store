/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'media',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './node_modules/flowbite/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'fira-sans': ['Fira Sans', 'sans-serif'],
        'space-mono': ['Space Mono', 'sans-serif'],
        roboto:['Roboto', 'sans-serif']
      },
      colors: {
        primary: '#ffffff',
        secondary: '#9ae29b',
        secondaryLight: '#90EE90',
        secondaryDark: '#228B22',
        tertiary: '#000',
        danger: '#dc3545',
        warning: '#ffc107',
      },
      boxShadow: {
        inner: 'inset 1px 1px 5px 0 rgba(0,0,0,0.2)',
        card: '0px 15px 35px rgba(13, 21, 55, 0.08)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')({
      charts: true,
    }),
  ],
}
