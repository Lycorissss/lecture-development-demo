"use client";

import React, { useState, useEffect } from "react";

export default function ScrollProgress({ show, accent }: { show: boolean, accent: string }) {
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
