"use client";

import React from "react";

const ANALYTICS = {
  totalRevenue: 485625000, // Rp 485,625,000
  totalStudents: 125
};

export function DashboardView() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(amount);
  };

  return (
    <div>
      <h2 style={{ fontSize: "28px", margin: "0 0 24px 0", fontFamily: "Instrument Serif" }}>Dashboard Overview</h2>
      <div className="analytics-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "40px" }}>
        <div style={{ background: "#fff", borderRadius: "16px", padding: "32px", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
          <h3 style={{ fontSize: "16px", color: "#6B6F7A", margin: "0 0 8px 0", fontWeight: 500 }}>Total Revenue</h3>
          <div style={{ fontSize: "36px", fontWeight: 700, fontFamily: "Instrument Serif" }}>{formatCurrency(ANALYTICS.totalRevenue)}</div>
        </div>
        <div style={{ background: "#fff", borderRadius: "16px", padding: "32px", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
          <h3 style={{ fontSize: "16px", color: "#6B6F7A", margin: "0 0 8px 0", fontWeight: 500 }}>Total Students Enrolled</h3>
          <div style={{ fontSize: "36px", fontWeight: 700, fontFamily: "Instrument Serif" }}>{ANALYTICS.totalStudents}</div>
        </div>
      </div>
    </div>
  );
}
