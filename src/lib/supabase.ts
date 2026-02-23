import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://etbmmljggjgwkfphqdrf.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0Ym1tbGpnZ2pnd2tmcGhxZHJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEyMjY5NDMsImV4cCI6MjA4NjgwMjk0M30.WZGbtU5WzpbYTy-RifK0WxueEQU_yICOA4afjQxm0OI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface UseCase {
  id: string;
  title: string;
  description: string;
  detailed_description: string | null;
  industry: string;
  department: string;
  tools: string[];
  time_saved: string;
  complexity: 'Simple' | 'Moderate' | 'Advanced';
  icon: string;
  accent_color: 'a' | 'b' | 'c';
  created_at: string;
  published: boolean;
  // Rich content fields (optional)
  workflow_steps?: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  benefits?: string[];
  before_after?: {
    before: string[];
    after: string[];
  };
  who_its_for?: string;
  prerequisites?: string[];
  faq?: Array<{
    question: string;
    answer: string;
  }>;
  example_output?: string;
  key_metrics?: {
    [key: string]: string;
  };
}
