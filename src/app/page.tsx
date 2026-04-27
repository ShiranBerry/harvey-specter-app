"use client";

import { useEffect, useState } from "react";

function randomColor() {
  return `hsl(${Math.floor(Math.random() * 360)}, 90%, 55%)`;
}

export default function Home() {
  const [colors, setColors] = useState(["#ff0080", "#7928ca", "#0070f3"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setColors([randomColor(), randomColor(), randomColor()]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const gradient = `linear-gradient(135deg, ${colors.join(", ")})`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <h1
        className="text-[12vw] font-black uppercase tracking-tight leading-none text-center"
        style={{
          backgroundImage: gradient,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          transition: "background-image 2s ease",
        }}
      >
        I LOVE SHALOOLOO
      </h1>
    </div>
  );
}
