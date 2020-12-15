module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "purple-logo": "#E9327C",
        "dark-blue-logo": "#001A49",
        "blue-logo": "#1DACE3",
      },
      height: (theme) => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
        "screen/hero": "90vh",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
