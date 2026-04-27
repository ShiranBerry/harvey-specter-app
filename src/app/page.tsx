"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((v) => !v);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <h1
        className="text-[17vw] leading-none text-center uppercase whitespace-nowrap"
        style={{
          fontFamily: "var(--font-anton)",
          color: "#FFFF00",
          opacity: visible ? 1 : 0,
          transition: "opacity 2s ease",
        }}
      >
        I LOVE SHAL
      </h1>
    </div>
  );
}
