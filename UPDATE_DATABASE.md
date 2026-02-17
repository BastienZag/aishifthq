# Database Update Instructions

The use case descriptions and tools have been updated to feature OpenClaw. To apply these changes to the Supabase database, run the SQL migration below.

## Option 1: Supabase Dashboard (Recommended)

1. Go to: https://etbmmljggjgwkfphqdrf.supabase.co
2. Navigate to the SQL Editor
3. Run the migration file: `migration_openclaw.sql`

## Option 2: Supabase CLI

```bash
# Link to remote project (requires service_role key)
supabase link --project-ref etbmmljggjgwkfphqdrf

# Run the migration
supabase db push --db-url "postgresql://..."
```

## Option 3: Fresh Seed

If you want to completely recreate the use_cases table:

1. Drop and recreate: Run the full `supabase-setup.sql` file
2. This will delete existing data and create fresh records with OpenClaw mentions

## What Changed

- ✅ Added "OpenClaw" to the tools array for all 28 use cases
- ✅ Updated descriptions to mention OpenClaw agents
- ✅ Enhanced detailed_descriptions with OpenClaw orchestration context
- ✅ Updated website UI to feature OpenClaw (already deployed)

## Migration File

The migration SQL is in `migration_openclaw.sql` — it updates all existing use case records in place.
