<script lang="ts">
	import { authClient } from '$lib/auth-client';

	let email = 'test@email.com';
	let password = 'password';

	async function handleSubmit(event: SubmitEvent) {
		event?.preventDefault();

		try {
			await authClient.signIn.email(
				{
					email,
					password
				},
				{
					onSuccess: () => {
						window.location.href = '/';
					},
					onError: (context) => {
						console.error('Sign in failed:', context.error.message);
					}
				}
			);
		} catch (error) {
			console.error('Unexpected error during sign in:', error);
		}
	}
</script>

<form class="stack" onsubmit={handleSubmit}>
	<div class="grid gap-2">
		<label class="label" for="email">Email</label>
		<input
			id="email"
			class="input"
			type="email"
			name="email"
			placeholder="Email"
			required
			bind:value={email}
		/>
	</div>

	<div class="grid gap-2">
		<div class="| flex justify-between">
			<label class="label" for="password">Password</label>
			<a href="/forgot-password" class="text-sm underline-offset-4 hover:underline"
				>Forgot your password?</a
			>
		</div>
		<input
			id="password"
			class="input"
			type="password"
			name="password"
			placeholder="Password"
			required
			bind:value={password}
		/>
	</div>

	<button class="btn w-full" type="submit">Sign in</button>
</form>
