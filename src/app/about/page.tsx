"use client";

import { useRef } from "react";
import { Leaf, Target, Eye, ArrowRight, ShieldCheck, Zap, TrendingUp, Globe, Users } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { useLang } from "@/hooks/useLang";

const BASE = "https://apmgroups.in";

const timelineEn = [
  { year: "1990", title: "Transport Beginnings",               desc: "Started in the transport industry with a single truck, building deep logistical experience across India.",                                           img: `${BASE}/img/OurEvalution/rectangle-700.png`,   color: "#3ebdef" },
  { year: "2000", title: "Safety Distribution",                desc: "Transitioned into safety tools and equipment distribution, rapidly expanding corporate capabilities.",                                               img: `${BASE}/img/OurEvalution/rectangle-720.png`,   color: "#60a5fa" },
  { year: "2009", title: "Speed Governors & Reflective Tapes", desc: "Introduced CMVR-certified Speed Limiting Devices and EN-standard reflective conspicuity tapes to the market.",                                    img: `${BASE}/img/OurEvalution/rectangle-730.png`,   color: "#a78bfa" },
  { year: "2012", title: "GPS & Surveillance",                 desc: "Expanded our hardware catalog with vehicle cameras and smart GPS tracking systems for Indian fleets.",                                              img: `${BASE}/img/OurEvalution/rectangle-740.png`,   color: "#34d399" },
  { year: "2015", title: "Software Integration",               desc: "Established an in-house team of 30+ software engineers to pioneer smart IoT platforms and cloud dashboards.",                                       img: `${BASE}/img/OurEvalution/rectangle-780.png`,   color: "#f59e0b" },
  { year: "2019", title: "Hardware Manufacturing",             desc: "Opened state-of-the-art facilities for custom IoT hardware manufacturing in Chennai, Tamil Nadu.",                                                  img: `${BASE}/img/OurEvalution/rectangle-1190.png`,  color: "#f43f5e" },
  { year: "2023", title: "Global Expansion",                   desc: "Established international presence with services extending across 10+ countries and all 28 Indian states.",                                          img: `${BASE}/img/OurEvalution/rectangle-840.png`,   color: "#3ebdef" },
  { year: "2025", title: "AI-Powered Fleet Management",        desc: "Launched India's first AI-driven fleet safety and operations management platform — a watershed moment.",                                           img: `${BASE}/img/OurEvalution/rectangle-850.png`,   color: "#10b981" },
];

const timelineAr = [
  { year: "1990", title: "بدايات النقل",                       desc: "بدأنا في صناعة النقل بشاحنة واحدة، وبنينا خبرة لوجستية عميقة في جميع أنحاء الهند.",                                                             img: `${BASE}/img/OurEvalution/rectangle-700.png`,   color: "#3ebdef" },
  { year: "2000", title: "توزيع معدات السلامة",                desc: "انتقلنا إلى توزيع أدوات ومعدات السلامة، مما أدى إلى توسيع القدرات التجارية بسرعة.",                                                              img: `${BASE}/img/OurEvalution/rectangle-720.png`,   color: "#60a5fa" },
  { year: "2009", title: "محددات السرعة والأشرطة العاكسة",     desc: "قدّمنا أجهزة تحديد السرعة المعتمدة من CMVR والأشرطة العاكسة الليكية وفق معيار EN إلى السوق.",                                                  img: `${BASE}/img/OurEvalution/rectangle-730.png`,   color: "#a78bfa" },
  { year: "2012", title: "GPS والمراقبة",                      desc: "وسّعنا كتالوج الأجهزة بكاميرات المركبات وأنظمة التتبع الذكية بنظام GPS للأساطيل الهندية.",                                                       img: `${BASE}/img/OurEvalution/rectangle-740.png`,   color: "#34d399" },
  { year: "2015", title: "التكامل البرمجي",                    desc: "أسسنا فريقاً داخلياً من أكثر من 30 مهندس برمجيات لريادة منصات إنترنت الأشياء الذكية ولوحات التحكم السحابية.",                                     img: `${BASE}/img/OurEvalution/rectangle-780.png`,   color: "#f59e0b" },
  { year: "2019", title: "تصنيع الأجهزة",                     desc: "افتتحنا منشآت متطورة لتصنيع أجهزة إنترنت الأشياء المخصصة في تشيناي، تاميل نادو.",                                                                img: `${BASE}/img/OurEvalution/rectangle-1190.png`,  color: "#f43f5e" },
  { year: "2023", title: "التوسع العالمي",                     desc: "أسسنا حضوراً دولياً مع خدمات تمتد عبر أكثر من 10 دول وجميع الولايات الـ28 في الهند.",                                                            img: `${BASE}/img/OurEvalution/rectangle-840.png`,   color: "#3ebdef" },
  { year: "2025", title: "إدارة الأسطول بالذكاء الاصطناعي",   desc: "أطلقنا أول منصة هندية لإدارة سلامة وعمليات الأسطول بالذكاء الاصطناعي — لحظة فارقة في التاريخ.",                                                  img: `${BASE}/img/OurEvalution/rectangle-850.png`,   color: "#10b981" },
];

const valuesEn = [
  { icon: Zap,         num: "01", title: "Innovation by Design",   desc: "Building what's next before it is expected, through constant R&D and engineering investment." },
  { icon: ShieldCheck, num: "02", title: "Precision in Execution", desc: "Hardware and software engineered to perfection, ensuring absolute regulatory compliance." },
  { icon: Users,       num: "03", title: "Customer-First Always",  desc: "Customized IoT solutions tailored to your workflows, backed by 24/7 pan-India dealer support." },
  { icon: Globe,       num: "04", title: "Rooted in Legacy",       desc: "35+ years of logistical trust and operational experience powering our future technology." },
  { icon: TrendingUp,  num: "05", title: "Impact-Driven",          desc: "Everything we manufacture and code is built to move the world forward safely." },
];

const valuesAr = [
  { icon: Zap,         num: "01", title: "الابتكار بالتصميم",        desc: "نبني ما هو قادم قبل أن يُتوقع، من خلال الاستثمار المستمر في البحث والتطوير والهندسة." },
  { icon: ShieldCheck, num: "02", title: "الدقة في التنفيذ",         desc: "أجهزة وبرمجيات مُهندَسة بإتقان، تضمن الامتثال التنظيمي الكامل." },
  { icon: Users,       num: "03", title: "العميل أولاً دائماً",      desc: "حلول إنترنت أشياء مخصصة لتناسب سير عملك، مدعومة بدعم الموزعين على مدار الساعة في جميع أنحاء الهند." },
  { icon: Globe,       num: "04", title: "متجذّر في الإرث",          desc: "أكثر من 35 عامًا من الثقة اللوجستية والخبرة التشغيلية تدعم تقنيتنا المستقبلية." },
  { icon: TrendingUp,  num: "05", title: "مدفوع بالتأثير",           desc: "كل ما نصنعه ونبرمجه مبني لدفع العالم إلى الأمام بأمان." },
];


/* ── Zigzag timeline card ── */
function TimelineCard({ item, idx }: { item: typeof timelineEn[0]; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = idx % 2 === 0;

  return (
    <div ref={ref}>
      <div className="flex md:hidden items-start gap-4 mb-6">
        <div className="flex flex-col items-center flex-shrink-0 pt-1">
          <motion.div initial={{ scale: 0, opacity: 0 }} animate={inView ? { scale: 1, opacity: 1 } : {}} transition={{ duration: 0.4, delay: 0.1, type: "spring", stiffness: 300 }} className="relative z-10">
            <div className="w-4 h-4 rounded-full border-2 border-[#050d14]" style={{ background: item.color, boxShadow: `0 0 12px ${item.color}80` }} />
            <motion.div className="absolute inset-[-4px] rounded-full" style={{ border: `1.5px solid ${item.color}` }} animate={inView ? { scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] } : {}} transition={{ duration: 2.2, repeat: Infinity, delay: 0.3 + idx * 0.1 }} />
          </motion.div>
          <div className="w-px flex-1 mt-2 min-h-[32px]" style={{ background: `linear-gradient(to bottom, ${item.color}40, transparent)` }} />
        </div>
        <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 }} className="flex-1 pb-2">
          <TimelineItemCard item={item} />
        </motion.div>
      </div>

      <div className="hidden md:grid grid-cols-[1fr_56px_1fr] items-start gap-0 mb-0">
        <div className={`pr-8 ${isLeft ? "" : "invisible"}`}>
          {isLeft && (
            <motion.div initial={{ opacity: 0, x: -60 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}>
              <TimelineItemCard item={item} />
            </motion.div>
          )}
        </div>
        <div className="flex flex-col items-center relative">
          <div className="flex-1 w-px bg-gradient-to-b from-transparent to-white/10 min-h-[24px]" />
          <motion.div initial={{ scale: 0, opacity: 0 }} animate={inView ? { scale: 1, opacity: 1 } : {}} transition={{ duration: 0.4, delay: 0.25, type: "spring", stiffness: 300 }} className="relative z-10 flex-shrink-0">
            <div className="w-5 h-5 rounded-full border-2 border-[#050d14]" style={{ background: item.color, boxShadow: `0 0 18px ${item.color}80, 0 0 40px ${item.color}30` }} />
            <motion.div className="absolute inset-[-4px] rounded-full" style={{ border: `1.5px solid ${item.color}` }} animate={inView ? { scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] } : {}} transition={{ duration: 2.2, repeat: Infinity, delay: 0.5 + idx * 0.15 }} />
          </motion.div>
          <div className="flex-1 w-px bg-gradient-to-b from-white/10 to-transparent min-h-[24px]" />
        </div>
        <div className={`pl-8 ${isLeft ? "invisible" : ""}`}>
          {!isLeft && (
            <motion.div initial={{ opacity: 0, x: 60 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}>
              <TimelineItemCard item={item} />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

function TimelineItemCard({ item }: { item: typeof timelineEn[0] }) {
  return (
    <div className="dark-bg group rounded-2xl overflow-hidden border border-white/6 hover:border-white/14 transition-all duration-400 hover:-translate-y-1" style={{ background: "rgba(5,13,26,0.75)", backdropFilter: "blur(10px)" }}>
      <div className="relative h-36 w-full overflow-hidden">
        <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600" loading="lazy" style={{ filter: "saturate(1.3) brightness(0.85)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050d14] via-[#050d14]/30 to-transparent" />
        <div className="absolute bottom-3 left-4 text-3xl font-display font-black leading-none" style={{ color: item.color, textShadow: `0 0 24px ${item.color}90` }}>{item.year}</div>
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: item.color }} />
      </div>
      <div className="p-4">
        <h4 className="font-display font-bold text-white text-sm leading-snug mb-1.5">{item.title}</h4>
        <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
      </div>
    </div>
  );
}

function TimelineProgressLine() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <div ref={ref} className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px pointer-events-none">
      <div className="absolute inset-0 bg-white/6" />
      <motion.div className="absolute inset-x-0 top-0 origin-top" style={{ scaleY, background: "linear-gradient(to bottom, #3ebdef, #2563eb, #7c3aed, #10b981)", height: "100%" }} />
    </div>
  );
}


export default function AboutPage() {
  const { isAr } = useLang();

  const timeline = isAr ? timelineAr : timelineEn;
  const values   = isAr ? valuesAr   : valuesEn;

  const t = {
    heroBadge:      isAr ? "من نحن" : "Who We Are",
    heroH1:         isAr ? "مبنيّون لبناء الثقة،" : "Built to Drive Trust,",
    heroH1Span:     isAr ? "مدعومون بالتقنية" : "Powered by Technology",
    heroDesc:       isAr ? "شركة تقنية رائدة متخصصة في إنترنت الأشياء وأجهزة السيارات — تحوّل عمليات المركبات من خلال تقنيات ذكية معتمدة تُقدّم السلامة والكفاءة." : "A forward-thinking technology company specializing in IoT and automotive hardware — transforming vehicle operations through smart, certified technologies that prioritize safety and efficiency.",
    heroStats:      isAr ? [{ val: "35+", label: "سنوات من الإرث" }, { val: "1.2M+", label: "جهاز منتشر" }, { val: "10+", label: "دول" }, { val: "1,600+", label: "شبكة موزعين" }]
                         : [{ val: "35+", label: "Years Legacy" }, { val: "1.2M+", label: "Devices Deployed" }, { val: "10+", label: "Countries" }, { val: "1,600+", label: "Dealer Network" }],
    viewProducts:   isAr ? "عرض المنتجات" : "View Products",
    contactUs:      isAr ? "تواصل معنا" : "Contact Us",
    // WHO WE ARE
    whoTag:         isAr ? "نظرة عامة على مجموعة APM" : "APM Group Overview",
    whoH2:          isAr ? "ريادة التنقل الذكي" : "Pioneering Intelligent",
    whoH2b:         isAr ? "وأجهزة إنترنت الأشياء" : "Mobility & IoT Hardware",
    whoP1:          isAr ? "في APM، نحن ملتزمون بتحويل صناعة السيارات من خلال حلول إنترنت الأشياء والأجهزة المتطورة. تكمن خبرتنا في تطوير تقنيات ذكية وعالية الأداء تعزز كفاءة المركبات وسلامتها وإمكانية الاتصال بها." : "At APM, we are dedicated to transforming the automotive industry through cutting-edge IoT and hardware solutions. Our expertise lies in developing smart, high-performance technologies that enhance vehicle efficiency, safety, and connectivity.",
    whoP2:          isAr ? "تأسست APM عام 1990 بشاحنة واحدة، ونمت لتصبح مؤسسة إنترنت أشياء متعددة القطاعات تمتد عبر بيانات GPS للأساطيل وتحكم السرعة ومراقبة المركبات ومراقبة الأحمال وحلول AIS 140 ومنصات السحابة المؤسسية." : "Founded in 1990 with a single truck, APM has grown into a multi-vertical IoT enterprise spanning GPS fleet telematics, speed governance, vehicle surveillance, payload monitoring, government-mandated AIS 140 solutions, and enterprise cloud platforms.",
    whoP3:          isAr ? "تخضع كل منتج لاختبار صارم — معتمد وفق ISO وICAT وBIS وAIS 140 — ما يضمن الأداء المتميز عبر 10 دول و28 ولاية هندية." : "Every product undergoes rigorous testing — ISO, ICAT, BIS, AIS 140 certified — ensuring superior performance across 10 countries and 28 Indian states.",
    chips:          isAr ? ["بيانات GPS", "امتثال AIS 140", "أجهزة إنترنت الأشياء", "منصات سحابية", "إدارة الأسطول", "محددات السرعة", "مراقبة 4G", "تحليلات AI"]
                         : ["GPS Telematics", "AIS 140 Compliance", "IoT Hardware", "Cloud Platforms", "Fleet Management", "Speed Governors", "4G Surveillance", "AI Analytics"],
    exploreProducts: isAr ? "استكشف المنتجات" : "Explore Products",
    floatStats:     isAr ? [{ val: "28", label: "ولاية" }, { val: "10+", label: "دول" }, { val: "4.9★", label: "تقييم" }, { val: "1990", label: "التأسيس" }]
                         : [{ val: "28", label: "States" }, { val: "10+", label: "Countries" }, { val: "4.9★", label: "Rating" }, { val: "1990", label: "Founded" }],
    // VISION & MISSION
    vmTag:          isAr ? "التوافق المؤسسي" : "Corporate Alignment",
    vmH2:           isAr ? "ما الذي يدفعنا إلى الأمام" : "What Drives Us Forward",
    vmItems:        isAr ? [
      { icon: Eye,    label: "رؤيتنا",  color: "text-cyan-bright", border: "border-cyan-500/20",  bg: "bg-cyan-500/8",  text: "نلتزم بالبقاء في طليعة التطور — من خلال احتضان الذكاء الاصطناعي والتعلم الآلي وتقنية المركبات المتصلة لتمكين أنظمة السيارات للغد في كل سوق نخدمه." },
      { icon: Target, label: "مهمتنا", color: "text-blue-400",    border: "border-blue-500/20",  bg: "bg-blue-500/8",  text: "تمكين الشركات في صناعة السيارات بحلول إنترنت أشياء متطورة تعزز السلامة وتحسّن الكفاءة وتُحسّن الأداء — من خلال شراكات طويلة الأمد مدعومة بدعم على مدار الساعة في جميع أنحاء الهند." },
    ] : [
      { icon: Eye,    label: "Our Vision",  color: "text-cyan-bright", border: "border-cyan-500/20",  bg: "bg-cyan-500/8",  text: "Looking ahead, we are committed to staying ahead of the curve — embracing AI, machine learning, and connected vehicle technology to enable the automotive systems of tomorrow across every market we serve." },
      { icon: Target, label: "Our Mission", color: "text-blue-400",    border: "border-blue-500/20",  bg: "bg-blue-500/8",  text: "To empower companies in the automobile industry with cutting-edge IoT solutions that enhance safety, improve efficiency, and optimize performance — through long-lasting partnerships backed by 24/7 pan-India support." },
    ],
    // VALUES
    valTag:         isAr ? "المعتقدات الأساسية" : "Core Beliefs",
    valH2:          isAr ? "قيمنا المؤسسية" : "Our Corporate Values",
    // TIMELINE
    tlTag:          isAr ? "تطورنا" : "Our Evolution",
    tlH2:           isAr ? "الخط الزمني لرحلتنا التقنية" : "The Timeline of Our Tech Journey",
    tlDesc:         isAr ? "من شاحنة واحدة إلى مؤسسة إنترنت أشياء عالمية — إنجاز بعد إنجاز." : "From a single truck to a global IoT automotive enterprise — milestone by milestone.",
    // GREEN SAFETY
    gsTag:          isAr ? "استدامة" : "Sustainability",
    gsH3:           isAr ? "السلامة الخضراء من أجل" : "Green Safety for",
    gsSpan:         isAr ? "الحفاظ على البيئة" : "Environmental Preservation",
    gsP:            isAr ? "تتشارك مجموعة APM مع مؤسسة زرع مليار شجرة — بكل منتج نبيعه، نساهم في برامج إعادة التحريج العالمية وتعويض الكربون، موازنين التقدم الصناعي مع الإشراف البيئي." : "APM Group partners with the Plant a Billion Trees Foundation — for every product we sell, we contribute to global reforestation and carbon offset programs, balancing industrial progress with environmental stewardship.",
    gsBullets:      isAr ? ["التوعية بالحركة الخضراء", "الالتزام بالحياد الكربوني في الانبعاثات", "مع كل منتج نبيعه، نُعيد للكوكب"]
                         : ["Awareness for the green movement", "Commitment to carbon-neutral emissions", "For every product sold, we give back to the planet"],
    whoBadge:       isAr ? "من نحن" : "Who We Are",
  };

  return (
    <PageTransition>
      <div className="bg-[#050d14] text-white">

        {/* ── HERO ── */}
        <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={`${BASE}/img/aboutusdetail/aboutbanner.png`} alt="APM Group" className="w-full h-full object-cover" style={{ filter: "saturate(0.7) brightness(0.35)" }} />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050d14]/40 via-transparent to-[#050d14]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(62,189,239,0.1),transparent)]" />
          </div>
          <div className="dark-bg relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col gap-7 pt-32">
            <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/8 border border-white/12 w-fit mx-auto">
              <span className="w-2 h-2 rounded-full bg-cyan-bright animate-pulse" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-bright">{t.heroBadge}</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="text-5xl md:text-7xl font-display font-extrabold tracking-tight leading-[1.05]">
              {t.heroH1}<br /><span className="text-gradient">{t.heroH1Span}</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.22 }} className="text-white/65 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              {t.heroDesc}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }} className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 w-full max-w-lg mx-auto">
              {t.heroStats.map((s, i) => (
                <div key={i} className="flex flex-col items-center gap-0.5 py-2">
                  <span className="text-2xl md:text-3xl font-display font-black text-cyan-bright">{s.val}</span>
                  <span className="text-[10px] uppercase tracking-widest text-white/40 text-center">{s.label}</span>
                </div>
              ))}
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex items-center justify-center gap-4 flex-wrap">
              <Link href="/products" className="px-6 py-3 rounded-xl bg-cyan-bright text-navy-dark font-bold text-sm hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">{t.viewProducts}</Link>
              <Link href="/contact" className="px-6 py-3 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/8 hover:border-white/35 transition-all duration-300">{t.contactUs}</Link>
            </motion.div>
          </div>
        </section>

        {/* ── WHO WE ARE ── */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <img src={`${BASE}/img/aboutusdetail/aboutbanner.png`} alt="" aria-hidden className="w-full h-full object-cover" style={{ opacity: 0.5, filter: "grayscale(0.2) saturate(0.8)" }} />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050d14]/55 via-transparent to-[#050d14]/55" />
            <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(62,189,239,0.06) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
          </div>
          <div className="dark-bg relative py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-widest text-cyan-bright font-bold flex items-center gap-2"><span className="w-4 h-px bg-cyan-bright" />{t.whoTag}</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight">{t.whoH2}<br />{t.whoH2b}</h2>
              </div>
              <div className="space-y-4 text-white/65 text-sm leading-relaxed">
                <p>{t.whoP1}</p><p>{t.whoP2}</p><p>{t.whoP3}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {t.chips.map((chip) => (
                  <span key={chip} className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/5 border border-white/10 text-white/65 hover:border-cyan-bright/30 hover:text-cyan-bright transition-all duration-200">{chip}</span>
                ))}
              </div>
              <Link href="/products" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-bright text-navy-dark font-bold text-sm hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 w-fit">
                {t.exploreProducts} <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }} className="relative">
              <div className="absolute -inset-8 bg-cyan-bright/5 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border border-white/8 shadow-2xl">
                <img src={`${BASE}/img/aboutusdetail/aboutimg.png`} alt="APM Group Facility" className="w-full h-auto object-cover" style={{ filter: "saturate(1.2) brightness(0.95)", minHeight: "340px" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050d14]/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl p-4 flex items-center justify-between gap-4" style={{ background: "rgba(5,13,26,0.88)", backdropFilter: "blur(16px)", border: "1px solid rgba(62,189,239,0.15)" }}>
                  {t.floatStats.map((s, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <span className="text-lg font-display font-extrabold text-cyan-bright leading-none">{s.val}</span>
                      <span className="text-[9px] uppercase tracking-wider text-white/40 mt-0.5">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── VISION & MISSION ── */}
        <section className="relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(37,99,235,0.18),transparent)]" />
            <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(62,189,239,0.10) 1px, transparent 1px)", backgroundSize: "44px 44px" }} />
          </div>
          <div className="relative py-16 px-6 max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <span className="text-[10px] uppercase tracking-widest text-cyan-bright font-bold">{t.vmTag}</span>
              <h2 className="text-3xl font-display font-bold text-white mt-2">{t.vmH2}</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.vmItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }} className={`glass-panel p-8 rounded-2xl border ${item.border} hover:shadow-lg transition-all duration-300 group`}>
                    <div className={`p-3 rounded-xl ${item.bg} ${item.color} w-fit mb-5 group-hover:scale-110 transition-transform duration-300`}><Icon className="w-6 h-6" /></div>
                    <h3 className={`text-xl font-display font-bold mb-3 ${item.color}`}>{item.label}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section className="relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 pointer-events-none">
            <img src={`${BASE}/img/GreenSafety/GreenSafety.png`} alt="" aria-hidden className="w-full h-full object-cover" style={{ opacity: 0.5, filter: "grayscale(0.3)" }} />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050d14]/60 via-[#050d14]/30 to-[#050d14]/60" />
          </div>
          <div className="relative py-16 px-6 max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="dark-bg text-center mb-12">
              <span className="text-[10px] uppercase tracking-widest text-cyan-bright font-bold">{t.valTag}</span>
              <h2 className="text-3xl font-display font-bold text-white mt-2">{t.valH2}</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }} whileHover={{ y: -6 }} className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-cyan-bright/25 transition-all duration-300 flex flex-col gap-3 group">
                    <div className="flex items-center justify-between">
                      <div className="p-2 rounded-lg bg-cyan-bright/10 text-cyan-bright group-hover:bg-cyan-bright/20 transition-colors"><Icon className="w-4 h-4" /></div>
                      <span className="text-xl font-bold text-cyan-bright/20 font-display">{v.num}</span>
                    </div>
                    <span className="font-display font-bold text-white text-sm leading-snug group-hover:text-cyan-bright transition-colors duration-300">{v.title}</span>
                    <p className="text-white/50 text-xs leading-relaxed">{v.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── TIMELINE ── */}
        <section className="relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_30%,rgba(62,189,239,0.14),transparent)]" />
            <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
          </div>
          <div className="relative py-20 px-6 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="text-[10px] uppercase tracking-widest text-cyan-bright font-bold">{t.tlTag}</span>
              <h2 className="text-3xl font-display font-bold text-white mt-2">{t.tlH2}</h2>
              <p className="text-white/50 text-sm mt-2 max-w-md mx-auto">{t.tlDesc}</p>
            </motion.div>
            <div className="relative">
              <div className="hidden md:block"><TimelineProgressLine /></div>
              <div className="space-y-0">
                {timeline.map((item, idx) => <TimelineCard key={idx} item={item} idx={idx} />)}
              </div>
            </div>
          </div>
        </section>

        {/* ── GREEN SAFETY ── */}
        <section className="py-16 px-6 max-w-7xl mx-auto border-t border-white/5">
          <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }} className="dark-bg rounded-3xl overflow-hidden border border-emerald-500/12 relative" style={{ background: "linear-gradient(135deg, rgba(5,13,26,0.95) 60%, rgba(16,185,129,0.08) 100%)" }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-10 md:p-14 flex flex-col gap-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/12 border border-emerald-500/25 w-fit">
                  <Leaf className="w-4 h-4 text-emerald-400" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400">{t.gsTag}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight">
                  {t.gsH3}<br /><span className="text-gradient-cyan-blue">{t.gsSpan}</span>
                </h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-md">{t.gsP}</p>
                <div className="flex flex-col gap-3">
                  {t.gsBullets.map((pt, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1 }} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-lg bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center flex-shrink-0">
                        <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <span className="text-white/70 text-sm">{pt}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="relative min-h-[320px] lg:min-h-0">
                <img src={`${BASE}/img/GreenSafety/GreenSafety.png`} alt="APM Green Safety Initiative" className="w-full h-full object-cover" style={{ filter: "saturate(1.2) brightness(0.8)" }} />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050d14]/80 via-[#050d14]/30 to-transparent lg:bg-gradient-to-r" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050d14]/60 to-transparent" />
              </div>
            </div>
          </motion.div>
        </section>

      </div>
    </PageTransition>
  );
}
