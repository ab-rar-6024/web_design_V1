"use client";

import Link from "next/link";
import { ShieldCheck, Landmark, Construction, Eye, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { RoadComplianceVisual } from "@/components/PageVisuals";
import { useLang } from "@/hooks/useLang";

const offeringsEn = [
  { title: "AIS 140 Vehicle Tracking", desc: "Government-mandated VLTD devices with dual eSIM, SOS panic button, and live RTO telemetry streaming for all commercial transport.", icon: ShieldCheck, color: "text-amber-400", iconBg: "bg-amber-500/10 border-amber-500/20", tag: "Mandatory Compliance" },
  { title: "Permanent Highway Signs", desc: "Durable metal signage sheeted with high-reflectivity film for traffic management, highway routes, and speed advisories — EN standard.", icon: Landmark, color: "text-blue-400", iconBg: "bg-blue-500/10 border-blue-500/20", tag: "Road Infrastructure" },
  { title: "Traffic Safety Barriers", desc: "High-density traffic cones, impact barriers, and lane markers designed to manage hazardous zones on public roads and construction sites.", icon: Construction, color: "text-orange-400", iconBg: "bg-orange-500/10 border-orange-500/20", tag: "Road Safety" },
  { title: "Reflective Safety Jackets", desc: "High-visibility fluorescent warning jackets with reflective tape strips, compliant with EN standard protocols for field workers.", icon: ShieldCheck, color: "text-yellow-400", iconBg: "bg-yellow-500/10 border-yellow-500/20", tag: "Personnel Safety" },
  { title: "Automated Vehicle Testing Lane", desc: "Computerized RTO inspection tracks evaluating brakes, alignment, headlamps, and exhaust emissions for commercial fitness certificates.", icon: Eye, color: "text-purple-400", iconBg: "bg-purple-500/10 border-purple-500/20", tag: "RTO Automation" },
  { title: "Automated Driving Test Track", desc: "RTO-compliant test tracks equipped with tracking cameras and sensors to evaluate driving skills and automate license qualification.", icon: Landmark, color: "text-cyan-bright", iconBg: "bg-cyan-500/10 border-cyan-500/20", tag: "License Testing" },
];

const offeringsAr = [
  { title: "تتبع المركبات AIS 140", desc: "أجهزة VLTD المفروضة حكوميًا مع شريحة eSIM مزدوجة وزر ذعر SOS وبث بيانات RTO المباشرة لجميع وسائل النقل التجاري.", icon: ShieldCheck, color: "text-amber-400", iconBg: "bg-amber-500/10 border-amber-500/20", tag: "امتثال إلزامي" },
  { title: "لافتات الطرق السريعة الدائمة", desc: "لافتات معدنية متينة مكسوة بأفلام عالية الانعكاس لإدارة حركة المرور ومسارات الطرق السريعة وتوجيهات السرعة وفق المعيار الأوروبي.", icon: Landmark, color: "text-blue-400", iconBg: "bg-blue-500/10 border-blue-500/20", tag: "بنية تحتية للطرق" },
  { title: "حواجز سلامة المرور", desc: "مخاريط مرور عالية الكثافة وحواجز صدمات وعلامات مسارات مصممة لإدارة المناطق الخطرة على الطرق العامة ومواقع البناء.", icon: Construction, color: "text-orange-400", iconBg: "bg-orange-500/10 border-orange-500/20", tag: "سلامة الطرق" },
  { title: "سترات السلامة العاكسة", desc: "سترات تحذيرية فلورية عالية الوضوح مع أشرطة عاكسة، متوافقة مع بروتوكولات المعيار الأوروبي للعمال الميدانيين.", icon: ShieldCheck, color: "text-yellow-400", iconBg: "bg-yellow-500/10 border-yellow-500/20", tag: "سلامة الأفراد" },
  { title: "مسار فحص المركبات الآلي", desc: "مضامير فحص RTO محوسبة تُقيّم الفرامل والتوافق والمصابيح الأمامية وانبعاثات العادم لشهادات اللياقة التجارية.", icon: Eye, color: "text-purple-400", iconBg: "bg-purple-500/10 border-purple-500/20", tag: "أتمتة RTO" },
  { title: "مضمار اختبار القيادة الآلي", desc: "مضامير اختبار متوافقة مع RTO مجهزة بكاميرات تتبع وأجهزة استشعار لتقييم مهارات القيادة وأتمتة تأهيل الرخصة.", icon: Landmark, color: "text-cyan-bright", iconBg: "bg-cyan-500/10 border-cyan-500/20", tag: "اختبار الرخصة" },
];

const certifications = ["AIS 140", "ICAT", "BIS", "GARC", "ISO 9001", "Legal Metrology", "WPC", "M2M"];

const ctaTagsEn = ["RTO Compliant", "Tender Ready", "Ministry Approved", "Pan-India Deployment"];
const ctaTagsAr = ["متوافق مع RTO", "جاهز للعطاء", "معتمد وزاريًا", "نشر على مستوى الهند"];

export default function B2GSolutions() {
  const { isAr } = useLang();
  const offerings = isAr ? offeringsAr : offeringsEn;
  const ctaTags   = isAr ? ctaTagsAr : ctaTagsEn;

  const t = {
    badge:       isAr ? "شركة إلى حكومة" : "Business-to-Government",
    heading:     isAr ? "الامتثال الحكومي" : "Government Compliance",
    span:        isAr ? "أنظمة سلامة معتمدة" : "Certified Safety Systems",
    sub:         isAr ? "تقنية المرافق العامة الموثوقة المصممة لتجاوز معايير السلامة الحكومية. نصنع مضامير آلية متوافقة مع RTO وأجهزة AIS 140 وأنظمة إشارات طرق سريعة مبنية لعقود من المتانة." : "Trusted public utility technology built to exceed state safety standards. We manufacture RTO-compliant automated tracks, AIS 140 devices, and highway signaling systems built for decades of durability.",
    certifiedBy: isAr ? "معتمد من:" : "Certified by:",
    enquire:     isAr ? "الاستفسار عن الحل الحكومي" : "Enquire B2G Solution",
    ctaTitle:    isAr ? "الشراكة مع APM للمشاريع الحكومية" : "Partner with APM for Government Projects",
    ctaSub:      isAr ? "نعمل مباشرة مع مكاتب RTO والشركات البلدية وإدارات النقل لنشر بنية تحتية للسلامة معتمدة ومتوافقة على نطاق واسع." : "We work directly with RTOs, municipal corporations, and transport departments to deploy compliant, certified safety infrastructure at scale.",
    ctaBtn:      isAr ? "طلب عرض حكومي" : "Request B2G Proposal",
  };

  return (
    <PageTransition>
      <div className="bg-[#050d14] pt-32 pb-24 text-white min-h-screen">
        {/* Hero */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(245,158,11,0.06),transparent)]" />
          <div className="max-w-5xl mx-auto flex flex-col gap-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 380, damping: 18 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 w-fit mx-auto"
            >
              <Landmark className="w-4 h-4 text-amber-400" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400">{t.badge}</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl md:text-6xl font-display font-extrabold tracking-tight leading-tight"
            >
              {t.heading}<br className="hidden sm:block" />
              {" "}<span className="text-gradient">{t.span}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, filter: "blur(12px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="text-white/65 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed"
            >
              {t.sub}
            </motion.p>
          </div>
        </section>

        <section className="px-6 max-w-4xl mx-auto pb-12 flex items-center justify-center">
          <RoadComplianceVisual />
        </section>

        {/* Certifications strip */}
        <motion.section
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.42 }}
          className="px-6 max-w-5xl mx-auto mb-12"
        >
          <div
            className="rounded-2xl p-5 flex flex-wrap items-center justify-center gap-3"
            style={{ background: "rgba(245,158,11,0.04)", border: "1px solid rgba(245,158,11,0.12)" }}
          >
            <span className="text-xs text-white/40 uppercase tracking-wider mr-2">{t.certifiedBy}</span>
            {certifications.map((c) => (
              <span key={c} className="px-3 py-1 rounded-lg bg-white/5 border border-white/8 text-xs font-bold text-amber-400/80">{c}</span>
            ))}
          </div>
        </motion.section>

        {/* Grid */}
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
                  className="glass-panel p-7 rounded-2xl border border-white/5 hover:border-amber-500/20 hover:-translate-y-1.5 hover:shadow-[0_0_40px_rgba(245,158,11,0.05)] transition-all duration-300 group flex flex-col gap-4"
                >
                  <div className="flex items-start justify-between">
                    <div className={`p-3.5 rounded-xl border ${o.iconBg} ${o.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] font-bold text-white/30 uppercase tracking-widest bg-white/5 px-2 py-1 rounded leading-tight">{o.tag}</span>
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <h3 className={`text-base font-display font-bold text-white group-hover:${o.color} transition-colors duration-300`}>{o.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{o.desc}</p>
                  </div>
                  <div className="border-t border-white/5 pt-3 mt-auto">
                    <Link href="/contact" className={`text-xs font-semibold ${o.color} flex items-center gap-1 hover:gap-2 transition-all duration-200`}>
                      {t.enquire} <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
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
          <div className="glass-panel p-8 md:p-12 rounded-3xl border border-amber-500/10 bg-gradient-to-r from-amber-900/10 via-transparent to-transparent flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white">{t.ctaTitle}</h3>
              <p className="text-white/55 text-sm max-w-lg leading-relaxed">{t.ctaSub}</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {ctaTags.map((tag) => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">{tag}</span>
                ))}
              </div>
            </div>
            <Link
              href="/contact"
              className="group px-7 py-3.5 rounded-xl font-bold bg-amber-500 text-navy-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 flex items-center gap-2 shrink-0"
            >
              {t.ctaBtn} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.section>
      </div>
    </PageTransition>
  );
}
