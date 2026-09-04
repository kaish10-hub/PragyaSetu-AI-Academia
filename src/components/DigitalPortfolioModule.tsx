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
  Code2,
  FileBadge
} from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

export function DigitalPortfolioModule() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://pragyasetu.gov.in/portfolio/arjun-sharma");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
        <SpotlightCard className="p-6 border border-white/10 bg-[#0A0A0E]/90 rounded-2xl flex flex-col justify-between">
          <div>
            {/* Avatar & Verified Badge */}
            <div className="flex items-start justify-between mb-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#5E6AD2] to-purple-600 flex items-center justify-center text-white text-2xl font-bold font-mono shadow-[0_0_20px_rgba(94,106,210,0.4)]">
                  AS
                </div>
                <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-[#0A0A0E] flex items-center justify-center">
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
          <SpotlightCard className="p-6 border border-white/10 bg-[#0A0A0E]/90 rounded-2xl">
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
          <SpotlightCard className="p-6 border border-white/10 bg-[#0A0A0E]/90 rounded-2xl">
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
