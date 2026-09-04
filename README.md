# Team ALGO Project — Pragya Setu

> **Academia-Industry Collaboration Platform for Skill Mapping, Internships & Placement**  
> *Under Ministry of Ayush & All India Institute of Ayurveda (AIIA)*

---

## 📌 Project Overview

**Pragya Setu** ("Bridge of Wisdom") is a centralized, AI-assisted platform engineered to bridge the gap between academic education and industry expectations. The portal provides an end-to-end digital ecosystem connecting **Students**, **Industry Recruiters**, **Academicians**, and **Institutions** to streamline skill assessment, internship allocation, placement readiness, faculty development, and data-driven policymaking.

---

## ⚙️ Core Platform Features

- **Skill Assessment & Gap Profiling**: Students take domain-specific and technical questionnaires. The platform dynamically maps individual scores against live industry demand benchmarks.
- **Match-Engine Marketplace**: Industries publish internships, entry-level jobs, and apprenticeships. The platform computes an automated **Skill Compatibility Match Score %** for every candidate.
- **Faculty Development Portal (FDP)**: Dedicated workspace for academicians to access industrial exposure workshops, consultancy RFPs, and joint research grants.
- **Institutional & Ministry Analytics**: Executive dashboards providing real-time visibility into student placement readiness, cohort skill gap trends, and industry recruitment outcomes.
- **Verified Student Digital Portfolio**: Authenticated digital resume showcasing verified skill badges, project highlights, shareable profile links, and exportable PDF credentials.
- **Multi-Persona Role Switcher**: Instant view-switching between Student, Industry Recruiter, Academician, and Institution Admin perspectives.

---

## 🧠 Internal Working & Technical Architecture

### 1. Dynamic Skill Profiling & Benchmark Algorithm
- **Questionnaire & Scoring**: Evaluates candidate responses across technical engineering, biomedical bio-signal processing, and domain-specific clinical trial protocols.
- **Gap Vector Computation**: Compares current student proficiency $S_i$ against industry target benchmark $B_i$:
  $$\Delta_i = B_i - S_i$$
- **Remedial Course Mapping**: When $\Delta_i > 15\%$, the system automatically tags targeted remedial micro-courses (e.g. *Ayush GCP Protocols*, *Biomedical Signal Processing*) to bridge identified skill gaps.

### 2. Candidate-Opportunity Compatibility Engine
- The platform calculates a dynamic **Skill Compatibility Match Percentage** based on the required skill set vector $R$ specified by the recruiter:
  $$\text{Match Score} = \left( \frac{\sum_{k \in R} \min(S_k, 100)}{|R| \cdot 100} \right) \times 100\%$$
- High-compatibility candidates ($\ge 85\%$) are highlighted with glowing badges for recruiters and recommended to apply.

### 3. Application Pipeline & Lifecycle Tracker
- **4-Stage Tracking Pipeline**: Tracks application progression through deterministic states:
  $$\text{Submitted} \longrightarrow \text{Under AI Screening} \longrightarrow \text{Interview Scheduled} \longrightarrow \text{Selected / Offer Issued}$$
- State updates trigger real-time notifications for applicants and update institutional analytics counters.

### 4. Database Architecture & Security (Supabase)
- **Database Engine**: PostgreSQL on Supabase (`dithgsyoglxizncutipd`).
- **Relational Tables**:
  - `profiles`: Unified user directory with Enum roles (`student`, `industry`, `academician`, `institution`).
  - `skills` & `student_skill_profiles`: Proficiency matrices with verification flags.
  - `opportunities`: Listings for internships, jobs, and faculty FDP grants with JSONB required skill tags.
  - `applications`: Applications linked to candidate and publisher profiles with compatibility metrics.
  - `digital_portfolios` & `institution_analytics`: Aggregated metrics and public share slugs.
- **Security & RLS**: Row-Level Security policies enforce read access for public listings while restricting mutation rights to verified account owners.

---

## 📁 Repository Structure

```
pragya-setu/
├── public/                     # Static branding assets & icons
├── src/
│   ├── app/
│   │   ├── globals.css         # Styling utilities & ambient light effects
│   │   ├── layout.tsx          # Root application layout
│   │   └── page.tsx            # Main page tab & persona coordinator
│   ├── components/
│   │   ├── Navbar.tsx          # Header with role switcher & tab navigation
│   │   ├── HeroBanner.tsx      # Platform hero section & metric cards
│   │   ├── SkillAssessmentModule.tsx  # Skill questionnaire & gap engine
│   │   ├── InternshipPlacementBoard.tsx # Marketplace & application tracker
│   │   ├── FacultyPortalModule.tsx    # Academicians & FDP workspace
│   │   ├── DigitalPortfolioModule.tsx # Student digital resume & credentials
│   │   ├── InstitutionalAnalytics.tsx# Placement readiness analytics
│   │   └── MigrationGuideModal.tsx   # SQL migration viewer
│   └── lib/
│       └── supabase.ts         # Supabase REST client & TypeScript types
├── supabase/
│   └── migrations/
│       └── 20260905000000_sih26044_pragya_setu.sql # PostgreSQL DDL migration
├── .env.example                # Environment variable template
├── .env.local                  # Local Supabase credentials
├── package.json
└── README.md
```

---

## 🛠️ Installation & Setup Instructions

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Step 1: Clone & Install Dependencies
Open your terminal in the workspace directory and execute:
```bash
npm install
```

### Step 2: Configure Environment Variables
Copy `.env.example` to :
```bash
cp .env.example 
```

Ensure `.env.local` contains your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=https://dithgsyoglxizncutipd.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Step 3: Run Database Migration on Supabase
1. Open your [Supabase Dashboard](https://supabase.com/dashboard).
2. Go to **SQL Editor** in the left navigation sidebar.
3. Open `supabase/migrations/20260905000000_sih26044_pragya_setu.sql`.
4. Copy and paste the SQL migration script into the query editor and click **Run**.

### Step 4: Run Development Server
Start the local server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or `http://localhost:3001` if port 3000 is occupied) in your browser.

### Step 5: Build for Production
To compile and test an optimized production build:
```bash
npm run build
npm run start
```
