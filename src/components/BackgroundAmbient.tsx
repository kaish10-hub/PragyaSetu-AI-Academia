"use client";

import React from "react";

export function BackgroundAmbient() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Layer 1 — Base Radial Gradient */}
      <div className="absolute inset-0 bg-base-radial" />

      {/* Layer 2 — Noise Texture Overlay */}
      <div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay" />

      {/* Layer 3 — Animated Gradient Ambient Light Blobs */}
      {/* Primary Blob: Top-center indigo glow */}
      <div 
        className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[700px] rounded-full blur-[140px] opacity-25 animate-float-slow"
        style={{
          background: "radial-gradient(circle, rgba(94,106,210,0.8) 0%, rgba(94,106,210,0.1) 60%, transparent 100%)",
        }}
      />

      {/* Secondary Blob: Left side purple accent */}
      <div 
        className="absolute top-[35%] -left-[10%] w-[700px] h-[700px] rounded-full blur-[130px] opacity-20 animate-float-reverse"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.6) 0%, rgba(94,106,210,0.1) 60%, transparent 100%)",
        }}
      />

      {/* Tertiary Blob: Right side cyan/indigo mix */}
      <div 
        className="absolute top-[60%] -right-[10%] w-[650px] h-[650px] rounded-full blur-[120px] opacity-15 animate-float-slow"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.5) 0%, rgba(94,106,210,0.1) 60%, transparent 100%)",
        }}
      />

      {/* Bottom Glow Accent */}
      <div 
        className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 w-[1200px] h-[500px] rounded-full blur-[150px] opacity-15 animate-pulse-glow"
        style={{
          background: "radial-gradient(ellipse at bottom, rgba(94,106,210,0.7) 0%, transparent 70%)",
        }}
      />

      {/* Layer 4 — 64px Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />
    </div>
  );
}
