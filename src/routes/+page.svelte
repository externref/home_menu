<script lang="ts">
	import Clock from '$lib/Clock.svelte';
	import TaskContainer from '$lib/TaskContainer.svelte';
	import TileContainer from '$lib/TileContainer.svelte';
</script>

<svelte:head>
	<title>home</title>
</svelte:head>

<div class=" grid grid-cols-3">
	<TileContainer /><Clock />
	<TaskContainer />
</div>
