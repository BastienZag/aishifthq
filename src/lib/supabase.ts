import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

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
}
