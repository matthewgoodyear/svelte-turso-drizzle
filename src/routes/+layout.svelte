<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head></svelte:head>

<main class="py-24">
	<div class="wrapper wrapper-2xl">
		{@render children?.()}
	</div>
</main>
