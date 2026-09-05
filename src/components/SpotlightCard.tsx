"use client";

import React, { useRef, useState } from "react";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  radiusClassName?: string;
}

export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(94, 106, 210, 0.18)",
  radiusClassName = "rounded-2xl",
  ...props
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden border border-white/[0.12] bg-gradient-to-b from-white/[0.10] to-white/[0.04] ${radiusClassName} shadow-linear-card hover:shadow-linear-hover hover:border-white/[0.18] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${className}`}
      {...props}
    >
      {/* Top Hairline Inner Highlight */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none z-10" />

      {/* Mouse Tracking Radial Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(350px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />

      {/* Border Shimmer Gradient on Hover */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0 rounded-[inherit]"
        style={{
          opacity: opacity * 0.6,
          background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.15), transparent 70%)`,
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
