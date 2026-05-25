"use client";

import React, { useState } from "react";

function TrustItem({ icon, label, accent }: { icon: string, label: string, accent: string }) {
  const icons: Record<string, React.ReactNode> = {
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

function PriceCard({ tier, price, period, features, cta, accent, featured }: { tier: string, price: string, period: string, features: string[], cta: string, accent: string, featured?: boolean }) {
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

export default function Pricing({ accent, headingFont }: { accent: string, headingFont: string }) {
  const [billing, setBilling] = useState('one-time');
  return (
    <section id="payment" className="pricing" data-screen-label="04 Pricing">
      <div className="container pricing-inner">
        <div className="pricing-head">
          <span className="overline" style={{ color: accent }}>● Pricing</span>
          <h2 className="section-h2 center" style={{ fontFamily: `var(--font-${headingFont.replace(' ', '-').toLowerCase()}), "${headingFont}", serif` }}>
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
