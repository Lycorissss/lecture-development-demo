"use client";

import React, { useEffect } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Curriculum from "@/components/Curriculum";
import Administrative from "@/components/Administrative";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import TweaksUI, { useTweaks, TWEAK_DEFAULTS } from "@/components/Tweaks";
import AuthModal from "@/components/AuthModal";
import { useState } from "react";

export default function Page() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const accent = tweaks.accent;
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);



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

      <Nav accent={accent} onEnroll={() => setIsAuthModalOpen(true)} />
      <Hero
        accent={accent}
        headingFont={tweaks.headingFont}
        headline={tweaks.headline}
        variant={tweaks.heroVariant}
        onEnroll={() => setIsAuthModalOpen(true)}
      />
      <Curriculum accent={accent} headingFont={tweaks.headingFont} />
      <Administrative accent={accent} headingFont={tweaks.headingFont} />
      <Pricing accent={accent} headingFont={tweaks.headingFont} onEnroll={() => setIsAuthModalOpen(true)} />
      <Footer accent={accent} />

      <TweaksUI tweaks={tweaks} setTweak={setTweak} />
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} accent={accent} />
    </>
  );
}
