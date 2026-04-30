import Image from "next/image";

const LABEL = "font-mono text-[14px] uppercase leading-[1.1] text-[#1f1f1f]";

const PROJECTS = [
  {
    img: "/projects/surfers-paradise.png",
    tags: ["Social Media", "Photography"],
    name: "Surfers paradise",
    desktopH: 744,
  },
  {
    img: "/projects/cyberpunk-caffe.png",
    tags: ["Social Media", "Photography"],
    name: "Cyberpunk caffe",
    desktopH: 699,
  },
  {
    img: "/projects/agency-976.png",
    tags: ["Social Media", "Photography"],
    name: "Agency 976",
    desktopH: 699,
  },
  {
    img: "/projects/minimal-playground.png",
    tags: ["Social Media", "Photography"],
    name: "Minimal Playground",
    desktopH: 744,
  },
] as const;

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

function CTAFrame() {
  return (
    <div className="flex gap-3 items-stretch">
      {/* Left brackets */}
      <div className="flex flex-col justify-between shrink-0 w-4">
        <CornerBracket />
        <CornerBracket rotate={-90} />
      </div>
      {/* Content */}
      <div className="flex-1 flex flex-col gap-[10px] py-3">
        <p
          className="italic font-normal text-[14px] text-[#1f1f1f] leading-[1.3]"
          style={{ letterSpacing: "-0.56px" }}
        >
          Discover how my creativity transforms ideas into impactful digital
          experiences — schedule a call with me to get started.
        </p>
        <div className="bg-black flex items-center justify-center px-4 py-3 rounded-[24px] self-start">
          <span
            className="font-medium text-[14px] text-white whitespace-nowrap"
            style={{ letterSpacing: "-0.56px" }}
          >
            Let&apos;s talk
          </span>
        </div>
      </div>
      {/* Right brackets */}
      <div className="flex flex-col justify-between shrink-0 w-4">
        <CornerBracket rotate={90} />
        <CornerBracket rotate={180} />
      </div>
    </div>
  );
}

function CategoryPill({ label }: { label: string }) {
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.3)] flex items-center justify-center overflow-hidden px-2 py-1 rounded-[24px] shrink-0">
      <span
        className="font-medium text-[14px] text-[#111] whitespace-nowrap"
        style={{ letterSpacing: "-0.56px" }}
      >
        {label}
      </span>
    </div>
  );
}

function ArrowIcon() {
  return (
    <div className="flex items-center justify-center shrink-0 size-8">
      <div className="-rotate-90 size-8">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M18.7235 16.0531L11.1704 8.5L8.5 11.1704L16.053 18.7235H10.2263V22.5H22.5V10.2262H18.7235V16.0531Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
}

function ProjectCard({
  img,
  tags,
  name,
  height,
  smallTitle,
}: {
  img: string;
  tags: readonly string[];
  name: string;
  height: number;
  smallTitle?: boolean;
}) {
  return (
    <div className="flex flex-col gap-[10px] items-start w-full shrink-0">
      {/* Photo */}
      <div
        className="relative w-full overflow-hidden flex flex-col justify-end p-4"
        style={{ height: `${height}px` }}
      >
        <Image src={img} alt={name} fill style={{ objectFit: "cover" }} />
        <div className="relative flex gap-3 items-center z-10">
          {tags.map((tag) => (
            <CategoryPill key={tag} label={tag} />
          ))}
        </div>
      </div>
      {/* Name + arrow */}
      <div className="flex items-center justify-between w-full">
        <p
          className="font-black text-black uppercase leading-[1.1] whitespace-nowrap"
          style={{
            fontSize: smallTitle ? "24px" : "36px",
            letterSpacing: smallTitle ? "-0.96px" : "-1.44px",
          }}
        >
          {name}
        </p>
        <ArrowIcon />
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-4 py-12 lg:px-8 lg:py-[80px]">

      {/* ── Mobile header ── */}
      <div className="lg:hidden flex flex-col gap-4 mb-8 uppercase">
        <span className={LABEL}>[ portfolio ]</span>
        <div className="flex items-start justify-between">
          <div
            className="flex flex-col font-light text-[32px] text-black leading-[0]"
            style={{ letterSpacing: "-0.08em" }}
          >
            <p className="leading-[0.86] mb-0">Selected</p>
            <p className="leading-[0.86]">Work</p>
          </div>
          <span className={LABEL}>004</span>
        </div>
      </div>

      {/* ── Desktop header ── */}
      <div className="hidden lg:flex items-start justify-between mb-[61px]">
        <div className="flex gap-[10px] items-start uppercase">
          <div
            className="flex flex-col font-light text-[6.67vw] text-black leading-[0]"
            style={{ letterSpacing: "-0.08em" }}
          >
            <p className="leading-[0.86] mb-0">Selected</p>
            <p className="leading-[0.86]">Work</p>
          </div>
          <span className={`${LABEL} mt-1`}>004</span>
        </div>
        <div className="flex h-[110px] w-[15px] items-center justify-center">
          <span className={`${LABEL} -rotate-90 whitespace-nowrap`}>[ portfolio ]</span>
        </div>
      </div>

      {/* ── Mobile: single column ── */}
      <div className="lg:hidden flex flex-col gap-6">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.name} {...p} height={390} smallTitle />
        ))}
        <CTAFrame />
      </div>

      {/* ── Desktop: two-column staggered ── */}
      <div className="hidden lg:flex gap-[24px] items-end">

        {/* Left column: card1 + card2 + CTA, spaced via justify-between */}
        <div className="flex-1 self-stretch flex">
          <div className="flex-1 flex flex-col justify-between">
            <ProjectCard {...PROJECTS[0]} height={744} />
            <ProjectCard {...PROJECTS[1]} height={699} />
            <div className="w-[465px]">
              <CTAFrame />
            </div>
          </div>
        </div>

        {/* Right column: offset down by 240px, gap between cards */}
        <div className="flex-1 flex flex-col gap-[117px] pt-[240px]">
          <ProjectCard {...PROJECTS[2]} height={699} />
          <ProjectCard {...PROJECTS[3]} height={744} />
        </div>

      </div>

    </section>
  );
}
