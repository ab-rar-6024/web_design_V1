"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Award, ShieldCheck } from "lucide-react";

/* ── Cert data ────────────────────────────────────────────────────────── */
const CERTS = [
  { abbr: "ISO",  sub: "9001:2015",      name: "ISO Certified",     body: "Quality Management System",          color: "#3b82f6", bg: "rgba(59,130,246,0.10)",  border: "rgba(59,130,246,0.30)"  },
  { abbr: "ICAT", sub: "Type Approval",  name: "ICAT Certified",    body: "Automotive Testing Authority",       color: "#22c55e", bg: "rgba(34,197,94,0.10)",   border: "rgba(34,197,94,0.30)"   },
  { abbr: "BIS",  sub: "IS Mark",        name: "BIS Certified",     body: "Bureau of Indian Standards",         color: "#ef4444", bg: "rgba(239,68,68,0.10)",   border: "rgba(239,68,68,0.30)"   },
  { abbr: "GARC", sub: "Type Approved",  name: "GARC Certified",    body: "Govt. Automotive Research Centre",  color: "#a855f7", bg: "rgba(168,85,247,0.10)",  border: "rgba(168,85,247,0.30)"  },
  { abbr: "WPC",  sub: "Type Approval",  name: "WPC Certified",     body: "Wireless Planning & Coordination",  color: "#06b6d4", bg: "rgba(6,182,212,0.10)",   border: "rgba(6,182,212,0.30)"   },
  { abbr: "GST",  sub: "Registered",     name: "GST Certificate",   body: "Goods & Services Tax Compliant",    color: "#f59e0b", bg: "rgba(245,158,11,0.10)",  border: "rgba(245,158,11,0.30)"  },
  { abbr: "MSME", sub: "Udyam Reg.",     name: "MSME Certified",    body: "Ministry of Enterprise Recognition",color: "#0ea5e9", bg: "rgba(14,165,233,0.10)",  border: "rgba(14,165,233,0.30)"  },
  { abbr: "L.M.", sub: "Verified",       name: "Legal Metrology",   body: "Weights & Measures Authority",      color: "#d97706", bg: "rgba(217,119,6,0.10)",   border: "rgba(217,119,6,0.30)"   },
  { abbr: "M2M",  sub: "Compliant",      name: "M2M Certified",     body: "Machine-to-Machine IoT Standard",   color: "#10b981", bg: "rgba(16,185,129,0.10)",  border: "rgba(16,185,129,0.30)"  },
  { abbr: "IEC",  sub: "Standard",       name: "IEC Certified",     body: "Intl. Electrotechnical Comm.",      color: "#6366f1", bg: "rgba(99,102,241,0.10)",  border: "rgba(99,102,241,0.30)"  },
];

/* ── Stats ─────────────────────────────────────────────────────────────── */
const STATS = [
  { val: 10,   suffix: "+",  unit: "",     label: "Active Certifications" },
  { val: 100,  suffix: "%",  unit: "",     label: "Compliance Rate"        },
  { val: 28,   suffix: "",   unit: " States", label: "Pan-India Approval"  },
];

/* ── Count-up ─────────────────────────────────────────────────────────── */
function Counter({ val, suffix, unit, active }: { val: number; suffix: string; unit: string; active: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let f = 0;
    const total = 40;
    const id = setInterval(() => {
      f++;
      const t = f / total;
      const ease = 1 - Math.pow(1 - t, 3);
      setN(Math.round(ease * val));
      if (f >= total) clearInterval(id);
    }, 30);
    return () => clearInterval(id);
  }, [active, val]);
  return <>{n}{suffix}{unit}</>;
}

/* ── Single cert card with stamp-press entrance ───────────────────────── */
function CertCard({ c, index, active }: { c: typeof CERTS[0]; index: number; active: boolean }) {
  const delay = 0.05 * index;

  return (
    <motion.div
      initial={{ opacity: 0, y: -28, scale: 1.18 }}
      animate={active ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.34, 1.56, 0.64, 1], /* spring overshoot = stamp-press */
      }}
      whileHover={{ y: -5, scale: 1.04, transition: { duration: 0.2 } }}
      className="dark-bg group relative flex flex-col items-center gap-2 p-4 rounded-2xl cursor-default select-none overflow-hidden"
      style={{
        background: "rgba(6,14,28,0.82)",
        border: `1px solid ${c.border}`,
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      {/* Top accent bar that grows on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] transition-all duration-300 group-hover:h-[5px]"
        style={{ background: `linear-gradient(90deg, ${c.color}cc, ${c.color}44)` }}
      />

      {/* Pulsing dot — top right */}
      <span
        className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full"
        style={{
          background: c.color,
          boxShadow: `0 0 6px ${c.color}`,
          animation: `orbit-pulse ${2 + (index % 3) * 0.5}s ease-in-out infinite`,
          animationDelay: `${index * 0.25}s`,
        }}
      />

      {/* Corner glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 10%, ${c.bg}, transparent 70%)` }}
      />

      {/* Seal circle */}
      <div
        className="relative w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
        style={{ background: c.bg, border: `1.5px solid ${c.border}` }}
      >
        <span
          className="text-[11px] font-black tracking-tight leading-none text-center"
          style={{ color: c.color }}
        >
          {c.abbr}
        </span>
        {/* Rotating dashed orbit */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 48 48"
          style={{ animation: "spin-slow 10s linear infinite" }}
        >
          <circle cx="24" cy="24" r="21" fill="none" strokeDasharray="4 5" strokeWidth="1"
            style={{ stroke: c.color, opacity: 0.4 }} />
        </svg>
      </div>

      {/* Sub-badge */}
      <span
        className="text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
        style={{ color: c.color, background: c.bg, border: `1px solid ${c.border}` }}
      >
        {c.sub}
      </span>

      {/* Name + body */}
      <p className="text-[11px] font-bold text-white text-center leading-tight">{c.name}</p>
      <p className="text-[9px] text-white/40 text-center leading-tight">{c.body}</p>

      {/* Verified row */}
      <div className="flex items-center gap-1 mt-0.5">
        <ShieldCheck className="w-3 h-3" style={{ color: c.color }} />
        <span className="text-[9px] font-semibold" style={{ color: c.color }}>Verified</span>
      </div>
    </motion.div>
  );
}

/* ── Main section ─────────────────────────────────────────────────────── */
export default function CertificationsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  /* Scan-line state for the card grid */
  const [scanX, setScanX] = useState(-100);
  useEffect(() => {
    if (!inView) return;
    const timer = setTimeout(() => {
      const id = setInterval(() => {
        setScanX((x) => {
          if (x > 120) return -20;
          return x + 0.5;
        });
      }, 16);
      return () => clearInterval(id);
    }, 1800);
    return () => clearTimeout(timer);
  }, [inView]);

  return (
    <section
      ref={ref}
      className="relative z-30 border-t border-white/5 py-14 md:py-20 lg:py-28 overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(29,78,216,0.05) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* ── Header — centered ── */}
        <div className="text-center mb-10 md:mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-cyan-bright font-bold mb-3"
          >
            <span className="w-4 h-px bg-cyan-bright" />
            Compliance &amp; Trust
            <span className="w-4 h-px bg-cyan-bright" />
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-4xl font-display font-bold text-white leading-snug relative inline-block"
          >
            Certified Across{" "}
            <span className="text-gradient">Every Standard</span>
            {/* Animated underline */}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 -bottom-2 h-[2px] w-full origin-left rounded-full"
              style={{ background: "linear-gradient(90deg, #3ebdef, #2563eb, #7c3aed)" }}
            />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/55 text-sm leading-relaxed mt-5 max-w-lg mx-auto"
          >
            APM Group's products are verified by every major Indian and international regulatory body — from BIS and ICAT to ISO and IEC — for both government and commercial deployments.
          </motion.p>
        </div>

        {/* ── Stat counters ── */}
        <div className="flex flex-wrap justify-center gap-px mb-12 md:mb-16 rounded-2xl overflow-hidden mx-auto max-w-2xl"
          style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.05)" }}>
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.3 + i * 0.1 }}
              className="flex flex-col items-center justify-center py-6 px-8 flex-1 min-w-[110px]"
              style={{ background: "var(--background)" }}
            >
              <span className="text-2xl md:text-3xl font-display font-black text-white tabular-nums leading-none mb-1"
                style={{ textShadow: "0 0 20px rgba(62,189,239,0.3)" }}>
                <Counter val={s.val} suffix={s.suffix} unit={s.unit} active={inView} />
              </span>
              <span className="text-[10px] uppercase tracking-widest text-white/35 font-semibold text-center">{s.label}</span>
            </motion.div>
          ))}
        </div>

        {/* ── Cert card grid with scan line ── */}
        <div className="relative">
          {/* Horizontal scan beam */}
          {inView && (
            <div
              className="absolute inset-y-0 w-16 pointer-events-none z-10"
              style={{
                left: `${scanX}%`,
                background: "linear-gradient(90deg, transparent, rgba(62,189,239,0.06) 40%, rgba(62,189,239,0.12) 50%, rgba(62,189,239,0.06) 60%, transparent)",
                transition: "none",
              }}
            />
          )}

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {CERTS.map((c, i) => (
              <CertCard key={i} c={c} index={i} active={inView} />
            ))}
          </div>
        </div>

        {/* ── Award badge ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 + CERTS.length * 0.05 }}
          className="flex justify-center mt-10"
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl border border-cyan-bright/20 bg-cyan-bright/5">
            <Award className="w-4 h-4 text-cyan-bright flex-shrink-0" />
            <span className="text-xs font-semibold text-white/75">
              Recognized by MoRTH, CDAC &amp; CIRT Pune
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
