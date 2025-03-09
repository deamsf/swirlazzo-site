/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'swirlazzo': {
          pink: '#ff8fa3',
          teal: '#4a9ca8',
          lightTeal: '#7fd1d9',
          cream: '#ffe5d0',
          coral: '#ffada7'
        }
      },
      fontFamily: {
        caveat: ['Caveat', 'cursive'],
        'noto-sans': ['Noto Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}