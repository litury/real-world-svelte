<script lang="ts">
    export let height: {value: number};
    setInterval(() => console.log('A:', height), 1000);
</script>

<p>{height.value}</p>

