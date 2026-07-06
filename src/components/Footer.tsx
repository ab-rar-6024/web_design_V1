"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Youtube, PhoneCall, MessageCircle } from "lucide-react";

const PHONE_DISPLAY = "+91 96006 96008";
const PHONE_RAW = "919600696008";
const WHATSAPP_URL = `https://wa.me/${PHONE_RAW}`;
const EMAIL = "info@apmgroups.in";
const ADDRESS = "No. 21, School Street, Chettiyaragaram, Vanagaram, Chennai – 600 095, Tamil Nadu, India";

/* WhatsApp SVG icon (exact brand green) */
function WAIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#25D366" />
      <path d="M23.5 8.5C21.6 6.6 19.1 5.5 16.4 5.5C10.9 5.5 6.4 10 6.4 15.5C6.4 17.3 6.9 19 7.8 20.5L6.3 26L12 24.5C13.4 25.3 15 25.8 16.6 25.8C22.1 25.8 26.6 21.3 26.6 15.8C26.5 13.1 25.4 10.4 23.5 8.5ZM16.4 23.9C15 23.9 13.6 23.5 12.4 22.7L12.1 22.5L8.8 23.4L9.7 20.2L9.5 19.9C8.6 18.6 8.1 17.1 8.1 15.5C8.1 11 11.8 7.3 16.4 7.3C18.6 7.3 20.7 8.2 22.2 9.8C23.7 11.3 24.7 13.4 24.7 15.6C24.8 20.2 21.1 23.9 16.4 23.9ZM21 17.8C20.7 17.6 19.3 17 19 16.8C18.7 16.7 18.5 16.6 18.3 16.9C18.1 17.2 17.6 17.8 17.4 18C17.3 18.2 17.1 18.2 16.8 18.1C16.5 17.9 15.6 17.6 14.5 16.6C13.7 15.9 13.1 15 12.9 14.7C12.8 14.4 12.9 14.2 13.1 14C13.2 13.9 13.4 13.7 13.6 13.5C13.7 13.4 13.8 13.2 13.9 13.1C14 12.9 13.9 12.7 13.9 12.6C13.8 12.4 13.2 11 13 10.5C12.8 10.1 12.6 10.1 12.4 10.1H11.8C11.6 10.1 11.3 10.2 11 10.5C10.7 10.8 9.9 11.6 9.9 13C9.9 14.4 11.1 15.8 11.2 16C11.4 16.2 13.2 19 16 20.2C18.8 21.4 18.8 21 19.4 20.9C20 20.9 21.3 20.1 21.5 19.4C21.8 18.6 21.8 18 21.7 17.9C21.6 17.8 21.3 17.9 21 17.8Z" fill="white"/>
    </svg>
  );
}

/* Small phone-action popup reused in both main footer and sub-bar */
function PhonePopup({ phoneRaw, onClose, message }: { phoneRaw: string; onClose: () => void; message?: string }) {
  const waHref = message
    ? `https://wa.me/${phoneRaw}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${phoneRaw}`;

  return (
    <div
      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 rounded-xl overflow-hidden shadow-2xl z-50 flex flex-col"
      style={{ minWidth: "170px", background: "rgba(8,20,40,0.98)", border: "1px solid rgba(62,189,239,0.25)", backdropFilter: "blur(16px)" }}
    >
      <a
        href={`tel:+${phoneRaw}`}
        className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-white hover:bg-white/8 transition-colors"
        onClick={onClose}
      >
        <div className="w-7 h-7 rounded-lg bg-cyan-bright/15 border border-cyan-bright/25 flex items-center justify-center flex-shrink-0">
          <PhoneCall className="w-3.5 h-3.5 text-cyan-bright" />
        </div>
        Call Now
      </a>
      <div style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-white hover:bg-white/8 transition-colors"
        onClick={onClose}
      >
        <div className="w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center flex-shrink-0">
          <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
        </div>
        WhatsApp
      </a>
    </div>
  );
}

export default function Footer() {
  const [showCallMenu, setShowCallMenu] = useState(false);
  const callRef = useRef<HTMLDivElement>(null);
  // Sub-bar phone popups
  const [activeSubPhone, setActiveSubPhone] = useState<"p1" | "p2" | null>(null);
  const subPhone1Ref = useRef<HTMLDivElement>(null);
  const subPhone2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showCallMenu) return;
    const handler = (e: MouseEvent) => {
      if (callRef.current && !callRef.current.contains(e.target as Node)) {
        setShowCallMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [showCallMenu]);

  useEffect(() => {
    if (!activeSubPhone) return;
    const handler = (e: MouseEvent) => {
      const r1 = subPhone1Ref.current;
      const r2 = subPhone2Ref.current;
      if (r1 && !r1.contains(e.target as Node) && r2 && !r2.contains(e.target as Node)) {
        setActiveSubPhone(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [activeSubPhone]);

  const featuredProducts = [
    { name: "AIS 140 GPS", href: "/products#ais-140" },
    { name: "Auto Dipper", href: "/products#auto-dipper" },
    { name: "Rover Elite Plus", href: "/products#rover-elite" },
    { name: "4G Surveillance", href: "/products#camera" },
    { name: "Speed Governor", href: "/products#speed-governor" },
    { name: "Payload System", href: "/products#payload" },
    { name: "DC Converter", href: "/products#dc-converter" },
    { name: "IoT M2M eSIM", href: "/products#iot-esim" },
  ];

  const quickLinks = [
    { name: "About APM", href: "/about" },
    { name: "B2B Solutions", href: "/solutions/b2b" },
    { name: "B2C Products", href: "/solutions/b2c" },
    { name: "B2G / Government", href: "/solutions/b2g" },
    { name: "Software & Cloud", href: "/solutions/software" },
    { name: "Blogs", href: "/blogs" },
    { name: "News", href: "/news" },
    { name: "Contact Us", href: "/contact" },
  ];

  const socialLinks = [
    { name: "Facebook",  href: "https://www.facebook.com/people/APM/61572877825509/", icon: Facebook },
    { name: "Instagram", href: "https://www.instagram.com/apmgroup_/",                icon: Instagram },
    { name: "X (Twitter)", href: "https://x.com/APMGROUP_",                           icon: Twitter },
    { name: "LinkedIn",  href: "https://www.linkedin.com/company/apm-groups/",        icon: Linkedin },
    { name: "YouTube",   href: "https://www.youtube.com/channel/UCdwsr-Si04OiaKKs4s3cHIA", icon: Youtube },
  ];

  return (
  <>
    <footer className="text-white pt-16 pb-8" style={{ background: "var(--footer-bg)", borderTop: "1px solid rgba(62,189,239,0.18)" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14" style={{ borderBottom: "1px solid rgba(255,255,255,0.10)" }}>

          {/* Brand + Contact */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col gap-5">
            <Link href="/">
              <img
                src="https://apmgroups.in/img/Layoutimg/apm-logo-1.png"
                alt="APM Group"
                className="h-10 w-auto object-contain"
                style={{ filter: "brightness(1.1)" }}
              />
            </Link>

            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              India's leading IoT automotive company — 35+ years of trust, 1.2M+ devices deployed across 10+ countries.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-3 mt-1">

              {/* Address */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-bright flex-shrink-0 mt-0.5" />
                <span className="text-white/55 text-xs leading-relaxed">{ADDRESS}</span>
              </div>

              {/* Phone — click shows Call / WhatsApp options */}
              <div className="relative" ref={callRef}>
                <button
                  onClick={() => setShowCallMenu((v) => !v)}
                  className="flex items-center gap-2.5 group"
                >
                  <Phone className="w-4 h-4 text-cyan-bright flex-shrink-0" />
                  <span className="text-white/75 text-sm font-medium group-hover:text-cyan-bright transition-colors duration-200">
                    {PHONE_DISPLAY}
                  </span>
                </button>

                {/* Call / WhatsApp popup */}
                {showCallMenu && (
                  <PhonePopup phoneRaw={PHONE_RAW} onClose={() => setShowCallMenu(false)} />
                )}
              </div>

              {/* Email */}
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2.5 group"
              >
                <Mail className="w-4 h-4 text-cyan-bright flex-shrink-0" />
                <span className="text-white/75 text-sm group-hover:text-cyan-bright transition-colors duration-200">
                  {EMAIL}
                </span>
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-white/40">Our Products</span>
            <ul className="grid grid-cols-1 gap-2">
              {featuredProducts.map((p) => (
                <li key={p.name}>
                  <Link href={p.href} className="text-sm text-white/65 hover:text-cyan-bright transition-colors duration-200">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-white/40">Quick Links</span>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((p) => (
                <li key={p.name}>
                  <Link href={p.href} className="text-sm text-white/65 hover:text-cyan-bright transition-colors duration-200">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-white/40">Follow Us</span>
            <ul className="flex flex-col gap-2.5">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 text-sm text-white/65 hover:text-cyan-bright transition-colors duration-200 group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-bright/10 group-hover:border-cyan-bright/25 transition-all duration-200">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      {s.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-white/45">
            © 2026 APM Group. All rights reserved.
          </span>
          <div className="flex flex-wrap items-center gap-5 text-xs text-white/45">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookie Settings</Link>
            <a
              href="https://www.apmtechnologies.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-bright transition-colors font-medium border-l border-white/10 pl-5"
            >
              Developed by APM Tech
            </a>
          </div>
        </div>

      </div>
    </footer>

    {/* ── Secondary attribution bar (AIKONIK) ── */}
    <div style={{ background: "#ffffff", borderTop: "1px solid #e2e8f0" }}>
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
        <span style={{ color: "#4a5568", fontSize: "12px" }}>© 2026 AIKONIK</span>
        <span style={{ color: "#cbd5e0", fontSize: "12px" }}>|</span>
        <span style={{ color: "#4a5568", fontSize: "12px" }}>Contact:</span>

        {/* Phone 1 */}
        <div className="relative flex items-center gap-1.5" ref={subPhone1Ref}>
          <WAIcon size={15} />
          <button
            onClick={() => setActiveSubPhone(activeSubPhone === "p1" ? null : "p1")}
            className="transition-colors duration-200 hover:underline"
            style={{ color: "#22c35e", fontSize: "12px", fontWeight: 600 }}
          >
            9042272801
          </button>
          {activeSubPhone === "p1" && (
            <PhonePopup
              phoneRaw="919042272801"
              onClose={() => setActiveSubPhone(null)}
              message="Hi! I have seen your website and we would also love a similar website for our business. Please get in touch with us."
            />
          )}
        </div>

        <span style={{ color: "#4a5568", fontSize: "12px" }}>/</span>

        {/* Phone 2 */}
        <div className="relative flex items-center gap-1.5" ref={subPhone2Ref}>
          <WAIcon size={15} />
          <button
            onClick={() => setActiveSubPhone(activeSubPhone === "p2" ? null : "p2")}
            className="transition-colors duration-200 hover:underline"
            style={{ color: "#22c35e", fontSize: "12px", fontWeight: 600 }}
          >
            8122922605
          </button>
          {activeSubPhone === "p2" && (
            <PhonePopup
              phoneRaw="918122922605"
              onClose={() => setActiveSubPhone(null)}
              message="Hi! I have seen your website and we would also love a similar website for our business. Please get in touch with us."
            />
          )}
        </div>
      </div>
    </div>
  </>
  );
}
