-- Add new columns for rich content to use_cases table

ALTER TABLE use_cases
ADD COLUMN IF NOT EXISTS workflow_steps JSONB,
ADD COLUMN IF NOT EXISTS before_after JSONB,
ADD COLUMN IF NOT EXISTS example_output JSONB,
ADD COLUMN IF NOT EXISTS key_benefits JSONB,
ADD COLUMN IF NOT EXISTS personas TEXT,
ADD COLUMN IF NOT EXISTS prerequisites JSONB,
ADD COLUMN IF NOT EXISTS faq JSONB;

COMMENT ON COLUMN use_cases.workflow_steps IS 'Array of step objects with step number, title, description, icon';
COMMENT ON COLUMN use_cases.before_after IS 'Object with before and after arrays showing improvements';
COMMENT ON COLUMN use_cases.example_output IS 'Object with type, title, content (HTML), and description of output';
COMMENT ON COLUMN use_cases.key_benefits IS 'Array of benefit objects with metric and description';
COMMENT ON COLUMN use_cases.personas IS 'Description of ideal users/organizations';
COMMENT ON COLUMN use_cases.prerequisites IS 'Array of technical prerequisites needed';
COMMENT ON COLUMN use_cases.faq IS 'Array of FAQ objects with question and answer';
