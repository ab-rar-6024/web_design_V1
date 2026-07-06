"use client";

import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Twitter, Linkedin, Youtube, ChevronDown, X, Sparkles, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";

/* ── APM product catalogue ─────────────────────────────────── */
const APM_PRODUCTS = [
  { name: "AIS 140 Compliance GPS",      recommended: true  },
  { name: "4G Vehicle Surveillance",     recommended: true  },
  { name: "Auto Dipper Beam Control",    recommended: false },
  { name: "Rover Elite Plus GPS",        recommended: false },
  { name: "DC to DC Power Converter",    recommended: false },
  { name: "Axle Payload System",         recommended: false },
  { name: "Speed Limiting Device (SLD)", recommended: false },
  { name: "Vehicle Safety Toolkit",      recommended: false },
  { name: "Rover View Camera",           recommended: false },
  { name: "IoT M2M E-SIM",              recommended: false },
  { name: "Emission Pollution Machine",  recommended: false },
  { name: "BMS Card",                    recommended: false },
  { name: "Reflomax Conspicuity Tape",   recommended: false },
  { name: "Reverse Parking System",      recommended: false },
  { name: "Auto Fare Meter",             recommended: false },
];

/* ── Message quick-fill suggestions ───────────────────────── */
const MSG_SUGGESTIONS = [
  "I'm enquiring about your GPS tracking solutions for my commercial fleet. Please share product details and pricing.",
  "We need AIS 140 compliant devices for government registration. Kindly send specifications and bulk pricing.",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [productDropOpen, setProductDropOpen] = useState(false);
  const [captchaCode, setCaptchaCode] = useState("");
  const [userCaptcha, setUserCaptcha] = useState("");
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success">("idle");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const productDropRef = useRef<HTMLDivElement>(null);

  /* captcha */
  const generateCaptcha = () => {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    setCaptchaCode(Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join(""));
    setUserCaptcha("");
  };

  useEffect(() => { generateCaptcha(); }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !captchaCode) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(255,255,255,0.04)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "rgba(62,189,239,0.12)";
    for (let i = 0; i < 4; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.stroke();
    }
    ctx.font = "bold 24px monospace";
    ctx.fillStyle = "#3ebdef";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    captchaCode.split("").forEach((char, idx) => {
      ctx.save();
      const x = (canvas.width / (captchaCode.length + 1)) * (idx + 1);
      const y = canvas.height / 2 + (Math.random() * 8 - 4);
      ctx.translate(x, y);
      ctx.rotate((Math.random() * 30 - 15) * Math.PI / 180);
      ctx.fillText(char, 0, 0);
      ctx.restore();
    });
  }, [captchaCode]);

  /* close product dropdown on outside click */
  useEffect(() => {
    if (!productDropOpen) return;
    const handler = (e: MouseEvent) => {
      if (productDropRef.current && !productDropRef.current.contains(e.target as Node)) {
        setProductDropOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [productDropOpen]);

  const toggleProduct = (name: string) => {
    setSelectedProducts((prev) =>
      prev.includes(name) ? prev.filter((p) => p !== name) : [...prev, name]
    );
  };

  const removeProduct = (name: string) => setSelectedProducts((prev) => prev.filter((p) => p !== name));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedProducts.length === 0) {
      alert("Please select at least one product or service.");
      return;
    }
    if (userCaptcha.trim() !== captchaCode) {
      alert("Invalid captcha. Please try again.");
      generateCaptcha();
      return;
    }
    setSubmitStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          products: selectedProducts,
          message: formData.message,
        }),
      });
      if (!res.ok) throw new Error("Server error");
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSelectedProducts([]);
      generateCaptcha();
    } catch {
      alert("Failed to send. Please try again or email us directly at info@apmgroups.in");
      setSubmitStatus("idle");
    }
  };

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-cyan-bright transition-colors";

  return (
    <PageTransition>
      <div className="bg-[#050d14] pt-32 pb-24 text-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero */}
          <motion.section
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit mb-4">
              <span className="w-2 h-2 rounded-full bg-cyan-bright animate-pulse" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-bright">Contact APM</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-display font-extrabold max-w-4xl leading-tight">
              Custom Hardware. Intelligent Software.<br className="hidden sm:block" />
              {" "}<span className="text-gradient">Let's Drive Innovation Together.</span>
            </h1>
            <p className="text-white/55 text-sm md:text-base leading-relaxed mt-4 max-w-2xl">
              Whether you're looking for safety device specifications, a commercial quotation, or an IoT partnership — our engineers are ready to assist.
            </p>
          </motion.section>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: contact details + map */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="lg:col-span-5 flex flex-col gap-8"
            >
              <div className="flex flex-col gap-6">
                {[
                  { icon: Mail,  label: "Email Us",    value: "contact@apmiot.com",  href: "mailto:contact@apmiot.com" },
                  { icon: Phone, label: "Call Hotline", value: "+91 96006 96008",    href: "tel:+919600696008" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/8 text-cyan-bright flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-white/35 mb-1">{item.label}</p>
                        <a href={item.href} className="text-white hover:text-cyan-bright transition-colors text-sm font-semibold">
                          {item.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/8 text-cyan-bright flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/35 mb-1">Chennai Head Office</p>
                    <p className="text-white text-sm font-semibold leading-relaxed">
                      No. 21, School Street, Chettiyaragaram,<br />
                      Vanagaram, Chennai - 600 095.
                    </p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="flex flex-col gap-3">
                <p className="text-xs uppercase tracking-wider text-white/35">Follow Us</p>
                <div className="flex items-center gap-3">
                  {[
                    { icon: Facebook,  href: "https://www.facebook.com/people/APM/61572877825509/" },
                    { icon: Instagram, href: "https://www.instagram.com/apmgroup_/" },
                    { icon: Twitter,   href: "https://x.com/APMGROUP_" },
                    { icon: Linkedin,  href: "https://www.linkedin.com/company/apm-groups/" },
                    { icon: Youtube,   href: "https://www.youtube.com/channel/UCdwsr-Si04OiaKKs4s3cHIA" },
                  ].map((s, i) => {
                    const Icon = s.icon;
                    return (
                      <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-white/5 border border-white/8 text-white/50 hover:text-cyan-bright hover:border-cyan-bright/30 hover:-translate-y-0.5 transition-all duration-200">
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl border border-white/8 overflow-hidden shadow-2xl h-[240px] bg-white/5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.567783563221!2d80.16534597494505!3d13.063160987260673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261852f1369d7%3A0x9d3dc3c8f1dc2bf9!2sAPM%20GROUPS!5e0!3m2!1sen!2sin!4v1690298549151!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="lg:col-span-7"
            >
              <div className="dark-bg p-8 rounded-2xl border border-white/8" style={{ background: "rgba(5,13,26,0.92)", backdropFilter: "blur(12px)" }}>
                <h2 className="text-xl font-display font-bold text-white mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs text-white/50 font-semibold uppercase tracking-wider">Your Name</label>
                      <input type="text" required value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={inputClass} placeholder="e.g. Arjun Sharma" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs text-white/50 font-semibold uppercase tracking-wider">Phone Number</label>
                      <input type="tel" required value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={inputClass} placeholder="e.g. +91 99000 99000" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-white/50 font-semibold uppercase tracking-wider">Email Address</label>
                    <input type="email" required value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={inputClass} placeholder="e.g. arjun@company.com" />
                  </div>

                  {/* ── Product / Service multi-select ── */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-white/50 font-semibold uppercase tracking-wider">
                      Product / Service
                      <span className="ml-2 normal-case font-normal text-white/30">(select one or more)</span>
                    </label>

                    <div className="relative" ref={productDropRef}>
                      {/* Trigger / tag display */}
                      <div
                        onClick={() => setProductDropOpen((o) => !o)}
                        className="min-h-[46px] w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 flex flex-wrap gap-1.5 items-center cursor-pointer transition-colors hover:border-white/20 focus-within:border-cyan-bright"
                        style={{ borderColor: productDropOpen ? "rgba(62,189,239,0.7)" : undefined }}
                      >
                        {selectedProducts.length === 0 ? (
                          <span className="text-sm text-white/30 py-0.5 px-1">Select products…</span>
                        ) : (
                          selectedProducts.map((name) => (
                            <span
                              key={name}
                              className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold"
                              style={{ background: "rgba(62,189,239,0.15)", border: "1px solid rgba(62,189,239,0.35)", color: "#3ebdef" }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              {name}
                              <button
                                type="button"
                                onClick={() => removeProduct(name)}
                                className="ml-0.5 hover:text-white transition-colors"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </span>
                          ))
                        )}
                        <ChevronDown
                          className="w-4 h-4 text-white/30 ml-auto flex-shrink-0 transition-transform duration-200"
                          style={{ transform: productDropOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                        />
                      </div>

                      {/* Dropdown panel */}
                      <AnimatePresence>
                        {productDropOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -6, scaleY: 0.96 }}
                            animate={{ opacity: 1, y: 0, scaleY: 1 }}
                            exit={{ opacity: 0, y: -6, scaleY: 0.96 }}
                            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute top-full left-0 right-0 mt-1.5 rounded-xl overflow-hidden z-50 shadow-2xl"
                            style={{ background: "rgba(6,14,28,0.98)", border: "1px solid rgba(62,189,239,0.20)", backdropFilter: "blur(16px)", maxHeight: "300px", overflowY: "auto" }}
                          >
                            {/* Recommended section */}
                            <div className="px-3 pt-2.5 pb-1">
                              <span className="text-[9px] font-bold uppercase tracking-widest text-cyan-bright/60">Recommended</span>
                            </div>
                            {APM_PRODUCTS.filter((p) => p.recommended).map((product) => {
                              const selected = selectedProducts.includes(product.name);
                              return (
                                <button
                                  key={product.name}
                                  type="button"
                                  onClick={() => toggleProduct(product.name)}
                                  className="w-full flex items-center justify-between px-3 py-2.5 text-left transition-colors duration-150 hover:bg-white/6 group"
                                >
                                  <div className="flex items-center gap-2">
                                    <Sparkles className="w-3.5 h-3.5 text-cyan-bright flex-shrink-0" />
                                    <span className="text-sm font-medium text-white">{product.name}</span>
                                    <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded" style={{ background: "rgba(62,189,239,0.12)", color: "#3ebdef" }}>Popular</span>
                                  </div>
                                  <div className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 transition-all duration-150 ${selected ? "bg-cyan-bright" : "border border-white/20"}`}>
                                    {selected && <Check className="w-3 h-3 text-navy-dark" />}
                                  </div>
                                </button>
                              );
                            })}

                            {/* Divider */}
                            <div className="mx-3 my-1" style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />
                            <div className="px-3 pt-1 pb-1">
                              <span className="text-[9px] font-bold uppercase tracking-widest text-white/30">All Products</span>
                            </div>

                            {/* Other products */}
                            {APM_PRODUCTS.filter((p) => !p.recommended).map((product) => {
                              const selected = selectedProducts.includes(product.name);
                              return (
                                <button
                                  key={product.name}
                                  type="button"
                                  onClick={() => toggleProduct(product.name)}
                                  className="w-full flex items-center justify-between px-3 py-2.5 text-left transition-colors duration-150 hover:bg-white/6"
                                >
                                  <span className="text-sm text-white/80">{product.name}</span>
                                  <div className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 transition-all duration-150 ${selected ? "bg-cyan-bright" : "border border-white/20"}`}>
                                    {selected && <Check className="w-3 h-3 text-navy-dark" />}
                                  </div>
                                </button>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* ── Message ── */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs text-white/50 font-semibold uppercase tracking-wider">Message</label>
                    </div>
                    <textarea required rows={4} value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`${inputClass} resize-none`}
                      placeholder="Describe your requirements, fleet size, or project scope…" />
                    {/* Quick-fill suggestions */}
                    <div className="flex flex-col gap-1.5 pt-0.5">
                      <span className="text-[10px] text-white/30 uppercase tracking-wider font-semibold">Quick fill:</span>
                      <div className="flex flex-col gap-1.5">
                        {MSG_SUGGESTIONS.map((s, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => setFormData({ ...formData, message: s })}
                            className="text-left text-[11px] leading-relaxed px-3 py-2 rounded-lg transition-all duration-150 hover:-translate-y-px"
                            style={{ background: "rgba(62,189,239,0.06)", border: "1px solid rgba(62,189,239,0.14)", color: "rgba(62,189,239,0.80)" }}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Captcha */}
                  <div className="flex flex-col sm:flex-row items-end gap-4">
                    <div className="flex flex-col gap-2 flex-1">
                      <label className="text-xs text-white/50 font-semibold uppercase tracking-wider">Verification Code</label>
                      <input type="text" required value={userCaptcha}
                        onChange={(e) => setUserCaptcha(e.target.value)}
                        className={inputClass} placeholder="Enter code shown" />
                    </div>
                    <div className="flex items-center gap-2">
                      <canvas ref={canvasRef} width={140} height={46}
                        className="rounded-lg border border-white/8 bg-white/5" />
                      <button type="button" onClick={generateCaptcha}
                        className="px-3 py-3 border border-white/10 hover:border-white/20 bg-white/5 rounded-lg text-xs font-semibold hover:bg-white/10 transition-colors">
                        ↻
                      </button>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                    <button
                      type="submit"
                      disabled={submitStatus === "loading"}
                      className="group px-8 py-3.5 rounded-xl bg-cyan-bright text-navy-dark font-bold text-sm hover:bg-cyan-bright/90 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-cyan-500/15 flex items-center gap-2 disabled:opacity-60 w-full sm:w-auto justify-center"
                    >
                      {submitStatus === "loading" ? "Sending…" : (
                        <><span>Submit Query</span><Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></>
                      )}
                    </button>
                    {submitStatus === "success" && (
                      <motion.span
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-emerald-400 text-sm font-semibold"
                      >
                        ✓ Query sent! We'll connect soon.
                      </motion.span>
                    )}
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
