import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '$lib/server/db/index';
import { sveltekitCookies } from 'better-auth/svelte-kit';
import { getRequestEvent } from '$app/server';

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: 'sqlite'
	}),
	plugins: [sveltekitCookies(getRequestEvent)],
	emailAndPassword: {
		enabled: true,
		autoSignIn: false,
		requireEmailVerification: false
	}
});
