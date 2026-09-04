"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Terminal, 
  Cpu, 
  Zap, 
  CheckCircle2, 
  Copy, 
  Check, 
  Play, 
  ShieldCheck, 
  Sparkles,
  Command,
  Activity
} from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

export function Hero() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"code" | "telemetry" | "graph">("code");
  const [isRunning, setIsRunning] = useState(false);
  const [runLog, setRunLog] = useState<string[]>([]);

  const installCommand = "npx pragya-setu@latest init";

  const handleCopy = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunExecution = () => {
    setIsRunning(true);
    setRunLog(["> Initializing Pragya Setu runtime engine..."]);
    
    setTimeout(() => {
      setRunLog(prev => [...prev, "✓ Connected to distributed agent cluster (us-east-1)"]);
    }, 400);

    setTimeout(() => {
      setRunLog(prev => [...prev, "✓ Compiling reactive UI graph (0.12ms)"]);
    }, 800);

    setTimeout(() => {
      setRunLog(prev => [...prev, "⚡ Pipeline executing: 100% test coverage verified"]);
      setIsRunning(false);
    }, 1200);
  };

  return (
    <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#5E6AD2]/10 border border-[#5E6AD2]/30 shadow-[0_0_15px_rgba(94,106,210,0.2)]">
            <span className="w-2 h-2 rounded-full bg-[#5E6AD2] animate-pulse" />
            <span className="text-xs font-mono text-[#6872D9] font-medium tracking-wide">
              Introducing Pragya Setu 2.4 — Distributed UI Engine
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#6872D9]" />
          </div>
        </motion.div>

        {/* Display Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto mb-6"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[1.08]">
            <span className="bg-gradient-to-b from-white via-white/95 to-white/60 bg-clip-text text-transparent block">
              Precision design system
            </span>
            <span className="bg-gradient-to-r from-[#5E6AD2] via-indigo-300 to-[#6872D9] bg-clip-text text-transparent block mt-1 animate-shimmer">
              for high-velocity teams
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg lg:text-xl text-[#8A8F98] font-normal text-center max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Craft cinematic developer experiences with multi-layered ambient depth, mouse-tracking light pools, and instant micro-interactions.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          {/* Primary CTA */}
          <a
            href="#sandbox"
            className="w-full sm:w-auto relative group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-sm text-white bg-[#5E6AD2] hover:bg-[#6872D9] shadow-accent-glow hover:shadow-accent-glow-hover transition-all duration-200 active:scale-[0.98] overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/30" />
            <Zap className="w-4 h-4 fill-white/20" />
            <span>Deploy Interactive App</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* CLI Copy Pill */}
          <div className="w-full sm:w-auto flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all font-mono text-xs text-[#EDEDEF]">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-[#5E6AD2]" />
              <span className="text-gray-300">{installCommand}</span>
            </div>
            <button
              onClick={handleCopy}
              className="p-1.5 rounded-md hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              title="Copy to clipboard"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </motion.div>

        {/* Interactive App Window Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto"
        >
          <SpotlightCard className="p-0 border border-white/10 bg-[#0A0A0C]/90 shadow-[0_0_80px_rgba(94,106,210,0.15)] rounded-2xl overflow-hidden">
            {/* Window Top Bar */}
            <div className="px-4 py-3 border-b border-white/[0.08] bg-[#050506] flex items-center justify-between">
              {/* Traffic Light Dots */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600/30" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/30" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/30" />
                <span className="ml-3 font-mono text-xs text-gray-500 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                  Pragya-Engine.config.ts
                </span>
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-1 bg-white/[0.04] p-1 rounded-lg border border-white/5">
                <button
                  onClick={() => setActiveTab("code")}
                  className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                    activeTab === "code" ? "bg-[#5E6AD2] text-white shadow-sm" : "text-gray-400 hover:text-white"
                  }`}
                >
                  Source Code
                </button>
                <button
                  onClick={() => setActiveTab("telemetry")}
                  className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                    activeTab === "telemetry" ? "bg-[#5E6AD2] text-white shadow-sm" : "text-gray-400 hover:text-white"
                  }`}
                >
                  Telemetry
                </button>
              </div>
            </div>

            {/* Window Body */}
            <div className="p-6 font-mono text-xs leading-relaxed overflow-x-auto min-h-[280px] bg-[#060609]">
              {activeTab === "code" && (
                <div className="space-y-1">
                  <p className="text-gray-500">// 1. Initialize Linear Ambient Design Engine</p>
                  <p>
                    <span className="text-purple-400">import</span> &#123; <span className="text-blue-300">createDesignSystem</span> &#125; <span className="text-purple-400">from</span> <span className="text-emerald-300">&quot;@pragya-setu/core&quot;</span>;
                  </p>
                  <br />
                  <p className="text-gray-500">// 2. Configure multi-layered depth tokens</p>
                  <p>
                    <span className="text-purple-400">export const</span> <span className="text-amber-300">linearTheme</span> = <span className="text-blue-300">createDesignSystem</span>(&#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-indigo-300">palette</span>: &#123;
                  </p>
                  <p className="pl-8">
                    <span className="text-gray-300">backgroundBase</span>: <span className="text-emerald-300">&quot;#050506&quot;</span>,
                  </p>
                  <p className="pl-8">
                    <span className="text-gray-300">accent</span>: <span className="text-emerald-300">&quot;#5E6AD2&quot;</span>,
                  </p>
                  <p className="pl-8">
                    <span className="text-gray-300">ambientGlow</span>: <span className="text-emerald-300">&quot;rgba(94, 106, 210, 0.3)&quot;</span>
                  </p>
                  <p className="pl-4">&#125;,</p>
                  <p className="pl-4">
                    <span className="text-indigo-300">shadows</span>: &#123;
                  </p>
                  <p className="pl-8">
                    <span className="text-gray-300">layered</span>: <span className="text-emerald-300">&quot;0 0 0 1px rgba(255,255,255,0.06), 0 8px 40px rgba(0,0,0,0.5)&quot;</span>
                  </p>
                  <p className="pl-4">&#125;</p>
                  <p>&#125;);</p>
                </div>
              )}

              {activeTab === "telemetry" && (
                <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                      <div className="text-gray-400 text-[11px] mb-1">FPS Render Target</div>
                      <div className="text-lg font-semibold text-emerald-400 flex items-center gap-1.5">
                        <Activity className="w-4 h-4" /> 120 FPS
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                      <div className="text-gray-400 text-[11px] mb-1">Animation Easing</div>
                      <div className="text-lg font-semibold text-[#6872D9]">expo-out (300ms)</div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                      <div className="text-gray-400 text-[11px] mb-1">Contrast Ratio</div>
                      <div className="text-lg font-semibold text-amber-300">15:1 Compliant</div>
                    </div>
                  </div>
                  <div className="text-gray-400">System Log:</div>
                  <div className="p-3 rounded-lg bg-black/60 border border-white/5 text-gray-300 space-y-1">
                    {runLog.length === 0 ? (
                      <p className="text-gray-500 italic">Click &quot;Run Execution&quot; below to trigger live engine telemetry.</p>
                    ) : (
                      runLog.map((log, idx) => (
                        <p key={idx} className={log.startsWith("⚡") ? "text-emerald-400 font-semibold" : "text-gray-300"}>
                          {log}
                        </p>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Window Footer Control Bar */}
            <div className="px-4 py-3 border-t border-white/[0.08] bg-[#050506] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Cpu className="w-3.5 h-3.5 text-[#5E6AD2]" />
                <span>Compiler Status: Ready</span>
              </div>
              <button
                onClick={handleRunExecution}
                disabled={isRunning}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#5E6AD2]/20 hover:bg-[#5E6AD2]/30 text-[#6872D9] border border-[#5E6AD2]/40 text-xs font-medium transition-all active:scale-95 disabled:opacity-50"
              >
                <Play className="w-3 h-3 fill-current" />
                <span>{isRunning ? "Running..." : "Run Execution"}</span>
              </button>
            </div>
          </SpotlightCard>
        </motion.div>

      </div>
    </section>
  );
}
