"use client";

import Link from "next/link";
import { BookOpen, Calendar, Clock, ArrowRight, ShieldCheck, Gauge, Cpu, Video, Navigation, Construction } from "lucide-react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { useLang } from "@/hooks/useLang";

const blogs = [
  {
    titleEn: "Understanding AIS 140 Regulations for Indian Fleet Management",
    titleAr: "فهم لوائح AIS 140 لإدارة الأساطيل في الهند",
    descEn: "An in-depth guide on government-mandated tracking hardware, panic buttons, dual eSIM requirements, and full compliance criteria for logistics fleets operating in India.",
    descAr: "دليل شامل حول أجهزة التتبع الحكومية المعتمدة وأزرار الذعر ومتطلبات الشريحة المزدوجة ومعايير الامتثال الكاملة لأساطيل الخدمات اللوجستية في الهند.",
    date: "June 15, 2026",
    readTime: "5 min read",
    readTimeAr: "5 دقائق قراءة",
    tag: "Compliance",
    tagAr: "امتثال",
    tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    heroIcon: ShieldCheck, heroGrad: "from-amber-600/20 to-amber-900/10", heroIconColor: "#f59e0b",
  },
  {
    titleEn: "How Automated Speed Limiters Prevent Highway Accidents",
    titleAr: "كيف تمنع محددات السرعة الآلية حوادث الطرق السريعة",
    descEn: "Analyzing statistical improvements in heavy freight safety since the widespread introduction of government-certified speed governors across India's national highway network.",
    descAr: "تحليل التحسينات الإحصائية في سلامة الشحنات الثقيلة منذ الانتشار الواسع لمحددات السرعة المعتمدة حكوميًا عبر شبكة الطرق السريعة الوطنية في الهند.",
    date: "May 28, 2026",
    readTime: "4 min read",
    readTimeAr: "4 دقائق قراءة",
    tag: "Safety",
    tagAr: "سلامة",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroIcon: Gauge, heroGrad: "from-emerald-600/20 to-emerald-900/10", heroIconColor: "#10b981",
  },
  {
    titleEn: "The Future of IoT Telematics: AI-Powered Driving Behavior",
    titleAr: "مستقبل بيانات المركبات عن بُعد: سلوك القيادة بالذكاء الاصطناعي",
    descEn: "Exploring how machine learning models process CAN bus diagnostics to score driver behavior, predict maintenance needs, and optimize fleet fuel efficiencies in real time.",
    descAr: "استكشاف كيفية معالجة نماذج التعلم الآلي لبيانات تشخيص CAN لتقييم سلوك السائق والتنبؤ باحتياجات الصيانة وتحسين كفاءة الوقود للأسطول في الوقت الفعلي.",
    date: "April 10, 2026",
    readTime: "6 min read",
    readTimeAr: "6 دقائق قراءة",
    tag: "Technology",
    tagAr: "تقنية",
    tagColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    heroIcon: Cpu, heroGrad: "from-blue-600/20 to-blue-900/10", heroIconColor: "#3b82f6",
  },
  {
    titleEn: "School Bus Safety: Why CCTV & GPS Systems Are Now Essential",
    titleAr: "سلامة حافلات المدارس: لماذا أصبحت كاميرات المراقبة ونظام GPS ضرورة",
    descEn: "With growing incidents on school transport routes, we explore how dual-camera DVRs, panic buttons, and live parent tracking apps are transforming child safety standards in India.",
    descAr: "مع تزايد الحوادث على طرق النقل المدرسي، نستعرض كيف تُحوّل مسجلات الفيديو ذات الكاميرا المزدوجة وأزرار الذعر وتطبيقات التتبع الحي معايير سلامة الأطفال في الهند.",
    date: "March 5, 2026",
    readTime: "5 min read",
    readTimeAr: "5 دقائق قراءة",
    tag: "School Safety",
    tagAr: "سلامة مدرسية",
    tagColor: "text-rose-400 bg-rose-500/10 border-rose-500/20",
    heroIcon: Video, heroGrad: "from-rose-600/20 to-rose-900/10", heroIconColor: "#f43f5e",
  },
  {
    titleEn: "Fleet Management Best Practices with Real-Time GPS Tracking",
    titleAr: "أفضل ممارسات إدارة الأسطول مع التتبع اللحظي بنظام GPS",
    descEn: "Seven proven strategies that enterprise fleet managers are using with APM's tracking hardware to reduce fuel costs by 40%, cut idle time, and improve driver accountability.",
    descAr: "سبع استراتيجيات مثبتة يستخدمها مديرو الأسطول مع أجهزة التتبع من APM لخفض تكاليف الوقود بنسبة 40% وتقليل وقت التوقف وتحسين مساءلة السائقين.",
    date: "February 18, 2026",
    readTime: "7 min read",
    readTimeAr: "7 دقائق قراءة",
    tag: "Fleet Ops",
    tagAr: "عمليات الأسطول",
    tagColor: "text-cyan-bright bg-cyan-500/10 border-cyan-500/20",
    heroIcon: Navigation, heroGrad: "from-cyan-600/20 to-cyan-900/10", heroIconColor: "#3ebdef",
  },
  {
    titleEn: "India's Road Safety Revolution: APM's Role in Infrastructure",
    titleAr: "ثورة السلامة على الطرق في الهند: دور APM في البنية التحتية",
    descEn: "How APM Group's automated driving test tracks, reflective signage, and conspicuity tapes are helping RTOs across 28 states modernize road safety and reduce accident fatalities.",
    descAr: "كيف تساعد مضامير اختبار القيادة الآلية والإشارات العاكسة والأشرطة الليكية من مجموعة APM مكاتب تسجيل المركبات في 28 ولاية على تحديث سلامة الطرق وتقليل الوفيات.",
    date: "January 22, 2026",
    readTime: "6 min read",
    readTimeAr: "6 دقائق قراءة",
    tag: "Infrastructure",
    tagAr: "بنية تحتية",
    tagColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    heroIcon: Construction, heroGrad: "from-purple-600/20 to-purple-900/10", heroIconColor: "#a855f7",
  },
];

export default function BlogsPage() {
  const { isAr } = useLang();

  const t = {
    badge:        isAr ? "مدونة الشركة" : "Company Blog",
    heading:      isAr ? "معرفة ورؤى من فرقنا" : "Knowledge & Insights from",
    headingSpan:  isAr ? "الخاصة بالسيارات" : "Our Automotive Teams",
    sub:          isAr ? "أحدث الأبحاث وإرشادات الامتثال والتحديثات التقنية حول إدارة الأسطول ولوائح RTO وبيانات الإنترنت اللاسلكية الذكية." : "Latest research, compliance guidelines, and technology updates on fleet management, RTO regulations, and smart IoT telematics.",
    readFull:     isAr ? "قراءة المقالة كاملة" : "Read Full Article",
    // newsletter
    nlTitle:      isAr ? "ابقَ على اطلاع بأحدث تقنيات إنترنت الأشياء والأسطول" : "Stay Updated on IoT & Fleet Tech",
    nlSub:        isAr ? "احصل على أحدث تنبيهات الامتثال وإطلاق المنتجات ورؤى السلامة مباشرة في بريدك الوارد." : "Get the latest compliance alerts, product launches, and safety insights delivered to your inbox.",
    nlPlaceholder:isAr ? "أدخل بريدك الإلكتروني" : "Enter your email",
    nlBtn:        isAr ? "اشتراك" : "Subscribe",
  };

  return (
    <PageTransition>
      <div className="bg-[#050d14] pt-32 pb-24 text-white min-h-screen">
        {/* Hero */}
        <section className="relative py-16 px-6 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(62,189,239,0.06),transparent)]" />
          <div className="max-w-4xl mx-auto relative z-10 flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit mx-auto"
            >
              <BookOpen className="w-4 h-4 text-cyan-bright" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-bright">{t.badge}</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight leading-tight"
            >
              {t.heading}<br className="hidden sm:block" />
              {" "}<span className="text-gradient">{t.headingSpan}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-white/55 text-sm md:text-base max-w-xl mx-auto leading-relaxed"
            >
              {t.sub}
            </motion.p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((b, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="glass-panel rounded-2xl border border-white/5 hover:border-cyan-bright/20 hover:-translate-y-1.5 hover:shadow-[0_0_40px_rgba(62,189,239,0.05)] transition-all duration-300 group flex flex-col overflow-hidden"
              >
                {(() => {
                  const HeroIcon = b.heroIcon;
                  return (
                    <div className={`relative h-32 w-full flex items-center justify-center bg-gradient-to-br ${b.heroGrad} overflow-hidden`}>
                      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050d14]/60" />
                      <HeroIcon className="w-16 h-16 opacity-20" style={{ color: b.heroIconColor }} />
                      <div className="absolute bottom-3 left-4">
                        <span className={`text-[9px] font-bold px-2 py-1 rounded-full border ${b.tagColor}`}>{isAr ? b.tagAr : b.tag}</span>
                      </div>
                    </div>
                  );
                })()}

                <div className="p-7 flex flex-col gap-4 flex-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-white/35">
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{b.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{isAr ? b.readTimeAr : b.readTime}</span>
                    </div>
                    <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded border ${b.tagColor}`}>
                      {isAr ? b.tagAr : b.tag}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2 flex-1">
                    <h3 className="text-base md:text-lg font-display font-bold text-white group-hover:text-cyan-bright transition-colors duration-300 leading-snug">
                      {isAr ? b.titleAr : b.titleEn}
                    </h3>
                    <p className="text-white/50 text-xs md:text-sm leading-relaxed">{isAr ? b.descAr : b.descEn}</p>
                  </div>

                  <div className="border-t border-white/5 pt-4 mt-auto">
                    <Link href="#" className="text-cyan-bright hover:opacity-75 text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all duration-200 w-fit">
                      {t.readFull} <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="px-6 max-w-3xl mx-auto mt-24"
        >
          <div
            className="rounded-3xl p-10 text-center flex flex-col items-center gap-5"
            style={{ background: "rgba(62,189,239,0.04)", border: "1px solid rgba(62,189,239,0.10)" }}
          >
            <h2 className="text-2xl font-display font-bold text-white">{t.nlTitle}</h2>
            <p className="text-white/50 text-sm max-w-sm leading-relaxed">{t.nlSub}</p>
            <div className="flex flex-col sm:flex-row gap-2 w-full max-w-sm">
              <input
                type="email"
                placeholder={t.nlPlaceholder}
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-cyan-bright transition-colors"
              />
              <button className="px-4 py-2.5 rounded-lg bg-cyan-bright text-navy-dark font-bold text-sm hover:bg-cyan-bright/90 transition-colors shrink-0">
                {t.nlBtn}
              </button>
            </div>
          </div>
        </motion.section>
      </div>
    </PageTransition>
  );
}
