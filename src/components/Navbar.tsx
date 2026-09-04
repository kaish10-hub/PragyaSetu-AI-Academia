"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  X, 
  ChevronRight, 
  GraduationCap, 
  Briefcase, 
  UserCheck, 
  Building2, 
  BrainCircuit, 
  Award, 
  BarChart3,
  Layers
} from "lucide-react";

export type ActiveRole = "student" | "industry" | "academician" | "institution";
export type ActiveTab = "overview" | "assessment" | "opportunities" | "faculty" | "portfolio" | "analytics" | "supabase";

interface NavbarProps {
  activeRole: ActiveRole;
  setActiveRole: (role: ActiveRole) => void;
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export function Navbar({ activeRole, setActiveRole, activeTab, setActiveTab }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);

  const roleConfig = {
    student: {
      label: "Student Persona",
      name: "Arjun Sharma",
      detail: "B.Tech + Ayush Health Tech",
      icon: GraduationCap,
      color: "from-indigo-500 to-blue-600",
      badge: "Student"
    },
    industry: {
      label: "Industry Recruiter",
      name: "Dr. R. K. Mehta",
      detail: "VP Talent, AyurTech Labs",
      icon: Briefcase,
      color: "from-emerald-500 to-teal-600",
      badge: "Industry"
    },
    academician: {
      label: "Academician / Faculty",
      name: "Prof. Sunita Sen",
      detail: "Assoc. Professor, AIIA",
      icon: UserCheck,
      color: "from-purple-500 to-pink-600",
      badge: "Faculty"
    },
    institution: {
      label: "Institution Admin",
      name: "Ministry Admin Portal",
      detail: "AIIA / Ministry of Ayush",
      icon: Building2,
      color: "from-amber-500 to-orange-600",
      badge: "Institution"
    }
  };

  const currentRole = roleConfig[activeRole];
  const RoleIcon = currentRole.icon;

  // Short concise keywords for navbar
  const navItems: { id: ActiveTab; label: string; icon: React.ElementType }[] = [
    { id: "overview", label: "Overview", icon: Layers },
    { id: "assessment", label: "Assessment", icon: BrainCircuit },
    { id: "opportunities", label: "Opportunities", icon: Briefcase },
    { id: "faculty", label: "Faculty", icon: UserCheck },
    { id: "portfolio", label: "Portfolio", icon: Award },
    { id: "analytics", label: "Analytics", icon: BarChart3 }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/15 bg-[#07070A]/95 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-300">
      <div className="w-full px-4 sm:px-8 lg:px-12 h-20 flex items-center justify-between gap-6">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <button 
            onClick={() => setActiveTab("overview")}
            className="flex items-center gap-3 group text-left"
          >
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-[#5E6AD2] to-[#3B449A] flex items-center justify-center shadow-[0_0_20px_rgba(94,106,210,0.4)] group-hover:scale-105 transition-transform duration-300">
              <GraduationCap className="w-6 h-6 text-white" />
              <div className="absolute inset-0 rounded-xl border border-white/30" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-2xl text-white tracking-tight group-hover:text-indigo-200 transition-colors">
                Pragya Setu
              </span>
              <span className="text-xs text-gray-200 font-semibold tracking-tight hidden sm:block">
                Ministry of Ayush • AIIA Platform
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation Links — Short Concise Keywords (2X Font) */}
        <nav className="hidden lg:flex items-center gap-2 bg-white/[0.08] p-2 rounded-2xl border border-white/20 shadow-inner">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative px-5 py-2.5 rounded-xl text-base sm:text-lg font-bold transition-all flex items-center gap-2.5 ${
                  isActive
                    ? "text-white bg-[#5E6AD2] border border-white/30 shadow-[0_0_20px_rgba(94,106,210,0.6)]"
                    : "text-gray-200 hover:text-white hover:bg-white/[0.12]"
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-gray-300"}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Role Switcher Pill */}
        <div className="relative shrink-0">
          <button
            onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
            className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/[0.07] border border-white/20 hover:border-white/40 transition-all hover:bg-white/[0.12] shadow-sm"
          >
            <div className={`w-7 h-7 rounded-lg bg-gradient-to-r ${currentRole.color} flex items-center justify-center shadow-md`}>
              <RoleIcon className="w-4 h-4 text-white" />
            </div>
            <div className="text-left hidden sm:block">
              <div className="text-xs text-gray-300 font-mono leading-none">Switch Persona</div>
              <div className="text-sm font-bold text-white leading-tight flex items-center gap-1">
                {currentRole.badge}
              </div>
            </div>
            <ChevronRight className={`w-4 h-4 text-gray-300 transition-transform ${roleDropdownOpen ? "rotate-90" : ""}`} />
          </button>

          {/* Role Dropdown Menu */}
          <AnimatePresence>
            {roleDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 mt-3 w-72 rounded-2xl bg-[#0D0D12] border border-white/20 shadow-[0_15px_50px_rgba(0,0,0,0.9)] p-2.5 z-50 backdrop-blur-2xl"
              >
                <div className="px-3 py-2 border-b border-white/10 mb-1.5">
                  <div className="text-xs font-mono text-indigo-300 font-bold uppercase tracking-wider">Select Persona View</div>
                  <div className="text-xs text-gray-300">Experience platform by user role</div>
                </div>

                {(Object.keys(roleConfig) as ActiveRole[]).map((roleKey) => {
                  const r = roleConfig[roleKey];
                  const Icon = r.icon;
                  const isSelected = activeRole === roleKey;
                  return (
                    <button
                      key={roleKey}
                      onClick={() => {
                        setActiveRole(roleKey);
                        setRoleDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl transition-all text-left ${
                        isSelected 
                          ? "bg-[#5E6AD2]/30 border border-[#5E6AD2]/60 text-white font-semibold shadow-sm" 
                          : "hover:bg-white/[0.08] text-gray-200 hover:text-white border border-transparent"
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${r.color} flex items-center justify-center shrink-0 shadow-sm`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold truncate flex items-center justify-between">
                          <span>{r.label}</span>
                          {isSelected && <span className="w-2 h-2 rounded-full bg-[#8E99F3] shadow-[0_0_8px_#8E99F3]" />}
                        </div>
                        <div className="text-xs text-gray-300 truncate">{r.detail}</div>
                      </div>
                    </button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-white/[0.08] border border-white/20 text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-b border-white/20 bg-[#07070A]/95 backdrop-blur-2xl overflow-hidden"
          >
            <div className="p-4 space-y-2">
              <div className="text-xs font-mono text-gray-300 font-bold px-2 py-1">Navigation Views</div>
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                      isActive ? "bg-[#5E6AD2] text-white border border-white/20" : "text-gray-300 hover:text-white hover:bg-white/[0.08]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-indigo-300" />
                      <span>{item.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
