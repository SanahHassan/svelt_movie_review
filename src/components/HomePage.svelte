<script>
export let movies;
//console.log(movies);
import MoviePoster from "./MoviePoster.svelte";
</script>

<div class="grid grid-cols-cols250">
    {#each movies as eachMovie}
    <MoviePoster {eachMovie} />
    {/each}
</div>


