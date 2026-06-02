"use client";

import React, { useState, useEffect, useCallback } from "react";

const BASE_URL = "https://lecture-development-demo.vercel.app";

const SLIDES = [
  {
    id: "cover",
    type: "cover" as const,
    title: "A-TAMS\nMasterClass",
    subtitle: "Platform Overview & Demo",
    description: "A comprehensive walkthrough of the MasterClass learning platform — from public-facing landing page to student & admin dashboards.",
    meta: "Project Development MasterClass · 2025",
  },
  {
    id: "landing",
    type: "demo" as const,
    title: "Landing Page",
    description: "The public-facing homepage features a dark editorial hero section, animated curriculum grid, pricing tiers, and a sleek navigation bar. Designed to convert visitors into enrolled students.",
    demoUrl: `${BASE_URL}/`,
    linkUrl: `${BASE_URL}/`,
    features: ["Hero section with animated card stack", "Curriculum module grid", "Pricing & enrollment CTA", "Responsive navigation"],
  },
  {
    id: "checkout",
    type: "demo" as const,
    title: "Checkout Flow",
    description: "A streamlined checkout experience with order summary, payment method selection, and secure form fields. Supports credit card and bank transfer options.",
    demoUrl: `${BASE_URL}/checkout`,
    linkUrl: `${BASE_URL}/checkout`,
    features: ["Order summary sidebar", "Multiple payment methods", "Form validation", "Secure checkout design"],
  },
  {
    id: "student-dashboard",
    type: "demo" as const,
    title: "Student Dashboard",
    description: "The student overview page displays progress statistics, current module status, and upcoming assignments. Acts as the central hub for enrolled students.",
    demoUrl: `${BASE_URL}/dashboard`,
    linkUrl: `${BASE_URL}/dashboard`,
    features: ["Progress tracking (42%)", "Module completion stats", "Continue learning card", "Upcoming tasks list"],
  },
  {
    id: "student-modules",
    type: "demo" as const,
    title: "Learning Modules",
    description: "Students can browse and watch video lectures organized by module. The video player is accompanied by a module selection panel for easy navigation between lessons.",
    demoUrl: `${BASE_URL}/modules`,
    linkUrl: `${BASE_URL}/modules`,
    features: ["Integrated video player", "Module selection sidebar", "Progress per module", "Instructor information"],
  },
  {
    id: "student-assignments",
    type: "demo" as const,
    title: "Assignments & Tasks",
    description: "Students can download assignment templates, upload completed work via a drag & drop modal, and track their submission history with instructor feedback.",
    demoUrl: `${BASE_URL}/assignments`,
    linkUrl: `${BASE_URL}/assignments`,
    features: ["Download template modal", "Drag & drop file upload", "Submission history table", "Feedback review modal"],
  },
  {
    id: "admin-dashboard",
    type: "demo" as const,
    title: "Admin Panel",
    description: "The administrator dashboard provides full control over the MasterClass — managing students, uploading materials, creating assignments, and reviewing submissions.",
    demoUrl: `${BASE_URL}/admin`,
    linkUrl: `${BASE_URL}/admin`,
    features: ["Revenue & student analytics", "Student management", "Material upload (video, PDF, slides)", "Assignment creation & grading"],
  },
  {
    id: "closing",
    type: "closing" as const,
    title: "Thank You",
    subtitle: "Questions & Discussion",
    description: "The MasterClass platform is built with Next.js, designed for scalability, and deployed on Server for instant global delivery.",
    meta: "Built with Love by ATAMS Indonesia",
    link: BASE_URL,
  },
];

export default function PresentationPage() {
  const [current, setCurrent] = useState(0);
  const total = SLIDES.length;

  const next = useCallback(() => setCurrent((p) => Math.min(p + 1, total - 1)), [total]);
  const prev = useCallback(() => setCurrent((p) => Math.max(p - 1, 0)), []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ([" ", "ArrowRight", "ArrowDown"].includes(e.key)) { e.preventDefault(); next(); }
      if (["ArrowLeft", "ArrowUp"].includes(e.key)) { e.preventDefault(); prev(); }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  /* ─── Touch swipe ─── */
  useEffect(() => {
    let startX = 0;
    const onStart = (e: TouchEvent) => { startX = e.touches[0].clientX; };
    const onEnd = (e: TouchEvent) => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 60) { diff > 0 ? next() : prev(); }
    };
    window.addEventListener("touchstart", onStart);
    window.addEventListener("touchend", onEnd);
    return () => { window.removeEventListener("touchstart", onStart); window.removeEventListener("touchend", onEnd); };
  }, [next, prev]);

  const slide = SLIDES[current];

  return (
    <div style={{ position: "fixed", inset: 0, background: "#F5F5F7", fontFamily: "Inter, sans-serif", color: "#1D1D1F", overflow: "hidden", userSelect: "none" }}>

      {/* Background Decoration */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: "50vw", height: "100vh", background: "linear-gradient(to bottom left, #E8E8ED, transparent)", opacity: 0.6, transform: "skewX(-15deg) translateX(128px)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, width: "40vw", height: "50vh", background: "linear-gradient(to top right, #E8E8ED, transparent)", opacity: 0.6, borderTopRightRadius: "100%", filter: "blur(60px)" }} />
        <div style={{ position: "absolute", top: 24, left: 24, right: 24, bottom: 24, border: "1px solid rgba(29,29,31,0.05)", pointerEvents: "none" }} />
      </div>

      {/* Slide Content */}
      <div style={{ position: "relative", width: "100%", height: "calc(100vh - 60px)", zIndex: 10, display: "flex", alignItems: "center", justifyContent: "center", padding: "48px 80px" }}>
        <div style={{ width: "100%", maxWidth: "1500px", height: "100%", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>

          {/* Brand Header */}
          <div style={{ position: "absolute", top: -8, left: 0, display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#1D1D1F", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontFamily: "Instrument Serif, serif", fontSize: 14 }}>MC</div>
            <div style={{ fontWeight: 500, fontSize: 12, letterSpacing: "0.15em", color: "rgba(29,29,31,0.5)", textTransform: "uppercase" }}>MasterClass Presentation</div>
          </div>

          {/* ─── COVER SLIDE ─── */}
          {slide.type === "cover" && (
            <div style={{ textAlign: "center", maxWidth: 800 }}>
              <div style={{ fontSize: 11, fontFamily: "monospace", letterSpacing: "0.2em", color: "rgba(29,29,31,0.4)", textTransform: "uppercase", marginBottom: 28 }}>
                {slide.meta}
              </div>
              <h1 style={{ fontFamily: "Instrument Serif, serif", fontSize: "clamp(56px, 8vw, 96px)", lineHeight: 1, letterSpacing: "-0.03em", margin: "0 0 16px 0", whiteSpace: "pre-line" }}>
                {slide.title}
              </h1>
              <p style={{ fontFamily: "Instrument Serif, serif", fontSize: "clamp(20px, 2.5vw, 28px)", color: "rgba(29,29,31,0.6)", fontStyle: "italic", margin: "0 0 32px 0" }}>
                {slide.subtitle}
              </p>
              <p style={{ fontSize: 16, color: "rgba(29,29,31,0.5)", lineHeight: 1.7, maxWidth: 540, margin: "0 auto" }}>
                {slide.description}
              </p>
              <div style={{ marginTop: 48, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, color: "rgba(29,29,31,0.3)", fontSize: 13 }}>
                <span>Press</span>
                <span style={{ padding: "2px 10px", background: "rgba(29,29,31,0.06)", borderRadius: 4, fontFamily: "monospace", fontSize: 12 }}>→</span>
                <span>or swipe to navigate</span>
              </div>
            </div>
          )}

          {/* ─── CLOSING SLIDE ─── */}
          {slide.type === "closing" && (
            <div style={{ textAlign: "center", maxWidth: 700 }}>
              <h1 style={{ fontFamily: "Instrument Serif, serif", fontSize: "clamp(56px, 8vw, 84px)", lineHeight: 1.05, letterSpacing: "-0.03em", margin: "0 0 12px 0" }}>
                {slide.title}
              </h1>
              <p style={{ fontFamily: "Instrument Serif, serif", fontSize: "clamp(20px, 2.5vw, 28px)", color: "rgba(29,29,31,0.6)", fontStyle: "italic", margin: "0 0 28px 0" }}>
                {slide.subtitle}
              </p>
              <p style={{ fontSize: 16, color: "rgba(29,29,31,0.5)", lineHeight: 1.7, maxWidth: 500, margin: "0 auto 36px" }}>
                {slide.description}
              </p>
              <a
                href={slide.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", background: "#1D1D1F", color: "#fff", borderRadius: 8, fontSize: 14, fontWeight: 500, textDecoration: "none", transition: "opacity 0.2s" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                Visit Live Demo
              </a>
              <div style={{ marginTop: 24, fontSize: 12, fontFamily: "monospace", color: "rgba(29,29,31,0.35)", letterSpacing: "0.08em" }}>
                {slide.meta}
              </div>
            </div>
          )}

          {/* ─── DEMO SLIDE ─── */}
          {slide.type === "demo" && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.8fr", gap: 56, width: "100%", height: "85%", marginTop: 40, alignItems: "center" }}>

              {/* Text Column */}
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingRight: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
                  <div style={{ width: 48, height: 1, background: "rgba(29,29,31,0.25)" }} />
                  <div style={{ fontSize: 11, fontFamily: "monospace", letterSpacing: "0.2em", color: "rgba(29,29,31,0.45)", textTransform: "uppercase", fontWeight: 600 }}>
                    Slide {String(current + 1).padStart(2, "0")}
                  </div>
                </div>

                <h2 style={{ fontFamily: "Instrument Serif, serif", fontSize: "clamp(36px, 4vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.02em", margin: "0 0 20px 0" }}>
                  {slide.title}
                </h2>

                <p style={{ fontSize: 16, color: "rgba(29,29,31,0.6)", lineHeight: 1.7, margin: "0 0 28px 0" }}>
                  {slide.description}
                </p>

                {/* Feature List */}
                {slide.features && (
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px 0", display: "flex", flexDirection: "column", gap: 10 }}>
                    {slide.features.map((f, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "rgba(29,29,31,0.55)" }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(29,29,31,0.2)", flexShrink: 0 }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}

                {/* CTA */}
                {slide.linkUrl && (
                  <a
                    href={slide.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 500, color: "#1D1D1F", textDecoration: "none", borderBottom: "1px solid rgba(29,29,31,0.2)", paddingBottom: 2, width: "fit-content", transition: "border-color 0.2s" }}
                  >
                    Open Live Demo
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                  </a>
                )}
              </div>

              {/* Mockup Column - Browser Frame with iframe */}
              <div style={{ position: "relative", width: "100%", height: "85vh", maxHeight: 750, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ position: "absolute", inset: 0, background: "#fff", border: "1px solid rgba(29,29,31,0.1)", borderRadius: 16, boxShadow: "0 20px 60px -15px rgba(0,0,0,0.1)", overflow: "hidden", display: "flex", flexDirection: "column" }}>

                  {/* Mac-style browser bar */}
                  <div style={{ height: 44, width: "100%", borderBottom: "1px solid rgba(29,29,31,0.05)", background: "#FAFAFA", display: "flex", alignItems: "center", padding: "0 16px", flexShrink: 0, justifyContent: "space-between" }}>
                    <div style={{ display: "flex", gap: 8 }}>
                      <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#FF5F56", border: "1px solid rgba(0,0,0,0.05)" }} />
                      <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#FFBD2E", border: "1px solid rgba(0,0,0,0.05)" }} />
                      <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#27C93F", border: "1px solid rgba(0,0,0,0.05)" }} />
                    </div>
                    <a
                      href={slide.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: 11, fontFamily: "monospace", color: "rgba(29,29,31,0.4)", background: "#fff", padding: "4px 32px", borderRadius: 6, border: "1px solid rgba(29,29,31,0.05)", boxShadow: "0 1px 2px rgba(0,0,0,0.03)", textDecoration: "none", transition: "color 0.2s" }}
                    >
                      {slide.linkUrl?.replace(/^https?:\/\//, "")}
                    </a>
                    <div style={{ width: 52 }} />
                  </div>

                  {/* iframe content */}
                  <div style={{ flex: 1, overflow: "hidden", background: "#F9F9FA" }}>
                    <iframe
                      src={slide.demoUrl}
                      style={{ width: "100%", height: "100%", border: "none", display: "block" }}
                      title={`Demo: ${slide.title}`}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>
      </div>

      {/* Footer Navigation */}
      <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 40px", zIndex: 30 }}>

        <div style={{ fontSize: 11, fontFamily: "monospace", color: "rgba(29,29,31,0.35)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
          Confidential Pitch Deck
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 24, background: "#fff", padding: "8px 24px", borderRadius: 999, border: "1px solid rgba(29,29,31,0.05)", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
          <button
            onClick={prev}
            disabled={current === 0}
            style={{ background: "none", border: "none", cursor: current === 0 ? "default" : "pointer", fontSize: 18, color: current === 0 ? "rgba(29,29,31,0.15)" : "rgba(29,29,31,0.4)", transition: "color 0.2s", padding: "2px 4px" }}
          >
            ←
          </button>

          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  width: i === current ? 8 : 6,
                  height: i === current ? 8 : 6,
                  borderRadius: "50%",
                  background: i === current ? "#1D1D1F" : "rgba(29,29,31,0.15)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "all 0.3s",
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={current === total - 1}
            style={{ background: "none", border: "none", cursor: current === total - 1 ? "default" : "pointer", fontSize: 18, color: current === total - 1 ? "rgba(29,29,31,0.15)" : "rgba(29,29,31,0.4)", transition: "color 0.2s", padding: "2px 4px" }}
          >
            →
          </button>
        </div>

        <div style={{ fontSize: 12, fontFamily: "monospace", color: "rgba(29,29,31,0.5)" }}>
          {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </div>
      </div>
    </div>
  );
}
