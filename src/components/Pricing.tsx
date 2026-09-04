"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Zap, ArrowRight, ShieldCheck } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

export function Pricing() {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: "Starter Developer",
      tagline: "Ideal for individual developers building side projects.",
      priceMonthly: "$0",
      priceAnnual: "$0",
      period: "forever free",
      popular: false,
      cta: "Get Started Free",
      features: [
        "Single developer seat",
        "Full Linear / Modern token library",
        "Community support & docs",
        "Export CSS & Tailwind v4 theme",
        "Standard spotlight components",
      ],
    },
    {
      name: "Pro Engineer",
      tagline: "Designed for senior engineers & high-speed creators.",
      priceMonthly: "$24",
      priceAnnual: "$19",
      period: "per month, billed annually",
      popular: true,
      cta: "Start 14-Day Free Trial",
      features: [
        "Everything in Starter",
        "Unlimited project workspaces",
        "Framer Motion micro-interaction pack",
        "Advanced bento grid templates",
        "Custom ambient light blob generator",
        "Priority 1-on-1 support",
      ],
    },
    {
      name: "Team & Enterprise",
      tagline: "For scaling engineering organizations and design system teams.",
      priceMonthly: "$79",
      priceAnnual: "$65",
      period: "per seat/mo, billed annually",
      popular: false,
      cta: "Contact Enterprise",
      features: [
        "Everything in Pro Engineer",
        "Custom SSO & SAML authentication",
        "Dedicated design system architect",
        "99.99% SLA Uptime guarantee",
        "Figma to code automated sync",
        "Custom SOC2 compliance report",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#8A8F98] mb-4">
            <Zap className="w-3.5 h-3.5 text-[#5E6AD2]" />
            <span>TRANSPARENT PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#EDEDEF] mb-4">
            Simple plans for modern software builders
          </h2>
          <p className="text-[#8A8F98] text-base sm:text-lg">
            Start for free, upgrade when you need custom ambient components and enterprise SLAs.
          </p>

          {/* Billing Switcher */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className={`text-xs font-mono ${!annual ? "text-white font-semibold" : "text-gray-400"}`}>
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className="w-12 h-6 rounded-full bg-white/[0.1] border border-white/15 p-1 transition-colors relative"
            >
              <div
                className={`w-4 h-4 rounded-full bg-[#5E6AD2] transition-transform ${
                  annual ? "translate-x-6 bg-[#6872D9]" : "translate-x-0"
                }`}
              />
            </button>
            <span className={`text-xs font-mono flex items-center gap-1.5 ${annual ? "text-white font-semibold" : "text-gray-400"}`}>
              Annual
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#5E6AD2]/20 text-[#6872D9] border border-[#5E6AD2]/30">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <SpotlightCard
              key={index}
              className={`p-8 flex flex-col justify-between relative ${
                plan.popular
                  ? "border-[#5E6AD2]/50 shadow-[0_0_50px_rgba(94,106,210,0.2)] bg-gradient-to-b from-[#5E6AD2]/15 to-white/[0.03]"
                  : "bg-white/[0.03]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#5E6AD2] text-white text-[11px] font-mono font-semibold shadow-accent-glow flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> MOST POPULAR
                </div>
              )}

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                <p className="text-xs text-[#8A8F98] min-h-[36px] mb-6 leading-relaxed">
                  {plan.tagline}
                </p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-white tracking-tight">
                    {annual ? plan.priceAnnual : plan.priceMonthly}
                  </span>
                  <span className="text-xs font-mono text-gray-400 ml-2">/ {plan.period}</span>
                </div>

                <div className="space-y-3 pt-6 border-t border-white/[0.08] mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2.5 text-xs text-gray-300">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                        plan.popular ? "bg-[#5E6AD2]/30 text-[#6872D9]" : "bg-white/10 text-gray-400"
                      }`}>
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#sandbox"
                className={`w-full py-3 rounded-xl text-xs font-semibold text-center transition-all flex items-center justify-center gap-2 ${
                  plan.popular
                    ? "bg-[#5E6AD2] hover:bg-[#6872D9] text-white shadow-accent-glow hover:shadow-accent-glow-hover active:scale-[0.98]"
                    : "bg-white/[0.06] hover:bg-white/[0.1] text-white border border-white/10"
                }`}
              >
                <span>{plan.cta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </SpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
}
