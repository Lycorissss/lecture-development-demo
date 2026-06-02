"use client";

import React, { useState } from "react";

const INITIAL_STUDENTS = [
  { id: 1, name: "Budi Santoso", email: "budi.s@example.com", status: "Pending Review", fileUrl: "#" },
  { id: 2, name: "Anita Putri", email: "anita.p@example.com", status: "Approved", fileUrl: "#" },
  { id: 3, name: "Reza Rahadian", email: "reza.r@example.com", status: "Need Revision", fileUrl: "#" },
  { id: 4, name: "Siti Aminah", email: "siti.a@example.com", status: "Not Submitted", fileUrl: null },
];

export function StudentsView() {
  const [students, setStudents] = useState(INITIAL_STUDENTS);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const handleUpdateStatus = (id: number, newStatus: string) => {
    setStudents(students.map(s => s.id === id ? { ...s, status: newStatus } : s));
  };

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          student.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = statusFilter === "All" || student.status === statusFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div style={{ background: "#fff", borderRadius: "16px", padding: "32px", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
      <h2 style={{ fontSize: "24px", margin: "0 0 24px 0", fontFamily: "Instrument Serif" }}>Student Assignment Tracker</h2>
      
      {/* Search and Filter Bar */}
      <div style={{ display: "flex", gap: "16px", marginBottom: "24px", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: "200px" }}>
          <input 
            type="text"
            placeholder="Search students by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ width: "100%", padding: "10px 16px", borderRadius: "8px", border: "1px solid #E5E7EB", fontSize: "14px", boxSizing: "border-box" }}
          />
        </div>
        <select 
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={{ padding: "10px 16px", borderRadius: "8px", border: "1px solid #E5E7EB", fontSize: "14px", background: "#fff", minWidth: "150px" }}
        >
          <option value="All">All Status</option>
          <option value="Pending Review">Pending Review</option>
          <option value="Approved">Approved</option>
          <option value="Need Revision">Need Revision</option>
          <option value="Not Submitted">Not Submitted</option>
        </select>
      </div>

      <div className="table-responsive" style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "600px" }}>
        <thead>
          <tr style={{ borderBottom: "1px solid #E5E7EB", color: "#6B6F7A", fontSize: "14px", textAlign: "left" }}>
            <th style={{ padding: "12px 0", fontWeight: 500 }}>Student Name</th>
            <th style={{ padding: "12px 0", fontWeight: 500 }}>Email Address</th>
            <th style={{ padding: "12px 0", fontWeight: 500 }}>Passport File</th>
            <th style={{ padding: "12px 0", fontWeight: 500 }}>Review Status</th>
            <th style={{ padding: "12px 0", fontWeight: 500, textAlign: "right" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map(student => (
            <tr key={student.id} style={{ borderBottom: "1px solid #F3F4F6", fontSize: "15px" }}>
              <td style={{ padding: "16px 0", fontWeight: 500 }}>{student.name}</td>
              <td style={{ padding: "16px 0", color: "#6B6F7A" }}>{student.email}</td>
              <td style={{ padding: "16px 0" }}>
                {student.fileUrl ? (
                  <a href={student.fileUrl} style={{ color: "#2B4AFF", textDecoration: "none", fontWeight: 500, display: "flex", alignItems: "center", gap: "6px" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    Download
                  </a>
                ) : (
                  <span style={{ color: "#9DA3AF" }}>—</span>
                )}
              </td>
              <td style={{ padding: "16px 0" }}>
                <span style={{ 
                  padding: "6px 12px", 
                  borderRadius: "999px", 
                  fontSize: "12px", 
                  fontWeight: 600,
                  background: student.status === "Approved" ? "#F0FDF4" : student.status === "Need Revision" ? "#FEF2F2" : student.status === "Pending Review" ? "#FFFBEB" : "#F3F4F6",
                  color: student.status === "Approved" ? "#1F8A5B" : student.status === "Need Revision" ? "#DC2626" : student.status === "Pending Review" ? "#D97706" : "#6B6F7A"
                }}>
                  {student.status}
                </span>
              </td>
              <td style={{ padding: "16px 0", textAlign: "right" }}>
                {student.fileUrl && (
                  <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
                    <button 
                      onClick={() => handleUpdateStatus(student.id, "Approved")}
                      style={{ padding: "6px 12px", background: "#fff", border: "1px solid #1F8A5B", color: "#1F8A5B", borderRadius: "6px", cursor: "pointer", fontSize: "12px", fontWeight: 500 }}
                    >
                      Approve
                    </button>
                    <button 
                      onClick={() => handleUpdateStatus(student.id, "Need Revision")}
                      style={{ padding: "6px 12px", background: "#fff", border: "1px solid #DC2626", color: "#DC2626", borderRadius: "6px", cursor: "pointer", fontSize: "12px", fontWeight: 500 }}
                    >
                      Revise
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
          {filteredStudents.length === 0 && (
            <tr>
              <td colSpan={5} style={{ padding: "24px 0", textAlign: "center", color: "#6B6F7A" }}>No students found matching your search.</td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
    </div>
  );
}
