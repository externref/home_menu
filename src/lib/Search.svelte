<script lang="ts">
	async function checkEnter(event: KeyboardEvent) {
		if (event.key == 'Enter') {
			// @ts-ignore
			window.location.href = `https://google.com/search?q=${encodeURI(event.target.value)}`;
		}
	}
</script>

<div>
	<input
		on:keypress={checkEnter}
		class="rounded-full mt-5 px-5 py-1 font-sans w-96 border-orange-300 border-r-8"
		placeholder="Search"
	/>
</div>
