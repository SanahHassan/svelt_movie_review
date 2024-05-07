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
        'movieTitle':'Roboto, sans-serif',
        'searchBar':'Roboto, Helvetica, Arial, sans-serif',
        'moviePoster':'Fantasy, sans-serif',
      },
      fontSize:{
        'headline':'4.5rem',
        'movieReviewTitle':'5rem'
      },
      gridTemplateColumns: {
        'cols250': 'repeat(auto-fit,minmax(250px, 1fr))'
        }
    },
  },
  plugins: [],
}

