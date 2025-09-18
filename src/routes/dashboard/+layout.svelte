<script lang="ts">
	let { data, children } = $props();
</script>

<div class="stack stack-8">
	<h1 class="text-4xl font-bold">Dashboard Layout</h1>
	<div class="flex items-center gap-2">
		This is a protected layout:
		<div class="rounded-md border bg-card p-1 font-mono text-card-foreground">
			routes/dashboard/+layout.svelte
		</div>
	</div>

	<div>
		User data from layout server loader
		<pre>{JSON.stringify(data.user, null, 2)}</pre>
	</div>

	<a href="/" class="btn w-fit">Back to Home</a>

	{@render children()}
</div>
