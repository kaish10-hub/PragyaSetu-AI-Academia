"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign, 
  Sparkles, 
  Search, 
  Filter, 
  CheckCircle2, 
  Send, 
  Plus, 
  X, 
  Building2, 
  Award,
  ChevronRight,
  TrendingUp,
  FileText
} from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";
import { ActiveRole } from "./Navbar";

export interface OpportunityItem {
  id: string;
  title: string;
  type: "internship" | "job" | "faculty_fdp";
  org: string;
  location: string;
  isRemote: boolean;
  stipend: string;
  duration: string;
  matchScore: number;
  skills: string[];
  description: string;
}

const mockOpportunities: OpportunityItem[] = [
  {
    id: "opp-1",
    title: "AI Research Intern - Ayush Health Tech",
    type: "internship",
    org: "All India Institute of Ayurveda (AIIA)",
    location: "New Delhi",
    isRemote: true,
    stipend: "₹25,000 / month",
    duration: "6 Months",
    matchScore: 96,
    skills: ["AI & Machine Learning", "Biomedical Signal Processing", "Ayush Herbology & Formulations"],
    description: "Collaborate with senior researchers to build predictive models for pulse diagnosis and herbal active ingredient classification."
  },
  {
    id: "opp-2",
    title: "Full-Stack Web Engineer (AyurTech Platform)",
    type: "job",
    org: "AyurSoft Technologies",
    location: "Bengaluru",
    isRemote: false,
    stipend: "₹9.5 - ₹13.0 LPA",
    duration: "Full Time",
    matchScore: 92,
    skills: ["Full-Stack Web Development", "AI & Machine Learning", "REST APIs"],
    description: "Develop high-throughput cloud portals connecting clinical trial databases with mobile applications for patient wellness tracking."
  },
  {
    id: "opp-3",
    title: "Faculty Industrial Training: Smart Health IoT",
    type: "faculty_fdp",
    org: "Ministry of Ayush Training Center",
    location: "Jaipur, Rajasthan",
    isRemote: false,
    stipend: "Grant Funded (Free T&P)",
    duration: "2 Weeks",
    matchScore: 88,
    skills: ["Biomedical Signal Processing", "Clinical Research Protocols"],
    description: "Specialized 14-day Faculty Development Program (FDP) for academicians to integrate IoT sensor labs into institutional curricula."
  },
  {
    id: "opp-4",
    title: "Clinical Trial Data Analyst",
    type: "internship",
    org: "BioHealth Diagnostics Labs",
    location: "Hyderabad",
    isRemote: true,
    stipend: "₹20,000 / month",
    duration: "4 Months",
    matchScore: 82,
    skills: ["Clinical Research Protocols", "Biomedical Signal Processing"],
    description: "Process bio-signal datasets from ongoing GCP-compliant herbal clinical studies."
  }
];

interface InternshipPlacementBoardProps {
  activeRole: ActiveRole;
}

export function InternshipPlacementBoard({ activeRole }: InternshipPlacementBoardProps) {
  const [filterType, setFilterType] = useState<"all" | "internship" | "job" | "faculty_fdp">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOpp, setSelectedOpp] = useState<OpportunityItem | null>(null);
  const [appliedStatus, setAppliedStatus] = useState<Record<string, "submitted" | "under_review" | "interview" | "selected">>({
    "opp-1": "submitted"
  });
  const [showPostModal, setShowPostModal] = useState(false);
  const [coverNote, setCoverNote] = useState("");

  // Post modal form state
  const [newTitle, setNewTitle] = useState("");
  const [newOrg, setNewOrg] = useState("");
  const [newType, setNewType] = useState<"internship" | "job" | "faculty_fdp">("internship");
  const [newStipend, setNewStipend] = useState("");

  const filteredOpps = mockOpportunities.filter(item => {
    if (filterType !== "all" && item.type !== filterType) return false;
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      return (
        item.title.toLowerCase().includes(q) ||
        item.org.toLowerCase().includes(q) ||
        item.skills.some(s => s.toLowerCase().includes(q))
      );
    }
    return true;
  });

  const handleApply = (oppId: string) => {
    setAppliedStatus(prev => ({ ...prev, [oppId]: "submitted" }));
    setSelectedOpp(null);
  };

  return (
    <div className="space-y-8">
      {/* Top Header & Search Control Strip */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/15 pb-6">
        <div>
          <div className="flex items-center gap-3 mb-1.5">
            <span className="p-2 rounded-xl bg-emerald-500/25 border border-emerald-500/50 text-emerald-400 shadow-sm">
              <Briefcase className="w-6 h-6" />
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Internship, Placement & FDP Marketplace
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-300 font-medium">
            Real-time skill matching engine for students, entry-level candidates, and faculty industrial training.
          </p>
        </div>

        {/* Action button if recruiter or institution */}
        {(activeRole === "industry" || activeRole === "institution") && (
          <button
            onClick={() => setShowPostModal(true)}
            className="px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all flex items-center gap-2 shrink-0"
          >
            <Plus className="w-5 h-5" />
            <span>Post New Opportunity</span>
          </button>
        )}
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#20212A] p-2.5 rounded-2xl border border-white/20 shadow-xl">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto">
          <button
            onClick={() => setFilterType("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
              filterType === "all" ? "bg-[#5E6AD2] text-white shadow-md" : "text-gray-300 hover:text-white"
            }`}
          >
            All Listings ({mockOpportunities.length})
          </button>
          <button
            onClick={() => setFilterType("internship")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
              filterType === "internship" ? "bg-[#5E6AD2] text-white shadow-md" : "text-gray-300 hover:text-white"
            }`}
          >
            Student Internships
          </button>
          <button
            onClick={() => setFilterType("job")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
              filterType === "job" ? "bg-[#5E6AD2] text-white shadow-md" : "text-gray-300 hover:text-white"
            }`}
          >
            Entry-Level Jobs
          </button>
          <button
            onClick={() => setFilterType("faculty_fdp")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              filterType === "faculty_fdp" ? "bg-[#5E6AD2] text-white shadow-md" : "text-gray-300 hover:text-white"
            }`}
          >
            <span>Faculty FDPs</span>
            <span className="text-xs font-mono font-bold bg-purple-500/30 text-purple-200 px-1.5 py-0.5 rounded border border-purple-400/40">Grants</span>
          </button>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by skill, company..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/[0.06] border border-white/20 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#5E6AD2]"
          />
        </div>
      </div>

      {/* Opportunities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredOpps.map((opp) => {
          const status = appliedStatus[opp.id];
          return (
            <SpotlightCard key={opp.id} className="p-6 border border-white/20 bg-[#1C1D24]/95 rounded-2xl flex flex-col justify-between hover:border-white/40 transition-all shadow-xl">
              <div>
                {/* Header Badge Strip */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`px-3 py-1 text-xs font-mono font-bold rounded-lg border uppercase ${
                    opp.type === "internship" ? "bg-blue-500/20 text-blue-200 border-blue-500/40" :
                    opp.type === "job" ? "bg-emerald-500/20 text-emerald-200 border-emerald-500/40" :
                    "bg-purple-500/20 text-purple-200 border-purple-500/40"
                  }`}>
                    {opp.type === "internship" ? "Student Internship" : opp.type === "job" ? "Placement Opening" : "Faculty FDP Grant"}
                  </span>

                  {/* Skill Match Badge */}
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#5E6AD2]/25 border border-[#5E6AD2]/50 text-[#8E99F3] shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-[#8E99F3]" />
                    <span className="text-xs font-mono font-bold">{opp.matchScore}% Skill Match</span>
                  </div>
                </div>

                {/* Title & Organization */}
                <h3 className="text-lg sm:text-xl font-extrabold text-white mb-1.5">{opp.title}</h3>
                <div className="text-sm text-indigo-300 font-bold flex items-center gap-2 mb-4">
                  <Building2 className="w-4 h-4 text-indigo-400" />
                  <span>{opp.org}</span>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 mb-5 leading-relaxed font-normal">
                  {opp.description}
                </p>

                {/* Details Strip */}
                <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-gray-200 mb-5 p-3.5 rounded-xl bg-white/[0.04] border border-white/10 font-mono font-medium">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span>{opp.location} {opp.isRemote && "(Remote)"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span>{opp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 col-span-2 text-emerald-400 font-bold text-sm">
                    <DollarSign className="w-4 h-4" />
                    <span>{opp.stipend}</span>
                  </div>
                </div>

                {/* Required Skills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {opp.skills.map((skill, idx) => (
                    <span key={idx} className="text-xs bg-white/[0.08] border border-white/15 px-2.5 py-1 rounded-lg text-gray-200 font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button & Status Tracker */}
              <div className="pt-4 border-t border-white/15 flex items-center justify-between">
                {status ? (
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono text-emerald-300 font-bold uppercase">
                      Submitted ({status.replace("_", " ")})
                    </span>
                  </div>
                ) : (
                  <span className="text-xs text-gray-400 font-medium">Verified Ministry Listing</span>
                )}

                <button
                  onClick={() => setSelectedOpp(opp)}
                  className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                    status
                      ? "bg-white/[0.08] text-white hover:bg-white/15 border border-white/10"
                      : "bg-[#5E6AD2] hover:bg-[#6872D9] text-white shadow-accent-glow"
                  }`}
                >
                  <span>{status ? "View Progress" : "Apply with Profile"}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </SpotlightCard>
          );
        })}
      </div>

      {/* APPLICATION MODAL */}
      <AnimatePresence>
        {selectedOpp && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#14151A]/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-xl bg-[#1C1D24] border border-white/10 rounded-2xl p-6 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-[10px] font-mono text-[#7B88ED] uppercase">Opportunity Application</span>
                  <h3 className="text-lg font-bold text-white">{selectedOpp.title}</h3>
                  <div className="text-xs text-gray-400">{selectedOpp.org}</div>
                </div>
                <button
                  onClick={() => setSelectedOpp(null)}
                  className="p-1 rounded-lg text-gray-400 hover:text-white bg-white/5"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Matching Profile Breakdown */}
              <div className="p-4 rounded-xl bg-[#5E6AD2]/10 border border-[#5E6AD2]/30 space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-white">
                  <span>Your Skill Compatibility Rating:</span>
                  <span className="text-[#7B88ED] font-mono text-sm">{selectedOpp.matchScore}% Match</span>
                </div>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  Your verified student profile matches 3 out of 3 required skill competencies for this role.
                </p>
              </div>

              {/* Live Application Status Pipeline */}
              <div>
                <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-3">Application Process Pipeline</h4>
                <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-mono">
                  <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    1. Submitted
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.03] text-gray-400 border border-white/5">
                    2. AI Screening
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.03] text-gray-400 border border-white/5">
                    3. Interview
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.03] text-gray-400 border border-white/5">
                    4. Selection
                  </div>
                </div>
              </div>

              {/* Optional Cover Note */}
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-2">
                  Statement of Purpose / Additional Details (Optional)
                </label>
                <textarea
                  rows={3}
                  value={coverNote}
                  onChange={e => setCoverNote(e.target.value)}
                  placeholder="Mention relevant project links or research experience..."
                  className="w-full p-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#5E6AD2]"
                />
              </div>

              {/* Submit CTA */}
              <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => setSelectedOpp(null)}
                  className="px-4 py-2 rounded-xl text-xs font-medium text-gray-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleApply(selectedOpp.id)}
                  className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit One-Click Application</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* POST OPPORTUNITY MODAL FOR RECRUITERS */}
      <AnimatePresence>
        {showPostModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#14151A]/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg bg-[#1C1D24] border border-white/10 rounded-2xl p-6 shadow-2xl space-y-4"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Plus className="w-4 h-4 text-emerald-400" />
                  <span>Post Opportunity (Recruiter / Institution)</span>
                </h3>
                <button onClick={() => setShowPostModal(false)} className="text-gray-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="block text-gray-300 mb-1">Opportunity Title</label>
                  <input
                    type="text"
                    placeholder="e.g. AI Bio-Signal Research Intern"
                    value={newTitle}
                    onChange={e => setNewTitle(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-1">Organization Name</label>
                  <input
                    type="text"
                    placeholder="e.g. All India Institute of Ayurveda"
                    value={newOrg}
                    onChange={e => setNewOrg(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-gray-300 mb-1">Category</label>
                    <select
                      value={newType}
                      onChange={e => setNewType(e.target.value as OpportunityItem["type"])}
                      className="w-full p-2.5 rounded-xl bg-[#252630] border border-white/10 text-white"
                    >
                      <option value="internship">Student Internship</option>
                      <option value="job">Entry-Level Job</option>
                      <option value="faculty_fdp">Faculty FDP Grant</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-1">Stipend / CTC</label>
                    <input
                      type="text"
                      placeholder="e.g. ₹30,000 / month"
                      value={newStipend}
                      onChange={e => setNewStipend(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t border-white/10">
                <button
                  onClick={() => setShowPostModal(false)}
                  className="px-4 py-2 rounded-xl text-xs text-gray-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowPostModal(false)}
                  className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-sm"
                >
                  Publish Listing
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
