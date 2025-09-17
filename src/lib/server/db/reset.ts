import { execSync } from 'node:child_process';

execSync('rm -f local.db');
execSync('turso dev --db-file local.db & sleep 2');

// Run migrations
execSync('npx drizzle-kit migrate');

// Run seed
execSync('tsx src/lib/server/db/seed.ts');

console.log('✅ Database reset and seeded!');
