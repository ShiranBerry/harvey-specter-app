import type { ReactNode } from "react";

const LABEL = "font-mono text-[14px] uppercase leading-[1.1] text-[#1f1f1f]";
const TRACKING: React.CSSProperties = { letterSpacing: "-0.08em" };

function BigText({ children }: { children: ReactNode }) {
  return (
    <span
      className="font-light text-[32px] lg:text-[6.67vw] text-black uppercase leading-[0.84] whitespace-nowrap"
      style={TRACKING}
    >
      {children}
    </span>
  );
}

function Amp() {
  return (
    <span
      style={{
        fontFamily: "var(--font-playfair)",
        fontStyle: "italic",
        fontWeight: "normal",
        fontVariationSettings: "'opsz' 12, 'wdth' 100",
      }}
    >
      &amp;
    </span>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="px-4 py-12 lg:px-8 lg:py-[120px]">
      <div className="flex flex-col gap-6">

        {/* Header: label + full-width rule */}
        <div className="flex flex-col gap-3 items-end">
          <span className={LABEL}>[ 8+ years in industry ]</span>
          <div className="w-full border-t border-[#1f1f1f]" />
        </div>

        {/* ── Mobile (< lg): centered, vertically stacked ── */}
        <div className="lg:hidden flex flex-col gap-2 items-center text-center">
          <span className={LABEL}>001</span>
          <BigText>A creative director&nbsp;&nbsp;&nbsp;/</BigText>
          <BigText>Photographer</BigText>
          <BigText>Born <Amp /> raised</BigText>
          <BigText>on the south side</BigText>
          <BigText>of chicago.</BigText>
          <span className={LABEL}>[ creative freelancer ]</span>
        </div>

        {/* ── Desktop (≥ lg): staggered cascade ── */}
        <div className="hidden lg:flex flex-col gap-2">

          {/* Line 1: left edge + "001" footnote */}
          <div className="flex items-start gap-3">
            <BigText>A creative director&nbsp;&nbsp;&nbsp;/</BigText>
            <span className={`${LABEL} shrink-0 mt-1`}>001</span>
          </div>

          {/* Line 2: indented ~214px at 1440px */}
          <div className="pl-[14.9vw]">
            <BigText>Photographer</BigText>
          </div>

          {/* Line 3: indented ~610px at 1440px */}
          <div className="pl-[42.4vw]">
            <BigText>Born <Amp /> raised</BigText>
          </div>

          {/* Line 4: back to left edge */}
          <BigText>on the south side</BigText>

          {/* Line 5: indented ~606px at 1440px + "[ creative freelancer ]" label */}
          <div className="flex items-end gap-4 pl-[42.1vw]">
            <BigText>of chicago.</BigText>
            <span className={`${LABEL} whitespace-nowrap shrink-0 mb-2`}>
              [ creative freelancer ]
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
