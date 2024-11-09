const { url } = require('inspector')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    maxWidth: {
      container: "1440px",
      contentContainer: "1140px",
      containerSmall: "1024px",
      containerxs: "768px",
  },

    extend: {
      screens: {
        sm: '435px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
      },

      colors: {
        body: '#fffff',
        primary: '#28CC25',
        secondary: '#084007',
      },

    

      fontFamily:{
        bodyFont: ["Montserrat", "sans-serif"],
        titleFont: ["Inter", "sans-serif"],
      },
    },

  },
  plugins: [],
}

