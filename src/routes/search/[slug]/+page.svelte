

<script lang="ts">
    import HomePage from '../../../components/HomePage.svelte';
    import movieList from '$lib/data/movieData.json';
    import Search from '../../../components/Search.svelte';
    export let allMovies = movieList.movies;

    import { page } from '$app/stores';
    export let movies: any[] = [];
    export let searchParam = "";
    
    $:{
        movies = [];
        searchParam = $page.params.slug.toLowerCase();
        allMovies.forEach(function(item){
if(item.genre.toLowerCase().includes(searchParam) || item.movie_name.toLowerCase().includes(searchParam)){
    movies.push(item);
}


    });

    console.log(movies);
    }
  

</script>

<section>
    <Search />
    
    {#if movies.length > 0}
    <p class="flex justify-center pb-4 pl-6 font-movieTitle font-normal text-slate-400 text-2xl">
        Search results for "{searchParam}"
    </p> 
   
    <HomePage {movies}/>
    {:else}
    <p class="flex justify-center pt-6 pb-4 pl-6 font-movieTitle font-normal text-slate-400 text-2xl">
        Oops we could not find that!
    </p>
    {/if}
    <a class="flex justify-center pt-20" href="/"> <p class="justify-center font-headline font-bold text-2xl">Back Home🎬</p>  </a>
</section>
