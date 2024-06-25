<script>
	export let darkMode = false;
</script>

<body class={darkMode ? 'dark-mode': 'lig-mode'}>

<h1>Hello World</h1>
</body>

<style>
    :root {
        --background-color-light: #ffffff;
        --text-color-light: #000000;
        --background-color-dark: #000000;
        --text-color-dark: #ffffff;
    }

    .dark-mode {
        background-color: var(--background-color-light);
        color: var(--text-color-light);
    }

    .lig-mode {
        background-color: var(--background-color-dark);
        color: var(--text-color-dark);
    }
</style>