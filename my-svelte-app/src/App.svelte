<script>
	import ThemeColor from './Chapter02/ThemeColor.svelte';

	let darkMode = false;

	function toggleDarkMode() {
		darkMode = !darkMode;
	}

</script>

<div>
<button on:click={toggleDarkMode}>
	{darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
</button>

<ThemeColor {darkMode}/>
</div>

<style>

</style>