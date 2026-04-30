"use client";

import { useRef } from "react";
import type { SanityTestimonial } from "@/sanity/queries";

function TestimonialCard({
  logoUrl,
  logoWidth,
  logoHeight,
  quote,
  author,
}: {
  logoUrl: string;
  logoWidth: number;
  logoHeight: number;
  quote: string;
  author: string;
}) {
  return (
    <div className="bg-[#f1f1f1] border border-[#ddd] flex flex-col gap-4 items-start p-6 rounded-[4px] h-full">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={logoUrl} alt="" width={logoWidth} height={logoHeight} style={{ display: "block" }} />
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

export default function TestimonialsSection({ testimonials }: { testimonials: SanityTestimonial[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const desktop = testimonials;
  const mobile = [...testimonials].sort((a, b) => a.mobileOrder - b.mobileOrder);

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
          {mobile.map((t) => (
            <div
              key={t.author}
              className="shrink-0"
              style={{ width: "min(82vw, 380px)", scrollSnapAlign: "start", transform: `rotate(${t.mobileRotate}deg)` }}
            >
              <TestimonialCard {...t} />
            </div>
          ))}
          <div className="shrink-0 w-6" aria-hidden="true" />
        </div>
      </div>

      {/* ── Desktop: scattered cards overlapping the large heading ── */}
      <div className="hidden lg:flex flex-col items-center justify-center relative px-8 py-[120px] min-h-[953px]">

        {desktop.filter((t) => t.desktopBehind).map((t) => (
          <div
            key={t.author}
            className="absolute w-[353px] z-0"
            style={{ left: t.desktopLeft, top: `${t.desktopTop}px`, transform: `rotate(${t.desktopRotate}deg)` }}
          >
            <TestimonialCard {...t} />
          </div>
        ))}

        <h2
          className="capitalize font-medium text-black text-center w-full relative z-10"
          style={{ fontSize: "198px", letterSpacing: "-13.86px", lineHeight: 1.1 }}
        >
          Testimonials
        </h2>

        {desktop.filter((t) => !t.desktopBehind).map((t) => (
          <div
            key={t.author}
            className="absolute w-[353px] z-20"
            style={{ left: t.desktopLeft, top: `${t.desktopTop}px`, transform: `rotate(${t.desktopRotate}deg)` }}
          >
            <TestimonialCard {...t} />
          </div>
        ))}

      </div>

    </section>
  );
}
