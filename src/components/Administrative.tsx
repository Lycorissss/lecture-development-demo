"use client";

import React, { useState, useRef } from "react";

const FAQ = [
  ['Who is this course for?',
   'Diplomats, trade representatives, and entrepreneurs navigating international markets who want a coherent system for trade and diplomacy.'],
  ['How long do I have access?',
   'Lifetime access from the date of enrollment, including every future module update and any companion templates we release.'],
  ['Is a certificate provided?',
   'Yes — a verified completion certificate issued under the auspices of the Bulgarian Embassy education program, suitable for LinkedIn and continuing-education records.'],
  ['Can my team enroll together?',
   'Team licenses are available for groups of 3 or more. Each seat receives an individual login, and the team lead gets a progress dashboard.'],
  ['What if I need an invoice?',
   'Invoices are auto-generated and emailed at checkout. You can edit billing details (company name, VAT/EU tax ID, PO number) at any point inside the portal.'],
  ['Is there a refund policy?',
   'Full refund within 14 days, no questions asked, provided fewer than 3 modules have been completed. Refunds are processed to the original payment method within 5 business days.'],
];

function FaqItem({ q, a, n, isOpen, onToggle, accent }: { q: string, a: string, n: number, isOpen: boolean, onToggle: () => void, accent: string }) {
  const innerRef = useRef<HTMLDivElement>(null);
  return (
    <div className={`faq ${isOpen ? 'open' : ''}`}>
      <button className="faq-q" onClick={onToggle}>
        <span className="faq-n">{String(n).padStart(2, '0')}</span>
        <span className="faq-text">{q}</span>
        <span className="faq-chevron" style={{ color: isOpen ? accent : undefined }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 5.5 L7 9.5 L11 5.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      <div
        className="faq-a-wrap"
        style={{ maxHeight: isOpen ? (innerRef.current?.scrollHeight || 200) + 'px' : 0 }}
      >
        <div className="faq-a" ref={innerRef}>{a}</div>
      </div>
    </div>
  );
}

export default function Administrative({ accent, headingFont }: { accent: string, headingFont: string }) {
  const [open, setOpen] = useState(0);
  return (
    <section id="administrative" className="administrative" data-screen-label="03 Administrative">
      <div className="container admin-grid">
        <aside className="admin-left">
          <div className="admin-sticky">
            <span className="overline" style={{ color: accent }}>● Access & Policies</span>
            <h2 className="section-h2" style={{ fontFamily: `var(--font-${headingFont.replace(' ', '-').toLowerCase()}), "${headingFont}", serif` }}>
              Everything you<br/>need to know.
            </h2>
            <p className="section-desc">
              Clear terms, no hidden clauses. Your enrollment is managed
              entirely through our secure portal.
            </p>

            <div className="contact-card">
              <div className="contact-row">
                <div className="contact-icon" style={{ background: accent }}>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.4">
                    <rect x="2" y="3.5" width="12" height="9" rx="1.5"/>
                    <path d="M2.5 4.5 L8 8.5 L13.5 4.5"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-label">Have questions?</div>
                  <a href="mailto:daniel.dobrev@mail.bg" className="contact-link" style={{ color: accent }}>
                    daniel.dobrev@mail.bg
                  </a>
                  <div className="contact-meta">Response within 24 hours</div>
                </div>
              </div>
              <div className="contact-row">
                <div className="contact-icon" style={{ background: '#0D0F12' }}>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.4">
                    <path d="M2 6 L8 2 L14 6 V13 H2 Z"/>
                    <path d="M6 13 V9 H10 V13"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-label">Embassy office</div>
                  <div className="contact-meta">Jakarta, Indonesia</div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <div className="admin-right">
          {FAQ.map(([q, a], i) => (
            <FaqItem
              key={i}
              q={q}
              a={a}
              n={i + 1}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
              accent={accent}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
