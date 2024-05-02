
<script lang="ts">
    import trailerList from '$lib/data/trailers.json';
    import { page } from '$app/stores';
    import Rating from '../../../components/Rating.svelte';

    
    const movieData = JSON.parse($page.params.slug);
    //console.log(movieData);

    export let options = {
        thickness: 12,
        legend: movieData.ratingDescription,
        color: '#059669',
        bgColor: '#bbb',
        valueOverflow: true,
        textColor: '#86efac'
    };

    function search(){
       window.open(trailerList[movieData.movie_id  as keyof typeof trailerList],"_blank", "");
       //console.log(trailerList);
    }
    
</script>



<div class="pt-10">
    <div class="grid grid-cols-6 gap-4">

      
        <div class="grid grid-cols-subgrid gap-4 col-span-2">
            <div class="col-span-2 flex items-center justify-center pt-8">
                <img class="object-cover object-center w-80 h-120 max-w-full rounded-lg" src="../src/lib/images/{movieData.movie_id}.jpeg" alt={movieData.movie_name}>
   
               
            </div>
            <div class="col-span-2 flex items-center justify-center">
                <button class="p-2 rounded-full border border-slate-400 hover:bg-slate-500" on:click={search}>
                    <div class="font-movieTitle font-normal text-slate-400 text-xl">Watch Trailer ▶️</div>
                </button>

               
            </div>

        </div>    
  
        <div class="grid grid-cols-subgrid gap-4 col-span-4">
            <div class="col-span-3">
                <p class="flex font-headline font-normal text-zinc-50 text-movieReviewTitle">
                    {movieData.movie_name} 
                </p> 
           
                <p class="flex pb-1 font-movieTitle font-normal text-slate-400 text-2xl">
                    {movieData.release_date}
                </p> 

                <p class="flex pb-1  font-movieTitle font-normal text-gray-300 text-2xl">
                    🔹 {movieData.genre}
                </p>
                <p class="flex pb-1  font-movieTitle font-normal text-gray-300 text-2xl">
                    Director by {movieData.director}
                </p> 

                <p class="flex pt-6 pr-3 font-movieTitle font-normal text-slate-400 text-2xl">
                    {movieData.review}
                </p>
            </div>
            <div class="content-center pr-5 col-span-1">
                <Rating value={movieData.rating} rating={movieData.rating} bind:options={options}/>
            </div>
        </div>

        

    </div>

  
    
</div>
