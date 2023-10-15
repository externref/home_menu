<script lang="ts">
	import { getTiles } from './getTiles';
	import Tile from './Tile.svelte';
	let tiles = getTiles();
</script>

<div class="grid grid-cols-2 gap-2" style="width:max-content">
	{#each tiles as tile, index}
		<Tile tileData={tile} roundSide={index % 2 ? 'r' : 'l'} />
	{/each}
	<!-- <div
    class="bg-white hover:bg-gray-900 hover:text-white rounded-l-xl rounded-r-full py-3 pl-3 pr-5 flex font-mono font-semibold text-justify"
    >
 New
    </div> -->
</div>
