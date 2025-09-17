<script lang="ts">
	import Header from '$/components/header.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head></svelte:head>

<Header />

<main class="py-24">
	<div class="wrapper">
		{@render children?.()}
	</div>
</main>
