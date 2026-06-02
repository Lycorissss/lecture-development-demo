"use client";

import React, { useState, useEffect, useCallback } from "react";

export type Slide = {
  id: string;
  title: string;
  description: React.ReactNode;
  content?: React.ReactNode;
  url?: string;
  fullScreenContent?: boolean;
};

interface SlideViewerProps {
  slides: Slide[];
}

export default function SlideViewer({ slides }: SlideViewerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? prev : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? 0 : prev - 1));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent scrolling when pressing space or arrows
      if ([" ", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        if (e.target === document.body) {
          e.preventDefault();
        }
      }

      if (e.key === "ArrowRight" || e.key === " ") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="fixed inset-0 bg-[#F5F5F7] text-[#1D1D1F] overflow-hidden font-inter selection:bg-black/10">

      {/* PPT Template Background - Minimalist, Elegant, Bright */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Abstract Elegant Shapes */}
        <div className="absolute top-0 right-0 w-[50vw] h-[100vh] bg-gradient-to-bl from-[#E8E8ED] to-transparent opacity-60 transform skew-x-[-15deg] translate-x-32" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[50vh] bg-gradient-to-tr from-[#E8E8ED] to-transparent opacity-60 rounded-tr-full blur-3xl" />

        {/* Frame borders for a PPT feel */}
        <div className="absolute top-6 left-6 right-6 bottom-6 border border-[#1D1D1F]/5 pointer-events-none" />
      </div>

      {/* Slide Stack - Renders ONLY the active slide like PowerPoint */}
      <div className="relative w-full h-[calc(100vh-60px)] z-10">
        {slides.map((slide, index) => {
          if (index !== currentSlide) return null; // Only render active slide

          return (
            <div
              key={`${slide.id}-${index}`}
              className="absolute inset-0 w-full h-full p-12 xl:p-20 flex items-center justify-center animate-in fade-in zoom-in-[0.98] duration-500"
            >
              <div className="w-full h-full max-w-[1500px] flex items-center justify-center relative">

                {/* Brand Header */}
                <div className="absolute top-[-20px] left-0 flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#1D1D1F] flex items-center justify-center text-white font-instrument-serif text-sm">
                    MC
                  </div>
                  <div className="font-medium text-sm tracking-wide text-[#1D1D1F]/80 uppercase">
                    MasterClass Presentation
                  </div>
                </div>

                {slide.fullScreenContent ? (
                  <div className="w-full h-[85%] mt-12 flex items-center justify-center">
                    {slide.content}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-16 w-full h-[85%] mt-12 items-center">

                    {/* Text Column - Elegant Minimalist */}
                    <div className="flex flex-col justify-center h-full pr-8 relative">
                      <div className="mb-10">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-[1px] bg-[#1D1D1F]/30" />
                          <div className="text-[#1D1D1F]/60 font-mono text-xs tracking-[0.2em] uppercase font-semibold">
                            Slide {String(index + 1).padStart(2, '0')}
                          </div>
                        </div>
                        <h2 className="text-5xl xl:text-6xl font-instrument-serif leading-[1.05] tracking-tight text-[#1D1D1F]">
                          {slide.title}
                        </h2>
                      </div>

                      <div className="text-[#1D1D1F]/70 text-lg leading-relaxed font-light">
                        {slide.description}
                      </div>
                    </div>

                    {/* Mockup Column */}
                    <div className="relative w-full h-[85vh] max-h-[750px] flex items-center justify-center">
                      <div className="absolute inset-0 bg-white border border-[#1D1D1F]/10 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col">
                        {/* Browser/Window Header - Clean Mac Style */}
                        <div className="h-12 w-full border-b border-[#1D1D1F]/5 bg-[#FAFAFA] flex items-center px-4 shrink-0 justify-between">
                          <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/5" />
                            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/5" />
                            <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/5" />
                          </div>
                          {slide.url ? (
                            <a href={slide.url} target="_blank" rel="noopener noreferrer" className="text-[11px] font-mono text-[#1D1D1F]/40 hover:text-indigo-600 transition-colors bg-white px-8 py-1.5 rounded-md border border-[#1D1D1F]/5 shadow-sm">
                              {slide.url.replace(/^https?:\/\//, '')}
                            </a>
                          ) : (
                            <div className="text-[11px] font-mono text-[#1D1D1F]/40 bg-white px-8 py-1.5 rounded-md border border-[#1D1D1F]/5 shadow-sm">
                              lecture-development-demo.vercel.app
                            </div>
                          )}
                          <div className="w-[52px]" />
                        </div>
                        {/* Content Area */}
                        <div className="flex-1 w-full overflow-y-auto custom-scrollbar relative bg-[#F9F9FA]">
                          <div className="w-full origin-top relative flex justify-center pb-20">
                            {slide.content}
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Elegant Canva/Keynote Footer */}
      <div className="absolute bottom-0 left-0 w-full h-[60px] bg-transparent flex items-center justify-between px-10 z-30">

        {/* Presentation Info */}
        <div className="text-xs font-mono text-[#1D1D1F]/40 tracking-widest uppercase">
          Confidential Pitch Deck
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center gap-8 bg-white px-6 py-2 rounded-full border border-[#1D1D1F]/5 shadow-sm">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="text-lg text-[#1D1D1F]/40 hover:text-[#1D1D1F] disabled:opacity-20 disabled:hover:text-[#1D1D1F]/40 transition-colors"
          >
            ←
          </button>

          <div className="flex gap-2.5 items-center">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`transition-all duration-300 rounded-full ${i === currentSlide ? 'w-2 h-2 bg-[#1D1D1F]' : 'w-1.5 h-1.5 bg-[#1D1D1F]/20 hover:bg-[#1D1D1F]/40'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="text-lg text-[#1D1D1F]/40 hover:text-[#1D1D1F] disabled:opacity-20 disabled:hover:text-[#1D1D1F]/40 transition-colors"
          >
            →
          </button>
        </div>

        {/* Page Number */}
        <div className="text-xs font-mono text-[#1D1D1F]/60">
          {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </div>
      </div>

    </div>
  );
}
