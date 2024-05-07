<script lang="ts">
    import {goto} from "$app/navigation";
    let searchInput = "";

    function search(){
       goto("/search/" +searchInput);
    }
</script>

<div class="p-3 flex items-center justify-center">
    <input bind:value={searchInput} type="text" placeholder="Search by name or genre..."
    class="text-xl focus:text-xl text-slate-500 focus:text-slate-500 focus:font-searchBar font-searchBar rounded-full p-3  border  focus:border-gray-300 focus:border-teal focus:ring-0 focus:outline-none bg-gray-300 focus:bg-gray-200"/>

    {#if searchInput}
    <button on:click={search}><div class="text-3xl">🔍</div></button>
    {/if}
    
</div>

