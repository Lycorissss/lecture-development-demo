import React from "react";
import { StudentSidebar } from "@/components/student/StudentSidebar";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F9F9FA", color: "#0D0F12" }}>
      <StudentSidebar />
      <main style={{ flex: 1, marginLeft: "260px", width: "calc(100% - 260px)", boxSizing: "border-box" }} className="student-main">
        {children}
      </main>
      <style>{`
        body { margin: 0; }
        @media (max-width: 768px) {
          .student-main {
            margin-left: 0 !important;
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}
