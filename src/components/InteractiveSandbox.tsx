"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sliders, Sparkles, Code2, RefreshCw, Check, Copy } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

export function InteractiveSandbox() {
  const [accentHue, setAccentHue] = useState(235); // Indigo default ~#5E6AD2
  const [glowOpacity, setGlowOpacity] = useState(30);
  const [blurRadius, setBlurRadius] = useState(120);
  const [copiedCode, setCopiedCode] = useState(false);

  const accentColor = `hsl(${accentHue}, 58%, 60%)`;
  const accentGlow = `hsla(${accentHue}, 58%, 60%, ${glowOpacity / 100})`;

  const generatedSnippet = `/* Custom Design System Tokens */
:root {
  --accent-color: ${accentColor};
  --ambient-glow: ${accentGlow};
  --blur-radius: ${blurRadius}px;
  --multi-layer-shadow: 0 0 0 1px rgba(255,255,255,0.06), 
                       0 8px 40px ${accentGlow};
}`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(generatedSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleReset = () => {
    setAccentHue(235);
    setGlowOpacity(30);
    setBlurRadius(120);
  };

  return (
    <section id="sandbox" className="py-24 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#8A8F98] mb-4">
            <Sliders className="w-3.5 h-3.5 text-[#5E6AD2]" />
            <span>LIVE INTERACTIVE SANDBOX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#EDEDEF] mb-4">
            Customize ambient lighting in real time
          </h2>
          <p className="text-[#8A8F98] text-base sm:text-lg">
            Adjust design tokens and watch the ambient depth transform immediately.
          </p>
        </div>

        {/* Sandbox Controls & Live Card Preview Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Panel (5 Columns) */}
          <SpotlightCard className="lg:col-span-5 p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <h3 className="text-lg font-semibold text-[#EDEDEF] flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#5E6AD2]" />
                Token Customizer
              </h3>
              <button
                onClick={handleReset}
                className="text-xs font-mono text-gray-400 hover:text-white flex items-center gap-1 hover:underline"
              >
                <RefreshCw className="w-3 h-3" /> Reset
              </button>
            </div>

            {/* Slider 1: Accent Color Hue */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-gray-300">Accent Color Hue</span>
                <span className="text-indigo-400">{accentHue}° ({accentColor})</span>
              </div>
              <input
                type="range"
                min="180"
                max="320"
                value={accentHue}
                onChange={(e) => setAccentHue(Number(e.target.value))}
                className="w-full accent-[#5E6AD2] cursor-pointer bg-white/10 h-1.5 rounded-lg"
              />
            </div>

            {/* Slider 2: Glow Opacity */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-gray-300">Ambient Glow Opacity</span>
                <span className="text-indigo-400">{glowOpacity}%</span>
              </div>
              <input
                type="range"
                min="5"
                max="80"
                value={glowOpacity}
                onChange={(e) => setGlowOpacity(Number(e.target.value))}
                className="w-full accent-[#5E6AD2] cursor-pointer bg-white/10 h-1.5 rounded-lg"
              />
            </div>

            {/* Slider 3: Blur Radius */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-gray-300">Light Pool Blur</span>
                <span className="text-indigo-400">{blurRadius}px</span>
              </div>
              <input
                type="range"
                min="40"
                max="200"
                value={blurRadius}
                onChange={(e) => setBlurRadius(Number(e.target.value))}
                className="w-full accent-[#5E6AD2] cursor-pointer bg-white/10 h-1.5 rounded-lg"
              />
            </div>

            {/* CSS Token Snippet Output */}
            <div className="pt-4 border-t border-white/[0.08]">
              <div className="flex items-center justify-between mb-2 text-xs font-mono text-gray-400">
                <span className="flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-[#5E6AD2]" /> Generated CSS Variables
                </span>
                <button
                  onClick={handleCopyCode}
                  className="p-1 text-gray-400 hover:text-white rounded transition-colors"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <pre className="p-3 rounded-lg bg-[#14151A]/90 border border-white/10 text-[11px] font-mono text-gray-300 overflow-x-auto">
                {generatedSnippet}
              </pre>
            </div>
          </SpotlightCard>

          {/* Live Preview Card Panel (7 Columns) */}
          <div className="lg:col-span-7 relative p-8 rounded-2xl bg-[#191A21] border border-white/10 min-h-[420px] flex flex-col items-center justify-center overflow-hidden">
            
            {/* Dynamic Custom Light Blob in Preview */}
            <div
              className="absolute pointer-events-none transition-all duration-300"
              style={{
                width: "400px",
                height: "400px",
                borderRadius: "50%",
                background: `radial-gradient(circle, ${accentGlow} 0%, transparent 70%)`,
                filter: `blur(${blurRadius}px)`,
              }}
            />

            {/* Simulated Live UI Card */}
            <div
              className="relative z-10 p-6 rounded-2xl bg-white/[0.05] border border-white/15 backdrop-blur-xl max-w-md w-full transition-all duration-300"
              style={{
                boxShadow: `0 0 0 1px rgba(255,255,255,0.08), 0 12px 48px rgba(0,0,0,0.6), 0 0 ${blurRadius / 2}px ${accentGlow}`,
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition-colors"
                  style={{ backgroundColor: accentColor }}
                >
                  <Sparkles className="w-5 h-5" />
                </div>
                <span
                  className="px-2.5 py-1 rounded-full text-xs font-mono font-medium border"
                  style={{
                    backgroundColor: `hsla(${accentHue}, 58%, 60%, 0.15)`,
                    borderColor: `hsla(${accentHue}, 58%, 60%, 0.4)`,
                    color: accentColor,
                  }}
                >
                  Active Theme
                </span>
              </div>

              <h4 className="text-xl font-semibold text-white mb-2">
                Live Reactive Component
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                This card dynamically responds to your design token adjustments. Look at the edge highlights and radial ambient background emission.
              </p>

              <div className="flex gap-3">
                <button
                  className="flex-1 py-2.5 rounded-lg text-xs font-semibold text-white transition-all shadow-md active:scale-95"
                  style={{ backgroundColor: accentColor }}
                >
                  Primary Action
                </button>
                <button className="px-4 py-2.5 rounded-lg text-xs font-medium text-gray-300 bg-white/[0.08] hover:bg-white/[0.12] border border-white/10">
                  Cancel
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
