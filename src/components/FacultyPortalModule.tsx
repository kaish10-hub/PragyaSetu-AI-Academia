"use client";

import React, { useState } from "react";
import { 
  UserCheck, 
  BookOpen, 
  Award, 
  Briefcase, 
  Sparkles, 
  Building2, 
  CheckCircle2, 
  Send,
  FileCheck,
  FileCode,
  GraduationCap
} from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";
import { ActiveRole } from "./Navbar";

interface FacultyPortalModuleProps {
  activeRole: ActiveRole;
}

export function FacultyPortalModule({ activeRole }: FacultyPortalModuleProps) {
  const [activeCategory, setActiveCategory] = useState<"fdp" | "consultancy" | "research">("fdp");
  const [eoiSubmitted, setEoiSubmitted] = useState<Record<string, boolean>>({});

  const handleApplyEOI = (id: string) => {
    setEoiSubmitted(prev => ({ ...prev, [id]: true }));
  };

  if (activeRole === "institution") {
    return (
      <div className="space-y-8">
        <div className="border-b border-white/15 pb-6">
          <div className="flex items-center gap-3 mb-1.5"><span className="p-2 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-500"><Building2 className="w-6 h-6" /></span><h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Faculty Development Oversight</h2></div>
          <p className="text-sm sm:text-base text-gray-300 font-medium">Review faculty applications, institutional capacity, and approval queues across development programs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SpotlightCard className="p-6 bg-[#1C1D24]/90"><div className="text-xs text-gray-400">Pending Approvals</div><div className="text-3xl font-bold text-amber-500 mt-2">24</div><div className="text-xs text-gray-400 mt-2">Across 8 institutions</div></SpotlightCard>
          <SpotlightCard className="p-6 bg-[#1C1D24]/90"><div className="text-xs text-gray-400">Active Faculty Fellows</div><div className="text-3xl font-bold text-emerald-500 mt-2">186</div><div className="text-xs text-gray-400 mt-2">Current academic cycle</div></SpotlightCard>
          <SpotlightCard className="p-6 bg-[#1C1D24]/90"><div className="text-xs text-gray-400">Grant Utilization</div><div className="text-3xl font-bold text-[#7B88ED] mt-2">72%</div><div className="text-xs text-gray-400 mt-2">₹18.4L allocated this quarter</div></SpotlightCard>
        </div>
        <SpotlightCard className="p-6 bg-[#1C1D24]/90">
          <h3 className="text-base font-semibold text-white mb-4">Approval Queue</h3>
          <div className="space-y-3">
            {["Smart Sensors & IoT in Ayurvedic Research Labs", "Faculty Industry Immersion: AyurTech R&D Center", "AI-Powered Pulse (Nadi) Diagnostic Validation Project"].map((program, index) => (
              <div key={program} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-white/[0.04] border border-white/10"><div><div className="text-sm font-semibold text-white">{program}</div><div className="text-xs text-gray-400 mt-1">{index + 4} faculty applicants awaiting review</div></div><button className="px-3 py-2 rounded-lg bg-[#5E6AD2] text-white text-xs font-semibold"><FileCheck className="w-3.5 h-3.5 inline mr-1" />Review Applications</button></div>
            ))}
          </div>
        </SpotlightCard>
      </div>
    );
  }

  if (activeRole === "student" || activeRole === "industry") {
    return (
      <div className="space-y-8">
        <div className="border-b border-white/15 pb-6"><div className="flex items-center gap-3 mb-1.5"><span className="p-2 rounded-xl bg-purple-500/20 border border-purple-500/40 text-purple-500"><GraduationCap className="w-6 h-6" /></span><h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Faculty Development Programs</h2></div><p className="text-sm sm:text-base text-gray-300 font-medium">Explore faculty training, industrial exposure, consultancy, and joint research opportunities available through Pragya Setu.</p></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SpotlightCard className="p-6 bg-[#1C1D24]/90"><BookOpen className="w-6 h-6 text-purple-500 mb-4" /><h3 className="font-bold text-white mb-2">FDP & Industrial Training</h3><p className="text-xs text-gray-400">Browse Ministry-funded faculty development programs and lab immersion opportunities.</p></SpotlightCard>
          <SpotlightCard className="p-6 bg-[#1C1D24]/90"><Briefcase className="w-6 h-6 text-indigo-500 mb-4" /><h3 className="font-bold text-white mb-2">Industry Consultancy</h3><p className="text-xs text-gray-400">Discover how academic expertise connects with Ayush industry research and standards.</p></SpotlightCard>
          <SpotlightCard className="p-6 bg-[#1C1D24]/90"><Award className="w-6 h-6 text-amber-500 mb-4" /><h3 className="font-bold text-white mb-2">Joint Research Grants</h3><p className="text-xs text-gray-400">View collaborative calls supporting validated health technology and clinical research.</p></SpotlightCard>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/15 pb-6">
        <div>
          <div className="flex items-center gap-3 mb-1.5">
            <span className="p-2 rounded-xl bg-purple-500/25 border border-purple-500/50 text-purple-300 shadow-sm">
              <UserCheck className="w-6 h-6" />
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Academician & Faculty Development Portal
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-300 font-medium">
            Faculty Development Programs (FDPs), Industrial Exposure Workshops, Consultancy Projects & Collaborative Research.
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex items-center gap-1.5 bg-[#20212A] p-1.5 rounded-2xl border border-white/20 shadow-inner">
          <button
            onClick={() => setActiveCategory("fdp")}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeCategory === "fdp" ? "bg-[#5E6AD2] text-white shadow-md" : "text-gray-300 hover:text-white"
            }`}
          >
            FDPs & Industrial Training
          </button>
          <button
            onClick={() => setActiveCategory("consultancy")}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeCategory === "consultancy" ? "bg-[#5E6AD2] text-white shadow-md" : "text-gray-300 hover:text-white"
            }`}
          >
            Industry Consultancy
          </button>
          <button
            onClick={() => setActiveCategory("research")}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeCategory === "research" ? "bg-[#5E6AD2] text-white shadow-md" : "text-gray-300 hover:text-white"
            }`}
          >
            Joint Research Grants
          </button>
        </div>
      </div>

      {/* Grid of Listings */}
      {activeCategory === "fdp" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SpotlightCard className="p-6 border border-white/10 bg-[#1C1D24]/90 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono text-purple-300 bg-purple-500/20 px-2 py-0.5 rounded border border-purple-500/30">
                  Ministry Funded FDP
                </span>
                <span className="text-xs text-emerald-400 font-mono font-semibold">Grant Covered</span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">Smart Sensors & IoT in Ayurvedic Research Labs</h3>
              <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                14-day residential hands-on training for faculty members to set up digital bio-signal acquisition kits in institutional labs.
              </p>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1 text-xs text-gray-300 mb-4 font-mono">
                <div>Provider: Ministry of Ayush R&D Division</div>
                <div>Venue: All India Institute of Ayurveda, New Delhi</div>
                <div>Eligibility: Assoc. Professors / Professors in Bio-tech & Ayush</div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-[11px] text-gray-500">Certificate & Academic Credit</span>
              <button
                onClick={() => handleApplyEOI("fdp-1")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  eoiSubmitted["fdp-1"] 
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40" 
                    : "bg-[#5E6AD2] text-white hover:bg-[#6872D9] shadow-accent-glow"
                }`}
              >
                {eoiSubmitted["fdp-1"] ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>EOI Submitted</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Apply for FDP Seat</span>
                  </>
                )}
              </button>
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-6 border border-white/10 bg-[#1C1D24]/90 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono text-blue-300 bg-blue-500/20 px-2 py-0.5 rounded border border-blue-500/30">
                  Industry Attachment
                </span>
                <span className="text-xs text-indigo-300 font-mono">Stipend Supported</span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">Faculty Industry Immersion: AyurTech R&D Center</h3>
              <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                4-week summer industry placement program for faculty to gain exposure to high-throughput chromatographic formulation testing.
              </p>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1 text-xs text-gray-300 mb-4 font-mono">
                <div>Host Industry: AyurSoft Analytics Labs</div>
                <div>Location: Bengaluru Tech Park</div>
                <div>Stipend: ₹40,000 / month honorarium</div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-[11px] text-gray-500">Sabbatical Approved</span>
              <button
                onClick={() => handleApplyEOI("fdp-2")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  eoiSubmitted["fdp-2"] 
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40" 
                    : "bg-[#5E6AD2] text-white hover:bg-[#6872D9] shadow-accent-glow"
                }`}
              >
                {eoiSubmitted["fdp-2"] ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>EOI Submitted</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Apply for Immersion</span>
                  </>
                )}
              </button>
            </div>
          </SpotlightCard>
        </div>
      )}

      {activeCategory === "consultancy" && (
        <SpotlightCard className="p-6 border border-white/10 bg-[#1C1D24]/90 rounded-2xl space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/30">
                Industry Consultancy RFP
              </span>
              <h3 className="text-base font-bold text-white mt-1">Consultancy: Standardization of Bio-Active Herbal Extract Protocols</h3>
            </div>
            <span className="text-xs font-mono text-emerald-400 font-bold">Grant Budget: ₹8.5 Lakhs</span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            Himalaya Wellness & BioHealth seeking senior academician experts to review HPTLC extraction parameters and author GCP-compliant clinical protocol whitepapers.
          </p>
          <div className="pt-4 border-t border-white/10 flex justify-end">
            <button 
              onClick={() => handleApplyEOI("con-1")}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#5E6AD2] hover:bg-[#6872D9]"
            >
              {eoiSubmitted["con-1"] ? "Consultancy Proposal Submitted" : "Submit Consultancy Proposal"}
            </button>
          </div>
        </SpotlightCard>
      )}

      {activeCategory === "research" && (
        <SpotlightCard className="p-6 border border-white/10 bg-[#1C1D24]/90 rounded-2xl space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono text-indigo-300 bg-indigo-500/20 px-2 py-0.5 rounded border border-indigo-500/30">
                Joint Industry-Academia Call 2026
              </span>
              <h3 className="text-base font-bold text-white mt-1">AI-Powered Pulse (Nadi) Diagnostic Validation Project</h3>
            </div>
            <span className="text-xs font-mono text-indigo-300 font-bold">Co-Funding: ₹25 Lakhs</span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            Joint research call between All India Institute of Ayurveda and Ministry R&D for developing non-invasive bio-sensor arrays.
          </p>
          <div className="pt-4 border-t border-white/10 flex justify-end">
            <button 
              onClick={() => handleApplyEOI("res-1")}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#5E6AD2] hover:bg-[#6872D9]"
            >
              {eoiSubmitted["res-1"] ? "Grant Proposal Submitted" : "Submit Joint Grant Application"}
            </button>
          </div>
        </SpotlightCard>
      )}
    </div>
  );
}
