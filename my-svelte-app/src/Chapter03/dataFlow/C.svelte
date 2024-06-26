<script>
	import D from './D.svelte';
	let data = {value: 100};
</script>

<D bind:value={data} />