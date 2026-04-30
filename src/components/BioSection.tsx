import Image from "next/image";
import type { ReactNode } from "react";

const LABEL = "font-mono text-[14px] uppercase leading-[1.1] text-[#1f1f1f]";

const BIO_TEXT =
  "Placeholder paragraph one. This is where you introduce yourself — your background, your passion for your craft, and what drives you creatively. Two to three sentences work best here. Placeholder paragraph two. Here you can describe your technical approach, how you collaborate with clients, or what sets your work apart from others in your field.";

// Corner bracket SVG — drawn as a top-left L shape; CSS rotation gives all four corners.
// rotate(0):    top-left    rotate(-90): bottom-left
// rotate(90):   top-right   rotate(180): bottom-right
function CornerBracket({ rotate }: { rotate?: number }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
    >
      <path d="M15 1H1V15" stroke="#1f1f1f" strokeWidth="1" />
    </svg>
  );
}

// Text surrounded by L-shaped corner brackets at all four corners.
function BracketFrame({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-stretch gap-3">
      {/* Left bracket column: top-left at top, bottom-left at bottom */}
      <div className="flex flex-col justify-between shrink-0 w-4">
        <CornerBracket />
        <CornerBracket rotate={-90} />
      </div>

      {/* Content */}
      <div className="flex-1 py-3">{children}</div>

      {/* Right bracket column: top-right at top, bottom-right at bottom */}
      <div className="flex flex-col justify-between shrink-0 w-4">
        <CornerBracket rotate={90} />
        <CornerBracket rotate={180} />
      </div>
    </div>
  );
}

export default function BioSection() {
  return (
    <section id="bio" className="px-4 py-12 lg:px-8 lg:py-[80px]">

      {/* ── Mobile (< lg): stacked column ── */}
      <div className="lg:hidden flex flex-col gap-5">
        <span className={LABEL}>002</span>
        <span className={LABEL}>[ About ]</span>

        <BracketFrame>
          <p
            className="text-[14px] font-normal leading-[1.3] text-[#1f1f1f]"
            style={{ letterSpacing: "-0.56px" }}
          >
            {BIO_TEXT}
          </p>
        </BracketFrame>

        {/* Portrait — full-width, locked to the image's natural aspect ratio */}
        <div className="relative w-full aspect-[422/594] overflow-hidden">
          <Image
            src="/bio-portrait.png"
            alt="Harvey Specter"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      {/* ── Desktop (≥ lg): two-column row ── */}
      <div className="hidden lg:flex items-start justify-between">

        {/* Far-left: section label */}
        <span className={`${LABEL} shrink-0`}>[ About ]</span>

        {/* Right area: auto-sized so justify-between creates the correct gap from [ About ] */}
        <div className="flex items-end gap-8 shrink-0">

          {/* Bracket text frame — fixed width matching the Figma (983px container minus photo column) */}
          <div className="w-[466px]">
            <BracketFrame>
              <p
                className="text-[14px] font-normal leading-[1.3] text-[#1f1f1f]"
                style={{ letterSpacing: "-0.56px" }}
              >
                {BIO_TEXT}
              </p>
            </BracketFrame>
          </div>

          {/* 002 counter + portrait photo */}
          <div className="flex items-start gap-6 shrink-0">
            <span className={LABEL}>002</span>
            <div className="relative overflow-hidden w-[436px] h-[614px] shrink-0">
              <Image
                src="/bio-portrait.png"
                alt="Harvey Specter"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
