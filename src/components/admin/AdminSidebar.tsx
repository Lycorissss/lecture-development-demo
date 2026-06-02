"use client";

import React from "react";

export function AdminSidebar({ activeView, setActiveView, isSidebarOpen, setIsSidebarOpen }: { activeView: string, setActiveView: (v: string) => void, isSidebarOpen: boolean, setIsSidebarOpen: (v: boolean) => void }) {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="9"></rect><rect x="14" y="3" width="7" height="5"></rect><rect x="14" y="12" width="7" height="9"></rect><rect x="3" y="16" width="7" height="5"></rect></svg> },
    { id: "students", label: "Students", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> },
    { id: "materials", label: "Materials", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg> },
    { id: "assignments", label: "Assignments", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> },
  ];

  return (
    <>
      {/* Sidebar Overlay (Mobile) */}
      {isSidebarOpen && (
        <div 
          onClick={() => setIsSidebarOpen(false)}
          className="sidebar-overlay"
          style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.5)", zIndex: 90 }}
        />
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`} style={{ 
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
        transition: "transform 0.3s ease"
      }}>
        <div style={{ padding: "32px 24px", borderBottom: "1px solid #F3F4F6" }}>
          <h1 style={{ fontFamily: "Instrument Serif", fontSize: "28px", margin: 0, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            Admin Panel
            <button className="mobile-close" onClick={() => setIsSidebarOpen(false)} style={{ background: "none", border: "none", fontSize: "24px", cursor: "pointer", padding: 0 }}>&times;</button>
          </h1>
        </div>
        
        <nav style={{ padding: "24px 16px", flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => { setActiveView(item.id); setIsSidebarOpen(false); }}
              style={{
                display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px", borderRadius: "8px", border: "none",
                background: activeView === item.id ? "#F3F4F6" : "transparent",
                color: activeView === item.id ? "#0D0F12" : "#6B6F7A",
                fontWeight: activeView === item.id ? 600 : 500,
                cursor: "pointer", fontSize: "15px", textAlign: "left", transition: "all 0.2s"
              }}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        <div style={{ padding: "24px 16px", borderTop: "1px solid #F3F4F6" }}>
          <button style={{ width: "100%", padding: "12px", background: "#FEF2F2", color: "#DC2626", borderRadius: "8px", border: "none", cursor: "pointer", fontWeight: 500, display: "flex", alignItems: "center", gap: "8px", justifyContent: "center" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}
