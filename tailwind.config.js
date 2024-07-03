/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",


    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: '480px', md: '768px', lg: '976px', xl: '1440px'
    },
    extend: { fill: ['hover', 'focus'], },
    colors: {
      White: '#ffffff',
      Black: '#000',
      lightPurple: {
        100: '#EFE5FF', 200: '#BEABDC', 300: '#8D72BA', 400: '#5C3998',
        500: '#09001A'
      },
      Green: {
        50: "#008000", 100: '#54AB6A', 200: '#B2FFFC', 300: '#32CD32'
      },
      Orange: {
        100: "#FFA500"
      },
      Silver: { 100: '#B1B1B1' },
      Chrome: { 100: '#B5B5B5' },
      Maroon:{100:'#800000'},
      
      Gray: {
        100: '#E5E9EB', 200: '#C6C3DA', 300: '#A79CC6'
      },
      RoyalBlue: {100: '#4169E1'},
      Teal: {100:'#008080'},
      Pink: {
        100: '#FCC0C7', 200: '#D2A0A5'
      },
      Cream:{100:'#FFF599'},
      Gold: { 100: '#FFD700', 200: '#FFFF00' },
      
    },

  },
  plugins: [],
}

