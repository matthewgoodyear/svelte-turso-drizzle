<script lang="ts">
	import { authClient } from '$lib/auth/client';

	const session = authClient.useSession();
</script>

<header class="py-12">
	<div class="wrapper repel">
		<nav>
			<ul class="cluster">
				<li><a href="/">Home</a></li>
				<li><a href="/dashboard">App</a></li>
			</ul>
		</nav>

		<div class="cluster">
			{#if $session.data}
				<button
					class="btn"
					onclick={async () => {
						await authClient.signOut({
							fetchOptions: {
								onSuccess: () => {
									window.location.href = '/login';
								},
								onError: (context) => {
									console.error('Sign out failed:', context.error.message);
								}
							}
						});
					}}>Logout</button
				>
			{:else}
				<a href="/login" class="btn">Login</a>
				<a href="/signup" class="btn">Register</a>
			{/if}
		</div>
	</div>
</header>
