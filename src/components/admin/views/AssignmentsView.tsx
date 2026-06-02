"use client";

import React, { useState } from "react";

const INITIAL_ASSIGNMENTS = [
  { 
    id: 1, 
    title: "Final Project UI Design", 
    description: "Create a complete UI design for a mobile banking app based on the requirements discussed.", 
    deadline: "2024-05-25", 
    fileName: "final-project-brief.pdf", 
    dateAdded: "2024-05-15",
    submissions: [
      { id: 101, studentName: "Budi Santoso", email: "budi.s@example.com", submittedAt: "2024-05-20", fileUrl: "#" },
      { id: 102, studentName: "Anita Putri", email: "anita.p@example.com", submittedAt: "2024-05-22", fileUrl: "#" }
    ]
  },
  { 
    id: 2, 
    title: "Wireframing Exercise", 
    description: "Submit low-fidelity wireframes for the e-commerce checkout flow.", 
    deadline: "2024-05-30", 
    fileName: "wireframe-instructions.pdf", 
    dateAdded: "2024-05-18",
    submissions: []
  }
];

export function AssignmentsView() {
  const [assignments, setAssignments] = useState(INITIAL_ASSIGNMENTS);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // Assignment Modal States
  const [isAssignmentModalOpen, setIsAssignmentModalOpen] = useState(false);
  const [currentAssignment, setCurrentAssignment] = useState<{ id: number | null, title: string, description: string, deadline: string, fileName: string, submissions: any[] }>({ id: null, title: '', description: '', deadline: '', fileName: '', submissions: [] });

  // Submissions Modal States
  const [isSubmissionsModalOpen, setIsSubmissionsModalOpen] = useState(false);
  const [selectedAssignmentForSubmissions, setSelectedAssignmentForSubmissions] = useState<any>(null);
  const [submissionSearchQuery, setSubmissionSearchQuery] = useState("");

  const handleSaveAssignment = () => {
    if (!currentAssignment.title || !currentAssignment.fileName || !currentAssignment.deadline) return;
    
    if (currentAssignment.id) {
      setAssignments(assignments.map(a => a.id === currentAssignment.id ? { ...a, title: currentAssignment.title, description: currentAssignment.description, deadline: currentAssignment.deadline, fileName: currentAssignment.fileName } : a));
    } else {
      const assignment = {
        id: Date.now(),
        title: currentAssignment.title,
        description: currentAssignment.description,
        deadline: currentAssignment.deadline,
        fileName: currentAssignment.fileName,
        dateAdded: new Date().toISOString().split('T')[0],
        submissions: []
      };
      setAssignments([...assignments, assignment]);
    }
    
    setCurrentAssignment({ id: null, title: '', description: '', deadline: '', fileName: '', submissions: [] });
    setIsAssignmentModalOpen(false);
  };

  const openAddAssignmentModal = () => {
    setCurrentAssignment({ id: null, title: '', description: '', deadline: '', fileName: '', submissions: [] });
    setIsAssignmentModalOpen(true);
  };

  const openEditAssignmentModal = (assignment: any) => {
    setCurrentAssignment({ id: assignment.id, title: assignment.title, description: assignment.description || '', deadline: assignment.deadline, fileName: assignment.fileName, submissions: assignment.submissions || [] });
    setIsAssignmentModalOpen(true);
  };

  const handleDeleteAssignment = (id: number) => {
    setAssignments(assignments.filter(a => a.id !== id));
  };

  const openSubmissionsModal = (assignment: any) => {
    setSelectedAssignmentForSubmissions(assignment);
    setSubmissionSearchQuery("");
    setIsSubmissionsModalOpen(true);
  };

  const filteredAssignments = assignments
    .filter(assignment => assignment.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      const dateA = new Date(a.deadline).getTime();
      const dateB = new Date(b.deadline).getTime();
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });

  return (
    <>
      <div style={{ background: "#fff", borderRadius: "16px", padding: "32px", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
          <h2 style={{ fontSize: "24px", margin: 0, fontFamily: "Instrument Serif" }}>Assignments & Tasks</h2>
          <button 
            onClick={openAddAssignmentModal}
            style={{ padding: "8px 16px", background: "#0D0F12", color: "#fff", borderRadius: "8px", border: "none", cursor: "pointer", fontSize: "14px", fontWeight: 500 }}
          >
            + Create Assignment
          </button>
        </div>

        {/* Search and Sort Bar */}
        <div style={{ display: "flex", gap: "16px", marginBottom: "24px", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: "200px" }}>
            <input 
              type="text"
              placeholder="Search assignments by title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: "100%", padding: "10px 16px", borderRadius: "8px", border: "1px solid #E5E7EB", fontSize: "14px", boxSizing: "border-box" }}
            />
          </div>
          <select 
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            style={{ padding: "10px 16px", borderRadius: "8px", border: "1px solid #E5E7EB", fontSize: "14px", background: "#fff", minWidth: "150px" }}
          >
            <option value="asc">Deadline: Nearest</option>
            <option value="desc">Deadline: Furthest</option>
          </select>
        </div>

        <div className="table-responsive" style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "800px" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #E5E7EB", color: "#6B6F7A", fontSize: "14px", textAlign: "left" }}>
                <th style={{ padding: "12px 0", fontWeight: 500 }}>Assignment Title</th>
                <th style={{ padding: "12px 0", fontWeight: 500 }}>Deadline</th>
                <th style={{ padding: "12px 0", fontWeight: 500 }}>Submissions</th>
                <th style={{ padding: "12px 0", fontWeight: 500, textAlign: "right" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAssignments.map(assignment => {
                const subsCount = assignment.submissions?.length || 0;
                return (
                  <tr key={assignment.id} style={{ borderBottom: "1px solid #F3F4F6", fontSize: "15px" }}>
                    <td style={{ padding: "16px 0", fontWeight: 500 }}>{assignment.title}</td>
                    <td style={{ padding: "16px 0", color: "#DC2626", fontWeight: 500 }}>{assignment.deadline}</td>
                    <td style={{ padding: "16px 0" }}>
                      <span style={{ 
                        padding: "4px 8px", 
                        borderRadius: "6px", 
                        fontSize: "12px", 
                        background: subsCount > 0 ? "#F0FDF4" : "#F3F4F6",
                        color: subsCount > 0 ? "#1F8A5B" : "#6B6F7A",
                        fontWeight: 600
                      }}>
                        {subsCount} Submitted
                      </span>
                    </td>
                    <td style={{ padding: "16px 0", textAlign: "right" }}>
                      <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
                        <button 
                          onClick={() => openSubmissionsModal(assignment)}
                          style={{ padding: "6px 12px", background: "#fff", border: "1px solid #1F8A5B", color: "#1F8A5B", borderRadius: "6px", cursor: "pointer", fontSize: "12px", fontWeight: 500 }}
                        >
                          View Submissions
                        </button>
                        <button 
                          onClick={() => openEditAssignmentModal(assignment)}
                          style={{ padding: "6px 12px", background: "#fff", border: "1px solid #E5E7EB", color: "#0D0F12", borderRadius: "6px", cursor: "pointer", fontSize: "12px", fontWeight: 500 }}
                        >
                          Edit
                        </button>
                        <button 
                          onClick={() => handleDeleteAssignment(assignment.id)}
                          style={{ padding: "6px 12px", background: "#fff", border: "1px solid #DC2626", color: "#DC2626", borderRadius: "6px", cursor: "pointer", fontSize: "12px", fontWeight: 500 }}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
              {filteredAssignments.length === 0 && (
                <tr>
                  <td colSpan={4} style={{ padding: "24px 0", textAlign: "center", color: "#6B6F7A" }}>No assignments found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Submissions List Modal */}
      {isSubmissionsModalOpen && selectedAssignmentForSubmissions && (() => {
        const filteredSubmissions = selectedAssignmentForSubmissions.submissions?.filter((sub: any) => 
          sub.studentName.toLowerCase().includes(submissionSearchQuery.toLowerCase()) ||
          sub.email.toLowerCase().includes(submissionSearchQuery.toLowerCase())
        ) || [];

        return (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: "20px" }}>
          <div style={{ background: "#fff", padding: "32px", borderRadius: "16px", width: "100%", maxWidth: "700px", boxShadow: "0 10px 25px rgba(0,0,0,0.1)", maxHeight: "90vh", overflowY: "auto", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
              <div>
                <h3 style={{ fontSize: "24px", margin: "0 0 8px 0", fontFamily: "Instrument Serif", color: "#0D0F12" }}>Submissions</h3>
                <p style={{ margin: 0, color: "#6B6F7A", fontSize: "14px" }}>{selectedAssignmentForSubmissions.title}</p>
              </div>
              <button onClick={() => setIsSubmissionsModalOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "24px", color: "#6B6F7A", padding: 0, lineHeight: 1 }}>&times;</button>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <input 
                type="text"
                placeholder="Search by student name or email..."
                value={submissionSearchQuery}
                onChange={(e) => setSubmissionSearchQuery(e.target.value)}
                style={{ width: "100%", padding: "10px 16px", borderRadius: "8px", border: "1px solid #E5E7EB", fontSize: "14px", boxSizing: "border-box" }}
              />
            </div>

            <div className="table-responsive" style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "500px", marginBottom: "24px" }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid #E5E7EB", color: "#6B6F7A", fontSize: "13px", textAlign: "left", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    <th style={{ padding: "12px 0", fontWeight: 600 }}>Student</th>
                    <th style={{ padding: "12px 0", fontWeight: 600 }}>Date Submitted</th>
                    <th style={{ padding: "12px 0", fontWeight: 600, textAlign: "right" }}>Attachment</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSubmissions.length > 0 ? (
                    filteredSubmissions.map((sub: any) => (
                      <tr key={sub.id} style={{ borderBottom: "1px solid #F3F4F6", fontSize: "14px" }}>
                        <td style={{ padding: "16px 0" }}>
                          <div style={{ fontWeight: 500, color: "#0D0F12" }}>{sub.studentName}</div>
                          <div style={{ color: "#6B6F7A", fontSize: "12px" }}>{sub.email}</div>
                        </td>
                        <td style={{ padding: "16px 0", color: "#4B5563" }}>{sub.submittedAt}</td>
                        <td style={{ padding: "16px 0", textAlign: "right" }}>
                          <a href={sub.fileUrl} style={{ color: "#2B4AFF", textDecoration: "none", fontWeight: 500, display: "inline-flex", alignItems: "center", gap: "6px" }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                            View File
                          </a>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={3} style={{ padding: "32px 0", textAlign: "center", color: "#6B6F7A" }}>
                        {selectedAssignmentForSubmissions.submissions?.length === 0 
                          ? "No students have submitted this assignment yet."
                          : "No students match your search."}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "auto" }}>
              <button 
                onClick={() => setIsSubmissionsModalOpen(false)}
                style={{ padding: "10px 24px", background: "#0D0F12", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontSize: "14px", fontWeight: 500 }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
        );
      })()}

      {/* Assignment Add/Edit Modal */}
      {isAssignmentModalOpen && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: "20px" }}>
          <div style={{ background: "#fff", padding: "32px", borderRadius: "16px", width: "100%", maxWidth: "500px", boxShadow: "0 10px 25px rgba(0,0,0,0.1)", maxHeight: "90vh", overflowY: "auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
              <h3 style={{ fontSize: "20px", margin: 0, fontFamily: "Instrument Serif" }}>{currentAssignment.id ? 'Edit Assignment' : 'Create Assignment'}</h3>
              <button onClick={() => setIsAssignmentModalOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "24px", color: "#6B6F7A", padding: 0, lineHeight: 1 }}>&times;</button>
            </div>
            
            <div style={{ display: "grid", gap: "16px", marginBottom: "32px" }}>
              <div>
                <label style={{ display: "block", fontSize: "14px", marginBottom: "6px", color: "#6B6F7A" }}>Assignment Title</label>
                <input 
                  type="text" 
                  value={currentAssignment.title}
                  onChange={(e) => setCurrentAssignment({...currentAssignment, title: e.target.value})}
                  style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #E5E7EB", boxSizing: "border-box" }}
                  placeholder="e.g. Final Project UI"
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "14px", marginBottom: "6px", color: "#6B6F7A" }}>Description / Instructions</label>
                <textarea 
                  value={currentAssignment.description}
                  onChange={(e) => setCurrentAssignment({...currentAssignment, description: e.target.value})}
                  style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #E5E7EB", boxSizing: "border-box", minHeight: "80px", resize: "vertical", fontFamily: "inherit" }}
                  placeholder="Detail the task..."
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "14px", marginBottom: "6px", color: "#6B6F7A" }}>Deadline</label>
                <input 
                  type="date" 
                  value={currentAssignment.deadline}
                  onChange={(e) => setCurrentAssignment({...currentAssignment, deadline: e.target.value})}
                  style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #E5E7EB", boxSizing: "border-box", fontFamily: "inherit" }}
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "14px", marginBottom: "6px", color: "#6B6F7A" }}>Attachment (Optional)</label>
                <div style={{ position: "relative" }}>
                  <input 
                    type="file" 
                    onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        setCurrentAssignment({...currentAssignment, fileName: e.target.files[0].name});
                      }
                    }}
                    style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px dashed #E5E7EB", boxSizing: "border-box", background: "#F9F9FA", cursor: "pointer" }}
                  />
                  {currentAssignment.fileName && (
                    <div style={{ marginTop: "8px", fontSize: "13px", color: "#1F8A5B", fontWeight: 500 }}>
                      Selected file: {currentAssignment.fileName}
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px" }}>
              <button 
                onClick={() => setIsAssignmentModalOpen(false)}
                style={{ padding: "10px 20px", background: "#fff", color: "#0D0F12", border: "1px solid #E5E7EB", borderRadius: "8px", cursor: "pointer", fontSize: "14px", fontWeight: 500 }}
              >
                Cancel
              </button>
              <button 
                onClick={handleSaveAssignment}
                style={{ padding: "10px 20px", background: "#1F8A5B", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontSize: "14px", fontWeight: 500 }}
              >
                Save Assignment
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
