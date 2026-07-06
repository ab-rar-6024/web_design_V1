"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Cpu, Shield, Users, Cloud, Sun, Moon } from "lucide-react";

type Theme = "dark" | "light";
type Lang = "en" | "ar";

const translations = {
  en: {
    about: "About",
    products: "Products",
    verticals: "Verticals",
    blogs: "Blogs",
    news: "News",
    contactUs: "Contact Us",
    productLines: "Product Lines",
    allProducts: "All Products",
    allProductsSub: "View our entire industrial & safety lineup",
    b2cLabel: "B2C Tech",
    b2cSub: "GPS Trackers, Speed Devices & Cameras",
    b2gLabel: "B2G Solutions",
    b2gSub: "AIS 140, Signage & Smart Driving Tracks",
    sectorsServe: "Sectors We Serve",
    b2bLabel: "B2B Solutions",
    b2bDesc: "Business Solutions",
    individualTech: "Individual Tech",
    govCompliance: "Government Compliance",
    softwareCloud: "Software & Cloud",
    codeCloud: "Code & Cloud Platform",
  },
  ar: {
    about: "حول",
    products: "المنتجات",
    verticals: "القطاعات",
    blogs: "المدونة",
    news: "الأخبار",
    contactUs: "تواصل معنا",
    productLines: "خطوط المنتجات",
    allProducts: "جميع المنتجات",
    allProductsSub: "استعرض تشكيلتنا الكاملة",
    b2cLabel: "تقنية B2C",
    b2cSub: "أجهزة GPS، حاكم السرعة والكاميرات",
    b2gLabel: "حلول B2G",
    b2gSub: "AIS 140 واللافتات ومسارات القيادة",
    sectorsServe: "القطاعات التي نخدمها",
    b2bLabel: "حلول B2B",
    b2bDesc: "حلول الأعمال",
    individualTech: "تقنية فردية",
    govCompliance: "الامتثال الحكومي",
    softwareCloud: "البرمجيات والسحابة",
    codeCloud: "منصة الكود والسحابة",
  },
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");
  const [lang, setLang] = useState<Lang>("en");
  const pathname = usePathname();

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("apm-theme") as Theme | null;
      const savedLang = localStorage.getItem("apm-lang") as Lang | null;
      if (savedTheme) setTheme(savedTheme);
      if (savedLang) setLang(savedLang);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("apm-theme", theme); } catch {}
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    try { localStorage.setItem("apm-lang", lang); } catch {}
  }, [lang]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeAll = () => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const tr = translations[lang];
  const isLight = theme === "light";

  const navbarBg = isLight
    ? scrolled ? "rgba(240, 246, 255, 0.98)" : "rgba(240, 246, 255, 0.94)"
    : scrolled ? "rgba(5, 13, 26, 0.97)" : "rgba(5, 13, 26, 0.90)";

  const navbarBorder = isLight
    ? "1px solid rgba(11,25,44,0.12)"
    : "1px solid rgba(255,255,255,0.09)";

  const navbarShadow = scrolled
    ? isLight
      ? "0 8px 40px rgba(0,0,0,0.08), inset 0 -1px 0 rgba(62,189,239,0.06)"
      : "0 8px 40px rgba(0,0,0,0.45), inset 0 -1px 0 rgba(62,189,239,0.06)"
    : "none";

  const dropdownStyle = {
    background: isLight ? "rgba(255,255,255,0.98)" : "rgba(8,18,34,0.92)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: isLight ? "1px solid rgba(11,25,44,0.10)" : "1px solid rgba(255,255,255,0.09)",
    boxShadow: isLight
      ? "0 24px 60px rgba(0,0,0,0.10), 0 0 0 1px rgba(62,189,239,0.06)"
      : "0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(62,189,239,0.06)",
  };

  const drawerStyle = {
    background: isLight ? "rgba(240,246,255,0.98)" : "rgba(5,13,26,0.97)",
    backdropFilter: "blur(24px)",
    WebkitBackdropFilter: "blur(24px)",
    borderLeft: isLight ? "1px solid rgba(11,25,44,0.08)" : "1px solid rgba(255,255,255,0.08)",
  };

  const mutedText = isLight ? "text-navy-dark/40" : "text-white/40";
  const subText = isLight ? "text-navy-dark/30" : "text-white/30";
  const primaryText = isLight ? "text-navy-dark" : "text-white";
  const navLink = isLight ? "text-navy-dark/75" : "text-white/75";
  const mobileHover = isLight ? "hover:bg-navy-dark/5" : "hover:bg-white/5";
  const drawerDivider = isLight ? "border-navy-dark/8" : "border-white/8";

  const navLinkClass = (active: boolean) =>
    `text-sm font-medium transition-colors duration-200 hover:text-cyan-bright ${active ? "text-cyan-bright" : navLink}`;

  const productLinks = [
    { href: "/products",      label: tr.allProducts, sub: tr.allProductsSub, color: "group-hover:text-cyan-bright" },
    { href: "/solutions/b2c", label: tr.b2cLabel,    sub: tr.b2cSub,         color: "group-hover:text-emerald-400" },
    { href: "/solutions/b2g", label: tr.b2gLabel,    sub: tr.b2gSub,         color: "group-hover:text-amber-400" },
  ];

  const verticals = [
    { name: tr.b2bLabel,      href: "/solutions/b2b",      desc: tr.b2bDesc,       icon: Users,  color: "text-blue-400",    bg: "bg-blue-500/10 border-blue-500/20" },
    { name: tr.b2cLabel,      href: "/solutions/b2c",      desc: tr.individualTech, icon: Cpu,   color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
    { name: tr.b2gLabel,      href: "/solutions/b2g",      desc: tr.govCompliance,  icon: Shield, color: "text-amber-400",  bg: "bg-amber-500/10 border-amber-500/20" },
    { name: tr.softwareCloud, href: "/solutions/software",  desc: tr.codeCloud,     icon: Cloud,  color: "text-purple-400", bg: "bg-purple-500/10 border-purple-500/20" },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 transition-all duration-400 py-3"
      style={{ background: navbarBg, backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", borderBottom: navbarBorder, boxShadow: navbarShadow }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8">

        {/* Logo */}
        <Link href="/" onClick={closeAll} className="flex items-center flex-shrink-0 group">
          <img
            src="https://apmgroups.in/img/Layoutimg/apm-logo-1.png"
            alt="APM Group"
            className="h-10 w-auto object-contain group-hover:opacity-85 transition-opacity duration-300"
            style={{ filter: isLight ? "brightness(0.75) saturate(1.1)" : "brightness(1.05)" }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7 flex-1 justify-center">
          <Link href="/about" className={navLinkClass(pathname === "/about")}>{tr.about}</Link>

          {/* Products dropdown */}
          <div className="relative" onMouseEnter={() => setActiveDropdown("products")} onMouseLeave={() => setActiveDropdown(null)}>
            <button
              suppressHydrationWarning
              onClick={() => setActiveDropdown(activeDropdown === "products" ? null : "products")}
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-cyan-bright outline-none ${pathname.startsWith("/products") ? "text-cyan-bright" : navLink}`}
            >
              {tr.products}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "products" ? "rotate-180" : ""}`} />
            </button>

            {activeDropdown === "products" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-72 pt-3">
                <div className="rounded-2xl p-3 shadow-2xl" style={dropdownStyle}>
                  <p className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest mb-1 ${subText}`}>
                    {tr.productLines}
                  </p>
                  {productLinks.map((p) => (
                    <Link key={p.href} href={p.href} onClick={closeAll} className="flex flex-col px-3 py-2.5 rounded-xl hover:bg-white/6 transition-colors group">
                      <span className={`text-sm font-semibold ${primaryText} ${p.color} transition-colors`}>{p.label}</span>
                      <span className={`text-xs mt-0.5 ${mutedText}`}>{p.sub}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Verticals dropdown */}
          <div className="relative" onMouseEnter={() => setActiveDropdown("verticals")} onMouseLeave={() => setActiveDropdown(null)}>
            <button
              suppressHydrationWarning
              onClick={() => setActiveDropdown(activeDropdown === "verticals" ? null : "verticals")}
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-cyan-bright outline-none ${pathname.startsWith("/solutions") ? "text-cyan-bright" : navLink}`}
            >
              {tr.verticals}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "verticals" ? "rotate-180" : ""}`} />
            </button>

            {activeDropdown === "verticals" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3" style={{ width: "360px" }}>
                <div className="rounded-2xl p-3 shadow-2xl" style={dropdownStyle}>
                  <p className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest mb-1 ${subText}`}>
                    {tr.sectorsServe}
                  </p>
                  {verticals.map((v) => {
                    const Icon = v.icon;
                    return (
                      <Link key={v.name} href={v.href} onClick={closeAll} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/6 transition-colors group">
                        <div className={`p-2 rounded-lg border ${v.bg} ${v.color} flex-shrink-0`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col">
                          <span className={`text-sm font-semibold ${primaryText} group-hover:text-cyan-bright transition-colors`}>{v.name}</span>
                          <span className={`text-xs ${mutedText}`}>{v.desc}</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <Link href="/blogs" className={navLinkClass(pathname === "/blogs")}>{tr.blogs}</Link>
          <Link href="/news" className={navLinkClass(pathname === "/news")}>{tr.news}</Link>
        </nav>

        {/* Desktop CTA + toggles */}
        <div className="hidden lg:flex items-center gap-2 flex-shrink-0">

          {/* Language toggle */}
          <div
            className="flex items-center rounded-lg overflow-hidden text-xs font-bold"
            style={{ border: isLight ? "1px solid rgba(11,25,44,0.20)" : "1px solid rgba(255,255,255,0.20)" }}
          >
            <button
              onClick={() => setLang("en")}
              className="px-2.5 py-1.5 transition-all duration-200"
              style={lang === "en" ? { background: "#3ebdef", color: "#0b192c" } : { color: isLight ? "rgba(11,25,44,0.55)" : "rgba(255,255,255,0.55)" }}
            >
              EN
            </button>
            <span style={{ width: "1px", height: "14px", background: isLight ? "rgba(11,25,44,0.15)" : "rgba(255,255,255,0.15)", display: "block" }} />
            <button
              onClick={() => setLang("ar")}
              className="px-2.5 py-1.5 transition-all duration-200"
              style={lang === "ar" ? { background: "#3ebdef", color: "#0b192c" } : { color: isLight ? "rgba(11,25,44,0.55)" : "rgba(255,255,255,0.55)" }}
            >
              AR
            </button>
          </div>

          {/* Theme toggle */}
          <button
            suppressHydrationWarning
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-lg transition-all duration-200"
            style={{ color: isLight ? "rgba(11,25,44,0.60)" : "rgba(255,255,255,0.60)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = isLight ? "rgba(11,25,44,0.08)" : "rgba(255,255,255,0.08)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <Link
            href="/contact"
            onClick={closeAll}
            className="px-5 py-2 rounded-lg text-sm font-semibold border border-cyan-bright/60 text-cyan-bright hover:bg-cyan-bright hover:text-navy-dark hover:border-cyan-bright transition-all duration-250 hover:-translate-y-0.5 shadow-sm shadow-cyan-500/10 hover:shadow-cyan-500/25"
          >
            {tr.contactUs}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          suppressHydrationWarning
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl transition-all duration-200"
          style={{
            color: isLight ? "#0b192c" : "#ffffff",
            background: isLight ? "rgba(11,25,44,0.07)" : "rgba(255,255,255,0.10)",
            border: isLight ? "1px solid rgba(11,25,44,0.12)" : "1px solid rgba(255,255,255,0.12)",
          }}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          style={{ background: isLight ? "rgba(0,0,0,0.30)" : "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile drawer — comes from right (LTR) or left (RTL) */}
      <div
        className={`fixed top-0 h-full w-4/5 max-w-xs z-50 flex flex-col shadow-2xl lg:hidden transform transition-transform duration-300 ease-in-out ${lang === "ar" ? "left-0" : "right-0"} ${isMobileMenuOpen ? "translate-x-0" : lang === "ar" ? "-translate-x-full" : "translate-x-full"}`}
        style={drawerStyle}
      >
        {/* Drawer header */}
        <div className={`flex items-center justify-between px-5 py-4 border-b ${drawerDivider}`}>
          <img
            src="https://apmgroups.in/img/Layoutimg/apm-logo-1.png"
            alt="APM Group"
            className="h-8 w-auto object-contain"
            style={{ filter: isLight ? "brightness(0.75) saturate(1.1)" : "brightness(1.05)" }}
          />
          <div className="flex items-center gap-2">
            {/* Mobile language toggle */}
            <div
              className="flex items-center rounded-lg overflow-hidden text-xs font-bold"
              style={{ border: isLight ? "1px solid rgba(11,25,44,0.20)" : "1px solid rgba(255,255,255,0.20)" }}
            >
              <button
                onClick={() => setLang("en")}
                className="px-2 py-1 transition-all duration-200"
                style={lang === "en" ? { background: "#3ebdef", color: "#0b192c" } : { color: isLight ? "rgba(11,25,44,0.55)" : "rgba(255,255,255,0.55)" }}
              >EN</button>
              <span style={{ width: "1px", height: "12px", background: isLight ? "rgba(11,25,44,0.15)" : "rgba(255,255,255,0.15)", display: "block" }} />
              <button
                onClick={() => setLang("ar")}
                className="px-2 py-1 transition-all duration-200"
                style={lang === "ar" ? { background: "#3ebdef", color: "#0b192c" } : { color: isLight ? "rgba(11,25,44,0.55)" : "rgba(255,255,255,0.55)" }}
              >AR</button>
            </div>

            {/* Mobile theme toggle */}
            <button
              suppressHydrationWarning
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-1.5 rounded-lg transition-all duration-200"
              style={{ color: isLight ? "rgba(11,25,44,0.60)" : "rgba(255,255,255,0.60)" }}
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              suppressHydrationWarning
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-xl transition-colors"
              style={{ color: isLight ? "rgba(11,25,44,0.60)" : "rgba(255,255,255,0.60)" }}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <nav className="flex flex-col gap-1 p-4 overflow-y-auto flex-1">
          <Link
            href="/about" onClick={closeAll}
            className={`px-3 py-2.5 rounded-xl text-base font-medium transition-colors ${pathname === "/about" ? "text-cyan-bright bg-cyan-bright/8" : `${primaryText} ${mobileHover}`}`}
          >
            {tr.about}
          </Link>

          {/* Mobile Products */}
          <div>
            <button
              suppressHydrationWarning
              onClick={() => setActiveDropdown(activeDropdown === "mob-products" ? null : "mob-products")}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-base font-medium transition-colors ${primaryText} ${mobileHover}`}
            >
              {tr.products} <ChevronDown className={`w-4 h-4 transition-transform duration-250 ${activeDropdown === "mob-products" ? "rotate-180" : ""}`} />
            </button>
            {activeDropdown === "mob-products" && (
              <div className={`ml-3 pl-3 border-l flex flex-col gap-1 mt-1 ${isLight ? "border-navy-dark/10" : "border-white/10"}`}>
                {productLinks.map((p) => (
                  <Link key={p.href} href={p.href} onClick={closeAll} className={`py-2 px-2 text-sm rounded-lg transition-colors ${isLight ? "text-navy-dark/65 hover:text-navy-dark hover:bg-navy-dark/5" : "text-white/65 hover:text-white hover:bg-white/5"}`}>
                    {p.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Verticals */}
          <div>
            <button
              suppressHydrationWarning
              onClick={() => setActiveDropdown(activeDropdown === "mob-verticals" ? null : "mob-verticals")}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-base font-medium transition-colors ${primaryText} ${mobileHover}`}
            >
              {tr.verticals} <ChevronDown className={`w-4 h-4 transition-transform duration-250 ${activeDropdown === "mob-verticals" ? "rotate-180" : ""}`} />
            </button>
            {activeDropdown === "mob-verticals" && (
              <div className={`ml-3 pl-3 border-l flex flex-col gap-1 mt-1 ${isLight ? "border-navy-dark/10" : "border-white/10"}`}>
                {verticals.map((v) => (
                  <Link key={v.name} href={v.href} onClick={closeAll} className={`py-2 px-2 text-sm rounded-lg transition-colors ${isLight ? "text-navy-dark/65 hover:text-navy-dark hover:bg-navy-dark/5" : "text-white/65 hover:text-white hover:bg-white/5"}`}>
                    {v.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/blogs" onClick={closeAll} className={`px-3 py-2.5 rounded-xl text-base font-medium transition-colors ${pathname === "/blogs" ? "text-cyan-bright bg-cyan-bright/8" : `${primaryText} ${mobileHover}`}`}>{tr.blogs}</Link>
          <Link href="/news" onClick={closeAll} className={`px-3 py-2.5 rounded-xl text-base font-medium transition-colors ${pathname === "/news" ? "text-cyan-bright bg-cyan-bright/8" : `${primaryText} ${mobileHover}`}`}>{tr.news}</Link>
        </nav>

        <div className={`p-4 border-t ${drawerDivider}`}>
          <Link href="/contact" onClick={closeAll} className="w-full flex items-center justify-center py-3 rounded-xl text-sm font-bold bg-cyan-bright text-navy-dark hover:bg-cyan-bright/90 transition-colors shadow-lg shadow-cyan-500/20">
            {tr.contactUs}
          </Link>
        </div>
      </div>
    </header>
  );
}
