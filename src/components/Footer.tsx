"use client";

import React from "react";
import { Terminal, Globe, Share2, MessageSquare, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-10 bg-[#020203] border-t border-white/[0.06] pt-16 pb-12 text-xs text-[#8A8F98]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-white/[0.06]">
          
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-[#5E6AD2] flex items-center justify-center text-white shadow-accent-glow">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <span className="font-semibold text-sm text-white tracking-tight">Pragya Setu</span>
            </a>
            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              Precision design system for developer tools, internal dashboards, and cinematic dark interfaces. Built with Next.js & Tailwind CSS.
            </p>

            {/* System Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>All Systems Operational</span>
            </div>
          </div>

          {/* Nav Col 1 */}
          <div>
            <h4 className="font-semibold text-white mb-3">Product</h4>
            <ul className="space-y-2.5">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#sandbox" className="hover:text-white transition-colors">Token Customizer</a></li>
              <li><a href="#architecture" className="hover:text-white transition-colors">Bento Grid</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Nav Col 2 */}
          <div>
            <h4 className="font-semibold text-white mb-3">Resources</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GitHub Repository</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Release Notes</a></li>
            </ul>
          </div>

          {/* Nav Col 3 */}
          <div>
            <h4 className="font-semibold text-white mb-3">Company</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Pragya Setu Inc. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a href="#" className="p-2 rounded-lg hover:bg-white/[0.06] text-gray-400 hover:text-white transition-colors" title="Global Network">
              <Globe className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-lg hover:bg-white/[0.06] text-gray-400 hover:text-white transition-colors" title="Community Chat">
              <MessageSquare className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-lg hover:bg-white/[0.06] text-gray-400 hover:text-white transition-colors" title="Share System">
              <Share2 className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
