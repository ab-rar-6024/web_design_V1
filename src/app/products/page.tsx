"use client";

import { useState } from "react";
import Link from "next/link";
import { Cpu, ShieldCheck, Video, Gauge, Sparkles, Scale, RefreshCw, Layers, ArrowRight, Camera, Signal, Wind, Zap, AlertTriangle, Car, Calculator } from "lucide-react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { useLang } from "@/hooks/useLang";

const BASE = "https://apmgroups.in";

const productsEn = [
  { id: "ais-140", title: "AIS 140 Compliance GPS", desc: "Government certified VLTD with dual eSIM profiling, real-time tracking, SOS panic alerts, and RTO telemetry streaming.", cats: ["b2b", "b2g"], icon: ShieldCheck, color: "text-amber-400", colorHex: "#f59e0b", iconBg: "bg-amber-500/10 border-amber-500/20", glow: "rgba(245,158,11,0.18)", specs: ["Dual profile eSIM support", "Emergency SOS panic button", "Real-time telemetry stream", "CDAC & government compliant"], image: `${BASE}/productdetails/upload/30062025/pd_ais_140_gps_tracking_device_main_172218.png` },
  { id: "auto-dipper", title: "Auto Dipper Beam Control", desc: "Smart headlight regulation that automatically dips between high and low beams based on oncoming road traffic detection.", cats: ["b2b", "b2c"], icon: Sparkles, color: "text-cyan-400", colorHex: "#3ebdef", iconBg: "bg-cyan-500/10 border-cyan-500/20", glow: "rgba(62,189,239,0.18)", specs: ["LDR sensor integration", "Relay high-beam controller", "Enhances night safety", "Prolongs headlight life"], image: `${BASE}/productdetails/upload/30062025/pd_auto_dipper_sensor_main_153216.png` },
  { id: "rover-elite", title: "Rover Elite Plus GPS", desc: "High-precision OBD fleet diagnostics tracker with driving scoring, remote engine cutoff, and instant fuel monitoring.", cats: ["b2b"], icon: Cpu, color: "text-blue-400", colorHex: "#3b82f6", iconBg: "bg-blue-500/10 border-blue-500/20", glow: "rgba(59,130,246,0.18)", specs: ["OBD-II vehicle diagnostics", "Ignition status alerts", "Remote immobilizer control", "Driver behavior analytics"], image: `${BASE}/productdetails/upload/24062025/pd_rover__main_160334.png` },
  { id: "dc-converter", title: "DC to DC Power Converter", desc: "High-efficiency step-down voltage converter delivering stable current to GPS nodes and cameras, shielding against spikes.", cats: ["b2b"], icon: RefreshCw, color: "text-emerald-400", colorHex: "#10b981", iconBg: "bg-emerald-500/10 border-emerald-500/20", glow: "rgba(16,185,129,0.18)", specs: ["Wide input voltage range", "Over-voltage safety fuse", "Waterproof heatproof alloy", "95%+ conversion efficiency"], image: `${BASE}/productdetails/upload/04072025/pd_13_main.png` },
  { id: "payload", title: "Axle Payload System", desc: "Automated weight monitoring using heavy-duty axle load sensors to log cargo metrics and prevent overloading penalties.", cats: ["b2b"], icon: Scale, color: "text-indigo-400", colorHex: "#6366f1", iconBg: "bg-indigo-500/10 border-indigo-500/20", glow: "rgba(99,102,241,0.18)", specs: ["Wireless axle scale sensor", "In-cabin weight display", "Overload limit alerts", "Anti-tamper logs built-in"], image: `${BASE}/productdetails/upload/30062025/pd_prime_load_sensor_main_151223.png` },
  { id: "speed-governor", title: "Speed Limiting Device (SLD)", desc: "Calibrated fuel/cable speed governor limiting commercial vehicle speeds to mandated limits without engine power loss.", cats: ["b2b", "b2c"], icon: Gauge, color: "text-purple-400", colorHex: "#a855f7", iconBg: "bg-purple-500/10 border-purple-500/20", glow: "rgba(168,85,247,0.18)", specs: ["Fly-by-wire throttle control", "Mechanical fuel bypass", "Tamper-proof physical seal", "RTO & ministry approved"], image: `${BASE}/productdetails/upload/04072025/pd_17_main.png` },
  { id: "camera", title: "4G Vehicle Surveillance", desc: "Dual-camera DVR with Wi-Fi hotspot, continuous cloud uploading, and AI-enabled ADAS driver monitoring alerts.", cats: ["b2c", "b2b"], icon: Video, color: "text-rose-400", colorHex: "#f43f5e", iconBg: "bg-rose-500/10 border-rose-500/20", glow: "rgba(244,63,94,0.18)", specs: ["Dual-facing wide-angle lenses", "Live 4G video streaming", "Loop recording on microSD", "G-sensor crash recording"], image: `${BASE}/productdetails/upload/19082025/pd_19_main.png` },
  { id: "safety", title: "Vehicle Safety Toolkit", desc: "Unified safety solutions: conspicuity reflective tapes, parking sensors, reverse cameras, and fire detection indicators.", cats: ["b2b", "b2g"], icon: Layers, color: "text-teal-400", colorHex: "#14b8a6", iconBg: "bg-teal-500/10 border-teal-500/20", glow: "rgba(20,184,166,0.18)", specs: ["Certified conspicuity tapes", "High-accuracy distance sensors", "In-cab visual alerts", "RTO registration ready"], image: `${BASE}/productdetails/upload/04072025/pd_15_main.png` },
  { id: "rover-view", title: "Rover View Secondary Camera", desc: "3MP HD Wi-Fi camera for real-time audio/video transmission to mobile devices — designed for fleet, logistics, and public transport.", cats: ["b2b", "b2g"], icon: Camera, color: "text-sky-400", colorHex: "#38bdf8", iconBg: "bg-sky-500/10 border-sky-500/20", glow: "rgba(56,189,248,0.18)", specs: ["1920×1080p HD resolution", "IR night vision 30m", "AI detection & real-time alerts", "128GB SD card support"], image: `${BASE}/productdetails/upload/30062025/pd_rover_view_secondary_camera_main_142709.png` },
  { id: "iot-esim", title: "IoT M2M E-SIM", desc: "Built-in encrypted eSIM delivering seamless multi-network IoT connectivity with OTA profile updates for smart devices globally.", cats: ["b2b"], icon: Signal, color: "text-violet-400", colorHex: "#8b5cf6", iconBg: "bg-violet-500/10 border-violet-500/20", glow: "rgba(139,92,246,0.18)", specs: ["2G/3G/4G/LTE/NB-IoT/Cat-M1", "IP67 embedded SIM", "GSMA/ISO/CE certified", "10+ year SIM lifecycle"], image: `${BASE}/productdetails/upload/04072025/pd_11_main.png` },
  { id: "pollution-machine", title: "Emission Pollution Machine", desc: "Precision multi-gas emission testing unit for authorized centers — fast warm-up, digital display, and automated calibration.", cats: ["b2g"], icon: Wind, color: "text-green-400", colorHex: "#22c55e", iconBg: "bg-green-500/10 border-green-500/20", glow: "rgba(34,197,94,0.18)", specs: ["Multi-gas detection", "Startup under 5 minutes", "Thermal printer built-in", "LCD/touchscreen display"], image: `${BASE}/productdetails/upload/04072025/pd_12_main.png` },
  { id: "bms-card", title: "BMS Card", desc: "Intelligent battery management system monitoring charge, discharge, temperature, and health for EVs, solar, and backup systems.", cats: ["b2b"], icon: Zap, color: "text-yellow-400", colorHex: "#eab308", iconBg: "bg-yellow-500/10 border-yellow-500/20", glow: "rgba(234,179,8,0.18)", specs: ["Supports Li-ion / LiFePO4", "4–16 cell monitoring", "OTA firmware upgrades", "CAN / RS485 / Bluetooth"], image: `${BASE}/productdetails/upload/04072025/pd_14_main.png` },
  { id: "conspicuity-tape", title: "Reflomax Conspicuity Tape", desc: "ECE-104 and AIS-090 certified retroreflective tape offering 10-year durability and ≥300 cd/lux/m² visibility for all vehicles.", cats: ["b2b", "b2g", "b2c"], icon: AlertTriangle, color: "text-orange-400", colorHex: "#f97316", iconBg: "bg-orange-500/10 border-orange-500/20", glow: "rgba(249,115,22,0.18)", specs: ["ECE-104 / FMVSS 108 certified", "Reflectivity ≥300 cd/lux/m²", "-20°C to +70°C range", "Self-adhesive, bubble-free"], image: `${BASE}/productdetails/upload/04072025/pd_20_main.png` },
  { id: "reverse-parking", title: "Reverse Parking System", desc: "Ultrasonic obstacle detection system with progressive audio & visual alerts — universal vehicle fit, IP-rated weather-resistant sensors.", cats: ["b2b", "b2c"], icon: Car, color: "text-lime-400", colorHex: "#84cc16", iconBg: "bg-lime-500/10 border-lime-500/20", glow: "rgba(132,204,22,0.18)", specs: ["Detection up to 1.5–2m", "Auto-activates in reverse", "Buzzer & voice warnings", "IP-rated sensor housing"], image: `${BASE}/productdetails/upload/04072025/pd_21_main.png` },
  { id: "fare-meter", title: "Auto Fare Meter", desc: "Legal Metrology approved digital fare meter for auto-rickshaws with accurate distance/time calculation and tamper-proof sealed design.", cats: ["b2b", "b2g"], icon: Calculator, color: "text-pink-400", colorHex: "#ec4899", iconBg: "bg-pink-500/10 border-pink-500/20", glow: "rgba(236,72,153,0.18)", specs: ["5-digit LED/LCD display", "Automatic night fare mode", "Legal Metrology approved", "Weatherproof ABS/metal body"], image: `${BASE}/productdetails/upload/05072025/pd_22_main.png` },
];

const productsAr = [
  { id: "ais-140", title: "GPS للامتثال وفق AIS 140", desc: "جهاز VLTD معتمد حكوميًا مع تنشيط الشريحة المزدوجة والتتبع اللحظي وتنبيهات ذعر SOS وبث بيانات RTO.", cats: ["b2b", "b2g"], icon: ShieldCheck, color: "text-amber-400", colorHex: "#f59e0b", iconBg: "bg-amber-500/10 border-amber-500/20", glow: "rgba(245,158,11,0.18)", specs: ["دعم ملف الشريحة المزدوجة", "زر ذعر طوارئ SOS", "بث بيانات في الوقت الفعلي", "متوافق مع CDAC والحكومة"], image: `${BASE}/productdetails/upload/30062025/pd_ais_140_gps_tracking_device_main_172218.png` },
  { id: "auto-dipper", title: "التحكم الآلي في أضواء السيارة", desc: "تنظيم ذكي للمصابيح الأمامية يتحول تلقائيًا بين الإضاءة العالية والمنخفضة بناءً على الكشف عن حركة المرور المقابلة.", cats: ["b2b", "b2c"], icon: Sparkles, color: "text-cyan-400", colorHex: "#3ebdef", iconBg: "bg-cyan-500/10 border-cyan-500/20", glow: "rgba(62,189,239,0.18)", specs: ["تكامل مستشعر LDR", "وحدة تحكم الإضاءة العالية", "يعزز السلامة الليلية", "يطيل عمر المصباح"], image: `${BASE}/productdetails/upload/30062025/pd_auto_dipper_sensor_main_153216.png` },
  { id: "rover-elite", title: "جهاز تتبع Rover Elite Plus", desc: "جهاز تتبع عالي الدقة لتشخيص الأسطول OBD مع تقييم القيادة وقطع المحرك عن بُعد ومراقبة فورية للوقود.", cats: ["b2b"], icon: Cpu, color: "text-blue-400", colorHex: "#3b82f6", iconBg: "bg-blue-500/10 border-blue-500/20", glow: "rgba(59,130,246,0.18)", specs: ["تشخيصات المركبة OBD-II", "تنبيهات حالة الإشعال", "التحكم عن بُعد في الشلّ", "تحليلات سلوك السائق"], image: `${BASE}/productdetails/upload/24062025/pd_rover__main_160334.png` },
  { id: "dc-converter", title: "محول طاقة DC إلى DC", desc: "محول جهد خفض كفاءة عالية يوفر تياراً مستقراً لعقد GPS والكاميرات، ويحمي من ارتفاعات الجهد.", cats: ["b2b"], icon: RefreshCw, color: "text-emerald-400", colorHex: "#10b981", iconBg: "bg-emerald-500/10 border-emerald-500/20", glow: "rgba(16,185,129,0.18)", specs: ["نطاق جهد إدخال واسع", "فيوز سلامة من الجهد الزائد", "سبيكة مقاومة للماء والحرارة", "كفاءة تحويل +95%"], image: `${BASE}/productdetails/upload/04072025/pd_13_main.png` },
  { id: "payload", title: "نظام حمولة المحور", desc: "مراقبة آلية للوزن باستخدام أجهزة استشعار تحميل المحور الثقيلة لتسجيل مقاييس الشحنة ومنع غرامات التحميل الزائد.", cats: ["b2b"], icon: Scale, color: "text-indigo-400", colorHex: "#6366f1", iconBg: "bg-indigo-500/10 border-indigo-500/20", glow: "rgba(99,102,241,0.18)", specs: ["مستشعر ميزان محور لاسلكي", "عرض الوزن داخل المقصورة", "تنبيهات حد التحميل الزائد", "سجلات مضادة للتلاعب"], image: `${BASE}/productdetails/upload/30062025/pd_prime_load_sensor_main_151223.png` },
  { id: "speed-governor", title: "جهاز تحديد السرعة (SLD)", desc: "حوّام سرعة وقود/كابل معايَر يحد من سرعات المركبات التجارية دون فقدان قدرة المحرك.", cats: ["b2b", "b2c"], icon: Gauge, color: "text-purple-400", colorHex: "#a855f7", iconBg: "bg-purple-500/10 border-purple-500/20", glow: "rgba(168,85,247,0.18)", specs: ["التحكم في العجلة عن بُعد", "تجاوز الوقود الميكانيكي", "ختم مادي مضاد للتلاعب", "معتمد من RTO والوزارة"], image: `${BASE}/productdetails/upload/04072025/pd_17_main.png` },
  { id: "camera", title: "مراقبة المركبة بالجيل الرابع", desc: "DVR ذو كاميرا مزدوجة مع نقطة اتصال Wi-Fi وتحميل سحابي مستمر وتنبيهات مراقبة السائق ADAS بالذكاء الاصطناعي.", cats: ["b2c", "b2b"], icon: Video, color: "text-rose-400", colorHex: "#f43f5e", iconBg: "bg-rose-500/10 border-rose-500/20", glow: "rgba(244,63,94,0.18)", specs: ["عدسات زاوية واسعة ذات اتجاهين", "بث فيديو مباشر 4G", "تسجيل حلقي على microSD", "تسجيل الاصطدام بـ G-sensor"], image: `${BASE}/productdetails/upload/19082025/pd_19_main.png` },
  { id: "safety", title: "طقم السلامة للمركبات", desc: "حلول سلامة موحدة: أشرطة عاكسة وأجهزة استشعار للركن وكاميرات الرجوع ومؤشرات كشف الحريق.", cats: ["b2b", "b2g"], icon: Layers, color: "text-teal-400", colorHex: "#14b8a6", iconBg: "bg-teal-500/10 border-teal-500/20", glow: "rgba(20,184,166,0.18)", specs: ["أشرطة ليكية معتمدة", "أجهزة استشعار عالية الدقة", "تنبيهات بصرية داخل المقصورة", "جاهز لتسجيل RTO"], image: `${BASE}/productdetails/upload/04072025/pd_15_main.png` },
  { id: "rover-view", title: "كاميرا Rover View الثانوية", desc: "كاميرا Wi-Fi عالية الدقة 3MP لنقل الصوت والفيديو في الوقت الفعلي إلى الأجهزة المحمولة — مصممة للأسطول واللوجستيات.", cats: ["b2b", "b2g"], icon: Camera, color: "text-sky-400", colorHex: "#38bdf8", iconBg: "bg-sky-500/10 border-sky-500/20", glow: "rgba(56,189,248,0.18)", specs: ["دقة 1920×1080p HD", "رؤية ليلية IR 30م", "كشف AI وتنبيهات فورية", "دعم بطاقة SD 128GB"], image: `${BASE}/productdetails/upload/30062025/pd_rover_view_secondary_camera_main_142709.png` },
  { id: "iot-esim", title: "شريحة E-SIM لإنترنت الأشياء M2M", desc: "شريحة eSIM مشفرة مدمجة توفر اتصالاً سلساً متعدد الشبكات مع تحديثات ملف OTA للأجهزة الذكية عالميًا.", cats: ["b2b"], icon: Signal, color: "text-violet-400", colorHex: "#8b5cf6", iconBg: "bg-violet-500/10 border-violet-500/20", glow: "rgba(139,92,246,0.18)", specs: ["2G/3G/4G/LTE/NB-IoT/Cat-M1", "شريحة SIM مدمجة IP67", "معتمدة GSMA/ISO/CE", "دورة حياة SIM +10 سنوات"], image: `${BASE}/productdetails/upload/04072025/pd_11_main.png` },
  { id: "pollution-machine", title: "جهاز قياس انبعاثات العادم", desc: "وحدة اختبار انبعاثات متعددة الغازات دقيقة للمراكز المعتمدة — إقلاع سريع وشاشة رقمية وقياس آلي.", cats: ["b2g"], icon: Wind, color: "text-green-400", colorHex: "#22c55e", iconBg: "bg-green-500/10 border-green-500/20", glow: "rgba(34,197,94,0.18)", specs: ["كشف متعدد الغازات", "الإقلاع خلال 5 دقائق", "طابعة حرارية مدمجة", "شاشة LCD/شاشة لمس"], image: `${BASE}/productdetails/upload/04072025/pd_12_main.png` },
  { id: "bms-card", title: "بطاقة BMS", desc: "نظام إدارة بطاريات ذكي يراقب الشحن والتفريغ ودرجة الحرارة والصحة للمركبات الكهربائية والطاقة الشمسية وأنظمة الطاقة الاحتياطية.", cats: ["b2b"], icon: Zap, color: "text-yellow-400", colorHex: "#eab308", iconBg: "bg-yellow-500/10 border-yellow-500/20", glow: "rgba(234,179,8,0.18)", specs: ["يدعم Li-ion / LiFePO4", "مراقبة 4-16 خلية", "ترقيات البرامج الثابتة OTA", "CAN / RS485 / Bluetooth"], image: `${BASE}/productdetails/upload/04072025/pd_14_main.png` },
  { id: "conspicuity-tape", title: "شريط Reflomax الليكي", desc: "شريط عاكس معتمد وفق ECE-104 وAIS-090 يوفر متانة 10 سنوات وإمكانية رؤية ≥300 كد/لكس/م² لجميع المركبات.", cats: ["b2b", "b2g", "b2c"], icon: AlertTriangle, color: "text-orange-400", colorHex: "#f97316", iconBg: "bg-orange-500/10 border-orange-500/20", glow: "rgba(249,115,22,0.18)", specs: ["معتمد ECE-104 / FMVSS 108", "انعكاسية ≥300 كد/لكس/م²", "نطاق -20°C إلى +70°C", "لاصق ذاتي خالٍ من الفقاعات"], image: `${BASE}/productdetails/upload/04072025/pd_20_main.png` },
  { id: "reverse-parking", title: "نظام الركن العكسي", desc: "نظام كشف عقبات بالموجات فوق الصوتية مع تنبيهات صوتية ومرئية متصاعدة — يناسب جميع المركبات مع أجهزة استشعار مقاومة للطقس.", cats: ["b2b", "b2c"], icon: Car, color: "text-lime-400", colorHex: "#84cc16", iconBg: "bg-lime-500/10 border-lime-500/20", glow: "rgba(132,204,22,0.18)", specs: ["كشف حتى 1.5-2م", "يعمل تلقائياً في وضع الرجوع", "تحذيرات صوتية وصوتية", "إسكان مستشعر مقيّم IP"], image: `${BASE}/productdetails/upload/04072025/pd_21_main.png` },
  { id: "fare-meter", title: "عداد الأجرة الآلي", desc: "عداد أجرة رقمي معتمد من المقاييس القانونية للتوك توك مع حساب دقيق للمسافة/الزمن وتصميم محكم مضاد للتلاعب.", cats: ["b2b", "b2g"], icon: Calculator, color: "text-pink-400", colorHex: "#ec4899", iconBg: "bg-pink-500/10 border-pink-500/20", glow: "rgba(236,72,153,0.18)", specs: ["شاشة LED/LCD 5 أرقام", "وضع الأجرة الليلية الآلي", "معتمد من المقاييس القانونية", "هيكل ABS/معدن مقاوم للطقس"], image: `${BASE}/productdetails/upload/05072025/pd_22_main.png` },
];

type Product = typeof productsEn[0];

function FlipCard({ p, index, labels }: { p: Product; index: number; labels: { enquire: string; keyFeatures: string } }) {
  const [flipped, setFlipped] = useState(false);
  const Icon = p.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="h-[360px]"
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
        {/* FRONT */}
        <div
          className="dark-bg absolute inset-0 rounded-2xl overflow-hidden"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", background: `radial-gradient(ellipse 90% 80% at 50% 60%, ${p.glow.replace(/[\d.]+\)$/, "0.45)")}, rgba(6,14,28,0.98))`, border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="absolute top-0 left-0 right-0 h-[3px] z-10" style={{ background: p.colorHex }} />
          <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-contain p-6" loading="lazy" style={{ filter: "saturate(1.8) brightness(1.15) contrast(1.05) drop-shadow(0 12px 32px rgba(0,0,0,0.6))" }} />
          <div className="absolute bottom-0 left-0 right-0 px-4 py-3 flex items-center justify-between" style={{ background: "linear-gradient(to top, rgba(6,14,28,0.96) 70%, transparent)" }}>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: p.colorHex }}>{p.cats.join(" / ")}</span>
              <span className="text-white font-display font-bold text-sm leading-snug mt-0.5">{p.title}</span>
            </div>
            <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `${p.colorHex}18`, border: `1px solid ${p.colorHex}35` }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={p.colorHex} strokeWidth="2.5" strokeLinecap="round"><path d="M3 12a9 9 0 1 0 18 0" /><polyline points="15 8 19 12 23 8" /></svg>
            </div>
          </div>
          <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ boxShadow: `inset 0 0 60px ${p.glow.replace(/[\d.]+\)$/, "0.25)")}` }} />
        </div>

        {/* BACK */}
        <div
          className="dark-bg absolute inset-0 rounded-2xl flex flex-col p-5 gap-3"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)", background: "rgba(6,14,28,0.97)", border: `1px solid ${p.colorHex}28`, boxShadow: `0 0 40px ${p.glow.replace(/[\d.]+\)$/, "0.18)")}` }}
        >
          <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl" style={{ background: p.colorHex }} />
          <div className="flex items-center gap-3 pt-2">
            <div className={`p-2.5 rounded-xl border ${p.iconBg} ${p.color} flex-shrink-0`}><Icon className="w-5 h-5" /></div>
            <h3 className="font-display font-bold text-white text-sm leading-snug">{p.title}</h3>
          </div>
          <p className="text-white/55 text-[11px] leading-relaxed flex-shrink-0">{p.desc}</p>
          <div className="flex flex-col gap-1 flex-1">
            <span className="text-[9px] uppercase font-bold tracking-widest mb-1" style={{ color: `${p.colorHex}80` }}>{labels.keyFeatures}</span>
            {p.specs.map((s, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: p.colorHex }} />
                <span className="text-[11px] text-white/50">{s}</span>
              </div>
            ))}
          </div>
          <Link href="/contact" className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-white transition-all duration-250 hover:opacity-90 hover:-translate-y-0.5" style={{ background: p.colorHex, boxShadow: `0 6px 20px ${p.glow.replace(/[\d.]+\)$/, "0.4)")}` }}>
            {labels.enquire} <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProductsPage() {
  const { isAr } = useLang();
  const [activeCategory, setActiveCategory] = useState("all");

  const products = isAr ? productsAr : productsEn;

  const categoriesEn = [{ id: "all", name: "All Products" }, { id: "b2b", name: "B2B" }, { id: "b2c", name: "B2C" }, { id: "b2g", name: "B2G / Gov" }];
  const categoriesAr = [{ id: "all", name: "كل المنتجات" }, { id: "b2b", name: "B2B" }, { id: "b2c", name: "B2C" }, { id: "b2g", name: "B2G / حكومي" }];
  const categories = isAr ? categoriesAr : categoriesEn;

  const flipLabels = { enquire: isAr ? "الاستفسار الآن" : "Enquire Now", keyFeatures: isAr ? "الميزات الرئيسية" : "Key Features" };

  const filtered = products.filter((p) => activeCategory === "all" || p.cats.includes(activeCategory));

  const t = {
    badge:       isAr ? "أجهزتنا" : "Our Hardware",
    heading:     isAr ? "منتجات معتمدة تُشغّل" : "Certified Products That Power",
    span:        isAr ? "العمليات الفعلية" : "Real-World Operations",
    sub:         isAr ? "كل جهاز معتمد حكوميًا ومختبَر ميدانيًا ومبني لأقسى بيئات النقل والأسطول والسلامة في الهند." : "Every device is government-certified, field-tested, and built for India's toughest transport, fleet, and safety environments.",
    hoverHint:   isAr ? "مرّر فوق أي بطاقة لرؤية المواصفات الكاملة ←" : "Hover over any card to see full specifications →",
    tapHint:     isAr ? "اضغط على أي بطاقة لرؤية المواصفات الكاملة ←" : "Tap any card to see full specifications →",
    ctaTitle:    isAr ? "هل تحتاج حلاً مخصصاً لإنترنت الأشياء؟" : "Need a Custom IoT Solution?",
    ctaSub:      isAr ? "يبني مهندسونا حزمًا مخصصة من الأجهزة والبرمجيات للمؤسسات والحكومات ومشغّلي الأسطول. دعنا نناقش متطلباتك." : "Our engineers build tailored hardware-software bundles for enterprises, governments, and fleet operators. Let's discuss your requirements.",
    ctaBtn:      isAr ? "تحدث مع مهندسينا" : "Talk to Our Engineers",
  };

  return (
    <PageTransition>
      <div className="bg-[#050d14] pt-32 pb-24 text-white min-h-screen">

        {/* Hero */}
        <section className="relative py-16 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(62,189,239,0.06),transparent)]" />
          <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col gap-4">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit mx-auto">
              <span className="w-2 h-2 rounded-full bg-cyan-bright animate-pulse" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-bright">{t.badge}</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }} className="text-3xl sm:text-4xl md:text-6xl font-display font-extrabold tracking-tight leading-tight">
              {t.heading}<br className="hidden sm:block" />
              {" "}<span className="text-gradient">{t.span}</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.16 }} className="text-white/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              {t.sub}
              <span className="hidden md:block mt-1 text-white/35 text-xs">{t.hoverHint}</span>
              <span className="block md:hidden mt-1 text-white/35 text-xs">{t.tapHint}</span>
            </motion.p>
          </div>
        </section>

        {/* Filter Tabs */}
        <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.22 }} className="px-6 mb-12 max-w-7xl mx-auto flex items-center justify-center flex-wrap gap-3">
          {categories.map((cat) => (
            <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 border focus:outline-none ${activeCategory === cat.id ? "bg-cyan-bright border-cyan-bright text-navy-dark shadow-lg shadow-cyan-500/20" : "bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20"}`}>
              {cat.name}
            </button>
          ))}
        </motion.section>

        {/* Products Grid */}
        <section className="px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((p, i) => <FlipCard key={p.id} p={p} index={i} labels={flipLabels} />)}
          </div>
        </section>

        {/* Bottom CTA */}
        <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-4xl mx-auto px-6 mt-24">
          <div className="rounded-3xl p-10 md:p-14 text-center flex flex-col items-center gap-6" style={{ background: "rgba(62,189,239,0.04)", border: "1px solid rgba(62,189,239,0.12)" }}>
            <h2 className="text-2xl md:text-4xl font-display font-extrabold text-white">{t.ctaTitle}</h2>
            <p className="text-white/60 text-sm max-w-lg leading-relaxed">{t.ctaSub}</p>
            <Link href="/contact" className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-cyan-bright text-navy-dark font-bold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
              {t.ctaBtn} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.section>

      </div>
    </PageTransition>
  );
}
