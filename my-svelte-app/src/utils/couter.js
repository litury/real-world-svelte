import { writable } from 'svelte/store';
import { onMount } from 'svelte';

export function startCount() {
	const counter = writable(0);
	
	onMount(() => {
		const interval = setInterval(() => {
			counter.update(n => n + 1);
		}, 1000);
		
		return () => clearInterval(interval);
	});
	
	return counter;
}