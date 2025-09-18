// https://svelte.dev/docs/kit/types#app.d.ts
import type { User, Session } from 'better-auth';

declare global {
	namespace App {
		// interface Error {}

		interface Locals {
			user: User | null;
			session: Session | null;
		}

		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
