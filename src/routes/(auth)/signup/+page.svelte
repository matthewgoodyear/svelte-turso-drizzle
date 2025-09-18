<script lang="ts">
	import { authClient } from '$lib/auth/client';

	let name = $state<string>('Joe Blogger');
	let email = $state<string>('test@email.com');
	let password = $state<string>('password');
	let errorMessage = $state<string | null>(null);

	async function handleSubmit(event: SubmitEvent) {
		event?.preventDefault();

		try {
			await authClient.signUp.email(
				{
					name,
					email,
					password
				},
				{
					onSuccess: () => {
						window.location.href = '/login?account-created=true';
					},
					onError: (context) => {
						console.error('Sign up failed:', context.error.message);
						errorMessage = context.error.message;
					}
				}
			);
		} catch (error) {
			console.error('Unexpected error during sign up:', error);
		}
	}
</script>

{#if errorMessage}
	<p class="text-sm text-red-500">{errorMessage}</p>
{/if}

<form class="stack" onsubmit={handleSubmit}>
	<div class="grid gap-2">
		<label class="label" for="name">Name</label>
		<input
			id="name"
			class="input"
			type="text"
			name="name"
			placeholder="Joe Bloggs"
			required
			bind:value={name}
		/>
	</div>

	<div class="grid gap-2">
		<label class="label" for="email">Email</label>
		<input
			id="email"
			class="input"
			type="email"
			name="email"
			placeholder="joe@email.com"
			required
			bind:value={email}
		/>
	</div>

	<div class="grid gap-2">
		<label class="label" for="password">Password</label>
		<input
			id="password"
			class="input"
			required
			type="password"
			name="password"
			minlength="8"
			maxlength="32"
			bind:value={password}
		/>
	</div>

	<button class="btn | w-full" type="submit">Sign up</button>
</form>
