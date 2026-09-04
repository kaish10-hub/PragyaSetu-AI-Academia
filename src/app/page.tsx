"use client";

import React, { useState } from "react";
import { BackgroundAmbient } from "@/components/BackgroundAmbient";
import { Navbar, ActiveRole, ActiveTab } from "@/components/Navbar";
import { HeroBanner } from "@/components/HeroBanner";
import { SkillAssessmentModule } from "@/components/SkillAssessmentModule";
import { InternshipPlacementBoard } from "@/components/InternshipPlacementBoard";
import { FacultyPortalModule } from "@/components/FacultyPortalModule";
import { DigitalPortfolioModule } from "@/components/DigitalPortfolioModule";
import { InstitutionalAnalytics } from "@/components/InstitutionalAnalytics";
import { MigrationGuideModal } from "@/components/MigrationGuideModal";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [activeRole, setActiveRole] = useState<ActiveRole>("student");
  const [activeTab, setActiveTab] = useState<ActiveTab>("overview");

  return (
    <div className="min-h-screen bg-[#050506] text-[#EDEDEF] relative overflow-x-hidden selection:bg-[#5E6AD2] selection:text-white">
      {/* Layered Ambient Depth Lighting */}
      <BackgroundAmbient />

      {/* Main Page Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Bar with Role Switcher & Tab Navigation */}
        <Navbar 
          activeRole={activeRole} 
          setActiveRole={setActiveRole}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        
        <main className="flex-grow w-full px-4 sm:px-8 lg:px-12 py-3">
          {/* TAB 1: OVERVIEW HERO */}
          {activeTab === "overview" && (
            <div className="space-y-12">
              <HeroBanner activeRole={activeRole} setActiveTab={setActiveTab} />
              
              {/* Feature Modules Overview Grid */}
              <div className="space-y-8 pt-8 border-t border-white/[0.08]">
                <div className="text-center max-w-xl mx-auto">
                  <h2 className="text-2xl font-bold text-white tracking-tight">Integrated Platform Capabilities</h2>
                  <p className="text-xs text-gray-400 mt-1">
                    Supporting the complete lifecycle of skill profiling, internships, placements, and faculty development.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div 
                    onClick={() => setActiveTab("assessment")}
                    className="p-6 rounded-2xl bg-[#0A0A0E]/80 border border-white/10 hover:border-[#5E6AD2]/50 transition-all cursor-pointer group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#5E6AD2]/20 border border-[#5E6AD2]/40 text-[#7B88ED] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      🧠
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">Skill Assessment & Gap Analysis</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Students complete technical and domain questionnaires. The platform generates live skill radar maps comparing current competencies against industry demand benchmarks.
                    </p>
                  </div>

                  <div 
                    onClick={() => setActiveTab("opportunities")}
                    className="p-6 rounded-2xl bg-[#0A0A0E]/80 border border-white/10 hover:border-emerald-500/50 transition-all cursor-pointer group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      💼
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">Matched Internships & Job Postings</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Industries post opportunities with skill tags. Students are automatically scored by compatibility % and can apply with real-time status tracking.
                    </p>
                  </div>

                  <div 
                    onClick={() => setActiveTab("faculty")}
                    className="p-6 rounded-2xl bg-[#0A0A0E]/80 border border-white/10 hover:border-purple-500/50 transition-all cursor-pointer group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 text-purple-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      🎓
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">Faculty Development Programs (FDPs)</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Dedicated portal for academicians to apply for industrial training, FDP grants, joint research calls, and industry consultancy opportunities.
                    </p>
                  </div>

                  <div 
                    onClick={() => setActiveTab("analytics")}
                    className="p-6 rounded-2xl bg-[#0A0A0E]/80 border border-white/10 hover:border-amber-500/50 transition-all cursor-pointer group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      📊
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">Institutional Analytics & Readiness</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Dashboards for institutions and policymakers monitoring placement readiness rates, cohort skill gap trends, and industry recruitment outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SKILL ASSESSMENT */}
          {activeTab === "assessment" && <SkillAssessmentModule />}

          {/* TAB 3: OPPORTUNITIES MARKETPLACE */}
          {activeTab === "opportunities" && <InternshipPlacementBoard activeRole={activeRole} />}

          {/* TAB 4: FACULTY PORTAL */}
          {activeTab === "faculty" && <FacultyPortalModule />}

          {/* TAB 5: DIGITAL PORTFOLIO */}
          {activeTab === "portfolio" && <DigitalPortfolioModule />}

          {/* TAB 6: INSTITUTIONAL ANALYTICS */}
          {activeTab === "analytics" && <InstitutionalAnalytics />}

          {/* TAB 7: SUPABASE DATABASE MIGRATION */}
          {activeTab === "supabase" && <MigrationGuideModal />}
        </main>

        <Footer />
      </div>
    </div>
  );
}
