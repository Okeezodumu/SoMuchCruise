/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",


    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      sm: '480px', md: '768px', lg: '976px', xl: '1440px'
    },
    extend: {},
    colors: {
      White: '#ffffff',
      Black: '#000',
      lightPurple: {
        100: '#EFE5FF', 200: '#BEABDC', 300: '#8D72BA', 400: '5C3998'

      },
      Green: {
        100: '#54AB6A'
      },
      Gray: {
        100: '#E5E9EB', 200: '#C6C3DA', 300: '#A79CC6'
      },
      Pink: {
        100: '#FCC0C7', 200: '#D2A0A5'
      },
    },

  },
  plugins: [],
}

