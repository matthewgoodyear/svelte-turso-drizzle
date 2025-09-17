import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { user } from './schema';
import 'dotenv/config';

if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

const client = createClient({ url: process.env.DATABASE_URL });
const db = drizzle(client);

async function seed() {
	console.log('🌱 Seeding database...');

	await db.delete(user).execute();

	// await db.insert(user).values([
	// 	{ id: 1, age: 25 },
	// 	{ id: 2, age: 30 },
	// 	{ id: 3, age: 35 }
	// ]);

	console.log('✅ Seed complete');
}

seed().catch((err) => {
	console.error(err);
	process.exit(1);
});
