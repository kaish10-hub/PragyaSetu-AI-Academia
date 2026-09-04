"use client";

import React, { useState } from "react";
import { 
  Database, 
  Copy, 
  Check, 
  Terminal, 
  ExternalLink, 
  ShieldCheck, 
  Key, 
  CheckCircle2, 
  Code2,
  Layers
} from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

const sqlMigrationContent = `-- PRAGYA SETU — SIH 26044 SUPABASE MIGRATION SCRIPT
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ENUM TYPES
CREATE TYPE user_role AS ENUM ('student', 'industry', 'academician', 'institution');
CREATE TYPE opportunity_type AS ENUM ('internship', 'job', 'faculty_fdp', 'consultancy', 'research');
CREATE TYPE application_status AS ENUM ('submitted', 'under_review', 'interview_scheduled', 'shortlisted', 'accepted', 'rejected');

-- PROFILES TABLE
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT UNIQUE NOT NULL,
    full_name TEXT NOT NULL,
    role user_role NOT NULL DEFAULT 'student',
    organization TEXT,
    department TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- SKILLS MASTER TABLE
CREATE TABLE IF NOT EXISTS public.skills (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT UNIQUE NOT NULL,
    industry_demand_level INTEGER DEFAULT 80
);

-- OPPORTUNITIES TABLE
CREATE TABLE IF NOT EXISTS public.opportunities (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    publisher_id UUID REFERENCES public.profiles(id),
    title TEXT NOT NULL,
    type opportunity_type NOT NULL DEFAULT 'internship',
    organization_name TEXT NOT NULL,
    description TEXT NOT NULL,
    location TEXT NOT NULL,
    stipend_or_salary TEXT,
    required_skills JSONB NOT NULL DEFAULT '[]'::jsonb
);

-- SEED DEMO DATA
INSERT INTO public.skills (name, industry_demand_level) VALUES
('Ayush Herbology & Formulations', 95),
('Full-Stack Web Development', 90),
('Biomedical Signal Processing', 85)
ON CONFLICT (name) DO NOTHING;`;

export function MigrationGuideModal() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(sqlMigrationContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/15 pb-6">
        <div>
          <div className="flex items-center gap-3 mb-1.5">
            <span className="p-2 rounded-xl bg-indigo-500/25 border border-indigo-500/50 text-indigo-300 shadow-sm">
              <Database className="w-6 h-6" />
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Supabase Database Migration & Environment Setup
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-300 font-medium">
            Execute the pre-built PostgreSQL migration schema on your Supabase project dashboard or CLI.
          </p>
        </div>

        <button
          onClick={handleCopy}
          className="px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#5E6AD2] hover:bg-[#6872D9] shadow-accent-glow flex items-center gap-2 shrink-0"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          <span>{copied ? "Copied SQL Script!" : "Copy Migration SQL"}</span>
        </button>
      </div>

      {/* 3 Step Execution Guide */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <SpotlightCard className="p-5 border border-white/20 bg-[#0A0A0E]/95 rounded-2xl space-y-2 shadow-lg">
          <div className="flex items-center gap-2.5 text-sm font-mono text-indigo-300 font-bold">
            <span className="w-6 h-6 rounded-full bg-[#5E6AD2]/40 flex items-center justify-center text-xs font-bold text-white">1</span>
            <span>Open Supabase SQL Editor</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            Navigate to your Supabase project dashboard and click on <strong className="text-white font-semibold">SQL Editor</strong> in the left sidebar menu.
          </p>
        </SpotlightCard>

        <SpotlightCard className="p-5 border border-white/20 bg-[#0A0A0E]/95 rounded-2xl space-y-2 shadow-lg">
          <div className="flex items-center gap-2.5 text-sm font-mono text-indigo-300 font-bold">
            <span className="w-6 h-6 rounded-full bg-[#5E6AD2]/40 flex items-center justify-center text-xs font-bold text-white">2</span>
            <span>Paste & Execute Migration</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            Paste the copied SQL script into the query editor and click <strong className="text-white font-semibold">Run</strong> to generate all tables & RLS policies.
          </p>
        </SpotlightCard>

        <SpotlightCard className="p-5 border border-white/20 bg-[#0A0A0E]/95 rounded-2xl space-y-2 shadow-lg">
          <div className="flex items-center gap-2.5 text-sm font-mono text-indigo-300 font-bold">
            <span className="w-6 h-6 rounded-full bg-[#5E6AD2]/40 flex items-center justify-center text-xs font-bold text-white">3</span>
            <span>Configure .env.local</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            Copy `NEXT_PUBLIC_SUPABASE_URL` & `NEXT_PUBLIC_SUPABASE_ANON_KEY` into your local `.env.local` file.
          </p>
        </SpotlightCard>
      </div>

      {/* Code Window Preview */}
      <SpotlightCard className="p-0 border border-white/10 bg-[#060609] rounded-2xl overflow-hidden shadow-2xl">
        <div className="px-4 py-3 border-b border-white/[0.08] bg-[#0A0A0E] flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono text-xs text-gray-400">
            <Terminal className="w-3.5 h-3.5 text-[#7B88ED]" />
            <span>supabase/migrations/20260905000000_sih26044_pragya_setu.sql</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            Ready to Copy
          </span>
        </div>

        <pre className="p-5 font-mono text-xs text-gray-300 leading-relaxed overflow-x-auto max-h-96">
          <code>{sqlMigrationContent}</code>
        </pre>
      </SpotlightCard>
    </div>
  );
}
