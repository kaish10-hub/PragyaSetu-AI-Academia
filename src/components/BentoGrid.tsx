"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Layers, 
  Command, 
  Sparkles, 
  Activity, 
  Sliders, 
  Zap, 
  ShieldCheck, 
  Search, 
  Check, 
  ExternalLink,
  Code2
} from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

export function BentoGrid() {
  const [cmdSearch, setCmdSearch] = useState("");
  const [selectedDepth, setSelectedDepth] = useState<"flat" | "linear">("linear");

  const commands = [
    { title: "Assign to team lead", shortcut: "⌘ A", category: "Actions" },
    { title: "Toggle ambient glow mode", shortcut: "⌘ G", category: "Preferences" },
    { title: "Copy token definitions", shortcut: "⌥ C", category: "Design Tokens" },
    { title: "Deploy staging build", shortcut: "⌘ D", category: "Pipeline" },
  ];

  const filteredCommands = commands.filter(cmd => 
    cmd.title.toLowerCase().includes(cmdSearch.toLowerCase())
  );

  return (
    <section id="features" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#8A8F98] mb-4">
            <Layers className="w-3.5 h-3.5 text-[#5E6AD2]" />
            <span>ARCHITECTURE & BENTO GRID</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#EDEDEF] mb-4">
            Obsessively crafted for modern developer tools
          </h2>
          <p className="text-[#8A8F98] text-base sm:text-lg">
            Every surface is illuminated by layered ambient light sources and responsive micro-interactions.
          </p>
        </div>

        {/* Asymmetric 6-Column Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 auto-rows-[240px]">
          
          {/* Bento Card 1: HERO CARD (Spans 4 columns, 2 rows) */}
          <SpotlightCard className="lg:col-span-4 lg:row-span-2 p-8 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#5E6AD2]/20 border border-[#5E6AD2]/40 flex items-center justify-center text-[#6872D9] shadow-accent-glow">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-gray-400">
                  Feature 01 / Core Engine
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#EDEDEF] mb-3 group-hover:text-white transition-colors">
                Multi-Layer Ambient Background & Mouse Spotlight
              </h3>
              <p className="text-[#8A8F98] text-sm sm:text-base max-w-xl leading-relaxed">
                Stack four distinct layers: radial base gradient, SVG noise texture to prevent banding, floating animated gradient light pools, and technical 64px grid overlays.
              </p>
            </div>

            {/* Interactive Visual Graphic inside Hero Card */}
            <div className="mt-6 relative w-full h-48 rounded-xl bg-[#17181E] border border-white/10 overflow-hidden flex items-center justify-center">
              {/* Simulated Ambient Blobs */}
              <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[#5E6AD2]/40 blur-2xl animate-pulse" />
              <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-40 h-40 rounded-full bg-purple-600/30 blur-2xl animate-float-reverse" />
              
              {/* Interactive Card Replica inside */}
              <div className="relative z-10 p-5 rounded-xl bg-white/[0.05] backdrop-blur-md border border-white/20 shadow-2xl max-w-sm text-center">
                <div className="text-xs font-mono text-indigo-300 mb-1">Interactive Depth Component</div>
                <div className="text-sm font-medium text-white">Hover anywhere to track 300px spotlight</div>
                <div className="mt-3 flex justify-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">120 FPS</span>
                  <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 text-[10px]">Zero Layout Shift</span>
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* Bento Card 2: Command Palette Simulator (Spans 2 columns, 2 rows) */}
          <SpotlightCard className="lg:col-span-2 lg:row-span-2 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300">
                  <Command className="w-4 h-4" />
                </div>
                <span className="text-xs font-mono text-gray-500">⌘K Palette</span>
              </div>
              <h3 className="text-xl font-semibold text-[#EDEDEF] mb-2">
                Keyboard First
              </h3>
              <p className="text-xs text-[#8A8F98] mb-4">
                Instant desktop-native command palette navigation.
              </p>

              {/* Live Search Input */}
              <div className="relative mb-3">
                <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Type a command..."
                  value={cmdSearch}
                  onChange={(e) => setCmdSearch(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-[#14151A]/80 border border-white/10 text-xs text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#5E6AD2]"
                />
              </div>

              {/* Command List */}
              <div className="space-y-1.5 max-h-[160px] overflow-y-auto pr-1">
                {filteredCommands.map((cmd, i) => (
                  <div
                    key={i}
                    className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 flex items-center justify-between text-xs transition-colors cursor-pointer"
                  >
                    <span className="text-gray-300 text-[11px] truncate">{cmd.title}</span>
                    <span className="font-mono text-[10px] text-gray-500 bg-white/5 px-1.5 py-0.5 rounded">
                      {cmd.shortcut}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-gray-500 flex items-center justify-between font-mono">
              <span>Shortcuts Active</span>
              <span className="text-indigo-400">Raycast Speed</span>
            </div>
          </SpotlightCard>

          {/* Bento Card 3: Real-Time Telemetry Metrics (Spans 2 columns, 1 row) */}
          <SpotlightCard className="lg:col-span-2 lg:row-span-1 p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono text-gray-400">FPS & Latency</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </div>

            <div>
              <div className="text-2xl font-bold text-white tracking-tight">0.12ms</div>
              <div className="text-xs text-gray-400 mt-0.5">Interaction Latency Target</div>
            </div>

            {/* Sparkline Graphic */}
            <div className="h-4 flex items-end gap-1">
              {[40, 65, 80, 55, 90, 75, 100, 85, 95, 110, 100].map((h, idx) => (
                <div
                  key={idx}
                  className="flex-1 bg-gradient-to-t from-[#5E6AD2] to-[#6872D9] rounded-t-sm"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </SpotlightCard>

          {/* Bento Card 4: Multi-Layer Shadow Formula (Spans 4 columns, 1 row) */}
          <SpotlightCard className="lg:col-span-4 lg:row-span-1 p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#6872D9]" />
                <h3 className="text-base font-semibold text-[#EDEDEF]">Depth Architecture Comparison</h3>
              </div>
              
              {/* Toggle */}
              <div className="flex items-center gap-1 bg-[#14151A]/90 p-1 rounded-lg border border-white/10 text-xs">
                <button
                  onClick={() => setSelectedDepth("flat")}
                  className={`px-2.5 py-1 rounded transition-all ${
                    selectedDepth === "flat" ? "bg-white/10 text-white" : "text-gray-500"
                  }`}
                >
                  Flat Dark Mode
                </button>
                <button
                  onClick={() => setSelectedDepth("linear")}
                  className={`px-2.5 py-1 rounded transition-all ${
                    selectedDepth === "linear" ? "bg-[#5E6AD2] text-white shadow-sm" : "text-gray-500"
                  }`}
                >
                  Linear 3-Layer Depth
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className={`p-3 rounded-xl border text-xs transition-all ${
                selectedDepth === "flat" ? "bg-gray-900 border-gray-700 text-gray-300" : "bg-white/[0.02] border-white/5 opacity-50"
              }`}>
                <div className="font-mono text-[10px] text-gray-400 mb-1">Standard Flat Mode</div>
                <p>Single solid #121212 background with 1px border. No light pools.</p>
              </div>

              <div className={`p-3 rounded-xl border text-xs transition-all ${
                selectedDepth === "linear" ? "bg-gradient-to-b from-[#5E6AD2]/20 to-white/[0.05] border-[#5E6AD2]/40 shadow-accent-glow text-white" : "bg-white/[0.02] border-white/5 opacity-50"
              }`}>
                <div className="font-mono text-[10px] text-indigo-300 mb-1">Linear Ambient System</div>
                <p>Border highlight + diffuse shadow + ambient darkness + accent glow.</p>
              </div>
            </div>
          </SpotlightCard>

        </div>

      </div>
    </section>
  );
}
