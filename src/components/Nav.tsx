"use client";

import React from "react";

export default function Nav({ accent, onEnroll }: { accent: string, onEnroll: () => void }) {
  return (
    <nav className="nav">
      <a href="#top" className="nav-logo">
        <span className="logo-mark" style={{ background: accent }} />
        <span>Dobrev<span className="logo-dot" style={{ color: accent }}>.</span></span>
      </a>
      <div className="nav-links">
        <a href="#curriculum">Curriculum</a>
        <a href="#administrative">Access</a>
        <a href="#payment">Pricing</a>
        <a href="/admin" style={{ fontWeight: 500, marginRight: "8px" }}>Login</a>
        <a href="#payment" onClick={(e) => { e.preventDefault(); onEnroll(); }} className="nav-cta" style={{ background: accent }}>Enroll →</a>
      </div>
    </nav>
  );
}
