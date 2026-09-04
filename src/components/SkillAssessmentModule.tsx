"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BrainCircuit, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  Award, 
  BarChart, 
  RotateCcw,
  Check,
  Zap,
  Star
} from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

interface Question {
  id: number;
  category: "Ayush HealthTech" | "Web & Cloud Tech" | "AI & Biomedical" | "Soft Skills";
  question: string;
  options: string[];
  correctIndex: number;
  skillAssessed: string;
}

const sampleQuestions: Question[] = [
  {
    id: 1,
    category: "Ayush HealthTech",
    question: "Which Good Clinical Practice (GCP) guidelines are mandatory when conducting clinical trials for standardized Ayush formulations?",
    options: [
      "ISO 9001 standard manufacturing procedures only",
      "Ministry of Ayush GCP Guidelines & ICMR Ethical Guidelines",
      "Basic WHO food safety protocols",
      "Standard software quality assurance testing"
    ],
    correctIndex: 1,
    skillAssessed: "Clinical Research Protocols"
  },
  {
    id: 2,
    category: "AI & Biomedical",
    question: "In biomedical signal processing for pulse diagnosis (Nadi Pariksha), which algorithm is most effective for filtering movement noise?",
    options: [
      "K-Means Clustering",
      "Bandpass Butterworth Filter + Empirical Mode Decomposition (EMD)",
      "Standard Linear Regression",
      "Direct Cosine Transformation"
    ],
    correctIndex: 1,
    skillAssessed: "Biomedical Signal Processing"
  },
  {
    id: 3,
    category: "Web & Cloud Tech",
    question: "How do Server Actions in Next.js App Router securely mutate database records without requiring manual API endpoint boilerplate?",
    options: [
      "By exposing database credentials directly in the DOM",
      "By running server-side code directly invoked via asynchronous function calls",
      "By sending plain text SQL queries in client HTTP headers",
      "By rendering static HTML files on the client browser"
    ],
    correctIndex: 1,
    skillAssessed: "Full-Stack Web Development"
  },
  {
    id: 4,
    category: "Ayush HealthTech",
    question: "What is the key standard parameter used to verify the purity and botanical identity of raw Ayush herbal extracts?",
    options: [
      "High-Performance Thin-Layer Chromatography (HPTLC) fingerprinting",
      "Simple visual color scale matching",
      "Moisture absorption rate only",
      "Basic pH paper testing"
    ],
    correctIndex: 0,
    skillAssessed: "Ayush Herbology & Formulations"
  }
];

export function SkillAssessmentModule() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<"quiz" | "report" | "courses">("quiz");

  const handleSelectOption = (questionIndex: number, optionIndex: number) => {
    setAnswers(prev => ({ ...prev, [questionIndex]: optionIndex }));
  };

  const handleFinishQuiz = () => {
    setIsSubmitted(true);
    setActiveTab("report");
  };

  const resetQuiz = () => {
    setAnswers({});
    setCurrentQuestion(0);
    setIsSubmitted(false);
    setActiveTab("quiz");
  };

  // Calculate score
  let correctCount = 0;
  sampleQuestions.forEach((q, idx) => {
    if (answers[idx] === q.correctIndex) correctCount++;
  });
  const scorePercent = Math.round((correctCount / sampleQuestions.length) * 100);

  // Skill proficiency map
  const skillProfile = [
    { name: "Full-Stack Web Development", score: 92, target: 85, status: "Mastered", color: "bg-emerald-500" },
    { name: "AI & Machine Learning", score: 85, target: 90, status: "Near Benchmark", color: "bg-indigo-500" },
    { name: "Biomedical Signal Processing", score: 70, target: 85, status: "Gap Identified", color: "bg-amber-500" },
    { name: "Ayush Herbology & Formulations", score: 65, target: 88, status: "Gap Identified", color: "bg-[#5E6AD2]" },
    { name: "Clinical Research Protocols", score: 55, target: 80, status: "Action Required", color: "bg-rose-500" }
  ];

  return (
    <div className="space-y-8">
      {/* Header & Mode Selector */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/15 pb-6">
        <div>
          <div className="flex items-center gap-3 mb-1.5">
            <span className="p-2 rounded-xl bg-[#5E6AD2]/25 border border-[#5E6AD2]/50 text-[#8E99F3] shadow-sm">
              <BrainCircuit className="w-6 h-6" />
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Skill Profiling & Gap Analysis Engine
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-300 font-medium">
            Evaluate technical competencies, Ayush domain expertise, and generate industry-ready skill profiles.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-1.5 bg-[#0D0D12] p-1.5 rounded-2xl border border-white/20 shadow-inner">
          <button
            onClick={() => setActiveTab("quiz")}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeTab === "quiz" ? "bg-[#5E6AD2] text-white shadow-md" : "text-gray-300 hover:text-white"
            }`}
          >
            Take Questionnaire
          </button>
          <button
            onClick={() => setActiveTab("report")}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeTab === "report" ? "bg-[#5E6AD2] text-white shadow-md" : "text-gray-300 hover:text-white"
            }`}
          >
            Skill Gap Report
          </button>
          <button
            onClick={() => setActiveTab("courses")}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeTab === "courses" ? "bg-[#5E6AD2] text-white shadow-md" : "text-gray-300 hover:text-white"
            }`}
          >
            Recommended Courses
          </button>
        </div>
      </div>

      {/* TAB 1: QUESTIONNAIRE */}
      {activeTab === "quiz" && (
        <SpotlightCard className="p-6 sm:p-8 border border-white/20 bg-[#0A0A0E]/95 rounded-2xl relative shadow-2xl">
          {!isSubmitted ? (
            <div>
              {/* Question Meta */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-5 border-b border-white/15">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono uppercase font-bold tracking-wider text-[#8E99F3] bg-[#5E6AD2]/25 px-3 py-1 rounded-lg border border-[#5E6AD2]/50 shadow-sm">
                    Category: {sampleQuestions[currentQuestion].category}
                  </span>
                  <span className="text-sm text-gray-300">
                    Assessing: <strong className="text-white font-mono text-base">{sampleQuestions[currentQuestion].skillAssessed}</strong>
                  </span>
                </div>
                <div className="text-sm font-mono text-gray-300 font-semibold bg-white/[0.06] px-3 py-1 rounded-lg border border-white/10">
                  Question {currentQuestion + 1} of {sampleQuestions.length}
                </div>
              </div>

              {/* Question Text */}
              <h3 className="text-lg sm:text-2xl font-bold text-white mb-8 leading-relaxed tracking-tight">
                {sampleQuestions[currentQuestion].question}
              </h3>

              {/* Options */}
              <div className="space-y-4 mb-8">
                {sampleQuestions[currentQuestion].options.map((opt, optIdx) => {
                  const isSelected = answers[currentQuestion] === optIdx;
                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectOption(currentQuestion, optIdx)}
                      className={`w-full p-4 sm:p-5 rounded-2xl text-left text-sm sm:text-base font-semibold transition-all flex items-center justify-between border ${
                        isSelected
                          ? "bg-[#5E6AD2]/30 border-[#5E6AD2] text-white shadow-[0_0_20px_rgba(94,106,210,0.35)]"
                          : "bg-white/[0.05] border-white/15 text-gray-200 hover:bg-white/[0.1] hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-7 h-7 rounded-xl border flex items-center justify-center text-xs font-mono font-bold ${
                          isSelected ? "border-white bg-[#5E6AD2] text-white" : "border-gray-500 bg-white/5 text-gray-300"
                        }`}>
                          {String.fromCharCode(65 + optIdx)}
                        </div>
                        <span className="leading-normal">{opt}</span>
                      </div>
                      {isSelected && <Check className="w-5 h-5 text-white" />}
                    </button>
                  );
                })}
              </div>

              {/* Quiz Navigation Controls */}
              <div className="flex items-center justify-between pt-6 border-t border-white/15">
                <button
                  disabled={currentQuestion === 0}
                  onClick={() => setCurrentQuestion(prev => prev - 1)}
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold text-gray-300 hover:text-white bg-white/[0.06] border border-white/10 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Previous Question
                </button>

                {currentQuestion < sampleQuestions.length - 1 ? (
                  <button
                    disabled={answers[currentQuestion] === undefined}
                    onClick={() => setCurrentQuestion(prev => prev + 1)}
                    className="px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-[#5E6AD2] hover:bg-[#6872D9] shadow-accent-glow disabled:opacity-40"
                  >
                    Next Question
                  </button>
                ) : (
                  <button
                    disabled={Object.keys(answers).length < sampleQuestions.length}
                    onClick={handleFinishQuiz}
                    className="px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-[0_0_25px_rgba(16,185,129,0.4)] disabled:opacity-40 flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Submit & Generate Gap Report</span>
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Assessment Completed!</h3>
              <p className="text-sm text-gray-400 max-w-md mx-auto">
                You scored <strong className="text-emerald-400 font-mono">{scorePercent}%</strong>. Your skill profile has been updated and matched against current industry demands.
              </p>
              <div className="flex justify-center gap-3 pt-4">
                <button
                  onClick={() => setActiveTab("report")}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#5E6AD2] hover:bg-[#6872D9] shadow-accent-glow flex items-center gap-2"
                >
                  <BarChart className="w-4 h-4" />
                  <span>View Detailed Gap Report</span>
                </button>
                <button
                  onClick={resetQuiz}
                  className="px-4 py-2.5 rounded-xl text-xs font-medium text-gray-300 bg-white/[0.05] border border-white/10 hover:bg-white/10 flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Assessment</span>
                </button>
              </div>
            </div>
          )}
        </SpotlightCard>
      )}

      {/* TAB 2: SKILL GAP REPORT */}
      {activeTab === "report" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Overall Profile Card */}
          <SpotlightCard className="p-6 border border-white/10 bg-[#0A0A0E]/90 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-[#7B88ED] uppercase mb-1">Automated Skill Index</div>
              <h3 className="text-xl font-bold text-white mb-4">Overall Proficiency: 75%</h3>
              
              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden mb-6">
                <div className="h-full bg-gradient-to-r from-[#5E6AD2] via-indigo-400 to-emerald-400 rounded-full" style={{ width: "75%" }} />
              </div>

              <div className="space-y-3 text-xs text-gray-300 border-t border-white/[0.08] pt-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Tested Skills:</span>
                  <span className="font-mono text-white">5 Domains</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Industry Match Rating:</span>
                  <span className="font-mono text-emerald-400 font-bold">84% Match</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Verified Credentials:</span>
                  <span className="font-mono text-indigo-300">4 Badges</span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-3 rounded-xl bg-[#5E6AD2]/10 border border-[#5E6AD2]/30 text-[11px] text-gray-300 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-[#7B88ED] shrink-0 mt-0.5" />
              <span>
                Recommendation: Complete 1 module in <strong>Clinical Research Protocols</strong> to unlock top 5% Ayush Healthcare internship opportunities.
              </span>
            </div>
          </SpotlightCard>

          {/* Right: Detailed Skill Gap Bars */}
          <SpotlightCard className="lg:col-span-2 p-6 border border-white/10 bg-[#0A0A0E]/90 rounded-2xl">
            <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
              <BarChart className="w-4 h-4 text-[#7B88ED]" />
              <span>Skill Gap Analysis vs Industry Benchmarks</span>
            </h3>

            <div className="space-y-5">
              {skillProfile.map((sk, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-white">{sk.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 font-mono">Current: {sk.score}%</span>
                      <span className="text-gray-500 font-mono">| Target: {sk.target}%</span>
                      <span className={`px-2 py-0.5 text-[9px] font-mono rounded ${
                        sk.score >= sk.target ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                      }`}>
                        {sk.status}
                      </span>
                    </div>
                  </div>

                  {/* Dual Bar (Current vs Benchmark) */}
                  <div className="relative w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${sk.color} rounded-full transition-all duration-500`}
                      style={{ width: `${sk.score}%` }} 
                    />
                    <div 
                      className="absolute top-0 bottom-0 w-0.5 bg-white/70 z-10"
                      style={{ left: `${sk.target}%` }}
                      title={`Target Benchmark: ${sk.target}%`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Green: Target Met</span>
                <span className="w-2 h-2 rounded-full bg-amber-400 ml-2" />
                <span>Amber: Recommended Bridge Program</span>
              </div>
              <button 
                onClick={() => setActiveTab("courses")}
                className="text-[#7B88ED] hover:underline font-medium flex items-center gap-1"
              >
                <span>View Remedial Courses</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </SpotlightCard>
        </div>
      )}

      {/* TAB 3: RECOMMENDED COURSES & TRAINING */}
      {activeTab === "courses" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SpotlightCard className="p-5 border border-white/10 bg-[#0A0A0E]/90 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono text-purple-300 bg-purple-500/20 px-2 py-0.5 rounded border border-purple-500/30">
                  Ayush Ministry Certified
                </span>
                <span className="text-xs text-gray-400 font-mono">4 Weeks</span>
              </div>
              <h4 className="text-sm font-semibold text-white mb-2">Ayush GCP & Clinical Trial Protocol Design</h4>
              <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                Learn ethical guidelines, trial design, and standardization techniques for herbal formulations.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="text-[9px] bg-white/[0.05] px-2 py-0.5 rounded text-gray-300">Clinical Protocols</span>
                <span className="text-[9px] bg-white/[0.05] px-2 py-0.5 rounded text-gray-300">Ayush Ethics</span>
              </div>
            </div>
            <button className="w-full py-2 rounded-xl text-xs font-semibold text-white bg-[#5E6AD2] hover:bg-[#6872D9] transition-all flex items-center justify-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Enroll in Program</span>
            </button>
          </SpotlightCard>

          <SpotlightCard className="p-5 border border-white/10 bg-[#0A0A0E]/90 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30">
                  Industry Partner Specialization
                </span>
                <span className="text-xs text-gray-400 font-mono">6 Weeks</span>
              </div>
              <h4 className="text-sm font-semibold text-white mb-2">Biomedical Sensor & Pulse Signal Processing</h4>
              <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                Hands-on filtering techniques for PPG, ECG, and Nadi sensors with Python signal libraries.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="text-[9px] bg-white/[0.05] px-2 py-0.5 rounded text-gray-300">Signal Filtering</span>
                <span className="text-[9px] bg-white/[0.05] px-2 py-0.5 rounded text-gray-300">Python Bio</span>
              </div>
            </div>
            <button className="w-full py-2 rounded-xl text-xs font-semibold text-white bg-[#5E6AD2] hover:bg-[#6872D9] transition-all flex items-center justify-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Enroll in Program</span>
            </button>
          </SpotlightCard>

          <SpotlightCard className="p-5 border border-white/10 bg-[#0A0A0E]/90 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono text-blue-300 bg-blue-500/20 px-2 py-0.5 rounded border border-blue-500/30">
                  Advanced AI Certification
                </span>
                <span className="text-xs text-gray-400 font-mono">8 Weeks</span>
              </div>
              <h4 className="text-sm font-semibold text-white mb-2">Healthcare Predictive AI & Diagnostic Models</h4>
              <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                Build and deploy deep learning models for herbal ingredient classification and diagnostic aids.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="text-[9px] bg-white/[0.05] px-2 py-0.5 rounded text-gray-300">PyTorch</span>
                <span className="text-[9px] bg-white/[0.05] px-2 py-0.5 rounded text-gray-300">Medical AI</span>
              </div>
            </div>
            <button className="w-full py-2 rounded-xl text-xs font-semibold text-white bg-[#5E6AD2] hover:bg-[#6872D9] transition-all flex items-center justify-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Enroll in Program</span>
            </button>
          </SpotlightCard>
        </div>
      )}
    </div>
  );
}
