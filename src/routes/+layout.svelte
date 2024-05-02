

<div class="grid grid-cols-5 gap-4">
    <div class="grid grid-cols-subgrid gap-4 col-span-2">
    <a href="/"> <p class="font-headline font-bold text-headline">🎬</p>  </a>
    </div>

    <div class="grid grid-cols-subgrid gap-4 col-span-3 ">
        <div class="flex items-center justify-center">
            <p class="flex items-center font-headline font-bold text-headline">Shott</p> 
        </div>
       
    </div>
</div>

<script>
    import "../app.css";
</script>

<body class="flex flex-col min-h-screen">
    <slot />
</body>


<footer class="mt-auto">
            <div class="flex items-center justify-center pt-10 ">
                <p class="flex items-center font-movieTitle font-normal text-xl">Read it first on &nbsp;</p> 
                <p class="flex items-center font-headline font-bold text-xl"> Shott⚡</p>
                
            </div>
           
</footer>


