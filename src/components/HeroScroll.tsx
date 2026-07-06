"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ── Canvas config (unchanged) ──────────────────────────────────────────── */
const TOTAL_FRAMES = 194;
const PRIORITY_FRAMES = 30;
const FRAME_SPEED = 20;
const END_HOLD = 800;
const TOTAL_FRAME_DUR = (TOTAL_FRAMES - 1) * FRAME_SPEED; // 3860px
const TOTAL_TIMELINE = TOTAL_FRAME_DUR + END_HOLD;        // 4660px
const STAGE_SEG = TOTAL_FRAME_DUR / 5;                    // 772px per slide

/* ── Slide data ─────────────────────────────────────────────────────────── */
const SLIDES = [
  {
    id: 0,
    accentBg: "bg-cyan-bright",
    accentText: "text-cyan-bright",
    accentRgb: "0,220,255",
    accentHex: "#00dcff",
    label: "IoT & Automotive Solutions",
    heading: (
      <>
        Products That Power <br />
        <span className="text-gradient">Real-World Operations</span>
      </>
    ),
    body: "APM delivers certified speed governors, GPS tracking, and safety systems built for fleets, schools, and transport operators across India.",
    primaryCta: { label: "View Products", href: "/products" },
    secondaryCta: { label: "Enquire Now", href: "/contact" },
    contentSide: "left" as const,
  },
  {
    id: 1,
    accentBg: "bg-emerald-400",
    accentText: "text-emerald-400",
    accentRgb: "52,211,153",
    accentHex: "#34d399",
    label: "Fleet & Safety Systems",
    heading: (
      <>
        The Infrastructure Behind <br />
        <span className="text-gradient-cyan-blue">Seamless Service</span>
      </>
    ),
    body: "Government-approved AIS 140 Vehicle Location Tracking Devices with dual eSIM profiles, SOS panic buttons, and real-time telemetry to RTO command centers.",
    primaryCta: { label: "B2B Solutions", href: "/solutions/b2b" },
    secondaryCta: { label: "Enquire Now", href: "/contact" },
    bgImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    contentSide: "right" as const,
  },
  {
    id: 2,
    accentBg: "bg-blue-400",
    accentText: "text-blue-400",
    accentRgb: "96,165,250",
    accentHex: "#60a5fa",
    label: "Fleet Management Platform",
    heading: (
      <>
        Real-Time Fleet Intelligence <br />
        <span className="text-gradient">At Your Fingertips</span>
      </>
    ),
    body: "Monitor every vehicle in your fleet with live GPS tracking, route optimisation, driver behaviour analytics, and automated compliance reporting.",
    primaryCta: { label: "View Dashboard", href: "/solutions/software" },
    secondaryCta: { label: "Enquire Now", href: "/contact" },
    contentSide: "left" as const,
  },
  {
    id: 3,
    accentBg: "bg-amber-400",
    accentText: "text-amber-400",
    accentRgb: "251,191,36",
    accentHex: "#fbbf24",
    label: "AI-Powered Surveillance",
    heading: (
      <>
        Certified Automotive Solutions <br />
        <span className="text-gradient">That Keep You Ahead</span>
      </>
    ),
    body: "Ensure passenger safety with loop-recording 4G cameras, live streaming, and AI-enabled driver monitoring for school buses and transit fleets.",
    primaryCta: { label: "B2G Solutions", href: "/solutions/b2g" },
    secondaryCta: { label: "Enquire Now", href: "/contact" },
    contentSide: "right" as const,
  },
  {
    id: 4,
    accentBg: "bg-purple-400",
    accentText: "text-purple-400",
    accentRgb: "167,139,250",
    accentHex: "#a78bfa",
    label: "Road Infrastructure",
    heading: (
      <>
        Automated Testing Lanes <br />
        <span className="text-gradient-cyan-blue">& Compliance Accessories</span>
      </>
    ),
    body: "From computerized driving test tracks and highway signage to EN-standard reflective tapes, we engineer complete road safety and compliance infrastructure.",
    primaryCta: { label: "Software & Cloud", href: "/solutions/software" },
    secondaryCta: { label: "Enquire Now", href: "/contact" },
    contentSide: "left" as const,
  },
];

/* ── Stable particle list ───────────────────────────────────────────────── */
const PARTICLES = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  left: `${6 + ((i * 43) % 88)}%`,
  top: `${8 + ((i * 31) % 82)}%`,
  size: 1.2 + (i % 4) * 0.55,
  delay: i * 0.38,
  dur: 3.4 + (i % 5) * 0.85,
}));

/* ── Component ──────────────────────────────────────────────────────────── */
export default function HeroScroll() {
  /* canvas refs */
  const containerRef  = useRef<HTMLDivElement>(null);
  const canvasRef     = useRef<HTMLCanvasElement>(null);
  const offscreenRef  = useRef<HTMLCanvasElement | null>(null);
  const currentFrameRef = useRef(0);
  const rafRef        = useRef<number | null>(null);

  /* slide refs */
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  /* state */
  const [images, setImages]           = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [isLoading, setIsLoading]     = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  /* ── Offscreen canvas ─────────────────────────────────────────────────── */
  useEffect(() => {
    const off = document.createElement("canvas");
    off.width = window.innerWidth;
    off.height = window.innerHeight;
    offscreenRef.current = off;
  }, []);

  /* ── Draw frame ───────────────────────────────────────────────────────── */
  const drawFrame = useCallback((index: number) => {
    const canvas   = canvasRef.current;
    const offscreen = offscreenRef.current;
    if (!canvas || !offscreen || images.length === 0) return;

    const img = images[index];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const ctx    = canvas.getContext("2d", { alpha: false });
    const offCtx = offscreen.getContext("2d", { alpha: false });
    if (!ctx || !offCtx) return;

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    if (canvas.width !== vw || canvas.height !== vh) {
      canvas.width = vw; canvas.height = vh;
      offscreen.width = vw; offscreen.height = vh;
    }

    const imgRatio    = img.naturalWidth / img.naturalHeight;
    const canvasRatio = vw / vh;
    let dw = vw, dh = vh, dx = 0, dy = 0;

    if (imgRatio > canvasRatio) { dw = vh * imgRatio; dx = (vw - dw) / 2; }
    else                        { dh = vw / imgRatio; dy = (vh - dh) / 2; }

    offCtx.drawImage(img, dx, dy, dw, dh);
    ctx.drawImage(offscreen, 0, 0);
  }, [images]);

  /* ── Schedule frame ───────────────────────────────────────────────────── */
  const scheduleFrame = useCallback((index: number) => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      drawFrame(index);
      rafRef.current = null;
    });
  }, [drawFrame]);

  /* ── Preload images ───────────────────────────────────────────────────── */
  useEffect(() => {
    const loaded: HTMLImageElement[] = new Array(TOTAL_FRAMES);
    let counter = 0;

    const tick = () => {
      counter++;
      setImagesLoaded(counter);
      if (counter === TOTAL_FRAMES) setIsLoading(false);
    };

    const loadFrame = (i: number) => {
      const img = new Image();
      img.decoding = "async";
      img.src = `/scrollimg/ezgif-frame-${String(i).padStart(3, "0")}.jpg`;
      img.onload = tick;
      img.onerror = tick;
      loaded[i - 1] = img;
    };

    for (let i = 1; i <= PRIORITY_FRAMES; i++) loadFrame(i);
    const t = setTimeout(() => {
      for (let i = PRIORITY_FRAMES + 1; i <= TOTAL_FRAMES; i++) loadFrame(i);
    }, 100);

    setImages(loaded);
    return () => clearTimeout(t);
  }, []);

  /* ── Draw first frame when available ─────────────────────────────────── */
  useEffect(() => {
    if (images[0]) drawFrame(0);
  }, [images, drawFrame]);

  /* ── Combined GSAP ScrollTrigger ─────────────────────────────────────── */
  useEffect(() => {
    if (isLoading || images.length === 0 || !containerRef.current || !canvasRef.current) return;

    drawFrame(0);
    const obj = { frame: 0 };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${TOTAL_TIMELINE}`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        anticipatePin: 1,
        onUpdate(self) {
          const pos = self.progress * TOTAL_TIMELINE;
          const idx = Math.min(Math.floor(pos / STAGE_SEG), SLIDES.length - 1);
          setCurrentSlide(idx);
        },
      },
    });

    /* canvas frames */
    tl.to(obj, {
      frame: TOTAL_FRAMES - 1,
      snap: "frame",
      ease: "none",
      duration: TOTAL_FRAME_DUR,
      onUpdate() {
        const idx = Math.round(obj.frame);
        if (idx !== currentFrameRef.current) {
          currentFrameRef.current = idx;
          scheduleFrame(idx);
        }
      },
    }, 0);

    /* slide transitions */
    SLIDES.forEach((_, i) => {
      const el  = slideRefs.current[i];
      if (!el) return;
      const s   = i * STAGE_SEG;
      const e   = (i + 1) * STAGE_SEG;
      const TR  = 160;

      if (i === 0) {
        tl.to(el, { autoAlpha: 0, y: -28, scale: 0.97, duration: TR, ease: "power2.in" }, e - TR);
      } else {
        tl.fromTo(el,
          { autoAlpha: 0, y: 36, scale: 0.97 },
          { autoAlpha: 1, y: 0,  scale: 1,    duration: TR, ease: "power2.out" },
          s
        );
        if (i < SLIDES.length - 1) {
          tl.to(el, { autoAlpha: 0, y: -28, scale: 0.97, duration: TR, ease: "power2.in" }, e - TR);
        }
      }
    });

    tl.to({}, { duration: END_HOLD });

    const onResize = () => {
      if (offscreenRef.current) {
        offscreenRef.current.width  = window.innerWidth;
        offscreenRef.current.height = window.innerHeight;
      }
      scheduleFrame(currentFrameRef.current);
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [isLoading, images, drawFrame, scheduleFrame]);

  const pct    = Math.floor((imagesLoaded / TOTAL_FRAMES) * 100);
  const active = SLIDES[currentSlide];

  /* ── Render ───────────────────────────────────────────────────────────── */
  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black">

      {/* ── Loading overlay ───────────────────────────────────────────────── */}
      {isLoading && (
        <div className="absolute inset-0 z-[60] bg-[#050d1a] flex flex-col items-center justify-center gap-6">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 rounded-full border-4 border-white/5" />
            <div className="absolute inset-0 rounded-full border-4 border-t-cyan-bright animate-spin" />
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="text-white font-display text-xl font-bold tracking-wider uppercase">
              APM Cinematic Experience
            </h2>
            <p className="text-white/50 text-sm">Loading visual timeline…</p>
            <div className="w-64 h-1 bg-white/5 rounded-full overflow-hidden mt-4">
              <div
                className="h-full bg-gradient-to-r from-cyan-bright to-blue-500 rounded-full transition-all duration-200"
                style={{ width: `${pct}%` }}
              />
            </div>
            <span className="text-cyan-bright font-bold text-sm mt-1">{pct}%</span>
          </div>
        </div>
      )}

      {/* ── Truck canvas — full-screen background ─────────────────────────── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ display: "block", zIndex: 2 }}
      />

      {/* ── Canvas overlays for readability ───────────────────────────────── */}
      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 4, background: "radial-gradient(ellipse at center, transparent 35%, rgba(5,13,26,0.55) 100%)" }}
      />
      {/* Uniform darkening so slide cards pop */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 5, background: "rgba(5,13,26,0.28)" }}
      />

      {/* ── Ambient background effects ────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 6 }} aria-hidden>
        {/* Dynamic accent blob — hue shifts per slide */}
        <div
          className="absolute right-[10%] top-[18%] w-[520px] h-[520px] rounded-full"
          style={{
            background: `radial-gradient(ellipse, rgba(${active.accentRgb},0.14) 0%, transparent 68%)`,
            filter: "blur(88px)",
            transition: "background 1.1s ease-out",
            animation: "h-blob 14s ease-in-out infinite",
          }}
        />
        {/* Left ambient blob */}
        <div
          className="absolute -left-24 bottom-[20%] w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(0,55,140,0.2) 0%, transparent 68%)", filter: "blur(72px)", animation: "h-blob 18s ease-in-out infinite reverse" }}
        />
        {/* Dot mesh */}
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(62,189,239,0.035) 1px, transparent 1px)", backgroundSize: "42px 42px" }} />
        {/* Streak 1 */}
        <div className="absolute top-[28%] left-0 h-px w-[45%]" style={{ background: "linear-gradient(to right, transparent, rgba(0,220,255,0.28), transparent)", animation: "h-streak 9s ease-in-out 1.5s infinite" }} />
        {/* Streak 2 */}
        <div className="absolute top-[66%] right-0 h-px w-[38%]" style={{ background: "linear-gradient(to left, transparent, rgba(96,165,250,0.22), transparent)", animation: "h-streak 11s ease-in-out 5s infinite" }} />
        {/* Particles */}
        {PARTICLES.map((p) => (
          <div key={p.id} className="absolute rounded-full bg-white" style={{ left: p.left, top: p.top, width: p.size, height: p.size, opacity: 0, animation: `h-ptcl ${p.dur}s ease-in-out ${p.delay}s infinite` }} />
        ))}
        {/* Accent bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(to right, transparent, rgba(${active.accentRgb},0.24), transparent)`, transition: "background 1s ease" }} />
      </div>

      {/* ── Slide overlays ────────────────────────────────────────────────── */}
      {/* pointer-events-none on the container; only links inside re-enable it */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 20 }}>
        {SLIDES.map((slide, i) => (
          <div
            key={slide.id}
            ref={(el) => { slideRefs.current[i] = el; }}
            className="absolute inset-0"
            style={{ opacity: i === 0 ? 1 : 0, visibility: i === 0 ? "visible" : "hidden", willChange: "transform, opacity" }}
          >
            {/* ── DESKTOP: content card alternates left / right ─────────────── */}
            <div className="hidden md:flex w-full h-full items-center">
              <div
                className="w-1/2 h-full flex items-center"
                style={{
                  marginLeft: slide.contentSide === "right" ? "50%" : "0",
                  paddingLeft:  slide.contentSide === "left"  ? "clamp(2rem, 5vw, 6rem)" : "1.5rem",
                  paddingRight: slide.contentSide === "right" ? "clamp(2rem, 5vw, 6rem)" : "1.5rem",
                }}
              >
                <div className={`w-full max-w-[520px] ${slide.contentSide === "right" ? "ml-auto" : ""}`}>
                  <ContentCard slide={slide} isFirst={i === 0} />
                </div>
              </div>
            </div>

            {/* ── MOBILE: content card centered ────────────────────────────────── */}
            <div className="md:hidden w-full h-full flex items-center justify-center px-4">
              <div className="w-full max-w-sm">
                <ContentCard slide={slide} isFirst={i === 0} />
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* ── Scroll indicator ──────────────────────────────────────────────── */}
      <div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        style={{ zIndex: 30 }}
      >
        <span className="text-[10px] uppercase tracking-widest text-white/35 font-medium">Scroll to explore</span>
        <ChevronDown className="w-4 h-4 text-white/35 animate-bounce" />
      </div>

      {/* ── Progress dots ─────────────────────────────────────────────────── */}
      <div className="absolute right-5 top-1/2 -translate-y-1/2 flex flex-col gap-3" style={{ zIndex: 30 }}>
        {SLIDES.map((s, i) => (
          <div
            key={i}
            className="rounded-full transition-all duration-300"
            style={{
              width:      currentSlide === i ? 10 : 6,
              height:     currentSlide === i ? 10 : 6,
              background: currentSlide === i ? s.accentHex : "rgba(255,255,255,0.2)",
              boxShadow:  currentSlide === i ? `0 0 10px rgba(${s.accentRgb},0.7)` : "none",
            }}
          />
        ))}
      </div>

    </div>
  );
}

/* ── Sub-components (defined outside to avoid re-creation) ─────────────── */

type SlideData = (typeof SLIDES)[number];

function ContentCard({ slide, isFirst }: { slide: SlideData; isFirst: boolean }) {
  const bgImage = "bgImage" in slide ? (slide.bgImage as string | undefined) : undefined;

  return (
    /* pointer-events-auto re-enables clicks/hovers on this card (parent is pointer-events-none) */
    <div
      className="pointer-events-auto relative overflow-hidden flex flex-col gap-5 rounded-[26px] p-6 md:p-8"
      style={{
        background: "rgba(5,13,26,0.62)",
        backdropFilter: "blur(28px)",
        WebkitBackdropFilter: "blur(28px)",
        border: "1px solid rgba(255,255,255,0.09)",
        boxShadow: "0 24px 56px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      {/* ── Background image (only on slides that define bgImage) ──────── */}
      {bgImage && (
        <>
          <img
            src={bgImage}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
            style={{ objectPosition: "right center", opacity: 0.18, filter: "blur(2px) saturate(0.65)", zIndex: 0 }}
          />
          {/* Dark gradient overlay keeps text readable */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(90deg, rgba(7,15,30,0.95) 0%, rgba(7,15,30,0.82) 45%, rgba(7,15,30,0.55) 100%)",
              zIndex: 1,
            }}
          />
        </>
      )}

      {/* ── All card content above background layers ───────────────────── */}
      <div className="relative flex flex-col gap-5" style={{ zIndex: 2 }}>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit">
          <span className={`w-2 h-2 rounded-full flex-shrink-0 ${slide.accentBg} animate-pulse`} />
          <span className={`text-[10px] uppercase font-bold tracking-[0.16em] ${slide.accentText}`}>
            {slide.label}
          </span>
        </div>

        {/* Heading */}
        <div className="text-[1.8rem] md:text-[2.2rem] lg:text-[2.5rem] font-display font-extrabold text-white leading-[1.14] tracking-tight">
          {isFirst ? <h1>{slide.heading}</h1> : <h2>{slide.heading}</h2>}
        </div>

        {/* Body */}
        <p className="text-white/70 text-sm md:text-[0.93rem] leading-relaxed">
          {slide.body}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 pt-1">
          <Link
            href={slide.primaryCta.href}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: slide.accentHex,
              color: "#050d1a",
              boxShadow: `0 8px 22px rgba(${slide.accentRgb},0.38)`,
            }}
          >
            {slide.primaryCta.label}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          {slide.secondaryCta && (
            <Link
              href={slide.secondaryCta.href}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 hover:-translate-y-0.5 transition-all duration-300"
            >
              {slide.secondaryCta.label}
            </Link>
          )}
        </div>

      </div>
    </div>
  );
}
