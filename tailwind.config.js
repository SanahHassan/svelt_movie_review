/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundColor:{
        'dark':'#2c3440'
      },
      fontFamily:{
        'headline': 'TiemposHeadlineWeb-Bold, Georgia, serif',
        'movieTitle':'Graphik-Semibold-Web, sans-serif'
      },
      fontSize:{
        'headline':'4.5rem',
        'movieReviewTitle':'5rem'
      }
    },
  },
  plugins: [],
}

