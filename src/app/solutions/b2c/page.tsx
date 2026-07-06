"use client";

import Link from "next/link";
import { Cpu, ShieldCheck, Eye, Video, Settings, Sparkles, Navigation, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { DeviceShowcaseVisual } from "@/components/PageVisuals";
import { useLang } from "@/hooks/useLang";

const productsEn = [
  { title: "Speed Limiting Devices", desc: "Control vehicle speed for safety, fuel efficiency, and regulatory compliance. Calibrated for passenger cars, taxis, and personal vehicles.", icon: Settings, color: "text-purple-400", iconBg: "bg-purple-500/10 border-purple-500/20", tag: "Safety" },
  { title: "Rover Elite Plus Tracker", desc: "Enhanced individual GPS tracking with instant app alerts, geo-fence notifications, anti-theft alarms, and full engine diagnostics.", icon: Cpu, color: "text-blue-400", iconBg: "bg-blue-500/10 border-blue-500/20", tag: "Tracking" },
  { title: "4G/Wi-Fi Vehicle Camera", desc: "Real-time dual-facing video monitoring for personal security, cabin surveillance, dashcam crash logs, and AI driver alerts.", icon: Video, color: "text-rose-400", iconBg: "bg-rose-500/10 border-rose-500/20", tag: "Surveillance" },
  { title: "Vehicle Conspicuity Tape", desc: "EN-standard reflective tapes that enhance visibility in low-light and night driving, dramatically reducing rear-end collision risk.", icon: ShieldCheck, color: "text-amber-400", iconBg: "bg-amber-500/10 border-amber-500/20", tag: "Safety" },
  { title: "Reverse Parking System", desc: "High-precision bumper sensors with dashboard display cameras assisting drivers to park safely and prevent rear-end collisions.", icon: Eye, color: "text-teal-400", iconBg: "bg-teal-500/10 border-teal-500/20", tag: "Parking" },
  { title: "Auto Dipper Beam Control", desc: "Automatically switches headlights from high to low beam when detecting oncoming traffic — ensures night safety on highways.", icon: Sparkles, color: "text-cyan-bright", iconBg: "bg-cyan-500/10 border-cyan-500/20", tag: "Lighting" },
  { title: "Auto Fare Meters", desc: "Accurately calculates travel fares based on distance-time metrics, ensuring fair billing for private cabs and auto rickshaws.", icon: Navigation, color: "text-emerald-400", iconBg: "bg-emerald-500/10 border-emerald-500/20", tag: "Metering" },
];

const productsAr = [
  { title: "أجهزة تحديد السرعة", desc: "التحكم في سرعة المركبة للسلامة وكفاءة الوقود والامتثال التنظيمي. مُعايَرة لسيارات الركاب والتاكسي والمركبات الشخصية.", icon: Settings, color: "text-purple-400", iconBg: "bg-purple-500/10 border-purple-500/20", tag: "سلامة" },
  { title: "جهاز تتبع Rover Elite Plus", desc: "تتبع GPS فردي مُحسَّن مع تنبيهات فورية عبر التطبيق وإشعارات التحصين الجغرافي وإنذارات مكافحة السرقة والتشخيص الكامل للمحرك.", icon: Cpu, color: "text-blue-400", iconBg: "bg-blue-500/10 border-blue-500/20", tag: "تتبع" },
  { title: "كاميرا مركبة 4G/Wi-Fi", desc: "مراقبة فيديو ثنائية الاتجاه في الوقت الفعلي للأمن الشخصي ومراقبة المقصورة وسجلات الاصطدام وتنبيهات السائق بالذكاء الاصطناعي.", icon: Video, color: "text-rose-400", iconBg: "bg-rose-500/10 border-rose-500/20", tag: "مراقبة" },
  { title: "شريط عاكس للمركبات", desc: "أشرطة عاكسة وفق المعيار الأوروبي تعزز الرؤية في ظروف الإضاءة المنخفضة والقيادة الليلية، وتقلل بشكل كبير من خطر الاصطدام من الخلف.", icon: ShieldCheck, color: "text-amber-400", iconBg: "bg-amber-500/10 border-amber-500/20", tag: "سلامة" },
  { title: "نظام ركن السيارة العكسي", desc: "أجهزة استشعار مصدات عالية الدقة مع كاميرات عرض لوحة تحكم تساعد السائقين على الركن بأمان ومنع الاصطدامات الخلفية.", icon: Eye, color: "text-teal-400", iconBg: "bg-teal-500/10 border-teal-500/20", tag: "ركن" },
  { title: "التحكم الآلي في أضواء السيارة", desc: "يُحوّل الأضواء الأمامية تلقائيًا من الإضاءة العالية إلى المنخفضة عند الكشف عن السيارات المقابلة — يضمن السلامة الليلية على الطرق السريعة.", icon: Sparkles, color: "text-cyan-bright", iconBg: "bg-cyan-500/10 border-cyan-500/20", tag: "إضاءة" },
  { title: "عدادات الأجرة الآلية", desc: "تحسب أجرة السفر بدقة بناءً على مقاييس المسافة والزمن، مما يضمن الفواتير العادلة لسيارات الأجرة الخاصة والتوك توك.", icon: Navigation, color: "text-emerald-400", iconBg: "bg-emerald-500/10 border-emerald-500/20", tag: "قياس" },
];

export default function B2CSolutions() {
  const { isAr } = useLang();
  const products = isAr ? productsAr : productsEn;

  const t = {
    badge:    isAr ? "شركة إلى مستهلك" : "Business-to-Consumer",
    heading:  isAr ? "تقنية شخصية وأسطول" : "Personal & Fleet Tech",
    span:     isAr ? "لكل سائق" : "For Every Driver",
    sub:      isAr ? "احمِ عائلتك وتتبع مركبتك الشخصية واستمتع بأتمتة السلامة الذكية. منصات APM الاستهلاكية مصممة لتجارب رقمية سلسة وقابلة للتوسع." : "Protect your family, track your personal vehicle, and enjoy smart safety automations. APM's consumer platforms are designed for seamless, scalable digital experiences across all devices.",
    enquire:  isAr ? "الاستفسار عن المنتج" : "Enquire Product",
    ctaTitle: isAr ? "احمِ ما يهمك أكثر" : "Protect What Matters Most",
    ctaSub:   isAr ? "كل جهاز استهلاكي من APM معتمد بشكل فردي ويأتي مع دعم التثبيت في جميع أنحاء الهند ومساعدة الموزعين على مدار الساعة." : "Every APM consumer device is individually certified and comes with pan-India installation support and 24/7 dealer assistance.",
    ctaBtn:   isAr ? "احصل على استشارة مجانية" : "Get a Free Consultation",
  };

  return (
    <PageTransition>
      <div className="bg-[#050d14] pt-32 pb-24 text-white min-h-screen">
        {/* Hero */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(16,185,129,0.07),transparent)]" />
          <div className="max-w-5xl mx-auto flex flex-col gap-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 380, damping: 18 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 w-fit mx-auto"
            >
              <Cpu className="w-4 h-4 text-emerald-400" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400">{t.badge}</span>
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

        <section className="px-6 max-w-4xl mx-auto pb-16 flex items-center justify-center">
          <DeviceShowcaseVisual />
        </section>

        {/* Products Grid */}
        <section className="px-6 max-w-7xl mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {products.map((p, idx) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-emerald-500/20 hover:-translate-y-1.5 hover:shadow-[0_0_40px_rgba(16,185,129,0.05)] transition-all duration-300 group flex flex-col gap-4"
                >
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-xl border ${p.iconBg} ${p.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] font-bold text-white/30 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">
                      {p.tag}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <h3 className={`text-base font-display font-bold text-white group-hover:${p.color} transition-colors duration-300`}>
                      {p.title}
                    </h3>
                    <p className="text-white/55 text-xs leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="border-t border-white/5 pt-3 mt-auto">
                    <Link href="/contact" className={`text-xs font-semibold ${p.color} flex items-center gap-1 hover:gap-2 transition-all duration-200`}>
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
          className="px-6 max-w-4xl mx-auto mt-20"
        >
          <div
            className="rounded-3xl p-10 text-center flex flex-col items-center gap-5"
            style={{ background: "rgba(16,185,129,0.04)", border: "1px solid rgba(16,185,129,0.12)" }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-extrabold text-white">{t.ctaTitle}</h2>
            <p className="text-white/55 text-sm max-w-md leading-relaxed">{t.ctaSub}</p>
            <Link href="/contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-500 text-white font-bold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300">
              {t.ctaBtn} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.section>
      </div>
    </PageTransition>
  );
}
