"use client";

import { useRef } from "react";

// Desktop positions match the Figma scattered layout.
// Lukas is rendered behind the heading (z-0); the other three are in front (z-20).
const DESKTOP = [
  {
    logo: "/testimonials/logo-lukas.svg",
    logoW: 138,
    logoH: 19,
    quote: "Professional, precise, and incredibly fast at handling complex product visualizations and templates.",
    author: "Lukas Weber",
    left: "46.94vw",
    top: 272,
    rotate: 2.9,
    behind: true,
  },
  {
    logo: "/testimonials/logo-marko.svg",
    logoW: 143,
    logoH: 19,
    quote: "A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.",
    author: "Marko Stojković",
    left: "7.08vw",
    top: 142,
    rotate: -6.85,
    behind: false,
  },
  {
    logo: "/testimonials/logo-sarah.svg",
    logoW: 109,
    logoH: 31,
    quote: "A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity.",
    author: "Sarah Jenkins",
    left: "21.18vw",
    top: 553,
    rotate: 2.23,
    behind: false,
  },
  {
    logo: "/testimonials/logo-sofia.svg",
    logoW: 81,
    logoH: 36,
    quote: "An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.",
    author: "Sofia Martínez",
    left: "68.54vw",
    top: 546,
    rotate: -4.15,
    behind: false,
  },
] as const;

// Mobile carousel order
const MOBILE = [
  {
    logo: "/testimonials/logo-marko.svg",
    logoW: 143,
    logoH: 19,
    quote: "A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.",
    author: "Marko Stojković",
    rotate: -3.5,
  },
  {
    logo: "/testimonials/logo-sofia.svg",
    logoW: 81,
    logoH: 36,
    quote: "An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.",
    author: "Sofia Martínez",
    rotate: 2,
  },
  {
    logo: "/testimonials/logo-lukas.svg",
    logoW: 138,
    logoH: 19,
    quote: "Professional, precise, and incredibly fast at handling complex product visualizations and templates.",
    author: "Lukas Weber",
    rotate: 2.9,
  },
  {
    logo: "/testimonials/logo-sarah.svg",
    logoW: 109,
    logoH: 31,
    quote: "A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity.",
    author: "Sarah Jenkins",
    rotate: -2.23,
  },
] as const;

function TestimonialCard({
  logo,
  logoW,
  logoH,
  quote,
  author,
}: {
  logo: string;
  logoW: number;
  logoH: number;
  quote: string;
  author: string;
}) {
  return (
    <div className="bg-[#f1f1f1] border border-[#ddd] flex flex-col gap-4 items-start p-6 rounded-[4px] h-full">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={logo} alt="" width={logoW} height={logoH} style={{ display: "block" }} />
      <p
        className="font-normal text-[18px] text-[#1f1f1f] leading-[1.3] flex-1"
        style={{ letterSpacing: "-0.72px" }}
      >
        {quote}
      </p>
      <p
        className="font-black text-[16px] text-black uppercase leading-[1.1] whitespace-nowrap"
        style={{ letterSpacing: "-0.64px" }}
      >
        {author}
      </p>
    </div>
  );
}

export default function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  function onMouseDown(e: React.MouseEvent) {
    const track = trackRef.current;
    if (!track) return;
    isDragging.current = true;
    startX.current = e.pageX - track.getBoundingClientRect().left;
    scrollLeft.current = track.scrollLeft;
    track.style.cursor = "grabbing";
  }

  function onMouseMove(e: React.MouseEvent) {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.getBoundingClientRect().left;
    const walk = (x - startX.current) * 1.5;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  }

  function stopDrag() {
    isDragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
  }

  return (
    <section id="testimonials">

      {/* ── Mobile: heading + horizontal swipeable carousel ── */}
      <div className="lg:hidden overflow-hidden py-12">
        <h2
          className="font-medium text-black px-6 mb-10"
          style={{ fontSize: "64px", letterSpacing: "-4.48px", lineHeight: 0.88 }}
        >
          Testimonials
        </h2>
        <div
          ref={trackRef}
          className="flex gap-5 px-6 overflow-x-auto cursor-grab select-none"
          style={{
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
            paddingTop: "24px",
            paddingBottom: "40px",
          }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
        >
          {MOBILE.map((t) => (
            <div
              key={t.author}
              className="shrink-0"
              style={{ width: "min(82vw, 380px)", scrollSnapAlign: "start", transform: `rotate(${t.rotate}deg)` }}
            >
              <TestimonialCard {...t} />
            </div>
          ))}
          <div className="shrink-0 w-6" aria-hidden="true" />
        </div>
      </div>

      {/* ── Desktop: scattered cards overlapping the large heading ── */}
      <div className="hidden lg:flex flex-col items-center justify-center relative px-8 py-[120px] min-h-[953px]">

        {/* Cards behind heading */}
        {DESKTOP.filter((t) => t.behind).map((t) => (
          <div
            key={t.author}
            className="absolute w-[353px] z-0"
            style={{ left: t.left, top: `${t.top}px`, transform: `rotate(${t.rotate}deg)` }}
          >
            <TestimonialCard {...t} />
          </div>
        ))}

        {/* Heading — above Lukas, below Marko/Sarah/Sofia */}
        <h2
          className="capitalize font-medium text-black text-center w-full relative z-10"
          style={{ fontSize: "198px", letterSpacing: "-13.86px", lineHeight: 1.1 }}
        >
          Testimonials
        </h2>

        {/* Cards in front of heading */}
        {DESKTOP.filter((t) => !t.behind).map((t) => (
          <div
            key={t.author}
            className="absolute w-[353px] z-20"
            style={{ left: t.left, top: `${t.top}px`, transform: `rotate(${t.rotate}deg)` }}
          >
            <TestimonialCard {...t} />
          </div>
        ))}

      </div>

    </section>
  );
}
