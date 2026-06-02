"use client";

import React, { useState } from "react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { DashboardView } from "@/components/admin/views/DashboardView";
import { StudentsView } from "@/components/admin/views/StudentsView";
import { MaterialsView } from "@/components/admin/views/MaterialsView";
import { AssignmentsView } from "@/components/admin/views/AssignmentsView";

export default function AdminDashboard() {
  const [activeView, setActiveView] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F9F9FA", color: "#0D0F12" }}>
      <AdminSidebar 
        activeView={activeView} 
        setActiveView={setActiveView} 
        isSidebarOpen={isSidebarOpen} 
        setIsSidebarOpen={setIsSidebarOpen} 
      />

      <main style={{ flex: 1, padding: "40px", width: "100%", boxSizing: "border-box" }} className="main-content">
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <button className="mobile-menu-btn" onClick={() => setIsSidebarOpen(true)} style={{ background: "none", border: "none", cursor: "pointer", display: "none" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
            <div>
              <p style={{ color: "#6B6F7A", margin: "0", fontSize: "14px", fontWeight: 500 }}>Welcome back,</p>
              <h2 style={{ margin: "4px 0 0 0", fontSize: "20px" }}>Daniel Dobrev</h2>
            </div>
          </div>
        </header>

        {/* 
          Using display: block/none to preserve the state inside the modular components.
          If we used conditional rendering (e.g. activeView === "dashboard" && <DashboardView />),
          the component would unmount and lose its mock state (materials, students) when switching tabs.
        */}
        <div style={{ display: activeView === "dashboard" ? "block" : "none" }}>
          <DashboardView />
        </div>
        
        <div style={{ display: activeView === "students" ? "block" : "none" }}>
          <StudentsView />
        </div>
        
        <div style={{ display: activeView === "materials" ? "block" : "none" }}>
          <MaterialsView />
        </div>
        
        <div style={{ display: activeView === "assignments" ? "block" : "none" }}>
          <AssignmentsView />
        </div>
      </main>

      <style>{`
        body { margin: 0; }
        
        .mobile-close {
          display: none;
        }

        @media (min-width: 769px) {
          .main-content {
            margin-left: 260px !important;
            width: calc(100% - 260px) !important;
          }
        }

        @media (max-width: 768px) {
          .main-content {
            margin-left: 0 !important;
            width: 100% !important;
            padding: 24px !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .mobile-close {
            display: block !important;
          }
          .analytics-grid {
            grid-template-columns: 1fr !important;
          }
          .table-responsive {
            margin-right: -32px;
            padding-right: 32px;
          }
        }
      `}</style>
    </div>
  );
}
