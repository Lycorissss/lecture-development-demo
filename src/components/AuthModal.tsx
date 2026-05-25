"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthModal({ isOpen, onClose, accent }: { isOpen: boolean, onClose: () => void, accent: string }) {
  const [step, setStep] = useState<"login" | "commitment">("login");
  const [loading, setLoading] = useState(false);
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setStep("login");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleGoogleLogin = async () => {
    setLoading(true);
    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setStep("commitment");
  };

  const handleSubmitCommitment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate DB save
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setLoading(false);
    onClose();
    router.push("/checkout");
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        
        {step === "login" && (
          <div className="modal-body">
            <h2 style={{ fontFamily: "Instrument Serif", fontSize: "32px", marginBottom: "8px" }}>Join the MasterClass</h2>
            <p style={{ color: "#6B6F7A", marginBottom: "24px", fontSize: "14px" }}>
              Sign in to secure your spot and start transforming your ideas into reality.
            </p>
            <button 
              className="google-btn" 
              onClick={handleGoogleLogin}
              disabled={loading}
            >
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" width={20} height={20} />
              {loading ? "Redirecting..." : "Continue with Google"}
            </button>
          </div>
        )}

        {step === "commitment" && (
          <div className="modal-body">
            <h2 style={{ fontFamily: "Instrument Serif", fontSize: "32px", marginBottom: "8px" }}>Your Commitment</h2>
            <p style={{ color: "#6B6F7A", marginBottom: "24px", fontSize: "14px" }}>
              Before proceeding to payment, we want to ensure you are ready to execute.
            </p>
            <form onSubmit={handleSubmitCommitment} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <label style={{ display: "block", marginBottom: "6px", fontSize: "13px", fontWeight: 500 }}>1. What is the biggest idea/project you want to execute right now?</label>
                <textarea 
                  required
                  value={q1}
                  onChange={(e) => setQ1(e.target.value)}
                  style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #E5E7EB", minHeight: "80px", fontFamily: "inherit" }}
                  placeholder="E.g., Expanding our operations to Vietnam..."
                />
              </div>
              <div>
                <label style={{ display: "block", marginBottom: "6px", fontSize: "13px", fontWeight: 500 }}>2. What has been your biggest roadblock?</label>
                <textarea 
                  required
                  value={q2}
                  onChange={(e) => setQ2(e.target.value)}
                  style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #E5E7EB", minHeight: "80px", fontFamily: "inherit" }}
                  placeholder="E.g., Navigating the local regulations..."
                />
              </div>
              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ background: accent, width: "100%", marginTop: "8px" }}
                disabled={loading}
              >
                {loading ? "Saving..." : "Commit & Proceed to Checkout"}
              </button>
            </form>
          </div>
        )}
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.4);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          z-index: 99999;
          animation: fadeIn 0.2s ease-out;
        }
        .modal-content {
          background: #fff;
          border-radius: 16px;
          width: 100%;
          max-width: 440px;
          padding: 32px;
          position: relative;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          background: transparent;
          border: none;
          font-size: 18px;
          color: #9DA3AF;
          cursor: pointer;
        }
        .modal-close:hover {
          color: #000;
        }
        .google-btn {
          width: 100%;
          background: #ffffff;
          color: #3C4043;
          border: 1px solid #DADCE0;
          border-radius: 8px;
          padding: 12px 24px;
          font-family: inherit;
          font-size: 15px;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        }
        .google-btn:hover {
          background: #F8F9FA;
          box-shadow: 0 1px 3px rgba(0,0,0,0.08);
          border-color: #D2E3FC;
        }
        .google-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px) scale(0.96); } to { opacity: 1; transform: translateY(0) scale(1); } }
      `}</style>
    </div>
  );
}
