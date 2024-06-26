<script lang="ts">
	import B from './B.svelte';

	let data: {value: number} = {value: 100};
</script>

<B value={data} />