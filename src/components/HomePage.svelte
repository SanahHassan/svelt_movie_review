<script>
export let movies;
//console.log(movies);
import MoviePoster from "./MoviePoster.svelte";
</script>

<div class="movie-grid">
    {#each movies as eachMovie}
    <MoviePoster {eachMovie} />
    {/each}
</div>

<style>
.movie-grid{
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(250px, 1fr) );
}
</style>

