# Supabase Setup Instructions

## Run SQL to create tables and seed data

1. Go to https://supabase.com/dashboard/project/etbmmljggjgwkfphqdrf
2. Click on "SQL Editor" in the left sidebar
3. Click "New Query"
4. Copy the contents of `supabase-setup.sql` and paste into the editor
5. Click "Run" to execute

This will:
- Create the `use_cases` table
- Enable Row Level Security (RLS)
- Create a policy for public read access
- Seed 27 realistic use cases across 7 industries

## Verify Setup

After running the SQL, you can verify the data:

```sql
SELECT COUNT(*) FROM use_cases;
SELECT DISTINCT industry FROM use_cases;
SELECT DISTINCT department FROM use_cases;
```

You should see:
- 27 total use cases
- 7 industries (Financial Services, Healthcare, Legal, Retail, Manufacturing, Technology, Education, Government)
- 8 departments (Sales, Marketing, Engineering, HR, Finance, Operations, Customer Support, Legal, Executive)
