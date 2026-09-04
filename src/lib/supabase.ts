// Pragya Setu - Supabase REST API & Helper Client
// Connected to Project Reference: dithgsyoglxizncutipd

export interface Profile {
  id: string;
  email: string;
  full_name: string;
  role: 'student' | 'industry' | 'academician' | 'institution';
  avatar_url?: string;
  organization?: string;
  department?: string;
  designation?: string;
  is_verified: boolean;
}

export interface Skill {
  id: string;
  name: string;
  category: 'technical' | 'soft_skill' | 'domain_ayush' | 'research_analytical';
  industry_demand_level: number;
  description: string;
}

export interface Opportunity {
  id: string;
  title: string;
  type: 'internship' | 'job' | 'faculty_fdp' | 'consultancy' | 'research';
  organization_name: string;
  description: string;
  location: string;
  is_remote: boolean;
  stipend_or_salary: string;
  duration: string;
  deadline?: string;
  required_skills: string[];
  status: 'active' | 'closed' | 'draft';
  created_at: string;
}

export interface Application {
  id: string;
  opportunity_id: string;
  applicant_id: string;
  compatibility_score: number;
  status: 'submitted' | 'under_review' | 'interview_scheduled' | 'shortlisted' | 'accepted' | 'rejected';
  applied_at: string;
}

export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://dithgsyoglxizncutipd.supabase.co";
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpdGhnc3lvZ2x4aXpuY3V0aXBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg1NDk2NTMsImV4cCI6MjEwNDEyNTY1M30.nY5n6mC5Q4LGAAl7kVeTd4G7mPrQc3OtV8n_VZL09oo";

// Helper function to query Supabase REST API directly
export async function supabaseFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T | null> {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/${endpoint}`, {
      ...options,
      headers: {
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    if (!res.ok) {
      console.warn(`Supabase API query warning [${res.status}]: ${await res.text()}`);
      return null;
    }

    return await res.json();
  } catch (err) {
    console.error("Supabase connection error:", err);
    return null;
  }
}
