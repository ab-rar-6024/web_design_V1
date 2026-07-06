"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function VoiceOfTrust() {
  const testimonials = [
    {
      company: "Ashok Leyland",
      location: "Tamil Nadu",
      text: "APM's tracking solutions have been a game changer for us. Their government-certified devices are user friendly and reliable.",
    },
    {
      company: "CEAT Ltd",
      location: "Maharashtra",
      text: "APM's AIS 140 compliance solutions have streamlined our fleet management, ensuring seamless integration and regulatory adherence.",
    },
    {
      company: "SRM University",
      location: "Chennai",
      text: "APM Group's speed governor solutions have been instrumental in optimizing the expertise in managing speed control has been invaluable.",
    },
    {
      company: "Vedanta",
      location: "Maharashtra",
      text: "The IoT module provided by APM has been a game changer for our connectivity needs, ensuring reliable and efficient communication across our facilities.",
    },
    {
      company: "IPLT | Murugappa Group",
      location: "Tamil Nadu",
      text: "We appreciate APM's support in managing loads efficiently using Prime Load monitoring system. Their solutions have significantly improved our operational capacity.",
    },
    {
      company: "RB ECO Power",
      location: "Chennai, Gujarat",
      text: "Their IoT devices have revolutionized our operations, providing real-time insights and enhancing productivity.",
    },
    {
      company: "Rolls-Royce Rolls",
      location: "Delhi",
      text: "APM's service support has been exceptional. They have consistently delivered high-quality assistance, ensuring our operations run smoothly.",
    },
    {
      company: "Ramco",
      location: "Andhra Pradesh",
      text: "The APM team has been exceptional in delivering quality services. Their dedication to customer satisfaction is commendable!",
    },
    {
      company: "Vel's Group of Institute",
      location: "Chennai",
      text: "APM's CCTV solutions have enhanced our security infrastructure, while their reflective stickers have improved visibility and safety on our premises.",
    },
  ];

  const groupedTestimonials: (typeof testimonials)[] = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    groupedTestimonials.push(testimonials.slice(i, i + 2));
  }

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (idx: number) => {
    setDirection(idx > activeIndex ? 1 : -1);
    setActiveIndex(idx);
  };

  const prev = () => {
    const idx = (activeIndex - 1 + groupedTestimonials.length) % groupedTestimonials.length;
    setDirection(-1);
    setActiveIndex(idx);
  };

  const next = () => {
    const idx = (activeIndex + 1) % groupedTestimonials.length;
    setDirection(1);
    setActiveIndex(idx);
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  return (
    <section className="relative z-30 border-t border-white/5 py-14 md:py-20 lg:py-28 overflow-hidden">
      {/* Section background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 80% 50%, rgba(62,189,239,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row items-start gap-14 lg:gap-10">

          {/* ── LEFT ─────────────────────────────────────────────────────── */}
          <div className="w-full lg:w-[38%] flex-shrink-0 flex flex-col gap-5">
            <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-cyan-bright font-bold">
              <span className="w-4 h-px bg-cyan-bright" />
              Voice of Trust
            </span>

            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white leading-tight">
              What Our<br />
              <span className="text-gradient">Partners Say</span>
            </h2>

            <p className="text-white/55 text-sm leading-relaxed max-w-xs">
              Real stories from trusted industrial leaders and institutions who rely on APM Group for safety, compliance, and dependable support.
            </p>

            {/* Counter */}
            <div className="flex items-center gap-3 mt-2">
              <span className="text-4xl font-display font-extrabold text-cyan-bright tabular-nums">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-1 flex-1">
                <div className="h-px bg-white/10 w-full relative overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-cyan-bright"
                    animate={{ width: `${((activeIndex + 1) / groupedTestimonials.length) * 100}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>
                <span className="text-white/30 text-xs">{String(groupedTestimonials.length).padStart(2, "0")}</span>
              </div>
            </div>

            {/* Prev / Next arrows */}
            <div className="flex items-center gap-3 mt-1">
              <button
                onClick={prev}
                suppressHydrationWarning
                className="w-10 h-10 rounded-full border border-white/12 flex items-center justify-center text-white/50 hover:border-cyan-bright/50 hover:text-cyan-bright transition-all duration-200"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                suppressHydrationWarning
                className="w-10 h-10 rounded-full border border-white/12 flex items-center justify-center text-white/50 hover:border-cyan-bright/50 hover:text-cyan-bright transition-all duration-200"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2 ml-2">
                {groupedTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goTo(index)}
                    suppressHydrationWarning
                    className={`rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "bg-cyan-bright w-5 h-1.5 shadow-[0_0_8px_rgba(0,220,255,0.5)]"
                        : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ── CENTER GAP ───────────────────────────────────────────────── */}
          <div className="hidden lg:block lg:w-[18%] flex-shrink-0" />

          {/* ── RIGHT: staggered 3-D rise cards ─────────────────────────── */}
          <div className="w-full lg:w-[44%] relative min-h-[360px]" style={{ perspective: "1200px" }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: (d: number) => ({ opacity: 0, x: d * 60 }),
                  visible: { opacity: 1, x: 0 },
                  exit:   (d: number) => ({ opacity: 0, x: d * -60, transition: { duration: 0.22 } }),
                }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-5"
              >
                {groupedTestimonials[activeIndex].map((t, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 55, rotateX: 22, scale: 0.92 }}
                    animate={{ opacity: 1, y: 0,  rotateX: 0,  scale: 1    }}
                    whileHover={{ y: -4 }}
                    transition={{
                      duration: 0.65,
                      delay: idx * 0.14,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{
                      transformOrigin: "top center",
                      transformStyle: "preserve-3d",
                      position: "relative",
                      borderRadius: "1rem",
                      padding: "1.5rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      background: "var(--card-bg-medium)",
                      backdropFilter: "blur(14px)",
                      WebkitBackdropFilter: "blur(14px)",
                      border: "1px solid var(--card-border-faint)",
                      boxShadow: "var(--card-shadow)",
                    }}
                    className="group"
                  >
                    {/* Top accent line */}
                    <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-cyan-bright/30 to-transparent" />

                    {/* Quote icon */}
                    <div className="absolute top-4 right-5 pointer-events-none">
                      <Quote className="w-10 h-10 text-cyan-bright/8" style={{ transform: "scaleY(-1)" }} />
                    </div>

                    <p className="relative z-10 text-white/80 text-sm leading-relaxed italic">
                      "{t.text}"
                    </p>

                    <div className="relative z-10 flex items-center gap-3 pt-3 border-t border-white/6">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-bright to-blue-600 flex items-center justify-center font-bold text-navy-dark text-xs uppercase shadow-lg flex-shrink-0">
                        {t.company.slice(0, 2)}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white leading-none">{t.company}</p>
                        <p className="text-xs text-white/40 mt-1">{t.location}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
