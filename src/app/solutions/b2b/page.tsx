"use client";

import Link from "next/link";
import { Users, Truck, Cpu, Scale, Settings, Radio, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { FleetDashboardVisual } from "@/components/PageVisuals";
import { useLang } from "@/hooks/useLang";

const offeringsEn = [
  {
    title: "Advanced Fleet Telematics",
    desc: "Gain absolute control over logistics operations with real-time GPS tracking, geofencing, route compliance, and automated scheduling dashboards.",
    icon: Truck, color: "text-blue-400", iconBg: "bg-blue-500/10 border-blue-500/20",
    features: ["Live vehicle location tracking", "Geofence boundary alerts", "Route compliance reports", "Driver behavior scoring"],
  },
  {
    title: "Axle Load & Payload Monitoring",
    desc: "Prevent overloading penalties and protect vehicle wear-and-tear with calibrated wireless weight sensors reporting directly to cloud dashboards.",
    icon: Scale, color: "text-indigo-400", iconBg: "bg-indigo-500/10 border-indigo-500/20",
    features: ["Wireless axle load sensors", "Real-time weight display", "Overload alert triggers", "Anti-tamper audit logs"],
  },
  {
    title: "Fuel & Engine Diagnostics",
    desc: "Monitor fuel consumption trends, detect sudden drop-offs indicative of theft, and track battery/engine temperatures using OBD analytics.",
    icon: Cpu, color: "text-cyan-bright", iconBg: "bg-cyan-500/10 border-cyan-500/20",
    features: ["OBD-II data extraction", "Fuel theft detection alerts", "Engine temperature logging", "Battery health monitoring"],
  },
  {
    title: "Speed Limiting Devices (SLD)",
    desc: "Calibrated governors designed to limit speeds mechanically or electronically, ensuring vehicle safety, fuel savings, and RTO regulatory compliance.",
    icon: Settings, color: "text-purple-400", iconBg: "bg-purple-500/10 border-purple-500/20",
    features: ["Fly-by-wire throttle control", "Mechanical fuel bypass mode", "Tamper-proof physical seal", "Ministry approved certification"],
  },
  {
    title: "AIS 140 GPS Compliance",
    desc: "Government-mandated VLTD solutions with dual eSIM profiling, SOS panic button, and real-time telemetry connected to state RTO command centers.",
    icon: Radio, color: "text-amber-400", iconBg: "bg-amber-500/10 border-amber-500/20",
    features: ["Dual eSIM profile support", "SOS emergency panic button", "CDAC certified hardware", "RTO command center link"],
  },
  {
    title: "4G Vehicle Surveillance",
    desc: "Dual-camera DVR systems with AI-ADAS driver monitoring, live 4G cloud streaming, and loop recording for corporate fleet audit compliance.",
    icon: Users, color: "text-rose-400", iconBg: "bg-rose-500/10 border-rose-500/20",
    features: ["Dual-facing camera setup", "Live 4G video streaming", "AI driver drowsiness alert", "G-sensor crash recording"],
  },
];

const offeringsAr = [
  {
    title: "بيانات الأسطول المتقدمة",
    desc: "احصل على سيطرة كاملة على عمليات الخدمات اللوجستية مع التتبع اللحظي بنظام GPS والحدود الجغرافية والامتثال للمسارات ولوحات الجدولة الآلية.",
    icon: Truck, color: "text-blue-400", iconBg: "bg-blue-500/10 border-blue-500/20",
    features: ["تتبع موقع المركبة مباشرة", "تنبيهات حدود التحصين الجغرافي", "تقارير الامتثال للمسار", "تقييم سلوك السائق"],
  },
  {
    title: "مراقبة حمولة المحور",
    desc: "امنع غرامات التحميل الزائد وحمِّ المركبة من التآكل باستخدام أجهزة استشعار الوزن اللاسلكية المعايَرة التي ترفع تقاريرها إلى لوحات التحكم السحابية.",
    icon: Scale, color: "text-indigo-400", iconBg: "bg-indigo-500/10 border-indigo-500/20",
    features: ["أجهزة استشعار تحميل المحور اللاسلكية", "عرض الوزن في الوقت الفعلي", "مشغّلات تنبيه التحميل الزائد", "سجلات تدقيق مضادة للتلاعب"],
  },
  {
    title: "تشخيصات الوقود والمحرك",
    desc: "راقب اتجاهات استهلاك الوقود واكتشف الانخفاضات المفاجئة التي تشير إلى السرقة وتتبع درجات حرارة البطارية والمحرك باستخدام تحليلات OBD.",
    icon: Cpu, color: "text-cyan-bright", iconBg: "bg-cyan-500/10 border-cyan-500/20",
    features: ["استخراج بيانات OBD-II", "تنبيهات الكشف عن سرقة الوقود", "تسجيل درجة حرارة المحرك", "مراقبة صحة البطارية"],
  },
  {
    title: "أجهزة تحديد السرعة (SLD)",
    desc: "حوّامات معايَرة مصممة للحد من السرعات ميكانيكيًا أو إلكترونيًا، لضمان سلامة المركبة وتوفير الوقود والامتثال التنظيمي لـ RTO.",
    icon: Settings, color: "text-purple-400", iconBg: "bg-purple-500/10 border-purple-500/20",
    features: ["التحكم في عجلة القيادة عن بُعد", "وضع تجاوز الوقود الميكانيكي", "ختم مضاد للتلاعب", "شهادة وزارية معتمدة"],
  },
  {
    title: "الامتثال لنظام GPS وفق AIS 140",
    desc: "حلول VLTD المفروضة حكوميًا مع تنشيط الشريحة المزدوجة وزر ذعر SOS والاتصال اللحظي بمراكز قيادة RTO الولائية.",
    icon: Radio, color: "text-amber-400", iconBg: "bg-amber-500/10 border-amber-500/20",
    features: ["دعم ملف الشريحة المزدوجة", "زر ذعر طوارئ SOS", "أجهزة معتمدة من CDAC", "رابط مركز قيادة RTO"],
  },
  {
    title: "مراقبة المركبة بالجيل الرابع",
    desc: "أنظمة DVR ذات كاميرا مزدوجة مع مراقبة السائق بالذكاء الاصطناعي ADAS والبث السحابي المباشر بالجيل الرابع وتسجيل حلقي لامتثال تدقيق الأسطول.",
    icon: Users, color: "text-rose-400", iconBg: "bg-rose-500/10 border-rose-500/20",
    features: ["إعداد كاميرا ذات اتجاهين", "بث فيديو مباشر بالجيل الرابع", "تنبيه النعاس بالذكاء الاصطناعي", "تسجيل الاصطدام بجهاز G-sensor"],
  },
];

const resultsEn = [
  { value: "40%", label: "Fuel Cost Reduction" },
  { value: "60%", label: "Accident Rate Drop" },
  { value: "100%", label: "AIS 140 Compliance" },
  { value: "1,600+", label: "Partner Dealers" },
];
const resultsAr = [
  { value: "40%", label: "تخفيض تكاليف الوقود" },
  { value: "60%", label: "انخفاض معدل الحوادث" },
  { value: "100%", label: "الامتثال لـ AIS 140" },
  { value: "1,600+", label: "شركاء الموزعين" },
];

export default function B2BSolutions() {
  const { isAr } = useLang();
  const offerings = isAr ? offeringsAr : offeringsEn;
  const results   = isAr ? resultsAr : resultsEn;

  const t = {
    badge:    isAr ? "شركة إلى شركة" : "Business-to-Business",
    heading:  isAr ? "وسّع عملياتك مع" : "Scale Operations with",
    span:     isAr ? "حلول إنترنت الأشياء المتميزة للشركات" : "Premium B2B IoT Solutions",
    sub:      isAr ? "تحسين أسطولك الشركاتي وتبسيط الخدمات اللوجستية وإنفاذ الامتثال. تُقدم أجهزتنا المخصصة وتكاملات لوحة التحكم عائدًا ملموسًا على الاستثمار." : "Optimize your corporate fleet, streamline logistics, and enforce driver compliance. Our custom hardware and dashboard integrations deliver measurable ROI for modern transport operations.",
    ctaTitle: isAr ? "هل أنت مستعد لتحسين أسطولك؟" : "Ready to Optimize Your Fleet?",
    ctaSub:   isAr ? "سيصمم مهندسو إنترنت الأشياء لدينا حزمة أجهزة-برمجيات مخصصة تتكامل مع نظام ERP الحالي وتُحقق عائدًا تشغيليًا ملموسًا." : "Our IoT architects will design a custom hardware-software bundle that integrates directly with your existing ERP and delivers measurable operational ROI.",
    ctaBtn:   isAr ? "الاستفسار عن العروض B2B" : "Enquire B2B Offerings",
  };

  return (
    <PageTransition>
      <div className="bg-[#050d14] pt-32 pb-24 text-white min-h-screen">
        {/* Hero */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(59,130,246,0.07),transparent)]" />
          <div className="max-w-5xl mx-auto flex flex-col gap-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 w-fit mx-auto"
            >
              <Users className="w-4 h-4 text-blue-400" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-blue-400">{t.badge}</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-3xl sm:text-4xl md:text-6xl font-display font-extrabold tracking-tight leading-tight"
            >
              {t.heading}<br className="hidden sm:block" />
              {" "}<span className="text-gradient-cyan-blue">{t.span}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-white/65 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed"
            >
              {t.sub}
            </motion.p>
          </div>
        </section>

        {/* Result metrics */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="px-6 max-w-4xl mx-auto mb-16"
        >
          <div
            className="rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
            style={{ background: "rgba(59,130,246,0.04)", border: "1px solid rgba(59,130,246,0.12)" }}
          >
            {results.map((r, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-3xl md:text-4xl font-display font-extrabold text-blue-400">{r.value}</span>
                <span className="text-xs text-white/50 uppercase tracking-wider">{r.label}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Fleet Dashboard Visual */}
        <section className="px-6 max-w-5xl mx-auto pb-16">
          <FleetDashboardVisual />
        </section>

        {/* Offerings Grid */}
        <section className="px-6 max-w-7xl mx-auto py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((o, idx) => {
              const Icon = o.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="glass-panel p-7 rounded-2xl border border-white/5 hover:border-blue-500/20 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(59,130,246,0.06)] transition-all duration-300 group flex flex-col gap-4"
                >
                  <div className={`p-3.5 rounded-xl border ${o.iconBg} ${o.color} w-fit group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-display font-bold text-white group-hover:${o.color} transition-colors duration-300 mb-2`}>
                      {o.title}
                    </h3>
                    <p className="text-white/55 text-sm leading-relaxed">{o.desc}</p>
                  </div>
                  <ul className="flex flex-col gap-1.5 mt-auto pt-4 border-t border-white/5">
                    {o.features.map((f, fi) => (
                      <li key={fi} className="flex items-center gap-2 text-xs text-white/45">
                        <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 ${o.color}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="px-6 max-w-5xl mx-auto mt-20"
        >
          <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/5 bg-gradient-to-r from-blue-900/10 via-transparent to-transparent flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white">{t.ctaTitle}</h3>
              <p className="text-white/55 text-sm max-w-lg leading-relaxed">{t.ctaSub}</p>
            </div>
            <Link
              href="/contact"
              className="group px-7 py-3.5 rounded-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-bright text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex items-center gap-2 shrink-0"
            >
              {t.ctaBtn} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.section>
      </div>
    </PageTransition>
  );
}
