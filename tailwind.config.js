module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        beige: '#f5ede6',
        dark: '#2d2a26',
        gold: '#c9a063',
        accent: '#3b6ca8',
        light: '#f9f9f9',
      },
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}; 