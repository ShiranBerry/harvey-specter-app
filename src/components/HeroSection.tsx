"use client";

import { useState } from "react";
import Image from "next/image";

const NAV_LINKS = ["About", "Services", "Projects", "News", "Contact"];

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ── Mobile fullscreen menu overlay ── */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-[100] flex flex-col px-4 pt-6 pb-10 lg:hidden">
          <div className="flex items-center justify-between mb-16">
            <span className="font-semibold text-base tracking-[-0.04em] capitalize">
              H.Studio
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="p-1"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" stroke="black" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-4xl font-semibold capitalize tracking-[-0.04em] text-black hover:opacity-60 transition-opacity"
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="mt-auto pt-8">
            <button
              className="bg-black text-white text-sm font-medium tracking-[-0.04em] px-4 py-3 rounded-3xl"
              onClick={() => setMenuOpen(false)}
            >
              Let&apos;s talk
            </button>
          </div>
        </div>
      )}

      {/*
        Section uses isolation:isolate so mix-blend-overlay on the name blends
        against the photo within this context. No z-index on any child —
        DOM order alone controls stacking, which keeps the blend mode intact.
      */}
      <section
        className="relative overflow-hidden min-h-screen flex flex-col px-4 lg:px-8"
        style={{ isolation: "isolate" }}
      >
        {/* 1 — Background photo */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <Image
            src="/hero-bg.png"
            alt=""
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "50% 20%" }}
          />
        </div>

        {/* 2 — Frosted-glass overlay at bottom: fades in via mask so no hard edge */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[349px] backdrop-blur-[10px] pointer-events-none"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 40%)",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 40%)",
          }}
        />

        {/* 3 — Navbar — inherits px-4/px-8 from section, no extra padding needed */}
        <nav className="relative flex items-center justify-between py-6 shrink-0">
          <span className="font-semibold text-base tracking-[-0.04em] capitalize text-black">
            H.Studio
          </span>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-14 font-semibold text-base tracking-[-0.04em] capitalize text-black">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:opacity-60 transition-opacity duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <button className="hidden lg:flex items-center justify-center bg-black text-white text-sm font-medium tracking-[-0.04em] px-4 py-3 rounded-3xl hover:bg-neutral-800 transition-colors duration-200">
            Let&apos;s talk
          </button>

          {/* Mobile hamburger — wired to state */}
          <button
            className="lg:hidden p-1 cursor-pointer"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="2" y="5"  width="20" height="2" rx="1" fill="black" />
              <rect x="2" y="11" width="20" height="2" rx="1" fill="black" />
              <rect x="2" y="17" width="20" height="2" rx="1" fill="black" />
            </svg>
          </button>
        </nav>

        {/*
          4 — Mobile spacer: flex-1 pushes the content block to the bottom
          of the viewport so name + description sit together at the bottom
          (matching the Figma mobile layout). Hidden on desktop where
          lg:mt-[240px] on the content block provides the gap instead.
        */}
        <div className="flex-1 lg:hidden" aria-hidden="true" />

        {/* 5 — Hero content */}
        <div className="relative w-full pb-6 lg:pb-0 lg:mt-[240px]">

          {/*
            [ Hello i'm ] label + Harvey Specter heading share the same left
            edge as the navbar (section px-4 / lg:px-8). On desktop text-left
            aligns the H with H.Studio; on mobile text-center is natural.
            The heading overflows to the right (clipped by section overflow-hidden).
          */}
          <div className="flex justify-center lg:justify-start mb-1">
            <span
              className="font-mono text-[14px] text-white uppercase leading-[1.1] mix-blend-overlay"
              style={{ letterSpacing: 0 }}
            >
              [ Hello i&apos;m ]
            </span>
          </div>

          <h1
            className="hero-name w-full text-center lg:text-left capitalize text-white font-medium mix-blend-overlay whitespace-pre-wrap"
            style={{ letterSpacing: "-0.07em" }}
          >
            {`Harvey   Specter`}
          </h1>

          {/* Description + CTA — stays within the shared grid */}
          <div className="w-full flex lg:justify-end mt-8 lg:mt-[17px]">
            <div className="flex flex-col gap-[17px] w-[293px] lg:w-[294px]">
              <p
                className="text-[14px] font-bold italic uppercase text-[#1f1f1f]"
                style={{ letterSpacing: "-0.56px", lineHeight: 1.1 }}
              >
                H.Studio is a{" "}
                <span className="font-normal not-italic">full-service</span>
                {" "}creative studio creating beautiful digital experiences and
                products. We are an{" "}
                <span className="font-normal not-italic">award winning</span>
                {" "}desing and art group specializing in branding, web design
                and engineering.
              </p>
              <button
                className="self-start bg-black text-white text-sm font-medium px-4 py-3 rounded-3xl hover:bg-neutral-800 transition-colors duration-200"
                style={{ letterSpacing: "-0.56px" }}
              >
                Let&apos;s talk
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
