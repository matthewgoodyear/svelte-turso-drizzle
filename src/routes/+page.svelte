<script lang="ts">
	import { authClient } from '$lib/auth/client';

	const session = authClient.useSession();
</script>

<main>
	{#if $session.isPending}
		<p>Loading...</p>
	{:else if $session.data}
		<p>Logged in as {$session.data.user.email}</p>

		<div>
			More data from auth client:
			<pre>{JSON.stringify($session.data.user, null, 2)}</pre>
		</div>
	{:else}
		<p>You are not logged in.</p>
		<a href="/login" class="btn">Login</a>
	{/if}
</main>
