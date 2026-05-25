"use client";

import React, { useState } from "react";

const MODULES = [
  { id: "m1", title: "Module 1: The Philosophy of Projectising Life", duration: "18:20", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: "m2a", title: "Module 2A: Preparation Phase", duration: "24:15", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: "m2b", title: "Module 2B: Execution Phase", duration: "32:10", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: "m2c", title: "Module 2C: Finalisation", duration: "19:45", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: "m3", title: "Module 3: Public-Private Partnerships", duration: "45:00", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
];

export default function StudentDashboard() {
  const [activeVideo, setActiveVideo] = useState(MODULES[0]);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadStatus("Uploading...");
      // Simulate file upload delay
      setTimeout(() => setUploadStatus("Uploaded successfully! Pending review."), 2000);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#F9F9FA", color: "#0D0F12", padding: "40px 20px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        
        <header className="dashboard-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
          <div>
            <h1 style={{ fontFamily: "Instrument Serif", fontSize: "40px", margin: 0 }}>Student Dashboard</h1>
            <p style={{ color: "#6B6F7A", margin: "8px 0 0 0" }}>Welcome to Daniel Dobrev's MasterClass</p>
          </div>
          <button style={{ padding: "10px 20px", background: "#0D0F12", color: "#fff", borderRadius: "8px", border: "none", cursor: "pointer" }}>
            Logout
          </button>
        </header>

        <div className="dashboard-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "24px", marginBottom: "40px" }}>
          
          {/* Video Player Area */}
          <div style={{ background: "#fff", borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
            <video 
              key={activeVideo.id}
              controls 
              style={{ width: "100%", aspectRatio: "16/9", background: "#000" }}
              src={activeVideo.videoUrl}
            />
            <div style={{ padding: "24px" }}>
              <h2 style={{ fontSize: "24px", margin: "0 0 8px 0", fontFamily: "Instrument Serif" }}>{activeVideo.title}</h2>
              <p style={{ color: "#6B6F7A", margin: 0 }}>Instructor: Daniel Dobrev</p>
            </div>
          </div>

          {/* Module List */}
          <div style={{ background: "#fff", borderRadius: "16px", padding: "24px", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontSize: "18px", margin: "0 0 16px 0" }}>Course Modules</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {MODULES.map((mod) => (
                <button 
                  key={mod.id}
                  onClick={() => setActiveVideo(mod)}
                  style={{ 
                    display: "flex", 
                    justifyContent: "space-between",
                    padding: "12px", 
                    borderRadius: "8px", 
                    border: activeVideo.id === mod.id ? "1px solid #1F8A5B" : "1px solid #E5E7EB",
                    background: activeVideo.id === mod.id ? "#F0FDF4" : "#fff",
                    textAlign: "left",
                    cursor: "pointer",
                    transition: "all 0.2s"
                  }}
                >
                  <span style={{ fontWeight: activeVideo.id === mod.id ? 600 : 400 }}>{mod.title}</span>
                  <span style={{ color: "#9DA3AF", fontSize: "12px" }}>{mod.duration}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project Passport Area */}
        <div style={{ background: "#fff", borderRadius: "16px", padding: "32px", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
          <h2 style={{ fontSize: "24px", margin: "0 0 8px 0", fontFamily: "Instrument Serif" }}>Project Passport</h2>
          <p style={{ color: "#6B6F7A", marginBottom: "24px" }}>
            Download the Project Passport template, fill it out based on the lectures, and upload it here for review by Daniel Dobrev.
          </p>
          
          <div className="passport-buttons" style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); alert("Downloading template..."); }}
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", border: "1px solid #E5E7EB", borderRadius: "8px", color: "#0D0F12", textDecoration: "none", fontWeight: 500 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Download Template
            </a>
            
            <label style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", background: "#1F8A5B", color: "#fff", borderRadius: "8px", cursor: "pointer", fontWeight: 500 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
              Upload Completed Passport
              <input type="file" style={{ display: "none" }} onChange={handleFileUpload} accept=".pdf,.doc,.docx" />
            </label>
          </div>
          
          {uploadStatus && (
            <div style={{ marginTop: "16px", padding: "12px", background: uploadStatus.includes("successfully") ? "#F0FDF4" : "#FFFBEB", color: uploadStatus.includes("successfully") ? "#1F8A5B" : "#D97706", borderRadius: "8px", fontSize: "14px", fontWeight: 500 }}>
              {uploadStatus}
            </div>
          )}
        </div>

      </div>
      <style>{`
        @media (max-width: 768px) {
          .dashboard-header {
            flex-direction: column;
            align-items: flex-start !important;
            gap: 16px;
          }
          .dashboard-grid {
            grid-template-columns: 1fr !important;
          }
          .passport-buttons {
            flex-direction: column;
          }
          .passport-buttons > a, .passport-buttons > label {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
