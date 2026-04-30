const POSTS = [
  {
    img: "/news/news-1.jpg",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    href: "#",
  },
  {
    img: "/news/news-2.jpg",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    href: "#",
  },
  {
    img: "/news/news-3.jpg",
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    href: "#",
  },
];

// Exact Figma icon (fi_10486523) — filled solid arrow, rotated -90° to point northeast
function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      style={{ transform: "rotate(-90deg)", flexShrink: 0 }}
      aria-hidden="true"
    >
      <path
        d="M10.1117 8.77653L6.33521 5L5 6.33521L8.7765 10.1117H5.86314V12H12V5.86312H10.1117V8.77653Z"
        fill="black"
      />
    </svg>
  );
}

function PostCard({ img, caption, href }: { img: string; caption: string; href: string }) {
  return (
    <div className="flex flex-col gap-4 items-start">
      <div className="relative w-full overflow-hidden" style={{ height: "469px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img} alt="" className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <p className="text-[14px] text-[#1f1f1f] font-normal leading-[1.3] w-full" style={{ letterSpacing: "-0.56px" }}>
        {caption}
      </p>
      <a
        href={href}
        className="flex gap-[10px] items-center border-b border-black pb-1 text-[14px] font-medium text-black"
        style={{ letterSpacing: "-0.56px" }}
      >
        Read more
        <ArrowIcon />
      </a>
    </div>
  );
}

export default function NewsSection() {
  const [post1, post2, post3] = POSTS;

  return (
    <section id="news" className="bg-[#f3f3f3]">

      {/* ── Mobile ── */}
      <div className="lg:hidden pt-16 pb-16 flex flex-col gap-8">
        {/* Match Figma structure: outer div with leading-[0], inner p with leading-[0.86] */}
        <div className="px-4 leading-[0]">
          <p
            className="font-light text-black uppercase leading-[0.86] m-0"
            style={{ fontSize: "32px", letterSpacing: "-2.56px" }}
          >
            Keep up with my latest news &amp; achievements
          </p>
        </div>

        {/* Scroll strip: pl-4 only — bleeds to right viewport edge */}
        <div
          className="flex gap-4 overflow-x-auto pl-4"
          style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        >
          {POSTS.map((p, i) => (
            <div key={i} className="shrink-0 flex flex-col gap-4" style={{ width: "300px" }}>
              <div className="relative overflow-hidden" style={{ height: "398px" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <p className="text-[14px] text-[#1f1f1f] font-normal leading-[1.3]" style={{ letterSpacing: "-0.56px" }}>
                {p.caption}
              </p>
              <a
                href={p.href}
                className="flex gap-[10px] items-center border-b border-black pb-1 text-[14px] font-medium text-black self-start"
                style={{ letterSpacing: "-0.56px" }}
              >
                Read more
                <ArrowIcon />
              </a>
            </div>
          ))}
          <div className="shrink-0 w-4" aria-hidden="true" />
        </div>
      </div>

      {/* ── Desktop ── */}
      {/*
        overflow-hidden on this wrapper clips the 3rd card at the viewport edge,
        creating the "peek" effect. No right padding — cards bleed to the right edge.
        Gap of 200px between heading column and cards puts the 3rd card ~87px past
        the 1440px viewport boundary.
      */}
      <div className="hidden lg:block overflow-hidden">
        <div className="flex items-end pl-8 py-[120px]" style={{ gap: "200px" }}>

          {/* Vertical rotated heading — fixed 110 × 706 column */}
          <div className="shrink-0 flex items-center justify-center" style={{ width: "110px", height: "706px" }}>
            <div
              className="font-light text-black uppercase whitespace-nowrap"
              style={{ transform: "rotate(-90deg)", fontSize: "64px", letterSpacing: "-5.12px", lineHeight: 0.86 }}
            >
              <p>Keep up with my latest</p>
              <p>news &amp; achievements</p>
            </div>
          </div>

          {/* Three staggered cards — shrink-0, no width constraint, overflows right */}
          <div className="shrink-0 flex items-start" style={{ gap: "31px" }}>

            <div className="shrink-0 w-[353px]">
              <PostCard {...post1} />
            </div>

            <div className="self-stretch w-px bg-black/15 shrink-0" />

            {/* Card 2 offset 120px down */}
            <div className="shrink-0 w-[353px] pt-[120px]">
              <PostCard {...post2} />
            </div>

            <div className="self-stretch w-px bg-black/15 shrink-0" />

            <div className="shrink-0 w-[353px]">
              <PostCard {...post3} />
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
