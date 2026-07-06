"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef   = useRef<HTMLDivElement>(null);
  const visible   = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let x = -200, y = -200, rx = -200, ry = -200;
    let raf: number;

    const show = () => {
      if (!visible.current) {
        visible.current = true;
        cursorRef.current?.style.setProperty("opacity", "1");
        ringRef.current?.style.setProperty("opacity", "1");
      }
    };
    const hide = () => {
      visible.current = false;
      cursorRef.current?.style.setProperty("opacity", "0");
      ringRef.current?.style.setProperty("opacity", "0");
    };

    const onMove = (e: MouseEvent) => { x = e.clientX; y = e.clientY; show(); };

    const loop = () => {
      // hotspot: top-center of the SVG (tip of the ⅄)
      cursorRef.current?.style.setProperty("transform", `translate(${x - 12}px,${y - 2}px)`);
      // ring lags behind with inertia
      rx += (x - rx) * 0.10;
      ry += (y - ry) * 0.10;
      ringRef.current?.style.setProperty("transform", `translate(${rx - 20}px,${ry - 20}px)`);
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", hide);
    document.documentElement.addEventListener("mouseenter", show);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", hide);
      document.documentElement.removeEventListener("mouseenter", show);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* ── Inverted-Y cursor (theme-aware color) ── */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] opacity-0"
        style={{ willChange: "transform" }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="2" r="2" fill="var(--cursor-color)" />
          <line x1="12" y1="4" x2="12" y2="13"
            stroke="var(--cursor-color)" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="12" y1="13" x2="3" y2="22"
            stroke="var(--cursor-color)" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="12" y1="13" x2="21" y2="22"
            stroke="var(--cursor-color)" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </div>

      {/* ── Trailing ring ── */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] opacity-0"
        style={{ willChange: "transform" }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "1px solid var(--cursor-ring)",
            boxShadow: "0 0 8px var(--cursor-ring)",
          }}
        />
      </div>
    </>
  );
}
