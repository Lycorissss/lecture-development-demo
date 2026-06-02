"use client";

import React from "react";
import Link from "next/link";

export default function DashboardOverviewPage() {
  return (
    <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto", fontFamily: "Inter, sans-serif", color: "#0D0F12" }}>

      {/* Header */}
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
        <div>
          <p style={{ color: "#6B6F7A", margin: "0", fontSize: "14px", fontWeight: 500 }}>Welcome back,</p>
          <h1 style={{ margin: "4px 0 0 0", fontSize: "28px", fontFamily: "Instrument Serif" }}>John Doe</h1>
        </div>
        <Link
          href="/modules"
          style={{ padding: "10px 20px", background: "#0D0F12", color: "#fff", borderRadius: "8px", border: "none", cursor: "pointer", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}
        >
          Resume Learning →
        </Link>
      </header>

      {/* Stats Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginBottom: "40px" }}>
        <div style={{ background: "#fff", borderRadius: "16px", padding: "32px", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
          <h3 style={{ fontSize: "14px", color: "#6B6F7A", margin: "0 0 8px 0", fontWeight: 500 }}>Overall Progress</h3>
          <div style={{ fontSize: "36px", fontWeight: 700, fontFamily: "Instrument Serif", color: "#0D0F12" }}>42%</div>
          <div style={{ marginTop: "12px", height: "6px", background: "#F3F4F6", borderRadius: "3px", overflow: "hidden" }}>
            <div style={{ width: "42%", height: "100%", background: "#1F8A5B", borderRadius: "3px" }} />
          </div>
        </div>

        <div style={{ background: "#fff", borderRadius: "16px", padding: "32px", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
          <h3 style={{ fontSize: "14px", color: "#6B6F7A", margin: "0 0 8px 0", fontWeight: 500 }}>Modules Completed</h3>
          <div style={{ fontSize: "36px", fontWeight: 700, fontFamily: "Instrument Serif", color: "#0D0F12" }}>3 / 8</div>
          <div style={{ marginTop: "12px", height: "6px", background: "#F3F4F6", borderRadius: "3px", overflow: "hidden" }}>
            <div style={{ width: "37.5%", height: "100%", background: "#2B4AFF", borderRadius: "3px" }} />
          </div>
        </div>

        <div style={{ background: "#fff", borderRadius: "16px", padding: "32px", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
          <h3 style={{ fontSize: "14px", color: "#6B6F7A", margin: "0 0 8px 0", fontWeight: 500 }}>Assignments Submitted</h3>
          <div style={{ fontSize: "36px", fontWeight: 700, fontFamily: "Instrument Serif", color: "#0D0F12" }}>1 / 3</div>
          <div style={{ marginTop: "12px", height: "6px", background: "#F3F4F6", borderRadius: "3px", overflow: "hidden" }}>
            <div style={{ width: "33%", height: "100%", background: "#D97706", borderRadius: "3px" }} />
          </div>
        </div>
      </div>

      {/* Continue Learning + Upcoming Tasks */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>

        {/* Continue Learning */}
        <div>
          <h2 style={{ fontSize: "24px", margin: "0 0 20px 0", fontFamily: "Instrument Serif" }}>Continue Learning</h2>
          <Link href="/modules" style={{ display: "block", background: "#fff", borderRadius: "16px", padding: "24px", boxShadow: "0 4px 20px rgba(0,0,0,0.05)", textDecoration: "none", color: "inherit", transition: "box-shadow 0.2s" }}>
            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <div style={{ width: "120px", height: "80px", background: "#F3F4F6", borderRadius: "10px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#6B6F7A" }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: "11px", fontWeight: 700, color: "#2B4AFF", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 6px 0" }}>Module 2B</p>
                <h3 style={{ fontSize: "16px", fontWeight: 600, margin: "0 0 8px 0", color: "#0D0F12" }}>Execution Phase</h3>
                <p style={{ fontSize: "13px", color: "#6B6F7A", margin: "0 0 12px 0" }}>Effective project execution & stakeholder management.</p>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ flex: 1, height: "6px", background: "#F3F4F6", borderRadius: "3px", overflow: "hidden" }}>
                    <div style={{ width: "65%", height: "100%", background: "#2B4AFF", borderRadius: "3px" }} />
                  </div>
                  <span style={{ fontSize: "12px", color: "#6B6F7A", flexShrink: 0 }}>12:45 / 32:10</span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Upcoming Tasks */}
        <div>
          <h2 style={{ fontSize: "24px", margin: "0 0 20px 0", fontFamily: "Instrument Serif" }}>Upcoming Tasks</h2>
          <div style={{ background: "#fff", borderRadius: "16px", padding: "24px", boxShadow: "0 4px 20px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column", gap: "16px" }}>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", padding: "16px", background: "#FFFBEB", borderRadius: "10px", border: "1px solid #FDE68A" }}>
              <div style={{ width: "36px", height: "36px", background: "#FEF3C7", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#D97706" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontWeight: 600, fontSize: "14px", margin: "0 0 4px 0", color: "#0D0F12" }}>Submit Project Passport</p>
                <p style={{ fontSize: "13px", color: "#6B6F7A", margin: "0 0 8px 0" }}>Download template, complete it, and upload your final PDF for grading.</p>
                <span style={{ display: "inline-block", padding: "3px 8px", background: "#FEF2F2", color: "#DC2626", fontSize: "11px", fontWeight: 700, borderRadius: "4px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Required for Certificate</span>
              </div>
              <Link href="/assignments" style={{ padding: "6px 12px", background: "#0D0F12", color: "#fff", borderRadius: "6px", fontSize: "12px", fontWeight: 500, textDecoration: "none", flexShrink: 0 }}>
                Go →
              </Link>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", padding: "16px", background: "#F9FAFB", borderRadius: "10px", border: "1px solid #E5E7EB" }}>
              <div style={{ width: "36px", height: "36px", background: "#F0FDF4", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#1F8A5B" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontWeight: 600, fontSize: "14px", margin: "0 0 4px 0", color: "#0D0F12" }}>Watch Module 2C: Finalisation</p>
                <p style={{ fontSize: "13px", color: "#6B6F7A", margin: 0 }}>Next up in your learning path. 19:45 min.</p>
              </div>
              <Link href="/modules" style={{ padding: "6px 12px", background: "#fff", color: "#0D0F12", border: "1px solid #E5E7EB", borderRadius: "6px", fontSize: "12px", fontWeight: 500, textDecoration: "none", flexShrink: 0 }}>
                Watch →
              </Link>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: repeat(3, 1fr)"],
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
