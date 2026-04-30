import Image from "next/image";

export default function PhotoBanner() {
  return (
    /*
      Full-bleed photo break between sections.
      Desktop: natural 4:3 landscape ratio, image fully visible.
      Mobile: portrait crop (3:4), object-position shifts to the subject
              (~40% from left, matching the Figma mobile crop).
    */
    <section className="relative w-full overflow-hidden aspect-[3/4] lg:aspect-[1062/750]">
      <Image
        src="/photo-section.png"
        alt="Harvey Specter with camera"
        fill
        priority={false}
        style={{
          objectFit: "cover",
          objectPosition: "40% center",
        }}
      />
    </section>
  );
}
