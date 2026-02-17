-- Schema extension for rich use case content
-- Run this after the initial setup

ALTER TABLE use_cases 
ADD COLUMN IF NOT EXISTS workflow_steps JSONB,
ADD COLUMN IF NOT EXISTS benefits TEXT[],
ADD COLUMN IF NOT EXISTS before_after JSONB,
ADD COLUMN IF NOT EXISTS who_its_for TEXT,
ADD COLUMN IF NOT EXISTS prerequisites TEXT[],
ADD COLUMN IF NOT EXISTS faq JSONB,
ADD COLUMN IF NOT EXISTS example_output TEXT,
ADD COLUMN IF NOT EXISTS key_metrics JSONB;

-- Add indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_use_cases_industry ON use_cases(industry);
CREATE INDEX IF NOT EXISTS idx_use_cases_department ON use_cases(department);
CREATE INDEX IF NOT EXISTS idx_use_cases_complexity ON use_cases(complexity);

COMMENT ON COLUMN use_cases.workflow_steps IS 'Array of {step: number, title: string, description: string}';
COMMENT ON COLUMN use_cases.benefits IS 'Array of benefit statements';
COMMENT ON COLUMN use_cases.before_after IS '{before: string[], after: string[]}';
COMMENT ON COLUMN use_cases.who_its_for IS 'Target persona description';
COMMENT ON COLUMN use_cases.prerequisites IS 'Array of prerequisite requirements';
COMMENT ON COLUMN use_cases.faq IS 'Array of {question: string, answer: string}';
COMMENT ON COLUMN use_cases.example_output IS 'HTML or description of example output';
COMMENT ON COLUMN use_cases.key_metrics IS 'Object with metric keys and values';
