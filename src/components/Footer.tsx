"use client";

import React from "react";

export default function Footer({ accent }: { accent: string }) {
  return (
    <footer className="footer" data-screen-label="05 Footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-mark" style={{ background: accent }} />
              <span>Dobrev.</span>
            </div>
            <p className="footer-tag">
              A masterclass on international trade and diplomacy by the Head of Trade and Economic Office, Bulgarian Embassy.
            </p>
          </div>

          <div className="footer-cols">
            <div className="footer-col">
              <div className="footer-h">Course</div>
              <a href="#curriculum">Curriculum</a>
              <a href="#administrative">Access</a>
              <a href="#payment">Pricing</a>
              <a href="#">Certificate</a>
            </div>
            <div className="footer-col">
              <div className="footer-h">Support</div>
              <a href="#">Contact</a>
              <a href="#">Refunds</a>
              <a href="#">Team licenses</a>
              <a href="#">Press</a>
            </div>
            <div className="footer-col">
              <div className="footer-h">Newsletter</div>
              <p className="footer-meta">Monthly notes on project work.</p>
              <form className="news-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="you@studio.com" />
                <button type="submit" style={{ background: accent }}>→</button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2026 Daniel Dobrev. · Supported by the Bulgarian Embassy.</div>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Imprint</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
