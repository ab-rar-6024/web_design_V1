"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

/* ── Data ──────────────────────────────────────────────────────────── */
const STATS = [
  { display: "1.2M+", label: "Devices Deployed",  end: 1.2, suffix: "M+" },
  { display: "28",    label: "Indian States",       end: 28,  suffix: ""   },
  { display: "35+",   label: "Years of Legacy",     end: 35,  suffix: "+"  },
  { display: "1,600+",label: "Dealer Network",      end: 1600,suffix: "+"  },
];

const ROW_1 = [
  "Ashok Leyland", "CEAT Tyres", "Vedanta Resources", "Rolls-Royce",
  "SRM University", "Murugappa Group", "Ramco Cements",
];
const ROW_2 = [
  "Vel's Institute", "RB ECO Power", "Ramco Cements", "Ashok Leyland",
  "CEAT Tyres", "SRM University", "Murugappa Group",
];

/* ── Animated counter ───────────────────────────────────────────────── */
function Counter({ end, suffix, active }: { end: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);
  const isDecimal = end < 10 && String(end).includes(".");
  const duration = 1600;
  const steps = 50;

  useEffect(() => {
    if (!active) return;
    let step = 0;
    const increment = end / steps;
    const timer = setInterval(() => {
      step++;
      setCount(Math.min(increment * step, end));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [active, end]);

  const display = isDecimal ? count.toFixed(1) : Math.floor(count).toLocaleString();
  return <>{display}{suffix}</>;
}

/* ── Single tile ────────────────────────────────────────────────────── */
function ClientTile({ name }: { name: string }) {
  return (
    <div
      className="flex-shrink-0 flex items-center justify-center h-14 px-6 rounded-xl mx-2 cursor-default select-none transition-all duration-300 group hover:scale-105"
      style={{
        background: "var(--card-bg-medium)",
        border: "1px solid var(--logo-tile-border)",
        backdropFilter: "blur(6px)",
        minWidth: "170px",
      }}
    >
      <span className="text-white/40 group-hover:text-cyan-bright font-display font-semibold tracking-wider text-[11px] uppercase transition-colors duration-300 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

/* ── Marquee row ────────────────────────────────────────────────────── */
function MarqueeRow({ items, direction }: { items: string[]; direction: "left" | "right" }) {
  const doubled = [...items, ...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden marquee-track">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, var(--background), transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, var(--background), transparent)" }} />

      <div className={`flex ${direction === "left" ? "marquee-left" : "marquee-right"}`}>
        {doubled.map((name, i) => (
          <ClientTile key={i} name={name} />
        ))}
      </div>
    </div>
  );
}

/* ── Section ─────────────────────────────────────────────────────────── */
export default function ClientLogos() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative z-30 border-t border-white/5 py-20 md:py-28 overflow-hidden">

      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(62,189,239,0.04), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* ── Header ── */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-cyan-bright font-bold mb-3"
          >
            <span className="w-4 h-px bg-cyan-bright" />
            Industry Leaders
            <span className="w-4 h-px bg-cyan-bright" />
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-3xl md:text-4xl font-display font-bold text-white leading-snug"
          >
            Trusted by Organizations<br />
            <span className="text-gradient">Across Industries</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-white/50 text-sm leading-relaxed mt-3 max-w-sm mx-auto"
          >
            From logistics to manufacturing, our clients choose APM Group for
            hardware compliance and IoT connectivity.
          </motion.p>
        </div>

        {/* ── Stat counters ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px mb-14 rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.06)" }}>
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
              className="flex flex-col items-center justify-center py-8 px-4 text-center"
              style={{ background: "var(--background)" }}
            >
              <span className="text-3xl md:text-4xl font-display font-black text-white tabular-nums leading-none mb-1.5"
                style={{ textShadow: "0 0 24px rgba(62,189,239,0.25)" }}>
                <Counter end={stat.end} suffix={stat.suffix} active={inView} />
              </span>
              <span className="text-[10px] uppercase tracking-widest text-white/35 font-semibold">{stat.label}</span>
            </motion.div>
          ))}
        </div>

      </div>

      {/* ── Marquee rows (full-bleed) ── */}
      <div className="flex flex-col gap-3">
        <MarqueeRow items={ROW_1} direction="left" />
        <MarqueeRow items={ROW_2} direction="right" />
      </div>

    </section>
  );
}
