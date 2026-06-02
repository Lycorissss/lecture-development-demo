"use client";

import React, { useState } from "react";

const MODULES = [
  { id: "m1", title: "Module 1: The Philosophy of Projectising Life", duration: "18:20", completed: true },
  { id: "m2a", title: "Module 2A: Preparation Phase", duration: "24:15", completed: true },
  { id: "m2b", title: "Module 2B: Execution Phase", duration: "32:10", completed: true },
  { id: "m2c", title: "Module 2C: Finalisation", duration: "19:45", completed: true },
  { id: "m3", title: "Module 3: Public-Private Partnerships", duration: "45:00", completed: false },
  { id: "m4", title: "Module 4: Funding Strategies", duration: "28:30", completed: false },
];

export function StudentModulesView() {
  const [activeModule, setActiveModule] = useState(MODULES[4]);

  return (
    <div className="w-full h-full bg-[#F9F9FA] p-8 lg:p-10 font-inter text-[#0D0F12]">
      <div className="max-w-[1200px] mx-auto h-full flex flex-col">
        
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-[28px] font-instrument-serif text-[#0D0F12] m-0">My Modules</h2>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-8 flex-1 min-h-0">
          
          {/* Main Video Area */}
          <div className="flex-1 flex flex-col gap-6 min-w-0">
            {/* Video Player Mockup */}
            <div className="w-full aspect-video bg-black rounded-2xl overflow-hidden relative shadow-lg">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" alt="Video cover" className="absolute inset-0 w-full h-full object-cover opacity-70" />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <button className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-all border border-white/30 hover:scale-110">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z"/></svg>
                 </button>
              </div>

              {/* Fake Video Controls */}
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="w-full h-1 bg-white/30 rounded-full mb-4">
                  <div className="w-1/3 h-full bg-[#4F46E5] rounded-full relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow" />
                  </div>
                </div>
                <div className="flex justify-between items-center text-white text-[12px] font-mono">
                  <div className="flex gap-4 items-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z"/></svg>
                    <span>15:00 / {activeModule.duration}</span>
                  </div>
                  <div className="flex gap-4">
                    <span>CC</span>
                    <span>HD</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M8 3v18"/><path d="M16 3v18"/><path d="M3 12h18"/></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Details */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB]">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-[22px] font-semibold text-[#0D0F12] leading-tight">{activeModule.title}</h3>
                <button className="px-4 py-2 bg-[#F0FDF4] text-[#1F8A5B] rounded-lg text-[13px] font-semibold border border-[#1F8A5B]/20">
                  Mark as Complete
                </button>
              </div>
              <p className="text-[#6B6F7A] text-[14px] max-w-3xl leading-relaxed">
                In this module, Daniel explores the intricate frameworks needed to build a solid foundation before executing any major project. You will learn the specific steps required to analyze stakeholders and prepare blue-prints.
              </p>
              
              <div className="mt-6 pt-6 border-t border-[#F3F4F6] flex gap-4">
                <button className="flex items-center gap-2 text-[#4F46E5] text-[14px] font-medium hover:underline">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
                  Download Slides (PDF)
                </button>
                <button className="flex items-center gap-2 text-[#4F46E5] text-[14px] font-medium hover:underline">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
                  Download Transcript
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar Playlist */}
          <div className="w-full lg:w-[350px] bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] flex flex-col shrink-0 overflow-hidden">
            <div className="p-5 border-b border-[#F3F4F6] bg-[#F9F9FA]">
              <h3 className="font-semibold text-[#0D0F12]">Course Content</h3>
              <p className="text-[12px] text-[#6B6F7A] mt-1">4 of 12 completed</p>
            </div>
            
            <div className="flex-1 overflow-y-auto custom-scrollbar p-3 flex flex-col gap-2">
              {MODULES.map((mod) => (
                <button
                  key={mod.id}
                  onClick={() => setActiveModule(mod)}
                  className={`w-full text-left p-3 rounded-xl transition-all flex items-start gap-3 ${
                    activeModule.id === mod.id 
                      ? "bg-[#4F46E5]/5 border border-[#4F46E5]/20" 
                      : "hover:bg-[#F3F4F6] border border-transparent"
                  }`}
                >
                  <div className="mt-0.5 shrink-0">
                    {mod.completed ? (
                      <div className="w-5 h-5 rounded-full bg-[#1F8A5B] flex items-center justify-center text-white">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                    ) : (
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${activeModule.id === mod.id ? 'border-[#4F46E5]' : 'border-[#D1D5DB]'}`}>
                        {activeModule.id === mod.id && <div className="w-2 h-2 rounded-full bg-[#4F46E5]" />}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className={`text-[13px] font-medium leading-tight mb-1 ${activeModule.id === mod.id ? 'text-[#4F46E5]' : 'text-[#0D0F12]'}`}>
                      {mod.title}
                    </div>
                    <div className="text-[11px] text-[#9DA3AF] flex items-center gap-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      {mod.duration}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
