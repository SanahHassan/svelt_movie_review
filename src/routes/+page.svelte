
<script>
    import movieList from '$lib/data/movieData.json';
    import HomePage from '../components/HomePage.svelte';
    import Search from '../components/Search.svelte';
    export let movies = movieList.movies;
</script>

<section>
    <Search />
    <HomePage {movies}/>
</section>
