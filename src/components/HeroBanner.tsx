"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  ArrowRight, 
  BrainCircuit, 
  Briefcase, 
  Building2, 
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  Users, 
  Award
} from "lucide-react";
import { ActiveRole, ActiveTab } from "./Navbar";

interface HeroBannerProps {
  activeRole: ActiveRole;
  setActiveTab: (tab: ActiveTab) => void;
}

export function HeroBanner({ activeRole, setActiveTab }: HeroBannerProps) {
  const roleHighlights = {
    student: {
      title: "Student View",
      subtitle: "Complete skill assessment, get automated gap reports, and apply to matched internships.",
      actionText: "Start Skill Assessment",
      actionTab: "assessment" as ActiveTab
    },
    industry: {
      title: "Industry Recruiter View",
      subtitle: "Post openings with skill tags, view candidate compatibility ratings, and publish training modules.",
      actionText: "Post New Internship / Job",
      actionTab: "opportunities" as ActiveTab
    },
    academician: {
      title: "Faculty & Academician View",
      subtitle: "Access Faculty Development Programs (FDPs), industrial training, and collaborative research grants.",
      actionText: "Explore Faculty FDPs",
      actionTab: "faculty" as ActiveTab
    },
    institution: {
      title: "Institution Admin View",
      subtitle: "Monitor placement readiness across departments, skill gap trends, and hiring outcomes.",
      actionText: "View Analytics Dashboard",
      actionTab: "analytics" as ActiveTab
    }
  };

  const highlight = roleHighlights[activeRole];

  return (
    <section className="relative pt-2 pb-8 overflow-hidden z-10 w-full">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        
        {/* Top Ministry Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-3"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-[#5E6AD2]/25 border border-[#5E6AD2]/60 shadow-[0_0_25px_rgba(94,106,210,0.4)]">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm sm:text-base font-mono text-[#A2ACF6] font-bold tracking-wider uppercase">
              Ministry of Ayush • All India Institute of Ayurveda
            </span>
            <Sparkles className="w-4 h-4 text-[#A2ACF6]" />
          </div>
        </motion.div>

        {/* Display Headline — Vibrant 2X Font */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center max-w-7xl mx-auto mb-4"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-white">
            Academia–Industry Portal for{" "}
            <span className="text-[#8E99F3] underline decoration-[#5E6AD2]/50 decoration-wavy underline-offset-8">
              Skill Mapping, Internships & Placement
            </span>
          </h1>
        </motion.div>

        {/* Description — 2X Font Enlarged */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-lg sm:text-2xl text-gray-100 font-medium text-center max-w-5xl mx-auto mb-6 leading-relaxed"
        >
          Empowering students with AI skill assessments, verified digital portfolios, and matched internships, while enabling academicians to access FDPs and institutions to drive data-led placement readiness.
        </motion.p>

        {/* Active Role Quick Context Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-6 p-6 rounded-2xl bg-gradient-to-r from-[#5E6AD2]/25 via-purple-500/20 to-indigo-500/25 border border-white/25 backdrop-blur-xl shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#5E6AD2]/40 border border-[#5E6AD2]/60 flex items-center justify-center shrink-0 shadow-md">
              <Zap className="w-7 h-7 text-[#A2ACF6]" />
            </div>
            <div>
              <div className="text-sm font-mono font-bold text-[#A2ACF6] uppercase tracking-wider">
                Active View: {highlight.title}
              </div>
              <div className="text-base sm:text-lg font-semibold text-white mt-1">
                {highlight.subtitle}
              </div>
            </div>
          </div>
          <button
            onClick={() => setActiveTab(highlight.actionTab)}
            className="shrink-0 px-6 py-3.5 rounded-xl text-sm sm:text-base font-extrabold text-white bg-[#5E6AD2] hover:bg-[#6872D9] shadow-accent-glow transition-all flex items-center gap-2.5 active:scale-95"
          >
            <span>{highlight.actionText}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Action Button Strip — 2X Enlarged */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-8"
        >
          <button
            onClick={() => setActiveTab("assessment")}
            className="px-7 py-4 rounded-2xl text-base sm:text-lg font-black text-white bg-[#5E6AD2] hover:bg-[#6872D9] shadow-[0_0_30px_rgba(94,106,210,0.6)] transition-all flex items-center gap-3"
          >
            <BrainCircuit className="w-6 h-6" />
            <span>Skill Questionnaire</span>
          </button>

          <button
            onClick={() => setActiveTab("opportunities")}
            className="px-7 py-4 rounded-2xl text-base sm:text-lg font-black text-white bg-white/[0.1] border border-white/25 hover:bg-white/[0.18] hover:border-white/40 transition-all flex items-center gap-3"
          >
            <Briefcase className="w-6 h-6 text-emerald-400" />
            <span>Browse Internships & Jobs</span>
          </button>

          <button
            onClick={() => setActiveTab("faculty")}
            className="px-7 py-4 rounded-2xl text-base sm:text-lg font-black text-white bg-white/[0.1] border border-white/25 hover:bg-white/[0.18] hover:border-white/40 transition-all flex items-center gap-3"
          >
            <Award className="w-6 h-6 text-purple-300" />
            <span>Faculty FDPs & Grants</span>
          </button>
        </motion.div>

        {/* Live Platform Metrics Grid — Enlarge Font */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full"
        >
          <div className="p-6 rounded-2xl bg-[#0A0A0D]/95 border border-white/20 backdrop-blur-xl flex items-center gap-5 shadow-2xl">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center shrink-0">
              <Users className="w-7 h-7 text-blue-400" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white font-mono">14,280+</div>
              <div className="text-sm sm:text-base text-gray-200 font-semibold">Verified Students</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0A0A0D]/95 border border-white/20 backdrop-blur-xl flex items-center gap-5 shadow-2xl">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
              <Building2 className="w-7 h-7 text-emerald-400" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white font-mono">520+</div>
              <div className="text-sm sm:text-base text-gray-200 font-semibold">Industry Partners</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0A0A0D]/95 border border-white/20 backdrop-blur-xl flex items-center gap-5 shadow-2xl">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center shrink-0">
              <TrendingUp className="w-7 h-7 text-purple-300" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white font-mono">94.8%</div>
              <div className="text-sm sm:text-base text-gray-200 font-semibold">Skill Compatibility</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#0A0A0D]/95 border border-white/20 backdrop-blur-xl flex items-center gap-5 shadow-2xl">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-7 h-7 text-amber-400" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white font-mono">1,850+</div>
              <div className="text-sm sm:text-base text-gray-200 font-semibold">Faculty FDP Grants</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
