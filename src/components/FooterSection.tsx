export default function FooterSection() {
  return (
    <footer id="contact" className="bg-black">

      {/* ── Mobile ── */}
      <div className="lg:hidden px-4 pt-12 flex flex-col gap-12">

        {/* Top block: CTA + socials + divider */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <p
              className="font-light italic text-white uppercase leading-[1.1]"
              style={{ fontSize: "24px", letterSpacing: "-0.96px" }}
            >
              Have a{" "}
              <strong className="font-black not-italic">project</strong>
              {" "}in mind?
            </p>
            <button
              className="border border-white text-white font-medium rounded-full w-fit px-4 py-3"
              style={{ fontSize: "14px", letterSpacing: "-0.56px" }}
            >
              Let&apos;s talk
            </button>
          </div>

          {/* Social links stacked */}
          <div
            className="flex flex-col text-white uppercase leading-[1.1]"
            style={{ fontSize: "18px", letterSpacing: "-0.72px" }}
          >
            <p>Facebook</p>
            <p>Instagram</p>
            <p>X.com</p>
            <p>Linkedin</p>
          </div>

          <div className="w-full h-px bg-white/30" />
        </div>

        {/* Bottom: legal + H.Studio overflow block */}
        <div className="flex flex-col gap-4" style={{ height: "150px", overflow: "hidden" }}>
          <div
            className="flex gap-[34px] items-center justify-center text-white uppercase leading-[1.1]"
            style={{ fontSize: "12px", letterSpacing: "-0.48px" }}
          >
            <a href="#" className="underline">Licences</a>
            <a href="#" className="underline">Privacy policy</a>
          </div>

          <div className="flex flex-col gap-3 items-start overflow-hidden">
            <p
              className="font-mono text-white uppercase leading-[1.1]"
              style={{ fontSize: "10px" }}
            >
              [ Coded By Claude ]
            </p>
            <p
              className="font-semibold text-white capitalize whitespace-nowrap leading-[0.8]"
              style={{ fontSize: "91.425px", letterSpacing: "-5.4855px" }}
            >
              H.Studio
            </p>
          </div>
        </div>

      </div>

      {/* ── Desktop ── */}
      <div className="hidden lg:flex flex-col px-8 pt-12" style={{ gap: "120px" }}>

        {/* Top: three-column row + divider */}
        <div className="flex flex-col" style={{ gap: "48px" }}>
          <div className="flex items-start justify-between">

            {/* Left: CTA */}
            <div className="flex flex-col gap-3" style={{ width: "298px" }}>
              <p
                className="font-light italic text-white uppercase leading-[1.1]"
                style={{ fontSize: "24px", letterSpacing: "-0.96px" }}
              >
                Have a{" "}
                <strong className="font-black not-italic">project</strong>
                {" "}in mind?
              </p>
              <button
                className="border border-white text-white font-medium rounded-full w-fit px-4 py-3"
                style={{ fontSize: "14px", letterSpacing: "-0.56px" }}
              >
                Let&apos;s talk
              </button>
            </div>

            {/* Center: social links */}
            <div
              className="text-center text-white uppercase leading-[1.1]"
              style={{ fontSize: "18px", letterSpacing: "-0.72px", width: "298px" }}
            >
              <p>Facebook</p>
              <p>Instagram</p>
            </div>

            {/* Right: social links */}
            <div
              className="text-right text-white uppercase leading-[1.1]"
              style={{ fontSize: "18px", letterSpacing: "-0.72px", width: "298px" }}
            >
              <p>X.com</p>
              <p>Linkedin</p>
            </div>
          </div>

          <div className="w-full h-px bg-white/30" />
        </div>

        {/* Bottom: oversized H.Studio + legal links */}
        <div className="flex items-end justify-between">

          {/* H.Studio clipped container */}
          <div className="relative overflow-hidden flex-1" style={{ height: "219px" }}>

            {/* [ CODED BY CLAUDE ] — vertical text on far left */}
            <div
              className="absolute flex items-center justify-center"
              style={{ left: 0, top: "calc(50% - 80px)", width: "15px", height: "160px" }}
            >
              <span
                className="font-mono text-white uppercase whitespace-nowrap leading-[1.1]"
                style={{ transform: "rotate(-90deg)", fontSize: "14px" }}
              >
                [ Coded By Claude ]
              </span>
            </div>

            {/* H.Studio oversized text — vertically centred, bleeds right */}
            <div
              className="absolute capitalize font-semibold text-white whitespace-nowrap leading-[0.8]"
              style={{
                fontSize: "290px",
                letterSpacing: "-17.4px",
                top: "calc(50% + 6.5px)",
                left: "5px",
                transform: "translateY(-50%)",
              }}
            >
              H.Studio
            </div>
          </div>

          {/* Legal links bottom-right */}
          <div
            className="flex items-center gap-[34px] text-white uppercase leading-[1.1] whitespace-nowrap shrink-0"
            style={{ fontSize: "12px", letterSpacing: "-0.48px", paddingBottom: "32px" }}
          >
            <a href="#" className="underline">Licences</a>
            <a href="#" className="underline">Privacy policy</a>
          </div>
        </div>

      </div>

    </footer>
  );
}
