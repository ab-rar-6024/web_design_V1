"use client";

import Link from "next/link";
import { Newspaper, Calendar, ArrowRight, TrendingUp, Globe, Award, Clock, Tag } from "lucide-react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { useLang } from "@/hooks/useLang";

const featuredArticle = {
  titleEn: "APM Group Rebrands as India's Emerging AI-Integrated IoT Leader",
  titleAr: "مجموعة APM تُعيد تحديد هويتها بوصفها رائدة إنترنت الأشياء المدمج بالذكاء الاصطناعي في الهند",
  date: "July 01, 2025",
  readTime: "3 min read",
  readTimeAr: "3 دقائق قراءة",
  location: "Chennai, India",
  locationAr: "تشيناي، الهند",
  categories: ["Brand Milestones", "Smart IoT"],
  categoriesAr: ["معالم العلامة التجارية", "إنترنت الأشياء الذكي"],
  image: "https://apmgroups.in/newsimage/5e7a690d-edae-4970-a2c5-50c998b29a7b.png",
  summaryEn: "APM Group, India's first company to build smart IoT products powered by AI, has launched a refreshed brand identity reflecting its expanded capabilities across automotive safety, fleet management, and environmental sustainability.",
  summaryAr: "أطلقت مجموعة APM، أول شركة في الهند تبني منتجات إنترنت الأشياء الذكية المدعومة بالذكاء الاصطناعي، هوية علامة تجارية متجددة تعكس قدراتها الموسعة في مجال سلامة السيارات وإدارة الأسطول والاستدامة البيئية.",
  bodyEn: [
    "APM Group has announced a major rebrand, positioning itself as India's leading AI-integrated IoT manufacturer for the automotive sector. The company — which holds the distinction of being India's first to build smart IoT products powered by AI — unveiled a refreshed brand identity that reflects its expanded manufacturing and technology capabilities.",
    "The company's product lineup includes 4G WiFi modules, load sensors, auto dippers, and advanced diagnostics for engine health monitoring, speed control, and collision prevention. With an internal manufacturing model that spans from conception to full production, APM ensures end-to-end quality control across all product lines.",
    "APM Group currently powers over 1.2 million vehicles and partners with 1,600+ retail dealers across India. The company is actively expanding operations to Asia, Middle East, and Africa, bringing its government-certified IoT hardware to international markets.",
    "CEO Mohamed Kaja emphasized the company's commitment to both innovation and environmental responsibility. As part of its sustainability initiative, APM has partnered with the Plant a Billion Trees program — a collaboration recognized by India's environmental ministry — pledging a contribution with every hardware product shipped.",
    "The rebranding was carried out by Birth Marque, a Chennai-based marketing firm, and signals a new chapter for APM as it scales its AI-first approach to automotive IoT across global markets.",
  ],
  bodyAr: [
    "أعلنت مجموعة APM عن إعادة هيكلة شاملة لعلامتها التجارية، لتضع نفسها بوصفها الشركة الرائدة في تصنيع إنترنت الأشياء المدمج بالذكاء الاصطناعي لقطاع السيارات في الهند. وأطلقت الشركة — التي تتميز بكونها الأولى في الهند في بناء منتجات إنترنت الأشياء الذكية المدعومة بالذكاء الاصطناعي — هوية بصرية متجددة تعكس قدراتها التصنيعية والتقنية الموسعة.",
    "تشمل قائمة منتجات الشركة وحدات WiFi الجيل الرابع وأجهزة استشعار الأحمال والغمّاسات الآلية والتشخيصات المتقدمة لمراقبة صحة المحرك والتحكم بالسرعة ومنع الاصطدامات. ومن خلال نموذج التصنيع الداخلي الممتد من التصميم حتى الإنتاج الكامل، تضمن APM التحكم الشامل في الجودة عبر جميع خطوط الإنتاج.",
    "تدعم مجموعة APM حاليًا أكثر من 1.2 مليون مركبة وتتعاون مع أكثر من 1,600 موزع تجزئة في جميع أنحاء الهند. وتعمل الشركة بنشاط على توسيع عملياتها في آسيا والشرق الأوسط وأفريقيا، لتوصيل أجهزتها المعتمدة حكوميًا إلى الأسواق الدولية.",
    "أكد الرئيس التنفيذي محمد خاجا التزام الشركة بالابتكار والمسؤولية البيئية. وفي إطار مبادرة الاستدامة، تشاركت APM مع برنامج زرع مليار شجرة — وهو تعاون معترف به من وزارة البيئة الهندية — مع تعهد بالمساهمة مع كل منتج يُشحن.",
    "نفّذت شركة Birth Marque التسويقية في تشيناي عملية إعادة العلامة التجارية، مما يُشير إلى مرحلة جديدة في مسيرة APM لتوسيع نهجها القائم على الذكاء الاصطناعي في مجال إنترنت الأشياء للسيارات عبر الأسواق العالمية.",
  ],
};

const moreNews = [
  {
    titleEn: "APM Groups Expands IoT Manufacturing Facilities in Chennai",
    titleAr: "مجموعة APM تُوسّع منشآت تصنيع إنترنت الأشياء في تشيناي",
    descEn: "Increasing hardware production capacity by 200% at our Chennai facility to keep pace with pan-India fleet safety demand and new AIS 140 government mandates.",
    descAr: "زيادة طاقة الإنتاج بنسبة 200% في منشأة تشيناي لمواكبة الطلب على سلامة الأسطول في جميع أنحاء الهند والتفويضات الحكومية الجديدة للمعيار AIS 140.",
    date: "June 20, 2026",
    icon: TrendingUp, iconColor: "text-emerald-400", iconBg: "bg-emerald-500/10 border-emerald-500/20",
    categoryEn: "Corporate", categoryAr: "شركة",
  },
  {
    titleEn: "APM Crosses 1.2 Million Device Installations Across India",
    titleAr: "APM تتجاوز 1.2 مليون تركيب جهاز في جميع أنحاء الهند",
    descEn: "A major milestone reached: APM Group's GPS trackers, speed governors, and IoT safety systems are now deployed across 1.2 million vehicles spanning 28 Indian states.",
    descAr: "إنجاز بارز: أصبحت أجهزة التتبع بنظام GPS ومحددات السرعة وأنظمة سلامة إنترنت الأشياء من مجموعة APM منتشرة في 1.2 مليون مركبة عبر 28 ولاية هندية.",
    date: "June 5, 2026",
    icon: Award, iconColor: "text-amber-400", iconBg: "bg-amber-500/10 border-amber-500/20",
    categoryEn: "Milestone", categoryAr: "إنجاز",
  },
  {
    titleEn: "Partnership with Global Reforestation NGO Completed",
    titleAr: "اكتمال الشراكة مع منظمة إعادة التحريج العالمية",
    descEn: "APM launches the Green Safety pledge — contributing to global carbon offset and reforestation programs with every hardware product shipped worldwide.",
    descAr: "تطلق APM تعهد السلامة الخضراء — المساهمة في برامج تعويض الكربون العالمية وإعادة التحريج مع كل منتج يُشحن حول العالم.",
    date: "May 14, 2026",
    icon: Globe, iconColor: "text-cyan-bright", iconBg: "bg-cyan-500/10 border-cyan-500/20",
    categoryEn: "Sustainability", categoryAr: "استدامة",
  },
  {
    titleEn: "India Mandates Strict AIS 140 Compliance for All Transport",
    titleAr: "الهند تفرض الامتثال الصارم لمعيار AIS 140 على جميع وسائل النقل",
    descEn: "How APM's latest AIS 140 certified VLTD devices and automated testing setups are helping regional transport offices automate fleet vehicle qualification across India.",
    descAr: "كيف تساعد أجهزة VLTD الجديدة المعتمدة وفق معيار AIS 140 ومنصات الاختبار الآلي من APM مكاتب النقل الإقليمية على أتمتة تأهيل مركبات الأسطول في الهند.",
    date: "March 22, 2026",
    icon: Newspaper, iconColor: "text-blue-400", iconBg: "bg-blue-500/10 border-blue-500/20",
    categoryEn: "Regulation", categoryAr: "تشريع",
  },
  {
    titleEn: "APM Launches FleetEye 2.0 with Predictive AI Analytics",
    titleAr: "APM تطلق FleetEye 2.0 مع تحليلات الذكاء الاصطناعي التنبؤية",
    descEn: "The next generation of APM's flagship fleet management platform now includes predictive maintenance, AI driver scoring, and real-time fuel theft detection capabilities.",
    descAr: "يشمل الجيل الجديد من منصة إدارة الأسطول الرائدة من APM الآن الصيانة التنبؤية وتقييم السائقين بالذكاء الاصطناعي وقدرات الكشف الفوري عن سرقة الوقود.",
    date: "February 10, 2026",
    icon: TrendingUp, iconColor: "text-purple-400", iconBg: "bg-purple-500/10 border-purple-500/20",
    categoryEn: "Product Launch", categoryAr: "إطلاق منتج",
  },
  {
    titleEn: "APM Group Recognized as Top IoT Manufacturer at AutoExpo 2026",
    titleAr: "تكريم مجموعة APM كأفضل شركة تصنيع لإنترنت الأشياء في AutoExpo 2026",
    descEn: "APM received the Innovation in Transport Safety award at AutoExpo 2026, recognizing our leadership in certified automotive IoT hardware and fleet management solutions.",
    descAr: "حصلت APM على جائزة الابتكار في سلامة النقل في AutoExpo 2026، تقديرًا لريادتها في أجهزة إنترنت الأشياء المعتمدة للسيارات وحلول إدارة الأسطول.",
    date: "January 15, 2026",
    icon: Award, iconColor: "text-rose-400", iconBg: "bg-rose-500/10 border-rose-500/20",
    categoryEn: "Award", categoryAr: "جائزة",
  },
];

export default function NewsPage() {
  const { isAr } = useLang();

  const t = {
    badge:       isAr ? "غرفة الصحافة" : "Press Room",
    heading:     isAr ? "أخبار الشركة و" : "Corporate News &",
    headingSpan: isAr ? "إعلانات القطاع" : "Industry Announcements",
    sub:         isAr ? "ابقَ على اطلاع بإطلاق المنتجات والتوجيهات الحكومية والإنجازات التصنيعية وإعلانات مجموعة APM." : "Stay up to date with product launches, government directives, manufacturing milestones, and APM Group corporate announcements.",
    featured:    isAr ? "مميز" : "Featured",
    fromApm:     isAr ? "المزيد من APM" : "More from APM",
    readRelease: isAr ? "اقرأ البيان الصحفي" : "Read Press Release",
    mediaTitle:  isAr ? "استفسارات الإعلام والصحافة" : "Media & Press Enquiries",
    mediaSub:    isAr ? "للحصول على حزمة الصحافة أو إجراء مقابلات أو إعلانات شراكة، تواصل مباشرة مع فريق الاتصالات." : "For press kit downloads, interviews, or partnership announcements, reach our communications team directly.",
    mediaBtn:    isAr ? "تواصل مع فريق الصحافة" : "Contact Press Team",
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
              <Newspaper className="w-4 h-4 text-cyan-bright" />
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

        {/* Featured Article */}
        <section className="px-6 max-w-7xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl overflow-hidden border border-white/8 hover:border-cyan-bright/20 transition-colors duration-300 group"
            style={{ background: "rgba(5,13,26,0.6)", backdropFilter: "blur(12px)" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 sm:h-80 lg:h-auto overflow-hidden">
                <img
                  src={featuredArticle.image}
                  alt={isAr ? featuredArticle.titleAr : featuredArticle.titleEn}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050d14]/0 to-[#050d14]/60 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050d14]/80 to-transparent lg:hidden" />
                <div className="absolute top-4 left-4">
                  <span className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-cyan-bright text-navy-dark">
                    {t.featured}
                  </span>
                </div>
              </div>

              <div className="p-7 sm:p-10 flex flex-col gap-5 justify-center">
                <div className="flex flex-wrap gap-2">
                  {(isAr ? featuredArticle.categoriesAr : featuredArticle.categories).map((cat) => (
                    <span key={cat} className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded border border-cyan-bright/20 text-cyan-bright bg-cyan-bright/5">
                      {cat}
                    </span>
                  ))}
                </div>

                <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-extrabold text-white leading-snug group-hover:text-cyan-bright transition-colors duration-300">
                  {isAr ? featuredArticle.titleAr : featuredArticle.titleEn}
                </h2>

                <p className="text-white/60 text-sm leading-relaxed">{isAr ? featuredArticle.summaryAr : featuredArticle.summaryEn}</p>

                <div className="flex flex-col gap-3 text-white/50 text-xs sm:text-sm leading-relaxed border-t border-white/6 pt-5">
                  {(isAr ? featuredArticle.bodyAr : featuredArticle.bodyEn).map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-white/35 pt-1">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{featuredArticle.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{isAr ? featuredArticle.readTimeAr : featuredArticle.readTime}</span>
                  <span className="flex items-center gap-1.5"><Tag className="w-3.5 h-3.5" />{isAr ? featuredArticle.locationAr : featuredArticle.location}</span>
                </div>

                <Link href="" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-bright text-sm font-semibold hover:opacity-75 transition-opacity w-fit">
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

        {/* More News */}
        <section className="px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="text-[10px] uppercase tracking-widest text-cyan-bright font-bold">{t.fromApm}</span>
            <div className="flex-1 h-px bg-white/6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {moreNews.map((n, idx) => {
              const Icon = n.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="glass-panel rounded-2xl border border-white/5 hover:border-cyan-bright/20 hover:-translate-y-1.5 hover:shadow-[0_0_40px_rgba(62,189,239,0.05)] transition-all duration-300 group flex flex-col overflow-hidden"
                >
                  <div className="p-7 flex flex-col gap-4 flex-1">
                    <div className="flex items-start justify-between">
                      <div className={`p-2.5 rounded-xl border ${n.iconBg} ${n.iconColor}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-white/30 bg-white/5 px-2 py-1 rounded border border-white/8">
                        {isAr ? n.categoryAr : n.categoryEn}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-white/35">
                      <Calendar className="w-3.5 h-3.5" />
                      {n.date}
                    </div>

                    <div className="flex flex-col gap-2 flex-1">
                      <h3 className="text-base md:text-lg font-display font-bold text-white group-hover:text-cyan-bright transition-colors duration-300 leading-snug">
                        {isAr ? n.titleAr : n.titleEn}
                      </h3>
                      <p className="text-white/50 text-xs md:text-sm leading-relaxed">{isAr ? n.descAr : n.descEn}</p>
                    </div>

                    <div className="border-t border-white/5 pt-4 mt-auto">
                      <Link href="#" className="text-cyan-bright hover:opacity-75 text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all duration-200 w-fit">
                        {t.readRelease} <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Media CTA */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="px-6 max-w-3xl mx-auto mt-24"
        >
          <div
            className="rounded-3xl p-8 sm:p-10 text-center flex flex-col items-center gap-5"
            style={{ background: "rgba(62,189,239,0.04)", border: "1px solid rgba(62,189,239,0.10)" }}
          >
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white">{t.mediaTitle}</h2>
            <p className="text-white/50 text-sm max-w-sm leading-relaxed">{t.mediaSub}</p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-cyan-bright text-navy-dark font-bold text-sm hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
            >
              {t.mediaBtn} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.section>
      </div>
    </PageTransition>
  );
}
