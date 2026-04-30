import type { SanityNewsPost } from "@/sanity/queries";

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

function PostCard({ imageUrl, caption, href }: SanityNewsPost) {
  return (
    <div className="flex flex-col gap-4 items-start">
      <div className="relative w-full overflow-hidden" style={{ height: "469px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imageUrl} alt="" className="absolute inset-0 w-full h-full object-cover" />
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

export default function NewsSection({ posts }: { posts: SanityNewsPost[] }) {
  const [post1, post2, post3] = posts;

  return (
    <section id="news" className="bg-[#f3f3f3]">

      {/* ── Mobile ── */}
      <div className="lg:hidden pt-16 pb-16 flex flex-col gap-8">
        <div className="px-4 leading-[0]">
          <p
            className="font-light text-black uppercase leading-[0.86] m-0"
            style={{ fontSize: "32px", letterSpacing: "-2.56px" }}
          >
            Keep up with my latest news &amp; achievements
          </p>
        </div>
        <div
          className="flex gap-4 overflow-x-auto pl-4"
          style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        >
          {posts.map((p, i) => (
            <div key={i} className="shrink-0 flex flex-col gap-4" style={{ width: "300px" }}>
              <div className="relative overflow-hidden" style={{ height: "398px" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.imageUrl} alt="" className="absolute inset-0 w-full h-full object-cover" />
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
      <div className="hidden lg:block overflow-hidden">
        <div className="flex items-end pl-8 py-[120px]" style={{ gap: "200px" }}>
          <div className="shrink-0 flex items-center justify-center" style={{ width: "110px", height: "706px" }}>
            <div
              className="font-light text-black uppercase whitespace-nowrap"
              style={{ transform: "rotate(-90deg)", fontSize: "64px", letterSpacing: "-5.12px", lineHeight: 0.86 }}
            >
              <p>Keep up with my latest</p>
              <p>news &amp; achievements</p>
            </div>
          </div>
          <div className="shrink-0 flex items-start" style={{ gap: "31px" }}>
            {post1 && (
              <div className="shrink-0 w-[353px]">
                <PostCard {...post1} />
              </div>
            )}
            <div className="self-stretch w-px bg-black/15 shrink-0" />
            {post2 && (
              <div className="shrink-0 w-[353px] pt-[120px]">
                <PostCard {...post2} />
              </div>
            )}
            <div className="self-stretch w-px bg-black/15 shrink-0" />
            {post3 && (
              <div className="shrink-0 w-[353px]">
                <PostCard {...post3} />
              </div>
            )}
          </div>
        </div>
      </div>

    </section>
  );
}
