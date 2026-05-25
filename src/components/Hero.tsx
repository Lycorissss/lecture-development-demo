"use client";

import React, { useState, useEffect } from "react";

function Dot({ accent }: { accent: string }) {
  return <span className="dot" style={{ background: accent }} />;
}

function Stat({ n, label }: { n: string | React.ReactNode, label: string }) {
  return (
    <div className="stat">
      <div className="stat-n">{n}</div>
      <div className="stat-l">{label}</div>
    </div>
  );
}

function HeroCardStack({ accent }: { accent: string }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setProgress(62), 500);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="card-stack reveal-card">
      <div className="stack-back" />
      <div className="stack-mid" />
      <div className="stack-card">
        <div className="stack-head">
          <span className="stack-meta">MODULE 04 / 12</span>
          <span className="stack-time">15 MIN</span>
        </div>
        <div className="progress">
          <div className="progress-fill" style={{ width: `${progress}%`, background: accent }} />
        </div>
        <h3 className="stack-title">3 Main Phases</h3>
        <ul className="stack-list">
          {[
            <div key="m1"><b>Module 1:</b> The Philosophy of Projectising Life (Structure, Meaning, and Independence).</div>,
            <div key="m2">
              <b>Module 2:</b> The 3 Pillars of Project Development
              <div style={{ paddingLeft: '8px', marginTop: '4px', fontSize: '12.5px', color: '#6B6F7A' }}>
                <div>• Phase A: Preparation Phase (Blueprint & Analysis)</div>
                <div>• Phase B: Execution Phase (Dynamic vs Static)</div>
                <div>• Phase C: Finalisation & Dissemination</div>
              </div>
            </div>,
            <div key="m3"><b>Module 3:</b> Public-Private Partnerships (PPP) (Studi kasus nyata seperti Jakarta MRT).</div>
          ].map((t, i) => (
            <li key={i} style={{ alignItems: 'flex-start' }}>
              <span className="check" style={{ background: accent, marginTop: '2px', flexShrink: 0 }}>
                <svg viewBox="0 0 12 12" width="10" height="10">
                  <path d="M2.5 6.2 L5 8.5 L9.5 3.8" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div style={{ flex: 1, lineHeight: 1.5 }}>{t}</div>
            </li>
          ))}
        </ul>
        <div className="stack-foot">
          <div className="avatar" style={{ background: `linear-gradient(135deg, ${accent}, #7447fbff)` }}>DD</div>
          <div className="stack-author">
            <div className="author-name">Daniel Dobrev</div>
            <div className="author-role">Head of Trade and Economic Office</div>
          </div>
          <button className="play-btn" style={{ borderColor: accent, color: accent }}>
            <svg viewBox="0 0 12 14" width="9" height="11" fill="currentColor"><path d="M1 1 L11 7 L1 13 Z" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function HeroModuleList({ accent }: { accent: string }) {
  const items = [
    ['01', 'Foundations of Diplomacy', '18m'],
    ['02', 'International Trade', '22m'],
    ['03', 'Investment Support', '16m'],
    ['04', 'EU Funds Management', '15m'],
    ['05', 'Balkan Markets', '20m'],
  ];
  return (
    <div className="module-list-card reveal-card">
      <div className="mlc-head">
        <div className="mlc-title">Series Outline</div>
        <div className="mlc-meta">12 modules · 4h 22m</div>
      </div>
      {items.map(([n, t, m], i) => (
        <div key={n} className="mlc-row" style={{ '--idx': i } as React.CSSProperties}>
          <span className="mlc-n" style={{ color: i === 3 ? accent : undefined }}>{n}</span>
          <span className="mlc-t">{t}</span>
          <span className="mlc-m">{m}</span>
        </div>
      ))}
      <div className="mlc-row mlc-more">+ 7 more modules</div>
    </div>
  );
}

function HeroSyllabus({ accent }: { accent: string }) {
  return (
    <div className="syllabus-card reveal-card">
      <div className="syllabus-head">
        <span className="syllabus-tag" style={{ color: accent }}>SYLLABUS · v2.4</span>
        <span className="syllabus-pages">12 / 12</span>
      </div>
      <div className="syllabus-grid">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className={`syllabus-cell ${i === 3 ? 'active' : ''}`} style={i === 3 ? { borderColor: accent, color: accent } : {}}>
            <span>{String(i + 1).padStart(2, '0')}</span>
          </div>
        ))}
      </div>
      <div className="syllabus-foot">
        <span>Last revised 14 Mar 2026</span>
        <span className="syllabus-stamp" style={{ borderColor: accent, color: accent }}>VERIFIED</span>
      </div>
    </div>
  );
}

function HeroVisual({ variant, accent }: { variant: string, accent: string }) {
  if (variant === 'module-list') return <HeroModuleList accent={accent} />;
  if (variant === 'syllabus-grid') return <HeroSyllabus accent={accent} />;
  return <HeroCardStack accent={accent} />;
}

export default function Hero({ accent, headingFont, headline, variant }: { accent: string, headingFont: string, headline: string, variant: string }) {
  const lines = headline.split('\n');
  return (
    <section id="top" className="hero" data-screen-label="01 Hero">
      <div className="hero-grid">
        <div className="hero-left">
          <div className="badge hero-badge reveal r-0">
            <span className="badge-flag">
              <span style={{ background: '#FFFFFF' }} />
              <span style={{ background: '#00966E' }} />
              <span style={{ background: '#D62612' }} />
            </span>
            Bulgarian Embassy Initiative
          </div>

          <h1 className="hero-title reveal r-1" style={{ fontFamily: `var(--font-${headingFont.replace(' ', '-').toLowerCase()}), "${headingFont}", serif` }}>
            {lines[0]}
            {lines[1] && (<><br /><em>{lines[1]}</em></>)}
          </h1>

          <p className="hero-sub reveal r-2">
            Master the Project Management Platform (PMP) & PPP as a practical method and a life philosophy.
          </p>

          <div className="cta-row reveal r-3">
            <a href="#payment" className="btn btn-primary" style={{ background: accent }}>
              Enroll Now — $249
            </a>
            <a href="#curriculum" className="btn btn-ghost">
              Watch Preview <span className="arrow">→</span>
            </a>
          </div>

          <div className="stats reveal r-4">
            <Stat n="1,240+" label="Students" />
            <Stat n="12" label="Modules" />
            <Stat n="∞" label="Lifetime Access" />
          </div>
        </div>

        <div className="hero-right">
          <HeroVisual variant={variant} accent={accent} />
        </div>
      </div>

      <div className="hero-marquee">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="marquee-row">
              <span>DIPLOMACY</span><Dot accent={accent} />
              <span>INTERNATIONAL TRADE</span><Dot accent={accent} />
              <span>EU FUNDS</span><Dot accent={accent} />
              <span>INVESTMENT SUPPORT</span><Dot accent={accent} />
              <span>BUSINESS DEVELOPMENT</span><Dot accent={accent} />
              <span>BALKAN MARKETS</span><Dot accent={accent} />
              <span>FOREIGN RELATIONS</span><Dot accent={accent} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
