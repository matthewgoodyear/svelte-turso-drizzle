import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
export * from './auth-schema';

export const task = sqliteTable('task', {
	id: text('id').primaryKey(),
	createdAt: integer('created_at', { mode: 'timestamp' }).defaultNow().notNull(),
	updatedAt: integer('updated_at', { mode: 'timestamp' })
		.defaultNow()
		.$onUpdate(() => /* @__PURE__ */ new Date())
		.notNull()
});
