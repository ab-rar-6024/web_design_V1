"use client";

import Link from "next/link";
import { Cloud, Server, ShieldAlert, Navigation, Settings, LineChart, ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { SoftwarePlatformVisual } from "@/components/PageVisuals";
import { useLang } from "@/hooks/useLang";

const suitesEn = [
  { title: "APM FleetEye", subtitle: "Fleet Tracking Control Center", desc: "Delivers live telemetry overlay, route geofencing, fuel status dashboards, driver scoring, and comprehensive historical reports.", icon: Navigation, color: "text-cyan-bright", iconBg: "bg-cyan-500/10 border-cyan-500/20", glowColor: "rgba(62,189,239,0.08)", features: ["Live GPS telemetry map", "Geofence boundary alerts", "Driver behavior analytics", "Fuel consumption reports"] },
  { title: "APM One", subtitle: "Enterprise ERP & CRM", desc: "Customized ERP & CRM platforms that unify operations, customer relationship tools, and database records into one secure cloud dashboard.", icon: Server, color: "text-blue-400", iconBg: "bg-blue-500/10 border-blue-500/20", glowColor: "rgba(59,130,246,0.08)", features: ["Unified operations dashboard", "Customer relationship tools", "Automated workflows", "Role-based access control"] },
  { title: "APM EduLink", subtitle: "School Safety Platform", desc: "Comprehensive school management dashboard integrating student safety alerts, live bus GPS tracking, and parent communication tools.", icon: ShieldAlert, color: "text-emerald-400", iconBg: "bg-emerald-500/10 border-emerald-500/20", glowColor: "rgba(16,185,129,0.08)", features: ["Live school bus tracking", "Parent SMS/app alerts", "Student boarding verification", "Attendance management"] },
  { title: "APM Threadline", subtitle: "Industrial Safety AI", desc: "Industrial safety dashboard running real-time AI computer vision models to detect workplace hazards and manage facility risk compliance.", icon: Settings, color: "text-purple-400", iconBg: "bg-purple-500/10 border-purple-500/20", glowColor: "rgba(168,85,247,0.08)", features: ["AI hazard detection CV", "PPE compliance monitoring", "Incident report automation", "Real-time safety scoring"] },
  { title: "APM SmartOps", subtitle: "IoT Operations Platform", desc: "Combines on-field IoT hardware nodes with cloud analytics to optimize warehousing, assembly lines, and cargo distribution operations.", icon: Cloud, color: "text-indigo-400", iconBg: "bg-indigo-500/10 border-indigo-500/20", glowColor: "rgba(99,102,241,0.08)", features: ["IoT sensor data ingestion", "Warehouse process tracking", "Assembly line monitoring", "Supply chain dashboards"] },
  { title: "APM TrackIQ", subtitle: "CAN Bus Analytics", desc: "Real-time telemetry and diagnostic metrics processor converting raw CAN bus data into clear, actionable asset-health dashboards.", icon: LineChart, color: "text-rose-400", iconBg: "bg-rose-500/10 border-rose-500/20", glowColor: "rgba(244,63,94,0.08)", features: ["CAN bus data decoding", "Real-time asset health", "Predictive maintenance alerts", "Custom telemetry reports"] },
];

const suitesAr = [
  { title: "APM FleetEye", subtitle: "مركز تحكم تتبع الأسطول", desc: "يُقدم طبقة بيانات مباشرة وتحصين جغرافي للمسار ولوحات حالة الوقود وتقييم السائقين وتقارير تاريخية شاملة.", icon: Navigation, color: "text-cyan-bright", iconBg: "bg-cyan-500/10 border-cyan-500/20", glowColor: "rgba(62,189,239,0.08)", features: ["خريطة بيانات GPS المباشرة", "تنبيهات حدود التحصين الجغرافي", "تحليلات سلوك السائق", "تقارير استهلاك الوقود"] },
  { title: "APM One", subtitle: "ERP وCRM للمؤسسات", desc: "منصات ERP وCRM مخصصة تُوحّد العمليات وأدوات علاقات العملاء وسجلات قواعد البيانات في لوحة تحكم سحابية آمنة واحدة.", icon: Server, color: "text-blue-400", iconBg: "bg-blue-500/10 border-blue-500/20", glowColor: "rgba(59,130,246,0.08)", features: ["لوحة عمليات موحدة", "أدوات علاقات العملاء", "سير عمل آلي", "التحكم في الوصول حسب الدور"] },
  { title: "APM EduLink", subtitle: "منصة سلامة المدارس", desc: "لوحة إدارة مدرسية شاملة تدمج تنبيهات سلامة الطلاب وتتبع GPS المباشر للحافلات وأدوات التواصل مع أولياء الأمور.", icon: ShieldAlert, color: "text-emerald-400", iconBg: "bg-emerald-500/10 border-emerald-500/20", glowColor: "rgba(16,185,129,0.08)", features: ["تتبع حافلة المدرسة مباشرة", "تنبيهات SMS/تطبيق لأولياء الأمور", "التحقق من صعود الطلاب", "إدارة الحضور"] },
  { title: "APM Threadline", subtitle: "الذكاء الاصطناعي للسلامة الصناعية", desc: "لوحة سلامة صناعية تشغّل نماذج رؤية حاسوبية بالذكاء الاصطناعي في الوقت الفعلي للكشف عن مخاطر مكان العمل وإدارة امتثال المنشأة.", icon: Settings, color: "text-purple-400", iconBg: "bg-purple-500/10 border-purple-500/20", glowColor: "rgba(168,85,247,0.08)", features: ["رؤية حاسوبية للكشف عن المخاطر", "مراقبة الامتثال لمعدات الوقاية", "أتمتة تقارير الحوادث", "تقييم السلامة في الوقت الفعلي"] },
  { title: "APM SmartOps", subtitle: "منصة عمليات إنترنت الأشياء", desc: "يجمع بين عقد أجهزة إنترنت الأشياء الميدانية وتحليلات السحابة لتحسين عمليات التخزين وخطوط التجميع وتوزيع البضائع.", icon: Cloud, color: "text-indigo-400", iconBg: "bg-indigo-500/10 border-indigo-500/20", glowColor: "rgba(99,102,241,0.08)", features: ["استيعاب بيانات أجهزة الاستشعار", "تتبع عمليات المستودع", "مراقبة خط التجميع", "لوحات سلسلة التوريد"] },
  { title: "APM TrackIQ", subtitle: "تحليلات ناقل CAN", desc: "معالج بيانات الاتصالات والتشخيص في الوقت الفعلي يحوّل بيانات ناقل CAN الخام إلى لوحات صحة الأصول الواضحة وقابلة للتنفيذ.", icon: LineChart, color: "text-rose-400", iconBg: "bg-rose-500/10 border-rose-500/20", glowColor: "rgba(244,63,94,0.08)", features: ["فك تشفير بيانات ناقل CAN", "صحة الأصول في الوقت الفعلي", "تنبيهات الصيانة التنبؤية", "تقارير بيانات مخصصة"] },
];

const tagsEn = ["Cloud-Native", "Real-Time Analytics", "API Integration", "Custom Dashboards", "Mobile-First"];
const tagsAr  = ["قائم على السحابة", "تحليلات فورية", "تكامل API", "لوحات مخصصة", "أولوية الجوال"];

export default function SoftwareSolutions() {
  const { isAr } = useLang();
  const suites = isAr ? suitesAr : suitesEn;
  const tags   = isAr ? tagsAr : tagsEn;

  const t = {
    badge:    isAr ? "كود وسحابة" : "Code & Cloud",
    heading:  isAr ? "تحليلات الذكاء الاصطناعي و" : "AI-Powered Analytics &",
    span:     isAr ? "منصات الأسطول السحابية" : "Fleet Cloud Platforms",
    sub:      isAr ? "اربط أجهزة التتبع الفعلية ببرمجيات متطورة. تجمع لوحاتنا المخصصة تشخيصات GPS وسجلات أجهزة الاستشعار وبيانات الاتصالات في ذكاء تجاري واضح وقابل للتنفيذ." : "Unify your physical tracking devices with state-of-the-art software. Our custom dashboards compile GPS diagnostics, sensor logs, and telemetry into clear, actionable business intelligence.",
    platform: isAr ? "منصة" : "Platform",
    reqDemo:  isAr ? "طلب عرض" : "Request Demo",
    ctaTitle: isAr ? "دمج الأجهزة مع البرمجيات" : "Integrate Hardware with Software",
    ctaSub:   isAr ? "تتواصل منصاتنا مباشرة مع أجهزة GPS وإنترنت الأشياء الفعلية من APM — دون الحاجة إلى برمجيات وسيطة. خط بيانات موحد واحد من الجهاز إلى لوحة التحكم." : "Our platforms communicate directly with APM's physical GPS and IoT devices — no middleware needed. One unified data pipeline from device to dashboard.",
    ctaBtn:   isAr ? "جدولة عرض" : "Schedule a Demo",
  };

  return (
    <PageTransition>
      <div className="bg-[#050d14] pt-32 pb-24 text-white min-h-screen">
        {/* Hero */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(147,51,234,0.07),transparent)]" />
          <div className="max-w-5xl mx-auto flex flex-col gap-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 w-fit mx-auto"
            >
              <Cloud className="w-4 h-4 text-purple-400" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-purple-400">{t.badge}</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-3xl sm:text-4xl md:text-6xl font-display font-extrabold tracking-tight leading-tight"
            >
              {t.heading}<br className="hidden sm:block" />
              {" "}<span className="text-gradient">{t.span}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-white/65 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed"
            >
              {t.sub}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.28 }}
              className="flex items-center justify-center gap-3 flex-wrap"
            >
              {tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/5 border border-white/10 text-white/60">{tag}</span>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="px-6 max-w-5xl mx-auto pb-16">
          <SoftwarePlatformVisual />
        </section>

        {/* Software Grid */}
        <section className="px-6 max-w-7xl mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {suites.map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="glass-panel p-7 rounded-2xl border border-white/5 hover:border-purple-500/20 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col gap-4"
                  style={{ "--glow": s.glowColor } as React.CSSProperties}
                >
                  <div className="flex items-start justify-between">
                    <div className={`p-3.5 rounded-xl border ${s.iconBg} ${s.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-white/25 bg-white/5 px-2 py-1 rounded">{t.platform}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className={`text-lg font-display font-extrabold text-white group-hover:${s.color} transition-colors duration-300`}>{s.title}</h3>
                    <p className="text-xs font-semibold text-white/35 uppercase tracking-wider">{s.subtitle}</p>
                  </div>
                  <p className="text-white/55 text-sm leading-relaxed flex-1">{s.desc}</p>
                  <ul className="flex flex-col gap-1.5 pt-4 border-t border-white/5">
                    {s.features.map((f, fi) => (
                      <li key={fi} className="flex items-center gap-2 text-xs text-white/40">
                        <Zap className={`w-3 h-3 flex-shrink-0 ${s.color}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-3 mt-auto">
                    <Link href="/contact" className={`text-xs font-semibold ${s.color} flex items-center gap-1 hover:gap-2 transition-all duration-200`}>
                      {t.reqDemo} <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Integration CTA */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="px-6 max-w-5xl mx-auto mt-20"
        >
          <div
            className="rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
            style={{ background: "rgba(147,51,234,0.04)", border: "1px solid rgba(147,51,234,0.12)" }}
          >
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white">{t.ctaTitle}</h3>
              <p className="text-white/55 text-sm max-w-lg leading-relaxed">{t.ctaSub}</p>
            </div>
            <Link
              href="/contact"
              className="group px-7 py-3.5 rounded-xl font-bold bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex items-center gap-2 shrink-0"
            >
              {t.ctaBtn} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.section>
      </div>
    </PageTransition>
  );
}
