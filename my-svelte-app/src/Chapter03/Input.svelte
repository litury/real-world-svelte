<script>
	export let name = "John";
</script>

<input class="input" bind:value={name}/>
<p>Hello {name}!</p>

<style>
    .input {
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 8px;
    }
</style>