import { dev } from '$app/environment';
import { env } from '$env/dynamic/private';

import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from './schema';
// import 'dotenv/config';

if (!dev && !env.DATABASE_AUTH_TOKEN) throw new Error('DATABASE_AUTH_TOKEN is not set');

const client = createClient({
	url: env.DATABASE_URL,
	...(env.DATABASE_AUTH_TOKEN ? { authToken: env.DATABASE_AUTH_TOKEN } : {})
});

export const db = drizzle(client, { schema });
