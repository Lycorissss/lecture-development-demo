"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function StudentSidebar() {
  const pathname = usePathname();

  const navItems = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="9"></rect><rect x="14" y="3" width="7" height="5"></rect><rect x="14" y="12" width="7" height="9"></rect><rect x="3" y="16" width="7" height="5"></rect></svg>,
    },
    {
      href: "/modules",
      label: "My Modules",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>,
    },
    {
      href: "/assignments",
      label: "Assignments",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>,
    },
    {
      href: "/certificate",
      label: "Certificate",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>,
    },
  ];

  return (
    <aside style={{
      width: "260px",
      background: "#fff",
      borderRight: "1px solid #E5E7EB",
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      top: 0,
      bottom: 0,
      left: 0,
      zIndex: 100,
    }}>
      <div style={{ padding: "32px 24px", borderBottom: "1px solid #F3F4F6" }}>
        <h1 style={{ fontFamily: "Instrument Serif", fontSize: "28px", margin: 0 }}>
          Student Portal
        </h1>
        <p style={{ color: "#6B6F7A", fontSize: "13px", margin: "4px 0 0 0" }}>MasterClass Program</p>
      </div>

      <nav style={{ padding: "24px 16px", flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px 16px",
                borderRadius: "8px",
                background: isActive ? "#F3F4F6" : "transparent",
                color: isActive ? "#0D0F12" : "#6B6F7A",
                fontWeight: isActive ? 600 : 500,
                fontSize: "15px",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
            >
              {item.icon}
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div style={{ padding: "24px 16px", borderTop: "1px solid #F3F4F6" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px", borderRadius: "10px" }}>
          <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "linear-gradient(135deg, #6366F1, #8B5CF6)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "13px", flexShrink: 0 }}>
            JD
          </div>
          <div style={{ overflow: "hidden" }}>
            <div style={{ fontSize: "14px", fontWeight: 600, color: "#0D0F12", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>John Doe</div>
            <div style={{ fontSize: "12px", color: "#6B6F7A" }}>Student</div>
          </div>
        </div>
        <button style={{
          width: "100%",
          marginTop: "8px",
          padding: "10px 12px",
          background: "#FEF2F2",
          color: "#DC2626",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          fontWeight: 500,
          fontSize: "14px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          justifyContent: "center",
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
          Logout
        </button>
      </div>
    </aside>
  );
}
