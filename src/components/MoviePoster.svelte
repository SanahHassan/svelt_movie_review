<script>
    export let eachMovie;
</script>

<div >
    <div >
   <a class="flex items-center justify-center" href={"/reviews/" +JSON.stringify(eachMovie)}>
    <img class="flex items-center justify-center object-cover object-center w-60 h-80 max-w-full rounded-lg" src="../src/lib/images/{eachMovie.movie_id}.jpeg" alt={eachMovie.movie_name}>
    </a> 
</div>

    <div >
        <p class="flex justify-center items-center font-movieTitle font-normal text-2xl">{eachMovie.movie_name}</p> 
    </div>

    <div >
        <p class="flex justify-center items-center font-normal text-xl">{eachMovie.release_date}</p> 
    </div>
  
</div>
