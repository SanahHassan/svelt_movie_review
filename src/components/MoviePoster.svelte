<script>
    export let eachMovie;
</script>

<a class="flex items-center justify-center" href={"/reviews/" +JSON.stringify(eachMovie)}>
<div >
    <div >
  
    <img class="flex items-center justify-center object-cover object-center w-60 h-80 max-w-full rounded-lg" src="/images/{eachMovie.movie_id}.jpeg" alt={eachMovie.movie_name}>
  
    </div>

    <div >
        <p class="flex justify-center items-center font-moviePoster font-normal text-2xl hover:text-slate-100">{eachMovie.movie_name}</p> 
    </div>

    <div >
        <p class="flex justify-center items-center font-normal text-xl hover:text-slate-100">{eachMovie.release_date}</p> 
    </div>
  
</div>
</a> 
