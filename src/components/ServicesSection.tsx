import Image from "next/image";

const LABEL = "font-mono text-[14px] uppercase leading-[1.1] text-white";

const DESC_PLACEHOLDER =
  "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.";

const SERVICES = [
  {
    number: "[ 1 ]",
    name: "Brand Discovery",
    desc: DESC_PLACEHOLDER,
    img: "/services/brand-discovery.png",
  },
  {
    number: "[ 2 ]",
    name: "Web design & Dev",
    desc: DESC_PLACEHOLDER,
    img: "/services/web-design.png",
  },
  {
    number: "[ 3 ]",
    name: "Marketing",
    desc: DESC_PLACEHOLDER,
    img: "/services/marketing.png",
  },
  {
    number: "[ 4 ]",
    name: "Photography",
    desc: DESC_PLACEHOLDER,
    img: "/services/photography.png",
  },
] as const;

function ServiceItem({
  number,
  name,
  desc,
  img,
}: (typeof SERVICES)[number]) {
  return (
    <div className="flex flex-col gap-3 lg:gap-[9px]">

      {/* Number + rule */}
      <div className="flex flex-col gap-[9px]">
        <span className={LABEL}>{number}</span>
        <div className="w-full border-t border-white" />
      </div>

      {/* ── Mobile content: stacked ── */}
      <div className="lg:hidden flex flex-col gap-4">
        <p
          className="font-bold italic text-[36px] text-white uppercase leading-[1.1] whitespace-nowrap"
          style={{ letterSpacing: "-0.04em" }}
        >
          {name}
        </p>
        <p
          className="text-[14px] font-normal leading-[1.3] text-white"
          style={{ letterSpacing: "-0.56px" }}
        >
          {desc}
        </p>
        <div className="relative size-[151px] overflow-hidden shrink-0">
          <Image src={img} alt={name} fill style={{ objectFit: "cover" }} />
        </div>
      </div>

      {/* ── Desktop content: name left, desc + thumb right ── */}
      <div className="hidden lg:flex items-start justify-between">
        <p
          className="font-bold italic text-[36px] text-white uppercase leading-[1.1] whitespace-nowrap shrink-0"
          style={{ letterSpacing: "-0.04em" }}
        >
          {name}
        </p>
        <div className="flex items-start gap-6 shrink-0">
          <p
            className="text-[14px] font-normal leading-[1.3] text-white w-[393px]"
            style={{ letterSpacing: "-0.56px" }}
          >
            {desc}
          </p>
          <div className="relative size-[151px] overflow-hidden shrink-0">
            <Image src={img} alt={name} fill style={{ objectFit: "cover" }} />
          </div>
        </div>
      </div>

    </div>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-black px-4 py-12 lg:px-8 lg:py-[80px] flex flex-col gap-8 lg:gap-12"
    >
      {/* Section label */}
      <span className={LABEL}>[ services ]</span>

      {/* [4] DELIVERABLES headline */}
      <div
        className="flex items-center justify-between text-white uppercase font-light leading-normal"
        style={{ fontSize: "32px", letterSpacing: "-0.08em" }}
      >
        <span className="text-[32px] lg:text-[6.67vw]">[4]</span>
        <span className="text-[32px] lg:text-[6.67vw]">Deliverables</span>
      </div>

      {/* Service list */}
      <div className="flex flex-col gap-12">
        {SERVICES.map((s) => (
          <ServiceItem key={s.number} {...s} />
        ))}
      </div>
    </section>
  );
}
