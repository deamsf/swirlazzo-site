/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
      },
      colors: {
        'swirlazzo': {
        pink: '#ff8fa3',
          teal: '#4a9ca8',
          lightTeal: '#7fd1d9',
          cream: '#ffe5d0',
          coral: '#ffada7', 
          
        //  pink: '#e63950',   
        //  teal: '#4b9ea9',       
        //  lightTeal: '#85d5df',  
        //  cream: '#ffe8d5',     
        //  coral: '#ffb1ac',     */ 

        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'swirl-preheader': 'url("/swirl-preheader.svg")',
      },
    },
  },
  plugins: [],
}