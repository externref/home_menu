<script lang="ts">
	import moment from 'moment';
	import Search from './Search.svelte';
	function setTime() {
		time = moment().format('HH:mm');
		date = moment().format('dddd, Do MMMM YYYY');
	}
	let time: string = moment().format('HH:mm');
	let date: string = moment().format('dddd, Do MMMM YYYY');
	let clear: number;
	$: {
		clearInterval(clear), (clear = setInterval(setTime, 1000));
	}
</script>

<div class=" text-center">
	<div id="time" style="font-size: 100px" class="text-yellow-200">
		{time}
	</div>
	<div class=" text-yellow-200">
		{date}
	</div>
	<Search />
</div>
