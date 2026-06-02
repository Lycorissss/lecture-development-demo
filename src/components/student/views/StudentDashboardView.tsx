"use client";

import React from "react";

export function StudentDashboardView() {
  return (
    <div className="w-full h-full bg-[#F9F9FA] p-8 lg:p-12 font-inter text-[#0D0F12]">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header */}
        <div>
          <h2 className="text-[32px] font-instrument-serif text-[#0D0F12] m-0">Welcome back, John</h2>
          <p className="text-[#6B6F7A] mt-2">Pick up where you left off in the MasterClass.</p>
        </div>

        {/* Progress Overview Card */}
        <div className="bg-white rounded-[20px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB]">
          <div className="flex justify-between items-end mb-4">
            <div>
              <div className="text-[14px] font-semibold text-[#6B6F7A] uppercase tracking-wider mb-2">Overall Progress</div>
              <div className="text-[40px] font-instrument-serif leading-none text-[#0D0F12]">34%</div>
            </div>
            <div className="text-[#4F46E5] font-medium text-[15px]">4 of 12 Modules Completed</div>
          </div>
          
          <div className="h-3 w-full bg-[#F3F4F6] rounded-full overflow-hidden mt-6">
            <div className="h-full bg-[#4F46E5] rounded-full" style={{ width: "34%" }} />
          </div>
        </div>

        {/* Two Column Layout for Continue Watching & Stats */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
          
          {/* Continue Watching */}
          <div className="bg-white rounded-[20px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] flex flex-col">
            <h3 className="text-[18px] font-semibold mb-6">Continue Learning</h3>
            
            <div className="flex gap-6 items-center">
              <div className="w-40 h-24 bg-[#0D0F12] rounded-xl relative overflow-hidden flex-shrink-0">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400" alt="Video thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                     <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z"/></svg>
                   </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] text-white font-mono">12:45 / 24:00</div>
              </div>
              
              <div className="flex-1">
                <div className="text-[#4F46E5] text-[12px] font-bold uppercase tracking-widest mb-1">Module 05</div>
                <h4 className="text-[16px] font-semibold text-[#0D0F12] mb-2 leading-tight">Balkan Markets Essentials</h4>
                <p className="text-[13px] text-[#6B6F7A] line-clamp-2 mb-4">
                  Learn how to navigate complex market entry barriers in Eastern Europe with our proven framework.
                </p>
                <button className="bg-[#0D0F12] text-white px-5 py-2 rounded-lg text-[13px] font-medium hover:bg-black transition-colors">
                  Resume Video
                </button>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-[20px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] flex flex-col gap-4">
            <h3 className="text-[18px] font-semibold mb-2">Your Stats</h3>
            
            <div className="bg-[#F9F9FA] p-4 rounded-xl flex items-center justify-between">
              <div className="text-[13px] text-[#6B6F7A] font-medium">Watch Time</div>
              <div className="text-[16px] font-bold text-[#0D0F12]">4h 20m</div>
            </div>
            
            <div className="bg-[#F9F9FA] p-4 rounded-xl flex items-center justify-between">
              <div className="text-[13px] text-[#6B6F7A] font-medium">Assignments</div>
              <div className="text-[16px] font-bold text-[#0D0F12]">1 / 3</div>
            </div>
            
            <div className="bg-[#F9F9FA] p-4 rounded-xl flex items-center justify-between">
              <div className="text-[13px] text-[#6B6F7A] font-medium">Certificates</div>
              <div className="text-[16px] font-bold text-[#0D0F12]">0</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
