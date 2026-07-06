"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Star, Navigation, Cpu } from "lucide-react";

/* ── Stats data ─────────────────────────────────────────────────────── */
const STATS = [
  { label: "Global Presence",     value: "10+",     display: 10,   suffix: "+",  unit: "",      desc: "Countries worldwide",        icon: Globe,      color: "#3ebdef", delay: 0    },
  { label: "Pan-India Footprint", value: "1,600+",  display: 1600, suffix: "+",  unit: ",",     desc: "Authorized dealers",         icon: Navigation, color: "#60a5fa", delay: 0.1  },
  { label: "Happy Customers",     value: "1 Lakh+", display: 1,    suffix: "",   unit: " Lakh+",desc: "Satisfied clients",          icon: Star,       color: "#a78bfa", delay: 0.2  },
  { label: "Devices Deployed",    value: "1.2M+",   display: 1.2,  suffix: "M+", unit: "",      desc: "Devices deployed in field",  icon: Cpu,        color: "#34d399", delay: 0.3  },
];

/* ── Card origin directions (come from each corner) ─────────────────── */
const ORIGINS = [
  { x: -50, y: -40, rotateX: 12,  rotateY: -12 },
  { x:  50, y: -40, rotateX: 12,  rotateY:  12 },
  { x: -50, y:  40, rotateX: -12, rotateY: -12 },
  { x:  50, y:  40, rotateX: -12, rotateY:  12 },
];

/* ── Counter: counts up, pauses random values like a slot machine ─── */
function SlotCounter({ end, suffix, unit, color, active }: {
  end: number; suffix: string; unit: string; color: string; active: boolean;
}) {
  const [current, setCurrent] = useState(0);
  const isDecimal = !Number.isInteger(end);
  const FRAMES = 55;
  const SLOT_FRAMES = 18;

  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      if (frame <= SLOT_FRAMES) {
        // Slot-machine phase: bounce through random values
        setCurrent(parseFloat((Math.random() * end * 1.3).toFixed(isDecimal ? 1 : 0)));
      } else {
        // Settle phase: ease to final value
        const t = (frame - SLOT_FRAMES) / (FRAMES - SLOT_FRAMES);
        const eased = 1 - Math.pow(1 - t, 3);
        setCurrent(parseFloat((eased * end).toFixed(isDecimal ? 1 : 0)));
      }
      if (frame >= FRAMES) clearInterval(timer);
    }, 28);
    return () => clearInterval(timer);
  }, [active, end, isDecimal]);

  const display = isDecimal ? current.toFixed(1) : Math.floor(current).toLocaleString();

  return (
    <span style={{ color }}>
      {display}{suffix}{unit}
    </span>
  );
}

/* ── Animated orbit ring behind icon ─────────────────────────────────── */
function OrbitRing({ color }: { color: string }) {
  return (
    <svg
      className="absolute -inset-2.5 pointer-events-none"
      viewBox="0 0 52 52"
      style={{ animation: "spin-slow 8s linear infinite" }}
    >
      <circle
        cx="26" cy="26" r="24"
        fill="none"
        strokeWidth="1.2"
        strokeDasharray="6 8"
        style={{ stroke: color, opacity: 0.35 }}
      />
    </svg>
  );
}

/* ── Section ──────────────────────────────────────────────────────────── */
export default function HomeStats() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  /* Split heading into words for stagger reveal */
  const words = ["Global", "Impact", "Backed", "by"];
  const gradientWords = ["Scale", "and", "Trust"];

  return (
    <section
      ref={ref}
      className="relative z-30 border-t border-white/5 py-14 md:py-20 lg:py-28 overflow-hidden"
    >
      {/* ── Background decorative rings ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute -left-32 top-1/2 -translate-y-1/2 w-[480px] h-[480px] opacity-[0.04]"
          viewBox="0 0 480 480">
          {[80,140,200,240].map((r, i) => (
            <circle key={i} cx="240" cy="240" r={r} fill="none" stroke="#3ebdef" strokeWidth="1"
              style={{ animation: `orbit-pulse ${3 + i * 0.7}s ease-in-out infinite`, animationDelay: `${i * 0.4}s` }} />
          ))}
        </svg>
        <div className="absolute right-0 top-0 w-80 h-80 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(62,189,239,0.05) 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row items-start gap-14 lg:gap-10">

          {/* ── LEFT: heading ── */}
          <div className="w-full lg:w-[38%] flex-shrink-0 flex flex-col gap-5">

            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-cyan-bright font-bold"
            >
              <span className="w-4 h-px bg-cyan-bright" />
              Proven Impact
            </motion.span>

            {/* Word-by-word reveal */}
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white leading-snug drop-shadow-[0_2px_16px_rgba(0,0,0,0.7)]">
              <span className="flex flex-wrap gap-x-2">
                {words.map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 24, clipPath: "inset(0 0 100% 0)" }}
                    animate={inView ? { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" } : {}}
                    transition={{ duration: 0.5, delay: 0.12 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    style={{ display: "inline-block" }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <span className="text-gradient flex flex-wrap gap-x-2 mt-1">
                {gradientWords.map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 24, clipPath: "inset(0 0 100% 0)" }}
                    animate={inView ? { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" } : {}}
                    transition={{ duration: 0.5, delay: 0.44 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    style={{ display: "inline-block" }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.68 }}
              className="text-white/55 text-sm leading-relaxed max-w-xs drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]"
            >
              Present in 10 countries, 28 states, and 2+ Union Territories — APM Group's reach spans every corner of India and beyond, serving over 1 lakh happy customers.
            </motion.p>

            {/* Mini indicator bars */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="flex gap-1.5 mt-1"
            >
              {STATS.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.55, delay: 0.85 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  style={{ background: s.color, originX: 0 }}
                  className="h-0.5 rounded-full flex-1"
                />
              ))}
            </motion.div>
          </div>

          {/* ── CENTER GAP ── */}
          <div className="hidden lg:block lg:w-[18%] flex-shrink-0" />

          {/* ── RIGHT: 2×2 stat cards ── */}
          <div className="w-full lg:w-[44%] grid grid-cols-2 gap-4" style={{ perspective: "900px" }}>
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              const origin = ORIGINS[i];
              return (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    x: origin.x,
                    y: origin.y,
                    rotateX: origin.rotateX,
                    rotateY: origin.rotateY,
                    scale: 0.82,
                  }}
                  animate={inView ? { opacity: 1, x: 0, y: 0, rotateX: 0, rotateY: 0, scale: 1 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: 0.2 + stat.delay,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.03,
                    transition: { duration: 0.25, ease: "easeOut" },
                  }}
                  className="group stat-shimmer relative flex flex-col gap-3 p-5 rounded-2xl overflow-hidden cursor-default"
                  style={{
                    background: "rgba(5,13,26,0.65)",
                    backdropFilter: "blur(10px)",
                    border: `1px solid ${stat.color}22`,
                    boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                    animationDelay: `${i * 1.1}s`,
                  }}
                >
                  {/* Hover corner glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                    style={{ background: `radial-gradient(circle at 30% 30%, ${stat.color}14, transparent 70%)` }}
                  />

                  {/* Animated border line on hover */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-px"
                    initial={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    style={{ background: `linear-gradient(to right, transparent, ${stat.color}, transparent)` }}
                  />

                  {/* Icon with orbit ring */}
                  <div className="relative w-10 h-10 flex-shrink-0">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{ background: `${stat.color}18`, border: `1px solid ${stat.color}35` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: stat.color }} />
                    </div>
                    <div className="absolute inset-0">
                      <OrbitRing color={stat.color} />
                    </div>
                  </div>

                  {/* Number */}
                  <span className="text-3xl sm:text-4xl font-display font-extrabold leading-none tabular-nums"
                    style={{ textShadow: `0 0 28px ${stat.color}50` }}>
                    <SlotCounter
                      end={stat.display}
                      suffix={stat.suffix}
                      unit={stat.unit}
                      color={stat.color}
                      active={inView}
                    />
                  </span>

                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-semibold text-white/90">{stat.label}</span>
                    <span className="text-xs text-white/40">{stat.desc}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
