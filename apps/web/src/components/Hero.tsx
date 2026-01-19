'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  const handleLearnMore = () => {
    // Scroll to next section or navigate
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Scrolling Logo Header */}
      <div className="absolute left-0 right-0 top-0 z-50 px-4 py-3 sm:px-6 sm:py-6 lg:px-8">
        <div className="container mx-auto flex items-center justify-between">
          <a href="/">
            <Image
              src="/ai-cheetahs-logo-final.png"
              alt="AI Cheetahs"
              width={300}
              height={80}
              priority
              className="h-auto w-40 drop-shadow-lg sm:w-56 md:w-64 lg:w-72"
            />
          </a>
          <nav className="flex gap-4 sm:gap-6">
            <a
              href="/"
              className="text-sm font-medium text-white transition-colors hover:text-cyan-400 sm:text-base"
            >
              Home
            </a>
            <a
              href="/hot-topics"
              className="text-sm font-medium text-white transition-colors hover:text-cyan-400 sm:text-base"
            >
              Hot Topics 🔥
            </a>
          </nav>
        </div>
      </div>

      {/* Background Image with Overlay - Cheetah Full Head with Space Above Ears */}
      <div className="absolute inset-0">
        <Image
          src="/hero-image-new.png"
          alt="AI Cheetahs Hero"
          fill
          priority
          className="object-cover object-[center_10%] opacity-95 sm:object-[center_15%] md:object-[center_20%]"
          quality={100}
        />
        {/* Gradient overlay for text readability - stronger on left for mobile, keeps cheetah visible on right */}
        <div className="absolute inset-y-0 left-0 w-[65%] bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent sm:w-full sm:from-slate-900/90 sm:via-slate-900/60 md:w-[55%] lg:w-[40%]" />
        {/* Top gradient for header area - lighter to show cheetah */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 to-transparent sm:h-32" />
        {/* Bottom gradient for depth - lighter to show cheetah body */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent sm:h-48" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen flex-col justify-between pb-20 pt-32 sm:justify-center sm:pt-28 md:pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Main Content */}
            <div className="mb-8 animate-fade-in">
              {/* Main Headline */}
              <h2 className="mb-4 text-3xl font-bold leading-tight text-white drop-shadow-2xl sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
                Accelerate Your App
                <br />
                Development with AI
              </h2>

              {/* Subheadline */}
              <div className="mb-6 space-y-1 text-lg text-gray-100 drop-shadow-lg sm:mb-8 sm:space-y-2 sm:text-xl md:text-2xl lg:text-3xl">
                <p className="font-semibold">Innovative Solutions</p>
                <p className="font-semibold">Rapid Deployment</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons - positioned at bottom on mobile to be below AI medallion */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="animate-fade-in">
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 max-w-md">
                <button
                  onClick={handleLearnMore}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-base font-bold text-white shadow-2xl shadow-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/70 sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    LEARN MORE
                    <svg
                      className={`h-5 w-5 transition-transform duration-300 ${
                        isHovered ? 'translate-x-1' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </button>

                <button
                  onClick={() => {
                    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                  }}
                  className="w-full rounded-lg border-2 border-white/30 bg-white/10 px-6 py-3 text-base font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/20 sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
                >
                  GET STARTED
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Tech Lines - Decorative Elements */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-0 top-1/4 h-px w-1/3 animate-pulse bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30" />
        <div className="absolute right-0 top-1/2 h-px w-1/4 animate-pulse bg-gradient-to-l from-transparent via-blue-400 to-transparent opacity-30" />
        <div className="absolute bottom-1/4 left-1/4 h-px w-1/4 animate-pulse bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30" />
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 animate-bounce sm:block">
        <svg
          className="h-8 w-8 text-white/70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}

