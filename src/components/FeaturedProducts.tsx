"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck, Sparkles, Cpu, RefreshCw, Scale, Gauge, Video, Layers, ArrowRight, Camera, Signal, Wind, Zap, AlertTriangle, Car, Calculator } from "lucide-react";
import { motion } from "framer-motion";

const BASE = "https://apmgroups.in";

const products = [
  {
    name: "AIS 140 GPS Tracker",
    shortDesc: "Government-certified VLTD with dual eSIM, SOS panic button & RTO telemetry streaming.",
    badge: "B2B · B2G",
    icon: ShieldCheck,
    colorHex: "#f59e0b",
    glow: "rgba(245,158,11,0.18)",
    iconBg: "bg-amber-500/10 border-amber-500/20",
    iconColor: "text-amber-400",
    href: "/products#ais-140",
    image: `${BASE}/productdetails/upload/30062025/pd_ais_140_gps_tracking_device_main_172218.png`,
  },
  {
    name: "Auto Dipper Beam",
    shortDesc: "Smart headlight system that auto-switches high/low beam based on oncoming traffic.",
    badge: "B2B · B2C",
    icon: Sparkles,
    colorHex: "#3ebdef",
    glow: "rgba(62,189,239,0.18)",
    iconBg: "bg-cyan-500/10 border-cyan-500/20",
    iconColor: "text-cyan-400",
    href: "/products#auto-dipper",
    image: `${BASE}/productdetails/upload/30062025/pd_auto_dipper_sensor_main_153216.png`,
  },
  {
    name: "Rover Elite Plus",
    shortDesc: "High-precision OBD fleet diagnostics with driving score & remote engine immobilizer.",
    badge: "B2B",
    icon: Cpu,
    colorHex: "#3b82f6",
    glow: "rgba(59,130,246,0.18)",
    iconBg: "bg-blue-500/10 border-blue-500/20",
    iconColor: "text-blue-400",
    href: "/products#rover-elite",
    image: `${BASE}/productdetails/upload/24062025/pd_rover__main_160334.png`,
  },
  {
    name: "DC to DC Converter",
    shortDesc: "95%+ efficiency step-down converter shielding GPS nodes and cameras from voltage spikes.",
    badge: "B2B",
    icon: RefreshCw,
    colorHex: "#10b981",
    glow: "rgba(16,185,129,0.18)",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    iconColor: "text-emerald-400",
    href: "/products#dc-converter",
    image: `${BASE}/productdetails/upload/04072025/pd_13_main.png`,
  },
  {
    name: "Axle Payload System",
    shortDesc: "Wireless axle load sensors logging cargo weight metrics to prevent overloading fines.",
    badge: "B2B",
    icon: Scale,
    colorHex: "#6366f1",
    glow: "rgba(99,102,241,0.18)",
    iconBg: "bg-indigo-500/10 border-indigo-500/20",
    iconColor: "text-indigo-400",
    href: "/products#payload",
    image: `${BASE}/productdetails/upload/30062025/pd_prime_load_sensor_main_151223.png`,
  },
  {
    name: "Speed Governor SLD",
    shortDesc: "Calibrated fly-by-wire speed limiter for commercial vehicles — RTO & ministry approved.",
    badge: "B2B · B2C",
    icon: Gauge,
    colorHex: "#a855f7",
    glow: "rgba(168,85,247,0.18)",
    iconBg: "bg-purple-500/10 border-purple-500/20",
    iconColor: "text-purple-400",
    href: "/products#speed-governor",
    image: `${BASE}/productdetails/upload/04072025/pd_17_main.png`,
  },
  {
    name: "4G Vehicle Camera",
    shortDesc: "Dual-facing DVR with live 4G streaming, AI-ADAS driver alerts & crash G-sensor.",
    badge: "B2C · B2B",
    icon: Video,
    colorHex: "#f43f5e",
    glow: "rgba(244,63,94,0.18)",
    iconBg: "bg-rose-500/10 border-rose-500/20",
    iconColor: "text-rose-400",
    href: "/products#camera",
    image: `${BASE}/productdetails/upload/19082025/pd_19_main.png`,
  },
  {
    name: "Vehicle Safety Toolkit",
    shortDesc: "Conspicuity tapes, parking sensors, reverse cameras & fire detectors — all certified.",
    badge: "B2B · B2G",
    icon: Layers,
    colorHex: "#14b8a6",
    glow: "rgba(20,184,166,0.18)",
    iconBg: "bg-teal-500/10 border-teal-500/20",
    iconColor: "text-teal-400",
    href: "/products#safety",
    image: `${BASE}/productdetails/upload/04072025/pd_15_main.png`,
  },
  {
    name: "Rover View Camera",
    shortDesc: "3MP HD Wi-Fi secondary camera with IR night vision & AI detection for fleet safety.",
    badge: "B2B · B2G",
    icon: Camera,
    colorHex: "#38bdf8",
    glow: "rgba(56,189,248,0.18)",
    iconBg: "bg-sky-500/10 border-sky-500/20",
    iconColor: "text-sky-400",
    href: "/products#rover-view",
    image: `${BASE}/productdetails/upload/30062025/pd_rover_view_secondary_camera_main_142709.png`,
  },
  {
    name: "IoT M2M E-SIM",
    shortDesc: "Encrypted multi-network eSIM with OTA provisioning for global IoT device connectivity.",
    badge: "B2B",
    icon: Signal,
    colorHex: "#8b5cf6",
    glow: "rgba(139,92,246,0.18)",
    iconBg: "bg-violet-500/10 border-violet-500/20",
    iconColor: "text-violet-400",
    href: "/products#iot-esim",
    image: `${BASE}/productdetails/upload/04072025/pd_11_main.png`,
  },
  {
    name: "Emission Testing Machine",
    shortDesc: "Multi-gas pollution tester for authorized centers with thermal printer & auto calibration.",
    badge: "B2G",
    icon: Wind,
    colorHex: "#22c55e",
    glow: "rgba(34,197,94,0.18)",
    iconBg: "bg-green-500/10 border-green-500/20",
    iconColor: "text-green-400",
    href: "/products#pollution-machine",
    image: `${BASE}/productdetails/upload/04072025/pd_12_main.png`,
  },
  {
    name: "BMS Card",
    shortDesc: "Smart battery management for EVs & solar — monitors cell health, OTA firmware upgrades.",
    badge: "B2B",
    icon: Zap,
    colorHex: "#eab308",
    glow: "rgba(234,179,8,0.18)",
    iconBg: "bg-yellow-500/10 border-yellow-500/20",
    iconColor: "text-yellow-400",
    href: "/products#bms-card",
    image: `${BASE}/productdetails/upload/04072025/pd_14_main.png`,
  },
  {
    name: "Reflomax Conspicuity Tape",
    shortDesc: "ECE-104 certified retroreflective tape with 10-year durability for commercial vehicles.",
    badge: "B2B · B2G · B2C",
    icon: AlertTriangle,
    colorHex: "#f97316",
    glow: "rgba(249,115,22,0.18)",
    iconBg: "bg-orange-500/10 border-orange-500/20",
    iconColor: "text-orange-400",
    href: "/products#conspicuity-tape",
    image: `${BASE}/productdetails/upload/04072025/pd_20_main.png`,
  },
  {
    name: "Reverse Parking System",
    shortDesc: "Ultrasonic obstacle detection with progressive buzzer & voice alerts for all vehicles.",
    badge: "B2B · B2C",
    icon: Car,
    colorHex: "#84cc16",
    glow: "rgba(132,204,22,0.18)",
    iconBg: "bg-lime-500/10 border-lime-500/20",
    iconColor: "text-lime-400",
    href: "/products#reverse-parking",
    image: `${BASE}/productdetails/upload/04072025/pd_21_main.png`,
  },
  {
    name: "Auto Fare Meter",
    shortDesc: "Legal Metrology approved digital fare meter for auto-rickshaws with tamper-proof seal.",
    badge: "B2B · B2G",
    icon: Calculator,
    colorHex: "#ec4899",
    glow: "rgba(236,72,153,0.18)",
    iconBg: "bg-pink-500/10 border-pink-500/20",
    iconColor: "text-pink-400",
    href: "/products#fare-meter",
    image: `${BASE}/productdetails/upload/05072025/pd_22_main.png`,
  },
];

type Product = typeof products[0];

const UI_EN = {
  shopLabel:    "Shop APM Products",
  heading1:     "Our Complete",
  headingSpan:  "Product Lineup",
  tagline:      "Every device is government-certified, field-tested, and engineered for India's toughest transport and safety environments.",
  hoverTip:     "Hover over any card to see details →",
  tapTip:       "Tap any card to see details →",
  enquireNow:   "Enquire Now",
  viewDetails:  "View Details",
  exploreRange: "Explore Full Product Range",
  requestDemo:  "Request a Demo",
};

const UI_AR = {
  shopLabel:    "تسوق منتجات APM",
  heading1:     "تشكيلتنا الكاملة",
  headingSpan:  "من المنتجات",
  tagline:      "كل جهاز معتمد حكومياً ومختبر ميدانياً ومصمم لأقسى بيئات النقل والسلامة في الهند.",
  hoverTip:     "مرر على أي بطاقة لرؤية التفاصيل ←",
  tapTip:       "اضغط على أي بطاقة لرؤية التفاصيل ←",
  enquireNow:   "استفسر الآن",
  viewDetails:  "عرض التفاصيل",
  exploreRange: "استعرض النطاق الكامل للمنتجات",
  requestDemo:  "اطلب عرضاً تجريبياً",
};

function FlipCard({ p, index, ui }: { p: Product; index: number; ui: typeof UI_EN }) {
  const [flipped, setFlipped] = useState(false);
  const Icon = p.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="h-[320px]"
      style={{ perspective: "1100px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >

        {/* ── FRONT — full product image ── */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            background: `radial-gradient(ellipse 90% 80% at 50% 60%, ${p.glow.replace(/[\d.]+\)$/, "0.45)")}, var(--card-bg-strong))`,
            border: "1px solid var(--card-border-faint)",
          }}
        >
          {/* Colored accent stripe */}
          <div className="absolute top-0 left-0 right-0 h-[3px] z-10" style={{ background: p.colorHex }} />

          {/* Product image — fills the card */}
          <img
            src={p.image}
            alt={p.name}
            className="absolute inset-0 w-full h-full object-contain p-5"
            loading="lazy"
            style={{ filter: "saturate(1.8) brightness(1.15) contrast(1.05) drop-shadow(0 12px 32px rgba(0,0,0,0.55))" }}
          />

          {/* Bottom name bar */}
          <div
            className="absolute bottom-0 left-0 right-0 px-4 py-3"
            style={{ background: "linear-gradient(to top, var(--card-namebar) 65%, transparent)" }}
          >
            <span className="text-[9px] uppercase tracking-widest font-bold" style={{ color: p.colorHex }}>
              {p.badge}
            </span>
            <p className="text-white font-display font-bold text-sm leading-snug mt-0.5">{p.name}</p>
          </div>

          {/* Inner glow */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{ boxShadow: `inset 0 0 50px ${p.glow.replace(/[\d.]+\)$/, "0.22)")}` }}
          />
        </div>

        {/* ── BACK — description + CTA ── */}
        <div
          className="absolute inset-0 rounded-2xl flex flex-col justify-between p-5"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "var(--card-bg-solid)",
            border: `1px solid ${p.colorHex}28`,
            boxShadow: `0 0 40px ${p.glow.replace(/[\d.]+\)$/, "0.15)")}`,
          }}
        >
          {/* Colored top stripe */}
          <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl" style={{ background: p.colorHex }} />

          <div className="flex flex-col gap-4 pt-2">
            {/* Icon + title */}
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-xl border ${p.iconBg} ${p.iconColor} flex-shrink-0`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-widest font-bold" style={{ color: `${p.colorHex}90` }}>{p.badge}</span>
                <h3 className="text-sm font-display font-bold text-white leading-snug">{p.name}</h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-white/55 text-xs leading-relaxed">{p.shortDesc}</p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-2">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-white transition-all duration-250 hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: p.colorHex, boxShadow: `0 6px 20px ${p.glow.replace(/[\d.]+\)$/, "0.35)")}` }}
            >
              {ui.enquireNow} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href={p.href}
              className="flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold border border-white/10 text-white/55 hover:bg-white/5 hover:text-white transition-all duration-200"
            >
              {ui.viewDetails} <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FeaturedProducts() {
  const [isAr, setIsAr] = useState(false);
  useEffect(() => {
    const update = () => setIsAr(document.documentElement.lang === "ar");
    update();
    const obs = new MutationObserver(update);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
    return () => obs.disconnect();
  }, []);
  const ui = isAr ? UI_AR : UI_EN;

  return (
    <section id="shop" className="relative z-30 border-t border-white/5 py-16 md:py-24 lg:py-36 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="https://apmgroups.in/img/aboutusdetail/aboutbanner.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          style={{ opacity: 0.07, filter: "grayscale(0.6) blur(2px) saturate(0.4)" }}
        />
        {/* Fade top & bottom edges into page bg */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--section-edge) 0%, transparent 20%, transparent 80%, var(--section-edge) 100%)",
          }}
        />
        {/* Dot-grid overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(62,189,239,0.055) 1px, transparent 1px)",
            backgroundSize: "38px 38px",
          }}
        />
      </div>

      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(62,189,239,0.05) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center gap-4 mb-14"
        >
          <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-widest text-cyan-bright font-bold">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-cyan-bright" />
            {ui.shopLabel}
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-cyan-bright" />
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-extrabold text-white leading-tight">
            {ui.heading1} <span className="text-gradient">{ui.headingSpan}</span>
          </h2>
          <p className="text-white/55 text-sm md:text-base leading-relaxed max-w-xl">
            {ui.tagline}
            <span className="hidden md:block mt-1 text-white/30 text-xs">{ui.hoverTip}</span>
            <span className="block md:hidden mt-1 text-white/30 text-xs">{ui.tapTip}</span>
          </p>
        </motion.div>

        {/* Products grid — flip cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-14">
          {products.map((p, i) => (
            <FlipCard key={p.name} p={p} index={i} ui={ui} />
          ))}
        </div>

        {/* Big CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/products"
            className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-xl text-base font-bold bg-gradient-to-r from-cyan-bright to-blue-600 text-white shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <span className="relative z-10">{ui.exploreRange}</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold border border-white/15 text-white/80 hover:border-cyan-bright/40 hover:text-white hover:bg-white/5 transition-all duration-300"
          >
            {ui.requestDemo}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
