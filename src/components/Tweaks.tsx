"use client";

import React from "react";
import { TweaksPanel, TweakSection, TweakColor, TweakSelect, TweakText, TweakRadio, TweakToggle } from "./TweaksPanel";
export { useTweaks } from "./TweaksPanel";

export const ACCENT_OPTIONS = ["#2B4AFF", "#D9492A", "#1F8A5B", "#7A4DFF"];
export const HEADING_FONTS = ["Instrument Serif", "Playfair Display", "Fraunces"];
export const HERO_VARIANTS = ["card-stack", "module-list", "syllabus-grid"];

export const TWEAK_DEFAULTS = {
  "accent": "#2B4AFF",
  "headingFont": "Instrument Serif",
  "heroVariant": "card-stack",
  "showProgressBar": true,
  "headline": "Master International\nTrade & Diplomacy."
};

export default function TweaksUI({ tweaks, setTweak }: { tweaks: any, setTweak: any }) {
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Brand">
        <TweakColor
          label="Accent"
          value={tweaks.accent}
          options={ACCENT_OPTIONS}
          onChange={(v: string) => setTweak('accent', v)}
        />
        <TweakSelect
          label="Heading font"
          value={tweaks.headingFont}
          options={HEADING_FONTS}
          onChange={(v: string) => setTweak('headingFont', v)}
        />
        <TweakText
          label="Hero headline"
          value={tweaks.headline}
          onChange={(v: string) => setTweak('headline', v)}
        />
      </TweakSection>
      <TweakSection label="Hero visual">
        <TweakRadio
          label="Variant"
          value={tweaks.heroVariant}
          options={HERO_VARIANTS}
          onChange={(v: string) => setTweak('heroVariant', v)}
        />
      </TweakSection>
      <TweakSection label="Page">
        <TweakToggle
          label="Scroll progress bar"
          value={tweaks.showProgressBar}
          onChange={(v: boolean) => setTweak('showProgressBar', v)}
        />
      </TweakSection>
    </TweaksPanel>
  );
}
