"use client";

import React, { useRef, useState, useEffect } from "react";

// ---------- Reveal on scroll ----------
function useReveal() {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, shown] as const;
}

const MODULES = [
  ['Introduction to International Trade', 'Foundational mental models for entering global markets and trade.', '18 min'],
  ['Diplomatic Protocols', 'Translate vague cultural norms into actionable relationship building.', '22 min'],
  ['EU Funds Management', 'Match project topology to EU funding requirements and donors.', '16 min'],
  ['Investment Support Framework', 'A repeatable system for facilitating international financial donors.', '15 min'],
  ['Balkan Markets Essentials', 'Catalog, score, and pre-empt failure modes when entering the Balkans.', '20 min'],
  ['Trade vs. Diplomacy', 'Pick the right approach by reading the political and economic landscape.', '19 min'],
  ['Agricultural Innovations', 'Case studies in high-protein feed and value-added export products.', '24 min'],
  ['Market Entry Strategy', 'Tracking international investments without becoming a bureaucratic bottleneck.', '21 min'],
  ['Cross-Border Communication', 'Rituals that scale across international timezones and embassies.', '17 min'],
  ['Law Frame & Administration', 'Pre-flight reviews that catch compliance mistakes nobody wants to own.', '23 min'],
  ['Promoting Businesses Abroad', 'Generate international recognition, not just local leads.', '14 min'],
  ['Building Your Trade Portfolio', 'Document your track record in a way that earns state honors.', '19 min'],
];

function ModuleCard({ n, title, desc, time, accent, shown, idx }: { n: string, title: string, desc: string, time: string, accent: string, shown: boolean, idx: number }) {
  return (
    <article
      className={`module-card ${shown ? 'in' : ''}`}
      style={{ transitionDelay: `${idx * 45}ms`, '--accent': accent } as React.CSSProperties}
    >
      <div className="module-top">
        <span className="module-n" style={{ color: accent }}>{n}</span>
        <span className="module-arrow" aria-hidden>↗</span>
      </div>
      <h3 className="module-title">{title}</h3>
      <p className="module-desc">{desc}</p>
      <div className="module-foot">
        <span className="time-tag" style={{ background: '#EBE8FF', color: accent }}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.2">
            <circle cx="5" cy="5" r="4" />
            <path d="M5 2.5 V5 L6.5 6" strokeLinecap="round" />
          </svg>
          {time}
        </span>
        <span className="module-preview">Preview</span>
      </div>
    </article>
  );
}

export default function Curriculum({ accent, headingFont }: { accent: string, headingFont: string }) {
  const [ref, shown] = useReveal();
  return (
    <section id="curriculum" className="curriculum" data-screen-label="02 Curriculum" ref={ref}>
      <div className="container">
        <div className="section-head">
          <div className="section-meta">
            <span className="overline" style={{ color: accent }}>● What you'll learn</span>
            <h2 className="section-h2" style={{ fontFamily: `var(--font-${headingFont.replace(' ', '-').toLowerCase()}), "${headingFont}", serif` }}>
              Twelve modules.<br/><em>One complete methodology.</em>
            </h2>
          </div>
          <p className="section-desc">
            Each module is self-contained and immediately applicable.
            No fluff — only frameworks you can deploy next Monday.
          </p>
        </div>

        <div className="module-grid">
          {MODULES.map(([title, desc, time], i) => (
            <ModuleCard
              key={i}
              n={String(i + 1).padStart(2, '0')}
              title={title}
              desc={desc}
              time={time}
              accent={accent}
              shown={shown}
              idx={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
