-- ====================================================================
-- PRAGYA SETU — ACADEMIA-INDUSTRY COLLABORATION PLATFORM
-- SIH Problem Statement ID: 26044 (Ministry of Ayush / All India Institute of Ayurveda)
-- Database Migration Script for Supabase (PostgreSQL)
-- ====================================================================

-- 1. Create Extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. ENUM TYPES
CREATE TYPE user_role AS ENUM ('student', 'industry', 'academician', 'institution');
CREATE TYPE opportunity_type AS ENUM ('internship', 'job', 'faculty_fdp', 'consultancy', 'research');
CREATE TYPE application_status AS ENUM ('submitted', 'under_review', 'interview_scheduled', 'shortlisted', 'accepted', 'rejected');
CREATE TYPE skill_category AS ENUM ('technical', 'soft_skill', 'domain_ayush', 'research_analytical');

-- 3. PROFILES TABLE
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT UNIQUE NOT NULL,
    full_name TEXT NOT NULL,
    role user_role NOT NULL DEFAULT 'student',
    avatar_url TEXT,
    organization TEXT, -- Institution name or Company name
    department TEXT,   -- e.g. Computer Science, Ayurveda Medicine, Biotechnology
    designation TEXT,  -- e.g. Final Year Student, Senior HR Manager, Associate Professor
    bio TEXT,
    location TEXT,
    is_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. SKILLS MASTER TABLE
CREATE TABLE IF NOT EXISTS public.skills (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT UNIQUE NOT NULL,
    category skill_category NOT NULL DEFAULT 'technical',
    industry_demand_level INTEGER DEFAULT 80 CHECK (industry_demand_level BETWEEN 0 AND 100),
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. STUDENT SKILL PROFILES
CREATE TABLE IF NOT EXISTS public.student_skill_profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    skill_id UUID REFERENCES public.skills(id) ON DELETE CASCADE,
    proficiency_score INTEGER NOT NULL DEFAULT 50 CHECK (proficiency_score BETWEEN 0 AND 100),
    is_verified_by_industry BOOLEAN DEFAULT FALSE,
    last_assessed_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    UNIQUE(student_id, skill_id)
);

-- 6. SKILL ASSESSMENTS TABLE
CREATE TABLE IF NOT EXISTS public.skill_assessments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    category skill_category NOT NULL,
    questions_count INTEGER DEFAULT 5,
    passing_score INTEGER DEFAULT 70,
    duration_minutes INTEGER DEFAULT 15,
    target_role TEXT,
    questions_json JSONB NOT NULL DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 7. ASSESSMENT SUBMISSIONS
CREATE TABLE IF NOT EXISTS public.assessment_submissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    assessment_id UUID REFERENCES public.skill_assessments(id) ON DELETE CASCADE,
    score INTEGER NOT NULL CHECK (score BETWEEN 0 AND 100),
    gap_analysis_json JSONB,
    completed_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 8. OPPORTUNITIES (INTERNSHIPS & JOBS & FACULTY FDPS)
CREATE TABLE IF NOT EXISTS public.opportunities (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    publisher_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    type opportunity_type NOT NULL DEFAULT 'internship',
    organization_name TEXT NOT NULL,
    description TEXT NOT NULL,
    location TEXT NOT NULL,
    is_remote BOOLEAN DEFAULT FALSE,
    stipend_or_salary TEXT,
    duration TEXT,
    deadline DATE,
    required_skills JSONB NOT NULL DEFAULT '[]'::jsonb, -- Array of skill names
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'closed', 'draft')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 9. APPLICATIONS TABLE
CREATE TABLE IF NOT EXISTS public.applications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    opportunity_id UUID REFERENCES public.opportunities(id) ON DELETE CASCADE,
    applicant_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    compatibility_score INTEGER DEFAULT 0 CHECK (compatibility_score BETWEEN 0 AND 100),
    status application_status NOT NULL DEFAULT 'submitted',
    cover_note TEXT,
    applied_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    UNIQUE(opportunity_id, applicant_id)
);

-- 10. LEARNING & CERTIFICATION PROGRAMS
CREATE TABLE IF NOT EXISTS public.learning_programs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    provider_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    provider_name TEXT NOT NULL,
    category TEXT NOT NULL,
    duration TEXT NOT NULL,
    certificate_offered BOOLEAN DEFAULT TRUE,
    skill_tags JSONB NOT NULL DEFAULT '[]'::jsonb,
    course_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 11. DIGITAL PORTFOLIOS
CREATE TABLE IF NOT EXISTS public.digital_portfolios (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id UUID UNIQUE REFERENCES public.profiles(id) ON DELETE CASCADE,
    summary TEXT,
    verified_skills JSONB DEFAULT '[]'::jsonb,
    certifications JSONB DEFAULT '[]'::jsonb,
    projects JSONB DEFAULT '[]'::jsonb,
    share_slug TEXT UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 12. INSTITUTION ANALYTICS
CREATE TABLE IF NOT EXISTS public.institution_analytics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    institution_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    academic_year TEXT NOT NULL,
    placement_rate NUMERIC(5,2) DEFAULT 0.00,
    internship_count INTEGER DEFAULT 0,
    top_skill_gaps JSONB DEFAULT '[]'::jsonb,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ====================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ====================================================================

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.student_skill_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.opportunities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.digital_portfolios ENABLE ROW LEVEL SECURITY;

-- Public read access to skills & active opportunities
CREATE POLICY "Public Read Active Opportunities" ON public.opportunities 
    FOR SELECT USING (status = 'active');

CREATE POLICY "Public Read Skills" ON public.skills 
    FOR SELECT USING (true);

-- User Profile Read/Update Policy
CREATE POLICY "Users can view all profiles" ON public.profiles 
    FOR SELECT USING (true);

-- ====================================================================
-- SEED MOCK DATA FOR SIH DEMO
-- ====================================================================

INSERT INTO public.skills (name, category, industry_demand_level, description) VALUES
('Ayush Herbology & Formulations', 'domain_ayush', 95, 'Knowledge of classical Ayush formulations and standardized extraction.'),
('Full-Stack Web Development', 'technical', 90, 'React, Next.js, Node.js, REST APIs, and modern cloud deployment.'),
('Biomedical Signal Processing', 'technical', 85, 'Analysis of ECG, EEG, and physiological sensor data.'),
('Clinical Research Protocols', 'domain_ayush', 88, 'Designing clinical trials adhering to Ayush GCP standards.'),
('AI & Machine Learning', 'technical', 92, 'Python, TensorFlow, PyTorch, predictive analytics in healthcare.'),
('Soft Skills & Communication', 'soft_skill', 90, 'Cross-functional teamwork, presentation, and technical writing.')
ON CONFLICT (name) DO NOTHING;

INSERT INTO public.opportunities (title, type, organization_name, description, location, is_remote, stipend_or_salary, duration, required_skills, status) VALUES
('AI Research Intern - Ayush Health Tech', 'internship', 'All India Institute of Ayurveda', 'Work on machine learning models for early pulse diagnosis and natural ingredient analysis.', 'New Delhi, India', true, '₹25,000 / month', '6 Months', '["AI & Machine Learning", "Biomedical Signal Processing", "Ayush Herbology & Formulations"]', 'active'),
('Full-Stack Developer (AyurTech Portal)', 'job', 'AyurSoft Technologies', 'Build scalable cloud platforms connecting clinical trial data with modern mobile applications.', 'Bengaluru, India', false, '₹8.5 - ₹12.0 LPA', 'Full Time', '["Full-Stack Web Development", "AI & Machine Learning"]', 'active'),
('Faculty Development Program (FDP): Smart Ayush Automation', 'faculty_fdp', 'Ministry of Ayush Training Center', '14-day intensive FDP for academicians on integrating digital sensors and IoT in Ayurvedic research.', 'Jaipur, Rajasthan', false, 'Grant Supported (Free)', '2 Weeks', '["Biomedical Signal Processing", "Clinical Research Protocols"]', 'active');
