"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const router = useRouter();

  const handleSimulatePayment = async (method: string) => {
    setLoading(true);
    // In a real app, this would call your backend to create a Midtrans transaction
    // and redirect the user to the Midtrans Snap payment URL.
    // For this implementation, we simulate a successful payment delay.
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Simulate updating user role to 'student' and redirecting to dashboard
    setPaymentMethod(method);
    setShowSuccess(true);
    
    // Automatically redirect after 2.5 seconds
    setTimeout(() => {
      router.push("/dashboard");
    }, 2500);
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#F9F9FA", padding: "20px" }}>
      <div style={{ background: "#fff", padding: "40px", borderRadius: "16px", boxShadow: "0 10px 40px rgba(0,0,0,0.08)", width: "100%", maxWidth: "480px" }}>
        <h1 style={{ fontFamily: "Instrument Serif", fontSize: "36px", marginBottom: "8px", textAlign: "center" }}>Complete your Enrollment</h1>
        <p style={{ color: "#6B6F7A", textAlign: "center", marginBottom: "32px" }}>
          MasterClass: International Trade & Diplomacy
        </p>

        <div style={{ border: "1px solid #E5E7EB", padding: "20px", borderRadius: "12px", marginBottom: "24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
            <span style={{ fontWeight: 500 }}>Lifetime Access</span>
            <span style={{ fontWeight: 600 }}>Rp 3.500.000</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", color: "#6B6F7A" }}>
            <span>VAT (11%)</span>
            <span>Rp 385.000</span>
          </div>
          <hr style={{ margin: "16px 0", borderTop: "1px dashed #E5E7EB" }} />
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "18px" }}>
            <span style={{ fontWeight: 600 }}>Total</span>
            <span style={{ fontWeight: 700, color: "#1F8A5B" }}>Rp 3.885.000</span>
          </div>
        </div>

        <h3 style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#9DA3AF", marginBottom: "16px" }}>Select Payment Method</h3>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <button 
            onClick={() => handleSimulatePayment("QRIS")}
            disabled={loading}
            style={{ padding: "16px", borderRadius: "8px", border: "1px solid #E5E7EB", background: "#fff", cursor: "pointer", fontWeight: 500, transition: "all 0.2s" }}
            onMouseOver={(e) => e.currentTarget.style.borderColor = "#000"}
            onMouseOut={(e) => e.currentTarget.style.borderColor = "#E5E7EB"}
          >
            {loading ? "Processing..." : "Pay with QRIS"}
          </button>
          
          <button 
            onClick={() => handleSimulatePayment("Bank Transfer")}
            disabled={loading}
            style={{ padding: "16px", borderRadius: "8px", border: "1px solid #E5E7EB", background: "#fff", cursor: "pointer", fontWeight: 500, transition: "all 0.2s" }}
            onMouseOver={(e) => e.currentTarget.style.borderColor = "#000"}
            onMouseOut={(e) => e.currentTarget.style.borderColor = "#E5E7EB"}
          >
            {loading ? "Processing..." : "Bank Transfer (Virtual Account)"}
          </button>

          <button 
            onClick={() => handleSimulatePayment("Credit Card")}
            disabled={loading}
            style={{ padding: "16px", borderRadius: "8px", border: "1px solid #E5E7EB", background: "#fff", cursor: "pointer", fontWeight: 500, transition: "all 0.2s" }}
            onMouseOver={(e) => e.currentTarget.style.borderColor = "#000"}
            onMouseOut={(e) => e.currentTarget.style.borderColor = "#E5E7EB"}
          >
            {loading ? "Processing..." : "Credit / Debit Card"}
          </button>
        </div>
      </div>

      {showSuccess && (
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
          background: "rgba(0,0,0,0.4)", backdropFilter: "blur(4px)",
          display: "flex", alignItems: "center", justifyContent: "center", zIndex: 99999,
          padding: "20px"
        }}>
          <div style={{
            background: "#fff", borderRadius: "16px", padding: "40px", 
            width: "100%", maxWidth: "400px", textAlign: "center",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            animation: "slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
          }}>
            <div style={{
              width: "64px", height: "64px", background: "#F0FDF4", color: "#1F8A5B",
              borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 24px auto"
            }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h2 style={{ fontFamily: "Instrument Serif", fontSize: "32px", margin: "0 0 8px 0" }}>Payment Successful!</h2>
            <p style={{ color: "#6B6F7A", margin: "0 0 24px 0", fontSize: "15px" }}>
              Your enrollment via {paymentMethod} is complete. You now have full access to the MasterClass.
            </p>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "8px", color: "#9DA3AF", fontSize: "13px", fontWeight: 500 }}>
              <div style={{ width: "16px", height: "16px", border: "2px solid #E5E7EB", borderTopColor: "#9DA3AF", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
              Redirecting to dashboard...
            </div>
          </div>
        </div>
      )}
      <style>{`
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px) scale(0.96); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
