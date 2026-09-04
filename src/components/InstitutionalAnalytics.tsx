"use client";

import React from "react";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Building2, 
  Award, 
  ArrowUpRight, 
  PieChart, 
  Layers, 
  ShieldCheck, 
  Zap 
} from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

export function InstitutionalAnalytics() {
  const departmentMetrics = [
    { dept: "B.Tech Computer Science & AI", students: 450, placementReady: 96, topGap: "Ayush GCP Ethics" },
    { dept: "Ayush Medicine & Surgery (BAMS)", students: 380, placementReady: 91, topGap: "AI Data Analysis" },
    { dept: "Biotechnology & Bioinformatics", students: 290, placementReady: 94, topGap: "Full-Stack Web APIs" },
    { dept: "Pharmacology & Formulations", students: 310, placementReady: 88, topGap: "Biomedical Signal IoT" }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/15 pb-6">
        <div>
          <div className="flex items-center gap-3 mb-1.5">
            <span className="p-2 rounded-xl bg-amber-500/25 border border-amber-500/50 text-amber-400 shadow-sm">
              <BarChart3 className="w-6 h-6" />
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Institutional & Ministry Analytics Dashboard
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-300 font-medium">
            Data-driven insights monitoring student skill progression, internship participation, and industry hiring trends.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3.5 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs sm:text-sm font-mono font-bold shadow-sm">
            Academic Cohort 2025–2026
          </span>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <SpotlightCard className="p-5 border border-white/10 bg-[#0A0A0E]/90 rounded-2xl">
          <div className="text-gray-400 text-xs mb-1 font-mono">Total Monitored Students</div>
          <div className="text-2xl font-bold text-white font-mono flex items-center justify-between">
            <span>14,280</span>
            <span className="text-xs font-normal text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded flex items-center">
              +12.4% <ArrowUpRight className="w-3 h-3 ml-0.5" />
            </span>
          </div>
          <div className="text-[11px] text-gray-400 mt-2">Across 18 Affiliated Institutes</div>
        </SpotlightCard>

        <SpotlightCard className="p-5 border border-white/10 bg-[#0A0A0E]/90 rounded-2xl">
          <div className="text-gray-400 text-xs mb-1 font-mono">Placement Readiness Index</div>
          <div className="text-2xl font-bold text-emerald-400 font-mono flex items-center justify-between">
            <span>94.8%</span>
            <span className="text-xs font-normal text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded flex items-center">
              +4.2% <ArrowUpRight className="w-3 h-3 ml-0.5" />
            </span>
          </div>
          <div className="text-[11px] text-gray-400 mt-2">Verified Skill Match</div>
        </SpotlightCard>

        <SpotlightCard className="p-5 border border-white/10 bg-[#0A0A0E]/90 rounded-2xl">
          <div className="text-gray-400 text-xs mb-1 font-mono">Active Internships</div>
          <div className="text-2xl font-bold text-[#7B88ED] font-mono flex items-center justify-between">
            <span>2,410</span>
            <span className="text-xs font-normal text-[#7B88ED] bg-[#5E6AD2]/10 px-2 py-0.5 rounded flex items-center">
              Active <Zap className="w-3 h-3 ml-0.5 fill-current" />
            </span>
          </div>
          <div className="text-[11px] text-gray-400 mt-2">88.2% Conversion Rate</div>
        </SpotlightCard>

        <SpotlightCard className="p-5 border border-white/10 bg-[#0A0A0E]/90 rounded-2xl">
          <div className="text-gray-400 text-xs mb-1 font-mono">Faculty FDP Grants</div>
          <div className="text-2xl font-bold text-purple-300 font-mono flex items-center justify-between">
            <span>1,850</span>
            <span className="text-xs font-normal text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded flex items-center">
              Allocated
            </span>
          </div>
          <div className="text-[11px] text-gray-400 mt-2">52 Partner Industries</div>
        </SpotlightCard>
      </div>

      {/* Detailed Cohort Breakdown Table */}
      <SpotlightCard className="p-6 border border-white/10 bg-[#0A0A0E]/90 rounded-2xl">
        <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
          <Layers className="w-4 h-4 text-[#7B88ED]" />
          <span>Departmental Placement Readiness & Skill Gap Cohort Metrics</span>
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-white/10 text-gray-400 uppercase tracking-wider">
                <th className="pb-3 px-2">Department / Stream</th>
                <th className="pb-3 px-2">Enrolled Students</th>
                <th className="pb-3 px-2">Placement Readiness</th>
                <th className="pb-3 px-2">Identified Skill Gap</th>
                <th className="pb-3 px-2 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.05] text-gray-300">
              {departmentMetrics.map((dm, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02]">
                  <td className="py-3 px-2 font-medium text-white">{dm.dept}</td>
                  <td className="py-3 px-2 text-gray-400">{dm.students} Students</td>
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-400 rounded-full" style={{ width: `${dm.placementReady}%` }} />
                      </div>
                      <span className="text-emerald-400 font-bold">{dm.placementReady}%</span>
                    </div>
                  </td>
                  <td className="py-3 px-2">
                    <span className="bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded border border-amber-500/20 text-[10px]">
                      {dm.topGap}
                    </span>
                  </td>
                  <td className="py-3 px-2 text-right">
                    <span className="text-xs text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded">
                      Bridging Active
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SpotlightCard>
    </div>
  );
}
