# Database Workflow (SvelteKit + Turso + Drizzle)

## Local development

- Init a local DB file (run this once at the very start of your project):
  ```bash
  turso dev --db-file .db/dev.db
  ```
- Use the **persistent local SQLite file**:
  ```bash
  DATABASE_URL="file:local.db"
  ```
- Apply schema changes to local DB:
  ```bash
  npm run db:push
  ```
- Open Drizzle Studio (GUI):
  ```bash
  npm run db:studio
  ```
- (Optional) Reset & re-seed local DB:
  ```bash
  npm run db:reset
  npm run db:seed
  ```

## Production (Turso)

- Use `.env.production` with your **remote Turso credentials**:
  ```env
  DATABASE_URL="libsql://<db-name>-<org>.turso.io"
  DATABASE_AUTH_TOKEN="<token>"
  ```
- Generate schema/migrations after changes are complete in `schema.ts`:
  ```bash
  npm run db:generate
  ```
- Push migrations to prod:
  ```bash
  npm run db:migrate:prod
  ```

## Key scripts

- `db:generate` → generate migration files from schema
- `db:push` → apply schema directly (local dev only)
- `db:migrate` → apply migration files (local)
- `db:migrate:prod` → apply migration files to prod (uses `.env.production`)
- `db:studio` → open Drizzle Studio
- `db:seed` → run seed script
- `db:reset` → wipe + reapply schema locally

---

**Rule of thumb**

- **Local dev** → use `push` for speed.
- **Prod** → always use `migrate` so history is tracked.
