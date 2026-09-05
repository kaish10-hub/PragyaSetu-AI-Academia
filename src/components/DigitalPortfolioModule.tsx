"use client";

import React, { useState } from "react";
import { 
  Award, 
  CheckCircle2, 
  ShieldCheck, 
  Share2, 
  Download, 
  ExternalLink, 
  Copy, 
  Check, 
  Sparkles, 
  User, 
  GraduationCap, 
  Briefcase, 
  Users,
  Code2,
  FileBadge
} from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";
import { ActiveRole } from "./Navbar";

interface DigitalPortfolioModuleProps {
  activeRole: ActiveRole;
}

export function DigitalPortfolioModule({ activeRole }: DigitalPortfolioModuleProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://pragyasetu.gov.in/portfolio/arjun-sharma");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (activeRole === "industry") {
    return (
      <div className="space-y-8">
        <div className="border-b border-white/15 pb-6"><div className="flex items-center gap-3 mb-1.5"><span className="p-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-500"><Briefcase className="w-6 h-6" /></span><h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Candidate Portfolio Browser</h2></div><p className="text-sm sm:text-base text-gray-300 font-medium">Search verified student portfolios and compare skills, credentials, and project evidence.</p></div>
        <div className="flex flex-col sm:flex-row gap-3"><input className="flex-1 rounded-xl bg-white/[0.06] border border-white/15 px-4 py-3 text-sm text-white placeholder-gray-400" placeholder="Search skills, projects, or institutions" /><button className="px-5 py-3 rounded-xl bg-[#5E6AD2] text-white font-semibold flex items-center justify-center gap-2"><User className="w-4 h-4" />Search Candidates</button></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Arjun Sharma", "Meera Nair", "Vikram Singh"].map((candidate, index) => (
            <SpotlightCard key={candidate} className="p-6 bg-[#1C1D24]/90"><div className="flex items-center justify-between mb-4"><div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5E6AD2] to-purple-600 flex items-center justify-center text-white font-bold">{candidate.split(" ").map(part => part[0]).join("")}</div><span className="text-xs text-emerald-500 font-semibold">{96 - index * 4}% Match</span></div><h3 className="font-bold text-white">{candidate}</h3><p className="text-xs text-indigo-500 mt-1">Verified Ayush HealthTech Portfolio</p><div className="flex flex-wrap gap-2 mt-4"><span className="text-[10px] bg-white/[0.06] border border-white/10 rounded px-2 py-1 text-gray-300">Biomedical AI</span><span className="text-[10px] bg-white/[0.06] border border-white/10 rounded px-2 py-1 text-gray-300">GCP Protocols</span></div><button className="w-full mt-5 py-2 rounded-lg border border-[#5E6AD2]/50 text-indigo-500 text-xs font-semibold">View Verified Portfolio</button></SpotlightCard>
          ))}
        </div>
      </div>
    );
  }

  if (activeRole === "academician" || activeRole === "institution") {
    return (
      <div className="space-y-8">
        <div className="border-b border-white/15 pb-6"><div className="flex items-center gap-3 mb-1.5"><span className="p-2 rounded-xl bg-purple-500/20 border border-purple-500/40 text-purple-500"><Users className="w-6 h-6" /></span><h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Cohort Portfolio Insights</h2></div><p className="text-sm sm:text-base text-gray-300 font-medium">Review verified portfolio coverage and readiness across your academic cohort.</p></div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6"><SpotlightCard className="p-5 bg-[#1C1D24]/90"><div className="text-xs text-gray-400">Verified Portfolios</div><div className="text-3xl font-bold text-white mt-2">12,846</div></SpotlightCard><SpotlightCard className="p-5 bg-[#1C1D24]/90"><div className="text-xs text-gray-400">Project Evidence</div><div className="text-3xl font-bold text-emerald-500 mt-2">86%</div></SpotlightCard><SpotlightCard className="p-5 bg-[#1C1D24]/90"><div className="text-xs text-gray-400">Industry Verified</div><div className="text-3xl font-bold text-[#7B88ED] mt-2">9,420</div></SpotlightCard><SpotlightCard className="p-5 bg-[#1C1D24]/90"><div className="text-xs text-gray-400">Shareable Credentials</div><div className="text-3xl font-bold text-purple-500 mt-2">74%</div></SpotlightCard></div>
        <SpotlightCard className="p-6 bg-[#1C1D24]/90"><h3 className="text-base font-semibold text-white mb-4">Portfolio Readiness by Cohort</h3><div className="space-y-4">{["Computer Science & AI", "Ayush Medicine & Surgery", "Biotechnology & Bioinformatics"].map((cohort, index) => <div key={cohort}><div className="flex justify-between text-sm mb-1"><span className="text-white">{cohort}</span><span className="text-gray-400">{91 - index * 7}% complete</span></div><div className="h-2 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-[#5E6AD2] to-emerald-500 rounded-full" style={{ width: `${91 - index * 7}%` }} /></div></div>)}</div></SpotlightCard>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Top Controls & Portfolio Card */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/15 pb-6">
        <div>
          <div className="flex items-center gap-3 mb-1.5">
            <span className="p-2 rounded-xl bg-indigo-500/25 border border-indigo-500/50 text-indigo-300 shadow-sm">
              <Award className="w-6 h-6" />
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Verified Student Digital Portfolio
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-300 font-medium">
            Immutable, industry-verified digital credential portfolio with authenticated skill badges and project history.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleCopyLink}
            className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-semibold text-gray-200 bg-white/[0.08] border border-white/20 hover:bg-white/15 transition-all flex items-center gap-2"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? "Link Copied!" : "Copy Share Link"}</span>
          </button>

          <button className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#5E6AD2] hover:bg-[#6872D9] shadow-accent-glow flex items-center gap-2">
            <Download className="w-4 h-4" />
            <span>Export Verified PDF</span>
          </button>
        </div>
      </div>

      {/* Main Digital Resume View */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Student Bio & Verification Badge */}
        <SpotlightCard className="p-6 border border-white/10 bg-[#1C1D24]/90 rounded-2xl flex flex-col justify-between">
          <div>
            {/* Avatar & Verified Badge */}
            <div className="flex items-start justify-between mb-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#5E6AD2] to-purple-600 flex items-center justify-center text-white text-2xl font-bold font-mono shadow-[0_0_20px_rgba(94,106,210,0.4)]">
                  AS
                </div>
                <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-[#1C1D24] flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </span>
              </div>
              <span className="px-2.5 py-1 text-[10px] font-mono text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 rounded-md flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                <span>Ministry Verified</span>
              </span>
            </div>

            <h3 className="text-lg font-bold text-white mb-1">Arjun Sharma</h3>
            <div className="text-xs text-indigo-300 font-medium mb-3">
              Final Year Scholar • B.Tech Computer Science & Ayush HealthTech
            </div>
            <div className="text-xs text-gray-400 mb-6 leading-relaxed">
              Specialized in biomedical signal processing, React/Next.js web engineering, and machine learning models for standardized herbal extract diagnosis.
            </div>

            {/* Quick Contact & Verification Metas */}
            <div className="space-y-2 text-xs text-gray-300 border-t border-white/[0.08] pt-4 font-mono">
              <div className="flex justify-between">
                <span className="text-gray-500">Institution:</span>
                <span className="text-white">AIIA / Delhi University</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Portfolio ID:</span>
                <span className="text-indigo-300">PS-AYUSH-88A</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">CGPA:</span>
                <span className="text-emerald-400 font-bold">9.2 / 10.0</span>
              </div>
            </div>
          </div>

          <div className="mt-6 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-gray-400 font-mono flex items-center gap-2">
            <FileBadge className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Authenticated on Supabase Ledger</span>
          </div>
        </SpotlightCard>

        {/* Right Columns: Verified Skill Badges & Projects */}
        <div className="lg:col-span-2 space-y-6">
          {/* Verified Skill Badges */}
          <SpotlightCard className="p-6 border border-white/10 bg-[#1C1D24]/90 rounded-2xl">
            <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#7B88ED]" />
              <span>Industry-Verified Skill Badges</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-white mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Full-Stack Web</span>
                </div>
                <div className="text-[10px] text-gray-400 font-mono">Verified by AyurSoft</div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-white mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Bio-Signal Proc.</span>
                </div>
                <div className="text-[10px] text-gray-400 font-mono">Verified by AIIA Lab</div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-white mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Ayush GCP Protocols</span>
                </div>
                <div className="text-[10px] text-gray-400 font-mono">Verified by Ministry</div>
              </div>
            </div>
          </SpotlightCard>

          {/* Project Highlights */}
          <SpotlightCard className="p-6 border border-white/10 bg-[#1C1D24]/90 rounded-2xl">
            <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-[#7B88ED]" />
              <span>Key Projects & Achievements</span>
            </h3>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-bold text-white mb-1">AI Pulse Diagnostic Sensor & Web Portal</div>
                  <p className="text-[11px] text-gray-400">
                    Built a real-time signal filtering pipeline taking PPG sensor data and displaying physiological pulse analysis on Next.js dashboard.
                  </p>
                </div>
                <a
                  href="#"
                  className="px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/10 text-xs text-indigo-300 flex items-center gap-1 shrink-0 font-mono"
                >
                  <span>View Project</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-bold text-white mb-1">Herbal active ingredient Chromatographic Database</div>
                  <p className="text-[11px] text-gray-400">
                    Developed a PostgreSQL search index matching herbal sample HPTLC values against Ayush standard baseline databases.
                  </p>
                </div>
                <a
                  href="#"
                  className="px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/10 text-xs text-indigo-300 flex items-center gap-1 shrink-0 font-mono"
                >
                  <span>View Project</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
}
