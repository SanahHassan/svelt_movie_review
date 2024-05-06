<script lang="ts">
    import {goto} from "$app/navigation";
    let searchInput = "";

    function search(){
       goto("/search/" +searchInput);
    }
</script>

<div class="p-3 flex items-center justify-center">
    <input bind:value={searchInput} type="text" placeholder="Search by name or genre..."
    class="h-8 text-slate-600 focus:text-slate-600 focus:font-movieTitle font-movieTitle rounded-full p-5  border  focus:border-gray-300 focus:border-teal focus:ring-0 focus:outline-none bg-gray-300 focus:bg-gray-200"/>

    {#if searchInput}
    <button on:click={search}><div class="text-2xl">🔍</div></button>
    {/if}
    
</div>

