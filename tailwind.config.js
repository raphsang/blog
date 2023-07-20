module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '2/3': '66.666667%',
      },
      container: {
        center: true,
      },
      colors: {
        'regal-blue': '#243c5a',
        'bgg-gray': '#111827',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],

};
