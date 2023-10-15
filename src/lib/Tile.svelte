<script lang="ts">
	import type { TileData } from './$types';

	export let tileData: TileData;
	export let roundSide: string;
</script>

{#if 0}
	<div class="border-r-2 border-l-2" />
{/if}
<a href={tileData.url} class="rounded-l-full"
	><div
		class="bg-gray-300 hover:bg-gray-900 hover:text-white rounded-{roundSide}-full py-3 pl-3 pr-10 flex font-mono font-semibold border-{roundSide ==
		'r'
			? 'l'
			: 'r'}-2 border-orange-300"
	>
		<i class={tileData.favicon} />&nbsp{tileData.name}
	</div></a
>
