"use client";

import React, { useState, useRef } from "react";

const ASSIGNMENTS = [
  {
    id: 1,
    title: "The Project Passport",
    description:
      "The Project Passport is your final blueprint. It demonstrates your ability to apply the MasterClass frameworks to a real-world scenario. Download the template, complete all sections based on the lectures, and upload the final PDF for grading.",
    badge: "Required for Certification",
    deadline: "2024-12-31",
    templateFile: "project-passport-template.docx",
    templateSize: "45 KB",
  },
];

const INITIAL_HISTORY = [
  { id: 1, fileName: "Project_Passport_v1.pdf", status: "Rejected", date: "Oct 24, 2025", feedback: "Missing stakeholder analysis section. Please revise and resubmit." },
];

/* ─── MODAL: Download ─────────────────────────────────────── */
function DownloadModal({ assignment, onClose }: { assignment: typeof ASSIGNMENTS[0]; onClose: () => void }) {
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: "20px" }}>
      <div style={{ background: "#fff", borderRadius: "16px", width: "100%", maxWidth: "460px", boxShadow: "0 10px 40px rgba(0,0,0,0.15)", overflow: "hidden" }}>
        {/* Header */}
        <div style={{ padding: "24px 28px 20px", borderBottom: "1px solid #F3F4F6", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h3 style={{ margin: 0, fontSize: "20px", fontFamily: "Instrument Serif" }}>Download Template</h3>
            <p style={{ margin: "4px 0 0", fontSize: "13px", color: "#6B6F7A" }}>{assignment.title}</p>
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "22px", color: "#9DA3AF", lineHeight: 1, padding: 0 }}>&times;</button>
        </div>

        {/* Body */}
        <div style={{ padding: "24px 28px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px", background: "#F9F9FA", borderRadius: "10px", border: "1px solid #E5E7EB", marginBottom: "20px" }}>
            <div style={{ width: "44px", height: "44px", background: "#EEF2FF", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#4F46E5" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: "14px", color: "#0D0F12" }}>{assignment.templateFile}</div>
              <div style={{ fontSize: "12px", color: "#6B6F7A", marginTop: "2px" }}>DOCX · {assignment.templateSize}</div>
            </div>
          </div>

          <ul style={{ padding: "0 0 0 20px", margin: "0 0 24px", color: "#6B6F7A", fontSize: "14px", lineHeight: 1.8 }}>
            <li>Complete all sections in the template</li>
            <li>Save as <strong style={{ color: "#0D0F12" }}>PDF format</strong> before submitting</li>
            <li>Submit via the <strong style={{ color: "#0D0F12" }}>Upload Assignment</strong> button</li>
          </ul>

          <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
            <button onClick={onClose} style={{ padding: "10px 20px", background: "#fff", color: "#0D0F12", border: "1px solid #E5E7EB", borderRadius: "8px", cursor: "pointer", fontSize: "14px", fontWeight: 500 }}>
              Cancel
            </button>
            <button
              onClick={() => { alert("Downloading template..."); onClose(); }}
              style={{ padding: "10px 20px", background: "#0D0F12", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontSize: "14px", fontWeight: 500, display: "flex", alignItems: "center", gap: "8px" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── MODAL: Upload ───────────────────────────────────────── */
function UploadModal({
  assignment,
  onClose,
  onSubmit,
}: {
  assignment: typeof ASSIGNMENTS[0];
  onClose: () => void;
  onSubmit: (fileName: string) => void;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadState, setUploadState] = useState<"idle" | "uploading" | "success">("idle");
  const [dragOver, setDragOver] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) setSelectedFile(e.target.files[0]);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files[0]) setSelectedFile(e.dataTransfer.files[0]);
  };

  const handleSubmit = () => {
    if (!selectedFile) return;
    setUploadState("uploading");
    setTimeout(() => {
      setUploadState("success");
      setTimeout(() => {
        onSubmit(selectedFile.name);
        onClose();
      }, 1000);
    }, 1500);
  };

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: "20px" }}>
      <div style={{ background: "#fff", borderRadius: "16px", width: "100%", maxWidth: "500px", boxShadow: "0 10px 40px rgba(0,0,0,0.15)", overflow: "hidden" }}>
        {/* Header */}
        <div style={{ padding: "24px 28px 20px", borderBottom: "1px solid #F3F4F6", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h3 style={{ margin: 0, fontSize: "20px", fontFamily: "Instrument Serif" }}>Upload Assignment</h3>
            <p style={{ margin: "4px 0 0", fontSize: "13px", color: "#6B6F7A" }}>{assignment.title}</p>
          </div>
          <button onClick={onClose} disabled={uploadState === "uploading"} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "22px", color: "#9DA3AF", lineHeight: 1, padding: 0 }}>&times;</button>
        </div>

        {/* Body */}
        <div style={{ padding: "24px 28px" }}>

          {/* Drop Zone */}
          <div
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            style={{
              border: `2px dashed ${dragOver ? "#0D0F12" : selectedFile ? "#1F8A5B" : "#E5E7EB"}`,
              background: dragOver ? "#F9F9FA" : selectedFile ? "#F0FDF4" : "#FAFAFA",
              borderRadius: "12px",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              cursor: "pointer",
              transition: "all 0.2s",
              marginBottom: "20px",
            }}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            {selectedFile ? (
              <>
                <div style={{ width: "48px", height: "48px", background: "#D1FAE5", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#1F8A5B" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontWeight: 600, fontSize: "14px", color: "#0D0F12" }}>{selectedFile.name}</div>
                  <div style={{ fontSize: "12px", color: "#6B6F7A", marginTop: "4px" }}>{(selectedFile.size / 1024).toFixed(1)} KB · Click to change file</div>
                </div>
              </>
            ) : (
              <>
                <div style={{ width: "48px", height: "48px", background: "#F3F4F6", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#9DA3AF" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontWeight: 600, fontSize: "14px", color: "#0D0F12" }}>Click to select file or drag & drop</div>
                  <div style={{ fontSize: "12px", color: "#9DA3AF", marginTop: "4px" }}>PDF only · Max 20 MB</div>
                </div>
              </>
            )}
          </div>

          {/* Note */}
          <p style={{ fontSize: "13px", color: "#6B6F7A", margin: "0 0 24px", lineHeight: 1.6 }}>
            Make sure your file is saved as <strong style={{ color: "#0D0F12" }}>PDF</strong> and all sections of the template are completed before submitting.
          </p>

          {/* Actions */}
          <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
            <button onClick={onClose} disabled={uploadState === "uploading"} style={{ padding: "10px 20px", background: "#fff", color: "#0D0F12", border: "1px solid #E5E7EB", borderRadius: "8px", cursor: "pointer", fontSize: "14px", fontWeight: 500 }}>
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={!selectedFile || uploadState !== "idle"}
              style={{
                padding: "10px 24px",
                background: !selectedFile || uploadState !== "idle" ? "#F3F4F6" : "#1F8A5B",
                color: !selectedFile || uploadState !== "idle" ? "#9DA3AF" : "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: !selectedFile || uploadState !== "idle" ? "not-allowed" : "pointer",
                fontSize: "14px",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: "8px",
                transition: "all 0.2s",
              }}
            >
              {uploadState === "uploading" ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: "spin 1s linear infinite" }}><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
                  Uploading...
                </>
              ) : uploadState === "success" ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Submitted!
                </>
              ) : (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                  Submit Assignment
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── MODAL: Feedback ─────────────────────────────────────── */
function FeedbackModal({ submission, onClose }: { submission: typeof INITIAL_HISTORY[0]; onClose: () => void }) {
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: "20px" }}>
      <div style={{ background: "#fff", borderRadius: "16px", width: "100%", maxWidth: "460px", boxShadow: "0 10px 40px rgba(0,0,0,0.15)", overflow: "hidden" }}>
        <div style={{ padding: "24px 28px 20px", borderBottom: "1px solid #F3F4F6", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h3 style={{ margin: 0, fontSize: "20px", fontFamily: "Instrument Serif" }}>Feedback</h3>
            <p style={{ margin: "4px 0 0", fontSize: "13px", color: "#6B6F7A" }}>{submission.fileName}</p>
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "22px", color: "#9DA3AF", lineHeight: 1, padding: 0 }}>&times;</button>
        </div>
        <div style={{ padding: "24px 28px" }}>
          <div style={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
            <span style={{ padding: "4px 10px", background: "#FEF2F2", color: "#DC2626", fontSize: "12px", fontWeight: 700, borderRadius: "4px", textTransform: "uppercase" as const, letterSpacing: "0.05em" }}>
              {submission.status}
            </span>
            <span style={{ fontSize: "13px", color: "#6B6F7A", alignSelf: "center" }}>{submission.date}</span>
          </div>

          <div style={{ background: "#FEF9F9", border: "1px solid #FCA5A5", borderRadius: "10px", padding: "16px", marginBottom: "24px" }}>
            <p style={{ margin: 0, fontSize: "15px", color: "#0D0F12", lineHeight: 1.7 }}>
              {submission.feedback}
            </p>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button onClick={onClose} style={{ padding: "10px 24px", background: "#0D0F12", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontSize: "14px", fontWeight: 500 }}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── MAIN VIEW ───────────────────────────────────────────── */
export function StudentAssignmentsView() {
  const [downloadModalAssignment, setDownloadModalAssignment] = useState<typeof ASSIGNMENTS[0] | null>(null);
  const [uploadModalAssignment, setUploadModalAssignment] = useState<typeof ASSIGNMENTS[0] | null>(null);
  const [feedbackSubmission, setFeedbackSubmission] = useState<typeof INITIAL_HISTORY[0] | null>(null);
  const [history, setHistory] = useState(INITIAL_HISTORY);

  const handleSubmit = (fileName: string) => {
    const newEntry = {
      id: Date.now(),
      fileName,
      status: "Pending Review",
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      feedback: "Awaiting instructor review.",
    };
    setHistory([newEntry, ...history]);
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Inter, sans-serif", color: "#0D0F12" }}>

      <header style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "28px", margin: "0 0 8px 0", fontFamily: "Instrument Serif" }}>Assignments & Tasks</h2>
        <p style={{ fontSize: "14px", color: "#6B6F7A", margin: 0 }}>Download templates and submit your required course work.</p>
      </header>

      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

        {/* Assignment Cards */}
        {ASSIGNMENTS.map((assignment) => (
          <div key={assignment.id} style={{ background: "#fff", borderRadius: "16px", padding: "32px", boxShadow: "0 4px 20px rgba(0,0,0,0.05)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, right: 0, width: "200px", height: "200px", background: "radial-gradient(circle at top right, rgba(79,70,229,0.06), transparent)", pointerEvents: "none" }} />
            <div style={{ position: "relative" }}>
              <span style={{ display: "inline-block", padding: "4px 10px", background: "#FEF2F2", color: "#DC2626", fontSize: "11px", fontWeight: 700, borderRadius: "4px", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "16px" }}>
                {assignment.badge}
              </span>
              <h3 style={{ fontSize: "24px", margin: "0 0 12px 0", fontFamily: "Instrument Serif" }}>{assignment.title}</h3>
              <p style={{ fontSize: "15px", color: "#6B6F7A", lineHeight: 1.65, maxWidth: "700px", margin: "0 0 32px 0" }}>{assignment.description}</p>

              <div style={{ borderTop: "1px solid #F3F4F6", paddingTop: "28px", display: "flex", gap: "16px", flexWrap: "wrap" }}>

                {/* Download Button */}
                <button
                  onClick={() => setDownloadModalAssignment(assignment)}
                  style={{ flex: 1, minWidth: "180px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px", padding: "20px", background: "#fff", border: "1px solid #E5E7EB", borderRadius: "12px", cursor: "pointer", transition: "border-color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#0D0F12")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#E5E7EB")}
                >
                  <div style={{ width: "44px", height: "44px", background: "#F3F4F6", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#6B6F7A" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontWeight: 600, fontSize: "14px", color: "#0D0F12" }}>Download Template</div>
                    <div style={{ fontSize: "12px", color: "#6B6F7A", marginTop: "2px" }}>DOCX format (45 KB)</div>
                  </div>
                </button>

                {/* Upload Button */}
                <button
                  onClick={() => setUploadModalAssignment(assignment)}
                  style={{ flex: 1, minWidth: "180px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px", padding: "20px", background: "#0D0F12", border: "none", borderRadius: "12px", cursor: "pointer", color: "#fff" }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  <div style={{ width: "44px", height: "44px", background: "rgba(255,255,255,0.15)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontWeight: 600, fontSize: "14px" }}>Upload Assignment</div>
                    <div style={{ fontSize: "12px", marginTop: "2px", opacity: 0.7 }}>PDF format only</div>
                  </div>
                </button>

              </div>
            </div>
          </div>
        ))}

        {/* Submission History */}
        <div>
          <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#6B6F7A", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 12px 8px" }}>Submission History</h4>
          <div style={{ background: "#fff", borderRadius: "16px", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
            {history.length === 0 ? (
              <div style={{ padding: "32px", textAlign: "center", color: "#9DA3AF", fontSize: "14px" }}>No submissions yet.</div>
            ) : (
              history.map((sub, i) => (
                <div key={sub.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 24px", borderBottom: i < history.length - 1 ? "1px solid #F3F4F6" : "none" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <div style={{
                      width: "40px", height: "40px", borderRadius: "8px", flexShrink: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      background: sub.status === "Rejected" ? "#FEF2F2" : sub.status === "Pending Review" ? "#FFFBEB" : "#F0FDF4",
                      color: sub.status === "Rejected" ? "#DC2626" : sub.status === "Pending Review" ? "#D97706" : "#1F8A5B",
                    }}>
                      {sub.status === "Rejected" ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                      ) : sub.status === "Pending Review" ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      )}
                    </div>
                    <div>
                      <div style={{ fontWeight: 500, fontSize: "14px", color: "#0D0F12" }}>{sub.fileName}</div>
                      <div style={{ fontSize: "12px", color: "#6B6F7A", marginTop: "2px" }}>
                        <span style={{
                          padding: "2px 6px",
                          borderRadius: "4px",
                          fontWeight: 600,
                          background: sub.status === "Rejected" ? "#FEF2F2" : sub.status === "Pending Review" ? "#FFFBEB" : "#F0FDF4",
                          color: sub.status === "Rejected" ? "#DC2626" : sub.status === "Pending Review" ? "#D97706" : "#1F8A5B",
                        }}>{sub.status}</span>
                        {" · "}{sub.date}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setFeedbackSubmission(sub)}
                    style={{ padding: "6px 14px", background: "#fff", border: "1px solid #E5E7EB", borderRadius: "6px", cursor: "pointer", fontSize: "13px", fontWeight: 500, color: "#0D0F12", flexShrink: 0 }}
                  >
                    View Feedback
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

      </div>

      {/* Modals */}
      {downloadModalAssignment && (
        <DownloadModal assignment={downloadModalAssignment} onClose={() => setDownloadModalAssignment(null)} />
      )}
      {uploadModalAssignment && (
        <UploadModal
          assignment={uploadModalAssignment}
          onClose={() => setUploadModalAssignment(null)}
          onSubmit={handleSubmit}
        />
      )}
      {feedbackSubmission && (
        <FeedbackModal submission={feedbackSubmission} onClose={() => setFeedbackSubmission(null)} />
      )}

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
