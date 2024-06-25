<script>
	const color = 'red';
	const width = '4rem';
	const height = '4rem';

	let blockColor = true;

</script>
<div
		style:background-color={color}
		style:width={width}
		style:height={height}
/>

<div style="
	background-color: #646cff;
	width: 4rem;
	height: 4rem"
/>



<div class="{blockColor ? 'test' : 'test2'}"/>

<button class="button" on:click={() => blockColor = !blockColor}/>

{blockColor ? 'Change to white' : 'Change to red'}


<style>
    .test {
        background-color: #ff646c;
        width: 4rem;
        height: 4rem;
    }

    .test2 {
        background-color: #ffffff;
        width: 4rem;
        height: 4rem;
    }

	.button {
		background-color: #646cff;
		color: white;
		border: none;
		padding:1rem;
		border-radius: 0.25rem;
		cursor: pointer;
	}
</style>