"use client";

import React, { useState } from "react";

const MODULES = [
  { id: "m1", title: "Module 1: The Philosophy of Projectising Life", duration: "18:20", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: "m2a", title: "Module 2A: Preparation Phase", duration: "24:15", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: "m2b", title: "Module 2B: Execution Phase", duration: "32:10", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: "m2c", title: "Module 2C: Finalisation", duration: "19:45", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: "m3", title: "Module 3: Public-Private Partnerships", duration: "45:00", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
];

export default function ModulesPage() {
  const [activeVideo, setActiveVideo] = useState(MODULES[0]);

  return (
    <div style={{ padding: "40px", fontFamily: "Inter, sans-serif", color: "#0D0F12" }}>
      <header style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "28px", margin: "0 0 8px 0", fontFamily: "Instrument Serif" }}>Learning Modules</h2>
        <p style={{ fontSize: "14px", color: "#6B6F7A", margin: 0 }}>Watch the lectures and access the materials for your MasterClass.</p>
      </header>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "24px" }}>

        {/* Video Player */}
        <div style={{ background: "#fff", borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
          <video
            key={activeVideo.id}
            controls
            style={{ width: "100%", aspectRatio: "16/9", background: "#000", display: "block" }}
            src={activeVideo.videoUrl}
          />
          <div style={{ padding: "24px" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, color: "#2B4AFF", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Now Playing
            </span>
            <h3 style={{ fontSize: "22px", margin: "8px 0 6px 0", fontFamily: "Instrument Serif" }}>{activeVideo.title}</h3>
            <p style={{ color: "#6B6F7A", margin: "0 0 20px 0", fontSize: "14px" }}>Instructor: Daniel Dobrev</p>
            <div style={{ paddingTop: "20px", borderTop: "1px solid #F3F4F6" }}>
              <h4 style={{ fontSize: "14px", fontWeight: 600, margin: "0 0 8px 0" }}>About this module</h4>
              <p style={{ fontSize: "14px", color: "#6B6F7A", lineHeight: 1.65, margin: 0 }}>
                In this module, you will learn the core concepts and frameworks required to succeed in this section of the MasterClass. Take notes and review the reading materials provided alongside the lecture.
              </p>
            </div>
          </div>
        </div>

        {/* Module List */}
        <div style={{ background: "#fff", borderRadius: "16px", padding: "24px", boxShadow: "0 4px 20px rgba(0,0,0,0.05)", height: "fit-content" }}>
          <h3 style={{ fontSize: "18px", margin: "0 0 20px 0", fontFamily: "Instrument Serif" }}>Course Modules</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {MODULES.map((mod, index) => (
              <button
                key={mod.id}
                onClick={() => setActiveVideo(mod)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "14px",
                  borderRadius: "10px",
                  border: activeVideo.id === mod.id ? "1px solid #1F8A5B" : "1px solid #E5E7EB",
                  background: activeVideo.id === mod.id ? "#F0FDF4" : "#fff",
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  width: "100%",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                  <span style={{ fontSize: "11px", fontWeight: 700, color: activeVideo.id === mod.id ? "#1F8A5B" : "#9DA3AF", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    MODULE {index + 1}
                  </span>
                  <span style={{ fontSize: "12px", color: "#9DA3AF", fontWeight: 500 }}>{mod.duration}</span>
                </div>
                <span style={{ fontSize: "14px", fontWeight: 500, color: activeVideo.id === mod.id ? "#0D0F12" : "#4B5563" }}>
                  {mod.title.includes(": ") ? mod.title.split(": ")[1] : mod.title}
                </span>
              </button>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: 2fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
