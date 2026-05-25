const { useState, useEffect, useRef } = React;

// ---------- Tweak defaults ----------
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#2B4AFF",
  "headingFont": "Instrument Serif",
  "heroVariant": "card-stack",
  "showProgressBar": true,
  "headline": "Master Project\nDevelopment."
}/*EDITMODE-END*/;

const ACCENT_OPTIONS = ["#2B4AFF", "#D9492A", "#1F8A5B", "#7A4DFF"];
const HEADING_FONTS = ["Instrument Serif", "Playfair Display", "Fraunces"];
const HERO_VARIANTS = ["card-stack", "module-list", "syllabus-grid"];

// ---------- Scroll progress bar ----------
function ScrollProgress({ show, accent }) {
  const [w, setW] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setW(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!show) return null;
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, height: 2,
      width: `${w}%`, background: accent, zIndex: 9999,
      transition: 'width 80ms linear'
    }} />
  );
}

// ---------- Reveal on scroll ----------
function useReveal() {
  const ref = useRef(null);
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
  return [ref, shown];
}

// ---------- Top nav ----------
function Nav({ accent }) {
  return (
    <nav className="nav">
      <a href="#top" className="nav-logo">
        <span className="logo-mark" style={{ background: accent }} />
        <span>Logo Here<span className="logo-dot" style={{ color: accent }}>.</span></span>
      </a>
      <div className="nav-links">
        <a href="#curriculum">Curriculum</a>
        <a href="#administrative">Access</a>
        <a href="#payment">Pricing</a>
        <a href="#payment" className="nav-cta" style={{ background: accent }}>Enroll →</a>
      </div>
    </nav>
  );
}

// ---------- Hero ----------
function Hero({ accent, headingFont, headline, variant }) {
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

          <h1 className="hero-title reveal r-1" style={{ fontFamily: `"${headingFont}", serif` }}>
            {lines[0]}
            {lines[1] && (<><br/><em>{lines[1]}</em></>)}
          </h1>

          <p className="hero-sub reveal r-2">
            A structured video lecture series for professionals
            building and delivering projects that actually ship.
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
          {Array.from({length: 2}).map((_, i) => (
            <div key={i} className="marquee-row">
              <span>METHODOLOGY</span><Dot accent={accent}/>
              <span>FRAMEWORKS</span><Dot accent={accent}/>
              <span>DELIVERY</span><Dot accent={accent}/>
              <span>STAKEHOLDERS</span><Dot accent={accent}/>
              <span>RISK MAPPING</span><Dot accent={accent}/>
              <span>RETROSPECTIVES</span><Dot accent={accent}/>
              <span>PORTFOLIO</span><Dot accent={accent}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Dot({ accent }) {
  return <span className="dot" style={{ background: accent }} />;
}

function Stat({ n, label }) {
  return (
    <div className="stat">
      <div className="stat-n">{n}</div>
      <div className="stat-l">{label}</div>
    </div>
  );
}

function HeroVisual({ variant, accent }) {
  if (variant === 'module-list') return <HeroModuleList accent={accent} />;
  if (variant === 'syllabus-grid') return <HeroSyllabus accent={accent} />;
  return <HeroCardStack accent={accent} />;
}

function HeroCardStack({ accent }) {
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
        <h3 className="stack-title">Stakeholder Alignment Framework</h3>
        <ul className="stack-list">
          {[
            'Define stakeholder tiers',
            'Map influence vs. interest',
            'Build your RACI matrix'
          ].map((t, i) => (
            <li key={i}>
              <span className="check" style={{ background: accent }}>
                <svg viewBox="0 0 12 12" width="10" height="10">
                  <path d="M2.5 6.2 L5 8.5 L9.5 3.8" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              {t}
            </li>
          ))}
        </ul>
        <div className="stack-foot">
          <div className="avatar" style={{ background: `linear-gradient(135deg, ${accent}, #7A4DFF)` }}>DV</div>
          <div className="stack-author">
            <div className="author-name">Dr. D. Vassilev</div>
            <div className="author-role">Lead Instructor · Sofia</div>
          </div>
          <button className="play-btn" style={{ borderColor: accent, color: accent }}>
            <svg viewBox="0 0 12 14" width="9" height="11" fill="currentColor"><path d="M1 1 L11 7 L1 13 Z"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function HeroModuleList({ accent }) {
  const items = [
    ['01', 'Project Architecture', '18m'],
    ['02', 'Scoping & Requirements', '22m'],
    ['03', 'Team Structure', '16m'],
    ['04', 'Stakeholder Alignment', '15m'],
    ['05', 'Risk Mapping', '20m'],
  ];
  return (
    <div className="module-list-card reveal-card">
      <div className="mlc-head">
        <div className="mlc-title">Series Outline</div>
        <div className="mlc-meta">12 modules · 4h 22m</div>
      </div>
      {items.map(([n, t, m], i) => (
        <div key={n} className="mlc-row" style={{ '--idx': i }}>
          <span className="mlc-n" style={{ color: i === 3 ? accent : undefined }}>{n}</span>
          <span className="mlc-t">{t}</span>
          <span className="mlc-m">{m}</span>
        </div>
      ))}
      <div className="mlc-row mlc-more">+ 7 more modules</div>
    </div>
  );
}

function HeroSyllabus({ accent }) {
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

// ---------- Curriculum ----------
const MODULES = [
  ['Introduction to Project Architecture', 'Foundational mental models for thinking about projects as composable systems.', '18 min'],
  ['Scoping & Requirements Gathering', 'Translate vague briefs into testable acceptance criteria your team can build against.', '22 min'],
  ['Team Structure & Role Assignment', 'Match team topologies to project shape — Conway’s Law in practice.', '16 min'],
  ['Stakeholder Alignment Framework', 'A repeatable system for mapping influence, interest, and information needs.', '15 min'],
  ['Risk Mapping Essentials', 'Catalog, score, and pre-empt the failure modes before they cost you weeks.', '20 min'],
  ['Agile vs. Waterfall', 'Pick the right cadence by reading the problem, not the trend.', '19 min'],
  ['Sprint Planning in Practice', 'Estimation, capacity, and the math of carryover.', '24 min'],
  ['Budget Management for PMs', 'Tracking spend without becoming the spreadsheet bottleneck.', '21 min'],
  ['Communication Cadence Design', 'Async-first rituals that scale across timezones and teams.', '17 min'],
  ['Delivery Checklist & QA', 'Pre-flight reviews that catch the mistakes nobody wants to own.', '23 min'],
  ['Post-Launch Retrospectives', 'Generate insights, not blame. Methods that actually change behavior.', '14 min'],
  ['Building Your PM Portfolio', 'Document your work in a way that earns the next opportunity.', '19 min'],
];

function Curriculum({ accent, headingFont }) {
  const [ref, shown] = useReveal();
  return (
    <section id="curriculum" className="curriculum" data-screen-label="02 Curriculum" ref={ref}>
      <div className="container">
        <div className="section-head">
          <div className="section-meta">
            <span className="overline" style={{ color: accent }}>● What you'll learn</span>
            <h2 className="section-h2" style={{ fontFamily: `"${headingFont}", serif` }}>
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

function ModuleCard({ n, title, desc, time, accent, shown, idx }) {
  return (
    <article
      className={`module-card ${shown ? 'in' : ''}`}
      style={{ transitionDelay: `${idx * 45}ms`, '--accent': accent }}
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

// ---------- Administrative / FAQ ----------
const FAQ = [
  ['Who is this course for?',
   'Mid-level professionals, independent consultants, and entrepreneurs running cross-functional projects who want a single, coherent system instead of stitching together blog posts.'],
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

function Administrative({ accent, headingFont }) {
  const [open, setOpen] = useState(0);
  return (
    <section id="administrative" className="administrative" data-screen-label="03 Administrative">
      <div className="container admin-grid">
        <aside className="admin-left">
          <div className="admin-sticky">
            <span className="overline" style={{ color: accent }}>● Access & Policies</span>
            <h2 className="section-h2" style={{ fontFamily: `"${headingFont}", serif` }}>
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
                  <a href="mailto:support@atams.bg" className="contact-link" style={{ color: accent }}>
                    support@atams.bg
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
                  <div className="contact-meta">Mon–Fri · 09:00–17:00 EET</div>
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

function FaqItem({ q, a, n, isOpen, onToggle, accent }) {
  const innerRef = useRef(null);
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

// ---------- Pricing ----------
function Pricing({ accent, headingFont }) {
  const [billing, setBilling] = useState('one-time');
  return (
    <section id="payment" className="pricing" data-screen-label="04 Pricing">
      <div className="container pricing-inner">
        <div className="pricing-head">
          <span className="overline" style={{ color: accent }}>● Pricing</span>
          <h2 className="section-h2 center" style={{ fontFamily: `"${headingFont}", serif` }}>
            One price.<br/><em>No subscriptions.</em>
          </h2>
          <p className="section-desc center">
            Pay once, learn forever. No monthly fees, no upsells, no expiration.
          </p>

          <div className="billing-toggle" role="tablist">
            <button
              role="tab"
              aria-selected={billing === 'one-time'}
              className={billing === 'one-time' ? 'active' : ''}
              onClick={() => setBilling('one-time')}
              style={billing === 'one-time' ? { background: accent } : {}}
            >One-time</button>
            <button
              role="tab"
              aria-selected={billing === 'invoice'}
              className={billing === 'invoice' ? 'active' : ''}
              onClick={() => setBilling('invoice')}
              style={billing === 'invoice' ? { background: accent } : {}}
            >Invoice (EU)</button>
          </div>
        </div>

        <div className="cards">
          <PriceCard
            tier="Individual"
            price={billing === 'invoice' ? '$269' : '$249'}
            period={billing === 'invoice' ? 'incl. EU VAT handling' : 'one-time payment'}
            features={[
              'Full access to all 12 modules',
              'Downloadable resources & templates',
              'Verified certificate of completion',
              'Future updates included',
              'Community forum access',
            ]}
            cta="Enroll as Individual"
            accent={accent}
          />
          <PriceCard
            featured
            tier="Team · 3–10 seats"
            price={billing === 'invoice' ? '$649' : '$599'}
            period={billing === 'invoice' ? 'one-time, incl. invoicing' : 'one-time, per team'}
            features={[
              'Everything in Individual',
              'Up to 10 team seats',
              'Team progress dashboard',
              'Priority email support',
              'Custom invoice & billing',
            ]}
            cta="Enroll Your Team"
            accent={accent}
          />
        </div>

        <div className="trust-row">
          <TrustItem accent={accent} icon="lock" label="Secure Checkout" />
          <TrustItem accent={accent} icon="refund" label="14-day Refund" />
          <TrustItem accent={accent} icon="embassy" label="Embassy Verified" />
          <TrustItem accent={accent} icon="infinity" label="Lifetime Access" />
        </div>

        <div className="pay-methods">
          <span>Accepted</span>
          {['Visa', 'Mastercard', 'PayPal', 'SEPA', 'Bank Transfer'].map(m => (
            <span key={m} className="pay-pill">{m}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustItem({ icon, label, accent }) {
  const icons = {
    lock: <path d="M4 7 V5 a3 3 0 0 1 6 0 V7 M3 7 H11 V12 H3 Z" />,
    refund: <path d="M3 7 a4 4 0 1 1 1 2.8 M3 7 V4 M3 7 H6" />,
    embassy: <path d="M2 12 H12 M3 12 V6 L7 4 L11 6 V12 M5 12 V8 H9 V12" />,
    infinity: <path d="M5 7 a2 2 0 1 1 2 2 a2 2 0 1 1 -2 -2 M7 7 a2 2 0 1 0 2 -2 a2 2 0 1 0 -2 2" />,
  };
  return (
    <div className="trust">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke={accent} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        {icons[icon]}
      </svg>
      <span>{label}</span>
    </div>
  );
}

function PriceCard({ tier, price, period, features, cta, accent, featured }) {
  return (
    <div className={`price-card ${featured ? 'featured' : ''}`} style={featured ? { borderColor: accent } : {}}>
      {featured && (
        <div className="popular-tag" style={{ background: accent }}>MOST POPULAR</div>
      )}
      <div className="price-tier">{tier}</div>
      <div className="price-row">
        <span className="price-num">{price}</span>
      </div>
      <div className="price-period">{period}</div>
      <div className="price-divider" />
      <ul className="features">
        {features.map(f => (
          <li key={f}>
            <span className="feature-arrow" style={{ color: accent }}>→</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <button
        className={`price-cta ${featured ? 'cta-solid' : 'cta-ghost'}`}
        style={featured ? { background: accent } : {}}
      >
        {cta}
        <span className="cta-arrow">→</span>
      </button>
      {featured && (
        <div className="price-note">Need more than 10 seats? <a href="#" style={{ color: accent }}>Contact sales →</a></div>
      )}
    </div>
  );
}

// ---------- Footer ----------
function Footer({ accent }) {
  return (
    <footer className="footer" data-screen-label="05 Footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-mark" style={{ background: accent }} />
              <span>Atams.</span>
            </div>
            <p className="footer-tag">
              A project-development masterclass produced in partnership
              with the Bulgarian Embassy education program.
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
          <div>© 2026 Atams. · Supported by the Bulgarian Embassy.</div>
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

// ---------- Tweaks ----------
function TweaksUI({ tweaks, setTweak }) {
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Brand">
        <TweakColor
          label="Accent"
          value={tweaks.accent}
          options={ACCENT_OPTIONS}
          onChange={(v) => setTweak('accent', v)}
        />
        <TweakSelect
          label="Heading font"
          value={tweaks.headingFont}
          options={HEADING_FONTS}
          onChange={(v) => setTweak('headingFont', v)}
        />
        <TweakText
          label="Hero headline"
          value={tweaks.headline}
          onChange={(v) => setTweak('headline', v)}
          rows={2}
        />
      </TweakSection>
      <TweakSection title="Hero visual">
        <TweakRadio
          label="Variant"
          value={tweaks.heroVariant}
          options={HERO_VARIANTS}
          onChange={(v) => setTweak('heroVariant', v)}
        />
      </TweakSection>
      <TweakSection title="Page">
        <TweakToggle
          label="Scroll progress bar"
          value={tweaks.showProgressBar}
          onChange={(v) => setTweak('showProgressBar', v)}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

// ---------- App ----------
function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const accent = tweaks.accent;

  // Smooth scroll for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <>
      <style>{`
        :root {
          --accent: ${accent};
        }
        a.nav-cta:hover, .btn-primary:hover, .price-cta.cta-solid:hover {
          filter: brightness(0.92);
          transform: translateY(-1px);
        }
        .module-card:hover {
          border-color: ${accent} !important;
          box-shadow: 0 0 0 3px ${accent}14 !important;
        }
        .module-card:hover .module-arrow {
          color: ${accent};
          transform: translate(2px, -2px);
        }
        ::selection { background: ${accent}33; color: #0D0F12; }
      `}</style>

      <ScrollProgress show={tweaks.showProgressBar} accent={accent} />
      <Nav accent={accent} />
      <Hero
        accent={accent}
        headingFont={tweaks.headingFont}
        headline={tweaks.headline}
        variant={tweaks.heroVariant}
      />
      <Curriculum accent={accent} headingFont={tweaks.headingFont} />
      <Administrative accent={accent} headingFont={tweaks.headingFont} />
      <Pricing accent={accent} headingFont={tweaks.headingFont} />
      <Footer accent={accent} />

      <TweaksUI tweaks={tweaks} setTweak={setTweak} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
